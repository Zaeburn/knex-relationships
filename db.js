const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getProfile (id, conn = connection) {
  return conn('profiles')
    .join('users', 'users.id', '=', 'profiles.user_id')
    .select(
      'profiles.user_id as profileUserID',
      'profiles.website_url as webSiteUrl',
      'profiles.avatar_url as avatarUrl',
      'profiles.age',
      'profiles.location'
    )
}
