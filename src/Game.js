// 기능3. 컴퓨터값과 사용자값을 비교하며 볼, 스트라이크, 낫싱 판별. 두 값이 같을때까지 반복

export function game(computer, user1){
  let ball = 0;
  let strike = 0;
  for(let x=0; x<3; x++){
    for(let y=0; y<3; y++){
      if(computer[x] === +user1[y]){ // 컴퓨터값과 사용자값이 일치하는게 있음(볼,스트라이크)
        if(x===y){
          strike++;
        }
        else{ // 위치가 다를때(볼)
          ball++;
        }
      }
    }
  }
  if(ball != 0){
    if(strike !=0){
      return (`${ball}볼 ${strike}스트라이크`);
    }else{
      return (`${ball}볼`);
    }
  }else{
    if(strike !=0){
      return (`${strike}스트라이크`);
    }else{
      return ('낫싱');
    }
  }
}