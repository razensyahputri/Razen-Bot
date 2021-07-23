let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa kak yg mau dijadikan Premium?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    let user = global.db.data.users[who]
    user.premium = true
    
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. Kamu sudah masuk Database info`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['sprem *@user*']
handler.tags = ['owner']
handler.command = /^sprem$/i
handler.rowner = true
module.exports = handler