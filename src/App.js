import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";

function getRandomNumber() {
  // 컴퓨터 숫자 생성 
  let comNumbers = [];
  for (let i = 0; i < 3; i++) {
    let randomNumber = Random.pickNumberInRange(1, 9)
    while (comNumbers.includes(randomNumber)) {
      randomNumber = Random.pickNumberInRange(1, 9)
    }
    comNumbers.push(randomNumber);
  }

  return comNumbers.join("");
}
class App {
  async play() {

    let COM_NUMBER = getRandomNumber()

    Console.print("숫자 야구 게임을 시작합니다.")
    
    }
}


export default App;
