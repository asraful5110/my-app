import { Router } from "express";
import { loginController } from "../controllers/loginController";
import { login } from "../middlewares/login";
const route = Router();

route.post('/',login,loginController);

export default route;