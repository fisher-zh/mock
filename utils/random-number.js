/**
 * 随机生成数字
 * @param {number} length 需要生成数字的长度
 */
'use strict'
function randomNumber (length) {
    const len = length || 10;
    let num = Math.ceil(Math.random() * Math.pow(10, len));
    return num;
}

module.exports = randomNumber
