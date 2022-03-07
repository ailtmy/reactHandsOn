import React, { useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./GitHubUser";

function App() {
    const [login, setLogin] = useState("moonhighway");
    return (
        <>
            <SearchForm value={login} onSearch={setLogin} />
            <GitHubUser login={login} />
        </>
    );
}

export default App;
