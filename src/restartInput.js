import { Console } from '@woowacourse/mission-utils';

// 정답을 맞춘 경우, 재시작 input을 받고 유효성 검사를 통해 반환
async function restartInput() {
  let input = '';
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
  input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');

  // 올바르지 않은 input 시 error 예외 발생
  if (input !== '1' && input !== '2') {
    throw Error('[ERROR] 1 혹은 2를 입력해 주세요');  
  }
  
  return input;
}

export default restartInput;
