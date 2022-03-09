import React, { useReducer } from "react";

export const Checkbox = () => {
    const [checked, setChecked] = useReducer((checked) => !checked, false);
    return (
        <>
            <label>
                {checked ? "checked" : "not checked"}
                <input type="checkbox" value={checked} onChange={setChecked} data-testid="checkbox" />
            </label>
        </>
    );
};
