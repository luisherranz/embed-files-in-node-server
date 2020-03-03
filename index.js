const Koa = require("koa");
const { get } = require("koa-route");

const app = new Koa();

app.use(
  get("/static/:filename", (ctx, filename) => {
    // Set response body.
    ctx.body = require(`!!raw-loader!./build/static/${filename}`).default;
    // Change content type for javascript files.
    if (filename.endsWith(".js")) ctx.type = "application/javascript";
  })
);

app.use(ctx => {
  ctx.body = "Server is working.";
});

module.exports = app.callback();
