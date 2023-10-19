import {Console, MissionUtils} from "@woowacourse/mission-utils";

import readline from "readline";

class App {
    async play() {
        //게임 시작
        Console.print("숫자 야구 게임을 시작합니다.\n");

        //컴퓨터 랜덤 숫자 저장하기 (3자리 숫자)
        const computer = [];

        while (computer.length < 3) {
            const number = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        Console.print(computer);

        //게임이 끝나는지 확인하는 flag
        let flag = 1;
        //게임을 계속할건지 결정하는 입력
        let continue_num = 1;
        //입력받을 변수 선언
        let input;

        let strike_num;
        let ball_num;

        while (flag && continue_num != 2) {

            //입력받기, 입력 type : string


            //길이가 3이 아닐 때, 서로 다른 수가 아닐 때
            try{
                input = await Console.readLineAsync("숫자를 입력해주세요 : ");
                if (input.length !== 3 || input[0] === input[1] || input[1] === input[2] || input[2] === input[0] ) {
                    throw new Error("숫자 잘못 입력하였다.");
                }
            }catch (e){
                flag=0
                continue;
            }

            strike_num = 0;
            ball_num = 0;

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    //[strike_num, ball_num] = Check(computer, input, i, j, strike_num, ball_num);
                    if (i === j ) {
                        //스트라이크일 경우
                        if (computer[i] == input[j]) {
                            strike_num += 1;
                        }
                    }
                    if (i !== j) {
                        if (computer[i] == input[j]) {
                            ball_num += 1;
                        }
                    }
                }
            }
            if (ball_num > 0) {
                Console.print(ball_num + '볼 ');
            }
            if (strike_num > 0) {
                Console.print(strike_num + '스트라이크');
            }
            if (ball_num===0 && strike_num===0){
                Console.print("낫싱");
            }

            if (strike_num === 3) {
                Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료\n");
                try {
                    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

                    if (continue_num != 1 && continue_num != 2) {
                        throw new Error("종료시 잘못 입력됨");
                    }
                }catch (e){
                    flag=0
                }
                if(continue_num===1){
                    const computer = [];

                    while (computer.length < 3) {
                        const number = MissionUtils.Random.pickNumberInRange(1, 9);
                        if (!computer.includes(number)) {
                            computer.push(number);
                        }
                    }
                }
                if(continue_num===2){
                    flag=1
                }


            }


        }


    }


}

const Check = ({computer, input, i, j, strike_num, ball_num}) => {
    for (let j = 0; j < 3; j++) {
        if (i === j ) {
            //스트라이크일 경우
            if (computer[i] == input[j]) {
                strike_num += 1;
            }
        }
        if (i !== j) {
            if (computer[i] == input[j]) {
                ball_num += 1;
            }
        }
    }
    return strike_num, ball_num
}

const app = new App();
app.play();
export default App;

