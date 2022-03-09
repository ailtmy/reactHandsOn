import React from "react";
import ReactDOM from "react-dom";
import { render } from '@testing-library/react'
// import { toHaveAttribute } from '@testing-library/jest-dom'
import Star from "./Star";

// expect.extend({ toHaveAttribute })

test("renders a star", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Star />, div);
    expect(div.querySelector("svg")).toBeTruthy();
});

test("renders a star2", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Star />, div);
    expect(div.querySelector("svg")).toHaveAttribute("id", "star");
});

test("renders an h1", () => {
    //testing-library/react の クエリ関数
    const { getByText } = render(<Star/>)
    const h1 = getByText(/Great Star/)
    expect(h1).toHaveTextContent("Great Star")
})
