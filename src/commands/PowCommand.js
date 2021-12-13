export default class PowCommand {
  constructor(valueToSubstract, value) {
    this.valueToSubstract = valueToSubstract;
    this.value = value;
  }

  execute(currentValue) {
    return (currentValue = this.valueToSubstract ** this.value);
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}
