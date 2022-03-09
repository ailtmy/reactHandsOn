import React from "react";
import { render } from "@testing-library/react";
import { Home, About, Events, Products, Contact } from "./pages";

describe("pages test", () => {
    test("render Home incluede h1 textContent", () => {
        const { getByText } = render(<Home />);
        const h1 = getByText(/\[Company Website\]/);
        expect(h1).toHaveTextContent("[Company Website]");
    });

    test("render About include h1 textContent", () => {
        const { getByText } = render(<About />);
        const h1 = getByText(/\[About\]/);
        expect(h1).toHaveTextContent("[About]");
    });

    test("render Events include h1 textContent", () => {
        const { getByText } = render(<Events />);
        const h1 = getByText(/\[Events\]/);
        expect(h1).toHaveTextContent("[Events]");
    });

    test("render Products include h1 textContent", () => {
        const { getByText } = render(<Products />);
        const h1 = getByText(/\[Products\]/);
        expect(h1).toHaveTextContent("[Products]");
    });

    test("render Contact include h1 textContent", () => {
        const { getByText } = render(<Contact />);
        const h1 = getByText(/\[Contact\]/);
        expect(h1).toHaveTextContent("[Contact]");
    });
});
