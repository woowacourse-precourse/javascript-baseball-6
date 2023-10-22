export const showResult = () => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
      if (computerArray[i] === playerArray[i]) { strike++; }
      else if (playerArray.includes(computerArray[i])) { ball++; }
  }

  const result = [];
  if (strike > 0) result.push(`${strike} 스트라이크`);
  if (ball > 0) result.push(`${ball} 볼`);

  if (strike === 3) {
    Console.print("성공!");
    return;
  }
  if (result.length === 0) {
    Console.print("낫싱");
    return;
  }

  Console.print(result.join(' '));
}