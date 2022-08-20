import React from 'react';
import plusIcon from '../../../../../assets/icons/homePage/faqSection/Plus.svg';
import minusIcon from '../../../../../assets/icons/homePage/faqSection/Minus.svg';

import { useState } from 'react';

import {
  StyledAccordion,
  StyledAccordionTitle,
  StyledAccordionContent,
} from './Accortion.style';

const Accordion = ({ title, content }) => {
  // State
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordion>
      <div>
        <StyledAccordionTitle
          expanded={!isActive}
          onClick={() => setIsActive(!isActive)}>
          <h6>{title}</h6>
          <div>
            {isActive ? (
              <img src={minusIcon} alt={'minus'} />
            ) : (
              <img src={plusIcon} alt={'plus'} />
            )}
          </div>
        </StyledAccordionTitle>
        {isActive && (
          <StyledAccordionContent>
            <p> {content}</p>
          </StyledAccordionContent>
        )}
      </div>
    </StyledAccordion>
  );
};

export default Accordion;
