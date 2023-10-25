class Playgame {
    constructor(numbers, input) {
        this.numbers = numbers;
        this.usernumbers = input;
    }

    check(input) {
        if (userInput.length !== 3 || this.hasDuplicate(userInput)) {
            return false;
          }
        return true;
    }

    //중복된 숫자 확인
    hasDuplicate(userInput) {
        const set = new Set(userInput);
        return set.size !== userInput.length;
    }


    // 스트라이크, 볼, 낫싱에 대한 계산    
    hint(numbers, input) {
        
        let strike = 0;
        let ball = 0;
    
        for (let i = 0; i < 3; i++) {
            if (numbers[i] === input[i]) {
                strike++;
            } else if (numbers.includes(input[i])) {
                ball++;
            }
        };
    
        if (strike > 0 && ball > 0) {
            return `${ball}볼 ${strike}스트라이크`;
        } else if (strike > 0) {
            return `${strike}스트라이크`;
        } else if (ball > 0) {
            return `${ball}볼`;
        } else {
            return '낫싱';
        }

    }
}

export default Playgame;
