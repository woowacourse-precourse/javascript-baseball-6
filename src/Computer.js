import { MissionUtils } from "@woowacourse/mission-utils";
export default class Computer {
    static numbers = [];
    static pickRandomNumbers() {
        while (numbers.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
    }
    static playGame(USER) {
        while (true) {
            MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
            while (true) {
                const INPUT = USER.returnUserQuery("숫자를 입력해주세요 : ");
                const RESULT = returnMessage(INPUT);
                MissionUtils.Console.print(RESULT.result);
                if (RESULT.success) {
                    MissionUtils.Console.print(
                        "3개의 숫자를 모두 맞히셨습니다! 게임 종료"
                    );
                    break;
                }
            }
            MissionUtils.Console.print(
                "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
            );
            if (USER.returnUserInput() === 2) break;
        }
    }
    static returnMessage(expect_numbers) {
        return { result: "", success: false };
    }
    static clearNumbers() {}
}
