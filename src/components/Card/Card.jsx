import { StyledCard, StyledCardText } from './Card.style';

const Card = ({ icon, text }, props) => {
  return (
    <StyledCard
      icon={icon}
      customWidth={props.customWidth}
      customHeight={props.customHeight}>
      <img src={icon} alt='icon' />
      <StyledCardText>{text}</StyledCardText>
    </StyledCard>
  );
};

export default Card;

