import React, { useEffect, useMemo, useCallback } from "react";
import { useAnyKeyToRender } from "../hooks/useAnyKeyToRender";

export default function WordCount({ children }) {
    useAnyKeyToRender();

    const words = useMemo(() => {
        const words = children.split(" ");
        return words;
    }, [children]);

    const fn = useCallback(() => {
        console.log("hello");
        console.log("world");
    },[]);

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    useEffect(() => {
        console.log("fresh render");
        fn();
    }, [fn]);

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    );
}
