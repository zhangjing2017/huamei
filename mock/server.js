let express=require('express');
let app=express();
app.listen(3000);
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('../dist'));
app.get('/',function (req,res) {
    res.sendFile('./index.html',{});
});
let ad=require('./home/ad');
//广告的接口
app.get('/api/ad',function (req,res) {
    res.send(ad);
});
let ad2=require('./home/ad2');
//广告的接口
app.get('/api/ad2',function (req,res) {
    res.send(ad2);
});
let face=require('./home/face');
//获取列表，需要传递城市,页码
app.get('/api/face/:city/:page',(req,res)=>{
    res.send(face);
});
let bibu=require('./home/bibu');
app.get('/api/bibu/:city/:page',(req,res)=>{
    res.send(bibu);
})
let xz=require('./home/xz');
app.get('/api/xz/:city/:page',(req,res)=>{
    res.send(xz);
})
let other=require('./home/other');
app.get('/api/other/:city/:page',(req,res)=>{
    res.send(other);
})
let list=require('./list/list');
app.get('/api/list',(req,res)=>{
    res.send(list);
})
let nav=require('./home/nav');
app.get('/api/nav',(req,res)=>{
    res.send(nav);
})




//商户详情
let info=require('./detail/info');
//通过id来获取商务信息
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
});
//评价列表 id,页码page
let comment=require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(comment);
});
//评价订单列表  用户  /api/orderlist/:username
let orderList=require('./orderlist/orderList');
app.get('/api/orderlist/:id',(req,res)=>{
    res.send(orderList);
});

app.post('/api/comment',((req,res)=>{
    console.log(req.body);
    res.send({msg:'ok'})
}))
