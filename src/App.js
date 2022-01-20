import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route 
          path="/"
           element={<Home/>} 
           />
          <Route 
          path="/checkout" 
          element={<CheckOut/>}
           />
          <Route 
          path="/login" 
          element={<Login/>} 
          />
          <Route 
          path="*" 
          element={<h1>error page</h1>} 
          />
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
