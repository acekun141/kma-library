import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AdminDashboard from "./screens/AdminDashboard";
import ThemeProvider from "./context/theme/ThemeProvider";
// import boostrap styles
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Routes>
            <Route exact={true} path="/" element={<AdminDashboard />} />
            <Route path="*" element={<GoHome />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

const GoHome = () => <Link to="/">go home</Link>

export default App;
