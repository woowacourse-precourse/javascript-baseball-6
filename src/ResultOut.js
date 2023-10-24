export const resultOut = (RANDOM_ARRAY, INPUT_ARRAY) => {

    let score = [0,0];
    INPUT_ARRAY.forEach((ELEMENT, INDEX_NUMBER) => {
        if (RANDOM_ARRAY.includes(ELEMENT)) {
            if (RANDOM_ARRAY.indexOf(ELEMENT) === INDEX_NUMBER) {
                score[1] += 1;
            } else {
                score[0] += 1;
            }
        }
    });
    if (score[0] !== 0 && score[1] !== 0) {
        return `${score[0]}볼 ${score[1]}스트라이크`;
    } else if (score[0] === 0 && score[1] !== 0) {
        return `${score[1]}스트라이크`;
    } else if (score[0] !== 0 && score[1] === 0) {
        return `${score[0]}볼`;
    } else if (score[0] === 0 && score[1] === 0) {
        return `낫싱`;
    }
}
