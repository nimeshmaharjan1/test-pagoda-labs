export const checkStringWithNumbers = (inputArr: string[]): string[] => {
  return inputArr.filter((item) => {
    for (let character of item) {
      //checking if the character is a number
      if (!isNaN(Number(character))) {
        return true;
      }
    }
    return false;
  });
};
