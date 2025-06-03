function NewTicket() {
    //const [UserNewTicket, setUserNewTicket] = UseTicket<Ticket | null>();
    const submit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
    }
    return(
        <>
            <div className="ticket">
                <form onSubmit={submit}>
                    <span id="ticket-reason-flavor-text">Tema do chamado: </span>
                    <select id="ticket-main-reason">
                        <option value="slow">Lentidão</option>
                        <option value="intermittance">Intermitência</option>
                        <option value="fiber">Sem sinal de fibra óptica</option>
                        <option value="fixed-ip">IP Fixo</option>
                        <option value="damaged-equipment">Equipamento Danificado "(Roteador/ONT)"</option>
                    </select>
                    <select id="ticket-solution">
                        <option value="open-home-visit">Abertura de Visita Técnica</option>
                        <option value="replace-equipment">Troca de Equipamento</option>
                        <option value="wifi-config">Feita Configuração na rede Wi-Fi</option>
                        <option value="dns-config">Feita Alteração no DNS</option>
                    </select>
                    
                </form>
            </div>
        </>
    );
}
export default NewTicket;