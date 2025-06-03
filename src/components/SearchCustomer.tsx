import LoggedHeaderComponent from "./LoggedHeaderComponent";

function SearchCustomer() {
    return (
        <>
            <LoggedHeaderComponent />
            <form action="">
                <div className="search-box">
                    <h2 id="search-box-text">Digite o CPF do cliente: </h2>
                    <input type="text" id="search-box-input" />
                </div>
            </form>

        </>
    )
}
export default SearchCustomer;