import {Console, MissionUtils} from "@woowacourse/mission-utils";

class Game{
    gameStart(){
        Console.print("숫자 야구 게임을 시작합니다.")
    }

    generateRandomNum(){
        const COMPUTER = [];
        while (COMPUTER.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!COMPUTER.includes(number)) {
                COMPUTER.push(number);
            }
        }
        return COMPUTER;
    }

    userInput(){
        const USERNUM = Console.readLineAsync("숫자를 입력하세요 : ");
        if(USERNUM.length !==3 || isNAN(USERNUM)){
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        return USERNUM;
    }

    checkNumber(userNum){
        let strike = 0;
        let ball = 0;

        for(let i = 0 ; i < 3; i++){
            if(thie.COMPUTER[i]===this.userInput[i]) {
                strike++;
            } else if(this.COMPUTER.includes(this.userInput[i])){
                ball++;
            }
            return{strike,ball}
        }

        if(strike===3){
            console.print("3스트라이크");
            console.print("3개의 숫자를 모두 맞추셨습니다! 게임종료")

            return true;
        } else {
            const STRIKECOUNT = strike > 0 ? `${strike}스트라이크` : '';
            const BALLCOUNT = ball > 0 ? `${ball}볼` : "";
            const NOTHING = strike === 0 && ball === 0 ?'낫싱' : '';
            return `${STRIKECOUNT} ${BALLCOUNT} ${NOTHING}`;
        }

        function askForRestart(){
            const CHOICE = console.readLineAsync("게임을 새로 시작 하려면 1, 종료하려면 2를 입력하세요. ");

            if(CHOICE === '1'){
                GameManager();
            } else if (CHOICE ==='2'){
                console.print("게임 종료");
            }

        }
    }


}








export default Game;