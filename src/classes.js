import { getResult } from './functions.js';
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

class Calculator {
  constructor(previousOperand, currentOperand) {
    // this.value = 1;
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.history = [];
  }

  executeCommand(command) {
    this.previousOperand = command.execute(this.previousOperand);
    this.history.push(command);
  }

  undoCommand() {
    const command = this.history.pop();
    this.value = command.undo(this.previousOperand);
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return (currentValue += this.valueToAdd);
  }

  undo(currentValue) {
    return (currentValue -= this.valueToAdd);
  }
}

class SubstractCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return (currentValue -= this.valueToAdd);
  }

  undo(currentValue) {
    return (currentValue += this.valueToAdd);
  }
}

class DivideCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue /= this.valueToSubstract);
  }

  undo(currentValue) {
    return (currentValue *= this.valueToSubstract);
  }
}

class MultiplyCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue *= this.valueToSubstract);
  }

  undo(currentValue) {
    return (currentValue /= this.valueToSubstract);
  }
}

class SqrtCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = Math.sqrt(this.valueToSubstract));
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class CbrtCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = Math.cbrt(this.valueToSubstract));
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

export {
  Calculator,
  AddCommand,
  SubstractCommand,
  MultiplyCommand,
  DivideCommand,
  SqrtCommand,
  CbrtCommand,
};
