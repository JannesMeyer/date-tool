/**
 * For example: 2 Feb 2015
 */
export function getTimeString(date?: Date): string;

/**
 * For example: 02.02.2015
 */
export function getDateString2(date?: Date): string;

/**
 * For example: Feb
 */
export function getShortMonthName(date?: Date): string;

/**
 * For example: 2015-02-05
 */
export function getIsoDateString(date: Date): string;

/**
 * Parse a date string that is more or less formatted like ISO 8601
 */
export function parseIsoDateString(string: string): Date;

/**
 * Returns a throttled function
 */
export function throttle(fn: (...args) => any, wait: number, options?: any): (...args) => any;

/**
 * Returns a debounced function. Optionally it groups by the nth parameter (specified by paramIndex)
 */
export function debounce(fn: (...args) => any, wait: number, paramIndex?: number): (...args) => any;