import { object, z } from 'zod/v4';
import { Customer } from '../interfaces/Customer';

export const ValidateCPF = (cpf: string) => {
    // Modelo Zod para receber somente CPF válido, seguindo as diretrizes da Receita Federal.
    // Adaptado de Allipio Pereira via GitHub por motivos de produtividade.
    // Esse modelo foi matematicamente testado por mim.
    if (typeof cpf !== "string") return false;
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
    const cpfDigits = cpf.split("").map((el) => +el);
    const rest = (count: number): number => {
        return (((cpfDigits.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10) % 11) % 10);
    };
    return rest(10) === cpfDigits[9] && rest(11) === cpfDigits[10]; // Dígitos verificadores do CPF.
};

export const CustomerSchema = object({
    name: z.string().min(3),
    date_of_birth: z.string().min(8),
    address: z.string().min(12),
    cpf: z.string().refine(ValidateCPF, { message: "Digite um CPF válido." }),
    plan: z.string()
});
export const ValidateCustomer = (customer: Customer) => {
    return CustomerSchema.parse(customer);
}
