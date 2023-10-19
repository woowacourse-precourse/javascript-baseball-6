import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {
        let userinput;
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        const answer = this.createAnswer();
        while (true) {
            userinput = await MissionUtils.Console.readLineAsync(
                '숫자를 입력해주세요.'
            );


        }
    }
    // 정답을 생성하는 함수
    createAnswer() {
        const answerList = [];
        const answerDict = {};
        while (answerList.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!answerList.includes(number)) {
                answerList.push(number);
            }
        }
        for (let i = 0; i < answerList.length; i += 1) {
            answerDict[answerList[i]] = i;
        }
        return answerDict;
    }

    // 유저의 입력을 판단하는 함수
    getBallandStrike(userinput, answer) {
        let ball = 0;
        let strike = 0;

        for (let i = 0; i < userinput.length; i++) {
            if (userinput[i] in answer) {
                if (answer[userinput[i]] === i) {
                    // 번호도 같고 자리도 같은 경우
                    strike++;
                } else {
                    // 번호는 같지만 자리가 다른 경우
                    ball++;
                }
            }
        }

        return [ball, strike];
    }

    // 유저의 정답 여부를 확인하는 함수
    isUserWin(ball, strike) {
        let printText = '';

        if(ball > 0){
            printText += `${ball}볼`
        }

        if(strike > 0){
            printText += `${strike}스트라이크`
            if (strike === 3) {
                MissionUtils.Console.print(printText);
                return true;
            }
        }

        if(ball + strike === 0){
            printText = '낫싱'
        }

        MissionUtils.Console.print(printText);
        return false;
    }

    }


    // 게임을 다시 시작할지 판단하는 함수
}

export default App;
