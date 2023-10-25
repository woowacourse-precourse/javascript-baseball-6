import { MissionUtils } from '@woowacourse/mission-utils';

class App {
    async play() {
        // 컴퓨터로 숫자 3개 뽑기 ex) [2, 4, 6]
        const pickAnswer = async function() {
            const computer = [];
            while (computer.length < 3) {
                const number = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!computer.includes(number)) {
                    computer.push(number);
                }
            }
            return computer;
        };

        // 플레이어로 숫자 3개 입력받기 ex) [1, 2, 3]
        const playerInteraction = async function(answer) {
            const playerInput = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');

            // 정규식 사용하여 입력이 세 자리 숫자인지 판단
            const regex = /^(?!.*(.).*\1)[0-9]{3}$/;
            if (!regex.test(playerInput)) {
                throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
            }

            // 입력받은 수를 정답과 비교
            const player = await playerInput.split('').map((number) => parseInt(number));
            return player.reduce((acc, num, idx) => {
                if (num === answer[idx]) {
                    acc.strike += 1;
                    return acc;
                }

                if (answer.includes(num)) {
                    acc.ball += 1;
                    return acc;
                }

                return acc;
            }, { ball: 0, strike: 0 });
        };

        // ball, strike 개수로 결과 출력
        const printResult = function({ ball, strike }) {
            if (ball === 0 && strike === 0) {
                MissionUtils.Console.print('낫싱');
                return false;
            }

            if (strike === 3) {
                MissionUtils.Console.print('3스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료');
                return true;
            }

            if (strike === 0) {
                MissionUtils.Console.print(`${ball}볼`);
                return false;
            }

            if (ball === 0) {
                MissionUtils.Console.print(`${strike}스트라이크`);
                return false;
            }

            MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
            return false;
        };

        // 게임 재시작 여부 확인
        const restart = async function() {
            const restartInput = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
            if (restartInput === '1') {
                return true;
            }

            if (restartInput === '2') {
                return false;
            }

            throw new Error('[ERROR] 잘못된 입력입니다.');
        }

        // 게임 한 번의 구조
        const game = async function() {
            const answer = await pickAnswer();
            let hit = false;
            while (!hit) {
                try {
                    const player = await playerInteraction(answer);
                    hit = printResult(player);
                } catch (e) {
                    MissionUtils.Console.print(e.message);
                    throw e;
                }
            }

            return await restart();
        }

        // 게임 실행
        let playGame = true;
        while (playGame) {
            try {
                playGame = await game();
            } catch (e) {
                MissionUtils.Console.print(e.message);
                throw e;
            }
        }
    }
}

export default App;
