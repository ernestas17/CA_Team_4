import wheelImg from '../../../../assets/images/servicesPage/servicesSection/Wheel.jpg';
import ArrowLink from '../../../../components/atoms/ArrowLink/ArrowLink';
import TEXTS from '../../../../constants/texts';
import { CARDS_SERVICE } from '../../../../constants/serviceCards';
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
        {CARDS_SERVICE.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
      </StyledContR>
    </StyledServicesSection>
  );
};

export default ServicesSection;
