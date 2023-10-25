const checkIsRestart = (processStateInput) => {
  const RESTART_GAME = "1";
  const END_GAME = "2";

  if (processStateInput === RESTART_GAME) return true;
  if (processStateInput === END_GAME) return false;
};

export default checkIsRestart;
