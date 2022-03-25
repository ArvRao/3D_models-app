const express = require('express')

const app = express()
const path = require('path')
app.use(express.static(__dirname + '/public'))
app.use(express.json())

const PORT = 3000 // Port number for backend server
const modelRoutes = require('./routes/models.routes')

app.use('/api/v1', modelRoutes)

// ACCESS TO ALL MODELS THROUGH API's
app.get('/models/p1', (req, res) => {
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
