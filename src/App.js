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
        let inputNumber = Console.readLineAsync();
        let inputNumberList = await inputNumber.then(
            (value) => value.split("").map((i) => i / 1) //문자형인 배열에서 숫자형인 배열로 변환
        );
        console.log(`숫자를 입력해주세요 : ${inputNumberList.join("")}`); //하나의 숫자로 보이게 하기 위해  
    }
}

export default App;
