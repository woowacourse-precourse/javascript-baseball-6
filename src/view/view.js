import { MissionUtils } from '@woowacourse/mission-utils';

class View {
  static async input(query) {
    const answer = await MissionUtils.Console.readLineAsync(query);
    return answer;
  }

  static print(content) {
    MissionUtils.Console.print(content);
  }
}
export default View;
