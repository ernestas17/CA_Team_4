import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 22.91px 40.33px;
  border: none;
  outline: none;

  & ::placeholder {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.black};
    opacity: 0.5;
  }
`;
