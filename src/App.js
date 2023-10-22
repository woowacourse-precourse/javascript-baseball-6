import { MissionUtils } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/;

class App {
    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        createComputerNumber(3);
    }
}

// 상대방인 컴퓨터의 숫자 3자리를 랜덤으로 뽑는다. (중복 제거)
function createComputerNumber(length) {
    const computer = [];
    while (computer.length < length) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer;
}

const app = new App();
app.play();

export default App;
