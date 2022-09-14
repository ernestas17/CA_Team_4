import TEXTS from '../../../constants/texts';

import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../../../assets/icons/index';
import {
  StyledFooterContacts,
  StyledWrapper,
  StyledContainer,
  StyledContactBox,
} from './FooterContacts.style';

const FooterContacts = () => {
  return (
    <StyledFooterContacts>
      <StyledWrapper>
        <StyledContainer>
          <h3>{TEXTS.footerContacts.heading}</h3>
          <ul>
            <li>
              <a href='https://www.facebook.com/'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/'>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/'>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </StyledContainer>
        <StyledContainer>
          <StyledContactBox>
            <p>{TEXTS.footerContacts.phone.title}</p>
            <p>{TEXTS.footerContacts.phone.phoneNr}</p>
          </StyledContactBox>
          <StyledContactBox>
            <p>{TEXTS.footerContacts.address.title}</p>
            <p>{TEXTS.footerContacts.address.title}</p>
          </StyledContactBox>
          <StyledContactBox>
            <p>{TEXTS.footerContacts.workingHours.title}</p>
            <p>{TEXTS.footerContacts.workingHours.workingHours}</p>
          </StyledContactBox>
        </StyledContainer>
      </StyledWrapper>
    </StyledFooterContacts>
  );
};

export default FooterContacts;
