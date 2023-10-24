구현할 기능 정리

## 유저
- [v] 숫자를 입력할 수 있다.
- [ ] 게임이 끝난 뒤, 종료하거나 재시작할 건지 선택할 수 있다.

## 컴퓨터
- [v] 난수를 생성할 수 있다.
- [ ] 유저 숫자와 비교하여 결과를 출력할 수 있다.

## 기타 안내
- [v] 게임 시작을 안내한다.


유저
속성: 입력한 숫자
행동: 숫자 입력, 재시작할 건지 선택
컴퓨터
속성: 정답
행동: 난수 생성, 유저와 비교, 비교한 결과 출력, 게임 종료 또는 재시작


//처음 작성했던 문서..
**구현할 때 꼭 기억할 것
##질문
$$공부할 것

페이지 구별

<StartPage>

1. computer 난수 생성

서로 다른 세자리 숫자(0 미포함)지만, 100~999까지의 난수를 추출하는 게 아니라
computer_array를 선언하고 1~9까지 골라서 하나씩 저장

1) 세 번 for 문 돌려서 받음

2) 단, 같은 숫자가 포함되는지 if문으로 확인
  -> 예시 computer 배열 안에 들어가는 변수를 number로 선언하고, include method를 활용

const computer = [];
while (computer.length < 3) {
	const number = MissionUtils.Random.pickNumberInRange(1, 9);
	if (!computer.includes(number)) {
		computer.push(number);
	}
}


2. 게임 시작 문구 출력

console API 사용
Console.print('숫자 야구 게임을 시작합니다.');

</StartPage>


<NumInsertPage>
3. user에게 숫자 입력 받음

1) 배열 선언 및 입력 안내 및 저장
  console API 사용 
  const user = await Console.readLineAsync('숫자를 입력해주세요.');
  ##promise로 숫자를 반환한다고 하는데.. 그럼 그 promise를 가지고 배열로 나눠야 하는 거겠죠~?
  $$promise 공부

</NumInsertPage>

<NumComparePage>
2) 숫자 순회 : 세자리 숫자를 숫자로 받는 게 아니라 문자열로 받으면 자리마다 하나씩 저장됨.
##promise로 받아서 해야 되는데... 먼저 공부를


4. 에러메시지 && 비교결과 (스트라이크, 볼, 낫싱) 저장

1) 숫자가 유효한지 확인 -> 에러메시지
  - 숫자인지 -> 숫자 아니면 바로 에러
  - 0이 포함되었는지 -> 순회하다가 0 들어가면 바로 에러
  - 세 자리인지 -> 배열 요소 개수 세기
  - 서로 다른 숫자로 구성되었는지 -> 순회하면서 확인
  [ERROR] 숫자가 잘못된 형식입니다.
  ##어떻게 구별할 건지 -> 타입구별연산자
  ##바로 앱 종료 어케함

2) 비교결과 저장
  - 같은 수 같은 자리 : strike++
  - 같은 수 다른 자리 : ball++
  for문 중첩 -> user_array, computer_array 둘 같이 돌림

3) 비교 결과 출력
  Console.print('n볼 m스트라이크');
  ##n에 저장한 값을 어떻게 넣지?! %n(c언어) 처럼!

4) 틀렸으면 다시 3으로 돌아감! -> 라우팅 <NumInsertPage>
##vanillaJS로 라우팅 해야됨 -> 굳이 라우팅 아니고 while쓰면 되잖아!!!
</NumComparePage>

<GameEndPage>
5. 맞았으면 게임 종료 안내, 새로 시작 묻기

1) 게임 종료 안내
  Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

2) 게임 새로 시작할 건지 묻고 -> 사용자에게 입력받는 대로 라우팅하기
##라우팅
  Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
</GameEndPage>