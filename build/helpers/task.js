export default class Task {
  constructor(name, description, fn) {
    this.name = name;
    this.description = description || "";
    this.fn = fn || noop;
  }
}