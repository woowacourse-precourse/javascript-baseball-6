import { MissionUtils } from "@woowacourse/mission-utils";

class Computer{

    constructor() {
        this.ball = 0
        this.strike = 0
        this.computerNumber = [];
      }

    createNumber() {
        this.computerNumber = []
        while(this.computerNumber.length<3){
            let number = MissionUtils.Random.pickNumberInRange(1,9)
            if(!this.computerNumber.includes(number)){
                this.computerNumber.push(number)
            }
        }
        return this.computerNumber
    }


    checkNumber(setNumber,computerNum){
        let message = ''
        this.ball = 0
        this.strike = 0
        for(let i = 0; i<3; i++){
            if (setNumber.includes(computerNum[i])) {
                if (setNumber[i] === computerNum[i]) {
                  this.strike++;
                } else {
                  this.ball++;
                }
              }
        }
        
        if(this.ball !== 0){
            message += `${this.ball} 볼 `
        }
        if(this.strike !== 0){
            if(message !== ''){
                message += ' '
            }
            message += `${this.strike} 스트라이크`
        }
        if(this.ball === 0 && this.strike === 0){
            message == '낫싱'
        }
        return message
    }
}

export default Computer