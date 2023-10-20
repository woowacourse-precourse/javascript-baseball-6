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

    // 플레이어 숫자 생성기
    async getPlayerNum() {
        let str = MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
        return str;
    }

    async play() {
        let data = await this.getComputerNum();
        let player = await this.getPlayerNum();
        MissionUtils.Console.print(player);
    }
}

const app = new App();
app.play();

export default App;
