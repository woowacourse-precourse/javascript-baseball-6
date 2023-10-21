import {MissionUtils} from "@woowacourse/mission-utils";

class App {
    async play() {
        // 컴퓨터가 임의의 3자리 숫자를 생성
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }

    }
}

export default App;
