import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from "react-router-dom";
import AdminDashboard from "./screens/AdminDashboard";
import ThemeProvider from "./context/theme/ThemeProvider";
import Books from "./screens/Books";
import Message from "./screens/Message";
// import boostrap styles
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Routes>
            <Route exact={true} path="/" element={<RedirectToDashboard />} />
            <Route exact={true} path="/dashboard" element={<AdminDashboard />} />
            <Route exact={true} path="/books" element={<Books />} />
            <Route exact={true} path="/message" element={<Message />} />
            <Route path="*" element={<GoHome />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

const RedirectToDashboard = () => <Navigate replace={true} to="/dashboard" />

const GoHome = () => <Link to="/">go home</Link>

export default App;
