/**
 * JSON 值可以是：
 * 数字（整数或浮点数）
 * 字符串（在双引号中）
 * 逻辑值（true 或 false）
 * 数组（在方括号中）
 * 对象（在花括号中）
 * null
 */

define(function () {
	return {
		stringify: function (val) {
			var stringify = '',
				curVal;

			switch (Object.prototype.toString.call(val)) {
			case '[object Number]': // number
			case '[object Boolean]': // boolean
			case '[object Null]': // null
				return String(val);

			case '[object String]': // string
				return '"' + val + '"';

			case '[object Array]': // array
				stringify += '[';

				for (var i = 0, len = val.length - 1; i < len; i++) {
					curVal = JSON.stringify(val[i]);
					stringify += (curVal === undefined ? null : curVal) + ",";
				}
				stringify += JSON.stringify(val[i]);

				stringify += ']';
				return stringify;

			case '[object Object]': // object
				stringify += '{';

				for (var i in val) {
					if (val.hasOwnProperty(i)) {
						curVal = JSON.stringify(val[i]);
						if (curVal !== undefined) {
							stringify += '"' + i + '":' + curVal + ',';
						}
					}
				}

				stringify = stringify.slice(0, -1);
				stringify += '}';
				return stringify;

			case '[object Date]': // date
				return '"' + (val.toJSON ? val.toJSON() : val.toString()) + '"';

			case '[object RegExp]': // regular expression
				return "{}";

			case '[object Undefined]': // undefined
			case '[object Function]': // function
				return undefined;
			}
		}
	}
})
