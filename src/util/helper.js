import {MissionUtils} from "@woowacourse/mission-utils";

export const randomNumber = () => {
    const NUMBER_ARRAY = [];
    while (NUMBER_ARRAY.length < 3) {
        const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!NUMBER_ARRAY.includes(NUMBER)) {
            NUMBER_ARRAY.push(NUMBER);
        }
    }
    return NUMBER_ARRAY
}

export const checkNumber = (input) => {
    // 3.1 숫자가 입력이 되었는가?
    if (isNaN(input)) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    // 3.2 3자리수가 입력이 되었는가?
    if (String(input).length !== 3) throw new Error("[ERROR] 입력된 값이 3자리수가 아닙니다.");
    // 3.3 모두 다른 숫자가 입력이 되었는가?
    const STRING_INPUT = String(input)
    if (STRING_INPUT[0] === STRING_INPUT[1] || STRING_INPUT[1] === STRING_INPUT[2] || STRING_INPUT[2] === STRING_INPUT[0]) throw new Error("[ERROR] 입력된 값이 중복되는 수가 있습니다.");
    // 3.4 유효성 검사에서 실패할경우 [ERROR]를 포함한 에러문구 출력하고 프로그램을 종료한다.
}
