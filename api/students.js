const router = require('express').Router()
const { Students } = require('../db')

router.get('/', (req, res, next) => res.json(Students))

router.get('/:id', (req, res, next) => {
  res.json(Students[req.params.id])
})

router.post('/', (req, res, next) => {
  let newId = Students.length
  let { name } = req.body

  Students.push({ id: newId, name })
  res.json(Students)
})

router.put('/:id', (req, res, next) => {
  let updateStudent = Students[req.params.id]

  updateStudent.name = req.body.name
  Students[req.params.id] = updateStudent
  res.json(Students)
})

router.delete('/:id', (req, res, next) => {
  Students.splice(req.params.id, 1)

  res.json(Students)
})

module.exports = router
