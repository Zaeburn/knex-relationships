exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('age')
    table.string('website_url')
    table.string('avatar_url')
    table.string('location')
  })
}

exports.down = (knex, Promise) => {
  return knex.scheme.dropTable('profiles')
}
