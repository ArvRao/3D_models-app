const express = require('express')

const app = express()
const fileupload = require("express-fileupload");
const path = require('path')
const cors = require('cors')
const multer = require('multer')
const PORT = 5000 // Port number for backend server

app.use(express.json())

app.use(cors())

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/models')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })


app.post('/file', upload.single('file'), function (req, res) {
  res.json({})
})

// app.get("/upload", (req, res) => {
//   const newpath = __dirname + "/models/";
//   // const file = req.files.file;
//   // const filename = file.name;
// res.send(req)
// });



const modelRoutes = require('./routes/models.routes')



app.use('/api/v1', cors(), modelRoutes)

// ACCESS TO ALL MODELS THROUGH API's
app.get('/models/p1', cors(), (req, res) => {
  res.status(200).sendFile(path.join(__dirname + '/public/models/P1.glb'))
})


app.listen(PORT, (req, res) => {
  console.log(`Server running at port ${PORT}`)
})
