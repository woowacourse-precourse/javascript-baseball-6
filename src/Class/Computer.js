import { MissionUtils } from "@woowacourse/mission-utils"

export default class Computer{
    number = []

    // 컴퓨터 난수 생성
    generateRandNum = () => {
        this.number = []
    
        while(this.number.length < 3){
            // 난수를 불러와 중복되지 않는 경우에만 배열에 push
            const number = MissionUtils.Random.pickNumberInRange(1, 9)
            if(!this.number.includes(number)) this.number.push(number) 
        }
        return this.number // 컴퓨터 난수를 배열 형태로 return. ex) [1, 2, 3]
    }
}