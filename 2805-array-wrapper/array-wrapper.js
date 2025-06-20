/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};
/**

@return {number}
*/
// Simulating addition behavior
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((sum, value) => sum + value, 0);
};
/**

@return {string}
*/
// Controlling string representation
ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */