import { Console } from '@woowacourse/mission-utils';
import User from './User';
import Computer from './Computer';
import RuleChecker from './RuleChecker';
import Referee from './Referee';

class App {
  constructor() {
    this.rulechecker = new RuleChecker();
    this.computer = new Computer();
    this.user = new User();
    this.referee = new Referee();
    this.name = 'App';
    this.continue = true;
    this.againSolve = true;
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (this.continue) {
      this.computer.makeRandomNumList();
      while (this.againSolve) {
        await this.user.inputNumberList('숫자를 입력해주세요 :');
        this.rulechecker.inputObj(this.user);
        this.referee.checkJudgment(
          this.computer.returnComputerRandomNumber(),
          this.user.returnUserInputNumber(),
        );
        this.referee.printJudgment();
        if (this.referee.continueGame() === true) {
          Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
          Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
          await this.user.inputNumberList('');
          this.continue = RuleChecker.oneOrTwo(this.user.length, this.user.numberList);
          break;
        }
      }
    }
  }
}

export default App;
