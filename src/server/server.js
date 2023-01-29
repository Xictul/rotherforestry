const express = require('express')
const port = process.env.PORT || 4000
const app = express()

// EXPRESS SETUP
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))

// ROUTES //
const mainRoute = require('./routes/main')

app.use('/', mainRoute)

app.get('*', (req, res) => { return res.redirect(301, '/404') })

// EXPRESS PORT CONNECT
app.listen(port, () => console.log('https://localhost:4000'));