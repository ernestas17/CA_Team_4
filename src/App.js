// Constants imports
import NAV_LINKS from './constants/navLinks';
import TEXTS from './constants/texts';
// Assets imports
import footerLogo from './assets/images/Logo.png';
// Component imports
import FooterContacts from './components/FooterContacts';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Card from './components/Card';

function App() {
  return (
    <>
      <CallToAction
        heading={TEXTS.callToAction.heading}
        btnText={TEXTS.callToAction.button}
      />
      <FooterContacts
        heading={TEXTS.footerContacts.heading}
        phoneNr={TEXTS.footerContacts.phoneNr}
        address={TEXTS.footerContacts.address}
        workingHours={TEXTS.footerContacts.workingHours}
      />
      <Footer logo={footerLogo} name={TEXTS.footer.name} navLinks={NAV_LINKS} />
    </>
  );
}

export default App;
