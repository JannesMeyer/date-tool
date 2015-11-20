const isoDateRegex = /^(?:(?:([\d]{4})-)?(0?[1-9]|1[0-2])-)?(0?[1-9]|[12][0-9]|3[01])$/;

/**
 * For example: 08:00
 */
export function getTimeString(date = new Date()) {
	let hours = addLeadingZero(date.getHours());
	let minutes = addLeadingZero(date.getMinutes());

	return `${hours}:${minutes}`;
}

/**
 * For example: 2 Feb 2015
 */
export function getDateString(date = new Date()) {
	let year = date.getFullYear();
	let month = date.toLocaleString('en-US', { month: 'short' });
	let day = date.getDate();

	return `${day} ${month} ${year}`;
}

/**
 * For example: 02.02.2015
 */
export function getDateString2(date = new Date()) {
	let year = date.getFullYear();
	let month = addLeadingZero(date.getMonth() + 1);
	let day = addLeadingZero(date.getDate());

  return `${day}.${month}.${year}`;
}

/**
 * For example: Feb
 */
export function getShortMonthName(date = new Date()) {
	return date.toLocaleString('en-US', { month: 'short' });
}

/**
 * Formats the current date as per ISO 8601
 * For example: 2015-02-05
 */
export function getIsoDateString(date = new Date()) {
	var year = date.getFullYear();
	var month = addLeadingZero(date.getMonth() + 1);
	var day = addLeadingZero(date.getDate());

	return `${year}-${month}-${day}`;
}

/**
 * Parse a date string that is more or less formatted like ISO 8601.
 *
 * But actually it doesn't adhere to the standard at all, because it allows
 * the omission of the year and the month.
 *
 * It also doesn't check if the month and day are within reasonable bounds.
 */
export function parseIsoDateString(string) {
  let result = isoDateRegex.exec(string);
  if (!result) {
    throw new Error('Could not parse the date');
  }

  let date = new Date();
  if (result[1] != null) { date.setFullYear(result[1]); }
  if (result[2] != null) { date.setMonth(result[2] - 1); }
  if (result[3] != null) { date.setDate(result[3]); }
  return date;
}

/**
 * Add a leading zero and convert to String if the number is
 * smaller than 10
 */
function addLeadingZero(number) {
	var str = String(number);
	if (str.length < 2) {
		str = '0' + str;
	}
	return str;
}

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 *
 * Taken from Underscore.js 1.8.2
 */
export function throttle(func, wait, options) {
	var context, args, result;
	var timeout = null;
	var previous = 0;
	if (!options) options = {};
	var later = function() {
		previous = options.leading === false ? 0 : Date.now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};
	return function() {
		var now = Date.now();
		if (!previous && options.leading === false) previous = now;
		var remaining = wait - (now - previous);
		context = this;
		args = arguments;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	};
}


/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds.
 */
export function debounce(fn, wait, hash) {
	var timeouts = {};

	// Called everytime a timeout fires
	function tick(key) {
		var timeout = timeouts[key];

		var delta = Date.now() - timeout.timestamp;
		if (delta < wait) {
			// No call, start a new timeout
			timeout.t = setTimeout(tick.bind(undefined, key), wait - delta);
		} else {
			// Call now! Clean up
			delete timeouts[key];
			fn.apply(timeout.this, timeout.arguments);
		}
	}

	// Called from the outside instead of the original function
	return function() {
		// Hash this call
		var key;
		if (typeof hash === 'number') {
			key = arguments[hash];
		} else if (typeof hash === 'function') {
			key = hash.apply(undefined, arguments);
		} else {
			key = 'all';
		}

		// Get or create object for this key
		var timeout;
		if (timeouts[key]) {
			timeout = timeouts[key];
		} else {
			timeout = timeouts[key] = { t: setTimeout(tick.bind(undefined, key), wait) };
		}
		// Update values
		timeout.this = this;
		timeout.arguments = arguments;
		timeout.timestamp = Date.now();
	};
}