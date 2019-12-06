const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const connection = require('./conf.js')
const bodyParser = require('body-parser')
const route = require("./routes/index")

const port = 4000
const app = express()

app.use(cors('*'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/giftchild", route.giftChild)
app.use("/giftlutin", route.giftLutin)

app.get('/', (req, res) => {
    res.send("C'est bientôt Noël, soyez sages!").status(200)
})

app.listen(port, err => {
    if (err){
        throw new Error('something bad happened...')
    }
    console.log(`server is listening on ${port}`)
}) 
