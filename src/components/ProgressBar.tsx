import styled from 'styled-components';

interface IProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: IProgressBarProps) {
  return (
    <Root>
      <CurrentBar $progress={progress} />
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 4px;

  background-color: lightgray;
  border-radius: 2px;
`;

const CurrentBar = styled.div<{ $progress: number }>`
  width: ${({ $progress }) => `${$progress}%`};
  height: 4px;

  background-color: lightcoral;
  border-radius: 2px;

  transition: width 0.5s ease;
`;
