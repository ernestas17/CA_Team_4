import CallToAction from '../../components/organisms/CallToAction';
import FooterContacts from '../../components/organisms/FooterContacts';
import TEXTS from '../../constants/texts';
import Sidebar from './Sidebar/Sidebar';
import Article from './Article/Article';
import {
  StyledSingleServicePage,
  StyledSection,
} from './SingleServicePage.style';
const SingleServicePage = () => {
  return (
    <StyledSingleServicePage>
      <h1>{TEXTS.singleServicePage.heading}</h1>
      <StyledSection>
        <Sidebar />
        <Article />
      </StyledSection>
      <CallToAction />
      <FooterContacts />
    </StyledSingleServicePage>
  );
};

export default SingleServicePage;
