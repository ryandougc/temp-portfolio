const express       = require('express')
const app           = express()
server              = require('http').Server(app)

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.redirect('/')
})

server.listen(5000)