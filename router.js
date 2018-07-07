const fs = require('fs');
const Router = require('koa-router');
const routes = require('./mock');
// 生成路由的工具函数
const generateRouter = require('./utils/generate-router');
// 
const baseRoute = routes.baseRoute;

const router = new Router({
    prefix: `/${baseRoute}`
});

router.get('/routes', async (ctx, next) => {
    ctx.response.body = {
        status: 200,
        data: routes
    }
})

// 图形化配置界面
router.get('/config', async (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./public/config.html');
})


generateRouter(router, routes);

module.exports = router;
