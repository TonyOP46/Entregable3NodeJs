const CourseServices = require("../services/courses.services");

const getAllCourses = async(req, res)=>{
    try {
        const result = await CourseServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const getCourses = async(req, res)=>{
    try {
        const result = await CourseServices.getAllCourses()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const createCourses = async(req, res)=>{
    try {
        const newCourses = req.body;
        const result = await CourseServices.add(newCourses)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const editCourses = async(req, res)=>{
    try {
        const { id }= req.params;
        const { description } = req.body;
        const course = { description}
        const result = await CourseServices.update(course, id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllCourses,
    getCourses,
    createCourses,
    editCourses,
}