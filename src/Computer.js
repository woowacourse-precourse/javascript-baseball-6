import { MissionUtils } from "@woowacourse/mission-utils";

class Computer{
    ball = 0
    strike = 0
    computerNumber = [];
    createNumber() {
        while(this.computerNumber.length<3){
            number = MissionUtils.Random.pickNumberInRange(1,9)
            if(!this.computerNumber.includes(number)){
                this.computerNumber.push(number)
            }
        }
    }
    checkNumber(string){
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(this.computerNumber[i] === string[j]){
                    if( i === j ){
                        this.strike++
                    }else{
                        this.ball++
                    }
                }
            }
        }
        if(this.strike === 0 && this.ball === 0){
            return '낫싱'
        }else if(this.strike === 0 && this.ball !== 0){
            return `${this.ball} 볼`
        }else if(this.strike !== 0 && this.ball === 0){
            return `${this.strike} 스트라이크`
        }else{
            `${this.ball} 볼 ${this.strike} 스트라이크`
        }
    }
}

export default Computer