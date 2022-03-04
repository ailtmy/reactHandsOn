// import React, { useRef } from "react";
// import React, { useState } from "react";
import React from "react";
import { useInput } from "../hooks/hook";

export default function AddColorForm({ onNewColor = (f) => f }) {
    // const txtTitle = useRef();
    // const hexColor = useRef();
    // const [title, setTitle] = useState("");
    // const [color, setColor] = useState("#000000");

    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        // const title = txtTitle.current.value;
        // const color = hexColor.current.value;
        // onNewColor(title, color);
        onNewColor(titleProps.value, colorProps.value);
        // txtTitle.current.value = "";
        // hexColor.current.value = "";
        // setTitle("");
        // setColor("");
        resetTitle();
        resetColor();
    };

    return (
        <form onSubmit={submit}>
            <input
                // ref={txtTitle}
                // value={title}
                // onChange={(event) => setTitle(event.target.value)}
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                // ref={hexColor}
                // value={color}
                // onChange={(event) => setColor(event.target.value)}
                {...colorProps}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}
