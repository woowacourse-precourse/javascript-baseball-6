const MissionUtils = require("@woowacourse/mission-utils");

class App {
    computerNumberCreate() {
        // 컴퓨터 숫자 생성 메서드
        this.computerNumber = []; // 컴퓨터 숫자 저장 배열

        while (this.computerNumber.length <= 2) {
            // 컴퓨터가 숫자 3개를 고를때까지 반복
            const num = MissionUtils.Random.pickNumberInRange(1, 9); // 1부터 9까지의 숫자중 1개 저장
            if (this.computerNumber.includes(num)) {
                continue; // 만약 이미 뽑았던 숫자라면 다시 선택
            } else {
                this.computerNumber.push(num); // 중복되는 숫자가 없다면 배열에 push
            }
        }
    }
    async play() {
        this.computerNumberCreate(); // 컴퓨터 숫자 생성 메서드 호출
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
}

export default App;
