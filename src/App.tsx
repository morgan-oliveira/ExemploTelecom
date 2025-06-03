import { UserAuth } from "./contexts/LoginContext";
//import Dashboard from "./Dashboard";
import LoginComponent from "./LoginComponent";
import SearchCustomer from "./components/SearchCustomer";

function App() {
    const { IsLogged } = UserAuth();
    return (
        <>
            <div className="father">
                {IsLogged ? <SearchCustomer /> : <LoginComponent />}
            </div>
        </>
    )
};

export default App;