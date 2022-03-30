const express = require('express')
const app = express()
const PORT = 3000

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '')))
}

app.listen(PORT, (req, res) => {
    console.log(`Server running at ${PORT}`)
})