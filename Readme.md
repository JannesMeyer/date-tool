# date-tool

[![Build Status](https://travis-ci.org/JannesMeyer/date-tool.svg?branch=master)](https://travis-ci.org/JannesMeyer/date-tool)
[![Dependencies](https://david-dm.org/JannesMeyer/date-tool.svg)](https://david-dm.org/JannesMeyer/date-tool)
[![Development Dependencies](https://david-dm.org/JannesMeyer/date-tool/dev-status.svg)](https://david-dm.org/JannesMeyer/date-tool#info=devDependencies)

~~~bash
npm install date-tool
~~~

Import the parts you need

~~~js
import { getDateString } from 'date-tool';
~~~

## getDateString

	getDateString() → String

Formats the current date in a custom format. For example: `2 Feb 2015`

## getIsoDateString

	getIsoDateString() → String

Formats the current date as per ISO 8601. For example: `2015-02-05`

## throttle

	throttle(func, wait, options) → Function

## debounce

	debounce(fn, wait, hash) → Function
