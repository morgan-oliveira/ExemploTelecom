import { Request, Response } from 'express';
import { Customer } from '../interfaces/Customer';
import { ValidateCustomer } from '../validators/customer.validators';
import { SaveCustomerData } from '../services/customer.services';
import { ZodError } from 'zod/v4';

export const CreateCustomer = async (req: Request, res: Response) => {
    try {
        const customer: Customer = ValidateCustomer(req.body);
        await SaveCustomerData(customer);
        res.status(201).json({ message: "Cliente cadastrado com sucesso!" })
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json(error.issues);
            return;
        }
        res.status(500).json({ message: 'Um erro inesperado aconteceu.' });
    }
}