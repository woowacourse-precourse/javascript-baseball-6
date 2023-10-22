class App {
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
      let strikeCount = 0;
      let ballCount = 0;
      const ballsArray = [];
      for (let i = 0; i < 3; i++) {
        // playerScore index가 computer index와 일치하는 경우
        if (playerScores[i] === computer[i]) {
          strikeCount += 1;
          strikesArray.push(strikeCount);
          console.log("strikeCount  = ", strikeCount);
          alert(strikeCount);

          const liElement = document.createElement("li");
          liElement.textContent = `strikeCount = ${strikeCount}`;
          selectUlElement.appendChild(liElement);
        } else if (computer.includes(playerScores[i])) {
          ballCount += 1;
          console.log("ballCount = ", ballCount);
        }
      }
    });
  }
}

const app = new App();
app.play();
export default App;
