const Koa = require("koa");

const app = new Koa();

app.use(ctx => {
  ctx.body = "Hi!";
});

module.exports = app.callback();
