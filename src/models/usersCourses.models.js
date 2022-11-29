const db = require('../utils/database')
const { DataTypes } = require('sequelize')


const userCourses = db.define('users_courses',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id',
    },

});

module.exports = userCourses;