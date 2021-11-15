import {
  main,
  funcs,
  nums,
  output,
  rez,
  AC,
  L,
  spFuncs,
  storage,
} from './variables.js';

function getResult() {
  let counter = 0;
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  let counter5 = 0;
  let counter6 = 0;
  let counter7 = 0;
  let counter8 = 0;
  let counter9 = 0;
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
    } else if (el == '!') {
      counter4++;
    } else if (el == '^2') {
      counter5++;
    } else if (el == '^3') {
      counter6++;
    } else if (el == '^') {
      counter7++;
    }
  });

  for (let i = 0; i < counter7; i++) {
    console.log(w);
    let x = arr.indexOf('2√');
    arr[x + 1] = sqrt(arr[x + 1]);
    arr[x + 1] = arr[x + 1].toString();
    console.log(arr);
    arr.splice(x, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter7; i++) {
    let w = arr.indexOf('^');
    console.log(w);
    arr[w - 1] = inN(arr[w - 1], arr[w + 1]);
    arr[w - 1] = arr[w - 1].toString();
    console.log(arr);
    arr.splice(w, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter6; i++) {
    let c = arr.indexOf('^3');
    console.log(c);
    arr[c - 1] = cube(arr[c - 1]);
    arr[c - 1] = arr[c - 1].toString();
    console.log(arr);
    arr.splice(c, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter5; i++) {
    let s = arr.indexOf('^2');
    console.log(s);
    arr[s - 1] = sqr(arr[s - 1]);
    arr[s - 1] = arr[s - 1].toString();
    console.log(arr);
    arr.splice(s, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter4; i++) {
    let f = arr.indexOf('!');
    console.log(f);
    arr[f + 1] = factorial(arr[f + 1]);
    arr[f + 1] = arr[f + 1].toString();
    console.log(arr);
    arr.splice(f - 1, 2);
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

  for (let i = 0; i < counter; i++) {
    let j = arr.indexOf('*');
    arr[j - 1] = arr[j - 1] * arr[j + 1];
    arr[j - 1] = arr[j - 1].toString();
    console.log(arr);
    arr.splice(j, 2);
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

  for (let i = 0; i < counter1; i++) {
    let y = arr.indexOf('+');
    console.log(i);
    arr[y - 1] = +arr[y - 1] + +arr[y + 1];
    arr[y - 1] = arr[y - 1].toString();
    console.log(arr);
    arr.splice(y, 2);
    console.log(arr);
  }

  output.textContent = arr.join();
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function sqr(n) {
  return n ? n * n : 1;
}

function cube(n) {
  return n ? n * n * n : 1;
}

function inN(n, m) {
  let result = 1;
  for (let i = 0; i < m; i++) {
    result *= n;
  }
  return result;
}

// function sqrt(n) {
//   function
// }

function store() {
  storage.addEventListener('click', (event) => {
    if (event.target.textContent == 'MS') {
      localStorage.setItem('value', output.textContent);
    } else if (event.target.textContent == 'M+') {
      let valueP = localStorage.getItem('value');
      console.log(valueP);
      console.log(output.textContent);
      valueP = +valueP + +output.textContent;
      console.log(valueP);

      localStorage.setItem('value', valueP);
    } else if (event.target.textContent == 'MC') {
      localStorage.removeItem('value');
    } else if (event.target.textContent == 'M-') {
      let valueM = localStorage.getItem('value');
      valueM = valueM - +output.textContent;
      localStorage.setItem('value', valueM);
    }
  });
}

export { getResult, store };
