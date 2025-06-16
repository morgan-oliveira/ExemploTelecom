import { Router } from "express";
import createCustomerRouter from "./createcustomer.route";
import createUserRouter from "./createuser.route";

const router = Router();

router.use('/', createUserRouter);
router.use('/', createCustomerRouter);

export default router;