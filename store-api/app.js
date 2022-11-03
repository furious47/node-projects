require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const db = require('./db/connect-db');
const errorHandler = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const {getProducts,getSpecificProducts} = require('./controller/products');



//middleware
app.use(express.json());

//routes

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Store Api</h1><a href="api/products/v1">Products</a>')
})

app.get('/api/v1/',getProducts);
app.get('/api/v1/specific/',getSpecificProducts);


// app.use(errorHandler);
// app.use(notFound);


const port = process.env.PORT || 5000;

const start = async () => {
    try{
        await db(process.env.MONGOOSE_URI);
        app.listen(port,()=>{
            console.log(`Server is listening on ${port}...`);
        })
    }catch(error){
        console.log(error);
    }
}

start();