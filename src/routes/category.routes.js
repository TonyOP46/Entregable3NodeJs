const { Router } = require('express');
const { createCategory, deleteCategory } = require('../controllers/category.controllers');


const categoryRoutes = Router()

categoryRoutes.post('/category', createCategory)
categoryRoutes.delete('/category/:id', deleteCategory)


module.exports = categoryRoutes;