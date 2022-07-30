const transformRgbToHex = (red, green, blue) => {
  let hexColor =
    "#" + red.toString(16) + green.toString(16) + blue.toString(16);

  if (hexColor.length < 7) {
    const difference = 7 - hexColor.length;

    for (let i = 0; i < difference; i++) {
      hexColor += "0";
    }
  }

  return hexColor;
};

export default transformRgbToHex;
