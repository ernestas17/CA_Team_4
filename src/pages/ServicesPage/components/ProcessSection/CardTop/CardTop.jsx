import React from 'react';
import TEXTS from '../../../../../constants/texts';
import { CheckIcon } from '../../../../../assets/icons/index';
import { StyledCardTop, StyledCircle } from './CardTop.style';

const CardTop = () => {
  return (
    <StyledCardTop>
      <h3>{TEXTS.servicesPage.processSection.card1.title}</h3>
      <ul>
        {TEXTS.servicesPage.processSection.card1.texts.map((text) => (
          <li key={text}>
            <StyledCircle>
              <CheckIcon />
            </StyledCircle>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </StyledCardTop>
  );
};

export default CardTop;
