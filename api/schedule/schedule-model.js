const db = require('../../database/dbConfig.js')

module.exports = {
    findByGame,
    add,
    remove,
    find,
    findById,
    update
}

function find() {
    return db('schedule')
        .orderBy('date', 'asc')
}

function findByGame(game) {
    return db('schedule')
        .where({ game: game })
        .orderBy('date', 'asc')
}

async function add(schedule) {
    const [id] = await db('schedule').insert(schedule)
    return id
}

function update(id, changes){
    return db('schedule')
        .where({ id })
        .update(changes)
}

function findById(id) {
    return db('schedule')
        .where({ id })
        .first()
}

function remove(id) {
    return db('schedule')
        .where({ id: id })
        .del()
}