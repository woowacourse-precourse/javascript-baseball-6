async function userInput(message) {
  const input = await Console.readLineAsync(message);
  return input;
}

export { userInput }