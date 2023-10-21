import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    // App 객체 생성시 무작위 컴퓨터 숫자 생성
    constructor() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        this.createComputerNum();
    }
    // 컴퓨터 숫자 생성 함수
    async createComputerNum() {
        const TMP_ARRAY = [];
        for (let i = 0; TMP_ARRAY.length < 3; i++) {
            let tmp = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!TMP_ARRAY.includes(tmp)) TMP_ARRAY.push(tmp);
        }
        this.computerNum = TMP_ARRAY;
    }

    async play() {
        console.log(this.computerNum);
        this.compare();
    }
}

const play = new App();
play.play();

export default App;
