import styled from 'styled-components';

export const StyledCard = styled.div`
  max-width: 616px;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border: 1px solid rgba(172, 172, 172, 0.29);

  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;

  width: 100%;
  padding: 20px;

  @media screen and (min-width: 466px) {
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
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.03em;

  color: #1e1b1b;
`;

export const StyledCity = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;

  color: #939191;
`;

export const StyledText = styled.p`
  max-width: 472px;
  margin-top: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.03em;

  color: #1e1b1b;
`;
