// import dependences
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
// initial express
const server = express()

server
    .use(express.urlencoded({ extended: true }))
    // files statics
    .use(express.static('public'))

    // config template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// on server
server.listen(5500)