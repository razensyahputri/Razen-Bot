let util = require('util')
let path = require('path')
let handler  = async (m, {conn, args, text}) => {
	conn.reply(m.chat, 'apa ajg') 
}
handler.customPrefix = /bot/i
handler.command = new RegExp
module.exports = handler