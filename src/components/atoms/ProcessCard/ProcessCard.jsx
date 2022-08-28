import { LineIcon } from '../../../assets/icons';
import {
  StyledProcessCard,
  StyledIconsBox,
  StyledBigCircle,
  StyledSmallCircle,
  StyledLineBox,
  StyledTextWrapper,
} from './ProcessCard.style';

const ProcessCard = ({ index, title, text, line }) => {
  return (
    <StyledProcessCard>
      <StyledIconsBox>
        <StyledBigCircle>
          <span>{index <= 9 ? '0' + index : index}</span>
          <StyledSmallCircle></StyledSmallCircle>
        </StyledBigCircle>
        <StyledLineBox>{line && <LineIcon />}</StyledLineBox>
      </StyledIconsBox>
      <StyledTextWrapper>
        <h5>{title}</h5>
        <p>{text}</p>
      </StyledTextWrapper>
    </StyledProcessCard>
  );
};

export default ProcessCard;
