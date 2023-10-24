import { MissionUtils } from '@woowacourse/mission-utils';

const INPUT_EXP = /^[1-9]{3}$/;

class App {
    async play() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

        while (true) {
            // 랜덤 3자리 번호 생성
            const cpuNumArr = this.cpuNumGenerator();
            // 게임 시작
            while (true) {
                const userNumArr = await this.userInput(); // 유저 입력 받기
                const { strike, ball } = this.calculate(cpuNumArr, userNumArr); // 채점

                // 결과 출력
                MissionUtils.Console.print(
                    strike + ball === 0
                        ? '낫싱'
                        : [ball > 0 && `${ball}볼`, strike > 0 && `${strike}스트라이크`].filter(el => el).join(' ')
                );

                // 3스트라이크이면 while문 탈출
                if (strike === 3) break;
            }

            // 종료 알림 및 재시작 여부 확인
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            const answer = parseInt(
                await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n')
            );
            if (answer === 2) return;
            if (answer !== 1) throw new Error('[ERROR] 1 또는 2만 입력 하실 수 있습니다.');
        }
    }

    /**
     * @returns {number[]}
     */
    cpuNumGenerator() {
        const cpuNumSet = new Set();
        while (cpuNumSet.size < 3) {
            cpuNumSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
        }
        return [...cpuNumSet.values()];
    }

    /**
     * @returns {Promise<number[]>}
     */
    async userInput() {
        const userInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        // 숫자 검사
        if (!INPUT_EXP.test(userInput)) throw new Error('[ERROR] 3자리의 숫자만 입력 가능합니다.');
        const userNumArr = userInput.split('').map(char => parseInt(char));
        // 중복 검사
        if (new Set([...userNumArr]).size !== 3) throw new Error('[ERROR] 중복된 숫자는 입력하실 수 없습니다.');
        return userNumArr;
    }

    /**
     * @param {number[]} cpuNumArr
     * @param {number[]} userNumArr
     * @returns {{strike: number, ball: number}}
     */
    calculate(cpuNumArr, userNumArr) {
        const cpuNumSet = new Set([...cpuNumArr]);
        let strike = 0,
            ball = 0;

        // 채점
        userNumArr.forEach((num, i) => {
            // 스트라이크 확인
            if (num === cpuNumArr[i]) return strike++;
            // 볼 확인
            if (cpuNumSet.has(num)) return ball++;
        });

        return { strike, ball };
    }
}

export default App;
