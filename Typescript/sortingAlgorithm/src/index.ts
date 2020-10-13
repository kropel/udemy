import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';

const numberCollection = new NumberCollection([4, 1, 6, 9, -8]);
const stringCollection = new StringCollection('AcbHa');

const sorter = new Sorter(stringCollection);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
