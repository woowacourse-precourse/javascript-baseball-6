import { MissionUtils } from '@woowacourse/mission-utils';

const REG_INPUT_NUMBER = /^(?!.*([1-9]).*\1)[1-9]{3}$/;

class App {
    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        const computerNumber = createComputerNumber(3);
        MissionUtils.Console.print('컴퓨터의 숫자는');
        MissionUtils.Console.print(computerNumber);
        baseBall(computerNumber);
    }
}

// * 야구 함수 생성
async function baseBall(computerNumber) {
    // 유저 넘버 받고, 야구 점수 카운팅 함수에 전달
    const userNumber = await inputUserNumber();
    calculateResults(computerNumber, userNumber);
}

// * 유저 숫자를 받는 함수
async function inputUserNumber() {
    let inputValue = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

    if (!REG_INPUT_NUMBER.test(inputValue)) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    inputValue = [...inputValue].map(Number);

    return inputValue;
}

// * 컴퓨터 숫자 생성 함수
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

// * 야구 결과 계산 함수
function calculateResults(computerNumber, userNumber) {
    MissionUtils.Console.print('유저의 숫자는');
    MissionUtils.Console.print(userNumber);
    let score = {
        strike: 0,
        ball: 0,
    };
    computerNumber.forEach((element, index) => {
        if (computerNumber[index] === userNumber[index]) {
            score.strike++;
        } else if (computerNumber.includes(userNumber[index])) {
            score.ball++;
        }
    });

    let resultText = '';
    if (score.strike > 0) {
        resultText += score.strike + '스트라이크 ';
    }
    if (score.ball > 0) {
        resultText += score.ball + '볼';
    }

    if (resultText) {
        MissionUtils.Console.print(resultText);
    } else {
        MissionUtils.Console.print('낫싱');
    }

    if (score.strike === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        // TODO: 재시작 여부 묻기
    } else {
        baseBall(computerNumber);
    }
}

const app = new App();
app.play();

export default App;
