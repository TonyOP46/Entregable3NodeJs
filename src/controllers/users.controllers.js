const UserServices = require("../services/users.services");

const getUserById = async(req, res)=>{
    try {
        const { id } = req.params;
        const result = await UserServices.getUserId(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }

}

const getUserCourse = async(req, res)=>{
    try {
        const { id } = req.params;
        const result = await UserServices.getUserCourse(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const createUsers = async (req, res)=>{
   try {
    const newUser = req.body;
    const result = await UserServices.add(newUser)
    res.status(201).json(result)
   } catch (error) {
        console.log(error);
   }
}

const updateUsers = async (req, res)=>{
    try {
        const { firstName, lastName, password} = req.body;
        const updateUser = { firstName, lastName, password}
        const { id } = req.params;
        const result = await UserServices.update(updateUser, id)
        res.status(201).json(result)
    } catch (error) {
        console.log(error);
    }
}

const addCourseUser = async (req, res)=>{
    try {
        const { userId, courseId} = req.body;
        const addCourse = { userId, courseId}
        const result = await UserServices.addUserCourse(addCourse);
        res.status(201).json({
            message: 'el curso ha sido creado'
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getUserById,
    getUserCourse,
    createUsers,
    updateUsers,
    addCourseUser,
}