import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';

// import Home from './pages/home';
import Home from './pages/compilor';


import Learn from './pages/learn';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './pages/footer';

import Faq from './pages/Faq';
import Terms from './pages/Terms_of_Service';
import Privacy from './pages/privacy_poli';

import Login from './access/login';
import Register from './access/register';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/faq" element={<Faq />} />
          <Route path="/terms-of-service" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>

        <Footer />
        
    </BrowserRouter>
  </StrictMode>
);