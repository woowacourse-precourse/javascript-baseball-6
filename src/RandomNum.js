import { Console, MissionUtils, Random } from "@woowacourse/mission-utils";

function randomNum(){
    const randomNumber = [];

    while(randomNumber.length < 3){
        let number = Random.pickNumberInRange(1,9);
        if(!randomNumber.includes(number)){
            randomNumber.push(number);
        }
    }
    return randomNumber
}

export default randomNum