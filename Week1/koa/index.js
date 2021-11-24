const koa = require("koa");
const koaRouter = require("koa-router"); // importing Koa-Router

const app = new koa();
const router = new koaRouter();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`Metot: ${ctx.method}\n ${ctx.url} : ${ms} ms`);
});

router.get("/", (context) => {
  context.body = "<h1>INDEX PAGE</h1>";
});
router.get("/about", (context) => {
  context.body = "<h1>ABOUT PAGE</h1>";
});
router.get("/contact", (context) => {
  context.body = "<h1>CONTACT PAGE</h1>";
});

app.use(router.routes()).use(router.allowedMethods()); // registering routes to the application */

const port = 5000;
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
