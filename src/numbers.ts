export default {
  valueAtBit: (num = 0, bit = 0) => (num >> (bit - 1)) & 1,

  base10: (str = "") => parseInt(str, 2),

  convertToBinary: (num = 0) => num.toString(2).padStart(8, "0"),

  multiply: (a = 0, b = 0) => +(a * b).toFixed(15),
};
