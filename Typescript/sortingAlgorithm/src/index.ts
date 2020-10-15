import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { LinkedListCollection } from './LinkedListCollection';

// const numberCollection = new NumberCollection([4, 1, 6, 9, -8]);
// const stringCollection = new StringCollection('AcbHa');

// const sorter = new Sorter(stringCollection);
// console.log(sorter.collection);
// sorter.sort();
// console.log(sorter.collection);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(1);
linkedListCollection.add(-5001);
linkedListCollection.add(10);
linkedListCollection.add(-23);

const sorter = new Sorter(linkedListCollection);
linkedListCollection.print();
sorter.sort();
linkedListCollection.print();
