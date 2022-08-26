import styled from 'styled-components';

export const StyledCard = styled.div`
  width: ${({ customWidth }) => (customWidth ? customWidth : '316px')};
  height: ${({ customHeight }) => (customHeight ? customHeight : '232px')};
  color: #1e1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background: #ff6433;
    color: #fff;

    & img {
      filter: invert(99%) sepia(21%) saturate(2%) hue-rotate(169deg)
        brightness(115%) contrast(100%);
    }
  }
`;

export const StyledCardText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.03em;
  margin-top: 16px;
`;
