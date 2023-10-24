export default async function getResult(answer, number) {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] == number[i])
      strike++;
    else if (number.includes(answer[i]))
      ball++;
  }
  let str = '';
  if (strike === 0 && ball === 0)
    str += '낫싱'
  if (ball > 0)
    str += ball + '볼 '
  if (strike > 0)
    str += strike + '스트라이크'
  return str;
}