const express = require('express')
const initModels = require('./models/initModels')
const db = require('./utils/database')
require('dotenv').config()

const routes = require('./routes/users.routes')
const courseRoutes = require('./routes/course.routes') 
const videoRoutes = require('./routes/videos.routes')
const categoryRoutes = require('./routes/category.routes')

initModels();
const app = express()

app.use(express.json())  // sirve para que se puedan ller los datos que se mandan por post

const PORT = process.env.PORT || 8000

db.authenticate()
    .then(()=>console.log('Autenticacion exitosa'))
    .catch((error)=>console.log(error))

db.sync()
    .then(()=>console.log('Sincronizacion exitosa'))
    .catch((error)=>console.log(error))


app.use('/api/v1/', routes)
app.use('/api/v1/', courseRoutes)
app.use('/api/v1', videoRoutes)
app.use('/api/v1', categoryRoutes)
   
app.use('/', (req, res)=>{
    console.log('Todo bien');
});



app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}` );
});