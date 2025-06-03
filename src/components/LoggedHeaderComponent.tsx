import { UserAuth } from "../contexts/LoginContext";
import '../Dashboard.css';

function LoggedHeaderComponent() {
    const { Logout } = UserAuth();
    return (

        <header>
            <div className='header-user'>
                <span id='welcome-user-text'>Olá, user!</span><br />
                <span id='logout' onClick={Logout}>Sair</span>
            </div>
        </header>

    );
};
export default LoggedHeaderComponent;