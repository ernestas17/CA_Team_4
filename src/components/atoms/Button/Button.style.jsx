import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? '#FF6433' : '#1E1B1B')};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  padding: 16px 40px;

  border: none;
  border-radius: 12px;

  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 31.5px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 15px rgba(100, 100, 100, 0.3);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }
`;
