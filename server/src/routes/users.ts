import express from 'express';
import { addUser } from '../controllers/usersControllers';
import {validation,validationRes} from '../middlewares/userValidation'
const route = express.Router();


route.post('/adduser',validation,validationRes,addUser);


export default route;