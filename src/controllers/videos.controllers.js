const VideoServices = require("../services/videos.services");


const createVideos = async(req, res)=>{
    try {
        const newVideo = req.body;
        const result = await VideoServices.add(newVideo)
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

const deleteVideos = async(req, res)=>{
    try {
        const { id } = req.params;
        const result = await VideoServices.delete(id)
        res.status(200).json({
            message: " borrado correctamente"
        })
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
    createVideos,
    deleteVideos
}