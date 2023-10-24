export default function getRandomAnswer() {
  //숫자 범위 내에서 지정된 개수만큼 겹치지 않는 숫자를 반환
  return Random.pickUniqueNumbersInRange(1, 9, 3);
}
