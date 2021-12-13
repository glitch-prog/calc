export default class TenInPowCommand {
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
