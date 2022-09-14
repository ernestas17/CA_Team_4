import { StyledObjectivesSection } from './ObjectivesSection.style';
import ObjectiveCard from '../../../../components/atoms/ObjectiveCard';
import carImg from '../../../../assets/images/aboutUsPage/objectivesSection/car-1.jpg';
import engineImg from '../../../../assets/images/aboutUsPage/objectivesSection/engine.jpg';
import TEXTS from '../../../../constants/texts';

const ObjectivesSection = () => {
  return (
    <StyledObjectivesSection>
      <ObjectiveCard
        img={carImg}
        overlay={'#F85B29'}
        title={TEXTS.aboutUsPage.objectivesSection.card1.title}
        content={TEXTS.aboutUsPage.objectivesSection.card1.description}
      />
      <ObjectiveCard
        img={engineImg}
        overlay={'#000000'}
        title={TEXTS.aboutUsPage.objectivesSection.card2.title}
        content={TEXTS.aboutUsPage.objectivesSection.card1.description}
      />
      <ObjectiveCard
        img={engineImg}
        overlay={'#7443CA'}
        title={TEXTS.aboutUsPage.objectivesSection.card2.title}
        content={TEXTS.aboutUsPage.objectivesSection.card2.description}
      />
    </StyledObjectivesSection>
  );
};

export default ObjectivesSection;
