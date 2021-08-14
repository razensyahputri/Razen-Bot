let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text}) => {

  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let txt = text.replace('@' + m.sender.split`@`[0], '').trim()

  let buttons = [
  {buttonId: 'menu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 1},
  {buttonId: 'grupbot', buttonText: {displayText: 'GROUP BOT'}, type: 1}
]
  const K = {
    contentText: `Halo @${who.split('@')[0]} bla bla bla`,
    footerText: `Razen Bot`, 
    buttons: buttons,
    headerType: 4,
}

conn.reply(m.chat, ${K}, MessageType.buttonsMessage, { 
caption: RazenBot, 
footerText: `Undefined`,
"contextInfo": {
            text: 'Halo',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [who],
            }}) 
}
handler.help = ['newmenu']
handler.tags = ['main']
handler.command = /^newmenu$/
handler.rowner = true
handler.mods = true

module.exports = handler
