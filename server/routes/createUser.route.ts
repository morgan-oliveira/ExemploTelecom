import express from 'express';
import { CreateUser } from '../controllers/createuser.controller';

const createUserRouter = express.Router();

createUserRouter.post("/create-user", CreateUser);

export default createUserRouter;