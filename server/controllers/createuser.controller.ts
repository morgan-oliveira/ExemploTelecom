import { Request, Response } from 'express';
import { ValidateUser } from '../validators/user.validators';
import { ConvertToHashedUser } from '../services/user.services';
import { SaveUserData } from '../services/user.services';
import { User } from '../interfaces/User';
import { ZodError } from 'zod/v4';

/* 
O controller será chamado somente para validação dos dados por parte do Zod e criação e inserção
do hash da senha no Postgres, por meio do Prisma.
*/
export const CreateUser = async (req: Request, res: Response) => {

    try {
        const user: User = ValidateUser(req.body);
        const hashedUser = await ConvertToHashedUser(user);
        await SaveUserData(hashedUser);
        res.status(201).json({ message: 'Usuário criado com sucesso!' });

    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json(error.issues);
            return;
        }
        res.status(500).json({ message: 'Um erro inesperado aconteceu.' });
    }
};
