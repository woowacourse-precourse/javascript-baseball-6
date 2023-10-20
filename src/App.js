import { Console, MissionUtils } from "@woowacourse/mission-utils";

console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));

class App {
  async play() {
    // Console.readLine('닉네임을 입력해주세요.', (answer) => {
    //   console.log(`닉네임: ${answer}`);
    // });
    Console.print('안녕하세요.');

    // async function getUsername() {
    //   try {
    //     const username = await Console.readLineAsync('닉네임을 입력해주세요.');
    //   } catch (error) {
    //     // reject 되는 경우
    //   }
    // }
  }
}

const app = new App();
app.play();

export default App;
