parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

    // if we cannot find the module within our internal map or
    // cache jump to the current global require ie. the last bundle
    // that was added to the page.
    var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

    var err = new Error('Cannot find module \'' + name + '\'');
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? {
    d: a.default
  } : {
    d: a
  };
}

var $parcel$global = this;
// ASSET: ../node_modules/@babel/runtime/regenerator/index.js
var $PMvg$exports = {};
// ASSET: ../node_modules/regenerator-runtime/runtime.js
var $QVnC$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var $QVnC$var$runtime = function (exports) {
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
"object" === "object" ? $QVnC$exports : {});

try {
  regeneratorRuntime = $QVnC$var$runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")($QVnC$var$runtime);
}

$PMvg$exports = $QVnC$exports;
// ASSET: ../node_modules/@babel/runtime/helpers/asyncToGenerator.js
var $agGE$exports = {};

function $agGE$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function $agGE$var$_asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        $agGE$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        $agGE$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

$agGE$exports = $agGE$var$_asyncToGenerator;
// ASSET: ../node_modules/parcel-bundler/src/builtins/_empty.js
var $rDCW$executed = false;

function $rDCW$init() {
  if ($rDCW$executed) return;
  $rDCW$executed = true;
}

// ASSET: ../node_modules/process/browser.js
var $pBGv$exports,
    $pBGv$var$process,
    $pBGv$var$cachedSetTimeout,
    $pBGv$var$cachedClearTimeout,
    $pBGv$var$queue,
    $pBGv$var$draining,
    $pBGv$var$currentQueue,
    $pBGv$var$queueIndex,
    $pBGv$executed = false;

function $pBGv$var$defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function $pBGv$var$defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

function $pBGv$var$runTimeout(fun) {
  if ($pBGv$var$cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if (($pBGv$var$cachedSetTimeout === $pBGv$var$defaultSetTimout || !$pBGv$var$cachedSetTimeout) && setTimeout) {
    $pBGv$var$cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return $pBGv$var$cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return $pBGv$var$cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return $pBGv$var$cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function $pBGv$var$runClearTimeout(marker) {
  if ($pBGv$var$cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if (($pBGv$var$cachedClearTimeout === $pBGv$var$defaultClearTimeout || !$pBGv$var$cachedClearTimeout) && clearTimeout) {
    $pBGv$var$cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return $pBGv$var$cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return $pBGv$var$cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return $pBGv$var$cachedClearTimeout.call(this, marker);
    }
  }
}

function $pBGv$var$cleanUpNextTick() {
  if (!$pBGv$var$draining || !$pBGv$var$currentQueue) {
    return;
  }

  $pBGv$var$draining = false;

  if ($pBGv$var$currentQueue.length) {
    $pBGv$var$queue = $pBGv$var$currentQueue.concat($pBGv$var$queue);
  } else {
    $pBGv$var$queueIndex = -1;
  }

  if ($pBGv$var$queue.length) {
    $pBGv$var$drainQueue();
  }
}

function $pBGv$var$drainQueue() {
  if ($pBGv$var$draining) {
    return;
  }

  var timeout = $pBGv$var$runTimeout($pBGv$var$cleanUpNextTick);
  $pBGv$var$draining = true;
  var len = $pBGv$var$queue.length;

  while (len) {
    $pBGv$var$currentQueue = $pBGv$var$queue;
    $pBGv$var$queue = [];

    while (++$pBGv$var$queueIndex < len) {
      if ($pBGv$var$currentQueue) {
        $pBGv$var$currentQueue[$pBGv$var$queueIndex].run();
      }
    }

    $pBGv$var$queueIndex = -1;
    len = $pBGv$var$queue.length;
  }

  $pBGv$var$currentQueue = null;
  $pBGv$var$draining = false;
  $pBGv$var$runClearTimeout(timeout);
}

// v8 likes predictible objects
function $pBGv$var$Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

function $pBGv$var$noop() {}

function $pBGv$init() {
  if ($pBGv$executed) return;
  $pBGv$executed = true;
  $pBGv$exports = {};
  $pBGv$var$process = $pBGv$exports = {};

  (function () {
    try {
      if (typeof setTimeout === 'function') {
        $pBGv$var$cachedSetTimeout = setTimeout;
      } else {
        $pBGv$var$cachedSetTimeout = $pBGv$var$defaultSetTimout;
      }
    } catch (e) {
      $pBGv$var$cachedSetTimeout = $pBGv$var$defaultSetTimout;
    }

    try {
      if (typeof clearTimeout === 'function') {
        $pBGv$var$cachedClearTimeout = clearTimeout;
      } else {
        $pBGv$var$cachedClearTimeout = $pBGv$var$defaultClearTimeout;
      }
    } catch (e) {
      $pBGv$var$cachedClearTimeout = $pBGv$var$defaultClearTimeout;
    }
  })();

  $pBGv$var$queue = [];
  $pBGv$var$draining = false;
  $pBGv$var$queueIndex = -1;

  $pBGv$var$process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }

    $pBGv$var$queue.push(new $pBGv$var$Item(fun, args));

    if ($pBGv$var$queue.length === 1 && !$pBGv$var$draining) {
      $pBGv$var$runTimeout($pBGv$var$drainQueue);
    }
  };

  $pBGv$var$Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  $pBGv$var$process.title = 'browser';
  $pBGv$var$process.env = {};
  $pBGv$var$process.argv = [];
  $pBGv$var$process.version = ''; // empty string to avoid regexp issues

  $pBGv$var$process.versions = {};
  $pBGv$var$process.on = $pBGv$var$noop;
  $pBGv$var$process.addListener = $pBGv$var$noop;
  $pBGv$var$process.once = $pBGv$var$noop;
  $pBGv$var$process.off = $pBGv$var$noop;
  $pBGv$var$process.removeListener = $pBGv$var$noop;
  $pBGv$var$process.removeAllListeners = $pBGv$var$noop;
  $pBGv$var$process.emit = $pBGv$var$noop;
  $pBGv$var$process.prependListener = $pBGv$var$noop;
  $pBGv$var$process.prependOnceListener = $pBGv$var$noop;

  $pBGv$var$process.listeners = function (name) {
    return [];
  };

  $pBGv$var$process.binding = function (name) {
    throw new Error('process.binding is not supported');
  };

  $pBGv$var$process.cwd = function () {
    return '/';
  };

  $pBGv$var$process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
  };

  $pBGv$var$process.umask = function () {
    return 0;
  };
}

