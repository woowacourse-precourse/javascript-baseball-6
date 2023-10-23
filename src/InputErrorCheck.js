export const inputErrorCheck = (INPUT_FOR_ERROR_CHECK) => {
    const SET_INPUT = new Set([...INPUT_FOR_ERROR_CHECK]);
    //중복된 값 입력시 예외 처리, 입력 길이가 3이 아니면 예외 처리
    if ((SET_INPUT.size !== 3) || (SET_INPUT.size !== INPUT_FOR_ERROR_CHECK.length)) {
        throw new Error('[ERROR] 서로 다른 숫자 3개를 입력해주세요');
    }

    INPUT_FOR_ERROR_CHECK.forEach((v) => {
        //입력 값에 0이 포함되어 있으면 예외 처리
        //숫자가 아닌 값을 입력했을 때 예외 처리
        if (v === 0 || isNaN(v)) {
            throw new Error("[ERROR] 올바른 값을 입력해주세요");
        }
    })
}