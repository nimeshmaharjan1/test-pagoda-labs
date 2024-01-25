export function getTop3Hashtags(headline: string): string[] {
  // remove punctuation marks (like commas, periods, etc) from the input headline
  // and split into words based on whitespace
  const words = headline.replace(/[^\w\s]/g, "").split(/\s+/);

  // sorting the words by length in descending order so the first 3 are the longest ones
  words.sort((a, b) => b.length - a.length);

  // this will handle the less than 3 words conditions too
  const top3Words = words.slice(0, 3);

  // Transform the top 3 longest words into hashtags
  const hashtags = top3Words.map((word) => `#${word}`);
  return hashtags;
}
