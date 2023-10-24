import { MissionUtils } from "@woowacourse/mission-utils";

async function repeatQuestion() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    const answer = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
    return answer;
}

export default repeatQuestion;