function nextNumber(num) {
  const stringNumber = num.toString();
  const digits = Array.from(stringNumber, Number);
  let i = digits.length - 1;
  let range = -1;
  while (i >= 0) {
    const slicedDigits = digits.slice(range).sort((a, b) => b - a);
    const sortedDigits = [...digits.slice(0, range), ...slicedDigits];
    if (JSON.stringify(sortedDigits) !== JSON.stringify(digits)) {
      console.log(sortedDigits.join(""));
      break;
    } else if (
      i === 0 &&
      JSON.stringify(sortedDigits) == JSON.stringify(digits)
    ) {
      console.log(-1);
    }
    range--;
    i--;
  }
}

nextNumber(12);
nextNumber(513);
nextNumber(2017);
nextNumber(9);
nextNumber(111);
nextNumber(531);
