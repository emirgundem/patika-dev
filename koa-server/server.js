const Koa = require('koa');
const koaRouter = require('koa-router');
const app = new Koa();

const router = new koaRouter();



router.get('index','/index',(ctx)=>{
    ctx.body = "<h1>Index Page</h1>"
})

router.get('about','/about',(ctx)=>{
    ctx.body = "<h1>Hakkımda Sayfası</h1>"
})

router.get('contact','/contact',(ctx)=>{
    ctx.body = "<h1>Iletişim Sayfası</h1>"
})





app.use(router.routes())
.use(router.allowedMethods());


app.listen(3000,()=>{
    console.log(`Server Running on port 3000`);
});