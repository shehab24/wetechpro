/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPropValid)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);




/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitlessKeys)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};




/***/ }),

/***/ "./node_modules/@remix-run/router/dist/router.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remix-run/router/dist/router.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* binding */ AbortedDeferredError),
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   IDLE_BLOCKER: () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* binding */ IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   UNSAFE_DEFERRED_SYMBOL: () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   UNSAFE_DeferredData: () => (/* binding */ DeferredData),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* binding */ ErrorResponseImpl),
/* harmony export */   UNSAFE_convertRouteMatchToUiMatch: () => (/* binding */ convertRouteMatchToUiMatch),
/* harmony export */   UNSAFE_convertRoutesToDataRoutes: () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   UNSAFE_getResolveToMatches: () => (/* binding */ getResolveToMatches),
/* harmony export */   UNSAFE_invariant: () => (/* binding */ invariant),
/* harmony export */   UNSAFE_warning: () => (/* binding */ warning),
/* harmony export */   createBrowserHistory: () => (/* binding */ createBrowserHistory),
/* harmony export */   createHashHistory: () => (/* binding */ createHashHistory),
/* harmony export */   createMemoryHistory: () => (/* binding */ createMemoryHistory),
/* harmony export */   createPath: () => (/* binding */ createPath),
/* harmony export */   createRouter: () => (/* binding */ createRouter),
/* harmony export */   createStaticHandler: () => (/* binding */ createStaticHandler),
/* harmony export */   defer: () => (/* binding */ defer),
/* harmony export */   generatePath: () => (/* binding */ generatePath),
/* harmony export */   getStaticContextFromError: () => (/* binding */ getStaticContextFromError),
/* harmony export */   getToPathname: () => (/* binding */ getToPathname),
/* harmony export */   isDeferredData: () => (/* binding */ isDeferredData),
/* harmony export */   isRouteErrorResponse: () => (/* binding */ isRouteErrorResponse),
/* harmony export */   joinPaths: () => (/* binding */ joinPaths),
/* harmony export */   json: () => (/* binding */ json),
/* harmony export */   matchPath: () => (/* binding */ matchPath),
/* harmony export */   matchRoutes: () => (/* binding */ matchRoutes),
/* harmony export */   normalizePathname: () => (/* binding */ normalizePathname),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   redirectDocument: () => (/* binding */ redirectDocument),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   resolveTo: () => (/* binding */ resolveTo),
/* harmony export */   stripBasename: () => (/* binding */ stripBasename)
/* harmony export */ });
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation
  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    // Treating this as a full URL will strip any trailing spaces so we need to
    // pre-encode them since they might be part of a matching splat param from
    // an ancestor route
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: undefined
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(branches[i], decoded);
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = p => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    // only apply the splat if it's the last segment
    if (isLastSegment && segment === "*") {
      const star = "*";
      // Apply the splat
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
      return stringify(param);
    }
    // Remove any optional markers from optional static segments
    return segment.replace(/\?$/g, "");
  })
  // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
  // match so we include splat values for "." links.  See:
  // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map(match => match.pathnameBase);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    // With relative="route" (the default), each leading .. segment means
    // "go up one route" instead of "go up one URL segment".  This is a key
    // difference from how <a href> works and a major reason we call this a
    // "to" value instead of a "href".
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */
const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    // Set up an AbortController + Promise we can race against to exit early
    // cancellation
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject
    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, undefined, data), error => this.onSettle(promise, key, error));
    // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values
    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }
    // If the promise was resolved/rejected with undefined, we'll throw an error as you
    // should always resolve with a value or null
    if (error === undefined && data === undefined) {
      let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === undefined) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);
          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref3) => {
      let [key, value] = _ref3;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = route => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Routes keyed by ID
  let manifest = {};
  // Routes in tree format for matching
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.unstable_dataStrategy || defaultDataStrategy;
  // Config driven behavior flags
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_partialHydration: false,
    v7_prependBasename: false,
    v7_relativeSplatPath: false,
    unstable_skipActionErrorRevalidation: false
  }, init.future);
  // Cleanup function for history
  let unlistenHistory = null;
  // Externally-provided functions to call on all state changes
  let subscribers = new Set();
  // Externally-provided object to hold scroll restoration locations during routing
  let savedScrollPositions = null;
  // Externally-provided function to get scroll restoration keys
  let getScrollRestorationKey = null;
  // Externally-provided function to get current scroll position
  let getScrollPosition = null;
  // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized;
  let hasLazyRoutes = initialMatches.some(m => m.route.lazy);
  let hasLoaders = initialMatches.some(m => m.route.loader);
  if (hasLazyRoutes) {
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    initialized = false;
  } else if (!hasLoaders) {
    // If we've got no loaders to run, then we're good to go
    initialized = true;
  } else if (future.v7_partialHydration) {
    // If partial hydration is enabled, we're initialized so long as we were
    // provided with hydrationData for every route with a loader, and no loaders
    // were marked for explicit hydration
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    let isRouteInitialized = m => {
      // No loader, nothing to initialize
      if (!m.route.loader) {
        return true;
      }
      // Explicitly opting-in to running on hydration
      if (typeof m.route.loader === "function" && m.route.loader.hydrate === true) {
        return false;
      }
      // Otherwise, initialized if hydrated with data or an error
      return loaderData && loaderData[m.route.id] !== undefined || errors && errors[m.route.id] !== undefined;
    };
    // If errors exist, don't consider routes below the boundary
    if (errors) {
      let idx = initialMatches.findIndex(m => errors[m.route.id] !== undefined);
      initialized = initialMatches.slice(0, idx + 1).every(isRouteInitialized);
    } else {
      initialized = initialMatches.every(isRouteInitialized);
    }
  } else {
    // Without partial hydration - we're initialized if we were provided any
    // hydrationData - which is expected to be complete
    initialized = init.hydrationData != null;
  }
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)
  let pendingAction = Action.Pop;
  // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?
  let pendingPreventScrollReset = false;
  // AbortController for the active navigation
  let pendingNavigationController;
  // Should the current navigation enable document.startViewTransition?
  let pendingViewTransitionEnabled = false;
  // Store applied view transitions so we can apply them on POP
  let appliedViewTransitions = new Map();
  // Cleanup function for persisting applied transitions to sessionStorage
  let removePageHideEventListener = null;
  // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted
  let isUninterruptedRevalidation = false;
  // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidator()
  //  - X-Remix-Revalidate (from redirect)
  let isRevalidationRequired = false;
  // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission
  let cancelledDeferredRoutes = [];
  // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation
  let cancelledFetcherLoads = [];
  // AbortControllers for any in-flight fetchers
  let fetchControllers = new Map();
  // Track loads based on the order in which they started
  let incrementingLoadId = 0;
  // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation
  let pendingNavigationLoadId = -1;
  // Fetchers that triggered data reloads as a result of their actions
  let fetchReloadIds = new Map();
  // Fetchers that triggered redirect navigations
  let fetchRedirectIds = new Set();
  // Most recent href/match for fetcher.load calls for fetchers
  let fetchLoadMatches = new Map();
  // Ref-count mounted fetchers so we know when it's ok to clean them up
  let activeFetchers = new Map();
  // Fetchers that have requested a delete when using v7_fetcherPersist,
  // they'll be officially removed after they return to idle
  let deletedFetchers = new Set();
  // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.
  let activeDeferreds = new Map();
  // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change
  let blockerFunctions = new Map();
  // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state
  let ignoreNextHistoryUpdate = false;
  // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();
  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1);
        // Put the blocker into a blocked state
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            });
            // Re-do the same POP navigation we just blocked
            init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      // FIXME: This feels gross.  How can we cleanup the lines between
      // scrollRestoration/appliedTransitions persistance?
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location, {
        initialHydration: true
      });
    }
    return router;
  }
  // Clean up a router and it's side effects
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  // Subscribe to state updates for the router
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  // Update our state and notify the calling context of the change
  function updateState(newState, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state = _extends({}, state, newState);
    // Prep fetcher cleanup so we can tell the UI which fetcher data entries
    // can be removed
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            // Unmounted from the UI and can be totally removed
            deletedFetchersKeys.push(key);
          } else {
            // Returned to idle but still mounted in the UI, so semi-remains for
            // revalidations and such
            completedFetchers.push(key);
          }
        }
      });
    }
    // Iterate over a local copy so that if flushSync is used and we end up
    // removing and adding a new subscriber due to the useCallback dependencies,
    // we don't get ourselves into a loop calling the new subscriber immediately
    [...subscribers].forEach(subscriber => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      unstable_viewTransitionOpts: opts.viewTransitionOpts,
      unstable_flushSync: opts.flushSync === true
    }));
    // Remove idle fetchers from state since we only care about in-flight fetchers.
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach(key => state.fetchers.delete(key));
      deletedFetchersKeys.forEach(key => deleteFetcher(key));
    }
  }
  // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState
  function completeNavigation(location, newState, _temp) {
    var _location$state, _location$state2;
    let {
      flushSync
    } = _temp === void 0 ? {} : _temp;
    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    }
    // Always preserve any existing loaderData from re-used routes
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    // On POP, enable transitions if they were enabled on the original navigation
    if (pendingAction === Action.Pop) {
      // Forward takes precedence so they behave like the original navigation
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        // If we don't have a previous forward nav, assume we're popping back to
        // the new location and enable if that location previously enabled
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      // Store the applied transition on PUSH/REPLACE
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), {
      viewTransitionOpts,
      flushSync: flushSync === true
    });
    // Reset stateful navigation vars
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let flushSync = (opts && opts.unstable_flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          // Send the same navigation through
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.unstable_viewTransition,
      flushSync
    });
  }
  // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders
    if (state.navigation.state === "submitting") {
      return;
    }
    // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    let flushSync = (opts && opts.flushSync) === true;
    // Short circuit with a 404 on the root error boundary if we match nothing
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      // Cancel all pending deferred on 404s since we don't keep any routes
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      }, {
        flushSync
      });
      return;
    }
    // Short circuit if it's only a hash change and not a revalidation or
    // mutation submission.
    //
    // Ignore on initial page loads because since the initial load will always
    // be "same hash".  For example, on /page#hash and submit a <Form method="post">
    // which will default to a navigation to /page
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      }, {
        flushSync
      });
      return;
    }
    // Create a controller/Request for this navigation
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionResult;
    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingActionResult = [findNearestBoundary(matches).route.id, {
        type: ResultType.error,
        error: opts.pendingError
      }];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionResult = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace,
        flushSync
      });
      if (actionResult.shortCircuited) {
        return;
      }
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync = false;
      // Create a GET request for the loaders
      request = createClientSideRequest(init.history, request.url, request.signal);
    }
    // Call loaders
    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
    if (shortCircuited) {
      return;
    }
    // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, getActionDataForCommit(pendingActionResult), {
      loaderData,
      errors
    }));
  }
  // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  async function handleAction(request, location, submission, matches, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    // Put us in a submitting state
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    }, {
      flushSync: opts.flushSync === true
    });
    // Call our action and get the result
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy("action", request, [actionMatch], matches);
      result = results[0];
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        let location = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
        replace = location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
    // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op
    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    // Short circuit if we have no loaders to run
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null
      }, getActionDataForCommit(pendingActionResult), updatedFetchers ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync
      });
      return {
        shortCircuited: true
      };
    }
    // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)
    // If we have partialHydration enabled, then don't update the state for the
    // initial data load since it's not a "navigation"
    if (!isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration)) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData;
      if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
        // This is cast to `any` currently because `RouteData`uses any and it
        // would be a breaking change to use any.
        // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
        actionData = {
          [pendingActionResult[0]]: pendingActionResult[1].data
        };
      } else if (state.actionData) {
        if (Object.keys(state.actionData).length === 0) {
          actionData = null;
        } else {
          actionData = state.actionData;
        }
      }
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData !== undefined ? {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}), {
        flushSync
      });
    }
    revalidatingFetchers.forEach(rf => {
      if (fetchControllers.has(rf.key)) {
        abortFetcher(rf.key);
      }
      if (rf.controller) {
        // Fetchers use an independent AbortController so that aborting a fetcher
        // (via deleteFetcher) does not abort the triggering navigation that
        // triggered the revalidation
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    // Proxy navigation abort through to revalidation fetchers
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(f => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key));
    // If any loaders returned a redirect Response, start a new REPLACE navigation
    let redirect = findRedirect([...loaderResults, ...fetcherResults]);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      await startRedirectNavigation(request, redirect.result, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Wire up subscribers to update loaderData as promises settle
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    // During partial hydration, preserve SSR errors for routes that don't re-run
    if (future.v7_partialHydration && initialHydration && state.errors) {
      Object.entries(state.errors).filter(_ref2 => {
        let [id] = _ref2;
        return !matchesToLoad.some(m => m.route.id === id);
      }).forEach(_ref3 => {
        let [routeId, error] = _ref3;
        errors = Object.assign(errors || {}, {
          [routeId]: error
        });
      });
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  // Trigger a fetcher load/submit for the given fetcher key
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key)) abortFetcher(key);
    let flushSync = (opts && opts.unstable_flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }), {
        flushSync
      });
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error, {
        flushSync
      });
      return;
    }
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, flushSync, submission);
      return;
    }
    // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission);
  }
  // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  async function handleFetcherAction(key, routeId, path, match, requestMatches, flushSync, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error, {
        flushSync
      });
      return;
    }
    // Put this fetcher into it's submitting state
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    // Call the action for the fetcher
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy("action", fetchRequest, [match], requestMatches);
    let actionResult = actionResults[0];
    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
    // or redirects processed for unmounted fetchers so we just revert them to
    // idle
    if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      }
      // Let SuccessResult's fall through for revalidation
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          // A new navigation was kicked off after our action started, so that
          // should take precedence over this redirect navigation.  We already
          // set isRevalidationRequired so all loaders for the new route should
          // fire unless opted out via shouldRevalidate
          updateFetcherState(key, getDoneFetcher(undefined));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, {
            fetcherSubmission: submission
          });
        }
      }
      // Process any non-redirect errors thrown
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.unstable_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [match.route.id, actionResult]);
    // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data
    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      if (fetchControllers.has(staleKey)) {
        abortFetcher(staleKey);
      }
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(rf => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect([...loaderResults, ...fetcherResults]);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(revalidationRequest, redirect.result);
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Since we let revalidations complete even if the submitting fetcher was
    // deleted, only put it back to idle if it hasn't been deleted
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  async function handleFetcherLoader(key, routeId, path, match, matches, flushSync, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
      flushSync
    });
    // Call the loader for this fetcher route match
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy("loader", fetchRequest, [match], matches);
    let result = results[0];
    // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    // We can delete this so long as we weren't aborted by our our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    // We don't want errors bubbling up or redirects followed for unmounted
    // fetchers, so short circuit here if it was removed from the UI
    if (deletedFetchers.has(key)) {
      updateFetcherState(key, getDoneFetcher(undefined));
      return;
    }
    // If the loader threw a redirect Response, start a new REPLACE navigation
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our loader started, so that
        // should take precedence over this redirect navigation
        updateFetcherState(key, getDoneFetcher(undefined));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result);
        return;
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    // Put the fetcher back into an idle state
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  async function startRedirectNavigation(request, redirect, _temp2) {
    let {
      submission,
      fetcherSubmission,
      replace
    } = _temp2 === void 0 ? {} : _temp2;
    if (redirect.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(location, new URL(request.url), basename);
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect.response.headers.has("X-Remix-Reload-Document")) {
        // Hard reload if the response contained X-Remix-Reload-Document
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload =
        // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin ||
        // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    // Use the incoming submission if provided, fallback on the active one in
    // state.navigation
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // If we have a navigation submission, we will preserve it through the
      // redirect navigation
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  // Utility wrapper for calling dataStrategy client-side without having to
  // pass around the manifest, mapRouteProperties, etc.
  async function callDataStrategy(type, request, matchesToLoad, matches) {
    try {
      let results = await callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties);
      return await Promise.all(results.map((result, i) => {
        if (isRedirectHandlerResult(result)) {
          let response = result.result;
          return {
            type: ResultType.redirect,
            response: normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath)
          };
        }
        return convertHandlerResultToDataResult(result);
      }));
    } catch (e) {
      // If the outer dataStrategy method throws, just return the error for all
      // matches - and it'll naturally bubble to the root
      return matchesToLoad.map(() => ({
        type: ResultType.error,
        error: e
      }));
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    let [loaderResults, ...fetcherResults] = await Promise.all([matchesToLoad.length ? callDataStrategy("loader", request, matchesToLoad, matches) : [], ...fetchersToLoad.map(f => {
      if (f.matches && f.match && f.controller) {
        let fetcherRequest = createClientSideRequest(init.history, f.path, f.controller.signal);
        return callDataStrategy("loader", fetcherRequest, [f.match], f.matches).then(r => r[0]);
      } else {
        return Promise.resolve({
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        });
      }
    })]);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, fetchersToLoad.map(f => f.controller ? f.controller.signal : null), true)]);
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true;
    // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    // Abort in-flight fetcher loads
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function updateFetcherState(key, fetcher, opts) {
    if (opts === void 0) {
      opts = {};
    }
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function setFetcherError(key, routeId, error, opts) {
    if (opts === void 0) {
      opts = {};
    }
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    }, {
      flushSync: (opts && opts.flushSync) === true
    });
  }
  function getFetcher(key) {
    if (future.v7_fetcherPersist) {
      activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
      // If this fetcher was previously marked for deletion, unmark it since we
      // have a new instance
      if (deletedFetchers.has(key)) {
        deletedFetchers.delete(key);
      }
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    // Don't abort the controller if this is a deletion of a fetcher.submit()
    // in it's loading phase since - we don't want to abort the corresponding
    // revalidation and want them to complete and land
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    deletedFetchers.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    if (future.v7_fetcherPersist) {
      let count = (activeFetchers.get(key) || 0) - 1;
      if (count <= 0) {
        activeFetchers.delete(key);
        deletedFetchers.add(key);
      } else {
        activeFetchers.set(key, count);
      }
    } else {
      deleteFetcher(key);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  // Utility function to update blockers, ensuring valid state transitions
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref4) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref4;
    if (blockerFunctions.size === 0) {
      return;
    }
    // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    }
    // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map(m => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
  }
  router = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Config driven behavior flags
  let future = _extends({
    v7_relativeSplatPath: false,
    v7_throwAbortReason: false
  }, opts ? opts.future : null);
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */
  async function query(request, _temp3) {
    let {
      requestContext,
      skipLoaderErrorBubbling,
      unstable_dataStrategy
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, skipLoaderErrorBubbling === true, null);
    if (isResponse(result)) {
      return result;
    }
    // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location
    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */
  async function queryRoute(request, _temp4) {
    let {
      routeId,
      requestContext,
      unstable_dataStrategy
    } = _temp4 === void 0 ? {} : _temp4;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, unstable_dataStrategy || null, false, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : undefined;
    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    }
    // Pick off the right state value to return
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return undefined;
  }
  async function queryImpl(request, location, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
        return result;
      }
      let result = await loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction for a
      // `queryRoute` call, we throw the `HandlerResult` to bail out early
      // and then return or throw the raw Response here accordingly
      if (isHandlerResult(e) && isResponse(e.result)) {
        if (e.type === ResultType.error) {
          throw e.result;
        }
        return e.result;
      }
      // Redirects are always returned since they don't propagate to catch
      // boundaries
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      let results = await callDataStrategy("action", request, [actionMatch], matches, isRouteRequest, requestContext, unstable_dataStrategy);
      result = results[0];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest, future);
      }
    }
    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    // Create a GET request for the loaders
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null, [boundaryMatch.route.id, result]);
      // action status codes take precedence over loader status codes
      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    let context = await loadRouteData(loaderRequest, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, null);
    return _extends({}, context, {
      actionData: {
        [actionMatch.route.id]: result.data
      }
    }, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionHeaders: result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {}
    });
  }
  async function loadRouteData(request, matches, requestContext, unstable_dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    // Short circuit if we have no loaders to run (queryRoute())
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy);
    // Short circuit if we have no loaders to run (query())
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy);
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest, future);
    }
    // Process and commit output from loaders
    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
    // Add a null for any non-loader matches for proper revalidation on the client
    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  // Utility wrapper for calling dataStrategy server-side without having to
  // pass around the manifest, mapRouteProperties, etc.
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, unstable_dataStrategy) {
    let results = await callDataStrategyImpl(unstable_dataStrategy || defaultDataStrategy, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext);
    return await Promise.all(results.map((result, i) => {
      if (isRedirectHandlerResult(result)) {
        let response = result.result;
        // Throw redirects and let the server handle them with an HTTP redirect
        throw normalizeRelativeRoutingRedirectResponse(response, request, matchesToLoad[i].route.id, matches, basename, future.v7_relativeSplatPath);
      }
      if (isResponse(result.result) && isRouteRequest) {
        // For SSR single-route requests, we want to hand Responses back
        // directly without unwrapping
        throw result;
      }
      return convertHandlerResultToDataResult(result);
    }));
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
  if (future.v7_throwAbortReason && request.signal.reason !== undefined) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    // Grab matches up to the calling route so our route-relative logic is
    // relative to the correct source route
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  // Resolve the relative path
  let path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  // When `to` is not specified we inherit search/hash from the current
  // location, unlike when to="." and we just inherit the path.
  // See https://github.com/remix-run/remix/issues/927
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  // Add an ?index param for matched index routes if we don't already have one
  if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname.  If
  // this is a root navigation, then just use the raw basename which allows
  // the basename to have full control over the presence of a trailing slash
  // on root actions
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  // Return location verbatim on non-submission navigations
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  // Create a Submission on non-GET navigations
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
      Array.from(opts.body.entries()).reduce((acc, _ref5) => {
        let [name, value] = _ref5;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  // Flatten submission onto URLSearchParams for GET submissions
  let parsedPath = parsePath(path);
  // On GET navigation submissions we can drop the ?index param from the
  // resulting location since all loaders will run.  But fetcher GET submissions
  // only run a single loader so we need to preserve any incoming ?index params
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isInitialLoad, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  // Pick navigation matches that are net-new or qualify for revalidation
  let boundaryId = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[0] : undefined;
  let boundaryMatches = boundaryId ? getLoaderMatchesUntilBoundary(matches, boundaryId) : matches;
  // Don't revalidate loaders by default after action 4xx/5xx responses
  // when the flag is enabled.  They can still opt-into revalidation via
  // `shouldRevalidate` via `actionResult`
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
  let shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let {
      route
    } = match;
    if (route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (isInitialLoad) {
      if (typeof route.loader !== "function" || route.loader.hydrate) {
        return true;
      }
      return state.loaderData[route.id] === undefined && (
      // Don't re-run if the loader ran and threw an error
      !state.errors || state.errors[route.id] === undefined);
    }
    // Always call the loader on new route instances and pending defer cancellations
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    }
    // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      unstable_actionStatus: actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false :
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
      // Search params affect all loaders
      currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  // Pick fetcher.loads that need to be revalidated
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate:
    //  - on initial load (shouldn't be any fetchers then anyway)
    //  - if fetcher won't be present in the subsequent render
    //    - no longer matches the URL (v7_fetcherPersist=false)
    //    - was unmounted but persisted due to v7_fetcherPersist=true
    if (isInitialLoad || !matches.some(m => m.route.id === f.routeId) || deletedFetchers.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
    // currently only a use-case for Remix HMR where the route tree can change
    // at runtime and remove a route previously loaded via a fetcher
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    // Revalidating fetchers are decoupled from the route matches since they
    // load from a static href.  They revalidate based on explicit revalidation
    // (submission, useRevalidator, or X-Remix-Revalidate)
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      // Never trigger a revalidation of an actively redirecting fetcher
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.includes(key)) {
      // Always revalidate if the fetcher was cancelled
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
      // If the fetcher hasn't ever completed loading yet, then this isn't a
      // revalidation, it would just be a brand new load if an explicit
      // revalidation is required
      shouldRevalidate = isRevalidationRequired;
    } else {
      // Otherwise fall back on any user-defined shouldRevalidate, defaulting
      // to explicit revalidations only
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        unstable_actionStatus: actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id;
  // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred
  let isMissingData = currentLoaderData[match.route.id] === undefined;
  // Always load if this is a net-new route or we don't yet have data
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
    // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(routeToUpdate, routeUpdates);
  // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: undefined
  }));
}
// Default implementation of `dataStrategy` which fetches all loaders in parallel
function defaultDataStrategy(opts) {
  return Promise.all(opts.matches.map(m => m.resolve()));
}
async function callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, manifest, mapRouteProperties, requestContext) {
  let routeIdsToLoad = matchesToLoad.reduce((acc, m) => acc.add(m.route.id), new Set());
  let loadedMatches = new Set();
  // Send all matches here to allow for a middleware-type implementation.
  // handler will be a no-op for unneeded routes and we filter those results
  // back out below.
  let results = await dataStrategyImpl({
    matches: matches.map(match => {
      let shouldLoad = routeIdsToLoad.has(match.route.id);
      // `resolve` encapsulates the route.lazy, executing the
      // loader/action, and mapping return values/thrown errors to a
      // HandlerResult.  Users can pass a callback to take fine-grained control
      // over the execution of the loader/action
      let resolve = handlerOverride => {
        loadedMatches.add(match.route.id);
        return shouldLoad ? callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, requestContext) : Promise.resolve({
          type: ResultType.data,
          result: undefined
        });
      };
      return _extends({}, match, {
        shouldLoad,
        resolve
      });
    }),
    request,
    params: matches[0].params,
    context: requestContext
  });
  // Throw if any loadRoute implementations not called since they are what
  // ensures a route is fully loaded
  matches.forEach(m => invariant(loadedMatches.has(m.route.id), "`match.resolve()` was not called for route id \"" + m.route.id + "\". " + "You must call `match.resolve()` on every match passed to " + "`dataStrategy` to ensure all routes are properly loaded."));
  // Filter out any middleware-only matches for which we didn't need to run handlers
  return results.filter((_, i) => routeIdsToLoad.has(matches[i].route.id));
}
// Default logic for calling a loader/action is the user has no specified a dataStrategy
async function callLoaderOrAction(type, request, match, manifest, mapRouteProperties, handlerOverride, staticContext) {
  let result;
  let onReject;
  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    // This will never resolve so safe to type it as Promise<HandlerResult> to
    // satisfy the function return value
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = ctx => {
      if (typeof handler !== "function") {
        return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ("\"" + type + "\" [routeId: " + match.route.id + "]")));
      }
      return handler({
        request,
        params: match.params,
        context: staticContext
      }, ...(ctx !== undefined ? [ctx] : []));
    };
    let handlerPromise;
    if (handlerOverride) {
      handlerPromise = handlerOverride(ctx => actualHandler(ctx));
    } else {
      handlerPromise = (async () => {
        try {
          let val = await actualHandler();
          return {
            type: "data",
            result: val
          };
        } catch (e) {
          return {
            type: "error",
            result: e
          };
        }
      })();
    }
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let handlerError;
        let [value] = await Promise.all([
        // If the handler throws, don't let it immediately bubble out,
        // since we need to let the lazy() execution finish so we know if this
        // route has a boundary that can handle the error
        runHandler(handler).catch(e => {
          handlerError = e;
        }), loadLazyRouteModule(match.route, mapRouteProperties, manifest)]);
        if (handlerError !== undefined) {
          throw handlerError;
        }
        result = value;
      } else {
        // Load lazy route module, then run any returned handler
        await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
        handler = match.route[type];
        if (handler) {
          // Handler still runs even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            result: undefined
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    // We should already be catching and converting normal handler executions to
    // HandlerResults and returning them, so anything that throws here is an
    // unexpected error we still need to wrap
    return {
      type: ResultType.error,
      result: e
    };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertHandlerResultToDataResult(handlerResult) {
  let {
    result,
    type,
    status
  } = handlerResult;
  if (isResponse(result)) {
    let data;
    try {
      let contentType = result.headers.get("Content-Type");
      // Check between word boundaries instead of startsWith() due to the last
      // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data = null;
        } else {
          data = await result.json();
        }
      } else {
        data = await result.text();
      }
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
    if (type === ResultType.error) {
      return {
        type: ResultType.error,
        error: new ErrorResponseImpl(result.status, result.statusText, data),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === ResultType.error) {
    return {
      type: ResultType.error,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : status
    };
  }
  if (isDeferredData(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result,
    statusCode: status
  };
}
// Support relative routing in internal redirects
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
  let location = response.headers.get("Location");
  invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1);
    location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    // Strip off the protocol+origin for same-origin + same-basename absolute redirects
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
  // Process loader results into state.loaderData/state.errors
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let error = result.error;
      // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed
      if (pendingError !== undefined) {
        error = pendingError;
        pendingError = undefined;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        // Look upwards from the matched route for the closest ancestor error
        // boundary, defaulting to the root match.  Prefer higher error values
        // if lower errors bubble to the same boundary
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      // Clear our any prior loaderData for the throwing route
      loaderData[id] = undefined;
      // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
        // Error status codes always override success status codes, but if all
        // loaders are successful we take the deepest status code.
        if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      } else {
        loaderData[id] = result.data;
        // Error status codes always override success status codes, but if all
        // loaders are successful we take the deepest status code.
        if (result.statusCode && result.statusCode !== 200 && !foundError) {
          statusCode = result.statusCode;
        }
        if (result.headers) {
          loaderHeaders[id] = result.headers;
        }
      }
    }
  });
  // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route
  if (pendingError !== undefined && pendingActionResult) {
    errors = {
      [pendingActionResult[0]]: pendingError
    };
    loaderData[pendingActionResult[0]] = undefined;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
  );
  // Process results from our revalidating fetchers
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index];
    // Process fetcher non-redirect errors
    if (controller && controller.signal.aborted) {
      // Nothing to do for aborted fetchers
      continue;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.length === 1 ? routes[0] : routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp5) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp5 === void 0 ? {} : _temp5;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return {
        result,
        idx: i
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    // /page -> /page#hash
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    // /page#hash -> /page#hash
    return true;
  } else if (b.hash !== "") {
    // /page#hash -> /page#other
    return true;
  }
  // If the hash is removed the browser will re-perform a request to the server
  // /page#hash -> /page
  return false;
}
function isHandlerResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectHandlerResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      let signal = signals[index];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  }
  // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
    // no-op, use default empty object
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}
//#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ "./src/img/wetechpro.svg":
/*!*******************************!*\
  !*** ./src/img/wetechpro.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactComponent: () => (/* binding */ SvgWetechpro),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _defs, _g;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgWetechpro = function SvgWetechpro(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 82.517,
    height: 81.462,
    style: {
      maxHeight: 500
    }
  }, props), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "wetechpro_svg__a",
    x2: 1,
    y1: -0.117,
    y2: 1.091,
    gradientUnits: "objectBoundingBox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0,
    stopColor: "#6f6aef"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#9a91fe"
  })))), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    "data-name": "Group 7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#4f4d88",
    d: "m136.797 61.548-1.007-2.915 7.844-22.26c2.067-5.83 3.816-9.116 6.254-11.925h-16.431c5.459 4.293 9.911 11.077 4.77 25.6a66 66 0 0 1-2.97 7.154l-9.54-27.136c-.9-2.544-.371-4.558 1.007-5.618h-13.777a7.06 7.06 0 0 1 2.968 3.975l4.717 13.515c2.067 6.572.265 11.448-1.749 15.37l-9.593-27.242c-.9-2.544-.371-4.558 1.007-5.618h-13.78a7.06 7.06 0 0 1 2.968 3.975l11.925 33.925a35 35 0 0 1 7.261-.8h1.7l-1.014-2.915 3.6-10.123 4.883 13.838a35 35 0 0 1 7.261-.8Zm17.384-13.409a12.4 12.4 0 0 0 6.784 2.12c4.452 0 8.056-2.915 8.056-7.844s-3.551-7.9-9.434-7.9c-8.109 0-13.356 5.618-13.356 14.257 0 8.162 4.664 13.3 12.084 13.3 7.632 0 11.713-5.459 11.607-15.635-.583 5.353-4.24 9.328-8.692 9.328-3.763.006-6.36-2.856-7.049-7.626m-.106-.53a33 33 0 0 1-.106-2.332c0-5.989 2.385-10.229 5.671-10.229 1.908 0 2.809 1.378 2.809 4.293 0 5.141-2.862 8.851-6.1 8.851a4.56 4.56 0 0 1-2.274-.583m39.273 13.939c-1.8-1.007-2.915-2.756-2.915-7.9v-28.67h.848c4.4 0 5.512 10.494 10.388 14.84a48.7 48.7 0 0 1 0-16.165 12.8 12.8 0 0 1-4.452.795h-22.26a12.8 12.8 0 0 1-4.452-.795 48.7 48.7 0 0 1 0 16.165c4.876-4.346 5.989-14.84 10.388-14.84h.848v28.67c0 5.141-1.113 6.89-2.915 7.9Zm17.331-13.409a12.4 12.4 0 0 0 6.784 2.12c4.452 0 8.056-2.915 8.056-7.844s-3.551-7.9-9.434-7.9c-8.109 0-13.356 5.618-13.356 14.257 0 8.162 4.664 13.3 12.084 13.3 7.632 0 11.713-5.459 11.607-15.635-.583 5.353-4.24 9.328-8.692 9.328-3.763.006-6.36-2.856-7.049-7.626m-.106-.53a33 33 0 0 1-.106-2.332c0-5.989 2.385-10.229 5.671-10.229 1.908 0 2.809 1.378 2.809 4.293 0 5.141-2.862 8.851-6.1 8.851a4.56 4.56 0 0 1-2.274-.583m35.722 1.908a25.7 25.7 0 0 1 5.247-14.469 13.6 13.6 0 0 1-2.491.212c-2.544 0-4.823-.636-7.632-.636-8 0-12.826 5.194-12.826 13.833 0 8.321 4.505 13.621 11.664 13.621 7.31 0 11.5-5.618 11.5-15.53-.848 5.671-4.028 9.222-8.268 9.222-4.452 0-7.155-3.816-7.155-10.017 0-5.883 2.438-10.706 5.406-10.706 3.917.001 2.541 8.587 4.555 14.47m20.776 12.031h14.522c-2.12-1.166-2.915-3.392-2.915-7.9v-5.989c0-9.222-2.438-13.144-8.162-13.144a15.3 15.3 0 0 0-6.572 1.643v-14.36c-1.908 1.166-4.77 1.431-7.844 1.431h-3.763c1.855 1.272 2.915 4.134 2.915 7.844v22.575c0 4.505-.8 6.731-2.915 7.9h14.52c-2.12-1.166-2.915-3.392-2.915-7.9v-17.01a4.1 4.1 0 0 1 1.537-.265c3.233 0 4.505 4.346 4.505 10.706v6.569c.002 4.508-.793 6.734-2.913 7.9m31.164 0c-1.8-1.007-2.915-2.756-2.915-7.9v-5.777h.477c9.805 0 16.112-3.922 16.112-11.872s-6.307-11.551-16.112-11.551h-12.084c1.8 1.007 2.915 2.756 2.915 7.844v21.356c0 5.141-1.113 6.89-2.915 7.9Zm-2.915-14.2v-22.37h.424c4.929 0 7.42 5.565 7.42 11.183 0 5.565-2.491 11.183-7.42 11.183Zm18.762 14.2h14.522c-2.12-1.166-2.915-3.392-2.915-7.9v-9.911c.636-2.385 1.855-3.445 3.286-3.445 3.233 0 3.392 5.618 6.731 9.7-1.06-5.936-.424-11.766 1.537-14.946a8.55 8.55 0 0 0-3.233-.689c-3.392 0-6.36 2.12-8.321 7.95v-8.692c-1.961 1.166-4.823 1.431-7.9 1.431h-3.71c1.8 1.219 2.915 4.134 2.915 8.374v10.228c.003 4.508-.792 6.734-2.912 7.9m37.418.53c8.268 0 13.621-5.406 13.621-13.78 0-8.533-5.194-13.78-13.621-13.78-8.48 0-13.674 5.247-13.674 13.78 0 8.374 5.353 13.78 13.674 13.78m1.06-.583c-3.339 0-6.148-7.579-6.148-16.059 0-6.413 1.59-10.335 3.975-10.335 3.392 0 6.148 7.579 6.148 16.059 0 6.413-1.59 10.335-3.978 10.335Z",
    "data-name": "Path 14"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#wetechpro_svg__a)",
    d: "M0 40.548c0-12.6 0-18.893 2.058-23.861a27.03 27.03 0 0 1 14.63-14.63C21.655 0 27.953 0 40.548 0c12.6 0 18.893 0 23.861 2.058a27.03 27.03 0 0 1 14.63 14.63C81.1 21.655 81.1 27.953 81.1 40.548c0 12.6 0 18.893-2.058 23.861a27.03 27.03 0 0 1-14.63 14.63C59.441 81.1 53.144 81.1 40.548 81.1c-12.6 0-18.893 0-23.861-2.058a27.03 27.03 0 0 1-14.63-14.63C0 59.441 0 53.144 0 40.548",
    "data-name": "Path 11"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    "data-name": "Group 6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M40.548 47.617 18.733 63.86a2.878 2.878 0 0 1-4.577-1.962l-3.878-31.969a2.1 2.1 0 0 1 3.313-1.946Z",
    "data-name": "Path 7",
    opacity: 0.92
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#e3e2ff",
    d: "M40.548 47.617 62.363 63.86a2.878 2.878 0 0 0 4.576-1.962l3.879-31.969a2.1 2.1 0 0 0-3.313-1.946Z",
    "data-name": "Path 8",
    opacity: 0.93
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "m62.519 63.973-21.97-16.356-21.97 16.356a1.064 1.064 0 0 1-1.535-1.42l20.836-33.1a3.154 3.154 0 0 1 5.338 0l20.837 33.1a1.064 1.064 0 0 1-1.536 1.42",
    "data-name": "Path 9",
    opacity: 0.75
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgODIuNTE3MzQ2IDgxLjQ2MjMwMTgwMTgwMTc5IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0ibWF4LWhlaWdodDogNTAwcHgiIHdpZHRoPSI4Mi41MTczNDYiIGhlaWdodD0iODEuNDYyMzAxODAxODAxNzkiPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IGdyYWRpZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB5Mj0iMS4wOTEiIHgyPSIxIiB5MT0iLTAuMTE3IiBpZD0ibGluZWFyLWdyYWRpZW50Ij4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzZmNmFlZiIgb2Zmc2V0PSIwIi8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5YTkxZmUiIG9mZnNldD0iMSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU1LjE4MyAtNTAuNDUyKSIgZGF0YS1uYW1lPSJHcm91cCA3IiBpZD0iR3JvdXBfNyI+CiAgICA8cGF0aCBmaWxsPSIjNGY0ZDg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAuNjQgMTEyKSIgZD0iTTQxLjM0LDAsNDAuMzMzLTIuOTE1bDcuODQ0LTIyLjI2YzIuMDY3LTUuODMsMy44MTYtOS4xMTYsNi4yNTQtMTEuOTI1SDM4YzUuNDU5LDQuMjkzLDkuOTExLDExLjA3Nyw0Ljc3LDI1LjZBNjYuNDQ1LDY2LjQ0NSwwLDAsMSwzOS44LTQuMzQ2bC05LjU0LTI3LjEzNmMtLjktMi41NDQtLjM3MS00LjU1OCwxLjAwNy01LjYxOEgxNy40OWE3LjA1OCw3LjA1OCwwLDAsMSwyLjk2OCwzLjk3NUwyNS4xNzUtMTkuNjFjMi4wNjcsNi41NzIuMjY1LDExLjQ0OC0xLjc0OSwxNS4zN0wxMy44MzMtMzEuNDgyYy0uOS0yLjU0NC0uMzcxLTQuNTU4LDEuMDA3LTUuNjE4SDEuMDZhNy4wNTgsNy4wNTgsMCwwLDEsMi45NjgsMy45NzVMMTUuOTUzLjhBMzQuOTgyLDM0Ljk4MiwwLDAsMSwyMy4yMTQsMGgxLjdMMjMuOS0yLjkxNWwzLjYtMTAuMTIzTDMyLjM4My44QTM0Ljk4MiwzNC45ODIsMCwwLDEsMzkuNjQ0LDBaTTU4LjcyNC0xMy40MDlhMTIuMzgxLDEyLjM4MSwwLDAsMCw2Ljc4NCwyLjEyYzQuNDUyLDAsOC4wNTYtMi45MTUsOC4wNTYtNy44NDRzLTMuNTUxLTcuOS05LjQzNC03LjljLTguMTA5LDAtMTMuMzU2LDUuNjE4LTEzLjM1NiwxNC4yNTcsMCw4LjE2Miw0LjY2NCwxMy4zLDEyLjA4NCwxMy4zLDcuNjMyLDAsMTEuNzEzLTUuNDU5LDExLjYwNy0xNS42MzUtLjU4Myw1LjM1My00LjI0LDkuMzI4LTguNjkyLDkuMzI4QzYyLjAxLTUuNzc3LDU5LjQxMy04LjYzOSw1OC43MjQtMTMuNDA5Wm0tLjEwNi0uNTNjLS4wNTMtLjc0Mi0uMTA2LTEuNTM3LS4xMDYtMi4zMzIsMC01Ljk4OSwyLjM4NS0xMC4yMjksNS42NzEtMTAuMjI5LDEuOTA4LDAsMi44MDksMS4zNzgsMi44MDksNC4yOTMsMCw1LjE0MS0yLjg2Miw4Ljg1MS02LjEsOC44NTFBNC41NjMsNC41NjMsMCwwLDEsNTguNjE4LTEzLjkzOVpNOTcuODkxLDBjLTEuOC0xLjAwNy0yLjkxNS0yLjc1Ni0yLjkxNS03LjlWLTM2LjU3aC44NDhjNC40LDAsNS41MTIsMTAuNDk0LDEwLjM4OCwxNC44NGE0OC42Nyw0OC42NywwLDAsMSwwLTE2LjE2NSwxMi44MjEsMTIuODIxLDAsMCwxLTQuNDUyLjc5NUg3OS41YTEyLjgyMSwxMi44MjEsMCwwLDEtNC40NTItLjc5NSw0OC42Nyw0OC42NywwLDAsMSwwLDE2LjE2NWM0Ljg3Ni00LjM0Niw1Ljk4OS0xNC44NCwxMC4zODgtMTQuODRoLjg0OFYtNy45YzAsNS4xNDEtMS4xMTMsNi44OS0yLjkxNSw3LjlabTE3LjMzMS0xMy40MDlhMTIuMzgxLDEyLjM4MSwwLDAsMCw2Ljc4NCwyLjEyYzQuNDUyLDAsOC4wNTYtMi45MTUsOC4wNTYtNy44NDRzLTMuNTUxLTcuOS05LjQzNC03LjljLTguMTA5LDAtMTMuMzU2LDUuNjE4LTEzLjM1NiwxNC4yNTcsMCw4LjE2Miw0LjY2NCwxMy4zLDEyLjA4NCwxMy4zLDcuNjMyLDAsMTEuNzEzLTUuNDU5LDExLjYwNy0xNS42MzUtLjU4Myw1LjM1My00LjI0LDkuMzI4LTguNjkyLDkuMzI4QzExOC41MDgtNS43NzcsMTE1LjkxMS04LjYzOSwxMTUuMjIyLTEzLjQwOVptLS4xMDYtLjUzYy0uMDUzLS43NDItLjEwNi0xLjUzNy0uMTA2LTIuMzMyLDAtNS45ODksMi4zODUtMTAuMjI5LDUuNjcxLTEwLjIyOSwxLjkwOCwwLDIuODA5LDEuMzc4LDIuODA5LDQuMjkzLDAsNS4xNDEtMi44NjIsOC44NTEtNi4xLDguODUxQTQuNTYzLDQuNTYzLDAsMCwxLDExNS4xMTYtMTMuOTM5Wm0zNS43MjIsMS45MDhBMjUuNzA3LDI1LjcwNywwLDAsMSwxNTYuMDg1LTI2LjVhMTMuNTU4LDEzLjU1OCwwLDAsMS0yLjQ5MS4yMTJjLTIuNTQ0LDAtNC44MjMtLjYzNi03LjYzMi0uNjM2LTgsMC0xMi44MjYsNS4xOTQtMTIuODI2LDEzLjgzM0MxMzMuMTM2LTQuNzcsMTM3LjY0MS41MywxNDQuOC41MywxNTIuMTEuNTMsMTU2LjMtNS4wODgsMTU2LjMtMTVjLS44NDgsNS42NzEtNC4wMjgsOS4yMjItOC4yNjgsOS4yMjItNC40NTIsMC03LjE1NS0zLjgxNi03LjE1NS0xMC4wMTcsMC01Ljg4MywyLjQzOC0xMC43MDYsNS40MDYtMTAuNzA2QzE1MC4yLTI2LjUsMTQ4LjgyNC0xNy45MTQsMTUwLjgzOC0xMi4wMzFaTTE3MS42MTQsMGgxNC41MjJjLTIuMTItMS4xNjYtMi45MTUtMy4zOTItMi45MTUtNy45di01Ljk4OWMwLTkuMjIyLTIuNDM4LTEzLjE0NC04LjE2Mi0xMy4xNDRhMTUuMjc5LDE1LjI3OSwwLDAsMC02LjU3MiwxLjY0M1YtMzkuNzVjLTEuOTA4LDEuMTY2LTQuNzcsMS40MzEtNy44NDQsMS40MzFIMTU2Ljg4YzEuODU1LDEuMjcyLDIuOTE1LDQuMTM0LDIuOTE1LDcuODQ0Vi03LjljMCw0LjUwNS0uOCw2LjczMS0yLjkxNSw3LjlIMTcxLjRjLTIuMTItMS4xNjYtMi45MTUtMy4zOTItMi45MTUtNy45Vi0yNC45MWE0LjA4Niw0LjA4NiwwLDAsMSwxLjUzNy0uMjY1YzMuMjMzLDAsNC41MDUsNC4zNDYsNC41MDUsMTAuNzA2Vi03LjlDMTc0LjUyOS0zLjM5MiwxNzMuNzM0LTEuMTY2LDE3MS42MTQsMFptMzEuMTY0LDBjLTEuOC0xLjAwNy0yLjkxNS0yLjc1Ni0yLjkxNS03Ljl2LTUuNzc3aC40NzdjOS44MDUsMCwxNi4xMTItMy45MjIsMTYuMTEyLTExLjg3MlMyMTAuMTQ1LTM3LjEsMjAwLjM0LTM3LjFIMTg4LjI1NmMxLjgsMS4wMDcsMi45MTUsMi43NTYsMi45MTUsNy44NDRWLTcuOWMwLDUuMTQxLTEuMTEzLDYuODktMi45MTUsNy45Wm0tMi45MTUtMTQuMlYtMzYuNTdoLjQyNGM0LjkyOSwwLDcuNDIsNS41NjUsNy40MiwxMS4xODMsMCw1LjU2NS0yLjQ5MSwxMS4xODMtNy40MiwxMS4xODNaTTIxOC42MjUsMGgxNC41MjJjLTIuMTItMS4xNjYtMi45MTUtMy4zOTItMi45MTUtNy45di05LjkxMWMuNjM2LTIuMzg1LDEuODU1LTMuNDQ1LDMuMjg2LTMuNDQ1LDMuMjMzLDAsMy4zOTIsNS42MTgsNi43MzEsOS43LTEuMDYtNS45MzYtLjQyNC0xMS43NjYsMS41MzctMTQuOTQ2YTguNTQ1LDguNTQ1LDAsMCwwLTMuMjMzLS42ODljLTMuMzkyLDAtNi4zNiwyLjEyLTguMzIxLDcuOTV2LTguNjkyYy0xLjk2MSwxLjE2Ni00LjgyMywxLjQzMS03LjksMS40MzFoLTMuNzFjMS44LDEuMjE5LDIuOTE1LDQuMTM0LDIuOTE1LDguMzc0Vi03LjlDMjIxLjU0LTMuMzkyLDIyMC43NDUtMS4xNjYsMjE4LjYyNSwwWm0zNy40MTguNTNjOC4yNjgsMCwxMy42MjEtNS40MDYsMTMuNjIxLTEzLjc4LDAtOC41MzMtNS4xOTQtMTMuNzgtMTMuNjIxLTEzLjc4LTguNDgsMC0xMy42NzQsNS4yNDctMTMuNjc0LDEzLjc4QzI0Mi4zNjktNC44NzYsMjQ3LjcyMi41MywyNTYuMDQzLjUzWm0xLjA2LS41ODNjLTMuMzM5LDAtNi4xNDgtNy41NzktNi4xNDgtMTYuMDU5LDAtNi40MTMsMS41OS0xMC4zMzUsMy45NzUtMTAuMzM1LDMuMzkyLDAsNi4xNDgsNy41NzksNi4xNDgsMTYuMDU5QzI2MS4wNzgtMy45NzUsMjU5LjQ4OC0uMDUzLDI1Ny4xLS4wNTNaIiBkYXRhLW5hbWU9IlBhdGggMTQiIGlkPSJQYXRoXzE0Ii8+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1LjE4MyA1MC40NTIpIiBkPSJNMCw0MC41NDhjMC0xMi42LDAtMTguODkzLDIuMDU4LTIzLjg2MWEyNy4wMzIsMjcuMDMyLDAsMCwxLDE0LjYzLTE0LjYzQzIxLjY1NSwwLDI3Ljk1MywwLDQwLjU0OCwwaDBjMTIuNiwwLDE4Ljg5MywwLDIzLjg2MSwyLjA1OGEyNy4wMzMsMjcuMDMzLDAsMCwxLDE0LjYzLDE0LjYzQzgxLjEsMjEuNjU1LDgxLjEsMjcuOTUzLDgxLjEsNDAuNTQ4aDBjMCwxMi42LDAsMTguODkzLTIuMDU4LDIzLjg2MWEyNy4wMzMsMjcuMDMzLDAsMCwxLTE0LjYzLDE0LjYzQzU5LjQ0MSw4MS4xLDUzLjE0NCw4MS4xLDQwLjU0OCw4MS4xaDBjLTEyLjYsMC0xOC44OTMsMC0yMy44NjEtMi4wNThhMjcuMDMzLDI3LjAzMywwLDAsMS0xNC42My0xNC42M0MwLDU5LjQ0MSwwLDUzLjE0NCwwLDQwLjU0OFoiIGRhdGEtbmFtZT0iUGF0aCAxMSIgaWQ9IlBhdGhfMTEiLz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjY5LjIwNyAtNTg0LjQ1KSIgZGF0YS1uYW1lPSJHcm91cCA2IiBpZD0iR3JvdXBfNiI+CiAgICAgIDxwYXRoIG9wYWNpdHk9IjAuOTIiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGQ9Ik0yNzY0LjkzOCw2ODIuNTE5bC0yMS44MTUsMTYuMjQzYTIuODc4LDIuODc4LDAsMCwxLTQuNTc3LTEuOTYybC0zLjg3OC0zMS45NjlhMi4xLDIuMSwwLDAsMSwzLjMxMy0xLjk0NloiIGRhdGEtbmFtZT0iUGF0aCA3IiBpZD0iUGF0aF83Ii8+CiAgICAgIDxwYXRoIG9wYWNpdHk9IjAuOTMiIGZpbGw9IiNlM2UyZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMzUuMDYyIDApIiBkPSJNMzAwMCw2ODIuNTE5bDIxLjgxNSwxNi4yNDNhMi44NzgsMi44NzgsMCwwLDAsNC41NzYtMS45NjJsMy44NzktMzEuOTY5YTIuMSwyLjEsMCwwLDAtMy4zMTMtMS45NDZaIiBkYXRhLW5hbWU9IlBhdGggOCIgaWQ9IlBhdGhfOCIvPgogICAgICA8cGF0aCBvcGFjaXR5PSIwLjc1IiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTEuMjkxIC0zLjEwMikiIGQ9Ik0yODM4LjIsNzAxLjk3N2wtMjEuOTctMTYuMzU2LTIxLjk3LDE2LjM1NmExLjA2NCwxLjA2NCwwLDAsMS0xLjUzNS0xLjQybDIwLjgzNi0zMy4xYTMuMTU0LDMuMTU0LDAsMCwxLDUuMzM4LDBsMjAuODM3LDMzLjFBMS4wNjQsMS4wNjQsMCwwLDEsMjgzOC4yLDcwMS45NzdaIiBkYXRhLW5hbWU9IlBhdGggOSIgaWQ9IlBhdGhfOSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/AdminMenu.js":
/*!**************************!*\
  !*** ./src/AdminMenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _img_wetechpro_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/wetechpro.svg */ "./src/img/wetechpro.svg");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/helper */ "./src/utils/helper.js");





