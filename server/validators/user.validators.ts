import { z, object } from 'zod/v4';
import { User } from '../interfaces/User';

export const UserZodSchema = object({ username: z.string(), password: z.string() });
export const ValidateUser = (user: User) => {
    return UserZodSchema.parse(user);
}