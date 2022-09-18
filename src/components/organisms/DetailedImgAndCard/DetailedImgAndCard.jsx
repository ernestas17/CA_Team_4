import Button from '../../atoms/Button';
import {
  StyledDetailedImgAndCard,
  StyledImg,
  StyledOverlay,
  StyledTextBox,
} from './DetailedImgAndCard.style';

const DetailedImgAndCard = ({
  heading,
  img,
  subtitle,
  title,
  text,
  btnTxt,
  path,
  date,
}) => {
  return (
    <StyledDetailedImgAndCard>
      <StyledImg img={img} />
      <StyledOverlay>
        <h1>{heading}</h1>
      </StyledOverlay>
      <StyledTextBox>
        <p>{subtitle}</p>
        <h4>{title}</h4>
        <p>{text}</p>
        <div>
          <Button primary text={btnTxt} path={path} />
          <p>{date}</p>
        </div>
      </StyledTextBox>
    </StyledDetailedImgAndCard>
  );
};

export default DetailedImgAndCard;
