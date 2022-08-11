import styled from 'styled-components';

export const StyledCard = styled.div`
  width: ${({ customWidth }) => (customWidth ? customWidth : '316px')};
  height: ${({ customHeight }) => (customHeight ? customHeight : '232px')};
  color: #1e1b1b;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background: #ff6433;
    color: #ffffff;
  }
`;

export const StyledCardText = styled.div`
font-style: normal
font-weight: 600;
font-size: 24px;

line-height: 36px;
text-align:center;
letter-spacing: -0.03em;

padding: 16px;
`;
