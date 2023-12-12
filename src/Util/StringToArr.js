export const StringToArr = (string) => {
  const processedString = string?.split('');
  processedString?.map((e, i) => {
    processedString[i] = parseInt(e);
  });
  return processedString;
};
