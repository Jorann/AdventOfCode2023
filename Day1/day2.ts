import * as fs from 'fs'

const wordNumberMapping = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
}
const validItems = Object.keys(wordNumberMapping).map((v) => v.toString())
const input = fs.readFileSync('./input.txt', 'utf8')

const lines = input.split('\n')
let numberOut = 0
for (const line of lines) {
  const matches: { number: number; index: number }[] = []
  validItems.forEach((val) => {
    const re = new RegExp(val, 'g')
    const hits = line.matchAll(re)
    let hit = hits.next()
    while (!hit.done) {
      matches.push({
        number: wordNumberMapping[hit.value[0]],
        index: hit.value.index,
      })
      hit = hits.next()
    }
  })
  matches.sort((a, b) => a.index - b.index)

  if (!matches || !matches.length) continue
  numberOut = numberOut + parseInt(`${matches[0].number}${matches[matches.length - 1].number}`)
}

console.log(numberOut)
