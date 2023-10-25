import {Console, MissionUtils} from "@woowacourse/mission-utils";

const Set_Computer=(digit_num=3)=>{//컴퓨터 랜덤 숫자 저장하기 (3자리 숫자)
    let computer = [];
    while (computer.length < digit_num) {
        const number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) {
            computer.push(number);
        }
    }
    return computer;
}

const Count_Num = (computer, input, LENGTH) => { // 스트라이크와 볼의 개수를 세는 함수

    let strike_num=0;
    let ball_num=0;

    for (let i = 0; i < LENGTH; i++) {
        for (let j = 0; j < LENGTH; j++) {
            if (i === j && computer[i] == input[j]) {//스트라이크인 경우
                strike_num += 1;
            }

            else if (i !== j && computer[i] == input[j]) {//볼인 경우
                ball_num += 1;
            }
        }
    }

    return [strike_num, ball_num];
}

const Print_Result = (strike_num, ball_num) => {
    // 사용자 입력에 대한 결과 출력
    if (ball_num > 0 && strike_num > 0) {
        Console.print(ball_num + '볼 ' + strike_num + '스트라이크');
    } else if (strike_num > 0) {
        Console.print(strike_num + '스트라이크');
    } else if (ball_num > 0) {
        Console.print(ball_num + '볼');
    } else if (ball_num === 0 && strike_num === 0) {
        Console.print("낫싱");
    }
}

const Check_Input = (input, computer)=>{
    // 사용자에게 유효한 숫자를 입력받았는지 확인

    //길이 확인
    if (input.length !== computer.length) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    //중복되는 입력값이 있는지 확인,
    if(input[0] === input[1] || input[1] === input[2] || input[2] === input[0]){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    //0이 포함되어 있는지 확인
    if('0' in input){
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
}

const Check_Continue=(input)=>{
    // 게임 종료 시점에서 유효한 입력이 들어왔는지 확인
    if (input != 1 && input != 2) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
}


class App {
    async play() {
        //게임 시작
        Console.print("숫자 야구 게임을 시작합니다.");

        //컴퓨터 랜덤 숫자 저장하기 (3자리 숫자)
        let computer = Set_Computer();

        //게임의 종료 판단 flag
        let flag = 1;

        //게임을 계속할건지 결정하는 입력 저장 변수
        let continue_num = 1;

        //입력값 저장 변수 (string)
        let user;

        //스트라이크와 볼의 값을 저장 변수
        let strike_num;
        let ball_num;

        while (flag) {

            try {
                //사용자 입력받기
                user = await Console.readLineAsync("숫자를 입력해주세요 : ");
                //올바른 입력인지 확인
                Check_Input(user, computer);

            } catch (e) {
                flag = 0;
                continue;
            }

            //스트라이크, 볼 값 초기화
            strike_num = 0;
            ball_num = 0;

            //strike와 ball개수 계산
            [strike_num, ball_num] = Count_Num(computer, user, computer.length);


            //스트라이크, 볼 출력하기
            Print_Result(strike_num, ball_num);

            //게임 종료
            if (strike_num === computer.length) {

                Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

                //종료시 입력 받기 및 예외처리
                try {
                    continue_num = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");
                    //유효한 입력인지 확인
                    Check_Continue(continue_num);
                } catch (e) {
                    flag = 0
                    continue;
                }

                if (continue_num === '1') {//새로 시작
                    //컴퓨터 값 변경하기
                   computer=Set_Computer();
                }
                else if (continue_num === '2') {//종료
                    flag = 0;
                }


            }


        }


    }


}


export default App;

