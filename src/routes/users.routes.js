const { Router} = require('express')
const { getUserById, getUserCourse, createUsers, updateUsers, addCourseUser } = require('../controllers/users.controllers')

const routes = Router()

routes.get('/users/:id', getUserById)
routes.get('/users/:id/course', getUserCourse)
routes.post('/users', createUsers)
routes.put('/users/:id', updateUsers)
routes.post('/users/course/:id', addCourseUser)

module.exports = routes
