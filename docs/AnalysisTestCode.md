## 1. (사용자) 입력 Mock

```
const mockQuestions = (inputs) => {
//readLineAsync : 실제 사용자로부터 입력을 받는 메소드
//jest 함수를 사용하여 해당 메소드를 mock함수로 대체
//실제 사용자에게 입력 받기를 기다리지 않고, mock함수를 호출
  MissionUtils.Console.readLineAsync = jest.fn();

  //mock 함수의 동작을 정의
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
  	//inputs.shift()를 사용하여 inputs 배열에서 맨 앞의 요소를 꺼내어 반환
    //테스트가 진행 될 때 순차적으로 inputs 배열에 있는 값을 반환
	  //첫 번째 호출에서는 inputs 배열의 있는 값들 중 첫 번째 값, 두 번째 호출에서는 두 번째 값이 반환
    const input = inputs.shift();
    //메소드가 비동기적으로 동작한다고 생각하고, input값을 resolve하는 Promise 객체를 반환
    //mock 설정은 테스트를 수행할 때 실제 사용자 입력을 대신하여 미리 준비된 배열들의 값들을 순차적으로 제공
    //실제 사용자의 입력을 기다리지 않고 원하는 입력값을 바탕으로 테스트를 수행할 수 있다.
    return Promise.resolve(input);
  });
};
```
이 테스트 파일을 수행할 때 실제 사용자 입력을 대신하여 미리 준비된 inputs 배열의 값들을 순차적으로 제공하게 된다. 실제 사용자 입력을 기다리지 않고도 원하는 입력값을 바탕으로 테스트를 수행할 수 있도록 한다.

## 2. (상대방) 랜덤 숫자 선택 Mock

```
const mockRandoms = (numbers) => {
  // MissionUtils.Random.pickNumberInRange : 컴퓨터에서 랜덤한 숫자의 범위 내에서 선택하는 메소드
  // jest 함수를 사용하여 해당 메소드를 mock함수로 대체
  MissionUtils.Random.pickNumberInRange = jest.fn();
  // reduce 함수를 통해 배열의 모든 요소를 순회하면서 누적 작업을 수행하고, 최종 결과를 반환
  // reduce에서 반환되는 값은 실제로 사용되지 않음. 순회하는 것이 주 목적
  numbers.reduce((acc, number) => {
    //mockReturnValueOnce: mock 함수가 호출될 때마다 한 번씩 순서대로 지정된 값을 반환하도록 설정
    //MissionUtils.Random.pickNumberInRange가 처음 호출될 때 numbers의 첫 번째 요소를 반환, 두 번째 호출될 때 두 번째 요소를 반환
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};
```
MissionUtils.Random.pickNumberInRange 메소드가 테스트 중에 호출 될 때, numbers 배열에 주어진 순서대로 값을 반환하도록 설정한다. 이렇게 하면 랜덤한 동작을 제거하고, 원하는 숫자 시퀀스를 사용하여 테스트를 수행 할 수 있다.

## 3. 로그 메소드 감시 및 검증

```
const getLogSpy = () => {
  //jest.spyOn 메소드: 특정 객체의 특정 메소드를 감시하는 데 사용
  //MissionUtils.Console.print 메소드 호출을 감시
  //감시된 메소드에 대한 모든 호출은 저장, 후에 테스트에서 해당 메소드에 대해 검증 가능
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  //mockClear 메소드: mock 함수에 대한 호출 기록을 초기화
  //이전에 수행된 테스트의 영향을 받지 않고 새로운 테스트를 시작 가능
  logSpy.mockClear();
  //반환된 logSpy 객체를 사용해 후에 테스트에서 MissionUtils.Console.print 메소드 호출 정보를 검증
  return logSpy;
};
```

MissionUtils.Console.print 메서드의 호출을 감시하도록 설정하고, 해당 감시 정보를 담고 있는 객체를 반환하는 역할을 한다. 이 객체를 통해 후속 테스트에서 해당 메서드의 호출에 대한 정보를 검증하게 된다.

## 4. 게임 종료 및 재시작하는 상황 테스트

```
describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", async () => {
    // given
    // 주어진 상황을 설정
    const randoms = [1, 3, 5, 5, 8, 9]; // 상대방의 랜덤으로 선택될 숫자 목록
    const answers = ["246", "135", "1", "597", "589", "2"]; // 사용자의 입력 순으로 답변
    const logSpy = getLogSpy(); 
    const messages = ["낫싱", "3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"]; // 출력 메세지 목록

	  //랜덤 숫자 및 사용자 입력을 모의하는 함수를 호출
    //테스트 실행 중에 발생하는 랜덤 숫자 및 사용자 입력을 제어
    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    // 테스트 대상의 동작을 실행
    // App 클래스 인스턴스 생성 , play 메소드를 호출해 게임 시작
    const app = new App();
    // app.play() 메소드가 예외를 발생시키지 않는 것을 확인하는 테스트
    await expect(app.play()).resolves.not.toThrow();

    // then
    // 예상한 결과를 검증
    // 각 예상되는 출력 메세지가 실제로 출력되었는지의 여부를 확인
    messages.forEach((output) => {
      //logSpy를 사용해 각 메세지가 MissionUtils.Console.print 메소드에 의해 출력되었는지 확인
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
```
게임을 종료하고 재시작하는 상황에 대한 수행을 검증한다. 주어진 상황을 설정하고, App을 실행하여 게임을 실행하고, 예상되는 출력을 검증한다.

## 5. 예외 상황 테스트

```
test("예외 테스트", async () => {
    // given
    // 주어진 상황을 설정
    const randoms = [1, 3, 5]; // 상대방의 랜덤으로 선택될 숫자 목록
    const answers = ["1234"]; // 사용자의 입력 순으로 답변 목록, **잘못된 형식**의 답변이 제시됨

	  //랜덤 숫자 및 사용자 입력을 모의하는 함수를 호출
    //테스트 실행 중에 발생하는 랜덤 숫자 및 사용자 입력을 제어
    mockRandoms(randoms);
    mockQuestions(answers);

    // when & then
    // 미션 수행과 결과를 검증
    // App 클래스의 인스턴스를 생성
    const app = new App();
    
	  // app.play() 메소드를 호출했을 때, 예외 발생
	  // 해당 예외 메세지에 "[ERROR]" 문자열이 포함되어있는지 확인
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
```

게임을 사용하는 사용자로부터 잘못된 형식의 입력에 대한 예외 처리를 검증하고 있다. 사용자가 4자리 숫자를 입력했을 때, 게임이 "[ERROR]"를 포함한 예외 메세지를 발생시키는지 확인하고 있다.