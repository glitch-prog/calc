export default class SubstractCommand {
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