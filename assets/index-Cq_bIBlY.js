(function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
		r(l);
	new MutationObserver((l) => {
		for (const o of l)
			if (o.type === "childList")
				for (const i of o.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(l) {
		const o = {};
		return (
			l.integrity && (o.integrity = l.integrity),
			l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
			l.crossOrigin === "use-credentials"
				? (o.credentials = "include")
				: l.crossOrigin === "anonymous"
				? (o.credentials = "omit")
				: (o.credentials = "same-origin"),
			o
		);
	}
	function r(l) {
		if (l.ep) return;
		l.ep = !0;
		const o = n(l);
		fetch(l.href, o);
	}
})();
function vc(e) {
	return e &&
		e.__esModule &&
		Object.prototype.hasOwnProperty.call(e, "default")
		? e.default
		: e;
}
var Yu = { exports: {} },
	ul = {},
	Xu = { exports: {} },
	$ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr = Symbol.for("react.element"),
	yc = Symbol.for("react.portal"),
	gc = Symbol.for("react.fragment"),
	wc = Symbol.for("react.strict_mode"),
	Sc = Symbol.for("react.profiler"),
	kc = Symbol.for("react.provider"),
	xc = Symbol.for("react.context"),
	Nc = Symbol.for("react.forward_ref"),
	Ec = Symbol.for("react.suspense"),
	Cc = Symbol.for("react.memo"),
	_c = Symbol.for("react.lazy"),
	Ii = Symbol.iterator;
function jc(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Ii && e[Ii]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var Gu = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	Zu = Object.assign,
	Ju = {};
function hn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Ju),
		(this.updater = n || Gu);
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
	if (typeof e != "object" && typeof e != "function" && e != null)
		throw Error(
			"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
		);
	this.updater.enqueueSetState(this, e, t, "setState");
};
hn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {}
qu.prototype = hn.prototype;
function Ho(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Ju),
		(this.updater = n || Gu);
}
var Wo = (Ho.prototype = new qu());
Wo.constructor = Ho;
Zu(Wo, hn.prototype);
Wo.isPureReactComponent = !0;
var Fi = Array.isArray,
	bu = Object.prototype.hasOwnProperty,
	Qo = { current: null },
	es = { key: !0, ref: !0, __self: !0, __source: !0 };
