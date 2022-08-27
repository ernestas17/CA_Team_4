import Card from '../../../../components/atoms/Card';
import ArrowLink from '../../../../components/atoms/ArrowLink/ArrowLink';
import NAV_LINKS from '../../../../constants/navLinks';
import {
  StyledCardsSection,
  StyledCardsContainer,
  StyledLinkWrapper,
} from './CardsSection.style';
// Icons
import carDiagnosticIcon from '../../../../assets/icons/homePage/CardsSection/CarDiagnostic.svg';
import engineIcon from '../../../../assets/icons/homePage/CardsSection/engine.svg';
import wheelIcon from '../../../../assets/icons/homePage/CardsSection/wheel.svg';
import oilIcon from '../../../../assets/icons/homePage/CardsSection/oil.svg';
import bodyWorkIcon from '../../../../assets/icons/homePage/CardsSection/bodyWork.svg';
import bateryIcon from '../../../../assets/icons/homePage/CardsSection/batery.svg';
import insuranceIcon from '../../../../assets/icons/homePage/CardsSection/insurance.svg';
import wrenchIcon from '../../../../assets/icons/homePage/CardsSection/wrench.svg';

import TEXTS from '../../../../constants/texts';

const CardsSection = () => {
  return (
    <StyledCardsSection>
      <h6>{TEXTS.homePage.cardsSection.subHeading}</h6>
      <h2>{TEXTS.homePage.cardsSection.heading}</h2>
      <StyledCardsContainer>
        <Card
          icon={carDiagnosticIcon}
          text={TEXTS.homePage.cardsSection.cards.card1}
        />
        <Card
          icon={engineIcon}
          text={TEXTS.homePage.cardsSection.cards.card2}
        />
        <Card icon={wheelIcon} text={TEXTS.homePage.cardsSection.cards.card3} />
        <Card icon={oilIcon} text={TEXTS.homePage.cardsSection.cards.card4} />
        <Card
          icon={bodyWorkIcon}
          text={TEXTS.homePage.cardsSection.cards.card5}
        />
        <Card
          icon={bateryIcon}
          text={TEXTS.homePage.cardsSection.cards.card6}
        />
        <Card
          icon={insuranceIcon}
          text={TEXTS.homePage.cardsSection.cards.card7}
        />
        <Card
          icon={wrenchIcon}
          text={TEXTS.homePage.cardsSection.cards.card8}
        />
      </StyledCardsContainer>
      <StyledLinkWrapper>
        <ArrowLink
          link={NAV_LINKS[2].link}
          text={TEXTS.homePage.cardsSection.button}
        />
      </StyledLinkWrapper>
    </StyledCardsSection>
  );
};

export default CardsSection;
