/** * MODULE SYSTEM & PRELOAD POLYFILL
 */
function qc(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const l in r)
          if (l !== "default" && !(l in e)) {
            const i = Object.getOwnPropertyDescriptor(r, l);
            i && Object.defineProperty(e, l, i.get ? i : {
              enumerable: !0,
              get: () => r[l]
            });
          }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
      for (const i of l)
        if (i.type === "childList")
          for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }).observe(document, {
      childList: !0,
      subtree: !0
    });
  
    function n(l) {
      const i = {};
      return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }
  
    function r(l) {
      if (l.ep) return;
      l.ep = !0;
      const i = n(l);
      fetch(l.href, i)
    }
  })();

  /** * REACT CORE ENGINE
 */
var ar = Symbol.for("react.element"),
ed = Symbol.for("react.portal"),
td = Symbol.for("react.fragment"),
nd = Symbol.for("react.strict_mode"),
rd = Symbol.for("react.profiler"),
ld = Symbol.for("react.provider"),
sd = Symbol.for("react.context"),
id = Symbol.for("react.forward_ref"),
ad = Symbol.for("react.suspense"),
od = Symbol.for("react.memo"),
ud = Symbol.for("react.lazy"),
oa = Symbol.iterator;

function hn(e, t, n) {
this.props = e, this.context = t, this.refs = Ro, this.updater = n || _o
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function(e, t) {
if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object or function.");
this.updater.enqueueSetState(this, e, t, "setState")
};

// Hook Exports
D.useCallback = function(e, t) { return ue.current.useCallback(e, t) };
D.useContext = function(e) { return ue.current.useContext(e) };
D.useEffect = function(e, t) { return ue.current.useEffect(e, t) };
D.useMemo = function(e, t) { return ue.current.useMemo(e, t) };
D.useState = function(e) { return ue.current.useState(e) };
D.version = "18.3.1";

/** * REACT SCHEDULER
 */
(function(e) {
    function t(C, R) { /* Heap push logic for task queue */ }
    function n(C) { return C.length === 0 ? null : C[0] }
    function r(C) { /* Heap pop logic for task queue */ }
  
    var u = [], c = [], m = 1, h = null, v = 3, y = !1, x = !1, j = !1;
    
    e.unstable_ImmediatePriority = 1;
    e.unstable_UserBlockingPriority = 2;
    e.unstable_NormalPriority = 3;
    e.unstable_LowPriority = 4;
    e.unstable_IdlePriority = 5;
  
    e.unstable_scheduleCallback = function(C, R, z) {
      var K = e.unstable_now();
      // Task timing logic...
      return C;
    };
  })(Bo);

  /** * REACT-DOM RENDERER
 */
var Wo = new Set, Vn = {};
function It(e, t) { sn(e, t), sn(e + "Capture", t) }

// HTML Attribute Mapping
var ne = {};
"children dangerouslySetInnerHTML style".split(" ").forEach(function(e) {
  ne[e] = new ce(e, 0, !1, e, null, !1, !1)
});

// Event Reconciliation
function Ko(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  e && (r = $o(e) ? e.checked ? "true" : "false" : e.value);
  e = r, e !== n ? (t.setValue(e), !0) : !1
}

// Global Registry of Elements
var zd = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, img: !0, input: !0 });

