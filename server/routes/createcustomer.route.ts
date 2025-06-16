import express from 'express';
import { CreateCustomer } from '../controllers/createcustomer.controller';

const createCustomerRouter = express.Router();

createCustomerRouter.post('/create-customer', CreateCustomer);

export default createCustomerRouter;