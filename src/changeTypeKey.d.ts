/**
 * Mapping object's property to a new type
 */
export type ChangeTypeOfKeys<T extends Object, Keys extends keyof T, NewType> = {
    [key in keyof T]: key extends Keys ? NewType : T[key];
};

// Example
type Foo = {
    a: 1;
    b: '2';
};

type MappedFoo = ChangeTypeOfKeys<Foo, 'b', 2>;
//=> {a: 1, b: 2}
