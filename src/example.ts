import { getMetadata } from './getMetadata';

const decorate = () => {
  return (object: Object, propertyName: string) => {};
};

class Foo {
  @decorate() firstName: string;
  @decorate() lastName: string;

  constructor(name: string) {
    this.firstName = name;
    this.lastName = '';
  }

  @decorate()
  print() {
    console.log('foo');
  }
}

console.log(getMetadata(new Foo('foo')));
