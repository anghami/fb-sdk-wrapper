"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initFactory;

function initFactory(FB) {
  /**
   * Used to initialize and setup the SDK. All other SDK methods must be called
   * after this one.
   *
   * https://developers.facebook.com/docs/javascript/reference/FB.init/v7.0
   * https://developers.facebook.com/apps/
   *
   * @param {Object} params - Params object
   */
  return function init() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    params = Object.assign({
      xfbml: false,
      version: 'v7.0'
    }, params);
    FB.init(params);
  };
}