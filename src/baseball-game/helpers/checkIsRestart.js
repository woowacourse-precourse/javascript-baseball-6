import { PROCESS_STATUS } from "../../constants.js";

const checkIsRestart = (processStateInput) => {
  if (processStateInput === PROCESS_STATUS.RESTART) return true;
  if (processStateInput === PROCESS_STATUS.END) return false;
};

export default checkIsRestart;
