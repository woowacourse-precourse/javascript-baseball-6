import { MissionUtils } from "@woowacourse/mission-utils";
import randomNumber from "../components/RandomNumGenerator.js";
import body from "./MainBody.js";

async function mainPage(){
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let restart = 1;

    while(restart == 1){
        let computer_num = randomNumber();
        await body(computer_num);
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        restart = await MissionUtils.Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
    }
}

export default mainPage;