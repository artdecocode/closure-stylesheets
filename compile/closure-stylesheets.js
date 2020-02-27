#!/usr/bin/env node
             
const child_process = require('child_process');
const stream = require('stream');
const os = require('os');
const path = require('path');
const fs = require('fs');             
const n = child_process.spawn, r = child_process.spawnSync;
const t = stream.Writable;
const u = (a, b = 0, d = !1) => {
  if (0 === b && !d) {
    return a;
  }
  a = a.split("\n", d ? b + 1 : void 0);
  return d ? a[a.length - 1] : a.slice(b).join("\n");
}, v = (a, b = !1) => u(a, 2 + (b ? 1 : 0)), w = a => {
  ({callee:{caller:a}} = a);
  return a;
};
const x = os.homedir;
const y = /\s+at.*(?:\(|\s)(.*)\)?/, C = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:IGNORED_MODULES)\/.*)?\w+)\.js:\d+:\d+)|native)/, D = x(), E = a => {
  const {pretty:b = !1, ignoredModules:d = ["pirates"]} = {}, f = d.join("|"), e = new RegExp(C.source.replace("IGNORED_MODULES", f));
  return a.replace(/\\/g, "/").split("\n").filter(c => {
    c = c.match(y);
    if (null === c || !c[1]) {
      return !0;
    }
    c = c[1];
    return c.includes(".app/Contents/Resources/electron.asar") || c.includes(".app/Contents/Resources/default_app.asar") ? !1 : !e.test(c);
  }).filter(c => c.trim()).map(c => b ? c.replace(y, (g, h) => g.replace(h, h.replace(D, "~"))) : c).join("\n");
};
function F(a, b, d = !1) {
  return function(f) {
    var e = w(arguments), {stack:c} = Error();
    const g = u(c, 2, !0), h = (c = f instanceof Error) ? f.message : f;
    e = [`Error: ${h}`, ...null !== e && a === e || d ? [b] : [g, b]].join("\n");
    e = E(e);
    return Object.assign(c ? f : Error(), {message:h, stack:e});
  };
}
;function G(a) {
  var {stack:b} = Error();
  const d = w(arguments);
  b = v(b, a);
  return F(d, b, a);
}
;const H = (a, b) => {
  b.once("error", d => {
    a.emit("error", d);
  });
  return b;
};
class I extends t {
  constructor(a) {
    const {binary:b = !1, rs:d = null, ...f} = a || {}, {g:e = G(!0), proxyError:c} = a || {}, g = (h, l) => e(l);
    super(f);
    this.a = [];
    this.f = new Promise((h, l) => {
      this.on("finish", () => {
        let k;
        b ? k = Buffer.concat(this.a) : k = this.a.join("");
        h(k);
        this.a = [];
      });
      this.once("error", k => {
        if (-1 == k.stack.indexOf("\n")) {
          g`${k}`;
        } else {
          const m = E(k.stack);
          k.stack = m;
          c && g`${k}`;
        }
        l(k);
      });
      d && H(this, d).pipe(this);
    });
  }
  _write(a, b, d) {
    this.a.push(a);
    d();
  }
  get promise() {
    return this.f;
  }
}
const J = async a => {
  ({promise:a} = new I({rs:a, g:G(!0)}));
  return await a;
};
const K = async a => {
  const [b, d, f] = await Promise.all([new Promise((e, c) => {
    a.on("error", c).on("exit", g => {
      e(g);
    });
  }), a.stdout ? J(a.stdout) : void 0, a.stderr ? J(a.stderr) : void 0]);
  return {code:b, stdout:d, stderr:f};
};
const L = path.resolve;
const M = fs.unlinkSync;
/*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
const N = {black:30, red:31, green:32, yellow:33, blue:34, magenta:35, cyan:36, white:37, grey:90};
function O(a, b) {
  return (b = N[b]) ? `\x1b[${b}m${a}\x1b[0m` : a;
}
;const Q = (a, b, d = console.log) => {
  if ("object" != typeof b) {
    throw Error("Config is expected as an object.");
  }
  const f = b.rootSelector;
  var e = b.path;
  if (!e) {
    throw Error("Path to closure stylesheets JAR wasn't passed.");
  }
  if (f && !/^[.#]/.test(f)) {
    throw Error(`The root selector (${f}) must be either a class name or an ID.`);
  }
  Array.isArray(a) || (a = [a]);
  a = a.map(l => `"${l}"`);
  let c;
  const {whitelist:g, rename:h = "SIMPLE"} = b;
  h && (c = "temp-rename-map.json");
  b = P({...b, outputRenamingMap:c, excludedClassesFromRenaming:g, rootSelector:f, rename:h});
  a = ["-jar", e, ...a, ...b];
  e = "java " + a.join(" ");
  d(O(e, "grey"));
  return {b:a, c:() => {
    if (c) {
      const l = L(c);
      delete require.cache[l];
      const k = require(l);
      M(l);
      return k;
    }
    return null;
  }};
}, P = a => {
  const b = [], d = a.prettyPrint, f = a.sourceMap, e = a.allowUnrecognizedProperties, c = a.expandBrowserPrefix, g = a.rootSelector, h = a.rename, l = a.outputRenamingMap, k = a.preserveImportantComments, m = a.cssRenamingPrefix, z = a.excludedClassesFromRenaming, A = a.inputRenamingMap, p = a.outputBrowserPrefix, B = a.prefixes;
  a.skipHTMLEscaping && b.push("--skip-html-escaping");
  (c || p) && b.push("--expand-browser-prefix");
  p && b.push("--output-browser-prefix", p);
  d && b.push("--pretty-print");
  f && b.push("--output-source-map", f);
  g && b.push("--root-selector", g);
  e && b.push("--allow-unrecognized-properties");
  k && b.push("--preserve-important-comments");
  m && b.push("--css-renaming-prefix", m);
  A && (b.push("--input-renaming-map", A), b.push("--input-renaming-map-format", "JSON"));
  l && (b.push("--output-renaming-map", l), b.push("--output-renaming-map-format", "JSON"));
  h && b.push("--rename", h);
  z && z.forEach(q => {
    b.push("--excluded-classes-from-renaming", q);
  });
  B && B.forEach(q => {
    b.push("--prefixes", q);
  });
  return b;
}, R = a => {
  a = a.split("\n");
  if (a[0].startsWith("Compiler parsing error: Parse error")) {
    var b = /at line ([\d,]+) column ([\d,]+)/.exec(a[4]);
    if (b) {
      let [, f, e] = b;
      f = parseInt(f.replace(/,/g, ""), 10);
      e = parseInt(e.replace(/,/g, ""), 10);
      var d = a[5].split("\n")[f - 1];
      b = d.slice(Math.max(0, e - 20), e);
      const c = d.slice(e, e + 20);
      d = d.slice(e + 20, e + (process.stdout.columns ? process.stdout.columns - 42 : 100));
      const g = "\n" + " ".repeat(20) + "^";
      return [O(b, "grey"), O(c, "red"), O(d, "grey"), g, a.slice(7).join("\n")].join("");
    }
  }
};
/*
 closure-stylesheets: API to Closure Stylesheets.

 Copyright (C) 2020  Art Deco

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
module.exports = {_compileStylesheets:async function(a, b, d = console.log) {
  const {b:f, c:e} = Q(a, b, d);
  a = n("java", f, {shell:!0});
  b = K(a);
  a.promise = b;
  a.spawnCommand = a.spawnargs.join(" ");
  ({promise:a} = a);
  const {stderr:c, stdout:g, code:h} = await a;
  return h ? (a = R(c), {status:h, stderr:c, block:a}) : {renameMap:e(), stylesheet:g};
}, _compileStylesheetsSync:function(a, b, d = console.log) {
  const {b:f, c:e} = Q(a, b, d);
  let {stderr:c, stdout:g, status:h} = r("java", f, {shell:!0});
  c = c.toString();
  g = g.toString();
  return h ? (a = R(c), {status:h, stderr:c, block:a}) : {renameMap:e(), stylesheet:g};
}};


//# sourceMappingURL=closure-stylesheets.js.map