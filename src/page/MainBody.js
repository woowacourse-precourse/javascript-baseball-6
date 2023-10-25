import { MissionUtils } from "@woowacourse/mission-utils";
import errorDetection from "../components/ErrorDetection.js";
import compareNumbers from "../components/CompareNumbers.js";

async function body(computer_num){
    let strike = 0;
    do{
        let player_num = [...await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")].map(Number);
        
        if(errorDetection(player_num)){
            MissionUtils.Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
            throw new Error("[ERROR]");
        }
        strike = compareNumbers(computer_num, player_num)

    }while(strike !== 3);

    return false;
}

export default body;