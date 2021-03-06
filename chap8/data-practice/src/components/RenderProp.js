import React from "react";

const tahoe_peaks = [
    { name: "Freel Peak", elevation: 10891 },
    { name: "Monument Peak", elevation: 10067 },
    { name: "Pyramid Peak", elevation: 9983 },
    { name: "Mt. Tallac", elevation: 9735 },
];

function List({ data = [], renderItem, renderEmpty }) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

export function RenderEmptyComp() {
    return <List renderEmpty={<p>This list is empty</p>} />;
}

export default function RenderProp() {
    return (
        <List
            data={tahoe_peaks}
            renderEmpty={<p>This list is empty</p>}
            renderItem={(item) => (
                <>
                    {item.name} - {item.elevation.toLocaleString()}
                </>
            )}
        />
    );
}
