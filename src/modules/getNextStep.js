import inputToUser from './inputToUser';

const INPUT_NEXT_STEP_PROMPT = `3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
`;

const EXIT_COMMAND = '1';
const RESTART_COMMAND = '2';

const isExitOrRestartCommand = string => {
  return string === EXIT_COMMAND || string === RESTART_COMMAND;
};

const getNextStep = async () => {
  const command = await inputToUser(
    INPUT_NEXT_STEP_PROMPT,
    isExitOrRestartCommand,
  );

  return command;
};

export default getNextStep;
