## 기능 구현 목록
1. Console.print('숫자 야구 게임을 시작합니다.');
2. 컴퓨터가 중복되지 않은 임의의 수 세개 출력
라이브러리 사용, Random 사용
3. Console.readLineAsync('숫자를 입력해주세요 :'); 플레이어에게 숫자 3개 입력받기 . 
4. 오류 (try catch 구문)
- 숫자 3개 이하 3개 이상으로 입력하는 경우.
- 문자로 입력하는 경우
- 중복되는 수로 입력하는 경우
5. 플레이어에게 입력받은 수 === player
   컴퓨터가 출력한 수 === computer
6. ball => includes 같은수가 있는지 확인.   
7. strike => playerNum[] === computrtNum[] 으로 확인
             3개 이면 3스트라이크 게임종료
8. 1번 재시작 / 2번 게임종료
  - Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
  - 값이 1이면 첫번째 게임시작 문구로 돌아가야함
    ball이랑 strike 둘다 해당 사항 없으면 낫싱. 
