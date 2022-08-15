import TEXTS from '../../../../constants/texts';
import logo1 from '../../../../assets/icons/homePage/brandsSection/logo-1.svg';
import logo2 from '../../../../assets/icons/homePage/brandsSection/logo-2.svg';
import logo3 from '../../../../assets/icons/homePage/brandsSection/logo-3.svg';
import logo4 from '../../../../assets/icons/homePage/brandsSection/logo-4.svg';
import logo5 from '../../../../assets/icons/homePage/brandsSection/logo-5.svg';

import {
  StyledBrandsSection,
  StyledLogosContainerTop,
  StyledLogosContainerBottom,
} from './BrandsSection.style';

const BrandsSection = () => {
  return (
    <StyledBrandsSection>
      <h3>{TEXTS.homePage.brandsSection.title}</h3>
      <StyledLogosContainerTop>
        <img src={logo1} alt='logo1' />
        <img src={logo2} alt='logo2' />
        <img src={logo3} alt='logo3' />
        <img src={logo4} alt='logo4' />
        <img src={logo5} alt='logo5' />
      </StyledLogosContainerTop>
      <StyledLogosContainerBottom>
        <img src={logo1} alt='logo1' />
        <img src={logo2} alt='logo2' />
        <img src={logo3} alt='logo3' />
        <img src={logo4} alt='logo4' />
        <img src={logo5} alt='logo5' />
      </StyledLogosContainerBottom>
    </StyledBrandsSection>
  );
};

export default BrandsSection;
