let handler = async function (m, { text, usedPrefix, conn}) {
  if (!text) throw `Siapa yang mau di set premium?`
  let user = global.DATABASE._data.users[m.sender]
  if (user.premium === true) throw `Kamu Sudah Premium`
  user.premium = true
  conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Kamu kamu sekarang sudah premi`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
  }
handler.help = ['addlimit @user <amount>']
handler.tag = ['owner']
handler.command = /^setprem$/

handler.owner = 
module.exports = handler
