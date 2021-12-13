export default class DivideCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue /= this.valueToSubstract);
  }

  undo(currentValue) {
    return (currentValue *= this.valueToSubstract);
  }
}