import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import functions from "./helpers/helpers";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
