import { Customer } from '../interfaces/Customer';
import { prisma } from '../prisma/prisma';

export const SaveCustomerData = async (customer: Customer) => {
    return await prisma.customer.create({
        data: {
            name: customer.name,
            date_of_birth: customer.date_of_birth,
            adress: customer.address,
            cpf: customer.cpf,
            plan: customer.plan
        }
    });
}