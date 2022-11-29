const Courses = require("../models/courses.models");
const Users = require("../models/users.models");
const userCourses = require("../models/usersCourses.models");

class UserServices{
    static async getUserId(id){
        try {
            const result = await Users.findByPk(id, {
                attributes: ['id', 'firstName', 'lastName', 'email'],
            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getUserCourse(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ['id', 'firstName', 'lastName'],
                include: {
                    model: userCourses,
                    as: 'courses',
                    attributes: ['id'],
                    include: {
                        model: Courses,
                        as: 'course',
                        attributes: ['title']
                    }  
                }
            })
            return result;
        } catch (error) {
            throw error;
        }

    }

    static async add(newUser){
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error;
        }
    }

    static async update(updateUser, id){
        try {
            const result = await Users.update(updateUser, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async addUserCourse (addCourse){
        try {
            const courseResult = await userCourses.create(addCourse)
            return courseResult;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;