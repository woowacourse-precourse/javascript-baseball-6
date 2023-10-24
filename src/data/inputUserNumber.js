/* 사용자의 수 입력과 입력값 확인을 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from '../comm/text.js';

export default async function inputUserNumber(){
    const number = MissionUtils.Console.readLineAsync(`${TEXT.INPUT_NUMBER}`)
    .then((res) => {
        MissionUtils.Console.print(`${TEXT.INPUT_NUMBER} ${res}`);
        const valudateNumber = inputNumberValidate(res);
        return valudateNumber;
    })
    .catch((error) => {
        return MissionUtils.Console.print(error);
    });
    
    return number;
}

const inputNumberValidate = (inputNumber) => {
    const numberLength = inputNumber.length;
    const numberSize = new Set(inputNumber.split("")).size;
    const numberCheck = isNaN(inputNumber);

    if(numberLength === 3 && numberSize === 3 && numberCheck == false){
        return inputNumber;
    } else {
        throw new Error(`${TEXT.INPUT_ERROR}`);
    }
};