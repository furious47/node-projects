require('dotenv').config()

const db = require('./db/connect-db')
const products = require('./models/data')
const productJSON = require('./products.json')

const port = 6000

const start = async () => {
    try {
        await db(process.env.MONGOOSE_URI)
        await products.deleteMany()
        await products.create(productJSON)
        console.log('sucess');
        process.exit(0)
    
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()