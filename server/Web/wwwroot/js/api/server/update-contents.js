const UpdateContents = {
  addContent: content => {
    const url = '/api/AddContent'

    const data = {
      // Id: content.id,
      Title: content.title, // todo: ensure that title is not null
      Description: content.description, // todo: ensure that description is not null
      ImageUrl: content.imageUrl,
      Location: content.location,
      Tags: content.tags,
      Type: content.type,
      UploadDate: new Date(content.uploadDate).toISOString(),
      UserId: content.userId
    }

    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    return fetch(url, request).catch(error => console.error(error))
  },

  deleteContent: content => {
    const url = '/api/DeleteContent'

    console.log(content)
  },

  editContent: content => {
    const url = '/api/EditContent'

    console.log(content)
  },

  getContents: () => {
    const url = '/api/GetContents'

    return fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error))
  }
}

export default UpdateContents
