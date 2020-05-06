const express       = require('express')
const app           = express()
const server        = require('http').Server(app)
const port          = process.env.PORT || 5000

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

server.listen(port, () => console.log(`App is running on port ${port}...`))