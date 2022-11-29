const Categories = require("./categories.models");
const Courses = require("./courses.models");
const Users = require("./users.models");
const userCourses = require("./usersCourses.models");
const Videos = require("./videos.models");

const initModels = ()=>{
    userCourses.belongsTo(Users, {as: 'resident', foreignKey: 'user_id'})

    Users.hasMany(userCourses, {as: 'courses', foreignKey: 'user_id'})

    userCourses.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'})

    Courses.hasMany(userCourses, {as: 'courses', foreignKey: 'course_id'})
    
    Categories.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'})

    Courses.hasOne(Categories, {as: 'category', foreignKey: 'course_id'})

    Videos.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'})

    Courses.hasMany(Videos, {as: 'videos', foreignKey: 'course_id'})
};


module.exports = initModels;