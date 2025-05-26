import { createContext, useContext, useState } from "react";

interface LoginContextType {
    IsLogged: boolean;
    Login: () => void;
    Logout: () => void;
}

export const LoginContext = createContext<LoginContextType | null>(null);

export const LoginProvider = (({ children }: {children: React.ReactNode}) => {

    const [IsLogged, setIsLogged] = useState<boolean>(false);
    const Login = () => setIsLogged(true);
    const Logout = () => setIsLogged(false);
    const value: LoginContextType = {IsLogged,Login,Logout}
    return(
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
})
export const UserAuth = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error ("Verifique o contexto, não conseguimos entender sua propriedade!")
    }
    return context;
};

