import CustomerPlanData from './components/CustomerPlanData';
import CustomerData from './components/CustomerData';
import TicketForm from './components/TicketForm';
import './Dashboard.css';
import { UserAuth } from './contexts/LoginContext';


function Dashboard() {
    const { Logout } = UserAuth()
    return (
        <>
            <header>
                <div className='header-user'>
                    <span id='welcome-user-text'>Olá, user!</span><br />
                    <span id='logout' onClick={Logout}>Sair</span>
                </div>
            </header>
            <main className="dashboard-box">
                <div className="customer-plan-data">
                    <CustomerPlanData />
                </div>
                <div className="customer-personal-data">
                    <CustomerData />
                </div>
            </main>
            <div className='ticket-father-box'>
                <div className="ticket-form">
                    <TicketForm />
                </div>
            </div>

        </>
    );
};

export default Dashboard;