interface IMyArray<T> {
  val?: Array<T>
}

class MyArray<T> {
  private val: Array<T>;

  constructor(obj?: IMyArray<T>) {
    this.val = (obj && obj?.val) ?? [];
  }

  private checkIndex(index: number) {
    if (index < 0 || index >= this.val.length) {
      throw new Error('Index out of range!');
    }
  }

  insert(index: number, value: T) {
    this.checkIndex(index);
    this.val.splice(index, 0, value);
  }

  delete(index: number) {
    this.checkIndex(index);
    this.val = [...this.val.slice(0, index - 1), ...this.val.slice(index + 1, this.val.length)];
  }

  find(value: T) {
    return this.val.indexOf(value);
  }

  setItem(index: number, value: T) {
    this.checkIndex(index);
    this.val[index] = value;
  }

  getItem(index: number) {
    this.checkIndex(index);
    return this.val[index];
  }
}

export default MyArray;
