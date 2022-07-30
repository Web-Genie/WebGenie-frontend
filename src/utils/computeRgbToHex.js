import transformRgbToHex from "./transformRgbToHex";

const computeRgbToHex = (colorValue) => {
  const filteredRgbColors = colorValue
    .replace(/[^0-9.]/g, " ")
    .split(" ")
    .filter((letters) => letters !== "");

  const HexFormatedColor = transformRgbToHex(
    +filteredRgbColors[0],
    +filteredRgbColors[1],
    +filteredRgbColors[2]
  );

  return HexFormatedColor;
};

export default computeRgbToHex;
