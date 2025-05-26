import CustomerPlanData from './components/CustomerPlanData';
import CustomerData from './components/CustomerData';
import TicketForm from './components/TicketForm';
import './Dashboard.css';


function Dashboard() {
    return (
        <>
            <header>
                <span id='welcome-user-text'>Olá, user!</span>
            </header>
            <main className="dashboard-box">
                <div className="customer-plan-data">
                    <CustomerPlanData />
                </div>
                <div className="customer-personal-data">
                    <CustomerData />
                </div>
                <div className="ticket-form">
                    <TicketForm />
                </div>
            </main>
        </>
    );
};

export default Dashboard;