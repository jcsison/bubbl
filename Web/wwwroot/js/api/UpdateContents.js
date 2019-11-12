const UpdateContents = {
  addBubble: content => {
    const baseUrl = '/api/AddContent'

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

    console.log(data)

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(error => console.error(error))
  }
}

export default UpdateContents
