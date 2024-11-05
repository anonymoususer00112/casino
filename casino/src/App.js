import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import functions from "./helpers/helpers";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {useState} from "react";


function App() {
  const [balance, setBalance] = useState(100);
  return (
    <div className="App">
      <Header balance={balance}/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
