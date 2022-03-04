import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRatingList() {
    const Star = ({ selected = false }) => (
        <FaStar color={selected ? "red" : "grey"} />
    );
    return [
        <Star selected={true} />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="red" />,
        <FaStar color="grey" />,
        <FaStar color="grey" />,
        <Star />,
    ];
}
