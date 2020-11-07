const express = require('express')
const app = express()
const bodyParser = require('body-parser')


//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname +'public/css'))

//templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))



//routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)

app.listen(3000);