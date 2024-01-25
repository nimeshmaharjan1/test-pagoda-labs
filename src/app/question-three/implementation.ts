//O(n)
export function generateLongestNonRepeatingSubstringWithLinearTime(
  input: string
): string {
  let longestSubstring = "";
  let currentSubstring = "";
  // a hashmap to store the last seen index of each character
  const charIndexMap: Record<string, number> = {};

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    // saving the last seen index of the current character from the hashmap
    console.log({ charIndexMap });
    const lastSeenIndex = charIndexMap[char];

    // checking if the current character has been seen within the current substring
    if (
      lastSeenIndex !== undefined &&
      lastSeenIndex >= i - currentSubstring.length
    ) {
      /**
       * If the current character has been seen before within the current substring,
        it means there is a repeating character.

        In that case, we update the current substring by removing everything from the first occurrence of the repeated character to the current character.
        
        This effectively removes the repeated character and all characters before it from the current substring,ensuring that the current substring remains non-repeating. 
        */
      currentSubstring = input.slice(lastSeenIndex + 1, i);
    }

    currentSubstring += char;

    // Update the last seen index of the current character in the hashmap
    charIndexMap[char] = i;

    // Update the longest substring if the current substring is longer
    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }

  return longestSubstring;
}

// O(n²) Alt+0178
function longestNonRepeatingSubstring(input: string): string {
  let longestSubstring = "";
  let currentSubstring = "";

  for (let char of input) {
    const charIndex = currentSubstring.indexOf(char);
    if (charIndex !== -1) {
      currentSubstring = currentSubstring.slice(charIndex + 1);
    }
    currentSubstring += char;
    if (currentSubstring.length > longestSubstring.length) {
      longestSubstring = currentSubstring;
    }
  }

  return longestSubstring;
}
