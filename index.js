const minimist = require('minimist')
const chalk = require('chalk')
const path = require('path')
const argv = minimist(process.argv.splice(2))

var asciify = require('asciify-image');

var options = {
  fit:    'box',
  width:  13,
  height: 13
}

asciify(path.resolve(__dirname, './icon.PNG'), options, function (err, asciified) {
  if (err) throw err;
  const split = asciified.split('\n')
  const middle = parseInt(split.length / 2)
  split[middle - 4] += `        Hi! I'm ${chalk.bold.italic('Ryosuke Suzuki')}`
  split[middle - 2] += '        ## me'
  split[middle - 1] += '        - software developer / student'
  split[middle - 0] += '        - nodejs / typescript / vue / docker'
  split[middle + 2] += '        ## sns'
  split[middle + 3] += chalk.blue('        - twitter  : @GentleClarinet')
  split[middle + 4] += chalk.green('        - github   : @RyosukeCla')
  console.log(split.join('\n'))
  // console.log(asciified);
});

if (argv.v || argv.version) {

}
