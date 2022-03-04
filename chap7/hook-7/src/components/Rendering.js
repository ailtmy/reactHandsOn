import React, { useEffect } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

const words = ["sick", "powder", "day"];

export default function Rendering() {
    useAnyKeyToRender();

    // const word = "gnar";
    // const words = ["sick", "powder", "day"];

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    return <h1>Open the console</h1>;
}
