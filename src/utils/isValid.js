function isValid(playerInput) {
  if (playerInput.length !== 3) return false;
  if (isNaN(Number(playerInput))) return false;

  let set = new Set(playerInput);
  if (set.size !== 3) return false;

  return true;
}

export default isValid;
