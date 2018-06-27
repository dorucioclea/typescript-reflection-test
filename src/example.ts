import 'reflect-metadata';
import { Foo } from './Foo';
import { getMetadata } from './getMetadata';

console.log(getMetadata(new Foo('foo')));
