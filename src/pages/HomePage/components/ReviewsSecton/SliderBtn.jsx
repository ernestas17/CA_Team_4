import { StyledSliderBtn } from './SliderBtn.style';

const SliderBtn = ({ icon, action }) => {
  return <StyledSliderBtn onClick={() => action}>{icon}</StyledSliderBtn>;
};

export default SliderBtn;
