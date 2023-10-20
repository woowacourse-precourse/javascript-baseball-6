export function resultOut(random, inputNo) {
    let input = inputNo.split('').map(v => {
        if (isNaN(v)) {
            throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        } else {
            return parseInt(v);
        }
    });
    if(new Set([...input]).size !== 3){
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }



    let strike = 0;
    let ball = 0;
    let result = '';
    input.forEach((element, indexNumber) => {
        if (random.includes(element)) {
            if (random.indexOf(element) === indexNumber) {
                strike++;
            } else {
                ball++;
            }
        }
    });
    if (ball !== 0) {
        result += `${ball}볼`
    }
    if (strike !== 0 && result.length !== 0) {
        result += ` ${strike}스트라이크`;
    }else if (strike !== 0 && result.length === 0) {
        result += `${strike}스트라이크`;
    }
    if (ball === 0 && strike === 0) {
        result += `낫싱`;
    }
    return result;
}
