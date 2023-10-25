import {Console, MissionUtils} from '@woowacourse/mission-utils';

class App{
    constructor(){
        this.randomNumber = this.generateRandomNumbers();
        this.runningPlay = true;
        this.init();
    }

    init(){
        Console.print('숫자 야구 게임을 시작합니다.');
    }

    generateRandomNumbers(){
        const computer = [];
        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return computer;
    }

    validateInputError(userNumber){
        const userNumberSet = new Set(userNumber.split('').map(Number));

        if (userNumber.length !== 3) return '[ERROR] 입력값은 세자리 수를 입력해주세요.';
        if ([...userNumberSet].length !== 3) {
        return '[ERROR] 중첩되지 않는 세자리 수를 입력해주세요.';
        }
        if (userNumber.includes(' ')) return '[ERROR] 공백은 넣지 말아주세요.';
        if (Number.isNaN(userNumber)) return '[ERROR] 숫자만 입력해주세요.';

        return 'PASS';
    }

    countBall(randomNumber, userNumber){
        var balls = 0;
        for(var index =0; index<3; index++){
            // 같은 index의 숫자는 다르지만 userNumber[index]가 randomNumber에 포함
            if(randomNumber[index] !== Number(userNumber[index])
            && randomNumber.includes(Number(userNumber[index]))){
                balls+=1;
            }
        }
        return balls;
    }

    countStrike(randomNumber, userNumber){
        var strikes = 0;
        for(var index =0; index<3; index++){
            // 같은 index의 숫자는 다르지만 userNumber[index]가 randomNumber에 포함
            if(randomNumber[index] === Number(userNumber[index])){
                strikes+=1;
            }
        }
        return strikes;
    }

    showUserResult(ballCount, strikeCount){
        if(ballCount!==0 && strikeCount!==0) {
            Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
        }
        if(ballCount!==0 && strikeCount===0) Console.print(`${ballCount}볼`);
        if(ballCount===0 && strikeCount!==0) Console.print(`${strikeCount}스트라이크`);
        if(ballCount===0 && strikeCount===0) Console.print('낫싱');
    }
    async answerCorrect(){
        Console.print('3스트라이크');
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');        
    }

    printWithDelay(message) {
        return new Promise((resolve) => {
            Console.print(message);
            resolve();
        });
    }

    async play(){
        while(this.runningPlay){
            try{
                const userNumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
                const result = this.validateInputError(userNumber);
                if(result === 'PASS') {
                    const ballCount = this.countBall(this.randomNumber, userNumber);
                    const strikeCount = this.countStrike(this.randomNumber, userNumber);
                    if(strikeCount === 3){
                        this.answerCorrect();
                        const decision = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
                        var decisionNumber = Number(decision);
                        if(decisionNumber === 1) {
                            this.randomNumber = this.generateRandomNumbers();       
                        }
                        if (decisionNumber === 2) {
                            await this.printWithDelay('게임 종료');
                            this.runningPlay = false;
                        }
                    }
                    if(strikeCount!==3){
                        this.showUserResult(ballCount,strikeCount);
                    }
                }
                if(result!=='PASS') throw new Error(result);
                
            }catch(error){
                Console.print(error);
                this.runningPlay = false;
            }
        }
    } 
}

//const app = new App();
//app.play().catch(error=> Console.print(error));

export default App;