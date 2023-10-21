import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    let isPlaying = true;
    Console.print('숫자 야구 게임을 시작합니다.');
    while (isPlaying) {
      await this.run()
        .catch((error) => { throw error; });
      isPlaying = await this.retryCheckByInput()
        .catch((error) => { throw error; });
    }
  }

  async run() {
    const computerList = this.getRandomList();
    while (true) {
      const inputList = await this.getInputList()
        .catch((error) => { throw error; });
      const counts = this.getCounts(computerList, inputList);
      this.printCounts(counts);
      if (counts[1] == 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        return;
      }
    }
  }

  getRandomList() {
    const list = [];
    while (list.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!list.includes(number)) list.push(number);
    }
    return computer;
  }

  async getInputList() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ')
      .catch(() => { throw new Error('[ERROR] Console Error'); });

    if (input.length != 3) throw new Error('[ERROR] Wrong Length');

    const result = input.split('');
    result.forEach((element) => {
      // if first index and last index are different
      // same number is in the array
      if (result.indexOf(element) != result.lastIndexOf(element))
        throw new Error('[ERROR] Repeated Number');
      if (element.charCodeAt(0) < 49 || 57 < element.charCodeAt(0))
        throw new Error('[ERROR] Not a Number');
    });
    return result.map(Number);
  }

  getCounts(originList, checkList) {
    const result = [0, 0];

    // result[0]:number of same elements regardless of index
    checkList.forEach((number) =>
      originList.includes(number) ? result[0]++ : 0
    );

    // result[1]:number of elements with the same index and same value
    checkList.forEach((number, index) =>
      (originList.indexOf(number) == index) ? result[1]++ : 0
    );
    result[0] -= result[1];
    return result;
  }

  printCounts([ballCnt, strikeCnt]) {
    let result = `${ballCnt == 0 ? '' : ballCnt + '볼 '}${strikeCnt == 0 ? '' : strikeCnt + '스트라이크'}`;
    if (result == '') result = '낫싱';
    Console.print(result);
  }

  async retryCheckByInput() {
    let input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
    );
    if (input.length != 1) throw Error('[ERROR] Wrong Input');
    if (input.charCodeAt(0) != 49 && input.charCodeAt(0) != 50) throw Error('[ERROR] Wrong Input');
    if (input.charCodeAt(0) == 49) return true;
    if (input.charCodeAt(0) == 50) return false;
  }
}

export default App;