// ASSET: ../node_modules/path-browserify/index.js
var $UUq2$exports,
    $UUq2$var$process,
    $UUq2$export$resolve,
    $UUq2$export$normalize,
    $UUq2$export$isAbsolute,
    $UUq2$export$join,
    $UUq2$export$relative,
    $UUq2$export$sep,
    $UUq2$export$delimiter,
    $UUq2$export$dirname,
    $UUq2$export$basename,
    $UUq2$export$extname,
    $UUq2$var$substr,
    $UUq2$executed = false;

// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function $UUq2$var$normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


function $UUq2$var$basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


function $UUq2$var$filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


function $UUq2$init() {
  if ($UUq2$executed) return;
  $UUq2$executed = true;
  $UUq2$exports = {};
  $UUq2$var$process = ($pBGv$init(), $pBGv$exports);

  $UUq2$export$resolve = function () {
    var resolvedPath = '',
        resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = i >= 0 ? arguments[i] : $UUq2$var$process.cwd(); // Skip empty and invalid entries

      if (typeof path !== 'string') {
        throw new TypeError('Arguments to path.resolve must be strings');
      } else if (!path) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    } // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path


    resolvedPath = $UUq2$var$normalizeArray($UUq2$var$filter(resolvedPath.split('/'), function (p) {
      return !!p;
    }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
  };

  $UUq2$exports.resolve = $UUq2$export$resolve; // path.normalize(path)
  // posix version

  $UUq2$export$normalize = function (path) {
    var isAbsolute = $UUq2$export$isAbsolute(path),
        trailingSlash = $UUq2$var$substr(path, -1) === '/'; // Normalize the path

    path = $UUq2$var$normalizeArray($UUq2$var$filter(path.split('/'), function (p) {
      return !!p;
    }), !isAbsolute).join('/');

    if (!path && !isAbsolute) {
      path = '.';
    }

    if (path && trailingSlash) {
      path += '/';
    }

    return (isAbsolute ? '/' : '') + path;
  };

  $UUq2$exports.normalize = $UUq2$export$normalize; // posix version

  $UUq2$export$isAbsolute = function (path) {
    return path.charAt(0) === '/';
  };

  $UUq2$exports.isAbsolute = $UUq2$export$isAbsolute; // posix version

  $UUq2$export$join = function () {
    var paths = Array.prototype.slice.call(arguments, 0);
    return $UUq2$export$normalize($UUq2$var$filter(paths, function (p, index) {
      if (typeof p !== 'string') {
        throw new TypeError('Arguments to path.join must be strings');
      }

      return p;
    }).join('/'));
  };

  $UUq2$exports.join = $UUq2$export$join; // path.relative(from, to)
  // posix version

  $UUq2$export$relative = function (from, to) {
    from = $UUq2$export$resolve(from).substr(1);
    to = $UUq2$export$resolve(to).substr(1);

    function trim(arr) {
      var start = 0;

      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;

      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;

    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    var outputParts = [];

    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
  };

  $UUq2$exports.relative = $UUq2$export$relative;
  $UUq2$export$sep = '/';
  $UUq2$exports.sep = $UUq2$export$sep;
  $UUq2$export$delimiter = ':';
  $UUq2$exports.delimiter = $UUq2$export$delimiter;

  $UUq2$export$dirname = function (path) {
    if (typeof path !== 'string') path = path + '';
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47
    /*/*/
    ;
    var end = -1;
    var matchedSlash = true;

    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);

      if (code === 47
      /*/*/
      ) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';

    if (hasRoot && end === 1) {
      // return '//';
      // Backwards-compat fix:
      return '/';
    }

    return path.slice(0, end);
  };

  $UUq2$exports.dirname = $UUq2$export$dirname;

  $UUq2$export$basename = function (path, ext) {
    var f = $UUq2$var$basename(path);

    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length);
    }

    return f;
  };

  $UUq2$exports.basename = $UUq2$export$basename;

  $UUq2$export$extname = function (path) {
    if (typeof path !== 'string') path = path + '';
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find

    var preDotState = 0;

    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);

      if (code === 47
      /*/*/
      ) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }

          continue;
        }

      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }

      if (code === 46
      /*.*/
      ) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  };

  $UUq2$exports.extname = $UUq2$export$extname;
  $UUq2$var$substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
    return str.substr(start, len);
  } : function (str, start, len) {
    if (start < 0) start = str.length + start;
    return str.substr(start, len);
  };
}

