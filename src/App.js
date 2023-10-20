import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    // 상대방 숫자 생성기
    async getComputerNum() {
        let l = [];
        for (let i = 0; i < 3; i++) {
            l.push(MissionUtils.Random.pickNumberInRange(1, 9));
        }
        return Promise.resolve(l);
    }

    async play() {
        let data = await this.getComputerNum();
        MissionUtils.Console.print(data);
    }
}

const app = new App();
app.play();

export default App;
