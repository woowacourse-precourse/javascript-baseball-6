import {Console} from '@woowacourse/mission-utils';
const answerAndAskUser = async function answerUserAndDecideWhetherToTerminateThatGameAndAskIfUserWantsToPlayAain (result) {

    if(!result.length===2) {console.log('에러났다잉')};
    const [strikes,balls] = result;

    if(strikes===0) {
        if(balls===0) {
            Console.print('낫싱');
        }

        else {
            Console.print([balls,'볼'].join(''));
        }
    } 

    else{
        if(balls===0) {
            Console.print([strikes,'스트라이크'].join(''));
            
        }

        else {
            Console.print([balls,'볼 ',strikes,'스트라이크'].join(''));
        }
    }

    if(strikes===3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        try {
            const playAgain = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
            if(!(playAgain==='1'||playAgain==='2')){ throw new Error(); }
            return playAgain;
        }

        catch(error) {
            Console.print('[ERROR] 숫자가 잘못된 형식입니다.');
        }
    }

    return '3';
}

export default answerAndAskUser;
