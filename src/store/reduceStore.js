export default function reduceStore(something) {
  let valueM = localStorage.getItem(something);
  valueM = valueM - +output.textContent;
  localStorage.setItem(something, valueM);
}