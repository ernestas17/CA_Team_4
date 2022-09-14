import { StyledObjectivesSection } from './ObjectivesSection.style';
import ObjectiveCard from '../../../../components/atoms/ObjectiveCard';
import OBJECTIVES from '../../../../constants/objectives';

const ObjectivesSection = () => {
  return (
    <StyledObjectivesSection>
      {OBJECTIVES.map((objective) => (
        <ObjectiveCard
          key={objective.id}
          img={objective.img}
          overlay={objective.overlay}
          title={objective.title}
          content={objective.desc}
        />
      ))}
    </StyledObjectivesSection>
  );
};

export default ObjectivesSection;
