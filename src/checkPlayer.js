const NUMBER_LENGTH = 3;

function checkPlayer(player) {

  const ERROR = new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  
  if(player.length != NUMBER_LENGTH) {
    throw ERROR;
  }
  for(let i = 0; i < player.length; i++) {
    if(isNaN(player[i])) {
      throw ERROR;
    }
    if(player[i] === 0) {
      throw ERROR;
    }
  }
  const playerSet = new Set(player);
  if(playerSet.size !== NUMBER_LENGTH) {
    throw ERROR;
  }
  
}

export default checkPlayer;