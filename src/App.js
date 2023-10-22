class App {
  async play() {

    // 컴퓨터의 랜덤숫자
    let computer=[];
    function computerNum(){
      while(computer.length<3){
        randomNum=(Math.floor(Math.random()*9));
        if(computer.indexOf(randomNum)==-1){
          computer.push(randomNum);
        }
      }
      return computer;
    }

    let inputNum = [];
    // inputNum의 유효성 검사
    function check(input){
      // 3자리 수인가?
      if(input.length!=3){
        return alert('[ERROR] 3자리 숫자를 입력하세요.');
      }
      // 중복값이 있는가?
      else if(new Set(input).size!=3){
        return alert('[ERROR] 중복되지 않는 3자리 숫자를 입력하세요.');
      }
      return inputNum.push(input);
    }
    
    while(check==true){
      computerNum();
    }

    do{
    let strike=0; // 숫자 동일, 인덱스 동일
    let ball=0; // 숫자 동일, 인덱스 다름
    let nothing=0; // 숫자 다름, 인덱스 다름
    
    let inputStr = prompt('3자리 숫자를 입력하세요.(0~9 사이의 숫자): ');
    inputNum=Number(inputStr.split(''));
    inputNum++;

    for(let i=0; i<computer.length; i++){
      for(let j=0; j<inputNum.length; j++){
        if(computer[i]==inputNum[j]){
          if(i==j){
            strike++;
          }
          else{
            ball++;
          }
        } else{
          nothing++;
        }
      }
    }
  }
  while(strike<3);
  alert('3스트라이크! 게임 종료합니다.')
}
}

const app= new App();
app.play();

export default App;
