import * as Koa from 'koa';
import config from '../config';
import debug from './debug';
import { randomNumber, randomString } from './random';

function createRoutes(router: any, routerObj: any) {
    const routes = routerObj.routes;
    for (const route of routes) {
        // console.log(route)
        if (route.method === 'GET') {
            createGet(router, route);
        } else if (route.method === 'POST') {
            createPost(router, route);
        } else {
            debug([
                '暂不支持该类型的请求方法',
                `出错路由: ${route.url}`,
            ]);
            return;
        }
    }
}

/**
 * 生成get路由
 * @param router koa-router对象
 * @param route 路由信息
 */
function createGet(router: any, route: any): void {
    router.get(`${route.url}`, async (ctx: Koa.Context, next: any): Promise<void> => {
        // console.log(ctx.query)
        const query: any = ctx.query;
        const resData: any = {
            status: 200,
            data: {},
        };
        for (const key in route.response) {
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
                            `出错路由: ${route.url}`,
                        ]);
                        return;
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
        function routeData(): Promise<void> {
            return new Promise((resolve: any) => {
                const timer: any = setTimeout((_: any) => {
                    ctx.response.body = {
                        status: '200',
                        data: resData,
                    };
                    clearTimeout(timer);
                    resolve();
                }, config.delayed);
            });
        }
        await routeData();
    });
}
/**
 * 生成post路由
 * @param router koa-router对象
 * @param route 路由信息
 */
function createPost(router: any, route: any): void {
    router.post(`${route.url}`, async (ctx: any): Promise<void> => {
        const query = ctx.request.body;
        const resData: any = {
            status: 200,
            data: {},
        };
        for (const key in route.response) {
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
                            `出错路由: ${route.url}`,
                        ]);
                        return;
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
        function routeData(): Promise<void> {
            return new Promise((resolve: any) => {
                const timer: any = setTimeout((_: any) => {
                    ctx.response.body = {
                        status: '200',
                        data: resData,
                    };
                    clearTimeout(timer);
                    resolve();
                }, config.delayed);
            });
        }
        await routeData();
    });
}

export default createRoutes;
