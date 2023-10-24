# 미션 - 숫자 야구

## 🕹 구현할 기능 목록

- 사용자 : 서로 다른 3자리의 수 입력
- 컴퓨터 : 서로 다른 3자리의 랜덤 숫 생성
- 입력된 숫자와 랜덤 숫자 비교
- 입력한 수에 대한 결과 볼, 스트라이크 개수로 표시
- 컴퓨터가 선택한 숫자 맞추면 종료
- 잘못 입력시 예외 발생
- 게임이 끝난 경우 재시작(1)/종료(2) 구분

## ✏️ Study

### 객체지향

### 🫧 Jest : Javascript Unit Test(단위 테스트)

#### mocking?

mocking은 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 mock(모조품)로 대체하는 기법

- `jest.fn()` : 개별적으로 하나씩 mock functiton(가짜 함수)를 생성
- `mockReturnValue(리턴 값)` : 사용자가 return 값 지정
- `mockImplementation(구현 코드)` : 동작하는 가짜 함수를 즉석으로 구현

- `jest.spyOn(object, methodName)` : 어떤 객체에 속한 함수의 구현을 가짜로 대체하지 않고, 해당 함수의 호출 여부와 어떻게 호출되었는지만을 알아내야 할 때 사용
- describe() : 연관된 테스트 함수들을 구룹화

##### `expect()`

특정 조건을 검사하여 테스트이 성공 또는 실패를 판단

- `.not` : 반대되는 것을 테스트
- `.resolves` : Promise 성공
- `.rejects` : Promise 실패
- `toThrow()` : 예외 발생 여부 테스트
  <br>toThrow()는 인자도 받는데 문자열을 넘기면 예외 메시지를 비교하고 정규식을 넘기면 정규식 체크
- `.toHaveBeenCalledWith(arg1, arg2, ...)` : 특정 인수를 사용하여 모의 함수가 호출되었는지 확인하는 데 사용
- `stringContaining(string)` : 해당 문자열을 포함하는지 확인

### 🌵 Javascript Grammar

- `NaN` = Not-A-Number(숫자가 아님)

- `export` : 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용
  - `named`
  - `default`
- `import` : 다른 모듈에서 내보낸 바인딩을 가져올 때 사용

- `shift()` : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
- `some()` : 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
  <br>만약 배열에서 주어진 함수가 true을 반환하면 true를 반환하고 그렇지 않으면 false를 반환

- `throw` : 사용자 정의 예외를 발생(throw)
  <br> 예외가 발생하면 함수가 중지되고 catc문으로 전달
  <br>호출자 함수 사이에 catch문이 없으면 프로그램 종료

#### 비동기 작업 처리 Promise

- `async` : 함수 정의 앞에 붙어서 해당 함수가 비동기 함수임을 나타냄
- `await` : 비동기 작업이 완료될 때까지 함수의 실행을 일시 중단 시키는 역할

##### Promise

비동기 작업을 처리하기 위한 객체

- `Promise.resolve()` : 이행된 Promise 를 반환 (성공)
- `Promise.reject()` : 거부된 Promise 객체를 반환 (실패)
