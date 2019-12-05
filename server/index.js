const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 4000
const connection = require('./conf.js')
const bodyParser = require('body-parser')
const route = require("./routes/index")


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/giftchild", route.giftChild)
app.use("/giftlutin", route.giftLutin)

app.get('/', (req, res) => {
    res.send("C'est bientôt Noël, soyez sages!").status(200)
})


// axios.put('http://localhost:4000/gifts/', {
//     id: this.state.id,
//     status_id: this.state.status_id
// }).then(res => console.log(res.data)) // J'aime le poulet






app.listen(port, err => {
    if (err){
        throw new Error('something bad happened...')
    }
    console.log(`server is listening on ${port}`)
}) 
