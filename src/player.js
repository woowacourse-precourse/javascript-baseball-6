import { MissionUtils } from "@woowacourse/mission-utils";

async function player() {
    const prototypeInput = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
    const playerInputNumber = Array.from(prototypeInput);
    return playerInputNumber;
}

export default player;