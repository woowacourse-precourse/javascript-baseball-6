import { Console } from '@woowacourse/mission-utils';

async function Input() {
    let answer;
    let answerArr = [];
    Console.print('숫자를 입력해주세요 : ')

    answer = await Console.readLineAsync();
    answerArr = [Number(answer[0]), Number(answer[1]), Number(answer[2])];

    if(answer.length !== 3){
        throw new Error("[ERROR]"); 
    }else if(answerArr[0] === answerArr[1] || answerArr[0] === answerArr[2] || answerArr[1] === answerArr[2]){
        throw new Error("[ERROR]"); 
    }else if(!answerArr.includes(1, 2, 3, 4, 5, 6, 7, 8, 9)){
        throw new Error("[ERROR]"); 
    }else{
        return answerArr;
    }
}

export default Input;