import { Sortable } from './Sorter';

export class StringCollection implements Sortable {
  constructor(public collection: string) {}

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const charsArray = this.collection.split('');
    const leftHand = charsArray[leftIndex];
    charsArray[leftIndex] = charsArray[rightIndex];
    charsArray[rightIndex] = leftHand;
    this.collection = charsArray.join('');
  }
}
