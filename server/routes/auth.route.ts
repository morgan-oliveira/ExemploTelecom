import express from "express";


const router = express.Router();
router.get('/auth', authUser);
export default router;