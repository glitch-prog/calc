export default class PercentCommand {
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
