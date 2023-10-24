/* 사용자의 수 입력과 입력값 확인을 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";

export default async function inputUserNumber(){
    const number = MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
    .then((res) => {
        const valudateNumber = inputNumberValidate(res);
        return valudateNumber;
    })
    .catch((error) => {
        return MissionUtils.Console.print(error);
    });
    
    return number;
}

function inputNumberValidate(inputNumber){
    const numberLength = inputNumber.length;
    const numberSize = new Set(inputNumber.split("")).size;
    const numberCheck = isNaN(inputNumber);

    if(numberLength === 3 && numberSize === 3 && numberCheck == false){
        return inputNumber;
    } else {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    
}