// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6IXwR":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
// imports
var _nannyState = require("nanny-state");
// Helper Functions
// (number,number) => number
const randomNumber = (n, m)=>Math.ceil(Math.random() * (n - m) + m)
;
// () => string
const generateNumber = ()=>(3 * randomNumber(333, 34)).toString()
;
// (array,array) => array
const getColours = (guesses, number)=>guesses.map((digit, index)=>number.includes(digit) ? digit.toString() === number[index] ? "green" : "yellow" : "black"
    )
;
// View
// state => html string
// View
// state => html string
const View = (state)=>_nannyState.html`
<div id="app" ?data-darkMode=${state.dark}>
<header>
<h1>Numble</h1>
${state.started ? _nannyState.html`<div class="scores"><p>Streak: ${state.streak}</p><p>Best: ${state.best}</p></div>` : ""}
</header>
<main>
${state.showStats ? _nannyState.html`<h2>Stats</h2>
<div id="stats">
<p>Played: ${state.played}</p>
${state.stats.map((stat, index)=>_nannyState.html`<div><div class="guess-number">${index + 1}:</div><div class="stat" style="width:80px">${stat}</div></div>`
    )}
</div>
` : state.started ? _nannyState.html`<div id="guesses">
${state.guesses.map((guess, index)=>_nannyState.html`<div class="row">${guess.map((number, i)=>_nannyState.html`<div class="${state.guessCount > index ? getColours(guess, state.number)[i] : "grey"}"}>${number}</div>`
        )}</div>`
    )}</div>
<p id="feedback">${state.feedback}</p>
<div id="keyboard">
${state.digits.map((colour, index)=>_nannyState.html`<button onclick=${(e)=>Update(appear(index))
        } class="${colour}" ?disabled=${!state.playing}>${index}</button>`
    )}
  <button class="functional" onclick=${(e)=>Update(remove)
    }>DELETE</button>
  <button class="functional" onclick=${check(state.guesses[state.guessCount], state.number, state.count)}>ENTER</button>
</div>
<button ?disabled=${state.playing} class="${state.playing ? "hidden" : ""}" onclick=${(e)=>Update(nextNumber)
    }>PLAY AGAIN</button>` : _nannyState.html`
<h2>How Many Numbles Can You Get?</h2>
<p>Guess the Numble in 4 tries</p>
<p>Each Numble is a multiple of three</p>
<p>After each guess, the colour of the circles will change to let you know how close (or far) you were</p>
<h3>Example</h3>
<div class="guesses"><div class="row"><div class="green">1</div><div class="yellow">2</div><div class="black">3</div></div></div>
<p>1 is in the number and also in the right place.</p>
<p>2 is in the number but in the wrong place</p>
<p>3 isn't in the number at all</p>`}
</main>
<footer>
<button onclick=${(e)=>Update(state.playing ? finish : start)
    }>${state.started ? "END" : "START"}</button>
<button onclick=${(e)=>Update((e)=>Update({
                showStats: !state.showStats
            })
        )
    }>${state.showStats ? "BACK" : "STATS"}</button>
<button onclick=${(e)=>Update((e)=>Update({
                dark: !state.dark
            })
        )
    }>${state.dark ? "LIGHT" : "DARK"} MODE</button>
