import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "blue";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  const toggleGreenMode = () => {
    if (mode === "light") {
      setMode("grey");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="MyUtils"
          mode={mode}
          toggleDarkMode={toggleDarkMode}
          toggleGreenMode={toggleGreenMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze below"
                  mode={mode}
                  toggleDarkMode={toggleDarkMode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
