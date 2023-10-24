/* 게임을 시작하는 기능 */
export default async function NumberBaseball() {
  const computerNumbers = CreateRandomNumber(); // RandomStart 함수 사용
  console.log(computerNumbers);
  const userNumbers = await InputUserNumber();
  console.log(userNumbers);

  do {} while (!PrintResult(CheckResult(userNumbers, computerNumbers)));
  RestartGame();
}
