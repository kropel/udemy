import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { LinkedListCollection } from './LinkedListCollection';

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(1);
linkedListCollection.add(-5);
linkedListCollection.add(-555);
linkedListCollection.print();
linkedListCollection.sort();
linkedListCollection.print();
