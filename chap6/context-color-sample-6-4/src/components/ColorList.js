import React from "react";
// import { ColorContext } from "../";
import Color from "./Color";
import { useColors } from "../ColorProvider";

export default function ColorList() {
    // const { colors } = useContext(ColorContext)
    const { colors } = useColors();
    if (!colors.length) return <div>No Colors Listed.(Add a Color)</div>;
    return (
        <div>
            {colors.map((color) => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}
