import {
    STRING,
    ERRORS,
    STRIKE_GAME_CLEAR,
    RESTART_NUMBER,
    END_NUMBER
} from "./constants/index.js"
import { print, readLineAsync, throwError } from './utils/index.js'
import Player from "./Player.js"
import Computer from "./Computer.js"
class App {
    isplaying;
    player;
    computer;
    randomNumber;

    constructor() {
        this.player = new Player();
        this.computer = new Computer();
    }
    /** 프로그램을 시작하는 메소드 */
    async play() {
        this.gameStart()
        const computer = this.computer;
        while (this.isplaying) {
            console.log(computer);
            const input = await this.player.playerInputNumber();
            const { ball, strike } = await computer.umpireOfGame(input);
            this.printJudgement(ball, strike);
            if (strike === STRIKE_GAME_CLEAR) {
                await this.gameClear();
            }
        }
    }


    /**
     * 게임 시작시 발생하는 메소드
     * init을 통해 this.isplaying과 computer의 random값을 초기화 했었지만
     * play메소드가 실행되기 전에 랜덤숫자가 생성되는 것을 막기 위해 변경하였음
     */
    gameStart() {
        print(STRING.START);
        this.isplaying = true;
        this.computer.init();
    }

    /**
     * 데이터 판별 결과를 출력함
     * @param {number} ball
     * @param {number} strike
     * @return 
     */

    printJudgement(ball, strike) {
        if (ball + strike === 0) {
            print(STRING.NOTHING);
        }

        let str = "";
        if (ball != 0) {
            str += `${ball}${STRING.BALL} `;
        }

        if (strike != 0) {
            str += `${strike}${STRING.STRIKE}`;
        }
        
        print(str);
    }

    /**
     * 게임 클리어시(3strike) 발생하는 메소드
     */
    async gameClear() {
        print(STRING.CLEAR);

        const a = await readLineAsync(`${STRING.RESTART}\n`);
        const input = a.trim();

        throwError(!/^[1-2]$/.test(input), `${ERRORS.CLEAR_INPUT_NUMBER}`)

        if (input == RESTART_NUMBER) {
            this.computer.init();
        } else if (input == END_NUMBER) {
            this.isplaying = false;
        }
    }

}

export default App;
