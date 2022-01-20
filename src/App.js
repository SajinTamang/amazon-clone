import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
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
          element={<h1>Login page</h1>} 
          />
          <Route 
          path="*" 
          element={<h1>error page</h1>} 
          />
        </Routes>
        {/* Home Page */}
        {/* Checkout */}
        {/* Login */}
      </div>
    </Router>
  );
}

export default App;
