let handler = async m => m.reply(`

*DONASI KAK*
➸ Dana : 0857-6464-1516
➸ Gopay : 0857-6464-1516
➸ Ovo : 0857-6464-1516
➸ Premium? : *10K aja*

Donasi supaya bot terus update & Aktif
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
