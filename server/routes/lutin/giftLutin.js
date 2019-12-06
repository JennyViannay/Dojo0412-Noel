const express = require("express")
const connection = require('../../conf')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /giftLutin").status(200)
})

// put avec req.params
//Update lutin_id on Gift and updtate gift_status à 2 (=DOING)
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

//updtate gift_status à 3(DONE)
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

//get all gifts
router.get('/getgifts', (req, res)=> {
    connection.query('select * from gift', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération de la liste de cadeaux !!`)
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })
})

//delete des cadeaux des enfants pas sages
// en req.body cette fois    (les paramètres ne sont pas passés par l'URL)
router.delete('/delete', (req, res) => {
    const id = req.body.id
    connection.query('DELETE FROM gift WHERE gift.id = ?', id, (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la suppression des cadeaux !!`)
            console.log(err)
        } else {
            res.status(200).send(results)
        }
    })
})

// put avec req.body
// router.put('/gifts/', (req, res) => {
//     const id = req.body.id
//     // const updateStatus = req.body
//     const statusId = req.body.status_id
//     console.log(id, statusId)
//     connection.query('UPDATE gift SET status_id = ? WHERE gift.id = ?', [statusId, id], (err, results) => {
//         if (err) {
//             res.status(500).send(`Erreur lors de la mise à jour du statut du cadeau !!`)
//             console.log(err)
//         } else {
//             res.status(200).json(results)
//         }
//     })
// })

module.exports = router