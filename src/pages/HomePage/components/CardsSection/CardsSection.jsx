import Card from '../../../../components/atoms/Card';
import ArrowLink from '../../../../components/atoms/ArrowLink/ArrowLink';
import NAV_LINKS from '../../../../constants/navLinks';
import { CARDS_HOME } from '../../../../constants/serviceCards';
import {
  StyledCardsSection,
  StyledCardsContainer,
  StyledLinkWrapper,
} from './CardsSection.style';
import TEXTS from '../../../../constants/texts';

const CardsSection = () => {
  return (
    <StyledCardsSection>
      <h6>{TEXTS.homePage.cardsSection.subHeading}</h6>
      <h2>{TEXTS.homePage.cardsSection.heading}</h2>
      <StyledCardsContainer>
        {CARDS_HOME.map((card) => (
          <Card key={card.id} icon={card.icon} text={card.text} />
        ))}
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
