import { MissionUtils } from "@woowacourse/mission-utils";

//서로 같지않은 랜덤숫자 3개 만들기
const randomNum = async() => {
    let answer = [];
    while(answer.length < 3) {
        let num = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!answer.includes(num)){
            answer.push(num);
        }
    }
    return answer;
}

export default randomNum;