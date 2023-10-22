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
    async answerCorrect(){
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임종료');
        const decision = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
        if(Number(decision) === 1) await this.restart();
        else if(Number(decision) === 2) await this.terminate();
        else if(Number(decision)!==1 && Number(decision)!== 2) await this.answerCorrect();
    }

    restart(){
        this.randomNumber = super.generateRandomNumbers();
        this.play();
    }
    
    async terminate(){
        this.printWithDelay('게임 종료');
        process.kill(process.pid);
    }

}

const app = new App();
app.play().catch(error=> Console.print(error));

export default App;