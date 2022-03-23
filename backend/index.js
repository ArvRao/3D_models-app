const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  console.log('hello')
})

app.listen(3000, (req, res) => {
  console.log(`Server running at port 3000`)
})
