const categoryServices = require("../services/category.services");


const createCategory = async(req, res)=>{
    try {
        const category = req.body;
        const result = await categoryServices.create(category)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }

}

const deleteCategory = async(req, res)=>{
    try {
        const { id } = req.params;
        const result = await categoryServices.delete(id)
        res.status(200).json({
            message: "categoria eliminada"
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createCategory,
    deleteCategory,
}