import styled from 'styled-components';

export const StyledArrowLink = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;

  & a {
    display: flex;
    align-items: center;
    gap: 16px;

    ${({ theme }) => theme.body1}
    color: ${({ theme }) => theme.color.black};

    & svg {
      color: ${({ theme }) => theme.color.black};
    }
  }
`;
