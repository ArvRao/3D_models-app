const express = require('express')
const app = express()
const PORT = 3000

const path = require('path')

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(PORT, (err) => {
    if (err) return console.log(err)
    console.log('Server running at port: ', 3000)
})