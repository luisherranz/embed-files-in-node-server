## Node server with embedded files

This small proof of concept is a Node server that embeds static files like JavaScript files or images in the bundle. The main goal is to be able to serve everything, including the client JavaScript files and small images, only with the serverless function, without the need to upload the static files to a different server.

## Usage

Run `npm start` to:

- Run webpack to create the `build/server.js` file.
- Run `node serve.js` to start a small server that runs the `build/serve.js` file simulating a serverless service.

Then visit:

- http://localhost:3000/static/image.png
- http://localhost:3000/static/js-file.js
- http://localhost:3000/static/robots.txt
