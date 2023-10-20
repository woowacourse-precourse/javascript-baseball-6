import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    // 상대방 숫자 생성기
    async getComputerNum() {
        let l = [];
        while (l.length < 3) {
            let tmp = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!l.includes(tmp)) l.push(tmp);
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
            throw new Error("[ERROR]");
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
        let playerNumCopy = [...playerNum];
        let computerNumCopy = [...computerNum];

        let strike = 0;
        let ball = 0;

        // 스트라이크 검사
        for (let i = 0; i < playerNumCopy.length; i++) {
            if (playerNumCopy[i] === computerNumCopy[i]) {
                strike++;
                playerNumCopy.splice(i, 1);
                computerNumCopy.splice(i, 1);
                i--; // 배열을 자르면서 길이가 줄어듬
            }
        }
        // 볼 검사
        for (let i = 0; i < playerNumCopy.length; i++) {
            if (computerNumCopy.includes(playerNumCopy[i])) {
                ball++;
            }
        }

        return [strike, ball];
    }

    // 비교 결과 텍스트 출력기
    compareResultText(data) {
        // [strike, ball]
        let result = "";

        if (data[0] === 0 && data[1] === 0) result = "낫싱";
        else if (data[0] !== 0 && data[1] === 0)
            result = `${data[0]}스트라이크`;
        else if (data[0] === 0 && data[1] !== 0) result = `${data[1]}볼`;
        else if (data[0] !== 0 && data[1] !== 0)
            result = `${data[1]}볼 ${data[0]}스트라이크`;

        MissionUtils.Console.print(result);
    }

    // 3스트라이크 이후 게임 종료 여부
    async isEndGame() {
        let endPhrase =
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료 \n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
        let playerInput = await MissionUtils.Console.readLineAsync(endPhrase);

        // 예외처리
        if (Number(playerInput) !== 1 && Number(playerInput) !== 2) {
            throw new Error("[ERROR]");
        }

        return Number(playerInput);
    }

    async play() {
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        let computerNum = await this.getComputerNum();
        while (true) {
            let playerNum = await this.getPlayerNum();

            let result = this.compare(playerNum, computerNum);
            this.compareResultText(result);

            if (result[0] === 3) {
                let data = await this.isEndGame();
                if (data === 1) await this.play();
                else if (data === 2) {
                    MissionUtils.Console.print("게임 종료");
                }
                return;
            } else continue;
        }
    }
}

export default App;
