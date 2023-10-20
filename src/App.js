import { STRING,INPUT_LIMIT, RANDOM_NUMBER_MAX, RANDOM_NUMBER_MIN, STRIKE_GAME_CLEAR, RESTART_NUMBER, END_NUMBER } from "./constants/index.js"
import { Console, Random } from './utils/index.js'
class App {
    isplaying;
    randomNumber;

    constructor() {
        this.init();
    }

    init() {
        this.isplaying=true;
        this.randomNumber= this.makeRandomNumber();
    }
    async play() {
        Console.print(STRING.START);
    }

    /**
     * 중복되지 않은 숫자배열을 생성해주는 메소드  (number.length=3)
     * @return {number[]}
     */
    makeRandomNumber() {
        const randomNumber = [];
        while(randomNumber.length <= INPUT_LIMIT){
            const pickNumber = Random.pickNumberInRange(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX);
            if(!randomNumber.includes(pickNumber)){
                randomNumber.push(pickNumber);
            }
        }
        return randomNumber;
    }
    /**
     * 사용자에게 입력받는 메서드
     * 
     */
    
}

export default App;
