import { Console } from "@woowacourse/mission-utils";

class Messages {
    static printStartMessage() {
        Console.print("숫자 야구 게임을 시작합니다.");
    }

    static printEndMessage() {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }

    static printRestartMessage() {
        Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    }
}

export default Messages;