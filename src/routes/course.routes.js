const { Router} = require('express');
const { getAllCourses, getCourses, createCourses, editCourses } = require('../controllers/courses.controllers');

const courseRoutes = Router()


courseRoutes.get('/courses', getAllCourses)
courseRoutes.get('/courses/category/videos', getCourses)
courseRoutes.post('/courses', createCourses)
courseRoutes.put('/courses/:id', editCourses)

module.exports = courseRoutes;