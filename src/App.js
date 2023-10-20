import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {
        try {
            let userinput;
            MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
            while (true) {
                const answer = this.createAnswer();
                while (true) {
                    userinput = await this.getUserInput(
                        '숫자를 입력해주세요 : '
                    );
                    const judgelist = this.getBallandStrike(userinput, answer);
                    if (this.isUserWin(judgelist[0], judgelist[1])) {
                        break;
                    }
                }
                MissionUtils.Console.print(
                    '3개의 숫자를 모두 맞히셨습니다! 게임 종료'
                );
                userinput = await MissionUtils.Console.readLineAsync(
                    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
                );

                if (userinput.length !== 1 || !['1', '2'].includes(userinput)) {
                    throw new Error('[ERROR] 잘못된 입력입니다.');
                }

                if (userinput === '2') {
                    return;
                }
            }
        } catch (e) {
            throw new Error(`${e.message}`);
        }
    }

    // 유저의 입력을 받는 함수
    async getUserInput(text) {
        const userinput = await MissionUtils.Console.readLineAsync(text);

        if (userinput.length === 3) {
            const check = new Set(userinput);
            if (check.size === 3) {
                return userinput;
            }
        }

        throw new Error('[ERROR] 잘못된 입력입니다.');
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

        if (ball > 0) {
            printText += `${ball}볼`;
        }

        if (strike > 0) {
            printText += ` ${strike}스트라이크`;
            if (strike === 3) {
                MissionUtils.Console.print(printText.trim());
                return true;
            }
        }

        if (ball + strike === 0) {
            printText = '낫싱';
        }

        MissionUtils.Console.print(printText.trim());
        return false;
    }
}

export default App;
