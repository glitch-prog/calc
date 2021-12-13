export default class SqrtCommand {
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
