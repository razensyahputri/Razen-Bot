let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
       let rank = ((user.owner === false) && (user.premium === false) && (user.helper === false) ) ? 'User Gratisan'
          : ((user.owner === false) && (user.premium === true) ) ? 'User Premium'
          : ((user.helper === true) && (user.premium === true)) ? 'Helper Premium'
          : ((user.helper === true) && (user.owner === true)) ? 'Helper Berbau Owner'
          : ((user.helper === true) && (user.premium === false) && (user.owner === false)) ? 'Helper Gratisan'
            : ((user.owner === true) && (user.premium === true)) ? 'Owner Bot & User Premium'
          : ((user.owner === true) && (user.premium === false)) ? 'Owner Bot'
          : ''
  user.rank = rank
  return true
}

module.exports = handler