import { MissionUtils } from "@woowacourse/mission-utils";

const InputView = {
    inputUserNumber: async () => {
        return new Promise(async (resolve, reject) => {
            MissionUtils.Console.readLine("숫자를 입력해주세요 : ", async (input) => {
                MissionUtils.Console.print(`사용자의 숫자: ${input}`);
                resolve(input);
            });
        });
    },
    
}

export default InputView;
