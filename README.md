<div align="center">
	<br>
	<br>
	<br>
	<br>
	<b>A collection of my personal Typescript type utils</b>
	<br>
	<br>
	<br>
	<br>
	<br>
	<hr>
</div>
<br>
<br>

## Install

Pending...

## Usage

```ts
import {Except} from 'type-fest';

type Foo = {
	a: 2;
	b: '2';
};

type ChangedKeyFoo = ChangeTypeKey<Foo, b, 2>;
//=> {b: 2}
```

## API

Click the type names for complete docs.

### Utilities

- [`ChangeTypeKey`](source/changeTypeKey.d.ts) - Remap the key in an object to a different type.
- 
## License - MIT