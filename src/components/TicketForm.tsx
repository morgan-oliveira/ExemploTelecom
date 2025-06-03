import { NewTicket } from './NewTicket';

function TicketForm() {
    const StartTicket = () => {
        return (setTicketStatus(true));
    };
    return (
        <>
            <div className="start-ticket">
                <h3 onClick={StartTicket}>Iniciar Atendimento</h3>
            </div>
        </>
    );
}

export default TicketForm;