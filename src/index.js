const mapper = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * @param {string} romanNumeral
 * @return {number}
 */
const romanToInt = (romanNumeral) => {
  let count = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const cur = mapper[romanNumeral[i]];
    const next = mapper[romanNumeral[i + 1]];

    if (cur < next) {
      count += next - cur;
      i++;
    } else {
      count += cur;
    }
  }

  return count;
};

module.exports = romanToInt
