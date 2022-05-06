export const isArrayType = (value) => {
  return Array.isArray(value)
}
export const isFilterNum = (value) => {
  return value.filter(item => typeof item === 'number')
}
export const isIncludesZero = value => {
  return value.includes(0)
}