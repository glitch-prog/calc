export default class AnyRootCommand {
  constructor(valueToSubstract, value) {
    this.valueToSubstract = valueToSubstract;
    this.value = value;
  }

  execute(currentValue) {
    return (currentValue = Math.pow(this.valueToSubstract, 1 / this.value));
  }

  undo(currentValue) {
    return (currentValue = this.valueToSubstract);
  }
}
