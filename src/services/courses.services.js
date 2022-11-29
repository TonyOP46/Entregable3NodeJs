const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");


class CourseServices {
    static async getAll(){
        try {
            const result = Courses.findAll()
            return result
        } catch (error) {
            throw error;
        }
    }

    //Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre, de los videos solo deberás mostrar el nombre y su url

    static async getAllCourses(){
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: ['updatedAt', 'createdAt']
                },
                include: [{
                    model: Categories,
                    as: 'category',
                    attributes: ['name'],   
                },
                {
                    model: Videos,
                    as: 'videos',
                    attributes: ['title', 'url']
                },
            ]
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    static async add(newCourse){
        try {
            const result = await Courses.create(newCourse)
            return result
        } catch (error) {
            throw error;
        }
    }
    static async update(course, id){
        try {
            const result = await Courses.update(course,{
                where: {id},
            })
            return result
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CourseServices;