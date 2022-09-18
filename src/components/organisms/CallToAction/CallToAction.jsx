import Button from '../../atoms/Button/Button';
import TEXTS from '../../../constants/texts';
import NAV_LINKS from '../../../constants/navLinks';

import {
  StyledCallToAction,
  StyledImgContainerOne,
  StyledImgContainerTwo,
  StyledAbsoluteDiv,
} from './CallToAction.style';

const CallToAction = () => {
  return (
    <StyledCallToAction>
      <StyledImgContainerOne>
        <StyledAbsoluteDiv>
          <div>
            <h3>{TEXTS.callToAction.heading}</h3>
            <Button text={TEXTS.callToAction.button} path={NAV_LINKS[4].link} />
          </div>
        </StyledAbsoluteDiv>
      </StyledImgContainerOne>
      <StyledImgContainerTwo />
    </StyledCallToAction>
  );
};

export default CallToAction;
