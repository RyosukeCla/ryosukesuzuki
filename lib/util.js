const rightPad = (str, pad, strLen) => {
  let res = str
  const len = strLen || str.length
  for (let i = len; i < pad; i++) {
    res += ' '
  }
  return res
}

const leftPad = (str, pad, strLen) => {
  let res = ''
  const len = strLen || str.length
  for (let i = len; i < pad; i++) {
    res += ' '
  }
  return res += str
}

const centerPad = (str, width, strLen) => {
  let res = ''
  const len = strLen || str.length
  const remainder = len % 2 === 1 ? 1 : 0
  const margin = Math.trunc((width - len) / 2)
  for (let i = 0; i < margin; i++) {
    res += ' '
  }
  res += str
  for (let i = width + remainder; i > width - margin; i--) {
    res += ' '
  }
  return res
}

module.exports = {
  leftPad: leftPad,
  rightPad: rightPad,
  centerPad: centerPad
}
