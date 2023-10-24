import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자야구 게임을 시작합니다.');

    while (true) {
      const answer = genNum();

      while (true) {
        const user_input = await Console.readLineAsync('숫자를 입력해주세요 : ');
        if (!validate(user_input)) throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');

        const { hint_msg, isCorrect } = check(answer, user_input);
        Console.print(hint_msg);
        if (isCorrect) break;
      }

      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      const replay = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n');
      if (replay === '2') break;
    }
  }
  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  checkValidateInput(input) {
    if (input.length !== 3) return false;

    const regex = /^[1-9]\d{2}$/;
    return regex.test(input);
  }

  checkAnswer(answer, input) {
    let ball = 0;
    let strike = 0;

    answer.forEach((num, idx) => {
      if (num == input[idx]) {
        strike += 1;
      } else if (input.includes(num)) {
        ball += 1;
      }
    });

    let hint_msg = '';

    if (!ball && !strike) hint_msg = '낫싱';
    else if (!ball) hint_msg = `${strike}스트라이크 `;
    else if (!strike) hint_msg = `${ball}볼`;
    else {
      hint_msg = `${ball}볼 ${strike}스트라이크`;
    }

    return { hint_msg, isCorrect: strike === 3 };
  }
}

export default App;
