import TEXTS from '../../../../constants/texts';
import BRANDS from '../../../../constants/brands';
import {
  StyledBrandsSection,
  StyledLogosContainer,
} from './BrandsSection.style';

const BrandsSection = () => {
  return (
    <StyledBrandsSection>
      <h3>{TEXTS.homePage.brandsSection.title}</h3>
      <StyledLogosContainer>
        {BRANDS.map((brand) => (
          <div key={brand.id}>{brand.icon}</div>
        ))}
      </StyledLogosContainer>
    </StyledBrandsSection>
  );
};

export default BrandsSection;
