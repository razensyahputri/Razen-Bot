global.rowner = ['6282181661561']
global.owner = ['6282181661561','6285642765747','6285267381129'] // Put your number here
global.mods = []  // Want some help?
global.prems = ['6282330205255','62895700715789','6283175886677','6282143251786','6281286893265','6283806832654','6282351664057','6287779744191','6282269929457','6289519870622','60132882691'] // Premium user has unlimited limit
global.helper = ['6283834350842']
global.ttod = []
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  myapi: 'https://testapi.io/api/Razen', 
  xteam: 'https://api.xteam.xyz', 
  vhtear: 'https://api.vhtear.com', 
  some: 'https://some-random-api.ml', 
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz', 
  zahir: 'https://zahirr-web.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zeks.xyz':'X1XZkesyWdKspzdw2lyznimvR7e', 
  'https://api.xteam.xyz':'137d94ce04abe93a', 
  'https://api.vhtear.com': 'NOT-PREMIUM', 
  'https://pencarikode.xyz': 'pais', 
  'https://zahirr-web.herokuapp.com': 'zahirgans'
}

// Sticker WM
global.packname = 'Razen Bot\~'
global.author = 'Razen'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
