# 우테코 프리코스 1주차 - 프론트엔드

## 미션 - 숫자 야구

### 구현할 기능 순서

1. 다음 문장과 함께 게임을 시작한다. "숫자 야구 게임을 시작합니다."

2. 상대방 역할인 컴퓨터는 1부터 9까지 서로 다른 임의의 수 3개를 선택한다.

3. "숫자를 입력해주세요 :" 를 출력하고, 게임 플레이어에게 해당 문구 뒤에 컴퓨터가 선택했다고 생각하는 서로 다른 3개의 숫자를 입력받는다.

4. 먼저 게임 플레이어가 3 단계에서 입력한 3개의 값을 검증한다.

   a) 입력한 값이 서로 다른 임의의 수 3개를 입력하였는가?

   b) 입력한 값이 1에서 9까지의 범위인가?

5. 4 단계의 검증이 통과되면 게임 플레이어가 입력한 값과 컴퓨터가 선택한 값을 비교 후 스트라이크와 볼의 갯수를 판단한다.

   - 게임 플레이어 입력값을 A, 컴퓨터가 선택한 값을 B라고 했을 때,

   - A와 B의 값 중 각 숫자가 같은 자리, 같은 수로 일치한다면 스트라이크다.
   - A와 B의 값 중 각 숫자가 같은 수 이지만 다른 자리에 있다면 해당 숫자는 볼이다.
   - 스트라이크, 볼의 경우가 하나도 없으면 낫싱이다.

6. 5단계에서 판단한 결과를 출력 후 게임 종료 여부를 판단한다.

   - 출력은 스트라이크, 볼의 갯수 혹은 낫싱이다.

   - 만약 3 스트라이크라면 다음 문구를 출력하고 게임을 종료한다. "3개의 숫자를 모두 맞히셨습니다! 게임 종료" 이후 7단계로 넘어간다.

   - 3스트라이크가 아닌 경우 3단계로 돌아간다.

7. 해당 문구를 출력하고, 게임 플레이어의 입력을 받는다. "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요." (해당 입력은 문구의 다음 줄에 받는다.)

8. 7 단계에서 입력받은 값을 검증한다.

   a) 해당 입력 값이 한 자리의 1 혹은 2의 값인가?

9. 입력한 값이 1이라면 2단계로 다시 돌아가 게임을 시작하고, 2라면 숫자 야구 게임을 종료한다.
