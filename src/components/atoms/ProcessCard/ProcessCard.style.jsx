import styled from 'styled-components';

export const StyledProcessCard = styled.div`
  width: 100%;

  display: flex;
  gap: 24px;
  align-items: baseline;
`;

export const StyledIconsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBigCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.purple};

  & span {
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    font-size: 28px;
  }
`;

export const StyledSmallCircle = styled.div`
  position: absolute;
  top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.24);
`;

export const StyledLineBox = styled.div`
  height: 71px;
  z-index: 100;
  margin-top: 15px;

  & svg {
    color: ${({ theme }) => theme.color.orange};
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & h5 {
    ${({ theme }) => theme.h5}
    margin-bottom: 8px;
  }

  & p {
    ${({ theme }) => theme.body1}
    max-width: 336px;
    color: ${({ theme }) => theme.color.black};
    opacity: 0.6;
  }
`;
