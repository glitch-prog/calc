export default function increaseStore(something) {
  let valueP = localStorage.getItem(something);

  localStorage.setItem(something, +valueP + +output.textContent);
}
