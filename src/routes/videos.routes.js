const { Router } = require('express')
const { createVideos, deleteVideos } = require('../controllers/videos.controllers')

const videoRoutes = Router()

videoRoutes.post('/videos', createVideos)
videoRoutes.delete('/videos/:id', deleteVideos)

module.exports = videoRoutes;