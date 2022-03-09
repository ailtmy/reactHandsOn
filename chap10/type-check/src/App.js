import "./App.css";
import PropTypeBase from "./components/propTypes/PropTypeBase";
import Status from "./components/propTypes/Status";

function App() {
    return (
        <>
          <PropTypeBase name={"React"} using={true} />
          <Status status="Open" />
        </>
    );
}



export default App;
