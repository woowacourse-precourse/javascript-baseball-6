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
        //this.randomNumber=[];
    }
    async play() {
        Console.print(STRING.START);
    }

    /**
     * 중복되지 않은 숫자를 생성해준다. (length=3)
     */
    makeRandomNumber() {
        const randomNumber = [];
        while(randomNumber.length <= INPUT_LIMIT){
            const pickNumber = Random.pickNumberInRange(RANDOM_NUMBER_MAX, RANDOM_NUMBER_MIN);
            if(!randomNumber.includes(pickNumber)){
                randomNumber.push(pickNumber);
            }
        }
    }
    
}

export default App;
