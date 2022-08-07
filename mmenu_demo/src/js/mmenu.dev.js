"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(s) {
    if (t[s]) return t[s].exports;
    var i = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, s) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var s = Object.create(null);
    if (n.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(s, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return s;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);
  var s = {
    hooks: {},
    navbar: {
      add: !0,
      title: "Menu",
      titleLink: "parent"
    },
    slidingSubmenus: !0
  };
  var i = {
    classNames: {
      divider: "Divider",
      nolistview: "NoListview",
      nopanel: "NoPanel",
      panel: "Panel",
      selected: "Selected",
      vertical: "Vertical"
    },
    language: null,
    panelNodetype: ["ul", "ol", "div"],
    screenReader: {
      closeSubmenu: "Close submenu",
      openSubmenu: "Open submenu",
      toggleSubmenu: "Toggle submenu"
    }
  };

  var a = function a(e, t) {
    "object" != o(e) && (e = {}), "object" != o(t) && (t = {});

    for (var _n in t) {
      t.hasOwnProperty(_n) && (void 0 === e[_n] ? e[_n] = t[_n] : "object" == o(e[_n]) && a(e[_n], t[_n]));
    }

    return e;
  },
      o = function o(e) {
    return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  },
      l = function l() {
    return "mm-" + r++;
  };

  var r = 0;

  var m = function m(e) {
    return "mm-clone-" == e.slice(0, 9) ? e : "mm-clone-" + e;
  },
      c = function c(e) {
    return "mm-clone-" == e.slice(0, 9) ? e.slice(9) : e;
  },
      d = {},
      h = function h(e, t) {
    void 0 === d[t] && (d[t] = {}), a(d[t], e);
  };

  var p = {
    "Close submenu": "بستن زیرمنو",
    Menu: "منو",
    "Open submenu": "بازکردن زیرمنو",
    "Toggle submenu": "سوییچ زیرمنو"
  },
      u = {
    "Close submenu": "Submenu sluiten",
    Menu: "Menu",
    "Open submenu": "Submenu openen",
    "Toggle submenu": "Submenu wisselen"
  },
      f = {
    "Close submenu": "Fechar submenu",
    Menu: "Menu",
    "Open submenu": "Abrir submenu",
    "Toggle submenu": "Alternar submenu"
  },
      b = {
    "Close submenu": "Закрыть подменю",
    Menu: "Меню",
    "Open submenu": "Открыть подменю",
    "Toggle submenu": "Переключить подменю"
  },
      v = {
    "Close submenu": "Zatvoriť submenu",
    Menu: "Menu",
    "Open submenu": "Otvoriť submenu",
    "Toggle submenu": "Prepnúť submenu"
  };

  var g = function g(e) {
    var _n$classList;

    var t = e.split("."),
        n = document.createElement(t.shift());
    return (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(t)), n;
  },
      L = function L(e, t) {
    return t.length ? [].slice.call(e.querySelectorAll(t)) : [];
  },
      _ = function _(e, t) {
    var n = Array.prototype.slice.call(e.children);
    return t ? n.filter(function (e) {
      return e.matches(t);
    }) : n;
  },
      E = function E(e) {
    return e.filter(function (e) {
      return !e.matches(".mm-hidden");
    });
  },
      w = function w(e) {
    var t = [];
    return E(e).forEach(function (e) {
      t.push.apply(t, _toConsumableArray(_(e, "a.mm-listitem__text")));
    }), t.filter(function (e) {
      return !e.matches(".mm-btn--next");
    });
  },
      y = function y(e, t, n) {
    e.matches("." + t) && e.classList.add(n);
  };

  var P = {};

  var S = function S(e, t, n) {
    "number" == typeof e && (e = "(min-width: " + e + "px)"), P[e] = P[e] || [], P[e].push({
      yes: t,
      no: n
    });
  },
      k = function k(e, t) {
    var n = t.matches ? "yes" : "no";

    for (var _t = 0; _t < P[e].length; _t++) {
      P[e][_t][n]();
    }
  };

  var M,
      x,
      T,
      C = function C(e, t, n) {
    if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
    return t.set(e, n), n;
  },
      N = function N(e, t) {
    if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
    return t.get(e);
  };

  h({
    "Close submenu": "Untermenü schließen",
    Menu: "Menü",
    "Open submenu": "Untermenü öffnen",
    "Toggle submenu": "Untermenü wechseln"
  }, "de"), h(p, "fa"), h(u, "nl"), h(f, "pt_br"), h(b, "ru"), h(v, "sk");

  var O =
  /*#__PURE__*/
  function () {
    function O(e, t, n) {
      _classCallCheck(this, O);

      return M.set(this, void 0), x.set(this, void 0), T.set(this, void 0), this.opts = a(t, s), this.conf = a(n, i), this._api = ["i18n", "bind", "openPanel", "closePanel", "setSelected"], this.node = {}, this.hook = {}, this.node.menu = "string" == typeof e ? document.querySelector(e) : e, "function" == typeof this._deprecatedWarnings && this._deprecatedWarnings(), this.trigger("init:before"), this._initObservers(), this._initAddons(), this._initHooks(), this._initAPI(), this._initMenu(), this._initPanels(), this._initOpened(), function () {
        var _loop = function _loop(_e) {
          var t = window.matchMedia(_e);
          k(_e, t), t.onchange = function (n) {
            k(_e, t);
          };
        };

        for (var _e in P) {
          _loop(_e);
        }
      }(), this.trigger("init:after"), this;
    }

    _createClass(O, [{
      key: "openPanel",
      value: function openPanel(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

        if (e) {
          if (e.matches(".mm-panel") || (e = e.closest(".mm-panel")), this.trigger("openPanel:before", [e, {
            animation: t,
            setfocus: n
          }]), e.parentElement.matches(".mm-listitem--vertical")) e.parentElement.classList.add("mm-listitem--opened");else {
            var _s = _(this.node.pnls, ".mm-panel--opened")[0];

            e.matches(".mm-panel--parent") && _s && _s.classList.add("mm-panel--highest");
            var _i = ["mm-panel--opened", "mm-panel--parent"],
                _a = [];
            t ? _i.push("mm-panel--noanimation") : _a.push("mm-panel--noanimation"), _(this.node.pnls, ".mm-panel").forEach(function (e) {
              var _e$classList, _e$classList2;

              (_e$classList = e.classList).add.apply(_e$classList, _a), (_e$classList2 = e.classList).remove.apply(_e$classList2, _i), e !== _s && e.classList.remove("mm-panel--highest");
            }), e.classList.add("mm-panel--opened");
            var _o = L(this.node.pnls, "#" + e.dataset.mmParent)[0];

            for (; _o;) {
              _o = _o.closest(".mm-panel"), _o.classList.add("mm-panel--parent"), _o = L(this.node.pnls, "#" + _o.dataset.mmParent)[0];
            }

            n && (e.focus(), e.scrollLeft = 0, this.node.pnls.scrollLeft = 0, document.body.scrollLeft = 0, document.documentElement.scrollLeft = 0);
          }
          this.trigger("openPanel:after", [e, {
            animation: t,
            setfocus: n
          }]);
        }
      }
    }, {
      key: "closePanel",
      value: function closePanel(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;

        if (e && (e.matches(".mm-panel--opened") || e.parentElement.matches(".mm-listitem--opened"))) {
          if (this.trigger("closePanel:before", [e]), e.parentElement.matches(".mm-listitem--vertical")) e.parentElement.classList.remove("mm-listitem--opened");else if (e.dataset.mmParent) {
            var _s2 = L(this.node.pnls, "#" + e.dataset.mmParent)[0];
            this.openPanel(_s2, t, n);
          } else {
            var _s3 = _(this.node.pnls, ".mm-panel--parent").pop();

            if (_s3 && _s3 !== e) this.openPanel(_s3, t, n);else {
              var _s4 = _(this.node.pnls, ".mm-panel")[0];

              _s4 && _s4 !== e && this.openPanel(_s4, t, n);
            }
          }
          this.trigger("closePanel:after", [e]);
        }
      }
    }, {
      key: "togglePanel",
      value: function togglePanel(e) {
        var t = "openPanel";
        (e.parentElement.matches(".mm-listitem--opened") || e.matches(".mm-panel--opened")) && (t = "closePanel"), this[t](e);
      }
    }, {
      key: "setSelected",
      value: function setSelected(e) {
        this.trigger("setSelected:before", [e]), L(this.node.menu, ".mm-listitem--selected").forEach(function (e) {
          e.classList.remove("mm-listitem--selected");
        }), e.classList.add("mm-listitem--selected"), this.trigger("setSelected:after", [e]);
      }
    }, {
      key: "bind",
      value: function bind(e, t) {
        this.hook[e] = this.hook[e] || [], this.hook[e].push(t);
      }
    }, {
      key: "trigger",
      value: function trigger(e, t) {
        if (this.hook[e]) for (var n = 0, s = this.hook[e].length; n < s; n++) {
          this.hook[e][n].apply(this, t);
        }
      }
    }, {
      key: "_initObservers",
      value: function _initObservers() {
        var _this = this;

        C(this, M, new MutationObserver(function (e) {
          e.forEach(function (e) {
            e.addedNodes.forEach(function (e) {
              e.matches(_this.conf.panelNodetype.join(", ")) && _this._initListview(e);
            });
          });
        })), C(this, x, new MutationObserver(function (e) {
          e.forEach(function (e) {
            e.addedNodes.forEach(function (e) {
              _this._initListitem(e);
            });
          });
        })), C(this, T, new MutationObserver(function (e) {
          e.forEach(function (e) {
            e.addedNodes.forEach(function (e) {
              (null == e ? void 0 : e.matches(_this.conf.panelNodetype.join(", "))) && _this._initSubPanel(e);
            });
          });
        }));
      }
    }, {
      key: "_initAPI",
      value: function _initAPI() {
        var _this2 = this;

        var e = this;
        this.API = {}, this._api.forEach(function (t) {
          _this2.API[t] = function () {
            return e[t].apply(e, arguments);
          };
        }), this.node.menu.mmApi = this.API;
      }
    }, {
      key: "_initHooks",
      value: function _initHooks() {
        for (var _e2 in this.opts.hooks) {
          this.bind(_e2, this.opts.hooks[_e2]);
        }
      }
    }, {
      key: "_initAddons",
      value: function _initAddons() {
        this.trigger("initAddons:before");

        for (var _e3 in O.addons) {
          O.addons[_e3].call(this);
        }

        this.trigger("initAddons:after");
      }
    }, {
      key: "_initMenu",
      value: function _initMenu() {
        var _this3 = this;

        this.trigger("initMenu:before"), this.node.wrpr = this.node.wrpr || this.node.menu.parentElement, this.node.wrpr.classList.add("mm-wrapper"), this.node.menu.classList.add("mm-menu"), this.node.menu.id = this.node.menu.id || l(), this.node.menu.tabIndex = -1;

        var e = _(this.node.menu).filter(function (e) {
          return e.matches(_this3.conf.panelNodetype.join(", "));
        });

        this.node.pnls = g("div.mm-panels"), this.node.menu.append(this.node.pnls), e.forEach(function (e) {
          _this3._initPanel(e);
        }), this.trigger("initMenu:after");
      }
    }, {
      key: "_initPanels",
      value: function _initPanels() {
        var _this4 = this;

        this.trigger("initPanels:before"), this.node.menu.addEventListener("click", function (e) {
          var t, n;
          var s = (null === (n = null === (t = e.target) || void 0 === t ? void 0 : t.closest("a[href]")) || void 0 === n ? void 0 : n.getAttribute("href")) || "";
          if ("#" === s.slice(0, 1)) try {
            var _t2 = L(_this4.node.menu, s)[0];
            _t2 && (e.preventDefault(), _this4.togglePanel(_t2));
          } catch (e) {}
        }, {
          capture: !0
        }), this.trigger("initPanels:after");
      }
    }, {
      key: "_initPanel",
      value: function _initPanel(e) {
        var _this5 = this;

        var t;

        if (!e.matches(".mm-panel") && (y(e, this.conf.classNames.panel, "mm-panel"), y(e, this.conf.classNames.nopanel, "mm-nopanel"), !e.matches(".mm-nopanel"))) {
          if (this.trigger("initPanel:before", [e]), e.id = e.id || l(), e.matches("ul, ol")) {
            var _t3 = g("div");

            _t3.id = e.id, e.removeAttribute("id"), [].slice.call(e.classList).filter(function (e) {
              return "mm-" === e.slice(0, 3);
            }).forEach(function (n) {
              _t3.classList.add(n), e.classList.remove(n);
            }), Object.keys(e.dataset).filter(function (e) {
              return "mm" === e.slice(0, 2);
            }).forEach(function (n) {
              _t3.dataset[n] = e.dataset[n], delete e.dataset[n];
            }), e.before(_t3), _t3.append(e), e = _t3;
          }

          return e.classList.add("mm-panel"), e.tabIndex = -1, (null === (t = e.parentElement) || void 0 === t ? void 0 : t.matches(".mm-listitem--vertical")) || this.node.pnls.append(e), this._initNavbar(e), _(e, "ul, ol").forEach(function (e) {
            _this5._initListview(e);
          }), N(this, M).observe(e, {
            childList: !0
          }), this.trigger("initPanel:after", [e]), e;
        }
      }
    }, {
      key: "_initNavbar",
      value: function _initNavbar(e) {
        if (_(e, ".mm-navbar").length) return;
        var t = null,
            n = null;
        if (e.dataset.mmParent) for (t = L(this.node.pnls, "#" + e.dataset.mmParent)[0], n = t.closest(".mm-panel"); n.closest(".mm-listitem--vertical");) {
          n = n.parentElement.closest(".mm-panel");
        }
        if (null == t ? void 0 : t.matches(".mm-listitem--vertical")) return;
        this.trigger("initNavbar:before", [e]);
        var s = g("div.mm-navbar");

        if (this.opts.navbar.add || s.classList.add("mm-hidden"), n) {
          var _e4 = g("a.mm-btn.mm-btn--prev.mm-navbar__btn");

          _e4.href = "#" + n.id, _e4.title = this.i18n(this.conf.screenReader.closeSubmenu), s.append(_e4);
        }

        var i = null;
        t ? i = _(t, ".mm-listitem__text")[0] : n && (i = L(n, 'a[href="#' + e.id + '"]')[0]);
        var a = g("a.mm-navbar__title");

        switch (a.tabIndex = -1, a.ariaHidden = "true", this.opts.navbar.titleLink) {
          case "anchor":
            i && (a.href = i.getAttribute("href"));
            break;

          case "parent":
            n && (a.href = "#" + n.id);
        }

        var o = g("span");
        var l;
        o.innerHTML = e.dataset.mmTitle || ((l = i) ? [].slice.call(l.childNodes).filter(function (e) {
          return e.nodeType === Node.TEXT_NODE;
        }).map(function (e) {
          return e.nodeValue.trim();
        }).join(" ") : "") || this.i18n(this.opts.navbar.title) || this.i18n("Menu"), e.prepend(s), s.append(a), a.append(o), this.trigger("initNavbar:after", [e]);
      }
    }, {
      key: "_initListview",
      value: function _initListview(e) {
        var _this6 = this;

        ["htmlulistelement", "htmlolistelement"].includes(o(e)) && (e.matches(".mm-listview") || (y(e, this.conf.classNames.nolistview, "mm-nolistview"), e.matches(".mm-nolistview") || (this.trigger("initListview:before", [e]), e.classList.add("mm-listview"), _(e).forEach(function (e) {
          _this6._initListitem(e);
        }), N(this, x).observe(e, {
          childList: !0
        }), this.trigger("initListview:after", [e]))));
      }
    }, {
      key: "_initListitem",
      value: function _initListitem(e) {
        var _this7 = this;

        ["htmllielement"].includes(o(e)) && (e.matches(".mm-listitem") || (y(e, this.conf.classNames.divider, "mm-divider"), e.matches(".mm-divider") || (this.trigger("initListitem:before", [e]), e.classList.add("mm-listitem"), y(e, this.conf.classNames.selected, "mm-listitem--selected"), _(e, "a, span").forEach(function (e) {
          e.classList.add("mm-listitem__text");
        }), _(e, this.conf.panelNodetype.join(", ")).forEach(function (e) {
          _this7._initSubPanel(e);
        }), N(this, T).observe(e, {
          childList: !0
        }), this.trigger("initListitem:after", [e]))));
      }
    }, {
      key: "_initSubPanel",
      value: function _initSubPanel(e) {
        if (e.matches(".mm-panel")) return;
        var t = e.parentElement;
        (e.matches("." + this.conf.classNames.vertical) || !this.opts.slidingSubmenus) && t.classList.add("mm-listitem--vertical"), t.id = t.id || l(), e.id = e.id || l(), t.dataset.mmChild = e.id, e.dataset.mmParent = t.id;

        var n = _(t, ".mm-btn")[0];

        n || (n = g("a.mm-btn.mm-btn--next.mm-listitem__btn"), _(t, "a, span").forEach(function (e) {
          e.matches("span") ? (n.classList.add("mm-listitem__text"), n.innerHTML = e.innerHTML, t.insertBefore(n, e.nextElementSibling), e.remove()) : t.insertBefore(n, e.nextElementSibling);
        }), n.title = this.i18n(this.conf.screenReader[t.matches(".mm-listitem--vertical") ? "toggleSubmenu" : "openSubmenu"])), n.href = "#" + e.id, this._initPanel(e);
      }
    }, {
      key: "_initOpened",
      value: function _initOpened() {
        this.trigger("initOpened:before");
        var e = L(this.node.pnls, ".mm-listitem--selected").pop();

        var t = _(this.node.pnls, ".mm-panel")[0];

        e && (this.setSelected(e), t = e.closest(".mm-panel")), this.openPanel(t, !1, !1), this.trigger("initOpened:after");
      }
    }, {
      key: "i18n",
      value: function i18n(e) {
        return function (e, t) {
          return "string" == typeof t && void 0 !== d[t] && d[t][e] || e;
        }(e, this.conf.language);
      }
    }], [{
      key: "i18n",
      value: function i18n() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        if (!e || !t) return d;
        h(e, t);
      }
    }]);

    return O;
  }();

  M = new WeakMap(), x = new WeakMap(), T = new WeakMap(), O.addons = {}, O.node = {}, O.vars = {};
  var A = {
    use: !0,
    position: "left"
  };
  var H = {
    clone: !1,
    menu: {
      insertMethod: "append",
      insertSelector: "body"
    },
    page: {
      nodetype: "div",
      selector: null,
      noSelector: []
    },
    screenReader: {
      closeMenu: "Close menu",
      openMenu: "Open menu"
    }
  };
  O.prototype.open = function () {
    this.node.menu.matches(".mm-menu--opened") || (this.trigger("open:before"), this.node.menu.classList.add("mm-menu--opened"), this.node.wrpr.classList.add("mm-wrapper--opened"), O.node.blck.classList.add("mm-blocker--blocking"), this.node.open = document.activeElement, this.node.menu.focus(), this.trigger("open:after"));
  }, O.prototype.close = function () {
    var e;
    if (!this.node.menu.matches(".mm-menu--opened")) return;
    this.trigger("close:before"), this.node.menu.classList.remove("mm-menu--opened"), this.node.wrpr.classList.remove("mm-wrapper--opened"), O.node.blck.classList.remove("mm-blocker--blocking");
    null === (e = this.node.open || document.querySelector("[href=\"#".concat(this.node.menu.id, "\"]")) || O.node.page || null) || void 0 === e || e.focus(), document.body.scrollLeft = 0, document.documentElement.scrollLeft = 0, this.trigger("close:after");
  }, O.prototype.setPage = function (e) {
    var t = this.conf.offCanvas;

    if (!e) {
      var _n2 = "string" == typeof t.page.selector ? L(document.body, t.page.selector) : _(document.body, t.page.nodetype);

      if (_n2 = _n2.filter(function (e) {
        return !e.matches(".mm-menu, .mm-wrapper__blocker");
      }), t.page.noSelector.length && (_n2 = _n2.filter(function (e) {
        return !e.matches(t.page.noSelector.join(", "));
      })), _n2.length > 1) {
        var _e5 = g("div");

        _n2[0].before(_e5), _n2.forEach(function (t) {
          _e5.append(t);
        }), _n2 = [_e5];
      }

      e = _n2[0];
    }

    this.trigger("setPage:before", [e]), e.tabIndex = -1, e.classList.add("mm-page", "mm-slideout"), e.id = e.id || l(), O.node.blck.setAttribute("href", "#" + e.id), O.node.page = e, this.trigger("setPage:after", [e]);
  };
  var j = {
    fix: !0
  };
  var I = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
  var q = {
    close: !1,
    open: !1
  };
  var R = {
    add: !1
  };
  var B = {
    use: !1,
    top: [],
    bottom: [],
    position: "left",
    type: "default"
  };
  var D = {
    add: !1,
    blockPanel: !0,
    visible: 3
  };
  var F = {
    breadcrumbs: {
      separator: "/",
      removeFirst: !1
    }
  };

  function $() {
    var _this8 = this;

    this.opts.navbars = this.opts.navbars || [], this.conf.navbars = this.conf.navbars || {}, a(this.conf.navbars, F);
    var e = this.opts.navbars;

    if (void 0 !== e && (e instanceof Array || (e = [e]), e.length)) {
      var t = {};
      e.forEach(function (e) {
        if (!(e = function (e) {
          return "boolean" == typeof e && e && (e = {}), "object" != _typeof(e) && (e = {}), void 0 === e.content && (e.content = ["prev", "title"]), e.content instanceof Array || (e.content = [e.content]), void 0 === e.use && (e.use = !0), e;
        }(e)).use) return;
        var n = g("div.mm-navbar");
        var _e6 = e,
            s = _e6.position;
        "bottom" !== s && (s = "top"), t[s] || (t[s] = g("div.mm-navbars.mm-navbars--" + s)), t[s].append(n);

        for (var _t4 = 0, _s5 = e.content.length; _t4 < _s5; _t4++) {
          var _s6 = e.content[_t4];

          if ("string" == typeof _s6) {
            var _e7 = $.navbarContents[_s6];
            if ("function" == typeof _e7) _e7.call(_this8, n);else {
              var _e8 = g("span");

              _e8.innerHTML = _s6;

              var _t5 = _(_e8);

              1 == _t5.length && (_e8 = _t5[0]), n.append(_e8);
            }
          } else n.append(_s6);
        }

        if ("string" == typeof e.type) {
          var _t6 = $.navbarTypes[e.type];
          "function" == typeof _t6 && _t6.call(_this8, n);
        }

        var i = function i() {
          n.classList.remove("mm-hidden");
        },
            a = function a() {
          n.classList.add("mm-hidden");
        };

        "boolean" == typeof e.use ? _this8.bind("initMenu:after", i) : S(e.use, i, a);
      }), this.bind("initMenu:after", function () {
        for (var _e9 in t) {
          _this8.node.pnls["bottom" == _e9 ? "after" : "before"](t[_e9]);
        }
      });
    }
  }

  $.navbarContents = {
    breadcrumbs: function breadcrumbs(e) {
      var _this9 = this;

      var t = g("div.mm-navbar__breadcrumbs");
      e.append(t), this.bind("initNavbar:after", function (e) {
        if (!e.querySelector(".mm-navbar__breadcrumbs")) {
          _(e, ".mm-navbar")[0].classList.add("mm-hidden");

          for (var t = [], n = g("span.mm-navbar__breadcrumbs"), s = e, i = !0; s;) {
            if (!(s = s.closest(".mm-panel")).parentElement.matches(".mm-listitem--vertical")) {
              var _e10 = L(s, ".mm-navbar__title span")[0];

              if (_e10) {
                var _n3 = _e10.textContent;
                _n3.length && t.unshift(i ? "<span>".concat(_n3, "</span>") : "<a \n                                    href=\"#".concat(s.id, "\" \n                                    title=\"").concat(_this9.i18n(_this9.conf.screenReader.openSubmenu), "\"\n                                    >").concat(_n3, "</a>"));
              }

              i = !1;
            }

            s = L(_this9.node.pnls, "#" + s.dataset.mmParent)[0];
          }

          _this9.conf.navbars.breadcrumbs.removeFirst && t.shift(), n.innerHTML = t.join('<span class="mm-separator">' + _this9.conf.navbars.breadcrumbs.separator + "</span>"), _(e, ".mm-navbar")[0].append(n);
        }
      }), this.bind("openPanel:before", function (e) {
        var n = e.querySelector(".mm-navbar__breadcrumbs");
        t.innerHTML = n ? n.innerHTML : "";
      });
    },
    close: function close(e) {
      var t = g("a.mm-btn.mm-btn--close.mm-navbar__btn");
      t.title = this.i18n(this.conf.offCanvas.screenReader.closeMenu), e.append(t), this.bind("setPage:after", function (e) {
        t.href = "#" + e.id;
      });
    },
    prev: function prev(e) {
      var t = g("a.mm-btn.mm-hidden");
      e.append(t), this.bind("initNavbar:after", function (e) {
        _(e, ".mm-navbar")[0].classList.add("mm-hidden");
      }), this.bind("openPanel:before", function (e) {
        if (e.parentElement.matches(".mm-listitem--vertical")) return;
        t.classList.add("mm-hidden");
        var n = e.querySelector(".mm-navbar__btn.mm-btn--prev");

        if (n) {
          var _e11 = n.cloneNode(!0);

          t.after(_e11), t.remove(), t = _e11;
        }
      });
    },
    searchfield: function searchfield(e) {
      var t = g("div.mm-navbar__searchfield");
      t.id = l(), e.append(t), this.opts.searchfield = this.opts.searchfield || {}, this.opts.searchfield.add = !0, this.opts.searchfield.addTo = "#" + t.id;
    },
    title: function title(e) {
      var t = g("a.mm-navbar__title");
      e.append(t), this.bind("openPanel:before", function (e) {
        if (e.parentElement.matches(".mm-listitem--vertical")) return;
        var n = e.querySelector(".mm-navbar__title");

        if (n) {
          var _e12 = n.cloneNode(!0);

          t.after(_e12), t.remove(), t = _e12;
        }
      });
    }
  }, $.navbarTypes = {
    tabs: function tabs(e) {
      var _this10 = this;

      function t(n) {
        var s = _(e, ".mm-navbar__tab[href=\"#".concat(n.id, "\"]"))[0];

        if (s) s.classList.add("mm-navbar__tab--selected"), s.ariaExpanded = "true";else {
          var _e13 = L(this.node.pnls, "#" + n.dataset.mmParent)[0];
          _e13 && t.call(this, _e13.closest(".mm-panel"));
        }
      }

      e.classList.add("mm-navbar--tabs"), e.closest(".mm-navbars").classList.add("mm-navbars--has-tabs"), _(e, "a").forEach(function (e) {
        e.classList.add("mm-navbar__tab");
      }), this.bind("openPanel:before", function (n) {
        _(e, "a").forEach(function (e) {
          e.classList.remove("mm-navbar__tab--selected"), e.ariaExpanded = "false";
        }), t.call(_this10, n);
      }), this.bind("initPanels:after", function () {
        e.addEventListener("click", function (e) {
          var t, n, s;
          var i = null === (n = null === (t = e.target) || void 0 === t ? void 0 : t.closest(".mm-navbar__tab")) || void 0 === n ? void 0 : n.getAttribute("href");

          try {
            null === (s = L(_this10.node.pnls, i + ".mm-panel")[0]) || void 0 === s || s.classList.add("mm-panel--noanimation");
          } catch (e) {}
        }, {
          capture: !0
        });
      });
    }
  };
  var Z = {
    scroll: !1,
    update: !1
  };
  var W = {
    scrollOffset: 0,
    updateOffset: 50
  };
  var z = {
    add: !1,
    addTo: "panels",
    noResults: "No results found.",
    placeholder: "Search",
    searchIn: "panels",
    splash: "",
    title: "Search"
  };
  var V = {
    cancel: !0,
    clear: !0,
    form: {},
    input: {},
    panel: {},
    submit: !1
  },
      U = {
    cancel: "انصراف",
    "Cancel searching": "لغو جستجو",
    "Clear searchfield": "پاک کردن فیلد جستجو",
    "No results found.": "نتیجه‌ای یافت نشد.",
    Search: "جستجو"
  },
      Y = {
    cancel: "annuleren",
    "Cancel searching": "Zoeken annuleren",
    "Clear searchfield": "Zoekveld leeg maken",
    "No results found.": "Geen resultaten gevonden.",
    Search: "Zoeken"
  },
      K = {
    cancel: "cancelar",
    "Cancel searching": "Cancelar pesquisa",
    "Clear searchfield": "Limpar campo de pesquisa",
    "No results found.": "Nenhum resultado encontrado.",
    Search: "Buscar"
  },
      G = {
    cancel: "отменить",
    "Cancel searching": "Отменить поиск",
    "Clear searchfield": "Очистить поле поиска",
    "No results found.": "Ничего не найдено.",
    Search: "Найти"
  },
      X = {
    cancel: "zrušiť",
    "Cancel searching": "Zrušiť vyhľadávanie",
    "Clear searchfield": "Vymazať pole vyhľadávania",
    "No results found.": "Neboli nájdené žiadne výsledky.",
    Search: "Vyhľadávanie"
  };
  h({
    cancel: "abbrechen",
    "Cancel searching": "Suche abbrechen",
    "Clear searchfield": "Suchfeld löschen",
    "No results found.": "Keine Ergebnisse gefunden.",
    Search: "Suche"
  }, "de"), h(U, "fa"), h(Y, "nl"), h(K, "pt_br"), h(G, "ru"), h(X, "sk");

  var J = function J() {
    var e = this.opts.searchfield,
        t = this.conf.searchfield;

    var n = _(this.node.pnls, ".mm-panel--search")[0];

    return n || (n = g("div.mm-panel--search"), oe(n, t.panel), e.title.length && (n.dataset.mmTitle = this.i18n(e.title)), n.append(g("ul")), this._initPanel(n), n);
  },
      Q = function Q(e) {
    var t = this.opts.searchfield;

    if (e.matches(t.addTo)) {
      var _t7 = e.matches(".mm-panel--search");

      if (!L(e, ".mm-searchfield").length) {
        var _n4 = ee.call(this, _t7);

        _t7 && _n4.classList.add("mm-searchfield--cancelable"), e.prepend(_n4), te.call(this, _n4);
      }
    }

    if (t.splash.length && e.matches(".mm-panel--search") && !L(e, ".mm-panel__splash").length) {
      var _n5 = g("div.mm-panel__splash");

      _n5.innerHTML = t.splash, e.append(_n5);
    }

    if (t.noResults.length && !L(e, ".mm-panel__noresults").length) {
      var _n6 = g("div.mm-panel__noresults");

      _n6.innerHTML = this.i18n(t.noResults), e.append(_n6);
    }
  },
      ee = function ee() {
    var _this11 = this;

    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = this.opts.searchfield,
        n = this.conf.searchfield,
        s = g("form.mm-searchfield");
    oe(s, n.form);
    var i = g("div.mm-searchfield__input");
    s.append(i);
    var a = g("input");

    if (i.append(a), a.type = "text", a.autocomplete = "off", a.placeholder = this.i18n(t.placeholder), a.setAttribute("aria-label", this.i18n(t.placeholder)), oe(a, n.input), n.submit) {
      var _e14 = g("button.mm-btnreset.mm-btn.mm-btn--next.mm-searchfield__btn");

      _e14.type = "submit", i.append(_e14);
    } else if (n.clear) {
      var _e15 = g("button.mm-btnreset.mm-btn.mm-btn--close.mm-searchfield__btn");

      _e15.type = "reset", _e15.title = this.i18n("Clear searchfield"), i.append(_e15), s.addEventListener("reset", function () {
        window.requestAnimationFrame(function () {
          a.dispatchEvent(new Event("input"));
        });
      });
    }

    if (n.cancel && e) {
      var _e16 = g("a.mm-searchfield__cancel");

      _e16.href = "#", _e16.title = this.i18n("Cancel searching"), _e16.textContent = this.i18n("cancel"), s.append(_e16), _e16.addEventListener("click", function (e) {
        e.preventDefault(), _this11.closePanel(_(_this11.node.pnls, ".mm-panel--search")[0], !1);
      });
    }

    return s;
  },
      te = function te(e) {
    var _this12 = this;

    var t = this.opts.searchfield,
        n = e.closest(".mm-panel") || L(this.node.pnls, ".mm-panel--search")[0],
        s = L(e, "input")[0];
    var i = n.matches(".mm-panel--search") ? L(this.node.pnls, t.searchIn) : [n];
    i = i.filter(function (e) {
      return !e.matches(".mm-panel--search");
    });

    var a = function a() {
      var a = s.value.toLowerCase().trim(),
          o = [];

      if (i.forEach(function (e) {
        e.scrollTop = 0, o.push.apply(o, _toConsumableArray(L(e, ".mm-listitem")));
      }), a.length) {
        _this12.trigger("search:before"), e.classList.add("mm-searchfield--searching"), n.classList.add("mm-panel--searching"), o.forEach(function (e) {
          var t = _(e, ".mm-listitem__text")[0];

          var n;
          (!t || (n = t, [].slice.call(n.childNodes).filter(function (e) {
            return !e.ariaHidden;
          }).map(function (e) {
            return e.textContent;
          }).join(" ")).toLowerCase().indexOf(a) > -1) && (e.dataset.mmSearchresult = a);
        });
        var _t8 = 0;
        _t8 = n.matches(".mm-panel--search") ? ne(n, a, i) : ie(a, i), n.classList[0 == _t8 ? "add" : "remove"]("mm-panel--noresults"), _this12.trigger("search:after");
      } else _this12.trigger("clear:before"), e.classList.remove("mm-searchfield--searching"), n.classList.remove("mm-panel--searching", "mm-panel--noresults"), n.matches(".mm-panel--search") ? (se(n), t.splash || _this12.closePanel(n, !1, !1)) : ae(i), _this12.trigger("clear:after");
    };

    s.addEventListener("input", a), a();
  },
      ne = function ne(e, t, n) {
    var s = L(e, ".mm-listview")[0];
    s.innerHTML = "";
    var i = 0;
    return n.forEach(function (e) {
      var n = L(e, "[data-mm-searchresult=\"".concat(t, "\"]"));

      if (i += n.length, n.length) {
        var _t9 = L(e, ".mm-navbar__title")[0];

        if (_t9) {
          var _e17 = g("li.mm-divider");

          _e17.innerHTML = _t9.innerHTML, s.append(_e17);
        }

        n.forEach(function (e) {
          s.append(e.cloneNode(!0));
        });
      }
    }), i;
  },
      se = function se(e) {
    L(e, ".mm-listview")[0].innerHTML = "";
  },
      ie = function ie(e, t) {
    var n = 0;
    return t.forEach(function (t) {
      var s = L(t, "[data-mm-searchresult=\"".concat(e, "\"]"));
      n += s.length, s.length && s.forEach(function (t) {
        var n = function (e, t) {
          var n = [],
              s = e.previousElementSibling;

          for (; s;) {
            t && !s.matches(t) || n.push(s), s = s.previousElementSibling;
          }

          return n;
        }(t, ".mm-divider")[0];

        n && (n.dataset.mmSearchresult = e);
      }), L(t, ".mm-listitem, .mm-divider").forEach(function (t) {
        t.classList[t.dataset.mmSearchresult === e ? "remove" : "add"]("mm-hidden");
      });
    }), n;
  },
      ae = function ae(e) {
    e.forEach(function (e) {
      L(e, ".mm-listitem, .mm-divider").forEach(function (e) {
        e.classList.remove("mm-hidden");
      });
    });
  },
      oe = function oe(e, t) {
    t && Object.keys(t).forEach(function (n) {
      e[n] = t[n];
    });
  };

  var le = {
    add: !1,
    addTo: "panels"
  };
  var re = {
    current: !0,
    hover: !1,
    parent: !1
  };
  var me = {
    collapsed: {
      use: !1,
      blockMenu: !0
    },
    expanded: {
      use: !1,
      initial: "open"
    }
  };
  /*!
   * mmenu.js
   * mmenujs.com
   *
   * Copyright (c) Fred Heusschen
   * frebsite.nl
   */

  O.addons = {
    offcanvas: function offcanvas() {
      var _this13 = this;

      this.opts.offCanvas = this.opts.offCanvas || {}, this.conf.offCanvas = this.conf.offCanvas || {};
      var e = a(this.opts.offCanvas, A),
          t = a(this.conf.offCanvas, H);
      if (!e.use) return;
      var n = ["left", "left-front", "right", "right-front", "top", "bottom"];
      n.includes(e.position) || (e.position = n[0]), this._api.push("open", "close", "setPage"), this.bind("initMenu:before", function () {
        t.clone && (_this13.node.menu = _this13.node.menu.cloneNode(!0), _this13.node.menu.id && (_this13.node.menu.id = m(_this13.node.menu.id)), L(_this13.node.menu, "[id]").forEach(function (e) {
          e.id = m(e.id);
        })), _this13.node.wrpr = document.querySelector(t.menu.insertSelector), _this13.node.wrpr.classList.add("mm-wrapper--position-" + e.position), _this13.node.wrpr[t.menu.insertMethod](_this13.node.menu);
      }), O.node.blck || this.bind("initMenu:before", function () {
        var e = g("a.mm-wrapper__blocker.mm-blocker.mm-slideout");
        e.id = l(), e.title = _this13.i18n(t.screenReader.closeMenu), e.tabIndex = 0, document.querySelector(t.menu.insertSelector).append(e), O.node.blck = e;
      }), this.bind("initMenu:after", function () {
        _this13.setPage(O.node.page), _this13.node.menu.classList.add("mm-menu--offcanvas", "mm-menu--position-" + e.position);
        var t = window.location.hash;

        if (t) {
          var _e18 = c(_this13.node.menu.id);

          _e18 && _e18 == t.slice(1) && setTimeout(function () {
            _this13.open();
          }, 1e3);
        }
      }), document.addEventListener("click", function (e) {
        var t;

        switch (null === (t = e.target.closest("a")) || void 0 === t ? void 0 : t.getAttribute("href")) {
          case "#" + c(_this13.node.menu.id):
            e.preventDefault(), _this13.open();
            break;

          case "#" + c(O.node.page.id):
            e.preventDefault(), _this13.close();
        }
      }), document.addEventListener("keyup", function (e) {
        "Escape" == e.key && _this13.close();
      }), document.addEventListener("focusin", function (e) {
        var t, n;
        (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest("#" + _this13.node.menu.id)) && !_this13.node.menu.matches(".mm-menu--opened") && _this13.open(), (null === (n = document.activeElement) || void 0 === n ? void 0 : n.closest("#" + _this13.node.menu.id)) || _this13.node.wrpr.matches(".mm-wrapper--sidebar-expanded") || !_this13.node.menu.matches(".mm-menu--opened") || _this13.close();
      });
    },
    scrollBugFix: function scrollBugFix() {
      var _this14 = this;

      if (!I || !this.opts.offCanvas.use) return;
      this.opts.scrollBugFix = this.opts.scrollBugFix || {};
      if (!a(this.opts.scrollBugFix, j).fix) return;

      var e = function (e) {
        var t = "",
            n = null;
        return e.addEventListener("touchstart", function (e) {
          1 === e.touches.length && (t = "", n = e.touches[0].pageY);
        }), e.addEventListener("touchend", function (e) {
          0 === e.touches.length && (t = "", n = null);
        }), e.addEventListener("touchmove", function (e) {
          if (t = "", n && 1 === e.touches.length) {
            var _s7 = e.changedTouches[0].pageY;
            _s7 > n ? t = "down" : _s7 < n && (t = "up"), n = _s7;
          }
        }), {
          get: function get() {
            return t;
          }
        };
      }(this.node.menu);

      this.node.menu.addEventListener("scroll", function (e) {
        e.preventDefault(), e.stopPropagation();
      }, {
        passive: !1
      }), this.node.menu.addEventListener("touchmove", function (t) {
        var n = t.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");
        n && n.closest(".mm-listitem--vertical") && (n = function (e, t) {
          var n = [],
              s = e.parentElement;

          for (; s;) {
            n.push(s), s = s.parentElement;
          }

          return t ? n.filter(function (e) {
            return e.matches(t);
          }) : n;
        }(n, ".mm-panel").pop()), n ? (n.scrollHeight === n.offsetHeight || 0 == n.scrollTop && "down" == e.get() || n.scrollHeight == n.scrollTop + n.offsetHeight && "up" == e.get()) && t.stopPropagation() : t.stopPropagation();
      }, {
        passive: !1
      }), this.bind("open:after", function () {
        var e = _(_this14.node.pnls, ".mm-panel--opened")[0];

        e && (e.scrollTop = 0);
      }), window.addEventListener("orientationchange", function (e) {
        var t = _(_this14.node.pnls, ".mm-panel--opened")[0];

        t && (t.scrollTop = 0, t.style["-webkit-overflow-scrolling"] = "auto", t.style["-webkit-overflow-scrolling"] = "touch");
      });
    },
    theme: function theme() {
      var _this15 = this;

      this.opts.theme = this.opts.theme || "light", this.bind("initMenu:after", function () {
        _this15.node.menu.classList.add("mm-menu--theme-" + _this15.opts.theme);
      });
    },
    backButton: function backButton() {
      var _this16 = this;

      if (this.opts.backButton = this.opts.backButton || {}, !this.opts.offCanvas.use) return;
      var e = a(this.opts.backButton, q),
          t = "#" + this.node.menu.id;

      if (e.close) {
        var n = [];

        var _e19 = function _e19() {
          n = [t], _(_this16.node.pnls, ".mm-panel--opened, .mm-panel--parent").forEach(function (e) {
            n.push("#" + e.id);
          });
        };

        this.bind("open:after", function () {
          history.pushState(null, document.title, t);
        }), this.bind("open:after", _e19), this.bind("openPanel:after", _e19), this.bind("close:after", function () {
          n = [], history.back(), history.pushState(null, document.title, location.pathname + location.search);
        }), window.addEventListener("popstate", function (e) {
          if (_this16.node.menu.matches(".mm-menu--opened") && n.length) {
            var s = (n = n.slice(0, -1))[n.length - 1];
            s == t ? _this16.close() : (_this16.openPanel(_this16.node.menu.querySelector(s)), history.pushState(null, document.title, t));
          }
        });
      }

      e.open && window.addEventListener("popstate", function (e) {
        _this16.node.menu.matches(".mm-menu--opened") || location.hash != t || _this16.open();
      });
    },
    counters: function counters() {
      var _this17 = this;

      this.opts.counters = this.opts.counters || {};
      if (!a(this.opts.counters, R).add) return;

      var e = function e(_e20) {
        var t = _this17.node.pnls.querySelector("#" + _e20.dataset.mmParent);

        if (!t) return;
        var n = t.querySelector(".mm-counter");
        if (!n) return;
        var s = [];
        _(_e20, ".mm-listview").forEach(function (e) {
          s.push.apply(s, _toConsumableArray(_(e, ".mm-listitem")));
        }), n.innerHTML = E(s).length.toString();
      },
          t = new MutationObserver(function (t) {
        t.forEach(function (t) {
          "class" == t.attributeName && e(t.target.closest(".mm-panel"));
        });
      });

      this.bind("initListview:after", function (t) {
        var n = t.closest(".mm-panel"),
            s = _this17.node.pnls.querySelector("#" + n.dataset.mmParent);

        if (s) {
          if (!L(s, ".mm-counter").length) {
            var _e21 = g("span.mm-counter");

            _e21.ariaHidden = "true";

            var _t10 = _(s, ".mm-btn")[0];

            null == _t10 || _t10.prepend(_e21);
          }

          e(n);
        }
      }), this.bind("initListitem:after", function (e) {
        var n = e.closest(".mm-panel");
        if (!n) return;
        _this17.node.pnls.querySelector("#" + n.dataset.mmParent) && t.observe(e, {
          attributes: !0
        });
      });
    },
    iconbar: function iconbar() {
      var _this18 = this;

      this.opts.iconbar = this.opts.iconbar || {};
      var e = a(this.opts.iconbar, B);
      if (!e.use) return;
      var t;

      if (["top", "bottom"].forEach(function (n, s) {
        var i = e[n];
        "array" != o(i) && (i = [i]);
        var a = g("div.mm-iconbar__" + n);

        for (var _e22 = 0, _t11 = i.length; _e22 < _t11; _e22++) {
          "string" == typeof i[_e22] ? a.innerHTML += i[_e22] : a.append(i[_e22]);
        }

        a.children.length && (t || (t = g("div.mm-iconbar")), t.append(a));
      }), t) {
        this.bind("initMenu:after", function () {
          _this18.node.menu.prepend(t);
        });

        var _n7 = "mm-menu--iconbar-" + e.position,
            _s8 = function _s8() {
          _this18.node.menu.classList.add(_n7);
        },
            _i2 = function _i2() {
          _this18.node.menu.classList.remove(_n7);
        };

        if ("boolean" == typeof e.use ? this.bind("initMenu:after", _s8) : S(e.use, _s8, _i2), "tabs" == e.type) {
          t.classList.add("mm-iconbar--tabs"), t.addEventListener("click", function (e) {
            var t = e.target.closest(".mm-iconbar__tab");
            if (t) if (t.matches(".mm-iconbar__tab--selected")) e.stopImmediatePropagation();else try {
              var _n8 = L(_this18.node.menu, t.getAttribute("href") + ".mm-panel")[0];
              _n8 && (e.preventDefault(), e.stopImmediatePropagation(), _this18.openPanel(_n8, !1));
            } catch (e) {}
          });

          var _e23 = function _e23(n) {
            L(t, "a").forEach(function (e) {
              e.classList.remove("mm-iconbar__tab--selected");
            });
            var s = L(t, '[href="#' + n.id + '"]')[0];
            if (s) s.classList.add("mm-iconbar__tab--selected");else {
              var _t12 = L(_this18.node.pnls, "#" + n.dataset.mmParent)[0];
              _t12 && _e23(_t12.closest(".mm-panel"));
            }
          };

          this.bind("openPanel:before", _e23);
        }
      }
    },
    iconPanels: function iconPanels() {
      var _this19 = this;

      this.opts.iconPanels = this.opts.iconPanels || {};
      var e = a(this.opts.iconPanels, D);
      var t = !1;

      if ("first" == e.visible && (t = !0, e.visible = 1), e.visible = Math.min(3, Math.max(1, e.visible)), e.visible++, e.add) {
        this.bind("initMenu:after", function () {
          _this19.node.menu.classList.add("mm-menu--iconpanel");
        }), this.bind("initPanel:after", function (e) {
          e.tabIndex = -1;
        }), this.bind("initPanels:after", function () {
          document.addEventListener("keyup", function (e) {
            var t;

            if ("Tab" === e.key && (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".mm-menu")) === _this19.node.menu) {
              var _t13 = document.activeElement.closest(".mm-panel");

              !document.activeElement.matches(".mm-panel__blocker") && (null == _t13 ? void 0 : _t13.matches(".mm-panel--parent")) && (e.shiftKey ? _(_t13, ".mm-panel__blocker")[0].focus() : _(_this19.node.pnls, ".mm-panel--opened")[0].focus());
            }
          });
        });
        var _n9 = ["mm-panel--iconpanel-first", "mm-panel--iconpanel-0", "mm-panel--iconpanel-1", "mm-panel--iconpanel-2", "mm-panel--iconpanel-3"];
        t ? this.bind("initMenu:after", function () {
          var e;
          null === (e = _(_this19.node.pnls, ".mm-panel")[0]) || void 0 === e || e.classList.add(_n9[0]);
        }) : this.bind("openPanel:after", function (t) {
          if (t.parentElement.matches(".mm-listitem--vertical")) return;

          var s = _(_this19.node.pnls, ".mm-panel");

          s = s.filter(function (e) {
            return e.matches(".mm-panel--parent");
          }), s.push(t), s = s.slice(-e.visible), s.forEach(function (e, t) {
            var _e$classList3;

            (_e$classList3 = e.classList).remove.apply(_e$classList3, _n9), e.classList.add("mm-panel--iconpanel-" + t);
          });
        }), this.bind("initPanel:after", function (t) {
          if (e.blockPanel && !t.parentElement.matches(".mm-listitem--vertical") && !_(t, ".mm-panel__blocker")[0]) {
            var _e24 = g("a.mm-blocker.mm-panel__blocker");

            _e24.href = "#" + t.closest(".mm-panel").id, _e24.title = _this19.i18n(_this19.conf.screenReader.closeSubmenu), t.prepend(_e24);
          }
        }), this.bind("openPanel:after", function (e) {
          _(_this19.node.pnls, ".mm-panel").forEach(function (e) {
            var t = _(e, ".mm-panel__blocker")[0];

            null == t || t.classList[e.matches(".mm-panel--parent") ? "add" : "remove"]("mm-blocker--blocking");
          });
        });
      }
    },
    navbars: $,
    pageScroll: function pageScroll() {
      var _this20 = this;

      this.opts.pageScroll = this.opts.pageScroll || {}, this.conf.pageScroll = this.conf.pageScroll || {};
      var e = a(this.opts.pageScroll, Z),
          t = a(this.conf.pageScroll, W);
      var n;

      function s() {
        n && window.scrollTo({
          top: n.getBoundingClientRect().top + document.scrollingElement.scrollTop - t.scrollOffset,
          behavior: "smooth"
        }), n = null;
      }

      function i(e) {
        try {
          if ("#" == e.slice(0, 1)) return L(O.node.page, e)[0];
        } catch (e) {}

        return null;
      }

      if (this.opts.offCanvas.use && e.scroll && (this.bind("close:after", function () {
        s();
      }), this.node.menu.addEventListener("click", function (e) {
        var t, a;
        var o = (null === (a = null === (t = e.target) || void 0 === t ? void 0 : t.closest("a[href]")) || void 0 === a ? void 0 : a.getAttribute("href")) || "";
        (n = i(o)) && (e.preventDefault(), _this20.node.menu.matches(".mm-menu--sidebar-expanded") && _this20.node.wrpr.matches(".mm-wrapper--sidebar-expanded") ? s() : _this20.close());
      })), e.update) {
        var _e25 = [];
        this.bind("initListview:after", function (t) {
          var n = _(t, ".mm-listitem");

          w(n).forEach(function (t) {
            var n = i(t.getAttribute("href"));
            n && _e25.unshift(n);
          });
        });

        var _n10 = -1;

        window.addEventListener("scroll", function (s) {
          var i = window.scrollY;

          for (var a = 0; a < _e25.length; a++) {
            if (_e25[a].offsetTop < i + t.updateOffset) {
              if (_n10 !== a) {
                _n10 = a;

                var _t14 = _(_this20.node.pnls, ".mm-panel--opened")[0],
                    _s9 = L(_t14, ".mm-listitem"),
                    _i3 = w(_s9);

                _i3 = _i3.filter(function (t) {
                  return t.matches('[href="#' + _e25[a].id + '"]');
                }), _i3.length && _this20.setSelected(_i3[0].parentElement);
              }

              break;
            }
          }
        }, {
          passive: !0
        });
      }
    },
    searchfield: function searchfield() {
      var _this21 = this;

      this.opts.searchfield = this.opts.searchfield || {}, this.conf.searchfield = this.conf.searchfield || {};
      var e = a(this.opts.searchfield, z);
      a(this.conf.searchfield, V);

      if (e.add) {
        switch (e.addTo) {
          case "panels":
            e.addTo = ".mm-panel";
            break;

          case "searchpanel":
            e.addTo = ".mm-panel--search";
        }

        switch (e.searchIn) {
          case "panels":
            e.searchIn = ".mm-panel";
        }

        this.bind("initPanel:after", function (t) {
          t.matches(e.addTo) && !t.closest(".mm-listitem--vertical") && Q.call(_this21, t);
        }), this.bind("initMenu:after", function () {
          var t = J.call(_this21);
          Q.call(_this21, t), L(_this21.node.menu, e.addTo).forEach(function (n) {
            if (!n.matches(".mm-panel")) {
              var _s10 = ee.call(_this21, !0);

              n.append(_s10);
              var _i4 = L(_s10, "input")[0];
              e.splash.length ? (_i4.addEventListener("focusin", function () {
                _this21.openPanel(t, !1, !1);
              }), _this21.bind("openPanel:after", function (e) {
                e.matches(".mm-panel--search") ? _s10.classList.add("mm-searchfield--cancelable") : _s10.classList.remove("mm-searchfield--cancelable");
              })) : (_this21.bind("search:after", function () {
                _this21.openPanel(t, !1, !1);
              }), _i4.addEventListener("focusout", function () {
                _i4.value.length || _this21.closePanel(t, !1);
              })), te.call(_this21, _s10);
            }
          });
        }), this.bind("close:before", function () {
          L(_this21.node.menu, ".mm-searchfield input").forEach(function (e) {
            e.blur();
          });
        });
      }
    },
    sectionIndexer: function sectionIndexer() {
      var _this22 = this;

      this.opts.sectionIndexer = this.opts.sectionIndexer || {};
      a(this.opts.sectionIndexer, le).add && this.bind("initPanels:after", function () {
        if (!_this22.node.indx) {
          var _e26 = "";
          "abcdefghijklmnopqrstuvwxyz".split("").forEach(function (t) {
            _e26 += '<a href="#">' + t + "</a>";
          });

          var _t15 = g("div.mm-sectionindexer");

          _t15.innerHTML = _e26, _this22.node.pnls.prepend(_t15), _this22.node.indx = _t15, _this22.node.indx.addEventListener("click", function (e) {
            e.target.matches("a") && e.preventDefault();
          });

          var _n11 = function _n11(e) {
            if (!e.target.matches("a")) return;

            var t = e.target.textContent,
                n = _(_this22.node.pnls, ".mm-panel--opened")[0];

            var s = -1,
                i = n.scrollTop;
            n.scrollTop = 0, L(n, ".mm-divider").filter(function (e) {
              return !e.matches(".mm-hidden");
            }).forEach(function (e) {
              s < 0 && t == e.textContent.trim().slice(0, 1).toLowerCase() && (s = e.offsetTop);
            }), n.scrollTop = s > -1 ? s : i;
          };

          I ? (_this22.node.indx.addEventListener("touchstart", _n11), _this22.node.indx.addEventListener("touchmove", _n11)) : _this22.node.indx.addEventListener("mouseover", _n11);
        }

        _this22.bind("openPanel:before", function (e) {
          var t = L(e, ".mm-divider").filter(function (e) {
            return !e.matches(".mm-hidden");
          }).length;

          _this22.node.indx.classList[t ? "add" : "remove"]("mm-sectionindexer--active");
        });
      });
    },
    setSelected: function setSelected() {
      var _this23 = this;

      this.opts.setSelected = this.opts.setSelected || {};
      var e = a(this.opts.setSelected, re);

      if ("detect" == e.current) {
        var _e27 = function _e27(t) {
          t = t.split("?")[0].split("#")[0];

          var n = _this23.node.menu.querySelector('a[href="' + t + '"], a[href="' + t + '/"]');

          if (n) _this23.setSelected(n.parentElement);else {
            var _n12 = t.split("/").slice(0, -1);

            _n12.length && _e27(_n12.join("/"));
          }
        };

        this.bind("initMenu:after", function () {
          _e27.call(_this23, window.location.href);
        });
      } else e.current || this.bind("initListview:after", function (e) {
        _(e, ".mm-listitem--selected").forEach(function (e) {
          e.classList.remove("mm-listitem--selected");
        });
      });

      e.hover && this.bind("initMenu:after", function () {
        _this23.node.menu.classList.add("mm-menu--selected-hover");
      }), e.parent && (this.bind("openPanel:after", function (e) {
        L(_this23.node.pnls, ".mm-listitem--selected-parent").forEach(function (e) {
          e.classList.remove("mm-listitem--selected-parent");
        });
        var t = e;

        for (; t;) {
          var _e28 = L(_this23.node.pnls, "#" + t.dataset.mmParent)[0];
          t = null == _e28 ? void 0 : _e28.closest(".mm-panel"), _e28 && !_e28.matches(".mm-listitem--vertical") && _e28.classList.add("mm-listitem--selected-parent");
        }
      }), this.bind("initMenu:after", function () {
        _this23.node.menu.classList.add("mm-menu--selected-parent");
      }));
    },
    sidebar: function sidebar() {
      var _this24 = this;

      if (!this.opts.offCanvas.use) return;
      this.opts.sidebar = this.opts.sidebar || {};
      var e = a(this.opts.sidebar, me);

      if (e.collapsed.use) {
        this.bind("initMenu:after", function () {
          if (_this24.node.menu.classList.add("mm-menu--sidebar-collapsed"), e.collapsed.blockMenu && !_this24.node.blck) {
            var _e29 = g("a.mm-menu__blocker.mm-blocker");

            _e29.setAttribute("href", "#" + _this24.node.menu.id), _this24.node.blck = _e29, _this24.node.menu.prepend(_e29), _e29.title = _this24.i18n(_this24.conf.offCanvas.screenReader.openMenu);
          }
        });

        var _t16 = function _t16() {
          var e;
          _this24.node.wrpr.matches(".mm-wrapper--sidebar-collapsed") && (null === (e = _this24.node.blck) || void 0 === e || e.classList.add("mm-blocker--blocking"));
        },
            _n13 = function _n13() {
          var e;
          null === (e = _this24.node.blck) || void 0 === e || e.classList.remove("mm-blocker--blocking");
        };

        this.bind("open:after", _n13), this.bind("close:after", _t16);

        var _s11 = function _s11() {
          _this24.node.wrpr.classList.add("mm-wrapper--sidebar-collapsed"), _t16();
        },
            _i5 = function _i5() {
          _this24.node.wrpr.classList.remove("mm-wrapper--sidebar-collapsed"), _n13();
        };

        "boolean" == typeof e.collapsed.use ? this.bind("initMenu:after", _s11) : S(e.collapsed.use, _s11, _i5);
      }

      if (e.expanded.use) {
        this.bind("initMenu:after", function () {
          _this24.node.menu.classList.add("mm-menu--sidebar-expanded");
        });

        var _t17 = !1,
            _n14 = function _n14() {
          _t17 = !0, _this24.node.wrpr.classList.add("mm-wrapper--sidebar-expanded"), _this24.open();
        },
            _s12 = function _s12() {
          _t17 = !1, _this24.node.wrpr.classList.remove("mm-wrapper--sidebar-expanded"), _this24.close();
        };

        "boolean" == typeof e.expanded.use ? this.bind("initMenu:after", _n14) : S(e.expanded.use, _n14, _s12), this.bind("close:after", function () {
          _t17 && window.sessionStorage.setItem("mmenuExpandedState", "closed");
        }), this.bind("open:after", function () {
          _t17 && window.sessionStorage.setItem("mmenuExpandedState", "open");
        });
        var _i6 = e.expanded.initial;

        var _a2 = window.sessionStorage.getItem("mmenuExpandedState");

        switch (_a2) {
          case "open":
          case "closed":
            _i6 = _a2;
        }

        "closed" == _i6 && this.bind("init:after", function () {
          _this24.close();
        });
      }
    }
  };
  t["default"] = O;
  window && (window.Mmenu = O);
}]);