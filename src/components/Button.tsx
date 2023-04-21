import styled from "styled-components";

const colorMap = {
  brown: "#af6329",
  blue: "#2085c9",
};

const colorHoverMap = {
  brown: "#a25424",
  blue: "#296b97",
};

const colorActiveMap = {
  brown: "#c97628",
  blue: "#43b4ff",
};

const Button = styled.button<{ variant: "brown" | "blue" }>`
  all: unset;
  box-shadow: 5px 5px 10px -3px rgba(66, 68, 90, 1);
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  padding: 10px 20px;
  color: white;
  background-color: ${({ variant }) => colorMap[variant]};
  font-weight: 600;
  text-transform: uppercase;
  :hover {
    background-color: ${({ variant }) => colorHoverMap[variant]};
  }
  :active {
    background-color: ${({ variant }) => colorActiveMap[variant]};
  }
  :disabled {
    background-color: gray;
    cursor: default;
  }

  transition: 200ms linear all;
`;

export default Button;
