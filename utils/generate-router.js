/**
 * 生成路由的工具函数
 * @param {object} router      路由对象
 * @param {object} routerObj   用于生成路由的对象
 */
'use strict'
const randomString = require('./random-string');
const randomNumber = require('./random-number');
const debug = require('./debug');

function generateRouter (router, routerObj) {
    const baseRoute = routerObj.baseRoute;
    const routes = routerObj.routes;
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if (route.method === 'GET') {
            router.get(`/${baseRoute + route.url}`, async (ctx, next) => {
                // console.log(ctx.query)
                const query = ctx.query;
                let resData = {
                    status: 200,
                    data: {}
                }
                for (let key in route.response) {
                    // 如果返回值需要动态化
                    if (typeof route.response[key] === 'object' && route.response[key].isMockConfig) {
                        if (route.response[key].isRandom) {
                            if (route.response[key].randomType === 'string') {
                                resData.data[key] = randomString();
                            } else if (route.response[key].randomType === 'number') {
                                resData.data[key] = randomNumber();
                            } else {
                                debug([
                                    '请配置正确的 randomType 参数',
                                    `出错路由: ${route.url}`
                                ])
                                return
                            }
                        }
                        // 使用query的值返回
                        if (route.response[key].isRequest) {
                            resData.data[key] = query[route.response[key].requestKey] || route.response[key].defaultValue;
                        }
                    } else {
                        resData.data[key] = route.response[key];
                    }
                }
                ctx.response.body = {
                    status: '200',
                    data: resData
                };
            });
        } else if (route.method === 'POST') {
            router.post(`/${baseRoute + route.url}`, async (ctx, next) => {
                // console.log(ctx.request.body)
                const query = ctx.request.body;
                let resData = {
                    status: 200,
                    data: {}
                }
                for (let key in route.response) {
                    // 如果返回值需要动态化
                    if (typeof route.response[key] === 'object' && route.response[key].isMockConfig) {
                        if (route.response[key].isRandom) {
                            if (route.response[key].randomType === 'string') {
                                resData.data[key] = randomString();
                            } else if (route.response[key].randomType === 'number') {
                                resData.data[key] = randomNumber();
                            } else {
                                debug([
                                    '请配置正确的 randomType 参数',
                                    `出错路由: ${route.url}`
                                ])
                                return
                            }
                        }
                        // 使用query的值返回
                        if (route.response[key].isRequest) {
                            resData.data[key] = query[route.response[key].requestKey] || route.response[key].defaultValue;
                        }
                    } else {
                        resData.data[key] = route.response[key]
                    }
                }
                ctx.response.body = {
                    status: '200',
                    data: resData
                };
            });
        } else {
            debug([
                '暂不支持该类型的请求方法',
                `出错路由: ${route.url}`
            ])
            return
        }
    }
}

module.exports = generateRouter
