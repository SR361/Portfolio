// import React from 'react';
import Home from './pages/Home/Home';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <HelmetProvider>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                    </Routes>
                </HelmetProvider>
            </Router>
        </>
    );
}

export default App;
