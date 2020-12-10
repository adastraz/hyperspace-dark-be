const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('./auth/authenticate-middleware.js')
const authRouter = require('./auth/auth-router.js')
const usersRouter = require('./users/users-router.js')
const scheduleRouter = require('./schedule/schedule-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/schedule', scheduleRouter)
server.use('/api/users', authenticate, usersRouter)

server.get('/', (req, res) => {
    const response = ({
        message: "API is up and running!"
    })
    res.status(200).json(response)
})

module.exports = server