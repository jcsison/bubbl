let counter = 4

const bubbles = [
  {
    id: 1,
    title: 'test1',
    description: null,
    imageUrl: '/images/type-link.png',
    location: null,
    tags: 'test',
    type: 'text',
    uploadDate: new Date(Date.now()).toISOString(),
    userId: 1
  },
  {
    id: 2,
    title: 'test2',
    description: null,
    imageUrl: '/images/type-link.png',
    location: null,
    tags: 'test',
    type: 'text',
    uploadDate: new Date(Date.now()).toISOString(),
    userId: 1
  },
  {
    id: 3,
    title: 'test3',
    description: null,
    imageUrl: '/images/type-link.png',
    location: null,
    tags: 'test',
    type: 'text',
    uploadDate: new Date(Date.now()).toISOString(),
    userId: 1
  }
]

const UpdateContents = {
  addContent: content => {
    content.id = counter++

    bubbles.push(content)

    return new Promise((resolve, reject) => {
      resolve('200')
    })
  },

  editContent: content => {
    console.log(content)
  },

  getContents: () => {
    return new Promise((resolve, reject) => {
      resolve(bubbles)
    })
  }
}

export default UpdateContents
