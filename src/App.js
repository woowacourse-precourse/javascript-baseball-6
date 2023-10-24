import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    // ** 컴퓨터 클래스
    class Computer {
      // * 컴퓨터 숫자 랜덤 생성 메서드
      static generateNumbers() {
        // 컴퓨터의 숫자를 담을 배열
        const computerNumbers = [];
        // 컴퓨터 숫자를 담을 배열의 길이가 3이 되기 전까지만 숫자 push 작업이 반복되고, 3이 되면 더이상 작동하지 않게끔 조건 설정
        while (computerNumbers.length < 3) {
          // misson-utils의 Random 객체에서 pickNumberInRange 메서드를 사용해서 1~9까지의 숫자를 골라서
          const randomNumber = Random.pickNumberInRange(1, 9);
          // 컴퓨터 숫자를 담은 배열에 해당 값이 존재하지 않을 때에만 해당 배열에 push
          if (computerNumbers.includes(randomNumber) === false) {
            computerNumbers.push(randomNumber);
          }

          return computerNumbers;
        }
      }
    }

    // ** 사용자 클래스
    class GamePlayer {
      // * 게임 실행 메서드
      static async playGame() {
        // 게임 시작을 알리는 문구 출력
        Console.print("숫자 야구 게임을 시작합니다.");
      }
      // * 사용자에게 숫자를 입력받는 메서드
      static async inputUserNumber() {
        // mission-utils의 Console 객체에서 readLineAsync 메서드를 이용해서 숫자 입력 문구 출력 & 사용자가 입력한 답변을 Promise를 통해 반환
        const userInput = await Console.readLineAsync("숫자를 입력해주세요 : ");
        // const userNumbers = [...userInput].map((value) => Number(value));
        return userNumbers;
      }

      static convertUserNumbers(userInput) {
        if (userInput.length !== 3) {
          throw new Error("[Error] 숫자는 3자리여야 합니다.");
        }
        // userNumber 배열화
        const userNumbers = [...userInput].map((value) => Number(value));
        Console.print(userNumbers);
      }
    }
  }
}

export default App;
