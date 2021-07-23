let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, text }) => {
  if (!text) throw 'Nama lah'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let res = await fetch('https://api.zeks.xyz/api/gplaybutton?{APIKEY}&text=${text}')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Lagi Error'
  conn.sendFile(m.chat, json.url, '', 'nih bre', m)
}
handler.help = ['yutubgold']
handler.tags = ['internet']
handler.command = /^(yutubgold)$/i
module.exports = handler