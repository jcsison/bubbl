import imageFormat from './objects/image-format.json'

export const getType = content => {
  if (content.location != null) {
    if (verifyImage(content.location)) {
      return 'image'
    }

    return 'link'
  } else if (content.imageUrl != null) {
    return 'image'
  } else {
    if (content.title != null || content.description != null) {
      return 'text'
    } else {
      return 'undefined'
    }
  }
}

function getExtension(url) {
  const pattern = '.*\\.(\\w+).*'

  return url.match(pattern)
}

function verifyImage(url) {
  const extension = getExtension(url)

  if (extension != null) {
    const pattern = '^(' + imageFormat.join('|') + ')$'

    return new RegExp(pattern).test(extension[1])
  } else {
    return false
  }
}
