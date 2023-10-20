export function resultOut(random, inputNo) {
    let input = inputNo.split('').map(v => parseInt(v));
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
        result += `${ball}볼 `
    }
    if (strike !== 0) {
        result += `${strike}스트라이크`
    }
    console.log(result);
}

resultOut([1, 2, 3], '123');