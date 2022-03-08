import React, { useState, Suspence, lazy, Suspense } from "react";
import "./App.css";
import Agreement from "./Agreement";
import GridLoader from "react-spinners/GridLoader";
import ErrorBoudary from "./ErrorBoudary";
// import Main from "./Main";
// import ErrorBoudary, { BreakThings } from "./ErrorBoudary";

// const Callout = ({ children }) => <div className="callout">{children}</div>;

const Main = lazy(() => import("./Main"));

const loadStatus = () => {
    console.log("load status");
    throw new Promise((resolves) => setTimeout(resolves, 3000));
};

function createResource(pending) {
    let error, responce;
    pending.then((r) => (responce = r)).catch((e) => (error = e));

    return {
        read() {
            if (error) throw error;
            if (responce) return responce;
            throw pending;
        },
    };
}

const threeSecondsToGnar = new Promise((resolves) =>
    setTimeout(() => resolves({ gnar: "gnarly!" }), 3000)
);

const resource = createResource(threeSecondsToGnar);

function Gnar() {
    const result = resource.read();
    return <h1>Gnar: {result.gnar}</h1>;
}

function Status() {
    const status = loadStatus();
    return <h1>status: {status}</h1>;
}

function App() {
    const [agree, setAgree] = useState(false);

    // if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

    return (
        <Suspense fallback={<GridLoader />}>
            <ErrorBoudary>
                {/* <Status /> */}
                <Gnar />
            </ErrorBoudary>
        </Suspense>
    );
}

export default App;
