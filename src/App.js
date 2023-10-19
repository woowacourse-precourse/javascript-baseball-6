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

    // 게임을 다시 시작할지 판단하는 함수
}

export default App;
