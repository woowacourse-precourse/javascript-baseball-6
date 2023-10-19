//1부터 9까지 서로 다른 수로 이루어진 3자리의 수
//같은 수가 같은 자리에 있으면 스트라이크
//같은 수가 다른 자리에 있으면 볼
//같은 수가 전혀 없으면 낫싱




class App {
  async play() {
    function startGame(){
      alert('숫자 야구 게임을 시작합니다')
      alert('숫자를 입력해주세요 : ')
    }
    function askInput(input){
      console.log(`숫자를 입력해주세요 : ${input}`)
    }
    function validateInput(input){
      //예외 상황 1 - 입력값이 없을 때
      !num
      //예외 상황 2 - 입력값이 숫자가 아닌 경우
      typeof num !== 'number'
      //예외 상황 3 - 세 자리 숫자가 아닌 경우
        const numArr = String(num).split('').map((num)=> +num)
      numArr.length !== 3 
      // 예외 상황 4 - 숫자가 중복될 때(고유하지 않을 때)
      !isExceptional(numArr)
        const isExceptional = (arr) => {
         if(arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[0]){
          return true
         } else {return false}
      }

    }
   
    


  }
}

export default App;
