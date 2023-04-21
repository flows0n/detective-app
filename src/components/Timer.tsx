import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { ReactComponent as ClockIcon } from "../assets/timer.svg";
import styled from "styled-components";

const SClockIcon = styled(ClockIcon)`
  width: 30px;
  height: auto;
`;

const Flex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: end;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background-color: #000;
  padding: 4px 8px;
  border-radius: 15px;
`;

interface ITimer {
  timeInMinutes: number;
  setTimeDone: Dispatch<SetStateAction<boolean>>;
}

const Timer = ({ timeInMinutes, setTimeDone }: ITimer) => {
  const [delay, setDelay] = useState(timeInMinutes * 60);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
      setTimeDone(true);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Flex>
      <Wrapper>
        <SClockIcon />
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Wrapper>
    </Flex>
  );
};

export default Timer;
