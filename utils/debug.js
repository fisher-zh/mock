/**
 * debug
 * @param {string, array} info debug信息
 * @param {string}        type debug类型 ['error', 'warning']
 */
function debug (info, type) {
    const debugType = type || 'error';
    console.log(`========= ${debugType} ==========`);
    if (info instanceof Array) {
        for (let i = 0; i < info.length; i++) {
            console.log(info[i]);
        }
    } else {
        console.log(info);
    }
    console.log(`========= ${debugType} ==========`);
}

module.exports = debug;
