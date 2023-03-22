import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AppButton, { ButtonVersion } from './AppButton';
import ProgressBar from './ProgressBar';

export default function App() {
  const [progressPersantage, setProgressPersantage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartClick = () => setIsRunning(true);

  const handleStopClick = () => setIsRunning(false);

  useEffect(() => {
    const interval = setInterval(() => {
      isRunning &&
        setProgressPersantage((progressPersantage) =>
          progressPersantage < 100 ? progressPersantage + 1 : progressPersantage
        );
    }, 100);

    progressPersantage === 100 && clearInterval(interval);

    return () => clearInterval(interval);
  }, [progressPersantage, isRunning]);

  return (
    <Root>
      <Wrapper>
        <ProgressBar progress={progressPersantage} />
        <AppButton onClick={handleStartClick}>Старт</AppButton>
        <AppButton version={ButtonVersion.STOP} onClick={handleStopClick}>
          Стоп
        </AppButton>
      </Wrapper>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1440px;
  height: 100vh;
  padding-left: 60px;
  padding-right: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  width: 400px;
`;
