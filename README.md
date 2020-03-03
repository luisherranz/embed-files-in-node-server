## Node server with embedded files

This small proof of concept is a Node server that embeds static files like JavaScript files or images in the bundle. The main goal is to be able to serve everything, including the client JavaScript files and small images, only with the serverless function, without the need to upload the static files to a different server.

## Usage

Run `npm start` to create the `build/server.js` file and run a small Node server to test it.
