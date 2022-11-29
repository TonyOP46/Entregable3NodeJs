const db = require('../utils/database')
const { DataTypes } = require('sequelize');
const Courses = require('./courses.models');

const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
        allowNull: false, 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        field: 'course_id',
        references: {
            model: Courses,
            key: 'id',
        }
    },
});

module.exports = Categories;