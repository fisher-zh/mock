const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const app = new Koa();

// 请求中间件
app.use(bodyParser());
// 静态文件路径
app.use(require('koa-static')(__dirname+ '/public'));
// 路由
app.use(router.routes());

app.listen(1234);
console.log('The mock server is localhost:1234');