console.log(_utils_helper__WEBPACK_IMPORTED_MODULE_2__.all_menu_list);
const AdminMenu = () => {
  const location = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_2__.useQuery)();
  const page = location.get('page');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: `${_utils_helper__WEBPACK_IMPORTED_MODULE_2__.route_path}admin.php?page=wetechpro`,
    className: "wp-has-submenu wp-has-current-submenu wp-menu-open menu-top toplevel_page_my-custom-plugin menu-top-last",
    "aria-haspopup": "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-menu-arrow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-menu-image svg",
    style: {
      backgroundImage: `url('${_img_wetechpro_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}')`
    },
    "aria-hidden": "true"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-menu-name"
  }, _utils_helper__WEBPACK_IMPORTED_MODULE_2__.top_lavel_menu)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "wp-submenu wp-submenu-wrap"
  }, Object.entries(_utils_helper__WEBPACK_IMPORTED_MODULE_2__.all_menu_list).map(([key, item], index) => {
    const menuItemClassName = index === 0 ? 'wp-first-item ' : '';
    return (
      // eslint-disable-next-line react/jsx-key
      (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: page === key ? menuItemClassName + 'current' : menuItemClassName
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        key: key,
        to: `${_utils_helper__WEBPACK_IMPORTED_MODULE_2__.route_path}admin.php?page=${key}`,
        className: "wp-first-item",
        "aria-haspopup": "false"
      }, item.title))
    );
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminMenu);

/***/ }),

