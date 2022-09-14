import styled from 'styled-components';

export const StyledTeamMember = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center top;
  background-repeat: no-repeat;

  justify-self: center;

  height: 100%;
  max-height: 432px;
  width: 100%;
  max-width: 405px;

  position: relative;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    position: absolute;
    background-color: ${({ theme }) => theme.color.lightBlack};
    bottom: 0px;
    z-index: 100;

    width: 100%;
    height: 116px;
    padding: 24px;

    & p:first-of-type {
      ${({ theme }) => theme.title2}
      color:  ${({ theme }) => theme.color.white};
    }

    & p:last-of-type {
      ${({ theme }) => theme.body2}
      color:  ${({ theme }) => theme.color.white};
      opacity: 0.7;
    }
  }
`;
