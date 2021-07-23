let handler = m => m

handler.before = function (m) {
	let users = global.db.data.users[m.sender]
	let maxlimit = 100 //Max Limitnya//
	if (users.limit > maxlimit) 
	users.limit = maxlimit
	return true
	}
module.exports = handler