const GameOver = {
  RESTART: "1",
  END: "2",
};

const BaseBall = {
  LENGTH: 3,
  START: 1,
  END: 9,
  MAX_LENGTH: 0,
};
BaseBall.MAX_LENGTH = BaseBall.END - BaseBall.START + 1;

export { GameOver, BaseBall };
