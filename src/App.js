// Constants imports
import NAV_LINKS from './constants/navLinks';
// Assets imports
import footerLogo from './assets/images/Logo.png';
// Component imports
import FooterContacts from './components/FooterContacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <h2>Hello world</h2>
      <FooterContacts
        header={'Get in touch with us for your service'}
        phoneNr={'1800 2665 24 52'}
        address={'NH 2344 Public Square San Francisco 65368'}
        workingHours={'Monday to Friday (9:00AM to 10:00AM)'}
      />
      <Footer logo={footerLogo} name={'Finsweet'} navLinks={NAV_LINKS} />
    </>
  );
}

export default App;
