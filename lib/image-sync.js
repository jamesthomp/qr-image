"use strict";

var QR = require("./qr-base").QR;
var vector = require("./vector");

function qr_image_sync(text, options) {
  var matrix = QR(text, options.ec_level, options.parse_url);
  var stream = [];
  var result;

  vector.svg(matrix, stream, options.margin ?? 1, options.size ?? 0);
  result = stream.filter(Boolean).join("");

  return result;
}

module.exports = qr_image_sync;
