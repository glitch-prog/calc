import {
  AC,
  btnTheme,
  L,
  main,
  nums,
  output,
  spFuncs,
  wrap,
  rez,
} from './variables.js';
import {
  getResult,
  store,
  changeTheme,
  clear,
  clearAll,
  
} from './functions.js';

AC.addEventListener('click', (event) => {
  clearAll();
});

L.addEventListener('click', (event) => {
  clear();
});

wrap.addEventListener('click', (event) => {
  output.textContent += ' ' + event.target.textContent + ' ';
});

nums.addEventListener('click', (event) => {
  output.textContent += event.target.textContent;
});

rez.addEventListener('click', (event) => {
  getResult();
});


