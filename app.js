const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/students', require('./api/students'))
app.use('/tests', require('./api/tests'))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
})

app.listen(PORT, () => {
  console.log(`> I'm listening (:`)
  console.log(`> http://localhost:${PORT}`)
})
