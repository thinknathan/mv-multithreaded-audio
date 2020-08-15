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

/* Audio file chunks read must be buffered before sending to decoder.
 * Otherwise, decoder returns white noise for odd (not even) chunk size).
 * Skipping/hissing occurs if buffer is too small or if network isn't fast enough.
 * Users must wait too long to hear audio if buffer is too large.
 *
 * Returns Promise that resolves when entire stream is read and bytes queued for decoding
 */
var $fyQH$export$BufferedStreamReader = /*#__PURE__*/function () {
  // callback on every read. useful for speed calcs
  // callback when buffer fills or read completes
  // HTTP request we're reading
  // buffer we're filling
  // last filled position in buffer
  function BufferedStreamReader(request, readBufferSize) {
    var $fcMS$$interop$default = $parcel$interopDefault($fcMS$exports);
    $fcMS$$interop$default.d(this, BufferedStreamReader);
    var $IxO8$$interop$default = $parcel$interopDefault($IxO8$exports);
    $IxO8$$interop$default.d(this, "onRead", void 0);
    $IxO8$$interop$default.d(this, "onBufferFull", void 0);
    $IxO8$$interop$default.d(this, "request", void 0);
    $IxO8$$interop$default.d(this, "buffer", void 0);
    $IxO8$$interop$default.d(this, "bufferPos", 0);
    $IxO8$$interop$default.d(this, "isRunning", void 0);
    $IxO8$$interop$default.d(this, "abortController", void 0);
    if (!(parseInt(readBufferSize) > 0)) throw Error('readBufferSize not provided');
    this.request = request;
    this.buffer = new Uint8Array(readBufferSize);
  }

  var $P8NW$$interop$default = $parcel$interopDefault($P8NW$exports);
  $P8NW$$interop$default.d(BufferedStreamReader, [{
    key: "abort",
    value: function abort() {
      if (this.abortController) {
        this.abortController.abort();
      }

      this.request = null;
    }
  }, {
    key: "read",
    value: function () {
      var $agGE$$interop$default = $parcel$interopDefault($agGE$exports);
      var $PMvg$$interop$default = $parcel$interopDefault($PMvg$exports);

      var _read = $agGE$$interop$default.d( /*#__PURE__*/$PMvg$$interop$default.d.mark(function _callee() {
        var _this = this;

        return $PMvg$$interop$default.d.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.isRunning) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", console.warn('cannot start - read in progess.'));

              case 2:
                this.isRunning = true;
                return _context.abrupt("return", this._start().catch(function (e) {
                  if (e.name === 'AbortError') {
                    return;
                  }

                  _this.abort();

                  throw e;
                }).finally(function (_) {
                  return _this.isRunning = false;
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }()
  }, {
    key: "_start",
    value: function () {
      var $agGE$$interop$default = $parcel$interopDefault($agGE$exports);
      var $PMvg$$interop$default = $parcel$interopDefault($PMvg$exports);

      var _start2 = $agGE$$interop$default.d( /*#__PURE__*/$PMvg$$interop$default.d.mark(function _callee3() {
        var _this2 = this;

        var signal, response, reader, contentLength, totalBytes, totalRead, byte, readBufferPos, read;
        return $PMvg$$interop$default.d.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.abortController = 'AbortController' in window ? new AbortController() : null;
                signal = this.abortController ? this.abortController.signal : null;
                _context3.next = 4;
                return fetch(this.request, {
                  signal: signal
                });

              case 4:
                response = _context3.sent;

                if (response.ok) {
                  _context3.next = 7;
                  break;
                }

                throw Error(response.status + ' ' + response.statusText);

              case 7:
                if (response.body) {
                  _context3.next = 9;
                  break;
                }

                throw Error('ReadableStream not yet supported in this browser - <a href="https://developer.mozilla.org/en-US/docs/Web/API/Body/body#Browser_Compatibility">browser compatibility</a>');

              case 9:
                reader = response.body.getReader(), contentLength = response.headers.get('content-length'), totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
                totalRead = 0, readBufferPos = 0;

                read = /*#__PURE__*/function () {
                  var _ref = $agGE$$interop$default.d( /*#__PURE__*/$PMvg$$interop$default.d.mark(function _callee2() {
                    var _yield$reader$read, value, done, byteLength;

                    return $PMvg$$interop$default.d.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return reader.read();

                          case 2:
                            _yield$reader$read = _context2.sent;
                            value = _yield$reader$read.value;
                            done = _yield$reader$read.done;
                            byteLength = value ? value.byteLength : 0;
                            totalRead += byteLength;

                            if (_this2.onRead) {
                              _this2.onRead({
                                bytes: value,
                                totalRead: totalRead,
                                totalBytes: totalBytes,
                                done: done
                              });
                            } // avoid blocking read()


                            setTimeout(function (_) {
                              return _this2._readIntoBuffer({
                                value: value,
                                done: done,
                                request: _this2.request
                              });
                            }); // console.log(this.request);
                            // this._readIntoBuffer({ value, done });

                            if (done) {
                              _context2.next = 11;
                              break;
                            }

                            return _context2.abrupt("return", read());

                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function read() {
                    return _ref.apply(this, arguments);
                  };
                }();

                return _context3.abrupt("return", read());

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _start() {
        return _start2.apply(this, arguments);
      }

      return _start;
    }()
  }, {
    key: "_requestIsAborted",
    value: function _requestIsAborted(_ref2) {
      var request = _ref2.request;
      return this.request !== request;
    }
  }, {
    key: "_flushBuffer",
    value: function _flushBuffer(_ref3) {
      var end = _ref3.end,
          done = _ref3.done,
          request = _ref3.request;

      if (this._requestIsAborted({
        request: request
      })) {
        return;
      }

      this.onBufferFull({
        bytes: this.buffer.slice(0, end),
        done: done
      });
    }
    /* read value into buffer and call onBufferFull when reached */

  }, {
    key: "_readIntoBuffer",
    value: function _readIntoBuffer(_ref4) {
      var value = _ref4.value,
          done = _ref4.done,
          request = _ref4.request;

      if (this._requestIsAborted({
        request: request
      })) {
        return;
      }

      if (done) {
        this._flushBuffer({
          end: this.bufferPos,
          done: done,
          request: request
        });

        return;
      }

      var src = value,
          srcLen = src.byteLength,
          bufferLen = this.buffer.byteLength;
      var srcStart = 0,
          bufferPos = this.bufferPos;

      while (srcStart < srcLen) {
        var len = Math.min(bufferLen - bufferPos, srcLen - srcStart);
        var end = srcStart + len;
        this.buffer.set(src.subarray(srcStart, end), bufferPos);
        srcStart += len;
        bufferPos += len;

        if (bufferPos === bufferLen) {
          bufferPos = 0;

          this._flushBuffer({
            end: Infinity,
            done: done,
            request: request
          });
        }
      }

      this.bufferPos = bufferPos;
    }
  }]);
  return BufferedStreamReader;
}();

function $NqjO$var$_createForOfIteratorHelper(o) {
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = $NqjO$var$_unsupportedIterableToArray(o))) {
      var i = 0;

      var F = function F() {};

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

  var it,
      normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
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
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function $NqjO$var$_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return $NqjO$var$_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $NqjO$var$_arrayLikeToArray(o, minLen);
}

function $NqjO$var$_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var $NqjO$export$AudioStreamPlayer = /*#__PURE__*/function () {
  // these shouldn't change once set
  // these are reset
  // used to prevent race conditions between cancel/starts
  // Created/Closed when this player starts/stops audio
  // Used to fix Safari Bug https://github.com/AnthumChris/fetch-stream-audio/issues/1
  // time scheduled of all AudioBuffers
  // audioContext.currentTime of first sched
  // AudioBuffers created
  // AudioBuffers played/ended
  // audio skipping caused by slow download
  function AudioStreamPlayer(url, readBufferSize, decoderName) {
    var _this = this;

    var $fcMS$$interop$default = $parcel$interopDefault($fcMS$exports);
    $fcMS$$interop$default.d(this, AudioStreamPlayer);
    var $IxO8$$interop$default = $parcel$interopDefault($IxO8$exports);
    $IxO8$$interop$default.d(this, "_worker", void 0);
    $IxO8$$interop$default.d(this, "_url", void 0);
    $IxO8$$interop$default.d(this, "_readBufferSize", void 0);
    $IxO8$$interop$default.d(this, "_sessionId", void 0);
    $IxO8$$interop$default.d(this, "_audioCtx", void 0);
    $IxO8$$interop$default.d(this, "_reader", void 0);
    $IxO8$$interop$default.d(this, "_audioSrcNodes", void 0);
    $IxO8$$interop$default.d(this, "_totalTimeScheduled", void 0);
    $IxO8$$interop$default.d(this, "_playStartedAt", void 0);
    $IxO8$$interop$default.d(this, "_abCreated", void 0);
    $IxO8$$interop$default.d(this, "_abEnded", void 0);
    $IxO8$$interop$default.d(this, "_skips", void 0);

    this._worker = new Worker(PluginManager._path + "worker-decoder-opus.js");

    this._worker.onerror = function (event) {
      _this._updateState({
        error: event.message
      });
    };

    this._worker.onmessage = this._onWorkerMessage.bind(this); // pause for now
    // this._audioCtx.suspend().then(_ => console.log('audio paused'));

    this._url = url;
    this._readBufferSize = readBufferSize;

    this._reset();
  }

  var $P8NW$$interop$default = $parcel$interopDefault($P8NW$exports);
  $P8NW$$interop$default.d(AudioStreamPlayer, [{
    key: "_reset",
    value: function _reset() {
      if (this._sessionId) {
        performance.clearMarks(this._downloadMarkKey);
      }

      this._sessionId = null;
      this._audioCtx = null;
      this._reader = null;
      this._audioSrcNodes = [];
      this._totalTimeScheduled = 0;
      this._playStartedAt = 0;
      this._abCreated = 0;
      this._abEnded = 0;
      this._skips = 0;
    }
  }, {
    key: "close",
    value: function close() {
      var _iterator = $NqjO$var$_createForOfIteratorHelper(this._audioSrcNodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          node.onended = null;
          node.disconnect(this._audioCtx.destination);
          node.stop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this._reader) {
        this._reader.abort();
      }

      if (this._audioCtx) {
        this._audioCtx.suspend();

        this._audioCtx.close();
      }

      this._reset();
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this._sessionId = performance.now();
      performance.mark(this._downloadMarkKey);
      this._audioCtx = new (window.AudioContext || window.webkitAudioContext)({
        latencyHint: 'interactive'
      });
      var reader = new $fyQH$export$BufferedStreamReader(new Request(this._url), this._readBufferSize);
      reader.onRead = this._downloadProgress.bind(this);
      reader.onBufferFull = this._decode.bind(this);
      reader.read().catch(function (e) {
        _this2._updateState({
          error: e.toString()
        });
      });
      this._reader = reader;
      this.resume();
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this3 = this;

      this._audioCtx.suspend().then(function (_) {
        return _this3._updateState({
          playState: 'paused'
        });
      });
    }
  }, {
    key: "resume",
    value: function resume() {
      var _this4 = this;

      this._audioCtx.resume().then(function (_) {
        return _this4._updateState({
          playState: 'playing'
        });
      });
    }
  }, {
    key: "_updateState",
    value: function _updateState(props) {
      var abState = !this._abCreated ? {} : {
        abCreated: this._abCreated,
        abEnded: this._abEnded,
        abRemaining: this._abCreated - this._abEnded,
        skips: this._skips
      };
      var state = Object.assign(abState, props);

      if (this.onUpdateState) {
        this.onUpdateState(state);
      }
    }
  }, {
    key: "_decode",
    value: function _decode(_ref) {
      var bytes = _ref.bytes,
          done = _ref.done;
      var sessionId = this._sessionId;

      this._worker.postMessage({
        decode: bytes.buffer,
        sessionId: sessionId
      }, [bytes.buffer]);
    } // prevent race condition by checking sessionId

  }, {
    key: "_onWorkerMessage",
    value: function _onWorkerMessage(event) {
      var _event$data = event.data,
          decoded = _event$data.decoded,
          sessionId = _event$data.sessionId;

      if (decoded.channelData) {
        if (!(this._sessionId && this._sessionId === sessionId)) {
          console.log("race condition detected for closed session");
          return;
        }

        this._schedulePlayback(decoded);
      }
    }
  }, {
    key: "_downloadProgress",
    value: function _downloadProgress(_ref2) {
      var bytes = _ref2.bytes,
          totalRead = _ref2.totalRead,
          totalBytes = _ref2.totalBytes,
          done = _ref2.done;

      this._updateState({
        bytesRead: totalRead,
        bytesTotal: totalBytes,
        dlRate: totalRead * 8 / (performance.now() - this._getDownloadStartTime())
      }); // console.log(done, (totalRead/totalBytes*100).toFixed(2) );

    }
  }, {
    key: "_getDownloadStartTime",
    value: function _getDownloadStartTime() {
      return performance.getEntriesByName(this._downloadMarkKey)[0].startTime;
    }
  }, {
    key: "_schedulePlayback",
    value: function _schedulePlayback(_ref3) {
      var _this5 = this;

      var channelData = _ref3.channelData,
          length = _ref3.length,
          numberOfChannels = _ref3.numberOfChannels,
          sampleRate = _ref3.sampleRate;

      var audioSrc = this._audioCtx.createBufferSource(),
          audioBuffer = this._audioCtx.createBuffer(numberOfChannels, length, sampleRate);

      audioSrc.onended = function () {
        _this5._audioSrcNodes.shift();

        _this5._abEnded++;

        _this5._updateState();
      };

      this._abCreated++;

      this._updateState(); // adding also ensures onended callback is fired in Safari


      this._audioSrcNodes.push(audioSrc); // Use performant copyToChannel() if browser supports it


      for (var c = 0; c < numberOfChannels; c++) {
        if (audioBuffer.copyToChannel) {
          audioBuffer.copyToChannel(channelData[c], c);
        } else {
          var toChannel = audioBuffer.getChannelData(c);

          for (var i = 0; i < channelData[c].byteLength; i++) {
            toChannel[i] = channelData[c][i];
          }
        }
      }

      var startDelay = 0; // initialize first play position.  initial clipping/choppiness sometimes occurs and intentional start latency needed
      // read more: https://github.com/WebAudio/web-audio-api/issues/296#issuecomment-257100626

      if (!this._playStartedAt) {
        /* this clips in Firefox, plays */
        // const startDelay = audioCtx.baseLatency || (128 / audioCtx.sampleRate);

        /* this doesn't clip in Firefox (256 value), plays */
        // 100ms allows enough time for largest 60ms Opus frame to decode
        startDelay = 100 / 1000;
        /* this could be useful for firefox but outputLatency is about 250ms in FF. too long */
        // const startDelay = audioCtx.outputLatency || audioCtx.baseLatency || (128 / audioCtx.sampleRate);

        this._playStartedAt = this._audioCtx.currentTime + startDelay;

        this._updateState({
          latency: performance.now() - this._getDownloadStartTime() + startDelay * 1000
        });
      }

      audioSrc.buffer = audioBuffer;
      audioSrc.connect(this._audioCtx.destination);
      var startAt = this._playStartedAt + this._totalTimeScheduled;

      if (this._audioCtx.currentTime >= startAt) {
        this._skips++;

        this._updateState();
      }

      audioSrc.start(startAt);
      this._totalTimeScheduled += audioBuffer.duration;
    }
  }, {
    key: "_downloadMarkKey",
    get: function get() {
      return "download-start-".concat(this._sessionId);
    }
  }]);
  window.AudioStreamPlayer = AudioStreamPlayer;
  return AudioStreamPlayer;
}();


var $Uriw$export$AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer(_ref) {
    var url = _ref.url,
        wrapper = _ref.wrapper,
        readBufferSize = _ref.readBufferSize,
        mime = _ref.mime,
        codec = _ref.codec,
        onStateChange = _ref.onStateChange,
        decoder = _ref.decoder;
    var $fcMS$$interop$default = $parcel$interopDefault($fcMS$exports);
    $fcMS$$interop$default.d(this, AudioPlayer);
    var $IxO8$$interop$default = $parcel$interopDefault($IxO8$exports);
    $IxO8$$interop$default.d(this, "_ui", void 0);
    $IxO8$$interop$default.d(this, "_audio", void 0);
    $IxO8$$interop$default.d(this, "_readSize", void 0);
    $IxO8$$interop$default.d(this, "_mime", void 0);
    $IxO8$$interop$default.d(this, "_codec", void 0);
    $IxO8$$interop$default.d(this, "_decoder", void 0);
    this._readSize = readBufferSize; //this._ui = new Player(wrapper);
    //this._ui.onAction = this._onAction.bind(this);

    this._audio = new $NqjO$export$AudioStreamPlayer(url, readBufferSize, codec.toUpperCase());
    this._audio.onUpdateState = this._onUpdateState.bind(this);
    this._mime = mime;
    this._codec = codec;
    this._onStateChange = onStateChange;
    this._decoder = decoder;
    this.reset();
  }

  var $P8NW$$interop$default = $parcel$interopDefault($P8NW$exports);
  $P8NW$$interop$default.d(AudioPlayer, [{
    key: "_onAction",
    value: function _onAction(action) {
      if (this[action]) {
        this[action]();
      }
    }
  }, {
    key: "_onUpdateState",
    value: function _onUpdateState(state) {//this._ui.setState(state);
    }
  }, {
    key: "start",
    value: function start() {
      this._audio.start();
      /*
      this._ui.setState({
        readBuffer: this._readSize,
        decoder: this._decoder
      });
      */


      this._onStateChange('started');

      this._onStateChange('playing');
    }
  }, {
    key: "pause",
    value: function pause() {
      this._audio.pause();

      this._onStateChange('paused');
    }
  }, {
    key: "resume",
    value: function resume() {
      this._audio.resume();

      this._onStateChange('playing');
    }
  }, {
    key: "reset",
    value: function reset() {
      this._audio.close();
      /*
      this._ui.setState({
        playState: 'init',
        mime: this._mime,
        codec: this._codec,
        latency: null,
        bytesRead: null,
        bytesTotal: null,
        dlRate: null,
        abCreated: null,
        abEnded: null,
        abRemaining: null,
        error: null,
        readBuffer: null,
        decoder: null,
        skips: null,
      });
      */


      this._onStateChange('reset');
    }
  }]);
  window.AudioPlayer = AudioPlayer;
  return AudioPlayer;
}();

return {
  "QdeU": {},
  "fcMS": $fcMS$exports,
  "P8NW": $P8NW$exports,
  "IxO8": $IxO8$exports,
  "PMvg": $PMvg$exports,
  "agGE": $agGE$exports
};
});