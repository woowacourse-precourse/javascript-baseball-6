import { MissionUtils } from "@woowacourse/mission-utils";


const OutputView = {
    printStartMessage(){
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    },

    printResultMessage(messeage){
        MissionUtils.Console.print(messeage)
    }
}

export default OutputView;