(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = global || self, global.appConfig = factory());
}(this, function () {
  'use strict';
  var appConfig = {
    port: 8080,
    title:"集中集客订单中心"
  }
  return appConfig;
}))