import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import { data, IRiddle } from "../data/data";
import Card from "../components/Card";
import Input, { Space } from "../components/Input";
import styled from "styled-components";
import Header, { SubHeader } from "../components/Header";
import Button from "../components/Button";
import SuccessView from "./SuccessView";
import Timer from "../components/Timer";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const Error = styled.span`
  text-align: center;
  color: #fa3f3f;
  font-weight: bold;
`;

interface ILetter {
  key: number;
  value: string;
  prompted: boolean;
}

const RiddleView = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<IRiddle>();
  const [showHint, setShowHint] = useState<boolean>(false);
  const [status, setStatus] = useState<"success" | "error" | "resolving">(
    "resolving"
  );
  const [useOneLetter, setUseOneLetter] = useState<boolean>(false);
  const [timeDone, setTimeDone] = useState<boolean>(false);
  const [letters, setLetters] = useState<ILetter[]>([]);
  const [points, setPoints] = useState<number>(3);

  useEffect(() => {
    const i = data.findIndex((e) => e.id === Number(id));
    setDetails(data[i]);
  }, []);

  const handleChange = (letter: string, index: number, prompted: boolean) => {
    if (status == "error") setStatus("resolving");
    if (letters.find((e) => e.key === index)) {
      const tmp = letters.map((e) => {
        if (e.key === index) return { ...e, value: letter, prompted: prompted };
        else return e;
      });
      setLetters(tmp);
    } else {
      setLetters((prev) => {
        return [
          ...prev,
          {
            key: index,
            value: letter ?? "",
            prompted: prompted,
          },
        ];
      });
    }
  };

  const putLetter = () => {
    if (!details) return;
    let randIndex = 0;
    do {
      randIndex = Math.floor(Math.random() * details.passwrd.length);
    } while (details.passwrd[randIndex] === " ");
    handleChange(details.passwrd[randIndex], randIndex, true);
    setUseOneLetter(true);
    setPoints((prev) => prev - 1);
  };

  const checkAnswer = () => {
    if (!details) return;
    let passsword = "";
    letters
      .sort((a, b) => {
        return a.key - b.key;
      })
      .map((e) => {
        return (passsword += e.value);
      });

    return details.passwrd.replace(" ", "").toLowerCase() ===
      passsword.toLowerCase()
      ? setStatus("success")
      : setStatus("error");
  };

  useEffect(() => {
    if (timeDone) setPoints((prev) => prev - 1);
  }, [timeDone]);

  return status === "success" ? (
    <SuccessView points={points} person={details?.person ?? ""} />
  ) : (
    <Card>
      <Timer timeInMinutes={5} setTimeDone={setTimeDone} />
      <Header>{details?.name.toUpperCase()} - Zgadnijcie hasło:</Header>
      <SubHeader>
        Za zgadnięcie hasła można otrzymać maksymalnie 3pkt!
      </SubHeader>
      <Row id="inputs">
        {details?.passwrd.split("").map((e, k) => {
          const exist = letters.find((e) => e.key === k);
          return e === " " ? (
            <Space key="k" />
          ) : (
            <Input
              autoFocus={k === 0}
              key={k}
              type="text"
              id={`txt` + k}
              tabIndex={k}
              maxLength={1}
              value={exist?.value}
              disabled={exist?.prompted}
              onChange={(i) => {
                i.target.value = i.target.value.substring(0, 1);
                handleChange(i.target.value, k, false);

                if (i.target.maxLength === i.target.value.length) {
                  document.getElementById(`txt` + (k + 1))?.focus();
                }
              }}
              onKeyDown={(e) => {
                if (
                  (e.key === "Backspace" || e.key === "Delete") &&
                  (!exist || exist.value === "")
                ) {
                  handleChange("", k, false);
                  document.getElementById(`txt` + (k - 1))?.focus();
                }
              }}
            />
          );
        })}
      </Row>
      {status === "error" && (
        <Error>Niestety błędne hasło. Spróbuj jeszcze raz :(</Error>
      )}

      {showHint && (
        <p>
          <b>
            <i>Podpowiedź:</i>{" "}
          </b>
          {details?.hint}
        </p>
      )}
      <Button variant="brown" onClick={() => checkAnswer()}>
        Sprawdź odpowiedź
      </Button>
      <Row>
        <Button
          variant="blue"
          onClick={() => {
            setShowHint(true);
            setPoints((prev) => prev - 1);
          }}
          disabled={showHint}
        >
          Wyświetl podpowiedź (-1pkt)
        </Button>
        <Button variant="blue" disabled={useOneLetter} onClick={putLetter}>
          podstaw jedną literę (-1pkt)
        </Button>
      </Row>
    </Card>
  );
};

export default RiddleView;
