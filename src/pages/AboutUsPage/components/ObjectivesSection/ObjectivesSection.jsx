import React from 'react';
import ObjectivesCard from '../ObjectivesCard/ObjectivesCard';
import OBJECTIVES from '../../../../constants/objectives';

import { StyledObjectivesSection } from './ObjectivesSection.style';

const ObjectivesSection = () => {
  return (
    <StyledObjectivesSection>
      {OBJECTIVES.map((objective) => (
        <ObjectivesCard
          key={objective.id}
          image={objective.img}
          color={objective.color}
          title={objective.title}
          description={objective.desc}
        />
      ))}
    </StyledObjectivesSection>
  );
};

export default ObjectivesSection;
