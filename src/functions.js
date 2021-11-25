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
  btnTheme,
  btnF,
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
  let counter10 = 0;
  let counter11 = 0;
  let counter12 = 0;
  let counter13 = 0;
  let counter14 = 0;
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
    } else if (el == '2√') {
      counter8++;
    } else if (el == '3√') {
      counter9++;
    } else if (el == '√') {
      counter10++;
    } else if (el == '1/') {
      counter11++;
    } else if (el == '%') {
      counter12++;
    } else if (el == '+/-') {
      counter13++;
    } else if (el == '10^') {
      counter14++;
    }
  });

  for (let i = 0; i < counter14; i++) {
    let v = arr.indexOf('10^');
    arr[v - 1] = tenIn(arr[v + 1]);
    console.log(arr[v - 1]);
    arr[v - 1] = arr[v - 1].toString();
    console.log(arr);
    arr.splice(v, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter12; i++) {
    let v = arr.indexOf('%');
    arr[v - 1] = percent(arr[v - 1]);
    console.log(arr[v - 1]);
    arr[v - 1] = arr[v - 1].toString();
    console.log(arr);
    arr.splice(v, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter11; i++) {
    let b = arr.indexOf('1/');
    arr[b + 1] = back(arr[b + 1]);
    console.log(arr[b + 1]);
    arr[b + 1] = arr[b + 1].toString();
    console.log(arr);
    arr.splice(b - 1, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter10; i++) {
    let f = arr.indexOf('√');
    arr[f + 1] = anyRoot(arr[f + 1], arr[f - 1]);
    console.log(arr[f + 1]);
    arr[f + 1] = arr[f + 1].toString();
    console.log(arr);
    arr.splice(f - 1, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter9; i++) {
    let f = arr.indexOf('3√');
    console.log(f);
    arr[f + 1] = cbrt(arr[f + 1]);
    // console.log(arr[f + 1]);
    arr[f + 1] = arr[f + 1].toString();
    console.log(arr);
    arr.splice(f - 1, 2);
    console.log(arr);
  }

  for (let i = 0; i < counter8; i++) {
    let x = arr.indexOf('2√');
    arr[x + 1] = sqrt(arr[x + 1]);
    console.log(arr[x + 1]);
    arr[x + 1] = arr[x + 1].toString();
    console.log(arr);
    arr.splice(x - 1, 2);
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

  for (let i = 0; i < counter13; i++) {
    let p = arr.indexOf('+/-');
    arr[p + 1] = oppositeNum(arr[p + 1]);
    arr[p + 1] = arr[p + 1].toString();
    arr.splice(p - 1, 2);
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

  // for (let i = 0; i < counter13; i++) {
  //   let y = arr.indexOf('+/-');
  //   console.log(i);
  //   arr[y - 1] = +arr[y - 1] + +arr[y + 1];
  //   arr[y - 1] = arr[y - 1].toString();
  //   console.log(arr);
  //   arr.splice(y, 2);
  //   console.log(arr);
  // }

  output.textContent = arr.join();
  console.log(output.textContent);
  if (output.textContent === 'Infinity') {
    output.textContent == ` `;
  }
}

function oppositeNum(n) {
  return (n *= -1);
}

function tenIn(n) {
  let tenInN = 10;
  for (let i = 1; i < n; i++) {
    tenInN *= 10;
    console.log(tenInN);
  }
  return tenInN;
}

function percent(n) {
  return n / 100;
}

function back(n) {
  return 1 / n;
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function sqr(n) {
  return n ? n ** 2 : 1;
}

function cube(n) {
  return n ? n ** 3 : 1;
}

function inN(n, m) {
  return n ? n ** m : 1;
}

function sqrt(n) {
  let res1 = 0;
  return (res1 = Math.sqrt(n));
}

function cbrt(n) {
  let res = 0;
  return (res = Math.cbrt(n));
}

function anyRoot(n, root) {
  return Math.pow(n, 1 / root);
}

function store(event) {
  if (event.target.textContent == 'MS') {
    let value = output.textContent;
    localStorage.setItem('value', value);
  } else if (event.target.textContent == 'MC') {
    deleteStore('value');
  } else if (event.target.textContent == 'M+') {
    increaseStore('value');
  } else if (event.target.textContent == 'M-') {
    reduceStore('value');
  } else if (event.target.textContent == 'MR') {
    output.textContent = localStorage.getItem('value');
  }
}

function deleteStore(something) {
  localStorage.removeItem(something);
}

function increaseStore(something) {
  let valueP = localStorage.getItem(something);
  console.log(valueP);
  console.log(output.textContent);

  localStorage.setItem(something, +valueP + +output.textContent);
}

function reduceStore(something) {
  let valueM = localStorage.getItem(something);
  valueM = valueM - +output.textContent;
  localStorage.setItem(something, valueM);
}

// function changeTheme() {
//   if (btnF.classList == 'func light') {
//     btnF.className = 'func dark';
//     document.body.style.background = 'black';
//   } else {
//     btnF.classList == 'func light';
//     document.body.style.background = '#d3d3d3';
//   }
//   console.log('+');
// }

export { getResult, store };
