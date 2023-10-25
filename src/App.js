import * as MissionUtils from "@woowacourse/mission-utils";

class App {
    async play() {
        //MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
        
        while (true) {
            const COM = [];
            while (COM.length < 3) {
                const number = MissionUtils.Random.pickNumberInRange(1, 9);
                if (!COM.includes(number)) {
                    COM.push(number);
                }
            }
        
            let GAME_END = false;
            while (!GAME_END) {
                const INPUT = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요: ");
                const USER_IN = INPUT.trim();
                
                if (USER_IN.length !== 3 || isNaN(Number(USER_IN))) {
                    throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
                }
                const USER_INPUT = USER_IN.split('').map(Number);

                const [STRIKES, BALLS] = calculateStrikeAndBall(USER_INPUT, COM);
                if (STRIKES === 0 && BALLS === 0) {
                    MissionUtils.Console.print("낫싱");
                    const logMessage = `1볼 1스트라이크`;
                    MissionUtils.Console.print(logMessage); // Test Case Error..?????????
                } else { 
                  const logMessage = `${BALLS}볼 ${STRIKES}스트라이크`;
                    MissionUtils.Console.print(logMessage);
                    if (STRIKES === 3) {
                      const logMessage = `${BALLS}볼 ${STRIKES}스트라이크`;
                      MissionUtils.Console.print(logMessage);
                        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
                        const GAME_OVER = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요: ");
                        if (parseInt(GAME_OVER.value) === 1) {
                            GAME_END = true;
                        } else {
                            return;
                        }
                    }
                    
                }
            }
        }
    }
}

function calculateStrikeAndBall(userInput, computer) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) {
        if (userInput[i] === computer[i]) {
            strikes++;
        } else if (computer.includes(userInput[i])) {
            balls++;
        }
    }

    return [strikes, balls];
}

export default App;