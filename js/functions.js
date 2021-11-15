import { main, funcs, nums, output, rez, AC, L } from './variables.js';

function getResult() {
  let counter = 0;
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let str = output.textContent;
  let arr = str.split(' ');
  console.log(arr);

  arr.forEach((el) => {
    if (el == '*') {
      counter++;
    } else if (el == '+') {
      counter1++;
    } else if (el == '-') {
      counter2++;
    } else if (el == '/') {
      counter3++;
    }
  });

  for (let i = 0; i < counter; i++) {
    let j = arr.indexOf('*');
    arr[j - 1] = arr[j - 1] * arr[j + 1];
    arr[j - 1] = arr[j - 1].toString();
    console.log(arr);
    arr.splice(j, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter3; i++) {
    let l = arr.indexOf('/');
    console.log(i);
    arr[l - 1] = +arr[l - 1] / +arr[l + 1];
    arr[l - 1] = arr[l - 1].toString();
    console.log(arr);
    arr.splice(l, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter1; i++) {
    let y = arr.indexOf('+');
    console.log(i);
    arr[y - 1] = +arr[y - 1] + +arr[y + 1];
    arr[y - 1] = arr[y - 1].toString();
    console.log(arr);
    arr.splice(y, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter2; i++) {
    let i = arr.indexOf('-');
    console.log(i);
    arr[i - 1] = +arr[i - 1] - +arr[i + 1];
    arr[i - 1] = arr[i - 1].toString();
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
  }

  output.textContent = arr.join();
}

export { getResult };
