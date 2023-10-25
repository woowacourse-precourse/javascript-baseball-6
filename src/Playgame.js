class Playgame {
    constructor(numbers, input) {
        this.numbers = this.numbers;
        this.usernumbers = input;
    }

    check(input) {
        if (input.length !== 3) { // 길이가 3이 아닐때
            return false;
          }
        if (new Set(input).size !== 4) { // 중복된 숫자가 있을때
            return false;
          }
        if (tries.includes(input)) { // 이미 시도한 값일때
            return false;
          }
        return true;
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