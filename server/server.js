/* global __dirname */
/* global require */

var express = require('express'),
    _ = require('lodash'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    chalk = require('chalk'),
    mongodb = require('mongodb'),
    path = require('path');

var app = express();

app.use(express.static(path.join(__dirname + '/../public')));
app.use(bodyParser.json());

app.use(morgan(':remote-addr - ' +
    chalk.cyan('[:date] ') +
    chalk.green('":method :url ') +
    chalk.gray('HTTP/:http-version" ') +
    chalk.yellow(':status ') +
    ':res[content-length] ' +
    chalk.gray('":referrer" ":user-agent" ') +
    'time=:response-time ms'
));

app.listen(process.env.PORT_HTTP || process.argv[2] || 8080);