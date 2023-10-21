export class Computer {
    function createRandomNum() {
        let result = '';
        while (result.length < 3) {
            const randomNum = Math.floor(Math.random() * 9 + 1);
            if (!result.includes(randomNum)) {
                result += randomNum;
            }
        }
        return result;
    }
}