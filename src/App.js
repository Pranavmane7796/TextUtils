import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import DarkMode from "./components/DarkMode";
import Alert from "./components/Alert";
// import { useState } from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = function(message, type) {
    setalert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" home="Home" />
      {/* <Switch>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter text here✍️" />
          </Route>
        </Switch> */}
      <div className="container">
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter text here✍️" />
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;
