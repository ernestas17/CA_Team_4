import styled from 'styled-components';

export const StyledServiceCard = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  gap: 16px;
`;
export const StyledIconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 47px;
  width: 47px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
`;

export const StyledServiceTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;

  & h6 {
    ${({ theme }) => theme.title2}
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 6px;
  }

  & p {
    ${({ theme }) => theme.body2}
    color: ${({ theme }) => theme.color.black};
    opacity: 0.6;
    max-width: 322px;
  }
`;
