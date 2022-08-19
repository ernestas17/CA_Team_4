import TEXTS from '../../../../constants/texts';
import { Link } from 'react-router-dom';
import NAV_LINKS from '../../../../constants/navLinks';
import wrenchIcon from '../../../../assets/icons/homePage/servicesSection/wrench.svg';
import mechanicIcon from '../../../../assets/icons/homePage/servicesSection/mechanic.svg';
import dollarIcon from '../../../../assets/icons/homePage/servicesSection/dollar.svg';
import arrowIcon from '../../../../assets/icons/homePage/servicesSection/Arrow.svg';
import Button from '../../../../components/Button/Button';
import {
  StyledServicesSection,
  StyledContainerL,
  StyledServiceWrapper,
  StyledIconCircle,
  StyledContainerR,
  StyledServiceTxtWrapper,
  StyledLink,
} from './ServicesSection.style';

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <StyledContainerL>
        <h2>{TEXTS.homePage.servicesSection.services.heading}</h2>
        <StyledServiceWrapper>
          <StyledIconCircle>
            <img src={wrenchIcon} alt='wrench' />
          </StyledIconCircle>
          <StyledServiceTxtWrapper>
            <h6>{TEXTS.homePage.servicesSection.services.service1.title}</h6>
            <p>{TEXTS.homePage.servicesSection.services.service1.text}</p>
          </StyledServiceTxtWrapper>
        </StyledServiceWrapper>
        <StyledServiceWrapper>
          <StyledIconCircle>
            <img src={mechanicIcon} alt='mechanic' />
          </StyledIconCircle>
          <StyledServiceTxtWrapper>
            <h6>{TEXTS.homePage.servicesSection.services.service1.title}</h6>
            <p>{TEXTS.homePage.servicesSection.services.service1.text}</p>
          </StyledServiceTxtWrapper>
        </StyledServiceWrapper>
        <StyledServiceWrapper>
          <StyledIconCircle>
            <img src={dollarIcon} alt='dollar' />
          </StyledIconCircle>
          <StyledServiceTxtWrapper>
            <h6>{TEXTS.homePage.servicesSection.services.service1.title}</h6>
            <p>{TEXTS.homePage.servicesSection.services.service1.text}</p>
          </StyledServiceTxtWrapper>
        </StyledServiceWrapper>
        <StyledLink>
          <Link to={NAV_LINKS[1].link}>
            {TEXTS.homePage.servicesSection.services.button.text}
          </Link>
          <img src={arrowIcon} alt='arrow' />
        </StyledLink>
      </StyledContainerL>
      <StyledContainerR>
        <h3>{TEXTS.homePage.servicesSection.form.title}</h3>
        <form action='#'>
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
        </form>
        <Button
          primary
          text={TEXTS.homePage.servicesSection.form.button.text}
        />
      </StyledContainerR>
    </StyledServicesSection>
  );
};

export default ServicesSection;
