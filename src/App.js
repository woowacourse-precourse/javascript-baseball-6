import { Console, Random } from '@woowacourse/mission-utils';

class App {
    constructor() {

    }
    async play() {
        let isPlaying = true;
        Console.print('숫자 야구 게임을 시작합니다.');
        while (isPlaying) {
            await this.run()
                .catch(e => { throw e });
            isPlaying = await this.retry()
                .catch(e => { throw e });
        }
    }
    async run() {
        let numList = this.getList();
        while (true) {
            let inputList = await this.inputNumList()
                .catch(e => { throw new Error('[ERROR] Wrong Input') });
            if (this.printResult(this.cntCheck(numList, inputList))[1] == 3) {
                Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
                return;
            }
        }
    }
    getList() {
        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }
    async inputNumList() {
        let input = await Console.readLineAsync('숫자를 입력해주세요 : ')
            .catch(e => { throw new Error('[ERROR] Console Error') });
        if (input.length != 3) throw new Error('[ERROR] Wrong Number');
        const result = input.split('');
        result.forEach(e => {
            if (result.indexOf(e) != result.lastIndexOf(e)) throw new Error('Repeated Number');
            if (e.charCodeAt(0) < 49 || 57 < e.charCodeAt(0)) throw new Error('Not a Number');
        })
        return result.map(Number);
    }

    cntCheck(originList, checkList) {
        const result = [0, 0];
        checkList.forEach(e => originList.includes(e) ? result[0]++ : 0);
        checkList.forEach((e, i) => (originList.indexOf(e) == i) ? result[1]++ : 0);
        result[0] -= result[1];
        return result;
    }

    printResult([ballCnt, strikeCnt]) {
        let result = `${ballCnt==0?'':ballCnt+'볼 '}${strikeCnt==0?'':strikeCnt+'스트라이크'}`;
        if (result == '') result = '낫싱';
        Console.print(result);
        return [ballCnt, strikeCnt];
    }
    async retry() {
        let input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if (input.length != 1 || input.charCodeAt(0) != 49 || input.charCodeAt(0) != 50) throw Error("[ERROR] Wrong Input");
        if (input.charCodeAt(0) == 49) return true;
        if (input.charCodeAt(0) == 50) return false;
    }
}

export default App;