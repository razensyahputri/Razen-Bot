let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
	if (!text) throw 'teksnya goblok'
	let who
	let anjir = (text) 
	if (m.isGroup) who = m.mentionedJid[0]
	else who = m.chat
	let txt = text.replace('@' + who.split`@`[0], '').trim()
	
	conn.reply(m.chat, `${anjir}`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    }) 
	}
handler.help = ['say ']
handler.tags = ['']
handler.command = /^say$/i
handler.rowner = false
module.exports = handler