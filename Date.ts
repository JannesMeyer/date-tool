/**
 * For example: 08:00
 */
export function getTimeString(date = new Date()): string {
	let hours = addLeadingZero(date.getHours());
	let minutes = addLeadingZero(date.getMinutes());

	return `${hours}:${minutes}`;
}

/**
 * For example: 2 Feb 2015
 */
export function getDateString(date = new Date()): string {
	let year = date.getFullYear();
	let month = date.toLocaleString('en-US', { month: 'short' });
	let day = date.getDate();

	return `${day} ${month} ${year}`;
}

/**
 * For example: 02.02.2015
 */
export function getDateString2(date = new Date()): string {
	let year = date.getFullYear();
	let month = addLeadingZero(date.getMonth() + 1);
	let day = addLeadingZero(date.getDate());

  return `${day}.${month}.${year}`;
}

/**
 * For example: Feb
 */
export function getShortMonthName(date = new Date()): string {
	return date.toLocaleString('en-US', { month: 'short' });
}

/**
 * Formats the current date as per ISO 8601
 * For example: 2015-02-05
 */
export function getIsoDateString(date = new Date()): string {
	var year = date.getFullYear();
	var month = addLeadingZero(date.getMonth() + 1);
	var day = addLeadingZero(date.getDate());

	return `${year}-${month}-${day}`;
}

const isoDateRegex = /^(?:(?:([\d]{4})-)?(0?[1-9]|1[0-2])-)?(0?[1-9]|[12][0-9]|3[01])$/;

/**
 * Parse a date string that is more or less formatted like ISO 8601.
 *
 * But actually it doesn't adhere to the standard at all, because it allows
 * the omission of the year and the month.
 *
 * It also doesn't check if the month and day are within reasonable bounds.
 */
export function parseIsoDateString(str: string): Date {
  let result = isoDateRegex.exec(str);
  if (!result) {
    throw new Error('Invalid date format');
  }

  let date = new Date();
  if (result[1] != null) { date.setFullYear(Number(result[1])); }
  if (result[2] != null) { date.setMonth(Number(result[2]) - 1); }
  if (result[3] != null) { date.setDate(Number(result[3])); }
  return date;
}

/**
 * Add a leading zero and convert to string if the number is
 * smaller than 10
 */
function addLeadingZero(number: number): string {
	var str = String(number);
	if (str.length < 2) {
		str = '0' + str;
	}
	return str;
}