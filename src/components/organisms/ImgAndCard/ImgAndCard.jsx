import Button from '../../atoms/Button/Button';
import { StyledImgAndCard, StyledImg, StyledTextBox } from './ImgAndCard.style';

const ImgAndCard = ({ img, title, text, btnTxt, path }) => {
  return (
    <StyledImgAndCard>
      <StyledImg img={img} />
      <StyledTextBox>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button primary text={btnTxt} path={path} />
      </StyledTextBox>
    </StyledImgAndCard>
  );
};

export default ImgAndCard;
