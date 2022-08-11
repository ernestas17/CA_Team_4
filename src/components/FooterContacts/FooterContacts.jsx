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

const FooterContacts = ({ heading, phoneNr, address, workingHours }) => {
  return (
    <StyledFooterContacts>
      <StyledWrapper>
        <StyledContainer>
          <StyledHeader>{heading}</StyledHeader>
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
            <StyledContactType>Help line Number</StyledContactType>
            <StyledContact>{phoneNr}</StyledContact>
          </StyledContactBox>
          <StyledContactBox>
            <StyledContactType>Address</StyledContactType>
            <StyledContact>{address}</StyledContact>
          </StyledContactBox>
          <StyledContactBox>
            <StyledContactType>We are open</StyledContactType>
            <StyledContact>{workingHours}</StyledContact>
          </StyledContactBox>
        </StyledContainer>
      </StyledWrapper>
    </StyledFooterContacts>
  );
};

export default FooterContacts;
