import { MissionUtils } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/;

class App {
    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        const computerNumber = createComputerNumber(3);
        MissionUtils.Console.print('컴퓨터의 숫자는');
        MissionUtils.Console.print(computerNumber);
        const userNumber = await inputUserNumber();
        MissionUtils.Console.print('유저의 숫자는');
        MissionUtils.Console.print(userNumber);
    }
}

async function inputUserNumber() {
    let inputValue = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    if (!REG_INPUT_NUMBER.test(inputValue)) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    inputValue = [...inputValue].map(Number);

    return inputValue;
}

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
