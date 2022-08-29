import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledCard = styled.div`
  width: ${({ customWidth }) => (customWidth ? customWidth : '100%')};
  height: ${({ customHeight }) => (customHeight ? customHeight : '150px')};
  color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: ${({ customHeight }) => (customHeight ? customHeight : '232px')};
  }

  &:hover {
    background: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};

    & img {
      filter: invert(99%) sepia(21%) saturate(2%) hue-rotate(169deg)
        brightness(115%) contrast(100%);
    }
  }
`;

export const StyledCardText = styled.p`
  ${({ theme }) => theme.title2};
  text-align: center;
  margin-top: 16px;
`;
