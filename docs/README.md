<h4>1. "@woowacourse/mission-utils" 에서 {MissionUtils}를 import 한다.</h4>;
2. constructor에 컴퓨터가 주는 랜덤 숫자를 담을 빈 배열  COMNUMBER을 작성한다. 
3. getStart() : 숫자야구 게임 시작 코멘트
4. getComNum() :  COMNUMBER에 랜덤 숫자 3개를 담는다.
5. isDifferent() : 플레이어가 기입한 숫자 3개가 각각 다른지를 확인한다.


*****play()****

-시작코멘트 메소드를 호출한다.
-컴퓨터에게 3가지 숫자를 받는다.
-while문에 PLAY변수를 true로 넣고 false가 되면 게임은 종료된다.

-PLAYERNUMBER에 플레이어가 기입한 숫자를 담는다.
-플레이어가 기입한 숫자가 3개인지 문자가 아닌지 판별한다.
-플레이어가 기입한 숫자 3개가 각각 다른지 확인한다.
-ISSAME에는 스트라이크가 몇개인지를 담고 ISINCLUDE에는 볼이 몇개인지를 담는다.
-ISSAME과 ISINCLUDE를 가지고 스트라이크인지 볼인지를 출력한다.
-플레이어가 맞출 때 까지 반복 된다.
-스트라이크가 3개인 경우 1과 2를 누르면 재시작 또는 종료 할 수 있게 한다.
