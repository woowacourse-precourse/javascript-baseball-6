import { MissionUtils } from "@woowacourse/mission-utils";

// answer type: 정수형
const Game = async (answer) => {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    // 정답과 사용자 입력을 비교하여 볼, 스트라이크 개수를 출력하는 함수
    const getScore = (ans, input) => {
        let strike = 0;
        let ball = 0;
        for(let i=0; i<3; i++){
            if (ans.indexOf(input[i]) !== -1) {
                if (ans.indexOf(input[i]) === i) {
                    strike += 1;
                } else {
                    ball += 1;
                }
            }
        }
        if(strike === 0 && ball === 0){
            return '낫싱'
        }
        else{
            let console_log = '';
            if(ball){
                console_log += ball.toString() + '볼 '
            }
            if(strike){
                console_log += strike.toString() + '스트라이크'
            }
            return console_log;
        }

    }

    // 게임 종료까지 무한반복
    while(true){
        const USER_INPUT_STR = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
        const USER_INPUT = parseInt(USER_INPUT_STR, 10);

        // 예외 조건으로 게임 종료
        if (isNaN(USER_INPUT)){
            throw "[ERROR] 입력이 숫자가 아닙니다.";
        }
        if(USER_INPUT_STR.length !== 3){
            throw "[ERROR] 숫자가 잘못된 형식입니다.";
        }
        if(USER_INPUT_STR[0] === USER_INPUT_STR[1] || USER_INPUT_STR[0] === USER_INPUT_STR[2] || USER_INPUT_STR[1] === USER_INPUT_STR[2]) {
            throw "[ERROR] 입력이 서로 다른 수가 아닙니다.";
        }

        // 사용자의 점수 출력( 볼, 스트라이크, 낫싱)
        MissionUtils.Console.print(getScore(answer.toString(), USER_INPUT.toString()));

        // 게임의 종료조건
        if (answer === USER_INPUT) {
            MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
            break
        }

    }
}

export default Game;
