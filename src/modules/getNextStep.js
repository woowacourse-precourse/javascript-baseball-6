import inputToUser from './inputToUser';
import Constant from './Constant';

const { INPUT_NEXT_STEP_PROMPT, EXIT, RESTART } = Constant;

const isExitOrRestartCommand = string => {
  return string === EXIT || string === RESTART;
};

const getNextStep = async () => {
  const command = await inputToUser(
    INPUT_NEXT_STEP_PROMPT,
    isExitOrRestartCommand,
  );

  return command;
};

export default getNextStep;
