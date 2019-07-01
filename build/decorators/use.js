"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var index_1 = require("./index");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(index_1.MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(index_1.MetadataKeys.middleware, middlewares.concat([middleware]), target, key);
    };
}
exports.use = use;
