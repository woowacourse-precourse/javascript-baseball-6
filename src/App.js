import { Console } from '@woowacourse/mission-utils';
class App {
  async play() {
    const userNumber = await Console.readLineAsync('숫자를 입력해주세요 :');
    Console.print(userNumber);
  }
}
const app = new App();
app.play();
export default App;
