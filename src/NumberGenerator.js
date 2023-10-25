import { Random } from '@woowacourse/mission-utils'; 
class NumberGenerator {
    // 중복이 없는 범위 안의 숫자를 생성해주는 메소드
    static generateUniqueRandomNumbers(count, min, max) {
        const numbers = [];

        while(numbers.length < count) {
            // Random.pickNumberInRange(100, 999);
            const number = Random.pickNumberInRange(min, max);
            if (!numbers.includes(number)) {
                numbers.push(number);
            }
        }
        return numbers;
    }
}

export default NumberGenerator;
