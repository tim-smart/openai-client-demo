'use strict';

var __defProp = Object.defineProperty;
var __export = (target, all6) => {
  for (var name in all6)
    __defProp(target, name, { get: all6[name], enumerable: true });
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Function/dist/effect-Function.esm.js
var isFunction = (input) => typeof input === "function";
var dual = function(arity, body) {
  if (typeof arity === "function") {
    return function() {
      if (arity(arguments)) {
        return body.apply(this, arguments);
      }
      return (self) => body(self, ...arguments);
    };
  }
  switch (arity) {
    case 0:
      return body;
    case 1:
      return function(a) {
        if (arguments.length >= 1) {
          return body(a);
        }
        return function() {
          return body(a);
        };
      };
    case 2:
      return function(a, b) {
        if (arguments.length >= 2) {
          return body(a, b);
        }
        return function(self) {
          return body(self, a);
        };
      };
    case 3:
      return function(a, b, c) {
        if (arguments.length >= 3) {
          return body(a, b, c);
        }
        return function(self) {
          return body(self, a, b);
        };
      };
    case 4:
      return function(a, b, c, d) {
        if (arguments.length >= 4) {
          return body(a, b, c, d);
        }
        return function(self) {
          return body(self, a, b, c);
        };
      };
    case 5:
      return function(a, b, c, d, e) {
        if (arguments.length >= 5) {
          return body(a, b, c, d, e);
        }
        return function(self) {
          return body(self, a, b, c, d);
        };
      };
    default:
      return function() {
        if (arguments.length >= arity) {
          return body.apply(this, arguments);
        }
        const args = arguments;
        return function(self) {
          return body(self, ...args);
        };
      };
  }
};
var identity = (a) => a;
var constant = (value) => () => value;
var constTrue = /* @__PURE__ */ constant(true);
var constFalse = /* @__PURE__ */ constant(false);
var constUndefined = /* @__PURE__ */ constant(void 0);
var constVoid = constUndefined;
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;
    case 2:
      return ab(a);
    case 3:
      return bc(ab(a));
    case 4:
      return cd(bc(ab(a)));
    case 5:
      return de(cd(bc(ab(a))));
    case 6:
      return ef(de(cd(bc(ab(a)))));
    case 7:
      return fg(ef(de(cd(bc(ab(a))))));
    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));
    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
    default: {
      let ret = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
        ret = arguments[i](ret);
      }
      return ret;
    }
  }
}
function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;
    case 2:
      return function() {
        return bc(ab.apply(this, arguments));
      };
    case 3:
      return function() {
        return cd(bc(ab.apply(this, arguments)));
      };
    case 4:
      return function() {
        return de(cd(bc(ab.apply(this, arguments))));
      };
    case 5:
      return function() {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };
    case 6:
      return function() {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };
    case 7:
      return function() {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };
    case 8:
      return function() {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };
    case 9:
      return function() {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }
  return;
}

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Equivalence/dist/effect-Equivalence.esm.js
var make = (isEquivalent) => (self, that) => self === that || isEquivalent(self, that);
var mapInput = /* @__PURE__ */ dual(2, (self, f) => make((x, y) => self(f(x), f(y))));
var array = (item) => make((self, that) => {
  if (self.length !== that.length) {
    return false;
  }
  for (let i = 0; i < self.length; i++) {
    const isEq = item(self[i], that[i]);
    if (!isEq) {
      return false;
    }
  }
  return true;
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/GlobalValue/dist/effect-GlobalValue.esm.js
var globalStoreId = /* @__PURE__ */ Symbol.for("effect/GlobalValue/globalStoreId");
if (!(globalStoreId in globalThis)) {
  globalThis[globalStoreId] = /* @__PURE__ */ new Map();
}
var globalStore = globalThis[globalStoreId];
var globalValue = (id2, compute) => {
  if (!globalStore.has(id2)) {
    globalStore.set(id2, compute());
  }
  return globalStore.get(id2);
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Predicate/dist/effect-Predicate.esm.js
var isString = (input) => typeof input === "string";
var isNumber = (input) => typeof input === "number";
var isBoolean = (input) => typeof input === "boolean";
var isBigInt = (input) => typeof input === "bigint";
var isSymbol = (input) => typeof input === "symbol";
var isFunction2 = isFunction;
var isUndefined = (input) => input === void 0;
var isNever = (_) => false;
var isObject = (input) => typeof input === "object" && input != null || isFunction2(input);
var isTagged = /* @__PURE__ */ dual(2, (self, tag3) => isObject(self) && "_tag" in self && self["_tag"] === tag3);
var isNullable = (input) => input === null || input === void 0;
var isNotNullable = (input) => input !== null && input !== void 0;
var isDate = (input) => input instanceof Date;
var isIterable = (input) => isObject(input) && Symbol.iterator in input;
var isRecord = (input) => isObject(input) && !Array.isArray(input);
var defaultIncHi = 335903614;
var defaultIncLo = 4150755663;
var MUL_HI = 1481765933 >>> 0;
var MUL_LO = 1284865837 >>> 0;
var BIT_53 = 9007199254740992;
var BIT_27 = 134217728;
var PCGRandom = class {
  /**
   * Creates an instance of PCGRandom.
   *
   * @param seed - The low 32 bits of the seed (0 is used for high 32 bits).
   *
   * @memberOf PCGRandom
   */
  /**
   * Creates an instance of PCGRandom.
   *
   * @param seedHi - The high 32 bits of the seed.
   * @param seedLo - The low 32 bits of the seed.
   * @param inc - The low 32 bits of the incrementer (0 is used for high 32 bits).
   *
   * @memberOf PCGRandom
   */
  /**
   * Creates an instance of PCGRandom.
   *
   * @param seedHi - The high 32 bits of the seed.
   * @param seedLo - The low 32 bits of the seed.
   * @param incHi - The high 32 bits of the incrementer.
   * @param incLo - The low 32 bits of the incrementer.
   *
   * @memberOf PCGRandom
   */
  constructor(seedHi, seedLo, incHi, incLo) {
    if (isNullable(seedLo) && isNullable(seedHi)) {
      seedLo = Math.random() * 4294967295 >>> 0;
      seedHi = 0;
    } else if (isNullable(seedLo)) {
      seedLo = seedHi;
      seedHi = 0;
    }
    if (isNullable(incLo) && isNullable(incHi)) {
      incLo = this._state ? this._state[3] : defaultIncLo;
      incHi = this._state ? this._state[2] : defaultIncHi;
    } else if (isNullable(incLo)) {
      incLo = incHi;
      incHi = 0;
    }
    this._state = new Int32Array([0, 0, incHi >>> 0, ((incLo || 0) | 1) >>> 0]);
    this._next();
    add64(this._state, this._state[0], this._state[1], seedHi >>> 0, seedLo >>> 0);
    this._next();
    return this;
  }
  /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 2.0.0
   */
  getState() {
    return [this._state[0], this._state[1], this._state[2], this._state[3]];
  }
  /**
   * Restore state previously retrieved using `getState()`.
   *
   * @since 2.0.0
   */
  setState(state) {
    this._state[0] = state[0];
    this._state[1] = state[1];
    this._state[2] = state[2];
    this._state[3] = state[3] | 1;
  }
  /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 2.0.0
   */
  integer(max5) {
    if (!max5) {
      return this._next();
    }
    max5 = max5 >>> 0;
    if ((max5 & max5 - 1) === 0) {
      return this._next() & max5 - 1;
    }
    let num = 0;
    const skew = (-max5 >>> 0) % max5 >>> 0;
    for (num = this._next(); num < skew; num = this._next()) {
    }
    return num % max5;
  }
  /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 2.0.0
   */
  number() {
    const hi = (this._next() & 67108863) * 1;
    const lo = (this._next() & 134217727) * 1;
    return (hi * BIT_27 + lo) / BIT_53;
  }
  /** @internal */
  _next() {
    const oldHi = this._state[0] >>> 0;
    const oldLo = this._state[1] >>> 0;
    mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO);
    add64(this._state, this._state[0], this._state[1], this._state[2], this._state[3]);
    let xsHi = oldHi >>> 18;
    let xsLo = (oldLo >>> 18 | oldHi << 14) >>> 0;
    xsHi = (xsHi ^ oldHi) >>> 0;
    xsLo = (xsLo ^ oldLo) >>> 0;
    const xorshifted = (xsLo >>> 27 | xsHi << 5) >>> 0;
    const rot = oldHi >>> 27;
    const rot2 = (-rot >>> 0 & 31) >>> 0;
    return (xorshifted >>> rot | xorshifted << rot2) >>> 0;
  }
};
function mul64(out, aHi, aLo, bHi, bLo) {
  let c1 = (aLo >>> 16) * (bLo & 65535) >>> 0;
  let c0 = (aLo & 65535) * (bLo >>> 16) >>> 0;
  let lo = (aLo & 65535) * (bLo & 65535) >>> 0;
  let hi = (aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16)) >>> 0;
  c0 = c0 << 16 >>> 0;
  lo = lo + c0 >>> 0;
  if (lo >>> 0 < c0 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  c1 = c1 << 16 >>> 0;
  lo = lo + c1 >>> 0;
  if (lo >>> 0 < c1 >>> 0) {
    hi = hi + 1 >>> 0;
  }
  hi = hi + Math.imul(aLo, bHi) >>> 0;
  hi = hi + Math.imul(aHi, bLo) >>> 0;
  out[0] = hi;
  out[1] = lo;
}
function add64(out, aHi, aLo, bHi, bLo) {
  let hi = aHi + bHi >>> 0;
  const lo = aLo + bLo >>> 0;
  if (lo >>> 0 < aLo >>> 0) {
    hi = hi + 1 | 0;
  }
  out[0] = hi;
  out[1] = lo;
}

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Hash/dist/effect-Hash.esm.js
var randomHashCache = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/randomHashCache"), () => /* @__PURE__ */ new WeakMap());
var pcgr = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Hash/pcgr"), () => new PCGRandom());
var symbol = /* @__PURE__ */ Symbol.for("effect/Hash");
var hash = (self) => {
  switch (typeof self) {
    case "number": {
      return number(self);
    }
    case "bigint": {
      return string(self.toString(10));
    }
    case "boolean": {
      return string(String(self));
    }
    case "symbol": {
      return string(String(self));
    }
    case "string": {
      return string(self);
    }
    case "undefined": {
      return string("undefined");
    }
    case "function":
    case "object": {
      if (self === null) {
        return string("null");
      }
      if (isHash(self)) {
        return self[symbol]();
      } else {
        return random(self);
      }
    }
    default: {
      throw new Error("Bug in Equal.hash");
    }
  }
};
var random = (self) => {
  if (!randomHashCache.has(self)) {
    randomHashCache.set(self, number(pcgr.integer(Number.MAX_SAFE_INTEGER)));
  }
  return randomHashCache.get(self);
};
var combine = (b) => (self) => self * 53 ^ b;
var optimize = (n) => n & 3221225471 | n >>> 1 & 1073741824;
var isHash = (u) => typeof u === "object" && u !== null && symbol in u;
var number = (n) => {
  if (n !== n || n === Infinity) {
    return 0;
  }
  let h = n | 0;
  if (h !== n) {
    h ^= n * 4294967295;
  }
  while (n > 4294967295) {
    h ^= n /= 4294967295;
  }
  return optimize(n);
};
var string = (str) => {
  let h = 5381, i = str.length;
  while (i) {
    h = h * 33 ^ str.charCodeAt(--i);
  }
  return optimize(h);
};
var structureKeys = (o, keys5) => {
  let h = 12289;
  for (let i = 0; i < keys5.length; i++) {
    h ^= pipe(string(keys5[i]), combine(hash(o[keys5[i]])));
  }
  return optimize(h);
};
var structure = (o) => structureKeys(o, Object.keys(o));
var array2 = (arr) => {
  let h = 6151;
  for (let i = 0; i < arr.length; i++) {
    h = pipe(h, combine(hash(arr[i])));
  }
  return optimize(h);
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Equal/dist/effect-Equal.esm.js
var symbol2 = /* @__PURE__ */ Symbol.for("effect/Equal");
function equals() {
  if (arguments.length === 1) {
    return (self) => compareBoth(self, arguments[0]);
  }
  return compareBoth(arguments[0], arguments[1]);
}
function compareBoth(self, that) {
  if (self === that) {
    return true;
  }
  const selfType = typeof self;
  if (selfType !== typeof that) {
    return false;
  }
  if ((selfType === "object" || selfType === "function") && self !== null && that !== null) {
    if (isEqual(self) && isEqual(that)) {
      return hash(self) === hash(that) && self[symbol2](that);
    }
  }
  return false;
}
var isEqual = (u) => typeof u === "object" && u !== null && symbol2 in u;
var equivalence = () => (self, that) => equals(self, that);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Inspectable/dist/effect-Inspectable.esm.js
var NodeInspectSymbol = /* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom");
var toJSON = (x) => {
  if (typeof x === "object" && x !== null && "toJSON" in x && typeof x["toJSON"] === "function" && x["toJSON"].length === 0) {
    return x.toJSON();
  } else if (Array.isArray(x)) {
    return x.map(toJSON);
  }
  return x;
};
var toString = (x) => JSON.stringify(x, null, 2);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Pipeable/dist/effect-Pipeable.esm.js
var pipeArguments = (self, args) => {
  switch (args.length) {
    case 1:
      return args[0](self);
    case 2:
      return args[1](args[0](self));
    case 3:
      return args[2](args[1](args[0](self)));
    case 4:
      return args[3](args[2](args[1](args[0](self))));
    case 5:
      return args[4](args[3](args[2](args[1](args[0](self)))));
    case 6:
      return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
    case 7:
      return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
    case 8:
      return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
    case 9:
      return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
    default: {
      let ret = self;
      for (let i = 0, len = args.length; i < len; i++) {
        ret = args[i](ret);
      }
      return ret;
    }
  }
};
var StructProto = {
  [symbol]() {
    return structure(this);
  },
  [symbol2](that) {
    const selfKeys = Object.keys(this);
    const thatKeys = Object.keys(that);
    if (selfKeys.length !== thatKeys.length) {
      return false;
    }
    for (const key2 of selfKeys) {
      if (!(key2 in that && equals(this[key2], that[key2]))) {
        return false;
      }
    }
    return true;
  }
};
var Structural = /* @__PURE__ */ function() {
  function Structural2(args) {
    if (args) {
      Object.assign(this, args);
    }
  }
  Structural2.prototype = StructProto;
  return Structural2;
}();
var struct = (as5) => Object.assign(Object.create(StructProto), as5);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/effect.esm.js
var OP_ASYNC = "Async";
var OP_COMMIT = "Commit";
var OP_FAILURE = "Failure";
var OP_ON_FAILURE = "OnFailure";
var OP_ON_SUCCESS = "OnSuccess";
var OP_ON_SUCCESS_AND_FAILURE = "OnSuccessAndFailure";
var OP_SUCCESS = "Success";
var OP_SYNC = "Sync";
var OP_TAG = "Tag";
var OP_UPDATE_RUNTIME_FLAGS = "UpdateRuntimeFlags";
var OP_WHILE = "While";
var OP_WITH_RUNTIME = "WithRuntime";
var OP_YIELD = "Yield";
var OP_REVERT_FLAGS = "RevertFlags";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Effectable.esm.js
var EffectTypeId = /* @__PURE__ */ Symbol.for("effect/Effect");
var StreamTypeId = /* @__PURE__ */ Symbol.for("effect/Stream");
var SinkTypeId = /* @__PURE__ */ Symbol.for("effect/Sink");
var ChannelTypeId = /* @__PURE__ */ Symbol.for("effect/Channel");
var effectVariance = {
  _R: (_) => _,
  _E: (_) => _,
  _A: (_) => _
};
var sinkVariance = {
  _R: (_) => _,
  _E: (_) => _,
  _In: (_) => _,
  _L: (_) => _,
  _Z: (_) => _
};
var channelVariance = {
  _Env: (_) => _,
  _InErr: (_) => _,
  _InElem: (_) => _,
  _InDone: (_) => _,
  _OutErr: (_) => _,
  _OutElem: (_) => _,
  _OutDone: (_) => _
};
var EffectPrototype = {
  [EffectTypeId]: effectVariance,
  [StreamTypeId]: effectVariance,
  [SinkTypeId]: sinkVariance,
  [ChannelTypeId]: channelVariance,
  [symbol2](that) {
    return this === that;
  },
  [symbol]() {
    return random(this);
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Option.esm.js
var TypeId = /* @__PURE__ */ Symbol.for("effect/Option");
var CommonProto = {
  ...EffectPrototype,
  [TypeId]: {
    _A: (_) => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return toString(this.toJSON());
  }
};
var SomeProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
  _tag: "Some",
  _op: "Some",
  [symbol2](that) {
    return isOption(that) && isSome(that) && equals(that.value, this.value);
  },
  [symbol]() {
    return combine(hash(this._tag))(hash(this.value));
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag,
      value: toJSON(this.value)
    };
  }
});
var NoneProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto), {
  _tag: "None",
  _op: "None",
  [symbol2](that) {
    return isOption(that) && isNone(that);
  },
  [symbol]() {
    return combine(hash(this._tag));
  },
  toJSON() {
    return {
      _id: "Option",
      _tag: this._tag
    };
  }
});
var isOption = (input) => typeof input === "object" && input != null && TypeId in input;
var isNone = (fa) => fa._tag === "None";
var isSome = (fa) => fa._tag === "Some";
var none = /* @__PURE__ */ Object.create(NoneProto);
var some = (value) => {
  const a = Object.create(SomeProto);
  a.value = value;
  return a;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Either.esm.js
var TypeId2 = /* @__PURE__ */ Symbol.for("effect/Either");
var CommonProto2 = {
  ...EffectPrototype,
  [TypeId2]: {
    _A: (_) => _
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  toString() {
    return toString(this.toJSON());
  }
};
var RightProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto2), {
  _tag: "Right",
  _op: "Right",
  [symbol2](that) {
    return isEither(that) && isRight(that) && equals(that.right, this.right);
  },
  [symbol]() {
    return combine(hash(this._tag))(hash(this.right));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      right: toJSON(this.right)
    };
  }
});
var LeftProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(CommonProto2), {
  _tag: "Left",
  _op: "Left",
  [symbol2](that) {
    return isEither(that) && isLeft(that) && equals(that.left, this.left);
  },
  [symbol]() {
    return combine(hash(this._tag))(hash(this.left));
  },
  toJSON() {
    return {
      _id: "Either",
      _tag: this._tag,
      left: toJSON(this.left)
    };
  }
});
var isEither = (input) => typeof input === "object" && input != null && TypeId2 in input;
var isLeft = (ma) => ma._tag === "Left";
var isRight = (ma) => ma._tag === "Right";
var left = (left3) => {
  const a = Object.create(LeftProto);
  a.left = left3;
  return a;
};
var right = (right3) => {
  const a = Object.create(RightProto);
  a.right = right3;
  return a;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Order/dist/effect-Order.esm.js
var make2 = (compare) => (self, that) => self === that ? 0 : compare(self, that);
var number2 = /* @__PURE__ */ make2((self, that) => self < that ? -1 : 1);
var reverse = (O) => make2((self, that) => O(that, self));
var mapInput2 = /* @__PURE__ */ dual(2, (self, f) => make2((b1, b2) => self(f(b1), f(b2))));
var all = (collection) => {
  return make2((x, y) => {
    const len = Math.min(x.length, y.length);
    let collectionLength = 0;
    for (const O of collection) {
      if (collectionLength >= len) {
        break;
      }
      const o = O(x[collectionLength], y[collectionLength]);
      if (o !== 0) {
        return o;
      }
      collectionLength++;
    }
    return 0;
  });
};
var tuple = (...elements) => all(elements);
var greaterThan = (O) => dual(2, (self, that) => O(self, that) === 1);
var max = (O) => dual(2, (self, that) => self === that || O(self, that) > -1 ? self : that);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Number/dist/effect-Number.esm.js
var Order = number2;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Option/dist/effect-Option.esm.js
var none2 = () => none;
var some2 = some;
var isOption2 = isOption;
var isNone2 = isNone;
var isSome2 = isSome;
var match = /* @__PURE__ */ dual(2, (self, {
  onNone,
  onSome
}) => isNone2(self) ? onNone() : onSome(self.value));
var getOrElse = /* @__PURE__ */ dual(2, (self, onNone) => isNone2(self) ? onNone() : self.value);
var orElse = /* @__PURE__ */ dual(2, (self, that) => isNone2(self) ? that() : self);
var fromNullable = (nullableValue) => nullableValue == null ? none2() : some2(nullableValue);
var getOrUndefined = /* @__PURE__ */ getOrElse(constUndefined);
var map = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : some2(f(self.value)));
var flatMap = /* @__PURE__ */ dual(2, (self, f) => isNone2(self) ? none2() : f(self.value));
var flatten = /* @__PURE__ */ flatMap(identity);
var liftPredicate = (predicate) => (b) => predicate(b) ? some2(b) : none2();
var containsWith = (isEquivalent) => dual(2, (self, a) => isNone2(self) ? false : isEquivalent(self.value, a));
var _equivalence = /* @__PURE__ */ equivalence();
var contains = /* @__PURE__ */ containsWith(_equivalence);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Either/dist/effect-Either.esm.js
var right2 = right;
var left2 = left;
var isLeft2 = isLeft;
var isRight2 = isRight;
var match2 = /* @__PURE__ */ dual(2, (self, {
  onLeft,
  onRight
}) => isLeft2(self) ? onLeft(self.left) : onRight(self.right));
var merge = /* @__PURE__ */ match2({
  onLeft: identity,
  onRight: identity
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/ReadonlyArray.esm.js
var isNonEmptyArray = (self) => self.length > 0;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/ReadonlyRecord/dist/effect-ReadonlyRecord.esm.js
var empty = () => ({});
var fromIterable = /* @__PURE__ */ dual(2, (self, f) => {
  const out = {};
  for (const a of self) {
    const [k, b] = f(a);
    out[k] = b;
  }
  return out;
});
var fromEntries = /* @__PURE__ */ fromIterable(identity);
var remove = /* @__PURE__ */ dual(2, (self, key2) => {
  const out = {
    ...self
  };
  delete out[key2];
  return out;
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/ReadonlyArray/dist/effect-ReadonlyArray.esm.js
var makeBy = (n, f) => {
  const max5 = Math.max(1, Math.floor(n));
  const out = [f(0)];
  for (let i = 1; i < max5; i++) {
    out.push(f(i));
  }
  return out;
};
var fromIterable2 = (collection) => Array.isArray(collection) ? collection : Array.from(collection);
var prepend = /* @__PURE__ */ dual(2, (self, head7) => [head7, ...self]);
var append = /* @__PURE__ */ dual(2, (self, last4) => [...self, last4]);
var isEmptyArray = (self) => self.length === 0;
var isEmptyReadonlyArray = isEmptyArray;
var isNonEmptyArray2 = isNonEmptyArray;
var isNonEmptyReadonlyArray = isNonEmptyArray;
var isOutOfBound = (i, as5) => i < 0 || i >= as5.length;
var get = /* @__PURE__ */ dual(2, (self, index2) => {
  const i = Math.floor(index2);
  return isOutOfBound(i, self) ? none2() : some2(self[i]);
});
var unsafeGet = /* @__PURE__ */ dual(2, (self, index2) => {
  const i = Math.floor(index2);
  if (isOutOfBound(i, self)) {
    throw new Error(`Index ${i} out of bounds`);
  }
  return self[i];
});
var head = /* @__PURE__ */ get(0);
var headNonEmpty = /* @__PURE__ */ unsafeGet(0);
var last = (self) => isNonEmptyReadonlyArray(self) ? some2(lastNonEmpty(self)) : none2();
var lastNonEmpty = (self) => self[self.length - 1];
var tailNonEmpty = (self) => self.slice(1);
var reverse2 = (self) => Array.from(self).reverse();
var sort = /* @__PURE__ */ dual(2, (self, O) => {
  const out = Array.from(self);
  out.sort(O);
  return out;
});
var zip = /* @__PURE__ */ dual(2, (self, that) => zipWith(self, that, (a, b) => [a, b]));
var zipWith = /* @__PURE__ */ dual(3, (self, that, f) => {
  const as5 = fromIterable2(self);
  const bs = fromIterable2(that);
  return isNonEmptyReadonlyArray(as5) && isNonEmptyReadonlyArray(bs) ? zipNonEmptyWith(bs, f)(as5) : [];
});
var zipNonEmptyWith = /* @__PURE__ */ dual(3, (self, that, f) => {
  const cs = [f(headNonEmpty(self), headNonEmpty(that))];
  const len = Math.min(self.length, that.length);
  for (let i = 1; i < len; i++) {
    cs[i] = f(self[i], that[i]);
  }
  return cs;
});
var dedupeNonEmptyWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => {
  const out = [headNonEmpty(self)];
  const rest = tailNonEmpty(self);
  for (const a of rest) {
    if (out.every((o) => !isEquivalent(a, o))) {
      out.push(a);
    }
  }
  return out;
});
var splitAt = /* @__PURE__ */ dual(2, (self, n) => {
  const input = Array.from(self);
  return n >= 1 && isNonEmptyReadonlyArray(input) ? splitNonEmptyAt(input, n) : isEmptyReadonlyArray(input) ? [input, []] : [[], input];
});
var copy = (self) => self.slice();
var splitNonEmptyAt = /* @__PURE__ */ dual(2, (self, n) => {
  const m = Math.max(1, n);
  return m >= self.length ? [copy(self), []] : [prepend(self.slice(1, m), headNonEmpty(self)), self.slice(m)];
});
var empty2 = () => [];
var of = (a) => [a];
var map2 = /* @__PURE__ */ dual(2, (self, f) => self.map(f));
var mapNonEmpty = map2;
var flatMap2 = /* @__PURE__ */ dual(2, (self, f) => {
  if (isEmptyReadonlyArray(self)) {
    return [];
  }
  const out = [];
  for (let i = 0; i < self.length; i++) {
    out.push(...f(self[i], i));
  }
  return out;
});
var flatten2 = /* @__PURE__ */ flatMap2(identity);
var filterMap = /* @__PURE__ */ dual(2, (self, f) => {
  const as5 = fromIterable2(self);
  const out = [];
  for (let i = 0; i < as5.length; i++) {
    const o = f(as5[i], i);
    if (isSome2(o)) {
      out.push(o.value);
    }
  }
  return out;
});
var reduce = /* @__PURE__ */ dual(3, (self, b, f) => fromIterable2(self).reduce((b2, a, i) => f(b2, a, i), b));
var unfold = (b, f) => {
  const out = [];
  let next2 = b;
  let o;
  while (isSome2(o = f(next2))) {
    const [a, b2] = o.value;
    out.push(a);
    next2 = b2;
  }
  return out;
};
var getEquivalence = array;
var dedupeWith = /* @__PURE__ */ dual(2, (self, isEquivalent) => {
  const input = fromIterable2(self);
  return isNonEmptyReadonlyArray(input) ? dedupeNonEmptyWith(isEquivalent)(input) : [];
});
var dedupe = /* @__PURE__ */ dedupeWith(/* @__PURE__ */ equivalence());
var join = /* @__PURE__ */ dual(2, (self, sep) => fromIterable2(self).join(sep));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Chunk/dist/effect-Chunk.esm.js
var TypeId3 = /* @__PURE__ */ Symbol.for("effect/Chunk");
function copy2(src, srcPos, dest, destPos, len) {
  for (let i = srcPos; i < Math.min(src.length, srcPos + len); i++) {
    dest[destPos + i - srcPos] = src[i];
  }
  return dest;
}
var emptyArray = [];
var getEquivalence2 = (isEquivalent) => make((self, that) => toReadonlyArray(self).every((value, i) => isEquivalent(value, unsafeGet2(that, i))));
var _equivalence2 = /* @__PURE__ */ getEquivalence2(equals);
var ChunkProto = {
  [TypeId3]: {
    _A: (_) => _
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Chunk",
      values: toReadonlyArray(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol2](that) {
    return isChunk(that) && _equivalence2(this, that);
  },
  [symbol]() {
    return array2(toReadonlyArray(this));
  },
  [Symbol.iterator]() {
    switch (this.backing._tag) {
      case "IArray": {
        return this.backing.array[Symbol.iterator]();
      }
      case "IEmpty": {
        return emptyArray[Symbol.iterator]();
      }
      default: {
        return toReadonlyArray(this)[Symbol.iterator]();
      }
    }
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeChunk = (backing) => {
  const chunk2 = Object.create(ChunkProto);
  chunk2.backing = backing;
  switch (backing._tag) {
    case "IEmpty": {
      chunk2.length = 0;
      chunk2.depth = 0;
      chunk2.left = chunk2;
      chunk2.right = chunk2;
      break;
    }
    case "IConcat": {
      chunk2.length = backing.left.length + backing.right.length;
      chunk2.depth = 1 + Math.max(backing.left.depth, backing.right.depth);
      chunk2.left = backing.left;
      chunk2.right = backing.right;
      break;
    }
    case "IArray": {
      chunk2.length = backing.array.length;
      chunk2.depth = 0;
      chunk2.left = _empty;
      chunk2.right = _empty;
      break;
    }
    case "ISingleton": {
      chunk2.length = 1;
      chunk2.depth = 0;
      chunk2.left = _empty;
      chunk2.right = _empty;
      break;
    }
    case "ISlice": {
      chunk2.length = backing.length;
      chunk2.depth = backing.chunk.depth + 1;
      chunk2.left = _empty;
      chunk2.right = _empty;
      break;
    }
  }
  return chunk2;
};
var isChunk = (u) => isObject(u) && TypeId3 in u;
var _empty = /* @__PURE__ */ makeChunk({
  _tag: "IEmpty"
});
var empty3 = () => _empty;
var of2 = (a) => makeChunk({
  _tag: "ISingleton",
  a
});
var fromIterable3 = (self) => isChunk(self) ? self : makeChunk({
  _tag: "IArray",
  array: fromIterable2(self)
});
var copyToArray = (self, array6, initial) => {
  switch (self.backing._tag) {
    case "IArray": {
      copy2(self.backing.array, 0, array6, initial, self.length);
      break;
    }
    case "IConcat": {
      copyToArray(self.left, array6, initial);
      copyToArray(self.right, array6, initial + self.left.length);
      break;
    }
    case "ISingleton": {
      array6[initial] = self.backing.a;
      break;
    }
    case "ISlice": {
      let i = 0;
      let j = initial;
      while (i < self.length) {
        array6[j] = unsafeGet2(self, i);
        i += 1;
        j += 1;
      }
      break;
    }
  }
};
var toReadonlyArray = (self) => {
  switch (self.backing._tag) {
    case "IEmpty": {
      return emptyArray;
    }
    case "IArray": {
      return self.backing.array;
    }
    default: {
      const arr = new Array(self.length);
      copyToArray(self, arr, 0);
      self.backing = {
        _tag: "IArray",
        array: arr
      };
      self.left = _empty;
      self.right = _empty;
      self.depth = 0;
      return arr;
    }
  }
};
var reverse3 = (self) => {
  switch (self.backing._tag) {
    case "IEmpty":
    case "ISingleton":
      return self;
    case "IArray": {
      return makeChunk({
        _tag: "IArray",
        array: reverse2(self.backing.array)
      });
    }
    case "IConcat": {
      return makeChunk({
        _tag: "IConcat",
        left: reverse3(self.backing.right),
        right: reverse3(self.backing.left)
      });
    }
    case "ISlice":
      return unsafeFromArray(reverse2(toReadonlyArray(self)));
  }
};
var get2 = /* @__PURE__ */ dual(2, (self, index2) => index2 < 0 || index2 >= self.length ? none2() : some2(unsafeGet2(self, index2)));
var unsafeFromArray = (self) => makeChunk({
  _tag: "IArray",
  array: self
});
var unsafeGet2 = /* @__PURE__ */ dual(2, (self, index2) => {
  switch (self.backing._tag) {
    case "IEmpty": {
      throw new Error(`Index out of bounds`);
    }
    case "ISingleton": {
      if (index2 !== 0) {
        throw new Error(`Index out of bounds`);
      }
      return self.backing.a;
    }
    case "IArray": {
      if (index2 >= self.length || index2 < 0) {
        throw new Error(`Index out of bounds`);
      }
      return self.backing.array[index2];
    }
    case "IConcat": {
      return index2 < self.left.length ? unsafeGet2(self.left, index2) : unsafeGet2(self.right, index2 - self.left.length);
    }
    case "ISlice": {
      return unsafeGet2(self.backing.chunk, index2 + self.backing.offset);
    }
  }
});
var append2 = /* @__PURE__ */ dual(2, (self, a) => appendAllNonEmpty(self, of2(a)));
var prepend2 = /* @__PURE__ */ dual(2, (self, elem) => appendAllNonEmpty(of2(elem), self));
var take = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return _empty;
  } else if (n >= self.length) {
    return self;
  } else {
    switch (self.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self.backing.chunk,
          length: n,
          offset: self.backing.offset
        });
      }
      case "IConcat": {
        if (n > self.left.length) {
          return makeChunk({
            _tag: "IConcat",
            left: self.left,
            right: take(self.right, n - self.left.length)
          });
        }
        return take(self.left, n);
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self,
          offset: 0,
          length: n
        });
      }
    }
  }
});
var drop = /* @__PURE__ */ dual(2, (self, n) => {
  if (n <= 0) {
    return self;
  } else if (n >= self.length) {
    return _empty;
  } else {
    switch (self.backing._tag) {
      case "ISlice": {
        return makeChunk({
          _tag: "ISlice",
          chunk: self.backing.chunk,
          offset: self.backing.offset + n,
          length: self.backing.length - n
        });
      }
      case "IConcat": {
        if (n > self.left.length) {
          return drop(self.right, n - self.left.length);
        }
        return makeChunk({
          _tag: "IConcat",
          left: drop(self.left, n),
          right: self.right
        });
      }
      default: {
        return makeChunk({
          _tag: "ISlice",
          chunk: self,
          offset: n,
          length: self.length - n
        });
      }
    }
  }
});
var appendAll = /* @__PURE__ */ dual(2, (self, that) => {
  if (self.backing._tag === "IEmpty") {
    return that;
  }
  if (that.backing._tag === "IEmpty") {
    return self;
  }
  const diff7 = that.depth - self.depth;
  if (Math.abs(diff7) <= 1) {
    return makeChunk({
      _tag: "IConcat",
      left: self,
      right: that
    });
  } else if (diff7 < -1) {
    if (self.left.depth >= self.right.depth) {
      const nr = appendAll(self.right, that);
      return makeChunk({
        _tag: "IConcat",
        left: self.left,
        right: nr
      });
    } else {
      const nrr = appendAll(self.right.right, that);
      if (nrr.depth === self.depth - 3) {
        const nr = makeChunk({
          _tag: "IConcat",
          left: self.right.left,
          right: nrr
        });
        return makeChunk({
          _tag: "IConcat",
          left: self.left,
          right: nr
        });
      } else {
        const nl = makeChunk({
          _tag: "IConcat",
          left: self.left,
          right: self.right.left
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: nrr
        });
      }
    }
  } else {
    if (that.right.depth >= that.left.depth) {
      const nl = appendAll(self, that.left);
      return makeChunk({
        _tag: "IConcat",
        left: nl,
        right: that.right
      });
    } else {
      const nll = appendAll(self, that.left.left);
      if (nll.depth === that.depth - 3) {
        const nl = makeChunk({
          _tag: "IConcat",
          left: nll,
          right: that.left.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nl,
          right: that.right
        });
      } else {
        const nr = makeChunk({
          _tag: "IConcat",
          left: that.left.right,
          right: that.right
        });
        return makeChunk({
          _tag: "IConcat",
          left: nll,
          right: nr
        });
      }
    }
  }
});
var appendAllNonEmpty = /* @__PURE__ */ dual(2, (self, that) => appendAll(self, that));
var filter = /* @__PURE__ */ dual(2, (self, predicate) => unsafeFromArray(filterMap(self, liftPredicate(predicate))));
var forEach = /* @__PURE__ */ dual(2, (self, f) => toReadonlyArray(self).forEach(f));
var isEmpty = (self) => self.length === 0;
var isNonEmpty = (self) => self.length > 0;
var head2 = /* @__PURE__ */ get2(0);
var unsafeHead = (self) => unsafeGet2(self, 0);
var headNonEmpty2 = unsafeHead;
var unsafeLast = (self) => unsafeGet2(self, self.length - 1);
var map3 = /* @__PURE__ */ dual(2, (self, f) => self.backing._tag === "ISingleton" ? of2(f(self.backing.a, 0)) : unsafeFromArray(pipe(toReadonlyArray(self), map2((a, i) => f(a, i)))));
var sort2 = /* @__PURE__ */ dual(2, (self, O) => unsafeFromArray(sort(toReadonlyArray(self), O)));
var splitAt2 = /* @__PURE__ */ dual(2, (self, n) => [take(self, n), drop(self, n)]);
var splitWhere = /* @__PURE__ */ dual(2, (self, predicate) => {
  let i = 0;
  for (const a of toReadonlyArray(self)) {
    if (predicate(a)) {
      break;
    } else {
      i++;
    }
  }
  return splitAt2(self, i);
});
var tailNonEmpty2 = (self) => drop(self, 1);
var dedupe2 = (self) => unsafeFromArray(dedupe(toReadonlyArray(self)));
var reduce2 = reduce;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Context.esm.js
var TagTypeId = /* @__PURE__ */ Symbol.for("effect/Context/Tag");
var STMSymbolKey = "effect/STM";
var STMTypeId = /* @__PURE__ */ Symbol.for(STMSymbolKey);
var TagProto = {
  ...EffectPrototype,
  _tag: "Tag",
  _op: "Tag",
  [STMTypeId]: effectVariance,
  [TagTypeId]: {
    _S: (_) => _,
    _I: (_) => _
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Tag",
      identifier: this.identifier,
      stack: this.stack
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  of(self) {
    return self;
  },
  context(self) {
    return make3(this, self);
  }
};
var tagRegistry = /* @__PURE__ */ globalValue("effect/Context/Tag/tagRegistry", () => /* @__PURE__ */ new Map());
var makeTag = (identifier) => {
  if (identifier && tagRegistry.has(identifier)) {
    return tagRegistry.get(identifier);
  }
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  const tag3 = Object.create(TagProto);
  Object.defineProperty(tag3, "stack", {
    get() {
      return creationError.stack;
    }
  });
  if (identifier) {
    tag3.identifier = identifier;
    tagRegistry.set(identifier, tag3);
  }
  return tag3;
};
var TypeId4 = /* @__PURE__ */ Symbol.for("effect/Context");
var ContextProto = {
  [TypeId4]: {
    _S: (_) => _
  },
  [symbol2](that) {
    if (isContext(that)) {
      if (this.unsafeMap.size === that.unsafeMap.size) {
        for (const k of this.unsafeMap.keys()) {
          if (!that.unsafeMap.has(k) || !equals(this.unsafeMap.get(k), that.unsafeMap.get(k))) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  },
  [symbol]() {
    return number(this.unsafeMap.size);
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "Context",
      services: Array.from(this.unsafeMap).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var makeContext = (unsafeMap) => {
  const context6 = Object.create(ContextProto);
  context6.unsafeMap = unsafeMap;
  return context6;
};
var serviceNotFoundError = (tag3) => {
  const error = new Error(`Service not found${tag3.identifier ? `: ${String(tag3.identifier)}` : ""}`);
  if (tag3.stack) {
    const lines = tag3.stack.split("\n");
    if (lines.length > 2) {
      const afterAt = lines[2].match(/at (.*)/);
      if (afterAt) {
        error.message = error.message + ` (defined at ${afterAt[1]})`;
      }
    }
  }
  if (error.stack) {
    const lines = error.stack.split("\n");
    lines.splice(1, 3);
    error.stack = lines.join("\n");
  }
  return error;
};
var isContext = (u) => typeof u === "object" && u !== null && TypeId4 in u;
var isTag = (u) => typeof u === "object" && u !== null && TagTypeId in u;
var _empty2 = /* @__PURE__ */ makeContext(/* @__PURE__ */ new Map());
var empty4 = () => _empty2;
var make3 = (tag3, service2) => makeContext(/* @__PURE__ */ new Map([[tag3, service2]]));
var add = /* @__PURE__ */ dual(3, (self, tag3, service2) => {
  const map20 = new Map(self.unsafeMap);
  map20.set(tag3, service2);
  return makeContext(map20);
});
var unsafeGet3 = /* @__PURE__ */ dual(2, (self, tag3) => {
  if (!self.unsafeMap.has(tag3)) {
    throw serviceNotFoundError(tag3);
  }
  return self.unsafeMap.get(tag3);
});
var get3 = unsafeGet3;
var getOption = /* @__PURE__ */ dual(2, (self, tag3) => {
  if (!self.unsafeMap.has(tag3)) {
    return none;
  }
  return some(self.unsafeMap.get(tag3));
});
var merge2 = /* @__PURE__ */ dual(2, (self, that) => {
  const map20 = new Map(self.unsafeMap);
  for (const [tag3, s] of that.unsafeMap) {
    map20.set(tag3, s);
  }
  return makeContext(map20);
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Context/dist/effect-Context.esm.js
var Tag = makeTag;
var isContext2 = isContext;
var isTag2 = isTag;
var empty5 = empty4;
var make4 = make3;
var add2 = add;
var get4 = get3;
var unsafeGet4 = unsafeGet3;
var getOption2 = getOption;
var merge3 = merge2;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Differ/ContextPatch.esm.js
var ContextPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferContextPatch");
function variance(a) {
  return a;
}
var PatchProto = {
  ...Structural.prototype,
  [ContextPatchTypeId]: {
    _Value: variance,
    _Patch: variance
  }
};
var EmptyProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "Empty"
});
var _empty3 = /* @__PURE__ */ Object.create(EmptyProto);
var empty6 = () => _empty3;
var AndThenProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "AndThen"
});
var makeAndThen = (first2, second) => {
  const o = Object.create(AndThenProto);
  o.first = first2;
  o.second = second;
  return o;
};
var AddServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "AddService"
});
var makeAddService = (tag3, service2) => {
  const o = Object.create(AddServiceProto);
  o.tag = tag3;
  o.service = service2;
  return o;
};
var RemoveServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "RemoveService"
});
var makeRemoveService = (tag3) => {
  const o = Object.create(RemoveServiceProto);
  o.tag = tag3;
  return o;
};
var UpdateServiceProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto), {
  _tag: "UpdateService"
});
var makeUpdateService = (tag3, update6) => {
  const o = Object.create(UpdateServiceProto);
  o.tag = tag3;
  o.update = update6;
  return o;
};
var diff = (oldValue, newValue) => {
  const missingServices = new Map(oldValue.unsafeMap);
  let patch10 = empty6();
  for (const [tag3, newService] of newValue.unsafeMap.entries()) {
    if (missingServices.has(tag3)) {
      const old = missingServices.get(tag3);
      missingServices.delete(tag3);
      if (!equals(old, newService)) {
        patch10 = combine2(makeUpdateService(tag3, () => newService))(patch10);
      }
    } else {
      missingServices.delete(tag3);
      patch10 = combine2(makeAddService(tag3, newService))(patch10);
    }
  }
  for (const [tag3] of missingServices.entries()) {
    patch10 = combine2(makeRemoveService(tag3))(patch10);
  }
  return patch10;
};
var combine2 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen(self, that));
var patch = /* @__PURE__ */ dual(2, (self, context6) => {
  let wasServiceUpdated = false;
  let patches = of2(self);
  const updatedContext = new Map(context6.unsafeMap);
  while (isNonEmpty(patches)) {
    const head7 = headNonEmpty2(patches);
    const tail = tailNonEmpty2(patches);
    switch (head7._tag) {
      case "Empty": {
        patches = tail;
        break;
      }
      case "AddService": {
        updatedContext.set(head7.tag, head7.service);
        patches = tail;
        break;
      }
      case "AndThen": {
        patches = prepend2(prepend2(tail, head7.second), head7.first);
        break;
      }
      case "RemoveService": {
        updatedContext.delete(head7.tag);
        patches = tail;
        break;
      }
      case "UpdateService": {
        updatedContext.set(head7.tag, head7.update(updatedContext.get(head7.tag)));
        wasServiceUpdated = true;
        patches = tail;
        break;
      }
    }
  }
  if (!wasServiceUpdated) {
    return makeContext(updatedContext);
  }
  const map20 = /* @__PURE__ */ new Map();
  for (const [tag3] of context6.unsafeMap) {
    if (updatedContext.has(tag3)) {
      map20.set(tag3, updatedContext.get(tag3));
      updatedContext.delete(tag3);
    }
  }
  for (const [tag3, s] of updatedContext) {
    map20.set(tag3, s);
  }
  return makeContext(map20);
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/HashMap/config.esm.js
var SIZE = 5;
var BUCKET_SIZE = /* @__PURE__ */ Math.pow(2, SIZE);
var MASK = BUCKET_SIZE - 1;
var MAX_INDEX_NODE = BUCKET_SIZE / 2;
var MIN_ARRAY_NODE = BUCKET_SIZE / 4;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/HashMap/bitwise.esm.js
function popcount(x) {
  x -= x >> 1 & 1431655765;
  x = (x & 858993459) + (x >> 2 & 858993459);
  x = x + (x >> 4) & 252645135;
  x += x >> 8;
  x += x >> 16;
  return x & 127;
}
function hashFragment(shift2, h) {
  return h >>> shift2 & MASK;
}
function toBitmap(x) {
  return 1 << x;
}
function fromBitmap(bitmap, bit) {
  return popcount(bitmap & bit - 1);
}

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/HashMap/array.esm.js
function arrayUpdate(mutate3, at, v, arr) {
  let out = arr;
  if (!mutate3) {
    const len = arr.length;
    out = new Array(len);
    for (let i = 0; i < len; ++i)
      out[i] = arr[i];
  }
  out[at] = v;
  return out;
}
function arraySpliceOut(mutate3, at, arr) {
  const newLen = arr.length - 1;
  let i = 0;
  let g = 0;
  let out = arr;
  if (mutate3) {
    i = g = at;
  } else {
    out = new Array(newLen);
    while (i < at)
      out[g++] = arr[i++];
  }
  ++i;
  while (i <= newLen)
    out[g++] = arr[i++];
  if (mutate3) {
    out.length = newLen;
  }
  return out;
}
function arraySpliceIn(mutate3, at, v, arr) {
  const len = arr.length;
  if (mutate3) {
    let i2 = len;
    while (i2 >= at)
      arr[i2--] = arr[i2];
    arr[at] = v;
    return arr;
  }
  let i = 0, g = 0;
  const out = new Array(len + 1);
  while (i < at)
    out[g++] = arr[i++];
  out[at] = v;
  while (i < len)
    out[++g] = arr[i++];
  return out;
}

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Stack.esm.js
var Stack = class {
  constructor(value, previous) {
    this.value = value;
    this.previous = previous;
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/HashMap/node.esm.js
var EmptyNode = class _EmptyNode {
  _tag = "EmptyNode";
  modify(edit, _shift, f, hash2, key2, size12) {
    const v = f(none2());
    if (isNone2(v))
      return new _EmptyNode();
    ++size12.value;
    return new LeafNode(edit, hash2, key2, v);
  }
};
function isEmptyNode(a) {
  return a instanceof EmptyNode;
}
function isLeafNode(node) {
  return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode";
}
function canEditNode(node, edit) {
  return isEmptyNode(node) ? false : edit === node.edit;
}
var LeafNode = class _LeafNode {
  _tag = "LeafNode";
  constructor(edit, hash2, key2, value) {
    this.edit = edit;
    this.hash = hash2;
    this.key = key2;
    this.value = value;
  }
  modify(edit, shift2, f, hash2, key2, size12) {
    if (equals(key2, this.key)) {
      const v2 = f(this.value);
      if (v2 === this.value)
        return this;
      else if (isNone2(v2)) {
        --size12.value;
        return new EmptyNode();
      }
      if (canEditNode(this, edit)) {
        this.value = v2;
        return this;
      }
      return new _LeafNode(edit, hash2, key2, v2);
    }
    const v = f(none2());
    if (isNone2(v))
      return this;
    ++size12.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash2, new _LeafNode(edit, hash2, key2, v));
  }
};
var CollisionNode = class _CollisionNode {
  _tag = "CollisionNode";
  constructor(edit, hash2, children2) {
    this.edit = edit;
    this.hash = hash2;
    this.children = children2;
  }
  modify(edit, shift2, f, hash2, key2, size12) {
    if (hash2 === this.hash) {
      const canEdit = canEditNode(this, edit);
      const list = this.updateCollisionList(canEdit, edit, this.hash, this.children, f, key2, size12);
      if (list === this.children)
        return this;
      return list.length > 1 ? new _CollisionNode(edit, this.hash, list) : list[0];
    }
    const v = f(none2());
    if (isNone2(v))
      return this;
    ++size12.value;
    return mergeLeaves(edit, shift2, this.hash, this, hash2, new LeafNode(edit, hash2, key2, v));
  }
  updateCollisionList(mutate3, edit, hash2, list, f, key2, size12) {
    const len = list.length;
    for (let i = 0; i < len; ++i) {
      const child = list[i];
      if ("key" in child && equals(key2, child.key)) {
        const value = child.value;
        const newValue2 = f(value);
        if (newValue2 === value)
          return list;
        if (isNone2(newValue2)) {
          --size12.value;
          return arraySpliceOut(mutate3, i, list);
        }
        return arrayUpdate(mutate3, i, new LeafNode(edit, hash2, key2, newValue2), list);
      }
    }
    const newValue = f(none2());
    if (isNone2(newValue))
      return list;
    ++size12.value;
    return arrayUpdate(mutate3, len, new LeafNode(edit, hash2, key2, newValue), list);
  }
};
var IndexedNode = class _IndexedNode {
  _tag = "IndexedNode";
  constructor(edit, mask, children2) {
    this.edit = edit;
    this.mask = mask;
    this.children = children2;
  }
  modify(edit, shift2, f, hash2, key2, size12) {
    const mask = this.mask;
    const children2 = this.children;
    const frag = hashFragment(shift2, hash2);
    const bit = toBitmap(frag);
    const indx = fromBitmap(mask, bit);
    const exists2 = mask & bit;
    const canEdit = canEditNode(this, edit);
    if (!exists2) {
      const _newChild = new EmptyNode().modify(edit, shift2 + SIZE, f, hash2, key2, size12);
      if (!_newChild)
        return this;
      return children2.length >= MAX_INDEX_NODE ? expand(edit, frag, _newChild, mask, children2) : new _IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children2));
    }
    const current = children2[indx];
    const child = current.modify(edit, shift2 + SIZE, f, hash2, key2, size12);
    if (current === child)
      return this;
    let bitmap = mask;
    let newChildren;
    if (isEmptyNode(child)) {
      bitmap &= ~bit;
      if (!bitmap)
        return new EmptyNode();
      if (children2.length <= 2 && isLeafNode(children2[indx ^ 1])) {
        return children2[indx ^ 1];
      }
      newChildren = arraySpliceOut(canEdit, indx, children2);
    } else {
      newChildren = arrayUpdate(canEdit, indx, child, children2);
    }
    if (canEdit) {
      this.mask = bitmap;
      this.children = newChildren;
      return this;
    }
    return new _IndexedNode(edit, bitmap, newChildren);
  }
};
var ArrayNode = class _ArrayNode {
  _tag = "ArrayNode";
  constructor(edit, size12, children2) {
    this.edit = edit;
    this.size = size12;
    this.children = children2;
  }
  modify(edit, shift2, f, hash2, key2, size12) {
    let count = this.size;
    const children2 = this.children;
    const frag = hashFragment(shift2, hash2);
    const child = children2[frag];
    const newChild = (child || new EmptyNode()).modify(edit, shift2 + SIZE, f, hash2, key2, size12);
    if (child === newChild)
      return this;
    const canEdit = canEditNode(this, edit);
    let newChildren;
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      ++count;
      newChildren = arrayUpdate(canEdit, frag, newChild, children2);
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      --count;
      if (count <= MIN_ARRAY_NODE) {
        return pack(edit, count, frag, children2);
      }
      newChildren = arrayUpdate(canEdit, frag, new EmptyNode(), children2);
    } else {
      newChildren = arrayUpdate(canEdit, frag, newChild, children2);
    }
    if (canEdit) {
      this.size = count;
      this.children = newChildren;
      return this;
    }
    return new _ArrayNode(edit, count, newChildren);
  }
};
function pack(edit, count, removed, elements) {
  const children2 = new Array(count - 1);
  let g = 0;
  let bitmap = 0;
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      const elem = elements[i];
      if (elem && !isEmptyNode(elem)) {
        children2[g++] = elem;
        bitmap |= 1 << i;
      }
    }
  }
  return new IndexedNode(edit, bitmap, children2);
}
function expand(edit, frag, child, bitmap, subNodes) {
  const arr = [];
  let bit = bitmap;
  let count = 0;
  for (let i = 0; bit; ++i) {
    if (bit & 1)
      arr[i] = subNodes[count++];
    bit >>>= 1;
  }
  arr[frag] = child;
  return new ArrayNode(edit, count + 1, arr);
}
function mergeLeavesInner(edit, shift2, h1, n1, h2, n2) {
  if (h1 === h2)
    return new CollisionNode(edit, h1, [n2, n1]);
  const subH1 = hashFragment(shift2, h1);
  const subH2 = hashFragment(shift2, h2);
  if (subH1 === subH2) {
    return (child) => new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), [child]);
  } else {
    const children2 = subH1 < subH2 ? [n1, n2] : [n2, n1];
    return new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), children2);
  }
}
function mergeLeaves(edit, shift2, h1, n1, h2, n2) {
  let stack = void 0;
  let currentShift = shift2;
  while (true) {
    const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2);
    if (typeof res === "function") {
      stack = new Stack(res, stack);
      currentShift = currentShift + SIZE;
    } else {
      let final = res;
      while (stack != null) {
        final = stack.value(final);
        stack = stack.previous;
      }
      return final;
    }
  }
}

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/HashMap.esm.js
var HashMapTypeId = /* @__PURE__ */ Symbol.for("effect/HashMap");
var HashMapProto = {
  [HashMapTypeId]: HashMapTypeId,
  [Symbol.iterator]() {
    return new HashMapIterator(this, (k, v) => [k, v]);
  },
  [symbol]() {
    let hash$1 = hash("HashMap");
    for (const item of this) {
      hash$1 ^= combine(hash(item[0]))(hash(item[1]));
    }
    return hash$1;
  },
  [symbol2](that) {
    if (isHashMap(that)) {
      if (that._size !== this._size) {
        return false;
      }
      for (const item of this) {
        const elem = pipe(that, getHash(item[0], hash(item[0])));
        if (isNone2(elem)) {
          return false;
        } else {
          if (!equals(item[1], elem.value)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeImpl = (editable, edit, root, size12) => {
  const map20 = Object.create(HashMapProto);
  map20._editable = editable;
  map20._edit = edit;
  map20._root = root;
  map20._size = size12;
  return map20;
};
var HashMapIterator = class _HashMapIterator {
  constructor(map20, f) {
    this.map = map20;
    this.f = f;
    this.v = visitLazy(this.map._root, this.f, void 0);
  }
  next() {
    if (isNone2(this.v)) {
      return {
        done: true,
        value: void 0
      };
    }
    const v0 = this.v.value;
    this.v = applyCont(v0.cont);
    return {
      done: false,
      value: v0.value
    };
  }
  [Symbol.iterator]() {
    return new _HashMapIterator(this.map, this.f);
  }
};
var applyCont = (cont) => cont ? visitLazyChildren(cont[0], cont[1], cont[2], cont[3], cont[4]) : none2();
var visitLazy = (node, f, cont = void 0) => {
  switch (node._tag) {
    case "LeafNode": {
      if (isSome2(node.value)) {
        return some2({
          value: f(node.key, node.value.value),
          cont
        });
      }
      return applyCont(cont);
    }
    case "CollisionNode":
    case "ArrayNode":
    case "IndexedNode": {
      const children2 = node.children;
      return visitLazyChildren(children2.length, children2, 0, f, cont);
    }
    default: {
      return applyCont(cont);
    }
  }
};
var visitLazyChildren = (len, children2, i, f, cont) => {
  while (i < len) {
    const child = children2[i++];
    if (child && !isEmptyNode(child)) {
      return visitLazy(child, f, [len, children2, i, f, cont]);
    }
  }
  return applyCont(cont);
};
var _empty4 = /* @__PURE__ */ makeImpl(false, 0, /* @__PURE__ */ new EmptyNode(), 0);
var empty7 = () => _empty4;
var make5 = (...entries) => fromIterable4(entries);
var fromIterable4 = (entries) => {
  const map20 = beginMutation(empty7());
  for (const entry of entries) {
    set(entry[0], entry[1])(map20);
  }
  return endMutation(map20);
};
var isHashMap = (u) => isObject(u) && HashMapTypeId in u;
var isEmpty2 = (self) => self && isEmptyNode(self._root);
var get5 = /* @__PURE__ */ dual(2, (self, key2) => getHash(self, key2, hash(key2)));
var getHash = /* @__PURE__ */ dual(3, (self, key2, hash2) => {
  let node = self._root;
  let shift2 = 0;
  while (true) {
    switch (node._tag) {
      case "LeafNode": {
        return equals(key2, node.key) ? node.value : none2();
      }
      case "CollisionNode": {
        if (hash2 === node.hash) {
          const children2 = node.children;
          for (let i = 0, len = children2.length; i < len; ++i) {
            const child = children2[i];
            if ("key" in child && equals(key2, child.key)) {
              return child.value;
            }
          }
        }
        return none2();
      }
      case "IndexedNode": {
        const frag = hashFragment(shift2, hash2);
        const bit = toBitmap(frag);
        if (node.mask & bit) {
          node = node.children[fromBitmap(node.mask, bit)];
          shift2 += SIZE;
          break;
        }
        return none2();
      }
      case "ArrayNode": {
        node = node.children[hashFragment(shift2, hash2)];
        if (node) {
          shift2 += SIZE;
          break;
        }
        return none2();
      }
      default:
        return none2();
    }
  }
});
var has = /* @__PURE__ */ dual(2, (self, key2) => isSome2(getHash(self, key2, hash(key2))));
var set = /* @__PURE__ */ dual(3, (self, key2, value) => modifyAt(self, key2, () => some2(value)));
var setTree = /* @__PURE__ */ dual(3, (self, newRoot, newSize) => {
  if (self._editable) {
    self._root = newRoot;
    self._size = newSize;
    return self;
  }
  return newRoot === self._root ? self : makeImpl(self._editable, self._edit, newRoot, newSize);
});
var keys = (self) => new HashMapIterator(self, (key2) => key2);
var size = (self) => self._size;
var beginMutation = (self) => makeImpl(true, self._edit + 1, self._root, self._size);
var endMutation = (self) => {
  self._editable = false;
  return self;
};
var modifyAt = /* @__PURE__ */ dual(3, (self, key2, f) => modifyHash(self, key2, hash(key2), f));
var modifyHash = /* @__PURE__ */ dual(4, (self, key2, hash2, f) => {
  const size12 = {
    value: self._size
  };
  const newRoot = self._root.modify(self._editable ? self._edit : NaN, 0, f, hash2, key2, size12);
  return pipe(self, setTree(newRoot, size12.value));
});
var remove3 = /* @__PURE__ */ dual(2, (self, key2) => modifyAt(self, key2, none2));
var map4 = /* @__PURE__ */ dual(2, (self, f) => reduce3(self, empty7(), (map20, value, key2) => set(map20, key2, f(value, key2))));
var forEach2 = /* @__PURE__ */ dual(2, (self, f) => reduce3(self, void 0, (_, value, key2) => f(value, key2)));
var reduce3 = /* @__PURE__ */ dual(3, (self, zero2, f) => {
  const root = self._root;
  if (root._tag === "LeafNode") {
    return isSome2(root.value) ? f(zero2, root.value.value, root.key) : zero2;
  }
  if (root._tag === "EmptyNode") {
    return zero2;
  }
  const toVisit = [root.children];
  let children2;
  while (children2 = toVisit.pop()) {
    for (let i = 0, len = children2.length; i < len; ) {
      const child = children2[i++];
      if (child && !isEmptyNode(child)) {
        if (child._tag === "LeafNode") {
          if (isSome2(child.value)) {
            zero2 = f(zero2, child.value.value, child.key);
          }
        } else {
          toVisit.push(child.children);
        }
      }
    }
  }
  return zero2;
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/HashSet.esm.js
var HashSetTypeId = /* @__PURE__ */ Symbol.for("effect/HashSet");
var HashSetProto = {
  [HashSetTypeId]: HashSetTypeId,
  [Symbol.iterator]() {
    return keys(this._keyMap);
  },
  [symbol]() {
    return combine(hash(this._keyMap))(hash("HashSet"));
  },
  [symbol2](that) {
    if (isHashSet(that)) {
      return size(this._keyMap) === size(that._keyMap) && equals(this._keyMap, that._keyMap);
    }
    return false;
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "HashSet",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeImpl2 = (keyMap) => {
  const set10 = Object.create(HashSetProto);
  set10._keyMap = keyMap;
  return set10;
};
var isHashSet = (u) => isObject(u) && HashSetTypeId in u;
var _empty5 = /* @__PURE__ */ makeImpl2(/* @__PURE__ */ empty7());
var empty8 = () => _empty5;
var fromIterable5 = (elements) => {
  const set10 = beginMutation2(empty8());
  for (const value of elements) {
    add3(set10, value);
  }
  return endMutation2(set10);
};
var make6 = (...elements) => {
  const set10 = beginMutation2(empty8());
  for (const value of elements) {
    add3(set10, value);
  }
  return endMutation2(set10);
};
var has2 = /* @__PURE__ */ dual(2, (self, value) => has(self._keyMap, value));
var size2 = (self) => size(self._keyMap);
var beginMutation2 = (self) => makeImpl2(beginMutation(self._keyMap));
var endMutation2 = (self) => {
  self._keyMap._editable = false;
  return self;
};
var mutate = /* @__PURE__ */ dual(2, (self, f) => {
  const transient = beginMutation2(self);
  f(transient);
  return endMutation2(transient);
});
var add3 = /* @__PURE__ */ dual(2, (self, value) => self._keyMap._editable ? (set(value, true)(self._keyMap), self) : makeImpl2(set(value, true)(self._keyMap)));
var remove4 = /* @__PURE__ */ dual(2, (self, value) => self._keyMap._editable ? (remove3(value)(self._keyMap), self) : makeImpl2(remove3(value)(self._keyMap)));
var difference = /* @__PURE__ */ dual(2, (self, that) => mutate(self, (set10) => {
  for (const value of that) {
    remove4(set10, value);
  }
}));
var union2 = /* @__PURE__ */ dual(2, (self, that) => mutate(empty8(), (set10) => {
  forEach3(self, (value) => add3(set10, value));
  for (const value of that) {
    add3(set10, value);
  }
}));
var forEach3 = /* @__PURE__ */ dual(2, (self, f) => forEach2(self._keyMap, (_, k) => f(k)));
var reduce4 = /* @__PURE__ */ dual(3, (self, zero2, f) => reduce3(self._keyMap, zero2, (z, _, a) => f(z, a)));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/HashMap/dist/effect-HashMap.esm.js
var empty9 = empty7;
var make7 = make5;
var fromIterable6 = fromIterable4;
var isEmpty3 = isEmpty2;
var get6 = get5;
var set2 = set;
var keys2 = keys;
var size3 = size;
var map5 = map4;
var reduce5 = reduce3;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/HashSet/dist/effect-HashSet.esm.js
var isHashSet2 = isHashSet;
var empty10 = empty8;
var fromIterable7 = fromIterable5;
var make8 = make6;
var has3 = has2;
var size4 = size2;
var add4 = add3;
var remove5 = remove4;
var difference2 = difference;
var union4 = union2;
var reduce6 = reduce4;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Differ/HashSetPatch.esm.js
var HashSetPatchTypeId = /* @__PURE__ */ Symbol.for("effect/DifferHashSetPatch");
function variance2(a) {
  return a;
}
var PatchProto2 = {
  ...Structural.prototype,
  [HashSetPatchTypeId]: {
    _Value: variance2,
    _Key: variance2,
    _Patch: variance2
  }
};
var EmptyProto2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Empty"
});
var _empty6 = /* @__PURE__ */ Object.create(EmptyProto2);
var empty11 = () => _empty6;
var AndThenProto2 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "AndThen"
});
var makeAndThen2 = (first2, second) => {
  const o = Object.create(AndThenProto2);
  o.first = first2;
  o.second = second;
  return o;
};
var AddProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Add"
});
var makeAdd = (value) => {
  const o = Object.create(AddProto);
  o.value = value;
  return o;
};
var RemoveProto = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(PatchProto2), {
  _tag: "Remove"
});
var makeRemove = (value) => {
  const o = Object.create(RemoveProto);
  o.value = value;
  return o;
};
var diff2 = (oldValue, newValue) => {
  const [removed, patch10] = reduce6([oldValue, empty11()], ([set10, patch11], value) => {
    if (has3(value)(set10)) {
      return [remove5(value)(set10), patch11];
    }
    return [set10, combine3(makeAdd(value))(patch11)];
  })(newValue);
  return reduce6(patch10, (patch11, value) => combine3(makeRemove(value))(patch11))(removed);
};
var combine3 = /* @__PURE__ */ dual(2, (self, that) => makeAndThen2(self, that));
var patch2 = /* @__PURE__ */ dual(2, (self, oldValue) => {
  let set10 = oldValue;
  let patches = of2(self);
  while (isNonEmpty(patches)) {
    const head7 = headNonEmpty2(patches);
    const tail = tailNonEmpty2(patches);
    switch (head7._tag) {
      case "Empty": {
        patches = tail;
        break;
      }
      case "AndThen": {
        patches = prepend2(head7.first)(prepend2(head7.second)(tail));
        break;
      }
      case "Add": {
        set10 = add4(head7.value)(set10);
        patches = tail;
        break;
      }
      case "Remove": {
        set10 = remove5(head7.value)(set10);
        patches = tail;
      }
    }
  }
  return set10;
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/Differ.esm.js
var DifferTypeId = /* @__PURE__ */ Symbol.for("effect/Differ");
var DifferProto = {
  [DifferTypeId]: {
    _P: identity,
    _V: identity
  }
};
var make9 = (params) => {
  const differ3 = Object.create(DifferProto);
  differ3.empty = params.empty;
  differ3.diff = params.diff;
  differ3.combine = params.combine;
  differ3.patch = params.patch;
  return differ3;
};
var environment = () => make9({
  empty: empty6(),
  combine: (first2, second) => combine2(second)(first2),
  diff: (oldValue, newValue) => diff(oldValue, newValue),
  patch: (patch$1, oldValue) => patch(oldValue)(patch$1)
});
var hashSet = () => make9({
  empty: empty11(),
  combine: (first2, second) => combine3(second)(first2),
  diff: (oldValue, newValue) => diff2(oldValue, newValue),
  patch: (patch10, oldValue) => patch2(oldValue)(patch10)
});
var update = () => updateWith((_, a) => a);
var updateWith = (f) => make9({
  empty: identity,
  combine: (first2, second) => {
    if (first2 === identity) {
      return second;
    }
    if (second === identity) {
      return first2;
    }
    return (a) => second(first2(a));
  },
  diff: (oldValue, newValue) => {
    if (equals(oldValue, newValue)) {
      return identity;
    }
    return constant(newValue);
  },
  patch: (patch10, oldValue) => f(oldValue, patch10(oldValue))
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Differ/dist/effect-Differ.esm.js
var make10 = make9;
var environment2 = environment;
var hashSet2 = hashSet;
var update2 = update;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/MutableRef/dist/effect-MutableRef.esm.js
var TypeId5 = /* @__PURE__ */ Symbol.for("effect/MutableRef");
var MutableRefProto = {
  [TypeId5]: TypeId5,
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableRef",
      current: toJSON(this.current)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make11 = (value) => {
  const ref = Object.create(MutableRefProto);
  ref.current = value;
  return ref;
};
var compareAndSet = /* @__PURE__ */ dual(3, (self, oldValue, newValue) => {
  if (equals(oldValue, self.current)) {
    self.current = newValue;
    return true;
  }
  return false;
});
var get7 = (self) => self.current;
var incrementAndGet = (self) => updateAndGet(self, (n) => n + 1);
var set3 = /* @__PURE__ */ dual(2, (self, value) => {
  self.current = value;
  return self;
});
var setAndGet = /* @__PURE__ */ dual(2, (self, value) => {
  self.current = value;
  return self.current;
});
var update3 = /* @__PURE__ */ dual(2, (self, f) => set3(self, f(get7(self))));
var updateAndGet = /* @__PURE__ */ dual(2, (self, f) => setAndGet(self, f(get7(self))));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberId.esm.js
var FiberIdSymbolKey = "effect/FiberId";
var FiberIdTypeId = /* @__PURE__ */ Symbol.for(FiberIdSymbolKey);
var OP_NONE = "None";
var OP_RUNTIME = "Runtime";
var OP_COMPOSITE = "Composite";
var None = class {
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_NONE;
  [symbol]() {
    return pipe(hash(FiberIdSymbolKey), combine(hash(this._tag)));
  }
  [symbol2](that) {
    return isFiberId(that) && that._tag === OP_NONE;
  }
  toString() {
    return toString(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var Runtime = class {
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_RUNTIME;
  constructor(id2, startTimeMillis) {
    this.id = id2;
    this.startTimeMillis = startTimeMillis;
  }
  [symbol]() {
    return pipe(hash(FiberIdSymbolKey), combine(hash(this._tag)), combine(hash(this.id)), combine(hash(this.startTimeMillis)));
  }
  [symbol2](that) {
    return isFiberId(that) && that._tag === OP_RUNTIME && this.id === that.id && this.startTimeMillis === that.startTimeMillis;
  }
  toString() {
    return toString(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      id: this.id,
      startTimeMillis: this.startTimeMillis
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var Composite = class {
  [FiberIdTypeId] = FiberIdTypeId;
  _tag = OP_COMPOSITE;
  constructor(left3, right3) {
    this.left = left3;
    this.right = right3;
  }
  [symbol]() {
    return pipe(hash(FiberIdSymbolKey), combine(hash(this._tag)), combine(hash(this.left)), combine(hash(this.right)));
  }
  [symbol2](that) {
    return isFiberId(that) && that._tag === OP_COMPOSITE && equals(this.left, that.left) && equals(this.right, that.right);
  }
  toString() {
    return toString(this.toJSON());
  }
  toJSON() {
    return {
      _id: "FiberId",
      _tag: this._tag,
      left: toJSON(this.left),
      right: toJSON(this.right)
    };
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var none3 = /* @__PURE__ */ new None();
var isFiberId = (self) => {
  return typeof self === "object" && self != null && FiberIdTypeId in self;
};
var combine4 = /* @__PURE__ */ dual(2, (self, that) => {
  if (self._tag === OP_NONE) {
    return that;
  }
  if (that._tag === OP_NONE) {
    return self;
  }
  return new Composite(self, that);
});
var ids = (self) => {
  switch (self._tag) {
    case OP_NONE: {
      return empty10();
    }
    case OP_RUNTIME: {
      return make8(self.id);
    }
    case OP_COMPOSITE: {
      return pipe(ids(self.left), union4(ids(self.right)));
    }
  }
};
var _fiberCounter = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Fiber/Id/_fiberCounter"), () => make11(0));
var threadName = (self) => {
  const identifiers = Array.from(ids(self)).map((n) => `#${n}`).join(",");
  return identifiers;
};
var unsafeMake = () => {
  const id2 = get7(_fiberCounter);
  pipe(_fiberCounter, set3(id2 + 1));
  return new Runtime(id2, (/* @__PURE__ */ new Date()).getTime());
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/FiberId/dist/effect-FiberId.esm.js
var none4 = none3;
var combine5 = combine4;
var threadName2 = threadName;
var unsafeMake2 = unsafeMake;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/List/dist/effect-List.esm.js
var TypeId6 = /* @__PURE__ */ Symbol.for("effect/List");
var toReadonlyArray2 = (self) => Array.from(self);
var getEquivalence3 = (isEquivalent) => mapInput(getEquivalence(isEquivalent), toReadonlyArray2);
var _equivalence3 = /* @__PURE__ */ getEquivalence3(equals);
var ConsProto = {
  [TypeId6]: TypeId6,
  _tag: "Cons",
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Cons",
      values: toReadonlyArray2(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol2](that) {
    return isList(that) && this._tag === that._tag && _equivalence3(this, that);
  },
  [symbol]() {
    return array2(toReadonlyArray2(this));
  },
  [Symbol.iterator]() {
    let done7 = false;
    let self = this;
    return {
      next() {
        if (done7) {
          return this.return();
        }
        if (self._tag === "Nil") {
          done7 = true;
          return this.return();
        }
        const value = self.head;
        self = self.tail;
        return {
          done: done7,
          value
        };
      },
      return(value) {
        if (!done7) {
          done7 = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeCons = (head7, tail) => {
  const cons2 = Object.create(ConsProto);
  cons2.head = head7;
  cons2.tail = tail;
  return cons2;
};
var NilProto = {
  [TypeId6]: TypeId6,
  _tag: "Nil",
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "List",
      _tag: "Nil"
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  [symbol]() {
    return array2(toReadonlyArray2(this));
  },
  [symbol2](that) {
    return isList(that) && this._tag === that._tag;
  },
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: true,
          value: void 0
        };
      }
    };
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var _Nil = /* @__PURE__ */ Object.create(NilProto);
var isList = (u) => isObject(u) && TypeId6 in u;
var isNil = (self) => self._tag === "Nil";
var isCons = (self) => self._tag === "Cons";
var nil = () => _Nil;
var cons = (head7, tail) => makeCons(head7, tail);
var empty12 = nil;
var of3 = (value) => makeCons(value, _Nil);
var appendAll2 = /* @__PURE__ */ dual(2, (self, that) => prependAll(that, self));
var prepend3 = /* @__PURE__ */ dual(2, (self, element) => cons(element, self));
var prependAll = /* @__PURE__ */ dual(2, (self, prefix) => {
  if (isNil(self)) {
    return prefix;
  } else if (isNil(prefix)) {
    return self;
  } else {
    const result = makeCons(prefix.head, self);
    let curr = result;
    let that = prefix.tail;
    while (!isNil(that)) {
      const temp = makeCons(that.head, self);
      curr.tail = temp;
      curr = temp;
      that = that.tail;
    }
    return result;
  }
});
var findFirst3 = /* @__PURE__ */ dual(2, (self, predicate) => {
  let these = self;
  while (!isNil(these)) {
    if (predicate(these.head)) {
      return some2(these.head);
    }
    these = these.tail;
  }
  return none2();
});
var head3 = (self) => isNil(self) ? none2() : some2(self.head);
var reduce7 = /* @__PURE__ */ dual(3, (self, zero2, f) => {
  let acc = zero2;
  let these = self;
  while (!isNil(these)) {
    acc = f(acc, these.head);
    these = these.tail;
  }
  return acc;
});
var reverse4 = (self) => {
  let result = empty12();
  let these = self;
  while (!isNil(these)) {
    result = prepend3(result, these.head);
    these = these.tail;
  }
  return result;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/blockedRequests.esm.js
var par = (self, that) => ({
  _tag: "Par",
  left: self,
  right: that
});
var seq = (self, that) => ({
  _tag: "Seq",
  left: self,
  right: that
});
var flatten3 = (self) => {
  let current = of3(self);
  let updated = empty12();
  while (1) {
    const [parallel4, sequential4] = reduce7(current, [parallelCollectionEmpty(), empty12()], ([parallel5, sequential5], blockedRequest) => {
      const [par2, seq2] = step(blockedRequest);
      return [parallelCollectionCombine(parallel5, par2), appendAll2(sequential5, seq2)];
    });
    updated = merge4(updated, parallel4);
    if (isNil(sequential4)) {
      return reverse4(updated);
    }
    current = sequential4;
  }
  throw new Error("BUG: BlockedRequests.flatten - please report an issue at https://github.com/Effect-TS/query/issues");
};
var step = (requests) => {
  let current = requests;
  let parallel4 = parallelCollectionEmpty();
  let stack = empty12();
  let sequential4 = empty12();
  while (1) {
    switch (current._tag) {
      case "Empty": {
        if (isNil(stack)) {
          return [parallel4, sequential4];
        }
        current = stack.head;
        stack = stack.tail;
        break;
      }
      case "Par": {
        stack = cons(current.right, stack);
        current = current.left;
        break;
      }
      case "Seq": {
        const left3 = current.left;
        const right3 = current.right;
        switch (left3._tag) {
          case "Empty": {
            current = right3;
            break;
          }
          case "Par": {
            const l = left3.left;
            const r = left3.right;
            current = par(seq(l, right3), seq(r, right3));
            break;
          }
          case "Seq": {
            const l = left3.left;
            const r = left3.right;
            current = seq(l, seq(r, right3));
            break;
          }
          case "Single": {
            current = left3;
            sequential4 = cons(right3, sequential4);
            break;
          }
        }
        break;
      }
      case "Single": {
        parallel4 = parallelCollectionCombine(parallel4, parallelCollectionMake(current.dataSource, current.blockedRequest));
        if (isNil(stack)) {
          return [parallel4, sequential4];
        }
        current = stack.head;
        stack = stack.tail;
        break;
      }
    }
  }
  throw new Error("BUG: BlockedRequests.step - please report an issue at https://github.com/Effect-TS/query/issues");
};
var merge4 = (sequential4, parallel4) => {
  if (isNil(sequential4)) {
    return of3(parallelCollectionToSequentialCollection(parallel4));
  }
  if (parallelCollectionIsEmpty(parallel4)) {
    return sequential4;
  }
  const seqHeadKeys = sequentialCollectionKeys(sequential4.head);
  const parKeys = parallelCollectionKeys(parallel4);
  if (seqHeadKeys.length === 1 && parKeys.length === 1 && equals(seqHeadKeys[0], parKeys[0])) {
    return cons(sequentialCollectionCombine(sequential4.head, parallelCollectionToSequentialCollection(parallel4)), sequential4.tail);
  }
  return cons(parallelCollectionToSequentialCollection(parallel4), sequential4);
};
var RequestBlockParallelTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockParallel");
var parallelVariance = {
  _R: (_) => _
};
var ParallelImpl = class {
  [RequestBlockParallelTypeId] = parallelVariance;
  constructor(map20) {
    this.map = map20;
  }
};
var parallelCollectionEmpty = () => new ParallelImpl(empty9());
var parallelCollectionMake = (dataSource, blockedRequest) => new ParallelImpl(make7([dataSource, Array.of(blockedRequest)]));
var parallelCollectionCombine = (self, that) => new ParallelImpl(reduce5(self.map, that.map, (map20, value, key2) => set2(map20, key2, match(get6(map20, key2), {
  onNone: () => value,
  onSome: (a) => [...a, ...value]
}))));
var parallelCollectionIsEmpty = (self) => isEmpty3(self.map);
var parallelCollectionKeys = (self) => Array.from(keys2(self.map));
var parallelCollectionToSequentialCollection = (self) => sequentialCollectionMake(map5(self.map, (x) => Array.of(x)));
var SequentialCollectionTypeId = /* @__PURE__ */ Symbol.for("effect/RequestBlock/RequestBlockSequential");
var sequentialVariance = {
  _R: (_) => _
};
var SequentialImpl = class {
  [SequentialCollectionTypeId] = sequentialVariance;
  constructor(map20) {
    this.map = map20;
  }
};
var sequentialCollectionMake = (map20) => new SequentialImpl(map20);
var sequentialCollectionCombine = (self, that) => new SequentialImpl(reduce5(that.map, self.map, (map20, value, key2) => set2(map20, key2, match(get6(map20, key2), {
  onNone: () => [],
  onSome: (a) => [...a, ...value]
}))));
var sequentialCollectionKeys = (self) => Array.from(keys2(self.map));
var sequentialCollectionToChunk = (self) => Array.from(self.map);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/cause.esm.js
var OP_DIE = "Die";
var OP_EMPTY = "Empty";
var OP_FAIL = "Fail";
var OP_INTERRUPT = "Interrupt";
var OP_PARALLEL = "Parallel";
var OP_SEQUENTIAL = "Sequential";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/cause.esm.js
var CauseSymbolKey = "effect/Cause";
var CauseTypeId = /* @__PURE__ */ Symbol.for(CauseSymbolKey);
var variance3 = {
  _E: (_) => _
};
var proto = {
  [CauseTypeId]: variance3,
  [symbol]() {
    return pipe(hash(CauseSymbolKey), combine(hash(flattenCause(this))));
  },
  [symbol2](that) {
    return isCause(that) && causeEquals(this, that);
  },
  pipe() {
    return pipeArguments(this, arguments);
  },
  toJSON() {
    switch (this._tag) {
      case "Empty":
        return {
          _id: "Cause",
          _tag: this._tag
        };
      case "Die":
        return {
          _id: "Cause",
          _tag: this._tag,
          defect: toJSON(this.defect)
        };
      case "Interrupt":
        return {
          _id: "Cause",
          _tag: this._tag,
          fiberId: this.fiberId.toJSON()
        };
      case "Fail":
        return {
          _id: "Cause",
          _tag: this._tag,
          failure: toJSON(this.error)
        };
      case "Sequential":
      case "Parallel":
        return {
          _id: "Cause",
          _tag: this._tag,
          errors: toJSON(prettyErrors(this))
        };
    }
  },
  toString() {
    return pretty(this);
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var empty13 = /* @__PURE__ */ (() => {
  const o = /* @__PURE__ */ Object.create(proto);
  o._tag = OP_EMPTY;
  return o;
})();
var fail = (error) => {
  const o = Object.create(proto);
  o._tag = OP_FAIL;
  o.error = error;
  return o;
};
var die = (defect) => {
  const o = Object.create(proto);
  o._tag = OP_DIE;
  o.defect = defect;
  return o;
};
var interrupt = (fiberId2) => {
  const o = Object.create(proto);
  o._tag = OP_INTERRUPT;
  o.fiberId = fiberId2;
  return o;
};
var parallel = (left3, right3) => {
  const o = Object.create(proto);
  o._tag = OP_PARALLEL;
  o.left = left3;
  o.right = right3;
  return o;
};
var sequential = (left3, right3) => {
  const o = Object.create(proto);
  o._tag = OP_SEQUENTIAL;
  o.left = left3;
  o.right = right3;
  return o;
};
var isCause = (u) => typeof u === "object" && u != null && CauseTypeId in u;
var isEmpty4 = (self) => {
  if (self._tag === OP_EMPTY) {
    return true;
  }
  return reduce8(self, true, (acc, cause2) => {
    switch (cause2._tag) {
      case OP_EMPTY: {
        return some2(acc);
      }
      case OP_DIE:
      case OP_FAIL:
      case OP_INTERRUPT: {
        return some2(false);
      }
      default: {
        return none2();
      }
    }
  });
};
var isInterrupted = (self) => isSome2(interruptOption(self));
var isInterruptedOnly = (self) => reduceWithContext(void 0, IsInterruptedOnlyCauseReducer)(self);
var failures = (self) => reverse3(reduce8(self, empty3(), (list, cause2) => cause2._tag === OP_FAIL ? some2(pipe(list, prepend2(cause2.error))) : none2()));
var defects = (self) => reverse3(reduce8(self, empty3(), (list, cause2) => cause2._tag === OP_DIE ? some2(pipe(list, prepend2(cause2.defect))) : none2()));
var interruptors = (self) => reduce8(self, empty10(), (set10, cause2) => cause2._tag === OP_INTERRUPT ? some2(pipe(set10, add4(cause2.fiberId))) : none2());
var failureOption = (self) => find(self, (cause2) => cause2._tag === OP_FAIL ? some2(cause2.error) : none2());
var failureOrCause = (self) => {
  const option2 = failureOption(self);
  switch (option2._tag) {
    case "None": {
      return right2(self);
    }
    case "Some": {
      return left2(option2.value);
    }
  }
};
var interruptOption = (self) => find(self, (cause2) => cause2._tag === OP_INTERRUPT ? some2(cause2.fiberId) : none2());
var stripFailures = (self) => match3(self, {
  onEmpty: empty13,
  onFail: () => empty13,
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId2) => interrupt(fiberId2),
  onSequential: sequential,
  onParallel: parallel
});
var electFailures = (self) => match3(self, {
  onEmpty: empty13,
  onFail: (failure2) => die(failure2),
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId2) => interrupt(fiberId2),
  onSequential: (left3, right3) => sequential(left3, right3),
  onParallel: (left3, right3) => parallel(left3, right3)
});
var map8 = /* @__PURE__ */ dual(2, (self, f) => flatMap6(self, (e) => fail(f(e))));
var flatMap6 = /* @__PURE__ */ dual(2, (self, f) => match3(self, {
  onEmpty: empty13,
  onFail: (error) => f(error),
  onDie: (defect) => die(defect),
  onInterrupt: (fiberId2) => interrupt(fiberId2),
  onSequential: (left3, right3) => sequential(left3, right3),
  onParallel: (left3, right3) => parallel(left3, right3)
}));
var causeEquals = (left3, right3) => {
  let leftStack = of2(left3);
  let rightStack = of2(right3);
  while (isNonEmpty(leftStack) && isNonEmpty(rightStack)) {
    const [leftParallel, leftSequential] = pipe(headNonEmpty2(leftStack), reduce8([empty10(), empty3()], ([parallel4, sequential4], cause2) => {
      const [par2, seq2] = evaluateCause(cause2);
      return some2([pipe(parallel4, union4(par2)), pipe(sequential4, appendAll(seq2))]);
    }));
    const [rightParallel, rightSequential] = pipe(headNonEmpty2(rightStack), reduce8([empty10(), empty3()], ([parallel4, sequential4], cause2) => {
      const [par2, seq2] = evaluateCause(cause2);
      return some2([pipe(parallel4, union4(par2)), pipe(sequential4, appendAll(seq2))]);
    }));
    if (!equals(leftParallel, rightParallel)) {
      return false;
    }
    leftStack = leftSequential;
    rightStack = rightSequential;
  }
  return true;
};
var flattenCause = (cause2) => {
  return flattenCauseLoop(of2(cause2), empty3());
};
var flattenCauseLoop = (causes, flattened) => {
  while (1) {
    const [parallel4, sequential4] = pipe(causes, reduce([empty10(), empty3()], ([parallel5, sequential5], cause2) => {
      const [par2, seq2] = evaluateCause(cause2);
      return [pipe(parallel5, union4(par2)), pipe(sequential5, appendAll(seq2))];
    }));
    const updated = size4(parallel4) > 0 ? pipe(flattened, prepend2(parallel4)) : flattened;
    if (isEmpty(sequential4)) {
      return reverse3(updated);
    }
    causes = sequential4;
    flattened = updated;
  }
  throw new Error("BUG: Cause.flattenCauseLoop - please report an issue at https://github.com/Effect-TS/io/issues");
};
var find = /* @__PURE__ */ dual(2, (self, pf) => {
  const stack = [self];
  while (stack.length > 0) {
    const item = stack.pop();
    const option2 = pf(item);
    switch (option2._tag) {
      case "None": {
        switch (item._tag) {
          case OP_SEQUENTIAL:
          case OP_PARALLEL: {
            stack.push(item.right);
            stack.push(item.left);
            break;
          }
        }
        break;
      }
      case "Some": {
        return option2;
      }
    }
  }
  return none2();
});
var evaluateCause = (self) => {
  let cause2 = self;
  const stack = [];
  let _parallel = empty10();
  let _sequential = empty3();
  while (cause2 !== void 0) {
    switch (cause2._tag) {
      case OP_EMPTY: {
        if (stack.length === 0) {
          return [_parallel, _sequential];
        }
        cause2 = stack.pop();
        break;
      }
      case OP_FAIL: {
        if (stack.length === 0) {
          return [pipe(_parallel, add4(cause2.error)), _sequential];
        }
        _parallel = pipe(_parallel, add4(cause2.error));
        cause2 = stack.pop();
        break;
      }
      case OP_DIE: {
        if (stack.length === 0) {
          return [pipe(_parallel, add4(cause2.defect)), _sequential];
        }
        _parallel = pipe(_parallel, add4(cause2.defect));
        cause2 = stack.pop();
        break;
      }
      case OP_INTERRUPT: {
        if (stack.length === 0) {
          return [pipe(_parallel, add4(cause2.fiberId)), _sequential];
        }
        _parallel = pipe(_parallel, add4(cause2.fiberId));
        cause2 = stack.pop();
        break;
      }
      case OP_SEQUENTIAL: {
        switch (cause2.left._tag) {
          case OP_EMPTY: {
            cause2 = cause2.right;
            break;
          }
          case OP_SEQUENTIAL: {
            cause2 = sequential(cause2.left.left, sequential(cause2.left.right, cause2.right));
            break;
          }
          case OP_PARALLEL: {
            cause2 = parallel(sequential(cause2.left.left, cause2.right), sequential(cause2.left.right, cause2.right));
            break;
          }
          default: {
            _sequential = pipe(_sequential, prepend2(cause2.right));
            cause2 = cause2.left;
            break;
          }
        }
        break;
      }
      case OP_PARALLEL: {
        stack.push(cause2.right);
        cause2 = cause2.left;
        break;
      }
    }
  }
  throw new Error("BUG: Cause.evaluateCauseLoop - please report an issue at https://github.com/Effect-TS/io/issues");
};
var IsInterruptedOnlyCauseReducer = {
  emptyCase: constTrue,
  failCase: constFalse,
  dieCase: constFalse,
  interruptCase: constTrue,
  sequentialCase: (_, left3, right3) => left3 && right3,
  parallelCase: (_, left3, right3) => left3 && right3
};
var OP_SEQUENTIAL_CASE = "SequentialCase";
var OP_PARALLEL_CASE = "ParallelCase";
var match3 = /* @__PURE__ */ dual(2, (self, {
  onDie,
  onEmpty,
  onFail,
  onInterrupt: onInterrupt2,
  onParallel,
  onSequential
}) => {
  return reduceWithContext(self, void 0, {
    emptyCase: () => onEmpty,
    failCase: (_, error) => onFail(error),
    dieCase: (_, defect) => onDie(defect),
    interruptCase: (_, fiberId2) => onInterrupt2(fiberId2),
    sequentialCase: (_, left3, right3) => onSequential(left3, right3),
    parallelCase: (_, left3, right3) => onParallel(left3, right3)
  });
});
var reduce8 = /* @__PURE__ */ dual(3, (self, zero2, pf) => {
  let accumulator = zero2;
  let cause2 = self;
  const causes = [];
  while (cause2 !== void 0) {
    const option2 = pf(accumulator, cause2);
    accumulator = isSome2(option2) ? option2.value : accumulator;
    switch (cause2._tag) {
      case OP_SEQUENTIAL: {
        causes.push(cause2.right);
        cause2 = cause2.left;
        break;
      }
      case OP_PARALLEL: {
        causes.push(cause2.right);
        cause2 = cause2.left;
        break;
      }
      default: {
        cause2 = void 0;
        break;
      }
    }
    if (cause2 === void 0 && causes.length > 0) {
      cause2 = causes.pop();
    }
  }
  return accumulator;
});
var reduceWithContext = /* @__PURE__ */ dual(3, (self, context6, reducer) => {
  const input = [self];
  const output = [];
  while (input.length > 0) {
    const cause2 = input.pop();
    switch (cause2._tag) {
      case OP_EMPTY: {
        output.push(right2(reducer.emptyCase(context6)));
        break;
      }
      case OP_FAIL: {
        output.push(right2(reducer.failCase(context6, cause2.error)));
        break;
      }
      case OP_DIE: {
        output.push(right2(reducer.dieCase(context6, cause2.defect)));
        break;
      }
      case OP_INTERRUPT: {
        output.push(right2(reducer.interruptCase(context6, cause2.fiberId)));
        break;
      }
      case OP_SEQUENTIAL: {
        input.push(cause2.right);
        input.push(cause2.left);
        output.push(left2({
          _tag: OP_SEQUENTIAL_CASE
        }));
        break;
      }
      case OP_PARALLEL: {
        input.push(cause2.right);
        input.push(cause2.left);
        output.push(left2({
          _tag: OP_PARALLEL_CASE
        }));
        break;
      }
    }
  }
  const accumulator = [];
  while (output.length > 0) {
    const either5 = output.pop();
    switch (either5._tag) {
      case "Left": {
        switch (either5.left._tag) {
          case OP_SEQUENTIAL_CASE: {
            const left3 = accumulator.pop();
            const right3 = accumulator.pop();
            const value = reducer.sequentialCase(context6, left3, right3);
            accumulator.push(value);
            break;
          }
          case OP_PARALLEL_CASE: {
            const left3 = accumulator.pop();
            const right3 = accumulator.pop();
            const value = reducer.parallelCase(context6, left3, right3);
            accumulator.push(value);
            break;
          }
        }
        break;
      }
      case "Right": {
        accumulator.push(either5.right);
        break;
      }
    }
  }
  if (accumulator.length === 0) {
    throw new Error("BUG: Cause.reduceWithContext - please report an issue at https://github.com/Effect-TS/io/issues");
  }
  return accumulator.pop();
});
var makeException = (proto13, tag3) => {
  const _tag = {
    value: tag3,
    enumerable: true
  };
  const protoWithToString = {
    ...proto13,
    toString() {
      return `${this._tag}: ${this.message}`;
    }
  };
  return (message) => Object.create(protoWithToString, {
    _tag,
    message: {
      value: message,
      enumerable: true
    }
  });
};
var RuntimeExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/RuntimeException");
var RuntimeException = /* @__PURE__ */ makeException({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException");
var InterruptedExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/InterruptedException");
var isInterruptedException = (u) => {
  return typeof u === "object" && u != null && InterruptedExceptionTypeId in u;
};
var NoSuchElementExceptionTypeId = /* @__PURE__ */ Symbol.for("effect/Cause/errors/NoSuchElement");
var NoSuchElementException = /* @__PURE__ */ makeException({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException");
var filterStack = (stack) => {
  const lines = stack.split("\n");
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("EffectPrimitive") || lines[i].includes("Generator.next") || lines[i].includes("FiberRuntime")) {
      return out.join("\n");
    } else {
      out.push(lines[i]);
    }
  }
  return out.join("\n");
};
var pretty = (cause2) => {
  if (isInterruptedOnly(cause2)) {
    return "All fibers interrupted without errors.";
  }
  const final = prettyErrors(cause2).map((e) => {
    let message = e.message;
    if (e.stack) {
      message += `\r
${filterStack(e.stack)}`;
    }
    if (e.span) {
      let current = e.span;
      let i = 0;
      while (current && current._tag === "Span" && i < 10) {
        message += `\r
    at ${current.name}`;
        current = getOrUndefined(current.parent);
        i++;
      }
    }
    return message;
  }).join("\r\n");
  return final;
};
var PrettyError = class {
  constructor(message, stack, span) {
    this.message = message;
    this.stack = stack;
    this.span = span;
  }
  toJSON() {
    const out = {
      message: this.message
    };
    if (this.stack) {
      out.stack = this.stack;
    }
    if (this.span) {
      out.span = this.span;
    }
    return out;
  }
};
var prettyErrorMessage = (u) => {
  if (typeof u === "string") {
    return `Error: ${u}`;
  }
  if (typeof u === "object" && u != null && "toString" in u && typeof u["toString"] === "function" && u["toString"] !== Object.prototype.toString) {
    return u["toString"]();
  }
  return `Error: ${JSON.stringify(u)}`;
};
var spanSymbol = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
var defaultRenderError = (error) => {
  const span = typeof error === "object" && error !== null && spanSymbol in error && error[spanSymbol];
  if (typeof error === "object" && error !== null && error instanceof Error) {
    return new PrettyError(prettyErrorMessage(error), error.stack?.split("\n").filter((_) => _.match(/at (.*)/)).join("\n"), span);
  }
  return new PrettyError(prettyErrorMessage(error), void 0, span);
};
var prettyErrors = (cause2) => reduceWithContext(cause2, void 0, {
  emptyCase: () => [],
  dieCase: (_, unknownError) => {
    return [defaultRenderError(unknownError)];
  },
  failCase: (_, error) => {
    return [defaultRenderError(error)];
  },
  interruptCase: () => [],
  parallelCase: (_, l, r) => [...l, ...r],
  sequentialCase: (_, l, r) => [...l, ...r]
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/deferred.esm.js
var OP_STATE_PENDING = "Pending";
var OP_STATE_DONE = "Done";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/deferred.esm.js
var DeferredSymbolKey = "effect/Deferred";
var DeferredTypeId = /* @__PURE__ */ Symbol.for(DeferredSymbolKey);
var deferredVariance = {
  _E: (_) => _,
  _A: (_) => _
};
var pending = (joiners) => {
  return {
    _tag: OP_STATE_PENDING,
    joiners
  };
};
var done = (effect3) => {
  return {
    _tag: OP_STATE_DONE,
    effect: effect3
  };
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/runtimeFlagsPatch.esm.js
var BIT_MASK = 255;
var BIT_SHIFT = 8;
var active = (patch10) => patch10 & BIT_MASK;
var enabled = (patch10) => patch10 >> BIT_SHIFT & BIT_MASK;
var make13 = (active2, enabled2) => (active2 & BIT_MASK) + ((enabled2 & active2 & BIT_MASK) << BIT_SHIFT);
var empty14 = /* @__PURE__ */ make13(0, 0);
var enable = (flag) => make13(flag, flag);
var disable = (flag) => make13(flag, 0);
var exclude = /* @__PURE__ */ dual(2, (self, flag) => make13(active(self) & ~flag, enabled(self)));
var andThen = /* @__PURE__ */ dual(2, (self, that) => self | that);
var invert = (n) => ~n >>> 0 & BIT_MASK;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/runtimeFlags.esm.js
var None2 = 0;
var Interruption = 1 << 0;
var OpSupervision = 1 << 1;
var RuntimeMetrics = 1 << 2;
var WindDown = 1 << 4;
var CooperativeYielding = 1 << 5;
var cooperativeYielding = (self) => isEnabled(self, CooperativeYielding);
var enable2 = /* @__PURE__ */ dual(2, (self, flag) => self | flag);
var interruptible = (self) => interruption(self) && !windDown(self);
var interruption = (self) => isEnabled(self, Interruption);
var isEnabled = /* @__PURE__ */ dual(2, (self, flag) => (self & flag) !== 0);
var make14 = (...flags) => flags.reduce((a, b) => a | b, 0);
var none5 = /* @__PURE__ */ make14(None2);
var runtimeMetrics = (self) => isEnabled(self, RuntimeMetrics);
var windDown = (self) => isEnabled(self, WindDown);
var diff3 = /* @__PURE__ */ dual(2, (self, that) => make13(self ^ that, that));
var patch3 = /* @__PURE__ */ dual(2, (self, patch10) => self & (invert(active(patch10)) | enabled(patch10)) | active(patch10) & enabled(patch10));
var differ = /* @__PURE__ */ make10({
  empty: empty14,
  diff: (oldValue, newValue) => diff3(oldValue, newValue),
  combine: (first2, second) => andThen(second)(first2),
  patch: (_patch, oldValue) => patch3(oldValue, _patch)
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/RuntimeFlagsPatch/dist/effect-RuntimeFlagsPatch.esm.js
var enable3 = enable;
var disable2 = disable;
var exclude2 = exclude;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/core.esm.js
var EffectErrorSymbolKey = "effect/EffectError";
var EffectErrorTypeId = /* @__PURE__ */ Symbol.for(EffectErrorSymbolKey);
var isEffectError = (u) => typeof u === "object" && u != null && EffectErrorTypeId in u;
var makeEffectError = (cause2) => ({
  [EffectErrorTypeId]: EffectErrorTypeId,
  _tag: "EffectError",
  cause: cause2
});
var blocked = (blockedRequests, _continue3) => {
  const effect3 = new EffectPrimitive("Blocked");
  effect3.i0 = blockedRequests;
  effect3.i1 = _continue3;
  return effect3;
};
var runRequestBlock = (blockedRequests) => {
  const effect3 = new EffectPrimitive("RunBlocked");
  effect3.i0 = blockedRequests;
  return effect3;
};
var EffectTypeId2 = /* @__PURE__ */ Symbol.for("effect/Effect");
var RevertFlags = class {
  _op = OP_REVERT_FLAGS;
  constructor(patch10, op) {
    this.patch = patch10;
    this.op = op;
  }
};
var EffectPrimitive = class {
  i0 = void 0;
  i1 = void 0;
  i2 = void 0;
  trace = void 0;
  [EffectTypeId2] = effectVariance2;
  constructor(_op) {
    this._op = _op;
  }
  [symbol2](that) {
    return this === that;
  }
  [symbol]() {
    return random(this);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      i0: toJSON(this.i0),
      i1: toJSON(this.i1),
      i2: toJSON(this.i2)
    };
  }
  toString() {
    return toString(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var EffectPrimitiveFailure = class {
  i0 = void 0;
  i1 = void 0;
  i2 = void 0;
  trace = void 0;
  [EffectTypeId2] = effectVariance2;
  constructor(_op) {
    this._op = _op;
    this._tag = _op;
  }
  [symbol2](that) {
    return this === that;
  }
  [symbol]() {
    return random(this);
  }
  get cause() {
    return this.i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: this.cause.toJSON()
    };
  }
  toString() {
    return toString(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var EffectPrimitiveSuccess = class {
  i0 = void 0;
  i1 = void 0;
  i2 = void 0;
  trace = void 0;
  [EffectTypeId2] = effectVariance2;
  constructor(_op) {
    this._op = _op;
    this._tag = _op;
  }
  [symbol2](that) {
    return this === that;
  }
  [symbol]() {
    return random(this);
  }
  get value() {
    return this.i0;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: toJSON(this.value)
    };
  }
  toString() {
    return toString(this.toJSON());
  }
  [NodeInspectSymbol]() {
    return this.toJSON();
  }
};
var effectVariance2 = {
  _R: (_) => _,
  _E: (_) => _,
  _A: (_) => _
};
var isEffect = (u) => typeof u === "object" && u != null && EffectTypeId2 in u;
var withFiberRuntime = (withRuntime) => {
  const effect3 = new EffectPrimitive(OP_WITH_RUNTIME);
  effect3.i0 = withRuntime;
  return effect3;
};
var acquireUseRelease = /* @__PURE__ */ dual(3, (acquire, use4, release) => uninterruptibleMask((restore) => flatMap7(acquire, (a) => flatMap7(exit(suspend(() => restore(step2(use4(a))))), (exit3) => {
  if (exit3._tag === "Success" && exit3.value._op === "Blocked") {
    const value = exit3.value;
    return blocked(value.i0, acquireUseRelease(succeed(a), () => value.i1, release));
  }
  const flat = exitFlatten(exit3);
  return suspend(() => release(a, flat)).pipe(matchCauseEffect({
    onFailure: (cause2) => {
      switch (flat._tag) {
        case OP_FAILURE: {
          return failCause(parallel(flat.i0, cause2));
        }
        case OP_SUCCESS: {
          return failCause(cause2);
        }
      }
    },
    onSuccess: () => flat
  }));
}))));
var as = /* @__PURE__ */ dual(2, (self, value) => flatMap7(self, () => succeed(value)));
var asUnit = (self) => as(self, void 0);
var async = (register, blockingOn = none4) => suspend(() => {
  let cancelerRef = void 0;
  let controllerRef = void 0;
  const effect3 = new EffectPrimitive(OP_ASYNC);
  if (register.length !== 1) {
    const controller = new AbortController();
    controllerRef = controller;
    effect3.i0 = (resume2) => {
      cancelerRef = register(resume2, controller.signal);
    };
  } else {
    effect3.i0 = (resume2) => {
      cancelerRef = register(resume2);
    };
  }
  effect3.i1 = blockingOn;
  return onInterrupt(effect3, () => {
    if (controllerRef) {
      controllerRef.abort();
    }
    return cancelerRef ?? unit;
  });
});
var asyncEither = (register, blockingOn = none4) => async((resume2) => {
  const result = register(resume2);
  if (isRight2(result)) {
    resume2(result.right);
  } else {
    return result.left;
  }
}, blockingOn);
var catchAllCause = /* @__PURE__ */ dual(2, (self, f) => {
  const effect3 = new EffectPrimitive(OP_ON_FAILURE);
  effect3.i0 = self;
  effect3.i1 = f;
  return effect3;
});
var catchAll = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
  onFailure: f,
  onSuccess: succeed
}));
var catchIf = /* @__PURE__ */ dual(3, (self, predicate, f) => catchAllCause(self, (cause2) => {
  const either5 = failureOrCause(cause2);
  switch (either5._tag) {
    case "Left": {
      return predicate(either5.left) ? f(either5.left) : failCause(cause2);
    }
    case "Right": {
      return failCause(either5.right);
    }
  }
}));
var spanSymbol2 = /* @__PURE__ */ Symbol.for("effect/SpanAnnotation");
var originalSymbol = /* @__PURE__ */ Symbol.for("effect/OriginalAnnotation");
var capture = (obj, span) => {
  if (isCons(span)) {
    const head7 = span.head;
    if (head7._tag === "Span") {
      return new Proxy(obj, {
        has(target, p) {
          return p === spanSymbol2 || p === originalSymbol || p in target;
        },
        get(target, p) {
          if (p === spanSymbol2) {
            return head7;
          }
          if (p === originalSymbol) {
            return obj;
          }
          return target[p];
        }
      });
    }
  }
  return obj;
};
var die2 = (defect) => typeof defect === "object" && defect !== null && !(spanSymbol2 in defect) ? withFiberRuntime((fiber) => failCause(die(capture(defect, fiber.getFiberRef(currentTracerSpan))))) : failCause(die(defect));
var dieMessage = (message) => failCauseSync(() => die(RuntimeException(message)));
var either2 = (self) => matchEffect(self, {
  onFailure: (e) => succeed(left2(e)),
  onSuccess: (a) => succeed(right2(a))
});
var context = () => suspend(() => fiberRefGet(currentContext));
var contextWithEffect = (f) => flatMap7(context(), f);
var exit = (self) => matchCause(self, {
  onFailure: exitFailCause,
  onSuccess: exitSucceed
});
var fail2 = (error) => typeof error === "object" && error !== null && !(spanSymbol2 in error) ? withFiberRuntime((fiber) => failCause(fail(capture(error, fiber.getFiberRef(currentTracerSpan))))) : failCause(fail(error));
var failSync = (evaluate) => flatMap7(sync(evaluate), fail2);
var failCause = (cause2) => {
  const effect3 = new EffectPrimitiveFailure(OP_FAILURE);
  effect3.i0 = cause2;
  return effect3;
};
var failCauseSync = (evaluate) => flatMap7(sync(evaluate), failCause);
var fiberId = /* @__PURE__ */ withFiberRuntime((state) => succeed(state.id()));
var fiberIdWith = (f) => withFiberRuntime((state) => f(state.id()));
var flatMap7 = /* @__PURE__ */ dual(2, (self, f) => {
  const effect3 = new EffectPrimitive(OP_ON_SUCCESS);
  effect3.i0 = self;
  effect3.i1 = f;
  return effect3;
});
var step2 = (self) => {
  const effect3 = new EffectPrimitive("OnStep");
  effect3.i0 = self;
  effect3.i1 = exitSucceed;
  return effect3;
};
var flatMapStep = (self, f) => {
  const effect3 = new EffectPrimitive("OnStep");
  effect3.i0 = self;
  effect3.i1 = f;
  return effect3;
};
var flatten4 = (self) => flatMap7(self, identity);
var matchCause = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchCauseEffect(self, {
  onFailure: (cause2) => succeed(onFailure(cause2)),
  onSuccess: (a) => succeed(onSuccess(a))
}));
var matchCauseEffect = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  const effect3 = new EffectPrimitive(OP_ON_SUCCESS_AND_FAILURE);
  effect3.i0 = self;
  effect3.i1 = onFailure;
  effect3.i2 = onSuccess;
  return effect3;
});
var matchEffect = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchCauseEffect(self, {
  onFailure: (cause2) => {
    const failures$1 = failures(cause2);
    const defects$1 = defects(cause2);
    if (defects$1.length > 0) {
      return failCause(electFailures(cause2));
    }
    if (failures$1.length > 0) {
      return onFailure(unsafeHead(failures$1));
    }
    return failCause(cause2);
  },
  onSuccess
}));
var forEachSequential = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
  const arr = fromIterable2(self);
  const ret = new Array(arr.length);
  let i = 0;
  return as(whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: (b) => {
      ret[i++] = b;
    }
  }), ret);
}));
var forEachSequentialDiscard = /* @__PURE__ */ dual(2, (self, f) => suspend(() => {
  const arr = fromIterable2(self);
  let i = 0;
  return whileLoop({
    while: () => i < arr.length,
    body: () => f(arr[i], i),
    step: () => {
      i++;
    }
  });
}));
var interrupt2 = /* @__PURE__ */ flatMap7(fiberId, (fiberId2) => interruptWith(fiberId2));
var interruptWith = (fiberId2) => failCause(interrupt(fiberId2));
var interruptible2 = (self) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.i0 = enable3(Interruption);
  const _continue3 = (orBlock) => {
    if (orBlock._tag === "Blocked") {
      return blocked(orBlock.i0, interruptible2(orBlock.i1));
    } else {
      return orBlock;
    }
  };
  effect3.i1 = () => flatMapStep(self, _continue3);
  return effect3;
};
var intoDeferred = /* @__PURE__ */ dual(2, (self, deferred) => uninterruptibleMask((restore) => flatMap7(exit(restore(self)), (exit3) => deferredDone(deferred, exit3))));
var map9 = /* @__PURE__ */ dual(2, (self, f) => flatMap7(self, (a) => sync(() => f(a))));
var mapBoth = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchEffect(self, {
  onFailure: (e) => failSync(() => onFailure(e)),
  onSuccess: (a) => sync(() => onSuccess(a))
}));
var mapError = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause2) => {
    const either5 = failureOrCause(cause2);
    switch (either5._tag) {
      case "Left": {
        return failSync(() => f(either5.left));
      }
      case "Right": {
        return failCause(either5.right);
      }
    }
  },
  onSuccess: succeed
}));
var onExit = /* @__PURE__ */ dual(2, (self, cleanup) => uninterruptibleMask((restore) => matchCauseEffect(restore(self), {
  onFailure: (cause1) => {
    const result = exitFailCause(cause1);
    return matchCauseEffect(cleanup(result), {
      onFailure: (cause2) => exitFailCause(sequential(cause1, cause2)),
      onSuccess: () => result
    });
  },
  onSuccess: (success2) => {
    const result = exitSucceed(success2);
    return zipRight(cleanup(result), result);
  }
})));
var onInterrupt = /* @__PURE__ */ dual(2, (self, cleanup) => onExit(self, exitMatch({
  onFailure: (cause2) => isInterruptedOnly(cause2) ? asUnit(cleanup(interruptors(cause2))) : unit,
  onSuccess: () => unit
})));
var orDie = (self) => orDieWith(self, identity);
var orDieWith = /* @__PURE__ */ dual(2, (self, f) => matchEffect(self, {
  onFailure: (e) => die2(f(e)),
  onSuccess: succeed
}));
var provideContext = /* @__PURE__ */ dual(2, (self, context6) => fiberRefLocally(currentContext, context6)(self));
var provideSomeContext = /* @__PURE__ */ dual(2, (self, context6) => fiberRefLocallyWith(currentContext, (parent) => merge3(parent, context6))(self));
var mapInputContext = /* @__PURE__ */ dual(2, (self, f) => contextWithEffect((context6) => provideContext(self, f(context6))));
var runtimeFlags = /* @__PURE__ */ withFiberRuntime((_, status2) => succeed(status2.runtimeFlags));
var succeed = (value) => {
  const effect3 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect3.i0 = value;
  return effect3;
};
var suspend = (effect3) => flatMap7(sync(effect3), identity);
var sync = (evaluate) => {
  const effect3 = new EffectPrimitive(OP_SYNC);
  effect3.i0 = evaluate;
  return effect3;
};
var tap = /* @__PURE__ */ dual(2, (self, f) => flatMap7(self, (a) => as(f(a), a)));
var transplant = (f) => withFiberRuntime((state) => {
  const scopeOverride = state.getFiberRef(currentForkScopeOverride);
  const scope4 = pipe(scopeOverride, getOrElse(() => state.scope()));
  return f(fiberRefLocally(currentForkScopeOverride, some2(scope4)));
});
var uninterruptible = (self) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.i0 = disable2(Interruption);
  effect3.i1 = () => flatMapStep(self, _continue3);
  const _continue3 = (orBlock) => {
    if (orBlock._tag === "Blocked") {
      return blocked(orBlock.i0, uninterruptible(orBlock.i1));
    } else {
      return orBlock;
    }
  };
  return effect3;
};
var uninterruptibleMask = (f) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.i0 = disable2(Interruption);
  const _continue3 = (step3) => {
    if (step3._op === "Blocked") {
      return blocked(step3.i0, uninterruptible(step3.i1));
    }
    return step3;
  };
  effect3.i1 = (oldFlags) => interruption(oldFlags) ? step2(f(interruptible2)) : step2(f(uninterruptible));
  return flatMap7(effect3, _continue3);
};
var unit = /* @__PURE__ */ succeed(void 0);
var updateRuntimeFlags = (patch10) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.i0 = patch10;
  effect3.i1 = void 0;
  return effect3;
};
var whenEffect = /* @__PURE__ */ dual(2, (self, predicate) => flatMap7(predicate, (b) => {
  if (b) {
    return pipe(self, map9(some2));
  }
  return succeed(none2());
}));
var whileLoop = (options3) => {
  const effect3 = new EffectPrimitive(OP_WHILE);
  effect3.i0 = options3.while;
  effect3.i1 = options3.body;
  effect3.i2 = options3.step;
  return effect3;
};
var withRuntimeFlags = /* @__PURE__ */ dual(2, (self, update6) => {
  const effect3 = new EffectPrimitive(OP_UPDATE_RUNTIME_FLAGS);
  effect3.i0 = update6;
  effect3.i1 = () => self;
  return effect3;
});
var yieldNow = (options3) => {
  const effect3 = new EffectPrimitive(OP_YIELD);
  return typeof options3?.priority !== "undefined" ? withSchedulingPriority(options3.priority)(effect3) : effect3;
};
var zip3 = /* @__PURE__ */ dual(2, (self, that) => flatMap7(self, (a) => map9(that, (b) => [a, b])));
var zipLeft = /* @__PURE__ */ dual(2, (self, that) => flatMap7(self, (a) => as(that, a)));
var zipRight = /* @__PURE__ */ dual(2, (self, that) => flatMap7(self, () => that));
var zipWith2 = /* @__PURE__ */ dual(3, (self, that, f) => flatMap7(self, (a) => map9(that, (b) => f(a, b))));
var interruptFiber = (self) => flatMap7(fiberId, (fiberId2) => pipe(self, interruptAsFiber(fiberId2)));
var interruptAsFiber = /* @__PURE__ */ dual(2, (self, fiberId2) => flatMap7(self.interruptAsFork(fiberId2), () => self.await()));
var logLevelAll = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelFatal = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 5e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelError = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 4e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelWarning = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 3e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelInfo = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 2e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelDebug = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 1e4,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelTrace = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var logLevelNone = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var FiberRefSymbolKey = "effect/FiberRef";
var FiberRefTypeId = /* @__PURE__ */ Symbol.for(FiberRefSymbolKey);
var fiberRefVariance = {
  _A: (_) => _
};
var fiberRefGet = (self) => fiberRefModify(self, (a) => [a, a]);
var fiberRefGetWith = /* @__PURE__ */ dual(2, (self, f) => flatMap7(fiberRefGet(self), f));
var fiberRefSet = /* @__PURE__ */ dual(2, (self, value) => fiberRefModify(self, () => [void 0, value]));
var fiberRefModify = /* @__PURE__ */ dual(2, (self, f) => withFiberRuntime((state) => {
  const [b, a] = f(state.getFiberRef(self));
  state.setFiberRef(self, a);
  return succeed(b);
}));
var fiberRefLocally = /* @__PURE__ */ dual(3, (use4, self, value) => flatMap7(acquireUseRelease(zipLeft(fiberRefGet(self), fiberRefSet(self, value)), () => step2(use4), (oldValue) => fiberRefSet(self, oldValue)), (res) => {
  if (res._op === "Blocked") {
    return blocked(res.i0, fiberRefLocally(res.i1, self, value));
  }
  return res;
}));
var fiberRefLocallyWith = /* @__PURE__ */ dual(3, (use4, self, f) => fiberRefGetWith(self, (a) => fiberRefLocally(use4, self, f(a))));
var fiberRefUnsafeMake = (initial, options3) => fiberRefUnsafeMakePatch(initial, {
  differ: update2(),
  fork: options3?.fork ?? identity,
  join: options3?.join
});
var fiberRefUnsafeMakeHashSet = (initial) => {
  const differ3 = hashSet2();
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ3,
    fork: differ3.empty
  });
};
var fiberRefUnsafeMakeContext = (initial) => {
  const differ3 = environment2();
  return fiberRefUnsafeMakePatch(initial, {
    differ: differ3,
    fork: differ3.empty
  });
};
var fiberRefUnsafeMakePatch = (initial, options3) => ({
  [FiberRefTypeId]: fiberRefVariance,
  initial,
  diff: (oldValue, newValue) => options3.differ.diff(oldValue, newValue),
  combine: (first2, second) => options3.differ.combine(first2, second),
  patch: (patch10) => (oldValue) => options3.differ.patch(patch10, oldValue),
  fork: options3.fork,
  join: options3.join ?? ((_, n) => n),
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var fiberRefUnsafeMakeRuntimeFlags = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ,
  fork: differ.empty
});
var currentContext = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentContext"), () => fiberRefUnsafeMakeContext(empty5()));
var currentSchedulingPriority = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentSchedulingPriority"), () => fiberRefUnsafeMake(0));
var currentMaxOpsBeforeYield = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"), () => fiberRefUnsafeMake(2048));
var currentLogAnnotations = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogAnnotation"), () => fiberRefUnsafeMake(empty9()));
var currentLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogLevel"), () => fiberRefUnsafeMake(logLevelInfo));
var currentLogSpan = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentLogSpan"), () => fiberRefUnsafeMake(empty12()));
var withSchedulingPriority = /* @__PURE__ */ dual(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler));
var currentConcurrency = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentConcurrency"), () => fiberRefUnsafeMake("unbounded"));
var currentRequestBatching = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestBatching"), () => fiberRefUnsafeMake(true));
var currentUnhandledErrorLogLevel = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"), () => fiberRefUnsafeMake(some2(logLevelDebug)));
var currentMetricLabels = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentMetricLabels"), () => fiberRefUnsafeMakeHashSet(empty10()));
var currentForkScopeOverride = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentForkScopeOverride"), () => fiberRefUnsafeMake(none2(), {
  fork: () => none2(),
  join: (parent, _) => parent
}));
var currentInterruptedCause = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentInterruptedCause"), () => fiberRefUnsafeMake(empty13, {
  fork: () => empty13,
  join: (parent, _) => parent
}));
var currentTracerSpan = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentTracerSpan"), () => fiberRefUnsafeMake(empty12()));
var ScopeTypeId = /* @__PURE__ */ Symbol.for("effect/Scope");
var CloseableScopeTypeId = /* @__PURE__ */ Symbol.for("effect/CloseableScope");
var scopeAddFinalizerExit = (self, finalizer2) => self.addFinalizer(finalizer2);
var scopeClose = (self, exit3) => self.close(exit3);
var scopeFork = (self, strategy) => self.fork(strategy);
var releaseMapAdd = /* @__PURE__ */ dual(2, (self, finalizer2) => map9(releaseMapAddIfOpen(self, finalizer2), match({
  onNone: () => () => unit,
  onSome: (key2) => (exit3) => releaseMapRelease(key2, exit3)(self)
})));
var releaseMapRelease = /* @__PURE__ */ dual(3, (self, key2, exit3) => suspend(() => {
  switch (self.state._tag) {
    case "Exited": {
      return unit;
    }
    case "Running": {
      const finalizer2 = self.state.finalizers.get(key2);
      self.state.finalizers.delete(key2);
      if (finalizer2 != null) {
        return self.state.update(finalizer2)(exit3);
      }
      return unit;
    }
  }
}));
var releaseMapAddIfOpen = /* @__PURE__ */ dual(2, (self, finalizer2) => suspend(() => {
  switch (self.state._tag) {
    case "Exited": {
      self.state.nextKey += 1;
      return as(finalizer2(self.state.exit), none2());
    }
    case "Running": {
      const key2 = self.state.nextKey;
      self.state.finalizers.set(key2, finalizer2);
      self.state.nextKey += 1;
      return succeed(some2(key2));
    }
  }
}));
var releaseMapMake = /* @__PURE__ */ sync(() => ({
  state: {
    _tag: "Running",
    nextKey: 0,
    finalizers: /* @__PURE__ */ new Map(),
    update: identity
  }
}));
var exitIsFailure = (self) => self._tag === "Failure";
var exitAs = /* @__PURE__ */ dual(2, (self, value) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return exitFailCause(self.i0);
    }
    case OP_SUCCESS: {
      return exitSucceed(value);
    }
  }
});
var exitAsUnit = (self) => exitAs(self, void 0);
var exitCollectAll = (exits, options3) => exitCollectAllInternal(exits, options3?.parallel ? parallel : sequential);
var exitDie = (defect) => exitFailCause(die(defect));
var exitFail = (error) => exitFailCause(fail(error));
var exitFailCause = (cause2) => {
  const effect3 = new EffectPrimitiveFailure(OP_FAILURE);
  effect3.i0 = cause2;
  return effect3;
};
var exitFlatMap = /* @__PURE__ */ dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return exitFailCause(self.i0);
    }
    case OP_SUCCESS: {
      return f(self.i0);
    }
  }
});
var exitFlatten = (self) => pipe(self, exitFlatMap(identity));
var exitInterrupt = (fiberId2) => exitFailCause(interrupt(fiberId2));
var exitMap = /* @__PURE__ */ dual(2, (self, f) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return exitFailCause(self.i0);
    }
    case OP_SUCCESS: {
      return exitSucceed(f(self.i0));
    }
  }
});
var exitMatch = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return onFailure(self.i0);
    }
    case OP_SUCCESS: {
      return onSuccess(self.i0);
    }
  }
});
var exitMatchEffect = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE: {
      return onFailure(self.i0);
    }
    case OP_SUCCESS: {
      return onSuccess(self.i0);
    }
  }
});
var exitSucceed = (value) => {
  const effect3 = new EffectPrimitiveSuccess(OP_SUCCESS);
  effect3.i0 = value;
  return effect3;
};
var exitUnit = /* @__PURE__ */ exitSucceed(void 0);
var exitZip = /* @__PURE__ */ dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (a, a2) => [a, a2],
  onFailure: sequential
}));
var exitZipRight = /* @__PURE__ */ dual(2, (self, that) => exitZipWith(self, that, {
  onSuccess: (_, a2) => a2,
  onFailure: sequential
}));
var exitZipWith = /* @__PURE__ */ dual(3, (self, that, {
  onFailure,
  onSuccess
}) => {
  switch (self._tag) {
    case OP_FAILURE: {
      switch (that._tag) {
        case OP_SUCCESS: {
          return exitFailCause(self.i0);
        }
        case OP_FAILURE: {
          return exitFailCause(onFailure(self.i0, that.i0));
        }
      }
    }
    case OP_SUCCESS: {
      switch (that._tag) {
        case OP_SUCCESS: {
          return exitSucceed(onSuccess(self.i0, that.i0));
        }
        case OP_FAILURE: {
          return exitFailCause(that.i0);
        }
      }
    }
  }
});
var exitCollectAllInternal = (exits, combineCauses) => {
  const list = fromIterable3(exits);
  if (!isNonEmpty(list)) {
    return none2();
  }
  return pipe(tailNonEmpty2(list), reduce(pipe(headNonEmpty2(list), exitMap(of2)), (accumulator, current) => pipe(accumulator, exitZipWith(current, {
    onSuccess: (list2, value) => pipe(list2, prepend2(value)),
    onFailure: combineCauses
  }))), exitMap(reverse3), exitMap((chunk2) => Array.from(chunk2)), some2);
};
var deferredUnsafeMake = (fiberId2) => ({
  [DeferredTypeId]: deferredVariance,
  state: make11(pending([])),
  blockingOn: fiberId2,
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var deferredMake = () => flatMap7(fiberId, (id2) => deferredMakeAs(id2));
var deferredMakeAs = (fiberId2) => sync(() => deferredUnsafeMake(fiberId2));
var deferredAwait = (self) => asyncEither((k) => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return right2(state.effect);
    }
    case OP_STATE_PENDING: {
      pipe(self.state, set3(pending([k, ...state.joiners])));
      return left2(deferredInterruptJoiner(self, k));
    }
  }
}, self.blockingOn);
var deferredCompleteWith = /* @__PURE__ */ dual(2, (self, effect3) => sync(() => {
  const state = get7(self.state);
  switch (state._tag) {
    case OP_STATE_DONE: {
      return false;
    }
    case OP_STATE_PENDING: {
      pipe(self.state, set3(done(effect3)));
      for (let i = 0; i < state.joiners.length; i++) {
        state.joiners[i](effect3);
      }
      return true;
    }
  }
}));
var deferredDone = /* @__PURE__ */ dual(2, (self, exit3) => deferredCompleteWith(self, exit3));
var deferredFail = /* @__PURE__ */ dual(2, (self, error) => deferredCompleteWith(self, fail2(error)));
var deferredFailCause = /* @__PURE__ */ dual(2, (self, cause2) => deferredCompleteWith(self, failCause(cause2)));
var deferredInterruptWith = /* @__PURE__ */ dual(2, (self, fiberId2) => deferredCompleteWith(self, interruptWith(fiberId2)));
var deferredIsDone = (self) => sync(() => get7(self.state)._tag === OP_STATE_DONE);
var deferredSucceed = /* @__PURE__ */ dual(2, (self, value) => deferredCompleteWith(self, succeed(value)));
var deferredUnsafeDone = (self, effect3) => {
  const state = get7(self.state);
  if (state._tag === OP_STATE_PENDING) {
    pipe(self.state, set3(done(effect3)));
    for (let i = state.joiners.length - 1; i >= 0; i--) {
      state.joiners[i](effect3);
    }
  }
};
var deferredInterruptJoiner = (self, joiner) => sync(() => {
  const state = get7(self.state);
  if (state._tag === OP_STATE_PENDING) {
    pipe(self.state, set3(pending(state.joiners.filter((j) => j !== joiner))));
  }
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Duration/dist/effect-Duration.esm.js
var TypeId7 = /* @__PURE__ */ Symbol.for("effect/Duration");
var bigint1e3 = /* @__PURE__ */ BigInt(1e3);
var bigint1e9 = /* @__PURE__ */ BigInt(1e9);
var DURATION_REGEX = /^(-?\d+(?:\.\d+)?)\s+(nanos|micros|millis|seconds|minutes|hours|days|weeks)$/;
var decode = (input) => {
  if (isDuration(input)) {
    return input;
  } else if (isNumber(input)) {
    return millis(input);
  } else if (isBigInt(input)) {
    return nanos(input);
  } else {
    DURATION_REGEX.lastIndex = 0;
    const match12 = DURATION_REGEX.exec(input);
    if (match12) {
      const [_, valueStr, unit7] = match12;
      const value = Number(valueStr);
      switch (unit7) {
        case "nanos":
          return nanos(BigInt(valueStr));
        case "micros":
          return micros(BigInt(valueStr));
        case "millis":
          return millis(value);
        case "seconds":
          return seconds(value);
        case "minutes":
          return minutes(value);
        case "hours":
          return hours(value);
        case "days":
          return days(value);
        case "weeks":
          return weeks(value);
      }
    }
  }
  throw new Error("Invalid duration input");
};
var zeroValue = {
  _tag: "Millis",
  millis: 0
};
var infinityValue = {
  _tag: "Infinity"
};
var DurationProto = {
  [TypeId7]: TypeId7,
  [symbol]() {
    return structure(this.value);
  },
  [symbol2](that) {
    return isDuration(that) && equals2(this, that);
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    switch (this.value._tag) {
      case "Millis":
        return {
          _id: "Duration",
          _tag: "Millis",
          millis: this.value.millis
        };
      case "Nanos":
        return {
          _id: "Duration",
          _tag: "Nanos",
          hrtime: toHrTime(this)
        };
      case "Infinity":
        return {
          _id: "Duration",
          _tag: "Infinity"
        };
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make16 = (input) => {
  const duration = Object.create(DurationProto);
  if (isNumber(input)) {
    if (isNaN(input) || input < 0) {
      duration.value = zeroValue;
    } else if (!Number.isFinite(input)) {
      duration.value = infinityValue;
    } else if (!Number.isInteger(input)) {
      duration.value = {
        _tag: "Nanos",
        nanos: BigInt(Math.round(input * 1e6))
      };
    } else {
      duration.value = {
        _tag: "Millis",
        millis: input
      };
    }
  } else if (input < BigInt(0)) {
    duration.value = zeroValue;
  } else {
    duration.value = {
      _tag: "Nanos",
      nanos: input
    };
  }
  return duration;
};
var isDuration = (u) => typeof u === "object" && u !== null && TypeId7 in u;
var zero = /* @__PURE__ */ make16(0);
var nanos = (nanos2) => make16(nanos2);
var micros = (micros2) => make16(micros2 * bigint1e3);
var millis = (millis2) => make16(millis2);
var seconds = (seconds2) => make16(seconds2 * 1e3);
var minutes = (minutes2) => make16(minutes2 * 6e4);
var hours = (hours2) => make16(hours2 * 36e5);
var days = (days2) => make16(days2 * 864e5);
var weeks = (weeks2) => make16(weeks2 * 6048e5);
var toMillis = (self) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return Infinity;
    case "Nanos":
      return Number(_self.value.nanos) / 1e6;
    case "Millis":
      return _self.value.millis;
  }
};
var toHrTime = (self) => {
  const _self = decode(self);
  switch (_self.value._tag) {
    case "Infinity":
      return [Infinity, 0];
    case "Nanos":
      return [Number(_self.value.nanos / bigint1e9), Number(_self.value.nanos % bigint1e9)];
    case "Millis":
      return [Math.floor(_self.value.millis / 1e3), Math.round(_self.value.millis % 1e3 * 1e6)];
  }
};
var matchWith = /* @__PURE__ */ dual(3, (self, that, options3) => {
  const _self = decode(self);
  const _that = decode(that);
  if (_self.value._tag === "Infinity" || _that.value._tag === "Infinity") {
    return options3.onMillis(toMillis(_self), toMillis(_that));
  } else if (_self.value._tag === "Nanos" || _that.value._tag === "Nanos") {
    const selfNanos = _self.value._tag === "Nanos" ? _self.value.nanos : BigInt(Math.round(_self.value.millis * 1e6));
    const thatNanos = _that.value._tag === "Nanos" ? _that.value.nanos : BigInt(Math.round(_that.value.millis * 1e6));
    return options3.onNanos(selfNanos, thatNanos);
  }
  return options3.onMillis(_self.value.millis, _that.value.millis);
});
var Equivalence = (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 === that2,
  onNanos: (self2, that2) => self2 === that2
});
var greaterThanOrEqualTo2 = /* @__PURE__ */ dual(2, (self, that) => matchWith(self, that, {
  onMillis: (self2, that2) => self2 >= that2,
  onNanos: (self2, that2) => self2 >= that2
}));
var equals2 = /* @__PURE__ */ dual(2, (self, that) => Equivalence(decode(self), decode(that)));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/timeout.esm.js
var isBun = typeof process === "undefined" ? false : !!process?.isBun;
var clear = isBun ? (id2) => clearInterval(id2) : (id2) => clearTimeout(id2);
var set4 = isBun ? (fn, ms) => {
  const id2 = setInterval(() => {
    fn();
    clearInterval(id2);
  }, ms);
  return id2;
} : (fn, ms) => setTimeout(fn, ms);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/clock.esm.js
var ClockSymbolKey = "effect/Clock";
var ClockTypeId = /* @__PURE__ */ Symbol.for(ClockSymbolKey);
var clockTag = /* @__PURE__ */ Tag(ClockTypeId);
var MAX_TIMER_MILLIS = 2 ** 31 - 1;
var globalClockScheduler = {
  unsafeSchedule(task, duration) {
    const millis2 = toMillis(duration);
    if (millis2 > MAX_TIMER_MILLIS) {
      return constFalse;
    }
    let completed = false;
    const handle = set4(() => {
      completed = true;
      task();
    }, millis2);
    return () => {
      clear(handle);
      return !completed;
    };
  }
};
var performanceNowNanos = /* @__PURE__ */ function() {
  const bigint1e6 = /* @__PURE__ */ BigInt(1e6);
  if (typeof performance === "undefined") {
    return () => BigInt(Date.now()) * bigint1e6;
  }
  const origin = "timeOrigin" in performance && typeof performance.timeOrigin === "number" ? /* @__PURE__ */ BigInt(/* @__PURE__ */ Math.round(performance.timeOrigin * 1e6)) : /* @__PURE__ */ BigInt(/* @__PURE__ */ Date.now()) * bigint1e6;
  return () => origin + BigInt(Math.round(performance.now() * 1e6));
}();
var processOrPerformanceNow = /* @__PURE__ */ function() {
  const processHrtime = typeof process === "object" && "hrtime" in process && typeof process.hrtime.bigint === "function" ? process.hrtime : void 0;
  if (!processHrtime) {
    return performanceNowNanos;
  }
  const origin = /* @__PURE__ */ performanceNowNanos() - /* @__PURE__ */ processHrtime.bigint();
  return () => origin + processHrtime.bigint();
}();
var ClockImpl = class {
  [ClockTypeId] = ClockTypeId;
  unsafeCurrentTimeMillis() {
    return Date.now();
  }
  unsafeCurrentTimeNanos() {
    return processOrPerformanceNow();
  }
  currentTimeMillis = sync(() => this.unsafeCurrentTimeMillis());
  currentTimeNanos = sync(() => this.unsafeCurrentTimeNanos());
  scheduler() {
    return succeed(globalClockScheduler);
  }
  sleep(duration) {
    return asyncEither((cb) => {
      const canceler = globalClockScheduler.unsafeSchedule(() => cb(unit), duration);
      return left2(asUnit(sync(canceler)));
    });
  }
};
var make17 = () => new ClockImpl();

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/configError.esm.js
var OP_AND = "And";
var OP_OR = "Or";
var OP_INVALID_DATA = "InvalidData";
var OP_MISSING_DATA = "MissingData";
var OP_SOURCE_UNAVAILABLE = "SourceUnavailable";
var OP_UNSUPPORTED = "Unsupported";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/configError.esm.js
var ConfigErrorSymbolKey = "effect/ConfigError";
var ConfigErrorTypeId = /* @__PURE__ */ Symbol.for(ConfigErrorSymbolKey);
var proto2 = {
  [ConfigErrorTypeId]: ConfigErrorTypeId
};
var And = (self, that) => {
  const error = Object.create(proto2);
  error._tag = OP_AND;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} and ${this.right}`;
    }
  });
  return error;
};
var Or = (self, that) => {
  const error = Object.create(proto2);
  error._tag = OP_OR;
  error.left = self;
  error.right = that;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      return `${this.left} or ${this.right}`;
    }
  });
  return error;
};
var InvalidData = (path, message, options3 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._tag = OP_INVALID_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options3.pathDelim));
      return `(Invalid data at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var MissingData = (path, message, options3 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._tag = OP_MISSING_DATA;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options3.pathDelim));
      return `(Missing data at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var SourceUnavailable = (path, message, cause2, options3 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._tag = OP_SOURCE_UNAVAILABLE;
  error.path = path;
  error.message = message;
  error.cause = cause2;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options3.pathDelim));
      return `(Source unavailable at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var Unsupported = (path, message, options3 = {
  pathDelim: "."
}) => {
  const error = Object.create(proto2);
  error._tag = OP_UNSUPPORTED;
  error.path = path;
  error.message = message;
  Object.defineProperty(error, "toString", {
    enumerable: false,
    value() {
      const path2 = pipe(this.path, join(options3.pathDelim));
      return `(Unsupported operation at ${path2}: "${this.message}")`;
    }
  });
  return error;
};
var prefixed = /* @__PURE__ */ dual(2, (self, prefix) => {
  switch (self._tag) {
    case OP_AND: {
      return And(prefixed(prefix)(self.left), prefixed(prefix)(self.right));
    }
    case OP_OR: {
      return Or(prefixed(prefix)(self.left), prefixed(prefix)(self.right));
    }
    case OP_INVALID_DATA: {
      return InvalidData([...prefix, ...self.path], self.message);
    }
    case OP_MISSING_DATA: {
      return MissingData([...prefix, ...self.path], self.message);
    }
    case OP_SOURCE_UNAVAILABLE: {
      return SourceUnavailable([...prefix, ...self.path], self.message, self.cause);
    }
    case OP_UNSUPPORTED: {
      return Unsupported([...prefix, ...self.path], self.message);
    }
  }
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/config.esm.js
var OP_CONSTANT = "Constant";
var OP_FAIL2 = "Fail";
var OP_FALLBACK = "Fallback";
var OP_DESCRIBED = "Described";
var OP_LAZY = "Lazy";
var OP_MAP_OR_FAIL = "MapOrFail";
var OP_NESTED = "Nested";
var OP_PRIMITIVE = "Primitive";
var OP_SEQUENCE = "Sequence";
var OP_HASHMAP = "HashMap";
var OP_ZIP_WITH = "ZipWith";
var missingError = (name) => {
  return (self) => {
    return MissingData([], `Expected ${self.description} with name ${name}`);
  };
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/configProvider/pathPatch.esm.js
var empty15 = {
  _tag: "Empty"
};
var patch4 = /* @__PURE__ */ dual(2, (path, patch10) => {
  let input = of3(patch10);
  let output = path;
  while (isCons(input)) {
    const patch11 = input.head;
    switch (patch11._tag) {
      case "Empty": {
        input = input.tail;
        break;
      }
      case "AndThen": {
        input = cons(patch11.first, cons(patch11.second, input.tail));
        break;
      }
      case "MapName": {
        output = map2(output, patch11.f);
        input = input.tail;
        break;
      }
      case "Nested": {
        output = prepend(output, patch11.name);
        input = input.tail;
        break;
      }
      case "Unnested": {
        const containsName = pipe(head(output), contains(patch11.name));
        if (containsName) {
          output = tailNonEmpty(output);
          input = input.tail;
        } else {
          return left2(MissingData(output, `Expected ${patch11.name} to be in path in ConfigProvider#unnested`));
        }
        break;
      }
    }
  }
  return right2(output);
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/configProvider.esm.js
var concat = (l, r) => [...l, ...r];
var ConfigProviderSymbolKey = "effect/ConfigProvider";
var ConfigProviderTypeId = /* @__PURE__ */ Symbol.for(ConfigProviderSymbolKey);
var configProviderTag = /* @__PURE__ */ Tag(ConfigProviderTypeId);
var FlatConfigProviderSymbolKey = "effect/ConfigProviderFlat";
var FlatConfigProviderTypeId = /* @__PURE__ */ Symbol.for(FlatConfigProviderSymbolKey);
var make19 = (options3) => ({
  [ConfigProviderTypeId]: ConfigProviderTypeId,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options3
});
var makeFlat = (options3) => ({
  [FlatConfigProviderTypeId]: FlatConfigProviderTypeId,
  patch: options3.patch,
  load: (path, config, split3 = true) => options3.load(path, config, split3),
  enumerateChildren: options3.enumerateChildren
});
var fromFlat = (flat) => make19({
  load: (config) => flatMap7(fromFlatLoop(flat, empty2(), config, false), (chunk2) => match(head(chunk2), {
    onNone: () => fail2(MissingData(empty2(), `Expected a single value having structure: ${config}`)),
    onSome: succeed
  })),
  flattened: flat
});
var fromEnv = (config = {}) => {
  const {
    pathDelim,
    seqDelim
  } = Object.assign({}, {
    pathDelim: "_",
    seqDelim: ","
  }, config);
  const makePathString = (path) => pipe(path, join(pathDelim));
  const unmakePathString = (pathString) => pathString.split(pathDelim);
  const getEnv = () => typeof process !== "undefined" && "env" in process && typeof process.env === "object" ? process.env : {};
  const load = (path, primitive, split3 = true) => {
    const pathString = makePathString(path);
    const current = getEnv();
    const valueOpt = pathString in current ? some2(current[pathString]) : none2();
    return pipe(valueOpt, mapError(() => MissingData(path, `Expected ${pathString} to exist in the process context`)), flatMap7((value) => parsePrimitive(value, path, primitive, seqDelim, split3)));
  };
  const enumerateChildren = (path) => sync(() => {
    const current = getEnv();
    const keys5 = Object.keys(current);
    const keyPaths = Array.from(keys5).map((value) => unmakePathString(value.toUpperCase()));
    const filteredKeyPaths = keyPaths.filter((keyPath) => {
      for (let i = 0; i < path.length; i++) {
        const pathComponent = pipe(path, unsafeGet(i));
        const currentElement = keyPath[i];
        if (currentElement === void 0 || pathComponent !== currentElement) {
          return false;
        }
      }
      return true;
    }).flatMap((keyPath) => keyPath.slice(path.length, path.length + 1));
    return fromIterable7(filteredKeyPaths);
  });
  return fromFlat(makeFlat({
    load,
    enumerateChildren,
    patch: empty15
  }));
};
var extend = (leftDef, rightDef, left3, right3) => {
  const leftPad = unfold(left3.length, (index2) => index2 >= right3.length ? none2() : some2([leftDef(index2), index2 + 1]));
  const rightPad = unfold(right3.length, (index2) => index2 >= left3.length ? none2() : some2([rightDef(index2), index2 + 1]));
  const leftExtension = concat(left3, leftPad);
  const rightExtension = concat(right3, rightPad);
  return [leftExtension, rightExtension];
};
var fromFlatLoop = (flat, prefix, config, split3) => {
  const op = config;
  switch (op._tag) {
    case OP_CONSTANT: {
      return succeed(of(op.value));
    }
    case OP_DESCRIBED: {
      return suspend(() => fromFlatLoop(flat, prefix, op.config, split3));
    }
    case OP_FAIL2: {
      return fail2(MissingData(prefix, op.message));
    }
    case OP_FALLBACK: {
      return pipe(suspend(() => fromFlatLoop(flat, prefix, op.first, split3)), catchAll((error1) => {
        if (op.condition(error1)) {
          return pipe(fromFlatLoop(flat, prefix, op.second, split3), catchAll((error2) => fail2(Or(error1, error2))));
        }
        return fail2(error1);
      }));
    }
    case OP_LAZY: {
      return suspend(() => fromFlatLoop(flat, prefix, op.config(), split3));
    }
    case OP_MAP_OR_FAIL: {
      return suspend(() => pipe(fromFlatLoop(flat, prefix, op.original, split3), flatMap7(forEachSequential((a) => pipe(op.mapOrFail(a), mapError(prefixed(prefix)))))));
    }
    case OP_NESTED: {
      return suspend(() => fromFlatLoop(flat, concat(prefix, of(op.name)), op.config, split3));
    }
    case OP_PRIMITIVE: {
      return pipe(patch4(prefix, flat.patch), flatMap7((prefix2) => pipe(flat.load(prefix2, op, split3), flatMap7((values3) => {
        if (values3.length === 0) {
          const name = pipe(last(prefix2), getOrElse(() => "<n/a>"));
          return fail2(missingError(name));
        }
        return succeed(values3);
      }))));
    }
    case OP_SEQUENCE: {
      return pipe(patch4(prefix, flat.patch), flatMap7((patchedPrefix) => pipe(flat.enumerateChildren(patchedPrefix), flatMap7(indicesFrom), flatMap7((indices) => {
        if (indices.length === 0) {
          return suspend(() => map9(fromFlatLoop(flat, patchedPrefix, op.config, true), of));
        }
        return pipe(forEachSequential(indices, (index2) => fromFlatLoop(flat, append(prefix, `[${index2}]`), op.config, true)), map9((chunkChunk) => {
          const flattened = flatten2(chunkChunk);
          if (flattened.length === 0) {
            return of(empty2());
          }
          return of(flattened);
        }));
      }))));
    }
    case OP_HASHMAP: {
      return suspend(() => pipe(patch4(prefix, flat.patch), flatMap7((prefix2) => pipe(flat.enumerateChildren(prefix2), flatMap7((keys5) => {
        return pipe(keys5, forEachSequential((key2) => fromFlatLoop(flat, concat(prefix2, of(key2)), op.valueConfig, split3)), map9((values3) => {
          if (values3.length === 0) {
            return of(empty9());
          }
          const matrix = values3.map((x) => Array.from(x));
          return pipe(transpose(matrix), map2((values4) => fromIterable6(zip(fromIterable2(keys5), values4))));
        }));
      })))));
    }
    case OP_ZIP_WITH: {
      return suspend(() => pipe(fromFlatLoop(flat, prefix, op.left, split3), either2, flatMap7((left3) => pipe(fromFlatLoop(flat, prefix, op.right, split3), either2, flatMap7((right$1) => {
        if (isLeft2(left3) && isLeft2(right$1)) {
          return fail2(And(left3.left, right$1.left));
        }
        if (isLeft2(left3) && isRight2(right$1)) {
          return fail2(left3.left);
        }
        if (isRight2(left3) && isLeft2(right$1)) {
          return fail2(right$1.left);
        }
        if (isRight2(left3) && isRight2(right$1)) {
          const path = pipe(prefix, join("."));
          const fail13 = fromFlatLoopFail(prefix, path);
          const [lefts, rights] = extend(fail13, fail13, pipe(left3.right, map2(right2)), pipe(right$1.right, map2(right2)));
          return pipe(lefts, zip(rights), forEachSequential(([left4, right3]) => pipe(zip3(left4, right3), map9(([left5, right4]) => op.zip(left5, right4)))));
        }
        throw new Error("BUG: ConfigProvider.fromFlatLoop - please report an issue at https://github.com/Effect-TS/io/issues");
      })))));
    }
  }
};
var fromFlatLoopFail = (prefix, path) => (index2) => left2(MissingData(prefix, `The element at index ${index2} in a sequence at path "${path}" was missing`));
var splitPathString = (text2, delim) => {
  const split3 = text2.split(new RegExp(`\\s*${escapeRegex(delim)}\\s*`));
  return split3;
};
var parsePrimitive = (text2, path, primitive, delimiter, split3) => {
  if (!split3) {
    return pipe(primitive.parse(text2), map9(of), mapError(prefixed(path)));
  }
  return pipe(splitPathString(text2, delimiter), forEachSequential((char) => primitive.parse(char.trim())), mapError(prefixed(path)));
};
var transpose = (array6) => {
  return Object.keys(array6[0]).map((column) => array6.map((row) => row[column]));
};
var escapeRegex = (string5) => {
  return string5.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
};
var indicesFrom = (quotedIndices) => pipe(forEachSequential(quotedIndices, parseQuotedIndex), mapBoth({
  onFailure: () => empty2(),
  onSuccess: sort(Order)
}), either2, map9(merge));
var QUOTED_INDEX_REGEX = /^(\[(\d+)\])$/;
var parseQuotedIndex = (str) => {
  const match12 = str.match(QUOTED_INDEX_REGEX);
  if (match12 !== null) {
    const matchedIndex = match12[2];
    return pipe(matchedIndex !== void 0 && matchedIndex.length > 0 ? some2(matchedIndex) : none2(), flatMap(parseInteger));
  }
  return none2();
};
var parseInteger = (str) => {
  const parsedIndex = Number.parseInt(str);
  return Number.isNaN(parsedIndex) ? none2() : some2(parsedIndex);
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/defaultServices/console.esm.js
var TypeId8 = /* @__PURE__ */ Symbol.for("effect/Console");
var consoleTag = /* @__PURE__ */ Tag(TypeId8);
var defaultConsole = {
  [TypeId8]: TypeId8,
  assert(condition, ...args) {
    return sync(() => {
      console.assert(condition, ...args);
    });
  },
  clear: /* @__PURE__ */ sync(() => {
    console.clear();
  }),
  count(label) {
    return sync(() => {
      console.count(label);
    });
  },
  countReset(label) {
    return sync(() => {
      console.countReset(label);
    });
  },
  debug(...args) {
    return sync(() => {
      console.debug(...args);
    });
  },
  dir(item, options3) {
    return sync(() => {
      console.dir(item, options3);
    });
  },
  dirxml(...args) {
    return sync(() => {
      console.dirxml(...args);
    });
  },
  error(...args) {
    return sync(() => {
      console.error(...args);
    });
  },
  group(options3) {
    return options3?.collapsed ? sync(() => console.groupCollapsed(options3?.label)) : sync(() => console.group(options3?.label));
  },
  groupEnd: /* @__PURE__ */ sync(() => {
    console.groupEnd();
  }),
  info(...args) {
    return sync(() => {
      console.info(...args);
    });
  },
  log(...args) {
    return sync(() => {
      console.log(...args);
    });
  },
  table(tabularData, properties) {
    return sync(() => {
      console.table(tabularData, properties);
    });
  },
  time(label) {
    return sync(() => console.time(label));
  },
  timeEnd(label) {
    return sync(() => console.timeEnd(label));
  },
  timeLog(label, ...args) {
    return sync(() => {
      console.timeLog(label, ...args);
    });
  },
  trace(...args) {
    return sync(() => {
      console.trace(...args);
    });
  },
  warn(...args) {
    return sync(() => {
      console.warn(...args);
    });
  },
  unsafe: console
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/random.esm.js
var RandomSymbolKey = "effect/Random";
var RandomTypeId = /* @__PURE__ */ Symbol.for(RandomSymbolKey);
var randomTag = /* @__PURE__ */ Tag(RandomTypeId);
var RandomImpl = class {
  [RandomTypeId] = RandomTypeId;
  constructor(seed) {
    this.seed = seed;
    this.PRNG = new PCGRandom(seed);
  }
  next() {
    return sync(() => this.PRNG.number());
  }
  nextBoolean() {
    return map9(this.next(), (n) => n > 0.5);
  }
  nextInt() {
    return sync(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(min3, max5) {
    return map9(this.next(), (n) => (max5 - min3) * n + min3);
  }
  nextIntBetween(min3, max5) {
    return sync(() => this.PRNG.integer(max5 - min3) + min3);
  }
  shuffle(elements) {
    return shuffleWith(elements, (n) => this.nextIntBetween(0, n + 1));
  }
};
var shuffleWith = (elements, nextIntBounded) => {
  return suspend(() => pipe(sync(() => Array.from(elements)), flatMap7((buffer2) => {
    const numbers = [];
    for (let i = buffer2.length; i >= 2; i = i - 1) {
      numbers.push(i);
    }
    return pipe(numbers, forEachSequentialDiscard((n) => pipe(nextIntBounded(n), map9((k) => swap(buffer2, n - 1, k)))), as(fromIterable3(buffer2)));
  })));
};
var swap = (buffer2, index1, index2) => {
  const tmp = buffer2[index1];
  buffer2[index1] = buffer2[index2];
  buffer2[index2] = tmp;
  return buffer2;
};
var make20 = (seed) => new RandomImpl(seed);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/tracer.esm.js
var TracerTypeId = /* @__PURE__ */ Symbol.for("effect/Tracer");
var make21 = (options3) => ({
  [TracerTypeId]: TracerTypeId,
  ...options3
});
var tracerTag = /* @__PURE__ */ Tag(/* @__PURE__ */ Symbol.for("effect/Tracer"));
var ids3 = /* @__PURE__ */ globalValue("effect/Tracer/SpanId.ids", () => make11(0));
var NativeSpan = class {
  _tag = "Span";
  traceId = "native";
  events = [];
  constructor(name, parent, context6, links, sampled, startTime) {
    this.name = name;
    this.parent = parent;
    this.context = context6;
    this.links = links;
    this.sampled = sampled;
    this.startTime = startTime;
    this.status = {
      _tag: "Started",
      startTime
    };
    this.attributes = /* @__PURE__ */ new Map();
    this.spanId = `span${incrementAndGet(ids3)}`;
  }
  end = (endTime, exit3) => {
    this.status = {
      _tag: "Ended",
      endTime,
      exit: exit3,
      startTime: this.status.startTime
    };
  };
  attribute = (key2, value) => {
    this.attributes.set(key2, value);
  };
  event = (name, startTime, attributes) => {
    this.events.push([name, startTime, attributes ?? {}]);
  };
};
var nativeTracer = /* @__PURE__ */ make21({
  span: (name, parent, context6, links, sampled, startTime) => new NativeSpan(name, parent, context6, links, sampled, startTime),
  context: (f) => f()
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/defaultServices.esm.js
var liveServices = /* @__PURE__ */ pipe(/* @__PURE__ */ empty5(), /* @__PURE__ */ add2(clockTag, /* @__PURE__ */ make17()), /* @__PURE__ */ add2(consoleTag, defaultConsole), /* @__PURE__ */ add2(randomTag, /* @__PURE__ */ make20(/* @__PURE__ */ Math.random() * 4294967296 >>> 0)), /* @__PURE__ */ add2(configProviderTag, /* @__PURE__ */ fromEnv()), /* @__PURE__ */ add2(tracerTag, nativeTracer));
var currentServices = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/DefaultServices/currentServices"), () => fiberRefUnsafeMakeContext(liveServices));
var sleep = (duration) => {
  const decodedDuration = decode(duration);
  return clockWith((clock2) => clock2.sleep(decodedDuration));
};
var clockWith = (f) => fiberRefGetWith(currentServices, (services) => f(get4(services, clockTag)));
var currentTimeMillis = /* @__PURE__ */ clockWith((clock2) => clock2.currentTimeMillis);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Clock/dist/effect-Clock.esm.js
var sleep2 = sleep;
var currentTimeMillis2 = currentTimeMillis;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberRefs.esm.js
function unsafeMake3(fiberRefLocals) {
  return new FiberRefsImpl(fiberRefLocals);
}
function empty16() {
  return unsafeMake3(/* @__PURE__ */ new Map());
}
var FiberRefsSym = /* @__PURE__ */ Symbol.for("effect/FiberRefs");
var FiberRefsImpl = class {
  [FiberRefsSym] = FiberRefsSym;
  constructor(locals) {
    this.locals = locals;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var findAncestor = (_ref, _parentStack, _childStack, _childModified = false) => {
  const ref = _ref;
  let parentStack = _parentStack;
  let childStack = _childStack;
  let childModified = _childModified;
  let ret = void 0;
  while (ret === void 0) {
    if (isNonEmptyReadonlyArray(parentStack) && isNonEmptyReadonlyArray(childStack)) {
      const parentFiberId = headNonEmpty(parentStack)[0];
      const parentAncestors = tailNonEmpty(parentStack);
      const childFiberId = headNonEmpty(childStack)[0];
      const childRefValue = headNonEmpty(childStack)[1];
      const childAncestors = tailNonEmpty(childStack);
      if (parentFiberId.startTimeMillis < childFiberId.startTimeMillis) {
        childStack = childAncestors;
        childModified = true;
      } else if (parentFiberId.startTimeMillis > childFiberId.startTimeMillis) {
        parentStack = parentAncestors;
      } else {
        if (parentFiberId.id < childFiberId.id) {
          childStack = childAncestors;
          childModified = true;
        } else if (parentFiberId.id > childFiberId.id) {
          parentStack = parentAncestors;
        } else {
          ret = [childRefValue, childModified];
        }
      }
    } else {
      ret = [ref.initial, true];
    }
  }
  return ret;
};
var joinAs = /* @__PURE__ */ dual(3, (self, fiberId2, that) => {
  const parentFiberRefs = new Map(self.locals);
  for (const [fiberRef, childStack] of that.locals) {
    const childValue = headNonEmpty(childStack)[1];
    if (!equals(headNonEmpty(childStack)[0], fiberId2)) {
      if (!parentFiberRefs.has(fiberRef)) {
        if (equals(childValue, fiberRef.initial)) {
          continue;
        }
        parentFiberRefs.set(fiberRef, [[fiberId2, fiberRef.join(fiberRef.initial, childValue)]]);
        continue;
      }
      const parentStack = parentFiberRefs.get(fiberRef);
      const [ancestor, wasModified] = findAncestor(fiberRef, parentStack, childStack);
      if (wasModified) {
        const patch10 = fiberRef.diff(ancestor, childValue);
        const oldValue = headNonEmpty(parentStack)[1];
        const newValue = fiberRef.join(oldValue, fiberRef.patch(patch10)(oldValue));
        if (!equals(oldValue, newValue)) {
          let newStack;
          const parentFiberId = headNonEmpty(parentStack)[0];
          if (equals(parentFiberId, fiberId2)) {
            newStack = prepend([parentFiberId, newValue])(tailNonEmpty(parentStack));
          } else {
            newStack = prepend([fiberId2, newValue])(parentStack);
          }
          parentFiberRefs.set(fiberRef, newStack);
        }
      }
    }
  }
  return new FiberRefsImpl(new Map(parentFiberRefs));
});
var forkAs = /* @__PURE__ */ dual(2, (self, childId) => {
  const map20 = /* @__PURE__ */ new Map();
  for (const [fiberRef, stack] of self.locals.entries()) {
    const oldValue = headNonEmpty(stack)[1];
    const newValue = fiberRef.patch(fiberRef.fork)(oldValue);
    if (equals(oldValue, newValue)) {
      map20.set(fiberRef, stack);
    } else {
      map20.set(fiberRef, prepend([childId, newValue])(stack));
    }
  }
  return new FiberRefsImpl(map20);
});
var delete_ = /* @__PURE__ */ dual(2, (self, fiberRef) => {
  const locals = new Map(self.locals);
  locals.delete(fiberRef);
  return new FiberRefsImpl(locals);
});
var get8 = /* @__PURE__ */ dual(2, (self, fiberRef) => {
  if (!self.locals.has(fiberRef)) {
    return none2();
  }
  return some2(headNonEmpty(self.locals.get(fiberRef))[1]);
});
var getOrDefault = /* @__PURE__ */ dual(2, (self, fiberRef) => pipe(get8(self, fiberRef), getOrElse(() => fiberRef.initial)));
var updatedAs = /* @__PURE__ */ dual(2, (self, {
  fiberId: fiberId2,
  fiberRef,
  value
}) => {
  const oldStack = self.locals.has(fiberRef) ? self.locals.get(fiberRef) : empty2();
  let newStack;
  if (isEmptyReadonlyArray(oldStack)) {
    newStack = of([fiberId2, value]);
  } else {
    const [currentId, currentValue] = headNonEmpty(oldStack);
    if (equals(currentId, fiberId2)) {
      if (equals(currentValue, value)) {
        return self;
      } else {
        newStack = prepend([fiberId2, value])(tailNonEmpty(oldStack));
      }
    } else {
      newStack = prepend([fiberId2, value])(oldStack);
    }
  }
  const locals = new Map(self.locals);
  return new FiberRefsImpl(locals.set(fiberRef, newStack));
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/FiberRefs/dist/effect-FiberRefs.esm.js
var forkAs2 = forkAs;
var getOrDefault2 = getOrDefault;
var updatedAs2 = updatedAs;
var empty17 = empty16;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberRefs/patch.esm.js
var OP_EMPTY2 = "Empty";
var OP_ADD = "Add";
var OP_REMOVE = "Remove";
var OP_UPDATE = "Update";
var OP_AND_THEN = "AndThen";
var empty18 = {
  _tag: OP_EMPTY2
};
var diff4 = (oldValue, newValue) => {
  const missingLocals = new Map(oldValue.locals);
  let patch10 = empty18;
  for (const [fiberRef, pairs] of newValue.locals.entries()) {
    const newValue2 = headNonEmpty(pairs)[1];
    const old = missingLocals.get(fiberRef);
    if (old !== void 0) {
      const oldValue2 = headNonEmpty(old)[1];
      if (!equals(oldValue2, newValue2)) {
        patch10 = combine6({
          _tag: OP_UPDATE,
          fiberRef,
          patch: fiberRef.diff(oldValue2, newValue2)
        })(patch10);
      }
    } else {
      patch10 = combine6({
        _tag: OP_ADD,
        fiberRef,
        value: newValue2
      })(patch10);
    }
    missingLocals.delete(fiberRef);
  }
  for (const [fiberRef] of missingLocals.entries()) {
    patch10 = combine6({
      _tag: OP_REMOVE,
      fiberRef
    })(patch10);
  }
  return patch10;
};
var combine6 = /* @__PURE__ */ dual(2, (self, that) => ({
  _tag: OP_AND_THEN,
  first: self,
  second: that
}));
var patch5 = /* @__PURE__ */ dual(3, (self, fiberId2, oldValue) => {
  let fiberRefs3 = oldValue;
  let patches = of(self);
  while (isNonEmptyReadonlyArray(patches)) {
    const head7 = headNonEmpty(patches);
    const tail = tailNonEmpty(patches);
    switch (head7._tag) {
      case OP_EMPTY2: {
        patches = tail;
        break;
      }
      case OP_ADD: {
        fiberRefs3 = updatedAs(fiberRefs3, {
          fiberId: fiberId2,
          fiberRef: head7.fiberRef,
          value: head7.value
        });
        patches = tail;
        break;
      }
      case OP_REMOVE: {
        fiberRefs3 = delete_(fiberRefs3, head7.fiberRef);
        patches = tail;
        break;
      }
      case OP_UPDATE: {
        const value = getOrDefault(fiberRefs3, head7.fiberRef);
        fiberRefs3 = updatedAs(fiberRefs3, {
          fiberId: fiberId2,
          fiberRef: head7.fiberRef,
          value: head7.fiberRef.patch(head7.patch)(value)
        });
        patches = tail;
        break;
      }
      case OP_AND_THEN: {
        patches = prepend(head7.first)(prepend(head7.second)(tail));
        break;
      }
    }
  }
  return fiberRefs3;
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/label.esm.js
var MetricLabelSymbolKey = "effect/MetricLabel";
var MetricLabelTypeId = /* @__PURE__ */ Symbol.for(MetricLabelSymbolKey);
var MetricLabelImpl = class {
  [MetricLabelTypeId] = MetricLabelTypeId;
  constructor(key2, value) {
    this.key = key2;
    this.value = value;
  }
  [symbol]() {
    return pipe(hash(MetricLabelSymbolKey), combine(hash(this.key)), combine(hash(this.value)));
  }
  [symbol2](that) {
    return isMetricLabel(that) && this.key === that.key && this.value === that.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make22 = (key2, value) => {
  return new MetricLabelImpl(key2, value);
};
var isMetricLabel = (u) => {
  return typeof u === "object" && u != null && MetricLabelTypeId in u;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/singleShotGen.esm.js
var SingleShotGen2 = class _SingleShotGen {
  called = false;
  constructor(self) {
    this.self = self;
  }
  next(a) {
    return this.called ? {
      value: a,
      done: true
    } : (this.called = true, {
      value: this.self,
      done: false
    });
  }
  return(a) {
    return {
      value: a,
      done: true
    };
  }
  throw(e) {
    throw e;
  }
  [Symbol.iterator]() {
    return new _SingleShotGen(this.self);
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/LogLevel/dist/effect-LogLevel.esm.js
var All = logLevelAll;
var Fatal = logLevelFatal;
var Error2 = logLevelError;
var Warning = logLevelWarning;
var Info = logLevelInfo;
var Debug = logLevelDebug;
var Trace = logLevelTrace;
var None3 = logLevelNone;
var Order2 = /* @__PURE__ */ pipe(Order, /* @__PURE__ */ mapInput2((level) => level.ordinal));
var greaterThan2 = /* @__PURE__ */ greaterThan(Order2);
var fromLiteral = (_) => {
  switch (_) {
    case "All": {
      return All;
    }
    case "Debug": {
      return Debug;
    }
    case "Error": {
      return Error2;
    }
    case "Fatal": {
      return Fatal;
    }
    case "Info": {
      return Info;
    }
    case "Trace": {
      return Trace;
    }
    case "None": {
      return None3;
    }
    case "Warning": {
      return Warning;
    }
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/logSpan.esm.js
var render = (now) => {
  return (self) => {
    const label = self.label.replace(/[\s="]/g, "_");
    return `${label}=${now - self.startTime}ms`;
  };
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/LogSpan/dist/effect-LogSpan.esm.js
var render2 = render;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/ref.esm.js
var RefTypeId = /* @__PURE__ */ Symbol.for("effect/Ref");
var refVariance = {
  _A: (_) => _
};
var RefImpl = class {
  [RefTypeId] = refVariance;
  constructor(ref) {
    this.ref = ref;
  }
  modify(f) {
    return sync(() => {
      const current = get7(this.ref);
      const [b, a] = f(current);
      if (current !== a) {
        set3(a)(this.ref);
      }
      return b;
    });
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var unsafeMake4 = (value) => new RefImpl(make11(value));
var make24 = (value) => sync(() => unsafeMake4(value));
var get9 = (self) => self.modify((a) => [a, a]);
var set5 = /* @__PURE__ */ dual(2, (self, value) => self.modify(() => [void 0, value]));
var getAndSet = /* @__PURE__ */ dual(2, (self, value) => self.modify((a) => [a, value]));
var modify2 = /* @__PURE__ */ dual(2, (self, f) => self.modify(f));
var update4 = /* @__PURE__ */ dual(2, (self, f) => self.modify((a) => [void 0, f(a)]));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Ref/dist/effect-Ref.esm.js
var make25 = make24;
var get10 = get9;
var getAndSet2 = getAndSet;
var modify3 = modify2;
var update5 = update4;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/core-effect.esm.js
var try_ = (arg) => {
  let evaluate;
  let onFailure = void 0;
  if (typeof arg === "function") {
    evaluate = arg;
  } else {
    evaluate = arg.try;
    onFailure = arg.catch;
  }
  return sync(() => {
    try {
      return evaluate();
    } catch (error) {
      throw makeEffectError(fail(onFailure ? onFailure(error) : error));
    }
  });
};
var catchTag = /* @__PURE__ */ dual(3, (self, k, f) => catchIf(self, isTagged(k), f));
var catchTags = /* @__PURE__ */ dual(2, (self, cases) => {
  let keys5;
  return catchIf(self, (e) => {
    keys5 ??= Object.keys(cases);
    return isObject(e) && "_tag" in e && keys5.includes(e["_tag"]);
  }, (e) => cases[e["_tag"]](e));
});
var diffFiberRefs = (self) => summarized(self, fiberRefs2, diff4);
var diffFiberRefsAndRuntimeFlags = (self) => summarized(self, zip3(fiberRefs2, runtimeFlags), ([refs, flags], [refsNew, flagsNew]) => [diff4(refs, refsNew), diff3(flags, flagsNew)]);
var filterOrElse = /* @__PURE__ */ dual(3, (self, filter9, orElse8) => flatMap7(self, (a) => filter9(a) ? succeed(a) : orElse8(a)));
var filterOrFail = /* @__PURE__ */ dual(3, (self, filter9, orFailWith) => filterOrElse(self, filter9, (a) => failSync(() => orFailWith(a))));
var match4 = /* @__PURE__ */ dual(2, (self, {
  onFailure,
  onSuccess
}) => matchEffect(self, {
  onFailure: (e) => succeed(onFailure(e)),
  onSuccess: (a) => succeed(onSuccess(a))
}));
var EffectGen = class {
  constructor(value) {
    this.value = value;
  }
  [Symbol.iterator]() {
    return new SingleShotGen2(this);
  }
};
var adapter2 = function() {
  let x = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    x = arguments[i](x);
  }
  return new EffectGen(x);
};
var gen = function() {
  let f;
  if (arguments.length === 1) {
    f = arguments[0];
  } else {
    f = arguments[1].bind(arguments[0]);
  }
  return suspend(() => {
    const iterator = f(adapter2);
    const state = iterator.next();
    const run3 = (state2) => state2.done ? succeed(state2.value) : pipe(state2.value.value, flatMap7((val) => run3(iterator.next(val))));
    return run3(state);
  });
};
var fiberRefs2 = /* @__PURE__ */ withFiberRuntime((state) => succeed(state.getFiberRefs()));
var ignore = (self) => match4(self, {
  onFailure: constVoid,
  onSuccess: constVoid
});
var mapErrorCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (c) => failCauseSync(() => f(c)),
  onSuccess: succeed
}));
var memoize = (self) => pipe(deferredMake(), flatMap7((deferred) => pipe(diffFiberRefsAndRuntimeFlags(self), intoDeferred(deferred), once, map9((complete2) => zipRight(complete2, pipe(deferredAwait(deferred), flatMap7(([patch10, a]) => as(zip3(patchFiberRefs(patch10[0]), updateRuntimeFlags(patch10[1])), a))))))));
var negate = (self) => map9(self, (b) => !b);
var once = (self) => map9(make25(true), (ref) => asUnit(whenEffect(self, getAndSet2(ref, false))));
var patchFiberRefs = (patch$1) => updateFiberRefs((fiberId2, fiberRefs3) => pipe(patch$1, patch5(fiberId2, fiberRefs3)));
var promise = (evaluate) => evaluate.length >= 1 ? async((resolve, signal) => {
  evaluate(signal).then((a) => resolve(exitSucceed(a))).catch((e) => resolve(exitDie(e)));
}) : async((resolve) => {
  evaluate().then((a) => resolve(exitSucceed(a))).catch((e) => resolve(exitDie(e)));
});
var sleep3 = sleep2;
var summarized = /* @__PURE__ */ dual(3, (self, summary5, f) => flatMap7(summary5, (start3) => flatMap7(self, (value) => map9(summary5, (end3) => [f(start3, end3), value]))));
var tapErrorCause = /* @__PURE__ */ dual(2, (self, f) => matchCauseEffect(self, {
  onFailure: (cause2) => zipRight(f(cause2), failCause(cause2)),
  onSuccess: succeed
}));
var tryPromise = (arg) => {
  let evaluate;
  let catcher = void 0;
  if (typeof arg === "function") {
    evaluate = arg;
  } else {
    evaluate = arg.try;
    catcher = arg.catch;
  }
  if (evaluate.length >= 1) {
    return suspend(() => {
      const controller = new AbortController();
      return flatMap7(try_(() => evaluate(controller.signal)), (promise3) => async((resolve) => {
        promise3.then((a) => resolve(exitSucceed(a))).catch((e) => resolve(fail2(catcher ? catcher(e) : e)));
        return sync(() => controller.abort());
      }));
    });
  }
  return flatMap7(try_(arg), (promise3) => async((resolve) => {
    promise3.then((a) => resolve(exitSucceed(a))).catch((e) => resolve(fail2(catcher ? catcher(e) : e)));
  }));
};
var tryMap = /* @__PURE__ */ dual(2, (self, options3) => flatMap7(self, (a) => try_({
  try: () => options3.try(a),
  catch: options3.catch
})));
var updateFiberRefs = (f) => withFiberRuntime((state) => {
  state.setFiberRefs(f(state.id(), state.getFiberRefs()));
  return unit;
});
var when = /* @__PURE__ */ dual(2, (self, predicate) => suspend(() => predicate() ? map9(self, some2) : succeed(none2())));
var currentSpan = /* @__PURE__ */ map9(/* @__PURE__ */ fiberRefGet(currentTracerSpan), /* @__PURE__ */ findFirst3((span) => span._tag === "Span"));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Exit/dist/effect-Exit.esm.js
var isFailure = exitIsFailure;
var all3 = exitCollectAll;
var die3 = exitDie;
var fail3 = exitFail;
var failCause2 = exitFailCause;
var map10 = exitMap;
var match5 = exitMatch;
var succeed2 = exitSucceed;
var unit2 = exitUnit;
var zip4 = exitZip;
var zipRight2 = exitZipRight;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/executionStrategy.esm.js
var OP_SEQUENTIAL2 = "Sequential";
var OP_PARALLEL2 = "Parallel";
var OP_PARALLEL_N = "ParallelN";
var sequential2 = {
  _tag: OP_SEQUENTIAL2
};
var parallel2 = {
  _tag: OP_PARALLEL2
};
var parallelN = (parallelism) => ({
  _tag: OP_PARALLEL_N,
  parallelism
});
var isSequential = (self) => self._tag === OP_SEQUENTIAL2;
var isParallel = (self) => self._tag === OP_PARALLEL2;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberStatus.esm.js
var FiberStatusSymbolKey = "effect/FiberStatus";
var FiberStatusTypeId = /* @__PURE__ */ Symbol.for(FiberStatusSymbolKey);
var OP_DONE = "Done";
var OP_RUNNING = "Running";
var OP_SUSPENDED = "Suspended";
var Done = class {
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_DONE;
  [symbol]() {
    return pipe(hash(FiberStatusSymbolKey), combine(hash(this._tag)));
  }
  [symbol2](that) {
    return isFiberStatus(that) && that._tag === OP_DONE;
  }
};
var Running = class {
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_RUNNING;
  constructor(runtimeFlags2) {
    this.runtimeFlags = runtimeFlags2;
  }
  [symbol]() {
    return pipe(hash(FiberStatusSymbolKey), combine(hash(this._tag)), combine(hash(this.runtimeFlags)));
  }
  [symbol2](that) {
    return isFiberStatus(that) && that._tag === OP_RUNNING && this.runtimeFlags === that.runtimeFlags;
  }
};
var Suspended = class {
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_SUSPENDED;
  constructor(runtimeFlags2, blockingOn) {
    this.runtimeFlags = runtimeFlags2;
    this.blockingOn = blockingOn;
  }
  [symbol]() {
    return pipe(hash(FiberStatusSymbolKey), combine(hash(this._tag)), combine(hash(this.runtimeFlags)), combine(hash(this.blockingOn)));
  }
  [symbol2](that) {
    return isFiberStatus(that) && that._tag === OP_SUSPENDED && this.runtimeFlags === that.runtimeFlags && equals(this.blockingOn, that.blockingOn);
  }
};
var done2 = /* @__PURE__ */ new Done();
var running = (runtimeFlags2) => new Running(runtimeFlags2);
var suspended = (runtimeFlags2, blockingOn) => new Suspended(runtimeFlags2, blockingOn);
var isFiberStatus = (u) => typeof u === "object" && u != null && FiberStatusTypeId in u;
var isDone = (self) => self._tag === OP_DONE;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/FiberStatus/dist/effect-FiberStatus.esm.js
var done3 = done2;
var running2 = running;
var suspended2 = suspended;
var isDone2 = isDone;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberMessage.esm.js
var OP_INTERRUPT_SIGNAL = "InterruptSignal";
var OP_STATEFUL = "Stateful";
var OP_RESUME = "Resume";
var OP_YIELD_NOW = "YieldNow";
var interruptSignal = (cause2) => ({
  _tag: OP_INTERRUPT_SIGNAL,
  cause: cause2
});
var stateful = (onFiber) => ({
  _tag: OP_STATEFUL,
  onFiber
});
var resume = (effect3) => ({
  _tag: OP_RESUME,
  effect: effect3
});
var yieldNow2 = () => ({
  _tag: OP_YIELD_NOW
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberScope.esm.js
var FiberScopeSymbolKey = "effect/FiberScope";
var FiberScopeTypeId = /* @__PURE__ */ Symbol.for(FiberScopeSymbolKey);
var Global = class {
  [FiberScopeTypeId] = FiberScopeTypeId;
  fiberId = none4;
  roots = /* @__PURE__ */ new Set();
  add(_runtimeFlags, child) {
    this.roots.add(child);
    child.addObserver(() => {
      this.roots.delete(child);
    });
  }
};
var Local = class {
  [FiberScopeTypeId] = FiberScopeTypeId;
  constructor(fiberId2, parent) {
    this.fiberId = fiberId2;
    this.parent = parent;
  }
  add(_runtimeFlags, child) {
    this.parent.tell(stateful((parentFiber) => {
      parentFiber.addChild(child);
      child.addObserver(() => {
        parentFiber.removeChild(child);
      });
    }));
  }
};
var unsafeMake5 = (fiber) => {
  return new Local(fiber.id(), fiber);
};
var globalScope = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberScope/Global"), () => new Global());

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiber.esm.js
var FiberSymbolKey = "effect/Fiber";
var FiberTypeId = /* @__PURE__ */ Symbol.for(FiberSymbolKey);
var fiberVariance = {
  _E: (_) => _,
  _A: (_) => _
};
var RuntimeFiberSymbolKey = "effect/Fiber";
var RuntimeFiberTypeId = /* @__PURE__ */ Symbol.for(RuntimeFiberSymbolKey);
var _await = (self) => self.await();
var join2 = (self) => zipLeft(flatten4(self.await()), self.inheritAll());
var currentFiberURI = "effect/FiberCurrent";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Deferred/dist/effect-Deferred.esm.js
var make27 = deferredMake;
var _await2 = deferredAwait;
var failCause3 = deferredFailCause;
var isDone3 = deferredIsDone;
var succeed3 = deferredSucceed;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/ExecutionStrategy/dist/effect-ExecutionStrategy.esm.js
var sequential3 = sequential2;
var parallel3 = parallel2;
var parallelN2 = parallelN;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/FiberRefsPatch/dist/effect-FiberRefsPatch.esm.js
var diff5 = diff4;
var patch6 = patch5;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/completedRequestMap.esm.js
var currentRequestMap = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentRequestMap"), () => fiberRefUnsafeMake(/* @__PURE__ */ new Map()));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/concurrency.esm.js
var match7 = (options3, sequential4, unbounded4, bounded5) => {
  switch (options3?.concurrency) {
    case void 0: {
      return sequential4();
    }
    case "unbounded": {
      return unbounded4();
    }
    case "inherit": {
      return fiberRefGetWith(currentConcurrency, (concurrency) => concurrency === "unbounded" ? unbounded4() : concurrency > 1 ? bounded5(concurrency) : sequential4());
    }
    default: {
      return options3.concurrency > 1 ? bounded5(options3.concurrency) : sequential4();
    }
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/logger.esm.js
var LoggerSymbolKey = "effect/Logger";
var LoggerTypeId = /* @__PURE__ */ Symbol.for(LoggerSymbolKey);
var loggerVariance = {
  _Message: (_) => _,
  _Output: (_) => _
};
var makeLogger = (log2) => ({
  [LoggerTypeId]: loggerVariance,
  log: log2,
  pipe() {
    return pipeArguments(this, arguments);
  }
});
var stringLogger = /* @__PURE__ */ makeLogger(({
  annotations,
  cause: cause2,
  date,
  fiberId: fiberId2,
  logLevel,
  message,
  spans
}) => {
  const nowMillis = date.getTime();
  const outputArray = [`timestamp=${date.toISOString()}`, `level=${logLevel.label}`, `fiber=${threadName(fiberId2)}`];
  let output = outputArray.join(" ");
  const stringMessage = serializeUnknown(message);
  if (stringMessage.length > 0) {
    output = output + " message=";
    output = appendQuoted(stringMessage, output);
  }
  if (cause2 != null && cause2._tag !== "Empty") {
    output = output + " cause=";
    output = appendQuoted(pretty(cause2), output);
  }
  if (isCons(spans)) {
    output = output + " ";
    let first2 = true;
    for (const span of spans) {
      if (first2) {
        first2 = false;
      } else {
        output = output + " ";
      }
      output = output + pipe(span, render2(nowMillis));
    }
  }
  if (pipe(annotations, size3) > 0) {
    output = output + " ";
    let first2 = true;
    for (const [key2, value] of annotations) {
      if (first2) {
        first2 = false;
      } else {
        output = output + " ";
      }
      output = output + filterKeyName(key2);
      output = output + "=";
      output = appendQuoted(serializeUnknown(value), output);
    }
  }
  return output;
});
var serializeUnknown = (u) => {
  try {
    return typeof u === "object" ? JSON.stringify(u) : String(u);
  } catch (_) {
    return String(u);
  }
};
var escapeDoubleQuotes = (str) => `"${str.replace(/\\([\s\S])|(")/g, "\\$1$2")}"`;
var textOnly = /^[^\s"=]+$/;
var appendQuoted = (label, output) => output + (label.match(textOnly) ? label : escapeDoubleQuotes(label));
var filterKeyName = (key2) => key2.replace(/[\s="]/g, "_");

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/boundaries.esm.js
var MetricBoundariesSymbolKey = "effect/MetricBoundaries";
var MetricBoundariesTypeId = /* @__PURE__ */ Symbol.for(MetricBoundariesSymbolKey);
var MetricBoundariesImpl = class {
  [MetricBoundariesTypeId] = MetricBoundariesTypeId;
  constructor(values3) {
    this.values = values3;
  }
  [symbol]() {
    return pipe(hash(MetricBoundariesSymbolKey), combine(hash(this.values)));
  }
  [symbol2](u) {
    return isMetricBoundaries(u) && equals(this.values, u.values);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isMetricBoundaries = (u) => {
  return typeof u === "object" && u != null && MetricBoundariesTypeId in u;
};
var fromChunk = (chunk2) => {
  const values3 = pipe(chunk2, appendAll(of2(Number.POSITIVE_INFINITY)), dedupe2);
  return new MetricBoundariesImpl(values3);
};
var exponential = (options3) => pipe(makeBy(options3.count - 1, (i) => options3.start * Math.pow(options3.factor, i)), unsafeFromArray, fromChunk);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/keyType.esm.js
var MetricKeyTypeSymbolKey = "effect/MetricKeyType";
var MetricKeyTypeTypeId = /* @__PURE__ */ Symbol.for(MetricKeyTypeSymbolKey);
var CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter";
var CounterKeyTypeTypeId = /* @__PURE__ */ Symbol.for(CounterKeyTypeSymbolKey);
var FrequencyKeyTypeSymbolKey = "effect/MetricKeyType/Frequency";
var FrequencyKeyTypeTypeId = /* @__PURE__ */ Symbol.for(FrequencyKeyTypeSymbolKey);
var GaugeKeyTypeSymbolKey = "effect/MetricKeyType/Gauge";
var GaugeKeyTypeTypeId = /* @__PURE__ */ Symbol.for(GaugeKeyTypeSymbolKey);
var HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram";
var HistogramKeyTypeTypeId = /* @__PURE__ */ Symbol.for(HistogramKeyTypeSymbolKey);
var SummaryKeyTypeSymbolKey = "effect/MetricKeyType/Summary";
var SummaryKeyTypeTypeId = /* @__PURE__ */ Symbol.for(SummaryKeyTypeSymbolKey);
var metricKeyTypeVariance = {
  _In: (_) => _,
  _Out: (_) => _
};
var CounterKeyType = class {
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [CounterKeyTypeTypeId] = CounterKeyTypeTypeId;
  constructor(incremental, bigint3) {
    this.incremental = incremental;
    this.bigint = bigint3;
  }
  [symbol]() {
    return hash(CounterKeyTypeSymbolKey);
  }
  [symbol2](that) {
    return isCounterKey(that);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var HistogramKeyType = class {
  [MetricKeyTypeTypeId] = metricKeyTypeVariance;
  [HistogramKeyTypeTypeId] = HistogramKeyTypeTypeId;
  constructor(boundaries) {
    this.boundaries = boundaries;
  }
  [symbol]() {
    return pipe(hash(HistogramKeyTypeSymbolKey), combine(hash(this.boundaries)));
  }
  [symbol2](that) {
    return isHistogramKey(that) && equals(this.boundaries, that.boundaries);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var counter = (options3) => new CounterKeyType(options3?.incremental ?? false, options3?.bigint ?? false);
var histogram = (boundaries) => {
  return new HistogramKeyType(boundaries);
};
var isCounterKey = (u) => {
  return typeof u === "object" && u != null && CounterKeyTypeTypeId in u;
};
var isFrequencyKey = (u) => {
  return typeof u === "object" && u != null && FrequencyKeyTypeTypeId in u;
};
var isGaugeKey = (u) => {
  return typeof u === "object" && u != null && GaugeKeyTypeTypeId in u;
};
var isHistogramKey = (u) => {
  return typeof u === "object" && u != null && HistogramKeyTypeTypeId in u;
};
var isSummaryKey = (u) => {
  return typeof u === "object" && u != null && SummaryKeyTypeTypeId in u;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/key.esm.js
var MetricKeySymbolKey = "effect/MetricKey";
var MetricKeyTypeId = /* @__PURE__ */ Symbol.for(MetricKeySymbolKey);
var metricKeyVariance = {
  _Type: (_) => _
};
var MetricKeyImpl = class {
  [MetricKeyTypeId] = metricKeyVariance;
  constructor(name, keyType, description, tags = empty10()) {
    this.name = name;
    this.keyType = keyType;
    this.description = description;
    this.tags = tags;
  }
  [symbol]() {
    return pipe(hash(this.name), combine(hash(this.keyType)), combine(hash(this.description)), combine(hash(this.tags)));
  }
  [symbol2](u) {
    return isMetricKey(u) && this.name === u.name && equals(this.keyType, u.keyType) && equals(this.description, u.description) && equals(this.tags, u.tags);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isMetricKey = (u) => typeof u === "object" && u != null && MetricKeyTypeId in u;
var counter2 = (name, options3) => new MetricKeyImpl(name, counter(options3), fromNullable(options3?.description));
var histogram2 = (name, boundaries, description) => new MetricKeyImpl(name, histogram(boundaries), fromNullable(description));
var taggedWithLabelSet = /* @__PURE__ */ dual(2, (self, extraTags) => size4(extraTags) === 0 ? self : new MetricKeyImpl(self.name, self.keyType, self.description, pipe(self.tags, union4(extraTags))));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/state.esm.js
var MetricStateSymbolKey = "effect/MetricState";
var MetricStateTypeId = /* @__PURE__ */ Symbol.for(MetricStateSymbolKey);
var CounterStateSymbolKey = "effect/MetricState/Counter";
var CounterStateTypeId = /* @__PURE__ */ Symbol.for(CounterStateSymbolKey);
var FrequencyStateSymbolKey = "effect/MetricState/Frequency";
var FrequencyStateTypeId = /* @__PURE__ */ Symbol.for(FrequencyStateSymbolKey);
var GaugeStateSymbolKey = "effect/MetricState/Gauge";
var GaugeStateTypeId = /* @__PURE__ */ Symbol.for(GaugeStateSymbolKey);
var HistogramStateSymbolKey = "effect/MetricState/Histogram";
var HistogramStateTypeId = /* @__PURE__ */ Symbol.for(HistogramStateSymbolKey);
var SummaryStateSymbolKey = "effect/MetricState/Summary";
var SummaryStateTypeId = /* @__PURE__ */ Symbol.for(SummaryStateSymbolKey);
var metricStateVariance = {
  _A: (_) => _
};
var CounterState = class {
  [MetricStateTypeId] = metricStateVariance;
  [CounterStateTypeId] = CounterStateTypeId;
  constructor(count) {
    this.count = count;
  }
  [symbol]() {
    return pipe(hash(CounterStateSymbolKey), combine(hash(this.count)));
  }
  [symbol2](that) {
    return isCounterState(that) && this.count === that.count;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var FrequencyState = class {
  [MetricStateTypeId] = metricStateVariance;
  [FrequencyStateTypeId] = FrequencyStateTypeId;
  constructor(occurrences) {
    this.occurrences = occurrences;
  }
  [symbol]() {
    return pipe(hash(FrequencyStateSymbolKey), combine(hash(this.occurrences)));
  }
  [symbol2](that) {
    return isFrequencyState(that) && equals(this.occurrences, that.occurrences);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var GaugeState = class {
  [MetricStateTypeId] = metricStateVariance;
  [GaugeStateTypeId] = GaugeStateTypeId;
  constructor(value) {
    this.value = value;
  }
  [symbol]() {
    return pipe(hash(GaugeStateSymbolKey), combine(hash(this.value)));
  }
  [symbol2](u) {
    return isGaugeState(u) && this.value === u.value;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var HistogramState = class {
  [MetricStateTypeId] = metricStateVariance;
  [HistogramStateTypeId] = HistogramStateTypeId;
  constructor(buckets, count, min3, max5, sum3) {
    this.buckets = buckets;
    this.count = count;
    this.min = min3;
    this.max = max5;
    this.sum = sum3;
  }
  [symbol]() {
    return pipe(hash(HistogramStateSymbolKey), combine(hash(this.buckets)), combine(hash(this.count)), combine(hash(this.min)), combine(hash(this.max)), combine(hash(this.sum)));
  }
  [symbol2](that) {
    return isHistogramState(that) && equals(this.buckets, that.buckets) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var SummaryState = class {
  [MetricStateTypeId] = metricStateVariance;
  [SummaryStateTypeId] = SummaryStateTypeId;
  constructor(error, quantiles, count, min3, max5, sum3) {
    this.error = error;
    this.quantiles = quantiles;
    this.count = count;
    this.min = min3;
    this.max = max5;
    this.sum = sum3;
  }
  [symbol]() {
    return pipe(hash(SummaryStateSymbolKey), combine(hash(this.error)), combine(hash(this.quantiles)), combine(hash(this.count)), combine(hash(this.min)), combine(hash(this.max)), combine(hash(this.sum)));
  }
  [symbol2](that) {
    return isSummaryState(that) && this.error === that.error && equals(this.quantiles, that.quantiles) && this.count === that.count && this.min === that.min && this.max === that.max && this.sum === that.sum;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var counter3 = (count) => new CounterState(count);
var frequency2 = (occurrences) => {
  return new FrequencyState(occurrences);
};
var gauge2 = (count) => new GaugeState(count);
var histogram3 = (options3) => new HistogramState(options3.buckets, options3.count, options3.min, options3.max, options3.sum);
var summary2 = (options3) => new SummaryState(options3.error, options3.quantiles, options3.count, options3.min, options3.max, options3.sum);
var isCounterState = (u) => {
  return typeof u === "object" && u != null && CounterStateTypeId in u;
};
var isFrequencyState = (u) => {
  return typeof u === "object" && u != null && FrequencyStateTypeId in u;
};
var isGaugeState = (u) => {
  return typeof u === "object" && u != null && GaugeStateTypeId in u;
};
var isHistogramState = (u) => {
  return typeof u === "object" && u != null && HistogramStateTypeId in u;
};
var isSummaryState = (u) => {
  return typeof u === "object" && u != null && SummaryStateTypeId in u;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/hook.esm.js
var MetricHookSymbolKey = "effect/MetricHook";
var MetricHookTypeId = /* @__PURE__ */ Symbol.for(MetricHookSymbolKey);
var metricHookVariance = {
  _In: (_) => _,
  _Out: (_) => _
};
var make28 = (options3) => ({
  [MetricHookTypeId]: metricHookVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  ...options3
});
var bigint0 = /* @__PURE__ */ BigInt(0);
var counter4 = (key2) => {
  let sum3 = key2.keyType.bigint ? bigint0 : 0;
  const canUpdate = key2.keyType.incremental ? key2.keyType.bigint ? (value) => value >= bigint0 : (value) => value >= 0 : (_value) => true;
  return make28({
    get: () => counter3(sum3),
    update: (value) => {
      if (canUpdate(value)) {
        sum3 = sum3 + value;
      }
    }
  });
};
var frequency3 = (_key) => {
  const values3 = /* @__PURE__ */ new Map();
  const update6 = (word) => {
    const slotCount = values3.get(word) ?? 0;
    values3.set(word, slotCount + 1);
  };
  const snapshot = () => fromIterable6(values3.entries());
  return make28({
    get: () => frequency2(snapshot()),
    update: update6
  });
};
var gauge3 = (_key, startAt) => {
  let value = startAt;
  return make28({
    get: () => gauge2(value),
    update: (v) => {
      value = v;
    }
  });
};
var histogram4 = (key2) => {
  const bounds = key2.keyType.boundaries.values;
  const size12 = bounds.length;
  const values3 = new Uint32Array(size12 + 1);
  const boundaries = new Float32Array(size12);
  let count = 0;
  let sum3 = 0;
  let min3 = Number.MAX_VALUE;
  let max5 = Number.MIN_VALUE;
  pipe(bounds, sort2(Order), map3((n, i) => {
    boundaries[i] = n;
  }));
  const update6 = (value) => {
    let from3 = 0;
    let to3 = size12;
    while (from3 !== to3) {
      const mid = Math.floor(from3 + (to3 - from3) / 2);
      const boundary = boundaries[mid];
      if (value <= boundary) {
        to3 = mid;
      } else {
        from3 = mid;
      }
      if (to3 === from3 + 1) {
        if (value <= boundaries[from3]) {
          to3 = from3;
        } else {
          from3 = to3;
        }
      }
    }
    values3[from3] = values3[from3] + 1;
    count = count + 1;
    sum3 = sum3 + value;
    if (value < min3) {
      min3 = value;
    }
    if (value > max5) {
      max5 = value;
    }
  };
  const getBuckets = () => {
    const builder = Array(size12);
    let cumulated = 0;
    for (let i = 0; i < size12; i++) {
      const boundary = boundaries[i];
      const value = values3[i];
      cumulated = cumulated + value;
      builder[i] = [boundary, cumulated];
    }
    return unsafeFromArray(builder);
  };
  return make28({
    get: () => histogram3({
      buckets: getBuckets(),
      count,
      min: min3,
      max: max5,
      sum: sum3
    }),
    update: update6
  });
};
var summary3 = (key2) => {
  const {
    error,
    maxAge,
    maxSize,
    quantiles
  } = key2.keyType;
  const sortedQuantiles = pipe(quantiles, sort2(Order));
  const values3 = Array(maxSize);
  let head7 = 0;
  let count = 0;
  let sum3 = 0;
  let min3 = Number.MAX_VALUE;
  let max5 = Number.MIN_VALUE;
  const snapshot = (now) => {
    const builder = [];
    let i = 0;
    while (i !== maxSize - 1) {
      const item = values3[i];
      if (item != null) {
        const [t, v] = item;
        const age = millis(now - t);
        if (greaterThanOrEqualTo2(age, zero) && age <= maxAge) {
          builder.push(v);
        }
      }
      i = i + 1;
    }
    return calculateQuantiles(error, sortedQuantiles, pipe(unsafeFromArray(builder), sort2(Order)));
  };
  const observe = (value, timestamp) => {
    if (maxSize > 0) {
      head7 = head7 + 1;
      const target = head7 % maxSize;
      values3[target] = [timestamp, value];
    }
    count = count + 1;
    sum3 = sum3 + value;
    if (value < min3) {
      min3 = value;
    }
    if (value > max5) {
      max5 = value;
    }
  };
  return make28({
    get: () => summary2({
      error,
      quantiles: snapshot(Date.now()),
      count,
      min: min3,
      max: max5,
      sum: sum3
    }),
    update: ([value, timestamp]) => observe(value, timestamp)
  });
};
var calculateQuantiles = (error, sortedQuantiles, sortedSamples) => {
  const sampleCount = sortedSamples.length;
  if (isEmpty(sortedQuantiles)) {
    return empty3();
  }
  const head7 = unsafeHead(sortedQuantiles);
  const tail = pipe(sortedQuantiles, drop(1));
  const resolved = pipe(tail, reduce(of2(resolveQuantile(error, sampleCount, none2(), 0, head7, sortedSamples)), (accumulator, quantile) => {
    const h = unsafeHead(accumulator);
    return pipe(accumulator, append2(resolveQuantile(error, sampleCount, h.value, h.consumed, quantile, h.rest)));
  }));
  return pipe(resolved, map3((rq) => [rq.quantile, rq.value]));
};
var resolveQuantile = (error, sampleCount, current, consumed, quantile, rest) => {
  let error_1 = error;
  let sampleCount_1 = sampleCount;
  let current_1 = current;
  let consumed_1 = consumed;
  let quantile_1 = quantile;
  let rest_1 = rest;
  let error_2 = error;
  let sampleCount_2 = sampleCount;
  let current_2 = current;
  let consumed_2 = consumed;
  let quantile_2 = quantile;
  let rest_2 = rest;
  while (1) {
    if (isEmpty(rest_1)) {
      return {
        quantile: quantile_1,
        value: none2(),
        consumed: consumed_1,
        rest: empty3()
      };
    }
    if (quantile_1 === 1) {
      return {
        quantile: quantile_1,
        value: some2(unsafeLast(rest_1)),
        consumed: consumed_1 + rest_1.length,
        rest: empty3()
      };
    }
    const sameHead = pipe(rest_1, splitWhere((n) => n > unsafeHead(rest_1)));
    const desired = quantile_1 * sampleCount_1;
    const allowedError = error_1 / 2 * desired;
    const candConsumed = consumed_1 + sameHead[0].length;
    const candError = Math.abs(candConsumed - desired);
    if (candConsumed < desired - allowedError) {
      error_2 = error_1;
      sampleCount_2 = sampleCount_1;
      current_2 = head2(rest_1);
      consumed_2 = candConsumed;
      quantile_2 = quantile_1;
      rest_2 = sameHead[1];
      error_1 = error_2;
      sampleCount_1 = sampleCount_2;
      current_1 = current_2;
      consumed_1 = consumed_2;
      quantile_1 = quantile_2;
      rest_1 = rest_2;
      continue;
    }
    if (candConsumed > desired + allowedError) {
      return {
        quantile: quantile_1,
        value: current_1,
        consumed: consumed_1,
        rest: rest_1
      };
    }
    switch (current_1._tag) {
      case "None": {
        error_2 = error_1;
        sampleCount_2 = sampleCount_1;
        current_2 = head2(rest_1);
        consumed_2 = candConsumed;
        quantile_2 = quantile_1;
        rest_2 = sameHead[1];
        error_1 = error_2;
        sampleCount_1 = sampleCount_2;
        current_1 = current_2;
        consumed_1 = consumed_2;
        quantile_1 = quantile_2;
        rest_1 = rest_2;
        continue;
      }
      case "Some": {
        const prevError = Math.abs(desired - current_1.value);
        if (candError < prevError) {
          error_2 = error_1;
          sampleCount_2 = sampleCount_1;
          current_2 = head2(rest_1);
          consumed_2 = candConsumed;
          quantile_2 = quantile_1;
          rest_2 = sameHead[1];
          error_1 = error_2;
          sampleCount_1 = sampleCount_2;
          current_1 = current_2;
          consumed_1 = consumed_2;
          quantile_1 = quantile_2;
          rest_1 = rest_2;
          continue;
        }
        return {
          quantile: quantile_1,
          value: some2(current_1.value),
          consumed: consumed_1,
          rest: rest_1
        };
      }
    }
  }
  throw new Error("BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/io/issues");
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/pair.esm.js
var MetricPairSymbolKey = "effect/MetricPair";
var MetricPairTypeId = /* @__PURE__ */ Symbol.for(MetricPairSymbolKey);
var metricPairVariance = {
  _Type: (_) => _
};
var unsafeMake6 = (metricKey, metricState) => {
  return {
    [MetricPairTypeId]: metricPairVariance,
    metricKey,
    metricState,
    pipe() {
      return pipeArguments(this, arguments);
    }
  };
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/MutableHashMap/dist/effect-MutableHashMap.esm.js
var TypeId9 = /* @__PURE__ */ Symbol.for("effect/MutableHashMap");
var MutableHashMapProto = {
  [TypeId9]: TypeId9,
  [Symbol.iterator]() {
    return this.backingMap.current[Symbol.iterator]();
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableHashMap",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var fromHashMap = (backingMap) => {
  const map20 = Object.create(MutableHashMapProto);
  map20.backingMap = make11(backingMap);
  return map20;
};
var empty19 = () => fromHashMap(empty9());
var get11 = /* @__PURE__ */ dual(2, (self, key2) => get6(self.backingMap.current, key2));
var has4 = /* @__PURE__ */ dual(2, (self, key2) => isSome2(get11(self, key2)));
var set6 = /* @__PURE__ */ dual(3, (self, key2, value) => {
  update3(self.backingMap, set2(key2, value));
  return self;
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric/registry.esm.js
var MetricRegistrySymbolKey = "effect/MetricRegistry";
var MetricRegistryTypeId = /* @__PURE__ */ Symbol.for(MetricRegistrySymbolKey);
var MetricRegistryImpl = class {
  [MetricRegistryTypeId] = MetricRegistryTypeId;
  map = empty19();
  snapshot() {
    const result = [];
    for (const [key2, hook] of this.map) {
      result.push(unsafeMake6(key2, hook.get()));
    }
    return fromIterable7(result);
  }
  get(key2) {
    const hook = pipe(this.map, get11(key2), getOrUndefined);
    if (hook == null) {
      if (isCounterKey(key2.keyType)) {
        return this.getCounter(key2);
      }
      if (isGaugeKey(key2.keyType)) {
        return this.getGauge(key2);
      }
      if (isFrequencyKey(key2.keyType)) {
        return this.getFrequency(key2);
      }
      if (isHistogramKey(key2.keyType)) {
        return this.getHistogram(key2);
      }
      if (isSummaryKey(key2.keyType)) {
        return this.getSummary(key2);
      }
      throw new Error("BUG: MetricRegistry.get - unknown MetricKeyType - please report an issue at https://github.com/Effect-TS/io/issues");
    } else {
      return hook;
    }
  }
  getCounter(key2) {
    let value = pipe(this.map, get11(key2), getOrUndefined);
    if (value == null) {
      const counter$1 = counter4(key2);
      if (!pipe(this.map, has4(key2))) {
        pipe(this.map, set6(key2, counter$1));
      }
      value = counter$1;
    }
    return value;
  }
  getFrequency(key2) {
    let value = pipe(this.map, get11(key2), getOrUndefined);
    if (value == null) {
      const frequency$1 = frequency3();
      if (!pipe(this.map, has4(key2))) {
        pipe(this.map, set6(key2, frequency$1));
      }
      value = frequency$1;
    }
    return value;
  }
  getGauge(key2) {
    let value = pipe(this.map, get11(key2), getOrUndefined);
    if (value == null) {
      const gauge$1 = gauge3(key2, key2.keyType.bigint ? BigInt(0) : 0);
      if (!pipe(this.map, has4(key2))) {
        pipe(this.map, set6(key2, gauge$1));
      }
      value = gauge$1;
    }
    return value;
  }
  getHistogram(key2) {
    let value = pipe(this.map, get11(key2), getOrUndefined);
    if (value == null) {
      const histogram$1 = histogram4(key2);
      if (!pipe(this.map, has4(key2))) {
        pipe(this.map, set6(key2, histogram$1));
      }
      value = histogram$1;
    }
    return value;
  }
  getSummary(key2) {
    let value = pipe(this.map, get11(key2), getOrUndefined);
    if (value == null) {
      const summary$1 = summary3(key2);
      if (!pipe(this.map, has4(key2))) {
        pipe(this.map, set6(key2, summary$1));
      }
      value = summary$1;
    }
    return value;
  }
};
var make29 = () => {
  return new MetricRegistryImpl();
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/metric.esm.js
var MetricSymbolKey = "effect/Metric";
var MetricTypeId = /* @__PURE__ */ Symbol.for(MetricSymbolKey);
var metricVariance = {
  _Type: (_) => _,
  _In: (_) => _,
  _Out: (_) => _
};
var globalMetricRegistry = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Metric/globalMetricRegistry"), () => make29());
var make30 = function(keyType, unsafeUpdate, unsafeValue) {
  const metric = Object.assign((effect3) => tap(effect3, (a) => sync(() => unsafeUpdate(a, empty10()))), {
    [MetricTypeId]: metricVariance,
    keyType,
    unsafeUpdate,
    unsafeValue,
    pipe() {
      return pipeArguments(this, arguments);
    }
  });
  return metric;
};
var counter5 = (name, options3) => fromMetricKey(counter2(name, options3));
var fromMetricKey = (key2) => {
  const hook = (extraTags) => {
    const fullKey = pipe(key2, taggedWithLabelSet(extraTags));
    return globalMetricRegistry.get(fullKey);
  };
  return make30(key2.keyType, (input, extraTags) => hook(extraTags).update(input), (extraTags) => hook(extraTags).get());
};
var histogram5 = (name, boundaries, description) => fromMetricKey(histogram2(name, boundaries, description));
var tagged = /* @__PURE__ */ dual(3, (self, key2, value) => taggedWithLabels(self, make8(make22(key2, value))));
var taggedWithLabels = /* @__PURE__ */ dual(2, (self, extraTagsIterable) => {
  const extraTags = isHashSet2(extraTagsIterable) ? extraTagsIterable : fromIterable7(extraTagsIterable);
  return make30(self.keyType, (input, extraTags1) => self.unsafeUpdate(input, pipe(extraTags, union4(extraTags1))), (extraTags1) => self.unsafeValue(pipe(extraTags, union4(extraTags1))));
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/request.esm.js
var complete = /* @__PURE__ */ dual(2, (self, result) => fiberRefGetWith(currentRequestMap, (map20) => sync(() => {
  if (map20.has(self)) {
    const entry = map20.get(self);
    if (!entry.state.completed) {
      entry.state.completed = true;
      deferredUnsafeDone(entry.result, result);
    }
  }
})));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/supervisor.esm.js
var SupervisorSymbolKey = "effect/Supervisor";
var SupervisorTypeId = /* @__PURE__ */ Symbol.for(SupervisorSymbolKey);
var supervisorVariance = {
  _T: (_) => _
};
var ProxySupervisor = class _ProxySupervisor {
  [SupervisorTypeId] = supervisorVariance;
  constructor(underlying, value0) {
    this.underlying = underlying;
    this.value0 = value0;
  }
  value() {
    return this.value0();
  }
  onStart(context6, effect3, parent, fiber) {
    this.underlying.onStart(context6, effect3, parent, fiber);
  }
  onEnd(value, fiber) {
    this.underlying.onEnd(value, fiber);
  }
  onEffect(fiber, effect3) {
    this.underlying.onEffect(fiber, effect3);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new _ProxySupervisor(this, () => pipe(this.value(), map9(f)));
  }
  zip(right3) {
    return new Zip(this, right3);
  }
};
var Zip = class _Zip {
  [SupervisorTypeId] = supervisorVariance;
  constructor(left3, right3) {
    this.left = left3;
    this.right = right3;
  }
  value() {
    return zip3(this.left.value(), this.right.value());
  }
  onStart(context6, effect3, parent, fiber) {
    this.left.onStart(context6, effect3, parent, fiber);
    this.right.onStart(context6, effect3, parent, fiber);
  }
  onEnd(value, fiber) {
    this.left.onEnd(value, fiber);
    this.right.onEnd(value, fiber);
  }
  onEffect(fiber, effect3) {
    this.left.onEffect(fiber, effect3);
    this.right.onEffect(fiber, effect3);
  }
  onSuspend(fiber) {
    this.left.onSuspend(fiber);
    this.right.onSuspend(fiber);
  }
  onResume(fiber) {
    this.left.onResume(fiber);
    this.right.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, () => pipe(this.value(), map9(f)));
  }
  zip(right3) {
    return new _Zip(this, right3);
  }
};
var Const = class {
  [SupervisorTypeId] = supervisorVariance;
  constructor(effect3) {
    this.effect = effect3;
  }
  value() {
    return this.effect;
  }
  onStart(_context, _effect, _parent, _fiber) {
  }
  onEnd(_value, _fiber) {
  }
  onEffect(_fiber, _effect) {
  }
  onSuspend(_fiber) {
  }
  onResume(_fiber) {
  }
  map(f) {
    return new ProxySupervisor(this, () => pipe(this.value(), map9(f)));
  }
  zip(right3) {
    return new Zip(this, right3);
  }
  onRun(execution, _fiber) {
    return execution();
  }
};
var fromEffect = (effect3) => {
  return new Const(effect3);
};
var none7 = /* @__PURE__ */ globalValue("effect/Supervisor/none", () => fromEffect(unit));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/supervisor/patch.esm.js
var OP_EMPTY3 = "Empty";
var OP_ADD_SUPERVISOR = "AddSupervisor";
var OP_REMOVE_SUPERVISOR = "RemoveSupervisor";
var OP_AND_THEN2 = "AndThen";
var empty22 = {
  _tag: OP_EMPTY3
};
var combine7 = (self, that) => {
  return {
    _tag: OP_AND_THEN2,
    first: self,
    second: that
  };
};
var patch7 = (self, supervisor) => {
  return patchLoop(supervisor, of2(self));
};
var patchLoop = (_supervisor, _patches) => {
  let supervisor = _supervisor;
  let patches = _patches;
  while (isNonEmpty(patches)) {
    const head7 = headNonEmpty2(patches);
    switch (head7._tag) {
      case OP_EMPTY3: {
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_ADD_SUPERVISOR: {
        supervisor = supervisor.zip(head7.supervisor);
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_REMOVE_SUPERVISOR: {
        supervisor = removeSupervisor(supervisor, head7.supervisor);
        patches = tailNonEmpty2(patches);
        break;
      }
      case OP_AND_THEN2: {
        patches = prepend2(head7.first)(prepend2(head7.second)(tailNonEmpty2(patches)));
        break;
      }
    }
  }
  return supervisor;
};
var removeSupervisor = (self, that) => {
  if (equals(self, that)) {
    return none7;
  } else {
    if (self instanceof Zip) {
      return removeSupervisor(self.left, that).zip(removeSupervisor(self.right, that));
    } else {
      return self;
    }
  }
};
var toSet2 = (self) => {
  if (equals(self, none7)) {
    return empty10();
  } else {
    if (self instanceof Zip) {
      return pipe(toSet2(self.left), union4(toSet2(self.right)));
    } else {
      return make8(self);
    }
  }
};
var diff6 = (oldValue, newValue) => {
  if (equals(oldValue, newValue)) {
    return empty22;
  }
  const oldSupervisors = toSet2(oldValue);
  const newSupervisors = toSet2(newValue);
  const added = pipe(newSupervisors, difference2(oldSupervisors), reduce6(empty22, (patch10, supervisor) => combine7(patch10, {
    _tag: OP_ADD_SUPERVISOR,
    supervisor
  })));
  const removed = pipe(oldSupervisors, difference2(newSupervisors), reduce6(empty22, (patch10, supervisor) => combine7(patch10, {
    _tag: OP_REMOVE_SUPERVISOR,
    supervisor
  })));
  return combine7(added, removed);
};
var differ2 = /* @__PURE__ */ make10({
  empty: empty22,
  patch: patch7,
  combine: combine7,
  diff: diff6
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Scheduler/dist/effect-Scheduler.esm.js
var PriorityBuckets = class {
  /**
   * @since 2.0.0
   */
  buckets = [];
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    let bucket = void 0;
    let index2;
    for (index2 = 0; index2 < this.buckets.length; index2++) {
      if (this.buckets[index2][0] <= priority) {
        bucket = this.buckets[index2];
      } else {
        break;
      }
    }
    if (bucket) {
      bucket[1].push(task);
    } else {
      const newBuckets = [];
      for (let i = 0; i < index2; i++) {
        newBuckets.push(this.buckets[i]);
      }
      newBuckets.push([priority, [task]]);
      for (let i = index2; i < this.buckets.length; i++) {
        newBuckets.push(this.buckets[i]);
      }
      this.buckets = newBuckets;
    }
  }
};
var MixedScheduler = class {
  /**
   * @since 2.0.0
   */
  running = false;
  /**
   * @since 2.0.0
   */
  tasks = new PriorityBuckets();
  constructor(maxNextTickBeforeTimer) {
    this.maxNextTickBeforeTimer = maxNextTickBeforeTimer;
  }
  /**
   * @since 2.0.0
   */
  starveInternal(depth) {
    const tasks = this.tasks.buckets;
    this.tasks.buckets = [];
    for (const [_, toRun] of tasks) {
      for (let i = 0; i < toRun.length; i++) {
        toRun[i]();
      }
    }
    if (this.tasks.buckets.length === 0) {
      this.running = false;
    } else {
      this.starve(depth);
    }
  }
  /**
   * @since 2.0.0
   */
  starve(depth = 0) {
    if (depth >= this.maxNextTickBeforeTimer) {
      set4(() => this.starveInternal(0), 0);
    } else {
      Promise.resolve(void 0).then(() => this.starveInternal(depth + 1));
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    this.tasks.scheduleTask(task, priority);
    if (!this.running) {
      this.running = true;
      this.starve();
    }
  }
};
var defaultScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/Scheduler/defaultScheduler"), () => new MixedScheduler(2048));
var SyncScheduler = class {
  /**
   * @since 2.0.0
   */
  tasks = new PriorityBuckets();
  /**
   * @since 2.0.0
   */
  deferred = false;
  /**
   * @since 2.0.0
   */
  scheduleTask(task, priority) {
    if (this.deferred) {
      defaultScheduler.scheduleTask(task, priority);
    } else {
      this.tasks.scheduleTask(task, priority);
    }
  }
  /**
   * @since 2.0.0
   */
  shouldYield(fiber) {
    return fiber.currentOpCount > fiber.getFiberRef(currentMaxOpsBeforeYield) ? fiber.getFiberRef(currentSchedulingPriority) : false;
  }
  /**
   * @since 2.0.0
   */
  flush() {
    while (this.tasks.buckets.length > 0) {
      const tasks = this.tasks.buckets;
      this.tasks.buckets = [];
      for (const [_, toRun] of tasks) {
        for (let i = 0; i < toRun.length; i++) {
          toRun[i]();
        }
      }
    }
    this.deferred = true;
  }
};
var currentScheduler = /* @__PURE__ */ globalValue(/* @__PURE__ */ Symbol.for("effect/FiberRef/currentScheduler"), () => fiberRefUnsafeMake(defaultScheduler));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/fiberRuntime.esm.js
var fiberStarted = /* @__PURE__ */ counter5("effect_fiber_started");
var fiberActive = /* @__PURE__ */ counter5("effect_fiber_active");
var fiberSuccesses = /* @__PURE__ */ counter5("effect_fiber_successes");
var fiberFailures = /* @__PURE__ */ counter5("effect_fiber_failures");
var fiberLifetimes = /* @__PURE__ */ tagged(/* @__PURE__ */ histogram5("effect_fiber_lifetimes", /* @__PURE__ */ exponential({
  start: 1,
  factor: 1.3,
  count: 100
})), "time_unit", "milliseconds");
var EvaluationSignalContinue = "Continue";
var EvaluationSignalDone = "Done";
var EvaluationSignalYieldNow = "Yield";
var runtimeFiberVariance = {
  _E: (_) => _,
  _A: (_) => _
};
var absurd = (_) => {
  throw new Error(`BUG: FiberRuntime - ${JSON.stringify(_)} - please report an issue at https://github.com/Effect-TS/io/issues`);
};
var contOpSuccess = {
  [OP_ON_SUCCESS]: (_, cont, value) => {
    return cont.i1(value);
  },
  ["OnStep"]: (_, cont, value) => {
    return cont.i1(exitSucceed(value));
  },
  [OP_ON_SUCCESS_AND_FAILURE]: (_, cont, value) => {
    return cont.i2(value);
  },
  [OP_REVERT_FLAGS]: (self, cont, value) => {
    self.patchRuntimeFlags(self._runtimeFlags, cont.patch);
    if (interruptible(self._runtimeFlags) && self.isInterrupted()) {
      return exitFailCause(self.getInterruptedCause());
    } else {
      return exitSucceed(value);
    }
  },
  [OP_WHILE]: (self, cont, value) => {
    cont.i2(value);
    if (cont.i0()) {
      self.pushStack(cont);
      return cont.i1();
    } else {
      return unit;
    }
  }
};
var drainQueueWhileRunningTable = {
  [OP_INTERRUPT_SIGNAL]: (self, runtimeFlags2, cur, message) => {
    self.processNewInterruptSignal(message.cause);
    return interruptible(runtimeFlags2) ? exitFailCause(message.cause) : cur;
  },
  [OP_RESUME]: (_self, _runtimeFlags, _cur, _message) => {
    throw new Error("It is illegal to have multiple concurrent run loops in a single fiber");
  },
  [OP_STATEFUL]: (self, runtimeFlags2, cur, message) => {
    message.onFiber(self, running2(runtimeFlags2));
    return cur;
  },
  [OP_YIELD_NOW]: (_self, _runtimeFlags, cur, _message) => {
    return flatMap7(yieldNow(), () => cur);
  }
};
var runBlockedRequests = (self) => forEachSequentialDiscard(flatten3(self), (requestsByRequestResolver) => forEachParUnboundedDiscard(sequentialCollectionToChunk(requestsByRequestResolver), ([dataSource, sequential4]) => {
  const map20 = /* @__PURE__ */ new Map();
  for (const block of sequential4) {
    for (const entry of block) {
      map20.set(entry.request, entry);
    }
  }
  return fiberRefLocally(invokeWithInterrupt(dataSource.runAll(sequential4), sequential4.flat()), currentRequestMap, map20);
}, false));
var FiberRuntime = class {
  [FiberTypeId] = fiberVariance;
  [RuntimeFiberTypeId] = runtimeFiberVariance;
  pipe() {
    return pipeArguments(this, arguments);
  }
  _queue = new Array();
  _children = null;
  _observers = new Array();
  _running = false;
  _stack = [];
  _asyncInterruptor = null;
  _asyncBlockingOn = null;
  _exitValue = null;
  _steps = [false];
  currentOpCount = 0;
  isYielding = false;
  constructor(fiberId2, fiberRefs0, runtimeFlags0) {
    this._runtimeFlags = runtimeFlags0;
    this._fiberId = fiberId2;
    this._fiberRefs = fiberRefs0;
    this._supervisor = this.getFiberRef(currentSupervisor);
    this._scheduler = this.getFiberRef(currentScheduler);
    if (runtimeMetrics(runtimeFlags0)) {
      const tags = this.getFiberRef(currentMetricLabels);
      fiberStarted.unsafeUpdate(1, tags);
      fiberActive.unsafeUpdate(1, tags);
    }
    this._tracer = get4(this.getFiberRef(currentServices), tracerTag);
  }
  /**
   * The identity of the fiber.
   */
  id() {
    return this._fiberId;
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background. This can be called to "kick off" execution of a fiber after
   * it has been created.
   */
  resume(effect3) {
    this.tell(resume(effect3));
  }
  /**
   * The status of the fiber.
   */
  status() {
    return this.ask((_, status2) => status2);
  }
  /**
   * Gets the fiber runtime flags.
   */
  runtimeFlags() {
    return this.ask((state, status2) => {
      if (isDone2(status2)) {
        return state._runtimeFlags;
      }
      return status2.runtimeFlags;
    });
  }
  /**
   * Returns the current `FiberScope` for the fiber.
   */
  scope() {
    return unsafeMake5(this);
  }
  /**
   * Retrieves the immediate children of the fiber.
   */
  children() {
    return this.ask((fiber) => Array.from(fiber.getChildren()));
  }
  /**
   * Gets the fiber's set of children.
   */
  getChildren() {
    if (this._children === null) {
      this._children = /* @__PURE__ */ new Set();
    }
    return this._children;
  }
  /**
   * Retrieves the interrupted cause of the fiber, which will be `Cause.empty`
   * if the fiber has not been interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getInterruptedCause() {
    return this.getFiberRef(currentInterruptedCause);
  }
  /**
   * Retrieves the whole set of fiber refs.
   */
  fiberRefs() {
    return this.ask((fiber) => fiber.getFiberRefs());
  }
  /**
   * Returns an effect that will contain information computed from the fiber
   * state and status while running on the fiber.
   *
   * This allows the outside world to interact safely with mutable fiber state
   * without locks or immutable data.
   */
  ask(f) {
    return suspend(() => {
      const deferred = deferredUnsafeMake(this._fiberId);
      this.tell(stateful((fiber, status2) => {
        deferredUnsafeDone(deferred, sync(() => f(fiber, status2)));
      }));
      return deferredAwait(deferred);
    });
  }
  /**
   * Adds a message to be processed by the fiber on the fiber.
   */
  tell(message) {
    this._queue.push(message);
    if (!this._running) {
      this._running = true;
      this.drainQueueLaterOnExecutor();
    }
  }
  await() {
    return async((resume2) => {
      const cb = (exit3) => resume2(succeed(exit3));
      this.tell(stateful((fiber, _) => {
        if (fiber._exitValue !== null) {
          cb(this._exitValue);
        } else {
          fiber.addObserver(cb);
        }
      }));
      return sync(() => this.tell(stateful((fiber, _) => {
        fiber.removeObserver(cb);
      })));
    }, this.id());
  }
  inheritAll() {
    return withFiberRuntime((parentFiber, parentStatus) => {
      const parentFiberId = parentFiber.id();
      const parentFiberRefs = parentFiber.getFiberRefs();
      const parentRuntimeFlags = parentStatus.runtimeFlags;
      const childFiberRefs = this.getFiberRefs();
      const updatedFiberRefs = joinAs(parentFiberRefs, parentFiberId, childFiberRefs);
      parentFiber.setFiberRefs(updatedFiberRefs);
      const updatedRuntimeFlags = parentFiber.getFiberRef(currentRuntimeFlags);
      const patch10 = pipe(
        diff3(parentRuntimeFlags, updatedRuntimeFlags),
        // Do not inherit WindDown or Interruption!
        exclude2(Interruption),
        exclude2(WindDown)
      );
      return updateRuntimeFlags(patch10);
    });
  }
  /**
   * Tentatively observes the fiber, but returns immediately if it is not
   * already done.
   */
  poll() {
    return sync(() => fromNullable(this._exitValue));
  }
  /**
   * Unsafely observes the fiber, but returns immediately if it is not
   * already done.
   */
  unsafePoll() {
    return this._exitValue;
  }
  /**
   * In the background, interrupts the fiber as if interrupted from the specified fiber.
   */
  interruptAsFork(fiberId2) {
    return sync(() => this.tell(interruptSignal(interrupt(fiberId2))));
  }
  /**
   * Adds an observer to the list of observers.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addObserver(observer) {
    if (this._exitValue !== null) {
      observer(this._exitValue);
    } else {
      this._observers.push(observer);
    }
  }
  /**
   * Removes the specified observer from the list of observers that will be
   * notified when the fiber exits.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeObserver(observer) {
    this._observers = this._observers.filter((o) => o !== observer);
  }
  /**
   * Retrieves all fiber refs of the fiber.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRefs() {
    this.setFiberRef(currentRuntimeFlags, this._runtimeFlags);
    return this._fiberRefs;
  }
  /**
   * Deletes the specified fiber ref.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  unsafeDeleteFiberRef(fiberRef) {
    this._fiberRefs = delete_(this._fiberRefs, fiberRef);
  }
  /**
   * Retrieves the state of the fiber ref, or else its initial value.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  getFiberRef(fiberRef) {
    if (this._fiberRefs.locals.has(fiberRef)) {
      return this._fiberRefs.locals.get(fiberRef)[0][1];
    }
    return fiberRef.initial;
  }
  /**
   * Sets the fiber ref to the specified value.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRef(fiberRef, value) {
    this._fiberRefs = updatedAs(this._fiberRefs, {
      fiberId: this._fiberId,
      fiberRef,
      value
    });
    this.refreshRefCache();
  }
  refreshRefCache() {
    this._tracer = get4(this.getFiberRef(currentServices), tracerTag);
    this._supervisor = this.getFiberRef(currentSupervisor);
    this._scheduler = this.getFiberRef(currentScheduler);
  }
  /**
   * Wholesale replaces all fiber refs of this fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  setFiberRefs(fiberRefs3) {
    this._fiberRefs = fiberRefs3;
    this.refreshRefCache();
  }
  /**
   * Adds a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addChild(child) {
    this.getChildren().add(child);
  }
  /**
   * Removes a reference to the specified fiber inside the children set.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  removeChild(child) {
    this.getChildren().delete(child);
  }
  /**
   * On the current thread, executes all messages in the fiber's inbox. This
   * method may return before all work is done, in the event the fiber executes
   * an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueOnCurrentThread() {
    let recurse = true;
    while (recurse) {
      let evaluationSignal = EvaluationSignalContinue;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        while (evaluationSignal === EvaluationSignalContinue) {
          evaluationSignal = this._queue.length === 0 ? EvaluationSignalDone : this.evaluateMessageWhileSuspended(this._queue.splice(0, 1)[0]);
        }
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
      }
      if (this._queue.length > 0 && !this._running) {
        this._running = true;
        if (evaluationSignal === EvaluationSignalYieldNow) {
          this.drainQueueLaterOnExecutor();
          recurse = false;
        } else {
          recurse = true;
        }
      } else {
        recurse = false;
      }
    }
  }
  /**
   * Schedules the execution of all messages in the fiber's inbox.
   *
   * This method will return immediately after the scheduling
   * operation is completed, but potentially before such messages have been
   * executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueLaterOnExecutor() {
    this._scheduler.scheduleTask(this.run, this.getFiberRef(currentSchedulingPriority));
  }
  /**
   * Drains the fiber's message queue while the fiber is actively running,
   * returning the next effect to execute, which may be the input effect if no
   * additional effect needs to be executed.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  drainQueueWhileRunning(runtimeFlags2, cur0) {
    let cur = cur0;
    while (this._queue.length > 0) {
      const message = this._queue.splice(0, 1)[0];
      cur = drainQueueWhileRunningTable[message._tag](this, runtimeFlags2, cur, message);
    }
    return cur;
  }
  /**
   * Determines if the fiber is interrupted.
   *
   * **NOTE**: This method is safe to invoke on any fiber, but if not invoked
   * on this fiber, then values derived from the fiber's state (including the
   * log annotations and log level) may not be up-to-date.
   */
  isInterrupted() {
    return !isEmpty4(this.getFiberRef(currentInterruptedCause));
  }
  /**
   * Adds an interruptor to the set of interruptors that are interrupting this
   * fiber.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  addInterruptedCause(cause2) {
    const oldSC = this.getFiberRef(currentInterruptedCause);
    this.setFiberRef(currentInterruptedCause, sequential(oldSC, cause2));
  }
  /**
   * Processes a new incoming interrupt signal.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  processNewInterruptSignal(cause2) {
    this.addInterruptedCause(cause2);
    this.sendInterruptSignalToAllChildren();
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  sendInterruptSignalToAllChildren() {
    if (this._children === null || this._children.size === 0) {
      return false;
    }
    let told = false;
    for (const child of this._children) {
      child.tell(interruptSignal(interrupt(this.id())));
      told = true;
    }
    return told;
  }
  /**
   * Interrupts all children of the current fiber, returning an effect that will
   * await the exit of the children. This method will return null if the fiber
   * has no children.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  interruptAllChildren() {
    if (this.sendInterruptSignalToAllChildren()) {
      const it = this._children.values();
      this._children = null;
      let isDone6 = false;
      const body = () => {
        const next2 = it.next();
        if (!next2.done) {
          return asUnit(next2.value.await());
        } else {
          return sync(() => {
            isDone6 = true;
          });
        }
      };
      return whileLoop({
        while: () => !isDone6,
        body,
        step: () => {
        }
      });
    }
    return null;
  }
  reportExitValue(exit3) {
    if (runtimeMetrics(this._runtimeFlags)) {
      const tags = this.getFiberRef(currentMetricLabels);
      fiberActive.unsafeUpdate(-1, tags);
      switch (exit3._tag) {
        case OP_SUCCESS: {
          fiberSuccesses.unsafeUpdate(1, tags);
          break;
        }
        case OP_FAILURE: {
          fiberFailures.unsafeUpdate(1, tags);
          break;
        }
      }
    }
    if (exit3._tag === "Failure") {
      const level = this.getFiberRef(currentUnhandledErrorLogLevel);
      if (!isInterruptedOnly(exit3.cause) && level._tag === "Some") {
        this.log("Fiber terminated with a non handled error", exit3.cause, level);
      }
    }
  }
  setExitValue(exit3) {
    this._exitValue = exit3;
    if (runtimeMetrics(this._runtimeFlags)) {
      const tags = this.getFiberRef(currentMetricLabels);
      const startTimeMillis = this.id().startTimeMillis;
      const endTimeMillis = (/* @__PURE__ */ new Date()).getTime();
      fiberLifetimes.unsafeUpdate(endTimeMillis - startTimeMillis, tags);
    }
    this.reportExitValue(exit3);
    for (let i = this._observers.length - 1; i >= 0; i--) {
      this._observers[i](exit3);
    }
  }
  getLoggers() {
    return this.getFiberRef(currentLoggers);
  }
  log(message, cause2, overrideLogLevel) {
    const logLevel = isSome2(overrideLogLevel) ? overrideLogLevel.value : this.getFiberRef(currentLogLevel);
    const minimumLogLevel = this.getFiberRef(currentMinimumLogLevel);
    if (greaterThan2(minimumLogLevel, logLevel)) {
      return;
    }
    const spans = this.getFiberRef(currentLogSpan);
    const annotations = this.getFiberRef(currentLogAnnotations);
    const loggers = this.getLoggers();
    const contextMap = this.getFiberRefs();
    if (size4(loggers) > 0) {
      const clockService = get4(this.getFiberRef(currentServices), clockTag);
      const date = new Date(clockService.unsafeCurrentTimeMillis());
      for (const logger of loggers) {
        logger.log({
          fiberId: this.id(),
          logLevel,
          message,
          cause: cause2,
          context: contextMap,
          spans,
          annotations,
          date
        });
      }
    }
  }
  /**
   * Evaluates a single message on the current thread, while the fiber is
   * suspended. This method should only be called while evaluation of the
   * fiber's effect is suspended due to an asynchronous operation.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateMessageWhileSuspended(message) {
    switch (message._tag) {
      case OP_YIELD_NOW: {
        return EvaluationSignalYieldNow;
      }
      case OP_INTERRUPT_SIGNAL: {
        this.processNewInterruptSignal(message.cause);
        if (this._asyncInterruptor !== null) {
          this._asyncInterruptor(exitFailCause(message.cause));
          this._asyncInterruptor = null;
        }
        return EvaluationSignalContinue;
      }
      case OP_RESUME: {
        this._asyncInterruptor = null;
        this._asyncBlockingOn = null;
        this.evaluateEffect(message.effect);
        return EvaluationSignalContinue;
      }
      case OP_STATEFUL: {
        message.onFiber(this, this._exitValue !== null ? done3 : suspended2(this._runtimeFlags, this._asyncBlockingOn));
        return EvaluationSignalContinue;
      }
      default: {
        return absurd(message);
      }
    }
  }
  /**
   * Evaluates an effect until completion, potentially asynchronously.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  evaluateEffect(effect0) {
    this._supervisor.onResume(this);
    try {
      let effect3 = interruptible(this._runtimeFlags) && this.isInterrupted() ? exitFailCause(this.getInterruptedCause()) : effect0;
      while (effect3 !== null) {
        try {
          const eff = effect3;
          const exit3 = this.runLoop(eff);
          this._runtimeFlags = pipe(this._runtimeFlags, enable2(WindDown));
          const interruption2 = this.interruptAllChildren();
          if (interruption2 !== null) {
            effect3 = flatMap7(interruption2, () => exit3);
          } else {
            if (this._queue.length === 0) {
              this.setExitValue(exit3);
            } else {
              this.tell(resume(exit3));
            }
            effect3 = null;
          }
        } catch (e) {
          if (isEffect(e)) {
            if (e._op === OP_YIELD) {
              if (cooperativeYielding(this._runtimeFlags)) {
                this.tell(yieldNow2());
                this.tell(resume(exitUnit));
                effect3 = null;
              } else {
                effect3 = exitUnit;
              }
            } else if (e._op === OP_ASYNC) {
              effect3 = null;
            }
          } else {
            throw e;
          }
        }
      }
    } finally {
      this._supervisor.onSuspend(this);
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on the current
   * thread. This can be called to "kick off" execution of a fiber after it has
   * been created, in hopes that the effect can be executed synchronously.
   *
   * This is not the normal way of starting a fiber, but it is useful when the
   * express goal of executing the fiber is to synchronously produce its exit.
   */
  start(effect3) {
    if (!this._running) {
      this._running = true;
      const prev = globalThis[currentFiberURI];
      globalThis[currentFiberURI] = this;
      try {
        this.evaluateEffect(effect3);
      } finally {
        this._running = false;
        globalThis[currentFiberURI] = prev;
        if (this._queue.length > 0) {
          this.drainQueueLaterOnExecutor();
        }
      }
    } else {
      this.tell(resume(effect3));
    }
  }
  /**
   * Begins execution of the effect associated with this fiber on in the
   * background, and on the correct thread pool. This can be called to "kick
   * off" execution of a fiber after it has been created, in hopes that the
   * effect can be executed synchronously.
   */
  startFork(effect3) {
    this.tell(resume(effect3));
  }
  /**
   * Takes the current runtime flags, patches them to return the new runtime
   * flags, and then makes any changes necessary to fiber state based on the
   * specified patch.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  patchRuntimeFlags(oldRuntimeFlags, patch$1) {
    const newRuntimeFlags = patch3(oldRuntimeFlags, patch$1);
    globalThis[currentFiberURI] = this;
    this._runtimeFlags = newRuntimeFlags;
    return newRuntimeFlags;
  }
  /**
   * Initiates an asynchronous operation, by building a callback that will
   * resume execution, and then feeding that callback to the registration
   * function, handling error cases and repeated resumptions appropriately.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  initiateAsync(runtimeFlags2, asyncRegister) {
    let alreadyCalled = false;
    const callback = (effect3) => {
      if (!alreadyCalled) {
        alreadyCalled = true;
        this.tell(resume(effect3));
      }
    };
    if (interruptible(runtimeFlags2)) {
      this._asyncInterruptor = callback;
    }
    try {
      asyncRegister(callback);
    } catch (e) {
      callback(failCause(die(e)));
    }
  }
  pushStack(cont) {
    this._stack.push(cont);
    if (cont._op === "OnStep") {
      this._steps.push(true);
    }
    if (cont._op === "RevertFlags") {
      this._steps.push(false);
    }
  }
  popStack() {
    const item = this._stack.pop();
    if (item) {
      if (item._op === "OnStep" || item._op === "RevertFlags") {
        this._steps.pop();
      }
      return item;
    }
    return;
  }
  getNextSuccessCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OP_ON_FAILURE) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  getNextFailCont() {
    let frame = this.popStack();
    while (frame) {
      if (frame._op !== OP_ON_SUCCESS && frame._op !== OP_WHILE) {
        return frame;
      }
      frame = this.popStack();
    }
  }
  [OP_TAG](op) {
    return map9(fiberRefGet(currentContext), (context6) => {
      try {
        return unsafeGet4(context6, op);
      } catch (e) {
        console.log(e);
        throw e;
      }
    });
  }
  ["Left"](op) {
    return fail2(op.left);
  }
  ["None"](_) {
    return fail2(NoSuchElementException());
  }
  ["Right"](op) {
    return exitSucceed(op.right);
  }
  ["Some"](op) {
    return exitSucceed(op.value);
  }
  [OP_SYNC](op) {
    const value = op.i0();
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, value);
    } else {
      throw exitSucceed(value);
    }
  }
  [OP_SUCCESS](op) {
    const oldCur = op;
    const cont = this.getNextSuccessCont();
    if (cont !== void 0) {
      if (!(cont._op in contOpSuccess)) {
        absurd(cont);
      }
      return contOpSuccess[cont._op](this, cont, oldCur.i0);
    } else {
      throw oldCur;
    }
  }
  [OP_FAILURE](op) {
    const cause2 = op.i0;
    const cont = this.getNextFailCont();
    if (cont !== void 0) {
      switch (cont._op) {
        case OP_ON_FAILURE:
        case OP_ON_SUCCESS_AND_FAILURE: {
          if (!(interruptible(this._runtimeFlags) && this.isInterrupted())) {
            return cont.i1(cause2);
          } else {
            return exitFailCause(stripFailures(cause2));
          }
        }
        case "OnStep": {
          if (!(interruptible(this._runtimeFlags) && this.isInterrupted())) {
            return cont.i1(exitFailCause(cause2));
          } else {
            return exitFailCause(stripFailures(cause2));
          }
        }
        case OP_REVERT_FLAGS: {
          this.patchRuntimeFlags(this._runtimeFlags, cont.patch);
          if (interruptible(this._runtimeFlags) && this.isInterrupted()) {
            return exitFailCause(sequential(cause2, this.getInterruptedCause()));
          } else {
            return exitFailCause(cause2);
          }
        }
        default: {
          absurd(cont);
        }
      }
    } else {
      throw exitFailCause(cause2);
    }
  }
  [OP_WITH_RUNTIME](op) {
    return op.i0(this, running2(this._runtimeFlags));
  }
  ["Blocked"](op) {
    if (this._steps[this._steps.length - 1]) {
      const nextOp = this.popStack();
      if (nextOp) {
        switch (nextOp._op) {
          case "OnStep": {
            return nextOp.i1(op);
          }
          case "OnSuccess": {
            return blocked(op.i0, flatMap7(op.i1, nextOp.i1));
          }
          case "OnSuccessAndFailure": {
            return blocked(op.i0, matchCauseEffect(op.i1, {
              onFailure: nextOp.i1,
              onSuccess: nextOp.i2
            }));
          }
          case "OnFailure": {
            return blocked(op.i0, catchAllCause(op.i1, nextOp.i1));
          }
          case "While": {
            return blocked(op.i0, flatMap7(op.i1, (a) => {
              nextOp.i2(a);
              if (nextOp.i0()) {
                return whileLoop({
                  while: nextOp.i0,
                  body: nextOp.i1,
                  step: nextOp.i2
                });
              }
              return unit;
            }));
          }
          case "RevertFlags": {
            this.pushStack(nextOp);
            break;
          }
        }
      }
    }
    return uninterruptibleMask((restore) => flatMap7(fork(runRequestBlock(op.i0)), () => restore(op.i1)));
  }
  ["RunBlocked"](op) {
    return runBlockedRequests(op.i0);
  }
  [OP_UPDATE_RUNTIME_FLAGS](op) {
    const updateFlags = op.i0;
    const oldRuntimeFlags = this._runtimeFlags;
    const newRuntimeFlags = patch3(oldRuntimeFlags, updateFlags);
    if (interruptible(newRuntimeFlags) && this.isInterrupted()) {
      return exitFailCause(this.getInterruptedCause());
    } else {
      this.patchRuntimeFlags(this._runtimeFlags, updateFlags);
      if (op.i1) {
        const revertFlags = diff3(newRuntimeFlags, oldRuntimeFlags);
        this.pushStack(new RevertFlags(revertFlags, op));
        return op.i1(oldRuntimeFlags);
      } else {
        return exitUnit;
      }
    }
  }
  [OP_ON_SUCCESS](op) {
    this.pushStack(op);
    return op.i0;
  }
  ["OnStep"](op) {
    this.pushStack(op);
    return op.i0;
  }
  [OP_ON_FAILURE](op) {
    this.pushStack(op);
    return op.i0;
  }
  [OP_ON_SUCCESS_AND_FAILURE](op) {
    this.pushStack(op);
    return op.i0;
  }
  [OP_ASYNC](op) {
    this._asyncBlockingOn = op.i1;
    this.initiateAsync(this._runtimeFlags, op.i0);
    throw op;
  }
  [OP_YIELD](op) {
    this.isYielding = false;
    throw op;
  }
  [OP_WHILE](op) {
    const check = op.i0;
    const body = op.i1;
    if (check()) {
      this.pushStack(op);
      return body();
    } else {
      return exitUnit;
    }
  }
  [OP_COMMIT](op) {
    return op.commit();
  }
  /**
   * The main run-loop for evaluating effects.
   *
   * **NOTE**: This method must be invoked by the fiber itself.
   */
  runLoop(effect0) {
    let cur = effect0;
    this.currentOpCount = 0;
    while (true) {
      if ((this._runtimeFlags & OpSupervision) !== 0) {
        this._supervisor.onEffect(this, cur);
      }
      if (this._queue.length > 0) {
        cur = this.drainQueueWhileRunning(this._runtimeFlags, cur);
      }
      if (!this.isYielding) {
        this.currentOpCount += 1;
        const shouldYield = this._scheduler.shouldYield(this);
        if (shouldYield !== false) {
          this.isYielding = true;
          this.currentOpCount = 0;
          const oldCur = cur;
          cur = flatMap7(yieldNow({
            priority: shouldYield
          }), () => oldCur);
        }
      }
      try {
        if (!("_op" in cur)) {
          console.log(cur);
        }
        if (!(cur._op in this)) {
          if (typeof cur === "function") {
            console.log(cur());
          }
          absurd(cur);
        }
        cur = this._tracer.context(
          // @ts-expect-error
          () => this[cur._op](cur),
          this
        );
      } catch (e) {
        if (isEffect(e)) {
          if (e._op === OP_YIELD || e._op === OP_ASYNC) {
            throw e;
          }
          if (e._op === OP_SUCCESS || e._op === OP_FAILURE) {
            return e;
          }
        } else {
          if (isEffectError(e)) {
            cur = exitFailCause(e.cause);
          } else if (isInterruptedException(e)) {
            cur = exitFailCause(sequential(die(e), interrupt(none4)));
          } else {
            cur = exitFailCause(die(e));
          }
        }
      }
    }
  }
  run = () => {
    this.drainQueueOnCurrentThread();
  };
};
var currentMinimumLogLevel = /* @__PURE__ */ fiberRefUnsafeMake(/* @__PURE__ */ fromLiteral("Info"));
var getConsole = (refs) => {
  const defaultServicesValue = getOrDefault2(refs, currentServices);
  const cnsl = get4(defaultServicesValue, consoleTag);
  return cnsl.unsafe;
};
var defaultLogger = /* @__PURE__ */ makeLogger((options3) => {
  const formatted = stringLogger.log(options3);
  getConsole(options3.context).log(formatted);
});
var tracerLogger = /* @__PURE__ */ makeLogger(({
  annotations,
  cause: cause2,
  context: context6,
  fiberId: fiberId2,
  logLevel,
  message
}) => {
  const span = flatMap(get8(context6, currentTracerSpan), head3);
  const clockService = map(get8(context6, currentServices), (_) => get4(_, clockTag));
  if (span._tag === "None" || span.value._tag === "ExternalSpan" || clockService._tag === "None") {
    return;
  }
  const attributes = Object.fromEntries(map5(annotations, (value) => serializeUnknown(value)));
  attributes["effect.fiberId"] = threadName2(fiberId2);
  attributes["effect.logLevel"] = logLevel.label;
  if (cause2 !== null && cause2._tag !== "Empty") {
    attributes["effect.cause"] = pretty(cause2);
  }
  span.value.event(String(message), clockService.value.unsafeCurrentTimeNanos(), attributes);
});
var currentLoggers = /* @__PURE__ */ fiberRefUnsafeMakeHashSet(/* @__PURE__ */ make8(defaultLogger, tracerLogger));
var acquireRelease = /* @__PURE__ */ dual((args) => isEffect(args[0]), (acquire, release) => {
  return uninterruptible(tap(acquire, (a) => addFinalizer((exit3) => release(a, exit3))));
});
var addFinalizer = (finalizer2) => withFiberRuntime((runtime4) => {
  const acquireRefs = runtime4.getFiberRefs();
  const acquireFlags = runtime4._runtimeFlags;
  return flatMap7(scope, (scope4) => scopeAddFinalizerExit(scope4, (exit3) => withFiberRuntime((runtimeFinalizer) => {
    const preRefs = runtimeFinalizer.getFiberRefs();
    const preFlags = runtimeFinalizer._runtimeFlags;
    const patchRefs = diff5(preRefs, acquireRefs);
    const patchFlags = diff3(preFlags, acquireFlags);
    const inverseRefs = diff5(acquireRefs, preRefs);
    runtimeFinalizer.setFiberRefs(patch6(patchRefs, runtimeFinalizer.id(), acquireRefs));
    return ensuring(withRuntimeFlags(finalizer2(exit3), patchFlags), sync(() => {
      runtimeFinalizer.setFiberRefs(patch6(inverseRefs, runtimeFinalizer.id(), runtimeFinalizer.getFiberRefs()));
    }));
  })));
});
var allResolveInput = (input) => {
  if (Array.isArray(input) || isIterable(input)) {
    return [input, none2()];
  }
  const keys5 = Object.keys(input);
  const size12 = keys5.length;
  return [keys5.map((k) => input[k]), some2((values3) => {
    const res = {};
    for (let i = 0; i < size12; i++) {
      res[keys5[i]] = values3[i];
    }
    return res;
  })];
};
var allValidate = (effects, reconcile, options3) => {
  const eitherEffects = [];
  for (const effect3 of effects) {
    eitherEffects.push(either2(effect3));
  }
  return flatMap7(forEachOptions(eitherEffects, identity, {
    concurrency: options3?.concurrency,
    batching: options3?.batching
  }), (eithers) => {
    const none$1 = none2();
    const size12 = eithers.length;
    const errors = new Array(size12);
    const successes = new Array(size12);
    let errored = false;
    for (let i = 0; i < size12; i++) {
      const either5 = eithers[i];
      if (either5._tag === "Left") {
        errors[i] = some2(either5.left);
        errored = true;
      } else {
        successes[i] = either5.right;
        errors[i] = none$1;
      }
    }
    if (errored) {
      return reconcile._tag === "Some" ? fail2(reconcile.value(errors)) : fail2(errors);
    } else if (options3?.discard) {
      return unit;
    }
    return reconcile._tag === "Some" ? succeed(reconcile.value(successes)) : succeed(successes);
  });
};
var allEither = (effects, reconcile, options3) => {
  const eitherEffects = [];
  for (const effect3 of effects) {
    eitherEffects.push(either2(effect3));
  }
  if (options3?.discard) {
    return forEachOptions(eitherEffects, identity, {
      concurrency: options3?.concurrency,
      batching: options3?.batching,
      discard: true
    });
  }
  return map9(forEachOptions(eitherEffects, identity, {
    concurrency: options3?.concurrency,
    batching: options3?.batching
  }), (eithers) => reconcile._tag === "Some" ? reconcile.value(eithers) : eithers);
};
var all4 = (arg, options3) => {
  const [effects, reconcile] = allResolveInput(arg);
  if (options3?.mode === "validate") {
    return allValidate(effects, reconcile, options3);
  } else if (options3?.mode === "either") {
    return allEither(effects, reconcile, options3);
  }
  return reconcile._tag === "Some" ? map9(forEachOptions(effects, identity, options3), reconcile.value) : forEachOptions(effects, identity, options3);
};
var forEachOptions = /* @__PURE__ */ dual((args) => isIterable(args[0]), (self, f, options3) => withFiberRuntime((r) => {
  const requestBatchingEnabled = options3?.batching === true || options3?.batching === "inherit" && r.getFiberRef(currentRequestBatching);
  if (options3?.discard) {
    return match7(options3, () => finalizersMask(sequential3)((restore) => requestBatchingEnabled ? forEachBatchedDiscard(self, (a, i) => restore(f(a, i))) : forEachSequentialDiscard(self, (a, i) => restore(f(a, i)))), () => finalizersMask(parallel3)((restore) => forEachParUnboundedDiscard(self, (a, i) => restore(f(a, i)), requestBatchingEnabled)), (n) => finalizersMask(parallelN2(n))((restore) => forEachParNDiscard(self, n, (a, i) => restore(f(a, i)), requestBatchingEnabled)));
  }
  return match7(options3, () => finalizersMask(sequential3)((restore) => requestBatchingEnabled ? forEachParN(self, 1, (a, i) => restore(f(a, i)), true) : forEachSequential(self, (a, i) => restore(f(a, i)))), () => finalizersMask(parallel3)((restore) => forEachParUnbounded(self, (a, i) => restore(f(a, i)), requestBatchingEnabled)), (n) => finalizersMask(parallelN2(n))((restore) => forEachParN(self, n, (a, i) => restore(f(a, i)), requestBatchingEnabled)));
}));
var forEachParUnbounded = (self, f, batching) => suspend(() => {
  const as5 = fromIterable2(self);
  const array6 = new Array(as5.length);
  const fn = (a, i) => flatMap7(f(a, i), (b) => sync(() => array6[i] = b));
  return zipRight(forEachParUnboundedDiscard(as5, fn, batching), succeed(array6));
});
var forEachBatchedDiscard = (self, f) => suspend(() => {
  const as5 = fromIterable2(self);
  const size12 = as5.length;
  if (size12 === 0) {
    return unit;
  } else if (size12 === 1) {
    return asUnit(f(as5[0], 0));
  }
  const effects = as5.map(f);
  const blocked$1 = new Array();
  const loop2 = (i) => i === effects.length ? suspend(() => {
    if (blocked$1.length > 0) {
      const requests = blocked$1.map((b) => b.i0).reduce(par);
      return blocked(requests, forEachBatchedDiscard(blocked$1.map((b) => b.i1), identity));
    }
    return unit;
  }) : flatMapStep(effects[i], (s) => {
    if (s._op === "Blocked") {
      blocked$1.push(s);
      return loop2(i + 1);
    } else if (s._op === "Failure") {
      return suspend(() => {
        if (blocked$1.length > 0) {
          const requests = blocked$1.map((b) => b.i0).reduce(par);
          return blocked(requests, flatMap7(forEachBatchedDiscard(blocked$1.map((b) => b.i1), identity), () => s));
        }
        return unit;
      });
    } else {
      return loop2(i + 1);
    }
  });
  return loop2(0);
});
var forEachParUnboundedDiscard = (self, f, batching) => suspend(() => {
  const as5 = fromIterable2(self);
  const size12 = as5.length;
  if (size12 === 0) {
    return unit;
  } else if (size12 === 1) {
    return asUnit(f(as5[0], 0));
  }
  return uninterruptibleMask((restore) => {
    const deferred = deferredUnsafeMake(none4);
    let ref = 0;
    const residual = [];
    const joinOrder = [];
    const process2 = transplant((graft) => forEachSequential(as5, (a, i) => pipe(graft(pipe(suspend(() => restore((batching ? step2 : exit)(f(a, i)))), flatMap7((exit3) => {
      switch (exit3._op) {
        case "Failure": {
          if (residual.length > 0) {
            const requests = residual.map((blocked2) => blocked2.i0).reduce(par);
            const _continue3 = forEachParUnboundedDiscard(residual, (blocked2) => blocked2.i1, batching);
            return blocked(requests, matchCauseEffect(_continue3, {
              onFailure: (cause2) => zipRight(deferredFail(deferred, void 0), failCause(parallel(cause2, exit3.cause))),
              onSuccess: () => zipRight(deferredFail(deferred, void 0), failCause(exit3.cause))
            }));
          }
          return zipRight(deferredFail(deferred, void 0), failCause(exit3.cause));
        }
        default: {
          if (exit3._op === "Blocked") {
            residual.push(exit3);
          }
          if (ref + 1 === size12) {
            if (residual.length > 0) {
              const requests = residual.map((blocked2) => blocked2.i0).reduce(par);
              const _continue3 = forEachParUnboundedDiscard(residual, (blocked2) => blocked2.i1, batching);
              return deferredSucceed(deferred, blocked(requests, _continue3));
            } else {
              deferredUnsafeDone(deferred, exitSucceed(exitUnit));
            }
          } else {
            ref = ref + 1;
          }
          return unit;
        }
      }
    }))), forkDaemon, map9((fiber) => {
      fiber.addObserver(() => {
        joinOrder.push(fiber);
      });
      return fiber;
    }))));
    return flatMap7(process2, (fibers) => matchCauseEffect(restore(deferredAwait(deferred)), {
      onFailure: (cause2) => flatMap7(forEachParUnbounded(fibers, interruptFiber, batching), (exits) => {
        const exit3 = exitCollectAll(exits, {
          parallel: true
        });
        if (exit3._tag === "Some" && exitIsFailure(exit3.value)) {
          return failCause(parallel(stripFailures(cause2), exit3.value.i0));
        } else {
          return failCause(stripFailures(cause2));
        }
      }),
      onSuccess: (rest) => flatMap7(rest, () => forEachSequentialDiscard(joinOrder, (f2) => f2.inheritAll()))
    }));
  });
});
var forEachParN = (self, n, f, batching) => suspend(() => {
  const as5 = fromIterable2(self);
  const array6 = new Array(as5.length);
  const fn = (a, i) => map9(f(a, i), (b) => array6[i] = b);
  return zipRight(forEachParNDiscard(as5, n, fn, batching), succeed(array6));
});
var forEachParNDiscard = (self, n, f, batching) => suspend(() => {
  let i = 0;
  const iterator = self[Symbol.iterator]();
  const residual = [];
  const worker = flatMap7(sync(() => iterator.next()), (next2) => next2.done ? unit : flatMap7((batching ? step2 : exit)(asUnit(f(next2.value, i++))), (res) => {
    switch (res._op) {
      case "Blocked": {
        residual.push(res);
        return worker;
      }
      case "Failure": {
        return res;
      }
      case "Success":
        return worker;
    }
  }));
  const effects = [];
  for (let i2 = 0; i2 < n; i2++) {
    effects.push(worker);
  }
  return flatMap7(exit(forEachParUnboundedDiscard(effects, identity, batching)), (exit3) => {
    if (residual.length === 0) {
      return exit3;
    }
    const requests = residual.map((blocked2) => blocked2.i0).reduce(par);
    const _continue3 = forEachParNDiscard(residual, n, (blocked2) => blocked2.i1, batching);
    if (exit3._tag === "Failure") {
      return blocked(requests, matchCauseEffect(_continue3, {
        onFailure: (cause2) => exitFailCause(parallel(exit3.cause, cause2)),
        onSuccess: () => exit3
      }));
    }
    return blocked(requests, _continue3);
  });
});
var fork = (self) => withFiberRuntime((state, status2) => succeed(unsafeFork(self, state, status2.runtimeFlags)));
var forkDaemon = (self) => forkWithScopeOverride(self, globalScope);
var unsafeFork = (effect3, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childFiber = unsafeMakeChildFiber(effect3, parentFiber, parentRuntimeFlags, overrideScope);
  childFiber.resume(effect3);
  return childFiber;
};
var unsafeMakeChildFiber = (effect3, parentFiber, parentRuntimeFlags, overrideScope = null) => {
  const childId = unsafeMake2();
  const parentFiberRefs = parentFiber.getFiberRefs();
  const childFiberRefs = forkAs(parentFiberRefs, childId);
  const childFiber = new FiberRuntime(childId, childFiberRefs, parentRuntimeFlags);
  const childContext = getOrDefault(childFiberRefs, currentContext);
  const supervisor = childFiber._supervisor;
  supervisor.onStart(childContext, effect3, some2(parentFiber), childFiber);
  childFiber.addObserver((exit3) => supervisor.onEnd(exit3, childFiber));
  const parentScope = overrideScope !== null ? overrideScope : pipe(parentFiber.getFiberRef(currentForkScopeOverride), getOrElse(() => parentFiber.scope()));
  parentScope.add(parentRuntimeFlags, childFiber);
  return childFiber;
};
var forkWithScopeOverride = (self, scopeOverride) => withFiberRuntime((parentFiber, parentStatus) => succeed(unsafeFork(self, parentFiber, parentStatus.runtimeFlags, scopeOverride)));
var parallelFinalizers = (self) => contextWithEffect((context6) => match(getOption2(context6, scopeTag), {
  onNone: () => self,
  onSome: (scope4) => {
    switch (scope4.strategy._tag) {
      case "Parallel":
        return self;
      case "Sequential":
      case "ParallelN":
        return flatMap7(scopeFork(scope4, parallel3), (inner) => scopeExtend(self, inner));
    }
  }
}));
var parallelNFinalizers = (parallelism) => (self) => contextWithEffect((context6) => match(getOption2(context6, scopeTag), {
  onNone: () => self,
  onSome: (scope4) => {
    if (scope4.strategy._tag === "ParallelN" && scope4.strategy.parallelism === parallelism) {
      return self;
    }
    return flatMap7(scopeFork(scope4, parallelN2(parallelism)), (inner) => scopeExtend(self, inner));
  }
}));
var finalizersMask = (strategy) => (self) => contextWithEffect((context6) => match(getOption2(context6, scopeTag), {
  onNone: () => self(identity),
  onSome: (scope4) => {
    const patch10 = strategy._tag === "Parallel" ? parallelFinalizers : strategy._tag === "Sequential" ? sequentialFinalizers : parallelNFinalizers(strategy.parallelism);
    switch (scope4.strategy._tag) {
      case "Parallel":
        return patch10(self(parallelFinalizers));
      case "Sequential":
        return patch10(self(sequentialFinalizers));
      case "ParallelN":
        return patch10(self(parallelNFinalizers(scope4.strategy.parallelism)));
    }
  }
}));
var scopeWith = (f) => flatMap7(scopeTag, f);
var scopedEffect = (effect3) => flatMap7(scopeMake(), (scope4) => scopeUse(scope4)(effect3));
var sequentialFinalizers = (self) => contextWithEffect((context6) => match(getOption2(context6, scopeTag), {
  onNone: () => self,
  onSome: (scope4) => {
    switch (scope4.strategy._tag) {
      case "Sequential":
        return self;
      case "Parallel":
      case "ParallelN":
        return flatMap7(scopeFork(scope4, sequential3), (inner) => scopeExtend(self, inner));
    }
  }
}));
var zipOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, options3) => zipWithOptions(self, that, (a, b) => [a, b], options3));
var zipRightOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, options3) => zipWithOptions(self, that, (_, b) => b, options3));
var zipWithOptions = /* @__PURE__ */ dual((args) => isEffect(args[1]), (self, that, f, options3) => map9(all4([self, that], {
  concurrency: options3?.concurrent ? 2 : 1,
  batching: options3?.batching
}), ([a, a2]) => f(a, a2)));
var releaseMapReleaseAll = (strategy, exit$1) => (self) => suspend(() => {
  switch (self.state._tag) {
    case "Exited": {
      return unit;
    }
    case "Running": {
      const finalizersMap = self.state.finalizers;
      const update6 = self.state.update;
      const finalizers = Array.from(finalizersMap.keys()).sort((a, b) => b - a).map((key2) => finalizersMap.get(key2));
      self.state = {
        _tag: "Exited",
        nextKey: self.state.nextKey,
        exit: exit$1,
        update: update6
      };
      return isSequential(strategy) ? pipe(finalizers, forEachSequential((fin) => exit(update6(fin)(exit$1))), flatMap7((results) => pipe(exitCollectAll(results), map(exitAsUnit), getOrElse(() => exitUnit)))) : isParallel(strategy) ? pipe(forEachParUnbounded(finalizers, (fin) => exit(update6(fin)(exit$1)), false), flatMap7((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map(exitAsUnit), getOrElse(() => exitUnit)))) : pipe(forEachParN(finalizers, strategy.parallelism, (fin) => exit(update6(fin)(exit$1)), false), flatMap7((results) => pipe(exitCollectAll(results, {
        parallel: true
      }), map(exitAsUnit), getOrElse(() => exitUnit))));
    }
  }
});
var scopeTag = /* @__PURE__ */ Tag(ScopeTypeId);
var scope = scopeTag;
var scopeMake = (strategy = sequential2) => map9(releaseMapMake, (rm) => ({
  [ScopeTypeId]: ScopeTypeId,
  [CloseableScopeTypeId]: CloseableScopeTypeId,
  strategy,
  pipe() {
    return pipeArguments(this, arguments);
  },
  fork: (strategy2) => uninterruptible(pipe(scopeMake(strategy2), flatMap7((scope4) => pipe(releaseMapAdd(rm, (exit3) => scopeClose(scope4, exit3)), tap((fin) => scopeAddFinalizerExit(scope4, fin)), as(scope4))))),
  close: (exit3) => asUnit(releaseMapReleaseAll(strategy, exit3)(rm)),
  addFinalizer: (fin) => asUnit(releaseMapAdd(fin)(rm))
}));
var scopeExtend = /* @__PURE__ */ dual(2, (effect3, scope4) => mapInputContext(
  effect3,
  // @ts-expect-error
  merge3(make4(scopeTag, scope4))
));
var scopeUse = /* @__PURE__ */ dual(2, (effect3, scope4) => pipe(effect3, scopeExtend(scope4), onExit((exit3) => scope4.close(exit3))));
var fiberRefUnsafeMakeSupervisor = (initial) => fiberRefUnsafeMakePatch(initial, {
  differ: differ2,
  fork: empty22
});
var currentRuntimeFlags = /* @__PURE__ */ fiberRefUnsafeMakeRuntimeFlags(none5);
var currentSupervisor = /* @__PURE__ */ fiberRefUnsafeMakeSupervisor(none7);
var raceWith = /* @__PURE__ */ dual(3, (self, other, options3) => raceFibersWith(self, other, {
  onSelfWin: (winner, loser) => flatMap7(winner.await(), (exit3) => {
    switch (exit3._tag) {
      case OP_SUCCESS: {
        return flatMap7(winner.inheritAll(), () => options3.onSelfDone(exit3, loser));
      }
      case OP_FAILURE: {
        return options3.onSelfDone(exit3, loser);
      }
    }
  }),
  onOtherWin: (winner, loser) => flatMap7(winner.await(), (exit3) => {
    switch (exit3._tag) {
      case OP_SUCCESS: {
        return flatMap7(winner.inheritAll(), () => options3.onOtherDone(exit3, loser));
      }
      case OP_FAILURE: {
        return options3.onOtherDone(exit3, loser);
      }
    }
  })
}));
var race = /* @__PURE__ */ dual(2, (self, that) => fiberIdWith((parentFiberId) => raceWith(self, that, {
  onSelfDone: (exit3, right3) => exitMatchEffect(exit3, {
    onFailure: (cause2) => pipe(join2(right3), mapErrorCause((cause22) => parallel(cause2, cause22))),
    onSuccess: (value) => pipe(right3, interruptAsFiber(parentFiberId), as(value))
  }),
  onOtherDone: (exit3, left3) => exitMatchEffect(exit3, {
    onFailure: (cause2) => pipe(join2(left3), mapErrorCause((cause22) => parallel(cause22, cause2))),
    onSuccess: (value) => pipe(left3, interruptAsFiber(parentFiberId), as(value))
  })
})));
var raceFibersWith = /* @__PURE__ */ dual(3, (self, other, options3) => withFiberRuntime((parentFiber, parentStatus) => {
  const parentRuntimeFlags = parentStatus.runtimeFlags;
  const raceIndicator = make11(true);
  const leftFiber = unsafeMakeChildFiber(self, parentFiber, parentRuntimeFlags, options3.selfScope);
  const rightFiber = unsafeMakeChildFiber(other, parentFiber, parentRuntimeFlags, options3.otherScope);
  return async((cb) => {
    leftFiber.addObserver(() => completeRace(leftFiber, rightFiber, options3.onSelfWin, raceIndicator, cb));
    rightFiber.addObserver(() => completeRace(rightFiber, leftFiber, options3.onOtherWin, raceIndicator, cb));
    leftFiber.startFork(self);
    rightFiber.startFork(other);
  }, combine5(leftFiber.id(), rightFiber.id()));
}));
var completeRace = (winner, loser, cont, ab, cb) => {
  if (compareAndSet(true, false)(ab)) {
    cb(cont(winner, loser));
  }
};
var ensuring = /* @__PURE__ */ dual(2, (self, finalizer2) => uninterruptibleMask((restore) => matchCauseEffect(restore(self), {
  onFailure: (cause1) => matchCauseEffect(finalizer2, {
    onFailure: (cause2) => failCause(sequential(cause1, cause2)),
    onSuccess: () => failCause(cause1)
  }),
  onSuccess: (a) => as(finalizer2, a)
})));
var invokeWithInterrupt = (dataSource, all6) => fiberIdWith((id2) => flatMap7(flatMap7(forkDaemon(interruptible2(dataSource)), (processing) => async((cb) => {
  const counts = all6.map((_) => _.listeners.count);
  const checkDone = () => {
    if (counts.every((count) => count === 0)) {
      cleanup.forEach((f) => f());
      cb(interruptFiber(processing));
    }
  };
  processing.addObserver((exit3) => {
    cleanup.forEach((f) => f());
    cb(exit3);
  });
  const cleanup = all6.map((r, i) => {
    const observer = (count) => {
      counts[i] = count;
      checkDone();
    };
    r.listeners.addObserver(observer);
    return () => r.listeners.removeObserver(observer);
  });
  checkDone();
  return sync(() => {
    cleanup.forEach((f) => f());
  });
})), () => suspend(() => {
  const residual = all6.flatMap((entry) => {
    if (!entry.state.completed) {
      return [entry];
    }
    return [];
  });
  return forEachSequentialDiscard(residual, (entry) => complete(entry.request, exitInterrupt(id2)));
})));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/schedule/interval.esm.js
var IntervalSymbolKey = "effect/ScheduleInterval";
var IntervalTypeId = /* @__PURE__ */ Symbol.for(IntervalSymbolKey);
var empty24 = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/ScheduleInterval/dist/effect-ScheduleInterval.esm.js
var empty25 = empty24;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/schedule/intervals.esm.js
var start = (self) => {
  return pipe(self.intervals, head2, getOrElse(() => empty25)).startMillis;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/ScheduleIntervals/dist/effect-ScheduleIntervals.esm.js
var start2 = start;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/schedule/decision.esm.js
var OP_DONE2 = "Done";
var isDone4 = (self) => {
  return self._tag === OP_DONE2;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/ScheduleDecision/dist/effect-ScheduleDecision.esm.js
var isDone5 = isDone4;
var ScheduleDriverSymbolKey = "effect/ScheduleDriver";
var ScheduleDriverTypeId = /* @__PURE__ */ Symbol.for(ScheduleDriverSymbolKey);
var scheduleDriverVariance = {
  _Env: (_) => _,
  _In: (_) => _,
  _Out: (_) => _
};
var ScheduleDriverImpl = class {
  [ScheduleDriverTypeId] = scheduleDriverVariance;
  constructor(schedule2, ref) {
    this.schedule = schedule2;
    this.ref = ref;
  }
  state() {
    return map9(get9(this.ref), (tuple2) => tuple2[1]);
  }
  last() {
    return flatMap7(get9(this.ref), ([element, _]) => {
      switch (element._tag) {
        case "None": {
          return failSync(() => NoSuchElementException());
        }
        case "Some": {
          return succeed(element.value);
        }
      }
    });
  }
  reset() {
    return set5(this.ref, [none2(), this.schedule.initial]);
  }
  next(input) {
    return pipe(map9(get9(this.ref), (tuple2) => tuple2[1]), flatMap7((state) => pipe(currentTimeMillis2, flatMap7((now) => pipe(suspend(() => this.schedule.step(now, input, state)), flatMap7(([state2, out, decision]) => isDone5(decision) ? pipe(set5(this.ref, [some2(out), state2]), zipRight(fail2(none2()))) : pipe(set5(this.ref, [some2(out), state2]), zipRight(sleep3(millis(start2(decision.intervals) - now))), as(out))))))));
  }
};
var driver = (self) => pipe(make24([none2(), self.initial]), map9((ref) => new ScheduleDriverImpl(self, ref)));
var repeatUntil_Effect = /* @__PURE__ */ dual(2, (self, f) => repeatUntilEffect_Effect(self, (a) => sync(() => f(a))));
var repeatUntilEffect_Effect = /* @__PURE__ */ dual(2, (self, f) => flatMap7(self, (a) => flatMap7(f(a), (result) => result ? succeed(a) : flatMap7(yieldNow(), () => repeatUntilEffect_Effect(self, f)))));
var repeatWhile_Effect = /* @__PURE__ */ dual(2, (self, f) => repeatWhileEffect_Effect(self, (a) => sync(() => f(a))));
var repeatWhileEffect_Effect = /* @__PURE__ */ dual(2, (self, f) => repeatUntilEffect_Effect(self, (a) => negate(f(a))));
var retry_Effect = /* @__PURE__ */ dual(2, (self, policy) => retryOrElse_Effect(self, policy, (e, _) => fail2(e)));
var retryOrElse_Effect = /* @__PURE__ */ dual(3, (self, policy, orElse8) => flatMap7(driver(policy), (driver3) => retryOrElse_EffectLoop(self, driver3, orElse8)));
var retryOrElse_EffectLoop = (self, driver3, orElse8) => {
  return catchAll(self, (e) => matchEffect(driver3.next(e), {
    onFailure: () => pipe(driver3.last(), orDie, flatMap7((out) => orElse8(e, out))),
    onSuccess: () => retryOrElse_EffectLoop(self, driver3, orElse8)
  }));
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/effect/circular.esm.js
var Semaphore = class {
  waiters = new Array();
  taken = 0;
  constructor(permits) {
    this.permits = permits;
  }
  get free() {
    return this.permits - this.taken;
  }
  take = (n) => asyncEither((resume2) => {
    if (this.free < n) {
      const observer = () => {
        if (this.free >= n) {
          const observerIndex = this.waiters.findIndex((cb) => cb === observer);
          if (observerIndex !== -1) {
            this.waiters.splice(observerIndex, 1);
          }
          this.taken += n;
          resume2(succeed(n));
        }
      };
      this.waiters.push(observer);
      return left2(sync(() => {
        const observerIndex = this.waiters.findIndex((cb) => cb === observer);
        if (observerIndex !== -1) {
          this.waiters.splice(observerIndex, 1);
        }
      }));
    }
    this.taken += n;
    return right2(succeed(n));
  });
  release = (n) => withFiberRuntime((fiber) => {
    this.taken -= n;
    fiber.getFiberRef(currentScheduler).scheduleTask(() => {
      this.waiters.forEach((wake) => wake());
    }, fiber.getFiberRef(currentSchedulingPriority));
    return unit;
  });
  withPermits = (n) => (self) => uninterruptibleMask((restore) => flatMap7(restore(this.take(n)), (permits) => ensuring(restore(self), this.release(permits))));
};
var unsafeMakeSemaphore = (leases) => {
  return new Semaphore(leases);
};
var makeSemaphore = (permits) => sync(() => unsafeMakeSemaphore(permits));
var forkIn = /* @__PURE__ */ dual(2, (self, scope4) => uninterruptibleMask((restore) => flatMap7(scope4.fork(sequential2), (child) => pipe(restore(self), onExit((exit3) => child.close(exit3)), forkDaemon, tap((fiber) => child.addFinalizer(() => fiberIdWith((fiberId2) => equals(fiberId2, fiber.id()) ? unit : asUnit(interruptFiber(fiber)))))))));
var forkScoped = (self) => scopeWith((scope4) => forkIn(self, scope4));
var SynchronizedSymbolKey = "effect/Ref/SynchronizedRef";
var SynchronizedTypeId = /* @__PURE__ */ Symbol.for(SynchronizedSymbolKey);
var synchronizedVariance = {
  _A: (_) => _
};
var SynchronizedImpl = class {
  [SynchronizedTypeId] = synchronizedVariance;
  [RefTypeId] = refVariance;
  constructor(ref, withLock) {
    this.ref = ref;
    this.withLock = withLock;
  }
  modify(f) {
    return this.modifyEffect((a) => succeed(f(a)));
  }
  modifyEffect(f) {
    return this.withLock(pipe(flatMap7(get9(this.ref), f), flatMap7(([b, a]) => as(set5(this.ref, a), b))));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var makeSynchronized = (value) => sync(() => unsafeMakeSynchronized(value));
var unsafeMakeSynchronized = (value) => {
  const ref = unsafeMake4(value);
  const sem = unsafeMakeSemaphore(1);
  return new SynchronizedImpl(ref, sem.withPermits(1));
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Cause/dist/effect-Cause.esm.js
var fail4 = fail;
var die4 = die;
var interrupt4 = interrupt;
var isInterrupted2 = isInterrupted;
var failureOrCause2 = failureOrCause;
var map11 = map8;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/layer.esm.js
var OP_FRESH = "Fresh";
var OP_FROM_EFFECT = "FromEffect";
var OP_SUSPEND = "Suspend";
var OP_PROVIDE_TO = "ProvideTo";
var OP_ZIP_WITH2 = "ZipWith";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Fiber/dist/effect-Fiber.esm.js
var _await3 = _await;
var interrupt5 = interruptFiber;
var join3 = join2;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/runtime.esm.js
var unsafeFork2 = (runtime4) => (self, options3) => {
  const fiberId2 = unsafeMake2();
  const effect3 = self;
  let fiberRefs3 = updatedAs2(runtime4.fiberRefs, {
    fiberId: fiberId2,
    fiberRef: currentContext,
    value: runtime4.context
  });
  if (options3?.scheduler) {
    fiberRefs3 = updatedAs2(fiberRefs3, {
      fiberId: fiberId2,
      fiberRef: currentScheduler,
      value: options3.scheduler
    });
  }
  if (options3?.updateRefs) {
    fiberRefs3 = options3.updateRefs(fiberRefs3, fiberId2);
  }
  const fiberRuntime = new FiberRuntime(fiberId2, forkAs2(fiberRefs3, fiberId2), runtime4.runtimeFlags);
  const supervisor = fiberRuntime._supervisor;
  if (supervisor !== none7) {
    supervisor.onStart(runtime4.context, effect3, none2(), fiberRuntime);
    fiberRuntime.addObserver((exit3) => supervisor.onEnd(exit3, fiberRuntime));
  }
  globalScope.add(runtime4.runtimeFlags, fiberRuntime);
  fiberRuntime.start(effect3);
  return fiberRuntime;
};
var unsafeRunSync = (runtime4) => (effect3) => {
  const result = unsafeRunSyncExit(runtime4)(effect3);
  if (result._tag === "Failure") {
    throw fiberFailure(result.i0);
  } else {
    return result.i0;
  }
};
var asyncFiberException = (fiber) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = limit;
  const message = `Fiber #${fiber.id().id} cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work`;
  const _tag = "AsyncFiberException";
  Object.defineProperties(error, {
    _tag: {
      value: _tag
    },
    fiber: {
      value: fiber
    },
    message: {
      value: message
    },
    name: {
      value: _tag
    },
    toString: {
      get() {
        return () => message;
      }
    },
    [NodeInspectSymbol]: {
      get() {
        return () => message;
      }
    }
  });
  return error;
};
var FiberFailureId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure");
var FiberFailureCauseId = /* @__PURE__ */ Symbol.for("effect/Runtime/FiberFailure/Cause");
var fiberFailure = (cause2) => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = limit;
  const prettyErrors$1 = prettyErrors(cause2);
  if (prettyErrors$1.length > 0) {
    const head7 = prettyErrors$1[0];
    error.name = head7.message.split(":")[0];
    error.message = head7.message.substring(error.name.length + 2);
    error.stack = `${error.name}: ${error.message}
${head7.stack}`;
  }
  error[FiberFailureId] = FiberFailureId;
  error[FiberFailureCauseId] = cause2;
  error.toJSON = () => {
    return {
      _id: "FiberFailure",
      cause: cause2.toJSON()
    };
  };
  error.toString = () => {
    return toString(error.toJSON());
  };
  error[NodeInspectSymbol] = () => {
    return error.toJSON();
  };
  return error;
};
var fastPath = (effect3) => {
  const op = effect3;
  switch (op._op) {
    case "Failure":
    case "Success": {
      return op;
    }
    case "Left": {
      return exitFail(op.left);
    }
    case "Right": {
      return exitSucceed(op.right);
    }
    case "Some": {
      return exitSucceed(op.value);
    }
    case "None": {
      return exitFail(NoSuchElementException());
    }
  }
};
var unsafeRunSyncExit = (runtime4) => (effect3) => {
  const op = fastPath(effect3);
  if (op) {
    return op;
  }
  const scheduler = new SyncScheduler();
  const fiberRuntime = unsafeFork2(runtime4)(effect3, {
    scheduler
  });
  scheduler.flush();
  const result = fiberRuntime.unsafePoll();
  if (result) {
    return result;
  }
  throw asyncFiberException(fiberRuntime);
};
var unsafeRunPromise = (runtime4) => (effect3) => unsafeRunPromiseExit(runtime4)(effect3).then((result) => {
  switch (result._tag) {
    case OP_SUCCESS: {
      return result.i0;
    }
    case OP_FAILURE: {
      throw fiberFailure(result.i0);
    }
  }
});
var unsafeRunPromiseExit = (runtime4) => (effect3) => new Promise((resolve) => {
  const op = fastPath(effect3);
  if (op) {
    resolve(op);
  }
  unsafeFork2(runtime4)(effect3).addObserver((exit3) => {
    resolve(exit3);
  });
});
var RuntimeImpl = class {
  constructor(context6, runtimeFlags2, fiberRefs3) {
    this.context = context6;
    this.runtimeFlags = runtimeFlags2;
    this.fiberRefs = fiberRefs3;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make36 = (options3) => new RuntimeImpl(options3.context, options3.runtimeFlags, options3.fiberRefs);
var runtime2 = () => withFiberRuntime((state, status2) => succeed(new RuntimeImpl(state.getFiberRef(currentContext), status2.runtimeFlags, state.getFiberRefs())));
var defaultRuntimeFlags = /* @__PURE__ */ make14(Interruption, CooperativeYielding, RuntimeMetrics);
var defaultRuntime = /* @__PURE__ */ make36({
  context: /* @__PURE__ */ empty5(),
  runtimeFlags: defaultRuntimeFlags,
  fiberRefs: /* @__PURE__ */ empty17()
});
var unsafeRunPromiseEffect = /* @__PURE__ */ unsafeRunPromise(defaultRuntime);
var unsafeRunSyncEffect = /* @__PURE__ */ unsafeRunSync(defaultRuntime);

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/synchronizedRef.esm.js
var modifyEffect = /* @__PURE__ */ dual(2, (self, f) => self.modifyEffect(f));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Scope/dist/effect-Scope.esm.js
var close = scopeClose;
var extend2 = scopeExtend;
var use = scopeUse;
var make37 = scopeMake;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/layer.esm.js
var LayerSymbolKey = "effect/Layer";
var LayerTypeId = /* @__PURE__ */ Symbol.for(LayerSymbolKey);
var layerVariance = {
  _RIn: (_) => _,
  _E: (_) => _,
  _ROut: (_) => _
};
var proto4 = {
  [LayerTypeId]: layerVariance,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isLayer = (u) => {
  return typeof u === "object" && u != null && LayerTypeId in u;
};
var isFresh = (self) => {
  return self._tag === OP_FRESH;
};
var MemoMap = class {
  constructor(ref) {
    this.ref = ref;
  }
  /**
   * Checks the memo map to see if a layer exists. If it is, immediately
   * returns it. Otherwise, obtains the layer, stores it in the memo map,
   * and adds a finalizer to the `Scope`.
   */
  getOrElseMemoize(layer2, scope4) {
    return pipe(modifyEffect(this.ref, (map20) => {
      const inMap = map20.get(layer2);
      if (inMap !== void 0) {
        const [acquire, release] = inMap;
        const cached3 = pipe(acquire, flatMap7(([patch10, b]) => pipe(patchFiberRefs(patch10), as(b))), onExit(exitMatch({
          onFailure: () => unit,
          onSuccess: () => scopeAddFinalizerExit(scope4, release)
        })));
        return succeed([cached3, map20]);
      }
      return pipe(make24(0), flatMap7((observers) => pipe(deferredMake(), flatMap7((deferred) => pipe(make24(() => unit), map9((finalizerRef) => {
        const resource = uninterruptibleMask((restore) => pipe(scopeMake(), flatMap7((innerScope) => pipe(restore(flatMap7(withScope(layer2, innerScope), (f) => diffFiberRefs(f(this)))), exit, flatMap7((exit3) => {
          switch (exit3._tag) {
            case OP_FAILURE: {
              return pipe(deferredFailCause(deferred, exit3.i0), zipRight(scopeClose(innerScope, exit3)), zipRight(failCause(exit3.i0)));
            }
            case OP_SUCCESS: {
              return pipe(set5(finalizerRef, (exit4) => pipe(scopeClose(innerScope, exit4), whenEffect(modify2(observers, (n) => [n === 1, n - 1])), asUnit)), zipRight(update4(observers, (n) => n + 1)), zipRight(scopeAddFinalizerExit(scope4, (exit4) => pipe(get9(finalizerRef), flatMap7((finalizer2) => finalizer2(exit4))))), zipRight(deferredSucceed(deferred, exit3.i0)), as(exit3.i0[1]));
            }
          }
        })))));
        const memoized = [pipe(deferredAwait(deferred), onExit(exitMatchEffect({
          onFailure: () => unit,
          onSuccess: () => update4(observers, (n) => n + 1)
        }))), (exit3) => pipe(get9(finalizerRef), flatMap7((finalizer2) => finalizer2(exit3)))];
        return [resource, isFresh(layer2) ? map20 : map20.set(layer2, memoized)];
      }))))));
    }), flatten4);
  }
};
var makeMemoMap = () => map9(makeSynchronized(/* @__PURE__ */ new Map()), (ref) => new MemoMap(ref));
var buildWithScope = /* @__PURE__ */ dual(2, (self, scope4) => flatMap7(makeMemoMap(), (memoMap) => flatMap7(withScope(self, scope4), (run3) => run3(memoMap))));
var withScope = (self, scope4) => {
  const op = self;
  switch (op._tag) {
    case "Locally": {
      return sync(() => (memoMap) => op.f(memoMap.getOrElseMemoize(op.self, scope4)));
    }
    case "ExtendScope": {
      return sync(() => (memoMap) => scopeWith((scope5) => memoMap.getOrElseMemoize(op.layer, scope5)));
    }
    case "Fold": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.layer, scope4), matchCauseEffect({
        onFailure: (cause2) => memoMap.getOrElseMemoize(op.failureK(cause2), scope4),
        onSuccess: (value) => memoMap.getOrElseMemoize(op.successK(value), scope4)
      })));
    }
    case "Fresh": {
      return sync(() => (_) => pipe(op.layer, buildWithScope(scope4)));
    }
    case "FromEffect": {
      return sync(() => (_) => op.effect);
    }
    case "ProvideTo": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope4), flatMap7((env) => pipe(memoMap.getOrElseMemoize(op.second, scope4), provideContext(env)))));
    }
    case "Scoped": {
      return sync(() => (_) => scopeExtend(op.effect, scope4));
    }
    case "Suspend": {
      return sync(() => (memoMap) => memoMap.getOrElseMemoize(op.evaluate(), scope4));
    }
    case "ZipWith": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope4), zipWith2(memoMap.getOrElseMemoize(op.second, scope4), op.zipK)));
    }
    case "ZipWithPar": {
      return sync(() => (memoMap) => pipe(memoMap.getOrElseMemoize(op.first, scope4), zipWithOptions(memoMap.getOrElseMemoize(op.second, scope4), op.zipK, {
        concurrent: true
      })));
    }
  }
};
var context2 = () => fromEffectContext(context());
var fromEffect3 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag3 = tagFirst ? a : b;
  const effect3 = tagFirst ? b : a;
  return fromEffectContext(map9(effect3, (service2) => make4(tag3, service2)));
});
function fromEffectContext(effect3) {
  const fromEffect6 = Object.create(proto4);
  fromEffect6._tag = OP_FROM_EFFECT;
  fromEffect6.effect = effect3;
  return fromEffect6;
}
var succeed5 = /* @__PURE__ */ dual(2, (a, b) => {
  const tagFirst = isTag2(a);
  const tag3 = tagFirst ? a : b;
  const resource = tagFirst ? b : a;
  return fromEffectContext(succeed(make4(tag3, resource)));
});
var suspend2 = (evaluate) => {
  const suspend6 = Object.create(proto4);
  suspend6._tag = OP_SUSPEND;
  suspend6.evaluate = evaluate;
  return suspend6;
};
var toRuntime = (self) => {
  return pipe(scopeWith((scope4) => pipe(self, buildWithScope(scope4))), flatMap7((context6) => pipe(runtime2(), provideContext(context6))));
};
var use2 = /* @__PURE__ */ dual(2, (that, self) => suspend2(() => {
  const provideTo = Object.create(proto4);
  provideTo._tag = OP_PROVIDE_TO;
  provideTo.first = Object.create(proto4, {
    _tag: {
      value: OP_ZIP_WITH2,
      enumerable: true
    },
    first: {
      value: context2(),
      enumerable: true
    },
    second: {
      value: self
    },
    zipK: {
      value: (a, b) => pipe(a, merge3(b))
    }
  });
  provideTo.second = that;
  return provideTo;
}));
var provideSomeLayer = /* @__PURE__ */ dual(2, (self, layer2) => acquireUseRelease(scopeMake(), (scope4) => flatMap7(buildWithScope(layer2, scope4), (context6) => provideSomeContext(self, context6)), (scope4, exit3) => scopeClose(scope4, exit3)));
var provideSomeRuntime = /* @__PURE__ */ dual(2, (self, rt) => {
  const patchFlags = diff3(defaultRuntime.runtimeFlags, rt.runtimeFlags);
  const inversePatchFlags = diff3(rt.runtimeFlags, defaultRuntime.runtimeFlags);
  const patchRefs = diff5(defaultRuntime.fiberRefs, rt.fiberRefs);
  const inversePatchRefs = diff5(rt.fiberRefs, defaultRuntime.fiberRefs);
  return acquireUseRelease(flatMap7(updateRuntimeFlags(patchFlags), () => patchFiberRefs(patchRefs)), () => provideSomeContext(self, rt.context), () => flatMap7(updateRuntimeFlags(inversePatchFlags), () => patchFiberRefs(inversePatchRefs)));
});
var effect_provide = /* @__PURE__ */ dual(2, (self, source) => isLayer(source) ? provideSomeLayer(self, source) : isContext2(source) ? provideSomeContext(self, source) : provideSomeRuntime(self, source));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/MutableList/dist/effect-MutableList.esm.js
var TypeId11 = /* @__PURE__ */ Symbol.for("effect/MutableList");
var MutableListProto = {
  [TypeId11]: TypeId11,
  [Symbol.iterator]() {
    let done7 = false;
    let head7 = this.head;
    return {
      next() {
        if (done7) {
          return this.return();
        }
        if (head7 == null) {
          done7 = true;
          return this.return();
        }
        const value = head7.value;
        head7 = head7.next;
        return {
          done: done7,
          value
        };
      },
      return(value) {
        if (!done7) {
          done7 = true;
        }
        return {
          done: true,
          value
        };
      }
    };
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableList",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var LinkedListNode = class {
  removed = false;
  prev = void 0;
  next = void 0;
  constructor(value) {
    this.value = value;
  }
};
var empty27 = () => {
  const list = Object.create(MutableListProto);
  list.head = void 0;
  list.tail = void 0;
  list._length = 0;
  return list;
};
var isEmpty8 = (self) => length(self) === 0;
var length = (self) => self._length;
var append3 = /* @__PURE__ */ dual(2, (self, value) => {
  const node = new LinkedListNode(value);
  if (self.head === void 0) {
    self.head = node;
  }
  if (self.tail === void 0) {
    self.tail = node;
  } else {
    self.tail.next = node;
    node.prev = self.tail;
    self.tail = node;
  }
  self._length += 1;
  return self;
});
var shift = (self) => {
  const head7 = self.head;
  if (head7 !== void 0) {
    remove8(self, head7);
    return head7.value;
  }
  return void 0;
};
var remove8 = (self, node) => {
  if (node.removed) {
    return;
  }
  node.removed = true;
  if (node.prev !== void 0 && node.next !== void 0) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  } else if (node.prev !== void 0) {
    self.tail = node.prev;
    node.prev.next = void 0;
  } else if (node.next !== void 0) {
    self.head = node.next;
    node.next.prev = void 0;
  } else {
    self.tail = void 0;
    self.head = void 0;
  }
  if (self._length > 0) {
    self._length -= 1;
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/MutableQueue/dist/effect-MutableQueue.esm.js
var TypeId12 = /* @__PURE__ */ Symbol.for("effect/MutableQueue");
var EmptyMutableQueue = /* @__PURE__ */ Symbol.for("effect/mutable/MutableQueue/Empty");
var MutableQueueProto = {
  [TypeId12]: TypeId12,
  [Symbol.iterator]() {
    return Array.from(this.queue)[Symbol.iterator]();
  },
  toString() {
    return toString(this.toJSON());
  },
  toJSON() {
    return {
      _id: "MutableQueue",
      values: Array.from(this).map(toJSON)
    };
  },
  [NodeInspectSymbol]() {
    return this.toJSON();
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make38 = (capacity3) => {
  const queue = Object.create(MutableQueueProto);
  queue.queue = empty27();
  queue.capacity = capacity3;
  return queue;
};
var bounded = (capacity3) => make38(capacity3);
var unbounded = () => make38(void 0);
var length2 = (self) => length(self.queue);
var isEmpty9 = (self) => isEmpty8(self.queue);
var capacity = (self) => self.capacity === void 0 ? Infinity : self.capacity;
var offer = /* @__PURE__ */ dual(2, (self, value) => {
  const queueLength = length(self.queue);
  if (self.capacity !== void 0 && queueLength === self.capacity) {
    return false;
  }
  append3(value)(self.queue);
  return true;
});
var offerAll = /* @__PURE__ */ dual(2, (self, values3) => {
  const iterator = values3[Symbol.iterator]();
  let next2;
  let remainder2 = empty3();
  let offering = true;
  while (offering && (next2 = iterator.next()) && !next2.done) {
    offering = offer(next2.value)(self);
  }
  while (next2 != null && !next2.done) {
    remainder2 = prepend2(next2.value)(remainder2);
    next2 = iterator.next();
  }
  return reverse3(remainder2);
});
var poll2 = /* @__PURE__ */ dual(2, (self, def) => {
  if (isEmpty8(self.queue)) {
    return def;
  }
  return shift(self.queue);
});
var pollUpTo = /* @__PURE__ */ dual(2, (self, n) => {
  let result = empty3();
  let count = 0;
  while (count < n) {
    const element = poll2(EmptyMutableQueue)(self);
    if (element === EmptyMutableQueue) {
      break;
    }
    result = prepend2(element)(result);
    count += 1;
  }
  return reverse3(result);
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Effect/dist/effect-Effect.esm.js
var isEffect2 = isEffect;
var cached2 = memoize;
var forEach8 = forEachOptions;
var fail6 = fail2;
var failCause5 = failCause;
var dieMessage2 = dieMessage;
var gen2 = gen;
var promise2 = promise;
var succeed6 = succeed;
var suspend3 = suspend;
var sync2 = sync;
var unit4 = unit;
var catchAll2 = catchAll;
var catchAllCause2 = catchAllCause;
var catchTag2 = catchTag;
var catchTags2 = catchTags;
var ignore2 = ignore;
var retry = retry_Effect;
var try_2 = try_;
var tryMap2 = tryMap;
var tryPromise2 = tryPromise;
var interrupt6 = interrupt2;
var interruptible3 = interruptible2;
var uninterruptible2 = uninterruptible;
var uninterruptibleMask2 = uninterruptibleMask;
var as3 = as;
var asUnit2 = asUnit;
var map13 = map9;
var mapError2 = mapError;
var acquireRelease2 = acquireRelease;
var ensuring2 = ensuring;
var scoped = scopedEffect;
var fiberIdWith2 = fiberIdWith;
var forkDaemon2 = forkDaemon;
var forkScoped2 = forkScoped;
var provide = effect_provide;
var either3 = either2;
var exit2 = exit;
var filterOrElse2 = filterOrElse;
var filterOrFail2 = filterOrFail;
var when2 = when;
var flatMap8 = flatMap7;
var flatten7 = flatten4;
var race2 = race;
var raceWith2 = raceWith;
var tap2 = tap;
var tapErrorCause2 = tapErrorCause;
var repeatUntil = repeatUntil_Effect;
var repeatWhile = repeatWhile_Effect;
var match9 = match4;
var matchCause2 = matchCause;
var matchCauseEffect2 = matchCauseEffect;
var makeSemaphore2 = makeSemaphore;
var runPromise = unsafeRunPromiseEffect;
var runSync = unsafeRunSyncEffect;
var zip5 = zipOptions;
var zipRight3 = zipRightOptions;
var zipWith4 = zipWithOptions;
var currentSpan2 = currentSpan;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Data/dist/effect-Data.esm.js
var struct2 = struct;
var tagged2 = (tag3) => (args) => {
  const value = args === void 0 ? Object.create(StructProto) : struct2(args);
  value._tag = tag3;
  return value;
};
var Class = Structural;

// node_modules/.pnpm/@effect+schema@0.43.2_effect@2.0.0-next.48_fast-check@3.13.1/node_modules/@effect/schema/internal/common.esm.js
var ArbitraryHookId = /* @__PURE__ */ Symbol.for("@effect/schema/ArbitraryHookId");
var PrettyHookId = /* @__PURE__ */ Symbol.for("@effect/schema/PrettyHookId");
var getKeysForIndexSignature = (input, parameter) => {
  switch (parameter._tag) {
    case "StringKeyword":
    case "TemplateLiteral":
      return Object.keys(input);
    case "SymbolKeyword":
      return Object.getOwnPropertySymbols(input);
    case "Refinement":
      return getKeysForIndexSignature(input, parameter.from);
  }
};
var ownKeys = (o) => Object.keys(o).concat(Object.getOwnPropertySymbols(o));
var memoizeThunk = (f) => {
  let done7 = false;
  let a;
  return () => {
    if (done7) {
      return a;
    }
    a = f();
    done7 = true;
    return a;
  };
};

// node_modules/.pnpm/@effect+schema@0.43.2_effect@2.0.0-next.48_fast-check@3.13.1/node_modules/@effect/schema/AST/dist/effect-schema-AST.esm.js
var TypeAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Type");
var MessageAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Message");
var IdentifierAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Identifier");
var TitleAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Title");
var DescriptionAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Description");
var ExamplesAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Examples");
var JSONSchemaAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/JSONSchema");
var DocumentationAnnotationId = /* @__PURE__ */ Symbol.for("@effect/schema/annotation/Documentation");
var getAnnotation = (key2) => (annotated) => Object.prototype.hasOwnProperty.call(annotated.annotations, key2) ? some2(annotated.annotations[key2]) : none2();
var createDeclaration = (typeParameters, type2, decode3, annotations = {}) => ({
  _tag: "Declaration",
  typeParameters,
  type: type2,
  decode: decode3,
  annotations
});
var createLiteral = (literal2) => ({
  _tag: "Literal",
  literal: literal2,
  annotations: {}
});
var isLiteral = (ast) => ast._tag === "Literal";
var isUniqueSymbol = (ast) => ast._tag === "UniqueSymbol";
var neverKeyword = {
  _tag: "NeverKeyword",
  annotations: {
    [TitleAnnotationId]: "never"
  }
};
var unknownKeyword = {
  _tag: "UnknownKeyword",
  annotations: {
    [TitleAnnotationId]: "unknown"
  }
};
var isUnknownKeyword = (ast) => ast._tag === "UnknownKeyword";
var anyKeyword = {
  _tag: "AnyKeyword",
  annotations: {
    [TitleAnnotationId]: "any"
  }
};
var isAnyKeyword = (ast) => ast._tag === "AnyKeyword";
var stringKeyword = {
  _tag: "StringKeyword",
  annotations: {
    [TitleAnnotationId]: "string",
    [DescriptionAnnotationId]: "a string"
  }
};
var isStringKeyword = (ast) => ast._tag === "StringKeyword";
var numberKeyword = {
  _tag: "NumberKeyword",
  annotations: {
    [TitleAnnotationId]: "number",
    [DescriptionAnnotationId]: "a number"
  }
};
var isNumberKeyword = (ast) => ast._tag === "NumberKeyword";
var booleanKeyword = {
  _tag: "BooleanKeyword",
  annotations: {
    [TitleAnnotationId]: "boolean",
    [DescriptionAnnotationId]: "a boolean"
  }
};
var isBooleanKeyword = (ast) => ast._tag === "BooleanKeyword";
var isBigIntKeyword = (ast) => ast._tag === "BigIntKeyword";
var symbolKeyword = {
  _tag: "SymbolKeyword",
  annotations: {
    [TitleAnnotationId]: "symbol",
    [DescriptionAnnotationId]: "a symbol"
  }
};
var isSymbolKeyword = (ast) => ast._tag === "SymbolKeyword";
var createElement = (type2, isOptional) => ({
  type: type2,
  isOptional
});
var createTuple = (elements, rest, isReadonly, annotations = {}) => ({
  _tag: "Tuple",
  elements,
  rest,
  isReadonly,
  annotations
});
var createPropertySignature = (name, type2, isOptional, isReadonly, annotations = {}) => ({
  name,
  type: type2,
  isOptional,
  isReadonly,
  annotations
});
var isParameter = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return true;
    case "Refinement":
      return isParameter(ast.from);
    default:
      return false;
  }
};
var createIndexSignature = (parameter, type2, isReadonly) => {
  if (isParameter(parameter)) {
    return {
      parameter,
      type: type2,
      isReadonly
    };
  }
  throw new Error("An index signature parameter type must be 'string', 'symbol', a template literal type or a refinement of the previous types");
};
var createTypeLiteral = (propertySignatures, indexSignatures, annotations = {}) => {
  const keys5 = {};
  for (let i = 0; i < propertySignatures.length; i++) {
    const name = propertySignatures[i].name;
    if (Object.prototype.hasOwnProperty.call(keys5, name)) {
      throw new Error(`Duplicate property signature ${String(name)}`);
    }
    keys5[name] = null;
  }
  const parameters = {
    string: false,
    symbol: false
  };
  for (let i = 0; i < indexSignatures.length; i++) {
    const parameter = getParameterBase(indexSignatures[i].parameter);
    if (isStringKeyword(parameter)) {
      if (parameters.string) {
        throw new Error("Duplicate index signature for type `string`");
      }
      parameters.string = true;
    } else if (isSymbolKeyword(parameter)) {
      if (parameters.symbol) {
        throw new Error("Duplicate index signature for type `symbol`");
      }
      parameters.symbol = true;
    }
  }
  return {
    _tag: "TypeLiteral",
    propertySignatures: sortPropertySignatures(propertySignatures),
    indexSignatures,
    annotations
  };
};
var isMembers = (as5) => as5.length > 1;
var createUnion = (candidates, annotations = {}) => {
  const types = unify(candidates);
  if (isMembers(types)) {
    return {
      _tag: "Union",
      types: sortUnionMembers(types),
      annotations
    };
  }
  if (isNonEmptyReadonlyArray(types)) {
    return types[0];
  }
  return neverKeyword;
};
var createLazy = (f, annotations = {}) => ({
  _tag: "Lazy",
  f: memoizeThunk(f),
  annotations
});
var createRefinement = (from3, filter9, annotations = {}) => {
  if (isTransform(from3)) {
    return createTransform(from3.from, createRefinement(from3.to, filter9, annotations), from3.transformation, from3.annotations);
  }
  return {
    _tag: "Refinement",
    from: from3,
    filter: filter9,
    annotations
  };
};
var isRefinement = (ast) => ast._tag === "Refinement";
var createTransform = (from3, to3, transformation, annotations = {}) => ({
  _tag: "Transform",
  from: from3,
  to: to3,
  transformation,
  annotations
});
var isTransform = (ast) => ast._tag === "Transform";
var createFinalTransformation = (decode3, encode2) => ({
  _tag: "FinalTransformation",
  decode: decode3,
  encode: encode2
});
var createFinalPropertySignatureTransformation = (decode3, encode2) => ({
  _tag: "FinalPropertySignatureTransformation",
  decode: decode3,
  encode: encode2
});
var createPropertySignatureTransform = (from3, to3, propertySignatureTransformation) => ({
  from: from3,
  to: to3,
  propertySignatureTransformation
});
var createTypeLiteralTransformation = (propertySignatureTransformations) => {
  const keys5 = {};
  for (const pst of propertySignatureTransformations) {
    const key2 = pst.from;
    if (keys5[key2]) {
      throw new Error(`Duplicate property signature transformation ${String(key2)}`);
    }
    keys5[key2] = true;
  }
  return {
    _tag: "TypeLiteralTransformation",
    propertySignatureTransformations
  };
};
var getToPropertySignatures = (ps) => ps.map((p) => createPropertySignature(p.name, to(p.type), p.isOptional, p.isReadonly, p.annotations));
var getToIndexSignatures = (ps) => ps.map((is2) => createIndexSignature(is2.parameter, to(is2.type), is2.isReadonly));
var to = (ast) => {
  switch (ast._tag) {
    case "Declaration":
      return createDeclaration(ast.typeParameters.map(to), to(ast.type), ast.decode, ast.annotations);
    case "Tuple":
      return createTuple(ast.elements.map((e) => createElement(to(e.type), e.isOptional)), map(ast.rest, mapNonEmpty(to)), ast.isReadonly, ast.annotations);
    case "TypeLiteral":
      return createTypeLiteral(getToPropertySignatures(ast.propertySignatures), getToIndexSignatures(ast.indexSignatures), ast.annotations);
    case "Union":
      return createUnion(ast.types.map(to), ast.annotations);
    case "Lazy":
      return createLazy(() => to(ast.f()), ast.annotations);
    case "Refinement":
      return createRefinement(to(ast.from), ast.filter, ast.annotations);
    case "Transform":
      return to(ast.to);
  }
  return ast;
};
var from = (ast) => {
  switch (ast._tag) {
    case "Declaration":
      return createDeclaration(ast.typeParameters.map(from), from(ast.type), ast.decode, ast.annotations);
    case "Tuple":
      return createTuple(ast.elements.map((e) => createElement(from(e.type), e.isOptional)), map(ast.rest, mapNonEmpty(from)), ast.isReadonly);
    case "TypeLiteral":
      return createTypeLiteral(ast.propertySignatures.map((p) => createPropertySignature(p.name, from(p.type), p.isOptional, p.isReadonly)), ast.indexSignatures.map((is2) => createIndexSignature(is2.parameter, from(is2.type), is2.isReadonly)));
    case "Union":
      return createUnion(ast.types.map(from));
    case "Lazy":
      return createLazy(() => from(ast.f()));
    case "Refinement":
    case "Transform":
      return from(ast.from);
  }
  return ast;
};
var getCardinality = (ast) => {
  switch (ast._tag) {
    case "Declaration":
      return getCardinality(ast.type);
    case "NeverKeyword":
      return 0;
    case "Literal":
    case "UndefinedKeyword":
    case "VoidKeyword":
    case "UniqueSymbol":
      return 1;
    case "BooleanKeyword":
      return 2;
    case "StringKeyword":
    case "NumberKeyword":
    case "BigIntKeyword":
    case "SymbolKeyword":
      return 3;
    case "ObjectKeyword":
      return 5;
    case "UnknownKeyword":
    case "AnyKeyword":
      return 6;
    default:
      return 4;
  }
};
var sortPropertySignatures = /* @__PURE__ */ sort(/* @__PURE__ */ pipe(Order, /* @__PURE__ */ mapInput2((ps) => getCardinality(ps.type))));
var WeightOrder = /* @__PURE__ */ tuple(Order, Order, Order);
var maxWeight = /* @__PURE__ */ max(WeightOrder);
var emptyWeight = [0, 0, 0];
var maxWeightAll = (weights) => weights.reduce(maxWeight, emptyWeight);
var getWeight = (ast) => {
  switch (ast._tag) {
    case "Tuple": {
      const y = ast.elements.length;
      const z = isSome2(ast.rest) ? ast.rest.value.length : 0;
      return [2, y, z];
    }
    case "TypeLiteral": {
      const y = ast.propertySignatures.length;
      const z = ast.indexSignatures.length;
      return y + z === 0 ? [-4, 0, 0] : [4, y, z];
    }
    case "Declaration": {
      const [_, y, z] = getWeight(ast.type);
      return [6, y, z];
    }
    case "Lazy":
      return [8, 0, 0];
    case "Union":
      return maxWeightAll(ast.types.map(getWeight));
    case "Refinement": {
      const [x, y, z] = getWeight(ast.from);
      return [x + 1, y, z];
    }
    case "Transform":
      return getWeight(ast.from);
    case "ObjectKeyword":
      return [-2, 0, 0];
    case "UnknownKeyword":
    case "AnyKeyword":
      return [-4, 0, 0];
    default:
      return emptyWeight;
  }
};
var sortUnionMembers = /* @__PURE__ */ sort(/* @__PURE__ */ reverse(/* @__PURE__ */ mapInput2(WeightOrder, getWeight)));
var unify = (candidates) => {
  let out = pipe(candidates, flatMap2((ast) => {
    switch (ast._tag) {
      case "NeverKeyword":
        return [];
      case "Union":
        return ast.types;
      default:
        return [ast];
    }
  }));
  if (out.some(isAnyKeyword)) {
    return [anyKeyword];
  }
  if (out.some(isUnknownKeyword)) {
    return [unknownKeyword];
  }
  let i;
  if ((i = out.findIndex(isStringKeyword)) !== -1) {
    out = out.filter((m, j) => j === i || !isStringKeyword(m) && !(isLiteral(m) && typeof m.literal === "string"));
  }
  if ((i = out.findIndex(isNumberKeyword)) !== -1) {
    out = out.filter((m, j) => j === i || !isNumberKeyword(m) && !(isLiteral(m) && typeof m.literal === "number"));
  }
  if ((i = out.findIndex(isBooleanKeyword)) !== -1) {
    out = out.filter((m, j) => j === i || !isBooleanKeyword(m) && !(isLiteral(m) && typeof m.literal === "boolean"));
  }
  if ((i = out.findIndex(isBigIntKeyword)) !== -1) {
    out = out.filter((m, j) => j === i || !isBigIntKeyword(m) && !(isLiteral(m) && typeof m.literal === "bigint"));
  }
  if ((i = out.findIndex(isSymbolKeyword)) !== -1) {
    out = out.filter((m, j) => j === i || !isSymbolKeyword(m) && !isUniqueSymbol(m));
  }
  return out;
};
var getParameterBase = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "SymbolKeyword":
    case "TemplateLiteral":
      return ast;
    case "Refinement":
      return getParameterBase(ast.from);
  }
};

// node_modules/.pnpm/@effect+schema@0.43.2_effect@2.0.0-next.48_fast-check@3.13.1/node_modules/@effect/schema/ParseResult/dist/effect-schema-ParseResult.esm.js
var parseError = (errors) => ({
  _tag: "ParseError",
  errors
});
var type = (expected, actual, message) => ({
  _tag: "Type",
  expected,
  actual,
  message: fromNullable(message)
});
var forbidden = {
  _tag: "Forbidden"
};
var index = (index2, errors) => ({
  _tag: "Index",
  index: index2,
  errors
});
var key = (key2, errors) => ({
  _tag: "Key",
  key: key2,
  errors
});
var missing = {
  _tag: "Missing"
};
var unexpected = (actual) => ({
  _tag: "Unexpected",
  actual
});
var unionMember = (errors) => ({
  _tag: "UnionMember",
  errors
});
var success = right2;
var fail7 = left2;
var failure = (e) => fail7(parseError([e]));
var failures2 = (es) => left2(parseError(es));
var eitherOrUndefined = (self) => {
  const s = self;
  if (s["_tag"] === "Left" || s["_tag"] === "Right") {
    return s;
  }
};
var flatMap9 = (self, f) => {
  const s = self;
  if (s["_tag"] === "Left") {
    return s;
  }
  if (s["_tag"] === "Right") {
    return f(s.right);
  }
  return flatMap8(self, f);
};
var map15 = (self, f) => {
  const s = self;
  if (s["_tag"] === "Left") {
    return s;
  }
  if (s["_tag"] === "Right") {
    return right2(f(s.right));
  }
  return map13(self, f);
};

// node_modules/.pnpm/@effect+schema@0.43.2_effect@2.0.0-next.48_fast-check@3.13.1/node_modules/@effect/schema/TreeFormatter/dist/effect-schema-TreeFormatter.esm.js
var make39 = (value, forest = []) => ({
  value,
  forest
});
var formatErrors = (errors) => drawTree(make39(`error(s) found`, errors.map(go)));
var drawTree = (tree) => tree.value + draw("\n", tree.forest);
var draw = (indentation, forest) => {
  let r = "";
  const len = forest.length;
  let tree;
  for (let i = 0; i < len; i++) {
    tree = forest[i];
    const isLast = i === len - 1;
    r += indentation + (isLast ? "\u2514" : "\u251C") + "\u2500 " + tree.value;
    r += draw(indentation + (len > 1 && !isLast ? "\u2502  " : "   "), tree.forest);
  }
  return r;
};
var formatActual = (actual) => {
  if (actual === void 0 || actual === null || typeof actual === "number" || typeof actual === "symbol" || actual instanceof Date) {
    return String(actual);
  }
  if (typeof actual === "bigint") {
    return String(actual) + "n";
  }
  try {
    return JSON.stringify(actual);
  } catch (e) {
    return String(actual);
  }
};
var formatTemplateLiteralSpan = (span) => {
  switch (span.type._tag) {
    case "StringKeyword":
      return "${string}";
    case "NumberKeyword":
      return "${number}";
  }
};
var formatTemplateLiteral = (ast) => ast.head + ast.spans.map((span) => formatTemplateLiteralSpan(span) + span.literal).join("");
var getMessageAnnotation = /* @__PURE__ */ getAnnotation(MessageAnnotationId);
var getTitleAnnotation = /* @__PURE__ */ getAnnotation(TitleAnnotationId);
var getIdentifierAnnotation = /* @__PURE__ */ getAnnotation(IdentifierAnnotationId);
var getDescriptionAnnotation = /* @__PURE__ */ getAnnotation(DescriptionAnnotationId);
var getExpected = (ast) => getIdentifierAnnotation(ast).pipe(orElse(() => getTitleAnnotation(ast)), orElse(() => getDescriptionAnnotation(ast)));
var formatExpected = (ast) => {
  switch (ast._tag) {
    case "StringKeyword":
    case "NumberKeyword":
    case "BooleanKeyword":
    case "BigIntKeyword":
    case "UndefinedKeyword":
    case "SymbolKeyword":
    case "ObjectKeyword":
    case "AnyKeyword":
    case "UnknownKeyword":
    case "VoidKeyword":
    case "NeverKeyword":
      return getOrElse(getExpected(ast), () => ast._tag);
    case "Literal":
      return getOrElse(getExpected(ast), () => formatActual(ast.literal));
    case "UniqueSymbol":
      return getOrElse(getExpected(ast), () => formatActual(ast.symbol));
    case "Union":
      return ast.types.map(formatExpected).join(" or ");
    case "TemplateLiteral":
      return getOrElse(getExpected(ast), () => formatTemplateLiteral(ast));
    case "Tuple":
      return getOrElse(getExpected(ast), () => "<anonymous tuple or array schema>");
    case "TypeLiteral":
      return getOrElse(getExpected(ast), () => "<anonymous type literal schema>");
    case "Enums":
      return getOrElse(getExpected(ast), () => ast.enums.map((_, value) => JSON.stringify(value)).join(" | "));
    case "Lazy":
      return getOrElse(getExpected(ast), () => "<anonymous lazy schema>");
    case "Declaration":
      return getOrElse(getExpected(ast), () => "<anonymous declaration schema>");
    case "Refinement":
      return getOrElse(getExpected(ast), () => "<anonymous refinement schema>");
    case "Transform":
      return getOrElse(getExpected(ast), () => `${formatExpected(ast.from)} <-> ${formatExpected(ast.to)}`);
  }
};
var isCollapsible = (es, errors) => es.length === 1 && es[0].forest.length !== 0 && errors[0]._tag !== "UnionMember";
var getMessage = (e) => getMessageAnnotation(e.expected).pipe(map((annotation) => annotation(e.actual)), orElse(() => e.message), getOrElse(() => `Expected ${formatExpected(e.expected)}, actual ${formatActual(e.actual)}`));
var go = (e) => {
  switch (e._tag) {
    case "Type":
      return make39(getMessage(e));
    case "Forbidden":
      return make39("is forbidden");
    case "Index": {
      const es = e.errors.map(go);
      if (isCollapsible(es, e.errors)) {
        return make39(`[${e.index}]${es[0].value}`, es[0].forest);
      }
      return make39(`[${e.index}]`, es);
    }
    case "Unexpected":
      return make39(`is unexpected`);
    case "Key": {
      const es = e.errors.map(go);
      if (isCollapsible(es, e.errors)) {
        return make39(`[${formatActual(e.key)}]${es[0].value}`, es[0].forest);
      }
      return make39(`[${formatActual(e.key)}]`, es);
    }
    case "Missing":
      return make39("is missing");
    case "UnionMember":
      return make39("union member", e.errors.map(go));
  }
};

// node_modules/.pnpm/@effect+schema@0.43.2_effect@2.0.0-next.48_fast-check@3.13.1/node_modules/@effect/schema/Parser/dist/effect-schema-Parser.esm.js
var getEither = (ast, isDecoding) => go2(ast, isDecoding);
var getSync = (ast, isDecoding) => {
  const parser = getEither(ast, isDecoding);
  return (input, options3) => {
    const result = parser(input, options3);
    if (isLeft2(result)) {
      throw new Error(formatErrors(result.left.errors));
    }
    return result.right;
  };
};
var getEffect = (ast, isDecoding) => {
  const parser = go2(ast, isDecoding);
  return (input, options3) => parser(input, {
    ...options3,
    isEffectAllowed: true
  });
};
var parse = (schema) => getEffect(schema.ast, true);
var validateSync = (schema) => getSync(to(schema.ast), true);
var encode = (schema) => getEffect(schema.ast, false);
var defaultParseOption = {};
var go2 = (ast, isDecoding) => {
  switch (ast._tag) {
    case "Refinement": {
      if (isDecoding) {
        const from3 = go2(ast.from, true);
        return (i, options3) => handleForbidden(flatMap9(from3(i, options3), (a) => match(ast.filter(a, options3 ?? defaultParseOption, ast), {
          onNone: () => success(a),
          onSome: fail7
        })), options3);
      } else {
        const from3 = go2(to(ast), true);
        const to$1 = go2(dropRightRefinement(ast.from), false);
        return (i, options3) => handleForbidden(flatMap9(from3(i, options3), (a) => to$1(a, options3)), options3);
      }
    }
    case "Transform": {
      const transform4 = getFinalTransformation(ast.transformation, isDecoding);
      const from3 = isDecoding ? go2(ast.from, true) : go2(ast.to, false);
      const to3 = isDecoding ? go2(ast.to, true) : go2(ast.from, false);
      return (i1, options3) => handleForbidden(flatMap9(from3(i1, options3), (a) => flatMap9(transform4(a, options3 ?? defaultParseOption, ast), (i2) => to3(i2, options3))), options3);
    }
    case "Declaration": {
      const parse2 = ast.decode(isDecoding, ...ast.typeParameters);
      return (i, options3) => handleForbidden(parse2(i, options3 ?? defaultParseOption, ast), options3);
    }
    case "Literal":
      return fromRefinement(ast, (u) => u === ast.literal);
    case "UniqueSymbol":
      return fromRefinement(ast, (u) => u === ast.symbol);
    case "UndefinedKeyword":
      return fromRefinement(ast, isUndefined);
    case "VoidKeyword":
      return fromRefinement(ast, isUndefined);
    case "NeverKeyword":
      return fromRefinement(ast, isNever);
    case "UnknownKeyword":
    case "AnyKeyword":
      return success;
    case "StringKeyword":
      return fromRefinement(ast, isString);
    case "NumberKeyword":
      return fromRefinement(ast, isNumber);
    case "BooleanKeyword":
      return fromRefinement(ast, isBoolean);
    case "BigIntKeyword":
      return fromRefinement(ast, isBigInt);
    case "SymbolKeyword":
      return fromRefinement(ast, isSymbol);
    case "ObjectKeyword":
      return fromRefinement(ast, isObject);
    case "Enums":
      return fromRefinement(ast, (u) => ast.enums.some(([_, value]) => value === u));
    case "TemplateLiteral": {
      const regex = getTemplateLiteralRegex(ast);
      return fromRefinement(ast, (u) => isString(u) && regex.test(u));
    }
    case "Tuple": {
      const elements = ast.elements.map((e) => go2(e.type, isDecoding));
      const rest = pipe(ast.rest, map(mapNonEmpty((ast2) => go2(ast2, isDecoding))));
      let requiredLen = ast.elements.filter((e) => !e.isOptional).length;
      if (isSome2(ast.rest)) {
        requiredLen += ast.rest.value.length - 1;
      }
      return (input, options3) => {
        if (!Array.isArray(input)) {
          return failure(type(unknownArray, input));
        }
        const allErrors = options3?.errors === "all";
        const es = [];
        let stepKey = 0;
        const len = input.length;
        for (let i2 = len; i2 <= requiredLen - 1; i2++) {
          const e = index(i2, [missing]);
          if (allErrors) {
            es.push([stepKey++, e]);
            continue;
          } else {
            return failure(e);
          }
        }
        if (isNone2(ast.rest)) {
          for (let i2 = ast.elements.length; i2 <= len - 1; i2++) {
            const e = index(i2, [unexpected(input[i2])]);
            if (allErrors) {
              es.push([stepKey++, e]);
              continue;
            } else {
              return failures2(mutableAppend(sortByIndex(es), e));
            }
          }
        }
        const output = [];
        let i = 0;
        let queue = void 0;
        for (; i < elements.length; i++) {
          if (len < i + 1) {
            if (ast.elements[i].isOptional) {
              continue;
            }
          } else {
            const parser = elements[i];
            const te = parser(input[i], options3);
            const eu = eitherOrUndefined(te);
            if (eu) {
              if (isLeft2(eu)) {
                const e = index(i, eu.left.errors);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return failures2(mutableAppend(sortByIndex(es), e));
                }
              }
              output.push([stepKey++, eu.right]);
            } else {
              const nk = stepKey++;
              const index$1 = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap8(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = index(index$1, t.left.errors);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return unit4;
                  } else {
                    return failures2(mutableAppend(sortByIndex(es2), e));
                  }
                }
                output2.push([nk, t.right]);
                return unit4;
              }));
            }
          }
        }
        if (isSome2(rest)) {
          const head7 = headNonEmpty(rest.value);
          const tail = tailNonEmpty(rest.value);
          for (; i < len - tail.length; i++) {
            const te = head7(input[i], options3);
            const eu = eitherOrUndefined(te);
            if (eu) {
              if (isLeft2(eu)) {
                const e = index(i, eu.left.errors);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return failures2(mutableAppend(sortByIndex(es), e));
                }
              } else {
                output.push([stepKey++, eu.right]);
              }
            } else {
              const nk = stepKey++;
              const index$1 = i;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap8(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = index(index$1, t.left.errors);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return unit4;
                  } else {
                    return failures2(mutableAppend(sortByIndex(es2), e));
                  }
                } else {
                  output2.push([nk, t.right]);
                  return unit4;
                }
              }));
            }
          }
          for (let j = 0; j < tail.length; j++) {
            i += j;
            if (len < i + 1) {
              continue;
            } else {
              const te = tail[j](input[i], options3);
              const eu = eitherOrUndefined(te);
              if (eu) {
                if (isLeft2(eu)) {
                  const e = index(i, eu.left.errors);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return failures2(mutableAppend(sortByIndex(es), e));
                  }
                }
                output.push([stepKey++, eu.right]);
              } else {
                const nk = stepKey++;
                const index$1 = i;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap8(either3(te), (t) => {
                  if (isLeft2(t)) {
                    const e = index(index$1, t.left.errors);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return unit4;
                    } else {
                      return failures2(mutableAppend(sortByIndex(es2), e));
                    }
                  }
                  output2.push([nk, t.right]);
                  return unit4;
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => isNonEmptyArray2(es2) ? failures2(sortByIndex(es2)) : success(sortByIndex(output2));
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend3(() => {
            const state = {
              es: Array.from(es),
              output: Array.from(output)
            };
            return flatMap8(forEach8(cqueue, (f) => f(state), {
              concurrency: "unbounded",
              discard: true
            }), () => computeResult(state));
          });
        }
        return computeResult({
          output,
          es
        });
      };
    }
    case "TypeLiteral": {
      if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
        return fromRefinement(ast, isNotNullable);
      }
      const propertySignatures = [];
      const expectedKeys = {};
      for (const ps of ast.propertySignatures) {
        propertySignatures.push(go2(ps.type, isDecoding));
        expectedKeys[ps.name] = null;
      }
      const indexSignatures = [];
      const expectedKeyTypes = {};
      for (const is2 of ast.indexSignatures) {
        indexSignatures.push([go2(is2.parameter, isDecoding), go2(is2.type, isDecoding)]);
        const base = getParameterBase(is2.parameter);
        if (isSymbolKeyword(base)) {
          expectedKeyTypes.symbol = true;
        } else {
          expectedKeyTypes.string = true;
        }
      }
      return (input, options3) => {
        if (!isRecord(input)) {
          return failure(type(unknownRecord, input));
        }
        const allErrors = options3?.errors === "all";
        const es = [];
        let stepKey = 0;
        const onExcessPropertyError = options3?.onExcessProperty === "error";
        if (onExcessPropertyError) {
          for (const key$1 of ownKeys(input)) {
            if (!Object.prototype.hasOwnProperty.call(expectedKeys, key$1)) {
              if (!(typeof key$1 in expectedKeyTypes)) {
                const e = key(key$1, [unexpected(input[key$1])]);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return failures2(mutableAppend(sortByIndex(es), e));
                }
              }
            }
          }
        }
        const output = {};
        let queue = void 0;
        for (let i = 0; i < propertySignatures.length; i++) {
          const ps = ast.propertySignatures[i];
          const parser = propertySignatures[i];
          const name = ps.name;
          if (Object.prototype.hasOwnProperty.call(input, name)) {
            const te = parser(input[name], options3);
            const eu = eitherOrUndefined(te);
            if (eu) {
              if (isLeft2(eu)) {
                const e = key(name, eu.left.errors);
                if (allErrors) {
                  es.push([stepKey++, e]);
                  continue;
                } else {
                  return failures2(mutableAppend(sortByIndex(es), e));
                }
              }
              output[name] = eu.right;
            } else {
              const nk = stepKey++;
              const index2 = name;
              if (!queue) {
                queue = [];
              }
              queue.push(({
                es: es2,
                output: output2
              }) => flatMap8(either3(te), (t) => {
                if (isLeft2(t)) {
                  const e = key(index2, t.left.errors);
                  if (allErrors) {
                    es2.push([nk, e]);
                    return unit4;
                  } else {
                    return failures2(mutableAppend(sortByIndex(es2), e));
                  }
                }
                output2[index2] = t.right;
                return unit4;
              }));
            }
          } else {
            if (!ps.isOptional) {
              const e = key(name, [missing]);
              if (allErrors) {
                es.push([stepKey++, e]);
                continue;
              } else {
                return failure(e);
              }
            }
          }
        }
        for (let i = 0; i < indexSignatures.length; i++) {
          const parameter = indexSignatures[i][0];
          const type2 = indexSignatures[i][1];
          const keys5 = getKeysForIndexSignature(input, ast.indexSignatures[i].parameter);
          for (const key$1 of keys5) {
            if (!Object.prototype.hasOwnProperty.call(expectedKeys, key$1)) {
              const keu = eitherOrUndefined(parameter(key$1, options3));
              if (keu) {
                if (isLeft2(keu)) {
                  const e = key(key$1, keu.left.errors);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return failures2(mutableAppend(sortByIndex(es), e));
                  }
                }
              }
              const vpr = type2(input[key$1], options3);
              const veu = eitherOrUndefined(vpr);
              if (veu) {
                if (isLeft2(veu)) {
                  const e = key(key$1, veu.left.errors);
                  if (allErrors) {
                    es.push([stepKey++, e]);
                    continue;
                  } else {
                    return failures2(mutableAppend(sortByIndex(es), e));
                  }
                } else {
                  if (!Object.prototype.hasOwnProperty.call(expectedKeys, key$1)) {
                    output[key$1] = veu.right;
                  }
                }
              } else {
                const nk = stepKey++;
                const index2 = key$1;
                if (!queue) {
                  queue = [];
                }
                queue.push(({
                  es: es2,
                  output: output2
                }) => flatMap8(either3(vpr), (tv) => {
                  if (isLeft2(tv)) {
                    const e = key(index2, tv.left.errors);
                    if (allErrors) {
                      es2.push([nk, e]);
                      return unit4;
                    } else {
                      return failures2(mutableAppend(sortByIndex(es2), e));
                    }
                  } else {
                    if (!Object.prototype.hasOwnProperty.call(expectedKeys, key$1)) {
                      output2[key$1] = tv.right;
                    }
                    return unit4;
                  }
                }));
              }
            }
          }
        }
        const computeResult = ({
          es: es2,
          output: output2
        }) => isNonEmptyArray2(es2) ? failures2(sortByIndex(es2)) : success(output2);
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend3(() => {
            const state = {
              es: Array.from(es),
              output: Object.assign({}, output)
            };
            return flatMap8(forEach8(cqueue, (f) => f(state), {
              concurrency: "unbounded",
              discard: true
            }), () => computeResult(state));
          });
        }
        return computeResult({
          es,
          output
        });
      };
    }
    case "Union": {
      const searchTree = _getSearchTree(ast.types);
      const ownKeys$1 = ownKeys(searchTree.keys);
      const len = ownKeys$1.length;
      const map20 = /* @__PURE__ */ new Map();
      for (let i = 0; i < ast.types.length; i++) {
        map20.set(ast.types[i], go2(ast.types[i], isDecoding));
      }
      return (input, options3) => {
        const es = [];
        let stepKey = 0;
        let candidates = [];
        if (len > 0) {
          if (isRecord(input)) {
            for (let i = 0; i < len; i++) {
              const name = ownKeys$1[i];
              const buckets = searchTree.keys[name].buckets;
              if (Object.prototype.hasOwnProperty.call(input, name)) {
                const literal2 = String(input[name]);
                if (Object.prototype.hasOwnProperty.call(buckets, literal2)) {
                  candidates = candidates.concat(buckets[literal2]);
                } else {
                  es.push([stepKey++, key(name, [type(searchTree.keys[name].ast, input[name])])]);
                }
              } else {
                es.push([stepKey++, key(name, [missing])]);
              }
            }
          } else {
            es.push([stepKey++, type(unknownRecord, input)]);
          }
        }
        if (searchTree.otherwise.length > 0) {
          candidates = candidates.concat(searchTree.otherwise);
        }
        let queue = void 0;
        for (let i = 0; i < candidates.length; i++) {
          const pr = map20.get(candidates[i])(input, options3);
          const eu = !queue || queue.length === 0 ? eitherOrUndefined(pr) : void 0;
          if (eu) {
            if (isRight2(eu)) {
              return success(eu.right);
            } else {
              es.push([stepKey++, unionMember(eu.left.errors)]);
            }
          } else {
            const nk = stepKey++;
            if (!queue) {
              queue = [];
            }
            queue.push((state) => suspend3(() => {
              if ("finalResult" in state) {
                return unit4;
              } else {
                return flatMap8(either3(pr), (t) => {
                  if (isRight2(t)) {
                    state.finalResult = success(t.right);
                  } else {
                    state.es.push([nk, unionMember(t.left.errors)]);
                  }
                  return unit4;
                });
              }
            }));
          }
        }
        const computeResult = (es2) => isNonEmptyArray2(es2) ? failures2(sortByIndex(es2)) : (
          // this should never happen
          failure(type(neverKeyword, input))
        );
        if (queue && queue.length > 0) {
          const cqueue = queue;
          return suspend3(() => {
            const state = {
              es: Array.from(es)
            };
            return flatMap8(forEach8(cqueue, (f) => f(state), {
              concurrency: 1,
              discard: true
            }), () => {
              if ("finalResult" in state) {
                return state.finalResult;
              }
              return computeResult(state.es);
            });
          });
        }
        return computeResult(es);
      };
    }
    case "Lazy": {
      const get15 = memoizeThunk(() => go2(ast.f(), isDecoding));
      return (a, options3) => get15()(a, options3);
    }
  }
};
var fromRefinement = (ast, refinement) => (u) => refinement(u) ? success(u) : failure(type(ast, u));
var _getLiterals = (ast) => {
  switch (ast._tag) {
    case "Declaration":
      return _getLiterals(ast.type);
    case "TypeLiteral": {
      const out = [];
      for (let i = 0; i < ast.propertySignatures.length; i++) {
        const propertySignature = ast.propertySignatures[i];
        const type2 = from(propertySignature.type);
        if (isLiteral(type2) && !propertySignature.isOptional) {
          out.push([propertySignature.name, type2]);
        }
      }
      return out;
    }
    case "Refinement":
    case "Transform":
      return _getLiterals(ast.from);
  }
  return [];
};
var _getSearchTree = (members) => {
  const keys5 = {};
  const otherwise = [];
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const tags = _getLiterals(member);
    if (tags.length > 0) {
      for (let j = 0; j < tags.length; j++) {
        const [key2, literal2] = tags[j];
        const hash2 = String(literal2.literal);
        keys5[key2] = keys5[key2] || {
          buckets: {},
          ast: neverKeyword
        };
        const buckets = keys5[key2].buckets;
        if (Object.prototype.hasOwnProperty.call(buckets, hash2)) {
          if (j < tags.length - 1) {
            continue;
          }
          buckets[hash2].push(member);
          keys5[key2].ast = createUnion([keys5[key2].ast, literal2]);
        } else {
          buckets[hash2] = [member];
          keys5[key2].ast = createUnion([keys5[key2].ast, literal2]);
          break;
        }
      }
    } else {
      otherwise.push(member);
    }
  }
  return {
    keys: keys5,
    otherwise
  };
};
var dropRightRefinement = (ast) => isRefinement(ast) ? dropRightRefinement(ast.from) : ast;
var handleForbidden = (conditional, options3) => {
  const eu = eitherOrUndefined(conditional);
  return eu ? eu : options3?.isEffectAllowed === true ? conditional : failure(forbidden);
};
var unknownArray = /* @__PURE__ */ createTuple([], /* @__PURE__ */ some2([unknownKeyword]), true, {
  [DescriptionAnnotationId]: "a generic array"
});
var unknownRecord = /* @__PURE__ */ createTypeLiteral([], [/* @__PURE__ */ createIndexSignature(stringKeyword, unknownKeyword, true), /* @__PURE__ */ createIndexSignature(symbolKeyword, unknownKeyword, true)], {
  [DescriptionAnnotationId]: "a generic object"
});
var mutableAppend = (self, a) => {
  self.push(a);
  return self;
};
var getTemplateLiteralRegex = (ast) => {
  let pattern = `^${ast.head}`;
  for (const span of ast.spans) {
    if (isStringKeyword(span.type)) {
      pattern += ".*";
    } else if (isNumberKeyword(span.type)) {
      pattern += "-?\\d+(\\.\\d+)?";
    }
    pattern += span.literal;
  }
  pattern += "$";
  return new RegExp(pattern);
};
function sortByIndex(es) {
  return es.sort(([a], [b]) => a > b ? 1 : a < b ? -1 : 0).map(([_, a]) => a);
}
var getFinalPropertySignatureTransformation = (transformation, isDecoding) => {
  switch (transformation._tag) {
    case "FinalPropertySignatureTransformation":
      return isDecoding ? transformation.decode : transformation.encode;
  }
};
var getFinalTransformation = (transformation, isDecoding) => {
  switch (transformation._tag) {
    case "FinalTransformation":
      return isDecoding ? transformation.decode : transformation.encode;
    case "ComposeTransformation":
      return success;
    case "TypeLiteralTransformation":
      return (input) => {
        let out = right2(input);
        for (const pst of transformation.propertySignatureTransformations) {
          const [from3, to3] = isDecoding ? [pst.from, pst.to] : [pst.to, pst.from];
          const transform4 = getFinalPropertySignatureTransformation(pst.propertySignatureTransformation, isDecoding);
          const f = (input2) => {
            const o = transform4(Object.prototype.hasOwnProperty.call(input2, from3) ? some2(input2[from3]) : none2());
            if (isSome2(o)) {
              input2[to3] = o.value;
            } else {
              delete input2[from3];
            }
            return input2;
          };
          out = map15(out, f);
        }
        return out;
      };
  }
};

// node_modules/.pnpm/@effect+schema@0.43.2_effect@2.0.0-next.48_fast-check@3.13.1/node_modules/@effect/schema/Schema/dist/effect-schema-Schema.esm.js
var TypeId13 = /* @__PURE__ */ Symbol.for("@effect/schema/Schema");
var from2 = (schema) => make40(from(schema.ast));
var to2 = (schema) => make40(to(schema.ast));
var variance4 = {
  From: (_) => _,
  To: (_) => _
};
var SchemaImpl = class {
  [TypeId13] = variance4;
  constructor(ast) {
    this.ast = ast;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make40 = (ast) => new SchemaImpl(ast);
var makeLiteral = (value) => make40(createLiteral(value));
var literal = (...literals) => union8(...literals.map((literal2) => makeLiteral(literal2)));
var declare = (typeParameters, type2, decode3, annotations) => make40(createDeclaration(typeParameters.map((tp) => tp.ast), type2.ast, (isDecoding, ...typeParameters2) => decode3(isDecoding, ...typeParameters2.map(make40)), annotations));
var _null = /* @__PURE__ */ make40(/* @__PURE__ */ createLiteral(null));
var string4 = /* @__PURE__ */ make40(stringKeyword);
var number4 = /* @__PURE__ */ make40(numberKeyword);
var boolean3 = /* @__PURE__ */ make40(booleanKeyword);
var union8 = (...members) => make40(createUnion(members.map((m) => m.ast)));
var nullable = (self) => union8(_null, self);
var array5 = (item) => make40(createTuple([], some2([item.ast]), true));
var PropertySignatureImpl = class _PropertySignatureImpl {
  [TypeId13] = variance4;
  constructor(config) {
    this.config = config;
  }
  withDefault(value) {
    return new _PropertySignatureImpl({
      _tag: "Default",
      ast: this.config.ast,
      value,
      annotations: this.config.annotations
    });
  }
  toOption() {
    return new _PropertySignatureImpl({
      _tag: "Option",
      ast: this.config.ast,
      annotations: this.config.annotations
    });
  }
};
var optional = (schema, options3) => new PropertySignatureImpl({
  _tag: "Optional",
  ast: schema.ast,
  annotations: toAnnotations(options3)
});
var struct3 = (fields) => {
  const ownKeys$1 = ownKeys(fields);
  const pss = [];
  const froms = [];
  const tos = [];
  const propertySignatureTransformations = [];
  for (let i = 0; i < ownKeys$1.length; i++) {
    const key2 = ownKeys$1[i];
    const field = fields[key2];
    if ("config" in field) {
      const config = field.config;
      const from3 = config.ast;
      const to3 = to(from3);
      const annotations = config.annotations;
      switch (config._tag) {
        case "PropertySignature":
          pss.push(createPropertySignature(key2, from3, false, true, annotations));
          froms.push(createPropertySignature(key2, from3, false, true));
          tos.push(createPropertySignature(key2, to3, false, true, annotations));
          break;
        case "Optional":
          pss.push(createPropertySignature(key2, from3, true, true, annotations));
          froms.push(createPropertySignature(key2, from3, true, true));
          tos.push(createPropertySignature(key2, to3, true, true, annotations));
          break;
        case "Default":
          froms.push(createPropertySignature(key2, from3, true, true));
          tos.push(createPropertySignature(key2, to3, false, true, annotations));
          propertySignatureTransformations.push(createPropertySignatureTransform(key2, key2, createFinalPropertySignatureTransformation(orElse(() => some2(config.value())), identity)));
          break;
        case "Option":
          froms.push(createPropertySignature(key2, from3, true, true));
          tos.push(createPropertySignature(key2, optionFromSelf(make40(to3)).ast, false, true, annotations));
          propertySignatureTransformations.push(createPropertySignatureTransform(key2, key2, createFinalPropertySignatureTransformation(some2, flatten)));
          break;
      }
    } else {
      pss.push(createPropertySignature(key2, field.ast, false, true));
      froms.push(createPropertySignature(key2, field.ast, false, true));
      tos.push(createPropertySignature(key2, to(field.ast), false, true));
    }
  }
  if (isNonEmptyReadonlyArray(propertySignatureTransformations)) {
    return make40(createTransform(createTypeLiteral(froms, []), createTypeLiteral(tos, []), createTypeLiteralTransformation(propertySignatureTransformations)));
  }
  return make40(createTypeLiteral(pss, []));
};
function filter7(predicate, options3) {
  return (self) => make40(createRefinement(self.ast, (a, _, ast) => predicate(a) ? none2() : some2(parseError([type(ast, a)])), toAnnotations(options3)));
}
var transformOrFail = /* @__PURE__ */ dual(4, (from3, to3, decode3, encode2, annotations) => make40(createTransform(from3.ast, to3.ast, createFinalTransformation(decode3, encode2), annotations)));
var transform2 = /* @__PURE__ */ dual(4, (from3, to3, decode3, encode2) => transformOrFail(from3, to3, (a, options3, ast) => right2(decode3(a, options3, ast)), (b, options3, ast) => right2(encode2(b, options3, ast))));
var toAnnotations = (options3) => {
  if (!options3) {
    return {};
  }
  const out = {};
  const custom = Object.getOwnPropertySymbols(options3);
  for (const sym of custom) {
    out[sym] = options3[sym];
  }
  if (options3.typeId !== void 0) {
    const typeId = options3.typeId;
    if (typeof typeId === "object") {
      out[TypeAnnotationId] = typeId.id;
      out[typeId.id] = typeId.params;
    } else {
      out[TypeAnnotationId] = typeId;
    }
  }
  const move = (from3, to3) => {
    if (options3[from3] !== void 0) {
      out[to3] = options3[from3];
    }
  };
  move("message", MessageAnnotationId);
  move("identifier", IdentifierAnnotationId);
  move("title", TitleAnnotationId);
  move("description", DescriptionAnnotationId);
  move("examples", ExamplesAnnotationId);
  move("documentation", DocumentationAnnotationId);
  move("jsonSchema", JSONSchemaAnnotationId);
  move("arbitrary", ArbitraryHookId);
  move("pretty", PrettyHookId);
  return out;
};
var IntTypeId = /* @__PURE__ */ Symbol.for("@effect/schema/TypeId/Int");
var int = (options3) => (self) => self.pipe(filter7((a) => Number.isSafeInteger(a), {
  typeId: IntTypeId,
  description: "integer",
  jsonSchema: {
    type: "integer"
  },
  ...options3
}));
var Int = /* @__PURE__ */ number4.pipe(/* @__PURE__ */ int());
var dateArbitrary = () => (fc) => fc.date();
var datePretty = () => (date) => `new Date(${JSON.stringify(date)})`;
var DateFromSelf = /* @__PURE__ */ declare([], /* @__PURE__ */ struct3({}), () => (u, _, ast) => !isDate(u) ? failure(type(ast, u)) : success(u), {
  [IdentifierAnnotationId]: "Date",
  [PrettyHookId]: datePretty,
  [ArbitraryHookId]: dateArbitrary
});
var optionArbitrary = (value) => (fc) => fc.oneof(fc.constant(none2()), value(fc).map(some2));
var optionPretty = (value) => match({
  onNone: () => "none()",
  onSome: (a) => `some(${value(a)})`
});
var optionInline = (value) => union8(struct3({
  _tag: literal("None")
}), struct3({
  _tag: literal("Some"),
  value
}));
var optionFromSelf = (value) => {
  return declare([value], optionInline(value), (isDecoding, value2) => {
    const parse$1 = isDecoding ? parse(value2) : encode(value2);
    return (u, options3, ast) => !isOption2(u) ? failure(type(ast, u)) : isNone2(u) ? success(none2()) : map15(parse$1(u.value, options3), some2);
  }, {
    [IdentifierAnnotationId]: "Option",
    [PrettyHookId]: optionPretty,
    [ArbitraryHookId]: optionArbitrary
  });
};
var Class2 = () => (fields) => makeClass(struct3(fields), fields, Class.prototype);
var makeClass = (selfSchema, selfFields, base) => {
  const validator = validateSync(selfSchema);
  const fn = function(props) {
    Object.assign(this, validator(props));
  };
  fn.prototype = Object.create(base);
  fn[TypeId13] = variance4;
  fn.pipe = function pipe2() {
    return pipeArguments(this, arguments);
  };
  Object.defineProperty(fn, "ast", {
    get() {
      if (this._ast) {
        return this._ast;
      }
      const toSchema = to2(selfSchema);
      this._ast = transform2(selfSchema, declare([toSchema], toSchema, () => (input, _, ast) => input instanceof this ? success(input) : failure(type(ast, input)), {
        [DescriptionAnnotationId]: `an instance of ${this.name}`,
        [ArbitraryHookId]: (struct4) => (fc) => struct4(fc).map((props) => new this(props))
      }), (input) => Object.assign(Object.create(this.prototype), input), (input) => ({
        ...input
      })).ast;
      return this._ast;
    }
  });
  fn.struct = selfSchema;
  fn.extend = function() {
    return (fields) => {
      const newFields = {
        ...selfFields,
        ...fields
      };
      return makeClass(struct3(newFields), newFields, this.prototype);
    };
  };
  fn.transform = function() {
    return (fields, decode3, encode2) => {
      const newFields = {
        ...selfFields,
        ...fields
      };
      return makeClass(transformOrFail(selfSchema, to2(struct3(newFields)), decode3, encode2), newFields, this.prototype);
    };
  };
  fn.transformFrom = function() {
    return (fields, decode3, encode2) => {
      const newFields = {
        ...selfFields,
        ...fields
      };
      return makeClass(transformOrFail(from2(selfSchema), struct3(newFields), decode3, encode2), newFields, this.prototype);
    };
  };
  return fn;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/queue.esm.js
var EnqueueSymbolKey = "effect/QueueEnqueue";
var EnqueueTypeId = /* @__PURE__ */ Symbol.for(EnqueueSymbolKey);
var DequeueSymbolKey = "effect/QueueDequeue";
var DequeueTypeId = /* @__PURE__ */ Symbol.for(DequeueSymbolKey);
var QueueStrategySymbolKey = "effect/QueueStrategy";
var QueueStrategyTypeId = /* @__PURE__ */ Symbol.for(QueueStrategySymbolKey);
var queueStrategyVariance = {
  _A: (_) => _
};
var enqueueVariance = {
  _In: (_) => _
};
var dequeueVariance = {
  _Out: (_) => _
};
var QueueImpl = class {
  [EnqueueTypeId] = enqueueVariance;
  [DequeueTypeId] = dequeueVariance;
  constructor(queue, takers, shutdownHook, shutdownFlag, strategy) {
    this.queue = queue;
    this.takers = takers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  capacity() {
    return this.queue.capacity();
  }
  size() {
    return suspend(() => catchAll(this.unsafeSize(), () => interrupt2));
  }
  unsafeSize() {
    if (get7(this.shutdownFlag)) {
      return none2();
    }
    return some2(this.queue.length() - length2(this.takers) + this.strategy.surplusSize());
  }
  isEmpty() {
    return map9(this.size(), (size12) => size12 <= 0);
  }
  isFull() {
    return map9(this.size(), (size12) => size12 >= this.capacity());
  }
  shutdown() {
    return uninterruptible(withFiberRuntime((state) => {
      pipe(this.shutdownFlag, set3(true));
      return pipe(forEachParUnboundedDiscard(unsafePollAll(this.takers), (d) => deferredInterruptWith(d, state.id()), false), zipRight(this.strategy.shutdown()), whenEffect(deferredSucceed(this.shutdownHook, void 0)), asUnit);
    }));
  }
  isShutdown() {
    return sync(() => get7(this.shutdownFlag));
  }
  awaitShutdown() {
    return deferredAwait(this.shutdownHook);
  }
  isActive() {
    return !get7(this.shutdownFlag);
  }
  unsafeOffer(value) {
    if (get7(this.shutdownFlag)) {
      return false;
    }
    let noRemaining;
    if (this.queue.length() === 0) {
      const taker = pipe(this.takers, poll2(EmptyMutableQueue));
      if (taker !== EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, value);
        noRemaining = true;
      } else {
        noRemaining = false;
      }
    } else {
      noRemaining = false;
    }
    if (noRemaining) {
      return true;
    }
    const succeeded = this.queue.offer(value);
    unsafeCompleteTakers(this.strategy, this.queue, this.takers);
    return succeeded;
  }
  offer(value) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      let noRemaining;
      if (this.queue.length() === 0) {
        const taker = pipe(this.takers, poll2(EmptyMutableQueue));
        if (taker !== EmptyMutableQueue) {
          unsafeCompleteDeferred(taker, value);
          noRemaining = true;
        } else {
          noRemaining = false;
        }
      } else {
        noRemaining = false;
      }
      if (noRemaining) {
        return succeed(true);
      }
      const succeeded = this.queue.offer(value);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return succeeded ? succeed(true) : this.strategy.handleSurplus([value], this.queue, this.takers, this.shutdownFlag);
    });
  }
  offerAll(iterable) {
    return suspend(() => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const values3 = fromIterable2(iterable);
      const pTakers = this.queue.length() === 0 ? fromIterable2(unsafePollN(this.takers, values3.length)) : empty2;
      const [forTakers, remaining] = pipe(values3, splitAt(pTakers.length));
      for (let i = 0; i < pTakers.length; i++) {
        const taker = pTakers[i];
        const item = forTakers[i];
        unsafeCompleteDeferred(taker, item);
      }
      if (remaining.length === 0) {
        return succeed(true);
      }
      const surplus = this.queue.offerAll(remaining);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return isEmpty(surplus) ? succeed(true) : this.strategy.handleSurplus(surplus, this.queue, this.takers, this.shutdownFlag);
    });
  }
  take() {
    return withFiberRuntime((state) => {
      if (get7(this.shutdownFlag)) {
        return interrupt2;
      }
      const item = this.queue.poll(EmptyMutableQueue);
      if (item !== EmptyMutableQueue) {
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return succeed(item);
      } else {
        const deferred = deferredUnsafeMake(state.id());
        return pipe(suspend(() => {
          pipe(this.takers, offer(deferred));
          unsafeCompleteTakers(this.strategy, this.queue, this.takers);
          return get7(this.shutdownFlag) ? interrupt2 : deferredAwait(deferred);
        }), onInterrupt(() => {
          return sync(() => unsafeRemove(this.takers, deferred));
        }));
      }
    });
  }
  takeAll() {
    return suspend(() => {
      return get7(this.shutdownFlag) ? interrupt2 : sync(() => {
        const values3 = this.queue.pollUpTo(Number.POSITIVE_INFINITY);
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return fromIterable3(values3);
      });
    });
  }
  takeUpTo(max5) {
    return suspend(() => get7(this.shutdownFlag) ? interrupt2 : sync(() => {
      const values3 = this.queue.pollUpTo(max5);
      this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
      return fromIterable3(values3);
    }));
  }
  takeBetween(min3, max5) {
    return suspend(() => takeRemainderLoop(this, min3, max5, empty3()));
  }
};
var takeRemainderLoop = (self, min3, max5, acc) => {
  if (max5 < min3) {
    return succeed(acc);
  }
  return pipe(takeUpTo(self, max5), flatMap7((bs) => {
    const remaining = min3 - bs.length;
    if (remaining === 1) {
      return pipe(take2(self), map9((b) => pipe(acc, appendAll(bs), append2(b))));
    }
    if (remaining > 1) {
      return pipe(take2(self), flatMap7((b) => takeRemainderLoop(self, remaining - 1, max5 - bs.length - 1, pipe(acc, appendAll(bs), append2(b)))));
    }
    return succeed(pipe(acc, appendAll(bs)));
  }));
};
var bounded2 = (requestedCapacity) => pipe(sync(() => bounded(requestedCapacity)), flatMap7((queue) => make41(backingQueueFromMutableQueue(queue), backPressureStrategy())));
var unbounded2 = () => pipe(sync(() => unbounded()), flatMap7((queue) => make41(backingQueueFromMutableQueue(queue), droppingStrategy())));
var unsafeMake7 = (queue, takers, shutdownHook, shutdownFlag, strategy) => {
  return new QueueImpl(queue, takers, shutdownHook, shutdownFlag, strategy);
};
var make41 = (queue, strategy) => pipe(deferredMake(), map9((deferred) => unsafeMake7(queue, unbounded(), deferred, make11(false), strategy)));
var BackingQueueFromMutableQueue = class {
  constructor(mutable2) {
    this.mutable = mutable2;
  }
  poll(def) {
    return poll2(this.mutable, def);
  }
  pollUpTo(limit) {
    return pollUpTo(this.mutable, limit);
  }
  offerAll(elements) {
    return offerAll(this.mutable, elements);
  }
  offer(element) {
    return offer(this.mutable, element);
  }
  capacity() {
    return capacity(this.mutable);
  }
  length() {
    return length2(this.mutable);
  }
};
var backingQueueFromMutableQueue = (mutable2) => new BackingQueueFromMutableQueue(mutable2);
var size10 = (self) => self.size();
var shutdown = (self) => self.shutdown();
var offer2 = /* @__PURE__ */ dual(2, (self, value) => self.offer(value));
var take2 = (self) => self.take();
var takeUpTo = /* @__PURE__ */ dual(2, (self, max5) => self.takeUpTo(max5));
var backPressureStrategy = () => new BackPressureStrategy();
var droppingStrategy = () => new DroppingStrategy();
var BackPressureStrategy = class {
  [QueueStrategyTypeId] = queueStrategyVariance;
  putters = unbounded();
  surplusSize() {
    return length2(this.putters);
  }
  onCompleteTakersWithEmptyQueue(takers) {
    while (!isEmpty9(this.putters) && !isEmpty9(takers)) {
      const taker = poll2(takers, void 0);
      const putter = poll2(this.putters, void 0);
      if (putter[2]) {
        unsafeCompleteDeferred(putter[1], true);
      }
      unsafeCompleteDeferred(taker, putter[0]);
    }
  }
  shutdown() {
    return pipe(fiberId, flatMap7((fiberId2) => pipe(sync(() => unsafePollAll(this.putters)), flatMap7((putters) => forEachParUnboundedDiscard(putters, ([_, deferred, isLastItem]) => isLastItem ? pipe(deferredInterruptWith(deferred, fiberId2), asUnit) : unit, false)))));
  }
  handleSurplus(iterable, queue, takers, isShutdown3) {
    return withFiberRuntime((state) => {
      const deferred = deferredUnsafeMake(state.id());
      return pipe(suspend(() => {
        this.unsafeOffer(iterable, deferred);
        this.unsafeOnQueueEmptySpace(queue, takers);
        unsafeCompleteTakers(this, queue, takers);
        return get7(isShutdown3) ? interrupt2 : deferredAwait(deferred);
      }), onInterrupt(() => sync(() => this.unsafeRemove(deferred))));
    });
  }
  unsafeOnQueueEmptySpace(queue, takers) {
    let keepPolling = true;
    while (keepPolling && (queue.capacity() === Number.POSITIVE_INFINITY || queue.length() < queue.capacity())) {
      const putter = pipe(this.putters, poll2(EmptyMutableQueue));
      if (putter === EmptyMutableQueue) {
        keepPolling = false;
      } else {
        const offered = queue.offer(putter[0]);
        if (offered && putter[2]) {
          unsafeCompleteDeferred(putter[1], true);
        } else if (!offered) {
          unsafeOfferAll(this.putters, pipe(unsafePollAll(this.putters), prepend2(putter)));
        }
        unsafeCompleteTakers(this, queue, takers);
      }
    }
  }
  unsafeOffer(iterable, deferred) {
    const stuff = Array.from(iterable);
    for (let i = 0; i < stuff.length; i++) {
      const value = stuff[i];
      if (i === stuff.length - 1) {
        pipe(this.putters, offer([value, deferred, true]));
      } else {
        pipe(this.putters, offer([value, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll(this.putters, pipe(unsafePollAll(this.putters), filter(([, _]) => _ !== deferred)));
  }
};
var DroppingStrategy = class {
  [QueueStrategyTypeId] = queueStrategyVariance;
  surplusSize() {
    return 0;
  }
  shutdown() {
    return unit;
  }
  onCompleteTakersWithEmptyQueue() {
  }
  handleSurplus(_iterable, _queue, _takers, _isShutdown) {
    return succeed(false);
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
  }
};
var unsafeCompleteDeferred = (deferred, a) => {
  return deferredUnsafeDone(deferred, succeed(a));
};
var unsafeOfferAll = (queue, as5) => {
  return pipe(queue, offerAll(as5));
};
var unsafePollAll = (queue) => {
  return pipe(queue, pollUpTo(Number.POSITIVE_INFINITY));
};
var unsafePollN = (queue, max5) => {
  return pipe(queue, pollUpTo(max5));
};
var unsafeRemove = (queue, a) => {
  unsafeOfferAll(queue, pipe(unsafePollAll(queue), filter((b) => a !== b)));
};
var unsafeCompleteTakers = (strategy, queue, takers) => {
  let keepPolling = true;
  while (keepPolling && queue.length() !== 0) {
    const taker = pipe(takers, poll2(EmptyMutableQueue));
    if (taker !== EmptyMutableQueue) {
      const element = queue.poll(EmptyMutableQueue);
      if (element !== EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, element);
        strategy.unsafeOnQueueEmptySpace(queue, takers);
      } else {
        unsafeOfferAll(takers, pipe(unsafePollAll(takers), prepend2(taker)));
      }
      keepPolling = true;
    } else {
      keepPolling = false;
    }
  }
  if (keepPolling && queue.length() === 0 && !isEmpty9(takers)) {
    strategy.onCompleteTakersWithEmptyQueue(takers);
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Queue/dist/effect-Queue.esm.js
var bounded3 = bounded2;
var unbounded3 = unbounded2;
var size11 = size10;
var shutdown2 = shutdown;
var offer3 = offer2;
var take3 = take2;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Layer/dist/effect-Layer.esm.js
var effect = fromEffect3;
var succeed7 = succeed5;
var toRuntime2 = toRuntime;
var use3 = use2;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelChildExecutorDecision.esm.js
var OP_CONTINUE = "Continue";
var OP_CLOSE = "Close";
var OP_YIELD2 = "Yield";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/childExecutorDecision.esm.js
var ChildExecutorDecisionSymbolKey = "effect/ChannelChildExecutorDecision";
var ChildExecutorDecisionTypeId = /* @__PURE__ */ Symbol.for(ChildExecutorDecisionSymbolKey);
var proto5 = {
  [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId
};
var Continue = (_) => {
  const op = Object.create(proto5);
  op._tag = OP_CONTINUE;
  return op;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/continuation.esm.js
var OP_CONTINUATION_K = "ContinuationK";
var OP_CONTINUATION_FINALIZER = "ContinuationFinalizer";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/continuation.esm.js
var ContinuationTypeId = /* @__PURE__ */ Symbol.for("effect/ChannelContinuation");
var continuationVariance = {
  _Env: (_) => _,
  _InErr: (_) => _,
  _InElem: (_) => _,
  _InDone: (_) => _,
  _OutErr: (_) => _,
  _OutDone: (_) => _,
  _OutErr2: (_) => _,
  _OutElem: (_) => _,
  _OutDone2: (_) => _
};
var ContinuationKImpl = class {
  _tag = OP_CONTINUATION_K;
  [ContinuationTypeId] = continuationVariance;
  constructor(onSuccess, onHalt) {
    this.onSuccess = onSuccess;
    this.onHalt = onHalt;
  }
  onExit(exit3) {
    return isFailure(exit3) ? this.onHalt(exit3.cause) : this.onSuccess(exit3.value);
  }
};
var ContinuationFinalizerImpl = class {
  _tag = OP_CONTINUATION_FINALIZER;
  [ContinuationTypeId] = continuationVariance;
  constructor(finalizer2) {
    this.finalizer = finalizer2;
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelUpstreamPullStrategy.esm.js
var OP_PULL_AFTER_NEXT = "PullAfterNext";
var OP_PULL_AFTER_ALL_ENQUEUED = "PullAfterAllEnqueued";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/upstreamPullStrategy.esm.js
var UpstreamPullStrategySymbolKey = "effect/ChannelUpstreamPullStrategy";
var UpstreamPullStrategyTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullStrategySymbolKey);
var upstreamPullStrategyVariance = {
  _A: (_) => _
};
var proto6 = {
  [UpstreamPullStrategyTypeId]: upstreamPullStrategyVariance
};
var PullAfterNext = (emitSeparator) => {
  const op = Object.create(proto6);
  op._tag = OP_PULL_AFTER_NEXT;
  op.emitSeparator = emitSeparator;
  return op;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channel.esm.js
var OP_BRACKET_OUT = "BracketOut";
var OP_BRIDGE = "Bridge";
var OP_CONCAT_ALL = "ConcatAll";
var OP_EMIT = "Emit";
var OP_ENSURING = "Ensuring";
var OP_FAIL3 = "Fail";
var OP_FOLD2 = "Fold";
var OP_FROM_EFFECT2 = "FromEffect";
var OP_PIPE_TO = "PipeTo";
var OP_PROVIDE = "Provide";
var OP_READ = "Read";
var OP_SUCCEED = "Succeed";
var OP_SUCCEED_NOW = "SucceedNow";
var OP_SUSPEND2 = "Suspend";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/core-stream.esm.js
var ChannelSymbolKey = "effect/Channel";
var ChannelTypeId2 = /* @__PURE__ */ Symbol.for(ChannelSymbolKey);
var channelVariance2 = {
  _Env: (_) => _,
  _InErr: (_) => _,
  _InElem: (_) => _,
  _InDone: (_) => _,
  _OutErr: (_) => _,
  _OutElem: (_) => _,
  _OutDone: (_) => _
};
var proto7 = {
  [ChannelTypeId2]: channelVariance2,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isChannel = (u) => typeof u === "object" && u != null && ChannelTypeId2 in u || isEffect2(u);
var acquireReleaseOut = /* @__PURE__ */ dual(2, (self, release) => {
  const op = Object.create(proto7);
  op._tag = OP_BRACKET_OUT;
  op.acquire = () => self;
  op.finalizer = release;
  return op;
});
var concatAllWith = (channels, f, g) => {
  const op = Object.create(proto7);
  op._tag = OP_CONCAT_ALL;
  op.combineInners = f;
  op.combineAll = g;
  op.onPull = () => PullAfterNext(none2());
  op.onEmit = () => Continue;
  op.value = () => channels;
  op.k = identity;
  return op;
};
var concatMapWith = /* @__PURE__ */ dual(4, (self, f, g, h) => {
  const op = Object.create(proto7);
  op._tag = OP_CONCAT_ALL;
  op.combineInners = g;
  op.combineAll = h;
  op.onPull = () => PullAfterNext(none2());
  op.onEmit = () => Continue;
  op.value = () => self;
  op.k = f;
  return op;
});
var embedInput = /* @__PURE__ */ dual(2, (self, input) => {
  const op = Object.create(proto7);
  op._tag = OP_BRIDGE;
  op.input = input;
  op.channel = self;
  return op;
});
var ensuringWith = /* @__PURE__ */ dual(2, (self, finalizer2) => {
  const op = Object.create(proto7);
  op._tag = OP_ENSURING;
  op.channel = self;
  op.finalizer = finalizer2;
  return op;
});
var fail9 = (error) => failCause7(fail4(error));
var failCause7 = (cause2) => failCauseSync3(() => cause2);
var failCauseSync3 = (evaluate) => {
  const op = Object.create(proto7);
  op._tag = OP_FAIL3;
  op.error = evaluate;
  return op;
};
var flatMap11 = /* @__PURE__ */ dual(2, (self, f) => {
  const op = Object.create(proto7);
  op._tag = OP_FOLD2;
  op.channel = self;
  op.k = new ContinuationKImpl(f, failCause7);
  return op;
});
var fromEffect4 = (effect3) => {
  const op = Object.create(proto7);
  op._tag = OP_FROM_EFFECT2;
  op.effect = () => effect3;
  return op;
};
var pipeTo = /* @__PURE__ */ dual(2, (self, that) => {
  const op = Object.create(proto7);
  op._tag = OP_PIPE_TO;
  op.left = () => self;
  op.right = () => that;
  return op;
});
var readWith = (options3) => readWithCause({
  onInput: options3.onInput,
  onFailure: (cause2) => match2(failureOrCause2(cause2), {
    onLeft: options3.onFailure,
    onRight: failCause7
  }),
  onDone: options3.onDone
});
var readWithCause = (options3) => {
  const op = Object.create(proto7);
  op._tag = OP_READ;
  op.more = options3.onInput;
  op.done = new ContinuationKImpl(options3.onDone, options3.onFailure);
  return op;
};
var succeed8 = (value) => sync4(() => value);
var succeedNow = (result) => {
  const op = Object.create(proto7);
  op._tag = OP_SUCCEED_NOW;
  op.terminal = result;
  return op;
};
var suspend4 = (evaluate) => {
  const op = Object.create(proto7);
  op._tag = OP_SUSPEND2;
  op.channel = evaluate;
  return op;
};
var sync4 = (evaluate) => {
  const op = Object.create(proto7);
  op._tag = OP_SUCCEED;
  op.evaluate = evaluate;
  return op;
};
var unit5 = /* @__PURE__ */ succeedNow(void 0);
var write = (out) => {
  const op = Object.create(proto7);
  op._tag = OP_EMIT;
  op.out = out;
  return op;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelState.esm.js
var OP_DONE3 = "Done";
var OP_EMIT2 = "Emit";
var OP_FROM_EFFECT3 = "FromEffect";
var OP_READ2 = "Read";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/channelState.esm.js
var ChannelStateTypeId = /* @__PURE__ */ Symbol.for("effect/ChannelState");
var channelStateVariance = {
  _R: (_) => _,
  _E: (_) => _
};
var proto8 = {
  [ChannelStateTypeId]: channelStateVariance
};
var Done2 = () => {
  const op = Object.create(proto8);
  op._tag = OP_DONE3;
  return op;
};
var Emit = () => {
  const op = Object.create(proto8);
  op._tag = OP_EMIT2;
  return op;
};
var FromEffect = (effect3) => {
  const op = Object.create(proto8);
  op._tag = OP_FROM_EFFECT3;
  op.effect = effect3;
  return op;
};
var Read = (upstream, onEffect, onEmit, onDone2) => {
  const op = Object.create(proto8);
  op._tag = OP_READ2;
  op.upstream = upstream;
  op.onEffect = onEffect;
  op.onEmit = onEmit;
  op.onDone = onDone2;
  return op;
};
var isFromEffect = (self) => self._tag === OP_FROM_EFFECT3;
var effect2 = (self) => isFromEffect(self) ? self.effect : unit4;
var effectOrUndefinedIgnored = (self) => isFromEffect(self) ? ignore2(self.effect) : void 0;

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/subexecutor.esm.js
var OP_PULL_FROM_CHILD = "PullFromChild";
var OP_PULL_FROM_UPSTREAM = "PullFromUpstream";
var OP_DRAIN_CHILD_EXECUTORS = "DrainChildExecutors";
var OP_EMIT3 = "Emit";
var PullFromChild = class {
  _tag = OP_PULL_FROM_CHILD;
  constructor(childExecutor, parentSubexecutor, onEmit) {
    this.childExecutor = childExecutor;
    this.parentSubexecutor = parentSubexecutor;
    this.onEmit = onEmit;
  }
  close(exit$1) {
    const fin1 = this.childExecutor.close(exit$1);
    const fin2 = this.parentSubexecutor.close(exit$1);
    if (fin1 !== void 0 && fin2 !== void 0) {
      return zipWith4(exit2(fin1), exit2(fin2), (exit1, exit22) => pipe(exit1, zipRight2(exit22)));
    } else if (fin1 !== void 0) {
      return fin1;
    } else if (fin2 !== void 0) {
      return fin2;
    } else {
      return void 0;
    }
  }
  enqueuePullFromChild(_child) {
    return this;
  }
};
var PullFromUpstream = class _PullFromUpstream {
  _tag = OP_PULL_FROM_UPSTREAM;
  constructor(upstreamExecutor, createChild, lastDone, activeChildExecutors, combineChildResults, combineWithChildResult, onPull, onEmit) {
    this.upstreamExecutor = upstreamExecutor;
    this.createChild = createChild;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
    this.onEmit = onEmit;
  }
  close(exit$1) {
    const fin1 = this.upstreamExecutor.close(exit$1);
    const fins = [...this.activeChildExecutors.map((child) => child !== void 0 ? child.childExecutor.close(exit$1) : void 0), fin1];
    const result = fins.reduce((acc, next2) => {
      if (acc !== void 0 && next2 !== void 0) {
        return zipWith4(acc, exit2(next2), (exit1, exit22) => zipRight2(exit1, exit22));
      } else if (acc !== void 0) {
        return acc;
      } else if (next2 !== void 0) {
        return exit2(next2);
      } else {
        return void 0;
      }
    }, void 0);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(child) {
    return new _PullFromUpstream(this.upstreamExecutor, this.createChild, this.lastDone, [...this.activeChildExecutors, child], this.combineChildResults, this.combineWithChildResult, this.onPull, this.onEmit);
  }
};
var DrainChildExecutors = class _DrainChildExecutors {
  _tag = OP_DRAIN_CHILD_EXECUTORS;
  constructor(upstreamExecutor, lastDone, activeChildExecutors, upstreamDone, combineChildResults, combineWithChildResult, onPull) {
    this.upstreamExecutor = upstreamExecutor;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.upstreamDone = upstreamDone;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
  }
  close(exit$1) {
    const fin1 = this.upstreamExecutor.close(exit$1);
    const fins = [...this.activeChildExecutors.map((child) => child !== void 0 ? child.childExecutor.close(exit$1) : void 0), fin1];
    const result = fins.reduce((acc, next2) => {
      if (acc !== void 0 && next2 !== void 0) {
        return zipWith4(acc, exit2(next2), (exit1, exit22) => zipRight2(exit1, exit22));
      } else if (acc !== void 0) {
        return acc;
      } else if (next2 !== void 0) {
        return exit2(next2);
      } else {
        return void 0;
      }
    }, void 0);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(child) {
    return new _DrainChildExecutors(this.upstreamExecutor, this.lastDone, [...this.activeChildExecutors, child], this.upstreamDone, this.combineChildResults, this.combineWithChildResult, this.onPull);
  }
};
var Emit2 = class {
  _tag = OP_EMIT3;
  constructor(value, next2) {
    this.value = value;
    this.next = next2;
  }
  close(exit3) {
    const result = this.next.close(exit3);
    return result === void 0 ? result : result;
  }
  enqueuePullFromChild(_child) {
    return this;
  }
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelUpstreamPullRequest.esm.js
var OP_PULLED = "Pulled";
var OP_NO_UPSTREAM = "NoUpstream";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/upstreamPullRequest.esm.js
var UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest";
var UpstreamPullRequestTypeId = /* @__PURE__ */ Symbol.for(UpstreamPullRequestSymbolKey);
var upstreamPullRequestVariance = {
  _A: (_) => _
};
var proto9 = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
};
var Pulled = (value) => {
  const op = Object.create(proto9);
  op._tag = OP_PULLED;
  op.value = value;
  return op;
};
var NoUpstream = (activeDownstreamCount) => {
  const op = Object.create(proto9);
  op._tag = OP_NO_UPSTREAM;
  op.activeDownstreamCount = activeDownstreamCount;
  return op;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/channelExecutor.esm.js
var ChannelExecutor = class _ChannelExecutor {
  _activeSubexecutor = void 0;
  _cancelled = void 0;
  _closeLastSubstream = void 0;
  _done = void 0;
  _doneStack = [];
  _emitted = void 0;
  _input = void 0;
  _inProgressFinalizer = void 0;
  constructor(initialChannel, providedEnv, executeCloseLastSubstream) {
    this._currentChannel = initialChannel;
    this._executeCloseLastSubstream = executeCloseLastSubstream;
    this._providedEnv = providedEnv;
  }
  run() {
    let result = void 0;
    while (result === void 0) {
      if (this._cancelled !== void 0) {
        result = this.processCancellation();
      } else if (this._activeSubexecutor !== void 0) {
        result = this.runSubexecutor();
      } else {
        try {
          if (this._currentChannel === void 0) {
            result = Done2();
          } else {
            if (isEffect2(this._currentChannel)) {
              this._currentChannel = fromEffect4(this._currentChannel);
            } else {
              switch (this._currentChannel._tag) {
                case OP_BRACKET_OUT: {
                  result = this.runBracketOut(this._currentChannel);
                  break;
                }
                case OP_BRIDGE: {
                  const bridgeInput = this._currentChannel.input;
                  this._currentChannel = this._currentChannel.channel;
                  if (this._input !== void 0) {
                    const inputExecutor = this._input;
                    this._input = void 0;
                    const drainer = () => flatMap8(bridgeInput.awaitRead(), () => suspend3(() => {
                      const state = inputExecutor.run();
                      switch (state._tag) {
                        case OP_DONE3: {
                          return match5(inputExecutor.getDone(), {
                            onFailure: (cause2) => bridgeInput.error(cause2),
                            onSuccess: (value) => bridgeInput.done(value)
                          });
                        }
                        case OP_EMIT2: {
                          return flatMap8(bridgeInput.emit(inputExecutor.getEmit()), () => drainer());
                        }
                        case OP_FROM_EFFECT3: {
                          return matchCauseEffect2(state.effect, {
                            onFailure: (cause2) => bridgeInput.error(cause2),
                            onSuccess: () => drainer()
                          });
                        }
                        case OP_READ2: {
                          return readUpstream(state, () => drainer(), (cause2) => bridgeInput.error(cause2));
                        }
                      }
                    }));
                    result = FromEffect(flatMap8(forkDaemon2(drainer()), (fiber) => sync2(() => this.addFinalizer((exit3) => flatMap8(interrupt5(fiber), () => suspend3(() => {
                      const effect3 = this.restorePipe(exit3, inputExecutor);
                      return effect3 !== void 0 ? effect3 : unit4;
                    }))))));
                  }
                  break;
                }
                case OP_CONCAT_ALL: {
                  const executor = new _ChannelExecutor(this._currentChannel.value(), this._providedEnv, (effect3) => sync2(() => {
                    const prevLastClose = this._closeLastSubstream === void 0 ? unit4 : this._closeLastSubstream;
                    this._closeLastSubstream = pipe(prevLastClose, zipRight3(effect3));
                  }));
                  executor._input = this._input;
                  const channel = this._currentChannel;
                  this._activeSubexecutor = new PullFromUpstream(executor, (value) => channel.k(value), void 0, [], (x, y) => channel.combineInners(x, y), (x, y) => channel.combineAll(x, y), (request) => channel.onPull(request), (value) => channel.onEmit(value));
                  this._closeLastSubstream = void 0;
                  this._currentChannel = void 0;
                  break;
                }
                case OP_EMIT: {
                  this._emitted = this._currentChannel.out;
                  this._currentChannel = this._activeSubexecutor !== void 0 ? void 0 : unit5;
                  result = Emit();
                  break;
                }
                case OP_ENSURING: {
                  this.runEnsuring(this._currentChannel);
                  break;
                }
                case OP_FAIL3: {
                  result = this.doneHalt(this._currentChannel.error());
                  break;
                }
                case OP_FOLD2: {
                  this._doneStack.push(this._currentChannel.k);
                  this._currentChannel = this._currentChannel.channel;
                  break;
                }
                case OP_FROM_EFFECT2: {
                  const effect3 = this._providedEnv === void 0 ? this._currentChannel.effect() : pipe(this._currentChannel.effect(), provide(this._providedEnv));
                  result = FromEffect(matchCauseEffect2(effect3, {
                    onFailure: (cause2) => {
                      const state = this.doneHalt(cause2);
                      return state !== void 0 && isFromEffect(state) ? state.effect : unit4;
                    },
                    onSuccess: (value) => {
                      const state = this.doneSucceed(value);
                      return state !== void 0 && isFromEffect(state) ? state.effect : unit4;
                    }
                  }));
                  break;
                }
                case OP_PIPE_TO: {
                  const previousInput = this._input;
                  const leftExec = new _ChannelExecutor(this._currentChannel.left(), this._providedEnv, (effect3) => this._executeCloseLastSubstream(effect3));
                  leftExec._input = previousInput;
                  this._input = leftExec;
                  this.addFinalizer((exit3) => {
                    const effect3 = this.restorePipe(exit3, previousInput);
                    return effect3 !== void 0 ? effect3 : unit4;
                  });
                  this._currentChannel = this._currentChannel.right();
                  break;
                }
                case OP_PROVIDE: {
                  const previousEnv = this._providedEnv;
                  this._providedEnv = this._currentChannel.context();
                  this._currentChannel = this._currentChannel.inner;
                  this.addFinalizer(() => sync2(() => {
                    this._providedEnv = previousEnv;
                  }));
                  break;
                }
                case OP_READ: {
                  const read = this._currentChannel;
                  result = Read(this._input, identity, (emitted) => {
                    try {
                      this._currentChannel = read.more(emitted);
                    } catch (error) {
                      this._currentChannel = read.done.onExit(die3(error));
                    }
                    return void 0;
                  }, (exit3) => {
                    const onExit2 = (exit4) => {
                      return read.done.onExit(exit4);
                    };
                    this._currentChannel = onExit2(exit3);
                    return void 0;
                  });
                  break;
                }
                case OP_SUCCEED: {
                  result = this.doneSucceed(this._currentChannel.evaluate());
                  break;
                }
                case OP_SUCCEED_NOW: {
                  result = this.doneSucceed(this._currentChannel.terminal);
                  break;
                }
                case OP_SUSPEND2: {
                  this._currentChannel = this._currentChannel.channel();
                  break;
                }
              }
            }
          }
        } catch (error) {
          this._currentChannel = failCause7(die4(error));
        }
      }
    }
    return result;
  }
  getDone() {
    return this._done;
  }
  getEmit() {
    return this._emitted;
  }
  cancelWith(exit3) {
    this._cancelled = exit3;
  }
  clearInProgressFinalizer() {
    this._inProgressFinalizer = void 0;
  }
  storeInProgressFinalizer(finalizer2) {
    this._inProgressFinalizer = finalizer2;
  }
  popAllFinalizers(exit3) {
    const finalizers = [];
    let next2 = this._doneStack.pop();
    while (next2) {
      if (next2._tag === "ContinuationFinalizer") {
        finalizers.push(next2.finalizer);
      }
      next2 = this._doneStack.pop();
    }
    const effect3 = finalizers.length === 0 ? unit4 : runFinalizers(finalizers, exit3);
    this.storeInProgressFinalizer(effect3);
    return effect3;
  }
  popNextFinalizers() {
    const builder = [];
    while (this._doneStack.length !== 0) {
      const cont = this._doneStack[this._doneStack.length - 1];
      if (cont._tag === OP_CONTINUATION_K) {
        return builder;
      }
      builder.push(cont);
      this._doneStack.pop();
    }
    return builder;
  }
  restorePipe(exit3, prev) {
    const currInput = this._input;
    this._input = prev;
    if (currInput !== void 0) {
      const effect3 = currInput.close(exit3);
      return effect3;
    }
    return unit4;
  }
  close(exit$1) {
    let runInProgressFinalizers = void 0;
    const finalizer2 = this._inProgressFinalizer;
    if (finalizer2 !== void 0) {
      runInProgressFinalizers = pipe(finalizer2, ensuring2(sync2(() => this.clearInProgressFinalizer())));
    }
    let closeSelf = void 0;
    const selfFinalizers = this.popAllFinalizers(exit$1);
    if (selfFinalizers !== void 0) {
      closeSelf = pipe(selfFinalizers, ensuring2(sync2(() => this.clearInProgressFinalizer())));
    }
    const closeSubexecutors = this._activeSubexecutor === void 0 ? void 0 : this._activeSubexecutor.close(exit$1);
    if (closeSubexecutors === void 0 && runInProgressFinalizers === void 0 && closeSelf === void 0) {
      return void 0;
    }
    return pipe(
      exit2(ifNotNull(closeSubexecutors)),
      zip5(exit2(ifNotNull(runInProgressFinalizers))),
      zip5(exit2(ifNotNull(closeSelf))),
      map13(([[exit1, exit22], exit3]) => pipe(exit1, zipRight2(exit22), zipRight2(exit3))),
      uninterruptible2,
      // TODO: remove
      flatMap8((exit3) => suspend3(() => exit3))
    );
  }
  doneSucceed(value) {
    if (this._doneStack.length === 0) {
      this._done = succeed2(value);
      this._currentChannel = void 0;
      return Done2();
    }
    const head7 = this._doneStack[this._doneStack.length - 1];
    if (head7._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      this._currentChannel = head7.onSuccess(value);
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = succeed2(value);
      this._currentChannel = void 0;
      return Done2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), succeed2(value));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect3 = pipe(finalizerEffect, ensuring2(sync2(() => this.clearInProgressFinalizer())), uninterruptible2, flatMap8(() => sync2(() => this.doneSucceed(value))));
    return FromEffect(effect3);
  }
  doneHalt(cause2) {
    if (this._doneStack.length === 0) {
      this._done = failCause2(cause2);
      this._currentChannel = void 0;
      return Done2();
    }
    const head7 = this._doneStack[this._doneStack.length - 1];
    if (head7._tag === OP_CONTINUATION_K) {
      this._doneStack.pop();
      this._currentChannel = head7.onHalt(cause2);
      return void 0;
    }
    const finalizers = this.popNextFinalizers();
    if (this._doneStack.length === 0) {
      this._doneStack = finalizers.reverse();
      this._done = failCause2(cause2);
      this._currentChannel = void 0;
      return Done2();
    }
    const finalizerEffect = runFinalizers(finalizers.map((f) => f.finalizer), failCause2(cause2));
    this.storeInProgressFinalizer(finalizerEffect);
    const effect3 = pipe(finalizerEffect, ensuring2(sync2(() => this.clearInProgressFinalizer())), uninterruptible2, flatMap8(() => sync2(() => this.doneHalt(cause2))));
    return FromEffect(effect3);
  }
  processCancellation() {
    this._currentChannel = void 0;
    this._done = this._cancelled;
    this._cancelled = void 0;
    return Done2();
  }
  runBracketOut(bracketOut) {
    const effect3 = uninterruptible2(matchCauseEffect2(this.provide(bracketOut.acquire()), {
      onFailure: (cause2) => sync2(() => {
        this._currentChannel = failCause7(cause2);
      }),
      onSuccess: (out) => sync2(() => {
        this.addFinalizer((exit3) => this.provide(bracketOut.finalizer(out, exit3)));
        this._currentChannel = write(out);
      })
    }));
    return FromEffect(effect3);
  }
  provide(effect3) {
    if (this._providedEnv === void 0) {
      return effect3;
    }
    return pipe(effect3, provide(this._providedEnv));
  }
  runEnsuring(ensuring5) {
    this.addFinalizer(ensuring5.finalizer);
    this._currentChannel = ensuring5.channel;
  }
  addFinalizer(f) {
    this._doneStack.push(new ContinuationFinalizerImpl(f));
  }
  runSubexecutor() {
    const subexecutor = this._activeSubexecutor;
    switch (subexecutor._tag) {
      case OP_PULL_FROM_CHILD: {
        return this.pullFromChild(subexecutor.childExecutor, subexecutor.parentSubexecutor, subexecutor.onEmit, subexecutor);
      }
      case OP_PULL_FROM_UPSTREAM: {
        return this.pullFromUpstream(subexecutor);
      }
      case OP_DRAIN_CHILD_EXECUTORS: {
        return this.drainChildExecutors(subexecutor);
      }
      case OP_EMIT3: {
        this._emitted = subexecutor.value;
        this._activeSubexecutor = subexecutor.next;
        return Emit();
      }
    }
  }
  replaceSubexecutor(nextSubExec) {
    this._currentChannel = void 0;
    this._activeSubexecutor = nextSubExec;
  }
  finishWithExit(exit3) {
    const state = match5(exit3, {
      onFailure: (cause2) => this.doneHalt(cause2),
      onSuccess: (value) => this.doneSucceed(value)
    });
    this._activeSubexecutor = void 0;
    return state === void 0 ? unit4 : effect2(state);
  }
  finishSubexecutorWithCloseEffect(subexecutorDone, ...closeFuncs) {
    this.addFinalizer(() => pipe(closeFuncs, forEach8((closeFunc) => pipe(sync2(() => closeFunc(subexecutorDone)), flatMap8((closeEffect) => closeEffect !== void 0 ? closeEffect : unit4)), {
      discard: true
    })));
    const state = pipe(subexecutorDone, match5({
      onFailure: (cause2) => this.doneHalt(cause2),
      onSuccess: (value) => this.doneSucceed(value)
    }));
    this._activeSubexecutor = void 0;
    return state;
  }
  applyUpstreamPullStrategy(upstreamFinished, queue, strategy) {
    switch (strategy._tag) {
      case OP_PULL_AFTER_NEXT: {
        const shouldPrepend = !upstreamFinished || queue.some((subexecutor) => subexecutor !== void 0);
        return [strategy.emitSeparator, shouldPrepend ? [void 0, ...queue] : queue];
      }
      case OP_PULL_AFTER_ALL_ENQUEUED: {
        const shouldEnqueue = !upstreamFinished || queue.some((subexecutor) => subexecutor !== void 0);
        return [strategy.emitSeparator, shouldEnqueue ? [...queue, void 0] : queue];
      }
    }
  }
  pullFromChild(childExecutor, parentSubexecutor, onEmitted, subexecutor) {
    return Read(childExecutor, identity, (emitted) => {
      const childExecutorDecision = onEmitted(emitted);
      switch (childExecutorDecision._tag) {
        case OP_CONTINUE: {
          break;
        }
        case OP_CLOSE: {
          this.finishWithDoneValue(childExecutor, parentSubexecutor, childExecutorDecision.value);
          break;
        }
        case OP_YIELD2: {
          const modifiedParent = parentSubexecutor.enqueuePullFromChild(subexecutor);
          this.replaceSubexecutor(modifiedParent);
          break;
        }
      }
      this._activeSubexecutor = new Emit2(emitted, this._activeSubexecutor);
      return void 0;
    }, match5({
      onFailure: (cause2) => {
        const state = this.handleSubexecutorFailure(childExecutor, parentSubexecutor, cause2);
        return state === void 0 ? void 0 : effectOrUndefinedIgnored(state);
      },
      onSuccess: (doneValue) => {
        this.finishWithDoneValue(childExecutor, parentSubexecutor, doneValue);
        return void 0;
      }
    }));
  }
  finishWithDoneValue(childExecutor, parentSubexecutor, doneValue) {
    const subexecutor = parentSubexecutor;
    switch (subexecutor._tag) {
      case OP_PULL_FROM_UPSTREAM: {
        const modifiedParent = new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone !== void 0 ? subexecutor.combineChildResults(subexecutor.lastDone, doneValue) : doneValue, subexecutor.activeChildExecutors, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit);
        this._closeLastSubstream = childExecutor.close(succeed2(doneValue));
        this.replaceSubexecutor(modifiedParent);
        break;
      }
      case OP_DRAIN_CHILD_EXECUTORS: {
        const modifiedParent = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone !== void 0 ? subexecutor.combineChildResults(subexecutor.lastDone, doneValue) : doneValue, subexecutor.activeChildExecutors, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
        this._closeLastSubstream = childExecutor.close(succeed2(doneValue));
        this.replaceSubexecutor(modifiedParent);
        break;
      }
    }
  }
  handleSubexecutorFailure(childExecutor, parentSubexecutor, cause2) {
    return this.finishSubexecutorWithCloseEffect(failCause2(cause2), (exit3) => parentSubexecutor.close(exit3), (exit3) => childExecutor.close(exit3));
  }
  pullFromUpstream(subexecutor) {
    if (subexecutor.activeChildExecutors.length === 0) {
      return this.performPullFromUpstream(subexecutor);
    }
    const activeChild = subexecutor.activeChildExecutors[0];
    const parentSubexecutor = new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, subexecutor.activeChildExecutors.slice(1), subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit);
    if (activeChild === void 0) {
      return this.performPullFromUpstream(parentSubexecutor);
    }
    this.replaceSubexecutor(new PullFromChild(activeChild.childExecutor, parentSubexecutor, activeChild.onEmit));
    return void 0;
  }
  performPullFromUpstream(subexecutor) {
    return Read(subexecutor.upstreamExecutor, (effect3) => {
      const closeLastSubstream = this._closeLastSubstream === void 0 ? unit4 : this._closeLastSubstream;
      this._closeLastSubstream = void 0;
      return pipe(this._executeCloseLastSubstream(closeLastSubstream), zipRight3(effect3));
    }, (emitted) => {
      if (this._closeLastSubstream !== void 0) {
        const closeLastSubstream = this._closeLastSubstream;
        this._closeLastSubstream = void 0;
        return pipe(this._executeCloseLastSubstream(closeLastSubstream), map13(() => {
          const childExecutor2 = new _ChannelExecutor(subexecutor.createChild(emitted), this._providedEnv, this._executeCloseLastSubstream);
          childExecutor2._input = this._input;
          const [emitSeparator2, updatedChildExecutors2] = this.applyUpstreamPullStrategy(false, subexecutor.activeChildExecutors, subexecutor.onPull(Pulled(emitted)));
          this._activeSubexecutor = new PullFromChild(childExecutor2, new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, updatedChildExecutors2, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit), subexecutor.onEmit);
          if (isSome2(emitSeparator2)) {
            this._activeSubexecutor = new Emit2(emitSeparator2.value, this._activeSubexecutor);
          }
          return void 0;
        }));
      }
      const childExecutor = new _ChannelExecutor(subexecutor.createChild(emitted), this._providedEnv, this._executeCloseLastSubstream);
      childExecutor._input = this._input;
      const [emitSeparator, updatedChildExecutors] = this.applyUpstreamPullStrategy(false, subexecutor.activeChildExecutors, subexecutor.onPull(Pulled(emitted)));
      this._activeSubexecutor = new PullFromChild(childExecutor, new PullFromUpstream(subexecutor.upstreamExecutor, subexecutor.createChild, subexecutor.lastDone, updatedChildExecutors, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull, subexecutor.onEmit), subexecutor.onEmit);
      if (isSome2(emitSeparator)) {
        this._activeSubexecutor = new Emit2(emitSeparator.value, this._activeSubexecutor);
      }
      return void 0;
    }, (exit3) => {
      if (subexecutor.activeChildExecutors.some((subexecutor2) => subexecutor2 !== void 0)) {
        const drain3 = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, [void 0, ...subexecutor.activeChildExecutors], subexecutor.upstreamExecutor.getDone(), subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
        if (this._closeLastSubstream !== void 0) {
          const closeLastSubstream2 = this._closeLastSubstream;
          this._closeLastSubstream = void 0;
          return pipe(this._executeCloseLastSubstream(closeLastSubstream2), map13(() => this.replaceSubexecutor(drain3)));
        }
        this.replaceSubexecutor(drain3);
        return void 0;
      }
      const closeLastSubstream = this._closeLastSubstream;
      const state = this.finishSubexecutorWithCloseEffect(pipe(exit3, map10((a) => subexecutor.combineWithChildResult(subexecutor.lastDone, a))), () => closeLastSubstream, (exit4) => subexecutor.upstreamExecutor.close(exit4));
      return state === void 0 ? void 0 : (
        // NOTE: assuming finalizers cannot fail
        effectOrUndefinedIgnored(state)
      );
    });
  }
  drainChildExecutors(subexecutor) {
    if (subexecutor.activeChildExecutors.length === 0) {
      const lastClose = this._closeLastSubstream;
      if (lastClose !== void 0) {
        this.addFinalizer(() => succeed6(lastClose));
      }
      return this.finishSubexecutorWithCloseEffect(subexecutor.upstreamDone, () => lastClose, (exit3) => subexecutor.upstreamExecutor.close(exit3));
    }
    const activeChild = subexecutor.activeChildExecutors[0];
    const rest = subexecutor.activeChildExecutors.slice(1);
    if (activeChild === void 0) {
      const [emitSeparator, remainingExecutors] = this.applyUpstreamPullStrategy(true, rest, subexecutor.onPull(NoUpstream(rest.reduce((n, curr) => curr !== void 0 ? n + 1 : n, 0))));
      this.replaceSubexecutor(new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, remainingExecutors, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull));
      if (isSome2(emitSeparator)) {
        this._emitted = emitSeparator.value;
        return Emit();
      }
      return void 0;
    }
    const parentSubexecutor = new DrainChildExecutors(subexecutor.upstreamExecutor, subexecutor.lastDone, rest, subexecutor.upstreamDone, subexecutor.combineChildResults, subexecutor.combineWithChildResult, subexecutor.onPull);
    this.replaceSubexecutor(new PullFromChild(activeChild.childExecutor, parentSubexecutor, activeChild.onEmit));
    return void 0;
  }
};
var ifNotNull = (effect3) => effect3 !== void 0 ? effect3 : unit4;
var runFinalizers = (finalizers, exit$1) => {
  return pipe(forEach8(finalizers, (fin) => exit2(fin(exit$1))), map13((exits) => pipe(all3(exits), getOrElse(() => unit2))), flatMap8((exit3) => suspend3(() => exit3)));
};
var readUpstream = (r, onSuccess, onFailure) => {
  const readStack = [r];
  const read = () => {
    const current = readStack.pop();
    if (current === void 0 || current.upstream === void 0) {
      return dieMessage2("Unexpected end of input for channel execution");
    }
    const state = current.upstream.run();
    switch (state._tag) {
      case OP_EMIT2: {
        const emitEffect = current.onEmit(current.upstream.getEmit());
        if (readStack.length === 0) {
          if (emitEffect === void 0) {
            return suspend3(onSuccess);
          }
          return pipe(emitEffect, matchCauseEffect2({
            onFailure,
            onSuccess
          }));
        }
        if (emitEffect === void 0) {
          return suspend3(() => read());
        }
        return pipe(emitEffect, matchCauseEffect2({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_DONE3: {
        const doneEffect = current.onDone(current.upstream.getDone());
        if (readStack.length === 0) {
          if (doneEffect === void 0) {
            return suspend3(onSuccess);
          }
          return pipe(doneEffect, matchCauseEffect2({
            onFailure,
            onSuccess
          }));
        }
        if (doneEffect === void 0) {
          return suspend3(() => read());
        }
        return pipe(doneEffect, matchCauseEffect2({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_FROM_EFFECT3: {
        readStack.push(current);
        return pipe(current.onEffect(state.effect), catchAllCause2((cause2) => suspend3(() => {
          const doneEffect = current.onDone(failCause2(cause2));
          return doneEffect === void 0 ? unit4 : doneEffect;
        })), matchCauseEffect2({
          onFailure,
          onSuccess: () => read()
        }));
      }
      case OP_READ2: {
        readStack.push(current);
        readStack.push(state);
        return suspend3(() => read());
      }
    }
  };
  return read();
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelMergeDecision.esm.js
var OP_DONE4 = "Done";
var OP_AWAIT = "Await";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/mergeDecision.esm.js
var MergeDecisionSymbolKey = "effect/ChannelMergeDecision";
var MergeDecisionTypeId = /* @__PURE__ */ Symbol.for(MergeDecisionSymbolKey);
var proto10 = {
  [MergeDecisionTypeId]: {
    _R: (_) => _,
    _E0: (_) => _,
    _Z0: (_) => _,
    _E: (_) => _,
    _Z: (_) => _
  }
};
var Await = (f) => {
  const op = Object.create(proto10);
  op._tag = OP_AWAIT;
  op.f = f;
  return op;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelMergeState.esm.js
var OP_BOTH_RUNNING = "BothRunning";
var OP_LEFT_DONE = "LeftDone";
var OP_RIGHT_DONE = "RightDone";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/mergeState.esm.js
var MergeStateSymbolKey = "effect/ChannelMergeState";
var MergeStateTypeId = /* @__PURE__ */ Symbol.for(MergeStateSymbolKey);
var proto11 = {
  [MergeStateTypeId]: MergeStateTypeId
};
var BothRunning = (left3, right3) => {
  const op = Object.create(proto11);
  op._tag = OP_BOTH_RUNNING;
  op.left = left3;
  op.right = right3;
  return op;
};
var LeftDone = (f) => {
  const op = Object.create(proto11);
  op._tag = OP_LEFT_DONE;
  op.f = f;
  return op;
};
var RightDone = (f) => {
  const op = Object.create(proto11);
  op._tag = OP_RIGHT_DONE;
  op.f = f;
  return op;
};

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/opCodes/channelMergeStrategy.esm.js
var OP_BACK_PRESSURE = "BackPressure";
var OP_BUFFER_SLIDING = "BufferSliding";

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/mergeStrategy.esm.js
var MergeStrategySymbolKey = "effect/ChannelMergeStrategy";
var MergeStrategyTypeId = /* @__PURE__ */ Symbol.for(MergeStrategySymbolKey);
var proto12 = {
  [MergeStrategyTypeId]: MergeStrategyTypeId
};
var BackPressure = (_) => {
  const op = Object.create(proto12);
  op._tag = OP_BACK_PRESSURE;
  return op;
};
var BufferSliding = (_) => {
  const op = Object.create(proto12);
  op._tag = OP_BUFFER_SLIDING;
  return op;
};
var match11 = /* @__PURE__ */ dual(2, (self, {
  onBackPressure,
  onBufferSliding
}) => {
  switch (self._tag) {
    case OP_BACK_PRESSURE: {
      return onBackPressure();
    }
    case OP_BUFFER_SLIDING: {
      return onBufferSliding();
    }
  }
});

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel/singleProducerAsyncInput.esm.js
var OP_STATE_EMPTY = "Empty";
var OP_STATE_EMIT = "Emit";
var OP_STATE_ERROR = "Error";
var OP_STATE_DONE2 = "Done";
var stateEmpty = (notifyProducer) => ({
  _tag: OP_STATE_EMPTY,
  notifyProducer
});
var stateEmit = (notifyConsumers) => ({
  _tag: OP_STATE_EMIT,
  notifyConsumers
});
var stateError = (cause2) => ({
  _tag: OP_STATE_ERROR,
  cause: cause2
});
var stateDone = (done7) => ({
  _tag: OP_STATE_DONE2,
  done: done7
});
var SingleProducerAsyncInputImpl = class {
  constructor(ref) {
    this.ref = ref;
  }
  awaitRead() {
    return flatten7(modify3(this.ref, (state) => state._tag === OP_STATE_EMPTY ? [_await2(state.notifyProducer), state] : [unit4, state]));
  }
  close() {
    return fiberIdWith2((fiberId2) => this.error(interrupt4(fiberId2)));
  }
  done(value) {
    return flatten7(modify3(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await2(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach8(state.notifyConsumers, (deferred) => succeed3(deferred, left2(value)), {
            discard: true
          }), stateDone(value)];
        }
        case OP_STATE_ERROR: {
          return [interrupt6, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt6, state];
        }
      }
    }));
  }
  emit(element) {
    return flatMap8(make27(), (deferred) => flatten7(modify3(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await2(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          const notifyConsumer = state.notifyConsumers[0];
          const notifyConsumers = state.notifyConsumers.slice(1);
          if (notifyConsumer !== void 0) {
            return [succeed3(notifyConsumer, right2(element)), notifyConsumers.length === 0 ? stateEmpty(deferred) : stateEmit(notifyConsumers)];
          }
          throw new Error("Bug: Channel.SingleProducerAsyncInput.emit - Queue was empty! Please report an issue at https://github.com/Effect-TS/stream/issues");
        }
        case OP_STATE_ERROR: {
          return [interrupt6, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt6, state];
        }
      }
    })));
  }
  error(cause2) {
    return flatten7(modify3(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [_await2(state.notifyProducer), state];
        }
        case OP_STATE_EMIT: {
          return [forEach8(state.notifyConsumers, (deferred) => failCause3(deferred, cause2), {
            discard: true
          }), stateError(cause2)];
        }
        case OP_STATE_ERROR: {
          return [interrupt6, state];
        }
        case OP_STATE_DONE2: {
          return [interrupt6, state];
        }
      }
    }));
  }
  take() {
    return this.takeWith((cause2) => failCause2(map11(cause2, left2)), (elem) => succeed2(elem), (done7) => fail3(right2(done7)));
  }
  takeWith(onError4, onElement, onDone2) {
    return flatMap8(make27(), (deferred) => flatten7(modify3(this.ref, (state) => {
      switch (state._tag) {
        case OP_STATE_EMPTY: {
          return [zipRight3(succeed3(state.notifyProducer, void 0), matchCause2(_await2(deferred), {
            onFailure: onError4,
            onSuccess: match2({
              onLeft: onDone2,
              onRight: onElement
            })
          })), stateEmit([deferred])];
        }
        case OP_STATE_EMIT: {
          return [matchCause2(_await2(deferred), {
            onFailure: onError4,
            onSuccess: match2({
              onLeft: onDone2,
              onRight: onElement
            })
          }), stateEmit([...state.notifyConsumers, deferred])];
        }
        case OP_STATE_ERROR: {
          return [succeed6(onError4(state.cause)), state];
        }
        case OP_STATE_DONE2: {
          return [succeed6(onDone2(state.done)), state];
        }
      }
    })));
  }
};
var make42 = () => pipe(make27(), flatMap8((deferred) => make25(stateEmpty(deferred))), map13((ref) => new SingleProducerAsyncInputImpl(ref)));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/channel.esm.js
var concatMap = /* @__PURE__ */ dual(2, (self, f) => concatMapWith(self, f, () => void 0, () => void 0));
var ensuring3 = /* @__PURE__ */ dual(2, (self, finalizer2) => ensuringWith(self, () => finalizer2));
var flatten9 = (self) => flatMap11(self, identity);
var fromInput = (input) => unwrap(input.takeWith(failCause7, (elem) => flatMap11(write(elem), () => fromInput(input)), succeed8));
var map17 = /* @__PURE__ */ dual(2, (self, f) => flatMap11(self, (a) => sync4(() => f(a))));
var mapOut = /* @__PURE__ */ dual(2, (self, f) => {
  const reader = readWith({
    onInput: (outElem) => flatMap11(write(f(outElem)), () => reader),
    onFailure: fail9,
    onDone: succeedNow
  });
  return pipeTo(self, reader);
});
var mergeAll3 = (options3) => {
  return (channels) => mergeAllWith(options3)(channels, constVoid);
};
var mergeAllWith = ({
  bufferSize = 16,
  concurrency,
  mergeStrategy = BackPressure()
}) => (channels, f) => pipe(gen2(function* ($) {
  const input = yield* $(make42());
  const queueReader = fromInput(input);
  const queue = yield* $(acquireRelease2(bounded3(bufferSize), (queue2) => shutdown2(queue2)));
  const cancelers = yield* $(acquireRelease2(unbounded3(), (queue2) => shutdown2(queue2)));
  const lastDone = yield* $(make25(none2()));
  const errorSignal = yield* $(make27());
  const withPermits = concurrency === "unbounded" ? (_) => identity : (yield* $(makeSemaphore2(concurrency))).withPermits;
  const pull = yield* $(toPull(channels));
  const evaluatePull = (pull2) => pipe(flatMap8(pull2, match2({
    onLeft: (done7) => succeed6(some2(done7)),
    onRight: (outElem) => as3(offer3(queue, succeed6(right2(outElem))), none2())
  })), repeatUntil(isSome2), flatMap8(match({
    onNone: () => unit4,
    onSome: (outDone) => update5(lastDone, match({
      onNone: () => some2(outDone),
      onSome: (lastDone2) => some2(f(lastDone2, outDone))
    }))
  })), catchAllCause2((cause2) => isInterrupted2(cause2) ? failCause5(cause2) : pipe(offer3(queue, failCause5(cause2)), zipRight3(succeed3(errorSignal, void 0)), asUnit2)));
  yield* $(matchCauseEffect2(pull, {
    onFailure: (cause2) => pipe(offer3(queue, failCause5(cause2)), zipRight3(succeed6(false))),
    onSuccess: match2({
      onLeft: (outDone) => raceWith2(_await2(errorSignal), withPermits(concurrency)(unit4), {
        onSelfDone: (_, permitAcquisition) => pipe(interrupt5(permitAcquisition), as3(false)),
        onOtherDone: (_, failureAwait) => pipe(interrupt5(failureAwait), zipRight3(pipe(get10(lastDone), flatMap8(match({
          onNone: () => offer3(queue, succeed6(left2(outDone))),
          onSome: (lastDone2) => offer3(queue, succeed6(left2(f(lastDone2, outDone))))
        })), as3(false))))
      }),
      onRight: (channel) => pipe(mergeStrategy, match11({
        onBackPressure: () => gen2(function* ($2) {
          const latch = yield* $2(make27());
          const raceEffects = pipe(queueReader, pipeTo(channel), toPull, flatMap8((pull2) => pipe(evaluatePull(pull2), race2(_await2(errorSignal)))), scoped);
          yield* $2(succeed3(latch, void 0), zipRight3(raceEffects), withPermits(1), forkScoped2);
          yield* $2(_await2(latch));
          const errored = yield* $2(isDone3(errorSignal));
          return !errored;
        }),
        onBufferSliding: () => gen2(function* ($2) {
          const canceler = yield* $2(make27());
          const latch = yield* $2(make27());
          const size$1 = yield* $2(size11(cancelers));
          yield* $2(take3(cancelers), flatMap8((_) => succeed3(_, void 0)), when2(() => concurrency === "unbounded" ? false : size$1 >= concurrency));
          yield* $2(offer3(cancelers, canceler));
          const raceEffects = pipe(queueReader, pipeTo(channel), toPull, flatMap8((pull2) => pipe(evaluatePull(pull2), race2(_await2(errorSignal)), race2(_await2(canceler)))), scoped);
          yield* $2(succeed3(latch, void 0), zipRight3(raceEffects), withPermits(1), forkScoped2);
          yield* $2(_await2(latch));
          const errored = yield* $2(isDone3(errorSignal));
          return !errored;
        })
      }))
    })
  }), repeatWhile(identity), forkScoped2);
  return [queue, input];
}), map13(([queue, input]) => {
  const consumer = pipe(take3(queue), flatten7, matchCause2({
    onFailure: failCause7,
    onSuccess: match2({
      onLeft: succeedNow,
      onRight: (outElem) => flatMap11(write(outElem), () => consumer)
    })
  }), unwrap);
  return embedInput(consumer, input);
}), unwrapScoped2);
var mergeMap = /* @__PURE__ */ dual(3, (self, f, options3) => mergeAll3(options3)(mapOut(self, f)));
var mergeWith = /* @__PURE__ */ dual(2, (self, options3) => unwrapScoped2(flatMap8(make42(), (input) => {
  const queueReader = fromInput(input);
  return map13(zip5(toPull(pipeTo(queueReader, self)), toPull(pipeTo(queueReader, options3.other))), ([pullL, pullR]) => {
    const handleSide = (exit3, fiber, pull) => (done7, both2, single) => {
      const onDecision = (decision) => {
        const op = decision;
        if (op._tag === OP_DONE4) {
          return succeed6(fromEffect4(zipRight3(interrupt5(fiber), op.effect)));
        }
        return map13(_await3(fiber), match5({
          onFailure: (cause2) => fromEffect4(op.f(failCause2(cause2))),
          onSuccess: match2({
            onLeft: (done8) => fromEffect4(op.f(succeed2(done8))),
            onRight: (elem) => zipRight4(write(elem), go3(single(op.f)))
          })
        }));
      };
      return match5(exit3, {
        onFailure: (cause2) => onDecision(done7(failCause2(cause2))),
        onSuccess: match2({
          onLeft: (z) => onDecision(done7(succeed2(z))),
          onRight: (elem) => succeed6(flatMap11(write(elem), () => flatMap11(fromEffect4(forkDaemon2(pull)), (leftFiber) => go3(both2(leftFiber, fiber)))))
        })
      });
    };
    const go3 = (state) => {
      switch (state._tag) {
        case OP_BOTH_RUNNING: {
          const leftJoin = interruptible3(join3(state.left));
          const rightJoin = interruptible3(join3(state.right));
          return unwrap(raceWith2(leftJoin, rightJoin, {
            onSelfDone: (leftExit, rf) => zipRight3(interrupt5(rf), handleSide(leftExit, state.right, pullL)(options3.onSelfDone, BothRunning, (f) => LeftDone(f))),
            onOtherDone: (rightExit, lf) => zipRight3(interrupt5(lf), handleSide(rightExit, state.left, pullR)(options3.onOtherDone, (left3, right3) => BothRunning(right3, left3), (f) => RightDone(f)))
          }));
        }
        case OP_LEFT_DONE: {
          return unwrap(map13(exit2(pullR), match5({
            onFailure: (cause2) => fromEffect4(state.f(failCause2(cause2))),
            onSuccess: match2({
              onLeft: (done7) => fromEffect4(state.f(succeed2(done7))),
              onRight: (elem) => flatMap11(write(elem), () => go3(LeftDone(state.f)))
            })
          })));
        }
        case OP_RIGHT_DONE: {
          return unwrap(map13(exit2(pullL), match5({
            onFailure: (cause2) => fromEffect4(state.f(failCause2(cause2))),
            onSuccess: match2({
              onLeft: (done7) => fromEffect4(state.f(succeed2(done7))),
              onRight: (elem) => flatMap11(write(elem), () => go3(RightDone(state.f)))
            })
          })));
        }
      }
    };
    return pipe(fromEffect4(zipWith4(forkDaemon2(pullL), forkDaemon2(pullR), (left3, right3) => BothRunning(left3, right3))), flatMap11(go3), embedInput(input));
  });
})));
var scoped3 = (effect3) => unwrap(uninterruptibleMask2((restore) => map13(make37(), (scope4) => acquireReleaseOut(tapErrorCause2(restore(extend2(scope4)(effect3)), (cause2) => close(scope4, failCause2(cause2))), (_, exit3) => close(scope4, exit3)))));
var toPull = (self) => map13(acquireRelease2(sync2(() => new ChannelExecutor(self, void 0, identity)), (exec, exit3) => {
  const finalize = exec.close(exit3);
  return finalize === void 0 ? unit4 : finalize;
}), (exec) => suspend3(() => interpretToPull(exec.run(), exec)));
var interpretToPull = (channelState, exec) => {
  const state = channelState;
  switch (state._tag) {
    case OP_DONE3: {
      return match5(exec.getDone(), {
        onFailure: failCause5,
        onSuccess: (done7) => succeed6(left2(done7))
      });
    }
    case OP_EMIT2: {
      return succeed6(right2(exec.getEmit()));
    }
    case OP_FROM_EFFECT3: {
      return pipe(state.effect, flatMap8(() => interpretToPull(exec.run(), exec)));
    }
    case OP_READ2: {
      return readUpstream(state, () => interpretToPull(exec.run(), exec), (cause2) => failCause5(cause2));
    }
  }
};
var unwrap = (channel) => flatten9(fromEffect4(channel));
var unwrapScoped2 = (self) => concatAllWith(scoped3(self), (d, _) => d, (d, _) => d);
var writeChunk = (outs) => writeChunkWriter(0, outs.length, outs);
var writeChunkWriter = (idx, len, chunk2) => {
  return idx === len ? unit5 : pipe(write(pipe(chunk2, unsafeGet2(idx))), flatMap11(() => writeChunkWriter(idx + 1, len, chunk2)));
};
var zip6 = /* @__PURE__ */ dual((args) => isChannel(args[1]), (self, that, options3) => options3?.concurrent ? mergeWith(self, {
  other: that,
  onSelfDone: (exit1) => Await((exit22) => suspend3(() => zip4(exit1, exit22))),
  onOtherDone: (exit22) => Await((exit1) => suspend3(() => zip4(exit1, exit22)))
}) : flatMap11(self, (a) => map17(that, (b) => [a, b])));
var zipRight4 = /* @__PURE__ */ dual((args) => isChannel(args[1]), (self, that, options3) => options3?.concurrent ? map17(zip6(self, that, {
  concurrent: true
}), (tuple2) => tuple2[1]) : flatMap11(self, () => that));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/internal/stream.esm.js
var StreamSymbolKey = "effect/Stream";
var StreamTypeId2 = /* @__PURE__ */ Symbol.for(StreamSymbolKey);
var streamVariance = {
  _R: (_) => _,
  _E: (_) => _,
  _A: (_) => _
};
var StreamImpl = class {
  [StreamTypeId2] = streamVariance;
  constructor(channel) {
    this.channel = channel;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isStream = (u) => typeof u === "object" && u != null && StreamTypeId2 in u || isEffect2(u);
var fail11 = (error) => fromEffectOption(fail6(some2(error)));
var flatMap13 = /* @__PURE__ */ dual((args) => typeof args[0] !== "function", (self, f, options3) => {
  const bufferSize = options3?.bufferSize ?? 16;
  if (options3?.switch) {
    return matchConcurrency(options3?.concurrency, () => flatMapParSwitchBuffer(self, 1, bufferSize, f), (n) => flatMapParSwitchBuffer(self, n, bufferSize, f));
  }
  return matchConcurrency(options3?.concurrency, () => new StreamImpl(concatMap(toChannel(self), (as5) => pipe(as5, map3((a) => toChannel(f(a))), reduce2(unit5, (left3, right3) => pipe(left3, zipRight4(right3)))))), (n) => new StreamImpl(pipe(toChannel(self), concatMap(writeChunk), mergeMap((out) => toChannel(f(out)), {
    concurrency: n,
    bufferSize
  }))));
});
var matchConcurrency = (concurrency, sequential4, bounded5) => {
  switch (concurrency) {
    case void 0:
      return sequential4();
    case "unbounded":
      return bounded5(Number.POSITIVE_INFINITY);
    default:
      return concurrency > 1 ? bounded5(concurrency) : sequential4();
  }
};
var flatMapParSwitchBuffer = /* @__PURE__ */ dual(4, (self, n, bufferSize, f) => new StreamImpl(pipe(toChannel(self), concatMap(writeChunk), mergeMap((out) => toChannel(f(out)), {
  concurrency: n,
  mergeStrategy: BufferSliding(),
  bufferSize
}))));
var flatten11 = /* @__PURE__ */ dual((args) => isStream(args[0]), (self, options3) => flatMap13(self, identity, options3));
var toChannel = (stream2) => {
  if ("channel" in stream2) {
    return stream2.channel;
  } else if (isEffect2(stream2)) {
    return toChannel(fromEffect5(stream2));
  } else {
    throw new TypeError(`Expected a Stream.`);
  }
};
var fromEffect5 = (effect3) => pipe(effect3, mapError2(some2), fromEffectOption);
var fromEffectOption = (effect3) => new StreamImpl(unwrap(match9(effect3, {
  onFailure: match({
    onNone: () => unit5,
    onSome: fail9
  }),
  onSuccess: (a) => write(of2(a))
})));
var fromReadableStream = (evaluate, onError4) => unwrapScoped3(map13(acquireRelease2(sync2(() => evaluate().getReader()), (reader) => promise2(() => reader.cancel())), (reader) => repeatEffectOption(flatMap8(tryPromise2({
  try: () => reader.read(),
  catch: (reason) => some2(onError4(reason))
}), ({
  done: done7,
  value
}) => done7 ? fail6(none2()) : succeed6(value)))));
var repeatEffectChunkOption = (effect3) => unfoldChunkEffect(effect3, (effect4) => pipe(map13(effect4, (chunk2) => some2([chunk2, effect4])), catchAll2(match({
  onNone: () => succeed6(none2()),
  onSome: fail6
}))));
var repeatEffectOption = (effect3) => repeatEffectChunkOption(pipe(effect3, map13(of2)));
var scoped4 = (effect3) => new StreamImpl(ensuring3(scoped3(pipe(effect3, map13(of2))), unit4));
var suspend5 = (stream2) => new StreamImpl(suspend4(() => toChannel(stream2())));
var toPull2 = (self) => map13(toPull(toChannel(self)), (pull) => pipe(pull, mapError2(some2), flatMap8(match2({
  onLeft: () => fail6(none2()),
  onRight: succeed6
}))));
var toReadableStream = (source) => {
  let pull;
  let scope4;
  return new ReadableStream({
    start(controller) {
      scope4 = runSync(make37());
      pull = pipe(toPull2(source), use(scope4), runSync, tap2((chunk2) => sync2(() => {
        map3(chunk2, (a) => {
          controller.enqueue(a);
        });
      })), tapErrorCause2(() => close(scope4, unit2)), catchTags2({
        "None": () => sync2(() => {
          controller.close();
        }),
        "Some": (error) => sync2(() => {
          controller.error(error.value);
        })
      }), asUnit2);
    },
    pull() {
      return runPromise(pull);
    },
    cancel() {
      return runPromise(close(scope4, unit2));
    }
  });
};
var unfoldChunkEffect = (s, f) => suspend5(() => {
  const loop2 = (s2) => unwrap(map13(f(s2), match({
    onNone: () => unit5,
    onSome: ([chunk2, s3]) => flatMap11(write(chunk2), () => loop2(s3))
  })));
  return new StreamImpl(loop2(s));
});
var unwrapScoped3 = (effect3) => flatten11(scoped4(effect3));

// node_modules/.pnpm/effect@2.0.0-next.48/node_modules/effect/Stream/dist/effect-Stream.esm.js
var fail12 = fail11;
var fromReadableStream2 = fromReadableStream;
var toReadableStream2 = toReadableStream;

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/FileSystem/dist/effect-platform-FileSystem.esm.js
var tag = /* @__PURE__ */ Tag("@effect/platform/FileSystem");
var FileSystem = tag;

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/body-db8cfb3d.esm.js
var TypeId14 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/Body");
var ErrorTypeId = /* @__PURE__ */ Symbol.for("@effect/platform/Http/Body/BodyError");
var bodyError = /* @__PURE__ */ tagged2("BodyError");
var BodyError = (reason) => bodyError({
  [ErrorTypeId]: ErrorTypeId,
  reason
});
var EmptyImpl = class {
  _tag = "Empty";
  constructor() {
    this[TypeId14] = TypeId14;
  }
};
var empty29 = /* @__PURE__ */ new EmptyImpl();
var Uint8ArrayImpl = class {
  _tag = "Uint8Array";
  constructor(body, contentType) {
    this.body = body;
    this.contentType = contentType;
    this[TypeId14] = TypeId14;
  }
  get contentLength() {
    return this.body.length;
  }
};
var uint8Array = (body, contentType) => new Uint8ArrayImpl(body, contentType ?? "application/octet-stream");
var text = (body, contentType) => uint8Array(new TextEncoder().encode(body), contentType ?? "text/plain");
var unsafeJson = (body) => uint8Array(new TextEncoder().encode(JSON.stringify(body)), "application/json");
var json = (body) => try_2({
  try: () => unsafeJson(body),
  catch: (error) => BodyError({
    _tag: "JsonError",
    error
  })
});
var jsonSchema = (schema) => {
  const encode2 = encode(schema);
  return (body) => flatMap8(mapError2(encode2(body), (error) => BodyError({
    _tag: "SchemaError",
    error
  })), json);
};
var file = (path, options3) => flatMap8(FileSystem, (fs) => map13(fs.stat(path), (info) => stream(fs.stream(path, options3), options3?.contentType, Number(info.size))));
var fileWeb = (file2) => stream(fromReadableStream2(() => file2.stream(), identity), file2.type, file2.size);
var FormDataImpl = class {
  _tag = "FormData";
  constructor(formData2) {
    this.formData = formData2;
    this[TypeId14] = TypeId14;
  }
};
var formData = (body) => new FormDataImpl(body);
var StreamImpl2 = class {
  _tag = "Stream";
  constructor(stream2, contentType, contentLength) {
    this.stream = stream2;
    this.contentType = contentType;
    this.contentLength = contentLength;
    this[TypeId14] = TypeId14;
  }
};
var stream = (body, contentType, contentLength) => new StreamImpl2(body, contentType ?? "application/octet-stream", contentLength);

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/Http/Client/dist/effect-platform-Http-Client.esm.js
var effect_platform_Http_Client_esm_exports = {};
__export(effect_platform_Http_Client_esm_exports, {
  Client: () => Client,
  TypeId: () => TypeId19,
  catchAll: () => catchAll6,
  catchTag: () => catchTag4,
  catchTags: () => catchTags4,
  fetch: () => fetch,
  fetchOk: () => fetchOk,
  filterOrElse: () => filterOrElse3,
  filterOrFail: () => filterOrFail3,
  filterStatus: () => filterStatus,
  filterStatusOk: () => filterStatusOk,
  layer: () => layer,
  make: () => make46,
  makeDefault: () => makeDefault,
  map: () => map19,
  mapEffect: () => mapEffect2,
  mapRequest: () => mapRequest,
  mapRequestEffect: () => mapRequestEffect,
  retry: () => retry4,
  schemaFunction: () => schemaFunction,
  tap: () => tap5,
  tapRequest: () => tapRequest,
  transform: () => transform3,
  transformResponse: () => transformResponse
});

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/Http/Method/dist/effect-platform-Http-Method.esm.js
var hasBody = (method) => method !== "GET" && method !== "HEAD";

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/UrlParams-1286c728.esm.js
var fromInput2 = (input) => {
  if (isChunk(input)) {
    return input;
  } else if (Symbol.iterator in input) {
    return fromIterable3(input);
  }
  return fromIterable3(Object.entries(input));
};
var empty30 = /* @__PURE__ */ empty3();
var set8 = /* @__PURE__ */ dual(3, (self, key2, value) => append2(filter(self, ([k]) => k !== key2), [key2, value]));
var setAll3 = /* @__PURE__ */ dual(2, (self, input) => {
  const toSet3 = fromInput2(input);
  const keys5 = toReadonlyArray(toSet3).map(([k]) => k);
  return appendAll(filter(self, ([k]) => keys5.includes(k)), toSet3);
});
var append4 = /* @__PURE__ */ dual(3, (self, key2, value) => append2(self, [key2, value]));
var appendAll4 = /* @__PURE__ */ dual(2, (self, input) => appendAll(self, fromInput2(input)));
var toString2 = (self) => new URLSearchParams(toReadonlyArray(self)).toString();
var makeUrl = (url, params, onError4) => try_2({
  try: () => {
    const urlInstance = new URL(url, baseUrl());
    forEach(params, ([key2, value]) => {
      if (value !== void 0) {
        urlInstance.searchParams.append(key2, value);
      }
    });
    return urlInstance;
  },
  catch: onError4
});
var baseUrl = () => {
  if ("location" in globalThis) {
    return location.origin + location.pathname;
  }
  return void 0;
};

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/clientError-c4e1466c.esm.js
var TypeId15 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/Error");
var make44 = (tag3) => (props) => struct2({
  [TypeId15]: TypeId15,
  _tag: tag3,
  ...props
});
var requestError = /* @__PURE__ */ make44("RequestError");
var responseError = /* @__PURE__ */ make44("ResponseError");

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/Headers-58b56a08.esm.js
var empty31 = /* @__PURE__ */ empty();
var fromInput3 = (input) => {
  if (input === void 0) {
    return empty31;
  } else if (Symbol.iterator in input) {
    return fromEntries(map2(fromIterable2(input), ([k, v]) => [k.toLowerCase(), v]));
  }
  return fromEntries(Object.entries(input).map(([k, v]) => [k.toLowerCase(), v]));
};
var set9 = /* @__PURE__ */ dual(3, (self, key2, value) => ({
  ...self,
  [key2.toLowerCase()]: value
}));
var setAll4 = /* @__PURE__ */ dual(2, (self, headers) => ({
  ...self,
  ...fromInput3(headers)
}));
var remove9 = /* @__PURE__ */ dual(2, (self, key2) => remove(self, key2.toLowerCase()));

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/clientRequest-fe7578cf.esm.js
var TypeId16 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/ClientRequest");
var ClientRequestImpl = class {
  constructor(method, url, urlParams, headers, body) {
    this.method = method;
    this.url = url;
    this.urlParams = urlParams;
    this.headers = headers;
    this.body = body;
    this[TypeId16] = TypeId16;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var isClientRequest = (u) => typeof u === "object" && u !== null && TypeId16 in u;
var empty32 = /* @__PURE__ */ new ClientRequestImpl("GET", "", empty30, empty31, empty29);
var make45 = (method) => (url, options3) => modify5(empty32, {
  method,
  url,
  ...options3 ?? {}
});
var get13 = /* @__PURE__ */ make45("GET");
var post = /* @__PURE__ */ make45("POST");
var put = /* @__PURE__ */ make45("PUT");
var patch8 = /* @__PURE__ */ make45("PATCH");
var del = /* @__PURE__ */ make45("DELETE");
var head5 = /* @__PURE__ */ make45("HEAD");
var options = /* @__PURE__ */ make45("OPTIONS");
var modify5 = /* @__PURE__ */ dual(2, (self, options3) => {
  let result = self;
  if (options3.method) {
    result = setMethod(result, options3.method);
  }
  if (options3.url) {
    result = setUrl(result, options3.url);
  }
  if (options3.headers) {
    result = setHeaders(result, options3.headers);
  }
  if (options3.urlParams) {
    result = setUrlParams(result, options3.urlParams);
  }
  if (options3.body) {
    result = setBody(result, options3.body);
  }
  if (options3.accept) {
    result = accept(result, options3.accept);
  }
  if (options3.acceptJson) {
    result = acceptJson(result);
  }
  return result;
});
var setHeader = /* @__PURE__ */ dual(3, (self, key2, value) => new ClientRequestImpl(self.method, self.url, self.urlParams, set9(self.headers, key2, value), self.body));
var setHeaders = /* @__PURE__ */ dual(2, (self, input) => new ClientRequestImpl(self.method, self.url, self.urlParams, setAll4(self.headers, input), self.body));
var basicAuth = /* @__PURE__ */ dual(3, (self, username, password) => setHeader(self, "Authorization", `Basic ${btoa(`${username}:${password}`)}`));
var bearerToken = /* @__PURE__ */ dual(2, (self, token) => setHeader(self, "Authorization", `Bearer ${token}`));
var accept = /* @__PURE__ */ dual(2, (self, mediaType) => setHeader(self, "Accept", mediaType));
var acceptJson = /* @__PURE__ */ accept("application/json");
var setMethod = /* @__PURE__ */ dual(2, (self, method) => new ClientRequestImpl(method, self.url, self.urlParams, self.headers, self.body));
var setUrl = /* @__PURE__ */ dual(2, (self, url) => new ClientRequestImpl(self.method, url, self.urlParams, self.headers, self.body));
var appendUrl = /* @__PURE__ */ dual(2, (self, url) => new ClientRequestImpl(self.method, self.url + url, self.urlParams, self.headers, self.body));
var prependUrl = /* @__PURE__ */ dual(2, (self, url) => new ClientRequestImpl(self.method, url + self.url, self.urlParams, self.headers, self.body));
var updateUrl = /* @__PURE__ */ dual(2, (self, f) => new ClientRequestImpl(self.method, f(self.url), self.urlParams, self.headers, self.body));
var appendUrlParam = /* @__PURE__ */ dual(3, (self, key2, value) => new ClientRequestImpl(self.method, self.url, append4(self.urlParams, key2, value), self.headers, self.body));
var appendUrlParams = /* @__PURE__ */ dual(2, (self, input) => new ClientRequestImpl(self.method, self.url, appendAll4(self.urlParams, input), self.headers, self.body));
var setUrlParam = /* @__PURE__ */ dual(3, (self, key2, value) => new ClientRequestImpl(self.method, self.url, set8(self.urlParams, key2, value), self.headers, self.body));
var setUrlParams = /* @__PURE__ */ dual(2, (self, input) => new ClientRequestImpl(self.method, self.url, setAll3(self.urlParams, input), self.headers, self.body));
var setBody = /* @__PURE__ */ dual(2, (self, body) => {
  let headers = self.headers;
  if (body._tag === "Empty") {
    headers = remove9(remove9(headers, "Content-Type"), "Content-length");
  } else {
    const contentType = body.contentType;
    if (contentType) {
      headers = set9(headers, "content-type", contentType);
    }
    const contentLength = body.contentLength;
    if (contentLength) {
      headers = set9(headers, "content-length", contentLength.toString());
    }
  }
  return new ClientRequestImpl(self.method, self.url, self.urlParams, headers, body);
});
var uint8ArrayBody = /* @__PURE__ */ dual((args) => isClientRequest(args[0]), (self, body, contentType = "application/octet-stream") => setBody(self, uint8Array(body, contentType)));
var textBody = /* @__PURE__ */ dual((args) => isClientRequest(args[0]), (self, body, contentType = "text/plain") => setBody(self, text(body, contentType)));
var jsonBody = /* @__PURE__ */ dual(2, (self, body) => map13(json(body), (body2) => setBody(self, body2)));
var unsafeJsonBody = /* @__PURE__ */ dual(2, (self, body) => setBody(self, unsafeJson(body)));
var fileBody = /* @__PURE__ */ dual((args) => isClientRequest(args[0]), (self, path, options3) => map13(file(path, options3), (body) => setBody(self, body)));
var fileWebBody = /* @__PURE__ */ dual(2, (self, file2) => setBody(self, fileWeb(file2)));
var schemaBody = (schema) => {
  const encode2 = jsonSchema(schema);
  return dual(2, (self, body) => map13(encode2(body), (body2) => setBody(self, body2)));
};
var urlParamsBody = /* @__PURE__ */ dual(2, (self, body) => setBody(self, text(toString2(fromInput2(body)), "application/x-www-form-urlencoded")));
var formDataBody = /* @__PURE__ */ dual(2, (self, body) => setBody(self, formData(body)));
var streamBody = /* @__PURE__ */ dual((args) => isClientRequest(args[0]), (self, body, {
  contentLength,
  contentType = "application/octet-stream"
} = {}) => setBody(self, stream(body, contentType, contentLength)));

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/Http/IncomingMessage/dist/effect-platform-Http-IncomingMessage.esm.js
var TypeId17 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/IncomingMessage");
var schemaBodyJson = (schema) => {
  const parse2 = parse(schema);
  return (self) => flatMap8(self.json, parse2);
};
var schemaBodyUrlParams = (schema) => {
  const parse2 = parse(schema);
  return (self) => flatMap8(self.urlParamsBody, (_) => parse2(Object.fromEntries(_)));
};
var schemaHeaders = (schema) => {
  const parse2 = parse(schema);
  return (self) => parse2(self.headers);
};

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/clientResponse-23f1ffca.esm.js
var TypeId18 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/ClientResponse");
var fromWeb = (request, source) => new ClientResponseImpl(request, source);
var ClientResponseImpl = class {
  constructor(request, source) {
    this.request = request;
    this.source = source;
    this[TypeId17] = TypeId17;
    this[TypeId18] = TypeId18;
  }
  get status() {
    return this.source.status;
  }
  get headers() {
    return fromInput3(this.source.headers);
  }
  get remoteAddress() {
    return none2();
  }
  get stream() {
    return this.source.body ? fromReadableStream2(() => this.source.body, (_) => responseError({
      request: this.request,
      response: this,
      reason: "Decode",
      error: _
    })) : fail12(responseError({
      request: this.request,
      response: this,
      reason: "EmptyBody",
      error: "can not create stream from empty body"
    }));
  }
  get json() {
    return tryMap2(this.text, {
      try: (text2) => text2 === "" ? null : JSON.parse(text2),
      catch: (_) => responseError({
        request: this.request,
        response: this,
        reason: "Decode",
        error: _
      })
    });
  }
  get text() {
    return tryPromise2({
      try: () => this.source.text(),
      catch: (_) => responseError({
        request: this.request,
        response: this,
        reason: "Decode",
        error: _
      })
    });
  }
  get urlParamsBody() {
    return flatMap8(this.text, (_) => try_2({
      try: () => fromInput2(new URLSearchParams(_)),
      catch: (_2) => responseError({
        request: this.request,
        response: this,
        reason: "Decode",
        error: _2
      })
    }));
  }
  get formData() {
    return tryPromise2({
      try: () => this.source.formData(),
      catch: (_) => responseError({
        request: this.request,
        response: this,
        reason: "Decode",
        error: _
      })
    });
  }
  get arrayBuffer() {
    return tryPromise2({
      try: () => this.source.arrayBuffer(),
      catch: (_) => responseError({
        request: this.request,
        response: this,
        reason: "Decode",
        error: _
      })
    });
  }
};
var schemaJson = (schema) => {
  const parse2 = parse(schema);
  return (self) => flatMap8(self.json, (body) => parse2({
    status: self.status,
    headers: self.headers,
    body
  }));
};
var schemaNoBody = (schema) => {
  const parse2 = parse(schema);
  return (self) => parse2({
    status: self.status,
    headers: self.headers
  });
};

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/Client-4f8f804b.esm.js
var TypeId$1 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/Client");
var tag2 = /* @__PURE__ */ Tag(TypeId$1);
var clientProto = {
  [TypeId$1]: TypeId$1,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
var make$1 = (f) => {
  Object.setPrototypeOf(f, clientProto);
  return f;
};
var withB3Propagation = (self) => make$1((req) => flatMap8(map13(currentSpan2, match({
  onNone: () => req,
  onSome: (span) => setHeader(req, "b3", `${span.traceId}-${span.spanId}-${span.sampled ? "1" : "0"}${span.parent._tag === "Some" ? `-${span.parent.value.spanId}` : ""}`)
})), self));
var makeDefault$1 = (f) => withB3Propagation(make$1(f));
var fetch$1 = (options3 = {}) => makeDefault$1((request) => flatMap8(makeUrl(request.url, request.urlParams, (_) => requestError({
  request,
  reason: "InvalidUrl",
  error: _
})), (url) => suspend3(() => {
  const headers = new Headers(request.headers);
  const send = (body) => map13(tryPromise2({
    try: (signal) => globalThis.fetch(url, {
      ...options3,
      method: request.method,
      headers,
      body,
      signal
    }),
    catch: (_) => requestError({
      request,
      reason: "Transport",
      error: _
    })
  }), (_) => fromWeb(request, _));
  if (hasBody(request.method)) {
    return send(convertBody(request.body));
  }
  return send(void 0);
})));
var convertBody = (body) => {
  switch (body._tag) {
    case "Empty":
      return void 0;
    case "Raw":
      return body.body;
    case "Uint8Array":
      return body.body;
    case "FormData":
      return body.formData;
    case "Stream":
      return toReadableStream2(body.stream);
  }
};
var fetchOk$1 = (options3 = {}) => filterStatusOk$1(fetch$1(options3));
var layer$1 = /* @__PURE__ */ succeed7(tag2, /* @__PURE__ */ fetch$1());
var transform$1 = /* @__PURE__ */ dual(2, (self, f) => make$1(f(self)));
var transformResponse$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => f(self(request))));
var catchTag$1 = /* @__PURE__ */ dual(3, (self, tag3, f) => make$1((request) => catchTag2(self(request), tag3, f)));
var catchTags$1 = /* @__PURE__ */ dual(2, (self, cases) => make$1((request) => catchTags2(self(request), cases)));
var catchAll$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => catchAll2(self(request), f)));
var filterOrElse$1 = /* @__PURE__ */ dual(3, (self, f, orElse8) => make$1((request) => filterOrElse2(self(request), f, orElse8)));
var filterOrFail$1 = /* @__PURE__ */ dual(3, (self, f, orFailWith) => make$1((request) => filterOrFail2(self(request), f, orFailWith)));
var filterStatus$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => filterOrFail2(self(request), (response) => f(response.status), (response) => responseError({
  request,
  response,
  reason: "StatusCode",
  error: "non 2xx status code"
}))));
var filterStatusOk$1 = /* @__PURE__ */ filterStatus$1((status2) => status2 >= 200 && status2 < 300);
var map$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => map13(self(request), f)));
var mapEffect$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => flatMap8(self(request), f)));
var mapRequest$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => self(f(request))));
var mapRequestEffect$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => flatMap8(f(request), self)));
var retry$1 = /* @__PURE__ */ dual(2, (self, policy) => make$1((request) => retry(self(request), policy)));
var schemaFunction$1 = /* @__PURE__ */ dual(2, (self, schema) => {
  const encode2 = encode(schema);
  return (request) => (a) => flatMap8(tryMap2(encode2(a), {
    try: (body) => new TextEncoder().encode(JSON.stringify(body)),
    catch: (error) => requestError({
      request,
      reason: "Encode",
      error
    })
  }), (body) => self(setBody(request, uint8Array(body, "application/json"))));
});
var tap$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => tap2(self(request), f)));
var tapRequest$1 = /* @__PURE__ */ dual(2, (self, f) => make$1((request) => zipRight3(f(request), self(request))));
var TypeId19 = TypeId$1;
var Client = tag2;
var layer = layer$1;
var fetch = fetch$1;
var fetchOk = fetchOk$1;
var catchAll6 = catchAll$1;
var catchTag4 = catchTag$1;
var catchTags4 = catchTags$1;
var filterOrElse3 = filterOrElse$1;
var filterOrFail3 = filterOrFail$1;
var filterStatus = filterStatus$1;
var filterStatusOk = filterStatusOk$1;
var make46 = make$1;
var makeDefault = makeDefault$1;
var transform3 = transform$1;
var transformResponse = transformResponse$1;
var map19 = map$1;
var mapEffect2 = mapEffect$1;
var mapRequest = mapRequest$1;
var mapRequestEffect = mapRequestEffect$1;
var retry4 = retry$1;
var schemaFunction = schemaFunction$1;
var tap5 = tap$1;
var tapRequest = tapRequest$1;

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/Http/ClientRequest/dist/effect-platform-Http-ClientRequest.esm.js
var effect_platform_Http_ClientRequest_esm_exports = {};
__export(effect_platform_Http_ClientRequest_esm_exports, {
  TypeId: () => TypeId20,
  accept: () => accept2,
  acceptJson: () => acceptJson2,
  appendUrl: () => appendUrl2,
  appendUrlParam: () => appendUrlParam2,
  appendUrlParams: () => appendUrlParams2,
  basicAuth: () => basicAuth2,
  bearerToken: () => bearerToken2,
  del: () => del2,
  fileBody: () => fileBody2,
  fileWebBody: () => fileWebBody2,
  formDataBody: () => formDataBody2,
  get: () => get14,
  head: () => head6,
  jsonBody: () => jsonBody2,
  make: () => make47,
  modify: () => modify6,
  options: () => options2,
  patch: () => patch9,
  post: () => post2,
  prependUrl: () => prependUrl2,
  put: () => put2,
  schemaBody: () => schemaBody2,
  setBody: () => setBody2,
  setHeader: () => setHeader2,
  setHeaders: () => setHeaders2,
  setMethod: () => setMethod2,
  setUrl: () => setUrl2,
  setUrlParam: () => setUrlParam2,
  setUrlParams: () => setUrlParams2,
  streamBody: () => streamBody2,
  textBody: () => textBody2,
  uint8ArrayBody: () => uint8ArrayBody2,
  unsafeJsonBody: () => unsafeJsonBody2,
  updateUrl: () => updateUrl2,
  urlParamsBody: () => urlParamsBody2
});

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/ClientRequest-27630c54.esm.js
var TypeId20 = /* @__PURE__ */ Symbol.for("@effect/platform/Http/ClientRequest");
var make47 = make45;
var get14 = get13;
var post2 = post;
var patch9 = patch8;
var put2 = put;
var del2 = del;
var head6 = head5;
var options2 = options;
var modify6 = modify5;
var setMethod2 = setMethod;
var setHeader2 = setHeader;
var setHeaders2 = setHeaders;
var basicAuth2 = basicAuth;
var bearerToken2 = bearerToken;
var accept2 = accept;
var acceptJson2 = acceptJson;
var setUrl2 = setUrl;
var prependUrl2 = prependUrl;
var appendUrl2 = appendUrl;
var updateUrl2 = updateUrl;
var setUrlParam2 = setUrlParam;
var setUrlParams2 = setUrlParams;
var appendUrlParam2 = appendUrlParam;
var appendUrlParams2 = appendUrlParams;
var setBody2 = setBody;
var uint8ArrayBody2 = uint8ArrayBody;
var textBody2 = textBody;
var jsonBody2 = jsonBody;
var unsafeJsonBody2 = unsafeJsonBody;
var schemaBody2 = schemaBody;
var urlParamsBody2 = urlParamsBody;
var formDataBody2 = formDataBody;
var streamBody2 = streamBody;
var fileBody2 = fileBody;
var fileWebBody2 = fileWebBody;

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/Http/ClientResponse/dist/effect-platform-Http-ClientResponse.esm.js
var effect_platform_Http_ClientResponse_esm_exports = {};
__export(effect_platform_Http_ClientResponse_esm_exports, {
  TypeId: () => TypeId21,
  fromWeb: () => fromWeb2,
  schemaBodyJson: () => schemaBodyJson,
  schemaBodyUrlParams: () => schemaBodyUrlParams,
  schemaHeaders: () => schemaHeaders,
  schemaJson: () => schemaJson2,
  schemaNoBody: () => schemaNoBody2
});

// node_modules/.pnpm/@effect+platform@0.22.0_@effect+schema@0.43.2_effect@2.0.0-next.48/node_modules/@effect/platform/dist/ClientResponse-862f0a17.esm.js
var TypeId21 = TypeId18;
var fromWeb2 = fromWeb;
var schemaJson2 = schemaJson;
var schemaNoBody2 = schemaNoBody;

// src/internal/RuntimeClass.ts
function RuntimeClass(layer2) {
  return class {
    #scope = runSync(make37());
    #runtime;
    constructor(...args) {
      this.#runtime = runSync(
        cached2(
          toRuntime2(layer2(...args)).pipe(extend2(this.#scope))
        )
      );
    }
    close() {
      return runPromise(close(this.#scope, unit2));
    }
    [Symbol.asyncDispose]() {
      return this.close();
    }
    [Symbol.dispose]() {
      this.close();
    }
    $effect(effect3) {
      return runPromise(
        flatMap8(
          this.#runtime,
          (runtime4) => provide(effect3, runtime4)
        )
      );
    }
    $effectFn(fn) {
      return (...args) => this.$effect(fn(...args));
    }
    $service(tag3, fn) {
      return () => this.$effect(flatMap8(tag3, (_) => fn(_)));
    }
    $serviceFn(tag3, fn) {
      return (...args) => this.$effect(flatMap8(tag3, (_) => fn(_)(args)));
    }
  };
}

// src/internal/OpenAi.ts
var make48 = (config) => gen2(function* (_) {
  const client = (yield* _(effect_platform_Http_Client_esm_exports.Client)).pipe(
    effect_platform_Http_Client_esm_exports.mapRequest(
      flow(
        effect_platform_Http_ClientRequest_esm_exports.prependUrl("https://api.openai.com/v1"),
        effect_platform_Http_ClientRequest_esm_exports.bearerToken(config.apiKey),
        config.organization ? effect_platform_Http_ClientRequest_esm_exports.setHeader("OpenAI-Organization", config.organization) : identity
      )
    ),
    effect_platform_Http_Client_esm_exports.filterStatusOk
  );
  const models = effect_platform_Http_ClientRequest_esm_exports.get("/models").pipe(
    client,
    flatMap8(effect_platform_Http_ClientResponse_esm_exports.schemaBodyJson(ListResult(ModelSchema))),
    map13((_2) => _2.data)
  );
  return { models };
});
var OpenAI = Tag("openai-demo/OpenAI");
var OpenAILive = (config) => effect(OpenAI, make48(config)).pipe(use3(effect_platform_Http_Client_esm_exports.layer));
var OpenAIClientImpl = class extends RuntimeClass(OpenAILive) {
  constructor(config) {
    super(config);
  }
  models = this.$service(
    OpenAI,
    (_) => _.models
  );
};
var createClient = (config) => new OpenAIClientImpl(config);
var DateFromUnixTime = Int.pipe(
  transform2(
    DateFromSelf,
    (_) => new Date(_ * 1e3),
    (_) => Math.floor(_.getTime() / 1e3)
  )
);
var ListResult = (schema) => struct3({
  object: string4,
  data: array5(schema),
  has_more: optional(boolean3).withDefault(() => false)
});
var ModelSchema = class extends Class2()({
  id: string4,
  object: string4,
  created: DateFromUnixTime,
  owned_by: string4,
  root: string4,
  parent: nullable(string4)
}) {
};

// src/index.ts
var createClient2 = createClient;

exports.createClient = createClient2;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map