export const fuzzyMatch = (pattern, str) => {
  // todo: fuse.js
  pattern = '.*' + pattern.split('').join('.*') + '.*'

  return new RegExp(pattern).test(str)
}
