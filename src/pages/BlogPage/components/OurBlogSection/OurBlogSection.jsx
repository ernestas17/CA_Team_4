import { StyledOurBlogSection } from './OurBlogSection.style';
import DetailedImgAndCard from '../../../../components/organisms/DetailedImgAndCard';
import TEXTS from '../../../../constants/texts';
import f1Img from '../../../../assets/images/blogPage/ourBlogSection/blog-f1.jpg';

const OurBlogSection = () => {
  return (
    <StyledOurBlogSection>
      <DetailedImgAndCard
        heading={TEXTS.blogPage.ourBlogSection.heading}
        img={f1Img}
        subtitle={TEXTS.blogPage.ourBlogSection.subtitle}
        title={TEXTS.blogPage.ourBlogSection.title}
        text={TEXTS.blogPage.ourBlogSection.content}
        btnTxt={TEXTS.blogPage.ourBlogSection.btnTxt}
        date={TEXTS.blogPage.ourBlogSection.date}
        path={'/blog/1'}
      />
    </StyledOurBlogSection>
  );
};

export default OurBlogSection;
