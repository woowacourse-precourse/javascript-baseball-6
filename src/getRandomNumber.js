import { Random } from "@woowacourse/mission-utils";

export function getRandomNumber() {
    // 컴퓨터 숫자 생성 
    let comNumbers = [];
    for (let i = 0; i < 3; i++) {
        let randomNumber = Random.pickNumberInRange(1, 9)
        while (comNumbers.includes(randomNumber)) {
            randomNumber = Random.pickNumberInRange(1, 9)
        }
        comNumbers.push(randomNumber);
    }

    return comNumbers.join("");
}
