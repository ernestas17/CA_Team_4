import styled from 'styled-components';

export const StyledButtton = styled.button`
  background-color: ${(props) => (props.primary ? '#FF6433' : '#1E1B1B')};
  color: #ffffff;
  padding: 16px 40px;
  border: none;
  border-radius: 12px;
  gap: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 31.5px;
  margin: 10px;

  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }
`;
