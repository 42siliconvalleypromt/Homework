function powersetrecuse(str, index, subset, res) {
  console.log('==>',str)
  if(index == str.length -1) {
    res.push(subset)
    subset += str[index]
    res.push(subset)
  } else {
    powersetrecuse(str, index +1 , subset, res)
    subset += str[index]
    powersetrecuse(str, index +1 , subset, res)

  }
  console.log(res)
  return 
}

//console.log(powersetrecuse('abcdefg', 0, '', []))

s = ''

console.log(s.length)