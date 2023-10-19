import { Console } from '@woowacourse/mission-utils';

export async function guessInput() {
    let input = '';
    input = await Console.readLineAsync('숫자를 입력해주세요 : ');

    if (isNaN(input) || input.length !== 3 || isDuplicated(input)) {
        throw Error('[ERROR]서로 다른 3자리의 수를 입력해 주세요');
    } else {
        return input;
    }
}

function isDuplicated(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== i) {
            return true;
        }
    }
    return false;
}

export async function restartInput() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')

    let input = '';
    input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

    if (input === '1' || input === '2') {
        return input;
    } else {
        throw Error('[ERROR] 1 혹은 2를 입력해 주세요');
    }
}