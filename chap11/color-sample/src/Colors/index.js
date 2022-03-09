import React from "react";
import { Routes, Route } from "react-router-dom";
import AddColorForm from "./AddColorForm";
import { ColorDetails } from "./ColorDetails";
import ColorList from "./ColorList";
import { ColorProvider } from "./hooks";

export default function App() {
    return (
        <ColorProvider>
            <AddColorForm />
            <Routes>
                <Route path="/" element={<ColorList />} />
                <Route path=":id" element={<ColorDetails/>} />
            </Routes>
        </ColorProvider>
    );
}
