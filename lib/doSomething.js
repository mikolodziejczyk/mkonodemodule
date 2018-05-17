"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var escape_html_1 = require("escape-html");
function doSometing(name) {
    var s = "Hello: " + name + ".";
    s = escape_html_1.default(s);
    return s;
}
exports.doSometing = doSometing;
//# sourceMappingURL=doSomething.js.map