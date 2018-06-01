/**
 * 生成随机字符串函数
 * @param {number}          length          需要生成的字符串长度
 * @param {string || array} randomLibrary   生成字符串的字典
 */
'use strict'
function randomString (length, randomLibrary) {
    const defaultLibrary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const library = randomLibrary || defaultLibrary;
    const isArray = library instanceof Array;
    let arr = [];
    let str = '';
    const len = length || 10;
    if (!isArray) {
        arr = library.split('');
    } else {
        arr = library;
    }
    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * arr.length);
        str += arr[index]
    }
    return str;
}

module.exports = randomString
