import { Random, Console } from "@woowacourse/mission-utils";
class App {
    async play() {
        console.log("숫자 야구 게임을 시작합니다.");
        let answer = [];
        while (answer.length < 3) {
            let number = Random.pickNumberInRange(1, 9);
            if (!answer.includes(number)) {
                answer.push(number);
            }
        }
        console.log(answer); //테스트 확인용 코드
        let inputNumber = Console.readLineAsync();
        let inputNumberList = await inputNumber.then(
            (value) => value.split("").map((i) => i / 1) //문자형인 배열에서 숫자형인 배열로 변환
        );
        console.log(`숫자를 입력해주세요 : ${inputNumberList.join("")}`); //하나의 숫자로 보이게 하기 위해
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 3; i++) {
            if (answer[i] === inputNumberList[i]) {
                strike += 1;
            } else if (answer.includes(inputNumberList[i])) {
                ball += 1;
            }
        }
        if (strike && ball) {
            Console.print(`${strike}스트라이크 ${ball}볼`);
        } else if (strike && !ball) {
            Console.print(`${strike}스트라이크`);
        } else if (!strike && ball) {
            Console.print(`${ball}볼`);
        } else {
            Console.print("낫싱");
        }
    }
}

export default App;
