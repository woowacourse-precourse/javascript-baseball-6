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

    // 플레이어 숫자 입력 함수
    async createPlayerNum() {
        const PLAYER_NUM = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
        );
        // 예외처리
        if (
            isNaN(PLAYER_NUM) ||
            PLAYER_NUM.length !== 3 ||
            PLAYER_NUM.includes(0)
        ) {
            throw new Error("[ERROR]");
        } //
        else {
            const TMP_ARRAY = [];
            for (let i = 0; i < PLAYER_NUM.length; i++)
                TMP_ARRAY.push(Number(PLAYER_NUM[i]));
            return TMP_ARRAY;
        }
    }

    async play() {
        console.log(this.computerNum);
        this.compare();
    }
}

const play = new App();
play.play();

export default App;
