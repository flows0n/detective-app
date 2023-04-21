import styled from "styled-components";

const Input = styled.input`
  border-radius: 15px;
  height: 40px;
  width: 40px;
  text-align: center;
  font-size: 24px;
  border: 1px solid #6d6d6d;
  background-color: white;
  text-transform: uppercase;
  :focus-visible {
    outline: 2px solid #4da7e4;
    border: 1px solid white;
  }
  :disabled {
    background-color: #e2e2e2;
  }
`;

export const Space = styled.div`
  width: 25px;
`;

export default Input;
