export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const camelToNormalCase = str => {
  let arr = str.split(/(?=[A-Z])/)
  arr = arr.map(w => w.charAt(0).toUpperCase() + w.slice(1))
  return arr.join(' ')
}
