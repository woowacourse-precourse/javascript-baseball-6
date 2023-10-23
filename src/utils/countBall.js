/**
 * 컴퓨터와 유저 숫자 비교해서 볼, 스트라이크 카운트 세는 함수
 * @param {{computer:number[], user:number[]}} 컴퓨터, 유저 숫자
 * @returns {{ball:number, strike:number}} 볼, 스트라이크 값
 */
export default function counteBall({ computer, user }) {
  let ball = 0;
  let strike = 0;

  user.forEach((num, idx) => {
    const exist = computer.indexOf(num);

    if (exist === idx) strike++;
    else if (exist !== idx && exist !== -1) ball++;
  });

  return { ball, strike };
}
