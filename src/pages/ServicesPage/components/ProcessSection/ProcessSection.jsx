import CardTop from './CardTop/CardTop';
import CardBottom from './CardBottom/CardBottom';
import SplitImg from './SplitImg/SplitImg';
import golf from '../../../../assets/images/servicesPage/processSection/Golf.jpg';
import hyunai from '../../../../assets/images/servicesPage/processSection/Hyundai.jpg';
import tires from '../../../../assets/images/servicesPage/processSection/Tires.jpg';
import nissan from '../../../../assets/images/servicesPage/processSection/Nissan.jpg';

import {
  StyledProcessSection,
  StyledTopPart,
  StyledBottomPart,
} from './ProcessSection.style';

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledTopPart>
        <CardTop />
        <SplitImg img1={golf} img2={hyunai} />
      </StyledTopPart>
      <StyledBottomPart>
        <SplitImg img1={tires} img2={nissan} />
        <CardBottom />
      </StyledBottomPart>
    </StyledProcessSection>
  );
};

export default ProcessSection;
