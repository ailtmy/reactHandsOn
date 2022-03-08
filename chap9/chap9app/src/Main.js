import React from "react";
import ErrorBoudary from "./ErrorBoudary";

const SiteLayout = ({ children, menu = (c) => null }) => {
    return (
        <div className="site-container">
            <div>{menu}</div>
            <div>{children}</div>
        </div>
    );
};

const Menu = () => (
    <ErrorBoudary>
        <p style={{ color: "white" }}>TODO: Build Menu</p>
    </ErrorBoudary>
);

const Callout = ({ children }) => (
    <ErrorBoudary>
        <div className="callout">{children}</div>
    </ErrorBoudary>
);

export default function Main() {
    return (
        <SiteLayout menu={<Menu />}>
            <Callout>Welcome to the site</Callout>
            <ErrorBoudary>
                <h1>TODO: Home Page</h1>
                <p>Complete the main contents for this home page</p>
            </ErrorBoudary>
        </SiteLayout>
    );
}
