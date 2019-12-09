export const locationCheck = location => {
  const test = [location != null, !/^(\/.*)$/.test(location)]

  return Object.values(test).every(Boolean)
}
