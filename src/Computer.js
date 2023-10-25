import { MissionUtils } from "@woowacourse/mission-utils";
import { QUERY_STATUS } from "./query_status.js";
export default class Computer {
    static QUIT = "2";
    constructor() {
        this.numbers = [];
    }
    pickRandomNumbers() {
        this.clearNumbers();
        while (this.numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!this.numbers.includes(number)) {
                this.numbers.push(number);
            }
        }
    }
    async playGame(user) {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        while (true) {
            this.pickRandomNumbers();
            while (true) {
                const input = await user.returnUserQuery(
                    "숫자를 입력해주세요 : ",
                    QUERY_STATUS.PLAYING
                );
                const result = this.returnMessage(input);
                MissionUtils.Console.print(result.result);
                if (result.success) {
                    MissionUtils.Console.print(
                        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
                    );
                    break;
                }
            }
            const input = await user.returnUserQuery(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
                QUERY_STATUS.REPLAY
            );
            if (input === Computer.QUIT) break;
        }
    }
    returnMessage(expectNumbers) {
        const ballStrike = this.calculateBallStrike(expectNumbers);
        const result = this.getResultString(ballStrike);
        if (ballStrike.strike === 3) return { result: result, success: true };
        return { result: result, success: false };
    }
    calculateBallStrike(expectNumbers) {
        let ball = 0;
        let strike = 0;
        [...expectNumbers]
            .map((n) => +n)
            .forEach((n, idx) => {
                if (this.numbers[idx] === n) strike++;
                else if (this.numbers.includes(n)) ball++;
            });
        return { ball, strike };
    }
    getResultString({ ball, strike }) {
        if (ball === 0 && strike === 0) return "낫싱";
        else if (ball === 0) return `${strike}스트라이크`;
        else if (strike === 0) return `${ball}볼`;
        else return `${ball}볼 ${strike}스트라이크`;
    }

    clearNumbers() {
        this.numbers = [];
    }
}
