export default class SqrCommand {
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
