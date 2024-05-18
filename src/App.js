
// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './statics/Header';
import Footer from './statics/Footer';
import Home from './statics/Home';
import AboutUs from './statics/AboutUs';
import Dashboard from './statics/Dashboard';
import ContactUs from './statics/ContactUs';
import CompletedPage from './status/CompletedPage';
import TerminatePage from './status/TerminatePage';
import QuotaFullPage from './status/QuotaFullPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/redirect/complete" exact render={(props) => <CompletedPage {...props} />} />
            <Route path="/redirect/terminate" exact render={(props) => <TerminatePage {...props} />} />
            <Route path="/redirect/quota" exact render={(props) => <QuotaFullPage {...props} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
