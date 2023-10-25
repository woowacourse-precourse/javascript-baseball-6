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
    
        for (let j = 0; j < 3; j++) {
            if (numbers[j] === input[j]) {
                strike++;
            } else if (numbers.includes(input[j])) {
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

export default Playgame;