function ts(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (i = t.ref),
		t.key !== void 0 && (o = "" + t.key),
		t))
			bu.call(t, r) && !es.hasOwnProperty(r) && (l[r] = t[r]);
	var u = arguments.length - 2;
	if (u === 1) l.children = n;
	else if (1 < u) {
		for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
		l.children = s;
	}
	if (e && e.defaultProps)
		for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
	return {
		$$typeof: nr,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Qo.current,
	};
}
function Pc(e, t) {
	return {
		$$typeof: nr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Ko(e) {
	return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function zc(e) {
	var t = { "=": "=0", ":": "=2" };
	return (
		"$" +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var Bi = /\/+/g;
function Nl(e, t) {
	return typeof e == "object" && e !== null && e.key != null
		? zc("" + e.key)
		: t.toString(36);
}
function Cr(e, t, n, r, l) {
	var o = typeof e;
	(o === "undefined" || o === "boolean") && (e = null);
	var i = !1;
	if (e === null) i = !0;
	else
		switch (o) {
			case "string":
			case "number":
				i = !0;
				break;
			case "object":
				switch (e.$$typeof) {
					case nr:
					case yc:
						i = !0;
				}
		}
	if (i)
		return (
			(i = e),
			(l = l(i)),
			(e = r === "" ? "." + Nl(i, 0) : r),
			Fi(l)
				? ((n = ""),
				  e != null && (n = e.replace(Bi, "$&/") + "/"),
				  Cr(l, t, n, "", function (a) {
						return a;
				  }))
				: l != null &&
				  (Ko(l) &&
						(l = Pc(
							l,
							n +
								(!l.key || (i && i.key === l.key)
									? ""
									: ("" + l.key).replace(Bi, "$&/") + "/") +
								e
						)),
				  t.push(l)),
			1
		);
	if (((i = 0), (r = r === "" ? "." : r + ":"), Fi(e)))
		for (var u = 0; u < e.length; u++) {
			o = e[u];
			var s = r + Nl(o, u);
			i += Cr(o, t, n, s, l);
		}
	else if (((s = jc(e)), typeof s == "function"))
		for (e = s.call(e), u = 0; !(o = e.next()).done; )
			(o = o.value), (s = r + Nl(o, u++)), (i += Cr(o, t, n, s, l));
	else if (o === "object")
		throw (
			((t = String(e)),
			Error(
				"Objects are not valid as a React child (found: " +
					(t === "[object Object]"
						? "object with keys {" + Object.keys(e).join(", ") + "}"
						: t) +
					"). If you meant to render a collection of children, use an array instead."
			))
		);
	return i;
}
function sr(e, t, n) {
	if (e == null) return e;
	var r = [],
		l = 0;
	return (
		Cr(e, r, "", "", function (o) {
			return t.call(n, o, l++);
		}),
		r
	);
}
function Rc(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ve = { current: null },
	_r = { transition: null },
	Tc = {
		ReactCurrentDispatcher: ve,
		ReactCurrentBatchConfig: _r,
		ReactCurrentOwner: Qo,
	};
function ns() {
	throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
	map: sr,
	forEach: function (e, t, n) {
		sr(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			sr(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			sr(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Ko(e))
			throw Error(
				"React.Children.only expected to receive a single React element child."
			);
		return e;
	},
};
$.Component = hn;
$.Fragment = gc;
$.Profiler = Sc;
$.PureComponent = Ho;
$.StrictMode = wc;
$.Suspense = Ec;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc;
$.act = ns;
$.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			"React.cloneElement(...): The argument must be a React element, but you passed " +
				e +
				"."
		);
	var r = Zu({}, e.props),
		l = e.key,
		o = e.ref,
		i = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (i = Qo.current)),
			t.key !== void 0 && (l = "" + t.key),
			e.type && e.type.defaultProps)
		)
			var u = e.type.defaultProps;
		for (s in t)
			bu.call(t, s) &&
				!es.hasOwnProperty(s) &&
				(r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
	}
	var s = arguments.length - 2;
	if (s === 1) r.children = n;
	else if (1 < s) {
		u = Array(s);
		for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
		r.children = u;
	}
	return { $$typeof: nr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
$.createContext = function (e) {
	return (
		(e = {
			$$typeof: xc,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: kc, _context: e }),
		(e.Consumer = e)
	);
};
$.createElement = ts;
$.createFactory = function (e) {
	var t = ts.bind(null, e);
	return (t.type = e), t;
};
$.createRef = function () {
	return { current: null };
};
$.forwardRef = function (e) {
	return { $$typeof: Nc, render: e };
};
$.isValidElement = Ko;
$.lazy = function (e) {
	return { $$typeof: _c, _payload: { _status: -1, _result: e }, _init: Rc };
};
$.memo = function (e, t) {
	return { $$typeof: Cc, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
	var t = _r.transition;
	_r.transition = {};
	try {
		e();
	} finally {
		_r.transition = t;
	}
};
$.unstable_act = ns;
$.useCallback = function (e, t) {
	return ve.current.useCallback(e, t);
};
$.useContext = function (e) {
	return ve.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
	return ve.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
	return ve.current.useEffect(e, t);
};
$.useId = function () {
	return ve.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
	return ve.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
	return ve.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
	return ve.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
	return ve.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
	return ve.current.useReducer(e, t, n);
};
$.useRef = function (e) {
	return ve.current.useRef(e);
};
$.useState = function (e) {
	return ve.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
	return ve.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
	return ve.current.useTransition();
};
$.version = "18.3.1";
Xu.exports = $;
var _ = Xu.exports;
const L = vc(_);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mc = _,
	Lc = Symbol.for("react.element"),
	Dc = Symbol.for("react.fragment"),
	$c = Object.prototype.hasOwnProperty,
	Oc =
		Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, t, n) {
	var r,
		l = {},
		o = null,
		i = null;
	n !== void 0 && (o = "" + n),
		t.key !== void 0 && (o = "" + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) $c.call(t, r) && !Ic.hasOwnProperty(r) && (l[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
	return {
		$$typeof: Lc,
		type: e,
		key: o,
		ref: i,
		props: l,
		_owner: Oc.current,
	};
}
ul.Fragment = Dc;
ul.jsx = rs;
ul.jsxs = rs;
Yu.exports = ul;
var v = Yu.exports,
	Gl = {},
	ls = { exports: {} },
	Pe = {},
	os = { exports: {} },
	is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(E, D) {
		var M = E.length;
		E.push(D);
		e: for (; 0 < M; ) {
			var B = (M - 1) >>> 1,
				X = E[B];
			if (0 < l(X, D)) (E[B] = D), (E[M] = X), (M = B);
			else break e;
		}
	}
	function n(E) {
		return E.length === 0 ? null : E[0];
	}
	function r(E) {
		if (E.length === 0) return null;
		var D = E[0],
			M = E.pop();
		if (M !== D) {
			E[0] = M;
			e: for (var B = 0, X = E.length, it = X >>> 1; B < it; ) {
				var Ge = 2 * (B + 1) - 1,
					Re = E[Ge],
					jt = Ge + 1,
					ur = E[jt];
				if (0 > l(Re, M))
					jt < X && 0 > l(ur, Re)
						? ((E[B] = ur), (E[jt] = M), (B = jt))
						: ((E[B] = Re), (E[Ge] = M), (B = Ge));
				else if (jt < X && 0 > l(ur, M))
					(E[B] = ur), (E[jt] = M), (B = jt);
				else break e;
			}
		}
		return D;
	}
	function l(E, D) {
		var M = E.sortIndex - D.sortIndex;
		return M !== 0 ? M : E.id - D.id;
	}
	if (
		typeof performance == "object" &&
		typeof performance.now == "function"
	) {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var i = Date,
			u = i.now();
		e.unstable_now = function () {
			return i.now() - u;
		};
	}
	var s = [],
		a = [],
		m = 1,
		h = null,
		p = 3,
		y = !1,
		w = !1,
		S = !1,
		T = typeof setTimeout == "function" ? setTimeout : null,
		f = typeof clearTimeout == "function" ? clearTimeout : null,
		c = typeof setImmediate < "u" ? setImmediate : null;
	typeof navigator < "u" &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function d(E) {
		for (var D = n(a); D !== null; ) {
			if (D.callback === null) r(a);
			else if (D.startTime <= E)
				r(a), (D.sortIndex = D.expirationTime), t(s, D);
			else break;
			D = n(a);
		}
	}
	function g(E) {
		if (((S = !1), d(E), !w))
			if (n(s) !== null) (w = !0), te(x);
			else {
				var D = n(a);
				D !== null && ge(g, D.startTime - E);
			}
	}
	function x(E, D) {
		(w = !1), S && ((S = !1), f(j), (j = -1)), (y = !0);
		var M = p;
		try {
			for (
				d(D), h = n(s);
				h !== null && (!(h.expirationTime > D) || (E && !F()));

			) {
				var B = h.callback;
				if (typeof B == "function") {
					(h.callback = null), (p = h.priorityLevel);
					var X = B(h.expirationTime <= D);
					(D = e.unstable_now()),
						typeof X == "function"
							? (h.callback = X)
							: h === n(s) && r(s),
						d(D);
				} else r(s);
				h = n(s);
			}
			if (h !== null) var it = !0;
			else {
				var Ge = n(a);
				Ge !== null && ge(g, Ge.startTime - D), (it = !1);
			}
			return it;
		} finally {
			(h = null), (p = M), (y = !1);
		}
	}
	var N = !1,
		C = null,
		j = -1,
		A = 5,
		P = -1;
	function F() {
		return !(e.unstable_now() - P < A);
	}
	function V() {
		if (C !== null) {
			var E = e.unstable_now();
			P = E;
			var D = !0;
			try {
				D = C(!0, E);
			} finally {
				D ? Y() : ((N = !1), (C = null));
			}
		} else N = !1;
	}
	var Y;
	if (typeof c == "function")
		Y = function () {
			c(V);
		};
	else if (typeof MessageChannel < "u") {
		var O = new MessageChannel(),
			H = O.port2;
		(O.port1.onmessage = V),
			(Y = function () {
				H.postMessage(null);
			});
	} else
		Y = function () {
			T(V, 0);
		};
	function te(E) {
		(C = E), N || ((N = !0), Y());
	}
	function ge(E, D) {
		j = T(function () {
			E(e.unstable_now());
		}, D);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (E) {
			E.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			w || y || ((w = !0), te(x));
		}),
		(e.unstable_forceFrameRate = function (E) {
			0 > E || 125 < E
				? console.error(
						"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
				  )
				: (A = 0 < E ? Math.floor(1e3 / E) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return p;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(s);
		}),
		(e.unstable_next = function (E) {
			switch (p) {
				case 1:
				case 2:
				case 3:
					var D = 3;
					break;
				default:
					D = p;
			}
			var M = p;
			p = D;
			try {
				return E();
			} finally {
				p = M;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (E, D) {
			switch (E) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					E = 3;
			}
			var M = p;
			p = E;
			try {
				return D();
			} finally {
				p = M;
			}
		}),
		(e.unstable_scheduleCallback = function (E, D, M) {
			var B = e.unstable_now();
			switch (
				(typeof M == "object" && M !== null
					? ((M = M.delay),
					  (M = typeof M == "number" && 0 < M ? B + M : B))
					: (M = B),
				E)
			) {
				case 1:
					var X = -1;
					break;
				case 2:
					X = 250;
					break;
				case 5:
					X = 1073741823;
					break;
				case 4:
					X = 1e4;
					break;
				default:
					X = 5e3;
			}
			return (
				(X = M + X),
				(E = {
					id: m++,
					callback: D,
					priorityLevel: E,
					startTime: M,
					expirationTime: X,
					sortIndex: -1,
				}),
				M > B
					? ((E.sortIndex = M),
					  t(a, E),
					  n(s) === null &&
							E === n(a) &&
							(S ? (f(j), (j = -1)) : (S = !0), ge(g, M - B)))
					: ((E.sortIndex = X), t(s, E), w || y || ((w = !0), te(x))),
				E
			);
		}),
		(e.unstable_shouldYield = F),
		(e.unstable_wrapCallback = function (E) {
			var D = p;
			return function () {
				var M = p;
				p = D;
				try {
					return E.apply(this, arguments);
				} finally {
					p = M;
				}
			};
		});
})(is);
os.exports = is;
var Fc = os.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bc = _,
	je = Fc;
function k(e) {
	for (
		var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
			n = 1;
		n < arguments.length;
		n++
	)
		t += "&args[]=" + encodeURIComponent(arguments[n]);
	return (
		"Minified React error #" +
		e +
		"; visit " +
		t +
		" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	);
}
var us = new Set(),
	Bn = {};
function Ut(e, t) {
	sn(e, t), sn(e + "Capture", t);
}
function sn(e, t) {
	for (Bn[e] = t, e = 0; e < t.length; e++) us.add(t[e]);
}
var tt = !(
		typeof window > "u" ||
		typeof window.document > "u" ||
		typeof window.document.createElement > "u"
	),
	Zl = Object.prototype.hasOwnProperty,
	Uc =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Ui = {},
	Ai = {};
function Ac(e) {
	return Zl.call(Ai, e)
		? !0
		: Zl.call(Ui, e)
		? !1
		: Uc.test(e)
		? (Ai[e] = !0)
		: ((Ui[e] = !0), !1);
}
function Vc(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case "function":
		case "symbol":
			return !0;
		case "boolean":
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)),
				  e !== "data-" && e !== "aria-");
		default:
			return !1;
	}
}
function Hc(e, t, n, r) {
	if (t === null || typeof t > "u" || Vc(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function ye(e, t, n, r, l, o, i) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = l),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = i);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
	.split(" ")
	.forEach(function (e) {
		ae[e] = new ye(e, 0, !1, e, null, !1, !1);
	});
[
	["acceptCharset", "accept-charset"],
	["className", "class"],
	["htmlFor", "for"],
	["httpEquiv", "http-equiv"],
].forEach(function (e) {
	var t = e[0];
	ae[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
	ae[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	"autoReverse",
	"externalResourcesRequired",
	"focusable",
	"preserveAlpha",
].forEach(function (e) {
	ae[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
	.split(" ")
	.forEach(function (e) {
		ae[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
	ae[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
	ae[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
	ae[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
	ae[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yo = /[\-:]([a-z])/g;
function Xo(e) {
	return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Yo, Xo);
		ae[t] = new ye(t, 1, !1, e, null, !1, !1);
	});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
	.split(" ")
	.forEach(function (e) {
		var t = e.replace(Yo, Xo);
		ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
	});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
	var t = e.replace(Yo, Xo);
	ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
	ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ye(
	"xlinkHref",
	1,
	!1,
	"xlink:href",
	"http://www.w3.org/1999/xlink",
	!0,
	!1
);
["src", "href", "action", "formAction"].forEach(function (e) {
	ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
	var l = ae.hasOwnProperty(t) ? ae[t] : null;
	(l !== null
		? l.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== "o" && t[0] !== "O") ||
		  (t[1] !== "n" && t[1] !== "N")) &&
		(Hc(t, n, l, r) && (n = null),
		r || l === null
			? Ac(t) &&
			  (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
			: l.mustUseProperty
			? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
			: ((t = l.attributeName),
			  (r = l.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((l = l.type),
					  (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	ar = Symbol.for("react.element"),
	Ht = Symbol.for("react.portal"),
	Wt = Symbol.for("react.fragment"),
	Zo = Symbol.for("react.strict_mode"),
	Jl = Symbol.for("react.profiler"),
	ss = Symbol.for("react.provider"),
	as = Symbol.for("react.context"),
	Jo = Symbol.for("react.forward_ref"),
	ql = Symbol.for("react.suspense"),
	bl = Symbol.for("react.suspense_list"),
	qo = Symbol.for("react.memo"),
	st = Symbol.for("react.lazy"),
	cs = Symbol.for("react.offscreen"),
	Vi = Symbol.iterator;
function gn(e) {
	return e === null || typeof e != "object"
		? null
		: ((e = (Vi && e[Vi]) || e["@@iterator"]),
		  typeof e == "function" ? e : null);
}
var q = Object.assign,
	El;
function _n(e) {
	if (El === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			El = (t && t[1]) || "";
		}
	return (
		`
` +
		El +
		e
	);
}
var Cl = !1;
function _l(e, t) {
	if (!e || Cl) return "";
	Cl = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, "props", {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == "object" && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (a) {
					var r = a;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (a) {
					r = a;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (a) {
				r = a;
			}
			e();
		}
	} catch (a) {
		if (a && r && typeof a.stack == "string") {
			for (
				var l = a.stack.split(`
`),
					o = r.stack.split(`
`),
					i = l.length - 1,
					u = o.length - 1;
				1 <= i && 0 <= u && l[i] !== o[u];

			)
				u--;
			for (; 1 <= i && 0 <= u; i--, u--)
				if (l[i] !== o[u]) {
					if (i !== 1 || u !== 1)
						do
							if ((i--, u--, 0 > u || l[i] !== o[u])) {
								var s =
									`
` + l[i].replace(" at new ", " at ");
								return (
									e.displayName &&
										s.includes("<anonymous>") &&
										(s = s.replace(
											"<anonymous>",
											e.displayName
										)),
									s
								);
							}
						while (1 <= i && 0 <= u);
					break;
				}
		}
	} finally {
		(Cl = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : "") ? _n(e) : "";
}
function Wc(e) {
	switch (e.tag) {
		case 5:
			return _n(e.type);
		case 16:
			return _n("Lazy");
		case 13:
			return _n("Suspense");
		case 19:
			return _n("SuspenseList");
		case 0:
		case 2:
		case 15:
			return (e = _l(e.type, !1)), e;
		case 11:
			return (e = _l(e.type.render, !1)), e;
		case 1:
			return (e = _l(e.type, !0)), e;
		default:
			return "";
	}
}
function eo(e) {
	if (e == null) return null;
	if (typeof e == "function") return e.displayName || e.name || null;
	if (typeof e == "string") return e;
	switch (e) {
		case Wt:
			return "Fragment";
		case Ht:
			return "Portal";
		case Jl:
			return "Profiler";
		case Zo:
			return "StrictMode";
		case ql:
			return "Suspense";
		case bl:
			return "SuspenseList";
	}
	if (typeof e == "object")
		switch (e.$$typeof) {
			case as:
				return (e.displayName || "Context") + ".Consumer";
			case ss:
				return (e._context.displayName || "Context") + ".Provider";
			case Jo:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ""),
						(e =
							e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
					e
				);
			case qo:
				return (
					(t = e.displayName || null),
					t !== null ? t : eo(e.type) || "Memo"
				);
			case st:
				(t = e._payload), (e = e._init);
				try {
					return eo(e(t));
				} catch {}
		}
	return null;
}
function Qc(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return "Cache";
		case 9:
			return (t.displayName || "Context") + ".Consumer";
		case 10:
			return (t._context.displayName || "Context") + ".Provider";
		case 18:
			return "DehydratedFragment";
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ""),
				t.displayName ||
					(e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
			);
		case 7:
			return "Fragment";
		case 5:
			return t;
		case 4:
			return "Portal";
		case 3:
			return "Root";
		case 6:
			return "Text";
		case 16:
			return eo(t);
		case 8:
			return t === Zo ? "StrictMode" : "Mode";
		case 22:
			return "Offscreen";
		case 12:
			return "Profiler";
		case 21:
			return "Scope";
		case 13:
			return "Suspense";
		case 19:
			return "SuspenseList";
		case 25:
			return "TracingMarker";
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == "function") return t.displayName || t.name || null;
			if (typeof t == "string") return t;
	}
	return null;
}
function xt(e) {
	switch (typeof e) {
		case "boolean":
		case "number":
		case "string":
		case "undefined":
			return e;
		case "object":
			return e;
		default:
			return "";
	}
}
function fs(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === "input" &&
		(t === "checkbox" || t === "radio")
	);
}
function Kc(e) {
	var t = fs(e) ? "checked" : "value",
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = "" + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < "u" &&
		typeof n.get == "function" &&
		typeof n.set == "function"
	) {
		var l = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return l.call(this);
				},
				set: function (i) {
					(r = "" + i), o.call(this, i);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (i) {
					r = "" + i;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function cr(e) {
	e._valueTracker || (e._valueTracker = Kc(e));
}
function ds(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = "";
	return (
		e && (r = fs(e) ? (e.checked ? "true" : "false") : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ir(e) {
	if (
		((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
	)
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function to(e, t) {
	var n = t.checked;
	return q({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Hi(e, t) {
	var n = t.defaultValue == null ? "" : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = xt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === "checkbox" || t.type === "radio"
					? t.checked != null
					: t.value != null,
		});
}
function ps(e, t) {
	(t = t.checked), t != null && Go(e, "checked", t, !1);
}
function no(e, t) {
	ps(e, t);
	var n = xt(t.value),
		r = t.type;
	if (n != null)
		r === "number"
			? ((n === 0 && e.value === "") || e.value != n) &&
			  (e.value = "" + n)
			: e.value !== "" + n && (e.value = "" + n);
	else if (r === "submit" || r === "reset") {
		e.removeAttribute("value");
		return;
	}
	t.hasOwnProperty("value")
		? ro(e, t.type, n)
		: t.hasOwnProperty("defaultValue") && ro(e, t.type, xt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Wi(e, t, n) {
	if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
		var r = t.type;
		if (
			!(
				(r !== "submit" && r !== "reset") ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = "" + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== "" && (e.name = ""),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== "" && (e.name = n);
}
function ro(e, t, n) {
	(t !== "number" || Ir(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = "" + e._wrapperState.initialValue)
			: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jn = Array.isArray;
function tn(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
		for (n = 0; n < e.length; n++)
			(l = t.hasOwnProperty("$" + e[n].value)),
				e[n].selected !== l && (e[n].selected = l),
				l && r && (e[n].defaultSelected = !0);
	} else {
		for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
			if (e[l].value === n) {
				(e[l].selected = !0), r && (e[l].defaultSelected = !0);
				return;
			}
			t !== null || e[l].disabled || (t = e[l]);
		}
		t !== null && (t.selected = !0);
	}
}
function lo(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
	return q({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: "" + e._wrapperState.initialValue,
	});
}
function Qi(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(k(92));
			if (jn(n)) {
				if (1 < n.length) throw Error(k(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ""), (n = t);
	}
	e._wrapperState = { initialValue: xt(n) };
}
function ms(e, t) {
	var n = xt(t.value),
		r = xt(t.defaultValue);
	n != null &&
		((n = "" + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = "" + r);
}
function Ki(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue &&
		t !== "" &&
		t !== null &&
		(e.value = t);
}
function hs(e) {
	switch (e) {
		case "svg":
			return "http://www.w3.org/2000/svg";
		case "math":
			return "http://www.w3.org/1998/Math/MathML";
		default:
			return "http://www.w3.org/1999/xhtml";
	}
}
function oo(e, t) {
	return e == null || e === "http://www.w3.org/1999/xhtml"
		? hs(t)
		: e === "http://www.w3.org/2000/svg" && t === "foreignObject"
		? "http://www.w3.org/1999/xhtml"
		: e;
}
var fr,
	vs = (function (e) {
		return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
			? function (t, n, r, l) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, l);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
			e.innerHTML = t;
		else {
			for (
				fr = fr || document.createElement("div"),
					fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
					t = fr.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Un(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var Rn = {
		animationIterationCount: !0,
		aspectRatio: !0,
		borderImageOutset: !0,
		borderImageSlice: !0,
		borderImageWidth: !0,
		boxFlex: !0,
		boxFlexGroup: !0,
		boxOrdinalGroup: !0,
		columnCount: !0,
		columns: !0,
		flex: !0,
		flexGrow: !0,
		flexPositive: !0,
		flexShrink: !0,
		flexNegative: !0,
		flexOrder: !0,
		gridArea: !0,
		gridRow: !0,
		gridRowEnd: !0,
		gridRowSpan: !0,
		gridRowStart: !0,
		gridColumn: !0,
		gridColumnEnd: !0,
		gridColumnSpan: !0,
		gridColumnStart: !0,
		fontWeight: !0,
		lineClamp: !0,
		lineHeight: !0,
		opacity: !0,
		order: !0,
		orphans: !0,
		tabSize: !0,
		widows: !0,
		zIndex: !0,
		zoom: !0,
		fillOpacity: !0,
		floodOpacity: !0,
		stopOpacity: !0,
		strokeDasharray: !0,
		strokeDashoffset: !0,
		strokeMiterlimit: !0,
		strokeOpacity: !0,
		strokeWidth: !0,
	},
	Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
	Yc.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
	});
});
function ys(e, t, n) {
	return t == null || typeof t == "boolean" || t === ""
		? ""
		: n ||
		  typeof t != "number" ||
		  t === 0 ||
		  (Rn.hasOwnProperty(e) && Rn[e])
		? ("" + t).trim()
		: t + "px";
}
function gs(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf("--") === 0,
				l = ys(n, t[n], r);
			n === "float" && (n = "cssFloat"),
				r ? e.setProperty(n, l) : (e[n] = l);
		}
}
var Xc = q(
	{ menuitem: !0 },
	{
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0,
	}
);
function io(e, t) {
	if (t) {
		if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(k(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(k(60));
			if (
				typeof t.dangerouslySetInnerHTML != "object" ||
				!("__html" in t.dangerouslySetInnerHTML)
			)
				throw Error(k(61));
		}
		if (t.style != null && typeof t.style != "object") throw Error(k(62));
	}
}
function uo(e, t) {
	if (e.indexOf("-") === -1) return typeof t.is == "string";
	switch (e) {
		case "annotation-xml":
		case "color-profile":
		case "font-face":
		case "font-face-src":
		case "font-face-uri":
		case "font-face-format":
		case "font-face-name":
		case "missing-glyph":
			return !1;
		default:
			return !0;
	}
}
var so = null;
function bo(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var ao = null,
	nn = null,
	rn = null;
function Yi(e) {
	if ((e = or(e))) {
		if (typeof ao != "function") throw Error(k(280));
		var t = e.stateNode;
		t && ((t = dl(t)), ao(e.stateNode, e.type, t));
	}
}
function ws(e) {
	nn ? (rn ? rn.push(e) : (rn = [e])) : (nn = e);
}
function Ss() {
	if (nn) {
		var e = nn,
			t = rn;
		if (((rn = nn = null), Yi(e), t))
			for (e = 0; e < t.length; e++) Yi(t[e]);
	}
}
function ks(e, t) {
	return e(t);
}
function xs() {}
var jl = !1;
function Ns(e, t, n) {
	if (jl) return e(t, n);
	jl = !0;
	try {
		return ks(e, t, n);
	} finally {
		(jl = !1), (nn !== null || rn !== null) && (xs(), Ss());
	}
}
function An(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = dl(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case "onClick":
		case "onClickCapture":
		case "onDoubleClick":
		case "onDoubleClickCapture":
		case "onMouseDown":
		case "onMouseDownCapture":
		case "onMouseMove":
		case "onMouseMoveCapture":
		case "onMouseUp":
		case "onMouseUpCapture":
		case "onMouseEnter":
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === "button" ||
					e === "input" ||
					e === "select" ||
					e === "textarea"
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != "function") throw Error(k(231, t, typeof n));
	return n;
}
var co = !1;
if (tt)
	try {
		var wn = {};
		Object.defineProperty(wn, "passive", {
			get: function () {
				co = !0;
			},
		}),
			window.addEventListener("test", wn, wn),
			window.removeEventListener("test", wn, wn);
	} catch {
		co = !1;
	}
function Gc(e, t, n, r, l, o, i, u, s) {
	var a = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, a);
	} catch (m) {
		this.onError(m);
	}
}
var Tn = !1,
	Fr = null,
	Br = !1,
	fo = null,
	Zc = {
		onError: function (e) {
			(Tn = !0), (Fr = e);
		},
	};
function Jc(e, t, n, r, l, o, i, u, s) {
	(Tn = !1), (Fr = null), Gc.apply(Zc, arguments);
}
function qc(e, t, n, r, l, o, i, u, s) {
	if ((Jc.apply(this, arguments), Tn)) {
		if (Tn) {
			var a = Fr;
			(Tn = !1), (Fr = null);
		} else throw Error(k(198));
		Br || ((Br = !0), (fo = a));
	}
}
function At(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function Es(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null &&
				((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Xi(e) {
	if (At(e) !== e) throw Error(k(188));
}
function bc(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = At(e)), t === null)) throw Error(k(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var l = n.return;
		if (l === null) break;
		var o = l.alternate;
		if (o === null) {
			if (((r = l.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (l.child === o.child) {
			for (o = l.child; o; ) {
				if (o === n) return Xi(l), e;
				if (o === r) return Xi(l), t;
				o = o.sibling;
			}
			throw Error(k(188));
		}
		if (n.return !== r.return) (n = l), (r = o);
		else {
			for (var i = !1, u = l.child; u; ) {
				if (u === n) {
					(i = !0), (n = l), (r = o);
					break;
				}
				if (u === r) {
					(i = !0), (r = l), (n = o);
					break;
				}
				u = u.sibling;
			}
			if (!i) {
				for (u = o.child; u; ) {
					if (u === n) {
						(i = !0), (n = o), (r = l);
						break;
					}
					if (u === r) {
						(i = !0), (r = o), (n = l);
						break;
					}
					u = u.sibling;
				}
				if (!i) throw Error(k(189));
			}
		}
		if (n.alternate !== r) throw Error(k(190));
	}
	if (n.tag !== 3) throw Error(k(188));
	return n.stateNode.current === n ? e : t;
}
function Cs(e) {
	return (e = bc(e)), e !== null ? _s(e) : null;
}
function _s(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = _s(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var js = je.unstable_scheduleCallback,
	Gi = je.unstable_cancelCallback,
	ef = je.unstable_shouldYield,
	tf = je.unstable_requestPaint,
	ee = je.unstable_now,
	nf = je.unstable_getCurrentPriorityLevel,
	ei = je.unstable_ImmediatePriority,
	Ps = je.unstable_UserBlockingPriority,
	Ur = je.unstable_NormalPriority,
	rf = je.unstable_LowPriority,
	zs = je.unstable_IdlePriority,
	sl = null,
	Ye = null;
function lf(e) {
	if (Ye && typeof Ye.onCommitFiberRoot == "function")
		try {
			Ye.onCommitFiberRoot(
				sl,
				e,
				void 0,
				(e.current.flags & 128) === 128
			);
		} catch {}
}
var Ae = Math.clz32 ? Math.clz32 : sf,
	of = Math.log,
	uf = Math.LN2;
function sf(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((of(e) / uf) | 0)) | 0;
}
var dr = 64,
	pr = 4194304;
function Pn(e) {
	switch (e & -e) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 4:
			return 4;
		case 8:
			return 8;
		case 16:
			return 16;
		case 32:
			return 32;
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return e & 4194240;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return e & 130023424;
		case 134217728:
			return 134217728;
		case 268435456:
			return 268435456;
		case 536870912:
			return 536870912;
		case 1073741824:
			return 1073741824;
		default:
			return e;
	}
}
function Ar(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		l = e.suspendedLanes,
		o = e.pingedLanes,
		i = n & 268435455;
	if (i !== 0) {
		var u = i & ~l;
		u !== 0 ? (r = Pn(u)) : ((o &= i), o !== 0 && (r = Pn(o)));
	} else (i = n & ~l), i !== 0 ? (r = Pn(i)) : o !== 0 && (r = Pn(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & l) &&
		((l = r & -r),
		(o = t & -t),
		l >= o || (l === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
	return r;
}
function af(e, t) {
	switch (e) {
		case 1:
		case 2:
		case 4:
			return t + 250;
		case 8:
		case 16:
		case 32:
		case 64:
		case 128:
		case 256:
		case 512:
		case 1024:
		case 2048:
		case 4096:
		case 8192:
		case 16384:
		case 32768:
		case 65536:
		case 131072:
		case 262144:
		case 524288:
		case 1048576:
		case 2097152:
			return t + 5e3;
		case 4194304:
		case 8388608:
		case 16777216:
		case 33554432:
		case 67108864:
			return -1;
		case 134217728:
		case 268435456:
		case 536870912:
		case 1073741824:
			return -1;
		default:
			return -1;
	}
}
function cf(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			l = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var i = 31 - Ae(o),
			u = 1 << i,
			s = l[i];
		s === -1
			? (!(u & n) || u & r) && (l[i] = af(u, t))
			: s <= t && (e.expiredLanes |= u),
			(o &= ~u);
	}
}
function po(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Rs() {
	var e = dr;
	return (dr <<= 1), !(dr & 4194240) && (dr = 64), e;
}
function Pl(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function rr(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ae(t)),
		(e[t] = n);
}
function ff(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var l = 31 - Ae(n),
			o = 1 << l;
		(t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
	}
}
function ti(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ae(n),
			l = 1 << r;
		(l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
	}
}
var U = 0;
function Ts(e) {
	return (
		(e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
	);
}
var Ms,
	ni,
	Ls,
	Ds,
	$s,
	mo = !1,
	mr = [],
	mt = null,
	ht = null,
	vt = null,
	Vn = new Map(),
	Hn = new Map(),
	ct = [],
	df =
		"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
			" "
		);
function Zi(e, t) {
	switch (e) {
		case "focusin":
		case "focusout":
			mt = null;
			break;
		case "dragenter":
		case "dragleave":
			ht = null;
			break;
		case "mouseover":
		case "mouseout":
			vt = null;
			break;
		case "pointerover":
		case "pointerout":
			Vn.delete(t.pointerId);
			break;
		case "gotpointercapture":
		case "lostpointercapture":
			Hn.delete(t.pointerId);
	}
}
function Sn(e, t, n, r, l, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [l],
		  }),
		  t !== null && ((t = or(t)), t !== null && ni(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  l !== null && t.indexOf(l) === -1 && t.push(l),
		  e);
}
function pf(e, t, n, r, l) {
	switch (t) {
		case "focusin":
			return (mt = Sn(mt, e, t, n, r, l)), !0;
		case "dragenter":
			return (ht = Sn(ht, e, t, n, r, l)), !0;
		case "mouseover":
			return (vt = Sn(vt, e, t, n, r, l)), !0;
		case "pointerover":
			var o = l.pointerId;
			return Vn.set(o, Sn(Vn.get(o) || null, e, t, n, r, l)), !0;
		case "gotpointercapture":
			return (
				(o = l.pointerId),
				Hn.set(o, Sn(Hn.get(o) || null, e, t, n, r, l)),
				!0
			);
	}
	return !1;
}
function Os(e) {
	var t = Rt(e.target);
	if (t !== null) {
		var n = At(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = Es(n)), t !== null)) {
					(e.blockedOn = t),
						$s(e.priority, function () {
							Ls(n);
						});
					return;
				}
			} else if (
				t === 3 &&
				n.stateNode.current.memoizedState.isDehydrated
			) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function jr(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(so = r), n.target.dispatchEvent(r), (so = null);
		} else return (t = or(n)), t !== null && ni(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Ji(e, t, n) {
	jr(e) && n.delete(t);
}
function mf() {
	(mo = !1),
		mt !== null && jr(mt) && (mt = null),
		ht !== null && jr(ht) && (ht = null),
		vt !== null && jr(vt) && (vt = null),
		Vn.forEach(Ji),
		Hn.forEach(Ji);
}
function kn(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		mo ||
			((mo = !0),
			je.unstable_scheduleCallback(je.unstable_NormalPriority, mf)));
}
function Wn(e) {
	function t(l) {
		return kn(l, e);
	}
	if (0 < mr.length) {
		kn(mr[0], e);
		for (var n = 1; n < mr.length; n++) {
			var r = mr[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		mt !== null && kn(mt, e),
			ht !== null && kn(ht, e),
			vt !== null && kn(vt, e),
			Vn.forEach(t),
			Hn.forEach(t),
			n = 0;
		n < ct.length;
		n++
	)
		(r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
		Os(n), n.blockedOn === null && ct.shift();
}
var ln = ot.ReactCurrentBatchConfig,
	Vr = !0;
function hf(e, t, n, r) {
	var l = U,
		o = ln.transition;
	ln.transition = null;
	try {
		(U = 1), ri(e, t, n, r);
	} finally {
		(U = l), (ln.transition = o);
	}
}
function vf(e, t, n, r) {
	var l = U,
		o = ln.transition;
	ln.transition = null;
	try {
		(U = 4), ri(e, t, n, r);
	} finally {
		(U = l), (ln.transition = o);
	}
}
function ri(e, t, n, r) {
	if (Vr) {
		var l = ho(e, t, n, r);
		if (l === null) Fl(e, t, r, Hr, n), Zi(e, r);
		else if (pf(l, e, t, n, r)) r.stopPropagation();
		else if ((Zi(e, r), t & 4 && -1 < df.indexOf(e))) {
			for (; l !== null; ) {
				var o = or(l);
				if (
					(o !== null && Ms(o),
					(o = ho(e, t, n, r)),
					o === null && Fl(e, t, r, Hr, n),
					o === l)
				)
					break;
				l = o;
			}
			l !== null && r.stopPropagation();
		} else Fl(e, t, r, null, n);
	}
}
var Hr = null;
function ho(e, t, n, r) {
	if (((Hr = null), (e = bo(r)), (e = Rt(e)), e !== null))
		if (((t = At(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = Es(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Hr = e), null;
}
function Is(e) {
	switch (e) {
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "textInput":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeblur":
		case "afterblur":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart":
			return 1;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "toggle":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave":
			return 4;
		case "message":
			switch (nf()) {
				case ei:
					return 1;
				case Ps:
					return 4;
				case Ur:
				case rf:
					return 16;
				case zs:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var dt = null,
	li = null,
	Pr = null;
function Fs() {
	if (Pr) return Pr;
	var e,
		t = li,
		n = t.length,
		r,
		l = "value" in dt ? dt.value : dt.textContent,
		o = l.length;
	for (e = 0; e < n && t[e] === l[e]; e++);
	var i = n - e;
	for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
	return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function zr(e) {
	var t = e.keyCode;
	return (
		"charCode" in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function hr() {
	return !0;
}
function qi() {
	return !1;
}
function ze(e) {
	function t(n, r, l, o, i) {
		(this._reactName = n),
			(this._targetInst = l),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = i),
			(this.currentTarget = null);
		for (var u in e)
			e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null
					? o.defaultPrevented
					: o.returnValue === !1
			)
				? hr
				: qi),
			(this.isPropagationStopped = qi),
			this
		);
	}
	return (
		q(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != "unknown" &&
						  (n.returnValue = !1),
					(this.isDefaultPrevented = hr));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != "unknown" &&
						  (n.cancelBubble = !0),
					(this.isPropagationStopped = hr));
			},
			persist: function () {},
			isPersistent: hr,
		}),
		t
	);
}
var vn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	oi = ze(vn),
	lr = q({}, vn, { view: 0, detail: 0 }),
	yf = ze(lr),
	zl,
	Rl,
	xn,
	al = q({}, lr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ii,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return "movementX" in e
				? e.movementX
				: (e !== xn &&
						(xn && e.type === "mousemove"
							? ((zl = e.screenX - xn.screenX),
							  (Rl = e.screenY - xn.screenY))
							: (Rl = zl = 0),
						(xn = e)),
				  zl);
		},
		movementY: function (e) {
			return "movementY" in e ? e.movementY : Rl;
		},
	}),
	bi = ze(al),
	gf = q({}, al, { dataTransfer: 0 }),
	wf = ze(gf),
	Sf = q({}, lr, { relatedTarget: 0 }),
	Tl = ze(Sf),
	kf = q({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	xf = ze(kf),
	Nf = q({}, vn, {
		clipboardData: function (e) {
			return "clipboardData" in e
				? e.clipboardData
				: window.clipboardData;
		},
	}),
	Ef = ze(Nf),
	Cf = q({}, vn, { data: 0 }),
	eu = ze(Cf),
	_f = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified",
	},
	jf = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta",
	},
	Pf = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey",
	};
function zf(e) {
	var t = this.nativeEvent;
	return t.getModifierState
		? t.getModifierState(e)
		: (e = Pf[e])
		? !!t[e]
		: !1;
}
function ii() {
	return zf;
}
var Rf = q({}, lr, {
		key: function (e) {
			if (e.key) {
				var t = _f[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress"
				? ((e = zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
				: e.type === "keydown" || e.type === "keyup"
				? jf[e.keyCode] || "Unidentified"
				: "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ii,
		charCode: function (e) {
			return e.type === "keypress" ? zr(e) : 0;
		},
		keyCode: function (e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === "keypress"
				? zr(e)
				: e.type === "keydown" || e.type === "keyup"
				? e.keyCode
				: 0;
		},
	}),
	Tf = ze(Rf),
	Mf = q({}, al, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	tu = ze(Mf),
	Lf = q({}, lr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ii,
	}),
	Df = ze(Lf),
	$f = q({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Of = ze($f),
	If = q({}, al, {
		deltaX: function (e) {
			return "deltaX" in e
				? e.deltaX
				: "wheelDeltaX" in e
				? -e.wheelDeltaX
				: 0;
		},
		deltaY: function (e) {
			return "deltaY" in e
				? e.deltaY
				: "wheelDeltaY" in e
				? -e.wheelDeltaY
				: "wheelDelta" in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	Ff = ze(If),
	Bf = [9, 13, 27, 32],
	ui = tt && "CompositionEvent" in window,
	Mn = null;
tt && "documentMode" in document && (Mn = document.documentMode);
var Uf = tt && "TextEvent" in window && !Mn,
	Bs = tt && (!ui || (Mn && 8 < Mn && 11 >= Mn)),
	nu = " ",
	ru = !1;
function Us(e, t) {
	switch (e) {
		case "keyup":
			return Bf.indexOf(t.keyCode) !== -1;
		case "keydown":
			return t.keyCode !== 229;
		case "keypress":
		case "mousedown":
		case "focusout":
			return !0;
		default:
			return !1;
	}
}
function As(e) {
	return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qt = !1;
function Af(e, t) {
	switch (e) {
		case "compositionend":
			return As(t);
		case "keypress":
			return t.which !== 32 ? null : ((ru = !0), nu);
		case "textInput":
			return (e = t.data), e === nu && ru ? null : e;
		default:
			return null;
	}
}
function Vf(e, t) {
	if (Qt)
		return e === "compositionend" || (!ui && Us(e, t))
			? ((e = Fs()), (Pr = li = dt = null), (Qt = !1), e)
			: null;
	switch (e) {
		case "paste":
			return null;
		case "keypress":
			if (
				!(t.ctrlKey || t.altKey || t.metaKey) ||
				(t.ctrlKey && t.altKey)
			) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case "compositionend":
			return Bs && t.locale !== "ko" ? null : t.data;
		default:
			return null;
	}
}
var Hf = {
	color: !0,
	date: !0,
	datetime: !0,
	"datetime-local": !0,
	email: !0,
	month: !0,
	number: !0,
	password: !0,
	range: !0,
	search: !0,
	tel: !0,
	text: !0,
	time: !0,
	url: !0,
	week: !0,
};
function lu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === "input" ? !!Hf[e.type] : t === "textarea";
}
function Vs(e, t, n, r) {
	ws(r),
		(t = Wr(t, "onChange")),
		0 < t.length &&
			((n = new oi("onChange", "change", null, n, r)),
			e.push({ event: n, listeners: t }));
}
var Ln = null,
	Qn = null;
function Wf(e) {
	bs(e, 0);
}
function cl(e) {
	var t = Xt(e);
	if (ds(t)) return e;
}
function Qf(e, t) {
	if (e === "change") return t;
}
var Hs = !1;
if (tt) {
	var Ml;
	if (tt) {
		var Ll = "oninput" in document;
		if (!Ll) {
			var ou = document.createElement("div");
			ou.setAttribute("oninput", "return;"),
				(Ll = typeof ou.oninput == "function");
		}
		Ml = Ll;
	} else Ml = !1;
	Hs = Ml && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
	Ln && (Ln.detachEvent("onpropertychange", Ws), (Qn = Ln = null));
}
function Ws(e) {
	if (e.propertyName === "value" && cl(Qn)) {
		var t = [];
		Vs(t, Qn, e, bo(e)), Ns(Wf, t);
	}
}
function Kf(e, t, n) {
	e === "focusin"
		? (iu(), (Ln = t), (Qn = n), Ln.attachEvent("onpropertychange", Ws))
		: e === "focusout" && iu();
}
function Yf(e) {
	if (e === "selectionchange" || e === "keyup" || e === "keydown")
		return cl(Qn);
}
function Xf(e, t) {
	if (e === "click") return cl(t);
}
function Gf(e, t) {
	if (e === "input" || e === "change") return cl(t);
}
function Zf(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : Zf;
function Kn(e, t) {
	if (He(e, t)) return !0;
	if (
		typeof e != "object" ||
		e === null ||
		typeof t != "object" ||
		t === null
	)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var l = n[r];
		if (!Zl.call(t, l) || !He(e[l], t[l])) return !1;
	}
	return !0;
}
function uu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function su(e, t) {
	var n = uu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = uu(n);
	}
}
function Qs(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Qs(e, t.parentNode)
			: "contains" in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Ks() {
	for (var e = window, t = Ir(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == "string";
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ir(e.document);
	}
	return t;
}
function si(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === "input" &&
			(e.type === "text" ||
				e.type === "search" ||
				e.type === "tel" ||
				e.type === "url" ||
				e.type === "password")) ||
			t === "textarea" ||
			e.contentEditable === "true")
	);
}
function Jf(e) {
	var t = Ks(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Qs(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && si(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				"selectionStart" in n)
			)
				(n.selectionStart = t),
					(n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e =
					((t = n.ownerDocument || document) && t.defaultView) ||
					window),
				e.getSelection)
			) {
				e = e.getSelection();
				var l = n.textContent.length,
					o = Math.min(r.start, l);
				(r = r.end === void 0 ? o : Math.min(r.end, l)),
					!e.extend && o > r && ((l = r), (r = o), (o = l)),
					(l = su(n, o));
				var i = su(n, r);
				l &&
					i &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== l.node ||
						e.anchorOffset !== l.offset ||
						e.focusNode !== i.node ||
						e.focusOffset !== i.offset) &&
					((t = t.createRange()),
					t.setStart(l.node, l.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(i.node, i.offset))
						: (t.setEnd(i.node, i.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (
			typeof n.focus == "function" && n.focus(), n = 0;
			n < t.length;
			n++
		)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var qf = tt && "documentMode" in document && 11 >= document.documentMode,
	Kt = null,
	vo = null,
	Dn = null,
	yo = !1;
function au(e, t, n) {
	var r =
		n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	yo ||
		Kt == null ||
		Kt !== Ir(r) ||
		((r = Kt),
		"selectionStart" in r && si(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Dn && Kn(Dn, r)) ||
			((Dn = r),
			(r = Wr(vo, "onSelect")),
			0 < r.length &&
				((t = new oi("onSelect", "select", null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = Kt))));
}
function vr(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n["Webkit" + e] = "webkit" + t),
		(n["Moz" + e] = "moz" + t),
		n
	);
}
var Yt = {
		animationend: vr("Animation", "AnimationEnd"),
		animationiteration: vr("Animation", "AnimationIteration"),
		animationstart: vr("Animation", "AnimationStart"),
		transitionend: vr("Transition", "TransitionEnd"),
	},
	Dl = {},
	Ys = {};
tt &&
	((Ys = document.createElement("div").style),
	"AnimationEvent" in window ||
		(delete Yt.animationend.animation,
		delete Yt.animationiteration.animation,
		delete Yt.animationstart.animation),
	"TransitionEvent" in window || delete Yt.transitionend.transition);
function fl(e) {
	if (Dl[e]) return Dl[e];
	if (!Yt[e]) return e;
	var t = Yt[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Ys) return (Dl[e] = t[n]);
	return e;
}
var Xs = fl("animationend"),
	Gs = fl("animationiteration"),
	Zs = fl("animationstart"),
	Js = fl("transitionend"),
	qs = new Map(),
	cu =
		"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
			" "
		);
function Et(e, t) {
	qs.set(e, t), Ut(t, [e]);
}
for (var $l = 0; $l < cu.length; $l++) {
	var Ol = cu[$l],
		bf = Ol.toLowerCase(),
		ed = Ol[0].toUpperCase() + Ol.slice(1);
	Et(bf, "on" + ed);
}
Et(Xs, "onAnimationEnd");
Et(Gs, "onAnimationIteration");
Et(Zs, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Js, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
	"onChange",
	"change click focusin focusout input keydown keyup selectionchange".split(
		" "
	)
);
Ut(
	"onSelect",
	"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
		" "
	)
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
	"onCompositionEnd",
	"compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
	"onCompositionStart",
	"compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
	"onCompositionUpdate",
	"compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zn =
		"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
			" "
		),
	td = new Set(
		"cancel close invalid load scroll toggle".split(" ").concat(zn)
	);
function fu(e, t, n) {
	var r = e.type || "unknown-event";
	(e.currentTarget = n), qc(r, t, void 0, e), (e.currentTarget = null);
}
function bs(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			l = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var i = r.length - 1; 0 <= i; i--) {
					var u = r[i],
						s = u.instance,
						a = u.currentTarget;
					if (((u = u.listener), s !== o && l.isPropagationStopped()))
						break e;
					fu(l, u, a), (o = s);
				}
			else
				for (i = 0; i < r.length; i++) {
					if (
						((u = r[i]),
						(s = u.instance),
						(a = u.currentTarget),
						(u = u.listener),
						s !== o && l.isPropagationStopped())
					)
						break e;
					fu(l, u, a), (o = s);
				}
		}
	}
	if (Br) throw ((e = fo), (Br = !1), (fo = null), e);
}
function Q(e, t) {
	var n = t[xo];
	n === void 0 && (n = t[xo] = new Set());
	var r = e + "__bubble";
	n.has(r) || (ea(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
	var r = 0;
	t && (r |= 4), ea(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Yn(e) {
	if (!e[yr]) {
		(e[yr] = !0),
			us.forEach(function (n) {
				n !== "selectionchange" &&
					(td.has(n) || Il(n, !1, e), Il(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[yr] || ((t[yr] = !0), Il("selectionchange", !1, t));
	}
}
function ea(e, t, n, r) {
	switch (Is(t)) {
		case 1:
			var l = hf;
			break;
		case 4:
			l = vf;
			break;
		default:
			l = ri;
	}
	(n = l.bind(null, t, n, e)),
		(l = void 0),
		!co ||
			(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
			(l = !0),
		r
			? l !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: l })
				: e.addEventListener(t, n, !0)
			: l !== void 0
			? e.addEventListener(t, n, { passive: l })
			: e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var i = r.tag;
			if (i === 3 || i === 4) {
				var u = r.stateNode.containerInfo;
				if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
				if (i === 4)
					for (i = r.return; i !== null; ) {
						var s = i.tag;
						if (
							(s === 3 || s === 4) &&
							((s = i.stateNode.containerInfo),
							s === l || (s.nodeType === 8 && s.parentNode === l))
						)
							return;
						i = i.return;
					}
				for (; u !== null; ) {
					if (((i = Rt(u)), i === null)) return;
					if (((s = i.tag), s === 5 || s === 6)) {
						r = o = i;
						continue e;
					}
					u = u.parentNode;
				}
			}
			r = r.return;
		}
	Ns(function () {
		var a = o,
			m = bo(n),
			h = [];
		e: {
			var p = qs.get(e);
			if (p !== void 0) {
				var y = oi,
					w = e;
				switch (e) {
					case "keypress":
						if (zr(n) === 0) break e;
					case "keydown":
					case "keyup":
						y = Tf;
						break;
					case "focusin":
						(w = "focus"), (y = Tl);
						break;
					case "focusout":
						(w = "blur"), (y = Tl);
						break;
					case "beforeblur":
					case "afterblur":
						y = Tl;
						break;
					case "click":
						if (n.button === 2) break e;
					case "auxclick":
					case "dblclick":
					case "mousedown":
					case "mousemove":
					case "mouseup":
					case "mouseout":
					case "mouseover":
					case "contextmenu":
						y = bi;
						break;
					case "drag":
					case "dragend":
					case "dragenter":
					case "dragexit":
					case "dragleave":
					case "dragover":
					case "dragstart":
					case "drop":
						y = wf;
						break;
					case "touchcancel":
					case "touchend":
					case "touchmove":
					case "touchstart":
						y = Df;
						break;
					case Xs:
					case Gs:
					case Zs:
						y = xf;
						break;
					case Js:
						y = Of;
						break;
					case "scroll":
						y = yf;
						break;
					case "wheel":
						y = Ff;
						break;
					case "copy":
					case "cut":
					case "paste":
						y = Ef;
						break;
					case "gotpointercapture":
					case "lostpointercapture":
					case "pointercancel":
					case "pointerdown":
					case "pointermove":
					case "pointerout":
					case "pointerover":
					case "pointerup":
						y = tu;
				}
				var S = (t & 4) !== 0,
					T = !S && e === "scroll",
					f = S ? (p !== null ? p + "Capture" : null) : p;
				S = [];
				for (var c = a, d; c !== null; ) {
					d = c;
					var g = d.stateNode;
					if (
						(d.tag === 5 &&
							g !== null &&
							((d = g),
							f !== null &&
								((g = An(c, f)),
								g != null && S.push(Xn(c, g, d)))),
						T)
					)
						break;
					c = c.return;
				}
				0 < S.length &&
					((p = new y(p, w, null, n, m)),
					h.push({ event: p, listeners: S }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((p = e === "mouseover" || e === "pointerover"),
					(y = e === "mouseout" || e === "pointerout"),
					p &&
						n !== so &&
						(w = n.relatedTarget || n.fromElement) &&
						(Rt(w) || w[nt]))
				)
					break e;
				if (
					(y || p) &&
					((p =
						m.window === m
							? m
							: (p = m.ownerDocument)
							? p.defaultView || p.parentWindow
							: window),
					y
						? ((w = n.relatedTarget || n.toElement),
						  (y = a),
						  (w = w ? Rt(w) : null),
						  w !== null &&
								((T = At(w)),
								w !== T || (w.tag !== 5 && w.tag !== 6)) &&
								(w = null))
						: ((y = null), (w = a)),
					y !== w)
				) {
					if (
						((S = bi),
						(g = "onMouseLeave"),
						(f = "onMouseEnter"),
						(c = "mouse"),
						(e === "pointerout" || e === "pointerover") &&
							((S = tu),
							(g = "onPointerLeave"),
							(f = "onPointerEnter"),
							(c = "pointer")),
						(T = y == null ? p : Xt(y)),
						(d = w == null ? p : Xt(w)),
						(p = new S(g, c + "leave", y, n, m)),
						(p.target = T),
						(p.relatedTarget = d),
						(g = null),
						Rt(m) === a &&
							((S = new S(f, c + "enter", w, n, m)),
							(S.target = d),
							(S.relatedTarget = T),
							(g = S)),
						(T = g),
						y && w)
					)
						t: {
							for (S = y, f = w, c = 0, d = S; d; d = Vt(d)) c++;
							for (d = 0, g = f; g; g = Vt(g)) d++;
							for (; 0 < c - d; ) (S = Vt(S)), c--;
							for (; 0 < d - c; ) (f = Vt(f)), d--;
							for (; c--; ) {
								if (
									S === f ||
									(f !== null && S === f.alternate)
								)
									break t;
								(S = Vt(S)), (f = Vt(f));
							}
							S = null;
						}
					else S = null;
					y !== null && du(h, p, y, S, !1),
						w !== null && T !== null && du(h, T, w, S, !0);
				}
			}
			e: {
				if (
					((p = a ? Xt(a) : window),
					(y = p.nodeName && p.nodeName.toLowerCase()),
					y === "select" || (y === "input" && p.type === "file"))
				)
					var x = Qf;
				else if (lu(p))
					if (Hs) x = Gf;
					else {
						x = Yf;
						var N = Kf;
					}
				else
					(y = p.nodeName) &&
						y.toLowerCase() === "input" &&
						(p.type === "checkbox" || p.type === "radio") &&
						(x = Xf);
				if (x && (x = x(e, a))) {
					Vs(h, x, n, m);
					break e;
				}
				N && N(e, p, a),
					e === "focusout" &&
						(N = p._wrapperState) &&
						N.controlled &&
						p.type === "number" &&
						ro(p, "number", p.value);
			}
			switch (((N = a ? Xt(a) : window), e)) {
				case "focusin":
					(lu(N) || N.contentEditable === "true") &&
						((Kt = N), (vo = a), (Dn = null));
					break;
				case "focusout":
					Dn = vo = Kt = null;
					break;
				case "mousedown":
					yo = !0;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					(yo = !1), au(h, n, m);
					break;
				case "selectionchange":
					if (qf) break;
				case "keydown":
				case "keyup":
					au(h, n, m);
			}
			var C;
			if (ui)
				e: {
					switch (e) {
						case "compositionstart":
							var j = "onCompositionStart";
							break e;
						case "compositionend":
							j = "onCompositionEnd";
							break e;
						case "compositionupdate":
							j = "onCompositionUpdate";
							break e;
					}
					j = void 0;
				}
			else
				Qt
					? Us(e, n) && (j = "onCompositionEnd")
					: e === "keydown" &&
					  n.keyCode === 229 &&
					  (j = "onCompositionStart");
			j &&
				(Bs &&
					n.locale !== "ko" &&
					(Qt || j !== "onCompositionStart"
						? j === "onCompositionEnd" && Qt && (C = Fs())
						: ((dt = m),
						  (li = "value" in dt ? dt.value : dt.textContent),
						  (Qt = !0))),
				(N = Wr(a, j)),
				0 < N.length &&
					((j = new eu(j, e, null, n, m)),
					h.push({ event: j, listeners: N }),
					C
						? (j.data = C)
						: ((C = As(n)), C !== null && (j.data = C)))),
				(C = Uf ? Af(e, n) : Vf(e, n)) &&
					((a = Wr(a, "onBeforeInput")),
					0 < a.length &&
						((m = new eu(
							"onBeforeInput",
							"beforeinput",
							null,
							n,
							m
						)),
						h.push({ event: m, listeners: a }),
						(m.data = C)));
		}
		bs(h, t);
	});
}
function Xn(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
	for (var n = t + "Capture", r = []; e !== null; ) {
		var l = e,
			o = l.stateNode;
		l.tag === 5 &&
			o !== null &&
			((l = o),
			(o = An(e, n)),
			o != null && r.unshift(Xn(e, o, l)),
			(o = An(e, t)),
			o != null && r.push(Xn(e, o, l))),
			(e = e.return);
	}
	return r;
}
function Vt(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function du(e, t, n, r, l) {
	for (var o = t._reactName, i = []; n !== null && n !== r; ) {
		var u = n,
			s = u.alternate,
			a = u.stateNode;
		if (s !== null && s === r) break;
		u.tag === 5 &&
			a !== null &&
			((u = a),
			l
				? ((s = An(n, o)), s != null && i.unshift(Xn(n, s, u)))
				: l || ((s = An(n, o)), s != null && i.push(Xn(n, s, u)))),
			(n = n.return);
	}
	i.length !== 0 && e.push({ event: t, listeners: i });
}
var nd = /\r\n?/g,
	rd = /\u0000|\uFFFD/g;
function pu(e) {
	return (typeof e == "string" ? e : "" + e)
		.replace(
			nd,
			`
`
		)
		.replace(rd, "");
}
function gr(e, t, n) {
	if (((t = pu(t)), pu(e) !== t && n)) throw Error(k(425));
}
function Qr() {}
var go = null,
	wo = null;
function So(e, t) {
	return (
		e === "textarea" ||
		e === "noscript" ||
		typeof t.children == "string" ||
		typeof t.children == "number" ||
		(typeof t.dangerouslySetInnerHTML == "object" &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var ko = typeof setTimeout == "function" ? setTimeout : void 0,
	ld = typeof clearTimeout == "function" ? clearTimeout : void 0,
	mu = typeof Promise == "function" ? Promise : void 0,
	od =
		typeof queueMicrotask == "function"
			? queueMicrotask
			: typeof mu < "u"
			? function (e) {
					return mu.resolve(null).then(e).catch(id);
			  }
			: ko;
function id(e) {
	setTimeout(function () {
		throw e;
	});
}
function Bl(e, t) {
	var n = t,
		r = 0;
	do {
		var l = n.nextSibling;
		if ((e.removeChild(n), l && l.nodeType === 8))
			if (((n = l.data), n === "/$")) {
				if (r === 0) {
					e.removeChild(l), Wn(t);
					return;
				}
				r--;
			} else (n !== "$" && n !== "$?" && n !== "$!") || r++;
		n = l;
	} while (n);
	Wn(t);
}
function yt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
			if (t === "/$") return null;
		}
	}
	return e;
}
function hu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === "$" || n === "$!" || n === "$?") {
				if (t === 0) return e;
				t--;
			} else n === "/$" && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var yn = Math.random().toString(36).slice(2),
	Ke = "__reactFiber$" + yn,
	Gn = "__reactProps$" + yn,
	nt = "__reactContainer$" + yn,
	xo = "__reactEvents$" + yn,
	ud = "__reactListeners$" + yn,
	sd = "__reactHandles$" + yn;
function Rt(e) {
	var t = e[Ke];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[nt] || n[Ke])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = hu(e); e !== null; ) {
					if ((n = e[Ke])) return n;
					e = hu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function or(e) {
	return (
		(e = e[Ke] || e[nt]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
			? null
			: e
	);
}
function Xt(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(k(33));
}
function dl(e) {
	return e[Gn] || null;
}
var No = [],
	Gt = -1;
function Ct(e) {
	return { current: e };
}
function K(e) {
	0 > Gt || ((e.current = No[Gt]), (No[Gt] = null), Gt--);
}
function W(e, t) {
	Gt++, (No[Gt] = e.current), (e.current = t);
}
var Nt = {},
	pe = Ct(Nt),
	ke = Ct(!1),
	$t = Nt;
function an(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Nt;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var l = {},
		o;
	for (o in n) l[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = l)),
		l
	);
}
function xe(e) {
	return (e = e.childContextTypes), e != null;
}
function Kr() {
	K(ke), K(pe);
}
function vu(e, t, n) {
	if (pe.current !== Nt) throw Error(k(168));
	W(pe, t), W(ke, n);
}
function ta(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
		return n;
	r = r.getChildContext();
	for (var l in r) if (!(l in t)) throw Error(k(108, Qc(e) || "Unknown", l));
	return q({}, n, r);
}
function Yr(e) {
	return (
		(e =
			((e = e.stateNode) &&
				e.__reactInternalMemoizedMergedChildContext) ||
			Nt),
		($t = pe.current),
		W(pe, e),
		W(ke, ke.current),
		!0
	);
}
function yu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(k(169));
	n
		? ((e = ta(e, t, $t)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  K(ke),
		  K(pe),
		  W(pe, e))
		: K(ke),
		W(ke, n);
}
var Je = null,
	pl = !1,
	Ul = !1;
function na(e) {
	Je === null ? (Je = [e]) : Je.push(e);
}
function ad(e) {
	(pl = !0), na(e);
}
function _t() {
	if (!Ul && Je !== null) {
		Ul = !0;
		var e = 0,
			t = U;
		try {
			var n = Je;
			for (U = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(Je = null), (pl = !1);
		} catch (l) {
			throw (Je !== null && (Je = Je.slice(e + 1)), js(ei, _t), l);
		} finally {
			(U = t), (Ul = !1);
		}
	}
	return null;
}
var Zt = [],
	Jt = 0,
	Xr = null,
	Gr = 0,
	Te = [],
	Me = 0,
	Ot = null,
	qe = 1,
	be = "";
function Pt(e, t) {
	(Zt[Jt++] = Gr), (Zt[Jt++] = Xr), (Xr = e), (Gr = t);
}
function ra(e, t, n) {
	(Te[Me++] = qe), (Te[Me++] = be), (Te[Me++] = Ot), (Ot = e);
	var r = qe;
	e = be;
	var l = 32 - Ae(r) - 1;
	(r &= ~(1 << l)), (n += 1);
	var o = 32 - Ae(t) + l;
	if (30 < o) {
		var i = l - (l % 5);
		(o = (r & ((1 << i) - 1)).toString(32)),
			(r >>= i),
			(l -= i),
			(qe = (1 << (32 - Ae(t) + l)) | (n << l) | r),
			(be = o + e);
	} else (qe = (1 << o) | (n << l) | r), (be = e);
}
function ai(e) {
	e.return !== null && (Pt(e, 1), ra(e, 1, 0));
}
function ci(e) {
	for (; e === Xr; )
		(Xr = Zt[--Jt]), (Zt[Jt] = null), (Gr = Zt[--Jt]), (Zt[Jt] = null);
	for (; e === Ot; )
		(Ot = Te[--Me]),
			(Te[Me] = null),
			(be = Te[--Me]),
			(Te[Me] = null),
			(qe = Te[--Me]),
			(Te[Me] = null);
}
var _e = null,
	Ce = null,
	G = !1,
	Ue = null;
function la(e, t) {
	var n = Le(5, null, null, 0);
	(n.elementType = "DELETED"),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gu(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 ||
					n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (_e = e), (Ce = yt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (_e = e), (Ce = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = Ot !== null ? { id: qe, overflow: be } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Le(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (_e = e),
					  (Ce = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function Eo(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
	if (G) {
		var t = Ce;
		if (t) {
			var n = t;
			if (!gu(e, t)) {
				if (Eo(e)) throw Error(k(418));
				t = yt(n.nextSibling);
				var r = _e;
				t && gu(e, t)
					? la(r, n)
					: ((e.flags = (e.flags & -4097) | 2), (G = !1), (_e = e));
			}
		} else {
			if (Eo(e)) throw Error(k(418));
			(e.flags = (e.flags & -4097) | 2), (G = !1), (_e = e);
		}
	}
}
function wu(e) {
	for (
		e = e.return;
		e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

	)
		e = e.return;
	_e = e;
}
function wr(e) {
	if (e !== _e) return !1;
	if (!G) return wu(e), (G = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps))),
		t && (t = Ce))
	) {
		if (Eo(e)) throw (oa(), Error(k(418)));
		for (; t; ) la(e, t), (t = yt(t.nextSibling));
	}
	if ((wu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(k(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === "/$") {
						if (t === 0) {
							Ce = yt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
				}
				e = e.nextSibling;
			}
			Ce = null;
		}
	} else Ce = _e ? yt(e.stateNode.nextSibling) : null;
	return !0;
}
function oa() {
	for (var e = Ce; e; ) e = yt(e.nextSibling);
}
function cn() {
	(Ce = _e = null), (G = !1);
}
function fi(e) {
	Ue === null ? (Ue = [e]) : Ue.push(e);
}
var cd = ot.ReactCurrentBatchConfig;
function Nn(e, t, n) {
	if (
		((e = n.ref),
		e !== null && typeof e != "function" && typeof e != "object")
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(k(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(k(147, e));
			var l = r,
				o = "" + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == "function" &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (i) {
						var u = l.refs;
						i === null ? delete u[o] : (u[o] = i);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != "string") throw Error(k(284));
		if (!n._owner) throw Error(k(290, e));
	}
	return e;
}
function Sr(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			k(
				31,
				e === "[object Object]"
					? "object with keys {" + Object.keys(t).join(", ") + "}"
					: e
			)
		))
	);
}
function Su(e) {
	var t = e._init;
	return t(e._payload);
}
function ia(e) {
	function t(f, c) {
		if (e) {
			var d = f.deletions;
			d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
		}
	}
	function n(f, c) {
		if (!e) return null;
		for (; c !== null; ) t(f, c), (c = c.sibling);
		return null;
	}
	function r(f, c) {
		for (f = new Map(); c !== null; )
			c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
				(c = c.sibling);
		return f;
	}
	function l(f, c) {
		return (f = kt(f, c)), (f.index = 0), (f.sibling = null), f;
	}
	function o(f, c, d) {
		return (
			(f.index = d),
			e
				? ((d = f.alternate),
				  d !== null
						? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
						: ((f.flags |= 2), c))
				: ((f.flags |= 1048576), c)
		);
	}
	function i(f) {
		return e && f.alternate === null && (f.flags |= 2), f;
	}
	function u(f, c, d, g) {
		return c === null || c.tag !== 6
			? ((c = Yl(d, f.mode, g)), (c.return = f), c)
			: ((c = l(c, d)), (c.return = f), c);
	}
	function s(f, c, d, g) {
		var x = d.type;
		return x === Wt
			? m(f, c, d.props.children, g, d.key)
			: c !== null &&
			  (c.elementType === x ||
					(typeof x == "object" &&
						x !== null &&
						x.$$typeof === st &&
						Su(x) === c.type))
			? ((g = l(c, d.props)), (g.ref = Nn(f, c, d)), (g.return = f), g)
			: ((g = Or(d.type, d.key, d.props, null, f.mode, g)),
			  (g.ref = Nn(f, c, d)),
			  (g.return = f),
			  g);
	}
	function a(f, c, d, g) {
		return c === null ||
			c.tag !== 4 ||
			c.stateNode.containerInfo !== d.containerInfo ||
			c.stateNode.implementation !== d.implementation
			? ((c = Xl(d, f.mode, g)), (c.return = f), c)
			: ((c = l(c, d.children || [])), (c.return = f), c);
	}
	function m(f, c, d, g, x) {
		return c === null || c.tag !== 7
			? ((c = Dt(d, f.mode, g, x)), (c.return = f), c)
			: ((c = l(c, d)), (c.return = f), c);
	}
	function h(f, c, d) {
		if ((typeof c == "string" && c !== "") || typeof c == "number")
			return (c = Yl("" + c, f.mode, d)), (c.return = f), c;
		if (typeof c == "object" && c !== null) {
			switch (c.$$typeof) {
				case ar:
					return (
						(d = Or(c.type, c.key, c.props, null, f.mode, d)),
						(d.ref = Nn(f, null, c)),
						(d.return = f),
						d
					);
				case Ht:
					return (c = Xl(c, f.mode, d)), (c.return = f), c;
				case st:
					var g = c._init;
					return h(f, g(c._payload), d);
			}
			if (jn(c) || gn(c))
				return (c = Dt(c, f.mode, d, null)), (c.return = f), c;
			Sr(f, c);
		}
		return null;
	}
	function p(f, c, d, g) {
		var x = c !== null ? c.key : null;
		if ((typeof d == "string" && d !== "") || typeof d == "number")
			return x !== null ? null : u(f, c, "" + d, g);
		if (typeof d == "object" && d !== null) {
			switch (d.$$typeof) {
				case ar:
					return d.key === x ? s(f, c, d, g) : null;
				case Ht:
					return d.key === x ? a(f, c, d, g) : null;
				case st:
					return (x = d._init), p(f, c, x(d._payload), g);
			}
			if (jn(d) || gn(d)) return x !== null ? null : m(f, c, d, g, null);
			Sr(f, d);
		}
		return null;
	}
	function y(f, c, d, g, x) {
		if ((typeof g == "string" && g !== "") || typeof g == "number")
			return (f = f.get(d) || null), u(c, f, "" + g, x);
		if (typeof g == "object" && g !== null) {
			switch (g.$$typeof) {
				case ar:
					return (
						(f = f.get(g.key === null ? d : g.key) || null),
						s(c, f, g, x)
					);
				case Ht:
					return (
						(f = f.get(g.key === null ? d : g.key) || null),
						a(c, f, g, x)
					);
				case st:
					var N = g._init;
					return y(f, c, d, N(g._payload), x);
			}
			if (jn(g) || gn(g))
				return (f = f.get(d) || null), m(c, f, g, x, null);
			Sr(c, g);
		}
		return null;
	}
	function w(f, c, d, g) {
		for (
			var x = null, N = null, C = c, j = (c = 0), A = null;
			C !== null && j < d.length;
			j++
		) {
			C.index > j ? ((A = C), (C = null)) : (A = C.sibling);
			var P = p(f, C, d[j], g);
			if (P === null) {
				C === null && (C = A);
				break;
			}
			e && C && P.alternate === null && t(f, C),
				(c = o(P, c, j)),
				N === null ? (x = P) : (N.sibling = P),
				(N = P),
				(C = A);
		}
		if (j === d.length) return n(f, C), G && Pt(f, j), x;
		if (C === null) {
			for (; j < d.length; j++)
				(C = h(f, d[j], g)),
					C !== null &&
						((c = o(C, c, j)),
						N === null ? (x = C) : (N.sibling = C),
						(N = C));
			return G && Pt(f, j), x;
		}
		for (C = r(f, C); j < d.length; j++)
			(A = y(C, f, j, d[j], g)),
				A !== null &&
					(e &&
						A.alternate !== null &&
						C.delete(A.key === null ? j : A.key),
					(c = o(A, c, j)),
					N === null ? (x = A) : (N.sibling = A),
					(N = A));
		return (
			e &&
				C.forEach(function (F) {
					return t(f, F);
				}),
			G && Pt(f, j),
			x
		);
	}
	function S(f, c, d, g) {
		var x = gn(d);
		if (typeof x != "function") throw Error(k(150));
		if (((d = x.call(d)), d == null)) throw Error(k(151));
		for (
			var N = (x = null), C = c, j = (c = 0), A = null, P = d.next();
			C !== null && !P.done;
			j++, P = d.next()
		) {
			C.index > j ? ((A = C), (C = null)) : (A = C.sibling);
			var F = p(f, C, P.value, g);
			if (F === null) {
				C === null && (C = A);
				break;
			}
			e && C && F.alternate === null && t(f, C),
				(c = o(F, c, j)),
				N === null ? (x = F) : (N.sibling = F),
				(N = F),
				(C = A);
		}
		if (P.done) return n(f, C), G && Pt(f, j), x;
		if (C === null) {
			for (; !P.done; j++, P = d.next())
				(P = h(f, P.value, g)),
					P !== null &&
						((c = o(P, c, j)),
						N === null ? (x = P) : (N.sibling = P),
						(N = P));
			return G && Pt(f, j), x;
		}
		for (C = r(f, C); !P.done; j++, P = d.next())
			(P = y(C, f, j, P.value, g)),
				P !== null &&
					(e &&
						P.alternate !== null &&
						C.delete(P.key === null ? j : P.key),
					(c = o(P, c, j)),
					N === null ? (x = P) : (N.sibling = P),
					(N = P));
		return (
			e &&
				C.forEach(function (V) {
					return t(f, V);
				}),
			G && Pt(f, j),
			x
		);
	}
	function T(f, c, d, g) {
		if (
			(typeof d == "object" &&
				d !== null &&
				d.type === Wt &&
				d.key === null &&
				(d = d.props.children),
			typeof d == "object" && d !== null)
		) {
			switch (d.$$typeof) {
				case ar:
					e: {
						for (var x = d.key, N = c; N !== null; ) {
							if (N.key === x) {
								if (((x = d.type), x === Wt)) {
									if (N.tag === 7) {
										n(f, N.sibling),
											(c = l(N, d.props.children)),
											(c.return = f),
											(f = c);
										break e;
									}
								} else if (
									N.elementType === x ||
									(typeof x == "object" &&
										x !== null &&
										x.$$typeof === st &&
										Su(x) === N.type)
								) {
									n(f, N.sibling),
										(c = l(N, d.props)),
										(c.ref = Nn(f, N, d)),
										(c.return = f),
										(f = c);
									break e;
								}
								n(f, N);
								break;
							} else t(f, N);
							N = N.sibling;
						}
						d.type === Wt
							? ((c = Dt(d.props.children, f.mode, g, d.key)),
							  (c.return = f),
							  (f = c))
							: ((g = Or(
									d.type,
									d.key,
									d.props,
									null,
									f.mode,
									g
							  )),
							  (g.ref = Nn(f, c, d)),
							  (g.return = f),
							  (f = g));
					}
					return i(f);
				case Ht:
					e: {
						for (N = d.key; c !== null; ) {
							if (c.key === N)
								if (
									c.tag === 4 &&
									c.stateNode.containerInfo ===
										d.containerInfo &&
									c.stateNode.implementation ===
										d.implementation
								) {
									n(f, c.sibling),
										(c = l(c, d.children || [])),
										(c.return = f),
										(f = c);
									break e;
								} else {
									n(f, c);
									break;
								}
							else t(f, c);
							c = c.sibling;
						}
						(c = Xl(d, f.mode, g)), (c.return = f), (f = c);
					}
					return i(f);
				case st:
					return (N = d._init), T(f, c, N(d._payload), g);
			}
			if (jn(d)) return w(f, c, d, g);
			if (gn(d)) return S(f, c, d, g);
			Sr(f, d);
		}
		return (typeof d == "string" && d !== "") || typeof d == "number"
			? ((d = "" + d),
			  c !== null && c.tag === 6
					? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
					: (n(f, c),
					  (c = Yl(d, f.mode, g)),
					  (c.return = f),
					  (f = c)),
			  i(f))
			: n(f, c);
	}
	return T;
}
var fn = ia(!0),
	ua = ia(!1),
	Zr = Ct(null),
	Jr = null,
	qt = null,
	di = null;
function pi() {
	di = qt = Jr = null;
}
function mi(e) {
	var t = Zr.current;
	K(Zr), (e._currentValue = t);
}
function _o(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function on(e, t) {
	(Jr = e),
		(di = qt = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (Se = !0), (e.firstContext = null));
}
function $e(e) {
	var t = e._currentValue;
	if (di !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), qt === null)) {
			if (Jr === null) throw Error(k(308));
			(qt = e), (Jr.dependencies = { lanes: 0, firstContext: e });
		} else qt = qt.next = e;
	return t;
}
var Tt = null;
function hi(e) {
	Tt === null ? (Tt = [e]) : Tt.push(e);
}
function sa(e, t, n, r) {
	var l = t.interleaved;
	return (
		l === null ? ((n.next = n), hi(t)) : ((n.next = l.next), (l.next = n)),
		(t.interleaved = n),
		rt(e, r)
	);
}
function rt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function vi(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function aa(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function et(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function gt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), I & 2)) {
		var l = r.pending;
		return (
			l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
			(r.pending = t),
			rt(e, n)
		);
	}
	return (
		(l = r.interleaved),
		l === null ? ((t.next = t), hi(r)) : ((t.next = l.next), (l.next = t)),
		(r.interleaved = t),
		rt(e, n)
	);
}
function Rr(e, t, n) {
	if (
		((t = t.updateQueue),
		t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ti(e, n);
	}
}
function ku(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var l = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var i = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
			} while (n !== null);
			o === null ? (l = o = t) : (o = o.next = t);
		} else l = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: l,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function qr(e, t, n, r) {
	var l = e.updateQueue;
	at = !1;
	var o = l.firstBaseUpdate,
		i = l.lastBaseUpdate,
		u = l.shared.pending;
	if (u !== null) {
		l.shared.pending = null;
		var s = u,
			a = s.next;
		(s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
		var m = e.alternate;
		m !== null &&
			((m = m.updateQueue),
			(u = m.lastBaseUpdate),
			u !== i &&
				(u === null ? (m.firstBaseUpdate = a) : (u.next = a),
				(m.lastBaseUpdate = s)));
	}
	if (o !== null) {
		var h = l.baseState;
		(i = 0), (m = a = s = null), (u = o);
		do {
			var p = u.lane,
				y = u.eventTime;
			if ((r & p) === p) {
				m !== null &&
					(m = m.next =
						{
							eventTime: y,
							lane: 0,
							tag: u.tag,
							payload: u.payload,
							callback: u.callback,
							next: null,
						});
				e: {
					var w = e,
						S = u;
					switch (((p = t), (y = n), S.tag)) {
						case 1:
							if (((w = S.payload), typeof w == "function")) {
								h = w.call(y, h, p);
								break e;
							}
							h = w;
							break e;
						case 3:
							w.flags = (w.flags & -65537) | 128;
						case 0:
							if (
								((w = S.payload),
								(p =
									typeof w == "function"
										? w.call(y, h, p)
										: w),
								p == null)
							)
								break e;
							h = q({}, h, p);
							break e;
						case 2:
							at = !0;
					}
				}
				u.callback !== null &&
					u.lane !== 0 &&
					((e.flags |= 64),
					(p = l.effects),
					p === null ? (l.effects = [u]) : p.push(u));
			} else
				(y = {
					eventTime: y,
					lane: p,
					tag: u.tag,
					payload: u.payload,
					callback: u.callback,
					next: null,
				}),
					m === null ? ((a = m = y), (s = h)) : (m = m.next = y),
					(i |= p);
			if (((u = u.next), u === null)) {
				if (((u = l.shared.pending), u === null)) break;
				(p = u),
					(u = p.next),
					(p.next = null),
					(l.lastBaseUpdate = p),
					(l.shared.pending = null);
			}
		} while (!0);
		if (
			(m === null && (s = h),
			(l.baseState = s),
			(l.firstBaseUpdate = a),
			(l.lastBaseUpdate = m),
			(t = l.shared.interleaved),
			t !== null)
		) {
			l = t;
			do (i |= l.lane), (l = l.next);
			while (l !== t);
		} else o === null && (l.shared.lanes = 0);
		(Ft |= i), (e.lanes = i), (e.memoizedState = h);
	}
}
function xu(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				l = r.callback;
			if (l !== null) {
				if (((r.callback = null), (r = n), typeof l != "function"))
					throw Error(k(191, l));
				l.call(r);
			}
		}
}
var ir = {},
	Xe = Ct(ir),
	Zn = Ct(ir),
	Jn = Ct(ir);
function Mt(e) {
	if (e === ir) throw Error(k(174));
	return e;
}
function yi(e, t) {
	switch ((W(Jn, t), W(Zn, e), W(Xe, ir), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = oo(t, e));
	}
	K(Xe), W(Xe, t);
}
function dn() {
	K(Xe), K(Zn), K(Jn);
}
function ca(e) {
	Mt(Jn.current);
	var t = Mt(Xe.current),
		n = oo(t, e.type);
	t !== n && (W(Zn, e), W(Xe, n));
}
function gi(e) {
	Zn.current === e && (K(Xe), K(Zn));
}
var Z = Ct(0);
function br(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated),
				n === null || n.data === "$?" || n.data === "$!")
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var Al = [];
function wi() {
	for (var e = 0; e < Al.length; e++)
		Al[e]._workInProgressVersionPrimary = null;
	Al.length = 0;
}
var Tr = ot.ReactCurrentDispatcher,
	Vl = ot.ReactCurrentBatchConfig,
	It = 0,
	J = null,
	re = null,
	oe = null,
	el = !1,
	$n = !1,
	qn = 0,
	fd = 0;
function ce() {
	throw Error(k(321));
}
function Si(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!He(e[n], t[n])) return !1;
	return !0;
}
function ki(e, t, n, r, l, o) {
	if (
		((It = o),
		(J = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Tr.current = e === null || e.memoizedState === null ? hd : vd),
		(e = n(r, l)),
		$n)
	) {
		o = 0;
		do {
			if ((($n = !1), (qn = 0), 25 <= o)) throw Error(k(301));
			(o += 1),
				(oe = re = null),
				(t.updateQueue = null),
				(Tr.current = yd),
				(e = n(r, l));
		} while ($n);
	}
	if (
		((Tr.current = tl),
		(t = re !== null && re.next !== null),
		(It = 0),
		(oe = re = J = null),
		(el = !1),
		t)
	)
		throw Error(k(300));
	return e;
}
function xi() {
	var e = qn !== 0;
	return (qn = 0), e;
}
function Qe() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return oe === null ? (J.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function Oe() {
	if (re === null) {
		var e = J.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = re.next;
	var t = oe === null ? J.memoizedState : oe.next;
	if (t !== null) (oe = t), (re = e);
	else {
		if (e === null) throw Error(k(310));
		(re = e),
			(e = {
				memoizedState: re.memoizedState,
				baseState: re.baseState,
				baseQueue: re.baseQueue,
				queue: re.queue,
				next: null,
			}),
			oe === null ? (J.memoizedState = oe = e) : (oe = oe.next = e);
	}
	return oe;
}
function bn(e, t) {
	return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
	var t = Oe(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = re,
		l = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (l !== null) {
			var i = l.next;
			(l.next = o.next), (o.next = i);
		}
		(r.baseQueue = l = o), (n.pending = null);
	}
	if (l !== null) {
		(o = l.next), (r = r.baseState);
		var u = (i = null),
			s = null,
			a = o;
		do {
			var m = a.lane;
			if ((It & m) === m)
				s !== null &&
					(s = s.next =
						{
							lane: 0,
							action: a.action,
							hasEagerState: a.hasEagerState,
							eagerState: a.eagerState,
							next: null,
						}),
					(r = a.hasEagerState ? a.eagerState : e(r, a.action));
			else {
				var h = {
					lane: m,
					action: a.action,
					hasEagerState: a.hasEagerState,
					eagerState: a.eagerState,
					next: null,
				};
				s === null ? ((u = s = h), (i = r)) : (s = s.next = h),
					(J.lanes |= m),
					(Ft |= m);
			}
			a = a.next;
		} while (a !== null && a !== o);
		s === null ? (i = r) : (s.next = u),
			He(r, t.memoizedState) || (Se = !0),
			(t.memoizedState = r),
			(t.baseState = i),
			(t.baseQueue = s),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		l = e;
		do (o = l.lane), (J.lanes |= o), (Ft |= o), (l = l.next);
		while (l !== e);
	} else l === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function Wl(e) {
	var t = Oe(),
		n = t.queue;
	if (n === null) throw Error(k(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		l = n.pending,
		o = t.memoizedState;
	if (l !== null) {
		n.pending = null;
		var i = (l = l.next);
		do (o = e(o, i.action)), (i = i.next);
		while (i !== l);
		He(o, t.memoizedState) || (Se = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function fa() {}
function da(e, t) {
	var n = J,
		r = Oe(),
		l = t(),
		o = !He(r.memoizedState, l);
	if (
		(o && ((r.memoizedState = l), (Se = !0)),
		(r = r.queue),
		Ni(ha.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			er(9, ma.bind(null, n, r, l, t), void 0, null),
			ie === null)
		)
			throw Error(k(349));
		It & 30 || pa(n, t, l);
	}
	return l;
}
function pa(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = J.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (J.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ma(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), va(t) && ya(e);
}
function ha(e, t, n) {
	return n(function () {
		va(t) && ya(e);
	});
}
function va(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !He(e, n);
	} catch {
		return !0;
	}
}
function ya(e) {
	var t = rt(e, 1);
	t !== null && Ve(t, e, 1, -1);
}
function Nu(e) {
	var t = Qe();
	return (
		typeof e == "function" && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: bn,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = md.bind(null, J, e)),
		[t.memoizedState, e]
	);
}
function er(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = J.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (J.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next),
					  (n.next = e),
					  (e.next = r),
					  (t.lastEffect = e))),
		e
	);
}
function ga() {
	return Oe().memoizedState;
}
function Mr(e, t, n, r) {
	var l = Qe();
	(J.flags |= e),
		(l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r));
}
function ml(e, t, n, r) {
	var l = Oe();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (re !== null) {
		var i = re.memoizedState;
		if (((o = i.destroy), r !== null && Si(r, i.deps))) {
			l.memoizedState = er(t, n, o, r);
			return;
		}
	}
	(J.flags |= e), (l.memoizedState = er(1 | t, n, o, r));
}
function Eu(e, t) {
	return Mr(8390656, 8, e, t);
}
function Ni(e, t) {
	return ml(2048, 8, e, t);
}
function wa(e, t) {
	return ml(4, 2, e, t);
}
function Sa(e, t) {
	return ml(4, 4, e, t);
}
function ka(e, t) {
	if (typeof t == "function")
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function xa(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), ml(4, 4, ka.bind(null, t, e), n)
	);
}
function Ei() {}
function Na(e, t) {
	var n = Oe();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Si(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function Ea(e, t) {
	var n = Oe();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Si(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ca(e, t, n) {
	return It & 21
		? (He(n, t) ||
				((n = Rs()), (J.lanes |= n), (Ft |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (Se = !0)),
		  (e.memoizedState = n));
}
function dd(e, t) {
	var n = U;
	(U = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = Vl.transition;
	Vl.transition = {};
	try {
		e(!1), t();
	} finally {
		(U = n), (Vl.transition = r);
	}
}
function _a() {
	return Oe().memoizedState;
}
function pd(e, t, n) {
	var r = St(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		ja(e))
	)
		Pa(t, n);
	else if (((n = sa(e, t, n, r)), n !== null)) {
		var l = he();
		Ve(n, e, r, l), za(n, t, r);
	}
}
function md(e, t, n) {
	var r = St(e),
		l = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
	if (ja(e)) Pa(t, l);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var i = t.lastRenderedState,
					u = o(i, n);
				if (((l.hasEagerState = !0), (l.eagerState = u), He(u, i))) {
					var s = t.interleaved;
					s === null
						? ((l.next = l), hi(t))
						: ((l.next = s.next), (s.next = l)),
						(t.interleaved = l);
					return;
				}
			} catch {
			} finally {
			}
		(n = sa(e, t, l, r)),
			n !== null && ((l = he()), Ve(n, e, r, l), za(n, t, r));
	}
}
function ja(e) {
	var t = e.alternate;
	return e === J || (t !== null && t === J);
}
function Pa(e, t) {
	$n = el = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function za(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ti(e, n);
	}
}
var tl = {
		readContext: $e,
		useCallback: ce,
		useContext: ce,
		useEffect: ce,
		useImperativeHandle: ce,
		useInsertionEffect: ce,
		useLayoutEffect: ce,
		useMemo: ce,
		useReducer: ce,
		useRef: ce,
		useState: ce,
		useDebugValue: ce,
		useDeferredValue: ce,
		useTransition: ce,
		useMutableSource: ce,
		useSyncExternalStore: ce,
		useId: ce,
		unstable_isNewReconciler: !1,
	},
	hd = {
		readContext: $e,
		useCallback: function (e, t) {
			return (Qe().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: $e,
		useEffect: Eu,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				Mr(4194308, 4, ka.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return Mr(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return Mr(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Qe();
			return (
				(t = t === void 0 ? null : t),
				(e = e()),
				(n.memoizedState = [e, t]),
				e
			);
		},
		useReducer: function (e, t, n) {
			var r = Qe();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = pd.bind(null, J, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Qe();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: Nu,
		useDebugValue: Ei,
		useDeferredValue: function (e) {
			return (Qe().memoizedState = e);
		},
		useTransition: function () {
			var e = Nu(!1),
				t = e[0];
			return (e = dd.bind(null, e[1])), (Qe().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = J,
				l = Qe();
			if (G) {
				if (n === void 0) throw Error(k(407));
				n = n();
			} else {
				if (((n = t()), ie === null)) throw Error(k(349));
				It & 30 || pa(r, t, n);
			}
			l.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(l.queue = o),
				Eu(ha.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				er(9, ma.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Qe(),
				t = ie.identifierPrefix;
			if (G) {
				var n = be,
					r = qe;
				(n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
					(t = ":" + t + "R" + n),
					(n = qn++),
					0 < n && (t += "H" + n.toString(32)),
					(t += ":");
			} else (n = fd++), (t = ":" + t + "r" + n.toString(32) + ":");
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	vd = {
		readContext: $e,
		useCallback: Na,
		useContext: $e,
		useEffect: Ni,
		useImperativeHandle: xa,
		useInsertionEffect: wa,
		useLayoutEffect: Sa,
		useMemo: Ea,
		useReducer: Hl,
		useRef: ga,
		useState: function () {
			return Hl(bn);
		},
		useDebugValue: Ei,
		useDeferredValue: function (e) {
			var t = Oe();
			return Ca(t, re.memoizedState, e);
		},
		useTransition: function () {
			var e = Hl(bn)[0],
				t = Oe().memoizedState;
			return [e, t];
		},
		useMutableSource: fa,
		useSyncExternalStore: da,
		useId: _a,
		unstable_isNewReconciler: !1,
	},
	yd = {
		readContext: $e,
		useCallback: Na,
		useContext: $e,
		useEffect: Ni,
		useImperativeHandle: xa,
		useInsertionEffect: wa,
		useLayoutEffect: Sa,
		useMemo: Ea,
		useReducer: Wl,
		useRef: ga,
		useState: function () {
			return Wl(bn);
		},
		useDebugValue: Ei,
		useDeferredValue: function (e) {
			var t = Oe();
			return re === null
				? (t.memoizedState = e)
				: Ca(t, re.memoizedState, e);
		},
		useTransition: function () {
			var e = Wl(bn)[0],
				t = Oe().memoizedState;
			return [e, t];
		},
		useMutableSource: fa,
		useSyncExternalStore: da,
		useId: _a,
		unstable_isNewReconciler: !1,
	};
function Fe(e, t) {
	if (e && e.defaultProps) {
		(t = q({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function jo(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : q({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hl = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? At(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = he(),
			l = St(e),
			o = et(r, l);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = gt(e, o, l)),
			t !== null && (Ve(t, e, l, r), Rr(t, e, l));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = he(),
			l = St(e),
			o = et(r, l);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = gt(e, o, l)),
			t !== null && (Ve(t, e, l, r), Rr(t, e, l));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = he(),
			r = St(e),
			l = et(n, r);
		(l.tag = 2),
			t != null && (l.callback = t),
			(t = gt(e, l, r)),
			t !== null && (Ve(t, e, r, n), Rr(t, e, r));
	},
};
function Cu(e, t, n, r, l, o, i) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == "function"
			? e.shouldComponentUpdate(r, o, i)
			: t.prototype && t.prototype.isPureReactComponent
			? !Kn(n, r) || !Kn(l, o)
			: !0
	);
}
function Ra(e, t, n) {
	var r = !1,
		l = Nt,
		o = t.contextType;
	return (
		typeof o == "object" && o !== null
			? (o = $e(o))
			: ((l = xe(t) ? $t : pe.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? an(e, l) : Nt)),
		(t = new t(n, o)),
		(e.memoizedState =
			t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = hl),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = l),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function _u(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == "function" &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == "function" &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && hl.enqueueReplaceState(t, t.state, null);
}
function Po(e, t, n, r) {
	var l = e.stateNode;
	(l.props = n), (l.state = e.memoizedState), (l.refs = {}), vi(e);
	var o = t.contextType;
	typeof o == "object" && o !== null
		? (l.context = $e(o))
		: ((o = xe(t) ? $t : pe.current), (l.context = an(e, o))),
		(l.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == "function" && (jo(e, t, o, n), (l.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == "function" ||
			typeof l.getSnapshotBeforeUpdate == "function" ||
			(typeof l.UNSAFE_componentWillMount != "function" &&
				typeof l.componentWillMount != "function") ||
			((t = l.state),
			typeof l.componentWillMount == "function" && l.componentWillMount(),
			typeof l.UNSAFE_componentWillMount == "function" &&
				l.UNSAFE_componentWillMount(),
			t !== l.state && hl.enqueueReplaceState(l, l.state, null),
			qr(e, n, l, r),
			(l.state = e.memoizedState)),
		typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function pn(e, t) {
	try {
		var n = "",
			r = t;
		do (n += Wc(r)), (r = r.return);
		while (r);
		var l = n;
	} catch (o) {
		l =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: l, digest: null };
}
function Ql(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zo(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var gd = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, t, n) {
	(n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			rl || ((rl = !0), (Bo = r)), zo(e, t);
		}),
		n
	);
}
function Ma(e, t, n) {
	(n = et(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == "function") {
		var l = t.value;
		(n.payload = function () {
			return r(l);
		}),
			(n.callback = function () {
				zo(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == "function" &&
			(n.callback = function () {
				zo(e, t),
					typeof r != "function" &&
						(wt === null ? (wt = new Set([this])) : wt.add(this));
				var i = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: i !== null ? i : "",
				});
			}),
		n
	);
}
function ju(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new gd();
		var l = new Set();
		r.set(t, l);
	} else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
	l.has(n) || (l.add(n), (e = Md.bind(null, e, t, n)), t.then(e, e));
}
function Pu(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState),
				(t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function zu(e, t, n, r, l) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = l), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = et(-1, 1)), (t.tag = 2), gt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var wd = ot.ReactCurrentOwner,
	Se = !1;
function me(e, t, n, r) {
	t.child = e === null ? ua(t, null, n, r) : fn(t, e.child, n, r);
}
function Ru(e, t, n, r, l) {
	n = n.render;
	var o = t.ref;
	return (
		on(t, l),
		(r = ki(e, t, n, r, o, l)),
		(n = xi()),
		e !== null && !Se
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  lt(e, t, l))
			: (G && n && ai(t), (t.flags |= 1), me(e, t, r, l), t.child)
	);
}
function Tu(e, t, n, r, l) {
	if (e === null) {
		var o = n.type;
		return typeof o == "function" &&
			!Mi(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), La(e, t, o, r, l))
			: ((e = Or(n.type, null, r, t, t.mode, l)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & l))) {
		var i = o.memoizedProps;
		if (
			((n = n.compare),
			(n = n !== null ? n : Kn),
			n(i, r) && e.ref === t.ref)
		)
			return lt(e, t, l);
	}
	return (
		(t.flags |= 1),
		(e = kt(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function La(e, t, n, r, l) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (Kn(o, r) && e.ref === t.ref)
			if (((Se = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
				e.flags & 131072 && (Se = !0);
			else return (t.lanes = e.lanes), lt(e, t, l);
	}
	return Ro(e, t, n, r, l);
}
function Da(e, t, n) {
	var r = t.pendingProps,
		l = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === "hidden")
		if (!(t.mode & 1))
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				W(en, Ee),
				(Ee |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					W(en, Ee),
					(Ee |= e),
					null
				);
			(t.memoizedState = {
				baseLanes: 0,
				cachePool: null,
				transitions: null,
			}),
				(r = o !== null ? o.baseLanes : n),
				W(en, Ee),
				(Ee |= r);
		}
	else
		o !== null
			? ((r = o.baseLanes | n), (t.memoizedState = null))
			: (r = n),
			W(en, Ee),
			(Ee |= r);
	return me(e, t, l, n), t.child;
}
function $a(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function Ro(e, t, n, r, l) {
	var o = xe(n) ? $t : pe.current;
	return (
		(o = an(t, o)),
		on(t, l),
		(n = ki(e, t, n, r, o, l)),
		(r = xi()),
		e !== null && !Se
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~l),
			  lt(e, t, l))
			: (G && r && ai(t), (t.flags |= 1), me(e, t, n, l), t.child)
	);
}
function Mu(e, t, n, r, l) {
	if (xe(n)) {
		var o = !0;
		Yr(t);
	} else o = !1;
	if ((on(t, l), t.stateNode === null))
		Lr(e, t), Ra(t, n, r), Po(t, n, r, l), (r = !0);
	else if (e === null) {
		var i = t.stateNode,
			u = t.memoizedProps;
		i.props = u;
		var s = i.context,
			a = n.contextType;
		typeof a == "object" && a !== null
			? (a = $e(a))
			: ((a = xe(n) ? $t : pe.current), (a = an(t, a)));
		var m = n.getDerivedStateFromProps,
			h =
				typeof m == "function" ||
				typeof i.getSnapshotBeforeUpdate == "function";
		h ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((u !== r || s !== a) && _u(t, i, r, a)),
			(at = !1);
		var p = t.memoizedState;
		(i.state = p),
			qr(t, r, i, l),
			(s = t.memoizedState),
			u !== r || p !== s || ke.current || at
				? (typeof m == "function" &&
						(jo(t, n, m, r), (s = t.memoizedState)),
				  (u = at || Cu(t, n, u, r, p, s, a))
						? (h ||
								(typeof i.UNSAFE_componentWillMount !=
									"function" &&
									typeof i.componentWillMount !=
										"function") ||
								(typeof i.componentWillMount == "function" &&
									i.componentWillMount(),
								typeof i.UNSAFE_componentWillMount ==
									"function" &&
									i.UNSAFE_componentWillMount()),
						  typeof i.componentDidMount == "function" &&
								(t.flags |= 4194308))
						: (typeof i.componentDidMount == "function" &&
								(t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = s)),
				  (i.props = r),
				  (i.state = s),
				  (i.context = a),
				  (r = u))
				: (typeof i.componentDidMount == "function" &&
						(t.flags |= 4194308),
				  (r = !1));
	} else {
		(i = t.stateNode),
			aa(e, t),
			(u = t.memoizedProps),
			(a = t.type === t.elementType ? u : Fe(t.type, u)),
			(i.props = a),
			(h = t.pendingProps),
			(p = i.context),
			(s = n.contextType),
			typeof s == "object" && s !== null
				? (s = $e(s))
				: ((s = xe(n) ? $t : pe.current), (s = an(t, s)));
		var y = n.getDerivedStateFromProps;
		(m =
			typeof y == "function" ||
			typeof i.getSnapshotBeforeUpdate == "function") ||
			(typeof i.UNSAFE_componentWillReceiveProps != "function" &&
				typeof i.componentWillReceiveProps != "function") ||
			((u !== h || p !== s) && _u(t, i, r, s)),
			(at = !1),
			(p = t.memoizedState),
			(i.state = p),
			qr(t, r, i, l);
		var w = t.memoizedState;
		u !== h || p !== w || ke.current || at
			? (typeof y == "function" &&
					(jo(t, n, y, r), (w = t.memoizedState)),
			  (a = at || Cu(t, n, a, r, p, w, s) || !1)
					? (m ||
							(typeof i.UNSAFE_componentWillUpdate !=
								"function" &&
								typeof i.componentWillUpdate != "function") ||
							(typeof i.componentWillUpdate == "function" &&
								i.componentWillUpdate(r, w, s),
							typeof i.UNSAFE_componentWillUpdate == "function" &&
								i.UNSAFE_componentWillUpdate(r, w, s)),
					  typeof i.componentDidUpdate == "function" &&
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate == "function" &&
							(t.flags |= 1024))
					: (typeof i.componentDidUpdate != "function" ||
							(u === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 4),
					  typeof i.getSnapshotBeforeUpdate != "function" ||
							(u === e.memoizedProps && p === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = w)),
			  (i.props = r),
			  (i.state = w),
			  (i.context = s),
			  (r = a))
			: (typeof i.componentDidUpdate != "function" ||
					(u === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 4),
			  typeof i.getSnapshotBeforeUpdate != "function" ||
					(u === e.memoizedProps && p === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return To(e, t, n, r, o, l);
}
function To(e, t, n, r, l, o) {
	$a(e, t);
	var i = (t.flags & 128) !== 0;
	if (!r && !i) return l && yu(t, n, !1), lt(e, t, o);
	(r = t.stateNode), (wd.current = t);
	var u =
		i && typeof n.getDerivedStateFromError != "function"
			? null
			: r.render();
	return (
		(t.flags |= 1),
		e !== null && i
			? ((t.child = fn(t, e.child, null, o)),
			  (t.child = fn(t, null, u, o)))
			: me(e, t, u, o),
		(t.memoizedState = r.state),
		l && yu(t, n, !0),
		t.child
	);
}
function Oa(e) {
	var t = e.stateNode;
	t.pendingContext
		? vu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && vu(e, t.context, !1),
		yi(e, t.containerInfo);
}
function Lu(e, t, n, r, l) {
	return cn(), fi(l), (t.flags |= 256), me(e, t, n, r), t.child;
}
var Mo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lo(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, t, n) {
	var r = t.pendingProps,
		l = Z.current,
		o = !1,
		i = (t.flags & 128) !== 0,
		u;
	if (
		((u = i) ||
			(u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
		u
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (l |= 1),
		W(Z, l & 1),
		e === null)
	)
		return (
			Co(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === "$!"
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((i = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (i = { mode: "hidden", children: i }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = i))
								: (o = gl(i, r, 0, null)),
						  (e = Dt(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = Lo(n)),
						  (t.memoizedState = Mo),
						  e)
						: Ci(t, i))
		);
	if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
		return Sd(e, t, i, r, u, l, n);
	if (o) {
		(o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
		var s = { mode: "hidden", children: r.children };
		return (
			!(i & 1) && t.child !== l
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = s),
				  (t.deletions = null))
				: ((r = kt(l, s)),
				  (r.subtreeFlags = l.subtreeFlags & 14680064)),
			u !== null
				? (o = kt(u, o))
				: ((o = Dt(o, i, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(i = e.child.memoizedState),
			(i =
				i === null
					? Lo(n)
					: {
							baseLanes: i.baseLanes | n,
							cachePool: null,
							transitions: i.transitions,
					  }),
			(o.memoizedState = i),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = Mo),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = kt(o, { mode: "visible", children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function Ci(e, t) {
	return (
		(t = gl({ mode: "visible", children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function kr(e, t, n, r) {
	return (
		r !== null && fi(r),
		fn(t, e.child, null, n),
		(e = Ci(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Sd(e, t, n, r, l, o, i) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = Ql(Error(k(422)))), kr(e, t, i, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (l = t.mode),
			  (r = gl({ mode: "visible", children: r.children }, l, 0, null)),
			  (o = Dt(o, l, i, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && fn(t, e.child, null, i),
			  (t.child.memoizedState = Lo(i)),
			  (t.memoizedState = Mo),
			  o);
	if (!(t.mode & 1)) return kr(e, t, i, null);
	if (l.data === "$!") {
		if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
		return (
			(r = u), (o = Error(k(419))), (r = Ql(o, r, void 0)), kr(e, t, i, r)
		);
	}
	if (((u = (i & e.childLanes) !== 0), Se || u)) {
		if (((r = ie), r !== null)) {
			switch (i & -i) {
				case 4:
					l = 2;
					break;
				case 16:
					l = 8;
					break;
				case 64:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
				case 67108864:
					l = 32;
					break;
				case 536870912:
					l = 268435456;
					break;
				default:
					l = 0;
			}
			(l = l & (r.suspendedLanes | i) ? 0 : l),
				l !== 0 &&
					l !== o.retryLane &&
					((o.retryLane = l), rt(e, l), Ve(r, e, l, -1));
		}
		return Ti(), (r = Ql(Error(k(421)))), kr(e, t, i, r);
	}
	return l.data === "$?"
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = Ld.bind(null, e)),
		  (l._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Ce = yt(l.nextSibling)),
		  (_e = t),
		  (G = !0),
		  (Ue = null),
		  e !== null &&
				((Te[Me++] = qe),
				(Te[Me++] = be),
				(Te[Me++] = Ot),
				(qe = e.id),
				(be = e.overflow),
				(Ot = t)),
		  (t = Ci(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function Du(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), _o(e.return, t, n);
}
function Kl(e, t, n, r, l) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: l,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = l));
}
function Fa(e, t, n) {
	var r = t.pendingProps,
		l = r.revealOrder,
		o = r.tail;
	if ((me(e, t, r.children, n), (r = Z.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && Du(e, n, t);
				else if (e.tag === 19) Du(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((W(Z, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (l) {
			case "forwards":
				for (n = t.child, l = null; n !== null; )
					(e = n.alternate),
						e !== null && br(e) === null && (l = n),
						(n = n.sibling);
				(n = l),
					n === null
						? ((l = t.child), (t.child = null))
						: ((l = n.sibling), (n.sibling = null)),
					Kl(t, !1, l, n, o);
				break;
			case "backwards":
				for (n = null, l = t.child, t.child = null; l !== null; ) {
					if (((e = l.alternate), e !== null && br(e) === null)) {
						t.child = l;
						break;
					}
					(e = l.sibling), (l.sibling = n), (n = l), (l = e);
				}
				Kl(t, !0, n, null, o);
				break;
			case "together":
				Kl(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Lr(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(Ft |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(k(153));
	if (t.child !== null) {
		for (
			e = t.child, n = kt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling),
				(n = n.sibling = kt(e, e.pendingProps)),
				(n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function kd(e, t, n) {
	switch (t.tag) {
		case 3:
			Oa(t), cn();
			break;
		case 5:
			ca(t);
			break;
		case 1:
			xe(t.type) && Yr(t);
			break;
		case 4:
			yi(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				l = t.memoizedProps.value;
			W(Zr, r._currentValue), (r._currentValue = l);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (W(Z, Z.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Ia(e, t, n)
					: (W(Z, Z.current & 1),
					  (e = lt(e, t, n)),
					  e !== null ? e.sibling : null);
			W(Z, Z.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Fa(e, t, n);
				t.flags |= 128;
			}
			if (
				((l = t.memoizedState),
				l !== null &&
					((l.rendering = null),
					(l.tail = null),
					(l.lastEffect = null)),
				W(Z, Z.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), Da(e, t, n);
	}
	return lt(e, t, n);
}
var Ba, Do, Ua, Aa;
Ba = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
Do = function () {};
Ua = function (e, t, n, r) {
	var l = e.memoizedProps;
	if (l !== r) {
		(e = t.stateNode), Mt(Xe.current);
		var o = null;
		switch (n) {
			case "input":
				(l = to(e, l)), (r = to(e, r)), (o = []);
				break;
			case "select":
				(l = q({}, l, { value: void 0 })),
					(r = q({}, r, { value: void 0 })),
					(o = []);
				break;
			case "textarea":
				(l = lo(e, l)), (r = lo(e, r)), (o = []);
				break;
			default:
				typeof l.onClick != "function" &&
					typeof r.onClick == "function" &&
					(e.onclick = Qr);
		}
		io(n, r);
		var i;
		n = null;
		for (a in l)
			if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
				if (a === "style") {
					var u = l[a];
					for (i in u)
						u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
				} else
					a !== "dangerouslySetInnerHTML" &&
						a !== "children" &&
						a !== "suppressContentEditableWarning" &&
						a !== "suppressHydrationWarning" &&
						a !== "autoFocus" &&
						(Bn.hasOwnProperty(a)
							? o || (o = [])
							: (o = o || []).push(a, null));
		for (a in r) {
			var s = r[a];
			if (
				((u = l != null ? l[a] : void 0),
				r.hasOwnProperty(a) && s !== u && (s != null || u != null))
			)
				if (a === "style")
					if (u) {
						for (i in u)
							!u.hasOwnProperty(i) ||
								(s && s.hasOwnProperty(i)) ||
								(n || (n = {}), (n[i] = ""));
						for (i in s)
							s.hasOwnProperty(i) &&
								u[i] !== s[i] &&
								(n || (n = {}), (n[i] = s[i]));
					} else n || (o || (o = []), o.push(a, n)), (n = s);
				else
					a === "dangerouslySetInnerHTML"
						? ((s = s ? s.__html : void 0),
						  (u = u ? u.__html : void 0),
						  s != null && u !== s && (o = o || []).push(a, s))
						: a === "children"
						? (typeof s != "string" && typeof s != "number") ||
						  (o = o || []).push(a, "" + s)
						: a !== "suppressContentEditableWarning" &&
						  a !== "suppressHydrationWarning" &&
						  (Bn.hasOwnProperty(a)
								? (s != null &&
										a === "onScroll" &&
										Q("scroll", e),
								  o || u === s || (o = []))
								: (o = o || []).push(a, s));
		}
		n && (o = o || []).push("style", n);
		var a = o;
		(t.updateQueue = a) && (t.flags |= 4);
	}
};
Aa = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function En(e, t) {
	if (!G)
		switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function fe(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags & 14680064),
				(r |= l.flags & 14680064),
				(l.return = e),
				(l = l.sibling);
	else
		for (l = e.child; l !== null; )
			(n |= l.lanes | l.childLanes),
				(r |= l.subtreeFlags),
				(r |= l.flags),
				(l.return = e),
				(l = l.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xd(e, t, n) {
	var r = t.pendingProps;
	switch ((ci(t), t.tag)) {
		case 2:
		case 16:
		case 15:
		case 0:
		case 11:
		case 7:
		case 8:
		case 12:
		case 9:
		case 14:
			return fe(t), null;
		case 1:
			return xe(t.type) && Kr(), fe(t), null;
		case 3:
			return (
				(r = t.stateNode),
				dn(),
				K(ke),
				K(pe),
				wi(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(wr(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024),
						  Ue !== null && (Vo(Ue), (Ue = null)))),
				Do(e, t),
				fe(t),
				null
			);
		case 5:
			gi(t);
			var l = Mt(Jn.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Ua(e, t, n, r, l),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(k(166));
					return fe(t), null;
				}
				if (((e = Mt(Xe.current)), wr(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (
						((r[Ke] = t), (r[Gn] = o), (e = (t.mode & 1) !== 0), n)
					) {
						case "dialog":
							Q("cancel", r), Q("close", r);
							break;
						case "iframe":
						case "object":
						case "embed":
							Q("load", r);
							break;
						case "video":
						case "audio":
							for (l = 0; l < zn.length; l++) Q(zn[l], r);
							break;
						case "source":
							Q("error", r);
							break;
						case "img":
						case "image":
						case "link":
							Q("error", r), Q("load", r);
							break;
						case "details":
							Q("toggle", r);
							break;
						case "input":
							Hi(r, o), Q("invalid", r);
							break;
						case "select":
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								Q("invalid", r);
							break;
						case "textarea":
							Qi(r, o), Q("invalid", r);
					}
					io(n, o), (l = null);
					for (var i in o)
						if (o.hasOwnProperty(i)) {
							var u = o[i];
							i === "children"
								? typeof u == "string"
									? r.textContent !== u &&
									  (o.suppressHydrationWarning !== !0 &&
											gr(r.textContent, u, e),
									  (l = ["children", u]))
									: typeof u == "number" &&
									  r.textContent !== "" + u &&
									  (o.suppressHydrationWarning !== !0 &&
											gr(r.textContent, u, e),
									  (l = ["children", "" + u]))
								: Bn.hasOwnProperty(i) &&
								  u != null &&
								  i === "onScroll" &&
								  Q("scroll", r);
						}
					switch (n) {
						case "input":
							cr(r), Wi(r, o, !0);
							break;
						case "textarea":
							cr(r), Ki(r);
							break;
						case "select":
						case "option":
							break;
						default:
							typeof o.onClick == "function" && (r.onclick = Qr);
					}
					(r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(i = l.nodeType === 9 ? l : l.ownerDocument),
						e === "http://www.w3.org/1999/xhtml" && (e = hs(n)),
						e === "http://www.w3.org/1999/xhtml"
							? n === "script"
								? ((e = i.createElement("div")),
								  (e.innerHTML = "<script></script>"),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == "string"
								? (e = i.createElement(n, { is: r.is }))
								: ((e = i.createElement(n)),
								  n === "select" &&
										((i = e),
										r.multiple
											? (i.multiple = !0)
											: r.size && (i.size = r.size)))
							: (e = i.createElementNS(e, n)),
						(e[Ke] = t),
						(e[Gn] = r),
						Ba(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((i = uo(n, r)), n)) {
							case "dialog":
								Q("cancel", e), Q("close", e), (l = r);
								break;
							case "iframe":
							case "object":
							case "embed":
								Q("load", e), (l = r);
								break;
							case "video":
							case "audio":
								for (l = 0; l < zn.length; l++) Q(zn[l], e);
								l = r;
								break;
							case "source":
								Q("error", e), (l = r);
								break;
							case "img":
							case "image":
							case "link":
								Q("error", e), Q("load", e), (l = r);
								break;
							case "details":
								Q("toggle", e), (l = r);
								break;
							case "input":
								Hi(e, r), (l = to(e, r)), Q("invalid", e);
								break;
							case "option":
								l = r;
								break;
							case "select":
								(e._wrapperState = {
									wasMultiple: !!r.multiple,
								}),
									(l = q({}, r, { value: void 0 })),
									Q("invalid", e);
								break;
							case "textarea":
								Qi(e, r), (l = lo(e, r)), Q("invalid", e);
								break;
							default:
								l = r;
						}
						io(n, l), (u = l);
						for (o in u)
							if (u.hasOwnProperty(o)) {
								var s = u[o];
								o === "style"
									? gs(e, s)
									: o === "dangerouslySetInnerHTML"
									? ((s = s ? s.__html : void 0),
									  s != null && vs(e, s))
									: o === "children"
									? typeof s == "string"
										? (n !== "textarea" || s !== "") &&
										  Un(e, s)
										: typeof s == "number" && Un(e, "" + s)
									: o !== "suppressContentEditableWarning" &&
									  o !== "suppressHydrationWarning" &&
									  o !== "autoFocus" &&
									  (Bn.hasOwnProperty(o)
											? s != null &&
											  o === "onScroll" &&
											  Q("scroll", e)
											: s != null && Go(e, o, s, i));
							}
						switch (n) {
							case "input":
								cr(e), Wi(e, r, !1);
								break;
							case "textarea":
								cr(e), Ki(e);
								break;
							case "option":
								r.value != null &&
									e.setAttribute("value", "" + xt(r.value));
								break;
							case "select":
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? tn(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  tn(
												e,
												!!r.multiple,
												r.defaultValue,
												!0
										  );
								break;
							default:
								typeof l.onClick == "function" &&
									(e.onclick = Qr);
						}
						switch (n) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break e;
							case "img":
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return fe(t), null;
		case 6:
			if (e && t.stateNode != null) Aa(e, t, e.memoizedProps, r);
			else {
				if (typeof r != "string" && t.stateNode === null)
					throw Error(k(166));
				if (((n = Mt(Jn.current)), Mt(Xe.current), wr(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[Ke] = t),
						(o = r.nodeValue !== n) && ((e = _e), e !== null))
					)
						switch (e.tag) {
							case 3:
								gr(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !==
									!0 &&
									gr(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (
						n.nodeType === 9 ? n : n.ownerDocument
					).createTextNode(r)),
						(r[Ke] = t),
						(t.stateNode = r);
			}
			return fe(t), null;
		case 13:
			if (
				(K(Z),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null &&
						e.memoizedState.dehydrated !== null))
			) {
				if (G && Ce !== null && t.mode & 1 && !(t.flags & 128))
					oa(), cn(), (t.flags |= 98560), (o = !1);
				else if (((o = wr(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(k(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(k(317));
						o[Ke] = t;
					} else
						cn(),
							!(t.flags & 128) && (t.memoizedState = null),
							(t.flags |= 4);
					fe(t), (o = !1);
				} else Ue !== null && (Vo(Ue), (Ue = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || Z.current & 1
								? le === 0 && (le = 3)
								: Ti())),
				  t.updateQueue !== null && (t.flags |= 4),
				  fe(t),
				  null);
		case 4:
			return (
				dn(),
				Do(e, t),
				e === null && Yn(t.stateNode.containerInfo),
				fe(t),
				null
			);
		case 10:
			return mi(t.type._context), fe(t), null;
		case 17:
			return xe(t.type) && Kr(), fe(t), null;
		case 19:
			if ((K(Z), (o = t.memoizedState), o === null)) return fe(t), null;
			if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
				if (r) En(o, !1);
				else {
					if (le !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((i = br(e)), i !== null)) {
								for (
									t.flags |= 128,
										En(o, !1),
										r = i.updateQueue,
										r !== null &&
											((t.updateQueue = r),
											(t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(i = o.alternate),
										i === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = i.childLanes),
											  (o.lanes = i.lanes),
											  (o.child = i.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps =
													i.memoizedProps),
											  (o.memoizedState =
													i.memoizedState),
											  (o.updateQueue = i.updateQueue),
											  (o.type = i.type),
											  (e = i.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext:
																	e.firstContext,
														  })),
										(n = n.sibling);
								return W(Z, (Z.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						ee() > mn &&
						((t.flags |= 128),
						(r = !0),
						En(o, !1),
						(t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = br(i)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							En(o, !0),
							o.tail === null &&
								o.tailMode === "hidden" &&
								!i.alternate &&
								!G)
						)
							return fe(t), null;
					} else
						2 * ee() - o.renderingStartTime > mn &&
							n !== 1073741824 &&
							((t.flags |= 128),
							(r = !0),
							En(o, !1),
							(t.lanes = 4194304));
				o.isBackwards
					? ((i.sibling = t.child), (t.child = i))
					: ((n = o.last),
					  n !== null ? (n.sibling = i) : (t.child = i),
					  (o.last = i));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = ee()),
				  (t.sibling = null),
				  (n = Z.current),
				  W(Z, r ? (n & 1) | 2 : n & 1),
				  t)
				: (fe(t), null);
		case 22:
		case 23:
			return (
				Ri(),
				(r = t.memoizedState !== null),
				e !== null &&
					(e.memoizedState !== null) !== r &&
					(t.flags |= 8192),
				r && t.mode & 1
					? Ee & 1073741824 &&
					  (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: fe(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(k(156, t.tag));
}
function Nd(e, t) {
	switch ((ci(t), t.tag)) {
		case 1:
			return (
				xe(t.type) && Kr(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				dn(),
				K(ke),
				K(pe),
				wi(),
				(e = t.flags),
				e & 65536 && !(e & 128)
					? ((t.flags = (e & -65537) | 128), t)
					: null
			);
		case 5:
			return gi(t), null;
		case 13:
			if (
				(K(Z),
				(e = t.memoizedState),
				e !== null && e.dehydrated !== null)
			) {
				if (t.alternate === null) throw Error(k(340));
				cn();
			}
			return (
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return K(Z), null;
		case 4:
			return dn(), null;
		case 10:
			return mi(t.type._context), null;
		case 22:
		case 23:
			return Ri(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var xr = !1,
	de = !1,
	Ed = typeof WeakSet == "function" ? WeakSet : Set,
	z = null;
function bt(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == "function")
			try {
				n(null);
			} catch (r) {
				b(e, t, r);
			}
		else n.current = null;
}
function $o(e, t, n) {
	try {
		n();
	} catch (r) {
		b(e, t, r);
	}
}
var $u = !1;
function Cd(e, t) {
	if (((go = Vr), (e = Ks()), si(e))) {
		if ("selectionStart" in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var l = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var i = 0,
						u = -1,
						s = -1,
						a = 0,
						m = 0,
						h = e,
						p = null;
					t: for (;;) {
						for (
							var y;
							h !== n ||
								(l !== 0 && h.nodeType !== 3) ||
								(u = i + l),
								h !== o ||
									(r !== 0 && h.nodeType !== 3) ||
									(s = i + r),
								h.nodeType === 3 && (i += h.nodeValue.length),
								(y = h.firstChild) !== null;

						)
							(p = h), (h = y);
						for (;;) {
							if (h === e) break t;
							if (
								(p === n && ++a === l && (u = i),
								p === o && ++m === r && (s = i),
								(y = h.nextSibling) !== null)
							)
								break;
							(h = p), (p = h.parentNode);
						}
						h = y;
					}
					n = u === -1 || s === -1 ? null : { start: u, end: s };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (
		wo = { focusedElem: e, selectionRange: n }, Vr = !1, z = t;
		z !== null;

	)
		if (
			((t = z),
			(e = t.child),
			(t.subtreeFlags & 1028) !== 0 && e !== null)
		)
			(e.return = t), (z = e);
		else
			for (; z !== null; ) {
				t = z;
				try {
					var w = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (w !== null) {
									var S = w.memoizedProps,
										T = w.memoizedState,
										f = t.stateNode,
										c = f.getSnapshotBeforeUpdate(
											t.elementType === t.type
												? S
												: Fe(t.type, S),
											T
										);
									f.__reactInternalSnapshotBeforeUpdate = c;
								}
								break;
							case 3:
								var d = t.stateNode.containerInfo;
								d.nodeType === 1
									? (d.textContent = "")
									: d.nodeType === 9 &&
									  d.documentElement &&
									  d.removeChild(d.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(k(163));
						}
				} catch (g) {
					b(t, t.return, g);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (z = e);
					break;
				}
				z = t.return;
			}
	return (w = $u), ($u = !1), w;
}
function On(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var l = (r = r.next);
		do {
			if ((l.tag & e) === e) {
				var o = l.destroy;
				(l.destroy = void 0), o !== void 0 && $o(t, n, o);
			}
			l = l.next;
		} while (l !== r);
	}
}
function vl(e, t) {
	if (
		((t = t.updateQueue),
		(t = t !== null ? t.lastEffect : null),
		t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function Oo(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == "function" ? t(e) : (t.current = e);
	}
}
function Va(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Va(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[Ke],
				delete t[Gn],
				delete t[xo],
				delete t[ud],
				delete t[sd])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Ha(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ou(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Ha(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function Io(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Qr));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Io(e, t, n), e = e.sibling; e !== null; )
			Io(e, t, n), (e = e.sibling);
}
function Fo(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (Fo(e, t, n), e = e.sibling; e !== null; )
			Fo(e, t, n), (e = e.sibling);
}
var ue = null,
	Be = !1;
function ut(e, t, n) {
	for (n = n.child; n !== null; ) Wa(e, t, n), (n = n.sibling);
}
function Wa(e, t, n) {
	if (Ye && typeof Ye.onCommitFiberUnmount == "function")
		try {
			Ye.onCommitFiberUnmount(sl, n);
		} catch {}
	switch (n.tag) {
		case 5:
			de || bt(n, t);
		case 6:
			var r = ue,
				l = Be;
			(ue = null),
				ut(e, t, n),
				(ue = r),
				(Be = l),
				ue !== null &&
					(Be
						? ((e = ue),
						  (n = n.stateNode),
						  e.nodeType === 8
								? e.parentNode.removeChild(n)
								: e.removeChild(n))
						: ue.removeChild(n.stateNode));
			break;
		case 18:
			ue !== null &&
				(Be
					? ((e = ue),
					  (n = n.stateNode),
					  e.nodeType === 8
							? Bl(e.parentNode, n)
							: e.nodeType === 1 && Bl(e, n),
					  Wn(e))
					: Bl(ue, n.stateNode));
			break;
		case 4:
			(r = ue),
				(l = Be),
				(ue = n.stateNode.containerInfo),
				(Be = !0),
				ut(e, t, n),
				(ue = r),
				(Be = l);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!de &&
				((r = n.updateQueue),
				r !== null && ((r = r.lastEffect), r !== null))
			) {
				l = r = r.next;
				do {
					var o = l,
						i = o.destroy;
					(o = o.tag),
						i !== void 0 && (o & 2 || o & 4) && $o(n, t, i),
						(l = l.next);
				} while (l !== r);
			}
			ut(e, t, n);
			break;
		case 1:
			if (
				!de &&
				(bt(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == "function")
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (u) {
					b(n, t, u);
				}
			ut(e, t, n);
			break;
		case 21:
			ut(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((de = (r = de) || n.memoizedState !== null),
				  ut(e, t, n),
				  (de = r))
				: ut(e, t, n);
			break;
		default:
			ut(e, t, n);
	}
}
function Iu(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Ed()),
			t.forEach(function (r) {
				var l = Dd.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(l, l));
			});
	}
}
function Ie(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var l = n[r];
			try {
				var o = e,
					i = t,
					u = i;
				e: for (; u !== null; ) {
					switch (u.tag) {
						case 5:
							(ue = u.stateNode), (Be = !1);
							break e;
						case 3:
							(ue = u.stateNode.containerInfo), (Be = !0);
							break e;
						case 4:
							(ue = u.stateNode.containerInfo), (Be = !0);
							break e;
					}
					u = u.return;
				}
				if (ue === null) throw Error(k(160));
				Wa(o, i, l), (ue = null), (Be = !1);
				var s = l.alternate;
				s !== null && (s.return = null), (l.return = null);
			} catch (a) {
				b(l, t, a);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Qa(t, e), (t = t.sibling);
}
function Qa(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ie(t, e), We(e), r & 4)) {
				try {
					On(3, e, e.return), vl(3, e);
				} catch (S) {
					b(e, e.return, S);
				}
				try {
					On(5, e, e.return);
				} catch (S) {
					b(e, e.return, S);
				}
			}
			break;
		case 1:
			Ie(t, e), We(e), r & 512 && n !== null && bt(n, n.return);
			break;
		case 5:
			if (
				(Ie(t, e),
				We(e),
				r & 512 && n !== null && bt(n, n.return),
				e.flags & 32)
			) {
				var l = e.stateNode;
				try {
					Un(l, "");
				} catch (S) {
					b(e, e.return, S);
				}
			}
			if (r & 4 && ((l = e.stateNode), l != null)) {
				var o = e.memoizedProps,
					i = n !== null ? n.memoizedProps : o,
					u = e.type,
					s = e.updateQueue;
				if (((e.updateQueue = null), s !== null))
					try {
						u === "input" &&
							o.type === "radio" &&
							o.name != null &&
							ps(l, o),
							uo(u, i);
						var a = uo(u, o);
						for (i = 0; i < s.length; i += 2) {
							var m = s[i],
								h = s[i + 1];
							m === "style"
								? gs(l, h)
								: m === "dangerouslySetInnerHTML"
								? vs(l, h)
								: m === "children"
								? Un(l, h)
								: Go(l, m, h, a);
						}
						switch (u) {
							case "input":
								no(l, o);
								break;
							case "textarea":
								ms(l, o);
								break;
							case "select":
								var p = l._wrapperState.wasMultiple;
								l._wrapperState.wasMultiple = !!o.multiple;
								var y = o.value;
								y != null
									? tn(l, !!o.multiple, y, !1)
									: p !== !!o.multiple &&
									  (o.defaultValue != null
											? tn(
													l,
													!!o.multiple,
													o.defaultValue,
													!0
											  )
											: tn(
													l,
													!!o.multiple,
													o.multiple ? [] : "",
													!1
											  ));
						}
						l[Gn] = o;
					} catch (S) {
						b(e, e.return, S);
					}
			}
			break;
		case 6:
			if ((Ie(t, e), We(e), r & 4)) {
				if (e.stateNode === null) throw Error(k(162));
				(l = e.stateNode), (o = e.memoizedProps);
				try {
					l.nodeValue = o;
				} catch (S) {
					b(e, e.return, S);
				}
			}
			break;
		case 3:
			if (
				(Ie(t, e),
				We(e),
				r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					Wn(t.containerInfo);
				} catch (S) {
					b(e, e.return, S);
				}
			break;
		case 4:
			Ie(t, e), We(e);
			break;
		case 13:
			Ie(t, e),
				We(e),
				(l = e.child),
				l.flags & 8192 &&
					((o = l.memoizedState !== null),
					(l.stateNode.isHidden = o),
					!o ||
						(l.alternate !== null &&
							l.alternate.memoizedState !== null) ||
						(Pi = ee())),
				r & 4 && Iu(e);
			break;
		case 22:
			if (
				((m = n !== null && n.memoizedState !== null),
				e.mode & 1
					? ((de = (a = de) || m), Ie(t, e), (de = a))
					: Ie(t, e),
				We(e),
				r & 8192)
			) {
				if (
					((a = e.memoizedState !== null),
					(e.stateNode.isHidden = a) && !m && e.mode & 1)
				)
					for (z = e, m = e.child; m !== null; ) {
						for (h = z = m; z !== null; ) {
							switch (((p = z), (y = p.child), p.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									On(4, p, p.return);
									break;
								case 1:
									bt(p, p.return);
									var w = p.stateNode;
									if (
										typeof w.componentWillUnmount ==
										"function"
									) {
										(r = p), (n = p.return);
										try {
											(t = r),
												(w.props = t.memoizedProps),
												(w.state = t.memoizedState),
												w.componentWillUnmount();
										} catch (S) {
											b(r, n, S);
										}
									}
									break;
								case 5:
									bt(p, p.return);
									break;
								case 22:
									if (p.memoizedState !== null) {
										Bu(h);
										continue;
									}
							}
							y !== null ? ((y.return = p), (z = y)) : Bu(h);
						}
						m = m.sibling;
					}
				e: for (m = null, h = e; ; ) {
					if (h.tag === 5) {
						if (m === null) {
							m = h;
							try {
								(l = h.stateNode),
									a
										? ((o = l.style),
										  typeof o.setProperty == "function"
												? o.setProperty(
														"display",
														"none",
														"important"
												  )
												: (o.display = "none"))
										: ((u = h.stateNode),
										  (s = h.memoizedProps.style),
										  (i =
												s != null &&
												s.hasOwnProperty("display")
													? s.display
													: null),
										  (u.style.display = ys("display", i)));
							} catch (S) {
								b(e, e.return, S);
							}
						}
					} else if (h.tag === 6) {
						if (m === null)
							try {
								h.stateNode.nodeValue = a
									? ""
									: h.memoizedProps;
							} catch (S) {
								b(e, e.return, S);
							}
					} else if (
						((h.tag !== 22 && h.tag !== 23) ||
							h.memoizedState === null ||
							h === e) &&
						h.child !== null
					) {
						(h.child.return = h), (h = h.child);
						continue;
					}
					if (h === e) break e;
					for (; h.sibling === null; ) {
						if (h.return === null || h.return === e) break e;
						m === h && (m = null), (h = h.return);
					}
					m === h && (m = null),
						(h.sibling.return = h.return),
						(h = h.sibling);
				}
			}
			break;
		case 19:
			Ie(t, e), We(e), r & 4 && Iu(e);
			break;
		case 21:
			break;
		default:
			Ie(t, e), We(e);
	}
}
function We(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Ha(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(k(160));
			}
			switch (r.tag) {
				case 5:
					var l = r.stateNode;
					r.flags & 32 && (Un(l, ""), (r.flags &= -33));
					var o = Ou(e);
					Fo(e, o, l);
					break;
				case 3:
				case 4:
					var i = r.stateNode.containerInfo,
						u = Ou(e);
					Io(e, u, i);
					break;
				default:
					throw Error(k(161));
			}
		} catch (s) {
			b(e, e.return, s);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function _d(e, t, n) {
	(z = e), Ka(e);
}
function Ka(e, t, n) {
	for (var r = (e.mode & 1) !== 0; z !== null; ) {
		var l = z,
			o = l.child;
		if (l.tag === 22 && r) {
			var i = l.memoizedState !== null || xr;
			if (!i) {
				var u = l.alternate,
					s = (u !== null && u.memoizedState !== null) || de;
				u = xr;
				var a = de;
				if (((xr = i), (de = s) && !a))
					for (z = l; z !== null; )
						(i = z),
							(s = i.child),
							i.tag === 22 && i.memoizedState !== null
								? Uu(l)
								: s !== null
								? ((s.return = i), (z = s))
								: Uu(l);
				for (; o !== null; ) (z = o), Ka(o), (o = o.sibling);
				(z = l), (xr = u), (de = a);
			}
			Fu(e);
		} else
			l.subtreeFlags & 8772 && o !== null
				? ((o.return = l), (z = o))
				: Fu(e);
	}
}
function Fu(e) {
	for (; z !== null; ) {
		var t = z;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							de || vl(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !de)
								if (n === null) r.componentDidMount();
								else {
									var l =
										t.elementType === t.type
											? n.memoizedProps
											: Fe(t.type, n.memoizedProps);
									r.componentDidUpdate(
										l,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && xu(t, o, r);
							break;
						case 3:
							var i = t.updateQueue;
							if (i !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								xu(t, i, n);
							}
							break;
						case 5:
							var u = t.stateNode;
							if (n === null && t.flags & 4) {
								n = u;
								var s = t.memoizedProps;
								switch (t.type) {
									case "button":
									case "input":
									case "select":
									case "textarea":
										s.autoFocus && n.focus();
										break;
									case "img":
										s.src && (n.src = s.src);
								}
							}
							break;
						case 6:
							break;
						case 4:
							break;
						case 12:
							break;
						case 13:
							if (t.memoizedState === null) {
								var a = t.alternate;
								if (a !== null) {
									var m = a.memoizedState;
									if (m !== null) {
										var h = m.dehydrated;
										h !== null && Wn(h);
									}
								}
							}
							break;
						case 19:
						case 17:
						case 21:
						case 22:
						case 23:
						case 25:
							break;
						default:
							throw Error(k(163));
					}
				de || (t.flags & 512 && Oo(t));
			} catch (p) {
				b(t, t.return, p);
			}
		}
		if (t === e) {
			z = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (z = n);
			break;
		}
		z = t.return;
	}
}
function Bu(e) {
	for (; z !== null; ) {
		var t = z;
		if (t === e) {
			z = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (z = n);
			break;
		}
		z = t.return;
	}
}
function Uu(e) {
	for (; z !== null; ) {
		var t = z;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						vl(4, t);
					} catch (s) {
						b(t, n, s);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == "function") {
						var l = t.return;
						try {
							r.componentDidMount();
						} catch (s) {
							b(t, l, s);
						}
					}
					var o = t.return;
					try {
						Oo(t);
					} catch (s) {
						b(t, o, s);
					}
					break;
				case 5:
					var i = t.return;
					try {
						Oo(t);
					} catch (s) {
						b(t, i, s);
					}
			}
		} catch (s) {
			b(t, t.return, s);
		}
		if (t === e) {
			z = null;
			break;
		}
		var u = t.sibling;
		if (u !== null) {
			(u.return = t.return), (z = u);
			break;
		}
		z = t.return;
	}
}
var jd = Math.ceil,
	nl = ot.ReactCurrentDispatcher,
	_i = ot.ReactCurrentOwner,
	De = ot.ReactCurrentBatchConfig,
	I = 0,
	ie = null,
	ne = null,
	se = 0,
	Ee = 0,
	en = Ct(0),
	le = 0,
	tr = null,
	Ft = 0,
	yl = 0,
	ji = 0,
	In = null,
	we = null,
	Pi = 0,
	mn = 1 / 0,
	Ze = null,
	rl = !1,
	Bo = null,
	wt = null,
	Nr = !1,
	pt = null,
	ll = 0,
	Fn = 0,
	Uo = null,
	Dr = -1,
	$r = 0;
function he() {
	return I & 6 ? ee() : Dr !== -1 ? Dr : (Dr = ee());
}
function St(e) {
	return e.mode & 1
		? I & 2 && se !== 0
			? se & -se
			: cd.transition !== null
			? ($r === 0 && ($r = Rs()), $r)
			: ((e = U),
			  e !== 0 ||
					((e = window.event), (e = e === void 0 ? 16 : Is(e.type))),
			  e)
		: 1;
}
function Ve(e, t, n, r) {
	if (50 < Fn) throw ((Fn = 0), (Uo = null), Error(k(185)));
	rr(e, n, r),
		(!(I & 2) || e !== ie) &&
			(e === ie && (!(I & 2) && (yl |= n), le === 4 && ft(e, se)),
			Ne(e, r),
			n === 1 &&
				I === 0 &&
				!(t.mode & 1) &&
				((mn = ee() + 500), pl && _t()));
}
function Ne(e, t) {
	var n = e.callbackNode;
	cf(e, t);
	var r = Ar(e, e === ie ? se : 0);
	if (r === 0)
		n !== null && Gi(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Gi(n), t === 1))
			e.tag === 0 ? ad(Au.bind(null, e)) : na(Au.bind(null, e)),
				od(function () {
					!(I & 6) && _t();
				}),
				(n = null);
		else {
			switch (Ts(r)) {
				case 1:
					n = ei;
					break;
				case 4:
					n = Ps;
					break;
				case 16:
					n = Ur;
					break;
				case 536870912:
					n = zs;
					break;
				default:
					n = Ur;
			}
			n = ec(n, Ya.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Ya(e, t) {
	if (((Dr = -1), ($r = 0), I & 6)) throw Error(k(327));
	var n = e.callbackNode;
	if (un() && e.callbackNode !== n) return null;
	var r = Ar(e, e === ie ? se : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
	else {
		t = r;
		var l = I;
		I |= 2;
		var o = Ga();
		(ie !== e || se !== t) && ((Ze = null), (mn = ee() + 500), Lt(e, t));
		do
			try {
				Rd();
				break;
			} catch (u) {
				Xa(e, u);
			}
		while (!0);
		pi(),
			(nl.current = o),
			(I = l),
			ne !== null ? (t = 0) : ((ie = null), (se = 0), (t = le));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Ao(e, l)))),
			t === 1)
		)
			throw ((n = tr), Lt(e, 0), ft(e, r), Ne(e, ee()), n);
		if (t === 6) ft(e, r);
		else {
			if (
				((l = e.current.alternate),
				!(r & 30) &&
					!Pd(l) &&
					((t = ol(e, r)),
					t === 2 &&
						((o = po(e)), o !== 0 && ((r = o), (t = Ao(e, o)))),
					t === 1))
			)
				throw ((n = tr), Lt(e, 0), ft(e, r), Ne(e, ee()), n);
			switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(k(345));
				case 2:
					zt(e, we, Ze);
					break;
				case 3:
					if (
						(ft(e, r),
						(r & 130023424) === r &&
							((t = Pi + 500 - ee()), 10 < t))
					) {
						if (Ar(e, 0) !== 0) break;
						if (((l = e.suspendedLanes), (l & r) !== r)) {
							he(), (e.pingedLanes |= e.suspendedLanes & l);
							break;
						}
						e.timeoutHandle = ko(zt.bind(null, e, we, Ze), t);
						break;
					}
					zt(e, we, Ze);
					break;
				case 4:
					if ((ft(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, l = -1; 0 < r; ) {
						var i = 31 - Ae(r);
						(o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
					}
					if (
						((r = l),
						(r = ee() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * jd(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = ko(zt.bind(null, e, we, Ze), r);
						break;
					}
					zt(e, we, Ze);
					break;
				case 5:
					zt(e, we, Ze);
					break;
				default:
					throw Error(k(329));
			}
		}
	}
	return Ne(e, ee()), e.callbackNode === n ? Ya.bind(null, e) : null;
}
function Ao(e, t) {
	var n = In;
	return (
		e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
		(e = ol(e, t)),
		e !== 2 && ((t = we), (we = n), t !== null && Vo(t)),
		e
	);
}
function Vo(e) {
	we === null ? (we = e) : we.push.apply(we, e);
}
function Pd(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var l = n[r],
						o = l.getSnapshot;
					l = l.value;
					try {
						if (!He(o(), l)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function ft(e, t) {
	for (
		t &= ~ji,
			t &= ~yl,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ae(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function Au(e) {
	if (I & 6) throw Error(k(327));
	un();
	var t = Ar(e, 0);
	if (!(t & 1)) return Ne(e, ee()), null;
	var n = ol(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = po(e);
		r !== 0 && ((t = r), (n = Ao(e, r)));
	}
	if (n === 1) throw ((n = tr), Lt(e, 0), ft(e, t), Ne(e, ee()), n);
	if (n === 6) throw Error(k(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		zt(e, we, Ze),
		Ne(e, ee()),
		null
	);
}
function zi(e, t) {
	var n = I;
	I |= 1;
	try {
		return e(t);
	} finally {
		(I = n), I === 0 && ((mn = ee() + 500), pl && _t());
	}
}
function Bt(e) {
	pt !== null && pt.tag === 0 && !(I & 6) && un();
	var t = I;
	I |= 1;
	var n = De.transition,
		r = U;
	try {
		if (((De.transition = null), (U = 1), e)) return e();
	} finally {
		(U = r), (De.transition = n), (I = t), !(I & 6) && _t();
	}
}
function Ri() {
	(Ee = en.current), K(en);
}
function Lt(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), ld(n)), ne !== null))
		for (n = ne.return; n !== null; ) {
			var r = n;
			switch ((ci(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Kr();
					break;
				case 3:
					dn(), K(ke), K(pe), wi();
					break;
				case 5:
					gi(r);
					break;
				case 4:
					dn();
					break;
				case 13:
					K(Z);
					break;
				case 19:
					K(Z);
					break;
				case 10:
					mi(r.type._context);
					break;
				case 22:
				case 23:
					Ri();
			}
			n = n.return;
		}
	if (
		((ie = e),
		(ne = e = kt(e.current, null)),
		(se = Ee = t),
		(le = 0),
		(tr = null),
		(ji = yl = Ft = 0),
		(we = In = null),
		Tt !== null)
	) {
		for (t = 0; t < Tt.length; t++)
			if (((n = Tt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var l = r.next,
					o = n.pending;
				if (o !== null) {
					var i = o.next;
					(o.next = l), (r.next = i);
				}
				n.pending = r;
			}
		Tt = null;
	}
	return e;
}
function Xa(e, t) {
	do {
		var n = ne;
		try {
			if ((pi(), (Tr.current = tl), el)) {
				for (var r = J.memoizedState; r !== null; ) {
					var l = r.queue;
					l !== null && (l.pending = null), (r = r.next);
				}
				el = !1;
			}
			if (
				((It = 0),
				(oe = re = J = null),
				($n = !1),
				(qn = 0),
				(_i.current = null),
				n === null || n.return === null)
			) {
				(le = 1), (tr = t), (ne = null);
				break;
			}
			e: {
				var o = e,
					i = n.return,
					u = n,
					s = t;
				if (
					((t = se),
					(u.flags |= 32768),
					s !== null &&
						typeof s == "object" &&
						typeof s.then == "function")
				) {
					var a = s,
						m = u,
						h = m.tag;
					if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
						var p = m.alternate;
						p
							? ((m.updateQueue = p.updateQueue),
							  (m.memoizedState = p.memoizedState),
							  (m.lanes = p.lanes))
							: ((m.updateQueue = null),
							  (m.memoizedState = null));
					}
					var y = Pu(i);
					if (y !== null) {
						(y.flags &= -257),
							zu(y, i, u, o, t),
							y.mode & 1 && ju(o, a, t),
							(t = y),
							(s = a);
						var w = t.updateQueue;
						if (w === null) {
							var S = new Set();
							S.add(s), (t.updateQueue = S);
						} else w.add(s);
						break e;
					} else {
						if (!(t & 1)) {
							ju(o, a, t), Ti();
							break e;
						}
						s = Error(k(426));
					}
				} else if (G && u.mode & 1) {
					var T = Pu(i);
					if (T !== null) {
						!(T.flags & 65536) && (T.flags |= 256),
							zu(T, i, u, o, t),
							fi(pn(s, u));
						break e;
					}
				}
				(o = s = pn(s, u)),
					le !== 4 && (le = 2),
					In === null ? (In = [o]) : In.push(o),
					(o = i);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var f = Ta(o, s, t);
							ku(o, f);
							break e;
						case 1:
							u = s;
							var c = o.type,
								d = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof c.getDerivedStateFromError ==
									"function" ||
									(d !== null &&
										typeof d.componentDidCatch ==
											"function" &&
										(wt === null || !wt.has(d))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var g = Ma(o, u, t);
								ku(o, g);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Ja(n);
		} catch (x) {
			(t = x), ne === n && n !== null && (ne = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function Ga() {
	var e = nl.current;
	return (nl.current = tl), e === null ? tl : e;
}
function Ti() {
	(le === 0 || le === 3 || le === 2) && (le = 4),
		ie === null || (!(Ft & 268435455) && !(yl & 268435455)) || ft(ie, se);
}
function ol(e, t) {
	var n = I;
	I |= 2;
	var r = Ga();
	(ie !== e || se !== t) && ((Ze = null), Lt(e, t));
	do
		try {
			zd();
			break;
		} catch (l) {
			Xa(e, l);
		}
	while (!0);
	if ((pi(), (I = n), (nl.current = r), ne !== null)) throw Error(k(261));
	return (ie = null), (se = 0), le;
}
function zd() {
	for (; ne !== null; ) Za(ne);
}
function Rd() {
	for (; ne !== null && !ef(); ) Za(ne);
}
function Za(e) {
	var t = ba(e.alternate, e, Ee);
	(e.memoizedProps = e.pendingProps),
		t === null ? Ja(e) : (ne = t),
		(_i.current = null);
}
function Ja(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = Nd(n, t)), n !== null)) {
				(n.flags &= 32767), (ne = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(le = 6), (ne = null);
				return;
			}
		} else if (((n = xd(n, t, Ee)), n !== null)) {
			ne = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			ne = t;
			return;
		}
		ne = t = e;
	} while (t !== null);
	le === 0 && (le = 5);
}
function zt(e, t, n) {
	var r = U,
		l = De.transition;
	try {
		(De.transition = null), (U = 1), Td(e, t, n, r);
	} finally {
		(De.transition = l), (U = r);
	}
	return null;
}
function Td(e, t, n, r) {
	do un();
	while (pt !== null);
	if (I & 6) throw Error(k(327));
	n = e.finishedWork;
	var l = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(k(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(ff(e, o),
		e === ie && ((ne = ie = null), (se = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			Nr ||
			((Nr = !0),
			ec(Ur, function () {
				return un(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = De.transition), (De.transition = null);
		var i = U;
		U = 1;
		var u = I;
		(I |= 4),
			(_i.current = null),
			Cd(e, n),
			Qa(n, e),
			Jf(wo),
			(Vr = !!go),
			(wo = go = null),
			(e.current = n),
			_d(n),
			tf(),
			(I = u),
			(U = i),
			(De.transition = o);
	} else e.current = n;
	if (
		(Nr && ((Nr = !1), (pt = e), (ll = l)),
		(o = e.pendingLanes),
		o === 0 && (wt = null),
		lf(n.stateNode),
		Ne(e, ee()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(l = t[n]),
				r(l.value, { componentStack: l.stack, digest: l.digest });
	if (rl) throw ((rl = !1), (e = Bo), (Bo = null), e);
	return (
		ll & 1 && e.tag !== 0 && un(),
		(o = e.pendingLanes),
		o & 1 ? (e === Uo ? Fn++ : ((Fn = 0), (Uo = e))) : (Fn = 0),
		_t(),
		null
	);
}
function un() {
	if (pt !== null) {
		var e = Ts(ll),
			t = De.transition,
			n = U;
		try {
			if (((De.transition = null), (U = 16 > e ? 16 : e), pt === null))
				var r = !1;
			else {
				if (((e = pt), (pt = null), (ll = 0), I & 6))
					throw Error(k(331));
				var l = I;
				for (I |= 4, z = e.current; z !== null; ) {
					var o = z,
						i = o.child;
					if (z.flags & 16) {
						var u = o.deletions;
						if (u !== null) {
							for (var s = 0; s < u.length; s++) {
								var a = u[s];
								for (z = a; z !== null; ) {
									var m = z;
									switch (m.tag) {
										case 0:
										case 11:
										case 15:
											On(8, m, o);
									}
									var h = m.child;
									if (h !== null) (h.return = m), (z = h);
									else
										for (; z !== null; ) {
											m = z;
											var p = m.sibling,
												y = m.return;
											if ((Va(m), m === a)) {
												z = null;
												break;
											}
											if (p !== null) {
												(p.return = y), (z = p);
												break;
											}
											z = y;
										}
								}
							}
							var w = o.alternate;
							if (w !== null) {
								var S = w.child;
								if (S !== null) {
									w.child = null;
									do {
										var T = S.sibling;
										(S.sibling = null), (S = T);
									} while (S !== null);
								}
							}
							z = o;
						}
					}
					if (o.subtreeFlags & 2064 && i !== null)
						(i.return = o), (z = i);
					else
						e: for (; z !== null; ) {
							if (((o = z), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										On(9, o, o.return);
								}
							var f = o.sibling;
							if (f !== null) {
								(f.return = o.return), (z = f);
								break e;
							}
							z = o.return;
						}
				}
				var c = e.current;
				for (z = c; z !== null; ) {
					i = z;
					var d = i.child;
					if (i.subtreeFlags & 2064 && d !== null)
						(d.return = i), (z = d);
					else
						e: for (i = c; z !== null; ) {
							if (((u = z), u.flags & 2048))
								try {
									switch (u.tag) {
										case 0:
										case 11:
										case 15:
											vl(9, u);
									}
								} catch (x) {
									b(u, u.return, x);
								}
							if (u === i) {
								z = null;
								break e;
							}
							var g = u.sibling;
							if (g !== null) {
								(g.return = u.return), (z = g);
								break e;
							}
							z = u.return;
						}
				}
				if (
					((I = l),
					_t(),
					Ye && typeof Ye.onPostCommitFiberRoot == "function")
				)
					try {
						Ye.onPostCommitFiberRoot(sl, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(U = n), (De.transition = t);
		}
	}
	return !1;
}
function Vu(e, t, n) {
	(t = pn(n, t)),
		(t = Ta(e, t, 1)),
		(e = gt(e, t, 1)),
		(t = he()),
		e !== null && (rr(e, 1, t), Ne(e, t));
}
function b(e, t, n) {
	if (e.tag === 3) Vu(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Vu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == "function" ||
					(typeof r.componentDidCatch == "function" &&
						(wt === null || !wt.has(r)))
				) {
					(e = pn(n, e)),
						(e = Ma(t, e, 1)),
						(t = gt(t, e, 1)),
						(e = he()),
						t !== null && (rr(t, 1, e), Ne(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function Md(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = he()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ie === e &&
			(se & n) === n &&
			(le === 4 ||
			(le === 3 && (se & 130023424) === se && 500 > ee() - Pi)
				? Lt(e, 0)
				: (ji |= n)),
		Ne(e, t);
}
function qa(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = pr), (pr <<= 1), !(pr & 130023424) && (pr = 4194304))
			: (t = 1));
	var n = he();
	(e = rt(e, t)), e !== null && (rr(e, t, n), Ne(e, n));
}
function Ld(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), qa(e, n);
}
function Dd(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				l = e.memoizedState;
			l !== null && (n = l.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(k(314));
	}
	r !== null && r.delete(t), qa(e, n);
}
var ba;
ba = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128))
				return (Se = !1), kd(e, t, n);
			Se = !!(e.flags & 131072);
		}
	else (Se = !1), G && t.flags & 1048576 && ra(t, Gr, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Lr(e, t), (e = t.pendingProps);
			var l = an(t, pe.current);
			on(t, n), (l = ki(null, t, r, e, l, n));
			var o = xi();
			return (
				(t.flags |= 1),
				typeof l == "object" &&
				l !== null &&
				typeof l.render == "function" &&
				l.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  xe(r) ? ((o = !0), Yr(t)) : (o = !1),
					  (t.memoizedState =
							l.state !== null && l.state !== void 0
								? l.state
								: null),
					  vi(t),
					  (l.updater = hl),
					  (t.stateNode = l),
					  (l._reactInternals = t),
					  Po(t, r, e, n),
					  (t = To(null, t, r, !0, o, n)))
					: ((t.tag = 0),
					  G && o && ai(t),
					  me(null, t, l, n),
					  (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Lr(e, t),
					(e = t.pendingProps),
					(l = r._init),
					(r = l(r._payload)),
					(t.type = r),
					(l = t.tag = Od(r)),
					(e = Fe(r, e)),
					l)
				) {
					case 0:
						t = Ro(null, t, r, e, n);
						break e;
					case 1:
						t = Mu(null, t, r, e, n);
						break e;
					case 11:
						t = Ru(null, t, r, e, n);
						break e;
					case 14:
						t = Tu(null, t, r, Fe(r.type, e), n);
						break e;
				}
				throw Error(k(306, r, ""));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Fe(r, l)),
				Ro(e, t, r, l, n)
			);
		case 1:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Fe(r, l)),
				Mu(e, t, r, l, n)
			);
		case 3:
			e: {
				if ((Oa(t), e === null)) throw Error(k(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(l = o.element),
					aa(e, t),
					qr(t, r, null, n);
				var i = t.memoizedState;
				if (((r = i.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: i.cache,
							pendingSuspenseBoundaries:
								i.pendingSuspenseBoundaries,
							transitions: i.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(l = pn(Error(k(423)), t)), (t = Lu(e, t, r, n, l));
						break e;
					} else if (r !== l) {
						(l = pn(Error(k(424)), t)), (t = Lu(e, t, r, n, l));
						break e;
					} else
						for (
							Ce = yt(t.stateNode.containerInfo.firstChild),
								_e = t,
								G = !0,
								Ue = null,
								n = ua(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if ((cn(), r === l)) {
						t = lt(e, t, n);
						break e;
					}
					me(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				ca(t),
				e === null && Co(t),
				(r = t.type),
				(l = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(i = l.children),
				So(r, l)
					? (i = null)
					: o !== null && So(r, o) && (t.flags |= 32),
				$a(e, t),
				me(e, t, i, n),
				t.child
			);
		case 6:
			return e === null && Co(t), null;
		case 13:
			return Ia(e, t, n);
		case 4:
			return (
				yi(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = fn(t, null, r, n)) : me(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Fe(r, l)),
				Ru(e, t, r, l, n)
			);
		case 7:
			return me(e, t, t.pendingProps, n), t.child;
		case 8:
			return me(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return me(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(l = t.pendingProps),
					(o = t.memoizedProps),
					(i = l.value),
					W(Zr, r._currentValue),
					(r._currentValue = i),
					o !== null)
				)
					if (He(o.value, i)) {
						if (o.children === l.children && !ke.current) {
							t = lt(e, t, n);
							break e;
						}
					} else
						for (
							o = t.child, o !== null && (o.return = t);
							o !== null;

						) {
							var u = o.dependencies;
							if (u !== null) {
								i = o.child;
								for (var s = u.firstContext; s !== null; ) {
									if (s.context === r) {
										if (o.tag === 1) {
											(s = et(-1, n & -n)), (s.tag = 2);
											var a = o.updateQueue;
											if (a !== null) {
												a = a.shared;
												var m = a.pending;
												m === null
													? (s.next = s)
													: ((s.next = m.next),
													  (m.next = s)),
													(a.pending = s);
											}
										}
										(o.lanes |= n),
											(s = o.alternate),
											s !== null && (s.lanes |= n),
											_o(o.return, n, t),
											(u.lanes |= n);
										break;
									}
									s = s.next;
								}
							} else if (o.tag === 10)
								i = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((i = o.return), i === null))
									throw Error(k(341));
								(i.lanes |= n),
									(u = i.alternate),
									u !== null && (u.lanes |= n),
									_o(i, n, t),
									(i = o.sibling);
							} else i = o.child;
							if (i !== null) i.return = o;
							else
								for (i = o; i !== null; ) {
									if (i === t) {
										i = null;
										break;
									}
									if (((o = i.sibling), o !== null)) {
										(o.return = i.return), (i = o);
										break;
									}
									i = i.return;
								}
							o = i;
						}
				me(e, t, l.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(l = t.type),
				(r = t.pendingProps.children),
				on(t, n),
				(l = $e(l)),
				(r = r(l)),
				(t.flags |= 1),
				me(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(l = Fe(r, t.pendingProps)),
				(l = Fe(r.type, l)),
				Tu(e, t, r, l, n)
			);
		case 15:
			return La(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(l = t.pendingProps),
				(l = t.elementType === r ? l : Fe(r, l)),
				Lr(e, t),
				(t.tag = 1),
				xe(r) ? ((e = !0), Yr(t)) : (e = !1),
				on(t, n),
				Ra(t, r, l),
				Po(t, r, l, n),
				To(null, t, r, !0, e, n)
			);
		case 19:
			return Fa(e, t, n);
		case 22:
			return Da(e, t, n);
	}
	throw Error(k(156, t.tag));
};
function ec(e, t) {
	return js(e, t);
}
function $d(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Le(e, t, n, r) {
	return new $d(e, t, n, r);
}
function Mi(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Od(e) {
	if (typeof e == "function") return Mi(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === Jo)) return 11;
		if (e === qo) return 14;
	}
	return 2;
}
function kt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Le(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null
				? null
				: { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Or(e, t, n, r, l, o) {
	var i = 2;
	if (((r = e), typeof e == "function")) Mi(e) && (i = 1);
	else if (typeof e == "string") i = 5;
	else
		e: switch (e) {
			case Wt:
				return Dt(n.children, l, o, t);
			case Zo:
				(i = 8), (l |= 8);
				break;
			case Jl:
				return (
					(e = Le(12, n, t, l | 2)),
					(e.elementType = Jl),
					(e.lanes = o),
					e
				);
			case ql:
				return (
					(e = Le(13, n, t, l)),
					(e.elementType = ql),
					(e.lanes = o),
					e
				);
			case bl:
				return (
					(e = Le(19, n, t, l)),
					(e.elementType = bl),
					(e.lanes = o),
					e
				);
			case cs:
				return gl(n, l, o, t);
			default:
				if (typeof e == "object" && e !== null)
					switch (e.$$typeof) {
						case ss:
							i = 10;
							break e;
						case as:
							i = 9;
							break e;
						case Jo:
							i = 11;
							break e;
						case qo:
							i = 14;
							break e;
						case st:
							(i = 16), (r = null);
							break e;
					}
				throw Error(k(130, e == null ? e : typeof e, ""));
		}
	return (
		(t = Le(i, n, t, l)),
		(t.elementType = e),
		(t.type = r),
		(t.lanes = o),
		t
	);
}
function Dt(e, t, n, r) {
	return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function gl(e, t, n, r) {
	return (
		(e = Le(22, e, r, t)),
		(e.elementType = cs),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function Yl(e, t, n) {
	return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
	return (
		(t = Le(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function Id(e, t, n, r, l) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Pl(0)),
		(this.expirationTimes = Pl(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Pl(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = l),
		(this.mutableSourceEagerHydrationData = null);
}
function Li(e, t, n, r, l, o, i, u, s) {
	return (
		(e = new Id(e, t, n, u, s)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Le(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		vi(o),
		e
	);
}
function Fd(e, t, n) {
	var r =
		3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: Ht,
		key: r == null ? null : "" + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function tc(e) {
	if (!e) return Nt;
	e = e._reactInternals;
	e: {
		if (At(e) !== e || e.tag !== 1) throw Error(k(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (xe(t.type)) {
						t =
							t.stateNode
								.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(k(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (xe(n)) return ta(e, n, t);
	}
	return t;
}
function nc(e, t, n, r, l, o, i, u, s) {
	return (
		(e = Li(n, r, !0, e, l, o, i, u, s)),
		(e.context = tc(null)),
		(n = e.current),
		(r = he()),
		(l = St(n)),
		(o = et(r, l)),
		(o.callback = t ?? null),
		gt(n, o, l),
		(e.current.lanes = l),
		rr(e, l, r),
		Ne(e, r),
		e
	);
}
function wl(e, t, n, r) {
	var l = t.current,
		o = he(),
		i = St(l);
	return (
		(n = tc(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = et(o, i)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = gt(l, t, i)),
		e !== null && (Ve(e, l, i, o), Rr(e, l, i)),
		i
	);
}
function il(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Hu(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Di(e, t) {
	Hu(e, t), (e = e.alternate) && Hu(e, t);
}
function Bd() {
	return null;
}
var rc =
	typeof reportError == "function"
		? reportError
		: function (e) {
				console.error(e);
		  };
function $i(e) {
	this._internalRoot = e;
}
Sl.prototype.render = $i.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(k(409));
	wl(e, t, null, null);
};
Sl.prototype.unmount = $i.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		Bt(function () {
			wl(null, e, null, null);
		}),
			(t[nt] = null);
	}
};
function Sl(e) {
	this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = Ds();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
		ct.splice(n, 0, e), n === 0 && Os(e);
	}
};
function Oi(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function kl(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 ||
				e.nodeValue !== " react-mount-point-unstable "))
	);
}
function Wu() {}
function Ud(e, t, n, r, l) {
	if (l) {
		if (typeof r == "function") {
			var o = r;
			r = function () {
				var a = il(i);
				o.call(a);
			};
		}
		var i = nc(t, r, e, 0, null, !1, !1, "", Wu);
		return (
			(e._reactRootContainer = i),
			(e[nt] = i.current),
			Yn(e.nodeType === 8 ? e.parentNode : e),
			Bt(),
			i
		);
	}
	for (; (l = e.lastChild); ) e.removeChild(l);
	if (typeof r == "function") {
		var u = r;
		r = function () {
			var a = il(s);
			u.call(a);
		};
	}
	var s = Li(e, 0, !1, null, null, !1, !1, "", Wu);
	return (
		(e._reactRootContainer = s),
		(e[nt] = s.current),
		Yn(e.nodeType === 8 ? e.parentNode : e),
		Bt(function () {
			wl(t, s, n, r);
		}),
		s
	);
}
function xl(e, t, n, r, l) {
	var o = n._reactRootContainer;
	if (o) {
		var i = o;
		if (typeof l == "function") {
			var u = l;
			l = function () {
				var s = il(i);
				u.call(s);
			};
		}
		wl(t, i, e, l);
	} else i = Ud(n, t, e, l, r);
	return il(i);
}
Ms = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = Pn(t.pendingLanes);
				n !== 0 &&
					(ti(t, n | 1),
					Ne(t, ee()),
					!(I & 6) && ((mn = ee() + 500), _t()));
			}
			break;
		case 13:
			Bt(function () {
				var r = rt(e, 1);
				if (r !== null) {
					var l = he();
					Ve(r, e, 1, l);
				}
			}),
				Di(e, 1);
	}
};
ni = function (e) {
	if (e.tag === 13) {
		var t = rt(e, 134217728);
		if (t !== null) {
			var n = he();
			Ve(t, e, 134217728, n);
		}
		Di(e, 134217728);
	}
};
Ls = function (e) {
	if (e.tag === 13) {
		var t = St(e),
			n = rt(e, t);
		if (n !== null) {
			var r = he();
			Ve(n, e, t, r);
		}
		Di(e, t);
	}
};
Ds = function () {
	return U;
};
$s = function (e, t) {
	var n = U;
	try {
		return (U = e), t();
	} finally {
		U = n;
	}
};
ao = function (e, t, n) {
	switch (t) {
		case "input":
			if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						"input[name=" +
							JSON.stringify("" + t) +
							'][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var l = dl(r);
						if (!l) throw Error(k(90));
						ds(r), no(r, l);
					}
				}
			}
			break;
		case "textarea":
			ms(e, n);
			break;
		case "select":
			(t = n.value), t != null && tn(e, !!n.multiple, t, !1);
	}
};
ks = zi;
xs = Bt;
var Ad = { usingClientEntryPoint: !1, Events: [or, Xt, dl, ws, Ss, zi] },
	Cn = {
		findFiberByHostInstance: Rt,
		bundleType: 0,
		version: "18.3.1",
		rendererPackageName: "react-dom",
	},
	Vd = {
		bundleType: Cn.bundleType,
		version: Cn.version,
		rendererPackageName: Cn.rendererPackageName,
		rendererConfig: Cn.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: ot.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Cs(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: Cn.findFiberByHostInstance || Bd,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
	var Er = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Er.isDisabled && Er.supportsFiber)
		try {
			(sl = Er.inject(Vd)), (Ye = Er);
		} catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
Pe.createPortal = function (e, t) {
	var n =
		2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Oi(t)) throw Error(k(200));
	return Fd(e, t, null, n);
};
Pe.createRoot = function (e, t) {
	if (!Oi(e)) throw Error(k(299));
	var n = !1,
		r = "",
		l = rc;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
		(t = Li(e, 1, !1, null, null, n, !1, r, l)),
		(e[nt] = t.current),
		Yn(e.nodeType === 8 ? e.parentNode : e),
		new $i(t)
	);
};
Pe.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == "function"
			? Error(k(188))
			: ((e = Object.keys(e).join(",")), Error(k(268, e)));
	return (e = Cs(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
	return Bt(e);
};
Pe.hydrate = function (e, t, n) {
	if (!kl(t)) throw Error(k(200));
	return xl(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
	if (!Oi(e)) throw Error(k(405));
	var r = (n != null && n.hydratedSources) || null,
		l = !1,
		o = "",
		i = rc;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (l = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
		(t = nc(t, null, e, 1, n ?? null, l, !1, o, i)),
		(e[nt] = t.current),
		Yn(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(l = n._getVersion),
				(l = l(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, l])
					: t.mutableSourceEagerHydrationData.push(n, l);
	return new Sl(t);
};
Pe.render = function (e, t, n) {
	if (!kl(t)) throw Error(k(200));
	return xl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
	if (!kl(e)) throw Error(k(40));
	return e._reactRootContainer
		? (Bt(function () {
				xl(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[nt] = null);
				});
		  }),
		  !0)
		: !1;
};
Pe.unstable_batchedUpdates = zi;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!kl(n)) throw Error(k(200));
	if (e == null || e._reactInternals === void 0) throw Error(k(38));
	return xl(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function lc() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
		} catch (e) {
			console.error(e);
		}
}
lc(), (ls.exports = Pe);
var Hd = ls.exports,
	Qu = Hd;
(Gl.createRoot = Qu.createRoot), (Gl.hydrateRoot = Qu.hydrateRoot);
const oc = {
	"bussiness-data": {
		name: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		cp: "",
		country: "",
		"primary-color": "rgba(23, 162, 184, 1)",
		"secondary-color": "rgba(57, 192, 237,.2)",
		logo: "",
	},
	"bot-data": {
		name: "Sherlock",
		"bot-img": "img/chatbot.png",
		"welcome-message":
			"Hola, soy tu asistente virtual, ¿en qué puedo ayudarte?",
		context: "",
		role: "",
		information: "",
	},
	"user-data": { "user-img": "" },
};
function ic(e) {
	var t,
		n,
		r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object")
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++)
				e[t] && (n = ic(e[t])) && (r && (r += " "), (r += n));
		else for (t in e) e[t] && (r && (r += " "), (r += t));
	return r;
}
function R() {
	for (var e = 0, t, n, r = ""; e < arguments.length; )
		(t = arguments[e++]) && (n = ic(t)) && (r && (r += " "), (r += n));
	return r;
}
(function () {
	try {
		if (typeof document < "u") {
			var e = document.createElement("style");
			e.appendChild(document.createTextNode("")),
				document.head.appendChild(e);
		}
	} catch (t) {
		console.error("vite-plugin-css-injected-by-js", t);
	}
})();
const uc = L.forwardRef(
	(
		{
			breakpoint: e,
			fluid: t,
			children: n,
			className: r,
			tag: l = "div",
			...o
		},
		i
	) => {
		const u = R(
			`${t ? "container-fluid" : `container${e ? "-" + e : ""}`}`,
			r
		);
		return v.jsx(l, { className: u, ...o, ref: i, children: n });
	}
);
uc.displayName = "MDBContainer";
const sc = L.forwardRef(
	(
		{
			center: e,
			children: t,
			className: n,
			end: r,
			lg: l,
			md: o,
			offsetLg: i,
			offsetMd: u,
			offsetSm: s,
			order: a,
			size: m,
			sm: h,
			start: p,
			tag: y = "div",
			xl: w,
			xxl: S,
			xs: T,
			...f
		},
		c
	) => {
		const d = R(
			m && `col-${m}`,
			T && `col-xs-${T}`,
			h && `col-sm-${h}`,
			o && `col-md-${o}`,
			l && `col-lg-${l}`,
			w && `col-xl-${w}`,
			S && `col-xxl-${S}`,
			!m && !T && !h && !o && !l && !w && !S ? "col" : "",
			a && `order-${a}`,
			p && "align-self-start",
			e && "align-self-center",
			r && "align-self-end",
			s && `offset-sm-${s}`,
			u && `offset-md-${u}`,
			i && `offset-lg-${i}`,
			n
		);
		return v.jsx(y, { className: d, ref: c, ...f, children: t });
	}
);
sc.displayName = "MDBCol";
const Wd = L.forwardRef(
	(
		{
			className: e,
			color: t = "primary",
			pill: n,
			light: r,
			dot: l,
			tag: o = "span",
			children: i,
			notification: u,
			...s
		},
		a
	) => {
		const m = R(
			"badge",
			r ? t && `badge-${t}` : t && `bg-${t}`,
			l && "badge-dot",
			n && "rounded-pill",
			u && "badge-notification",
			e
		);
		return v.jsx(o, { className: m, ref: a, ...s, children: i });
	}
);
Wd.displayName = "MDBBadge";
const Qd = ({ ...e }) => {
		const [t, n] = _.useState(!1),
			r = R("ripple-wave", t && "active");
		return (
			_.useEffect(() => {
				const l = setTimeout(() => {
					n(!0);
				}, 50);
				return () => {
					clearTimeout(l);
				};
			}, []),
			v.jsx("div", { className: r, ...e })
		);
	},
	Kd = (...e) => {
		const t = L.useRef();
		return (
			L.useEffect(() => {
				e.forEach((n) => {
					n &&
						(typeof n == "function"
							? n(t.current)
							: (n.current = t.current));
				});
			}, [e]),
			t
		);
	},
	ac = L.forwardRef(
		(
			{
				className: e,
				rippleTag: t = "div",
				rippleCentered: n,
				rippleDuration: r = 500,
				rippleUnbound: l,
				rippleRadius: o = 0,
				rippleColor: i = "dark",
				children: u,
				onMouseDown: s,
				...a
			},
			m
		) => {
			const h = _.useRef(null),
				p = Kd(m, h),
				y =
					"rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",
				w = [0, 0, 0],
				S = [
					"primary",
					"secondary",
					"success",
					"danger",
					"warning",
					"info",
					"light",
					"dark",
				],
				[T, f] = _.useState([]),
				[c, d] = _.useState(!1),
				g = R(
					"ripple",
					"ripple-surface",
					l && "ripple-surface-unbound",
					c && `ripple-surface-${i}`,
					e
				),
				x = () => {
					if (
						S.find(
							(P) => P === (i == null ? void 0 : i.toLowerCase())
						)
					)
						return d(!0);
					{
						const P = N(i).join(",");
						return `radial-gradient(circle, ${y
							.split("{{color}}")
							.join(`${P}`)})`;
					}
				},
				N = (P) => {
					const F = (O) => (
							O.length < 7 &&
								(O = `#${O[1]}${O[1]}${O[2]}${O[2]}${O[3]}${O[3]}`),
							[
								parseInt(O.substr(1, 2), 16),
								parseInt(O.substr(3, 2), 16),
								parseInt(O.substr(5, 2), 16),
							]
						),
						V = (O) => {
							const H = document.body.appendChild(
									document.createElement("fictum")
								),
								te = "rgb(1, 2, 3)";
							return (
								(H.style.color = te),
								H.style.color !== te ||
								((H.style.color = O),
								H.style.color === te || H.style.color === "")
									? w
									: ((O = getComputedStyle(H).color),
									  document.body.removeChild(H),
									  O)
							);
						},
						Y = (O) => (
							(O = O.match(/[.\d]+/g).map((H) => +Number(H))),
							(O.length = 3),
							O
						);
					return P.toLowerCase() === "transparent"
						? w
						: P[0] === "#"
						? F(P)
						: (P.indexOf("rgb") === -1 && (P = V(P)),
						  P.indexOf("rgb") === 0 ? Y(P) : w);
				},
				C = (P) => {
					const { offsetX: F, offsetY: V, height: Y, width: O } = P,
						H = V <= Y / 2,
						te = F <= O / 2,
						ge = (X, it) => Math.sqrt(X ** 2 + it ** 2),
						E = V === Y / 2 && F === O / 2,
						D = {
							first: H === !0 && te === !1,
							second: H === !0 && te === !0,
							third: H === !1 && te === !0,
							fourth: H === !1 && te === !1,
						},
						M = {
							topLeft: ge(F, V),
							topRight: ge(O - F, V),
							bottomLeft: ge(F, Y - V),
							bottomRight: ge(O - F, Y - V),
						};
					let B = 0;
					return (
						E || D.fourth
							? (B = M.topLeft)
							: D.third
							? (B = M.topRight)
							: D.second
							? (B = M.bottomRight)
							: D.first && (B = M.bottomLeft),
						B * 2
					);
				},
				j = (P) => {
					var F;
					const V =
							(F = p.current) == null
								? void 0
								: F.getBoundingClientRect(),
						Y = P.clientX - V.left,
						O = P.clientY - V.top,
						H = V.height,
						te = V.width,
						ge = {
							offsetX: n ? H / 2 : Y,
							offsetY: n ? te / 2 : O,
							height: H,
							width: te,
						},
						E = { delay: r && r * 0.5, duration: r && r - r * 0.5 },
						D = C(ge),
						M = o || D / 2,
						B = {
							left: n ? `${te / 2 - M}px` : `${Y - M}px`,
							top: n ? `${H / 2 - M}px` : `${O - M}px`,
							height: o ? `${o * 2}px` : `${D}px`,
							width: o ? `${o * 2}px` : `${D}px`,
							transitionDelay: `0s, ${E.delay}ms`,
							transitionDuration: `${r}ms, ${E.duration}ms`,
						};
					return c ? B : { ...B, backgroundImage: `${x()}` };
				},
				A = (P) => {
					const F = j(P),
						V = T.concat(F);
					f(V), s && s(P);
				};
			return (
				_.useEffect(() => {
					const P = setTimeout(() => {
						T.length > 0 && f(T.splice(1, T.length - 1));
					}, r);
					return () => {
						clearTimeout(P);
					};
				}, [r, T]),
				v.jsxs(t, {
					className: g,
					onMouseDown: (P) => A(P),
					ref: p,
					...a,
					children: [u, T.map((P, F) => v.jsx(Qd, { style: P }, F))],
				})
			);
		}
	);
ac.displayName = "MDBRipple";
const Yd = L.forwardRef(
	(
		{
			className: e,
			color: t = "primary",
			outline: n,
			children: r,
			rounded: l,
			disabled: o,
			floating: i,
			size: u,
			href: s,
			block: a,
			active: m,
			toggle: h,
			noRipple: p,
			tag: y = "button",
			role: w = "button",
			...S
		},
		T
	) => {
		const [f, c] = _.useState(m || !1);
		let d;
		const g = (t && ["light", "link"].includes(t)) || n ? "dark" : "light";
		t !== "none"
			? n
				? t
					? (d = `btn-outline-${t}`)
					: (d = "btn-outline-primary")
				: t
				? (d = `btn-${t}`)
				: (d = "btn-primary")
			: (d = "");
		const x = R(
			t !== "none" && "btn",
			d,
			l && "btn-rounded",
			i && "btn-floating",
			u && `btn-${u}`,
			`${(s || y !== "button") && o ? "disabled" : ""}`,
			a && "btn-block",
			f && "active",
			e
		);
		return (
			s && y !== "a" && (y = "a"),
			["hr", "img", "input"].includes(y) || p
				? v.jsx(y, {
						className: x,
						onClick: h
							? () => {
									c(!f);
							  }
							: void 0,
						disabled: o && y === "button" ? !0 : void 0,
						href: s,
						ref: T,
						role: w,
						...S,
						children: r,
				  })
				: v.jsx(ac, {
						rippleTag: y,
						rippleColor: g,
						className: x,
						onClick: h
							? () => {
									c(!f);
							  }
							: void 0,
						disabled: o && y === "button" ? !0 : void 0,
						href: s,
						ref: T,
						role: w,
						...S,
						children: r,
				  })
		);
	}
);
Yd.displayName = "MDBBtn";
const Xd = L.forwardRef(
	(
		{
			className: e,
			children: t,
			shadow: n,
			toolbar: r,
			size: l,
			vertical: o,
			tag: i = "div",
			role: u = "group",
			...s
		},
		a
	) => {
		let m;
		r
			? (m = "btn-toolbar")
			: o
			? (m = "btn-group-vertical")
			: (m = "btn-group");
		const h = R(m, n && `shadow-${n}`, l && `btn-group-${l}`, e);
		return v.jsx(i, { className: h, ref: a, role: u, ...s, children: t });
	}
);
Xd.displayName = "MDBBtnGroup";
const Gd = L.forwardRef(
	(
		{
			className: e,
			children: t,
			tag: n = "div",
			color: r,
			grow: l,
			size: o,
			...i
		},
		u
	) => {
		const s = R(
			`${l ? "spinner-grow" : "spinner-border"}`,
			r && `text-${r}`,
			`${o ? (l ? "spinner-grow-" + o : "spinner-border-" + o) : ""}`,
			e
		);
		return v.jsx(n, { className: s, ref: u, ...i, children: t });
	}
);
Gd.displayName = "MDBSpinner";
const cc = L.forwardRef(
	(
		{
			className: e,
			children: t,
			border: n,
			background: r,
			tag: l = "div",
			shadow: o,
			alignment: i,
			...u
		},
		s
	) => {
		const a = R(
			"card",
			n && `border border-${n}`,
			r && `bg-${r}`,
			o && `shadow-${o}`,
			i && `text-${i}`,
			e
		);
		return v.jsx(l, { className: a, ref: s, ...u, children: t });
	}
);
cc.displayName = "MDBCard";
const fc = L.forwardRef(
	(
		{
			className: e,
			children: t,
			border: n,
			background: r,
			tag: l = "div",
			...o
		},
		i
	) => {
		const u = R("card-header", n && `border-${n}`, r && `bg-${r}`, e);
		return v.jsx(l, { className: u, ...o, ref: i, children: t });
	}
);
fc.displayName = "MDBCardHeader";
const Zd = L.forwardRef(
	({ className: e, children: t, tag: n = "p", ...r }, l) => {
		const o = R("card-subtitle", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
Zd.displayName = "MDBCardSubTitle";
const Jd = L.forwardRef(
	({ className: e, children: t, tag: n = "h5", ...r }, l) => {
		const o = R("card-title", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
Jd.displayName = "MDBCardTitle";
const qd = L.forwardRef(
	({ className: e, children: t, tag: n = "p", ...r }, l) => {
		const o = R("card-text", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
qd.displayName = "MDBCardText";
const dc = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("card-body", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
dc.displayName = "MDBCardBody";
const bd = L.forwardRef(
	(
		{
			className: e,
			children: t,
			border: n,
			background: r,
			tag: l = "div",
			...o
		},
		i
	) => {
		const u = R("card-footer", n && `border-${n}`, r && `bg-${r}`, e);
		return v.jsx(l, { className: u, ...o, ref: i, children: t });
	}
);
bd.displayName = "MDBCardFooter";
const ep = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("card-img-overlay", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
ep.displayName = "MDBCardOverlay";
const tp = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("card-group", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
tp.displayName = "MDBCardGroup";
const np = L.forwardRef(
	(
		{
			className: e,
			tag: t = "ul",
			horizontal: n,
			horizontalSize: r,
			light: l,
			numbered: o,
			children: i,
			small: u,
			...s
		},
		a
	) => {
		const m = R(
			"list-group",
			n && (r ? `list-group-horizontal-${r}` : "list-group-horizontal"),
			l && "list-group-light",
			o && "list-group-numbered",
			u && "list-group-small",
			e
		);
		return v.jsx(t, { className: m, ref: a, ...s, children: i });
	}
);
np.displayName = "MDBListGroup";
const rp = L.forwardRef(
	(
		{
			className: e,
			tag: t = "li",
			active: n,
			disabled: r,
			action: l,
			color: o,
			children: i,
			noBorders: u,
			...s
		},
		a
	) => {
		const m = t === "button",
			h = R(
				"list-group-item",
				n && "active",
				r && !m && "disabled",
				l && "list-group-item-action",
				o && `list-group-item-${o}`,
				u && "border-0",
				e
			);
		return v.jsx(t, {
			className: h,
			disabled: m && r,
			ref: a,
			...s,
			children: i,
		});
	}
);
rp.displayName = "MDBListGroupItem";
const pc = L.forwardRef(
	(
		{
			around: e,
			between: t,
			bottom: n,
			center: r,
			children: l,
			className: o,
			evenly: i,
			end: u,
			middle: s,
			start: a,
			tag: m = "div",
			top: h,
			...p
		},
		y
	) => {
		const w = R(
			"row",
			e && "justify-content-around",
			t && "justify-content-between",
			n && "align-self-end",
			r && "justify-content-center",
			i && "justifty-content-evenly",
			u && "justify-content-end",
			s && "align-self-center",
			a && "justify-content-start",
			h && "align-self-start",
			o
		);
		return v.jsx(m, { className: w, ...p, ref: y, children: l });
	}
);
pc.displayName = "MDBRow";
const lp = L.forwardRef(
	(
		{
			className: e,
			children: t,
			tag: n = "p",
			variant: r,
			color: l,
			blockquote: o,
			note: i,
			noteColor: u,
			listUnStyled: s,
			listInLine: a,
			...m
		},
		h
	) => {
		const p = R(
			r && r,
			o && "blockquote",
			i && "note",
			l && `text-${l}`,
			u && `note-${u}`,
			s && "list-unstyled",
			a && "list-inline",
			e
		);
		return (
			o && (n = "blockquote"),
			(s || a) && (n = "ul"),
			v.jsx(n, { className: p, ref: h, ...m, children: t })
		);
	}
);
lp.displayName = "MDBTypography";
const op = L.forwardRef(
	(
		{ className: e, color: t, uppercase: n, bold: r, children: l, ...o },
		i
	) => {
		const u = R(
			"breadcrumb",
			r && "font-weight-bold",
			t && `text-${t}`,
			n && "text-uppercase",
			e
		);
		return v.jsx("nav", {
			"aria-label": "breadcrumb",
			children: v.jsx("ol", { className: u, ref: i, ...o, children: l }),
		});
	}
);
op.displayName = "MDBBreadcrumb";
const ip = L.forwardRef(
	(
		{ className: e, active: t, current: n = "page", children: r, ...l },
		o
	) => {
		const i = R("breadcrumb-item", t && "active", e);
		return v.jsx("li", {
			className: i,
			ref: o,
			"aria-current": t && n,
			...l,
			children: r,
		});
	}
);
ip.displayName = "MDBBreadcrumbItem";
const up = (e) => {
		if (e !== !1) return `navbar-expand-${e}`;
	},
	sp = L.forwardRef(
		(
			{
				className: e,
				children: t,
				light: n,
				dark: r,
				scrolling: l,
				fixed: o,
				sticky: i,
				scrollingNavbarOffset: u,
				color: s,
				transparent: a,
				expand: m,
				tag: h = "nav",
				bgColor: p,
				...y
			},
			w
		) => {
			const [S, T] = _.useState(!1),
				f = R(
					{
						"navbar-light": n,
						"navbar-dark": r,
						"scrolling-navbar": l || u,
						"top-nav-collapse": S,
						[`text-${s}`]: s && a ? S : s,
					},
					o && `fixed-${o}`,
					i && "sticky-top",
					"navbar",
					m && up(m),
					p && `bg-${p}`,
					e
				),
				c = _.useCallback(() => {
					u && window.pageYOffset > u ? T(!0) : T(!1);
				}, [u]);
			return (
				_.useEffect(
					() => (
						(l || u) && window.addEventListener("scroll", c),
						() => {
							window.removeEventListener("scroll", c);
						}
					),
					[c, l, u]
				),
				v.jsx(h, {
					className: f,
					role: "navigation",
					...y,
					ref: w,
					children: t,
				})
			);
		}
	);
sp.displayName = "MDBNavbar";
const ap = L.forwardRef(
	(
		{
			children: e,
			className: t = "",
			disabled: n = !1,
			active: r = !1,
			tag: l = "a",
			...o
		},
		i
	) => {
		const u = R("nav-link", n ? "disabled" : r ? "active" : "", t);
		return v.jsx(l, {
			"data-test": "nav-link",
			className: u,
			style: { cursor: "pointer" },
			ref: i,
			...o,
			children: e,
		});
	}
);
ap.displayName = "MDBNavbarLink";
const cp = L.forwardRef(
	({ className: e, children: t, tag: n = "a", ...r }, l) => {
		const o = R("navbar-brand", e);
		return v.jsx(n, { className: o, ref: l, ...r, children: t });
	}
);
cp.displayName = "MDBNavbarBrand";
const fp = L.forwardRef(
	(
		{ children: e, className: t, active: n, text: r, tag: l = "li", ...o },
		i
	) => {
		const u = R("nav-item", n && "active", r && "navbar-text", t);
		return v.jsx(l, { ...o, className: u, ref: i, children: e });
	}
);
fp.displayName = "MDBNavbarItem";
const dp = L.forwardRef(
	(
		{
			children: e,
			className: t,
			right: n,
			fullWidth: r = !0,
			left: l,
			tag: o = "ul",
			...i
		},
		u
	) => {
		const s = R(
			"navbar-nav",
			r && "w-100",
			n && "ms-auto",
			l && "me-auto",
			t
		);
		return v.jsx(o, { className: s, ref: u, ...i, children: e });
	}
);
dp.displayName = "MDBNavbarNav";
const pp = L.forwardRef(
	({ children: e, className: t, tag: n = "button", ...r }, l) => {
		const o = R("navbar-toggler", t);
		return v.jsx(n, { ...r, className: o, ref: l, children: e });
	}
);
pp.displayName = "MDBNavbarToggler";
const mp = L.forwardRef(
	({ children: e, bgColor: t, color: n, className: r, ...l }, o) => {
		const i = R(t && `bg-${t}`, n && `text-${n}`, r);
		return v.jsx("footer", { className: i, ...l, ref: o, children: e });
	}
);
mp.displayName = "MDBFooter";
const hp = L.forwardRef(
	(
		{
			children: e,
			size: t,
			circle: n,
			center: r,
			end: l,
			start: o,
			className: i,
			...u
		},
		s
	) => {
		const a = R(
			"pagination",
			r && "justify-content-center",
			n && "pagination-circle",
			l && "justify-content-end",
			t && `pagination-${t}`,
			o && "justify-content-start",
			i
		);
		return v.jsx("ul", { className: a, ...u, ref: s, children: e });
	}
);
hp.displayName = "MDBPagination";
const vp = L.forwardRef(
	({ children: e, className: t, tag: n = "a", ...r }, l) => {
		const o = R("page-link", t);
		return v.jsx(n, { className: o, ...r, ref: l, children: e });
	}
);
vp.displayName = "MDBPaginationLink";
const yp = L.forwardRef(
	({ children: e, className: t, active: n, disabled: r, ...l }, o) => {
		const i = R("page-item", n && "active", r && "disabled", t);
		return v.jsx("li", { className: i, ...l, ref: o, children: e });
	}
);
yp.displayName = "MDBPaginationItem";
const mc = L.forwardRef(
	(
		{
			animated: e,
			children: t,
			className: n,
			style: r,
			tag: l = "div",
			valuenow: o,
			valuemax: i,
			striped: u,
			bgColor: s,
			valuemin: a,
			width: m,
			...h
		},
		p
	) => {
		const y = R(
				"progress-bar",
				s && `bg-${s}`,
				u && "progress-bar-striped",
				e && "progress-bar-animated",
				n
			),
			w = { width: `${m}%`, ...r };
		return v.jsx(l, {
			className: y,
			style: w,
			ref: p,
			role: "progressbar",
			...h,
			"aria-valuenow": Number(m) ?? o,
			"aria-valuemin": Number(a),
			"aria-valuemax": Number(i),
			children: t,
		});
	}
);
mc.displayName = "MDBProgressBar";
const gp = L.forwardRef(
	(
		{
			className: e,
			children: t,
			tag: n = "div",
			height: r,
			style: l,
			...o
		},
		i
	) => {
		const u = R("progress", e),
			s = { height: `${r}px`, ...l };
		return v.jsx(n, {
			className: u,
			ref: i,
			style: s,
			...o,
			children: L.Children.map(t, (a) => {
				if (!L.isValidElement(a) || a.type !== mc) {
					console.error(
						"Progress component only allows ProgressBar as child"
					);
					return;
				} else return a;
			}),
		});
	}
);
gp.displayName = "MDBProgress";
const wp = (e) => {
		const [t, n] = _.useState(!1),
			[r, l] = _.useState(null);
		return (
			_.useEffect(() => {
				l(
					() =>
						new IntersectionObserver(([o]) => {
							n(o.isIntersecting);
						})
				);
			}, []),
			_.useEffect(() => {
				if (!(!e.current || !r))
					return r.observe(e.current), () => r.disconnect();
			}, [r, e]),
			t
		);
	},
	Sp = L.forwardRef(
		(
			{
				className: e,
				size: t,
				contrast: n,
				value: r,
				defaultValue: l,
				id: o,
				labelClass: i,
				wrapperClass: u,
				wrapperStyle: s,
				wrapperTag: a = "div",
				label: m,
				onChange: h,
				children: p,
				labelRef: y,
				labelStyle: w,
				type: S,
				onBlur: T,
				readonly: f = !1,
				showCounter: c = !1,
				...d
			},
			g
		) => {
			var x;
			const [N, C] = _.useState(l),
				j = _.useMemo(() => (r !== void 0 ? r : N), [r, N]),
				[A, P] = _.useState(0),
				[F, V] = _.useState(!1),
				[Y, O] = _.useState(0),
				H = _.useRef(null),
				te = wp(H),
				ge = _.useRef(null),
				E = y || ge;
			_.useImperativeHandle(g, () => H.current);
			const D = R("form-outline", n && "form-white", u),
				M = R(
					"form-control",
					F && "active",
					S === "date" && "active",
					t && `form-control-${t}`,
					e
				),
				B = R("form-label", i),
				X = _.useCallback(() => {
					var Re;
					(Re = E.current) != null &&
						Re.clientWidth &&
						P(E.current.clientWidth * 0.8 + 8);
				}, [E]),
				it = (Re) => {
					C(Re.target.value),
						c && O(Re.target.value.length),
						h == null || h(Re);
				},
				Ge = _.useCallback(
					(Re) => {
						H.current && (V(!!j), T && T(Re));
					},
					[j, T]
				);
			return (
				_.useEffect(() => {
					X();
				}, [(x = E.current) == null ? void 0 : x.clientWidth, X, te]),
				_.useEffect(() => {
					if (j) return V(!0);
					V(!1);
				}, [j]),
				v.jsxs(a, {
					className: D,
					style: s,
					children: [
						v.jsx("input", {
							type: S,
							readOnly: f,
							className: M,
							onBlur: Ge,
							onChange: it,
							onFocus: X,
							value: r,
							defaultValue: l,
							id: o,
							ref: H,
							...d,
						}),
						m &&
							v.jsx("label", {
								className: B,
								style: w,
								htmlFor: o,
								ref: E,
								children: m,
							}),
						v.jsxs("div", {
							className: "form-notch",
							children: [
								v.jsx("div", {
									className: "form-notch-leading",
								}),
								v.jsx("div", {
									className: "form-notch-middle",
									style: { width: A },
								}),
								v.jsx("div", {
									className: "form-notch-trailing",
								}),
							],
						}),
						p,
						c &&
							d.maxLength &&
							v.jsx("div", {
								className: "form-helper",
								children: v.jsx("div", {
									className: "form-counter",
									children: `${Y}/${d.maxLength}`,
								}),
							}),
					],
				})
			);
		}
	);
Sp.displayName = "MDBInput";
const kp = _.forwardRef(
	(
		{
			className: e,
			inputRef: t,
			labelClass: n,
			wrapperClass: r,
			labelStyle: l,
			wrapperTag: o = "div",
			wrapperStyle: i,
			label: u,
			inline: s,
			btn: a,
			id: m,
			btnColor: h,
			disableWrapper: p,
			toggleSwitch: y,
			...w
		},
		S
	) => {
		let T = "form-check-input",
			f = "form-check-label";
		a &&
			((T = "btn-check"),
			h ? (f = `btn btn-${h}`) : (f = "btn btn-primary"));
		const c = R(
				u && !a && "form-check",
				s && !a && "form-check-inline",
				y && "form-switch",
				r
			),
			d = R(T, e),
			g = R(f, n),
			x = v.jsxs(v.Fragment, {
				children: [
					v.jsx("input", { className: d, id: m, ref: t, ...w }),
					u &&
						v.jsx("label", {
							className: g,
							style: l,
							htmlFor: m,
							children: u,
						}),
				],
			});
		return v.jsx(v.Fragment, {
			children: p
				? x
				: v.jsx(o, { style: i, className: c, ref: S, children: x }),
		});
	}
);
kp.displayName = "InputTemplate";
function xp({
	showCollapse: e,
	setCollapseHeight: t,
	refCollapse: n,
	contentRef: r,
}) {
	_.useEffect(() => {
		e || t("0px");
	}, [e]),
		_.useEffect(() => {
			const l = n.current,
				o = (u) => {
					if (!l) return;
					const s = u.contentRect.height,
						a = window.getComputedStyle(l),
						m =
							parseFloat(a.paddingTop) +
							parseFloat(a.paddingBottom) +
							parseFloat(a.marginBottom) +
							parseFloat(a.marginTop),
						h = `${s + m}px`;
					t(h);
				},
				i = new ResizeObserver(([u]) => {
					o(u);
				});
			return (
				i.observe(r.current),
				() => {
					i.disconnect();
				}
			);
		}, []);
}
const Np = ({
	className: e,
	children: t,
	open: n = !1,
	id: r,
	navbar: l,
	tag: o = "div",
	collapseRef: i,
	style: u,
	onOpen: s,
	onClose: a,
	...m
}) => {
	const [h, p] = _.useState(!1),
		[y, w] = _.useState(void 0),
		[S, T] = _.useState(!1),
		f = R(
			S ? "collapsing" : "collapse",
			!S && h && "show",
			l && "navbar-collapse",
			e
		),
		c = _.useRef(null),
		d = i ?? c,
		g = _.useRef(null),
		x = _.useCallback(() => {
			h && w(void 0);
		}, [h]);
	return (
		_.useEffect(
			() => (
				window.addEventListener("resize", x),
				() => {
					window.removeEventListener("resize", x);
				}
			),
			[x]
		),
		xp({
			showCollapse: h,
			setCollapseHeight: w,
			refCollapse: d,
			contentRef: g,
		}),
		_.useEffect(() => {
			h !== n && (n ? s == null || s() : a == null || a(), p(n)),
				h && T(!0);
			const N = setTimeout(() => {
				T(!1);
			}, 350);
			return () => {
				clearTimeout(N);
			};
		}, [n, h, s, a]),
		v.jsx(o, {
			style: { height: y, ...u },
			id: r,
			className: f,
			...m,
			ref: d,
			children: v.jsx("div", {
				ref: g,
				className: "collapse-content",
				children: t,
			}),
		})
	);
};
_.createContext(null);
const Ep = L.forwardRef(
	(
		{
			className: e,
			centered: t,
			children: n,
			size: r,
			scrollable: l,
			tag: o = "div",
			...i
		},
		u
	) => {
		const s = R(
			"modal-dialog",
			l && "modal-dialog-scrollable",
			t && "modal-dialog-centered",
			r && `modal-${r}`,
			e
		);
		return v.jsx(o, { className: s, ...i, ref: u, children: n });
	}
);
Ep.displayName = "MDBModalDialog";
const Cp = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("modal-content", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
Cp.displayName = "MDBModalContent";
const _p = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("modal-header", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
_p.displayName = "MDBModalHeader";
const jp = L.forwardRef(
	({ className: e, children: t, tag: n = "h5", ...r }, l) => {
		const o = R("modal-title", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
jp.displayName = "MDBModalTitle";
const Pp = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("modal-body", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
Pp.displayName = "MDBModalBody";
const zp = L.forwardRef(
	({ className: e, children: t, tag: n = "div", ...r }, l) => {
		const o = R("modal-footer", e);
		return v.jsx(n, { className: o, ...r, ref: l, children: t });
	}
);
zp.displayName = "MDBModalFooter";
L.createContext({ activeElement: null, setTargets: null });
const Rp = _.forwardRef(
	(
		{
			className: e,
			labelClass: t,
			labelStyle: n,
			inputRef: r,
			size: l,
			label: o,
			id: i,
			...u
		},
		s
	) => {
		const a = R("form-control", `form-control-${l}`, e),
			m = R("form-label", t),
			h = _.useRef(null);
		return (
			_.useImperativeHandle(
				s,
				() => h.current || (r == null ? void 0 : r.current)
			),
			v.jsxs(v.Fragment, {
				children: [
					o &&
						v.jsx("label", {
							className: m,
							style: n,
							htmlFor: i,
							children: o,
						}),
					v.jsx("input", {
						className: a,
						type: "file",
						id: i,
						ref: h,
						...u,
					}),
				],
			})
		);
	}
);
Rp.displayName = "MDBFile";
const Tp = L.forwardRef(
	(
		{
			className: e,
			children: t,
			noBorder: n,
			textBefore: r,
			textAfter: l,
			noWrap: o,
			tag: i = "div",
			textTag: u = "span",
			textClass: s,
			size: a,
			textProps: m,
			...h
		},
		p
	) => {
		const y = R(
				"input-group",
				o && "flex-nowrap",
				a && `input-group-${a}`,
				e
			),
			w = R("input-group-text", n && "border-0", s),
			S = (T) =>
				v.jsx(v.Fragment, {
					children:
						T && Array.isArray(T)
							? T.map((f, c) =>
									v.jsx(
										u,
										{ className: w, ...m, children: f },
										c
									)
							  )
							: v.jsx(u, { className: w, ...m, children: T }),
				});
		return v.jsxs(i, {
			className: y,
			ref: p,
			...h,
			children: [r && S(r), t, l && S(l)],
		});
	}
);
Tp.displayName = "MDBInputGroup";
const Mp = L.forwardRef(
	(
		{
			className: e,
			children: t,
			isValidated: n = !1,
			onReset: r,
			onSubmit: l,
			noValidate: o = !0,
			...i
		},
		u
	) => {
		const [s, a] = _.useState(n),
			m = R("needs-validation", s && "was-validated", e),
			h = (y) => {
				y.preventDefault(), a(!0), l && l(y);
			},
			p = (y) => {
				y.preventDefault(), a(!1), r && r(y);
			};
		return (
			_.useEffect(() => {
				a(n);
			}, [n]),
			v.jsx("form", {
				className: m,
				onSubmit: h,
				onReset: p,
				ref: u,
				noValidate: o,
				...i,
				children: t,
			})
		);
	}
);
Mp.displayName = "MDBValidation";
const Lp = L.forwardRef(
	({ className: e, fill: t, pills: n, justify: r, children: l, ...o }, i) => {
		const u = R(
			"nav",
			n ? "nav-pills" : "nav-tabs",
			t && "nav-fill",
			r && "nav-justified",
			e
		);
		return v.jsx("ul", { className: u, ref: i, ...o, children: l });
	}
);
Lp.displayName = "MDBTabs";
const Dp = L.forwardRef(
	({ className: e, children: t, style: n, tag: r = "li", ...l }, o) => {
		const i = R("nav-item", e);
		return v.jsx(r, {
			className: i,
			style: { cursor: "pointer", ...n },
			role: "presentation",
			ref: o,
			...l,
			children: t,
		});
	}
);
Dp.displayName = "MDBTabsItem";
const $p = L.forwardRef(
	(
		{
			className: e,
			color: t,
			active: n,
			onOpen: r,
			onClose: l,
			children: o,
			...i
		},
		u
	) => {
		const s = R("nav-link", n && "active", t && `bg-${t}`, e);
		return (
			_.useEffect(() => {
				n ? r == null || r() : l == null || l();
			}, [n]),
			v.jsx("a", { className: s, ref: u, ...i, children: o })
		);
	}
);
$p.displayName = "MDBTabsLink";
const Op = L.forwardRef(
	({ className: e, tag: t = "div", children: n, ...r }, l) => {
		const o = R("tab-content", e);
		return v.jsx(t, { className: o, ref: l, ...r, children: n });
	}
);
Op.displayName = "MDBTabsContent";
const Ip = L.forwardRef(
	({ className: e, tag: t = "div", open: n, children: r, ...l }, o) => {
		const [i, u] = _.useState(!1),
			s = R("tab-pane", "fade", i && "show", n && "active", e);
		return (
			_.useEffect(() => {
				let a;
				return (
					n
						? (a = setTimeout(() => {
								u(!0);
						  }, 100))
						: u(!1),
					() => {
						clearTimeout(a);
					}
				);
			}, [n]),
			v.jsx(t, {
				className: s,
				role: "tabpanel",
				ref: o,
				...l,
				children: r,
			})
		);
	}
);
Ip.displayName = "MDBTabsPane";
_.createContext({ active: 0 });
const hc = L.createContext({
		activeItem: 0,
		setActiveItem: null,
		alwaysOpen: !1,
		initialActive: 0,
	}),
	Fp = L.forwardRef(
		(
			{
				alwaysOpen: e,
				borderless: t,
				className: n,
				flush: r,
				active: l,
				initialActive: o = 0,
				tag: i = "div",
				children: u,
				onChange: s,
				...a
			},
			m
		) => {
			const h = _.useMemo(() => typeof l < "u", [l]),
				p = R(
					"accordion",
					r && "accordion-flush",
					t && "accordion-borderless",
					n
				),
				[y, w] = _.useState(o);
			return v.jsx(i, {
				className: p,
				ref: m,
				...a,
				children: v.jsx(hc.Provider, {
					value: {
						activeItem: h ? l : y,
						setActiveItem: w,
						alwaysOpen: e,
						initialActive: o,
						onChange: s,
					},
					children: u,
				}),
			});
		}
	);
Fp.displayName = "MDBAccordion";
const Bp = L.forwardRef(
	(
		{
			className: e,
			bodyClassName: t,
			bodyStyle: n,
			headerClassName: r,
			collapseId: l,
			headerTitle: o,
			headerStyle: i,
			btnClassName: u,
			tag: s = "div",
			children: a,
			...m
		},
		h
	) => {
		const {
				activeItem: p,
				setActiveItem: y,
				alwaysOpen: w,
				onChange: S,
			} = _.useContext(hc),
			T = _.useMemo(
				() => (Array.isArray(p) ? p.includes(l) : p === l),
				[p, l]
			),
			f = R("accordion-item", e),
			c = R("accordion-header", r),
			d = R("accordion-body", t),
			g = R("accordion-button", !T && "collapsed", u),
			x = _.useCallback(
				(N) => {
					let C = N;
					Array.isArray(p)
						? p.includes(N)
							? (C = p.filter((j) => j !== N))
							: (C = w ? [...p, N] : [N])
						: ((C = p === N ? 0 : N), w && (C = [C])),
						S == null || S(C),
						y(C);
				},
				[S, p, y, w]
			);
		return v.jsxs(s, {
			className: f,
			ref: h,
			...m,
			children: [
				v.jsx("h2", {
					className: c,
					style: i,
					children: v.jsx("button", {
						onClick: () => x(l),
						className: g,
						type: "button",
						children: o,
					}),
				}),
				v.jsx(Np, {
					id: l.toString(),
					open: T,
					children: v.jsx("div", {
						className: d,
						style: n,
						children: a,
					}),
				}),
			],
		});
	}
);
Bp.displayName = "MDBAccordionItem";
const Up = ({
		className: e,
		size: t,
		contrast: n,
		value: r,
		defaultValue: l,
		id: o,
		labelClass: i,
		wrapperClass: u,
		wrapperStyle: s,
		wrapperTag: a = "div",
		label: m,
		onChange: h,
		children: p,
		labelRef: y,
		labelStyle: w,
		inputRef: S,
		onBlur: T,
		readonly: f = !1,
		...c
	}) => {
		var d;
		const g = _.useRef(null),
			x = _.useRef(null),
			N = y || g,
			C = S || x,
			[j, A] = _.useState(r || l),
			[P, F] = _.useState(0),
			[V, Y] = _.useState(
				(r !== void 0 && r.length > 0) || (l !== void 0 && l.length > 0)
			),
			O = R("form-outline", n && "form-white", u),
			H = R("form-control", V && "active", t && `form-control-${t}`, e),
			te = R("form-label", i);
		_.useEffect(() => {
			var M;
			N.current &&
				((M = N.current) == null ? void 0 : M.clientWidth) !== 0 &&
				F(N.current.clientWidth * 0.8 + 8);
		}, [N, (d = N.current) == null ? void 0 : d.clientWidth]);
		const ge = () => {
			N.current && F(N.current.clientWidth * 0.8 + 8);
		};
		_.useEffect(() => {
			r !== void 0 && (r.length > 0 ? Y(!0) : Y(!1));
		}, [r]),
			_.useEffect(() => {
				l !== void 0 && (l.length > 0 ? Y(!0) : Y(!1));
			}, [l]);
		const E = (M) => {
				A(M.currentTarget.value), h && h(M);
			},
			D = _.useCallback(
				(M) => {
					(j !== void 0 && j.length > 0) ||
					(r !== void 0 && r.length > 0)
						? Y(!0)
						: Y(!1),
						T && T(M);
				},
				[j, r, T]
			);
		return v.jsxs(a, {
			className: O,
			style: { ...s },
			children: [
				v.jsx("textarea", {
					readOnly: f,
					className: H,
					onBlur: D,
					onChange: E,
					onFocus: ge,
					defaultValue: l,
					value: r,
					id: o,
					ref: C,
					...c,
				}),
				m &&
					v.jsx("label", {
						className: te,
						style: w,
						htmlFor: o,
						ref: N,
						children: m,
					}),
				v.jsxs("div", {
					className: "form-notch",
					children: [
						v.jsx("div", { className: "form-notch-leading" }),
						v.jsx("div", {
							className: "form-notch-middle",
							style: { width: P },
						}),
						v.jsx("div", { className: "form-notch-trailing" }),
					],
				}),
				p,
			],
		});
	},
	Ap = ({ botName: e, primaryColor: t }) =>
		v.jsx(fc, {
			className:
				"d-flex justify-content-center align-items-center p-3  text-white border-bottom-0",
			style: {
				borderTopLeftRadius: "15px",
				borderTopRightRadius: "15px",
				backgroundColor: t,
			},
			children: v.jsxs("p", {
				className: "mb-0 fw-bold text-center",
				children: ["ChatBot ", e, " "],
			}),
		}),
	Ku = ({
		botImg: e,
		botName: t,
		companyName: n,
		secondaryColor: r,
		botMessage: l,
	}) =>
		v.jsx(v.Fragment, {
			children: v.jsxs("div", {
				className: "d-flex flex-row justify-content-start mb-4",
				children: [
					v.jsx("img", {
						src: e,
						alt: "avatar 1",
						style: { width: "3rem", height: "100%" },
					}),
					v.jsx("div", {
						className: "p-3 ms-3",
						style: { borderRadius: "15px", backgroundColor: r },
						children: v.jsx("p", {
							className: "small mb-0",
							children: l,
						}),
					}),
				],
			}),
		}),
	Vp = ({ userMessage: e }) =>
		v.jsx("div", {
			className: "d-flex flex-row justify-content-end mb-4",
			children: v.jsx("div", {
				className: "p-3 border",
				style: { borderRadius: "15px", backgroundColor: "#fbfbfb" },
				children: v.jsx("p", { className: "small mb-0", children: e }),
			}),
		}),
	Hp = ({ setListMessage: e }) => {
		const t = (n) => {
			if (n.key === "Enter" && !n.shiftKey) {
				n.preventDefault();
				const r = n.target.value;
				e((l) => [...l, { text: r, fromUser: !0 }]),
					(n.target.value = "");
			}
		};
		return v.jsx(Up, {
			className: "form-outline align-self-end",
			label: "Escribe tu consulta aquí...",
			id: "textAreaExample",
			rows: 2,
			onKeyDown: t,
		});
	},
	Wp = ({
		botImg: e,
		botName: t,
		companyName: n,
		welcomeMessage: r,
		primaryColor: l,
		secondaryColor: o,
	}) => {
		const i = l + " " + o,
			[u, s] = _.useState([]);
		return v.jsxs(dc, {
			id: "card-body",
			style: { scrollbarWidth: "thin", scrollbarColor: i },
			children: [
				v.jsxs("ul", {
					className: "ps-0 pe-2",
					id: "messages",
					style: {
						height: "calc(75vh - 11rem)",
						overflowY: "scroll",
					},
					children: [
						v.jsx(Ku, {
							botImg: e,
							botName: t,
							companyName: n,
							secondaryColor: o,
							botMessage: r,
						}),
						u.map((a, m) =>
							a.fromUser
								? v.jsx(
										"li",
										{
											className: "",
											children: v.jsx(Vp, {
												userMessage: a.text,
											}),
										},
										m
								  )
								: v.jsx(
										"li",
										{
											className: "",
											children: v.jsx(Ku, {
												botImg: e,
												botName: t,
												companyName: n,
												welcomeMessage: r,
												secondaryColor: o,
												botMessage: a.Message,
											}),
										},
										m
								  )
						),
					],
				}),
				v.jsx(Hp, { setListMessage: s }),
			],
		});
	};
function Qp({ botImg: e }) {
	const [t, n] = _.useState(oc),
		r = t["bot-data"].name,
		l = t["bussiness-data"].name,
		o = t["bot-data"]["welcome-message"],
		i = t["bussiness-data"]["primary-color"],
		u = t["bussiness-data"]["secondary-color"];
	return v.jsx(v.Fragment, {
		children: v.jsx(uc, {
			id: "main-container",
			className: "",
			children: v.jsx(pc, {
				className: "d-flex justify-content-end",
				children: v.jsx(sc, {
					md: "8",
					lg: "6",
					xl: "4",
					children: v.jsxs(cc, {
						id: "chat1",
						style: { borderRadius: "15px" },
						children: [
							v.jsx(Ap, { botName: r, primaryColor: i }),
							v.jsx(Wp, {
								botImg: e,
								botName: r,
								companyName: l,
								welcomeMessage: o,
								primaryColor: i,
								secondaryColor: u,
							}),
						],
					}),
				}),
			}),
		}),
	});
}
const Kp = () => {
	const [e, t] = _.useState(oc),
		[n, r] = _.useState(!1),
		l = n ? "6%" : "8%",
		o = e["bot-data"]["bot-img"];
	return v.jsx(v.Fragment, {
		children: v.jsx("div", {
			className: "position fixed h-100",
			children: v.jsxs("div", {
				id: "main-button",
				className:
					"position-absolute bottom-0 end-0 mx-4 mb-4 d-flex justify-content-end ",
				children: [
					n && v.jsx(Qp, { botImg: o }),
					v.jsx("img", {
						className: "",
						onClick: () => r(!n),
						src: o,
						alt: "chatbot",
						style: {
							width: l,
							height: "100%",
							animation: "wiggle 2s infinite",
						},
					}),
				],
			}),
		}),
	});
};
function Yp() {
	return v.jsx(v.Fragment, { children: v.jsx(Kp, {}) });
}
Gl.createRoot(document.getElementById("root")).render(
	v.jsx(L.StrictMode, { children: v.jsx(Yp, {}) })
);
