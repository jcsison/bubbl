const UpdateContents = {
  addContent: content => {
    const url = '/api/AddContent'

    const data = {
      Id: content.id,
      Title: content.title,
      Description: content.description,
      ImageUrl: content.imageUrl,
      Location: content.location,
      Tags: content.tags,
      Type: content.type,
      UploadDate: content.uploadDate,
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

  getContents: () => {
    const url = '/api/GetContents'

    return fetch(url)
      .then(response => response.json())
      .catch(error => console.error(error))
  },

  replaceContent: content => {
    const url = '/api/EditContent'

    console.log(content)
  }
}

export default UpdateContents
