const Koa = require("koa");
const { get } = require("koa-route");
const server = require("./frontity/build/server").default;

const app = new Koa();

app.use(
  get("/static/:filename", (ctx, filename) => {
    const file = require(`./frontity/build/static/${filename}`).default;
    ctx.set("x-embeded", "true");

    // JavaScript files.
    if (filename.endsWith(".js")) {
      ctx.type = "application/javascript";
      ctx.body = file;
    }

    // PNG files.
    if (filename.endsWith(".png")) {
      const base64 = file.replace("data:image/png;base64,", "");
      ctx.type = "image/png";
      ctx.body = Buffer.from(base64, "base64");
    }
  })
);

app.use(ctx => {
  ctx.respond = false;
  server(ctx.req, ctx.res);
});

module.exports = app.callback();
