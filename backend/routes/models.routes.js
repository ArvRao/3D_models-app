const express = require('express')
const router = express.Router()
const path = require('path')

//* test route
router.get('/', (req, res) => {
  res.status(200).send('custom route')
})

//* Index file
router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../', '/public/index.html'))
})

//* ACCESS TO ALL MODELS THROUGH API's
router.get('/models/p1', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', '/public/models/P1.glb'))
})

router.get('/modelsList', (req, res) => {
  res.json([
    {
      "id": "1",
      'modelName': 'p1.glb'
    },
    {
      "id": "2",
      'modelName': 'p2.glb'
    },
    {
      "id": "3",
      'modelName': 'p3.glb',
    },
  ])
})

module.exports = router
