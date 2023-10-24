const ballCount = (playerInputNumberArray, computerPickedNumberArray) => {
  return playerInputNumberArray.filter((number) =>
    computerPickedNumberArray.includes(number)
  ).length;
};

const strikeCount = (playerInputNumberArray, computerPickedNumberArray) => {
  return playerInputNumberArray.filter(
    (number, index) => computerPickedNumberArray[index] === number
  ).length;
};
