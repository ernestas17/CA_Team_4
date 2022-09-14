import {
  StyledCard,
  StyledUserBox,
  StyledUserInfo,
  StyledName,
  StyledCity,
  StyledText,
} from './ReviewCard.style';

const ReviewCard = ({ img, name, city, text }) => {
  return (
    <StyledCard>
      <StyledUserBox>
        <img src={img} alt='user' />
        <StyledUserInfo>
          <StyledName>{name}</StyledName>
          <StyledCity>{city}</StyledCity>
        </StyledUserInfo>
      </StyledUserBox>
      <StyledText>{text}</StyledText>
    </StyledCard>
  );
};

export default ReviewCard;
