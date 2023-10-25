# 우테코 1주차 "숫자 야구 게임" 기능 목록

---
---
### 함수 별 기능
1. play
    - 게임 시작 문구 출력
    - 반복문으로 onePlay 실행
        - 한 게임 종료 후 숫자 입력 받고 전체 종료 여부 결정
            - 입력 에러 체크

2. onePlay
    - makeAnswer로 정답 생성
    - 정답일 때까지 반복문
        - 사용자 입력 받기
            - 입력 에러 체크
        - checkInput으로 strike, ball 받기
        - makeResultString으로 strike, ball 값을 통해 힌트 결과 문자열 받고 출력
    - 다시 진행 할 것인지 입력 받고 리턴 

3. makeResultString
    - strike, ball 개수가 0인지의 여부로 나눠 string 리턴

4. checkInput
    - 정답과 입력을 비교하여 strike, ball 리턴
        - 자릿수마다 동일 여부 및 동일하진 않지만 포함 여부 이용

5. makeAnswer
    - 1~9까지의 숫자 중 겹치지 않게 3개의 원소를 배열로 생성 후 리턴 
---

### 예외 처리
1. 사용자의 정답 입력 시
    - 3자리 수가 아니면 에러 리턴 및 종료 

2. 하나의 게임 종료 후 숫자 입력 시
    - 1,2가 아닌 경우 에러 리턴 및 종료 
