export function resultOut(random, inputNo) {
    const INPUT = inputNo.split('').map(v => {
        if (isNaN(v)) {
            throw new Error('[ERROR] 숫자만 입력해주세요');
        } else if (v === '0') {
            throw new Error('[ERROR] 0을 입력하면 안됩니다.')
        } else {
            return parseInt(v);
        }
    });
    if(new Set([...INPUT]).size !== 3 || new Set([...INPUT]).size !== INPUT){
        throw new Error('[ERROR] 서로 다른 숫자 3개를 입력해주세요');
    }

    let score = new Array(2).fill(0);
    INPUT.forEach((ELEMENT, INDEX_NUMBER) => {
        if (random.includes(ELEMENT)) {
            if (random.indexOf(ELEMENT) === INDEX_NUMBER) {
                score[1] += 1;
            } else {
                score[0] += 1;
            }
        }
    });
    if (score[0] !== 0 && score[1] !== 0) {
        return `${score[0]}볼 ${score[1]}스트라이크`;
    }else if (score[0] === 0 && score[1] !== 0) {
        return `${score[1]}스트라이크`;
    }else if (score[0] !== 0 && score[1] === 0) {
        return `${score[0]}볼`;
    }else if (score[0] === 0 && score[1] === 0) {
        return `낫싱`;
    }
}
