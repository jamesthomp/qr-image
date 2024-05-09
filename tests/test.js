#!/usr/bin/env node

var fs = require("fs");
function file(name) {
  return fs.createWriteStream(__dirname + "/" + name);
}

var qr = require("./../");
var text = "I \u2764\uFE0F QR code!";
var text = "https://yadi.sk/d/FuzPeEg-QyaZN?qr";
var ec_level = "Q";

fs.writeFileSync(
  "qr_sync.svg",
  qr.imageSync(text, { type: "svg", ec_level: ec_level })
);