/***/ "./src/BackendDashboard.js":
/*!*********************************!*\
  !*** ./src/BackendDashboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _components_Wetechpro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Wetechpro */ "./src/components/Wetechpro.js");
/* harmony import */ var _components_Courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Courses */ "./src/components/Courses.js");
/* harmony import */ var _components_Lessons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Lessons */ "./src/components/Lessons.js");
/* harmony import */ var _components_MenuManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MenuManager */ "./src/components/MenuManager.js");







const BackendDashboard = () => {
  const query = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_1__.useQuery)();
  switch (query.get('page')) {
    case 'wetechpro':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Wetechpro__WEBPACK_IMPORTED_MODULE_2__["default"], null);
    case 'wetechpro-menu-manager':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MenuManager__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    case 'wetechpro-courses':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Courses__WEBPACK_IMPORTED_MODULE_3__["default"], null);
    case 'wetechpro-lessons':
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Lessons__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackendDashboard);

/***/ }),

/***/ "./src/components/Courses.js":
/*!***********************************!*\
  !*** ./src/components/Courses.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Courses = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Courses"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Courses);

/***/ }),

/***/ "./src/components/Lessons.js":
/*!***********************************!*\
  !*** ./src/components/Lessons.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Lessons = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Lessons"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lessons);

/***/ }),

/***/ "./src/components/MenuManager.js":
/*!***************************************!*\
  !*** ./src/components/MenuManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _category_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category/Popup */ "./src/components/category/Popup.js");
/* harmony import */ var _product_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/ProductList */ "./src/components/product/ProductList.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/module.js");








const MenuManager = () => {
  const [openPopup, setOpenPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [productCategories, setProductCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
      url: _utils_helper__WEBPACK_IMPORTED_MODULE_4__.ajax_url,
      type: 'get',
      data: {
        action: "get_all_product_category",
        nonce: _utils_helper__WEBPACK_IMPORTED_MODULE_4__.nonce
      },
      success(result) {
        setProductCategories(result.data.product_categories);
        setLoading(false);
      },
      error(xhr, status, error) {
        console.log(error);
      }
    });
  }, [state]);
  console.log(loading);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:flex lg:items-center lg:justify-between w-11/12 p-8 m-8 bg-white"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "min-w-0 flex-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
  }, "Category List")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-5 flex lg:ml-4 lg:mt-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hidden sm:block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  }, "Edit")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-3 hidden sm:block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  }, "View")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sm:ml-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    onClick: () => setOpenPopup(true)
  }, "Add Now")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_category_Popup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    openPopup: openPopup,
    setOpenPopup: setOpenPopup,
    setState: setState,
    state: state
  }))), loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full text-center flex item-center justify-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_5__.Rings, {
    visible: true,
    height: "100",
    width: "100",
    color: "rgb(79 70 229)",
    ariaLabel: "rings-loading",
    wrapperStyle: {},
    wrapperClass: ""
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_product_ProductList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    productCategories: productCategories
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuManager);

/***/ }),

/***/ "./src/components/Wetechpro.js":
/*!*************************************!*\
  !*** ./src/components/Wetechpro.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Wetechpro = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "mx-auto h-10 w-auto",
    src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
    alt: "Your Company"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
  }, "Sign in to your account")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "space-y-6",
    action: "#",
    method: "POST"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "email",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Email address"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "password",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Password"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "font-semibold text-indigo-600 hover:text-indigo-500"
  }, "Forgot password?"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    required: true,
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit",
    className: "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  }, "Sign in"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-10 text-center text-sm text-gray-500"
  }, "Not a member?", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
  }, "Start a 14 day free trial")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wetechpro);

/***/ }),

/***/ "./src/components/category/ImageUpload.js":
/*!************************************************!*\
  !*** ./src/components/category/ImageUpload.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// src/components/ImageUpload.js

const ImageUpload = ({
  onImageSelect,
  setPreview,
  preview
}) => {
  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
    onImageSelect(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center w-full max-w-md mx-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    id: "file-input",
    accept: "image/*",
    onChange: handleImageChange,
    className: "hidden"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-500",
    onClick: () => document.getElementById('file-input').click()
  }, preview ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: preview,
    alt: "Preview",
    className: "max-w-full max-h-full rounded-lg"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-gray-500 text-6xl"
  }, "\uD83D\uDCE4")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);

/***/ }),

/***/ "./src/components/category/Popup.js":
/*!******************************************!*\
  !*** ./src/components/category/Popup.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transition/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/module.js");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageUpload */ "./src/components/category/ImageUpload.js");








function Popup({
  openPopup,
  setOpenPopup,
  state,
  setState
}) {
  const [categoryName, setCategoryName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categoryDesc, setCategoryDesc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categoryImage, setcategoryImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleImageSelect = file => {
    setcategoryImage(file);
  };
  const submitCategory = () => {
    if (categoryName == "" || categoryDesc == "") {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Category Field shouldn,t  be empty', {
        autoClose: 2000
      });
    } else {
      setLoading(true);
      const formData = new FormData();
      formData.append('action', 'create_category_request');
      formData.append('nonce', _utils_helper__WEBPACK_IMPORTED_MODULE_3__.nonce);
      formData.append('categoryName', categoryName);
      formData.append('categoryDesc', categoryDesc);
      if (categoryImage) {
        formData.append('categoryImage', categoryImage);
      }
      jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({
        url: _utils_helper__WEBPACK_IMPORTED_MODULE_3__.ajax_url,
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success(result) {
          if (result.data.status) {
            setLoading(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success('Category added Successfully', {
              autoClose: 2000
            });
            setState(!state);
            setCategoryName("");
            setCategoryDesc("");
            setPreview(null);
          }
        },
        error(xhr, status, error) {
          console.log(error);
        }
      });
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {
    show: openPopup
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
    className: "relative z-10",
    onClose: setOpenPopup
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.TransitionChild, {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fixed inset-0 z-10 w-screen overflow-y-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.TransitionChild, {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.DialogPanel, {
    className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "username",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Category Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700 shadow-sm !important",
    value: categoryName,
    onChange: e => setCategoryName(e.target.value),
    placeholder: "Example Category Name"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 pb-4 sm:p-6 sm:pb-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "username",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Description"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    className: "w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
    value: categoryDesc,
    onChange: e => setCategoryDesc(e.target.value),
    placeholder: "Example Category Description"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 pb-4 sm:p-6 sm:pb-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ImageUpload__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onImageSelect: handleImageSelect,
    preview: preview,
    setPreview: setPreview
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto ",
    onClick: () => submitCategory()
  }, loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Save Now ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spinnerwp"
  }), " ") : 'Save Now'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
    onClick: () => setOpenPopup(false),
    "data-autofocus": true
  }, "Cancel"))))))));
}

/***/ }),

/***/ "./src/components/product/ImageUpload.js":
/*!***********************************************!*\
  !*** ./src/components/product/ImageUpload.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// src/components/ImageUpload.js

const ImageUpload = ({
  onImageSelect,
  setPreview,
  preview
}) => {
  const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
    onImageSelect(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center w-full max-w-md mx-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "file",
    id: "file-input",
    accept: "image/*",
    onChange: handleImageChange,
    className: "hidden"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full h-72 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-500",
    onClick: () => document.getElementById('file-input').click()
  }, preview ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: preview,
    alt: "Preview",
    className: "max-w-full max-h-full rounded-lg"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-gray-500 text-6xl"
  }, "\uD83D\uDCE4")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);

/***/ }),

/***/ "./src/components/product/Popup.js":
/*!*****************************************!*\
  !*** ./src/components/product/Popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transition/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/module.js");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageUpload */ "./src/components/product/ImageUpload.js");








function Popup({
  openPopup,
  setOpenPopup
}) {
  const [categoryName, setCategoryName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categoryDesc, setCategoryDesc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [categoryImage, setcategoryImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleImageSelect = file => {
    setcategoryImage(file);
  };

  // const submitCategory = ()=>{
  //   if(categoryName == "" || categoryDesc == ""){
  //       toast.error('Category Field shouldn,t  be empty', {
  //         autoClose: 2000,
  //     });
  //   }else{
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append('action', 'create_category_request');
  //     formData.append('nonce', nonce);
  //     formData.append('categoryName', categoryName);
  //     formData.append('categoryDesc', categoryDesc);
  //     if (categoryImage) {
  //       formData.append('categoryImage', categoryImage);
  //     }
  //     $.ajax({
  //       url: ajax_url, 
  //       type: 'post', 
  //       data: formData,
  //       contentType: false,
  //       processData: false,
  //       success(result) {
  //        if(result.data.status){
  //         setLoading(false);
  //           toast.success('Category added Successfully', {
  //             autoClose: 2000,
  //         });
  //         setState(!state)
  //         setCategoryName("");
  //         setCategoryDesc("");
  //         setPreview(null);
  //        }
  //       },
  //       error(xhr, status, error) {
  //         console.log(error)
  //       }
  //     });

  //     }

  //   }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Transition, {
    show: openPopup
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
    className: "relative z-10",
    onClose: setOpenPopup
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.TransitionChild, {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "fixed inset-0 z-10 w-screen overflow-y-auto"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.TransitionChild, {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.DialogPanel, {
    className: "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "username",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Category Name"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700 shadow-sm !important",
    value: categoryName,
    onChange: e => setCategoryName(e.target.value),
    placeholder: "Example Category Name"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 pb-4 sm:p-6 sm:pb-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "username",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Description"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    className: "w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
    value: categoryDesc,
    onChange: e => setCategoryDesc(e.target.value),
    placeholder: "Example Category Description"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white px-4 pb-4 sm:p-6 sm:pb-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ImageUpload__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onImageSelect: handleImageSelect,
    preview: preview,
    setPreview: setPreview
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto ",
    onClick: () => console.log("shehab")
  }, loading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Save Now ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "spinnerwp"
  }), " ") : 'Save Now'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",
    onClick: () => setOpenPopup(false),
    "data-autofocus": true
  }, "Cancel"))))))));
}

/***/ }),

/***/ "./src/components/product/ProductList.js":
/*!***********************************************!*\
  !*** ./src/components/product/ProductList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./src/components/product/Popup.js");



const ProductList = ({
  productCategories
}) => {
  const [openPopup, setOpenPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, productCategories && productCategories.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "w-11/12  p-4 mx-8 my-4 bg-white"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "lg:flex lg:items-center lg:justify-between"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: " w-36"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full flex justify-between items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "w-10 h-10",
      src: item.image_src
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "font-semibold text-base"
    }, item.name))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-5 flex lg:ml-4 lg:mt-0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "hidden sm:block"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
      onClick: () => setOpenPopup(true)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      className: "size-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ml-3 hidden sm:block"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      className: "size-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fillRule: "evenodd",
      d: "M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5.5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
      clipRule: "evenodd"
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "sm:ml-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      className: "size-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z"
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "sm:ml-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      fill: "currentColor",
      className: "size-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fillRule: "evenodd",
      d: "M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z",
      clipRule: "evenodd"
    }))))))));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Popup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    openPopup: openPopup,
    setOpenPopup: setOpenPopup
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ajax_url: () => (/* binding */ ajax_url),
/* harmony export */   all_menu_list: () => (/* binding */ all_menu_list),
/* harmony export */   nonce: () => (/* binding */ nonce),
/* harmony export */   route_path: () => (/* binding */ route_path),
/* harmony export */   top_lavel_menu: () => (/* binding */ top_lavel_menu),
/* harmony export */   useQuery: () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");

const {
  nonce,
  top_lavel_menu,
  all_menu_list,
  route_path,
  ajax_url
} = window.wetechpro;
const useQuery = () => {
  return new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__.useLocation)().search);
};

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-loader-spinner/dist/module.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-loader-spinner/dist/module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Audio: () => (/* binding */ $dcdd04c60cd78d69$export$153755f98d9861de),
/* harmony export */   BallTriangle: () => (/* binding */ $e035d01ad1d05b44$export$68949ad0373623af),
/* harmony export */   Bars: () => (/* binding */ $7dd1b251b360e95a$export$fbc7d6f7dd821b47),
/* harmony export */   Blocks: () => (/* binding */ $ffa7e3ac27a21a71$export$2ba1b65b747a57aa),
/* harmony export */   Circles: () => (/* binding */ $29b6b1f956162f74$export$765808835a2dc0a2),
/* harmony export */   CirclesWithBar: () => (/* binding */ $12bd062f0f060b07$export$17c11650828d97e),
/* harmony export */   ColorRing: () => (/* binding */ $7097090906378a5b$export$dc036a5afb9ca26f),
/* harmony export */   Comment: () => (/* binding */ $81e36fafa9b58989$export$4d299b491347818a),
/* harmony export */   DNA: () => (/* binding */ $bb8e4335d7ee0654$export$bee07fdc425df572),
/* harmony export */   Discuss: () => (/* binding */ $50138037f422b463$export$f93420b62a5bdffa),
/* harmony export */   FallingLines: () => (/* binding */ $b184d2a88a50e3dc$export$1ed1943372cc63a9),
/* harmony export */   FidgetSpinner: () => (/* binding */ $1d8c9163e13b7bf7$export$8e3fad5cade57efa),
/* harmony export */   Grid: () => (/* binding */ $b438e21e66fce243$export$ef2184bd89960b14),
/* harmony export */   Hearts: () => (/* binding */ $88eb2f870dd9f437$export$2da2f0c7403af3ce),
/* harmony export */   Hourglass: () => (/* binding */ $1e82ee682f5b64b8$export$f3c41beb83007357),
/* harmony export */   InfinitySpin: () => (/* binding */ $ad60b992c945fdb5$export$8009d4483dfda42),
/* harmony export */   LineWave: () => (/* binding */ $05da46d92e4baf0c$export$d2101d81f63866ab),
/* harmony export */   MagnifyingGlass: () => (/* binding */ $db94311ffb982ec6$export$bdf537af43a20db5),
/* harmony export */   MutatingDots: () => (/* binding */ $05cab5f4cf092036$export$64ea884904791f4),
/* harmony export */   Oval: () => (/* binding */ $a5fa864d4dd36deb$export$67ad50c48ca3ede4),
/* harmony export */   ProgressBar: () => (/* binding */ $075a2f0ea0d9df8a$export$c17561cb55d4db30),
/* harmony export */   Puff: () => (/* binding */ $8a2963a7161a08e2$export$83d2259ec538613b),
/* harmony export */   Radio: () => (/* binding */ $daf95de783b7b8b1$export$d7b12c4107be0d61),
/* harmony export */   RevolvingDot: () => (/* binding */ $f6f65ef73d86a35a$export$8e22e563e5362f75),
/* harmony export */   Rings: () => (/* binding */ $0da8ebf0340870f3$export$fdd9e2f491a77de7),
/* harmony export */   RotatingLines: () => (/* binding */ $5819da83a926266a$export$d20df8773b6b77b5),
/* harmony export */   RotatingSquare: () => (/* binding */ $30f4fc5ff137b595$export$bb511942ded86554),
/* harmony export */   RotatingTriangles: () => (/* binding */ $aa2b177fb9ef5dee$export$f64f16a115ce395d),
/* harmony export */   TailSpin: () => (/* binding */ $56d89154a59e79d3$export$f8e5ae7506d65b32),
/* harmony export */   ThreeCircles: () => (/* binding */ $5cff71254109409f$export$e21573137ccb7f5d),
/* harmony export */   ThreeDots: () => (/* binding */ $f0c3e3bb3e76d210$export$4bf83b24a11cff0b),
/* harmony export */   Triangle: () => (/* binding */ $afa12dd3e98f740f$export$5a465592bfe74b48),
/* harmony export */   Vortex: () => (/* binding */ $5ad4f4dbdb85103b$export$d25f4198d7ad6c78),
/* harmony export */   Watch: () => (/* binding */ $e3e50827b57d879a$export$4c68f1a79f88778c)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




// Such export is called Tree Shaking. It allows to import only the components
// that are needed while webpack will remove the rest of the code from the bundle.


const $84fda1e7e33cfd28$export$37394b0fa44b998c = "#4fa94d";
const $84fda1e7e33cfd28$export$6bfda33bcd6c2d18 = {
    "aria-busy": true,
    role: "progressbar"
};



const $4c3f0b77e8caf06d$export$21d9f1931ef75b56 = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])).div`
  display: ${(props)=>props.$visible ? "flex" : "none"};
`;


const $eb040f10400edc38$export$98a285aab16ab26c = "http://www.w3.org/2000/svg";


const $dcdd04c60cd78d69$export$153755f98d9861de = ({ height: height = "100", width: width = "100", color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "audio-loading", wrapperStyle: wrapperStyle = {}, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        $visible: visible,
        style: {
            ...wrapperStyle
        },
        className: wrapperClass,
        "data-testid": "audio-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            height: `${height}`,
            width: `${width}`,
            fill: color,
            viewBox: "0 0 55 80",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            "data-testid": "audio-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                    children: "Audio Visualization"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("desc", {
                    children: "Animated representation of audio data"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    transform: "matrix(1 0 0 -1 0 80)",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            width: "10",
                            height: "20",
                            rx: "3",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "height",
                                begin: "0s",
                                dur: "4.3s",
                                values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "15",
                            width: "10",
                            height: "80",
                            rx: "3",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "height",
                                begin: "0s",
                                dur: "2s",
                                values: "80;55;33;5;75;23;73;33;12;14;60;80",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "30",
                            width: "10",
                            height: "50",
                            rx: "3",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "height",
                                begin: "0s",
                                dur: "1.4s",
                                values: "50;34;78;23;56;23;34;76;80;54;21;50",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "45",
                            width: "10",
                            height: "30",
                            rx: "3",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "height",
                                begin: "0s",
                                dur: "2s",
                                values: "30;45;13;80;56;72;45;76;34;23;67;30",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            })
                        })
                    ]
                })
            ]
        })
    });







const $e035d01ad1d05b44$export$68949ad0373623af = ({ height: height = 100, width: width = 100, radius: radius = 5, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "ball-triangle-loading", wrapperClass: wrapperClass, wrapperStyle: wrapperStyle, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: {
            ...wrapperStyle
        },
        $visible: visible,
        className: wrapperClass,
        "data-testid": "ball-triangle-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            height: height,
            width: width,
            stroke: color,
            viewBox: "0 0 57 57",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            "data-testid": "ball-triangle-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                    children: "Ball Triangle"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("desc", {
                    children: "Animated representation of three balls"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        transform: "translate(1 1)",
                        strokeWidth: "2",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                                cx: "5",
                                cy: "50",
                                r: radius,
                                children: [
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                        attributeName: "cy",
                                        begin: "0s",
                                        dur: "2.2s",
                                        values: "50;5;50;50",
                                        calcMode: "linear",
                                        repeatCount: "indefinite"
                                    }),
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                        attributeName: "cx",
                                        begin: "0s",
                                        dur: "2.2s",
                                        values: "5;27;49;5",
                                        calcMode: "linear",
                                        repeatCount: "indefinite"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                                cx: "27",
                                cy: "5",
                                r: radius,
                                children: [
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                        attributeName: "cy",
                                        begin: "0s",
                                        dur: "2.2s",
                                        from: "5",
                                        to: "5",
                                        values: "5;50;50;5",
                                        calcMode: "linear",
                                        repeatCount: "indefinite"
                                    }),
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                        attributeName: "cx",
                                        begin: "0s",
                                        dur: "2.2s",
                                        from: "27",
                                        to: "27",
                                        values: "27;49;5;27",
                                        calcMode: "linear",
                                        repeatCount: "indefinite"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                                cx: "49",
                                cy: "50",
                                r: radius,
                                children: [
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                        attributeName: "cy",
                                        begin: "0s",
                                        dur: "2.2s",
                                        values: "50;50;5;50",
                                        calcMode: "linear",
                                        repeatCount: "indefinite"
                                    }),
                                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                        attributeName: "cx",
                                        from: "49",
                                        to: "49",
                                        begin: "0s",
                                        dur: "2.2s",
                                        values: "49;5;27;49",
                                        calcMode: "linear",
                                        repeatCount: "indefinite"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });







const $7dd1b251b360e95a$export$fbc7d6f7dd821b47 = ({ height: height = 80, width: width = 80, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "bars-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        $visible: visible,
        style: {
            ...wrapperStyle
        },
        className: wrapperClass,
        "data-testid": "bars-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            fill: color,
            viewBox: "0 0 135 140",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            "data-testid": "bars-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                    y: "10",
                    width: "15",
                    height: "120",
                    rx: "6",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "height",
                            begin: "0.5s",
                            dur: "1s",
                            values: "120;110;100;90;80;70;60;50;40;140;120",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "y",
                            begin: "0.5s",
                            dur: "1s",
                            values: "10;15;20;25;30;35;40;45;50;0;10",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                    x: "30",
                    y: "10",
                    width: "15",
                    height: "120",
                    rx: "6",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "height",
                            begin: "0.25s",
                            dur: "1s",
                            values: "120;110;100;90;80;70;60;50;40;140;120",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "y",
                            begin: "0.25s",
                            dur: "1s",
                            values: "10;15;20;25;30;35;40;45;50;0;10",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                    x: "60",
                    width: "15",
                    height: "140",
                    rx: "6",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "height",
                            begin: "0s",
                            dur: "1s",
                            values: "120;110;100;90;80;70;60;50;40;140;120",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "y",
                            begin: "0s",
                            dur: "1s",
                            values: "10;15;20;25;30;35;40;45;50;0;10",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                    x: "90",
                    y: "10",
                    width: "15",
                    height: "120",
                    rx: "6",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "height",
                            begin: "0.25s",
                            dur: "1s",
                            values: "120;110;100;90;80;70;60;50;40;140;120",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "y",
                            begin: "0.25s",
                            dur: "1s",
                            values: "10;15;20;25;30;35;40;45;50;0;10",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                    x: "120",
                    y: "10",
                    width: "15",
                    height: "120",
                    rx: "6",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "height",
                            begin: "0.5s",
                            dur: "1s",
                            values: "120;110;100;90;80;70;60;50;40;140;120",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "y",
                            begin: "0.5s",
                            dur: "1s",
                            values: "10;15;20;25;30;35;40;45;50;0;10",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                })
            ]
        })
    });







const $29b6b1f956162f74$export$765808835a2dc0a2 = ({ height: height = 80, width: width = 80, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "circles-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "aria-label": ariaLabel,
        "data-testid": "circles-loading",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            viewBox: "0 0 135 135",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            fill: color,
            "data-testid": "circles-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                    children: "circles-loading"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("desc", {
                    children: "Animated representation of circles"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 67 67",
                        to: "-360 67 67",
                        dur: "2.5s",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 67 67",
                        to: "360 67 67",
                        dur: "8s",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });







const $12bd062f0f060b07$export$17c11650828d97e = ({ wrapperStyle: wrapperStyle = {}, visible: visible = true, wrapperClass: wrapperClass = "", height: height = 100, width: width = 100, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), outerCircleColor: outerCircleColor, innerCircleColor: innerCircleColor, barColor: barColor, ariaLabel: ariaLabel = "circles-with-bar-loading" })=>{
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        "data-testid": "circles-with-bar-wrapper",
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            version: "1.1",
            id: "L1",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            x: "0px",
            y: "0px",
            height: `${height}`,
            width: `${width}`,
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
            xmlSpace: "preserve",
            "data-testid": "circles-with-bar-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                    children: "circles-with-bar-loading"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("desc", {
                    children: "Animated representation of circles with bar"
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    fill: "none",
                    stroke: `${outerCircleColor || color}`,
                    strokeWidth: "6",
                    strokeMiterlimit: "15",
                    strokeDasharray: "14.2472,14.2472",
                    cx: "50",
                    cy: "50",
                    r: "47",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        attributeType: "XML",
                        type: "rotate",
                        dur: "5s",
                        from: "0 50 50",
                        to: "360 50 50",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    fill: "none",
                    stroke: `${innerCircleColor || color}`,
                    strokeWidth: "1",
                    strokeMiterlimit: "10",
                    strokeDasharray: "10,10",
                    cx: "50",
                    cy: "50",
                    r: "39",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        attributeType: "XML",
                        type: "rotate",
                        dur: "5s",
                        from: "0 50 50",
                        to: "-360 50 50",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    fill: `${barColor || color}`,
                    "data-testid": "circles-with-bar-svg-bar",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "30",
                            y: "35",
                            width: "5",
                            height: "30",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                dur: "1s",
                                type: "translate",
                                values: "0 5 ; 0 -5; 0 5",
                                repeatCount: "indefinite",
                                begin: "0.1"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "40",
                            y: "35",
                            width: "5",
                            height: "30",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                dur: "1s",
                                type: "translate",
                                values: "0 5 ; 0 -5; 0 5",
                                repeatCount: "indefinite",
                                begin: "0.2"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "50",
                            y: "35",
                            width: "5",
                            height: "30",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                dur: "1s",
                                type: "translate",
                                values: "0 5 ; 0 -5; 0 5",
                                repeatCount: "indefinite",
                                begin: "0.3"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "60",
                            y: "35",
                            width: "5",
                            height: "30",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                dur: "1s",
                                type: "translate",
                                values: "0 5 ; 0 -5; 0 5",
                                repeatCount: "indefinite",
                                begin: "0.4"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                            x: "70",
                            y: "35",
                            width: "5",
                            height: "30",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                dur: "1s",
                                type: "translate",
                                values: "0 5 ; 0 -5; 0 5",
                                repeatCount: "indefinite",
                                begin: "0.5"
                            })
                        })
                    ]
                })
            ]
        })
    });
};






const $b438e21e66fce243$export$ef2184bd89960b14 = ({ height: height = 80, width: width = 80, radius: radius = 12.5, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "grid-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "grid-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            viewBox: "0 0 105 105",
            fill: color,
            "data-testid": "grid-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "12.5",
                    cy: "12.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "0s",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "12.5",
                    cy: "52.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "100ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "52.5",
                    cy: "12.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "300ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "52.5",
                    cy: "52.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "600ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "92.5",
                    cy: "12.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "800ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "92.5",
                    cy: "52.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "400ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "12.5",
                    cy: "92.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "700ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "52.5",
                    cy: "92.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "500ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    cx: "92.5",
                    cy: "92.5",
                    r: `${radius}`,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "200ms",
                        dur: "1s",
                        values: "1;.2;1",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });






const $88eb2f870dd9f437$export$2da2f0c7403af3ce = ({ height: height = 80, width: width = 80, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "hearts-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "hearts-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            viewBox: "0 0 140 64",
            xmlns: "http://www.w3.org/2000/svg",
            fill: color,
            "data-testid": "hearts-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z",
                    attributeName: "fill-opacity",
                    from: "0",
                    to: ".5",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "0s",
                        dur: "1.4s",
                        values: "0.5;1;0.5",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z",
                    attributeName: "fill-opacity",
                    from: "0",
                    to: ".5",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill-opacity",
                        begin: "0.7s",
                        dur: "1.4s",
                        values: "0.5;1;0.5",
                        calcMode: "linear",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z"
                })
            ]
        })
    });







