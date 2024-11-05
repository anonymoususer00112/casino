import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import functions from "./helpers/helpers";


function App() {
  return (
    <div className="App">
      {functions.hi() /*import and use helper function*/}
    </div>
  );
}

export default App;
