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

import './commands';
import { Calculator } from './calculator/Calculator.js';

function getResult() {
  let str = output.textContent;
  let arr = str.split(' ');
  console.log(arr);
  let [prev, , next] = arr;
  const calc = new Calculator(+prev, +next);
  switch (arr[1]) {
    case '+':
      calc.executeCommand(new AddCommand(+next));
      console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '-':
      calc.executeCommand(new SubstractCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '*':
      calc.executeCommand(new MultiplyCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '/':
      calc.executeCommand(new DivideCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
      casnext: calc.executeCommand(new SqrCommand(+prev));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '^3':
      calc.executeCommand(new CbCommand(+prev));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '^':
      calc.executeCommand(new PowCommand(+prev, +next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '1/':
      calc.executeCommand(new DivideOneCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '!':
      calc.executeCommand(new FactCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '%':
      calc.executeCommand(new PercentCommand(+prev));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '+/-':
      calc.executeCommand(new AgCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '2√':
      calc.executeCommand(new SqrtCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '3√':
      calc.executeCommand(new CbrtCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '√':
      calc.executeCommand(new AnyRootCommand(+next, +prev));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
    case '10^':
      calc.executeCommand(new TenInPowCommand(+next));
      // console.log(calc.previousOperand);
      prev = calc.previousOperand;
      break;
  }

  output.textContent = arr.splice(0, 1).join();
}

export default getResult;
