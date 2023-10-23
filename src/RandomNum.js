import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";

function randomNum(){
    this.randomNumber = [];
    const randomNumber = this;

    while(randomNumber.length < 3){
        let number = MissionUtils.Random.pickNumberInRange(1,9);
        if(!randomNumber.includes(number)){
            randomNumber.push(number);
        }
    }
    Console.print(randomNumber)
}

export default randomNum