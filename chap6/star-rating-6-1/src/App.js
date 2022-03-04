import './App.css';
import StarRating from './components/StarRating';
// import StarRatingList from './components/StarRatingList';

function App() {
  return (
    <div className="App">
      {/* <StarRatingList/> */}
      <br/>
      <StarRating style={{backgroundColor: "lightblue"}} onDoubleClick = {e => alert("double click")}/>
    </div>
  );
}

export default App;
