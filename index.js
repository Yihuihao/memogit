/**
 * Created by Administrator on 2016/9/29.
 */
const exp = require('express'),
    app = exp();

app.use(exp.static('static'));

app.listen(3000,()=>{
    console.log('·şÎñÆ÷¼àÌı¶Ë¿ÚºÅ3000£¬running....');
});


