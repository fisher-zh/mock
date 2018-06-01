const Router = require('koa-router');
const routes = require('./mock');
// 生成路由的工具函数
const generateRouter = require('./utils/generate-router');

const router = new Router();

generateRouter(router, routes);

module.exports = router;
