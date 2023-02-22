const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.sendFile('src/public/html/home.html', { root: '.' })
})

module.exports = router