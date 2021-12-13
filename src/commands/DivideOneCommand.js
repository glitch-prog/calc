export default class DivideOneCommand {
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
