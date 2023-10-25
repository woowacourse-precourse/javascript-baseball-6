import mainPage from "./page/MainPage.js";

class App {
  async play() {
    mainPage();
  }
}

export default App;

const app = new App();
app.play();