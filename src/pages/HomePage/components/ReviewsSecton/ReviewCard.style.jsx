import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledCard = styled.div`
  max-width: 616px;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid rgba(172, 172, 172, 0.29);

  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;

  width: 100%;
  padding: 20px;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 72px;
  }
`;

export const StyledUserBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledName = styled.p`
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};
`;

export const StyledCity = styled.p`
  ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.color.darkGrey}; ;
`;

export const StyledText = styled.p`
  ${({ theme }) => theme.title2};
  max-width: 472px;
  margin-top: 24px;
  color: ${({ theme }) => theme.color.black};
`;
