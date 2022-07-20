// eslint-disable-next-line
import './App.css';
import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Header from "./MyComponent/Header.jsx";
import {Main} from "./MyComponent/Main.jsx";
import {Checkout} from "./MyComponent/Checkout.jsx";
import {Admin} from "./MyComponent/Admin.jsx";

function App() {
  return (
  <Router>
    <Header/>
      <Routes>
        <Route path="/" key="{page1}" element={<Main/>} />
        <Route path="/checkout/:id/:name" element={<Checkout/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
  </Router>
  );
}

export default App;
