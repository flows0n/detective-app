import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import { data } from "../data/data";

const ChooseView = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <Header>Wybierz swoją drużynę:</Header>
      {data.map((e) => {
        return (
          <Button
            variant="brown"
            key={e.id}
            onClick={() => {
              navigate(`/${e.id}`);
            }}
          >
            {e.name}
          </Button>
        );
      })}
    </Card>
  );
};

export default ChooseView;
