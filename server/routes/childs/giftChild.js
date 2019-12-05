const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /giftChild ").status(200)
})

router.post('/', (req, res) => {
    const newGift = req.body
    
    const sqlRequest = 'INSERT INTO gift SET ?'

    connection.query(sqlRequest, newGift, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de l'ajout du cadeau`)
        } else {
            res.sendStatus(200)
        }
    })
})
// get one child list
router.get('/:id_child', (req, res) => {
    const idChild = req.params.id_child
    connection.query('SELECT * FROM gift WHERE child_id = ?', idChild, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de l'affichage des cadeaux`)
        } else {
            res.status(200).json(results)
        }
    })
})

module.exports = router