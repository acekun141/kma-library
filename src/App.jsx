import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AdminDashboard from "./screens/AdminDashboard";
// import boostrap styles
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact={true} path="/" element={<AdminDashboard />} />
          <Route path="*" element={<GoHome />} />
        </Routes>
      </div>
    </Router>
  );
}

const GoHome = () => <Link to="/">go home</Link>

export default App;
