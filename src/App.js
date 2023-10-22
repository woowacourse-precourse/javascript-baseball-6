import {Console} from '@woowacourse/mission-utils';
import GameUtil from './GameUtil';

class App extends GameUtil{
    constructor(){
        super();
        this.init();
    }

    init(){
        this.randomNumber = super.generateRandomNumbers();
        Console.print('숫자 야구 게임을 시작합니다.');
    }

    async play(){
        try{
        const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
        await this.validateInput(userNumber);
        }catch(error){
            Console.print(error);
        }
    }

    validateInput(userNumber){
        const result = super.validateInput(userNumber);
        if(result === 'PASS') return this.countNumberResult(userNumber);
        throw new Error(result);
    }

    countNumberResult(userNumber){
        const ballCount = super.countBall(this.randomNumber, userNumber);
        const strikeCount = super.countStrike(this.randomNumber, userNumber);

        if(strikeCount === 3) return this.answerCorrect();

        Console.print(super.showUserResult(ballCount, strikeCount));
        return this.play();
    }

}

const app = new App();
app.play().catch(error=> Console.print(error));

export default App;