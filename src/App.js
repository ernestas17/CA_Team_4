// Constants imports
import NAV_LINKS from './constants/navLinks';
// Assets imports
import footerLogo from './assets/icons/footer/Logo.svg';
// Component imports
import FooterContacts from './components/FooterContacts';
import Footer from './components/Footer';
// Page imports
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomePage />
      <FooterContacts />
      <Footer logo={footerLogo} navLinks={NAV_LINKS} />
    </>
  );
}

export default App;
