import { getResult, factorial } from './functions.js';
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
    this.currentOperand = this.history.push(command);
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

class AnyRootCommand {
  constructor(valueToSubstract, value) {
    this.valueToSubstract = valueToSubstract;
    this.value = value;
  }

  execute(currentValue) {
    return (currentValue = Math.pow(this.valueToSubstract, 1 / this.value));
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class PowCommand {
  constructor(valueToSubstract, value) {
    this.valueToSubstract = valueToSubstract;
    this.value = value;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract ** this.value);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class TenInPowCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = 10 ** this.valueToSubstract);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class SqrCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract ** 2);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class CbCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract ** 3);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class PercentCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract / 100);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class AgCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract * -1);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class DivideOneCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = 1 / this.valueToSubstract);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}

class FactCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = factorial(this.valueToSubstract));
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
  AnyRootCommand,
  PowCommand,
  SqrCommand,
  CbCommand,
  TenInPowCommand,
  PercentCommand,
  FactCommand,
  DivideOneCommand,
  AgCommand
};