// ASSET: ../node_modules/opus-stream-decoder/dist/opus-stream-decoder.js
var $WWpj$exports = function () {
  var exports = this;
  var module = {
    exports: this
  };
  var process = ($pBGv$init(), $pBGv$exports);
  var __dirname = "/Users/nathanbolton/Downloads/stream/fetch-stream-audio/node_modules/opus-stream-decoder/dist";
  var Module = typeof Module !== "undefined" ? Module : {};

  Module["locateFile"] = function (filename) {
    return ENVIRONMENT_IS_NODE ? __dirname + "/" + filename : filename;
  };

  var moduleOverrides = {};
  var key;

  for (key in Module) {
    if (Module.hasOwnProperty(key)) {
      moduleOverrides[key] = Module[key];
    }
  }

  var arguments_ = [];
  var thisProgram = "./this.program";

  var quit_ = function (status, toThrow) {
    throw toThrow;
  };

  var ENVIRONMENT_IS_WEB = false;
  var ENVIRONMENT_IS_WORKER = false;
  var ENVIRONMENT_IS_NODE = false;
  var ENVIRONMENT_HAS_NODE = false;
  var ENVIRONMENT_IS_SHELL = false;
  ENVIRONMENT_IS_WEB = typeof window === "object";
  ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
  ENVIRONMENT_HAS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
  ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
  var scriptDirectory = "";

  function locateFile(path) {
    if (Module["locateFile"]) {
      return Module["locateFile"](path, scriptDirectory);
    }

    return scriptDirectory + path;
  }

  var read_, readAsync, readBinary, setWindowTitle;
  var nodeFS;
  var nodePath;

  if (ENVIRONMENT_IS_NODE) {
    scriptDirectory = __dirname + "/";

    read_ = function shell_read(filename, binary) {
      if (!nodeFS) nodeFS = ($rDCW$init(), {});
      if (!nodePath) nodePath = ($UUq2$init(), $UUq2$exports);
      filename = nodePath["normalize"](filename);
      return nodeFS["readFileSync"](filename, binary ? null : "utf8");
    };

    readBinary = function readBinary(filename) {
      var ret = read_(filename, true);

      if (!ret.buffer) {
        ret = new Uint8Array(ret);
      }

      assert(ret.buffer);
      return ret;
    };

    if (process["argv"].length > 1) {
      thisProgram = process["argv"][1].replace(/\\/g, "/");
    }

    arguments_ = process["argv"].slice(2);

    if (typeof module !== "undefined") {
      module["exports"] = Module;
    }

    process["on"]("uncaughtException", function (ex) {
      if (!(ex instanceof ExitStatus)) {
        throw ex;
      }
    });
    process["on"]("unhandledRejection", abort);

    quit_ = function (status) {
      process["exit"](status);
    };

    Module["inspect"] = function () {
      return "[Emscripten Module object]";
    };
  } else if (ENVIRONMENT_IS_SHELL) {
    if (typeof read != "undefined") {
      read_ = function shell_read(f) {
        return read(f);
      };
    }

    readBinary = function readBinary(f) {
      var data;

      if (typeof readbuffer === "function") {
        return new Uint8Array(readbuffer(f));
      }

      data = read(f, "binary");
      assert(typeof data === "object");
      return data;
    };

    if (typeof scriptArgs != "undefined") {
      arguments_ = scriptArgs;
    } else if (typeof arguments != "undefined") {
      arguments_ = arguments;
    }

    if (typeof quit === "function") {
      quit_ = function (status) {
        quit(status);
      };
    }

    if (typeof print !== "undefined") {
      if (typeof console === "undefined") console = {};
      console.log = print;
      console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
    }
  } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
      scriptDirectory = self.location.href;
    } else if (document.currentScript) {
      scriptDirectory = document.currentScript.src;
    }

    if (scriptDirectory.indexOf("blob:") !== 0) {
      scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
    } else {
      scriptDirectory = "";
    }

    {
      read_ = function shell_read(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send(null);
        return xhr.responseText;
      };

      if (ENVIRONMENT_IS_WORKER) {
        readBinary = function readBinary(url) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, false);
          xhr.responseType = "arraybuffer";
          xhr.send(null);
          return new Uint8Array(xhr.response);
        };
      }

      readAsync = function readAsync(url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer";

        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
            onload(xhr.response);
            return;
          }

          onerror();
        };

        xhr.onerror = onerror;
        xhr.send(null);
      };
    }

    setWindowTitle = function (title) {
      document.title = title;
    };
  } else {}

  var out = Module["print"] || console.log.bind(console);
  var err = Module["printErr"] || console.warn.bind(console);

  for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
      Module[key] = moduleOverrides[key];
    }
  }

  moduleOverrides = null;
  if (Module["arguments"]) arguments_ = Module["arguments"];
  if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
  if (Module["quit"]) quit_ = Module["quit"];
  var wasmBinary;
  if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];
  var noExitRuntime;
  if (Module["noExitRuntime"]) noExitRuntime = Module["noExitRuntime"];

  if (typeof WebAssembly !== "object") {
    err("no native wasm support detected");
  }

  var wasmMemory;
  var wasmTable = new WebAssembly.Table({
    "initial": 7,
    "maximum": 7 + 0,
    "element": "anyfunc"
  });
  var ABORT = false;
  var EXITSTATUS = 0;

  function assert(condition, text) {
    if (!condition) {
      abort("Assertion failed: " + text);
    }
  }

  function getCFunc(ident) {
    var func = Module["_" + ident];
    assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
    return func;
  }

  function ccall(ident, returnType, argTypes, args, opts) {
    var toC = {
      "string": function (str) {
        var ret = 0;

        if (str !== null && str !== undefined && str !== 0) {
          var len = (str.length << 2) + 1;
          ret = stackAlloc(len);
          stringToUTF8(str, ret, len);
        }

        return ret;
      },
      "array": function (arr) {
        var ret = stackAlloc(arr.length);
        writeArrayToMemory(arr, ret);
        return ret;
      }
    };

    function convertReturnValue(ret) {
      if (returnType === "string") return UTF8ToString(ret);
      if (returnType === "boolean") return Boolean(ret);
      return ret;
    }

    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;

    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];

        if (converter) {
          if (stack === 0) stack = stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }

    var ret = func.apply(null, cArgs);
    ret = convertReturnValue(ret);
    if (stack !== 0) stackRestore(stack);
    return ret;
  }

  function cwrap(ident, returnType, argTypes, opts) {
    argTypes = argTypes || [];
    var numericArgs = argTypes.every(function (type) {
      return type === "number";
    });
    var numericRet = returnType !== "string";

    if (numericRet && numericArgs && !opts) {
      return getCFunc(ident);
    }

    return function () {
      return ccall(ident, returnType, argTypes, arguments, opts);
    };
  }

  var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;

  function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;

    while (u8Array[endPtr] && !(endPtr >= endIdx)) ++endPtr;

    if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
      return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
    } else {
      var str = "";

      while (idx < endPtr) {
        var u0 = u8Array[idx++];

        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }

        var u1 = u8Array[idx++] & 63;

        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }

        var u2 = u8Array[idx++] & 63;

        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63;
        }

        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
    }

    return str;
  }

  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
  }

  function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0)) return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;

    for (var i = 0; i < str.length; ++i) {
      var u = str.charCodeAt(i);

      if (u >= 55296 && u <= 57343) {
        var u1 = str.charCodeAt(++i);
        u = 65536 + ((u & 1023) << 10) | u1 & 1023;
      }

      if (u <= 127) {
        if (outIdx >= endIdx) break;
        outU8Array[outIdx++] = u;
      } else if (u <= 2047) {
        if (outIdx + 1 >= endIdx) break;
        outU8Array[outIdx++] = 192 | u >> 6;
        outU8Array[outIdx++] = 128 | u & 63;
      } else if (u <= 65535) {
        if (outIdx + 2 >= endIdx) break;
        outU8Array[outIdx++] = 224 | u >> 12;
        outU8Array[outIdx++] = 128 | u >> 6 & 63;
        outU8Array[outIdx++] = 128 | u & 63;
      } else {
        if (outIdx + 3 >= endIdx) break;
        outU8Array[outIdx++] = 240 | u >> 18;
        outU8Array[outIdx++] = 128 | u >> 12 & 63;
        outU8Array[outIdx++] = 128 | u >> 6 & 63;
        outU8Array[outIdx++] = 128 | u & 63;
      }
    }

    outU8Array[outIdx] = 0;
    return outIdx - startIdx;
  }

  function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
  }

  var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;

  function writeArrayToMemory(array, buffer) {
    HEAP8.set(array, buffer);
  }

  var WASM_PAGE_SIZE = 65536;
  var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
  }

  var DYNAMIC_BASE = 5284544,
      DYNAMICTOP_PTR = 41504;
  var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 16777216;

  if (Module["wasmMemory"]) {
    wasmMemory = Module["wasmMemory"];
  } else {
    wasmMemory = new WebAssembly.Memory({
      "initial": INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE,
      "maximum": INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE
    });
  }

  if (wasmMemory) {
    buffer = wasmMemory.buffer;
  }

  INITIAL_TOTAL_MEMORY = buffer.byteLength;
  updateGlobalBufferAndViews(buffer);
  HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;

  function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
      var callback = callbacks.shift();

      if (typeof callback == "function") {
        callback();
        continue;
      }

      var func = callback.func;

      if (typeof func === "number") {
        if (callback.arg === undefined) {
          Module["dynCall_v"](func);
        } else {
          Module["dynCall_vi"](func, callback.arg);
        }
      } else {
        func(callback.arg === undefined ? null : callback.arg);
      }
    }
  }

  var __ATPRERUN__ = [];
  var __ATINIT__ = [];
  var __ATMAIN__ = [];
  var __ATPOSTRUN__ = [];
  var runtimeInitialized = false;

  function preRun() {
    if (Module["preRun"]) {
      if (typeof Module["preRun"] == "function") Module["preRun"] = [Module["preRun"]];

      while (Module["preRun"].length) {
        addOnPreRun(Module["preRun"].shift());
      }
    }

    callRuntimeCallbacks(__ATPRERUN__);
  }

  function initRuntime() {
    runtimeInitialized = true;
    callRuntimeCallbacks(__ATINIT__);
  }

  function preMain() {
    callRuntimeCallbacks(__ATMAIN__);
  }

  function postRun() {
    if (Module["postRun"]) {
      if (typeof Module["postRun"] == "function") Module["postRun"] = [Module["postRun"]];

      while (Module["postRun"].length) {
        addOnPostRun(Module["postRun"].shift());
      }
    }

    callRuntimeCallbacks(__ATPOSTRUN__);
  }

  function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb);
  }

  function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb);
  }

  function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb);
  }

  var Math_abs = Math.abs;
  var runDependencies = 0;
  var runDependencyWatcher = null;
  var dependenciesFulfilled = null;

  function addRunDependency(id) {
    runDependencies++;

    if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }
  }

  function removeRunDependency(id) {
    runDependencies--;

    if (Module["monitorRunDependencies"]) {
      Module["monitorRunDependencies"](runDependencies);
    }

    if (runDependencies == 0) {
      if (runDependencyWatcher !== null) {
        clearInterval(runDependencyWatcher);
        runDependencyWatcher = null;
      }

      if (dependenciesFulfilled) {
        var callback = dependenciesFulfilled;
        dependenciesFulfilled = null;
        callback();
      }
    }
  }

  Module["preloadedImages"] = {};
  Module["preloadedAudios"] = {};

  function abort(what) {
    if (Module["onAbort"]) {
      Module["onAbort"](what);
    }

    what += "";
    out(what);
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
    throw new WebAssembly.RuntimeError(what);
  }

  var dataURIPrefix = "data:application/octet-stream;base64,";

  function isDataURI(filename) {
    return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0;
  }

  var wasmBinaryFile = "opus-stream-decoder.wasm";

  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }

  function getBinary() {
    try {
      if (wasmBinary) {
        return new Uint8Array(wasmBinary);
      }

      if (readBinary) {
        return readBinary(wasmBinaryFile);
      } else {
        throw "both async and sync fetching of the wasm failed";
      }
    } catch (err) {
      abort(err);
    }
  }

  function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
      return fetch(wasmBinaryFile, {
        credentials: "same-origin"
      }).then(function (response) {
        if (!response["ok"]) {
          throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
        }

        return response["arrayBuffer"]();
      }).catch(function () {
        return getBinary();
      });
    }

    return new Promise(function (resolve, reject) {
      resolve(getBinary());
    });
  }

  function createWasm() {
    var info = {
      "env": asmLibraryArg,
      "wasi_snapshot_preview1": asmLibraryArg
    };

    function receiveInstance(instance, module) {
      var exports = instance.exports;
      Module["asm"] = exports;
      removeRunDependency("wasm-instantiate");
    }

    addRunDependency("wasm-instantiate");

    function receiveInstantiatedSource(output) {
      receiveInstance(output["instance"]);
    }

    function instantiateArrayBuffer(receiver) {
      return getBinaryPromise().then(function (binary) {
        return WebAssembly.instantiate(binary, info);
      }).then(receiver, function (reason) {
        err("failed to asynchronously prepare wasm: " + reason);
        abort(reason);
      });
    }

    function instantiateAsync() {
      if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
        fetch(wasmBinaryFile, {
          credentials: "same-origin"
        }).then(function (response) {
          var result = WebAssembly.instantiateStreaming(response, info);
          return result.then(receiveInstantiatedSource, function (reason) {
            err("wasm streaming compile failed: " + reason);
            err("falling back to ArrayBuffer instantiation");
            instantiateArrayBuffer(receiveInstantiatedSource);
          });
        });
      } else {
        return instantiateArrayBuffer(receiveInstantiatedSource);
      }
    }

    if (Module["instantiateWasm"]) {
      try {
        var exports = Module["instantiateWasm"](info, receiveInstance);
        return exports;
      } catch (e) {
        err("Module.instantiateWasm callback failed with error: " + e);
        return false;
      }
    }

    instantiateAsync();
    return {};
  }

  __ATINIT__.push({
    func: function () {
      ___wasm_call_ctors();
    }
  });

  var _abs = Math_abs;

  function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest);
  }

  function abortOnCannotGrowMemory(requestedSize) {
    abort("OOM");
  }

  function _emscripten_resize_heap(requestedSize) {
    abortOnCannotGrowMemory(requestedSize);
  }

  var PATH = {
    splitPath: function (filename) {
      var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return splitPathRe.exec(filename).slice(1);
    },
    normalizeArray: function (parts, allowAboveRoot) {
      var up = 0;

      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];

        if (last === ".") {
          parts.splice(i, 1);
        } else if (last === "..") {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }

      if (allowAboveRoot) {
        for (; up; up--) {
          parts.unshift("..");
        }
      }

      return parts;
    },
    normalize: function (path) {
      var isAbsolute = path.charAt(0) === "/",
          trailingSlash = path.substr(-1) === "/";
      path = PATH.normalizeArray(path.split("/").filter(function (p) {
        return !!p;
      }), !isAbsolute).join("/");

      if (!path && !isAbsolute) {
        path = ".";
      }

      if (path && trailingSlash) {
        path += "/";
      }

      return (isAbsolute ? "/" : "") + path;
    },
    dirname: function (path) {
      var result = PATH.splitPath(path),
          root = result[0],
          dir = result[1];

      if (!root && !dir) {
        return ".";
      }

      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }

      return root + dir;
    },
    basename: function (path) {
      if (path === "/") return "/";
      var lastSlash = path.lastIndexOf("/");
      if (lastSlash === -1) return path;
      return path.substr(lastSlash + 1);
    },
    extname: function (path) {
      return PATH.splitPath(path)[3];
    },
    join: function () {
      var paths = Array.prototype.slice.call(arguments, 0);
      return PATH.normalize(paths.join("/"));
    },
    join2: function (l, r) {
      return PATH.normalize(l + "/" + r);
    }
  };
  var SYSCALLS = {
    buffers: [null, [], []],
    printChar: function (stream, curr) {
      var buffer = SYSCALLS.buffers[stream];

      if (curr === 0 || curr === 10) {
        (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
        buffer.length = 0;
      } else {
        buffer.push(curr);
      }
    },
    varargs: 0,
    get: function (varargs) {
      SYSCALLS.varargs += 4;
      var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
      return ret;
    },
    getStr: function () {
      var ret = UTF8ToString(SYSCALLS.get());
      return ret;
    },
    get64: function () {
      var low = SYSCALLS.get(),
          high = SYSCALLS.get();
      return low;
    },
    getZero: function () {
      SYSCALLS.get();
    }
  };

  function _fd_close(fd) {
    try {
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
      return e.errno;
    }
  }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    try {
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
      return e.errno;
    }
  }

  function _fd_write(fd, iov, iovcnt, pnum) {
    try {
      var num = 0;

      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[iov + i * 8 >> 2];
        var len = HEAP32[iov + (i * 8 + 4) >> 2];

        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr + j]);
        }

        num += len;
      }

      HEAP32[pnum >> 2] = num;
      return 0;
    } catch (e) {
      if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
      return e.errno;
    }
  }

  var asmLibraryArg = {
    "a": _abs,
    "c": _emscripten_memcpy_big,
    "d": _emscripten_resize_heap,
    "f": _fd_close,
    "b": _fd_seek,
    "e": _fd_write,
    "memory": wasmMemory,
    "table": wasmTable
  };
  var asm = createWasm();
  Module["asm"] = asm;

  var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function () {
    return Module["asm"]["g"].apply(null, arguments);
  };

  var _opus_chunkdecoder_version = Module["_opus_chunkdecoder_version"] = function () {
    return Module["asm"]["h"].apply(null, arguments);
  };

  var _opus_chunkdecoder_enqueue = Module["_opus_chunkdecoder_enqueue"] = function () {
    return Module["asm"]["i"].apply(null, arguments);
  };

  var _opus_chunkdecoder_decode_float_stereo_deinterleaved = Module["_opus_chunkdecoder_decode_float_stereo_deinterleaved"] = function () {
    return Module["asm"]["j"].apply(null, arguments);
  };

  var _opus_chunkdecoder_create = Module["_opus_chunkdecoder_create"] = function () {
    return Module["asm"]["k"].apply(null, arguments);
  };

  var _malloc = Module["_malloc"] = function () {
    return Module["asm"]["l"].apply(null, arguments);
  };

  var _opus_chunkdecoder_free = Module["_opus_chunkdecoder_free"] = function () {
    return Module["asm"]["m"].apply(null, arguments);
  };

  var _free = Module["_free"] = function () {
    return Module["asm"]["n"].apply(null, arguments);
  };

  var _opus_get_version_string = Module["_opus_get_version_string"] = function () {
    return Module["asm"]["o"].apply(null, arguments);
  };

  var stackSave = Module["stackSave"] = function () {
    return Module["asm"]["p"].apply(null, arguments);
  };

  var stackAlloc = Module["stackAlloc"] = function () {
    return Module["asm"]["q"].apply(null, arguments);
  };

  var stackRestore = Module["stackRestore"] = function () {
    return Module["asm"]["r"].apply(null, arguments);
  };

  Module["asm"] = asm;
  Module["cwrap"] = cwrap;
  var calledRun;

  function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status;
  }

  dependenciesFulfilled = function runCaller() {
    if (!calledRun) run();
    if (!calledRun) dependenciesFulfilled = runCaller;
  };

  function run(args) {
    args = args || arguments_;

    if (runDependencies > 0) {
      return;
    }

    preRun();
    if (runDependencies > 0) return;

    function doRun() {
      if (calledRun) return;
      calledRun = true;
      if (ABORT) return;
      initRuntime();
      preMain();
      if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
      postRun();
    }

    if (Module["setStatus"]) {
      Module["setStatus"]("Running...");
      setTimeout(function () {
        setTimeout(function () {
          Module["setStatus"]("");
        }, 1);
        doRun();
      }, 1);
    } else {
      doRun();
    }
  }

  Module["run"] = run;

  if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];

    while (Module["preInit"].length > 0) {
      Module["preInit"].pop()();
    }
  }

  noExitRuntime = true;
  run();
  Module["OpusStreamDecoder"] = OpusStreamDecoder;

  if ("undefined" !== typeof $parcel$global && exports) {
    module.exports.OpusStreamDecoder = OpusStreamDecoder;
  }

  function OpusStreamDecodedAudio(left, right, samplesDecoded) {
    this.left = left;
    this.right = right;
    this.samplesDecoded = samplesDecoded;
    this.sampleRate = 48e3;
  }

  function OpusStreamDecoder(options) {
    if ("function" !== typeof options.onDecode) throw Error("onDecode callback is required.");
    Object.defineProperty(this, "onDecode", {
      value: options.onDecode
    });
  }

  OpusStreamDecoder.prototype.ready = new Promise(function (resolve, reject) {
    addOnPreMain(function () {
      var api = {
        malloc: cwrap("malloc", "number", ["number"]),
        free: cwrap("free", null, ["number"]),
        HEAPU8: HEAPU8,
        HEAPF32: HEAPF32,
        libopusVersion: cwrap("opus_get_version_string", "string", []),
        decoderVersion: cwrap("opus_chunkdecoder_version", "string", []),
        createDecoder: cwrap("opus_chunkdecoder_create", null, []),
        freeDecoder: cwrap("opus_chunkdecoder_free", null, ["number"]),
        enqueue: cwrap("opus_chunkdecoder_enqueue", null, ["number", "number", "number"]),
        decode: cwrap("opus_chunkdecoder_decode_float_stereo_deinterleaved", "number", ["number", "number", "number", "number"])
      };
      Object.freeze(api);
      Object.defineProperty(OpusStreamDecoder.prototype, "api", {
        value: api
      });
      resolve();
    });
  });

  OpusStreamDecoder.prototype.decode = function (uint8array) {
    if (!(uint8array instanceof Uint8Array)) throw Error("Data to decode must be Uint8Array");

    if (!this._decoderPointer) {
      this._decoderPointer = this.api.createDecoder();
    }

    var srcPointer, decodedInterleavedPtr, decodedInterleavedArry, decodedLeftPtr, decodedLeftArry, decodedRightPtr, decodedRightArry;

    try {
      var decodedPcmSize = 120 * 48 * 2;
      [decodedInterleavedPtr, decodedInterleavedArry] = this.createOutputArray(decodedPcmSize);
      [decodedLeftPtr, decodedLeftArry] = this.createOutputArray(decodedPcmSize / 2);
      [decodedRightPtr, decodedRightArry] = this.createOutputArray(decodedPcmSize / 2);
      var sendMax = 16 * 1024,
          sendStart = 0,
          sendSize;
      var srcLen = uint8array.byteLength;
      srcPointer = this.api.malloc(uint8array.BYTES_PER_ELEMENT * sendMax);

      while (sendStart < srcLen) {
        sendSize = Math.min(sendMax, srcLen - sendStart);
        this.api.HEAPU8.set(uint8array.subarray(sendStart, sendStart + sendSize), srcPointer);
        sendStart += sendSize;
        if (!this.api.enqueue(this._decoderPointer, srcPointer, sendSize)) throw Error("Could not enqueue bytes for decoding.  You may also have invalid Ogg Opus file.");
        var samplesDecoded,
            totalSamplesDecoded = 0;

        while (samplesDecoded = this.api.decode(this._decoderPointer, decodedInterleavedPtr, decodedPcmSize, decodedLeftPtr, decodedRightPtr)) {
          totalSamplesDecoded += samplesDecoded;
          this.onDecode(new OpusStreamDecodedAudio(decodedLeftArry.slice(0, samplesDecoded), decodedRightArry.slice(0, samplesDecoded), samplesDecoded));
        }
      }
    } catch (e) {
      throw e;
    } finally {
      this.api.free(srcPointer);
      this.api.free(decodedInterleavedPtr);
      this.api.free(decodedLeftPtr);
      this.api.free(decodedRightPtr);
    }
  };

  OpusStreamDecoder.prototype.free = function () {
    if (this._decoderPointer) {
      this.api.freeDecoder(this._decoderPointer);
    }
  };

  Object.defineProperty(OpusStreamDecoder.prototype, "createOutputArray", {
    value: function (length) {
      var pointer = this.api.malloc(Float32Array.BYTES_PER_ELEMENT * length);
      var array = new Float32Array(this.api.HEAPF32.buffer, pointer, length);
      return [pointer, array];
    }
  });
  return module.exports;
}.call({});

