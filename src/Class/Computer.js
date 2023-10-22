import { MissionUtils } from "@woowacourse/mission-utils"

export default class Computer{
    number = []

    constructor(){
        this.generateRandNum()
    }

    generateRandNum = () => {
        this.number = []
    
        while(this.number.length < 3){
            const number = MissionUtils.Random.pickNumberInRange(1, 9)
            if(!this.number.includes(number)) this.number.push(number)
        }
        
        return this.number
    }
}