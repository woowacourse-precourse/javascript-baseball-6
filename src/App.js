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

    inputValidation(userNumber) {
        //올바른 숫자인지 검사하는 메서드

        userNumber = new Set(userNumber); // set으로 중복 제거

        if (userNumber.size !== 3) {
            // 3자리 숫자인지 확인
            return false;
        }

        for (let number of userNumber) {
            number = parseInt(number, 10); // 각 문자를 10진수로 변경

            if (isNaN(number)) {
                // 숫자 아니면 false
                return false;
            } else if (number < 1 || number > 9) {
                // 1부터 9사이 아니면 false
                return false;
            }
        }

        return true;
    }

    compareUserComputer(userNumber) {
        // 정답 테스트 메서드

        let strike = 0;
        let ball = 0;
        for (let i = 0; i <= 2; i++) {
            if (userNumber[i] == this.computerNumber[i]) {
                // 정확하게 일치하면 스트라이크 개수 증가
                strike++;
            } else if (
                this.computerNumber.includes(parseInt(userNumber[i], 10)) // userNumber를 숫자로 변경하여 computerNumber의 숫자와 비교한다.
            ) {
                // 존재하면 볼
                ball++;
            }
        }

        if (strike === 0 && ball === 0) {
            return "낫싱"; // 다 틀렸으면 낫싱 반환
        } else {
            // 맞은 개수대로 결과 반환
            return `${ball ? ball + "볼" : ""} ${
                strike ? strike + "스트라이크" : ""
            }`.trim();
        }
    }

    async play() {
        this.computerNumberCreate(); // 컴퓨터 숫자 생성 메서드 호출
        MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

        while (true) {
            // 계속 반복
            const userNumber = await MissionUtils.Console.readLineAsync(
                "숫자를 입력해주세요 : "
            ); // 숫자를 입력한다.

            if (this.inputValidation(userNumber)) {
            } else {
                //잘못된 값을 입력했을 경우 에러 반환.
                throw Error("[ERROR]");
            }
        }
    }
}

export default App;
