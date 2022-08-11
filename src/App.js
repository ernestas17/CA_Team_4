// Constants imports
import NAV_LINKS from './constants/navLinks';
import TEXTS from './constants/texts';
// Assets imports
import footerLogo from './assets/icons/Logo.svg';
// Component imports
import FooterContacts from './components/FooterContacts';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
// Page imports
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <HomePage
        heading={TEXTS.homePage.sectionOne.heading}
        btnText={TEXTS.homePage.sectionOne.button}
        title={TEXTS.homePage.sectionOne.title}
        workingHours={TEXTS.homePage.sectionOne.workingHours}
        hours={TEXTS.homePage.sectionOne.hours}
        hoursSh={TEXTS.homePage.sectionOne.hoursSh}
        service={TEXTS.homePage.sectionOne.service}
        rating={TEXTS.homePage.sectionOne.rating}
      />
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
