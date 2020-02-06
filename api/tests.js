const router = require('express').Router()

const tests = [
  { id: 1, subject: 'English', score: 78, studentId: 1 },
  { id: 2, subject: 'Math', score: 89, studentId: 1 },
  { id: 3, subject: 'History', score: 95, studentId: 1}
]

router.get('/', (req, res, next) => res.json(tests))

router.get('/:id', (req, res, next) => {
  res.json(tests[req.params.id - 1])
})

router.post('/', (req, res, next) => {
  let newId = tests.length + 1
  let { subject, score, studentId } = req.body

  tests.push({ newId, subject, score, studentId })
  res.json(tests)
})

router.put('/:id', (req, res, next) => {
  let updateTest = tests[req.params.id - 1]
  let { subject, score, studentId } = req.body

  if (subject) updateTest.subject = subject
  if (score) updateTest.score = score
  if (studentId) updateTest.studentId = studentId

  res.json(tests)
})

router.delete('/:id', (req, res, next) => {
  tests.splice(req.params.id - 1, 1)

  console.log(tests)
  res.json(tests)
})

module.exports = router
