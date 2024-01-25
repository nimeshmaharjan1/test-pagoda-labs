export function calculateAdditivePersistence(n: number): number {
  const digits = n
    .toString()
    .split("")
    .map((s) => +s);

  if (digits.length === 1) {
    return 0;
  }

  //+ for addition
  const sum = digits.reduce((acc, curr) => acc + curr, 0);

  return 1 + calculateAdditivePersistence(sum);
}

export function calculateMultiplicativePersistence(n: number): number {
  const digits = n
    .toString()
    .split("")
    .map((s) => +s);

  if (digits.length === 1) {
    return 0;
  }

  // * for multiplication
  const product = digits.reduce((acc, curr) => acc * curr, 1);

  return 1 + calculateMultiplicativePersistence(product);
}
