import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';


      // yeh optional hai user ki nzer khichne ke liye 
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'TextUtils - Dark runing Mode';
      // }, 3000);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const toggleMode2 = () => {
    if (mode === 'light') {
      setMode('DarkCyan');
      document.body.style.backgroundColor = '#008B8B';
      showAlert("DarkCyan mode has been enabled", "success");
      document.title = 'TextUtils - DarkCyan';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }
  const toggleMode3 = () => {
    if (mode === 'light') {
      setMode('LightSalmon');
      document.body.style.backgroundColor = '#FFA07A';
      showAlert("LightSalmon mode has been enabled", "success");
      document.title = 'TextUtils - LightSalmon';

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';

    }
  }
  return (
    <>
      <Router>

        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3} />
        <Alert alert={alert} />


        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>

            </Route>
            <Route exact path="/" element={<TextForm heading='Enter the Text to analyze' mode={mode} showAlert={showAlert} />}>

            </Route>
          </Routes>
        </div>

      </Router>


    </>
  );
}

export default App;
