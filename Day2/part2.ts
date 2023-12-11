import * as fs from 'fs'

const input = fs.readFileSync('./input.txt', 'utf8')

const max = (a: number, b: number) => (a > b ? a : b)
const lines = input.split('\n')
let numberOut = 0
for (const line of lines) {
  const split1 = line.split(':')
  if (!split1 || split1.length !== 2) continue
  const id = parseInt(split1[0].split(' ')[1])
  const split2 = split1[1].split(';')
  if (!split2) continue
  const counter = { red: 0, green: 0, blue: 0 }
  for (const picked of split2) {
    const splitpicks = picked.split(',')
    for (const color of splitpicks) {
      const colorsplit = color.trim().split(' ')
      switch (colorsplit[1]) {
        case 'red':
          counter.red = max(counter.red, parseInt(colorsplit[0]))
          break
        case 'blue':
          counter.blue = max(counter.blue, parseInt(colorsplit[0]))
          break
        case 'green':
          counter.green = max(counter.green, parseInt(colorsplit[0]))
          break
        default:
          throw new Error(`wat? ${id}: ${color}`)
      }
    }
  }

  numberOut = numberOut + counter.blue * counter.green * counter.red
}

console.log(numberOut)
