import CallToAction from '../../components/CallToAction';
import FooterContacts from '../../components/FooterContacts';

import {
  StyledSingleServicePage,
  StyledSection,
} from './SingleServicePage.style';
const SingleServicePage = () => {
  return (
    <StyledSingleServicePage>
      <StyledSection></StyledSection>
      <CallToAction />
      <FooterContacts />
    </StyledSingleServicePage>
  );
};

export default SingleServicePage;
