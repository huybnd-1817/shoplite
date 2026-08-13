import { products, filterByKeyword, sortByPrice } from './data.js';

console.log('All products:', products);
console.log('Filter "áo":', filterByKeyword(products, 'áo'));
console.log('Sort asc:', sortByPrice(products, 'asc'));
console.log('Sort desc:', sortByPrice(products, 'desc'));
