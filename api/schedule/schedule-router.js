const router = require('express').Router()

const Schedule = require('./schedule-model.js')

router.get('/', (req, res) => {
    Schedule.find()
        .then(games => res.status(200).json(games))
        .catch(err => res.status(500).json({ message: 'could not find games', err }))
})

router.get('/:game/game', (req, res) => {
    const { game } = req.params

    Schedule.findByGame(game)
        .then(games => res.status(200).json(games))
        .catch(err => res.status(500).json({ message: 'could not find games', err }))
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Schedule.findById(id)
        .then(game => res.status(200).json(game))
        .catch(err => res.status(500).json({ message: 'could not find games', err }))
})

router.put('/:id', (req, res) => {
    const { id } = req.params

    Schedule.findById(id)
    .then(game => {
        if (game) {
            Schedule.update(id, req.body)
            .then(updated => {
                res.status(200).json(updated)
        })
        } else {
            res.status(404).json({ message: 'Could not find game with given id' })
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update game' });
    })
})

router.post('/', (req, res) => {
    Schedule.add(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(200).json(err))
})

module.exports = router