</footer>
</div>`
;
// initial state
const State = {
    number: generateNumber(),
    started: false,
    playing: false,
    showStats: false,
    digits: Array(10).fill('grey'),
    guesses: [
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null)
    ],
    count: 0,
    guessCount: 0,
    feedback: "Guess 3 digits",
    played: 0,
    streak: 0,
    best: 0,
    dark: false,
    stats: [
        0,
        0,
        0,
        0
    ],
    LocalStorageKey: "numble-bumble",
    View
};
// Event handlers
const check = (guesses, number, count)=>(event)=>{
        if (count < 3) Update({
            feedback: "too short"
        });
        else {
            const numble = guesses.join('') === number;
            const colours = getColours(guesses, number);
            Update(provideFeedback(guesses, colours, numble));
        }
    }
;
// Transformer functions
// state => state
const start = (state)=>({
        started: true,
        playing: true
    })
;
// array => state => state
const appear = (guess)=>(state)=>({
            guesses: state.guesses.map((array, index1)=>index1 === state.guessCount ? array.map((digit, index)=>index === state.count ? guess : digit
                ) : array
            ),
            count: state.count + 1
        })
;
// state => state
const remove = (state)=>({
        guesses: state.guesses.map((array, index2)=>index2 === state.guessCount ? array.map((digit, index)=>index === state.count - 1 ? null : digit
            ) : array
        ),
        count: state.count - 1
    })
;
// (array,array,Boolean) => state => state
const provideFeedback = (guesses, colours, numble)=>(state)=>({
            digits: state.digits.map((colour, index)=>guesses.includes(index) ? colours[guesses.indexOf(index)] : colour
            ),
            count: 0,
            guessCount: state.guessCount + 1,
            feedback: numble ? "NUMBLE!" : state.guessCount < 3 ? "Keep going..." : `Nope! It was ${state.number}`,
            playing: !numble && state.guessCount < 3,
            streak: numble ? state.streak + 1 : state.guessCount < 3 ? state.streak : 0,
            best: numble && state.streak + 1 > state.best ? state.streak + 1 : state.best,
            stats: numble ? state.stats.map((n, i)=>i === state.guessCount ? n + 1 : n
            ) : state.stats,
            played: numble || state.guessCount === 3 ? state.played + 1 : state.played
        })
;
// state => state
const nextNumber = (state)=>({
        ...State,
        number: generateNumber(),
        started: true,
        playing: true,
        streak: state.streak,
        best: state.best,
        dark: state.dark,
        played: state.played,
        stats: state.stats
    })
;
// state => state
const finish = (state)=>({
        ...State,
        number: generateNumber(),
        played: state.played,
        stats: state.stats,
        best: state.best,
        dark: state.dark
    })
;
// Start a new Nanny State
const Update = _nannyState.Nanny(State);

},{"nanny-state":"6WCCK"}],"6WCCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Nanny", ()=>Nanny
);
parcelHelpers.export(exports, "html", ()=>_uhtml.html
);
parcelHelpers.export(exports, "svg", ()=>_uhtml.svg
);
var _uhtml = require("uhtml");
function Nanny(State = {
}, { Element =State.Element || document.body , View =State.View || `NANNY STATE` , Before =State.Before , After =State.After , Debug =State.Debug , LocalStorageKey =State.LocalStorageKey  } = {
}) {
    // Retrieve state from local storage.
    if (LocalStorageKey) State = localStorage.getItem(LocalStorageKey) ? JSON.parse(localStorage.getItem(LocalStorageKey)) : State;
    // render view based on initial state.
    _uhtml.render(Element, View(State));
    if (Debug) console.log(State);
    return (transformer, options)=>{
        if (Before) Before(State);
        // Update state based on the arguments.
        const newState = typeof transformer === "function" ? transformer(State) : transformer;
        // If the state is an object, create a copy and augment any changes to it.
        State = Object.prototype.toString.call(State) === "[object Object]" ? {
            ...State,
            ...newState
        } : newState;
        if (After) After(State);
        // Re-render the view based on updated state.
        _uhtml.render(Element, View(State));
        if (LocalStorageKey) localStorage.setItem(LocalStorageKey, JSON.stringify(State));
        if (Debug) console.log(State);
        return State;
    };
}

},{"uhtml":"if09d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"if09d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Hole", ()=>_rabbitJs.Hole
);
parcelHelpers.export(exports, "render", ()=>render
);
parcelHelpers.export(exports, "html", ()=>html
);
parcelHelpers.export(exports, "svg", ()=>svg
);
parcelHelpers.export(exports, "foreign", ()=>_uhandlers.foreign
);
var _umap = require("umap");
var _umapDefault = parcelHelpers.interopDefault(_umap);
var _rabbitJs = require("./rabbit.js");
var _uhandlers = require("uhandlers");
const { create , defineProperties  } = Object;
// both `html` and `svg` template literal tags are polluted
// with a `for(ref[, id])` and a `node` tag too
const tag = (type)=>{
    // both `html` and `svg` tags have their own cache
    const keyed = _umapDefault.default(new WeakMap);
    // keyed operations always re-use the same cache and unroll
    // the template and its interpolations right away
    const fixed = (cache1)=>(template, ...values)=>_rabbitJs.unroll(cache1, {
                type,
                template,
                values
            })
    ;
    return defineProperties(// non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values)=>new _rabbitJs.Hole(type, template, values)
    , {
        for: {
            // keyed operations need a reference object, usually the parent node
            // which is showing keyed results, and optionally a unique id per each
            // related node, handy with JSON results and mutable list of objects
            // that usually carry a unique identifier
            value (ref, id) {
                const memo = keyed.get(ref) || keyed.set(ref, create(null));
                return memo[id] || (memo[id] = fixed(_rabbitJs.createCache()));
            }
        },
        node: {
            // it is possible to create one-off content out of the box via node tag
            // this might return the single created node, or a fragment with all
            // nodes present at the root level and, of course, their child nodes
            value: (template, ...values)=>_rabbitJs.unroll(_rabbitJs.createCache(), {
                    type,
                    template,
                    values
                }).valueOf()
        }
    });
};
// each rendered node gets its own cache
const cache = _umapDefault.default(new WeakMap);
// rendering means understanding what `html` or `svg` tags returned
// and it relates a specific node to its own unique cache.
// Each time the content to render changes, the node is cleaned up
// and the new new content is appended, and if such content is a Hole
// then it's "unrolled" to resolve all its inner nodes.
const render = (where, what)=>{
    const hole = typeof what === 'function' ? what() : what;
    const info = cache.get(where) || cache.set(where, _rabbitJs.createCache());
    const wire = hole instanceof _rabbitJs.Hole ? _rabbitJs.unroll(info, hole) : hole;
    if (wire !== info.wire) {
        info.wire = wire;
        where.textContent = '';
        // valueOf() simply returns the node itself, but in case it was a "wire"
        // it will eventually re-append all nodes to its fragment so that such
        // fragment can be re-appended many times in a meaningful way
        // (wires are basically persistent fragments facades with special behavior)
        where.appendChild(wire.valueOf());
    }
    return where;
};
const html = tag('html');
const svg = tag('svg');

},{"umap":"b3ep2","./rabbit.js":"4YYgA","uhandlers":"ceEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b3ep2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (_)=>({
        // About: get: _.get.bind(_)
        // It looks like WebKit/Safari didn't optimize bind at all,
        // so that using bind slows it down by 60%.
        // Firefox and Chrome are just fine in both cases,
        // so let's use the approach that works fast everywhere 👍
        get: (key)=>_.get(key)
        ,
        set: (key, value)=>(_.set(key, value), value)
    })
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4YYgA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCache", ()=>createCache
);
parcelHelpers.export(exports, "unroll", ()=>unroll
);
/**
 * Holds all details wrappers needed to render the content further on.
 * @constructor
 * @param {string} type The hole type, either `html` or `svg`.
 * @param {string[]} template The template literals used to the define the content.
 * @param {Array} values Zero, one, or more interpolated values to render.
 */ parcelHelpers.export(exports, "Hole", ()=>Hole
);
var _umap = require("umap");
var _umapDefault = parcelHelpers.interopDefault(_umap);
var _uparser = require("uparser");
var _uparserDefault = parcelHelpers.interopDefault(_uparser);
var _uarray = require("uarray");
var _uwire = require("uwire");
var _handlersJs = require("./handlers.js");
var _nodeJs = require("./node.js");
// from a fragment container, create an array of indexes
// related to its child nodes, so that it's possible
// to retrieve later on exact node via reducePath
const createPath = (node)=>{
    const path = [];
    let { parentNode  } = node;
    while(parentNode){
        path.push(_uarray.indexOf.call(parentNode.childNodes, node));
        node = parentNode;
        parentNode = node.parentNode;
    }
    return path;
};
// the prefix is used to identify either comments, attributes, or nodes
// that contain the related unique id. In the attribute cases
// isµX="attribute-name" will be used to map current X update to that
// attribute name, while comments will be like <!--isµX-->, to map
// the update to that specific comment node, hence its parent.
// style and textarea will have <!--isµX--> text content, and are handled
// directly through text-only updates.
const prefix = 'isµ';
// Template Literals are unique per scope and static, meaning a template
// should be parsed once, and once only, as it will always represent the same
// content, within the exact same amount of updates each time.
// This cache relates each template to its unique content and updates.
const cache = _umapDefault.default(new WeakMap);
// a RegExp that helps checking nodes that cannot contain comments
const textOnly = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
const createCache = ()=>({
        stack: [],
        entry: null,
        //  * the template that is representing
        //  * the type of node it represents (html or svg)
        //  * the content fragment with all nodes
        //  * the list of updates per each node (template holes)
        //  * the "wired" node or fragment that will get updates
        // if the template or type are different from the previous one
        // the entry gets re-created each time
        wire: null // each rendered node represent some wired content and
    })
;
// the entry stored in the rendered node cache, and per each "hole"
const createEntry = (type, template)=>{
    const { content , updates  } = mapUpdates(type, template);
    return {
        type,
        template,
        content,
        updates,
        wire: null
    };
};
// a template is instrumented to be able to retrieve where updates are needed.
// Each unique template becomes a fragment, cloned once per each other
// operation based on the same template, i.e. data => html`<p>${data}</p>`
const mapTemplate = (type, template)=>{
    const text = _uparserDefault.default(template, prefix, type === 'svg');
    const content = _nodeJs.createFragment(text, type);
    // once instrumented and reproduced as fragment, it's crawled
    // to find out where each update is in the fragment tree
    const tw = _nodeJs.createWalker(content);
    const nodes = [];
    const length = template.length - 1;
    let i = 0;
    // updates are searched via unique names, linearly increased across the tree
    // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>
    let search = `${prefix}${i}`;
    while(i < length){
        const node = tw.nextNode();
        // if not all updates are bound but there's nothing else to crawl
        // it means that there is something wrong with the template.
        if (!node) throw `bad template: ${text}`;
        // if the current node is a comment, and it contains isµX
        // it means the update should take care of any content
        if (node.nodeType === 8) // The only comments to be considered are those
        // which content is exactly the same as the searched one.
        {
            if (node.data === search) {
                nodes.push({
                    type: 'node',
                    path: createPath(node)
                });
                search = `${prefix}${++i}`;
            }
        } else {
            // if the node is not a comment, loop through all its attributes
            // named isµX and relate attribute updates to this node and the
            // attribute name, retrieved through node.getAttribute("isµX")
            // the isµX attribute will be removed as irrelevant for the layout
            // let svg = -1;
            while(node.hasAttribute(search)){
                nodes.push({
                    type: 'attr',
                    path: createPath(node),
                    name: node.getAttribute(search)
                });
                node.removeAttribute(search);
                search = `${prefix}${++i}`;
            }
            // if the node was a style, textarea, or others, check its content
            // and if it is <!--isµX--> then update tex-only this node
            if (textOnly.test(node.tagName) && node.textContent.trim() === `<!--${search}-->`) {
                node.textContent = '';
                nodes.push({
                    type: 'text',
                    path: createPath(node)
                });
                search = `${prefix}${++i}`;
            }
        }
    }
    // once all nodes to update, or their attributes, are known, the content
    // will be cloned in the future to represent the template, and all updates
    // related to such content retrieved right away without needing to re-crawl
    // the exact same template, and its content, more than once.
    return {
        content,
        nodes
    };
};
// if a template is unknown, perform the previous mapping, otherwise grab
// its details such as the fragment with all nodes, and updates info.
const mapUpdates = (type, template)=>{
    const { content , nodes  } = cache.get(template) || cache.set(template, mapTemplate(type, template));
    // clone deeply the fragment
    const fragment = document.importNode(content, true);
    // and relate an update handler per each node that needs one
    const updates = nodes.map(_handlersJs.handlers, fragment);
    // return the fragment and all updates to use within its nodes
    return {
        content: fragment,
        updates
    };
};
const unroll = (info, { type , template , values  })=>{
    const { length  } = values;
    // interpolations can contain holes and arrays, so these need
    // to be recursively discovered
    unrollValues(info, values, length);
    let { entry  } = info;
    // if the cache entry is either null or different from the template
    // and the type this unroll should resolve, create a new entry
    // assigning a new content fragment and the list of updates.
    if (!entry || entry.template !== template || entry.type !== type) info.entry = entry = createEntry(type, template);
    const { content , updates , wire  } = entry;
    // even if the fragment and its nodes is not live yet,
    // it is already possible to update via interpolations values.
    for(let i = 0; i < length; i++)updates[i](values[i]);
    // if the entry was new, or representing a different template or type,
    // create a new persistent entity to use during diffing.
    // This is simply a DOM node, when the template has a single container,
    // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.
    return wire || (entry.wire = _uwire.persistent(content));
};
// the stack retains, per each interpolation value, the cache
// related to each interpolation value, or null, if the render
// was conditional and the value is not special (Array or Hole)
const unrollValues = ({ stack  }, values, length)=>{
    for(let i = 0; i < length; i++){
        const hole = values[i];
        // each Hole gets unrolled and re-assigned as value
        // so that domdiff will deal with a node/wire, not with a hole
        if (hole instanceof Hole) values[i] = unroll(stack[i] || (stack[i] = createCache()), hole);
        else if (_uarray.isArray(hole)) unrollValues(stack[i] || (stack[i] = createCache()), hole, hole.length);
        else stack[i] = null;
    }
    if (length < stack.length) stack.splice(length);
};
function Hole(type, template, values) {
    this.type = type;
    this.template = template;
    this.values = values;
}

},{"umap":"b3ep2","uparser":"l3Oqg","uarray":"7ftea","uwire":"eGHCa","./handlers.js":"aEsZd","./node.js":"9Th3F","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3Oqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const attr = /([^\s\\>"'=]+)\s*=\s*(['"]?)$/;
const empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
const node = /<[a-z][^>]+$/i;
const notNode = />[^<>]*$/;
const selfClosing = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig;
const trimEnd = /\s+$/;
const isNode = (template, i)=>0 < i-- && (node.test(template[i]) || !notNode.test(template[i]) && isNode(template, i))
;
const regular = (original, name, extra)=>empty.test(name) ? original : `<${name}${extra.replace(trimEnd, '')}></${name}>`
;
exports.default = (template, prefix, svg)=>{
    const text = [];
    const { length  } = template;
    for(let i = 1; i < length; i++){
        const chunk = template[i - 1];
        text.push(attr.test(chunk) && isNode(template, i) ? chunk.replace(attr, (_, $1, $2)=>`${prefix}${i - 1}=${$2 || '"'}${$1}${$2 ? '' : '"'}`
        ) : `${chunk}<!--${prefix}${i - 1}-->`);
    }
    text.push(template[length - 1]);
    const output = text.join('').trim();
    return svg ? output : output.replace(selfClosing, regular);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ftea":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
parcelHelpers.export(exports, "indexOf", ()=>indexOf
);
parcelHelpers.export(exports, "slice", ()=>slice
);
const { isArray  } = Array;
const { indexOf , slice  } = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGHCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "diffable", ()=>diffable
);
parcelHelpers.export(exports, "persistent", ()=>persistent
);
var _uarray = require("uarray");
const ELEMENT_NODE = 1;
const nodeType = 111;
const remove = ({ firstChild , lastChild  })=>{
    const range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
};
const diffable = (node, operation)=>node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node
;
const persistent = (fragment)=>{
    const { childNodes  } = fragment;
    const { length  } = childNodes;
    if (length < 2) return length ? childNodes[0] : fragment;
    const nodes = _uarray.slice.call(childNodes, 0);
    const firstChild = nodes[0];
    const lastChild = nodes[length - 1];
    return {
        ELEMENT_NODE,
        nodeType,
        firstChild,
        lastChild,
        valueOf () {
            if (childNodes.length !== length) {
                let i = 0;
                while(i < length)fragment.appendChild(nodes[i++]);
            }
            return fragment;
        }
    };
};

},{"uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEsZd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// each mapped update carries the update type and its path
// the type is either node, attribute, or text, while
// the path is how to retrieve the related node to update.
// In the attribute case, the attribute name is also carried along.
parcelHelpers.export(exports, "handlers", ()=>handlers
);
var _uarray = require("uarray");
var _udomdiff = require("udomdiff");
var _udomdiffDefault = parcelHelpers.interopDefault(_udomdiff);
var _uhandlers = require("uhandlers");
var _uwire = require("uwire");
// from a generic path, retrieves the exact targeted node
const reducePath = ({ childNodes  }, i)=>childNodes[i]
;
// this helper avoid code bloat around handleAnything() callback
const diff = (comment, oldNodes, newNodes)=>_udomdiffDefault.default(comment.parentNode, // TODO: there is a possible edge case where a node has been
    //       removed manually, or it was a keyed one, attached
    //       to a shared reference between renders.
    //       In this case udomdiff might fail at removing such node
    //       as its parent won't be the expected one.
    //       The best way to avoid this issue is to filter oldNodes
    //       in search of those not live, or not in the current parent
    //       anymore, but this would require both a change to uwire,
    //       exposing a parentNode from the firstChild, as example,
    //       but also a filter per each diff that should exclude nodes
    //       that are not in there, penalizing performance quite a lot.
    //       As this has been also a potential issue with domdiff,
    //       and both lighterhtml and hyperHTML might fail with this
    //       very specific edge case, I might as well document this possible
    //       "diffing shenanigan" and call it a day.
    oldNodes, newNodes, _uwire.diffable, comment)
;
// if an interpolation represents a comment, the whole
// diffing will be related to such comment.
// This helper is in charge of understanding how the new
// content for such interpolation/hole should be updated
const handleAnything = (comment)=>{
    let oldValue, text, nodes = [];
    const anyContent = (newValue)=>{
        switch(typeof newValue){
            // primitives are handled as text content
            case 'string':
            case 'number':
            case 'boolean':
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (!text) text = document.createTextNode('');
                    text.data = newValue;
                    nodes = diff(comment, nodes, [
                        text
                    ]);
                }
                break;
            // null, and undefined are used to cleanup previous content
            case 'object':
            case 'undefined':
                if (newValue == null) {
                    if (oldValue != newValue) {
                        oldValue = newValue;
                        nodes = diff(comment, nodes, []);
                    }
                    break;
                }
                // arrays and nodes have a special treatment
                if (_uarray.isArray(newValue)) {
                    oldValue = newValue;
                    // arrays can be used to cleanup, if empty
                    if (newValue.length === 0) nodes = diff(comment, nodes, []);
                    else if (typeof newValue[0] === 'object') nodes = diff(comment, nodes, newValue);
                    else anyContent(String(newValue));
                    break;
                }
                // if the new value is a DOM node, or a wire, and it's
                // different from the one already live, then it's diffed.
                // if the node is a fragment, it's appended once via its childNodes
                // There is no `else` here, meaning if the content
                // is not expected one, nothing happens, as easy as that.
                if (oldValue !== newValue && 'ELEMENT_NODE' in newValue) {
                    oldValue = newValue;
                    nodes = diff(comment, nodes, newValue.nodeType === 11 ? _uarray.slice.call(newValue.childNodes) : [
                        newValue
                    ]);
                }
                break;
            case 'function':
                anyContent(newValue(comment));
                break;
        }
    };
    return anyContent;
};
// attributes can be:
//  * ref=${...}      for hooks and other purposes
//  * aria=${...}     for aria attributes
//  * ?boolean=${...} for boolean attributes
//  * .dataset=${...} for dataset related attributes
//  * .setter=${...}  for Custom Elements setters or nodes with setters
//                    such as buttons, details, options, select, etc
//  * @event=${...}   to explicitly handle event listeners
//  * onevent=${...}  to automatically handle event listeners
//  * generic=${...}  to handle an attribute just like an attribute
const handleAttribute = (node, name /*, svg*/ )=>{
    switch(name[0]){
        case '?':
            return _uhandlers.boolean(node, name.slice(1), false);
        case '.':
            return _uhandlers.setter(node, name.slice(1));
        case '@':
            return _uhandlers.event(node, 'on' + name.slice(1));
        case 'o':
            if (name[1] === 'n') return _uhandlers.event(node, name);
    }
    switch(name){
        case 'ref':
            return _uhandlers.ref(node);
        case 'aria':
            return _uhandlers.aria(node);
    }
    return _uhandlers.attribute(node, name /*, svg*/ );
};
function handlers(options) {
    const { type , path  } = options;
    const node = path.reduceRight(reducePath, this);
    return type === 'node' ? handleAnything(node) : type === 'attr' ? handleAttribute(node, options.name /*, options.svg*/ ) : _uhandlers.text(node);
}

},{"uarray":"7ftea","udomdiff":"9UVlK","uhandlers":"ceEOD","uwire":"eGHCa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UVlK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = (parentNode, a, b, get, before)=>{
    const bLength = b.length;
    let aEnd = a.length;
    let bEnd = bLength;
    let aStart = 0;
    let bStart = 0;
    let map = null;
    while(aStart < aEnd || bStart < bEnd){
        // append head, tail, or nodes in between: fast path
        if (aEnd === aStart) {
            // we could be in a situation where the rest of nodes that
            // need to be added are not at the end, and in such case
            // the node to `insertBefore`, if the index is more than 0
            // must be retrieved, otherwise it's gonna be the first item.
            const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
            while(bStart < bEnd)parentNode.insertBefore(get(b[bStart++], 1), node);
        } else if (bEnd === bStart) while(aStart < aEnd){
            // remove the node only if it's unknown or not live
            if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
            aStart++;
        }
        else if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
        } else if (a[aEnd - 1] === b[bEnd - 1]) {
            aEnd--;
            bEnd--;
        } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            // this is a "shrink" operation that could happen in these cases:
            // [1, 2, 3, 4, 5]
            // [1, 4, 3, 2, 5]
            // or asymmetric too
            // [1, 2, 3, 4, 5]
            // [1, 2, 3, 5, 6, 4]
            const node = get(a[--aEnd], -1).nextSibling;
            parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
            parentNode.insertBefore(get(b[--bEnd], 1), node);
            // mark the future index as identical (yeah, it's dirty, but cheap 👍)
            // The main reason to do this, is that when a[aEnd] will be reached,
            // the loop will likely be on the fast path, as identical to b[bEnd].
            // In the best case scenario, the next loop will skip the tail,
            // but in the worst one, this node will be considered as already
            // processed, bailing out pretty quickly from the map index check
            a[aEnd] = b[bEnd];
        } else {
            // the map requires an O(bEnd - bStart) operation once
            // to store all future nodes indexes for later purposes.
            // In the worst case scenario, this is a full O(N) cost,
            // and such scenario happens at least when all nodes are different,
            // but also if both first and last items of the lists are different
            if (!map) {
                map = new Map;
                let i = bStart;
                while(i < bEnd)map.set(b[i], i++);
            }
            // if it's a future node, hence it needs some handling
            if (map.has(a[aStart])) {
                // grab the index of such node, 'cause it might have been processed
                const index = map.get(a[aStart]);
                // if it's not already processed, look on demand for the next LCS
                if (bStart < index && index < bEnd) {
                    let i = aStart;
                    // counts the amount of nodes that are the same in the future
                    let sequence = 1;
                    while(++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)sequence++;
                    // effort decision here: if the sequence is longer than replaces
                    // needed to reach such sequence, which would brings again this loop
                    // to the fast path, prepend the difference before a sequence,
                    // and move only the future list index forward, so that aStart
                    // and bStart will be aligned again, hence on the fast path.
                    // An example considering aStart and bStart are both 0:
                    // a: [1, 2, 3, 4]
                    // b: [7, 1, 2, 3, 6]
                    // this would place 7 before 1 and, from that time on, 1, 2, and 3
                    // will be processed at zero cost
                    if (sequence > index - bStart) {
                        const node = get(a[aStart], 0);
                        while(bStart < index)parentNode.insertBefore(get(b[bStart++], 1), node);
                    } else parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
                } else aStart++;
            } else parentNode.removeChild(get(a[aStart++], -1));
        }
    }
    return b;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ceEOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Foreign", ()=>Foreign
);
parcelHelpers.export(exports, "foreign", ()=>foreign
);
parcelHelpers.export(exports, "aria", ()=>aria
);
parcelHelpers.export(exports, "attribute", ()=>attribute
);
parcelHelpers.export(exports, "boolean", ()=>boolean
);
parcelHelpers.export(exports, "data", ()=>data
);
parcelHelpers.export(exports, "event", ()=>event
);
parcelHelpers.export(exports, "ref", ()=>ref
);
parcelHelpers.export(exports, "setter", ()=>setter
);
parcelHelpers.export(exports, "text", ()=>text
);
var _uarray = require("uarray");
// flag for foreign checks (slower path, fast by default)
let useForeign = false;
class Foreign {
    constructor(handler, value){
        useForeign = true;
        this._ = (...args)=>handler(...args, value)
        ;
    }
}
const foreign = (handler, value)=>new Foreign(handler, value)
;
const aria = (node)=>(values)=>{
        for(const key in values){
            const name = key === 'role' ? key : `aria-${key}`;
            const value = values[key];
            if (value == null) node.removeAttribute(name);
            else node.setAttribute(name, value);
        }
    }
;
const attribute = (node, name)=>{
    let oldValue, orphan = true;
    const attributeNode = document.createAttributeNS(null, name);
    return (newValue)=>{
        if (oldValue !== newValue) {
            oldValue = newValue;
            if (oldValue == null) {
                if (!orphan) {
                    node.removeAttributeNode(attributeNode);
                    orphan = true;
                }
            } else {
                const value = useForeign && newValue instanceof Foreign ? newValue._(node, name) : newValue;
                if (value == null) {
                    if (!orphan) node.removeAttributeNode(attributeNode);
                    orphan = true;
                } else {
                    attributeNode.value = value;
                    if (orphan) {
                        node.setAttributeNodeNS(attributeNode);
                        orphan = false;
                    }
                }
            }
        }
    };
};
const boolean = (node, key, oldValue)=>(newValue)=>{
        if (oldValue !== !!newValue) {
            // when IE won't be around anymore ...
            // node.toggleAttribute(key, oldValue = !!newValue);
            if (oldValue = !!newValue) node.setAttribute(key, '');
            else node.removeAttribute(key);
        }
    }
;
const data = ({ dataset  })=>(values)=>{
        for(const key in values){
            const value = values[key];
            if (value == null) delete dataset[key];
            else dataset[key] = value;
        }
    }
;
const event = (node, name)=>{
    let oldValue, lower, type = name.slice(2);
    if (!(name in node) && (lower = name.toLowerCase()) in node) type = lower.slice(2);
    return (newValue)=>{
        const info = _uarray.isArray(newValue) ? newValue : [
            newValue,
            false
        ];
        if (oldValue !== info[0]) {
            if (oldValue) node.removeEventListener(type, oldValue, info[1]);
            if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
        }
    };
};
const ref = (node)=>{
    let oldValue;
    return (value)=>{
        if (oldValue !== value) {
            oldValue = value;
            if (typeof value === 'function') value(node);
            else value.current = node;
        }
    };
};
const setter = (node, key)=>key === 'dataset' ? data(node) : (value)=>{
        node[key] = value;
    }
;
const text = (node)=>{
    let oldValue;
    return (newValue)=>{
        if (oldValue != newValue) {
            oldValue = newValue;
            node.textContent = newValue == null ? '' : newValue;
        }
    };
};

},{"uarray":"7ftea","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Th3F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createFragment", ()=>createFragment
);
parcelHelpers.export(exports, "createWalker", ()=>createWalker
);
var _createContent = require("@ungap/create-content");
var _createContentDefault = parcelHelpers.interopDefault(_createContent);
// this "hack" tells the library if the browser is IE11 or old Edge
const isImportNodeLengthWrong = document.importNode.length != 1;
const createFragment = isImportNodeLengthWrong ? (text, type, normalize)=>document.importNode(_createContentDefault.default(text, type, normalize), true)
 : _createContentDefault.default;
const createWalker = isImportNodeLengthWrong ? (fragment)=>document.createTreeWalker(fragment, 129, null, false)
 : (fragment)=>document.createTreeWalker(fragment, 129)
;

},{"@ungap/create-content":"4xeIY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xeIY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! (c) Andrea Giammarchi - ISC */ var createContent = function(document) {
    var FRAGMENT = 'fragment';
    var TEMPLATE = 'template';
    var HAS_CONTENT = 'content' in create(TEMPLATE);
    var createHTML = HAS_CONTENT ? function(html) {
        var template = create(TEMPLATE);
        template.innerHTML = html;
        return template.content;
    } : function(html) {
        var content = create(FRAGMENT);
        var template = create(TEMPLATE);
        var childNodes = null;
        if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
            var selector = RegExp.$1;
            template.innerHTML = '<table>' + html + '</table>';
            childNodes = template.querySelectorAll(selector);
        } else {
            template.innerHTML = html;
            childNodes = template.childNodes;
        }
        append(content, childNodes);
        return content;
    };
    function append(root, childNodes) {
        var length = childNodes.length;
        while(length--)root.appendChild(childNodes[0]);
    }
    function create(element) {
        return element === FRAGMENT ? document.createDocumentFragment() : document.createElementNS('http://www.w3.org/1999/xhtml', element);
    }
    // it could use createElementNS when hasNode is there
    // but this fallback is equally fast and easier to maintain
    // it is also battle tested already in all IE
    function createSVG(svg) {
        var content = create(FRAGMENT);
        var template = create('div');
        template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
        append(content, template.firstChild.childNodes);
        return content;
    }
    return function createContent(markup, type) {
        return (type === 'svg' ? createSVG : createHTML)(markup);
    };
}(document);
exports.default = createContent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6IXwR","bNKaB"], "bNKaB", "parcelRequire0e28")

//# sourceMappingURL=index.0641b553.js.map
