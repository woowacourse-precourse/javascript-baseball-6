# 숫자 야구

## 진행 flow

- 임의의 숫자 3개 결정 (컴퓨터)
- 임의의 숫자 3개 입력 (유저)
    - 일치하지 않음
        - 볼/스트라이크/낫싱
        - 3개 입력하는 단계로 되돌아감
    - 일치함
        - 3스트라이크, 게임 종료
        - 재시작/종료 입력 (유저)
            - 재시작하면 최초 단계로 되돌아감
            - 종료하면 끝

## 겪은 문제

- 테스트 시 : Reached heap limit Allocation failed - JavaScript heap out of memory
    - 다른 거(기능 요구 사항) 고쳤는데 이게 해결됨
    - 데이터 누수 문제이며 할당량을 강제로 늘려 해결할 수 있다고 함

- 예외 테스트 통과 실패
    - UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "[ERROR] 숫자가 잘못된 형식입니다.".
    - try-catch 의 미숙한 사용으로 인한 에러, new Error를 사용하여 에러 해소

- npm test 이후 Jest가 종료되지 않음
    - Jest did not exit one second after the test run has completed.