const Koa = require("koa");
const { get } = require("koa-route");

const app = new Koa();

app.use(
  get("/static/:filename", (ctx, filename) => {
    // Set response body.
    const file = require(`raw-loader!./build/static/${filename}`).default;
    // JavaScript files.
    if (filename.endsWith(".js")) {
      ctx.type = "application/javascript";
      ctx.body = file;
    }
    // PNG files.
    if (filename.endsWith(".png")) {
      const base64 = file
        .replace('export default "data:image/png;base64,', "")
        .replace('"', "");
      ctx.type = "image/png";
      ctx.body = Buffer.from(base64, "base64");
    }
  })
);

app.use(ctx => {
  ctx.body = "Server is working.";
});

module.exports = app.callback();
