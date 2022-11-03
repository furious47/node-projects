require('dotenv').config();
require('express-async-errors')
const express = require('express');
const app = express();
const db = require('./db/connect-db');
const errorHandler = require('./middleware/error-handler')
const notfound = require('./middleware/not-found')
const authMiddleware = require('./middleware/auth')
const authRouter = require('./routes/auth');
const jobsRouter = require('./routes/jobs');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const ratelimiter = require('express-rate-limit')

app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
); 
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(ratelimiter());



app.use(express.json());

//routes

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/jobs',authMiddleware,jobsRouter);

app.use(errorHandler);
app.use(notfound);

app.get('/',(req,res)=>{
  res.status(200).send('success da bundha')
})






const port = process.env.PORT || 3000

const start = async ()=>{
    await db(process.env.MONGO_URI);
    app.listen(port, () => console.log(`App listening on port ${port}!...`))
}

start();
console.log(process.env.MONGO_URI)

