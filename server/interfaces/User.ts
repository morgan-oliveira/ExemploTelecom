export interface User {
    username: string;
    password: string;
};

export interface ValidatedUser {
    username: string;
    passHash: string;
};