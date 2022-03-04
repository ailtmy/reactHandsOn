import React from "react";
import ColorList from "./components/ColorList";
import AddColorForm from "./components/AddColorForm";
import "./App.css";

function App() {
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}

export default App;
