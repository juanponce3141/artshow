const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  let cmd = args._[0] || 'help'

  if (args.version || args.v) {
    cmd = 'version'
  }

  if (args.help || args.h) {
    cmd = 'help'
  }

  console.log(cmd);

  switch (cmd) {
    case 'adduser':
    require('./cmds/adduser')(args)
    break

    case 'version':
        console.log('./cmds/version')
        break

    case 'help':
      console.log('./cmds/help')
      break

    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}