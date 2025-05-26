import { UserAuth } from "./contexts/LoginContext";
import Dashboard from "./Dashboard";
import LoginComponent from "./LoginComponent";

function App() {
    const { IsLogged } = UserAuth();
    return (
        <>
            {IsLogged ? <Dashboard /> : <LoginComponent />}
        </>
    )
};

export default App;