// import Data from './data.json'

const bubbles = new Map()

// Data.forEach(content => bubbles.set(content.id, content))

let idCount = bubbles.size

const UpdateContents = {
  addContent: content => {
    content.id = idCount

    bubbles.set(idCount++, content)

    return new Promise((resolve, reject) => {
      resolve()
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
          bubbles.set(idCount, {
            id: idCount++,
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
            resolve()
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
        data.data.children.slice(0, 20).forEach(post => {
          const image = new RegExp('.*.(jpg|png)').test(post.data.url)
            ? post.data.url
            : null

          const url =
            image != null
              ? 'https://reddit.com/' + post.data.permalink
              : post.data.url || null

          if (image != null) {
            bubbles.set(idCount, {
              id: idCount++,
              title:
                post.data.title.length > 95
                  ? post.data.title.substring(0, 95) + '...'
                  : post.data.title || null,
              description:
                post.data.selftext.length > 200
                  ? post.data.selftext.substring(0, 200) + '...'
                  : post.data.selftext || null,
              imageUrl: image,
              location: url,
              tags: 'reddit ' + subredditName,
              type: image != null && image === url ? 'image' : 'link',
              uploadDate: post.data.created_utc * 1000,
              userId: 1
            })
          }
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          resolve()
        })
      })
  },

  deleteContent: content => {
    const isDeleted = bubbles.delete(content.id)

    return new Promise((resolve, reject) => {
      if (isDeleted) {
        resolve()
      } else {
        reject(new Error('Error when deleting content.'))
      }
    })
  },

  editContent: content => {
    bubbles.set(content.id, content)

    return new Promise((resolve, reject) => {
      resolve()
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
