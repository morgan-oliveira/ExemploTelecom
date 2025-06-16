import bcrypt from 'bcrypt';
import { User, ValidatedUser } from '../interfaces/User';
import { prisma } from '../prisma/prisma';

// Cria um hash para qualquer string passada como parâmetro
export const HashPassword = async (password: string) => {
    return await bcrypt.hash(password, 8);
}

// Como recebemos um User e ele possui a senha sem hash como propriedade JSON, precisamos converter para a interface
// que possui o hash como propriedade.
export async function ConvertToHashedUser (user: User): Promise<ValidatedUser> {
    const passHash = await HashPassword(user.password);
    return {
        username: user.username,
        passHash,
    };
};

// Salva os dados do usuário no postgres.
export const SaveUserData = async (user: ValidatedUser) => {
    return await prisma.user.create({
        data: { username: user.username, passHash: user.passHash },
    });
};