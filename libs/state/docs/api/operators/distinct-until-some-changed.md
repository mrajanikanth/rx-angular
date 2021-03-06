# distinctUntilSomeChanged

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from
the previous item. You can provide a custom comparison for each key individually by setting a `KeyCompareMap<T>`.
If no comparison is provided for a specified key, an equality check is used by default.

If properties of the source change, which are not specified for comparison, no change will be emitted.

The name `distinctUntilSomeChanged` was picked since it internally iterates over the `keys` and utilizes the
[some](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method in order to
compute if values are distinct or not.

_Example_

```TypeScript
// An example comparing the first letters of just the name property.

import { of } from 'rxjs';
import { distinctUntilSomeChanged } from 'rx-angular/state';

interface Person {
   age: number;
   name: string;
}
// compare the first letters of the name property
const customComparison: KeyCompareMap<Person> = {
  name: (oldName, newName) => oldName.substring(0, 3) === newName.substring(0, 3)
};

of<Person>(
  { age: 4, name: 'Foo1'},
  { age: 7, name: 'Bar'},
  { age: 5, name: 'Foo2'},
  { age: 6, name: 'Foo3'},
).pipe(
  distinctUntilSomeChanged(customComparison),
)
.subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }
```

## Signature

```TypeScript
function distinctUntilSomeChanged<T extends object, K extends keyof T>(keyCompareMap: KeyCompareMap<T>): MonoTypeOperatorFunction<T>
```

## Parameters

### keyCompareMap

##### typeof: KeyCompareMap&#60;T&#62;

# distinctUntilSomeChanged

Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from
the previous item. Comparison will be done for each set key in the `keys` array.

If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
If properties of the source change which are not specified for comparison, no change will be emitted.

The name `distinctUntilSomeChanged` was picked since it internally iterates over the `keys` and utilizes the
[some](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method in order to
compute if values are distinct or not.

_Example_

```TypeScript
import { of } from 'rxjs';
import { distinctUntilSomeChanged } from 'rx-angular/state';

interface Person {
   age: number;
   name: string;
}

of(
  { age: 4, name: 'Foo'},
  { age: 7, name: 'Bar'},
  { age: 5, name: 'Foo'},
  { age: 6, name: 'Foo'},
).pipe(
  distinctUntilSomeChanged(['age', 'name']),
)
.subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo' }
// { age: 6, name: 'Foo' }
```

_Example_

```TypeScript
// An example with a custom comparison applied to each key
import { of } from 'rxjs';
import { distinctUntilSomeChanged } from 'rxjs/operators';
import { isDeepEqual } from 'custom/is-equal';

interface Person {
    age: number;
    name: string;
 }

 const customCompare = (oldVal, newVal) => isDeepEqual(oldVal, newVal);

of(
    { age: 4, name: 'Foo1'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo2'},
    { age: 6, name: 'Foo3'},
  ).pipe(
    distinctUntilSomeChanged(['age', 'name'], customCompare),
  )
  .subscribe(x => console.log(x));

// displays:
// { age: 4, name: 'Foo1' }
// { age: 7, name: 'Bar' }
// { age: 5, name: 'Foo2' }
// { age: 6, name: 'Foo3' }
```

## Signature

```TypeScript
function distinctUntilSomeChanged<T extends object, K extends keyof T>(keys: K[], compare?: CompareFn<T[K]>): MonoTypeOperatorFunction<T>
```

## Parameters

### keys

##### typeof: K[]

### compare

##### typeof: CompareFn&#60;T[K]&#62;
