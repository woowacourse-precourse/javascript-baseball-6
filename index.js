import App from "./src/App.js";

const app = new App();
app
  .play()
  .then(() => {
    console.log("Game has finished");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
