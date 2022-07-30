const transformRgbToHex = (red, green, blue) =>
  "#" + red.toString(16) + green.toString(16) + blue.toString(16);

export default transformRgbToHex;
