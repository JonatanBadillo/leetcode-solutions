/**

@param {Array} arr

@param {number} depth

@return {Array}
*/
var flat = function (arr, n) {
    // Recursive call is finished
    if (n === 0)
        return arr;

    let flattenedArr = [];

    arr.forEach((element, i) => {
        if (Array.isArray(element)) {
            flattenedArr.push(...flat(element, n - 1));
        }
        else {
            flattenedArr.push(element);
        }
    });
    return flattenedArr;
}; 