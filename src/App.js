class App {
  constructor() {
    this.strikeCount = 0;
    this.ballCount = 0;
  }

  async play() {
    console.log("게임 시작");
    this.handleSubmitInput();
  }

  handleSubmitInput() {
    const submitBtn = document.querySelector("#user--submit");
    const userValue = document.querySelector("#user--input");
    const selectUlElement = document.querySelector(".result--table");

    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // user input 배열로 변환
      const userInputValue = userValue.value;
      const playerScores = [...userInputValue].map((el) => Number(el));
      // 조건문
      if (playerScores.length !== 3) {
        // message.innerHTML = MESSAGE.ERROR;
        alert("1~9까지의 수로 이루어진 3자리의 중복없는 숫자를 입력해 주세요.");
        userValue.innerHTML = "";
        return;
      }
      console.log(playerScores);
      console.log(computer);

      //iteration
      const strikesArray = [];
      // let strikeCount = 0;
      // let ballCount = 0;
      const ballsArray = [];
      for (let i = 0; i < 3; i++) {
        // playerScore index가 computer index와 일치하는 경우
        if (playerScores[i] === computer[i]) {
          // strikeCount += 1;
          this.strikeCount += 1;
          strikesArray.push(this.strikeCount);
          // console.log("strikeCount  = ", strikesArray.length);
          // alert(strikeCount);
        } else if (computer.includes(playerScores[i])) {
          this.ballCount += 1;
          ballsArray.push(this.ballCount);

          // console.log("ballCount = ", ballsArray.length);
        }
      }

      if (strikesArray.length >= 3) {
        console.log(`🎉 3스트라이크
        3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
      } else if (strikesArray.length > 0 && ballsArray.length > 0) {
        const strikeAndBallMessage = document.createElement("li");
        strikeAndBallMessage.textContent = ` 볼${ballsArray.length} 스트라이크${strikesArray.length}`;
        selectUlElement.appendChild(strikeAndBallMessage);
        console.log("strikeCount  = ", strikesArray.length);

        //   const ballLi = document.createElement("li");
        // ballLi.textContent = `볼${ballsArray.length}`;
        // selectUlElement.appendChild(ballLi);

        // const strikesLi = document.createElement("li");
        // strikesLi.textContent = ` 스트라이크 ${strikesArray.length}`;
        // selectUlElement.appendChild(strikesLi);
      }

      // const ballLi = document.createElement("li");
      // ballLi.textContent = `볼${ballsArray.length}`;
      // selectUlElement.appendChild(ballLi);

      // console.log("ballCount = ", ballsArray.length);
    });
  }
}

const app = new App();
app.play();
export default App;
