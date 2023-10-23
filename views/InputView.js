import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
    inputUserNumber(){
        const userInput = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        return userInput;
    }
}

export default InputView;
