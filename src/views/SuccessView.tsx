import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const Points = styled.div`
  box-sizing: border-box;
  background-color: white;
  padding: 40px 20px;
  border-radius: 30px;
  font-size: 48px;
  font-weight: bold;
  box-shadow: 5px 5px 10px 2px rgba(66, 68, 90, 1);
  color: #4da7e4;
`;
interface ISuccessView {
  person: string;
  points: number;
}

const SuccessView = ({ person, points }: ISuccessView) => {
  return (
    <Card>
      <Header>Gratulacje!</Header>
      <Header>Za odgadnięcie hasła udało Wam się zdobyć:</Header>
      <Points>{points} pkt</Points>
      <Header>
        Musicie teraz znaleźć <u>{person}!</u>
      </Header>
    </Card>
  );
};

export default SuccessView;
