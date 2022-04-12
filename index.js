const Koa = require("koa");
const koaRouter = require("koa-router");

const app = new Koa();
const router = new koaRouter();

app.use(router.routes()).use(router.allowedMethods());

router.get("/index", async (ctx) => {
  ctx.body = "<h1>Index Sayfasına Hoşgeldiniz</h1>";
});

router.get("/Hakkimda", async (ctx) => {
  ctx.body = "<h1>Hakkimda Sayfasına Hoşgeldiniz</h1>";
});

router.get("/iletisim", async (ctx) => {
  ctx.body = "<h1>Iletisim  Sayfasına Hoşgeldiniz</h1>";
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu Port ${port} da baslatildi`);
});
