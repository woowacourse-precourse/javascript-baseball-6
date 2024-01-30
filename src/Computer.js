import { Console, Random } from "@woowacourse/mission-utils"
class Computer {
    makeRandomNumber(){
        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer
    }

    checkStrikeBall(userInput, solution) {
        let strike = 0;
        let ball = 0;
        userInput.forEach((item, index) => {
            const isStrike = userInput[index] === solution[index];
            const isBall = solution.includes(item) && index !== solution.indexOf(item);
            if (isStrike) {
                strike += 1;
            }
            if (isBall) {
                ball += 1;
            }
        });
        console.log("세기", strike, ball)
        return { strike, ball };
    }
}

export default Computer;