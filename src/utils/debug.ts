/**
 * debug
 * @param {string, array} info debug信息
 * @param                 type debug类型 ['error', 'warning']
 */
function debug(info: any, type?: string): void {
    const debugType: string = type || 'error';
    console.log(`========= ${debugType} ==========`);
    if (info instanceof Array) {
        for (const message of info) {
            console.log(message);
        }
    } else {
        console.log(info);
    }
    console.log(`========= ${debugType} ==========`);
}

export default debug;
