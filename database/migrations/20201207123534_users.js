exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('username', 25)
                .notNullable()
                .unique()
            tbl.string('password', 30)
                .notNullable()
            tbl.string('type', 20)
                .notNullable()
                .defaultTo('player')
            tbl.string('game', 30)
                .notNullable()
        })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
}