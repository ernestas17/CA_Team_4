import React from 'react';
import TEXTS from '../../../../../constants/texts';
import Button from '../../../../../components/atoms/Button/Button';
import NAV_LINKS from '../../../../../constants/navLinks';

import { StyledCardBottom, StyledCardText } from './CardBottom.style';

const CardBottom = () => {
  return (
    <StyledCardBottom>
      <h3>{TEXTS.servicesPage.processSection.card2.title}</h3>
      <StyledCardText>
        {TEXTS.servicesPage.processSection.card2.content}
      </StyledCardText>
      <Button
        primary
        text={TEXTS.servicesPage.processSection.card2.btnTxt}
        path={NAV_LINKS[4].link}
      />
    </StyledCardBottom>
  );
};

export default CardBottom;
