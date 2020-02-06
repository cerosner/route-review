const router = require('express').Router()

const students = [
  { id: 1, name: 'Dan' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'John' }
]

router.get('/', (req, res, next) => res.json(students))

router.get('/:id', (req, res, next) => {
  res.json(students[req.params.id - 1])
})

router.post('/', (req, res, next) => {
  let newId = students.length + 1
  let { name } = req.body

  students.push({ newId, name })
  res.json(students)
})

router.put('/:id', (req, res, next) => {
  let updateStudent = students[req.params.id - 1]

  updateStudent.name = req.body.name
  res.json(students)
})

router.delete('/:id', (req, res, next) => {
  students.splice(req.params.id - 1, 1)

  res.json(students)
})

module.exports = router
