const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class App {
  async play() {
    rl.on("line", function (number) {
      console.log(number);
      rl.close();
    }).on("close", function () {});
  }
}

export default App;
