# 미션 - 숫자 야구

## 1. 과제 제출 전 해야할 것

- [x]  Node.js 설치 - 18.17.1 이상으로 설치

  ~~18.18.2로 설치 완료!~~

- [x]  npm 설치
- [x]  프리코스 과제 제출 방법 확인
- [x]  미션 fork 해오기 + 새 브랜치 (won0104) 파기
- [x]  구현 방법 & 테스트 방법 확인하기 (파일 구조 확인)

  구현 : App.js에 play 함수 안에 구현
  테스트 코드 작성 : ApplicationTest.js 파일에 테스트 코드 작성
  테스트 실행 : 콘솔에 `npm Test`
  테스트시, 출력하기 : `console.log("")`  → app.js랑 test 파일 둘 다에서 사용 가능

## 2. 기능 요구 사항
<details>
<summary> 기본 구현 설명 </summary>


### 기본 구현 설명

- 1~9까지 서로 다른 수로 이루어진 3자리 수 맞추는 게임 (컴퓨터 보다 먼저 맞추면 승리)
- **스트라이크** : 같은 수 같은 자리
  **볼** : 같은수 다른자리
  **낫싱** : 같은 수가 전혀 없을 때

**실행 단계**

1. 컴퓨터 (상대) : 1~9까지 서로 다른 임의의 수 3개 선택
2. 플레이어 : 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자 입력
3. 컴퓨터 : 입력한 숫자에 대한 결과 출력
4. 1,2,3 반복하여 컴퓨터의 숫자 3개를 모두 맞히면 게임 종료
5. 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있음
6. 사용자가 잘못된 값을 입력하면 throw 문을 사용해 예외 발생 후 애플리케이션 종료
</details>

<details>
<summary> 입출력 요구 사항 </summary>

### 입출력 요구 사항

**입력**

- 서로 다른 3자리의 수
- 게임이 끝난 경우 재시작/ 종료를 구분하는 1과 2 중 하나의 수

**출력**

- 입력한 수에 대한 결과를 볼, 스트라이크 개수로 표시

```
1볼 1스트라이크
```

- 하나도 없는 경우

```
낫싱
```

- 3개의 숫자를 모두 맞힐 경우

```
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
```

- 게임 시작 문구 출력

```
숫자 야구 게임을 시작합니다.
```

- 예외 상황

```
 [ERROR] 숫자가 잘못된 형식입니다. //**[ERROR]“로 시작**
```

### 실행 결과 예시

> 숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 671
2볼
숫자를 입력해주세요 : 216
1스트라이크
숫자를 입력해주세요 : 713
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
1
숫자를 입력해주세요 : 123
1볼
...
>
</details>

## 3. 개발 진행 플로우 - 기능 명세
### 개체 정의 
#### 🖥️ 컴퓨터

- 속성 : 맞춰야하는 정답
- 행동 : 플레이어에게 문제를 내고, 정답을 확인한다

#### 🙋‍♀️ 플레이어

- 속성 : 입력한 숫자
- 행동 : 문제를 맞춘다. 계속 진행 여부를 판단한다.

### 개체간 상호작용 정의 (구현 기능)
#### 🖥️ 컴퓨터
- [ ] 정답 숫자 3개를 선택한다 (서로다른 1~9)
- [ ] 플레이어의 숫자를 받고, 유효성 검증
- [ ] 입력받은 숫자를 정답과 비교한다
- [ ] 비교 결과를 플레이어게 전달한다
- [ ] 사용자의 입력이 잘못되면 게임을 종료시킨다
- [ ] 사용자의 요구에 따라 게임을 종료하거나 다시 시작한다

#### 🙋‍♀️ 플레이어
- [ ] 숫자를 3개 입력한다
- [ ] 결과를 받는다
- [ ] 정답을 맞춘 뒤, 게임 진행 여부를 결정할 수 있다


### 예외 처리 - TestCode 작성

## 4. 제출 직전 확인

- [ ]  `npm test` 로 동작 확인하기
- [ ]  컨벤션 지켰는지 다시 한번 확인
