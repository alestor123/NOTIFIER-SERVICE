require('dotenv').config()
var express = require('express'),
    app = express(),
    notifier = require('node-notifier'),
port = process.env.PORT || 3000;
