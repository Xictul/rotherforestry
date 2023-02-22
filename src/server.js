const express = require('express')
const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))


const mainRoute = require('./routes/main')

app.use('/', mainRoute)
app.get('*', (req, res) => { return res.redirect(301, '/') })


app.listen(port, () => console.log('http://localhost:8080'))