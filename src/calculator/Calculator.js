class Calculator {
  constructor(previousOperand, currentOperand) {
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
export { Calculator };
