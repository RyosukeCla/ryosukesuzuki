const chalk = require('chalk')
const util = require('./lib/util')

const option = {
  width: 70,
  bg: '#FFF',
  font: '#333'
}

const TYPE = {
  HERO: 'hero',
  ABOUT: 'about',
  CONTACT: 'contact',
  BLANK: 'blank'
}

const cards = [
  { type: TYPE.BLANK },
  { type: TYPE.BLANK },
  {
    type: TYPE.HERO,
    name: `Ryosuke Suzuki`,
    greeting: `Hello, I'm`
  },
  { type: TYPE.BLANK },
  { type: TYPE.BLANK },
  {
    type: TYPE.ABOUT,
    title: 'About me',
    items: [
      'Software Engineer',
      'At Plaid, inc.',
      'Born in 1996.09',
    ]
  },
  { type: TYPE.BLANK },
  {
    type: TYPE.CONTACT,
    title: 'SNS',
    items: [
      { provider: 'twitter', value: '@GentleClarinet', font: '#1da1f2' },
      { provider: 'github', value: '@RyosukeCla', font: '#6e5494' }
    ]
  },
  { type: TYPE.BLANK },
  { type: TYPE.BLANK }
]

const makeCard = (cards, option) => {
  const toTheme = chalk.bgHex(option.bg).hex(option.font)
  const blank = toTheme(util.leftPad('', option.width))
  let res = []

  cards.forEach(card => {
    let line
    switch (card.type) {
      case TYPE.HERO:
        line = util.centerPad(`${card.greeting} ${chalk.bold(card.name)}`, option.width, card.greeting.length + card.name.length + 1)
        res.push(toTheme(line))
        break
      case TYPE.ABOUT:
        line = [
          util.rightPad(`${card.title}`, 34),
        ]
        card.items.forEach(item => {
          line.push(util.rightPad(` - ${item}`, 34))
        })
        line.forEach((_line) => {
          res.push(toTheme(util.centerPad(_line, option.width)))
        })
        break
      case TYPE.CONTACT:
        line = [
          util.centerPad(util.rightPad(`${card.title}`, 34), option.width),
        ]
        card.items.forEach(item => {
          const value = item.font ? chalk.hex(item.font)(item.value) : item.value
          const provider = item.font ? chalk.hex(item.font)(item.provider) : item.provider
          const padded = util.rightPad(` - ${util.rightPad(provider, 10, item.provider.length)} ${value}`, 34, 3 + 10 + 1 + item.value.length)
          line.push(util.centerPad(padded, option.width, 34))
        })
        line.forEach((_line) => {
          res.push(toTheme(_line))
        })
        break
      case TYPE.BLANK:
        res.push(blank)
        break
    }
  })

  return res.join('\n')
}

console.log(makeCard(cards, option))
