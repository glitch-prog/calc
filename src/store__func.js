function deleteStore(something) {
  localStorage.removeItem(something);
}

function increaseStore(something) {
  let valueP = localStorage.getItem(something);

  localStorage.setItem(something, +valueP + +output.textContent);
}

function reduceStore(something) {
  let valueM = localStorage.getItem(something);
  valueM = valueM - +output.textContent;
  localStorage.setItem(something, valueM);
}

export { deleteStore, increaseStore, reduceStore };
