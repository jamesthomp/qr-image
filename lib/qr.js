"use strict";

var QR = require("./qr-base").QR;
var qr_image_sync = require("./image-sync");

module.exports = {
  matrix: QR,
  imageSync: qr_image_sync,
};
