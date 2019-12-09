const express = require("express")
const connection = require('../../conf')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Route /giftLutin").status(200)
})

//get all gifts
router.get('/getgifts', (req, res)=> {
    connection.query('SELECT * FROM gift', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de la liste de cadeaux !!`)
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })
})

//get child profile
router.get('/getchild/:id', (req, res)=> {
    const id = req.params.id
    connection.query('SELECT * FROM child WHERE child.id = ?', id, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de la liste de cadeaux !!`)
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })
})

// Update lutin_id on Gift and updtate gift_status
// req.params
router.put('/:id/:lutin_id', (req, res) => {
    const id = req.params.id
    const lutinId = req.params.lutin_id
    connection.query('UPDATE gift SET lutin_id = ?, status_id = 2 WHERE gift.id = ?', [lutinId, id, 2], (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la mise à jour du statut du cadeau !!`)
            console.log(err)
        } else {
            res.status(200).send('OK')
        }
    })
})

//updtate gift_status
router.put('/:id', (req, res) => {
    const id = req.params.id
    connection.query('UPDATE gift SET status_id = 3 WHERE gift.id = ?', id, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la mise à jour du statut du cadeau !!`)
            console.log(err)
        } else {
            res.status(200).send('OK')
        }
    })
})

//delete des cadeaux des enfants pas sages
// req.param 
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    connection.query('DELETE FROM gift WHERE gift.id = ?', id, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la suppression des cadeaux !!`)
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })
})

module.exports = router