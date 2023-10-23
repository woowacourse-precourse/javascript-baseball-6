const MESSEAGE = Object.freeze({
    START_GAME : '숫자 야구 게임을 시작합니다.',
    INPUT_NUMBER : '숫자를 입력해주세요 : ',
    BALL : '볼',
    STRIKE : '스트라이크',
    NOTHING : '낫싱',
    CELEBRATE_END : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    RESTART_EXIT : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', 
    STRIKEOUT : '3스트라이크',
    RESTART : '1',
    EXIT : '2',
})

export default MESSEAGE  

/*
import { Console } from "@woowacourse/mission-utils";


async function show(){
    while(1){
        const answer = await Console.readLineAsync(MESSEAGE.INPUT_NUMBER)
        if(answer === "5147") return answer 
    }
}

async function play(){
    const result = await show();
    console.log(result)
}

play();
*/