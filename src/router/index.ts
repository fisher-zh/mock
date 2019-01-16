import * as Router from 'koa-router';
import createRoutes from '../utils/create-routes';
// 引入生成路由的json数据
const routes = require('../../data/routes.json');

const router = new Router({
    prefix: routes.baseRoute ? `/${routes.baseRoute}` : '',
});
router.get('/', async (ctx) => {
    const str: string = 'Hello Typescript';
    ctx.body = str;
});
// 生成配置路由
createRoutes(router, routes);

export default router;
