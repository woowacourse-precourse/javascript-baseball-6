import { Console } from '@woowacourse/mission-utils';
import generateRandomNum from './generateRandomNum';
import startGame from './startGame';

export default async function reGame() {
  const RE_GAME = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  
  if (RE_GAME === '1') {
    const COM_NUM = await generateRandomNum();

    return startGame(COM_NUM);
  }
  if (RE_GAME === '2') {
    return ;
  }
}