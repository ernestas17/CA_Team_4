// Constants imports
import NAV_LINKS from './constants/navLinks';
// Assets imports
import footerLogo from './assets/icons/footer/Logo.svg';
// Component imports
import Footer from './components/Footer';
import Header from './components/Header';
// Page imports
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
// Links
import links from './constants/navLinks';
// Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header navLinks={links} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer logo={footerLogo} navLinks={NAV_LINKS} />
    </>
  );
}

export default App;
