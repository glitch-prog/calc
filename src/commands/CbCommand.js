export default class CbCommand {
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