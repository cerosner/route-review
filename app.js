const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.listen(PORT, () => console.log(`> I'm listening`))
