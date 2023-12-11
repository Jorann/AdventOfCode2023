import * as fs from 'fs'

const input = fs.readFileSync('./input.txt', 'utf8')

const lines = input.split('\n')

let numberOut = 0

const findAndAddNumbers = (lineNumber: number, pos: number) => {}

for (const line of lines) {
  for (let i = 0; i++; i < line.length) {
    if (line[i] != '.' && !parseInt(line[i])) {
      const lineNumber = lines.indexOf(line)
      const loc = i
    }
  }
}

console.log(numberOut)
