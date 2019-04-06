# date-tool

[![Build Status](https://travis-ci.org/JannesMeyer/date-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/date-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/date-tool.svg)](https://david-dm.org/JannesMeyer/date-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/date-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/date-tool#info=devDependencies)

[![npm](https://nodei.co/npm/date-tool.png?compact=true)](https://www.npmjs.com/package/date-tool)

Import the parts you need:

```js
import { getDateString } from 'date-tool';
```

## Functions

### getDateString

	getDateString() → String

Formats the current date in a custom format. For example: `2 Feb 2015`

### getIsoDateString

	getIsoDateString() → String

Formats the current date as per ISO 8601. For example: `2015-02-05`

### throttle

	throttle(func, wait[, options]) → Function

### debounce

	debounce(fn, wait[, hash]) → Function


## Contributing

Download source and compile:

```sh
git clone git@github.com:JannesMeyer/date-tool.git
yarn
```

Compile and watch for file changes:

```sh
yarn start
```

Run tests:

```sh
yarn test
```
