exports.up = function(knex) {
    return knex.schema 
        .createTable('schedule', tbl => {
            tbl.increments()
            tbl.string('opp_team')
                .notNullable()
            tbl.string('opp_teamimg')
            tbl.date('date')
                .notNullable()
            tbl.string('time')
                .notNullable()
            tbl.string('status')
                .defaultTo('pending')
            tbl.string('livestream_link')
                .defaultTo('https://www.twitch.tv/hyperspacedark')
            tbl.string('hd_score')
                .defaultTo('0')
            tbl.string('opp_team_score')
                .defaultTo('0')
            tbl.string('game')
                .notNullable()
        })
}

exports.down = function(knex) {
    knex.schema.dropTableIfExists('schedule')
}
