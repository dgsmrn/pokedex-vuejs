(function () {
  "use strict";
  var t = {
      7626: function (t, e, n) {
        var o = n(9242),
          r = n(3396),
          i = n.p + "img/pokedex.578c6feb.jpg";
        const s = { id: "app" },
          u = (0, r._)(
            "img",
            { src: "./img/pokedex.578c6feb.jpg", alt: "pokedex" },
            null,
            -1
          ),
          a = (0, r._)("hr", null, null, -1),
          c = { class: "column is-half is-offset-one-quarter" },
          l = (0, r._)("h1", { class: "is-size-4" }, "Pokedex", -1),
          p = (0, r._)("hr", null, null, -1);
        function f(t, e, n, i, f, d) {
          const m = (0, r.up)("Pokemon");
          return (
            (0, r.wg)(),
            (0, r.iD)("div", s, [
              u,
              a,
              (0, r._)("div", c, [
                l,
                (0, r.wy)(
                  (0, r._)(
                    "input",
                    {
                      type: "text",
                      class: "input is-rounded",
                      placeholder: "Buscar Pokemon pelo nome",
                      "onUpdate:modelValue":
                        e[0] || (e[0] = (t) => (f.busca = t)),
                    },
                    null,
                    512
                  ),
                  [[o.nr, f.busca]]
                ),
                (0, r._)(
                  "button",
                  {
                    class: "button is-fullwidth is-success",
                    id: "buscaBtn",
                    onClick:
                      e[1] || (e[1] = (...t) => d.buscar && d.buscar(...t)),
                  },
                  " Buscar "
                ),
                p,
                ((0, r.wg)(!0),
                (0, r.iD)(
                  r.HY,
                  null,
                  (0, r.Ko)(
                    f.filteredPokemons,
                    (t, e) => (
                      (0, r.wg)(),
                      (0, r.iD)("div", { key: t.name }, [
                        (0, r.Wm)(
                          m,
                          { name: t.name, url: t.url, num: e + 1 },
                          null,
                          8,
                          ["name", "url", "num"]
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var d = n(240),
          m = n(7139);
        const h = { class: "pokemon" },
          k = { class: "card" },
          b = { class: "card-image" },
          v = ["src"],
          g = { class: "card-content" },
          _ = { class: "media" },
          y = { class: "media-content" },
          w = { class: "title is-4" },
          P = { class: "subtitle is-6" },
          O = { class: "content" };
        function x(t, e, n, o, i, s) {
          return (
            (0, r.wg)(),
            (0, r.iD)("div", h, [
              (0, r._)("div", k, [
                (0, r._)("div", b, [
                  (0, r._)("figure", null, [
                    (0, r._)(
                      "img",
                      { src: i.currentImg, alt: "Placeholder image" },
                      null,
                      8,
                      v
                    ),
                  ]),
                ]),
                (0, r._)("div", g, [
                  (0, r._)("div", _, [
                    (0, r._)("div", y, [
                      (0, r._)(
                        "p",
                        w,
                        (0, m.zw)(n.num) + " - " + (0, m.zw)(s.upper(n.name)),
                        1
                      ),
                      (0, r._)("p", P, (0, m.zw)(i.pokemon.type), 1),
                    ]),
                  ]),
                  (0, r._)("div", O, [
                    (0, r._)(
                      "button",
                      {
                        class: "button is-fullwidth",
                        onClick:
                          e[0] ||
                          (e[0] = (...t) =>
                            s.mudarSprite && s.mudarSprite(...t)),
                      },
                      " Mudar Sprite "
                    ),
                  ]),
                ]),
              ]),
            ])
          );
        }
        var S = {
            created: function () {
              d.Z.get(this.url).then((t) => {
                (this.pokemon.type = t.data.types[0].type.name),
                  (this.pokemon.front = t.data.sprites.front_default),
                  (this.pokemon.back = t.data.sprites.back_default),
                  (this.currentImg = this.pokemon.front);
              });
            },
            data() {
              return {
                isFront: !0,
                currentImg: "",
                pokemon: { type: "", front: "", back: "" },
              };
            },
            props: { num: Number, name: String, url: String },
            methods: {
              upper: function (t) {
                let e = t[0].toUpperCase() + t.slice(1);
                return e;
              },
              mudarSprite: function () {
                this.isFront
                  ? ((this.isFront = !1), (this.currentImg = this.pokemon.back))
                  : ((this.isFront = !0),
                    (this.currentImg = this.pokemon.front));
              },
            },
          },
          j = n(89);
        const C = (0, j.Z)(S, [["render", x]]);
        var F = C,
          I = {
            name: "App",
            data() {
              return { pokemons: [], filteredPokemons: [], busca: "" };
            },
            created: function () {
              d.Z.get(
                "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
              ).then((t) => {
                console.log("Pegou a lista de pokemons"),
                  (this.pokemons = t.data.results),
                  (this.filteredPokemons = t.data.results);
              });
            },
            components: { Pokemon: F },
            methods: {
              buscar: function () {
                (this.filteredPokemons = this.pokemons),
                  "" == this.busca || " " == this.busca
                    ? (this.filteredPokemons = this.pokemons)
                    : (this.filteredPokemons = this.pokemons.filter(
                        (t) => t.name == this.busca
                      ));
              },
            },
            computed: {},
          };
        const z = (0, j.Z)(I, [["render", f]]);
        var D = z;
        (0, o.ri)(D).mount("#app");
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = t),
    (function () {
      var t = [];
      n.O = function (e, o, r, i) {
        if (!o) {
          var s = 1 / 0;
          for (l = 0; l < t.length; l++) {
            (o = t[l][0]), (r = t[l][1]), (i = t[l][2]);
            for (var u = !0, a = 0; a < o.length; a++)
              (!1 & i || s >= i) &&
              Object.keys(n.O).every(function (t) {
                return n.O[t](o[a]);
              })
                ? o.splice(a--, 1)
                : ((u = !1), i < s && (s = i));
            if (u) {
              t.splice(l--, 1);
              var c = r();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        i = i || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > i; l--) t[l] = t[l - 1];
        t[l] = [o, r, i];
      };
    })(),
    (function () {
      n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return n.d(e, { a: e }), e;
      };
    })(),
    (function () {
      n.d = function (t, e) {
        for (var o in e)
          n.o(e, o) &&
            !n.o(t, o) &&
            Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      n.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "/";
    })(),
    (function () {
      var t = { 143: 0 };
      n.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, o) {
          var r,
            i,
            s = o[0],
            u = o[1],
            a = o[2],
            c = 0;
          if (
            s.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (r in u) n.o(u, r) && (n.m[r] = u[r]);
            if (a) var l = a(n);
          }
          for (e && e(o); c < s.length; c++)
            (i = s[c]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(l);
        },
        o = (self["webpackChunkpokedex"] = self["webpackChunkpokedex"] || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var o = n.O(void 0, [998], function () {
    return n(7626);
  });
  o = n.O(o);
})();
//# sourceMappingURL=app.2f13bc14.js.map
