import React, { useState, useEffect, useReducer } from "react";

export default function Checkbox() {
    // const [checked, setChecked] = useState(false);
    const [checked, toggle] = useReducer((checked) => !checked, false);
    const [number, setNumber] = useReducer((number, newNumber) => number + newNumber, 0)

    // function toggle() {
    //     setChecked((checked) => !checked);
    // }

    useEffect(() => {
        console.log(`checked: ${checked.toString()}`);
    }, [checked]);

    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle} />
            {checked ? "checked" : "not checked"}
            <h1 onClick={() => setNumber(1)}>{number}</h1>
        </>
    );
}
