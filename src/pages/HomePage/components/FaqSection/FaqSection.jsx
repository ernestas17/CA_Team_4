import { StyledFaqSection } from './FaqSection.style';
import Accordion from './Accordion/Accordion';
import TEXTS from '../../../../constants/texts';

const accordionData = TEXTS.homePage.faqSection.accordionData;

const FaqSection = () => {
  return (
    <StyledFaqSection>
      <h3>{TEXTS.homePage.faqSection.heading}</h3>
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} />
      ))}
    </StyledFaqSection>
  );
};

export default FaqSection;
