const db = require('../utils/database')
const Users = require('../models/users.models')
const Courses = require('../models/courses.models')
const userCourses = require('../models/usersCourses.models')
const Categories = require('../models/categories.models')
const Videos = require('../models/videos.models')

const users =[
    {firstName: 'Brenda', lastName: 'Gonzalez', password: '4132', email: 'Brenda@hotmail.com'},
    {firstName: 'Andres', lastName: 'Mendoza', password: '4321', email: 'Andres@hotmail.com'},
    {firstName: 'Ian', lastName: 'Rosas', password: '12345', email: 'IanRosas@hotmail.com'},
    {firstName: 'Nicolas', lastName: 'Rondon', password: '4312', email: 'Nicolas@hotmail.com'}
]

const courses = [
    {title: 'Fundamentos', description: 'Aprender lo esencial en programacion', instructor: 'Brenda Gonzalez'},
    {title: 'Reactjs', description: 'Aprender a desarrollar interfaces graficas con base a lo aprendido en fundamentos', instructor: 'Andres Mendoza'},
    {title: 'Nodejs', description: 'Aprender a desarrollar la parte Backend de una aplicacion web', instructor: 'Ian Rosas'},
    {title: 'Python', description: 'Aprender a desarrollar aplicaciones web', instructor: 'Nicolas Rondon'}

]

const user_courses = [
    {userId: 1, courseId: 1},
    {userId: 2, courseId: 2},
    {userId: 3, courseId: 3},
    {userId: 4, courseId: 4}
]

const categories = [
    {name: 'Fundamentos', courseId: 1},
    {name: 'Reactjs', courseId: 2},
    {name: 'Nodejs', courseId: 3},
    {name: 'Python', courseId: 4}
]

const videos = [
    {title: 'primeros pasos para aprender JavaScripts', url: 'https://www.youtube.com/watch?v=Q9fwkpxr3Dw&ab_channel=VictorRoblesWEB', courseId: 1},
    {title: 'primeros pasos para aprender Reactjs', url: 'https://www.youtube.com/watch?v=KEpG6oTptYo&ab_channel=OscarBarajas%40gndx', courseId: 2},
    {title: 'primeros pasos para aprender Nodejs', url: 'https://www.youtube.com/watch?v=BhvLIzVL8_o&ab_channel=Fazt', courseId: 3},
    {title: 'primeros pasos para aprender Python', url: 'https://www.youtube.com/watch?v=DAdRO6ByBoU&ab_channel=LaGeekipediaDeErnesto', courseId: 4}
]


db.sync({force: true})
    .then(()=>{
        console.log('Iniciando plantacion');
        users.forEach((user)=>Users.create(user));
        setTimeout(()=>{
            courses.forEach((course)=>Courses.create(course))
        },100);
        setTimeout(()=>{
            user_courses.forEach((userCourse)=>userCourses.create(userCourse))
        },200);
        setTimeout(()=>{
            categories.forEach((category)=>Categories.create(category))
        },300);
        setTimeout(()=>{
            videos.forEach((video)=>Videos.create(video))
        },400)
    });

