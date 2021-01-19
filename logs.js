var log = console.log.bind(window.console);
var dir = console.dir.bind(window.console);
var info = function (info) {
  return console.info("%c ℹ " + info, " color: #2d8cf0; font-weight: bold");
};
var succ = function (succ) {
  return console.info("%c ✅ " + succ, " color: #19be6b; font-weight: bold");
};
var warn = function (warn) {
  return console.info("%c ⚠ " + warn, " color: #ff9900; font-weight: bold");
};
var error = function (err) {
  return console.info("%c ❌ " + err, " color: #ed3f14; font-weight: bold");
};
var table = function (arr) {
  return console.table(arr);
};

export { log, dir, succ, info, warn, error, table };
