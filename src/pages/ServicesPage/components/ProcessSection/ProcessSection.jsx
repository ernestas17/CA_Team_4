import TEXTS from '../../../../constants/texts';
import checkIcon from '../../../../assets/icons/servicesPage/processSection/Check.svg';
import SplitImg from '../SplitImg/SplitImg';
import golf from '../../../../assets/images/servicesPage/processSection/Golf.jpg';
import hyunai from '../../../../assets/images/servicesPage/processSection/Hyundai.jpg';
import tires from '../../../../assets/images/servicesPage/processSection/Tires.jpg';
import nissan from '../../../../assets/images/servicesPage/processSection/Nissan.jpg';
import Button from '../../../../components/atoms/Button/Button';
import {
  StyledProcessSection,
  StyledTopPart,
  StyledCardTop,
  StyledCircle,
  StyledBottomPart,
  StyledCardBottom,
  StyledCardText,
} from './ProcessSection.style';

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledTopPart>
        <StyledCardTop>
          <h3>{TEXTS.servicesPage.processSection.card1.title}</h3>
          <ul>
            {TEXTS.servicesPage.processSection.card1.texts.map((text) => (
              <li key={text}>
                <StyledCircle>
                  <img src={checkIcon} alt='check' />
                </StyledCircle>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </StyledCardTop>
        <SplitImg img1={golf} img2={hyunai} />
      </StyledTopPart>
      <StyledBottomPart>
        <SplitImg img1={tires} img2={nissan} />
        <StyledCardBottom>
          <h3>{TEXTS.servicesPage.processSection.card2.title}</h3>
          <StyledCardText>
            {TEXTS.servicesPage.processSection.card2.content}
          </StyledCardText>
          <Button
            primary
            text={TEXTS.servicesPage.processSection.card2.btnTxt}
          />
        </StyledCardBottom>
      </StyledBottomPart>
    </StyledProcessSection>
  );
};

export default ProcessSection;
