const express = require('express')

const app = express()
const morgan = require('morgan')
const fileupload = require("express-fileupload");
const path = require('path')
const cors = require('cors')
const multer = require('multer')
// Port number for backend server
const port = process.env.PORT || 5000;

app.use(express.json())

app.use(cors())


// setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/models')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.send('Test the API')
})


app.post('/file', upload.single('file'), function (req, res) {
  res.json({})
})


const modelRoutes = require('./routes/models.routes')



app.use('/api/v1', cors(), modelRoutes)

// ACCESS TO ALL MODELS THROUGH API's
app.get('/models/p1', cors(), (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public/models/P1.glb'))
})



app.listen(port, () => console.log(`Server is listening on port: ${port} `));