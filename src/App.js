import { Console, MissionUtils } from "@woowacourse/mission-utils";



// 컴퓨터는 랜덤값 추출
// ㄴ 아래 있는 `Random.pickNumberInRange()`를 활용 예시는 README.md참조
// 나는 내가 입력한 값이 맞는지 확인하는 것을 구현

// 컴퓨터 랜덤값 추출
// 숫자 입력값 받음
// 컴퓨터가 입력한 값을 배열로 표현 - 배열1
// ㄴ 배열로 입력값 받음
// 내가 입력한 값을 배열로 표현 - 배열2


// 만약 배열의 길이가 3이 아니면 예외 발생시킨후 throw문을 사용하여 애플리케이션 종료
// ㄴ에러([ERROR]) 표시
// 배열1의 length(혹은 3만큼)반복시키면서 배열2만큼 다시 반복 시키면서 같은 값이 있는지 확인
// 만약 같은 값이 있으면 index값이 같은지 확인하고(for문 썼으니 i==j인지) 같으면 카운트++
// 만약 같은 값이 있있는데 index값이 다르면(else if) 다르면 카운트2++ 
// 카운트만큼 스트라이크 카운트2만큼 볼
// 만약 카운트가 0이면 스트라이크는 표시하지 않음 카운트2가 0이면 볼은 표시하지 않음
// 만약 카운트==0 && 카운트2==0이면 낫싱 표시
// 카운트==0&& 카운트2==0 도 아니고 카운트==3도 아니면 숫자 입력 다시 받음
// 만약 카운트가 3이면 3스트라이크 표시 후 '3개의 숫자를 모두 맞히셨습니다! 게임 종료' 표시
// 이후 '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.' 표시후 입력값 받음
// ㄴ 입력값이 1이면 App재실행 2이면 애플리케이션 종료(위에 예외 발생과는 다른듯)

// - `@woowacourse/mission-utils`의 `Random` 및 `Console` API를 사용하여 구현해야 한다.
//   - Random 값 추출은 `Random.pickNumberInRange()`를 활용한다.
//   - 사용자의 값을 입력 받고 출력하기 위해서는 `Console.readLineAsync`, `Console.print`를 활용한다.





// -----------------------------이것은 async쓰기 전 promise 썼을때로 예상되는 코드

// const promise = new Promise((resolve, reject) =>{

//   let na = String(Console.readLineAsync);
//   let naArray = Array.from(na);

//   if(naArray.length != 3){
//     reject(new Error("[ERROR]]"));
//   } else if (naArray.length ==3){
//    resolve(naArray) 
//   }
// })
// promise
// .then(naArray=>{
//   let strike =0;
//   let ball =0;
//   let gameset =0;
  
//   for(let i=0; i<computer.length; i++){
//     for(let j=0; j<naArray.length;j++){
//       if(computer[i]==naArray[j]){
//         if(i==j){
//           strike++
//         } else if(i!=j){
//           ball++
//         }
//       }
//     }
//   }
//   if(strike==0 && ball == 0){
//     Console.print(`낫싱\n`);
//   } else if(strike!=0 && ball !=0){
//     Console.print(`${ball}볼 ${strike}스트라이크\n`);
//   } else if(strike!=0 && ball ==0){
//     Console.print(`${strike}스트라이크\n`);
//   } else if(strike==0 && ball !=0){
//     Console.print(`${ball}볼\n`);
//   }
//   if(strike==3){
//     Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`)
//     gameset = Console.readLineAsync;
//     if(gameset ==1){
//       let re = new App.play();
//       // 위와 같이 하면 내가 입력하는 값은 몰라도 랜덤생성 컴퓨터 값은 안 바뀔수 있으니 확인해야 함
//     } else if(gameset ==2){
//       return
//     }
//   } else if(strike!=3){
//     na = Console.readLineAsync;
//   }
// })
// .catch(Console.print("[ERROR]"))

// ---------------------------------------------

class App {
  // constructor(){
  //   return this.play();
  // }
  async play() {

    let computer =[];
    while (computer.length<3){
    let number = MissionUtils.Random.pickNumberInRange(1,9);
    if(!computer.includes(number)){
      computer.push(number);
    }
    }

  let na = String(Console.readLineAsync);
  let naArray = Array.from(na);

  if(naArray.length != 3){
    throw new Error("[ERROR] 3자리 숫자를 입력하세요");
  } else if (naArray.length ==3){
   return [computer, naArray];
  }
  }}  
this.play().then(([computer,naArray]) =>{
  let strike =0;
  let ball =0;
  let gameset =0;
  
  for(let i=0; i<computer.length; i++){
    for(let j=0; j<naArray.length;j++){
      if(computer[i]==naArray[j]){
        if(i==j){
          strike++
        } else if(i!=j){
          ball++
        }
      }
    }
  }
  if(strike==0 && ball == 0){
    Console.print(`낫싱\n`);
  } else if(strike!=0 && ball !=0){
    Console.print(`${ball}볼 ${strike}스트라이크\n`);
  } else if(strike!=0 && ball ==0){
    Console.print(`${strike}스트라이크\n`);
  } else if(strike==0 && ball !=0){
    Console.print(`${ball}볼\n`);
  }
  if(strike==3){
    Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`)
    gameset = Console.readLineAsync;
    if(gameset ==1){
      new App.play();
      // 위와 같이 했을때 랜덤생성 컴퓨터 값 포함하여 제대로 재시작 되는지 확인
    } else if(gameset ==2){
      return
    }
  } else if(strike!=3){
    na = Console.readLineAsync;
  }
})

export default App;
