import { Console, Random } from "@woowacourse/mission-utils";

class App {
    async play() {
        let finish = true; // 게임의 끝을 정하는 변수
        Console.print('숫자 야구 게임을 시작합니다.');
        while (finish) {
            const computer = this.computerNumber();
            await this.userNumber(computer);
            finish = await this.restart();
        }
    }

    // 컴퓨터의 숫자를 무작위로 설정
    computerNumber() {

        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    

}

export default App;