// ASSET: ../node_modules/@babel/runtime/helpers/classCallCheck.js
var $fcMS$exports = {};

function $fcMS$var$_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

$fcMS$exports = $fcMS$var$_classCallCheck;
// ASSET: ../node_modules/@babel/runtime/helpers/createClass.js
var $P8NW$exports = {};

function $P8NW$var$_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function $P8NW$var$_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) $P8NW$var$_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) $P8NW$var$_defineProperties(Constructor, staticProps);
  return Constructor;
}

$P8NW$exports = $P8NW$var$_createClass;
// ASSET: ../node_modules/@babel/runtime/helpers/defineProperty.js
var $IxO8$exports = {};

function $IxO8$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

$IxO8$exports = $IxO8$var$_defineProperty;

/* This solves https://github.com/AnthumChris/fetch-stream-audio/issues/11
 *
 * Controls decoded audio playback by filling a buffer and
 * flushing.  Assumes each sample is 4 bytes (float).
 * Grows exponentally to faciliate less-needed immediacy of playback and
 * fewer AudioBuffer objects created.
 * maxFlushSize and maxGrows are most likely the vals to tweak
 */
var $cBFh$export$DecodedAudioPlaybackBuffer = /*#__PURE__*/function () {
  // use a 128K buffer
  // exponentially grow over these many flushes
  // too small causes skips. 25 skips at 72kbps download, 64-kbit file
  // samples for for first flush. grow from here. 20ms @ 48,000 hz
  // expoonential grow coefficient from firstFlushLength samples to maxFlushSize bytes
  // Floating point is 4 bytes per sample
  // left/right channels of buffers we're filling
  // last filled position in buffer
  // user-provided function
  // number of times we've already flushed
  function DecodedAudioPlaybackBuffer(_ref) {
    var onFlush = _ref.onFlush;
    var $fcMS$$interop$default = $parcel$interopDefault($fcMS$exports);
    $fcMS$$interop$default.d(this, DecodedAudioPlaybackBuffer);
    var $IxO8$$interop$default = $parcel$interopDefault($IxO8$exports);
    $IxO8$$interop$default.d(this, "_bufferL", new Float32Array(DecodedAudioPlaybackBuffer.maxFlushSize));
    $IxO8$$interop$default.d(this, "_bufferR", new Float32Array(DecodedAudioPlaybackBuffer.maxFlushSize));
    $IxO8$$interop$default.d(this, "_bufferPos", void 0);
    $IxO8$$interop$default.d(this, "_onFlush", void 0);
    $IxO8$$interop$default.d(this, "_flushCount", void 0);
    if (typeof onFlush !== 'function') throw Error('onFlush must be a function');
    this._onFlush = onFlush;
    this.reset();
  }

  var $P8NW$$interop$default = $parcel$interopDefault($P8NW$exports);
  $P8NW$$interop$default.d(DecodedAudioPlaybackBuffer, [{
    key: "reset",
    value: function reset() {
      this._bufferPos = 0;
      this._flushCount = 0;
    }
  }, {
    key: "add",
    value: function add(_ref2) {
      var left = _ref2.left,
          right = _ref2.right;
      var srcLen = left.length;
      var bufferLen,
          srcStart = 0,
          bufferPos = this._bufferPos;

      while (srcStart < srcLen) {
        bufferLen = DecodedAudioPlaybackBuffer.flushLength(this._flushCount);
        var len = Math.min(bufferLen - bufferPos, srcLen - srcStart);
        var end = srcStart + len;

        this._bufferL.set(left.slice(srcStart, end), bufferPos);

        this._bufferR.set(right.slice(srcStart, end), bufferPos);

        srcStart += len;
        bufferPos += len;
        this._bufferPos = bufferPos;

        if (bufferPos === bufferLen) {
          this.flush(bufferPos);
          bufferPos = 0;
        }
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      var bufferPos = this._bufferPos;

      this._onFlush({
        left: this._bufferL.slice(0, bufferPos),
        right: this._bufferR.slice(0, bufferPos)
      });

      this._flushCount++;
      this._bufferPos = 0;
    }
  }]);
  return DecodedAudioPlaybackBuffer;
}();

var $IxO8$$interop$default = $parcel$interopDefault($IxO8$exports);
$IxO8$$interop$default.d($cBFh$export$DecodedAudioPlaybackBuffer, "maxFlushSize", 1024 * 128);
$IxO8$$interop$default.d($cBFh$export$DecodedAudioPlaybackBuffer, "maxGrows", 50);
$IxO8$$interop$default.d($cBFh$export$DecodedAudioPlaybackBuffer, "firstFlushLength", 0.02 * 48000);
$IxO8$$interop$default.d($cBFh$export$DecodedAudioPlaybackBuffer, "growFactor", Math.pow($cBFh$export$DecodedAudioPlaybackBuffer.maxFlushSize / 4 / $cBFh$export$DecodedAudioPlaybackBuffer.firstFlushLength, 1 / ($cBFh$export$DecodedAudioPlaybackBuffer.maxGrows - 1)));
$IxO8$$interop$default.d($cBFh$export$DecodedAudioPlaybackBuffer, "flushLength", function (flushCount) {
  var flushes = Math.min(flushCount, $cBFh$export$DecodedAudioPlaybackBuffer.maxGrows - 1);
  var multiplier = Math.pow($cBFh$export$DecodedAudioPlaybackBuffer.growFactor, flushes);
  var length = Math.round($cBFh$export$DecodedAudioPlaybackBuffer.firstFlushLength * multiplier);
  return length;
});
var $XYVu$var$decoder = new $WWpj$exports.OpusStreamDecoder({
  onDecode: $XYVu$var$onDecode
});
var $XYVu$var$playbackBuffer = new $cBFh$export$DecodedAudioPlaybackBuffer({
  onFlush: $XYVu$var$onFlush
});
var $XYVu$var$sessionId, $XYVu$var$flushTimeoutId;

function $XYVu$var$evalSessionId(newSessionId) {
  // detect new session and reset decoder
  if ($XYVu$var$sessionId && $XYVu$var$sessionId === newSessionId) {
    return;
  }

  $XYVu$var$sessionId = newSessionId;
  $XYVu$var$playbackBuffer.reset();
}

self.onmessage = /*#__PURE__*/function () {
  var $agGE$$interop$default = $parcel$interopDefault($agGE$exports);
  var $PMvg$$interop$default = $parcel$interopDefault($PMvg$exports);

  var _ref = $agGE$$interop$default.d( /*#__PURE__*/$PMvg$$interop$default.d.mark(function _callee(evt) {
    return $PMvg$$interop$default.d.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            $XYVu$var$evalSessionId(evt.data.sessionId);
            _context.next = 3;
            return $XYVu$var$decoder.ready;

          case 3:
            $XYVu$var$decoder.decode(new Uint8Array(evt.data.decode));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

function $XYVu$var$onDecode(_ref2) {
  var left = _ref2.left,
      right = _ref2.right,
      samplesDecoded = _ref2.samplesDecoded,
      sampleRate = _ref2.sampleRate; // Decoder recovers when it receives new files, and samplesDecoded is negative.
  // For cause, see https://github.com/AnthumChris/opus-stream-decoder/issues/7

  if (samplesDecoded < 0) {
    return;
  }

  $XYVu$var$playbackBuffer.add({
    left: left,
    right: right
  });
  $XYVu$var$scheduleLastFlush();
}

function $XYVu$var$onFlush(_ref3) {
  var left = _ref3.left,
      right = _ref3.right;
  var decoded = {
    channelData: [left, right],
    length: left.length,
    numberOfChannels: 2,
    sampleRate: 48000
  };
  self.postMessage({
    decoded: decoded,
    sessionId: $XYVu$var$sessionId
  }, [decoded.channelData[0].buffer, decoded.channelData[1].buffer]);
} // No End of file is signaled from decoder. This ensures last bytes always flush


function $XYVu$var$scheduleLastFlush() {
  clearTimeout($XYVu$var$flushTimeoutId);
  $XYVu$var$flushTimeoutId = setTimeout(function (_) {
    $XYVu$var$playbackBuffer.flush();
  }, 100);
}

return {
  "XYVu": {},
  "PMvg": $PMvg$exports,
  "agGE": $agGE$exports,
  "fcMS": $fcMS$exports,
  "P8NW": $P8NW$exports,
  "IxO8": $IxO8$exports
};
});