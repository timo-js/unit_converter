const btnConvert = document.getElementById("btn-convert");
const inputValue = document.getElementById("number-input");

const lengthConversion = 3.281;
const volumeConversion = 0.264;
const massConversion = 2.204;

btnConvert.addEventListener("click", () => {
  convert(inputValue.value);
});

const convert = (v) => {
  document.getElementById("length-output").textContent = `${v} meter = ${Number(
    v * lengthConversion
  ).toFixed(3)} feet | ${v} feet = ${Number(v / lengthConversion).toFixed(
    3
  )} meter`;

  document.getElementById("volume-output").textContent = `${v} liter = ${Number(
    v * volumeConversion
  ).toFixed(3)} gallons | ${v} gallons = ${Number(v / volumeConversion).toFixed(
    3
  )} liter`;

  document.getElementById("mass-output").textContent = `${v} kg = ${Number(
    v * massConversion
  ).toFixed(3)} pound | ${v} pound = ${Number(v / massConversion).toFixed(
    3
  )} kg`;
};
