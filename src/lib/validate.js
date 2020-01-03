/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}
/**
  *方法说明：是否是数组
* */
export function isArray(obj) { // 是否是数组
  return (typeof obj === 'object') && obj.constructor === Array;// 返回是否是数组
}

/**
  *方法说明：是否是字符串
* */
export function isString(obj) { // 是否是字符串
  return (typeof obj === 'string') && obj.constructor === String;// 返回是否是字符串
}

/**
  *方法说明：是否是数字
* */
export function isNumber(obj) { // 是否是数字
  return (typeof obj === 'number') && obj.constructor === Number;// 返回是否是数字
}

/**
  *方法说明：是否是日期
* */
export function isDate(obj) { // 是否是日期
  return (typeof obj === 'object') && obj.constructor === Date;// 返回是否是日期
}

/**
  *方法说明：是否是方法
* */
export function isFunction(obj) { // 是否是方法
  return (typeof obj === 'function') && obj.constructor === Function;// 返回是否是方法
}

/**
  *方法说明：是否是对象
* */
export function isObject(obj) { // 是否是对象
  return (typeof obj === 'object') && obj.constructor === Object;// 返回是否是对象
}
