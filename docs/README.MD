# 기능명세서

## 기능 리스트

- Traget Number 생성
- 사용자 입력 생성
  - 사용자 입력 검증
- Target Number와 사용자 입력 비교
- Game 종료 조건와 ReGame 조건 비교

### 기능 상세설명

1. 게임 시작 메세지 출력

2. 중복없는 숫자 3개 랜덤 생성함수 : generateTargetNumbers

generateTargetNumbers 힘수 상세 설명

> - 중복없이 숫자를 담기 위해 set으로 생성
> - while문을 돌면서 랜덤으로 숫자 1개씩 뽑고 set에 추가한다.
> - set의 size가 3이 되면 빠져나온다.
> - 스프레드 연산자로 set을 배열로 만든다.

3. 사용자 입력 검증함수 : validUserInput

validUserInput 함수 상세 설명

> - 사용자 입력이 3개인지 확인
> - 사용자 입력이 숫자로 이루어져 있는지 확인
> - 사용자 입력에 중복값이 있는지 확인
> - 위의 세 조건을 만족하지 못하면 throw Error

4.
