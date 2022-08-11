import Button from '../Button/Button';

import {
  StyledCallToAction,
  StyledImgContainerOne,
  StyledImgContainerTwo,
  StyledAbsoluteDiv,
} from './CallToAction.style';

const CallToAction = ({ heading, btnText }) => {
  return (
    <StyledCallToAction>
      <StyledImgContainerOne>
        <StyledAbsoluteDiv>
          <div>
            <h3>{heading}</h3>
            <Button text={btnText} />
          </div>
        </StyledAbsoluteDiv>
      </StyledImgContainerOne>
      <StyledImgContainerTwo></StyledImgContainerTwo>
    </StyledCallToAction>
  );
};

export default CallToAction;
