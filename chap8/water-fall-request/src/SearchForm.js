import React from "react";
import { useInput } from "./hooks";

export default function SearchForm({ value, onSearch }) {
    const [searchProps] = useInput(value);

    const submit = (e) => {
        e.preventDefault();
        onSearch(searchProps.value);
    };

    return (
        <form onSubmit={submit}>
            <input
                text="text"
                {...searchProps}
                placeholder="login id..."
                required
            />
            <button>Search</button>
        </form>
    );
}
