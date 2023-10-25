import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {    
    // 랜덤 숫자 뽑기
    const randomNumbers = [];
    while (randomNumbers.length < 3) { // 배열 길이가 3이 될 때까지 반복
      const number = Random.pickNumberInRange(1, 9); // 랜덤 숫자 선택
      if (!randomNumbers.includes(number)) { // 배열에 값이 중복되지 않도록 저장
        randomNumbers.push(number);
      }
    }

    // 숫자 입력 반복
    while (1) {
      const number = await Console.readLineAsync('숫자를 입력해주세요 : '); // 사용자 입력값
      const user = number.split('').map(Number); // 사용자 입력값 유효성 검사 & 통과하면 user에 저장
      
      if (user.length !== 3 || number === null || new Set(user).size !== 3) {
        throw new Error('[ERROR] 잘못된 값을 입력했습니다.'); // 예외 발생 및 종료
      }

      let strike = 0;
      let ball = 0;
      // 초기 설정된 랜덤값 순회하며 값 비교
      for (let i = 0; i < randomNumbers.length; i++) {
        // 사용자 입력값에 랜덤값이 있는지 확인
        const index = user.indexOf(randomNumbers[i]); 
        
        // 같은 숫자가 존재하는 경우
        if (index > -1) {
          if (index === i) {
            strike++; // 자리까지 동일한 경우 : strike
          } else { // 자리는 다른 경우 : ball
            ball++;
          }
        }
      }
      
      // 3스트라이크
      if (strike === 3) {
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
      if (strike === 0 && ball === 0) {
        Console.print('낫싱');
      } else if (ball > 0 && strike === 0) {
        Console.print(`${ball}볼`);
      } else if (strike > 0 && ball === 0) {
        Console.print(`${strike}스트라이크`);
      } else {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      }
    }

    // 게임 재시작
    const replay = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    if (replay === '1') {
      app.play();
    }
  }
}
Console.print('숫자 야구 게임을 시작합니다.');
const app = new App();
app.play();

export default App;