
export default class List {
  constructor(items) {
    this.items = items;
  }

  min() {
    return Math.min.apply(null, this.items);
  }

  max() {
    return Math.max.apply(null, this.items);
  }

  average() {
    return this.items.length ? this.sum() / this.items.length : 0;
  }

  sum() {
    let result = 0;
    let l = this.items.length;
    if (l) {
      while (l--) {
        if (this.items[l] != null) result += parseFloat(this.items[l]);
      }
    }
    return result;
  }
}
