export default class FactCommand {
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
