import { UserAuth } from "./contexts/LoginContext";
import Dashboard from "./Dashboard";
import LoginComponent from "./LoginComponent";

function App() {
    const { IsLogged } = UserAuth();
    return (
        <>
            <div className="father">
                {IsLogged ? <Dashboard /> : <LoginComponent />}
            </div>
        </>
    )
};

export default App;