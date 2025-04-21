import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

// Montar React cuando el DOM esté listo
if (document.getElementById('app')) {
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
}
