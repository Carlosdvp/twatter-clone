
const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

let app = express();

// add the middleware to the express server
app.use(enforce.HTTPS({ trustProtoServer: true }));
app.use(serveStatic(__dirname + '/dist'));
app.use(history());


// run the static server on the port provided by Heroku or on port 5000 as the default
app.listen(process.env.PORT || 5000)