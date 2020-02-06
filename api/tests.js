const router = require('express').Router()
const { Students, Tests } = require('../db')

router.get('/', (req, res, next) => res.json(Tests))

router.get('/top', (req, res, next) => {
  let topScore = Tests.reduce((prev, current) => prev.score > current.score ? prev : current)

  res.json(Students[topScore.studentId])
})

router.get('/:id', (req, res, next) => {
  res.json(Tests[req.params.id])
})

router.get('/:studentId/mean', (req, res, next) => {
  let studentTests = Tests.filter(test => test.studentId === Number(req.params.studentId))

  let scoreTotal = studentTests.reduce((accum, test) => {
    return accum + test.score
  }, 0)

  res.json(scoreTotal / studentTests.length)
})

router.post('/', (req, res, next) => {
  let newId = Tests.length
  let { subject, score, studentId } = req.body

  Tests.push({ id: newId, subject, score, studentId: Number(studentId) })
  res.json(Tests)
})

router.put('/:id', (req, res, next) => {
  let updateTest = Tests[req.params.id]
  let { subject, score, studentId } = req.body

  if (subject) updateTest.subject = subject
  if (score) updateTest.score = score
  if (studentId) updateTest.studentId = studentId

  res.json(Tests)
})

router.delete('/:id', (req, res, next) => {
  Tests.splice(req.params.id, 1)

  res.json(Tests)
})

module.exports = router
