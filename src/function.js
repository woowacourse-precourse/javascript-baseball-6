import { MissionUtils } from "@woowacourse/mission-utils";
    // 랜덤 숫자 생성
    // 입력 받기
    // 입력 받은 것 예외 판단(3자리 아닌 것 또는 숫자 아닌 것 입력)
    // 스트라이크 판단
    // 볼 낫싱 판단
    // 스트라이크 볼 출력
    // 게임 종료 시 재시작 및 종료
export default async function name() {
    let strikes=0;
    let balls=0;
  const random = MissionUtils.Random.pickNumberInRange(100, 999).toString();
  const input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ");
}
