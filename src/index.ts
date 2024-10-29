// external imports
import express,{type Express} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import parseCookie from 'cookie-parser'

// middlewares imports
import notFoundError from './middlewares/notFoundError';
import defaultError from './middlewares/defaultError';

// internal imports
import userRoute from './routes/users'
import loginRoute from './routes/login'
import { checkLogin } from './middlewares/checkLogin';

// create application
const app:Express = express();

// data parse
app.use(express.json());
app.use(parseCookie())

// dotenv config
dotenv.config();

// application port
const port: string = process.env.PORT || '4000';

// databse connection
const database_url:string = process.env.DATABASE_URL || '';
mongoose.connect(database_url)
.then(()=>{
  console.log("Database has been connected")
})
.catch(err=>{
  throw new Error(err) 
});

// routing setup

// users routes
app.use('/users',userRoute)
app.use('/login',loginRoute)

app.get('/',checkLogin,(req,res)=>{
  res.json(req.user)
})

// default error handler
app.use(notFoundError);
app.use(defaultError);

// create a expess sever
app.listen(port,()=>console.log(`Server is running on http://localhost:${port}`))