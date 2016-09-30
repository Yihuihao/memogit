/**
 * Created by Administrator on 2016/9/29.
 */
const exp = require('express'),
    app = exp();

app.use(exp.static('static'));

app.listen(3000,()=>{
    console.log('服务器监听端口号3000，running....');
});


