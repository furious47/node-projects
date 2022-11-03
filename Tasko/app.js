const express = require('express');
const app = express();
const tasks = require('./routes/tasko');
const db = require('./db/connect-db');
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')


// static asset
app.use(express.static('./public'))

//middleware
app.use(express.json())

//route
app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandler)


const port = 8000 || process.env.PORT

const startApp = async ()=>{
    try {
        await db(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is listening to port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

startApp()
console.log(process.env.MONGO_URI);


