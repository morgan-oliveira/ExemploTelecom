import express from "express";
import {authUser} from "../controllers/auth.controller"

const router = express.Router();
router.get('/auth', authUser);
export default router;