const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
    async inputUserNumber() {
        return new Promise(async (resolve, reject) => {
            await MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
                MissionUtils.Console.print(`사용자의 숫자: ${input}`)
                resolve(input);
            });
        })
    }
}

module.exports = InputView;