import React from "react";
import Color from "./Color";
import { useColors } from "./hooks";

const ColorList = () => {
    const { colors } = useColors();
    return (
        <div className="color-list">
            {colors.length === 0 ? (
                <p>NO Colors Listed. (Add a Color)</p>
            ) : (
                colors.map((color) => <Color key={color.id} {...color} />)
            )}
        </div>
    );
};

export default ColorList;
