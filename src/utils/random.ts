/**
 * 生成随机字符串
 * @param length 需要生成的字符串长度（必填）
 * @param dictionary 生成字符串的字典（选填）
 */
function randomString(length?: number, dictionary?: [string, string[]]): string {
    // 默认字典
    const defaultDictionary: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const dict: any = dictionary || defaultDictionary;
    const isArray = dict instanceof Array;
    let arr: string[] = [];
    let str: string = '';
    const len: number = length || 10; // 默认字符串长度
    if (!isArray) {
        arr = dict.split('');
    } else {
        arr = dict;
    }
    for (let i = 0; i < len; i++) {
        const index = Math.floor(Math.random() * arr.length);
        str += arr[index];
    }
    return str;
}

/**
 * 生成随机字符串
 * @param length 需要生成的字符串长度（必填）
 */
function randomString2(length?: number): string {
    // 生成随机数 -> 随机数转换成36进制 -> 截取3-最后一位（这种方式生成的一般都是11位的随机字符串）
    const str: string = Math.random().toString(36).substring(2);
    const len: number = length || 10;
    return str;
}

/**
 * 生成随机数字
 * @param length 生成数字的位数
 */
function randomNumber(length?: number): number {
    const len: number = length || 10;
    const num: number = Math.ceil(Math.random() * Math.pow(10, len));
    return num;
}

export {
    randomString,
    randomString2,
    randomNumber,
};