const $ad60b992c945fdb5$var$len = 242.776657104492;
const $ad60b992c945fdb5$var$time = 1.6;
const $ad60b992c945fdb5$var$anim = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes))`
12.5% {
  stroke-dasharray: ${$ad60b992c945fdb5$var$len * 0.14}px, ${$ad60b992c945fdb5$var$len}px;
  stroke-dashoffset: -${$ad60b992c945fdb5$var$len * 0.11}px;
}
43.75% {
  stroke-dasharray: ${$ad60b992c945fdb5$var$len * 0.35}px, ${$ad60b992c945fdb5$var$len}px;
  stroke-dashoffset: -${$ad60b992c945fdb5$var$len * 0.35}px;
}
100% {
  stroke-dasharray: ${$ad60b992c945fdb5$var$len * 0.01}px, ${$ad60b992c945fdb5$var$len}px;
  stroke-dashoffset: -${$ad60b992c945fdb5$var$len * 0.99}px;
}
`;
const $ad60b992c945fdb5$var$Path = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])).path`
  stroke-dasharray: ${$ad60b992c945fdb5$var$len * 0.01}px, ${$ad60b992c945fdb5$var$len};
  stroke-dashoffset: 0;
  animation: ${$ad60b992c945fdb5$var$anim} ${$ad60b992c945fdb5$var$time}s linear infinite;
`;
const $ad60b992c945fdb5$export$8009d4483dfda42 = ({ color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), width: width = "200" })=>{
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        width: `${width}`,
        height: `${Number(width) * 0.5}`,
        viewBox: `0 0 ${width} ${Number(100)}`,
        "data-testid": "infinity-spin",
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($ad60b992c945fdb5$var$Path, {
                "data-testid": "infinity-spin-path-1",
                stroke: color,
                fill: "none",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                "data-testid": "infinity-spin-path-2",
                opacity: "0.07",
                fill: "none",
                stroke: color,
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "10",
                d: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
            })
        ]
    });
};







const $05da46d92e4baf0c$export$d2101d81f63866ab = ({ wrapperStyle: wrapperStyle = {}, visible: visible = true, wrapperClass: wrapperClass = "", height: height = 100, width: width = 100, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "line-wave-loading", firstLineColor: firstLineColor, middleLineColor: middleLineColor, lastLineColor: lastLineColor })=>{
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "line-wave-wrapper",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            version: "1.1",
            height: `${height}`,
            width: `${width}`,
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 0 0",
            xmlSpace: "preserve",
            "data-testid": "line-wave-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    x: "20",
                    y: "50",
                    width: "4",
                    height: "10",
                    fill: firstLineColor || color,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeType: "xml",
                        attributeName: "transform",
                        type: "translate",
                        values: "0 0; 0 20; 0 0",
                        begin: "0",
                        dur: "0.6s",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    x: "30",
                    y: "50",
                    width: "4",
                    height: "10",
                    fill: middleLineColor || color,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeType: "xml",
                        attributeName: "transform",
                        type: "translate",
                        values: "0 0; 0 20; 0 0",
                        begin: "0.2s",
                        dur: "0.6s",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    x: "40",
                    y: "50",
                    width: "4",
                    height: "10",
                    fill: lastLineColor || color,
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeType: "xml",
                        attributeName: "transform",
                        type: "translate",
                        values: "0 0; 0 20; 0 0",
                        begin: "0.4s",
                        dur: "0.6s",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });
};






const $05cab5f4cf092036$export$64ea884904791f4 = ({ height: height = 90, width: width = 80, radius: radius = 12.5, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), secondaryColor: secondaryColor = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "mutating-dots-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "mutating-dots-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            id: "goo-loader",
            width: width,
            height: height,
            "data-testid": "mutating-dots-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "fancy-goo",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "SourceGraphic",
                            stdDeviation: "6",
                            result: "blur"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
                            in: "blur",
                            mode: "matrix",
                            values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",
                            result: "goo"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in: "SourceGraphic",
                            in2: "goo",
                            operator: "atop"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    filter: "url(#fancy-goo)",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                            id: "mainAnim",
                            attributeName: "transform",
                            attributeType: "XML",
                            type: "rotate",
                            from: "0 50 50",
                            to: "359 50 50",
                            dur: "1.2s",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "50%",
                            cy: "40",
                            r: radius,
                            fill: color,
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                id: "cAnim1",
                                attributeType: "XML",
                                attributeName: "cy",
                                dur: "0.6s",
                                begin: "0;cAnim1.end+0.2s",
                                calcMode: "spline",
                                values: "40;20;40",
                                keyTimes: "0;0.3;1",
                                keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            cx: "50%",
                            cy: "60",
                            r: radius,
                            fill: secondaryColor,
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                id: "cAnim2",
                                attributeType: "XML",
                                attributeName: "cy",
                                dur: "0.6s",
                                begin: "0.4s;cAnim2.end+0.2s",
                                calcMode: "spline",
                                values: "60;80;60",
                                keyTimes: "0;0.3;1",
                                keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"
                            })
                        })
                    ]
                })
            ]
        })
    });






/**
 * The radius of the circle
 * The Loader size is set with the width and height of the SVG
 * @type {number}
 */ const $a5fa864d4dd36deb$var$RADIUS = 20;
/**
 * Compute Path depending on circle radius
 * The structure with radius 20 is "M20 0c0-9.94-8.06-20-20-20"
 * @param radius of the circle radius default 20
 * @returns {string}
 */ const $a5fa864d4dd36deb$var$getPath = (radius)=>{
    return [
        "M" + radius + " 0c0-9.94-8.06",
        radius,
        radius,
        radius
    ].join("-");
};
/**
 * Compute the size of the view box depending on the radius and Stroke-Width
 * @param strokeWidth Stroke-Width of the full circle
 * @param secondaryStrokeWidth Stroke-Width of the 1/4 circle
 * @param radius radius of the circle
 * @returns {string}
 */ const $a5fa864d4dd36deb$var$getViewBoxSize = (strokeWidth, secondaryStrokeWidth, radius)=>{
    const maxStrokeWidth = Math.max(strokeWidth, secondaryStrokeWidth);
    const startingPoint = -radius - maxStrokeWidth / 2 + 1;
    const endpoint = radius * 2 + maxStrokeWidth;
    return [
        startingPoint,
        startingPoint,
        endpoint,
        endpoint
    ].join(" ");
};
const $a5fa864d4dd36deb$export$67ad50c48ca3ede4 = ({ height: height = 80, width: width = 80, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), secondaryColor: secondaryColor = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "oval-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true, strokeWidth: strokeWidth = 2, strokeWidthSecondary: strokeWidthSecondary })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "oval-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
            width: width,
            height: height,
            viewBox: $a5fa864d4dd36deb$var$getViewBoxSize(Number(strokeWidth), Number(strokeWidthSecondary || strokeWidth), $a5fa864d4dd36deb$var$RADIUS),
            xmlns: "http://www.w3.org/2000/svg",
            stroke: color,
            "data-testid": "oval-svg",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    transform: "translate(1 1)",
                    strokeWidth: Number(strokeWidthSecondary || strokeWidth),
                    "data-testid": "oval-secondary-group",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                            strokeOpacity: ".5",
                            cx: "0",
                            cy: "0",
                            r: $a5fa864d4dd36deb$var$RADIUS,
                            stroke: secondaryColor,
                            strokeWidth: strokeWidth
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                            d: $a5fa864d4dd36deb$var$getPath($a5fa864d4dd36deb$var$RADIUS),
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 0 0",
                                to: "360 0 0",
                                dur: "1s",
                                repeatCount: "indefinite"
                            })
                        })
                    ]
                })
            })
        })
    });







const $8a2963a7161a08e2$export$83d2259ec538613b = ({ height: height = 80, width: width = 80, radius: radius = 1, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "puff-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "puff-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
            width: width,
            height: height,
            viewBox: "0 0 44 44",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            stroke: color,
            "data-testid": "puff-svg",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                        cx: "22",
                        cy: "22",
                        r: radius,
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "r",
                                begin: "0s",
                                dur: "1.8s",
                                values: "1; 20",
                                calcMode: "spline",
                                keyTimes: "0; 1",
                                keySplines: "0.165, 0.84, 0.44, 1",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "strokeOpacity",
                                begin: "0s",
                                dur: "1.8s",
                                values: "1; 0",
                                calcMode: "spline",
                                keyTimes: "0; 1",
                                keySplines: "0.3, 0.61, 0.355, 1",
                                repeatCount: "indefinite"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                        cx: "22",
                        cy: "22",
                        r: radius,
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "r",
                                begin: "-0.9s",
                                dur: "1.8s",
                                values: "1; 20",
                                calcMode: "spline",
                                keyTimes: "0; 1",
                                keySplines: "0.165, 0.84, 0.44, 1",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "strokeOpacity",
                                begin: "-0.9s",
                                dur: "1.8s",
                                values: "1; 0",
                                calcMode: "spline",
                                keyTimes: "0; 1",
                                keySplines: "0.3, 0.61, 0.355, 1",
                                repeatCount: "indefinite"
                            })
                        ]
                    })
                ]
            })
        })
    });







const $f6f65ef73d86a35a$export$8e22e563e5362f75 = ({ radius: radius = 45, strokeWidth: strokeWidth = 5, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), secondaryColor: secondaryColor, ariaLabel: ariaLabel = "revolving-dot-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "aria-label": ariaLabel,
        "data-testid": "revolving-dot-loading",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            version: "1.1",
            width: `calc(${radius} * 2.5)`,
            height: `calc(${radius} * 2.5)`,
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            x: "0px",
            y: "0px",
            "data-testid": "revolving-dot-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    fill: "none",
                    stroke: secondaryColor || color,
                    strokeWidth: strokeWidth,
                    cx: `calc(${radius} * 1.28)`,
                    cy: `calc(${radius} * 1.28)`,
                    r: radius,
                    style: {
                        opacity: 0.5
                    }
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    fill: color,
                    stroke: color,
                    strokeWidth: "3",
                    cx: `calc(${radius} * 1.28)`,
                    cy: `calc(${radius} / 3.5)`,
                    r: `calc(${radius} / 5)`,
                    style: {
                        transformOrigin: "50% 50%"
                    },
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        dur: "2s",
                        type: "rotate",
                        from: "0",
                        to: "360",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });







const $0da8ebf0340870f3$export$fdd9e2f491a77de7 = ({ height: height = 80, width: width = 80, radius: radius = 6, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "rings-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "rings-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
            width: width,
            height: height,
            viewBox: "0 0 45 45",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            stroke: color,
            "data-testid": "rings-svg",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(1 1)",
                strokeWidth: "2",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                        cx: "22",
                        cy: "22",
                        r: radius,
                        strokeOpacity: "0",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "r",
                                begin: "1.5s",
                                dur: "3s",
                                values: "6;22",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "stroke-opacity",
                                begin: "1.5s",
                                dur: "3s",
                                values: "1;0",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "stroke-width",
                                begin: "1.5s",
                                dur: "3s",
                                values: "2;0",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                        cx: "22",
                        cy: "22",
                        r: radius,
                        strokeOpacity: "0",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "r",
                                begin: "3s",
                                dur: "3s",
                                values: "6;22",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "strokeOpacity",
                                begin: "3s",
                                dur: "3s",
                                values: "1;0",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "strokeWidth",
                                begin: "3s",
                                dur: "3s",
                                values: "2;0",
                                calcMode: "linear",
                                repeatCount: "indefinite"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                        cx: "22",
                        cy: "22",
                        r: Number(radius) + 2,
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "r",
                            begin: "0s",
                            dur: "1.5s",
                            values: "6;1;2;3;4;5;6",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    })
                ]
            })
        })
    });







const $30f4fc5ff137b595$export$bb511942ded86554 = ({ wrapperClass: wrapperClass = "", color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), height: height = 100, width: width = 100, strokeWidth: strokeWidth = 4, ariaLabel: ariaLabel = "rotating-square-loading", wrapperStyle: wrapperStyle = {}, visible: visible = true })=>{
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "rotating-square-wrapper",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            version: "1.1",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
            height: `${height}`,
            width: `${width}`,
            "data-testid": "rotating-square-svg",
            xmlSpace: "preserve",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    fill: "none",
                    stroke: color,
                    strokeWidth: strokeWidth,
                    x: "25",
                    y: "25",
                    width: "50",
                    height: "50",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        dur: "0.5s",
                        from: "0 50 50",
                        to: "180 50 50",
                        type: "rotate",
                        id: "strokeBox",
                        attributeType: "XML",
                        begin: "rectBox.end"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    x: "27",
                    y: "27",
                    fill: color,
                    width: "46",
                    height: "50",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "height",
                        dur: "1.3s",
                        attributeType: "XML",
                        from: "50",
                        to: "0",
                        id: "rectBox",
                        fill: "freeze",
                        begin: "0s;strokeBox.end"
                    })
                })
            ]
        })
    });
};







const $5819da83a926266a$var$POINTS = [
    0,
    30,
    60,
    90,
    120,
    150,
    180,
    210,
    240,
    270,
    300,
    330
];
const $5819da83a926266a$var$spin = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes))`
to {
   transform: rotate(360deg);
 }
`;
const $5819da83a926266a$var$Svg = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])).svg`
  animation: ${$5819da83a926266a$var$spin} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
const $5819da83a926266a$var$Polyline = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])).polyline`
  stroke-width: ${(props)=>props.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const $5819da83a926266a$export$d20df8773b6b77b5 = ({ strokeColor: strokeColor = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), strokeWidth: strokeWidth = "5", animationDuration: animationDuration = "0.75", width: width = "96", visible: visible = true, ariaLabel: ariaLabel = "rotating-lines-loading" })=>{
    const lines = (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>$5819da83a926266a$var$POINTS.map((point)=>// eslint-disable-next-line @typescript-eslint/no-use-before-define
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($5819da83a926266a$var$Polyline, {
                points: "24,12 24,4",
                width: strokeWidth,
                transform: `rotate(${point}, 24, 24)`
            }, point)), [
        strokeWidth
    ]);
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($5819da83a926266a$var$Svg, {
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 48 48",
        width: width,
        stroke: strokeColor,
        speed: animationDuration,
        "data-testid": "rotating-lines-svg",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: lines()
    });
};







const $56d89154a59e79d3$export$f8e5ae7506d65b32 = ({ height: height = 80, width: width = 80, strokeWidth: strokeWidth = 2, radius: radius = 1, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "tail-spin-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>{
    const strokeWidthNum = parseInt(String(strokeWidth));
    const viewBoxValue = strokeWidthNum + 36;
    const halfStrokeWidth = strokeWidthNum / 2;
    const processedRadius = halfStrokeWidth + parseInt(String(radius)) - 1;
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "tail-spin-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            viewBox: `0 0 ${viewBoxValue} ${viewBoxValue}`,
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            "data-testid": "tail-spin-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        x1: "8.042%",
                        y1: "0%",
                        x2: "65.682%",
                        y2: "23.865%",
                        id: "a",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: color,
                                stopOpacity: "0",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: color,
                                stopOpacity: ".631",
                                offset: "63.146%"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                                stopColor: color,
                                offset: "100%"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        transform: `translate(${halfStrokeWidth} ${halfStrokeWidth})`,
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                d: "M36 18c0-9.94-8.06-18-18-18",
                                id: "Oval-2",
                                stroke: color,
                                strokeWidth: strokeWidth,
                                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                    attributeName: "transform",
                                    type: "rotate",
                                    from: "0 18 18",
                                    to: "360 18 18",
                                    dur: "0.9s",
                                    repeatCount: "indefinite"
                                })
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                                fill: "#fff",
                                cx: "36",
                                cy: "18",
                                r: processedRadius,
                                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                    attributeName: "transform",
                                    type: "rotate",
                                    from: "0 18 18",
                                    to: "360 18 18",
                                    dur: "0.9s",
                                    repeatCount: "indefinite"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};







const $5cff71254109409f$export$e21573137ccb7f5d = ({ wrapperStyle: wrapperStyle = {}, visible: visible = true, wrapperClass: wrapperClass = "", height: height = 100, width: width = 100, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "three-circles-loading", outerCircleColor: outerCircleColor, innerCircleColor: innerCircleColor, middleCircleColor: middleCircleColor })=>{
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "three-circles-wrapper",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            version: "1.1",
            height: `${height}`,
            width: `${width}`,
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
            xmlSpace: "preserve",
            "data-testid": "three-circles-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fill: outerCircleColor || color,
                    d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        attributeType: "XML",
                        type: "rotate",
                        dur: "2s",
                        from: "0 50 50",
                        to: "360 50 50",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fill: middleCircleColor || color,
                    d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        attributeType: "XML",
                        type: "rotate",
                        dur: "1s",
                        from: "0 50 50",
                        to: "-360 50 50",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fill: innerCircleColor || color,
                    d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        attributeType: "XML",
                        type: "rotate",
                        dur: "2s",
                        from: "0 50 50",
                        to: "360 50 50",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });
};







const $f0c3e3bb3e76d210$export$4bf83b24a11cff0b = ({ height: height = 80, width: width = 80, radius: radius = 9, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "three-dots-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "three-dots-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            viewBox: "0 0 120 30",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            fill: color,
            "data-testid": "three-dots-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                    cx: "15",
                    cy: "15",
                    r: Number(radius) + 6,
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "r",
                            from: "15",
                            to: "15",
                            begin: "0s",
                            dur: "0.8s",
                            values: "15;9;15",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill-opacity",
                            from: "1",
                            to: "1",
                            begin: "0s",
                            dur: "0.8s",
                            values: "1;.5;1",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                    cx: "60",
                    cy: "15",
                    r: radius,
                    attributeName: "fill-opacity",
                    from: "1",
                    to: "0.3",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "r",
                            from: "9",
                            to: "9",
                            begin: "0s",
                            dur: "0.8s",
                            values: "9;15;9",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill-opacity",
                            from: "0.5",
                            to: "0.5",
                            begin: "0s",
                            dur: "0.8s",
                            values: ".5;1;.5",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                    cx: "105",
                    cy: "15",
                    r: Number(radius) + 6,
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "r",
                            from: "15",
                            to: "15",
                            begin: "0s",
                            dur: "0.8s",
                            values: "15;9;15",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill-opacity",
                            from: "1",
                            to: "1",
                            begin: "0s",
                            dur: "0.8s",
                            values: "1;.5;1",
                            calcMode: "linear",
                            repeatCount: "indefinite"
                        })
                    ]
                })
            ]
        })
    });








const $afa12dd3e98f740f$var$VIEW_BOX_VALUES = "-3 -4 39 39";
const $afa12dd3e98f740f$var$POLYGON_POINTS = "16,0 32,32 0,32";
/** Styles */ const $afa12dd3e98f740f$var$dash = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes))`
to {
   stroke-dashoffset: 136;
 }
`;
const $afa12dd3e98f740f$var$Polygon = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])).polygon`
  stroke-dasharray: 17;
  animation: ${$afa12dd3e98f740f$var$dash} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
const $afa12dd3e98f740f$var$SVG = (0, (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])).svg`
  transform-origin: 50% 65%;
