import styled from "styled-components";
import Image from "../assets/search.png";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: 10px;
  background-color: #4da7e4;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: 400px auto;
  background-position-x: 90%;
  background-position-y: 90%;
`;

export default Wrapper;
