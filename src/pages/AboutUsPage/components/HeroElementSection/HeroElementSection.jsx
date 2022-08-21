import TEXTS from '../../../../constants/texts';
import heroImg from '../../../../assets/images/aboutUsPage/hero/Image.png';
import ImgAndCard from '../../../../components/ImgAndCard/ImgAndCard';
import { StyledHeroElemenetSection } from './StyledHeroElemenetSection.style';

const HeroElementSection = () => {
  return (
    <StyledHeroElemenetSection>
      <ImgAndCard
        img={heroImg}
        title={TEXTS.aboutUsPage.heroElementSection.title}
        text={TEXTS.aboutUsPage.heroElementSection.text}
        btnTxt={TEXTS.aboutUsPage.heroElementSection.btnTxt}
      />
    </StyledHeroElemenetSection>
  );
};

export default HeroElementSection;
