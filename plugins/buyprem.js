let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  else who = m.chat
  let money
  let harga = 10000000
  let users = global.DATABASE._data.users[who]
  if (harga > users.money) throw 'mana uang'
  users.money -= harga
global.prems.push(`${who.split`@`[0]}`)
  m.reply(m.chat, `Berhasil Membeli untuk @${who.split`@`[0]}`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
}
handler.help = ['prem','prem @user']
handler.tags = ['money']
handler.command = /^prem$/
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler