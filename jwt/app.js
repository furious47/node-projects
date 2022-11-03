const express = require('express');
const db = require('./db/connect-db');
const app = express();
require('dotenv').config();
require('express-async-errors');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const {login,dashboard} = require('./controller/main');
const authMiddleware = require('./middleware/auth');


//middleware
app.use(express.json());
app.use(express.static('./public'));

//routes
app.get('/api/v1/dashboard/',authMiddleware,dashboard);
app.post('/api/v1/login/',login);


app.use(errorHandler);
app.use(notFound);


const port = 3000


const start = async ()=>{
    try {
        // await db(process.env.MONGO_URI)
        app.listen(port,()=>{
        console.log(`server is listening on port ${port}...`);
    })
    } catch (error) {
        console.log(error);
    }
}

start()
