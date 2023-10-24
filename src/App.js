import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let computer = this.answer();
    while (true) {
    const numbers = await Console.readLineAsync('숫자를 입력해 주세요 : ');
    const arr = [...numbers];
    const player = arr.map(Number);

    let result = this.compare(computer,player);
    if(result === '0볼 3스트라이크') {
    Console.print('3스트라이크');
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    const restart = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'); 
    if (restart === '2') break; 
    if (restart === '1') {computer = this.answer()}
    }
    else if (result === '0볼 0스트라이크') Console.print('낫싱');
    else if (result.includes('0볼')) Console.print(result.substring(3));
    else if (result.includes('0스트라이크')) Console.print(result.substring(0, 2));
    else {Console.print(result)};
  } 
  }

answer() {
  const computer = [];
  while (computer.length < 3) {
  const num = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(num)) {
      computer.push(num);
  }
}
return computer;
}

compare(computer,player) {
  let strike_0 = 0;
  let ball_0 = 0;
  if (computer[0] === player[0]) ++strike_0;
  else if (computer.includes(player[0])) ++ball_0;
  
  let strike_1 = 0;
  let ball_1 = 0;
  if (computer[1] === player[1]) ++strike_1;
  else if (computer.includes(player[1])) ++ball_1;

  let strike_2 = 0;
  let ball_2 = 0;
  if (computer[2] === player[2]) ++strike_2;
  else if (computer.includes(player[2])) ++ball_2;
  
  return (`${ball_0 + ball_1 + ball_2}볼 ${strike_0 + strike_1 + strike_2}스트라이크`)
}
}

export default App;