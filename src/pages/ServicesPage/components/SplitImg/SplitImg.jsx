import { StyledSplitImg } from './SplitImg.style';

const SplitImg = ({ img1, img2 }) => {
  return (
    <StyledSplitImg>
      <img src={img1} alt='img1' />
      <img src={img2} alt='img2' />
    </StyledSplitImg>
  );
};

export default SplitImg;
