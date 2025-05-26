import CustomerPlanData from './components/CustomerPlanData';
import CustomerData from './components/CustomerData';
import TicketForm from './components/TicketForm';


function Dashboard() {
    return (
        <>
            <div className="dashboard-box">
                <span id='welcome-user-text'>Olá, user!</span>
                <div className="customer-plan-data">
                    <CustomerPlanData />
                </div>
                <div className="customer-personal-data">
                    <CustomerData />
                </div>
                <div className="ticket-form">
                    <TicketForm />
                </div>
            </div>
        </>
    );
};

export default Dashboard;