const express = require('express')
const router = express.Router()
const path = require('path')

//* For testing
router.get('/', (req, res) => {
  res.status(200).send('custom route')
})

router.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../', '/public/index.html'))
})

//* ACCESS TO ALL MODELS THROUGH API's
router.get('/models/p1', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../', '/public/models/P1.glb'))
})

router.get('/modelsList', (req, res) => {
  res.status(200).json({
    success: true,
    'List of models': ['p1', 'p2', 'p3', 'p4'],
  })
})

module.exports = router
