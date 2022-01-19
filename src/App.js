import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/checkout" element={<h1>Check out</h1>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          <Route path="*" element={<h1>error page</h1>} />
        </Routes>
        {/* Home Page */}
        {/* Checkout */}
        {/* Login */}
      </div>
    </Router>
  );
}

export default App;