`;
const $afa12dd3e98f740f$export$5a465592bfe74b48 = ({ height: height = 80, width: width = 80, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "triangle-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>{
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: `${wrapperClass}`,
        "data-testid": "triangle-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($afa12dd3e98f740f$var$SVG, {
            id: "triangle",
            width: width,
            height: height,
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            viewBox: $afa12dd3e98f740f$var$VIEW_BOX_VALUES,
            "data-testid": "triangle-svg",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)($afa12dd3e98f740f$var$Polygon, {
                fill: "transparent",
                stroke: color,
                strokeWidth: "1",
                points: $afa12dd3e98f740f$var$POLYGON_POINTS
            })
        })
    });
};







const $e3e50827b57d879a$export$4c68f1a79f88778c = ({ height: height = 80, width: width = 80, radius: radius = 48, color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ariaLabel: ariaLabel = "watch-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, visible: visible = true })=>/*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((0, $4c3f0b77e8caf06d$export$21d9f1931ef75b56), {
        style: wrapperStyle,
        $visible: visible,
        className: wrapperClass,
        "data-testid": "watch-loading",
        "aria-label": ariaLabel,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: width,
            height: height,
            version: "1.1",
            id: "L2",
            xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            enableBackground: "new 0 0 100 100",
            xmlSpace: "preserve",
            "data-testid": "watch-svg",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                    fill: "none",
                    stroke: color,
                    strokeWidth: "4",
                    strokeMiterlimit: "10",
                    cx: "50",
                    cy: "50",
                    r: radius
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                    fill: "none",
                    strokeLinecap: "round",
                    stroke: color,
                    strokeWidth: "4",
                    strokeMiterlimit: "10",
                    x1: "50",
                    y1: "50",
                    x2: "85",
                    y2: "50.5",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        dur: "2s",
                        type: "rotate",
                        from: "0 50 50",
                        to: "360 50 50",
                        repeatCount: "indefinite"
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                    fill: "none",
                    strokeLinecap: "round",
                    stroke: color,
                    strokeWidth: "4",
                    strokeMiterlimit: "10",
                    x1: "50",
                    y1: "50",
                    x2: "49.5",
                    y2: "74",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        dur: "15s",
                        type: "rotate",
                        from: "0 50 50",
                        to: "360 50 50",
                        repeatCount: "indefinite"
                    })
                })
            ]
        })
    });






const $b184d2a88a50e3dc$export$1ed1943372cc63a9 = ({ color: color = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), width: width = "100", visible: visible = true })=>{
    return visible ? /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        width: width,
        height: width,
        viewBox: "0 0 100 100",
        "data-testid": "falling-lines",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                y: "25",
                width: "10",
                height: "50",
                rx: "4",
                ry: "4",
                fill: color,
                "data-testid": "falling-lines-rect-1",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "x",
                        values: "10;100",
                        dur: "1.2s",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 10 70",
                        to: "-60 100 70",
                        dur: "1.2s",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "opacity",
                        values: "0;1;0",
                        dur: "1.2s",
                        repeatCount: "indefinite"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                y: "25",
                width: "10",
                height: "50",
                rx: "4",
                ry: "4",
                fill: color,
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "x",
                        values: "10;100",
                        dur: "1.2s",
                        begin: "0.4s",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 10 70",
                        to: "-60 100 70",
                        dur: "1.2s",
                        begin: "0.4s",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "opacity",
                        values: "0;1;0",
                        dur: "1.2s",
                        begin: "0.4s",
                        repeatCount: "indefinite"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                y: "25",
                width: "10",
                height: "50",
                rx: "4",
                ry: "4",
                fill: color,
                "data-testid": "falling-lines-rect-2",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "x",
                        values: "10;100",
                        dur: "1.2s",
                        begin: "0.8s",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 10 70",
                        to: "-60 100 70",
                        dur: "1.2s",
                        begin: "0.8s",
                        repeatCount: "indefinite"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "opacity",
                        values: "0;1;0",
                        dur: "1.2s",
                        begin: "0.8s",
                        repeatCount: "indefinite"
                    })
                ]
            })
        ]
    }) : null;
};






const $5ad4f4dbdb85103b$export$d25f4198d7ad6c78 = ({ visible: visible = true, height: height = "80", width: width = "80", ariaLabel: ariaLabel = "vortex-loading", wrapperStyle: wrapperStyle, wrapperClass: wrapperClass, colors: colors = [
    "#1B5299",
    "#EF8354",
    "#DB5461",
    "#1B5299",
    "#EF8354",
    "#DB5461"
] })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        height: height,
        width: width,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        "data-testid": "vortex-svg",
        "aria-label": ariaLabel,
        style: wrapperStyle,
        className: wrapperClass,
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            transform: "translate(50,50)",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                transform: "scale(0.7)",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    transform: "translate(-50,-50)",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        transform: "rotate(137.831 50 50)",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                repeatCount: "indefinite",
                                values: "360 50 50;0 50 50",
                                keyTimes: "0;1",
                                dur: "1",
                                keySplines: "0.5 0.5 0.5 0.5",
                                calcMode: "spline"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[0],
                                d: "M30.4,9.7c-7.4,10.9-11.8,23.8-12.3,37.9c0.2,1,0.5,1.9,0.7,2.8c1.4-5.2,3.4-10.3,6.2-15.1 c2.6-4.4,5.6-8.4,9-12c0.7-0.7,1.4-1.4,2.1-2.1c7.4-7,16.4-12,26-14.6C51.5,3.6,40.2,4.9,30.4,9.7z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[1],
                                d: "M24.8,64.2c-2.6-4.4-4.5-9.1-5.9-13.8c-0.3-0.9-0.5-1.9-0.7-2.8c-2.4-9.9-2.2-20.2,0.4-29.8 C10.6,25.5,6,36,5.3,46.8C11,58.6,20,68.9,31.9,76.3c0.9,0.3,1.9,0.5,2.8,0.8C31,73.3,27.6,69,24.8,64.2z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[2],
                                d: "M49.6,78.9c-5.1,0-10.1-0.6-14.9-1.8c-1-0.2-1.9-0.5-2.8-0.8c-9.8-2.9-18.5-8.2-25.6-15.2 c2.8,10.8,9.5,20,18.5,26c13.1,0.9,26.6-1.7,38.9-8.3c0.7-0.7,1.4-1.4,2.1-2.1C60.7,78.2,55.3,78.9,49.6,78.9z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[3],
                                d: "M81.1,49.6c-1.4,5.2-3.4,10.3-6.2,15.1c-2.6,4.4-5.6,8.4-9,12c-0.7,0.7-1.4,1.4-2.1,2.1 c-7.4,7-16.4,12-26,14.6c10.7,3,22.1,1.7,31.8-3.1c7.4-10.9,11.8-23.8,12.3-37.9C81.6,51.5,81.4,50.6,81.1,49.6z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[4],
                                d: "M75.2,12.9c-13.1-0.9-26.6,1.7-38.9,8.3c-0.7,0.7-1.4,1.4-2.1,2.1c5.2-1.4,10.6-2.2,16.2-2.2 c5.1,0,10.1,0.6,14.9,1.8c1,0.2,1.9,0.5,2.8,0.8c9.8,2.9,18.5,8.2,25.6,15.2C90.9,28.1,84.2,18.9,75.2,12.9z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[5],
                                d: "M94.7,53.2C89,41.4,80,31.1,68.1,23.7c-0.9-0.3-1.9-0.5-2.8-0.8c3.8,3.8,7.2,8.1,10,13 c2.6,4.4,4.5,9.1,5.9,13.8c0.3,0.9,0.5,1.9,0.7,2.8c2.4,9.9,2.2,20.2-0.4,29.8C89.4,74.5,94,64,94.7,53.2z"
                            })
                        ]
                    })
                })
            })
        })
    });
};






const $aa2b177fb9ef5dee$export$f64f16a115ce395d = ({ visible: visible = true, height: height = "80", width: width = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "rotating-triangle-loading", colors: colors = [
    "#1B5299",
    "#EF8354",
    "#DB5461"
] })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "rotating-triangle-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            transform: "translate(50,42)",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                transform: "scale(0.8)",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                    transform: "translate(-50,-50)",
                    children: [
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
                            points: "72.5,50 50,11 27.5,50 50,50",
                            fill: colors[0],
                            transform: "rotate(186 50 38.5)",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                calcMode: "linear",
                                values: "0 50 38.5;360 50 38.5",
                                keyTimes: "0;1",
                                dur: "1s",
                                begin: "0s",
                                repeatCount: "indefinite"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
                            points: "5,89 50,89 27.5,50",
                            fill: colors[1],
                            transform: "rotate(186 27.5 77.5)",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                calcMode: "linear",
                                values: "0 27.5 77.5;360 27.5 77.5",
                                keyTimes: "0;1",
                                dur: "1s",
                                begin: "0s",
                                repeatCount: "indefinite"
                            })
                        }),
                        /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
                            points: "72.5,50 50,89 95,89",
                            fill: colors[2],
                            transform: "rotate(186 72.2417 77.5)",
                            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "rotate",
                                calcMode: "linear",
                                values: "0 72.5 77.5;360 72 77.5",
                                keyTimes: "0;1",
                                dur: "1s",
                                begin: "0s",
                                repeatCount: "indefinite"
                            })
                        })
                    ]
                })
            })
        })
    });
};






const $daf95de783b7b8b1$export$d7b12c4107be0d61 = ({ visible: visible = true, height: height = "80", width: width = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "radio-loading", colors: colors = [
    (0, $84fda1e7e33cfd28$export$37394b0fa44b998c),
    (0, $84fda1e7e33cfd28$export$37394b0fa44b998c),
    (0, $84fda1e7e33cfd28$export$37394b0fa44b998c)
] })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "radio-bar-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "28",
                cy: "75",
                r: "11",
                fill: colors[0],
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill-opacity",
                    calcMode: "linear",
                    values: "0;1;1",
                    keyTimes: "0;0.2;1",
                    dur: "1",
                    begin: "0s",
                    repeatCount: "indefinite"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M28 47A28 28 0 0 1 56 75",
                fill: "none",
                strokeWidth: "10",
                stroke: colors[1],
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "stroke-opacity",
                    calcMode: "linear",
                    values: "0;1;1",
                    keyTimes: "0;0.2;1",
                    dur: "1",
                    begin: "0.1s",
                    repeatCount: "indefinite"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M28 25A50 50 0 0 1 78 75",
                fill: "none",
                strokeWidth: "10",
                stroke: colors[2],
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "stroke-opacity",
                    calcMode: "linear",
                    values: "0;1;1",
                    keyTimes: "0;0.2;1",
                    dur: "1",
                    begin: "0.2s",
                    repeatCount: "indefinite"
                })
            })
        ]
    });
};






const $075a2f0ea0d9df8a$export$c17561cb55d4db30 = ({ visible: visible = true, height: height = "80", width: width = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "progress-bar-loading", borderColor: borderColor = "#F4442E", barColor: barColor = "#51E5FF" })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "progress-bar-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                    x: "0",
                    y: "0",
                    width: "100",
                    height: "100",
                    id: "lds-progress-cpid-5009611b8a418",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("rect", {
                        x: "0",
                        y: "0",
                        width: "66.6667",
                        height: "100",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "width",
                                calcMode: "linear",
                                values: "0;100;100",
                                keyTimes: "0;0.5;1",
                                dur: "1",
                                begin: "0s",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "x",
                                calcMode: "linear",
                                values: "0;0;100",
                                keyTimes: "0;0.5;1",
                                dur: "1",
                                begin: "0s",
                                repeatCount: "indefinite"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "none",
                strokeWidth: "2.7928",
                d: "M82,63H18c-7.2,0-13-5.8-13-13v0c0-7.2,5.8-13,13-13h64c7.2,0,13,5.8,13,13v0C95,57.2,89.2,63,82,63z",
                stroke: borderColor
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M81.3,58.7H18.7c-4.8,0-8.7-3.9-8.7-8.7v0c0-4.8,3.9-8.7,8.7-8.7h62.7c4.8,0,8.7,3.9,8.7,8.7v0C90,54.8,86.1,58.7,81.3,58.7z",
                fill: barColor,
                clipPath: "url(#lds-progress-cpid-5009611b8a418)"
            })
        ]
    });
};






const $db94311ffb982ec6$export$bdf537af43a20db5 = ({ visible: visible = true, height: height = "80", width: width = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "magnifying-glass-loading", glassColor: glassColor = "#c0efff", color: color = "#e15b64" })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "magnifying-glass-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            transform: "translate(50,50)",
            children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                transform: "scale(0.82)",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    transform: "translate(-50,-50)",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        transform: "translate(16.3636 -20)",
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                                attributeName: "transform",
                                type: "translate",
                                calcMode: "linear",
                                values: "-20 -20;20 -20;0 20;-20 -20",
                                keyTimes: "0;0.33;0.66;1",
                                dur: "1s",
                                begin: "0s",
                                repeatCount: "indefinite"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                d: "M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z",
                                fill: glassColor
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                d: "M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z",
                                fill: color
                            })
                        ]
                    })
                })
            })
        })
    });
};






const $1d8c9163e13b7bf7$export$8e3fad5cade57efa = ({ width: width = "80", height: height = "80", backgroundColor: backgroundColor = (0, $84fda1e7e33cfd28$export$37394b0fa44b998c), ballColors: ballColors = [
    "#fc636b",
    "#6a67ce",
    "#ffb900"
], wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "fidget-spinner-loader", visible: visible = true })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "fidget-spinner-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            transform: "rotate(6 50 50)",
            children: [
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    transform: "translate(50 50)",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                        transform: "scale(0.9)",
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                            transform: "translate(-50 -58)",
                            children: [
                                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                    d: "M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z",
                                    fill: ballColors[0]
                                }),
                                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                    d: "M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z",
                                    fill: ballColors[1]
                                }),
                                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                                    cx: "50",
                                    cy: "27",
                                    r: "7.4",
                                    fill: ballColors[2]
                                }),
                                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                    d: "M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z",
                                    fill: backgroundColor
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    calcMode: "linear",
                    values: "0 50 50;360 50 50",
                    keyTimes: "0;1",
                    dur: "1s",
                    begin: "0s",
                    repeatCount: "indefinite"
                })
            ]
        })
    });
};






const $bb8e4335d7ee0654$export$bee07fdc425df572 = ({ visible: visible = true, width: width = "80", height: height = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "dna-loading" })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        width: width,
        height: height,
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "dna-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "6.451612903225806",
                cy: "60.6229",
                r: "3.41988",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.5s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "0s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.5s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "6.451612903225806",
                cy: "39.3771",
                r: "2.58012",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.5s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.5s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "16.129032258064512",
                cy: "68.1552",
                r: "3.17988",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.7s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.2s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.7s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "16.129032258064512",
                cy: "31.8448",
                r: "2.82012",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.7s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.2s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.7s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "25.806451612903224",
                cy: "69.3634",
                r: "2.93988",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.9s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.4s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.9s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "25.806451612903224",
                cy: "30.6366",
                r: "3.06012",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.9s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.4s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.9s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "35.48387096774193",
                cy: "65.3666",
                r: "2.69988",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.1s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.6s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.1s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "35.48387096774193",
                cy: "34.6334",
                r: "3.30012",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.1s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.6s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.1s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "45.16129032258064",
                cy: "53.8474",
                r: "2.45988",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.3s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-0.8s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.3s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "45.16129032258064",
                cy: "46.1526",
                r: "3.54012",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.3s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.8s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.3s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "54.838709677419345",
                cy: "39.3771",
                r: "2.58012",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.5s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.5s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "54.838709677419345",
                cy: "60.6229",
                r: "3.41988",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.5s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.5s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "64.51612903225805",
                cy: "31.8448",
                r: "2.82012",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.7s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.2s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.7s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "64.51612903225805",
                cy: "68.1552",
                r: "3.17988",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.7s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.2s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.7s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "74.19354838709677",
                cy: "30.6366",
                r: "3.06012",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.9s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.4s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.9s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "74.19354838709677",
                cy: "69.3634",
                r: "2.93988",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.9s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.4s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.9s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "83.87096774193547",
                cy: "34.6334",
                r: "3.30012",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.1s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.6s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.1s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "83.87096774193547",
                cy: "65.3666",
                r: "2.69988",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-3.1s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.6s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.1s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "93.54838709677418",
                cy: "46.1526",
                r: "3.54012",
                fill: "rgba(233, 12, 89, 0.5125806451612902)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.3s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-1.8s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.3s"
                    })
                ]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("circle", {
                cx: "93.54838709677418",
                cy: "53.8474",
                r: "2.45988",
                fill: "#46dff0",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "r",
                        keyTimes: "0;0.5;1",
                        values: "2.4000000000000004;3.5999999999999996;2.4000000000000004",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-3.3s"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "cy",
                        keyTimes: "0;0.5;1",
                        values: "30.5;69.5;30.5",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.8s",
                        keySplines: "0.5 0 0.5 1;0.5 0 0.5 1",
                        calcMode: "spline"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                        attributeName: "fill",
                        keyTimes: "0;0.5;1",
                        values: "#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0",
                        dur: "2s",
                        repeatCount: "indefinite",
                        begin: "-2.3s"
                    })
                ]
            })
        ]
    });
};






const $50138037f422b463$export$f93420b62a5bdffa = ({ visible: visible = true, width: width = "80", height: height = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "discuss-loading", colors: colors = [
    "#ff727d",
    "#ff727d"
] })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "discuss-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "none",
                d: "M82 50A32 32 0 1 1 23.533421623214014 32.01333190873183 L21.71572875253809 21.7157287525381 L32.013331908731814 23.53342162321403 A32 32 0 0 1 82 50",
                strokeWidth: "5",
                stroke: colors[0]
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "50",
                cy: "50",
                fill: "none",
                strokeLinecap: "round",
                r: "20",
                strokeWidth: "5",
                stroke: colors[1],
                strokeDasharray: "31.41592653589793 31.41592653589793",
                transform: "rotate(96 50 50)",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "rotate",
                    calcMode: "linear",
                    values: "0 50 50;360 50 50",
                    keyTimes: "0;1",
                    dur: "1s",
                    begin: "0s",
                    repeatCount: "indefinite"
                })
            })
        ]
    });
};





const $7097090906378a5b$export$dc036a5afb9ca26f = ({ visible: visible = true, width: width = "80", height: height = "80", colors: colors = [
    "#e15b64",
    "#f47e60",
    "#f8b26a",
    "#abbd81",
    "#849b87"
], wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "color-ring-loading" })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: width,
        height: height,
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "color-ring-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("mask", {
                    id: "ldio-4offds5dlws-mask",
                    children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "26",
                        stroke: "#fff",
                        strokeLinecap: "round",
                        strokeDasharray: "122.52211349000194 40.840704496667314",
                        strokeWidth: "9",
                        transform: "rotate(198.018 50 50)",
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            values: "0 50 50;360 50 50",
                            keyTimes: "0;1",
                            dur: "1s",
                            repeatCount: "indefinite"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                mask: "url(#ldio-4offds5dlws-mask)",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "14.5",
                        y: "0",
                        width: "15",
                        height: "100",
                        fill: colors[0],
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill",
                            values: colors.join(";").toString(),
                            keyTimes: "0;0.25;0.5;0.75;1",
                            dur: "1s",
                            repeatCount: "indefinite",
                            begin: "-0.8s"
                        })
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "28.5",
                        y: "0",
                        width: "15",
                        height: "100",
                        fill: colors[1],
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill",
                            values: colors.join(";").toString(),
                            keyTimes: "0;0.25;0.5;0.75;1",
                            dur: "1s",
                            repeatCount: "indefinite",
                            begin: "-0.6s"
                        })
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "42.5",
                        y: "0",
                        width: "15",
                        height: "100",
                        fill: colors[2],
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill",
                            values: colors.join(";").toString(),
                            keyTimes: "0;0.25;0.5;0.75;1",
                            dur: "1s",
                            repeatCount: "indefinite",
                            begin: "-0.4s"
                        })
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "56.5",
                        y: "0",
                        width: "15",
                        height: "100",
                        fill: colors[3],
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill",
                            values: colors.join(";").toString(),
                            keyTimes: "0;0.25;0.5;0.75;1",
                            dur: "1s",
                            repeatCount: "indefinite",
                            begin: "-0.2s"
                        })
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                        x: "70.5",
                        y: "0",
                        width: "15",
                        height: "100",
                        fill: colors[4],
                        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                            attributeName: "fill",
                            values: colors.join(";").toString(),
                            keyTimes: "0;0.25;0.5;0.75;1",
                            dur: "1s",
                            repeatCount: "indefinite",
                            begin: "0s"
                        })
                    })
                ]
            })
        ]
    });
};






const $81e36fafa9b58989$export$4d299b491347818a = ({ visible: visible = true, width: width = "80", height: height = "80", backgroundColor: backgroundColor = "#ff6d00", color: color = "#fff", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "comment-loading" })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "comment-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z",
                fill: backgroundColor
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "30",
                cy: "47",
                r: "5",
                fill: color,
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "opacity",
                    calcMode: "linear",
                    values: "0;1;1",
                    keyTimes: "0;0.2;1",
                    dur: "1",
                    begin: "0s",
                    repeatCount: "indefinite"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "50",
                cy: "47",
                r: "5",
                fill: color,
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "opacity",
                    calcMode: "linear",
                    values: "0;0;1;1",
                    keyTimes: "0;0.2;0.4;1",
                    dur: "1",
                    begin: "0s",
                    repeatCount: "indefinite"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "70",
                cy: "47",
                r: "5",
                fill: color,
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "opacity",
                    calcMode: "linear",
                    values: "0;0;1;1",
                    keyTimes: "0;0.4;0.6;1",
                    dur: "1",
                    begin: "0s",
                    repeatCount: "indefinite"
                })
            })
        ]
    });
};






const $ffa7e3ac27a21a71$export$2ba1b65b747a57aa = ({ visible: visible = true, width: width = "80", height: height = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "blocks-loading" })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        className: wrapperClass,
        style: wrapperStyle,
        xmlns: (0, $eb040f10400edc38$export$98a285aab16ab26c),
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        "aria-label": ariaLabel,
        "data-testid": "blocks-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                children: "Blocks"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("desc", {
                children: "Animated representation of blocks"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "17",
                y: "17",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "40",
                y: "17",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.125s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "63",
                y: "17",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.25s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "17",
                y: "40",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.875s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "63",
                y: "40",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.375s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "17",
                y: "63",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.75s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "40",
                y: "63",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.625s",
                    calcMode: "discrete"
                })
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                x: "63",
                y: "63",
                width: "20",
                height: "20",
                fill: "#577c9b",
                children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                    attributeName: "fill",
                    values: "#0dceff;#577c9b;#577c9b",
                    keyTimes: "0;0.125;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0.5s",
                    calcMode: "discrete"
                })
            })
        ]
    });
};





const $1e82ee682f5b64b8$export$f3c41beb83007357 = ({ visible: visible = true, width: width = "80", height: height = "80", wrapperClass: wrapperClass = "", wrapperStyle: wrapperStyle = {}, ariaLabel: ariaLabel = "hourglass-loading", colors: colors = [
    "#306cce",
    "#72a1ed"
] })=>{
    return !visible ? null : /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: width,
        height: height,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 350 350",
        preserveAspectRatio: "xMidYMid",
        className: wrapperClass,
        style: wrapperStyle,
        "aria-label": ariaLabel,
        "data-testid": "hourglass-svg",
        ...(0, $84fda1e7e33cfd28$export$6bfda33bcd6c2d18),
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
                attributeName: "transform",
                type: "rotate",
                values: "0; 0; -30; 360; 360",
                keyTimes: "0; 0.40; 0.55; 0.65; 1",
                dur: "3s",
                begin: "0s",
                calcMode: "linear",
                repeatCount: "indefinite"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        fill: colors[0],
                        stroke: colors[0],
                        d: "M324.658,20.572v-2.938C324.658,7.935,316.724,0,307.025,0H40.313c-9.699,0-17.635,7.935-17.635,17.634v2.938     c0,9.699,7.935,17.634,17.635,17.634h6.814c3.5,0,3.223,3.267,3.223,4.937c0,19.588,8.031,42.231,14.186,56.698     c12.344,29.012,40.447,52.813,63.516,69.619c4.211,3.068,3.201,5.916,0.756,7.875c-22.375,17.924-51.793,40.832-64.271,70.16     c-6.059,14.239-13.934,36.4-14.18,55.772c-0.025,1.987,0.771,5.862-3.979,5.862h-6.064c-9.699,0-17.635,7.936-17.635,17.634v2.94     c0,9.698,7.935,17.634,17.635,17.634h266.713c9.699,0,17.633-7.936,17.633-17.634v-2.94c0-9.698-7.934-17.634-17.633-17.634     h-3.816c-7,0-6.326-5.241-6.254-7.958c0.488-18.094-4.832-38.673-12.617-54.135c-17.318-34.389-44.629-56.261-61.449-68.915     c-3.65-2.745-4.018-6.143,0-8.906c17.342-11.929,44.131-34.526,61.449-68.916c8.289-16.464,13.785-38.732,12.447-57.621     c-0.105-1.514-0.211-4.472,3.758-4.472h6.482C316.725,38.206,324.658,30.272,324.658,20.572z M270.271,93.216     c-16.113,31.998-41.967,54.881-64.455,68.67c-1.354,0.831-3.936,2.881-3.936,8.602v6.838c0,6.066,2.752,7.397,4.199,8.286     c22.486,13.806,48.143,36.636,64.191,68.508c7.414,14.727,11.266,32.532,10.885,46.702c-0.078,2.947,1.053,8.308-6.613,8.308     H72.627c-6.75,0-6.475-3.37-6.459-5.213c0.117-12.895,4.563-30.757,12.859-50.255c14.404-33.854,44.629-54.988,64.75-67.577     c0.896-0.561,2.629-1.567,2.629-6.922v-10.236c0-5.534-2.656-7.688-4.057-8.57c-20.098-12.688-49.256-33.618-63.322-66.681     c-8.383-19.702-12.834-37.732-12.861-50.657c-0.002-1.694,0.211-4.812,3.961-4.812h206.582c4.168,0,4.127,3.15,4.264,4.829     C282.156,57.681,278.307,77.257,270.271,93.216z"
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[1],
                                stroke: colors[1],
                                d: "M169.541,196.2l-68.748,86.03c-2.27,2.842-1.152,5.166,2.484,5.166h140.781c3.637,0,4.756-2.324,2.484-5.166     l-68.746-86.03C175.525,193.358,171.811,193.358,169.541,196.2z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "opacity",
                                values: "0; 0; 1; 1; 0; 0",
                                keyTimes: "0; 0.1; 0.4; 0.6; 0.61; 1",
                                dur: "3s",
                                repeatCount: "indefinite"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                fill: colors[1],
                                stroke: colors[1],
                                d: "M168.986,156.219c2.576,2.568,6.789,2.568,9.363,0l34.576-34.489c2.574-2.568,1.707-4.67-1.932-4.67H136.34     c-3.637,0-4.506,2.102-1.932,4.67L168.986,156.219z"
                            }),
                            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
                                attributeName: "opacity",
                                values: "1; 1; 0; 0; 1; 1",
                                keyTimes: "0; 0.1; 0.4; 0.65; 0.66; 1",
                                dur: "3s",
                                repeatCount: "indefinite"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/react-router-dom/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.AbortedDeferredError),
/* harmony export */   Await: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Await),
/* harmony export */   BrowserRouter: () => (/* binding */ BrowserRouter),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   MemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.MemoryRouter),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Navigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action),
/* harmony export */   Outlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Outlet),
/* harmony export */   Route: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Route),
/* harmony export */   Router: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Routes),
/* harmony export */   ScrollRestoration: () => (/* binding */ ScrollRestoration),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext),
/* harmony export */   UNSAFE_ErrorResponseImpl: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl),
/* harmony export */   UNSAFE_FetchersContext: () => (/* binding */ FetchersContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext),
/* harmony export */   UNSAFE_RouteContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext),
/* harmony export */   UNSAFE_ViewTransitionContext: () => (/* binding */ ViewTransitionContext),
/* harmony export */   UNSAFE_useRouteId: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId),
/* harmony export */   UNSAFE_useScrollRestoration: () => (/* binding */ useScrollRestoration),
/* harmony export */   createBrowserRouter: () => (/* binding */ createBrowserRouter),
/* harmony export */   createHashRouter: () => (/* binding */ createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createMemoryRouter),
/* harmony export */   createPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath),
/* harmony export */   createRoutesFromChildren: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromElements),
/* harmony export */   createSearchParams: () => (/* binding */ createSearchParams),
/* harmony export */   defer: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.defer),
/* harmony export */   generatePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.generatePath),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.isRouteErrorResponse),
/* harmony export */   json: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.json),
/* harmony export */   matchPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirectDocument),
/* harmony export */   renderMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.renderMatches),
/* harmony export */   resolvePath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.resolvePath),
/* harmony export */   unstable_HistoryRouter: () => (/* binding */ HistoryRouter),
/* harmony export */   unstable_usePrompt: () => (/* binding */ usePrompt),
/* harmony export */   unstable_useViewTransitionState: () => (/* binding */ useViewTransitionState),
/* harmony export */   useActionData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useActionData),
/* harmony export */   useAsyncError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncError),
/* harmony export */   useAsyncValue: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* binding */ useBeforeUnload),
/* harmony export */   useBlocker: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker),
/* harmony export */   useFetcher: () => (/* binding */ useFetcher),
/* harmony export */   useFetchers: () => (/* binding */ useFetchers),
/* harmony export */   useFormAction: () => (/* binding */ useFormAction),
/* harmony export */   useHref: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useHref),
/* harmony export */   useInRouterContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* binding */ useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLoaderData),
/* harmony export */   useLocation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation),
/* harmony export */   useMatch: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatch),
/* harmony export */   useMatches: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches),
/* harmony export */   useNavigate: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate),
/* harmony export */   useNavigation: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation),
/* harmony export */   useNavigationType: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigationType),
/* harmony export */   useOutlet: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutlet),
/* harmony export */   useOutletContext: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutletContext),
/* harmony export */   useParams: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useParams),
/* harmony export */   useResolvedPath: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath),
/* harmony export */   useRevalidator: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRevalidator),
/* harmony export */   useRouteError: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRoutes),
/* harmony export */   useSearchParams: () => (/* binding */ useSearchParams),
/* harmony export */   useSubmit: () => (/* binding */ useSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */







function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
     true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
  _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
  // no-op
}
function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
    unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
    unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy,
    window: opts == null ? void 0 : opts.window
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            // @ts-expect-error
            let error = new ErrorConstructor(val.message);
            // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
            // no-op - fall through and create a normal Error
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        // Wipe away the client-side stack trace.  Nothing to fill it in with
        // because we don't serialize SSR stack traces for security reasons
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
const ViewTransitionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isTransitioning: false
});
if (true) {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(new Map());
if (true) {
  FetchersContext.displayName = "Fetchers";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
const FLUSH_SYNC = "flushSync";
const flushSyncImpl = react_dom__WEBPACK_IMPORTED_MODULE_1__[FLUSH_SYNC];
const USE_ID = "useId";
const useIdImpl = react__WEBPACK_IMPORTED_MODULE_0__[USE_ID];
function startTransitionSafe(cb) {
  if (startTransitionImpl) {
    startTransitionImpl(cb);
  } else {
    cb();
  }
}
function flushSyncSafe(cb) {
  if (flushSyncImpl) {
    flushSyncImpl(cb);
  } else {
    cb();
  }
}
class Deferred {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = value => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = reason => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map());
  let {
    v7_startTransition
  } = future || {};
  let optInStartTransition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(cb => {
    if (v7_startTransition) {
      startTransitionSafe(cb);
    } else {
      cb();
    }
  }, [v7_startTransition]);
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState, _ref2) => {
    let {
      deletedFetchers,
      unstable_flushSync: flushSync,
      unstable_viewTransitionOpts: viewTransitionOpts
    } = _ref2;
    deletedFetchers.forEach(key => fetcherData.current.delete(key));
    newState.fetchers.forEach((fetcher, key) => {
      if (fetcher.data !== undefined) {
        fetcherData.current.set(key, fetcher.data);
      }
    });
    let isViewTransitionUnavailable = router.window == null || router.window.document == null || typeof router.window.document.startViewTransition !== "function";
    // If this isn't a view transition or it's not available in this browser,
    // just update and be done with it
    if (!viewTransitionOpts || isViewTransitionUnavailable) {
      if (flushSync) {
        flushSyncSafe(() => setStateImpl(newState));
      } else {
        optInStartTransition(() => setStateImpl(newState));
      }
      return;
    }
    // flushSync + startViewTransition
    if (flushSync) {
      // Flush through the context to mark DOM elements as transition=ing
      flushSyncSafe(() => {
        // Cancel any pending transitions
        if (transition) {
          renderDfd && renderDfd.resolve();
          transition.skipTransition();
        }
        setVtContext({
          isTransitioning: true,
          flushSync: true,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      });
      // Update the DOM
      let t = router.window.document.startViewTransition(() => {
        flushSyncSafe(() => setStateImpl(newState));
      });
      // Clean up after the animation completes
      t.finished.finally(() => {
        flushSyncSafe(() => {
          setRenderDfd(undefined);
          setTransition(undefined);
          setPendingState(undefined);
          setVtContext({
            isTransitioning: false
          });
        });
      });
      flushSyncSafe(() => setTransition(t));
      return;
    }
    // startTransition + startViewTransition
    if (transition) {
      // Interrupting an in-progress transition, cancel and let everything flush
      // out, and then kick off a new transition from the interruption state
      renderDfd && renderDfd.resolve();
      transition.skipTransition();
      setInterruption({
        state: newState,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    } else {
      // Completed navigation update with opted-in view transitions, let 'er rip
      setPendingState(newState);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: viewTransitionOpts.currentLocation,
        nextLocation: viewTransitionOpts.nextLocation
      });
    }
  }, [router.window, transition, renderDfd, fetcherData, optInStartTransition]);
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  // When we start a view transition, create a Deferred we can use for the
  // eventual "completed" render
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  // Once the deferred is created, kick off startViewTransition() to update the
  // DOM and then wait on the Deferred to resolve (indicating the DOM update has
  // happened)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition = router.window.document.startViewTransition(async () => {
        optInStartTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition.finished.finally(() => {
        setRenderDfd(undefined);
        setTransition(undefined);
        setPendingState(undefined);
        setVtContext({
          isTransitioning: false
        });
      });
      setTransition(transition);
    }
  }, [optInStartTransition, pendingState, renderDfd, router.window]);
  // When the new location finally renders and is committed to the DOM, this
  // effect will run to resolve the transition
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  // If we get interrupted with a new navigation during a transition, we skip
  // the active transition, let it cleanup, then kick it off again here
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(undefined);
    }
  }, [vtContext.isTransitioning, interruption]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
     true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);
  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, {
    value: fetcherData.current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, {
    value: vtContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator,
    future: {
      v7_relativeSplatPath: router.future.v7_relativeSplatPath
    }
  }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    future: router.future,
    state: state
  }) : fallbackElement))))), null);
}
function DataRoutes(_ref3) {
  let {
    routes,
    future,
    state
  } = _ref3;
  return (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window
  } = _ref4;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window
  } = _ref5;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref6) {
  let {
    basename,
    children,
    future,
    history
  } = _ref6;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      unstable_viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
         true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    unstable_viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if (true) {
  Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      unstable_viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
  let {
    navigator,
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && unstable_viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(nextLocationPathname, basename) || nextLocationPathname;
  }
  // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
  // we're looking for a slash _after_ what's in `to`.  For example:
  //
  // <NavLink to="/users"> and <NavLink to="/users/">
  // both want to look for a / at index 6 to match URL `/users/matt`
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    unstable_viewTransition: unstable_viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref9, forwardedRef) => {
  let {
      fetcherKey,
      navigate,
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      unstable_viewTransition
    } = _ref9,
    props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      unstable_viewTransition
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (true) {
  Form.displayName = "Form";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function ScrollRestoration(_ref10) {
  let {
    getKey,
    storageKey
  } = _ref10;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (true) {
  ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetcher"] = "useFetcher";
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext);
  !ctx ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
  !state ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    unstable_viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        unstable_viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, unstable_viewTransition]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
   true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let currentRouteId = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId)();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        unstable_flushSync: options.unstable_flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        unstable_flushSync: options.unstable_flushSync,
        unstable_viewTransition: options.unstable_viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
  !routeContext ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : 0 : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(action ? action : ".", {
    relative
  }));
  // If no action was specified, browsers will persist current search params
  // when determining the path, so match that behavior
  // https://github.com/remix-run/remix/issues/927
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove any included ?index param
    // since it might not apply to our contextual route.  We add it back based
    // on match.route.index below
    let params = new URLSearchParams(path.search);
    if (params.has("index") && params.get("index") === "") {
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.joinPaths)([basename, path.pathname]);
  }
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
}
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */
function useFetcher(_temp3) {
  var _route$matches;
  let {
    key
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let state = useDataRouterState(DataRouterStateHook.UseFetcher);
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !fetcherData ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext") : 0 : void 0;
  !route ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : 0 : void 0;
  !(routeId != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  // Fetcher key handling
  // OK to call conditionally to feature detect `useId`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let defaultKey = useIdImpl ? useIdImpl() : "";
  let [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || defaultKey);
  if (key && key !== fetcherKey) {
    setFetcherKey(key);
  } else if (!fetcherKey) {
    // We will only fall through here when `useId` is not available
    setFetcherKey(getUniqueFetcherId());
  }
  // Registration/cleanup
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    router.getFetcher(fetcherKey);
    return () => {
      // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
      // will not delete immediately but instead queue up a delete after the
      // fetcher returns to an `idle` state
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  // Fetcher additions
  let load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((href, opts) => {
    !routeId ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : 0 : void 0;
    router.fetch(fetcherKey, routeId, href, opts);
  }, [fetcherKey, routeId, router]);
  let submitImpl = useSubmit();
  let submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((target, opts) => {
    submitImpl(target, _extends({}, opts, {
      navigate: false,
      fetcherKey
    }));
  }, [fetcherKey, submitImpl]);
  let FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, _extends({}, props, {
        navigate: false,
        fetcherKey: fetcherKey,
        ref: ref
      }));
    });
    if (true) {
      FetcherForm.displayName = "fetcher.Form";
    }
    return FetcherForm;
  }, [fetcherKey]);
  // Exposed FetcherWithComponents
  let fetcher = state.fetchers.get(fetcherKey) || react_router__WEBPACK_IMPORTED_MODULE_2__.IDLE_FETCHER;
  let data = fetcherData.get(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form: FetcherForm,
    submit,
    load
  }, fetcher, {
    data
  }), [FetcherForm, submit, load, fetcher, data]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return Array.from(state.fetchers.entries()).map(_ref11 => {
    let [key, fetcher] = _ref11;
    return _extends({}, fetcher, {
      key
    });
  });
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
function useScrollRestoration(_temp4) {
  let {
    getKey,
    storageKey
  } = _temp4 === void 0 ? {} : _temp4;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation)();
  // Trigger manual scroll restoration while we're active
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  // Save positions on pagehide
  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    try {
      sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    } catch (error) {
       true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : 0;
    }
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  // Read in any saved scroll locations
  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
        // no-op, use default empty object
      }
    }, [storageKey]);
    // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches) => getKey( // Strip the basename to match useLocation()
      _extends({}, location, {
        pathname: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(location.pathname, basename) || location.pathname
      }), matches) : getKey;
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      }
      // been here before, scroll to it
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      // Don't reset if this navigation opted out
      if (preventScrollReset === true) {
        return;
      }
      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */
function usePrompt(_ref12) {
  let {
    when,
    message
  } = _ref12;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        // This timeout is needed to avoid a weird "race" on POP navigations
        // between the `window.history` revert navigation and the result of
        // `window.confirm`
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
  !(vtContext != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : 0 : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" unstable_viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" unstable_viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, nextPath) != null || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, currentPath) != null;
}
//#endregion


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-router/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router/dist/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortedDeferredError: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   Await: () => (/* binding */ Await),
/* harmony export */   MemoryRouter: () => (/* binding */ MemoryRouter),
/* harmony export */   Navigate: () => (/* binding */ Navigate),
/* harmony export */   NavigationType: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   Outlet: () => (/* binding */ Outlet),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* binding */ Routes),
/* harmony export */   UNSAFE_DataRouterContext: () => (/* binding */ DataRouterContext),
/* harmony export */   UNSAFE_DataRouterStateContext: () => (/* binding */ DataRouterStateContext),
/* harmony export */   UNSAFE_LocationContext: () => (/* binding */ LocationContext),
/* harmony export */   UNSAFE_NavigationContext: () => (/* binding */ NavigationContext),
/* harmony export */   UNSAFE_RouteContext: () => (/* binding */ RouteContext),
/* harmony export */   UNSAFE_mapRouteProperties: () => (/* binding */ mapRouteProperties),
/* harmony export */   UNSAFE_useRouteId: () => (/* binding */ useRouteId),
/* harmony export */   UNSAFE_useRoutesImpl: () => (/* binding */ useRoutesImpl),
/* harmony export */   createMemoryRouter: () => (/* binding */ createMemoryRouter),
/* harmony export */   createPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   createRoutesFromChildren: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   defer: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   generatePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   isRouteErrorResponse: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   json: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   matchPath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   matchRoutes: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   parsePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   redirect: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   redirectDocument: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument),
/* harmony export */   renderMatches: () => (/* binding */ renderMatches),
/* harmony export */   resolvePath: () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   useActionData: () => (/* binding */ useActionData),
/* harmony export */   useAsyncError: () => (/* binding */ useAsyncError),
/* harmony export */   useAsyncValue: () => (/* binding */ useAsyncValue),
/* harmony export */   useBlocker: () => (/* binding */ useBlocker),
/* harmony export */   useHref: () => (/* binding */ useHref),
/* harmony export */   useInRouterContext: () => (/* binding */ useInRouterContext),
/* harmony export */   useLoaderData: () => (/* binding */ useLoaderData),
/* harmony export */   useLocation: () => (/* binding */ useLocation),
/* harmony export */   useMatch: () => (/* binding */ useMatch),
/* harmony export */   useMatches: () => (/* binding */ useMatches),
/* harmony export */   useNavigate: () => (/* binding */ useNavigate),
/* harmony export */   useNavigation: () => (/* binding */ useNavigation),
/* harmony export */   useNavigationType: () => (/* binding */ useNavigationType),
/* harmony export */   useOutlet: () => (/* binding */ useOutlet),
/* harmony export */   useOutletContext: () => (/* binding */ useOutletContext),
/* harmony export */   useParams: () => (/* binding */ useParams),
/* harmony export */   useResolvedPath: () => (/* binding */ useResolvedPath),
/* harmony export */   useRevalidator: () => (/* binding */ useRevalidator),
/* harmony export */   useRouteError: () => (/* binding */ useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* binding */ useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (true) {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}

/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */
function useMatch(pattern) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, pathname), [pathname, pattern]);
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}

/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    // Determine the remaining pathname by removing the # of URL segments the
    // parentPathnameBase has, instead of removing based on character count.
    // This is because we can't guarantee that incoming/outgoing encodings/
    // decodings will match exactly.
    // We decode paths before matching on a per-segment basis with
    // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
    // match what `window.location.pathname` would reflect.  Those don't 100%
    // align when it comes to encoded URI characters such as % and &.
    //
    // So we may end up with:
    //   pathname:           "/descendant/a%25b/match"
    //   parentPathnameBase: "/descendant/a%b"
    //
    // And the direct substring removal approach won't work :/
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  if (true) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState, future);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (true) {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error !== undefined ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
    !(errorIndex >= 0) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : 0 : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  // If we're in a partial hydration mode, detect if we need to render down to
  // a given HydrateFallback while we load the rest of the hydration data
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      // Track the deepest fallback up until the first route without data
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
        if (match.route.lazy || needsToRunLoader) {
          // We found the first route that's not ready to render (waiting on
          // lazy, or has a loader that hasn't run yet).  Flag that we need to
          // render a fallback and render up until the appropriate fallback
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    // Only data routers handle errors/fallbacks
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : undefined;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  !ctx ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  !state ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}

/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}

/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  }), [dataRouterContext.router.revalidate, state.revalidation]);
}

/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => matches.map(m => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [matches, loaderData]);
}

/**
 * Returns the loader data for the nearest ancestor Route loader
 */
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}

/**
 * Returns the loaderData for the given routeId
 */
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}

/**
 * Returns the action data for the nearest ancestor Route action
 */
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  return state.actionData ? state.actionData[routeId] : undefined;
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error !== undefined) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}

/**
 * Returns the error from the nearest ancestor `<Await />` value
 */
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;

/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(arg => {
    if (typeof shouldBlock !== "function") {
      return !!shouldBlock;
    }
    if (basename === "/") {
      return shouldBlock(arg);
    }

    // If they provided us a function and we've got an active basename, strip
    // it from the locations we expose to the user to match the behavior of
    // useLocation
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends({}, currentLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends({}, nextLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);

  // This effect is in charge of blocker key assignment and deletion (which is
  // tightly coupled to the key)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);

  // This effect handles assigning the blockerFunction.  This is to handle
  // unstable blocker function identities, and happens only after the prior
  // effect so we don't get an orphaned blockerFunction in the router with a
  // key of "".  Until then we just have the IDLE_BLOCKER.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);

  // Prefer the blocker from `state` not `router.state` since DataRouterContext
  // is memoized so this ensures we update on blocker state updates
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message) : 0;
  }
}

/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    if (v7_startTransition && startTransitionImpl) {
      startTransitionImpl(() => setStateImpl(newState));
    } else {
      setStateImpl(newState);
    }
  }, [setStateImpl, v7_startTransition]);

  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);

  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator,
    future: {
      v7_relativeSplatPath: router.future.v7_relativeSplatPath
    }
  }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    future: router.future,
    state: state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes,
    future,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state, future);
}
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future
  } = _ref3;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    future,
    static: isStatic
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
  return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = "_error" in promise ? AwaitRenderStatus.error : "_data" in promise ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    !(!element.props.index || !element.props.children) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : 0 : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * Renders the result of `matchRoutes()` into a React element.
 */
function renderMatches(matches) {
  return _renderMatches(matches);
}

function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (true) {
      if (route.element) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.HydrateFallback) {
    if (true) {
      if (route.hydrateFallbackElement) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - " + "`HydrateFallback` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
      HydrateFallback: undefined
    });
  }
  if (route.ErrorBoundary) {
    if (true) {
      if (route.errorElement) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties,
    unstable_dataStrategy: opts == null ? void 0 : opts.unstable_dataStrategy
  }).initialize();
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerStyleSheet: () => (/* binding */ yt),
/* harmony export */   StyleSheetConsumer: () => (/* binding */ ze),
/* harmony export */   StyleSheetContext: () => (/* binding */ $e),
/* harmony export */   StyleSheetManager: () => (/* binding */ Ge),
/* harmony export */   ThemeConsumer: () => (/* binding */ et),
/* harmony export */   ThemeContext: () => (/* binding */ Qe),
/* harmony export */   ThemeProvider: () => (/* binding */ nt),
/* harmony export */   __PRIVATE__: () => (/* binding */ vt),
/* harmony export */   createGlobalStyle: () => (/* binding */ ht),
/* harmony export */   css: () => (/* binding */ ct),
/* harmony export */   "default": () => (/* binding */ pt),
/* harmony export */   isStyledComponent: () => (/* binding */ se),
/* harmony export */   keyframes: () => (/* binding */ ft),
/* harmony export */   styled: () => (/* binding */ pt),
/* harmony export */   useTheme: () => (/* binding */ tt),
/* harmony export */   version: () => (/* binding */ v),
/* harmony export */   withTheme: () => (/* binding */ mt)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.11",g="/*!sc*/\n",S="undefined"!=typeof window&&"HTMLElement"in window,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),b={},E=/invalid hook call/i,N=new Set,P=function(t,n){if(true){var o=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];E.test(t)?(a=!1,N.delete(s)):i.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))},(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),a&&!N.has(s)&&(console.warn(s),N.add(s))}catch(e){E.test(e.message)&&N.delete(s)}finally{console.error=i}}},_=Object.freeze([]),C=Object.freeze({});function I(e,t,n){return void 0===n&&(n=C),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(e){return e.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(e){return String.fromCharCode(e+(e>25?39:97))};function x(e){var t,n="";for(t=Math.abs(e);t>k;t=t/k|0)n=j(t%k)+n;return(j(t%k)+n).replace(T,"$1-$2")}var V,F=5381,M=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$=function(e){return M(F,e)};function z(e){return x($(e)>>>0)}function B(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function L(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var G="function"==typeof Symbol&&Symbol.for,Y=G?Symbol.for("react.memo"):60115,W=G?Symbol.for("react.forward_ref"):60112,q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[W]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y]=U,V);function X(e){return("type"in(t=e)&&t.type.$$typeof)===Y?U:"$$typeof"in e?J[e.$$typeof]:q;var t}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function oe(e,t,n){if("string"!=typeof t){if(ne){var o=te(t);o&&o!==ne&&oe(e,o,n)}var r=K(t);Q&&(r=r.concat(Q(t)));for(var s=X(e),i=X(t),a=0;a<r.length;++a){var c=r[a];if(!(c in H||n&&n[c]||i&&c in i||s&&c in s)){var l=ee(t,c);try{Z(e,c,l)}catch(e){}}}}return e}function re(e){return"function"==typeof e}function se(e){return"object"==typeof e&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ae(e,t){if(0===e.length)return"";for(var n=e[0],o=1;o<e.length;o++)n+=t?t+e[o]:e[o];return n}function ce(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function le(e,t,n){if(void 0===n&&(n=!1),!n&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var o=0;o<t.length;o++)e[o]=le(e[o],t[o]);else if(ce(t))for(var o in t)e[o]=le(e[o],t[o]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t})}var pe= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:0;function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],o=[],r=1,s=e.length;r<s;r+=1)o.push(e[r]);return o.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function he(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return false?0:new Error(de.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([pe[t]],n,!1)).trim())}var fe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,r=o;e>=r;)if((r<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(r),this.groupSizes.set(n),this.length=r;for(var s=o;s<r;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),o=n+t;this.groupSizes[e]=0;for(var r=n;r<o;r++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],o=this.indexOfGroup(e),r=o+n,s=o;s<r;s++)t+="".concat(this.tag.getRule(s)).concat(g);return t},e}(),me=1<<30,ye=new Map,ve=new Map,ge=1,Se=function(e){if(ye.has(e))return ye.get(e);for(;ve.has(ge);)ge++;var t=ge++;if( true&&((0|t)<0||t>me))throw he(16,"".concat(t));return ye.set(e,t),ve.set(t,e),t},we=function(e,t){ge=t+1,ye.set(e,t),ve.set(t,e)},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(e,t,n){for(var o,r=n.split(","),s=0,i=r.length;s<i;s++)(o=r[s])&&e.registerName(t,o)},Pe=function(e,t){for(var n,o=(null!==(n=t.textContent)&&void 0!==n?n:"").split(g),r=[],s=0,i=o.length;s<i;s++){var a=o[s].trim();if(a){var c=a.match(Ee);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(we(u,l),Ne(e,u,c[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(a)}}};function _e(){return true?__webpack_require__.nc:0}var Ce=function(e){var t=document.head,n=e||t,o=document.createElement("style"),r=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==r?r.nextSibling:null;o.setAttribute(f,m),o.setAttribute(y,v);var i=_e();return i&&o.setAttribute("nonce",i),n.insertBefore(o,s),o},Ie=function(){function e(e){this.element=Ce(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,o=t.length;n<o;n++){var r=t[n];if(r.ownerNode===e)return r}throw he(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ae=function(){function e(e){this.element=Ce(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Oe=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),De=S,Re={isServer:!S,useCSSOMInjection:!w},Te=function(){function e(e,n,o){void 0===e&&(e=C),void 0===n&&(n={});var r=this;this.options=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},Re),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&S&&De&&(De=!1,function(e){for(var t=document.querySelectorAll(be),n=0,o=t.length;n<o;n++){var r=t[n];r&&r.getAttribute(f)!==m&&(Pe(e,r),r.parentNode&&r.parentNode.removeChild(r))}}(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,o="",r=function(n){var r=function(e){return ve.get(e)}(n);if(void 0===r)return"continue";var s=e.names.get(r),i=t.getGroup(n);if(void 0===s||0===i.length)return"continue";var a="".concat(f,".g").concat(n,'[id="').concat(r,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),o+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(g)},s=0;s<n;s++)r(s);return o}(r)})}return e.registerId=function(e){return Se(e)},e.prototype.reconstructWithOptions=function(n,o){return void 0===o&&(o=!0),new e((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Oe(n):t?new Ie(n):new Ae(n)}(this.options),new fe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ke=/&/g,je=/^\s*\/\/.*$/gm;function xe(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=xe(e.children,t)),e})}function Ve(e){var t,n,o,r=void 0===e?C:e,s=r.options,i=void 0===s?C:s,a=r.plugins,c=void 0===a?_:a,l=function(e,o,r){return r.startsWith(n)&&r.endsWith(n)&&r.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(ke,n).replace(o,l))}),i.prefix&&u.push(stylis__WEBPACK_IMPORTED_MODULE_6__.prefixer),u.push(stylis__WEBPACK_IMPORTED_MODULE_7__.stringify);var p=function(e,r,s,a){void 0===r&&(r=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=r,o=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(je,""),l=stylis__WEBPACK_IMPORTED_MODULE_8__.compile(s||r?"".concat(s," ").concat(r," { ").concat(c," }"):c);i.namespace&&(l=xe(l,i.namespace));var p=[];return stylis__WEBPACK_IMPORTED_MODULE_7__.serialize(l,stylis__WEBPACK_IMPORTED_MODULE_6__.middleware(u.concat(stylis__WEBPACK_IMPORTED_MODULE_6__.rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||he(15),M(e,t.name)},F).toString():"",p}var Fe=new Te,Me=Ve(),$e=react__WEBPACK_IMPORTED_MODULE_1___default().createContext({shouldForwardProp:void 0,styleSheet:Fe,stylis:Me}),ze=$e.Consumer,Be=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0);function Le(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)($e)}function Ge(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],r=t[1],c=Le().styleSheet,l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,c]),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return Ve({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var d=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:l,stylis:u}},[e.shouldForwardProp,l,u]);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement($e.Provider,{value:d},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Be.Provider,{value:u},e.children))}var Ye=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Me);var o=n.name+t.hash;e.hasNameForId(n.id,o)||e.insertRules(n.id,o,t(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw he(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Me),this.name+e.hash},e}(),We=function(e){return e>="A"&&e<="Z"};function qe(e){for(var t="",n=0;n<e.length;n++){var o=e[n];if(1===n&&"-"===o&&"-"===e[0])return e;We(o)?t+="-"+o.toLowerCase():t+=o}return t.startsWith("ms-")?"-"+t:t}var He=function(e){return null==e||!1===e||""===e},Ue=function(t){var n,o,r=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!He(i)&&(Array.isArray(i)&&i.isCss||re(i)?r.push("".concat(qe(s),":"),i,";"):ce(i)?r.push.apply(r,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)(["".concat(s," {")],Ue(i),!1),["}"],!1)):r.push("".concat(qe(s),": ").concat((n=s,null==(o=i)||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||n in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"]||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return r};function Je(e,t,n,o){if(He(e))return[];if(se(e))return[".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var r=e(t);return false||"object"!=typeof r||Array.isArray(r)||r instanceof Ye||ce(r)||null===r||console.error("".concat(B(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Je(r,t,n,o)}var s;return e instanceof Ye?n?(e.inject(n,o),[e.getName(o)]):[e]:ce(e)?Ue(e):Array.isArray(e)?Array.prototype.concat.apply(_,e.map(function(e){return Je(e,t,n,o)})):[e.toString()]}function Xe(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!se(n))return!1}return!0}var Ze=$(v),Ke=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=M(Ze,t),this.baseStyle=n,Te.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else{var r=ae(Je(this.rules,e,t,n)),s=x(M(this.baseHash,r)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(r,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i)}o=ie(o,s),this.staticRulesId=s}else{for(var a=M(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u, true&&(a=M(a,u));else if(u){var p=ae(Je(u,e,t,n));a=M(a,p+l),c+=p}}if(c){var d=x(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),o=ie(o,d)}}return o},e}(),Qe=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(void 0),et=Qe.Consumer;function tt(){var e=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Qe);if(!e)throw he(18);return e}function nt(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Qe),r=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function(){return function(e,n){if(!e)throw he(14);if(re(e)){var o=e(n);if( true&&(null===o||Array.isArray(o)||"object"!=typeof o))throw he(7);return o}if(Array.isArray(e)||"object"!=typeof e)throw he(8);return n?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),e):e}(e.theme,n)},[e.theme,n]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Qe.Provider,{value:r},e.children):null}var ot={},rt=new Set;function st(e,r,s){var i=se(e),a=e,c=!L(e),p=r.attrs,d=void 0===p?_:p,h=r.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":R(e);ot[n]=(ot[n]||0)+1;var o="".concat(n,"-").concat(z(v+n+ot[n]));return t?"".concat(t,"-").concat(o):o}(r.displayName,r.parentComponentId):h,m=r.displayName,y=void 0===m?function(e){return L(e)?"styled.".concat(e):"Styled(".concat(B(e),")")}(e):m,g=r.displayName&&r.componentId?"".concat(R(r.displayName),"-").concat(r.componentId):r.componentId||f,S=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,w=r.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(r.shouldForwardProp){var E=r.shouldForwardProp;w=function(e,t){return b(e,t)&&E(e,t)}}else w=b}var N=new Ke(s,g,i?a.componentStyle:void 0);function O(e,r){return function(e,r,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Qe),m=Le(),y=e.shouldForwardProp||m.shouldForwardProp; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(d);var v=I(r,f,c)||C,g=function(e,n,o){for(var r,s=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{className:void 0,theme:o}),i=0;i<e.length;i+=1){var a=re(r=e[i])?r(s):r;for(var c in a)s[c]="className"===c?ie(s[c],a[c]):"style"===c?(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},s[c]),a[c]):a[c]}return n.className&&(s.className=ie(s.className,n.className)),s}(i,r,v),S=g.as||h,w={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?w.as=g.forwardedAs:y&&!y(b,S)||(w[b]=g[b],y||"development"!=="development"||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__["default"])(b)||rt.has(b)||!A.has(S)||(rt.add(b),console.warn('styled-components: it looks like an unknown prop "'.concat(b,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var E=function(e,t){var n=Le(),o=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(o),o}(a,g); true&&e.warnTooManyClasses&&e.warnTooManyClasses(E);var N=ie(p,d);return E&&(N+=" "+E),g.className&&(N+=" "+g.className),w[L(S)&&!A.has(S)?"class":"className"]=N,w.ref=s,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(S,w)}(D,e,r)}O.displayName=y;var D=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O);return D.attrs=S,D.componentStyle=N,D.displayName=y,D.shouldForwardProp=w,D.foldedComponentIds=i?ie(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=g,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=0,r=t;o<r.length;o++)le(e,r[o],!0);return e}({},a.defaultProps,e):e}}), true&&(P(y,g),D.warnTooManyClasses=function(e,t){var n={},o=!1;return function(r){if(!o&&(n[r]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),o=!0,n={}}}}(y,g)),ue(D,function(){return".".concat(D.styledComponentId)}),c&&oe(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function it(e,t){for(var n=[e[0]],o=0,r=t.length;o<r;o+=1)n.push(t[o],e[o+1]);return n}var at=function(e){return Object.assign(e,{isCss:!0})};function ct(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(re(t)||ce(t))return at(Je(it(_,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!0))));var r=t;return 0===n.length&&1===r.length&&"string"==typeof r[0]?Je(r):at(Je(it(r,n)))}function lt(n,o,r){if(void 0===r&&(r=C),!o)throw he(1,o);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(o,r,ct.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],s,!1)))};return s.attrs=function(e){return lt(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),{attrs:Array.prototype.concat(r.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return lt(n,o,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r),e))},s}var ut=function(e){return lt(st,e)},pt=ut;A.forEach(function(e){pt[e]=ut(e)});var dt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Xe(e),Te.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,o){var r=o(ae(Je(this.rules,t,n,o)),""),s=this.componentId+e;n.insertRules(s,s,r)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,o){e>2&&Te.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,o)},e}();function ht(n){for(var r=[],s=1;s<arguments.length;s++)r[s-1]=arguments[s];var i=ct.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([n],r,!1)),a="sc-global-".concat(z(JSON.stringify(i))),c=new dt(i,a); true&&P(a);var l=function(e){var t=Le(),n=react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Qe),r=react__WEBPACK_IMPORTED_MODULE_1___default().useRef(t.styleSheet.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component ".concat(a," was given child JSX. createGlobalStyle does not render children.")), true&&i.some(function(e){return"string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.styleSheet.server&&u(r,e,t.styleSheet,n,t.stylis),react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(function(){if(!t.styleSheet.server)return u(r,e,t.styleSheet,n,t.stylis),function(){return c.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function u(e,n,o,r,s){if(c.isStatic)c.renderStyles(e,b,o,s);else{var i=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n),{theme:I(n,r,l.defaultProps)});c.renderStyles(e,i,o,s)}}return react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function ft(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o]; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var r=ae(ct.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray)([t],n,!1))),s=z(r);return new Ye(s,r)}function mt(e){var n=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(function(n,r){var s=I(n,react__WEBPACK_IMPORTED_MODULE_1___default().useContext(Qe),e.defaultProps);return true&&void 0===s&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(B(e),'"')),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},n,{theme:s,ref:r}))});return n.displayName="WithTheme(".concat(B(e),")"),oe(n,e)}var yt=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=_e(),o=ae([n&&'nonce="'.concat(n,'"'),"".concat(f,'="true"'),"".concat(y,'="').concat(v,'"')].filter(Boolean)," ");return"<style ".concat(o,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw he(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw he(2);var r=((n={})[f]="",n[y]=v,n.dangerouslySetInnerHTML={__html:e.instance.toString()},n),s=_e();return s&&(r.nonce=s),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Te({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw he(2);return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Ge,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw he(3)},e}(),vt={StyleSheet:Te,mainSheet:Fe}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var gt="__sc-".concat(f,"__"); true&&"undefined"!=typeof window&&(window[gt]||(window[gt]=0),1===window[gt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[gt]+=1);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Description: () => (/* binding */ w),
/* harmony export */   useDescribedBy: () => (/* binding */ G),
/* harmony export */   useDescriptions: () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/disabled.js */ "./node_modules/@headlessui/react/dist/internal/disabled.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);a.displayName="DescriptionContext";function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a);if(r===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f),e}return r}function G(){var r,e;return(e=(r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a))==null?void 0:r.value)!=null?e:void 0}function U(){let[r,e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(t){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e(s=>[...s,n]),()=>e(s=>{let o=s.slice(),p=o.indexOf(n);return p!==-1&&o.splice(p,1),o}))),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:t.slot,name:t.name,props:t.props,value:t.value}),[i,t.slot,t.name,t.props,t.value]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:l},t.children)},[e])]}let S="p";function C(r,e){let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),t=(0,_internal_disabled_js__WEBPACK_IMPORTED_MODULE_2__.useDisabled)(),{id:i=`headlessui-description-${d}`,...l}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(e);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>n.register(i),[i,n.register]);let o=t||!1,p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...n.slot,disabled:o}),[n.slot,o]),D={ref:s,...n.props,id:i};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:D,theirProps:l,slot:p,defaultTag:S,name:n.name||"Description"})}let _=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(C),w=Object.assign(_,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/dialog/dialog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ _t),
/* harmony export */   DialogDescription: () => (/* binding */ At),
/* harmony export */   DialogPanel: () => (/* binding */ Ve),
/* harmony export */   DialogTitle: () => (/* binding */ qe)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-id.js */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-inert-others.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js");
/* harmony import */ var _hooks_use_is_touch_device_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-is-touch-device.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js");
/* harmony import */ var _hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-on-disappear.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-root-containers.js */ "./node_modules/@headlessui/react/dist/hooks/use-root-containers.js");
/* harmony import */ var _hooks_use_scroll_lock_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-scroll-lock.js */ "./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_close_provider_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../internal/close-provider.js */ "./node_modules/@headlessui/react/dist/internal/close-provider.js");
/* harmony import */ var _internal_form_fields_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../internal/form-fields.js */ "./node_modules/@headlessui/react/dist/internal/form-fields.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _internal_stack_context_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../internal/stack-context.js */ "./node_modules/@headlessui/react/dist/internal/stack-context.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../focus-trap/focus-trap.js */ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _portal_portal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/portal.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
"use client";var He=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(He||{}),Ne=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(Ne||{});let ke={[0](o,t){return o.titleId===t.id?o:{...o,titleId:t.id}}},b=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);b.displayName="DialogContext";function M(o){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(b);if(t===null){let r=new Error(`<${o} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,M),r}return t}function Ue(o,t){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t.type,ke,o,t)}let $e="div",je=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderFeatures.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderFeatures.Static;function We(o,t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:d=`headlessui-dialog-${r}`,open:i,onClose:s,initialFocus:f,role:a="dialog",autoFocus:D=!0,__demoMode:p=!1,...G}=o,[R,H]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),N=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(N.current||(N.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let P=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.useOpenClosed)();i===void 0&&P!==null&&(i=(P&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Open);let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),z=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u,t),y=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_5__.useOwnerDocument)(u),k=o.hasOwnProperty("open")||P!==null,U=o.hasOwnProperty("onClose");if(!k&&!U)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!k)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!U)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof i!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${i}`);if(typeof s!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);let n=i?0:1,[E,Q]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ue,{titleId:null,descriptionId:null,panelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>s(!1)),$=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(e=>Q({type:0,id:e})),v=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)()?n===0:!1,C=R>1,Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(b)!==null,[ee,te]=(0,_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.useNestedPortals)(),oe={get current(){var e;return(e=E.panelRef.current)!=null?e:u.current}},{resolveContainers:S,mainTreeNodeRef:re,MainTreeNode:le}=(0,_hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_9__.useRootContainers)({portals:ee,defaultContainers:[oe]}),ne=C?"parent":"leaf",j=P!==null?(P&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Closing)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_3__.State.Closing:!1,ae=(()=>C||j?!1:v)();(0,_hooks_use_inert_others_js__WEBPACK_IMPORTED_MODULE_10__.useInertOthers)({allowed:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var e,g;return[(g=(e=u.current)==null?void 0:e.closest("[data-headlessui-portal]"))!=null?g:null]}),disallowed:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{var e,g;return[(g=(e=re.current)==null?void 0:e.closest("body > *:not(#headlessui-portal-root)"))!=null?g:null]})},p?!1:ae);let ie=(()=>!(!v||C))();(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_11__.useOutsideClick)(S,e=>{e.preventDefault(),m()},ie);let se=(()=>!(C||n!==0))();(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_12__.useEventListener)(y==null?void 0:y.defaultView,"keydown",e=>{se&&(e.defaultPrevented||e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_13__.Keys.Escape&&(e.preventDefault(),e.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),m()))});let pe=(()=>!(j||n!==0||Z))();(0,_hooks_use_scroll_lock_js__WEBPACK_IMPORTED_MODULE_14__.useScrollLock)(y,p?!1:pe,S),(0,_hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_15__.useOnDisappear)(u,m,n===0);let[ue,de]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_16__.useDescriptions)(),fe=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:n,close:m,setTitleId:$},E],[n,E,m,$]),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:n===0}),[n]),ge={ref:z,id:d,role:a,tabIndex:-1,"aria-modal":p?void 0:n===0?!0:void 0,"aria-labelledby":E.titleId,"aria-describedby":ue},Te=!(0,_hooks_use_is_touch_device_js__WEBPACK_IMPORTED_MODULE_17__.useIsTouchDevice)(),A=v?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(ne,{parent:_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.RestoreFocus,leaf:_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.All&~_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.FocusLock}):_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.None;return D&&(A|=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.AutoFocus),Te||(A&=~_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.InitialFocus),p&&(A=_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrapFeatures.None),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_19__.StackProvider,{type:"Dialog",enabled:n===0,element:u,onUpdate:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)((e,g)=>{g==="Dialog"&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(e,{[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_19__.StackMessage.Add]:()=>H(x=>x+1),[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_19__.StackMessage.Remove]:()=>H(x=>x-1)})})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_20__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.Portal,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(b.Provider,{value:fe},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_portal_portal_js__WEBPACK_IMPORTED_MODULE_8__.Portal.Group,{target:u},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_20__.ForcePortalRoot,{force:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(de,{slot:W,name:"Dialog.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(te,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_18__.FocusTrap,{initialFocus:f,initialFocusFallback:p?void 0:u,containers:S,features:A},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_close_provider_js__WEBPACK_IMPORTED_MODULE_21__.CloseProvider,{value:m},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:ge,theirProps:G,slot:W,defaultTag:$e,features:je,visible:n===0,name:"Dialog"})))))))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_form_fields_js__WEBPACK_IMPORTED_MODULE_22__.HoistFormFields,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null)))}let Ye="div";function Je(o,t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:d=`headlessui-dialog-panel-${r}`,...i}=o,[{dialogState:s},f]=M("Dialog.Panel"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t,f.panelRef),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:s===0}),[s]),p=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(R=>{R.stopPropagation()});return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:d,onClick:p},theirProps:i,slot:D,defaultTag:Ye,name:"Dialog.Panel"})}let Xe="h2";function Be(o,t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),{id:d=`headlessui-dialog-title-${r}`,...i}=o,[{dialogState:s,setTitleId:f}]=M("Dialog.Title"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(f(d),()=>f(null)),[d,f]);let D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:s===0}),[s]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)({ourProps:{ref:a,id:d},theirProps:i,slot:D,defaultTag:Xe,name:"Dialog.Title"})}let Ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(We),Ve=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(Je),qe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.forwardRefWithAs)(Be),At=_description_description_js__WEBPACK_IMPORTED_MODULE_16__.Description,_t=Object.assign(Ke,{Panel:Ve,Title:qe,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_16__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusTrap: () => (/* binding */ Le),
/* harmony export */   FocusTrapFeatures: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
/* harmony import */ var _hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-watch.js */ "./node_modules/@headlessui/react/dist/hooks/use-watch.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/active-element-history.js */ "./node_modules/@headlessui/react/dist/utils/active-element-history.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function S(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let o=new Set;for(let e of t.current)e.current instanceof HTMLElement&&o.add(e.current);return o}let z="div";var h=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.AutoFocus=32]="AutoFocus",r[r.All=30]="All",r))(h||{});function Q(t,o){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_1__.useSyncRefs)(e,o),{initialFocus:c,initialFocusFallback:p,containers:u,features:r=30,...l}=t;(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)()||(r=1);let s=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(e);$({ownerDocument:s},!!(r&16));let U=D({ownerDocument:s,container:e,initialFocus:c,initialFocusFallback:p},r);w({ownerDocument:s,container:e,containers:u,previousActiveElement:U},!!(r&8));let b=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.useTabDirection)(),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(a=>{let m=e.current;if(!m)return;(N=>N())(()=>{(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(b.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First,{skipElements:[a.relatedTarget,p]})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Backwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Last,{skipElements:[a.relatedTarget,p]})}})})}),B=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__.useDisposables)(),H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),x={ref:n,onKeyDown(a){a.key=="Tab"&&(H.current=!0,B.requestAnimationFrame(()=>{H.current=!1}))},onBlur(a){if(!(r&8))return;let m=S(u);e.current instanceof HTMLElement&&m.add(e.current);let E=a.relatedTarget;E instanceof HTMLElement&&E.dataset.headlessuiFocusGuard!=="true"&&(j(m,E)||(H.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(e.current,(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(b.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Forwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Backwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous})|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.WrapAround,{relativeTo:a.target}):a.target instanceof HTMLElement&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(a.target)))}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!!(r&4)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:A,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.HiddenFeatures.Focusable}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_10__.render)({ourProps:x,theirProps:l,defaultTag:z,name:"FocusTrap"}),!!(r&4)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:A,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.HiddenFeatures.Focusable}))}let Y=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_10__.forwardRefWithAs)(Q),Le=Object.assign(Y,{features:h});function Z(t=!0){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__.history.slice());return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__.useWatch)(([e],[n])=>{n===!0&&e===!1&&(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__.microTask)(()=>{o.current.splice(0)}),n===!1&&e===!0&&(o.current=_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__.history.slice())},[t,_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__.history,o]),(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{var e;return(e=o.current.find(n=>n!=null&&n.isConnected))!=null?e:null})}function $({ownerDocument:t},o){let e=Z(o);(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__.useWatch)(()=>{o||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(e())},[o]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_14__.useOnUnmount)(()=>{o&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(e())})}function D({ownerDocument:t,container:o,initialFocus:e,initialFocusFallback:n},c){let p=!!(c&2),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),r=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_15__.useIsMounted)();return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__.useWatch)(()=>{if(!p){n!=null&&n.current&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(n.current);return}let l=o.current;l&&(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__.microTask)(()=>{if(!r.current)return;let s=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===s){u.current=s;return}}else if(l.contains(s)){u.current=s;return}if(e!=null&&e.current)(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(e.current);else{if(c&32){if((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.AutoFocus)!==_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error)return}else if((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(l,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)!==_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error)return;if(n!=null&&n.current&&((0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(n.current),(t==null?void 0:t.activeElement)===n.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}u.current=t==null?void 0:t.activeElement})},[n,p,c]),u}function w({ownerDocument:t,container:o,containers:e,previousActiveElement:n},c){let p=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_15__.useIsMounted)();(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_16__.useEventListener)(t==null?void 0:t.defaultView,"focus",u=>{if(!c||!p.current)return;let r=S(e);o.current instanceof HTMLElement&&r.add(o.current);let l=n.current;if(!l)return;let s=u.target;s&&s instanceof HTMLElement?j(r,s)?(n.current=s,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(s)):(u.preventDefault(),u.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(l)):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(n.current)},!0)}function j(t,o){for(let e of t)if(e.contains(o))return!0;return!1}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keys: () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: () => (/* binding */ te),
/* harmony export */   PortalGroup: () => (/* binding */ J),
/* harmony export */   useNestedPortals: () => (/* binding */ ee)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function D(p){let r=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(v),e=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(p),[o,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var t;if(!r&&l!==null)return(t=l.current)!=null?t:null;if(_utils_env_js__WEBPACK_IMPORTED_MODULE_4__.env.isServer)return null;let u=e==null?void 0:e.getElementById("headlessui-portal-root");if(u)return u;if(e===null)return null;let a=e.createElement("div");return a.setAttribute("id","headlessui-portal-root"),e.body.appendChild(a)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o!==null&&(e!=null&&e.body.contains(o)||e==null||e.body.appendChild(o))},[o,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r||l!==null&&n(l.current)},[l,n,r]),o}let M=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,N=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(function(r,l){let e=r,o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),n=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)((0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.optionalRef)(i=>{o.current=i}),l),u=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(o),a=D(o),[t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var i;return _utils_env_js__WEBPACK_IMPORTED_MODULE_4__.env.isServer?null:(i=u==null?void 0:u.createElement("div"))!=null?i:null}),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y),b=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_7__.useServerHandoffComplete)();return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{!a||!t||a.contains(t)||(t.setAttribute("data-headlessui-portal",""),a.appendChild(t))},[a,t]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(t&&s)return s.register(t)},[s,t]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_9__.useOnUnmount)(()=>{var i;!a||!t||(t instanceof Node&&a.contains(t)&&a.removeChild(t),a.childNodes.length<=0&&((i=a.parentElement)==null||i.removeChild(a)))}),b?!a||!t?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{ref:n},theirProps:e,slot:{},defaultTag:M,name:"Portal"}),t):null});function S(p,r){let l=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r),{enabled:e=!0,...o}=p;return e?react__WEBPACK_IMPORTED_MODULE_0__.createElement(N,{...o,ref:l}):(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{ref:l},theirProps:o,slot:{},defaultTag:M,name:"Portal"})}let j=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,v=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function W(p,r){let{target:l,...e}=p,n={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(r)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(v.Provider,{value:l},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:n,theirProps:e,defaultTag:j,name:"Popover.Group"}))}let y=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function ee(){let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(y),r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(n=>(r.current.push(n),p&&p.register(n),()=>e(n))),e=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(n=>{let u=r.current.indexOf(n);u!==-1&&r.current.splice(u,1),p&&p.unregister(n)}),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:l,unregister:e,portals:r}),[l,e,r]);return[r,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function({children:u}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(y.Provider,{value:o},u)},[o])]}let I=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(S),J=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(W),te=Object.assign(I,{Group:J});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transition/transition.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transition/transition.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transition: () => (/* binding */ Ke),
/* harmony export */   TransitionChild: () => (/* binding */ Ae)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-flags.js */ "./node_modules/@headlessui/react/dist/hooks/use-flags.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-on-disappear.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-transition.js */ "./node_modules/@headlessui/react/dist/hooks/use-transition.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _utils_class_names_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
"use client";function y(t=""){return t.split(/\s+/).filter(n=>n.length>1)}function de(t){var n;return!!(t.enter||t.enterFrom||t.enterTo||t.leave||t.leaveFrom||t.leaveTo)||((n=t.as)!=null?n:me)!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment||react__WEBPACK_IMPORTED_MODULE_0__.Children.count(t.children)===1}let W=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);W.displayName="TransitionContext";var xe=(r=>(r.Visible="visible",r.Hidden="hidden",r))(xe||{});function Fe(){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(W);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function _e(){let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(k);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let k=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);k.displayName="NestingContext";function q(t){return"children"in t?q(t.children):t.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function fe(t,n){let r=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),H=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_2__.useIsMounted)(),L=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__.useDisposables)(),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((i,e=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden)=>{let o=a.current.findIndex(({el:s})=>s===i);o!==-1&&((0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(e,{[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount](){a.current.splice(o,1)},[_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden](){a.current[o].state="hidden"}}),L.microTask(()=>{var s;!q(a)&&H.current&&((s=r.current)==null||s.call(r))}))}),F=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(i=>{let e=a.current.find(({el:o})=>o===i);return e?e.state!=="visible"&&(e.state="visible"):a.current.push({el:i,state:"visible"}),()=>d(i,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount)}),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Promise.resolve()),C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({enter:[],leave:[],idle:[]}),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((i,e,o)=>{R.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter(([s])=>s!==i)),n==null||n.chains.current[e].push([i,new Promise(s=>{R.current.push(s)})]),n==null||n.chains.current[e].push([i,new Promise(s=>{Promise.all(C.current[e].map(([g,c])=>c)).then(()=>s())})]),e==="enter"?f.current=f.current.then(()=>n==null?void 0:n.wait.current).then(()=>o(e)):o(e)}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)((i,e,o)=>{Promise.all(C.current[e].splice(0).map(([s,g])=>g)).then(()=>{var s;(s=R.current.shift())==null||s()}).then(()=>o(e))});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({children:a,register:F,unregister:d,onStart:m,onStop:h,wait:f,chains:C}),[F,d,a,m,h,C,f])}let me=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,ce=_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderFeatures.RenderStrategy;function De(t,n){var ne,re,ie;let{beforeEnter:r,afterEnter:a,beforeLeave:H,afterLeave:L,enter:d,enterFrom:F,enterTo:R,entered:f,leave:C,leaveFrom:m,leaveTo:h,...i}=t,e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=de(t),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(...o?[e,n]:n===null?[]:[n]),g=(ne=i.unmount)==null||ne?_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Unmount:_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden,{show:c,appear:V,initial:v}=Fe(),[P,J]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c?"visible":"hidden"),$=_e(),{register:w,unregister:M}=$;(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>w(e),[w,e]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(g===_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderStrategy.Hidden&&e.current){if(c&&P!=="visible"){J("visible");return}return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(P,{["hidden"]:()=>M(e),["visible"]:()=>w(e)})}},[P,e,w,M,c,g]);let _=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)({base:y(i.className),enter:y(d),enterFrom:y(F),enterTo:y(R),entered:y(f),leave:y(C),leaveFrom:y(m),leaveTo:y(h)}),U=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)({beforeEnter:r,afterEnter:a,beforeLeave:H,afterLeave:L}),X=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__.useServerHandoffComplete)();(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{if(o&&X&&P==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,P,X,o]);let Ce=v&&!V,ee=V&&c&&v,te=(()=>ee?"enter":!X||Ce?"idle":c?"enter":"leave")(),A=(0,_hooks_use_flags_js__WEBPACK_IMPORTED_MODULE_10__.useFlags)(0),he=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(b,{enter:()=>{var l,u;A.addFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Opening),(u=(l=U.current).beforeEnter)==null||u.call(l)},leave:()=>{var l,u;A.addFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Closing),(u=(l=U.current).beforeLeave)==null||u.call(l)},idle:()=>{}})),ge=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(b,{enter:()=>{var l,u;A.removeFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Opening),(u=(l=U.current).afterEnter)==null||u.call(l)},leave:()=>{var l,u;A.removeFlag(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Closing),(u=(l=U.current).afterLeave)==null||u.call(l)},idle:()=>{}})),j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),G=fe(()=>{j.current||(J("hidden"),M(e))},$);(0,_hooks_use_transition_js__WEBPACK_IMPORTED_MODULE_12__.useTransition)({container:e,classes:_,direction:te,onStart:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(b=>{j.current=!0,G.onStart(e,b,he)}),onStop:(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(b=>{j.current=!1,G.onStop(e,b,ge),b==="leave"&&!q(G)&&(J("hidden"),M(e))})});let p=i,ve={ref:s};return ee?p={...p,className:(0,_utils_class_names_js__WEBPACK_IMPORTED_MODULE_13__.classNames)(i.className,..._.current.enter,..._.current.enterFrom)}:j.current?(p.className=(0,_utils_class_names_js__WEBPACK_IMPORTED_MODULE_13__.classNames)(i.className,(re=e.current)==null?void 0:re.className),p.className===""&&delete p.className):(p.className=(0,_utils_class_names_js__WEBPACK_IMPORTED_MODULE_13__.classNames)(i.className,(ie=e.current)==null?void 0:ie.className,...(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(te,{enter:[..._.current.enterTo,..._.current.entered],leave:_.current.leaveTo,idle:[]})),p.className===""&&delete p.className),react__WEBPACK_IMPORTED_MODULE_0__.createElement(k.Provider,{value:G},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(P,{["visible"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Open,["hidden"]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Closed})|A.flags},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:ve,theirProps:p,defaultTag:me,features:ce,visible:P==="visible",name:"Transition.Child"})))}function He(t,n){let{show:r,appear:a=!1,unmount:H=!0,...L}=t,d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),F=de(t),R=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_7__.useSyncRefs)(...F?[d,n]:n===null?[]:[n]);(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__.useServerHandoffComplete)();let f=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.useOpenClosed)();if(r===void 0&&f!==null&&(r=(f&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.State.Open),r===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[C,m]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r?"visible":"hidden"),h=fe(()=>{r||m("hidden")}),[i,e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([r]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{i!==!1&&o.current[o.current.length-1]!==r&&(o.current.push(r),e(!1))},[o,r]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({show:r,appear:a,initial:i}),[r,a,i]);(0,_hooks_use_on_disappear_js__WEBPACK_IMPORTED_MODULE_14__.useOnDisappear)(d,()=>m("hidden")),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_8__.useIsoMorphicEffect)(()=>{r?m("visible"):!q(h)&&d.current!==null&&m("hidden")},[r,h]);let g={unmount:H},c=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(()=>{var v;i&&e(!1),(v=t.beforeEnter)==null||v.call(t)}),V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__.useEvent)(()=>{var v;i&&e(!1),(v=t.beforeLeave)==null||v.call(t)});return react__WEBPACK_IMPORTED_MODULE_0__.createElement(k.Provider,{value:h},react__WEBPACK_IMPORTED_MODULE_0__.createElement(W.Provider,{value:s},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:{...g,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(pe,{ref:R,...g,...L,beforeEnter:c,beforeLeave:V})},theirProps:{},defaultTag:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,features:ce,visible:C==="visible",name:"Transition"})))}function Le(t,n){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(W)!==null,a=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_11__.useOpenClosed)()!==null;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,!r&&a?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Z,{ref:n,...t}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(pe,{ref:n,...t}))}let Z=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(He),pe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(De),Ae=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(Le),Ke=Object.assign(Z,{Child:Ae,Root:Z});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/transition/utils/transition.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/transition/utils/transition.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transition: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_once_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/once.js */ "./node_modules/@headlessui/react/dist/utils/once.js");
function v(t,...r){t&&r.length>0&&t.classList.add(...r)}function T(t,...r){t&&r.length>0&&t.classList.remove(...r)}function L(t,r){let n=(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_0__.once)(r),e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();if(!t)return e.dispose;let{transitionDuration:o,transitionDelay:m}=getComputedStyle(t),[s,u]=[o,m].map(a=>{let[i=0]=a.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,f)=>f-l);return i}),p=s+u;if(p!==0){let a=e.group(i=>{let l=i.setTimeout(()=>{n(),i.dispose()},p);i.addEventListener(t,"transitionrun",f=>{f.target===f.currentTarget&&(l(),i.addEventListener(t,"transitioncancel",b=>{b.target===b.currentTarget&&(n(),a())}))})});e.addEventListener(t,"transitionend",i=>{i.target===i.currentTarget&&(n(),e.dispose())})}else n();return e.dispose}function F(t,{direction:r,done:n,classes:e,inFlight:o}){let m=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)(),s=n!==void 0?(0,_utils_once_js__WEBPACK_IMPORTED_MODULE_0__.once)(n):()=>{};r==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let u=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(r,{enter:()=>e.enter,leave:()=>e.leave}),p=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(r,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),a=(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(r,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return M(t,{prepare(){T(t,...e.base,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),v(t,...e.base,...u,...a)},inFlight:o}),o&&(o.current=!0),m.nextFrame(()=>{m.add(L(t,()=>(T(t,...e.base,...u),v(t,...e.base,...e.entered,...p),o&&(o.current=!1),s()))),T(t,...e.base,...u,...a),v(t,...e.base,...u,...p)}),m.dispose}function M(t,{inFlight:r,prepare:n}){if(r!=null&&r.current){n();return}let e=t.style.transition;t.style.transition="none",n(),t.offsetHeight,t.style.transition=e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustScrollbarPadding: () => (/* binding */ d)
/* harmony export */ });
function d(){let r;return{before({doc:e}){var l;let o=e.documentElement,t=(l=e.defaultView)!=null?l:window;r=Math.max(0,t.innerWidth-o.clientWidth)},after({doc:e,d:o}){let t=e.documentElement,l=Math.max(0,t.clientWidth-t.offsetWidth),n=Math.max(0,r-l);o.style(t,"paddingRight",`${n}px`)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleIOSLocking: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
function d(){return (0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_0__.isIOS)()?{before({doc:r,d:n,meta:c}){function o(a){return c.containers.flatMap(l=>l()).some(l=>l.contains(a))}n.microTask(()=>{var s;if(window.getComputedStyle(r.documentElement).scrollBehavior!=="auto"){let t=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();t.style(r.documentElement,"scrollBehavior","auto"),n.add(()=>n.microTask(()=>t.dispose()))}let a=(s=window.scrollY)!=null?s:window.pageYOffset,l=null;n.addEventListener(r,"click",t=>{if(t.target instanceof HTMLElement)try{let e=t.target.closest("a");if(!e)return;let{hash:f}=new URL(e.href),i=r.querySelector(f);i&&!o(i)&&(l=i)}catch{}},!0),n.addEventListener(r,"touchstart",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&o(e.parentElement);)e=e.parentElement;n.style(e,"overscrollBehavior","contain")}else n.style(t.target,"touchAction","none")}),n.addEventListener(r,"touchmove",t=>{if(t.target instanceof HTMLElement){if(t.target.tagName==="INPUT")return;if(o(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault()}else t.preventDefault()}},{passive:!1}),n.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   overflows: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjust-scrollbar-padding.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js");
/* harmony import */ var _handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-ios-locking.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js");
/* harmony import */ var _prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevent-scroll.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js");
function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a=(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_0__.createStore)(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[(0,_handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__.handleIOSLocking)(),(0,_adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__.adjustScrollbarPadding)(),(0,_prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__.preventScroll)()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});a.subscribe(()=>{let e=a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a.dispatch("TEARDOWN",t)}});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preventScroll: () => (/* binding */ r)
/* harmony export */ });
function r(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentOverflowLockedEffect: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overflow-store.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js");
function a(e,r,n=()=>({containers:[]})){let f=(0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__.useStore)(_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{if(!(!e||!r))return _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("PUSH",e,n),()=>_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("POP",e,n)},[r,e]),i}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisposables: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListener: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function E(n,e,a,t){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(a);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-flags.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-flags.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFlags: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
function c(a=0){let[l,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(a),t=(0,_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)(),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{t.current&&r(u=>u|e)},[l,t]),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>!!(l&e),[l]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{t.current&&r(u=>u&~e)},[r,t]),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{t.current&&r(u=>u^e)},[r]);return{flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert-others.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert-others.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInertOthers: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let f=new Map,u=new Map;function l(t){var r;let e=(r=u.get(t))!=null?r:0;return u.set(t,e+1),e!==0?()=>p(t):(f.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),t.setAttribute("aria-hidden","true"),t.inert=!0,()=>p(t))}function p(t){var n;let e=(n=u.get(t))!=null?n:1;if(e===1?u.delete(t):u.set(t,e-1),e!==1)return;let r=f.get(t);r&&(r["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",r["aria-hidden"]),t.inert=r.inert,f.delete(t))}function T({allowed:t,disallowed:e}={},r=!0){(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_0__.useIsoMorphicEffect)(()=>{var s,c;if(!r)return;let n=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();for(let i of(s=e==null?void 0:e())!=null?s:[])i&&n.add(l(i));let a=(c=t==null?void 0:t())!=null?c:[];for(let i of a){if(!i)continue;let d=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(i);if(!d)continue;let o=i.parentElement;for(;o&&o!==d.body;){for(let h of o.children)a.some(E=>h.contains(E))||n.add(l(h));o=o.parentElement}}return n.dispose},[r,t,e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMounted: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsTouchDevice: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){var t;let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>typeof window!="undefined"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[o,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((t=e==null?void 0:e.matches)!=null?t:!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e)return;function n(r){c(r.matches)}return e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[e]),o}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoMorphicEffect: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let n=(e,t)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,t):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,t)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-disappear.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnDisappear: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function m(n,l,s=!0){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t=>{let e=t.getBoundingClientRect();e.x===0&&e.y===0&&e.width===0&&e.height===0&&l()});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return;let t=n===null?null:n instanceof HTMLElement?n:n.current;if(!t)return;let e=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)();if(typeof ResizeObserver!="undefined"){let r=new ResizeObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect())}if(typeof IntersectionObserver!="undefined"){let r=new IntersectionObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect())}return()=>e.dispose()},[n,i,s])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnUnmount: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function c(t){let r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(t),e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(e.current=!1,()=>{e.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__.microTask)(()=>{e.current&&r()})}),[r])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClick: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
function w(s,m,a=!0){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{requestAnimationFrame(()=>{i.current=a})},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(t,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("click",e=>{(0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_3__.isMobile)()||o.current&&(c(e,()=>o.current),o.current=null)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOwnerDocument: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-root-containers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-root-containers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMainTreeNode: () => (/* binding */ y),
/* harmony export */   useRootContainers: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _use_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
function j({defaultContainers:o=[],portals:r,mainTreeNodeRef:u}={}){var f;let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((f=u==null?void 0:u.current)!=null?f:null),l=(0,_use_owner_js__WEBPACK_IMPORTED_MODULE_1__.useOwnerDocument)(t),c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(()=>{var i,s,a;let n=[];for(let e of o)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(r!=null&&r.current)for(let e of r.current)n.push(e);for(let e of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||e.contains((a=(s=t.current)==null?void 0:s.getRootNode())==null?void 0:a.host)||n.some(L=>e.contains(L))||n.push(e));return n});return{resolveContainers:c,contains:(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(n=>c().some(i=>i.contains(n))),mainTreeNodeRef:t,MainTreeNode:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(){return u!=null?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.HiddenFeatures.Hidden,ref:t})},[t,u])}}function y(){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return{mainTreeNodeRef:o,MainTreeNode:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.HiddenFeatures.Hidden,ref:o})},[o])}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useScrollLock: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-overflow/use-document-overflow.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js");
function u(e,n,c=()=>[document.body]){(0,_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_0__.useDocumentOverflowLockedEffect)(e,n,t=>{var o;return{containers:[...(o=t.containers)!=null?o:[],c]}})}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServerHandoffComplete: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function s(){let r=typeof document=="undefined";return"useSyncExternalStore" in /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))?(o=>o.useSyncExternalStore)(/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))))(()=>()=>{},()=>!1,()=>!r):!1}function l(){let r=s(),[e,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&n(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{e!==!0&&n(!0)},[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),r?!1:e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-store.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-store.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function o(t){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionalRef: () => (/* binding */ T),
/* harmony export */   useSyncRefs: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Direction: () => (/* binding */ s),
/* harmony export */   useTabDirection: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
var s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s||{});function n(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-transition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-transition.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTransition: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_transition_utils_transition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/transition/utils/transition.js */ "./node_modules/@headlessui/react/dist/components/transition/utils/transition.js");
/* harmony import */ var _use_disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function v({container:i,direction:e,classes:s,onStart:o,onStop:t}){let a=(0,_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_1__.useIsMounted)(),r=(0,_use_disposables_js__WEBPACK_IMPORTED_MODULE_2__.useDisposables)(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{if(e==="idle"||!a.current)return;o.current(e);let n=i.current;return n?r.add((0,_components_transition_utils_transition_js__WEBPACK_IMPORTED_MODULE_4__.transition)(n,{direction:e,classes:s.current,inFlight:l,done(){t.current(e)}})):t.current(e),r.dispose},[e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-watch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWatch: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[a,l]of t.entries())if(e.current[a]!==l){let n=r(t,o);return e.current=t,n}},[r,...t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowEvent: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/close-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/close-provider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseProvider: () => (/* binding */ u),
/* harmony export */   useClose: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});function l(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function u({value:o,children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o},t)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/disabled.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/disabled.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisabledProvider: () => (/* binding */ l),
/* harmony export */   useDisabled: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l({value:t,children:o}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:t},o)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/form-fields.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/form-fields.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFields: () => (/* binding */ j),
/* harmony export */   FormFieldsProvider: () => (/* binding */ W),
/* harmony export */   HoistFormFields: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hidden_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function W(t){let[e,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(f.Provider,{value:{target:e}},t.children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.HiddenFeatures.Hidden,ref:r}))}function c({children:t}){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(f);if(!e)return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,t);let{target:r}=e;return r?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,t),r):null}function j({data:t,form:e,disabled:r,onReset:n,overrides:F}){let[i,a]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),p=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_3__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(n&&i)return p.addEventListener(i,"reset",n)},[i,e,n]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(C,{setForm:a,formId:e}),(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_4__.objectToFormEntries)(t).map(([s,v])=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.HiddenFeatures.Hidden,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.compact)({key:s,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:e,disabled:r,name:s,value:v,...F})})))}function C({setForm:t,formId:e}){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(e){let r=document.getElementById(e);r&&t(r)}},[t,e]),e?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_hidden_js__WEBPACK_IMPORTED_MODULE_2__.Hidden,{features:_hidden_js__WEBPACK_IMPORTED_MODULE_2__.HiddenFeatures.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:r=>{if(!r)return;let n=r.closest("form");n&&t(n)}})}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hidden: () => (/* binding */ T),
/* harmony export */   HiddenFeatures: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="div";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});function l(t,r){var n;let{features:d=1,...e}=t,o={ref:r,"aria-hidden":(d&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,hidden:(d&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(d&4)===4&&(d&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:o,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let T=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(l);


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenClosedProvider: () => (/* binding */ s),
/* harmony export */   State: () => (/* binding */ d),
/* harmony export */   useOpenClosed: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function u(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function s({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcePortalRoot: () => (/* binding */ l),
/* harmony export */   usePortalRoot: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o.force},o.children)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/stack-context.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/stack-context.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackMessage: () => (/* binding */ s),
/* harmony export */   StackProvider: () => (/* binding */ b),
/* harmony export */   useStackContext: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});a.displayName="StackContext";var s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s||{});function x(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a)}function b({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)((...t)=>{r==null||r(...t),l(...t)});return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:o},i)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/active-element-history.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/active-element-history.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   history: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _document_ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-ready.js */ "./node_modules/@headlessui/react/dist/utils/document-ready.js");
let t=[];(0,_document_ready_js__WEBPACK_IMPORTED_MODULE_0__.onDocumentReady)(()=>{function e(n){n.target instanceof HTMLElement&&n.target!==document.body&&t[0]!==n.target&&(t.unshift(n.target),t=t.filter(r=>r!=null&&r.isConnected),t.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ t)
/* harmony export */ });
function t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disposables: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.includes(e)||n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/document-ready.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/document-ready.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDocumentReady: () => (/* binding */ t)
/* harmony export */ });
function t(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ F),
/* harmony export */   FocusResult: () => (/* binding */ T),
/* harmony export */   FocusableMode: () => (/* binding */ h),
/* harmony export */   focusElement: () => (/* binding */ I),
/* harmony export */   focusFrom: () => (/* binding */ j),
/* harmony export */   focusIn: () => (/* binding */ P),
/* harmony export */   getAutoFocusableElements: () => (/* binding */ S),
/* harmony export */   getFocusableElements: () => (/* binding */ b),
/* harmony export */   isFocusableElement: () => (/* binding */ A),
/* harmony export */   restoreFocusIfNecessary: () => (/* binding */ G),
/* harmony export */   sortByDomNode: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),p=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n[n.AutoFocus=64]="AutoFocus",n))(F||{}),T=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(T||{}),y=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(y||{});function b(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}function S(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(p)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(h||{});function A(e,r=0){var t;return e===((t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:t.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r,{[0](){return e.matches(f)},[1](){let u=e;for(;u!==null;){if(u.matches(f))return!0;u=u.parentElement}return!1}})}function G(e){let r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{r&&!A(r.activeElement,0)&&I(e)})}var H=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(H||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function I(e){e==null||e.focus({preventScroll:!0})}let w=["textarea","input"].join(",");function O(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,w))!=null?t:!1}function _(e,r=t=>t){return e.slice().sort((t,u)=>{let o=r(t),c=r(u);if(o===null||c===null)return 0;let l=o.compareDocumentPosition(c);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function j(e,r){return P(b(),r,{relativeTo:e})}function P(e,r,{sorted:t=!0,relativeTo:u=null,skipElements:o=[]}={}){let c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?t?_(e):e:r&64?S(e):b(e);o.length>0&&l.length>1&&(l=l.filter(s=>!o.some(a=>a!=null&&"current"in a?(a==null?void 0:a.current)===s:a===s))),u=u!=null?u:c.activeElement;let n=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,l.indexOf(u))-1;if(r&4)return Math.max(0,l.indexOf(u))+1;if(r&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),M=r&32?{preventScroll:!0}:{},m=0,d=l.length,i;do{if(m>=d||m+d<=0)return 0;let s=x+m;if(r&16)s=(s+d)%d;else{if(s<0)return 3;if(s>=d)return 1}i=l[s],i==null||i.focus(M),m+=n}while(i!==c.activeElement);return r&6&&O(i)&&i.select(),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attemptSubmit: () => (/* binding */ p),
/* harmony export */   objectToFormEntries: () => (/* binding */ e)
/* harmony export */ });
function e(i={},s=null,t=[]){for(let[r,n]of Object.entries(i))o(t,f(s,r),n);return t}function f(i,s){return i?i+"["+s+"]":s}function o(i,s,t){if(Array.isArray(t))for(let[r,n]of t.entries())o(i,f(s,r.toString()),n);else t instanceof Date?i.push([s,t.toISOString()]):typeof t=="boolean"?i.push([s,t?"1":"0"]):typeof t=="string"?i.push([s,t]):typeof t=="number"?i.push([s,`${t}`]):t==null?i.push([s,""]):e(t,s,i)}function p(i){var t,r;let s=(t=i==null?void 0:i.form)!=null?t:i.closest("form");if(s){for(let n of s.elements)if(n!==i&&(n.tagName==="INPUT"&&n.type==="submit"||n.tagName==="BUTTON"&&n.type==="submit"||n.nodeName==="INPUT"&&n.type==="image")){n.click();return}(r=s.requestSubmit)==null||r.call(s)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microTask: () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/once.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/once.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   once: () => (/* binding */ l)
/* harmony export */ });
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function u(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/platform.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/platform.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAndroid: () => (/* binding */ i),
/* harmony export */   isIOS: () => (/* binding */ t),
/* harmony export */   isMobile: () => (/* binding */ n)
/* harmony export */ });
function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return t()||i()}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderFeatures: () => (/* binding */ O),
/* harmony export */   RenderStrategy: () => (/* binding */ M),
/* harmony export */   compact: () => (/* binding */ m),
/* harmony export */   forwardRefWithAs: () => (/* binding */ I),
/* harmony export */   mergeProps: () => (/* binding */ D),
/* harmony export */   render: () => (/* binding */ H),
/* harmony export */   useMergeRefsFn: () => (/* binding */ U)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var O=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(O||{}),M=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(M||{});function H({ourProps:r,theirProps:n,slot:e,defaultTag:a,features:s,visible:t=!0,name:l,mergeRefs:i}){i=i!=null?i:A;let o=N(n,r);if(t)return b(o,e,a,l,i);let y=s!=null?s:0;if(y&2){let{static:f=!1,...u}=o;if(f)return b(u,e,a,l,i)}if(y&1){let{unmount:f=!0,...u}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(f?0:1,{[0](){return null},[1](){return b({...u,hidden:!0,style:{display:"none"}},e,a,l,i)}})}return b(o,e,a,l,i)}function b(r,n={},e,a,s){let{as:t=e,children:l,refName:i="ref",...o}=h(r,["unmount","static"]),y=r.ref!==void 0?{[i]:r.ref}:{},f=typeof l=="function"?l(n):l;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(n)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let u={};if(n){let d=!1,p=[];for(let[c,T]of Object.entries(n))typeof T=="boolean"&&(d=!0),T===!0&&p.push(c.replace(/([A-Z])/g,g=>`-${g.toLowerCase()}`));if(d){u["data-headlessui-state"]=p.join(" ");for(let c of p)u[`data-${c}`]=""}}if(t===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(Object.keys(m(o)).length>0||Object.keys(m(u)).length>0))if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(f)||Array.isArray(f)&&f.length>1){if(Object.keys(m(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(m(o)).concat(Object.keys(m(u))).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}else{let d=f.props,p=d==null?void 0:d.className,c=typeof p=="function"?(...F)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(p(...F),o.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(p,o.className),T=c?{className:c}:{},g=N(f.props,m(h(o,["ref"])));for(let F in u)F in g&&delete u[F];return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(f,Object.assign({},g,u,y,{ref:s(f.ref,y.ref)},T))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(t,Object.assign({},h(o,["ref"]),t!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&y,t!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u),f)}function U(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{for(let a of r.current)a!=null&&(typeof a=="function"?a(e):a.current=e)},[]);return(...e)=>{if(!e.every(a=>a==null))return r.current=e,n}}function A(...r){return r.every(n=>n==null)?void 0:n=>{for(let e of r)e!=null&&(typeof e=="function"?e(n):e.current=n)}}function N(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let n={},e={};for(let s of r)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((a=e[t])!=null||(e[t]=[]),e[t].push(s[t])):n[t]=s[t];if(n.disabled||n["aria-disabled"])for(let s in e)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s)&&(e[s]=[t=>{var l;return(l=t==null?void 0:t.preventDefault)==null?void 0:l.call(t)}]);for(let s in e)Object.assign(n,{[s](t,...l){let i=e[s];for(let o of i){if((t instanceof Event||(t==null?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...l)}}});return n}function D(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let n={},e={};for(let s of r)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((a=e[t])!=null||(e[t]=[]),e[t].push(s[t])):n[t]=s[t];for(let s in e)Object.assign(n,{[s](...t){let l=e[s];for(let i of l)i==null||i(...t)}});return n}function I(r){var n;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(n=r.displayName)!=null?n:r.name})}function m(r){let n=Object.assign({},r);for(let e in n)n[e]===void 0&&delete n[e];return n}function h(r,n=[]){let e=Object.assign({},r);for(let a of n)a in e&&delete e[a];return e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/store.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/store.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: () => (/* binding */ a)
/* harmony export */ });
function a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/react-toastify.esm.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bounce: () => (/* binding */ H),
/* harmony export */   Flip: () => (/* binding */ Y),
/* harmony export */   Icons: () => (/* binding */ z),
/* harmony export */   Slide: () => (/* binding */ F),
/* harmony export */   ToastContainer: () => (/* binding */ Q),
/* harmony export */   Zoom: () => (/* binding */ X),
/* harmony export */   collapseToast: () => (/* binding */ f),
/* harmony export */   cssTransition: () => (/* binding */ g),
/* harmony export */   toast: () => (/* binding */ B),
/* harmony export */   useToast: () => (/* binding */ N),
/* harmony export */   useToastContainer: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
'use client';
const c=e=>"number"==typeof e&&!isNaN(e),d=e=>"string"==typeof e,u=e=>"function"==typeof e,p=e=>d(e)||u(e)?e:null,m=e=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(e)||d(e)||u(e)||c(e);function f(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function g(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:d,position:u,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:v}=t;const h=i?`${a}--${u}`:a,T=i?`${r}--${u}`:r,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{const e=g.current,t=h.split(" "),n=o=>{o.target===g.current&&(v(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===E.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const e=g.current,t=()=>{e.removeEventListener("animationend",t),l?f(e,m,c):m()};y||(p?t():(E.current=1,e.className+=` ${T}`,e.addEventListener("animationend",t)))},[y]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,d)}}function y(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const v=new Map;let h=[];const T=new Set,E=e=>T.forEach(t=>t(e)),b=()=>v.size>0;function I(e,t){var n;if(t)return!(null==(n=v.get(t))||!n.isToastActive(e));let o=!1;return v.forEach(t=>{t.isToastActive(e)&&(o=!0)}),o}function _(e,t){m(e)&&(b()||h.push({content:e,options:t}),v.forEach(n=>{n.buildToast(e,t)}))}function C(e,t){v.forEach(n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)})}function L(e){const{subscribe:o,getSnapshot:s,setProps:i}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function(e){const n=e.containerId||1;return{subscribe(o){const s=function(e,n,o){let s=1,r=0,i=[],l=[],f=[],g=n;const v=new Map,h=new Set,T=()=>{f=Array.from(v.values()),h.forEach(e=>e())},E=e=>{l=null==e?[]:l.filter(t=>t!==e),T()},b=e=>{const{toastId:n,onOpen:s,updateId:a,children:r}=e.props,i=null==a;e.staleId&&v.delete(e.staleId),v.set(n,e),l=[...l,e.props.toastId].filter(t=>t!==e.staleId),T(),o(y(e,i?"added":"updated")),i&&u(s)&&s((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{v.forEach(n=>{null!=t&&t!==n.props.toastId||u(n.toggle)&&n.toggle(e)})},removeToast:E,toasts:v,clearQueue:()=>{r-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:o,updateId:s}=t;const a=n?n!==e:1!==e,r=v.has(o)&&null==s;return a||r})(l))return;const{toastId:f,updateId:h,data:I,staleId:_,delay:C}=l,L=()=>{E(f)},N=null==h;N&&r++;const $={...g,style:g.toastStyle,key:s++,...Object.fromEntries(Object.entries(l).filter(e=>{let[t,n]=e;return null!=n})),toastId:f,updateId:h,data:I,closeToast:L,isIn:!1,className:p(l.className||g.toastClassName),bodyClassName:p(l.bodyClassName||g.bodyClassName),progressClassName:p(l.progressClassName||g.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,k=g.autoClose,!1===w||c(w)&&w>0?w:k),deleteToast(){const e=v.get(f),{onClose:n,children:s}=e.props;u(n)&&n((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(s)&&s.props),o(y(e,"removed")),v.delete(f),r--,r<0&&(r=0),i.length>0?b(i.shift()):T()}};var w,k;$.closeButton=g.closeButton,!1===l.closeButton||m(l.closeButton)?$.closeButton=l.closeButton:!0===l.closeButton&&($.closeButton=!m(g.closeButton)||g.closeButton);let P=n;(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(n)&&!d(n.type)?P=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(n,{closeToast:L,toastProps:$,data:I}):u(n)&&(P=n({closeToast:L,toastProps:$,data:I}));const M={content:P,props:$,staleId:_};g.limit&&g.limit>0&&r>g.limit&&N?i.push(M):c(C)?setTimeout(()=>{b(M)},C):b(M)},setProps(e){g=e},setToggle:(e,t)=>{v.get(e).toggle=t},isToastActive:e=>l.some(t=>t===e),getSnapshot:()=>g.newestOnTop?f.reverse():f}}(n,e,E);v.set(n,s);const r=s.observe(o);return h.forEach(e=>_(e.content,e.options)),h=[],()=>{r(),v.delete(n)}},setProps(e){var t;null==(t=v.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=v.get(n))?void 0:e.getSnapshot()}}}(e)).current;i(e);const l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(o,s,s);return{getToastToRender:function(e){if(!l)return[];const t=new Map;return l.forEach(e=>{const{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:I,count:null==l?void 0:l.length}}function N(e){const[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[a,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:p,onClick:m,closeOnClick:f}=e;var g,y;function h(){o(!0)}function T(){o(!1)}function E(n){const o=l.current;c.canDrag&&o&&(c.didMove=!0,t&&T(),c.delta="x"===e.draggableDirection?n.clientX-c.start:n.clientY-c.start,c.start!==n.clientX&&(c.canCloseOnClick=!1),o.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",b);const t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return r(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(y=v.get((g={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||y.setToggle(g.id,g.fn),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",h),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",T)}},[e.pauseOnFocusLoss]);const I={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",b);const n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:o,left:s,right:a}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=s&&t.clientX<=a&&t.clientY>=n&&t.clientY<=o?T():h()}};return d&&u&&(I.onMouseEnter=T,e.stacked||(I.onMouseLeave=h)),f&&(I.onClick=e=>{m&&m(e),c.canCloseOnClick&&p()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:l,eventHandlers:I}}function $(t){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:c,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:g}=t;const y=r||d&&0===p,v={...c,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};d&&(v.transform=`scaleX(${p})`);const h=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=u(i)?i({rtl:m,type:a,defaultClassName:h}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(h,i),E={[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&s()}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:v,...E}))}let w=1;const k=()=>""+w++;function P(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:k()}function M(e,t){return _(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function A(e){return(t,n)=>M(t,x(e,n))}function B(e,t){return M(e,x("default",t))}B.loading=(e,t)=>M(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=d(s)?B.loading(s,n):B.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void B.dismiss(o);const a={type:e,...i,...n,data:s},r=d(t)?{render:t}:t;return o?B.update(o,{...a,...r}):B(r.render,{...a,...r}),s},c=u(e)?e():e;return c.then(e=>l("success",r,e)).catch(e=>l("error",a,e)),c},B.success=A("success"),B.info=A("info"),B.error=A("error"),B.warning=A("warning"),B.warn=B.warning,B.dark=(e,t)=>M(e,x("default",{theme:"dark",...t})),B.dismiss=function(e){!function(e){var t;if(b()){if(null==e||d(t=e)||c(t))v.forEach(t=>{t.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const t=v.get(e.containerId);t?t.removeToast(e.id):v.forEach(t=>{t.removeToast(e.id)})}}else h=h.filter(t=>null!=e&&t.options.toastId!==e)}(e)},B.clearWaitingQueue=function(e){void 0===e&&(e={}),v.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},B.isActive=I,B.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=v.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,M(r,a)}},B.done=e=>{B.update(e,{progress:1})},B.onChange=function(e){return T.add(e),()=>{T.delete(e)}},B.play=e=>C(!0,e),B.pause=e=>C(!1,e);const O="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect,D=t=>{let{theme:n,type:o,isLoading:s,...a}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...a})},z={info:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(D,{...t},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"Toastify__spinner"})}},R=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i,playToast:c}=N(n),{closeButton:d,children:p,autoClose:m,onClick:f,type:g,hideProgressBar:y,closeToast:v,transition:h,position:T,className:E,style:b,bodyClassName:I,bodyStyle:_,progressClassName:C,progressStyle:L,updateId:w,role:k,progress:P,rtl:M,toastId:x,deleteToast:A,isIn:B,isLoading:O,closeOnClick:D,theme:R}=n,S=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":D}),H=u(E)?E({rtl:M,position:T,type:g,defaultClassName:S}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(S,E),F=function(e){let{theme:n,type:o,isLoading:s,icon:r}=e,i=null;const l={theme:n,type:o};return!1===r||(u(r)?i=r({...l,isLoading:s}):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(r)?i=(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(r,l):s?i=z.spinner():(e=>e in z)(o)&&(i=z[o](l))),i}(n),X=!!P||!m,Y={closeToast:v,type:g,theme:R};let q=null;return!1===d||(q=u(d)?d(Y):(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(d)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(d,Y):function(t){let{closeToast:n,theme:o,ariaLabel:s="close"}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":s},react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Y)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(h,{isIn:B,done:A,position:T,preventExitTransition:s,nodeRef:r,playToast:c},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{id:x,onClick:f,"data-in":B,className:H,...i,style:b,ref:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...B&&{role:k},className:u(I)?I({type:g}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-body",I),style:_},null!=F&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},F),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,p)),q,react__WEBPACK_IMPORTED_MODULE_0__.createElement($,{...w&&!X?{key:`pb-${w}`}:{},rtl:M,theme:R,delay:m,isRunning:o,isIn:B,closeToast:v,hide:y,type:g,style:L,className:C,controlledProgress:X,progress:P||0})))},S=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},H=g(S("bounce",!0)),F=g(S("slide",!0)),X=g(S("zoom")),Y=g(S("flip")),q={position:"top-right",transition:H,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Q(t){let o={...q,...t};const s=t.stacked,[a,r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),c=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{getToastToRender:d,isToastActive:m,count:f}=L(o),{className:g,style:y,rtl:v,containerId:h}=o;function T(e){const t=(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return u(g)?g({position:e,rtl:v,defaultClassName:t}):(0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(t,p(g))}function E(){s&&(r(!0),B.play())}return O(()=>{if(s){var e;const t=c.current.querySelectorAll('[data-in="true"]'),n=12,s=null==(e=o.position)?void 0:e.includes("top");let r=0,i=0;Array.from(t).reverse().forEach((e,t)=>{const o=e;o.classList.add("Toastify__toast--stacked"),t>0&&(o.dataset.collapsed=`${a}`),o.dataset.pos||(o.dataset.pos=s?"top":"bot");const l=r*(a?.2:1)+(a?0:n*t);o.style.setProperty("--y",`${s?l:-1*l}px`),o.style.setProperty("--g",`${n}`),o.style.setProperty("--s",""+(1-(a?i:0))),r+=o.offsetHeight,i+=.025})}},[a,f,s]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:c,className:"Toastify",id:h,onMouseEnter:()=>{s&&(r(!1),B.pause())},onMouseLeave:E},d((t,n)=>{const o=n.length?{...y}:{...y,pointerEvents:"none"};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:T(t),style:o,key:`container-${t}`},n.map(t=>{let{content:n,props:o}=t;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(R,{...o,stacked:s,collapseAll:E,isIn:m(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},n)}))}))}
//# sourceMappingURL=react-toastify.esm.mjs.map


/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SCOPE: () => (/* binding */ SCOPE),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'
var SCOPE = '@scope'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(children = element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
								// :placeholder
								case '::placeholder':
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]}))
									;(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [value]}))
									;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(element, {props: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter)(children, callback)})
									break
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f', (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(index ? points[index - 1] : 0)) != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent, declarations), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length, siblings)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span', 0) ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span', 0) ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch', 0) ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET: if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(element.value = element.props.join(','))) return ''
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lift: () => (/* binding */ lift),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]})

	;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(root, root.siblings)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/admin.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _AdminMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminMenu */ "./src/AdminMenu.js");
/* harmony import */ var _BackendDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackendDashboard */ "./src/BackendDashboard.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");

// src/index.js









document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mcp-admin-app');
  if (container) {
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
    const menuPage = document.getElementById('toplevel_page_wetechpro');
    // eslint-disable-next-line no-inner-declarations
    function MenuPortal({
      children
    }) {
      menuPage.innerHTML = '';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createPortal)(children, menuPage);
    }
    root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.BrowserRouter, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MenuPortal, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AdminMenu__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BackendDashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map