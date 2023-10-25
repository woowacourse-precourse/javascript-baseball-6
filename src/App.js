import * as MissionUtils from "@woowacourse/mission-utils";

// 모듈화하여 재사용성 가독성 확장성 높임
class App {
  async play() {
    try{
    var isNewGame = true;

    while(isNewGame){
    var computer_number3 = []; // 랜덤으로 생성하고
    var user_number3 = []; // 사용자가 쓴거
    

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")

    computer_number3 = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3); // 배열 형태로 리턴하는듯
    
    // readLine
    // MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input)=> {
    //   console.log("입력한 숫자는: " + input);
    //   user_number3 = [...input].map(Number);
    //   console.log(user_number3); 
    // })

    // readLineAsync
    var input = await MissionUtils.Console.readLineAsync("숫자를 입력해주세요 : ")

    if(input==1) {
      // computer_number3 = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
      MissionUtils.Console.print("게임을 재시작합니다.");
      isNewGame = true; // 게임 재시작
    } else 
    if(input==2) {
      MissionUtils.Console.print("게임 종료합니다.");
      //isNewGame = false; // 게임 종료
      input = 1;
    }

    else {
      user_number3 = [...input].map(Number);
  
      if (user_number3.length !== 3) {
        throw new Error("[ERROR] 3개의 숫자를 입력해야 합니다.");
      } 
    }

    console.log("computer_number3 : ",computer_number3, "user_number3 : ",user_number3); 

    var balls = 0;
    var strikes = 0;

    // 스트라이크 검사
    for(let i=0; i<3; i++){
      if(computer_number3[i] == user_number3[i]) {
        strikes++;
        console.log(`🏏🏏🏏 strike 추가합니다 (${i+1}번째)`)
      } else if (computer_number3.includes(user_number3[i])){
        balls++;
        console.log(`⚾⚾⚾ ball 추가합니다 (${i+1}번째)`)
      }
    }

    console.log("strke :", strikes, " balls :", balls);

    if(strikes==3) {
      MissionUtils.Console.print(`${strikes}스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      MissionUtils.Console.print(`게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.`);
    }
    else if (balls==0 && (strikes==1 || strikes ==2)){
      MissionUtils.Console.print(`${strikes}스트라이크`);
    }
    else if (balls!=0 && (strikes==1 || strikes ==2)) {
      MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`);
    }
    else if (balls!=0 && strikes == 0){
      MissionUtils.Console.print(`${balls}볼`);
    }
    else if (balls==0 && strikes ==0){
      MissionUtils.Console.print("낫싱");
    }
    

    // if(1버튼 누르면) 게임 다시 실행
    // else if(2버튼 누르면) 종료

    }
  } catch(error){
    console.error(error);
  }
}
}

/* 
MissionUtils.Random.pickNumberInRange(1,9);// 1에서 10 숫자반환
MissionUtils.Random.pickNumberInList(array) // 배열 중 숫자하나반환
MissionUtils.Random.pickUniqueNumbersInRange(1,10,2) // 범위내에서 숫자 2개 반환
MissionUtils.Random.shuffle(array) // 섞어줌 
MissionUtils.Console.readLineAsync("너랑얘기안할라고"); //콘솔 입력
MissionUtils.Console.print("message!!")
/*

/*
const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}
*/

export default App;
