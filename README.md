## Frontity server with embedded files

This small proof of concept is a Node server that embeds Frontity's static files (like JavaScript files or images) in the server bundle.

The main goal is to be able to serve everything, including the client JavaScript files and small images, only with a serverless function, without the need to upload the static files to a different server.

## Usage

Run `npm start` to:

- Run `npx frontity build` to create both a `server.js` file and the `/static` files.
- Run Webpack to create an additional `serverless.js` file, which embeds the `server.js` and `/static` files from Frontity.
- Run `node serve.js` to start a small server that runs the `serverless.js` file simulating a serverless service.

Then visit http://localhost:3000 and Frontity should be working fine. I have added a special header `x-embedded` to the assets served by the `serverless.js` server.

**Note:** This is just a proof of concept not suited for production. This mechanish should be included in Frontity itself, without the need of an additional bundle.
