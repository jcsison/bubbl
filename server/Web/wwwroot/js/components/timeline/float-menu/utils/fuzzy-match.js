export const fuzzyMatch = (pattern, str) => {
  pattern = '.*' + pattern.split('').join('.*') + '.*'
  return new RegExp(pattern).test(str)
}
