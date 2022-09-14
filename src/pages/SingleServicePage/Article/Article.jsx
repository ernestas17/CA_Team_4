import React from 'react';
import TEXTS from '../../../constants/texts';
import wheelImg from '../../../assets/images/singleServicePage/Rims.jpg';
import {
  StyledArticle,
  StyledImg,
  StyledP1,
  StyledP2,
  StyledSubHeading,
  StyledP3,
  StyledLeftBorder,
  StyledP4,
} from './Article.style';
const Article = () => {
  return (
    <StyledArticle>
      <StyledImg src={wheelImg} alt='wheeel' />
      <h4>{TEXTS.singleServicePage.article.title1}</h4>
      <StyledP1>{TEXTS.singleServicePage.article.paragraph1}</StyledP1>
      <StyledP2>{TEXTS.singleServicePage.article.paragraph2}</StyledP2>
      <StyledSubHeading>
        {TEXTS.singleServicePage.article.title2}
      </StyledSubHeading>
      <StyledP3>{TEXTS.singleServicePage.article.paragraph3}</StyledP3>
      <StyledLeftBorder>
        <StyledP4>{TEXTS.singleServicePage.article.paragraph4}</StyledP4>
      </StyledLeftBorder>
    </StyledArticle>
  );
};

export default Article;
