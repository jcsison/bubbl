export const imageCheck = imageUrl => {
  const test = [
    imageUrl != null,
    !/^(\/images\/.*)$/.test(imageUrl),
    !/^(.*\.ytimg.com\/.*)$/.test(imageUrl)
  ]

  return Object.values(test).every(Boolean)
}
