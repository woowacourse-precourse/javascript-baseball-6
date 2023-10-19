구현한 기능 목록

- 메세지 폴더
  시작 메세지 : 숫자 야구 게임을 시작합니다.
  종료 메세지 : 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.

- 입력 (user)
  서로 다른 3자리의 수
  게임이 끝난 경우 재시작 / 종료를 구분하는 1 또는 2

- 출력 (computer)
  같은 수를 처리하는 함수
  같은 자리에 있는지 처리 하는 함수
  두 개가 모두 true 일 경우에는 strike
  다른 자리에 있으면 ball

- 예외 처리
  잘못된 값 입력시 throw 후 게임 종료

- 테스트
  테스트 ApplicationTest 적용

- 이름
  컴퓨터 : computer
  한번 시도 : try

- 규칙
  함수 사용 : Random.pickNumberInRange(), Console.readLineAsync, Console.print
  123 : 123 => 3스트라이크
  123 : 321 => 3볼
  123 : 132 => 2볼 1스트라이크
  123 : 456 => 낫싱
