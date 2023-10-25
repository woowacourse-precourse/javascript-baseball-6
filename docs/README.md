# 구현할 기능

- MainPage : 콘솔에 찍어낼 문자를 출력하는 파일
    - '숫자 야구 게임을 시작합니다.' 출력
    - RandomNumGenerator : 상대방(컴퓨터)의 난수를 생성
    - MainBody : 받은 상대방(컴퓨터)의 난수를 통해 숫자게임 진행
        - ErrorDetection : 플레이어가 입력한 숫자의 형식 판별
        - CompareNumbers : 플레이어가 입력한 숫자와 상대방(컴퓨터)의 난수를 비교
            - PrintBallStrike : 비교한 숫자로 볼, 스트라이크, 낫싱을 출력
    - restart 여부 판별