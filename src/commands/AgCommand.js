export default class AgCommand {
  constructor(valueToSubstract) {
    this.valueToSubstract = valueToSubstract;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract * -1);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}
