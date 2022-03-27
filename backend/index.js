const express = require('express')

const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(cors())

const PORT = 5000 // Port number for backend server
const modelRoutes = require('./routes/models.routes')

app.use('/api/v1', cors(), modelRoutes)

// ACCESS TO ALL MODELS THROUGH API's
app.get('/models/p1', cors(), (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public/models/P1.glb'))
})

// app.get('/api/v1/:id', (req, res) => {
//   const models = req.params.id

//   res.json({
//     message: 'success',
//     path: '/backend/public/models/' + models,
//   })
// })

app.listen(PORT, (req, res) => {
  console.log(`Server running at port ${PORT}`)
})
