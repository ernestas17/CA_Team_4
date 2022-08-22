import { StyledCard, StyledCardText } from './Card.style';

const Card = ({ icon, text, customWidth, customHeight }) => {
  return (
    <StyledCard
      icon={icon}
      customWidth={customWidth}
      customHeight={customHeight}>
      <img src={icon} alt='icon' />
      <StyledCardText>{text}</StyledCardText>
    </StyledCard>
  );
};

export default Card;
