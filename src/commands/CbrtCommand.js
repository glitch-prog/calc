export default class CbrtCommand {
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