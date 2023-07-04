import styled from "styled-components";
export const ExitBtnStyle = styled.button `
  display: block;
  font-size: 27px;
  padding: 0;
  border: 0;
  background-color: unset;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  transition: all 0.1s ease-in-out;
  background-color: #c2c2c21e;
  
  &:hover {
    background-color: #c2c2c243;
  }
  &:active {
    background-color: #c2c2c27f;
  }
`;
