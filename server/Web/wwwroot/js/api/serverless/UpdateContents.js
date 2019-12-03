import Data from './data.json'

const bubbles = new Map()

// Data.forEach(content => bubbles.set(content.id, content))

let counter = bubbles.size + 1

const UpdateContents = {
  addContent: content => {
    content.id = counter++

    bubbles.set(counter, content)

    return new Promise((resolve, reject) => {
      resolve('200')
    })
  },

  addNews: () => {
    const storyUrl = id =>
      'https://hacker-news.firebaseio.com/v0/item/' + id + '.json'

    const topStoriesUrl =
      'https://hacker-news.firebaseio.com/v0/topstories.json'

    const fetchStories = data => data.slice(0, 20).map(id => fetchStory(id))

    const fetchStory = id => {
      return fetch(storyUrl(id))
        .then(response => response.json())
        .then(story => {
          bubbles.set(counter, {
            id: counter++,
            title: story.title || null,
            description: story.text || null,
            imageUrl: null,
            location: story.url || null,
            tags: 'hacker-news',
            type: 'link',
            uploadDate: story.time * 1000,
            userId: 1
          })
        })
    }

    return fetch(topStoriesUrl)
      .then(response => response.json())
      .then(data =>
        Promise.all(fetchStories(data)).then(() => {
          return new Promise((resolve, reject) => {
            resolve('200')
          })
        })
      )
  },

  addRedditPosts: subredditName => {
    const subredditUrl = subreddit =>
      'https://www.reddit.com/r/' + subreddit + '/hot/.json'

    return fetch(subredditUrl(subredditName))
      .then(response => response.json())
      .then(data => {
        data.data.children.slice(0, 20).map(post => {
          const image = new RegExp('.*.(jpg|png)').test(post.data.url)
            ? post.data.url
            : null

          if (image != null) {
            bubbles.set(counter, {
              id: counter++,
              title: post.data.title,
              description:
                post.data.selftext.length > 100
                  ? post.data.selftext.substring(0, 100) + '...'
                  : post.data.selftext || null,
              imageUrl: image,
              location:
                image != null
                  ? 'https://reddit.com/' + post.data.permalink
                  : post.data.url || null,
              tags: 'reddit ' + subredditName,
              type: 'link',
              uploadDate: post.data.created_utc * 1000,
              userId: 1
            })
          }
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          resolve('200')
        })
      })
  },

  editContent: content => {
    bubbles.set(content.id, content)

    return new Promise((resolve, reject) => {
      resolve('200')
    })
  },

  getContents: () => {
    const bubblesArray = Array.from(bubbles.values())

    return new Promise((resolve, reject) => {
      resolve(bubblesArray)
    })
  }
}

export default UpdateContents
