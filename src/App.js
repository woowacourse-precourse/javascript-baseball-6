import PlayGame from "./PlayGame.js";

export default function App() {
  this.play = async () => {
    const playGame = new PlayGame();
    playGame.play();
  };
}

const app = new App();
app.play();
