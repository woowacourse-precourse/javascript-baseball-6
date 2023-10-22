import MESSAGE from '../constants/message.constans.js';
/**
 * @param {Object} matching - matching 정보가 담긴 객체
 * @param {number} person.ball - 볼 개수
 * @param {number} matching.strike - 스트라이크 개수
 */
function hintFromMatching(matching) {
  let hint = '';

  // 3스트라이크 = 게임 종료
  if (matching.strike === 3) {
    hint = MESSAGE.end;
  }

  // 같은 수가 전혀 없는 경우 -> 낫싱
  if (!matching.ball && !matching.strike) {
    hint = MESSAGE.hint.nothing;
  }

  // 볼과 스트라이크 둘 다 있을 때 -> N볼 M스트라이크
  if (matching.ball && matching.strike) {
    hint = `${matching.ball}${MESSAGE.hint.ball} ${matching.strike}${MESSAGE.hint.strike}`;
  }

  // 볼만 있을 경우 -> N볼
  if (matching.ball && !matching.strike) {
    hint = `${matching.ball}${MESSAGE.hint.ball}`;
  }

  // 스트라이크만 있을 경우 -> M볼
  if (matching.strike && !matching.ball) {
    hint = `${matching.strike}${MESSAGE.hint.strike}`;
  }

  return hint;
}

export default hintFromMatching;
