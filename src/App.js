import mainPage from "./page/MainPage.js";

class App {
  async play() {
    return mainPage();
  }
}

export default App;

const app = new App();
app.play();