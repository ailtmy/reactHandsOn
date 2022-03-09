//@flow
import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App(props: Props) {
    return (
        <div>
            <h1>{props.item}</h1>
            <p>Cost: {props.cost}</p>
        </div>
    );
}

const root:Object | null = document.getElementById("root");

if (root != null) {
    ReactDOM.render(<App item="jacket" cost={249} />, document.getElementById("root"));
}

type Props = {
    item: string,
    cost?: number
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
