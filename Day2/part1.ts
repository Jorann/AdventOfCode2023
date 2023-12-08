import * as fs from 'fs'

const maxRed = 12
const maxGreen = 13
const maxBlue = 14

const input = fs.readFileSync('./input.txt', 'utf8')

const lines = input.split('\n')
let numberOut = 0
for (const line of lines) {
  const split1 = line.split(':')
  if (!split1 || split1.length !== 2) continue
  const id = parseInt(split1[0].split(' ')[1])
  const split2 = split1[1].split(';')
  let addFlag = false
  if (!split2) continue
  for (const picked of split2) {
    const splitpicks = picked.split(',')
    for (const color of splitpicks) {
      const colorsplit = color.trim().split(' ')
      switch (colorsplit[1]) {
        case 'red':
          if (parseInt(colorsplit[0]) > maxRed) addFlag = true
          break
        case 'blue':
          if (parseInt(colorsplit[0]) > maxBlue) addFlag = true
          break
        case 'green':
          if (parseInt(colorsplit[0]) > maxGreen) addFlag = true
          break
        default:
          throw new Error(`wat? ${id}: ${color}`)
      }
    }
  }
  if (!addFlag) {
    numberOut = numberOut + id
  }
}

console.log(numberOut)
