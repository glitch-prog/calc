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

import {
  Calculator,
  AddCommand,
  SubstractCommand,
  MultiplyCommand,
  DivideCommand,
  SqrtCommand,
  CbrtCommand,
  AnyRootCommand,
  PowCommand,
  SqrCommand,
  CbCommand,
  PercentCommand,
  TenInPowCommand,
  FactCommand,
  DivideOneCommand,
  AgCommand,
} from './classes.js';

import { deleteStore, increaseStore, reduceStore } from './store__func.js';
import { clear, clearAll } from './clear__ouput__func';

function getResult() {
  let str = output.textContent;
  let arr = str.split(' ');
  console.log(arr);
  const calc = new Calculator(+arr[0], +arr[2]);
  switch (arr[1]) {
    case '+':
      calc.executeCommand(new AddCommand(+arr[2]));
      console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '-':
      calc.executeCommand(new SubstractCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '*':
      calc.executeCommand(new MultiplyCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '/':
      calc.executeCommand(new DivideCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '^2':
      calc.executeCommand(new SqrCommand(+arr[0]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '^3':
      calc.executeCommand(new CbCommand(+arr[0]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '^':
      calc.executeCommand(new PowCommand(+arr[0], +arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '1/':
      calc.executeCommand(new DivideOneCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '!':
      calc.executeCommand(new FactCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '%':
      calc.executeCommand(new PercentCommand(+arr[0]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '+/-':
      calc.executeCommand(new AgCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '2√':
      calc.executeCommand(new SqrtCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '3√':
      calc.executeCommand(new CbrtCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '√':
      calc.executeCommand(new AnyRootCommand(+arr[2], +arr[0]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
    case '10^':
      calc.executeCommand(new TenInPowCommand(+arr[2]));
      // console.log(calc.previousOperand);
      arr[0] = calc.previousOperand;
      break;
  }

  output.textContent = arr.splice(0, 1).join();
}

function store(event) {
  switch (event.target.textContent) {
    case 'MS':
      let value = output.textContent;
      localStorage.setItem('value', value);
      break;
    case 'MC':
      deleteStore('value');
      break;
    case 'M+':
      increaseStore('value');
      break;
    case 'M-':
      reduceStore('value');
      break;
    case 'MR':
      output.textContent = localStorage.getItem('value');
      break;
  }
}



export { getResult, store};
