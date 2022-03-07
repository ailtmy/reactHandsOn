import "./App.css";
import DammyDataList from "./components/DammyDataList";
import FixedSizeListFromReactWindow from "./components/FixedSizeListFromReactWindow";
import GitHubUserPrint from "./components/GithubUser";
import ReGitHubUserPrint from "./components/ReGithubUser";
import RenderProp, { RenderEmptyComp } from "./components/RenderProp";
import ResLoadingPrint from "./components/ResLoading";
import GetUserByUseFetch from "./components/GetUserByUseFetch";
import GetUserUseFetchComp from "./components/GetUserUseFetchComp";
import UserDetails from "./components/UserDetails";
import LastGitHubUser from "./components/UserDetails";

function App() {
    return (
        <div className="App">
            {/* <GitHubUserPrint /> */}
            {/* <ReGitHubUserPrint/> */}
            {/* <ResLoadingPrint/> */}
            {/* <RenderEmptyComp /> */}
            {/* <RenderProp /> */}
            {/* <DammyDataList /> */}
            {/* <FixedSizeListFromReactWindow /> */}
            {/* <GetUserByUseFetch login={"moontahoe"} /> */}
            {/* <GetUserUseFetchComp login={"moontahoe"} /> */}
            <LastGitHubUser login={"eveporcello"} />
        </div>
    );
}

export default App;
