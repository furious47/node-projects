require('dotenv').config()
const app = require('express')()
const db = require('./db/connect-db')
const notFound = require('./middleware/not-found');f




//middleware
app.use(notFound)

const port = process.env.PORT

const start = async ()=>{
    await db(process.env.MONGO)
    app.listen(port,()=> console.log(`Server is listening to port ${posr}...!`))
}

start()