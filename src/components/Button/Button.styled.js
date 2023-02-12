import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #344e41;
  font-size: 16px;
  font-weight: 700;
  color: white;
  :hover {
    background-color: #a3b18a;
    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;
