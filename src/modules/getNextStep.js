import inputToUser from './inputToUser';
import Constant from '../constant/Constant';

const { MAX_NUM_LENGTH, EXIT, RESTART } = Constant;

const isExitOrRestartCommand = (string) => {
  return string === EXIT || string === RESTART;
};

const getNextStep = async () => {
  const inputNextStepPrompt = `${MAX_NUM_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료
  게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
  `;
  const command = await inputToUser(inputNextStepPrompt, isExitOrRestartCommand);

  return command;
};

export default getNextStep;
