import wheelImg from '../../../../assets/images/servicesPage/servicesSection/Wheel.jpg';
import ArrowLink from '../../../../components/atoms/ArrowLink/ArrowLink';
import TEXTS from '../../../../constants/texts';
import diagnosticIcon from '../../../../assets/icons/homePage/CardsSection/CarDiagnostic.svg';
import engineIcon from '../../../../assets/icons/homePage/CardsSection/engine.svg';
import bodyWorkIcon from '../../../../assets/icons/homePage/CardsSection/bodyWork.svg';
import batteryIcon from '../../../../assets/icons/homePage/CardsSection/batery.svg';
import acRepIcon from '../../../../assets/icons/homePage/CardsSection/engine.svg';

import Card from '../../../../components/atoms/Card';
import {
  StyledServicesSection,
  StyledContL,
  StyledContR,
} from './ServicesSection.styel';

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <StyledContL>
        <img src={wheelImg} alt='wheel' />
        <h3>{TEXTS.servicesPage.servicesSection.title}</h3>
        <p>{TEXTS.servicesPage.servicesSection.content}</p>
        <ArrowLink
          link={'/services/service'}
          text={TEXTS.servicesPage.servicesSection.btnTxt}
        />
      </StyledContL>
      <StyledContR>
        <Card
          icon={diagnosticIcon}
          text={TEXTS.servicesPage.servicesSection.cards[0]}
        />
        <Card
          icon={engineIcon}
          text={TEXTS.servicesPage.servicesSection.cards[1]}
        />
        <Card
          icon={bodyWorkIcon}
          text={TEXTS.servicesPage.servicesSection.cards[2]}
        />
        <Card
          icon={batteryIcon}
          text={TEXTS.servicesPage.servicesSection.cards[3]}
        />
        <Card
          icon={diagnosticIcon}
          text={TEXTS.servicesPage.servicesSection.cards[4]}
        />
        <Card
          icon={acRepIcon}
          text={TEXTS.servicesPage.servicesSection.cards[5]}
        />
      </StyledContR>
    </StyledServicesSection>
  );
};

export default ServicesSection;
