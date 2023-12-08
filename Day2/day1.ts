import * as fs from 'fs'

const maxRed = 12
const maxGreen = 13
const maxBlue = 14

const input = fs.readFileSync('./input.txt', 'utf8')

const lines = input.split('\n')
let numberOut = 0
for (const line of lines) {
  const numbers = line.split('').filter((c) => parseInt(c))
  if (!numbers || !numbers.length) continue
  numberOut = numberOut + parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
}

console.log(numberOut)
