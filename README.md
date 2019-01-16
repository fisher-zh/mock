## Mock: 基于Typescript Koa 构建的数据模拟服务

### 依赖
```bash
npm install
```

### 开发
```bash
npm run dev
```

### 编译
```bash
npm run build
```

### 格式限制
```bash
npm run lint
```

### 热更新（监测文件的改变）
```bash
npm run watch
```

### 功能
- 模拟后端接口返回数据，使前端在项目初期不依赖与后端进行独立开发

### 使用
- 在 mock 文件内的 routes.json 中配置相应的接口数据即可，后续将提供可视化配置界面

### 配置参数
```
"baseRoute": "app",              // 路由前缀，如所有的路由都已app开头 /app/xxxx

"url": "/getName",               // 路由地址（必填）
"method": "GET",                 // 请求方法（必填）目前仅支持 GET POST
"request": {                     // 请求参数，如果在返回值中未使用可为 {}
    "name": ""
},
"response": {                    // 返回值
    "name": {                    // 返回值参数
        "isMockConfig": true,    // 如果返回值需要动态化配置，该参数需为true，如果未配置或未false，将直接返回该参数的值    "isRequest": true,       // 返回值是否来自于请求参数，该值为true时必须配置requestKey
        "requestKey": "name",    // 请求参数的key，当isRequest为true时才依赖该值
        "isRandom": true,        // 返回值是否为随机值
        "randomType": "string",  // 随机值的类型，目前可选值 ["string", "number"]
        "defaultValue": "abc"    // 默认值（未配置其他值时，该值必填）
    }
}
tips: isRequest、isRandom 原则上不能同时启用，但如果同时启用，那么isRequest的优先级高于isRandom
```

### javascript 版本
如需使用由javascript + koa 构建的版本，请选择 javascript 分支下载即可
