class BaseballGame {
    constructor(computerNumbers, userInput) {
        this.computerNumbers = computerNumbers;
        this.userNumbers = userInput;
    }

    // 사용자 입력값 예외 처리
    check(userInput) {
        if (userInput.length !== 3 || this.hasDuplicate(userInput)) {
            return false;
        }
        
        return true;
    }

    // 중복된 숫자가 있는 확인
    hasDuplicate(userInput) {
        const set = new Set(userInput);
        return set.size !== userInput.length;
    }

    // 스트라이크, 볼, 낫싱 판정
    compare(computerNumbers, userInput) {
        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 3; i++) {
            if (userInput[i] === computerNumbers[i]) {
                strike++;
            } else if (computerNumbers.includes(userInput[i])) {
                ball++;
            }
        };

        if (strike === 0 && ball === 0) return '낫싱';
        if (strike === 0 && ball !== 0) return `${ball}볼`;
        if (strike !== 0 && ball === 0) return `${strike}스트라이크`;
        if (strike === 3) return '3스트라이크';

        return `${ball}볼 ${strike}스트라이크`;
    }
}

export default BaseballGame;