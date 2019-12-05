const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /giftLutin").status(200)
})
// put avec req.params
router.put('/:id/:status_id', (req, res) => {
    const id = req.params.id
    // const updateStatus = req.body
    const statusId = req.params.status_id
    console.log(id, statusId)
    connection.query('UPDATE gift SET status_id = ? WHERE gift.id = ?', [statusId, id], (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la mise à jour du statut du cadeau !!`)
            console.log(err)
        } else {
            res.status(200).send('OK')
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