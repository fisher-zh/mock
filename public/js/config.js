var app = new Vue({
    el: '#app',
    data: function () {
        return {
            routerList: []
        }
    },
    methods: {
        getRoutes: function () {
            var that = this;
            $.ajax({
                url: '/routes',
                type: 'GET',
                success: function (res) {
                    console.log(res);
                    for (var i = 0; i < res.data.routes.length; i++) {
                        for (var key in res.data.routes[i]) {
                            if (typeof res.data.routes[i][key] != 'string') {
                                res.data.routes[i][key] = JSON.stringify(res.data.routes[i][key])
                            }
                        }
                    }
                    that.routerList = res.data.routes;
                },
                error: function (err) {
                    console.log(err)
                }
            })
        }
    },
    mounted: function () {
        this.getRoutes()
    }
})