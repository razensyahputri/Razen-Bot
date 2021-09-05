let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send4ButtonLoc(m.chat, await (await fetch(fla + 'Victrius Store')).buffer(), `
┌〔 Donasi • Emoney 〕
├ https://saweria.co/ariffb
├ https://trakteer.id/ariffb/tip
└────
`.trim(), `©Undefined Bot
© Victrius Stoee`, 'Vps', '.vps','Provider', '.provider', 'Payment', '.payment', 'Vcc', '.vcc')
handler.help = ['vicstore']
handler.tags = ['vicstore']
handler.command = /^vicstore$/i

module.exports = handler
