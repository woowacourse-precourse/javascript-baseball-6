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
        let playerInput = await MissionUtils.Console.readLineAsync(
            "숫자를 입력해주세요 : "
        );
        // 예외처리
        if (
            isNaN(playerInput) || // 숫자가 아니거나
            playerInput.length != 3 || // 3자리수가 아니거나
            !(
                Number(playerInput) >= 111 || // 111 ~ 999 사이가 아니라면
                Number(playerInput) <= 999
            )
        ) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        // 배열화
        let l = [];
        for (let i = 0; i < 3; i++) {
            l.push(Number(playerInput[i]));
        }
        return Promise.resolve(l);
    }

    // 플레이어와 컴퓨터 숫자 비교
    compare(playerNum, computerNum) {
        let strike = 0;

        // 스트라이크 검사
        for (let i = 0; i < playerNum.length; i++) {
            if (playerNum[i] === computerNum[i]) {
                strike++;
                playerNum.splice(i, 1);
                computerNum.splice(i, 1);
                i--; // 배열을 자르면서 길이가 줄어서
            }
        }
        // 볼 검사
        // 낫싱 검사
    }

    async play() {}
}

const app = new App();
app.play();

export default App;
