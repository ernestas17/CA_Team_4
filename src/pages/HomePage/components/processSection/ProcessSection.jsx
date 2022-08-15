import TEXTS from '../../../../constants/texts';
import Button from '../../../../components/Button/Button';
import line from '../../../../assets/icons/homePage/processSection/Line.svg';
import {
  StyledProcessSection,
  StyledContainerL,
  StyledContainerR,
  StyledServiceWrapper,
  StyledIconsBox,
  StyledBigCircle,
  StyledSmallCircle,
  StyledLineBox,
  StyledTextWrapper,
} from './Process.style';

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledContainerL>
        <h2>{TEXTS.homePage.processSection.heading}</h2>
        <p>{TEXTS.homePage.processSection.paragraph}</p>
        <Button primary text={TEXTS.homePage.processSection.buttonTxt} />
      </StyledContainerL>
      <StyledContainerR>
        <StyledServiceWrapper>
          <StyledIconsBox>
            <StyledBigCircle>
              <span>{TEXTS.homePage.processSection.step1.number}</span>
              <StyledSmallCircle></StyledSmallCircle>
            </StyledBigCircle>
            <StyledLineBox>
              <img src={line} alt='line' />
            </StyledLineBox>
          </StyledIconsBox>
          <StyledTextWrapper>
            <h5>{TEXTS.homePage.processSection.step1.title}</h5>
            <p>{TEXTS.homePage.processSection.step1.text}</p>
          </StyledTextWrapper>
        </StyledServiceWrapper>

        <StyledServiceWrapper>
          <StyledIconsBox>
            <StyledBigCircle>
              <span>{TEXTS.homePage.processSection.step2.number}</span>
              <StyledSmallCircle></StyledSmallCircle>
            </StyledBigCircle>
            <StyledLineBox>
              <img src={line} alt='line' />
            </StyledLineBox>
          </StyledIconsBox>
          <StyledTextWrapper>
            <h5>{TEXTS.homePage.processSection.step2.title}</h5>
            <p>{TEXTS.homePage.processSection.step2.text}</p>
          </StyledTextWrapper>
        </StyledServiceWrapper>
        <StyledServiceWrapper>
          <StyledIconsBox>
            <StyledBigCircle>
              <span>{TEXTS.homePage.processSection.step3.number}</span>
              <StyledSmallCircle></StyledSmallCircle>
            </StyledBigCircle>
            <StyledLineBox>
              <img src={line} alt='line' />
            </StyledLineBox>
          </StyledIconsBox>
          <StyledTextWrapper>
            <h5>{TEXTS.homePage.processSection.step3.title}</h5>
            <p>{TEXTS.homePage.processSection.step3.text}</p>
          </StyledTextWrapper>
        </StyledServiceWrapper>
      </StyledContainerR>
    </StyledProcessSection>
  );
};

export default ProcessSection;
