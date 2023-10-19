/**
 * 두 리스트를 비교
 * strike , ball 개수 계산하여 반환
 */

/**
 * @param {{dest: number[], src: number[]}}
 */

function throwBall({ dest, src }) {
  let strike = 0;
  let ball = 0;

  src.forEach((srcNum, srcIdx) => {
    const foundIdx = dest.findIndex((destNum) => destNum === srcNum);

    if (foundIdx === srcIdx) {
      strike += 1;
    } else if (foundIdx !== -1) {
      ball += 1;
    }
  });

  return { strike, ball };
}

export default throwBall;
