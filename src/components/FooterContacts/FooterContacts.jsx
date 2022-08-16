import TEXTS from '../../constants/texts';

import {
  StyledFooterContacts,
  StyledWrapper,
  StyledContainer,
  StyledHeader,
  StyledIconsUl,
  StyledContactBox,
  StyledContactType,
  StyledContact,
} from './FooterContacts.style';

const FooterContacts = () => {
  return (
    <StyledFooterContacts>
      <StyledWrapper>
        <StyledContainer>
          <StyledHeader>{TEXTS.footerContacts.heading}</StyledHeader>
          <StyledIconsUl>
            <li>
              <a href='https://www.facebook.com/'>
                <i className='fa-brands fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/'>
                <i className='fa-brands fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/'>
                <i className='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </li>
          </StyledIconsUl>
        </StyledContainer>
        <StyledContainer>
          <StyledContactBox>
            <StyledContactType>
              {TEXTS.footerContacts.phone.title}
            </StyledContactType>
            <StyledContact>{TEXTS.footerContacts.phone.phoneNr}</StyledContact>
          </StyledContactBox>
          <StyledContactBox>
            <StyledContactType>
              {TEXTS.footerContacts.address.title}
            </StyledContactType>
            <StyledContact>{TEXTS.footerContacts.address.title}</StyledContact>
          </StyledContactBox>
          <StyledContactBox>
            <StyledContactType>
              {TEXTS.footerContacts.workingHours.title}
            </StyledContactType>
            <StyledContact>
              {TEXTS.footerContacts.workingHours.workingHours}
            </StyledContact>
          </StyledContactBox>
        </StyledContainer>
      </StyledWrapper>
    </StyledFooterContacts>
  );
};

export default FooterContacts;
