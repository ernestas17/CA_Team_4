import {
  StyledProcessCard,
  StyledIconsBox,
  StyledBigCircle,
  StyledSmallCircle,
  StyledLineBox,
  StyledTextWrapper,
  StyledLine,
} from './ProcessCard.style';

const ProcessCard = ({ index, title, text, line, lineLength, pWidth }) => {
  return (
    <StyledProcessCard>
      <StyledIconsBox>
        <StyledBigCircle>
          <span>{index <= 9 ? '0' + index : index}</span>
          <StyledSmallCircle />
        </StyledBigCircle>
        <StyledLineBox lineLength={lineLength}>
          {line && <StyledLine />}
        </StyledLineBox>
      </StyledIconsBox>
      <StyledTextWrapper pWidth={pWidth}>
        <h5>{title}</h5>
        <p>{text}</p>
      </StyledTextWrapper>
    </StyledProcessCard>
  );
};

export default ProcessCard;
