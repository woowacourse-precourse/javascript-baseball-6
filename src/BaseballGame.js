import { Console } from '@woowacourse/mission-utils';

async function getUsernumber() {
    try {
        const usernumber = await Console.readLineAsync('숫자를 입력해주세요 : ');
    } catch (error) {
        // reject 되는 경우
    }
}
