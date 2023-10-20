import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async play() {
        // 상대방 숫자 생성기
        function getComputerNum() {
            let l = [];
            for (let i = 0; i < 3; i++) {
                l.push(MissionUtils.Random.pickNumberInRange(1, 9));
            }
            return l;
        }
        let computerNum = [...getComputerNum()];
    }
}

const app = new App();
app.play();

export default App;
