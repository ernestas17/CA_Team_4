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
              <i className='fa-brands fa-facebook'></i>
            </li>
            <li>
              <i className='fa-brands fa-twitter'></i>
            </li>
            <li>
              <i className='fa-brands fa-instagram'></i>
            </li>
            <li>
              <i className='fa-brands fa-linkedin'></i>
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
