import { Console } from '@woowacourse/mission-utils';

async function Restrat() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    const input = Number(await Console.readLineAsync());
    return input;
}

export default Restrat;