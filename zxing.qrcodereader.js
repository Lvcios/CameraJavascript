! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("text-encoding")) : "function" == typeof define && define.amd ? define("ZXing", ["text-encoding"], t) : "object" == typeof exports ? exports.ZXing = t(require("text-encoding")) : e.ZXing = t(e["text-encoding"])
}(this, function (e) {
    return function (e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function (e) {
            return e
        }, t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function (e) {
            var n = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 30)
    }([function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t, n) {
                    r(this, e), this.type = t, this.message = n
                }
                return a(e, [{
                    key: "getType",
                    value: function () {
                        return this.type
                    }
                }, {
                    key: "getMessage",
                    value: function () {
                        return this.message
                    }
                }], [{
                    key: "isOfType",
                    value: function (e, t) {
                        return e.type === t
                    }
                }]), e
            }();
        t.default = i, i.IllegalArgumentException = "IllegalArgumentException", i.NotFoundException = "NotFoundException", i.ArithmeticException = "ArithmeticException", i.FormatException = "FormatException", i.ChecksumException = "ChecksumException", i.WriterException = "WriterException", i.IllegalStateException = "IllegalStateException", i.UnsupportedOperationException = "UnsupportedOperationException", i.ReedSolomonException = "ReedSolomonException", i.ArgumentException = "ArgumentException", i.ReaderException = "ReaderException", e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e() {
                    r(this, e)
                }
                return a(e, null, [{
                    key: "arraycopy",
                    value: function (e, t, n, r, a) {
                        for (var i = t, o = r, u = a; u--;) n[o++] = e[i++]
                    }
                }, {
                    key: "currentTimeMillis",
                    value: function () {
                        return Date.now()
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(0),
            u = r(o),
            l = n(5),
            f = r(l),
            s = n(1),
            c = r(s),
            d = n(8),
            h = r(d),
            v = n(4),
            w = r(v),
            y = function () {
                function e(t, n, r, i) {
                    if (a(this, e), this.width = t, this.height = n, this.rowSize = r, this.bits = i, void 0 !== n && null !== n || (n = t), this.height = n, t < 1 || n < 1) throw new u.default(u.default.IllegalArgumentException, "Both dimensions must be greater than 0");
                    void 0 !== r && null !== r || (r = Math.floor((t + 31) / 32)), this.rowSize = r, void 0 !== i && null !== i || (this.bits = new Int32Array(this.rowSize * this.height))
                }
                return i(e, [{
                    key: "get",
                    value: function (e, t) {
                        var n = t * this.rowSize + Math.floor(e / 32);
                        return 0 != (this.bits[n] >>> (31 & e) & 1)
                    }
                }, {
                    key: "set",
                    value: function (e, t) {
                        var n = t * this.rowSize + Math.floor(e / 32);
                        this.bits[n] |= 1 << (31 & e) & 4294967295
                    }
                }, {
                    key: "unset",
                    value: function (e, t) {
                        var n = t * this.rowSize + Math.floor(e / 32);
                        this.bits[n] &= ~(1 << (31 & e) & 4294967295)
                    }
                }, {
                    key: "flip",
                    value: function (e, t) {
                        var n = t * this.rowSize + Math.floor(e / 32);
                        this.bits[n] ^= 1 << (31 & e) & 4294967295
                    }
                }, {
                    key: "xor",
                    value: function (e) {
                        if (this.width != e.getWidth() || this.height != e.getHeight() || this.rowSize != e.getRowSize()) throw new u.default(u.default.IllegalArgumentException, "input matrix dimensions do not match");
                        for (var t = new f.default(Math.floor(this.width / 32) + 1), n = this.rowSize, r = this.bits, a = 0, i = this.height; a < i; a++)
                            for (var o = a * n, l = e.getRow(a, t).getBitArray(), s = 0; s < n; s++) r[o + s] ^= l[s]
                    }
                }, {
                    key: "clear",
                    value: function () {
                        for (var e = this.bits, t = e.length, n = 0; n < t; n++) e[n] = 0
                    }
                }, {
                    key: "setRegion",
                    value: function (e, t, n, r) {
                        if (t < 0 || e < 0) throw new u.default(u.default.IllegalArgumentException, "Left and top must be nonnegative");
                        if (r < 1 || n < 1) throw new u.default(u.default.IllegalArgumentException, "Height and width must be at least 1");
                        var a = e + n,
                            i = t + r;
                        if (i > this.height || a > this.width) throw new u.default(u.default.IllegalArgumentException, "The region must fit inside the matrix");
                        for (var o = this.rowSize, l = this.bits, f = t; f < i; f++)
                            for (var s = f * o, c = e; c < a; c++) l[s + Math.floor(c / 32)] |= 1 << (31 & c) & 4294967295
                    }
                }, {
                    key: "getRow",
                    value: function (e, t) {
                        null === t || void 0 === t || t.getSize() < this.width ? t = new f.default(this.width) : t.clear();
                        for (var n = this.rowSize, r = this.bits, a = e * n, i = 0; i < n; i++) t.setBulk(32 * i, r[a + i]);
                        return t
                    }
                }, {
                    key: "setRow",
                    value: function (e, t) {
                        c.default.arraycopy(t.getBitArray(), 0, this.bits, e * this.rowSize, this.rowSize)
                    }
                }, {
                    key: "rotate180",
                    value: function () {
                        for (var e = this.getWidth(), t = this.getHeight(), n = new f.default(e), r = new f.default(e), a = 0, i = Math.floor((t + 1) / 2) ; a < i; a++) n = this.getRow(a, n), r = this.getRow(t - 1 - a, r), n.reverse(), r.reverse(), this.setRow(a, r), this.setRow(t - 1 - a, n)
                    }
                }, {
                    key: "getEnclosingRectangle",
                    value: function () {
                        for (var e = this.width, t = this.height, n = this.rowSize, r = this.bits, a = e, i = t, o = -1, u = -1, l = 0; l < t; l++)
                            for (var f = 0; f < n; f++) {
                                var s = r[l * n + f];
                                if (0 !== s) {
                                    if (l < i && (i = l), l > u && (u = l), 32 * f < a) {
                                        for (var c = 0; 0 == (s << 31 - c & 4294967295) ;) c++;
                                        32 * f + c < a && (a = 32 * f + c)
                                    }
                                    if (32 * f + 31 > o) {
                                        for (var d = 31; s >>> d == 0;) d--;
                                        32 * f + d > o && (o = 32 * f + d)
                                    }
                                }
                            }
                        return o < a || u < i ? null : Int32Array.from([a, i, o - a + 1, u - i + 1])
                    }
                }, {
                    key: "getTopLeftOnBit",
                    value: function () {
                        for (var e = this.rowSize, t = this.bits, n = 0; n < t.length && 0 == t[n];) n++;
                        if (n === t.length) return null;
                        for (var r = n / e, a = n % e * 32, i = t[n], o = 0; 0 == (i << 31 - o & 4294967295) ;) o++;
                        return a += o, Int32Array.from([a, r])
                    }
                }, {
                    key: "getBottomRightOnBit",
                    value: function () {
                        for (var e = this.rowSize, t = this.bits, n = t.length - 1; n >= 0 && 0 === t[n];) n--;
                        if (n < 0) return null;
                        for (var r = Math.floor(n / e), a = 32 * Math.floor(n % e), i = t[n], o = 31; i >>> o == 0;) o--;
                        return a += o, Int32Array.from([a, r])
                    }
                }, {
                    key: "getWidth",
                    value: function () {
                        return this.width
                    }
                }, {
                    key: "getHeight",
                    value: function () {
                        return this.height
                    }
                }, {
                    key: "getRowSize",
                    value: function () {
                        return this.rowSize
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (!(t instanceof e)) return !1;
                        var n = t;
                        return this.width === n.width && this.height === n.height && this.rowSize === n.rowSize && h.default.equals(this.bits, n.bits)
                    }
                }, {
                    key: "hashCode",
                    value: function () {
                        var e = this.width;
                        return e = 31 * e + this.width, e = 31 * e + this.height, e = 31 * e + this.rowSize, e = 31 * e + h.default.hashCode(this.bits)
                    }
                }, {
                    key: "toString",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
                        return this.buildToString(e, t, n)
                    }
                }, {
                    key: "buildToString",
                    value: function (e, t, n) {
                        var r = new w.default;
                        r.append(n);
                        for (var a = 0, i = this.height; a < i; a++) {
                            for (var o = 0, u = this.width; o < u; o++) r.append(this.get(o, a) ? e : t);
                            r.append(n)
                        }
                        return r.toString()
                    }
                }, {
                    key: "clone",
                    value: function () {
                        return new e(this.width, this.height, this.rowSize, this.bits.slice())
                    }
                }], [{
                    key: "parseFromBooleanArray",
                    value: function (t) {
                        for (var n = t.length, r = t[0].length, a = new e(r, n), i = 0; i < n; i++)
                            for (var o = t[i], u = 0; u < r; u++) o[u] && a.set(u, i);
                        return a
                    }
                }, {
                    key: "parseFromString",
                    value: function (t, n, r) {
                        if (null === t) throw new u.default(u.default.IllegalArgumentException, "stringRepresentation cannot be null");
                        for (var a = new Array(t.length), i = 0, o = 0, l = -1, f = 0, s = 0; s < t.length;)
                            if ("\n" === t.charAt(s) || "\r" === t.charAt(s)) {
                                if (i > o) {
                                    if (-1 === l) l = i - o;
                                    else if (i - o != l) throw new u.default(u.default.IllegalArgumentException, "row lengths do not match");
                                    o = i, f++
                                }
                                s++
                            } else if (t.substring(s, s + n.length) === n) s += n.length, a[i] = !0, i++;
                            else {
                                if (t.substring(s, s + r.length) !== r) throw new u.default(u.default.IllegalArgumentException, "illegal character encountered: " + t.substring(s));
                                s += r.length, a[i] = !1, i++
                            }
                        if (i > o) {
                            if (-1 === l) l = i - o;
                            else if (i - o !== l) throw new u.default(u.default.IllegalArgumentException, "row lengths do not match");
                            f++
                        }
                        for (var c = new e(l, f), d = 0; d < i; d++) a[d] && c.set(Math.floor(d % l), Math.floor(d / l));
                        return c
                    }
                }]), e
            }();
        t.default = y, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e() {
                    r(this, e)
                }
                return a(e, null, [{
                    key: "numberOfTrailingZeros",
                    value: function (e) {
                        var t = void 0;
                        if (0 === e) return 32;
                        var n = 31;
                        return t = e << 16, 0 !== t && (n -= 16, e = t), t = e << 8, 0 !== t && (n -= 8, e = t), t = e << 4, 0 !== t && (n -= 4, e = t), t = e << 2, 0 !== t && (n -= 2, e = t), n - (e << 1 >>> 31)
                    }
                }, {
                    key: "numberOfLeadingZeros",
                    value: function (e) {
                        if (0 === e) return 32;
                        var t = 1;
                        return e >>> 16 == 0 && (t += 16, e <<= 16), e >>> 24 == 0 && (t += 8, e <<= 8), e >>> 28 == 0 && (t += 4, e <<= 4), e >>> 30 == 0 && (t += 2, e <<= 2), t -= e >>> 31
                    }
                }, {
                    key: "toHexString",
                    value: function (e) {
                        return e.toString(16)
                    }
                }, {
                    key: "bitCount",
                    value: function (e) {
                        return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), e = e + (e >>> 4) & 252645135, e += e >>> 8, 63 & (e += e >>> 16)
                    }
                }]), e
            }();
        t.default = i, i.MIN_VALUE_32_BITS = -2147483648, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    r(this, e), this.value = t
                }
                return a(e, [{
                    key: "append",
                    value: function (e) {
                        return this.value += "string" == typeof e ? e.toString() : String.fromCharCode(e), this
                    }
                }, {
                    key: "length",
                    value: function () {
                        return this.value.length
                    }
                }, {
                    key: "charAt",
                    value: function (e) {
                        return this.value.charAt(e)
                    }
                }, {
                    key: "deleteCharAt",
                    value: function (e) {
                        this.value = this.value.substr(0, e) + this.value.substring(e + 1)
                    }
                }, {
                    key: "setCharAt",
                    value: function (e, t) {
                        this.value = this.value.substr(0, e) + t + this.value.substr(e + 1)
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return this.value
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(1),
            u = r(o),
            l = n(3),
            f = r(l),
            s = n(8),
            c = r(s),
            d = n(0),
            h = r(d),
            v = function () {
                function e(t, n) {
                    a(this, e), void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = void 0 === n || null === n ? e.makeArray(t) : n)
                }
                return i(e, [{
                    key: "getSize",
                    value: function () {
                        return this.size
                    }
                }, {
                    key: "getSizeInBytes",
                    value: function () {
                        return Math.floor((this.size + 7) / 8)
                    }
                }, {
                    key: "ensureCapacity",
                    value: function (t) {
                        if (t > 32 * this.bits.length) {
                            var n = e.makeArray(t);
                            u.default.arraycopy(this.bits, 0, n, 0, this.bits.length), this.bits = n
                        }
                    }
                }, {
                    key: "get",
                    value: function (e) {
                        return 0 != (this.bits[Math.floor(e / 32)] & 1 << (31 & e))
                    }
                }, {
                    key: "set",
                    value: function (e) {
                        this.bits[Math.floor(e / 32)] |= 1 << (31 & e)
                    }
                }, {
                    key: "flip",
                    value: function (e) {
                        this.bits[Math.floor(e / 32)] ^= 1 << (31 & e)
                    }
                }, {
                    key: "getNextSet",
                    value: function (e) {
                        var t = this.size;
                        if (e >= t) return t;
                        var n = this.bits,
                            r = Math.floor(e / 32),
                            a = n[r];
                        a &= ~((1 << (31 & e)) - 1);
                        for (var i = n.length; 0 === a;) {
                            if (++r === i) return t;
                            a = n[r]
                        }
                        var o = 32 * r + f.default.numberOfTrailingZeros(a);
                        return o > t ? t : o
                    }
                }, {
                    key: "getNextUnset",
                    value: function (e) {
                        var t = this.size;
                        if (e >= t) return t;
                        var n = this.bits,
                            r = Math.floor(e / 32),
                            a = ~n[r];
                        a &= ~((1 << (31 & e)) - 1);
                        for (var i = n.length; 0 === a;) {
                            if (++r === i) return t;
                            a = ~n[r]
                        }
                        var o = 32 * r + f.default.numberOfTrailingZeros(a);
                        return o > t ? t : o
                    }
                }, {
                    key: "setBulk",
                    value: function (e, t) {
                        this.bits[Math.floor(e / 32)] = t
                    }
                }, {
                    key: "setRange",
                    value: function (e, t) {
                        if (t < e || e < 0 || t > this.size) throw new h.default(h.default.IllegalArgumentException);
                        if (t !== e) {
                            t--;
                            for (var n = Math.floor(e / 32), r = Math.floor(t / 32), a = this.bits, i = n; i <= r; i++) {
                                var o = i > n ? 0 : 31 & e,
                                    u = i < r ? 31 : 31 & t,
                                    l = (2 << u) - (1 << o);
                                a[i] |= l
                            }
                        }
                    }
                }, {
                    key: "clear",
                    value: function () {
                        for (var e = this.bits.length, t = this.bits, n = 0; n < e; n++) t[n] = 0
                    }
                }, {
                    key: "isRange",
                    value: function (e, t, n) {
                        if (t < e || e < 0 || t > this.size) throw new h.default(h.default.IllegalArgumentException);
                        if (t === e) return !0;
                        t--;
                        for (var r = Math.floor(e / 32), a = Math.floor(t / 32), i = this.bits, o = r; o <= a; o++) {
                            var u = o > r ? 0 : 31 & e,
                                l = o < a ? 31 : 31 & t,
                                f = (2 << l) - (1 << u) & 4294967295;
                            if ((i[o] & f) !== (n ? f : 0)) return !1
                        }
                        return !0
                    }
                }, {
                    key: "appendBit",
                    value: function (e) {
                        this.ensureCapacity(this.size + 1), e && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
                    }
                }, {
                    key: "appendBits",
                    value: function (e, t) {
                        if (t < 0 || t > 32) throw new h.default(h.default.IllegalArgumentException, "Num bits must be between 0 and 32");
                        this.ensureCapacity(this.size + t);
                        for (var n = (this.appendBit, t) ; n > 0; n--) this.appendBit(1 == (e >> n - 1 & 1))
                    }
                }, {
                    key: "appendBitArray",
                    value: function (e) {
                        var t = e.size;
                        this.ensureCapacity(this.size + t);
                        for (var n = (this.appendBit, 0) ; n < t; n++) this.appendBit(e.get(n))
                    }
                }, {
                    key: "xor",
                    value: function (e) {
                        if (this.size != e.size) throw new h.default(h.default.IllegalArgumentException, "Sizes don't match");
                        for (var t = this.bits, n = 0, r = t.length; n < r; n++) t[n] ^= e.bits[n]
                    }
                }, {
                    key: "toBytes",
                    value: function (e, t, n, r) {
                        for (var a = 0; a < r; a++) {
                            for (var i = 0, o = 0; o < 8; o++) this.get(e) && (i |= 1 << 7 - o), e++;
                            t[n + a] = i
                        }
                    }
                }, {
                    key: "getBitArray",
                    value: function () {
                        return this.bits
                    }
                }, {
                    key: "reverse",
                    value: function () {
                        for (var e = new Int32Array(this.bits.length), t = Math.floor((this.size - 1) / 32), n = t + 1, r = this.bits, a = 0; a < n; a++) {
                            var i = r[a];
                            i = i >> 1 & 1431655765 | (1431655765 & i) << 1, i = i >> 2 & 858993459 | (858993459 & i) << 2, i = i >> 4 & 252645135 | (252645135 & i) << 4, i = i >> 8 & 16711935 | (16711935 & i) << 8, i = i >> 16 & 65535 | (65535 & i) << 16, e[t - a] = i
                        }
                        if (this.size !== 32 * n) {
                            for (var o = 32 * n - this.size, u = e[0] >>> o, l = 1; l < n; l++) {
                                var f = e[l];
                                u |= f << 32 - o, e[l - 1] = u, u = f >>> o
                            }
                            e[n - 1] = u
                        }
                        this.bits = e
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (!(t instanceof e)) return !1;
                        var n = t;
                        return this.size === n.size && c.default.equals(this.bits, n.bits)
                    }
                }, {
                    key: "hashCode",
                    value: function () {
                        return 31 * this.size + c.default.hashCode(this.bits)
                    }
                }, {
                    key: "toString",
                    value: function () {
                        for (var e = "", t = 0, n = this.size; t < n; t++) 0 == (7 & t) && (e += " "), e += this.get(t) ? "X" : ".";
                        return e
                    }
                }, {
                    key: "clone",
                    value: function () {
                        return new e(this.size, this.bits.slice())
                    }
                }], [{
                    key: "makeArray",
                    value: function (e) {
                        return new Int32Array(Math.floor((e + 31) / 32))
                    }
                }]), e
            }();
        t.default = v, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e(t, n, a) {
                    r(this, e), this.valueIdentifier = t, this.name = a, this.values = "number" == typeof n ? Int32Array.from([n]) : n;
                    for (var i = arguments.length, o = Array(i > 3 ? i - 3 : 0), u = 3; u < i; u++) o[u - 3] = arguments[u];
                    this.otherEncodingNames = o, e.VALUE_IDENTIFIER_TO_ECI.set(t, this), e.NAME_TO_ECI.set(a, this);
                    for (var l = this.values, f = 0, s = l.length; f !== s; f++) {
                        var c = l[f];
                        e.VALUES_TO_ECI.set(c, this)
                    }
                    var d = !0,
                        h = !1,
                        v = void 0;
                    try {
                        for (var w, y = o[Symbol.iterator]() ; !(d = (w = y.next()).done) ; d = !0) {
                            var g = w.value;
                            e.NAME_TO_ECI.set(g, this)
                        }
                    } catch (e) {
                        h = !0, v = e
                    } finally {
                        try {
                            !d && y.return && y.return()
                        } finally {
                            if (h) throw v
                        }
                    }
                }
                return a(e, [{
                    key: "getValueIdentifier",
                    value: function () {
                        return this.valueIdentifier
                    }
                }, {
                    key: "getName",
                    value: function () {
                        return this.name
                    }
                }, {
                    key: "getValue",
                    value: function () {
                        return this.values[0]
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (!(t instanceof e)) return !1;
                        var n = t;
                        return this.getName() === n.getName()
                    }
                }], [{
                    key: "getCharacterSetECIByValue",
                    value: function (t) {
                        if (t < 0 || t >= 900) throw new o.default(o.default.FormatException, "incorect value");
                        var n = e.VALUES_TO_ECI.get(t);
                        if (void 0 === n) throw new o.default(o.default.FormatException, "incorect value");
                        return n
                    }
                }, {
                    key: "getCharacterSetECIByName",
                    value: function (t) {
                        var n = e.NAME_TO_ECI.get(t);
                        if (void 0 === n) throw new o.default(o.default.FormatException, "incorect value");
                        return n
                    }
                }]), e
            }();
        t.default = u, u.VALUE_IDENTIFIER_TO_ECI = new Map, u.VALUES_TO_ECI = new Map, u.NAME_TO_ECI = new Map, u.Cp437 = new u(0, Int32Array.from([0, 2]), "Cp437"), u.ISO8859_1 = new u(1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), u.ISO8859_2 = new u(2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), u.ISO8859_3 = new u(3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), u.ISO8859_4 = new u(4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), u.ISO8859_5 = new u(5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), u.ISO8859_6 = new u(6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), u.ISO8859_7 = new u(7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), u.ISO8859_8 = new u(8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), u.ISO8859_9 = new u(9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), u.ISO8859_10 = new u(10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), u.ISO8859_11 = new u(11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), u.ISO8859_13 = new u(12, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), u.ISO8859_14 = new u(13, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), u.ISO8859_15 = new u(14, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), u.ISO8859_16 = new u(15, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), u.SJIS = new u(16, 20, "SJIS", "Shift_JIS"), u.Cp1250 = new u(17, 21, "Cp1250", "windows-1250"), u.Cp1251 = new u(18, 22, "Cp1251", "windows-1251"), u.Cp1252 = new u(19, 23, "Cp1252", "windows-1252"), u.Cp1256 = new u(20, 24, "Cp1256", "windows-1256"), u.UnicodeBigUnmarked = new u(21, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), u.UTF8 = new u(22, 26, "UTF8", "UTF-8"), u.ASCII = new u(23, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), u.Big5 = new u(24, 28, "Big5"), u.GB18030 = new u(25, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), u.EUC_KR = new u(26, 30, "EUC_KR", "EUC-KR"), e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(10),
            u = r(o),
            l = n(0),
            f = r(l),
            s = n(3),
            c = r(s),
            d = function () {
                function e(t, n, r) {
                    a(this, e), this.primitive = t, this.size = n, this.generatorBase = r;
                    for (var i = new Int32Array(n), o = 1, l = 0; l < n; l++) i[l] = o, (o *= 2) >= n && (o ^= t, o &= n - 1);
                    this.expTable = i;
                    for (var f = new Int32Array(n), s = 0; s < n - 1; s++) f[i[s]] = s;
                    this.logTable = f, this.zero = new u.default(this, Int32Array.from([0])), this.one = new u.default(this, Int32Array.from([1]))
                }
                return i(e, [{
                    key: "getZero",
                    value: function () {
                        return this.zero
                    }
                }, {
                    key: "getOne",
                    value: function () {
                        return this.one
                    }
                }, {
                    key: "buildMonomial",
                    value: function (e, t) {
                        if (e < 0) throw new f.default(f.default.IllegalArgumentException);
                        if (0 === t) return this.zero;
                        var n = new Int32Array(e + 1);
                        return n[0] = t, new u.default(this, n)
                    }
                }, {
                    key: "exp",
                    value: function (e) {
                        return this.expTable[e]
                    }
                }, {
                    key: "log",
                    value: function (e) {
                        if (0 === e) throw new f.default(f.default.IllegalArgumentException);
                        return this.logTable[e]
                    }
                }, {
                    key: "inverse",
                    value: function (e) {
                        if (0 === e) throw new f.default(f.default.ArithmeticException);
                        return this.expTable[this.size - this.logTable[e] - 1]
                    }
                }, {
                    key: "multiply",
                    value: function (e, t) {
                        return 0 === e || 0 === t ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.size - 1)]
                    }
                }, {
                    key: "getSize",
                    value: function () {
                        return this.size
                    }
                }, {
                    key: "getGeneratorBase",
                    value: function () {
                        return this.generatorBase
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return "GF(0x" + c.default.toHexString(this.primitive) + "," + this.size + ")"
                    }
                }, {
                    key: "equals",
                    value: function (e) {
                        return e === this
                    }
                }], [{
                    key: "addOrSubtract",
                    value: function (e, t) {
                        return e ^ t
                    }
                }]), e
            }();
        t.default = d, d.AZTEC_DATA_12 = new d(4201, 4096, 1), d.AZTEC_DATA_10 = new d(1033, 1024, 1), d.AZTEC_DATA_6 = new d(67, 64, 1), d.AZTEC_PARAM = new d(19, 16, 1), d.QR_CODE_FIELD_256 = new d(285, 256, 0), d.DATA_MATRIX_FIELD_256 = new d(301, 256, 1), d.AZTEC_DATA_8 = d.DATA_MATRIX_FIELD_256, d.MAXICODE_FIELD_64 = d.AZTEC_DATA_6, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(1),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e() {
                    r(this, e)
                }
                return a(e, null, [{
                    key: "equals",
                    value: function (e, t) {
                        if (!e) return !1;
                        if (!t) return !1;
                        if (!e.length) return !1;
                        if (!t.length) return !1;
                        if (e.length !== t.length) return !1;
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0
                    }
                }, {
                    key: "hashCode",
                    value: function (e) {
                        if (null === e) return 0;
                        var t = 1,
                            n = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var i, o = e[Symbol.iterator]() ; !(n = (i = o.next()).done) ; n = !0) {
                                t = 31 * t + i.value
                            }
                        } catch (e) {
                            r = !0, a = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return t
                    }
                }, {
                    key: "fillUint8Array",
                    value: function (e, t) {
                        for (var n = 0; n !== e.length; n++) e[n] = t
                    }
                }, {
                    key: "copyOf",
                    value: function (e, t) {
                        var n = new Int32Array(t);
                        return o.default.arraycopy(e, 0, n, 0, Math.min(e.length, t)), n
                    }
                }, {
                    key: "binarySearch",
                    value: function (t, n, r) {
                        void 0 === r && (r = e.numberComparator);
                        for (var a = 0, i = t.length - 1; a <= i;) {
                            var o = i + a >> 1,
                                u = r(n, t[o]);
                            if (u > 0) a = o + 1;
                            else {
                                if (!(u < 0)) return o;
                                i = o - 1
                            }
                        }
                        return -a - 1
                    }
                }, {
                    key: "numberComparator",
                    value: function (e, t) {
                        return e - t
                    }
                }]), e
            }();
        t.default = u, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(23),
            u = r(o),
            l = n(63),
            f = r(l),
            s = function () {
                function e(t, n) {
                    a(this, e), this.x = t, this.y = n
                }
                return i(e, [{
                    key: "getX",
                    value: function () {
                        return this.x
                    }
                }, {
                    key: "getY",
                    value: function () {
                        return this.y
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (t instanceof e) {
                            var n = t;
                            return this.x == n.x && this.y == n.y
                        }
                        return !1
                    }
                }, {
                    key: "hashCode",
                    value: function () {
                        return 31 * f.default.floatToIntBits(this.x) + f.default.floatToIntBits(this.y)
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return "(" + this.x + "," + this.y + ")"
                    }
                }], [{
                    key: "orderBestPatterns",
                    value: function (e) {
                        var t = this.distance(e[0], e[1]),
                            n = this.distance(e[1], e[2]),
                            r = this.distance(e[0], e[2]),
                            a = void 0,
                            i = void 0,
                            o = void 0;
                        if (n >= t && n >= r ? (i = e[0], a = e[1], o = e[2]) : r >= n && r >= t ? (i = e[1], a = e[0], o = e[2]) : (i = e[2], a = e[0], o = e[1]), this.crossProductZ(a, i, o) < 0) {
                            var u = a;
                            a = o, o = u
                        }
                        e[0] = a, e[1] = i, e[2] = o
                    }
                }, {
                    key: "distance",
                    value: function (e, t) {
                        return u.default.distance(e.x, e.y, t.x, t.y)
                    }
                }, {
                    key: "crossProductZ",
                    value: function (e, t, n) {
                        var r = t.x,
                            a = t.y;
                        return (n.x - r) * (e.y - a) - (n.y - a) * (e.x - r)
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(7),
            u = r(o),
            l = n(0),
            f = r(l),
            s = n(1),
            c = r(s),
            d = function () {
                function e(t, n) {
                    if (a(this, e), 0 === n.length) throw new f.default(f.default.IllegalArgumentException);
                    this.field = t;
                    var r = n.length;
                    if (r > 1 && 0 === n[0]) {
                        for (var i = 1; i < r && 0 === n[i];) i++;
                        i === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - i), c.default.arraycopy(n, i, this.coefficients, 0, this.coefficients.length))
                    } else this.coefficients = n
                }
                return i(e, [{
                    key: "getCoefficients",
                    value: function () {
                        return this.coefficients
                    }
                }, {
                    key: "getDegree",
                    value: function () {
                        return this.coefficients.length - 1
                    }
                }, {
                    key: "isZero",
                    value: function () {
                        return 0 === this.coefficients[0]
                    }
                }, {
                    key: "getCoefficient",
                    value: function (e) {
                        return this.coefficients[this.coefficients.length - 1 - e]
                    }
                }, {
                    key: "evaluateAt",
                    value: function (e) {
                        if (0 === e) return this.getCoefficient(0);
                        var t = this.coefficients,
                            n = void 0;
                        if (1 === e) {
                            n = 0;
                            for (var r = 0, a = t.length; r !== a; r++) {
                                var i = t[r];
                                n = u.default.addOrSubtract(n, i)
                            }
                            return n
                        }
                        n = t[0];
                        for (var o = t.length, l = this.field, f = 1; f < o; f++) n = u.default.addOrSubtract(l.multiply(e, n), t[f]);
                        return n
                    }
                }, {
                    key: "addOrSubtract",
                    value: function (t) {
                        if (!this.field.equals(t.field)) throw new f.default(f.default.IllegalArgumentException, "GenericGFPolys do not have same GenericGF field");
                        if (this.isZero()) return t;
                        if (t.isZero()) return this;
                        var n = this.coefficients,
                            r = t.coefficients;
                        if (n.length > r.length) {
                            var a = n;
                            n = r, r = a
                        }
                        var i = new Int32Array(r.length),
                            o = r.length - n.length;
                        c.default.arraycopy(r, 0, i, 0, o);
                        for (var l = o; l < r.length; l++) i[l] = u.default.addOrSubtract(n[l - o], r[l]);
                        return new e(this.field, i)
                    }
                }, {
                    key: "multiply",
                    value: function (t) {
                        if (!this.field.equals(t.field)) throw new f.default(f.default.IllegalArgumentException, "GenericGFPolys do not have same GenericGF field");
                        if (this.isZero() || t.isZero()) return this.field.getZero();
                        for (var n = this.coefficients, r = n.length, a = t.coefficients, i = a.length, o = new Int32Array(r + i - 1), l = this.field, s = 0; s < r; s++)
                            for (var c = n[s], d = 0; d < i; d++) o[s + d] = u.default.addOrSubtract(o[s + d], l.multiply(c, a[d]));
                        return new e(l, o)
                    }
                }, {
                    key: "multiplyScalar",
                    value: function (t) {
                        if (0 === t) return this.field.getZero();
                        if (1 === t) return this;
                        for (var n = this.coefficients.length, r = this.field, a = new Int32Array(n), i = this.coefficients, o = 0; o < n; o++) a[o] = r.multiply(i[o], t);
                        return new e(r, a)
                    }
                }, {
                    key: "multiplyByMonomial",
                    value: function (t, n) {
                        if (t < 0) throw new f.default(f.default.IllegalArgumentException);
                        if (0 === n) return this.field.getZero();
                        for (var r = this.coefficients, a = r.length, i = new Int32Array(a + t), o = this.field, u = 0; u < a; u++) i[u] = o.multiply(r[u], n);
                        return new e(o, i)
                    }
                }, {
                    key: "divide",
                    value: function (e) {
                        if (!this.field.equals(e.field)) throw new f.default(f.default.IllegalArgumentException, "GenericGFPolys do not have same GenericGF field");
                        if (e.isZero()) throw new f.default(f.default.IllegalArgumentException, "Divide by 0");
                        for (var t = this.field, n = t.getZero(), r = this, a = e.getCoefficient(e.getDegree()), i = t.inverse(a) ; r.getDegree() >= e.getDegree() && !r.isZero() ;) {
                            var o = r.getDegree() - e.getDegree(),
                                u = t.multiply(r.getCoefficient(r.getDegree()), i),
                                l = e.multiplyByMonomial(o, u),
                                s = t.buildMonomial(o, u);
                            n = n.addOrSubtract(s), r = r.addOrSubtract(l)
                        }
                        return [n, r]
                    }
                }, {
                    key: "toString",
                    value: function () {
                        for (var e = "", t = this.getDegree() ; t >= 0; t--) {
                            var n = this.getCoefficient(t);
                            if (0 != n) {
                                if (n < 0 ? (e += " - ", n = -n) : e.length > 0 && (e += " + "), 0 === t || 1 != n) {
                                    var r = this.field.log(n);
                                    0 === r ? e += "1" : 1 === r ? e += "a" : (e += "a^", e += r)
                                }
                                0 != t && (1 === t ? e += "x" : (e += "x^", e += t))
                            }
                        }
                        return e
                    }
                }]), e
            }();
        t.default = d, e.exports = t.default
    }, function (t, n) {
        t.exports = e
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e(t, n, a) {
                    r(this, e), this.value = t, this.stringValue = n, this.bits = a, e.FOR_BITS.set(a, this), e.FOR_VALUE.set(t, this)
                }
                return a(e, [{
                    key: "getValue",
                    value: function () {
                        return this.value
                    }
                }, {
                    key: "getBits",
                    value: function () {
                        return this.bits
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return this.stringValue
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (!(t instanceof e)) return !1;
                        var n = t;
                        return this.value === n.value
                    }
                }], [{
                    key: "fromString",
                    value: function (t) {
                        switch (t) {
                            case "L":
                                return e.L;
                            case "M":
                                return e.M;
                            case "Q":
                                return e.Q;
                            case "H":
                                return e.H;
                            default:
                                throw new o.default(o.default.ArgumentException, t + "not available")
                        }
                    }
                }, {
                    key: "forBits",
                    value: function (t) {
                        if (t < 0 || t >= e.FOR_BITS.size) throw new o.default(o.default.IllegalArgumentException);
                        return e.FOR_BITS.get(t)
                    }
                }]), e
            }();
        t.default = u, u.FOR_BITS = new Map, u.FOR_VALUE = new Map, u.L = new u(0, "L", 1), u.M = new u(1, "M", 0), u.Q = new u(2, "Q", 3), u.H = new u(3, "H", 2), e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(12),
            u = r(o),
            l = n(3),
            f = r(l),
            s = function () {
                function e(t) {
                    a(this, e), this.errorCorrectionLevel = u.default.forBits(t >> 3 & 3), this.dataMask = 7 & t
                }
                return i(e, [{
                    key: "getErrorCorrectionLevel",
                    value: function () {
                        return this.errorCorrectionLevel
                    }
                }, {
                    key: "getDataMask",
                    value: function () {
                        return this.dataMask
                    }
                }, {
                    key: "hashCode",
                    value: function () {
                        return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (!(t instanceof e)) return !1;
                        var n = t;
                        return this.errorCorrectionLevel === n.errorCorrectionLevel && this.dataMask === n.dataMask
                    }
                }], [{
                    key: "numBitsDiffering",
                    value: function (e, t) {
                        return f.default.bitCount(e ^ t)
                    }
                }, {
                    key: "decodeFormatInformation",
                    value: function (t, n) {
                        var r = e.doDecodeFormatInformation(t, n);
                        return null !== r ? r : e.doDecodeFormatInformation(t ^ e.FORMAT_INFO_MASK_QR, n ^ e.FORMAT_INFO_MASK_QR)
                    }
                }, {
                    key: "doDecodeFormatInformation",
                    value: function (t, n) {
                        var r = Number.MAX_SAFE_INTEGER,
                            a = 0,
                            i = !0,
                            o = !1,
                            u = void 0;
                        try {
                            for (var l, f = e.FORMAT_INFO_DECODE_LOOKUP[Symbol.iterator]() ; !(i = (l = f.next()).done) ; i = !0) {
                                var s = l.value,
                                    c = s[0];
                                if (c === t || c === n) return new e(s[1]);
                                var d = e.numBitsDiffering(t, c);
                                d < r && (a = s[1], r = d), t != n && (d = e.numBitsDiffering(n, c)) < r && (a = s[1], r = d)
                            }
                        } catch (e) {
                            o = !0, u = e
                        } finally {
                            try {
                                !i && f.return && f.return()
                            } finally {
                                if (o) throw u
                            }
                        }
                        return r <= 3 ? new e(a) : null
                    }
                }]), e
            }();
        t.default = s, s.FORMAT_INFO_MASK_QR = 21522, s.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]), Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from([20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]), Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from([26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]), Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from([13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]), Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])], e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(2),
            u = r(o),
            l = n(0),
            f = r(l),
            s = n(13),
            c = r(s),
            d = n(16),
            h = r(d),
            v = n(15),
            w = r(v),
            y = function () {
                function e(t, n) {
                    a(this, e), this.versionNumber = t, this.alignmentPatternCenters = n;
                    for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
                    this.ecBlocks = i;
                    var u = 0,
                        l = i[0].getECCodewordsPerBlock(),
                        f = i[0].getECBlocks(),
                        s = !0,
                        c = !1,
                        d = void 0;
                    try {
                        for (var h, v = f[Symbol.iterator]() ; !(s = (h = v.next()).done) ; s = !0) {
                            var w = h.value;
                            u += w.getCount() * (w.getDataCodewords() + l)
                        }
                    } catch (e) {
                        c = !0, d = e
                    } finally {
                        try {
                            !s && v.return && v.return()
                        } finally {
                            if (c) throw d
                        }
                    }
                    this.totalCodewords = u
                }
                return i(e, [{
                    key: "getVersionNumber",
                    value: function () {
                        return this.versionNumber
                    }
                }, {
                    key: "getAlignmentPatternCenters",
                    value: function () {
                        return this.alignmentPatternCenters
                    }
                }, {
                    key: "getTotalCodewords",
                    value: function () {
                        return this.totalCodewords
                    }
                }, {
                    key: "getDimensionForVersion",
                    value: function () {
                        return 17 + 4 * this.versionNumber
                    }
                }, {
                    key: "getECBlocksForLevel",
                    value: function (e) {
                        return this.ecBlocks[e.getValue()]
                    }
                }, {
                    key: "buildFunctionPattern",
                    value: function () {
                        var e = this.getDimensionForVersion(),
                            t = new u.default(e);
                        t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
                        for (var n = this.alignmentPatternCenters.length, r = 0; r < n; r++)
                            for (var a = this.alignmentPatternCenters[r] - 2, i = 0; i < n; i++) 0 == r && (0 == i || i == n - 1) || r == n - 1 && 0 == i || t.setRegion(this.alignmentPatternCenters[i] - 2, a, 5, 5);
                        return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return "" + this.versionNumber
                    }
                }], [{
                    key: "getProvisionalVersionForDimension",
                    value: function (e) {
                        if (e % 4 != 1) throw new f.default(f.default.FormatException);
                        try {
                            return this.getVersionForNumber((e - 17) / 4)
                        } catch (e) {
                            throw new f.default(f.default.FormatException)
                        }
                    }
                }, {
                    key: "getVersionForNumber",
                    value: function (t) {
                        if (t < 1 || t > 40) throw new f.default(f.default.IllegalArgumentException);
                        return e.VERSIONS[t - 1]
                    }
                }, {
                    key: "decodeVersionInformation",
                    value: function (t) {
                        for (var n = Number.MAX_SAFE_INTEGER, r = 0, a = 0; a < e.VERSION_DECODE_INFO.length; a++) {
                            var i = e.VERSION_DECODE_INFO[a];
                            if (i === t) return e.getVersionForNumber(a + 7);
                            var o = c.default.numBitsDiffering(t, i);
                            o < n && (r = a + 7, n = o)
                        }
                        return n <= 3 ? e.getVersionForNumber(r) : null
                    }
                }]), e
            }();
        t.default = y, y.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017]), y.VERSIONS = [new y(1, new Int32Array(0), new h.default(7, new w.default(1, 19)), new h.default(10, new w.default(1, 16)), new h.default(13, new w.default(1, 13)), new h.default(17, new w.default(1, 9))), new y(2, Int32Array.from([6, 18]), new h.default(10, new w.default(1, 34)), new h.default(16, new w.default(1, 28)), new h.default(22, new w.default(1, 22)), new h.default(28, new w.default(1, 16))), new y(3, Int32Array.from([6, 22]), new h.default(15, new w.default(1, 55)), new h.default(26, new w.default(1, 44)), new h.default(18, new w.default(2, 17)), new h.default(22, new w.default(2, 13))), new y(4, Int32Array.from([6, 26]), new h.default(20, new w.default(1, 80)), new h.default(18, new w.default(2, 32)), new h.default(26, new w.default(2, 24)), new h.default(16, new w.default(4, 9))), new y(5, Int32Array.from([6, 30]), new h.default(26, new w.default(1, 108)), new h.default(24, new w.default(2, 43)), new h.default(18, new w.default(2, 15), new w.default(2, 16)), new h.default(22, new w.default(2, 11), new w.default(2, 12))), new y(6, Int32Array.from([6, 34]), new h.default(18, new w.default(2, 68)), new h.default(16, new w.default(4, 27)), new h.default(24, new w.default(4, 19)), new h.default(28, new w.default(4, 15))), new y(7, Int32Array.from([6, 22, 38]), new h.default(20, new w.default(2, 78)), new h.default(18, new w.default(4, 31)), new h.default(18, new w.default(2, 14), new w.default(4, 15)), new h.default(26, new w.default(4, 13), new w.default(1, 14))), new y(8, Int32Array.from([6, 24, 42]), new h.default(24, new w.default(2, 97)), new h.default(22, new w.default(2, 38), new w.default(2, 39)), new h.default(22, new w.default(4, 18), new w.default(2, 19)), new h.default(26, new w.default(4, 14), new w.default(2, 15))), new y(9, Int32Array.from([6, 26, 46]), new h.default(30, new w.default(2, 116)), new h.default(22, new w.default(3, 36), new w.default(2, 37)), new h.default(20, new w.default(4, 16), new w.default(4, 17)), new h.default(24, new w.default(4, 12), new w.default(4, 13))), new y(10, Int32Array.from([6, 28, 50]), new h.default(18, new w.default(2, 68), new w.default(2, 69)), new h.default(26, new w.default(4, 43), new w.default(1, 44)), new h.default(24, new w.default(6, 19), new w.default(2, 20)), new h.default(28, new w.default(6, 15), new w.default(2, 16))), new y(11, Int32Array.from([6, 30, 54]), new h.default(20, new w.default(4, 81)), new h.default(30, new w.default(1, 50), new w.default(4, 51)), new h.default(28, new w.default(4, 22), new w.default(4, 23)), new h.default(24, new w.default(3, 12), new w.default(8, 13))), new y(12, Int32Array.from([6, 32, 58]), new h.default(24, new w.default(2, 92), new w.default(2, 93)), new h.default(22, new w.default(6, 36), new w.default(2, 37)), new h.default(26, new w.default(4, 20), new w.default(6, 21)), new h.default(28, new w.default(7, 14), new w.default(4, 15))), new y(13, Int32Array.from([6, 34, 62]), new h.default(26, new w.default(4, 107)), new h.default(22, new w.default(8, 37), new w.default(1, 38)), new h.default(24, new w.default(8, 20), new w.default(4, 21)), new h.default(22, new w.default(12, 11), new w.default(4, 12))), new y(14, Int32Array.from([6, 26, 46, 66]), new h.default(30, new w.default(3, 115), new w.default(1, 116)), new h.default(24, new w.default(4, 40), new w.default(5, 41)), new h.default(20, new w.default(11, 16), new w.default(5, 17)), new h.default(24, new w.default(11, 12), new w.default(5, 13))), new y(15, Int32Array.from([6, 26, 48, 70]), new h.default(22, new w.default(5, 87), new w.default(1, 88)), new h.default(24, new w.default(5, 41), new w.default(5, 42)), new h.default(30, new w.default(5, 24), new w.default(7, 25)), new h.default(24, new w.default(11, 12), new w.default(7, 13))), new y(16, Int32Array.from([6, 26, 50, 74]), new h.default(24, new w.default(5, 98), new w.default(1, 99)), new h.default(28, new w.default(7, 45), new w.default(3, 46)), new h.default(24, new w.default(15, 19), new w.default(2, 20)), new h.default(30, new w.default(3, 15), new w.default(13, 16))), new y(17, Int32Array.from([6, 30, 54, 78]), new h.default(28, new w.default(1, 107), new w.default(5, 108)), new h.default(28, new w.default(10, 46), new w.default(1, 47)), new h.default(28, new w.default(1, 22), new w.default(15, 23)), new h.default(28, new w.default(2, 14), new w.default(17, 15))), new y(18, Int32Array.from([6, 30, 56, 82]), new h.default(30, new w.default(5, 120), new w.default(1, 121)), new h.default(26, new w.default(9, 43), new w.default(4, 44)), new h.default(28, new w.default(17, 22), new w.default(1, 23)), new h.default(28, new w.default(2, 14), new w.default(19, 15))), new y(19, Int32Array.from([6, 30, 58, 86]), new h.default(28, new w.default(3, 113), new w.default(4, 114)), new h.default(26, new w.default(3, 44), new w.default(11, 45)), new h.default(26, new w.default(17, 21), new w.default(4, 22)), new h.default(26, new w.default(9, 13), new w.default(16, 14))), new y(20, Int32Array.from([6, 34, 62, 90]), new h.default(28, new w.default(3, 107), new w.default(5, 108)), new h.default(26, new w.default(3, 41), new w.default(13, 42)), new h.default(30, new w.default(15, 24), new w.default(5, 25)), new h.default(28, new w.default(15, 15), new w.default(10, 16))), new y(21, Int32Array.from([6, 28, 50, 72, 94]), new h.default(28, new w.default(4, 116), new w.default(4, 117)), new h.default(26, new w.default(17, 42)), new h.default(28, new w.default(17, 22), new w.default(6, 23)), new h.default(30, new w.default(19, 16), new w.default(6, 17))), new y(22, Int32Array.from([6, 26, 50, 74, 98]), new h.default(28, new w.default(2, 111), new w.default(7, 112)), new h.default(28, new w.default(17, 46)), new h.default(30, new w.default(7, 24), new w.default(16, 25)), new h.default(24, new w.default(34, 13))), new y(23, Int32Array.from([6, 30, 54, 78, 102]), new h.default(30, new w.default(4, 121), new w.default(5, 122)), new h.default(28, new w.default(4, 47), new w.default(14, 48)), new h.default(30, new w.default(11, 24), new w.default(14, 25)), new h.default(30, new w.default(16, 15), new w.default(14, 16))), new y(24, Int32Array.from([6, 28, 54, 80, 106]), new h.default(30, new w.default(6, 117), new w.default(4, 118)), new h.default(28, new w.default(6, 45), new w.default(14, 46)), new h.default(30, new w.default(11, 24), new w.default(16, 25)), new h.default(30, new w.default(30, 16), new w.default(2, 17))), new y(25, Int32Array.from([6, 32, 58, 84, 110]), new h.default(26, new w.default(8, 106), new w.default(4, 107)), new h.default(28, new w.default(8, 47), new w.default(13, 48)), new h.default(30, new w.default(7, 24), new w.default(22, 25)), new h.default(30, new w.default(22, 15), new w.default(13, 16))), new y(26, Int32Array.from([6, 30, 58, 86, 114]), new h.default(28, new w.default(10, 114), new w.default(2, 115)), new h.default(28, new w.default(19, 46), new w.default(4, 47)), new h.default(28, new w.default(28, 22), new w.default(6, 23)), new h.default(30, new w.default(33, 16), new w.default(4, 17))), new y(27, Int32Array.from([6, 34, 62, 90, 118]), new h.default(30, new w.default(8, 122), new w.default(4, 123)), new h.default(28, new w.default(22, 45), new w.default(3, 46)), new h.default(30, new w.default(8, 23), new w.default(26, 24)), new h.default(30, new w.default(12, 15), new w.default(28, 16))), new y(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new h.default(30, new w.default(3, 117), new w.default(10, 118)), new h.default(28, new w.default(3, 45), new w.default(23, 46)), new h.default(30, new w.default(4, 24), new w.default(31, 25)), new h.default(30, new w.default(11, 15), new w.default(31, 16))), new y(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new h.default(30, new w.default(7, 116), new w.default(7, 117)), new h.default(28, new w.default(21, 45), new w.default(7, 46)), new h.default(30, new w.default(1, 23), new w.default(37, 24)), new h.default(30, new w.default(19, 15), new w.default(26, 16))), new y(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new h.default(30, new w.default(5, 115), new w.default(10, 116)), new h.default(28, new w.default(19, 47), new w.default(10, 48)), new h.default(30, new w.default(15, 24), new w.default(25, 25)), new h.default(30, new w.default(23, 15), new w.default(25, 16))), new y(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new h.default(30, new w.default(13, 115), new w.default(3, 116)), new h.default(28, new w.default(2, 46), new w.default(29, 47)), new h.default(30, new w.default(42, 24), new w.default(1, 25)), new h.default(30, new w.default(23, 15), new w.default(28, 16))), new y(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new h.default(30, new w.default(17, 115)), new h.default(28, new w.default(10, 46), new w.default(23, 47)), new h.default(30, new w.default(10, 24), new w.default(35, 25)), new h.default(30, new w.default(19, 15), new w.default(35, 16))), new y(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new h.default(30, new w.default(17, 115), new w.default(1, 116)), new h.default(28, new w.default(14, 46), new w.default(21, 47)), new h.default(30, new w.default(29, 24), new w.default(19, 25)), new h.default(30, new w.default(11, 15), new w.default(46, 16))), new y(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new h.default(30, new w.default(13, 115), new w.default(6, 116)), new h.default(28, new w.default(14, 46), new w.default(23, 47)), new h.default(30, new w.default(44, 24), new w.default(7, 25)), new h.default(30, new w.default(59, 16), new w.default(1, 17))), new y(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new h.default(30, new w.default(12, 121), new w.default(7, 122)), new h.default(28, new w.default(12, 47), new w.default(26, 48)), new h.default(30, new w.default(39, 24), new w.default(14, 25)), new h.default(30, new w.default(22, 15), new w.default(41, 16))), new y(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new h.default(30, new w.default(6, 121), new w.default(14, 122)), new h.default(28, new w.default(6, 47), new w.default(34, 48)), new h.default(30, new w.default(46, 24), new w.default(10, 25)), new h.default(30, new w.default(2, 15), new w.default(64, 16))), new y(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new h.default(30, new w.default(17, 122), new w.default(4, 123)), new h.default(28, new w.default(29, 46), new w.default(14, 47)), new h.default(30, new w.default(49, 24), new w.default(10, 25)), new h.default(30, new w.default(24, 15), new w.default(46, 16))), new y(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new h.default(30, new w.default(4, 122), new w.default(18, 123)), new h.default(28, new w.default(13, 46), new w.default(32, 47)), new h.default(30, new w.default(48, 24), new w.default(14, 25)), new h.default(30, new w.default(42, 15), new w.default(32, 16))), new y(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new h.default(30, new w.default(20, 117), new w.default(4, 118)), new h.default(28, new w.default(40, 47), new w.default(7, 48)), new h.default(30, new w.default(43, 24), new w.default(22, 25)), new h.default(30, new w.default(10, 15), new w.default(67, 16))), new y(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new h.default(30, new w.default(19, 118), new w.default(6, 119)), new h.default(28, new w.default(18, 47), new w.default(31, 48)), new h.default(30, new w.default(34, 24), new w.default(34, 25)), new h.default(30, new w.default(20, 15), new w.default(61, 16)))], e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t, n) {
                    r(this, e), this.count = t, this.dataCodewords = n
                }
                return a(e, [{
                    key: "getCount",
                    value: function () {
                        return this.count
                    }
                }, {
                    key: "getDataCodewords",
                    value: function () {
                        return this.dataCodewords
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t) {
                    r(this, e), this.ecCodewordsPerBlock = t;
                    for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                    this.ecBlocks = a
                }
                return a(e, [{
                    key: "getECCodewordsPerBlock",
                    value: function () {
                        return this.ecCodewordsPerBlock
                    }
                }, {
                    key: "getNumBlocks",
                    value: function () {
                        var e = 0,
                            t = this.ecBlocks,
                            n = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var i, o = t[Symbol.iterator]() ; !(n = (i = o.next()).done) ; n = !0) {
                                e += i.value.getCount()
                            }
                        } catch (e) {
                            r = !0, a = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return e
                    }
                }, {
                    key: "getTotalECCodewords",
                    value: function () {
                        return this.ecCodewordsPerBlock * this.getNumBlocks()
                    }
                }, {
                    key: "getECBlocks",
                    value: function () {
                        return this.ecBlocks
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e(t, n, a, i) {
                    r(this, e), this.value = t, this.stringValue = n, this.characterCountBitsForVersions = a, this.bits = i, e.FOR_BITS.set(i, this), e.FOR_VALUE.set(t, this)
                }
                return a(e, [{
                    key: "getCharacterCountBits",
                    value: function (e) {
                        var t = e.getVersionNumber(),
                            n = void 0;
                        return n = t <= 9 ? 0 : t <= 26 ? 1 : 2, this.characterCountBitsForVersions[n]
                    }
                }, {
                    key: "getValue",
                    value: function () {
                        return this.value
                    }
                }, {
                    key: "getBits",
                    value: function () {
                        return this.bits
                    }
                }, {
                    key: "equals",
                    value: function (t) {
                        if (!(t instanceof e)) return !1;
                        var n = t;
                        return this.value === n.value
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return this.stringValue
                    }
                }], [{
                    key: "forBits",
                    value: function (t) {
                        var n = e.FOR_BITS.get(t);
                        if (void 0 === n) throw new o.default(o.default.IllegalArgumentException);
                        return n
                    }
                }]), e
            }();
        t.default = u, u.FOR_BITS = new Map, u.FOR_VALUE = new Map, u.TERMINATOR = new u(0, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), u.NUMERIC = new u(1, "NUMERIC", Int32Array.from([10, 12, 14]), 1), u.ALPHANUMERIC = new u(2, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), u.STRUCTURED_APPEND = new u(3, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), u.BYTE = new u(4, "BYTE", Int32Array.from([8, 16, 16]), 4), u.ECI = new u(5, "ECI", Int32Array.from([0, 0, 0]), 7), u.KANJI = new u(6, "KANJI", Int32Array.from([8, 10, 12]), 8), u.FNC1_FIRST_POSITION = new u(7, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), u.FNC1_SECOND_POSITION = new u(8, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), u.HANZI = new u(9, "HANZI", Int32Array.from([8, 10, 12]), 13), e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(6),
            u = r(o),
            l = n(0),
            f = r(l),
            s = function () {
                function e() {
                    a(this, e)
                }
                return i(e, null, [{
                    key: "decode",
                    value: function (t, r) {
                        var a = void 0;
                        if (a = "string" == typeof r ? r : r.getName(), e.isBrowser()) {
                            var i = window.TextDecoder;
                            return void 0 !== i ? new i(r).decode(t) : e.decodeFallBack(t, a)
                        }
                        return new (0, n(11).TextDecoder)(a).decode(t)
                    }
                }, {
                    key: "encode",
                    value: function (t, r) {
                        var a = void 0;
                        if (a = "string" == typeof r ? r : r.getName(), e.isBrowser()) {
                            var i = window.TextEncoder;
                            u.default.getCharacterSetECIByName(a);
                            return void 0 !== i ? new i(r).encode(t) : e.encodeFallBack(t, a)
                        }
                        return new (0, n(11).TextEncoder)(a, {
                            NONSTANDARD_allowLegacyEncoding: !0
                        }).encode(t)
                    }
                }, {
                    key: "isBrowser",
                    value: function () {
                        return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
                    }
                }, {
                    key: "decodeFallBack",
                    value: function (e, t) {
                        var n = u.default.getCharacterSetECIByName(t);
                        if (n.equals(u.default.UTF8) || n.equals(u.default.ISO8859_1) || n.equals(u.default.ASCII)) {
                            for (var r = "", a = 0, i = e.length; a < i; a++) {
                                var o = e[a].toString(16);
                                o.length < 2 && (o = "0" + o), r += "%" + o
                            }
                            return decodeURIComponent(r)
                        }
                        if (n.equals(u.default.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
                        throw new f.default(f.default.UnsupportedOperationException, "encoding " + t + " not supported")
                    }
                }, {
                    key: "encodeFallBack",
                    value: function (e, t) {
                        return null
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function e(t, n) {
            r(this, e), this.deviceId = t, this.label = n
        };
        t.default = a, e.exports = t.default, e.exports = t.default
    }, , function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(0),
            u = r(o),
            l = n(4),
            f = r(l),
            s = function () {
                function e(t, n) {
                    a(this, e), this.width = t, this.height = n
                }
                return i(e, [{
                    key: "getWidth",
                    value: function () {
                        return this.width
                    }
                }, {
                    key: "getHeight",
                    value: function () {
                        return this.height
                    }
                }, {
                    key: "isCropSupported",
                    value: function () {
                        return !1
                    }
                }, {
                    key: "crop",
                    value: function (e, t, n, r) {
                        throw new u.default(u.default.UnsupportedOperationException, "This luminance source does not support cropping.")
                    }
                }, {
                    key: "isRotateSupported",
                    value: function () {
                        return !1
                    }
                }, {
                    key: "rotateCounterClockwise",
                    value: function () {
                        throw new u.default(u.default.UnsupportedOperationException, "This luminance source does not support rotation by 90 degrees.")
                    }
                }, {
                    key: "rotateCounterClockwise45",
                    value: function () {
                        throw new u.default(u.default.UnsupportedOperationException, "This luminance source does not support rotation by 45 degrees.")
                    }
                }, {
                    key: "toString",
                    value: function () {
                        for (var e = new Uint8ClampedArray(this.width), t = new f.default, n = 0; n < this.height; n++) {
                            for (var r = this.getRow(n, e), a = 0; a < this.width; a++) {
                                var i = 255 & r[a],
                                    o = void 0;
                                o = i < 64 ? "#" : i < 128 ? "+" : i < 192 ? "." : " ", t.append(o)
                            }
                            t.append("\n")
                        }
                        return t.toString()
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t, n, a, i, o, u, l, f, s) {
                    r(this, e), this.a11 = t, this.a21 = n, this.a31 = a, this.a12 = i, this.a22 = o, this.a32 = u, this.a13 = l, this.a23 = f, this.a33 = s
                }
                return a(e, [{
                    key: "transformPoints",
                    value: function (e) {
                        for (var t = e.length, n = this.a11, r = this.a12, a = this.a13, i = this.a21, o = this.a22, u = this.a23, l = this.a31, f = this.a32, s = this.a33, c = 0; c < t; c += 2) {
                            var d = e[c],
                                h = e[c + 1],
                                v = a * d + u * h + s;
                            e[c] = (n * d + i * h + l) / v, e[c + 1] = (r * d + o * h + f) / v
                        }
                    }
                }, {
                    key: "transformPointsWithValues",
                    value: function (e, t) {
                        for (var n = this.a11, r = this.a12, a = this.a13, i = this.a21, o = this.a22, u = this.a23, l = this.a31, f = this.a32, s = this.a33, c = e.length, d = 0; d < c; d++) {
                            var h = e[d],
                                v = t[d],
                                w = a * h + u * v + s;
                            e[d] = (n * h + i * v + l) / w, t[d] = (r * h + o * v + f) / w
                        }
                    }
                }, {
                    key: "buildAdjoint",
                    value: function () {
                        return new e(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21)
                    }
                }, {
                    key: "times",
                    value: function (t) {
                        return new e(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 * t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 * t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 * t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33)
                    }
                }], [{
                    key: "quadrilateralToQuadrilateral",
                    value: function (t, n, r, a, i, o, u, l, f, s, c, d, h, v, w, y) {
                        var g = e.quadrilateralToSquare(t, n, r, a, i, o, u, l);
                        return e.squareToQuadrilateral(f, s, c, d, h, v, w, y).times(g)
                    }
                }, {
                    key: "squareToQuadrilateral",
                    value: function (t, n, r, a, i, o, u, l) {
                        var f = t - r + i - u,
                            s = n - a + o - l;
                        if (0 === f && 0 === s) return new e(r - t, i - r, t, a - n, o - a, n, 0, 0, 1);
                        var c = r - i,
                            d = u - i,
                            h = a - o,
                            v = l - o,
                            w = c * v - d * h,
                            y = (f * v - d * s) / w,
                            g = (c * s - f * h) / w;
                        return new e(r - t + y * r, u - t + g * u, t, a - n + y * a, l - n + g * l, n, y, g, 1)
                    }
                }, {
                    key: "quadrilateralToSquare",
                    value: function (t, n, r, a, i, o, u, l) {
                        return e.squareToQuadrilateral(t, n, r, a, i, o, u, l).buildAdjoint()
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e() {
                    r(this, e)
                }
                return a(e, [{
                    key: "MathUtils",
                    value: function () { }
                }], [{
                    key: "round",
                    value: function (e) {
                        return NaN === e ? 0 : e <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : e >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : e + (e < 0 ? -.5 : .5) | 0
                    }
                }, {
                    key: "distance",
                    value: function (e, t, n, r) {
                        var a = e - n,
                            i = t - r;
                        return Math.sqrt(a * a + i * i)
                    }
                }, {
                    key: "sum",
                    value: function (e) {
                        for (var t = 0, n = 0, r = e.length; n != r; n++) {
                            t += e[n]
                        }
                        return t
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t) {
                    r(this, e), this.mirrored = t
                }
                return a(e, [{
                    key: "isMirrored",
                    value: function () {
                        return this.mirrored
                    }
                }, {
                    key: "applyMirroredCorrection",
                    value: function (e) {
                        if (this.mirrored && null !== e && !(e.length < 3)) {
                            var t = e[0];
                            e[0] = e[2], e[2] = t
                        }
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, , , function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(34),
            u = r(o),
            l = n(45),
            f = r(l),
            s = n(0),
            c = r(s),
            d = n(32),
            h = r(d),
            v = n(19),
            w = r(v),
            y = function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                    a(this, e), this.reader = t, this.timeBetweenScansMillis = n
                }
                return i(e, [{
                    key: "getVideoInputDevices",
                    value: function () {
                        return new Promise(function (e, t) {
                            navigator.mediaDevices.enumerateDevices().then(function (t) {
                                for (var n = new Array, r = 0, a = 0, i = t.length; a != i; a++) {
                                    var o = t[a];
                                    "videoinput" === o.kind && (n.push(new w.default(o.deviceId, o.label || "Video source " + r)), r++)
                                }
                                e(n)
                            }).catch(function (e) {
                                t(e)
                            })
                        })
                    }
                }, {
                    key: "decodeFromInputVideoDevice",
                    value: function (e, t) {
                        this.reset(), this.prepareVideoElement(t);
                        var n = void 0;
                        n = void 0 === e ? {
                            video: {
                                facingMode:
                                    {
                                        exact: "environment"
                                    }
                            }
                        } : {
                            video: {
                                facingMode:
                                    {
                                        exact: "environment"
                                    }
                            }
                        };
                        var r = this;
                        return new Promise(function (e, t) {
                            navigator.mediaDevices.getUserMedia(n).then(function (n) {
                                r.stream = n, r.videoElement.srcObject = n, r.videoPlayingEventListener = function () {
                                    r.decodeOnceWithDelay(e, t)
                                }, r.videoElement.addEventListener("playing", r.videoPlayingEventListener), r.videoElement.play()
                            }).catch(function (e) {
                                t(e)
                            })
                        })
                    }
                }, {
                    key: "decodeFromVideoSource",
                    value: function (e, t) {
                        this.reset(), this.prepareVideoElement(t);
                        var n = this;
                        return new Promise(function (t, r) {
                            n.videoPlayEndedEventListener = function () {
                                n.stop(), r(new c.default(c.default.NotFoundException))
                            }, n.videoElement.addEventListener("ended", n.videoPlayEndedEventListener), n.videoPlayingEventListener = function () {
                                n.decodeOnceWithDelay(t, r)
                            }, n.videoElement.addEventListener("playing", n.videoPlayingEventListener), n.videoElement.setAttribute("autoplay", "true"), n.videoElement.setAttribute("src", e)
                        })
                    }
                }, {
                    key: "prepareVideoElement",
                    value: function (e) {
                        void 0 === e ? (this.videoElement = document.createElement("video"), this.videoElement.width = 200, this.videoElement.height = 200) : this.videoElement = "string" == typeof e ? this.getMediaElement(e, "video") : e
                    }
                }, {
                    key: "getMediaElement",
                    value: function (e, t) {
                        var n = document.getElementById(e);
                        if (null === n) throw new c.default(c.default.ArgumentException, "element with id '" + e + "' not found");
                        if (n.nodeName.toLowerCase() !== t.toLowerCase()) throw console.log(n.nodeName), new c.default(c.default.ArgumentException, "element with id '" + e + "' must be an " + t + " element");
                        return n
                    }
                }, {
                    key: "decodeFromImage",
                    value: function (e, t) {
                        var n = this;
                        if (this.reset(), void 0 === e && void 0 === t) throw new c.default(c.default.ArgumentException, "either imageElement with a src set or an url must be provided");
                        this.prepareImageElement(e);
                        var r = this;
                        return new Promise(function (e, a) {
                            if (void 0 !== t) r.imageLoadedEventListener = function () {
                                r.decodeOnce(e, a, !1, !0)
                            }, r.imageElement.addEventListener("load", r.imageLoadedEventListener), r.imageElement.src = t;
                            else {
                                if (!n.isImageLoaded(n.imageElement)) throw new c.default(c.default.ArgumentException, "either src or a loaded img should be provided");
                                r.decodeOnce(e, a, !1, !0)
                            }
                        })
                    }
                }, {
                    key: "isImageLoaded",
                    value: function (e) {
                        return !!e.complete && 0 !== e.naturalWidth
                    }
                }, {
                    key: "prepareImageElement",
                    value: function (e) {
                        void 0 === e ? (this.imageElement = document.createElement("img"), this.imageElement.width = 200, this.imageElement.height = 200) : this.imageElement = "string" == typeof e ? this.getMediaElement(e, "img") : e
                    }
                }, {
                    key: "decodeOnceWithDelay",
                    value: function (e, t) {
                        this.timeoutHandler = window.setTimeout(this.decodeOnce.bind(this, e, t), this.timeBetweenScansMillis)
                    }
                }, {
                    key: "decodeOnce",
                    value: function (e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        void 0 === this.canvasElementContext && this.prepareCaptureCanvas(), this.canvasElementContext.drawImage(this.videoElement || this.imageElement, 0, 0);
                        var a = new h.default(this.canvasElement),
                            i = new u.default(new f.default(a));
                        try {
                            var o = this.readerDecode(i);
                            e(o)
                        } catch (a) {
                            console.log(r, a), n && c.default.isOfType(a, c.default.NotFoundException) ? (console.log("not found, trying again..."), this.decodeOnceWithDelay(e, t)) : r && (c.default.isOfType(a, c.default.ChecksumException) || c.default.isOfType(a, c.default.FormatException)) ? (console.log("checksum or format error, trying again...", a), this.decodeOnceWithDelay(e, t)) : t(a)
                        }
                    }
                }, {
                    key: "readerDecode",
                    value: function (e) {
                        return this.reader.decode(e)
                    }
                }, {
                    key: "prepareCaptureCanvas",
                    value: function () {
                        var e = document.createElement("canvas"),
                            t = void 0,
                            n = void 0;
                        void 0 !== this.videoElement ? (t = this.videoElement.videoWidth, n = this.videoElement.videoHeight) : (t = this.imageElement.naturalWidth || this.imageElement.width, n = this.imageElement.naturalHeight || this.imageElement.height), e.style.width = t + "px", e.style.height = n + "px", e.width = t, e.height = n, this.canvasElement = e, this.canvasElementContext = e.getContext("2d")
                    }
                }, {
                    key: "stop",
                    value: function () {
                        void 0 !== this.timeoutHandler && (window.clearTimeout(this.timeoutHandler), this.timeoutHandler = void 0), void 0 !== this.stream && (this.stream.getTracks()[0].stop(), this.stream = void 0)
                    }
                }, {
                    key: "reset",
                    value: function () {
                        this.stop(), void 0 !== this.videoPlayEndedEventListener && void 0 !== this.videoElement && this.videoElement.removeEventListener("ended", this.videoPlayEndedEventListener), void 0 !== this.videoPlayingEventListener && void 0 !== this.videoElement && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), void 0 !== this.videoElement && (this.videoElement.srcObject = void 0, this.videoElement.removeAttribute("src"), this.videoElement = void 0), void 0 !== this.videoPlayEndedEventListener && void 0 !== this.imageElement && this.imageElement.removeEventListener("load", this.imageLoadedEventListener), void 0 !== this.imageElement && (this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0), this.canvasElementContext = void 0, this.canvasElement = void 0
                    }
                }]), e
            }();
        t.default = y, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(36),
            u = r(o),
            l = n(37),
            f = r(l),
            s = n(2),
            c = r(s),
            d = n(53),
            h = r(d),
            v = n(24),
            w = r(v),
            y = n(56),
            g = r(y),
            p = n(0),
            m = r(p),
            b = function () {
                function e() {
                    a(this, e), this.decoder = new h.default
                }
                return i(e, [{
                    key: "getDecoder",
                    value: function () {
                        return this.decoder
                    }
                }, {
                    key: "decode",
                    value: function (t, n) {
                        var r = void 0,
                            a = void 0;
                        if (void 0 !== n && null !== n && void 0 !== n.get(1)) {
                            var i = e.extractPureBits(t.getBlackMatrix());
                            r = this.decoder.decodeBitMatrix(i, n), a = e.NO_POINTS
                        } else {
                            var o = new g.default(t.getBlackMatrix()).detect(n);
                            r = this.decoder.decodeBitMatrix(o.getBits(), n), a = o.getPoints()
                        }
                        r.getOther() instanceof w.default && r.getOther().applyMirroredCorrection(a);
                        var l = new u.default(r.getText(), r.getRawBytes(), void 0, a, 11, void 0),
                            s = r.getByteSegments();
                        null !== s && l.putMetadata(f.default.BYTE_SEGMENTS, s);
                        var c = r.getECLevel();
                        return null !== c && l.putMetadata(f.default.ERROR_CORRECTION_LEVEL, c), r.hasStructuredAppend() && (l.putMetadata(f.default.STRUCTURED_APPEND_SEQUENCE, r.getStructuredAppendSequenceNumber()), l.putMetadata(f.default.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), l
                    }
                }, {
                    key: "reset",
                    value: function () { }
                }], [{
                    key: "extractPureBits",
                    value: function (e) {
                        var t = e.getTopLeftOnBit(),
                            n = e.getBottomRightOnBit();
                        if (null === t || null === n) throw new m.default(m.default.NotFoundException);
                        var r = this.moduleSize(t, e),
                            a = t[1],
                            i = n[1],
                            o = t[0],
                            u = n[0];
                        if (o >= u || a >= i) throw new m.default(m.default.NotFoundException);
                        if (i - a != u - o && (u = o + (i - a)) >= e.getWidth()) throw new m.default(m.default.NotFoundException);
                        var l = Math.round((u - o + 1) / r),
                            f = Math.round((i - a + 1) / r);
                        if (l <= 0 || f <= 0) throw new m.default(m.default.NotFoundException);
                        if (f != l) throw new m.default(m.default.NotFoundException);
                        var s = Math.floor(r / 2);
                        a += s, o += s;
                        var d = o + Math.floor((l - 1) * r) - u;
                        if (d > 0) {
                            if (d > s) throw new m.default(m.default.NotFoundException);
                            o -= d
                        }
                        var h = a + Math.floor((f - 1) * r) - i;
                        if (h > 0) {
                            if (h > s) throw new m.default(m.default.NotFoundException);
                            a -= h
                        }
                        for (var v = new c.default(l, f), w = 0; w < f; w++)
                            for (var y = a + Math.floor(w * r), g = 0; g < l; g++) e.get(o + Math.floor(g * r), y) && v.set(g, w);
                        return v
                    }
                }, {
                    key: "moduleSize",
                    value: function (e, t) {
                        for (var n = t.getHeight(), r = t.getWidth(), a = e[0], i = e[1], o = !0, u = 0; a < r && i < n;) {
                            if (o !== t.get(a, i)) {
                                if (5 == ++u) break;
                                o = !o
                            }
                            a++, i++
                        }
                        if (a === r || i === n) throw new m.default(m.default.NotFoundException);
                        return (a - e[0]) / 7
                    }
                }]), e
            }();
        t.default = b, b.NO_POINTS = new Array, e.exports = t.default
    }, , function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.BrowserQRCodeReader = t.VideoInputDevice = void 0;
        var u = n(28),
            l = r(u),
            f = n(19),
            s = r(f),
            c = n(27),
            d = r(c),
            h = function (e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, new l.default, e))
                }
                return o(t, e), t
            }(d.default);
        t.VideoInputDevice = s.default, t.BrowserQRCodeReader = h
    }, , function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            f = n(35),
            s = r(f),
            c = n(21),
            d = r(c),
            h = n(0),
            v = r(h),
            w = function (e) {
                function t(e) {
                    a(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.width, e.height));
                    return n.canvas = e, n.tempCanvasElement = null, n.buffer = t.makeBufferFromCanvasImageData(e), n
                }
                return o(t, e), l(t, [{
                    key: "getRow",
                    value: function (e, t) {
                        if (e < 0 || e >= this.getHeight()) throw new v.default(v.default.IllegalArgumentException, "Requested row is outside the image: " + e);
                        var n = this.getWidth(),
                            r = e * n;
                        return null === t ? t = this.buffer.slice(r, r + n) : (t.length < n && (t = new Uint8ClampedArray(n)), t.set(this.buffer.slice(r, r + n))), t
                    }
                }, {
                    key: "getMatrix",
                    value: function () {
                        return this.buffer
                    }
                }, {
                    key: "isCropSupported",
                    value: function () {
                        return !0
                    }
                }, {
                    key: "crop",
                    value: function (e, t, n, r) {
                        return this.crop(e, t, n, r), this
                    }
                }, {
                    key: "isRotateSupported",
                    value: function () {
                        return !0
                    }
                }, {
                    key: "rotateCounterClockwise",
                    value: function () {
                        return this.rotate(-90), this
                    }
                }, {
                    key: "rotateCounterClockwise45",
                    value: function () {
                        return this.rotate(-45), this
                    }
                }, {
                    key: "getTempCanvasElement",
                    value: function () {
                        if (null === this.tempCanvasElement) {
                            var e = this.canvas.ownerDocument.createElement("canvas");
                            e.style.width = this.canvas.width + "px", e.style.height = this.canvas.height + "px"
                        }
                        return this.tempCanvasElement
                    }
                }, {
                    key: "rotate",
                    value: function (e) {
                        var n = this.getTempCanvasElement(),
                            r = n.getContext("2d");
                        return r.rotate(e * t.DEGREE_TO_RADIANS), r.drawImage(this.canvas, 0, 0), this.buffer = t.makeBufferFromCanvasImageData(n), this
                    }
                }, {
                    key: "invert",
                    value: function () {
                        return new s.default(this)
                    }
                }], [{
                    key: "makeBufferFromCanvasImageData",
                    value: function (e) {
                        var n = e.getContext("2d").getImageData(0, 0, e.width, e.height);
                        return t.toGrayscaleBuffer(n.data, e.width, e.height)
                    }
                }, {
                    key: "toGrayscaleBuffer",
                    value: function (e, t, n) {
                        for (var r = new Uint8ClampedArray(t * n), a = 0, i = 0, o = e.length; a < o; a += 4, i++) {
                            var u = void 0;
                            if (0 === e[a + 3]) u = 255;
                            else {
                                u = 306 * e[a] + 601 * e[a + 1] + 117 * e[a + 2] + 512 >> 10
                            }
                            r[i] = u
                        }
                        return r
                    }
                }]), t
            }(d.default);
        t.default = w, w.DEGREE_TO_RADIANS = Math.PI / 180, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t) {
                    r(this, e), this.source = t
                }
                return a(e, [{
                    key: "getLuminanceSource",
                    value: function () {
                        return this.source
                    }
                }, {
                    key: "getWidth",
                    value: function () {
                        return this.source.getWidth()
                    }
                }, {
                    key: "getHeight",
                    value: function () {
                        return this.source.getHeight()
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e(t) {
                    if (r(this, e), this.binarizer = t, null === t) throw new o.default(o.default.IllegalArgumentException, "Binarizer must be non-null.")
                }
                return a(e, [{
                    key: "getWidth",
                    value: function () {
                        return this.binarizer.getWidth()
                    }
                }, {
                    key: "getHeight",
                    value: function () {
                        return this.binarizer.getHeight()
                    }
                }, {
                    key: "getBlackRow",
                    value: function (e, t) {
                        return this.binarizer.getBlackRow(e, t)
                    }
                }, {
                    key: "getBlackMatrix",
                    value: function () {
                        return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
                    }
                }, {
                    key: "isCropSupported",
                    value: function () {
                        return this.binarizer.getLuminanceSource().isCropSupported()
                    }
                }, {
                    key: "crop",
                    value: function (t, n, r, a) {
                        var i = this.binarizer.getLuminanceSource().crop(t, n, r, a);
                        return new e(this.binarizer.createBinarizer(i))
                    }
                }, {
                    key: "isRotateSupported",
                    value: function () {
                        return this.binarizer.getLuminanceSource().isRotateSupported()
                    }
                }, {
                    key: "rotateCounterClockwise",
                    value: function () {
                        var t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
                        return new e(this.binarizer.createBinarizer(t))
                    }
                }, {
                    key: "rotateCounterClockwise45",
                    value: function () {
                        var t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
                        return new e(this.binarizer.createBinarizer(t))
                    }
                }, {
                    key: "toString",
                    value: function () {
                        try {
                            return this.getBlackMatrix().toString()
                        } catch (e) {
                            return ""
                        }
                    }
                }]), e
            }();
        t.default = u, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            l = n(21),
            f = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            s = function (e) {
                function t(e) {
                    r(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e.getWidth(), e.getHeight()));
                    return n.delegate = e, n
                }
                return i(t, e), u(t, [{
                    key: "getRow",
                    value: function (e, t) {
                        for (var n = this.delegate.getRow(e, t), r = this.getWidth(), a = 0; a < r; a++) n[a] = 255 - (255 & n[a]);
                        return n
                    }
                }, {
                    key: "getMatrix",
                    value: function () {
                        for (var e = this.delegate.getMatrix(), t = this.getWidth() * this.getHeight(), n = new Uint8ClampedArray(t), r = 0; r < t; r++) n[r] = 255 - (255 & e[r]);
                        return n
                    }
                }, {
                    key: "isCropSupported",
                    value: function () {
                        return this.delegate.isCropSupported()
                    }
                }, {
                    key: "crop",
                    value: function (e, n, r, a) {
                        return new t(this.delegate.crop(e, n, r, a))
                    }
                }, {
                    key: "isRotateSupported",
                    value: function () {
                        return this.delegate.isRotateSupported()
                    }
                }, {
                    key: "invert",
                    value: function () {
                        return this.delegate
                    }
                }, {
                    key: "rotateCounterClockwise",
                    value: function () {
                        return new t(this.delegate.rotateCounterClockwise())
                    }
                }, {
                    key: "rotateCounterClockwise45",
                    value: function () {
                        return new t(this.delegate.rotateCounterClockwise45())
                    }
                }]), t
            }(f.default);
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(9),
            u = r(o),
            l = n(1),
            f = r(l),
            s = function () {
                function e(t, n, r, i, o, u) {
                    a(this, e), this.text = t, this.rawBytes = n, this.numBits = r, this.resultPoints = i, this.format = o, this.timestamp = u, this.text = t, this.rawBytes = n, this.numBits = void 0 === r || null === r ? null === n || void 0 === n ? 0 : 8 * n.length : r, this.resultPoints = i, this.format = o, this.resultMetadata = null, this.timestamp = void 0 === u || null === u ? f.default.currentTimeMillis() : u
                }
                return i(e, [{
                    key: "getText",
                    value: function () {
                        return this.text
                    }
                }, {
                    key: "getRawBytes",
                    value: function () {
                        return this.rawBytes
                    }
                }, {
                    key: "getNumBits",
                    value: function () {
                        return this.numBits
                    }
                }, {
                    key: "getResultPoints",
                    value: function () {
                        return this.resultPoints
                    }
                }, {
                    key: "getBarcodeFormat",
                    value: function () {
                        return this.format
                    }
                }, {
                    key: "getResultMetadata",
                    value: function () {
                        return this.resultMetadata
                    }
                }, {
                    key: "putMetadata",
                    value: function (e, t) {
                        null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(e, t)
                    }
                }, {
                    key: "putAllMetadata",
                    value: function (e) {
                        null !== e && (null === this.resultMetadata ? this.resultMetadata = e : this.resultMetadata = new Map(e))
                    }
                }, {
                    key: "addResultPoints",
                    value: function (e) {
                        var t = this.resultPoints;
                        if (null === t) this.resultPoints = e;
                        else if (null !== e && e.length > 0) {
                            var n = new u.default[t.length + e.length];
                            f.default.arraycopy(t, 0, n, 0, t.length), f.default.arraycopy(e, 0, n, t.length, e.length), this.resultPoints = n
                        }
                    }
                }, {
                    key: "getTimestamp",
                    value: function () {
                        return this.timestamp
                    }
                }, {
                    key: "toString",
                    value: function () {
                        return this.text
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r;
        ! function (e) {
            e[e.OTHER = 0] = "OTHER", e[e.ORIENTATION = 1] = "ORIENTATION", e[e.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", e[e.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", e[e.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", e[e.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", e[e.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", e[e.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", e[e.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", e[e.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", e[e.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY"
        }(r || (r = {})), t.default = r, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e(t) {
                    r(this, e), this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
                }
                return a(e, [{
                    key: "getBitOffset",
                    value: function () {
                        return this.bitOffset
                    }
                }, {
                    key: "getByteOffset",
                    value: function () {
                        return this.byteOffset
                    }
                }, {
                    key: "readBits",
                    value: function (e) {
                        if (e < 1 || e > 32 || e > this.available()) throw new o.default(o.default.IllegalArgumentException, "" + e);
                        var t = 0,
                            n = this.bitOffset,
                            r = this.byteOffset,
                            a = this.bytes;
                        if (n > 0) {
                            var i = 8 - n,
                                u = e < i ? e : i,
                                l = i - u,
                                f = 255 >> 8 - u << l;
                            t = (a[r] & f) >> l, e -= u, n += u, 8 == n && (n = 0, r++)
                        }
                        if (e > 0) {
                            for (; e >= 8;) t = t << 8 | 255 & a[r], r++, e -= 8;
                            if (e > 0) {
                                var s = 8 - e,
                                    c = 255 >> s << s;
                                t = t << e | (a[r] & c) >> s, n += e
                            }
                        }
                        return this.bitOffset = n, this.byteOffset = r, t
                    }
                }, {
                    key: "available",
                    value: function () {
                        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
                    }
                }]), e
            }();
        t.default = u, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t, n, a, i) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : -1;
                    r(this, e), this.rawBytes = t, this.text = n, this.byteSegments = a, this.ecLevel = i, this.structuredAppendSequenceNumber = o, this.structuredAppendParity = u, this.numBits = void 0 === t || null === t ? 0 : 8 * t.length
                }
                return a(e, [{
                    key: "getRawBytes",
                    value: function () {
                        return this.rawBytes
                    }
                }, {
                    key: "getNumBits",
                    value: function () {
                        return this.numBits
                    }
                }, {
                    key: "setNumBits",
                    value: function (e) {
                        this.numBits = e
                    }
                }, {
                    key: "getText",
                    value: function () {
                        return this.text
                    }
                }, {
                    key: "getByteSegments",
                    value: function () {
                        return this.byteSegments
                    }
                }, {
                    key: "getECLevel",
                    value: function () {
                        return this.ecLevel
                    }
                }, {
                    key: "getErrorsCorrected",
                    value: function () {
                        return this.errorsCorrected
                    }
                }, {
                    key: "setErrorsCorrected",
                    value: function (e) {
                        this.errorsCorrected = e
                    }
                }, {
                    key: "getErasures",
                    value: function () {
                        return this.erasures
                    }
                }, {
                    key: "setErasures",
                    value: function (e) {
                        this.erasures = e
                    }
                }, {
                    key: "getOther",
                    value: function () {
                        return this.other
                    }
                }, {
                    key: "setOther",
                    value: function (e) {
                        this.other = e
                    }
                }, {
                    key: "hasStructuredAppend",
                    value: function () {
                        return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0
                    }
                }, {
                    key: "getStructuredAppendParity",
                    value: function () {
                        return this.structuredAppendParity
                    }
                }, {
                    key: "getStructuredAppendSequenceNumber",
                    value: function () {
                        return this.structuredAppendSequenceNumber
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            f = n(43),
            s = r(f),
            c = n(2),
            d = r(c),
            h = n(22),
            v = r(h),
            w = n(0),
            y = r(w),
            g = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e), l(t, [{
                    key: "sampleGrid",
                    value: function (e, t, n, r, a, i, o, u, l, f, s, c, d, h, w, y, g, p, m) {
                        var b = v.default.quadrilateralToQuadrilateral(r, a, i, o, u, l, f, s, c, d, h, w, y, g, p, m);
                        return this.sampleGridWithTransform(e, t, n, b)
                    }
                }, {
                    key: "sampleGridWithTransform",
                    value: function (e, t, n, r) {
                        if (t <= 0 || n <= 0) throw new y.default(y.default.NotFoundException);
                        for (var a = new d.default(t, n), i = new Float32Array(2 * t), o = 0; o < n; o++) {
                            for (var u = i.length, l = o + .5, f = 0; f < u; f += 2) i[f] = f / 2 + .5, i[f + 1] = l;
                            r.transformPoints(i), s.default.checkAndNudgePoints(e, i);
                            try {
                                for (var c = 0; c < u; c += 2) e.get(Math.floor(i[c]), Math.floor(i[c + 1])) && a.set(c / 2, o)
                            } catch (e) {
                                throw new y.default(y.default.NotFoundException)
                            }
                        }
                        return a
                    }
                }]), t
            }(s.default);
        t.default = g, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t, n) {
                    r(this, e), this.bits = t, this.points = n
                }
                return a(e, [{
                    key: "getBits",
                    value: function () {
                        return this.bits
                    }
                }, {
                    key: "getPoints",
                    value: function () {
                        return this.points
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            f = n(33),
            s = r(f),
            c = n(5),
            d = r(c),
            h = n(2),
            v = r(h),
            w = n(0),
            y = r(w),
            g = function (e) {
                function t(e) {
                    a(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.luminances = t.EMPTY, n.buckets = new Int32Array(t.LUMINANCE_BUCKETS), n
                }
                return o(t, e), l(t, [{
                    key: "getBlackRow",
                    value: function (e, n) {
                        var r = this.getLuminanceSource(),
                            a = r.getWidth();
                        void 0 === n || null === n || n.getSize() < a ? n = new d.default(a) : n.clear(), this.initArrays(a);
                        for (var i = r.getRow(e, this.luminances), o = this.buckets, u = 0; u < a; u++) o[(255 & i[u]) >> t.LUMINANCE_SHIFT]++;
                        var l = t.estimateBlackPoint(o);
                        if (a < 3)
                            for (var f = 0; f < a; f++) (255 & i[f]) < l && n.set(f);
                        else
                            for (var s = 255 & i[0], c = 255 & i[1], h = 1; h < a - 1; h++) {
                                var v = 255 & i[h + 1];
                                (4 * c - s - v) / 2 < l && n.set(h), s = c, c = v
                            }
                        return n
                    }
                }, {
                    key: "getBlackMatrix",
                    value: function () {
                        var e = this.getLuminanceSource(),
                            n = e.getWidth(),
                            r = e.getHeight(),
                            a = new v.default(n, r);
                        this.initArrays(n);
                        for (var i = this.buckets, o = 1; o < 5; o++)
                            for (var u = r * o / 5, l = e.getRow(u, this.luminances), f = Math.floor(4 * n / 5), s = Math.floor(n / 5) ; s < f; s++) {
                                var c = 255 & l[s];
                                i[c >> t.LUMINANCE_SHIFT]++
                            }
                        for (var d = t.estimateBlackPoint(i), h = e.getMatrix(), w = 0; w < r; w++)
                            for (var y = w * n, g = 0; g < n; g++) {
                                var p = 255 & h[y + g];
                                p < d && a.set(g, w)
                            }
                        return a
                    }
                }, {
                    key: "createBinarizer",
                    value: function (e) {
                        return new t(e)
                    }
                }, {
                    key: "initArrays",
                    value: function (e) {
                        this.luminances.length < e && (this.luminances = new Uint8ClampedArray(e));
                        for (var n = this.buckets, r = 0; r < t.LUMINANCE_BUCKETS; r++) n[r] = 0
                    }
                }], [{
                    key: "estimateBlackPoint",
                    value: function (e) {
                        for (var n = e.length, r = 0, a = 0, i = 0, o = 0; o < n; o++) e[o] > i && (a = o, i = e[o]), e[o] > r && (r = e[o]);
                        for (var u = 0, l = 0, f = 0; f < n; f++) {
                            var s = f - a,
                                c = e[f] * s * s;
                            c > l && (u = f, l = c)
                        }
                        if (a > u) {
                            var d = a;
                            a = u, u = d
                        }
                        if (u - a <= n / 16) throw new y.default(y.default.NotFoundException);
                        for (var h = u - 1, v = -1, w = u - 1; w > a; w--) {
                            var g = w - a,
                                p = g * g * (u - w) * (r - e[w]);
                            p > v && (h = w, v = p)
                        }
                        return h << t.LUMINANCE_SHIFT
                    }
                }]), t
            }(s.default);
        t.default = g, g.LUMINANCE_BITS = 5, g.LUMINANCE_SHIFT = 8 - g.LUMINANCE_BITS, g.LUMINANCE_BUCKETS = 1 << g.LUMINANCE_BITS, g.EMPTY = Uint8ClampedArray.from([0]), e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e() {
                    r(this, e)
                }
                return a(e, null, [{
                    key: "checkAndNudgePoints",
                    value: function (e, t) {
                        for (var n = e.getWidth(), r = e.getHeight(), a = !0, i = 0; i < t.length && a; i += 2) {
                            var u = Math.floor(t[i]),
                                l = Math.floor(t[i + 1]);
                            if (u < -1 || u > n || l < -1 || l > r) throw new o.default(o.default.NotFoundException);
                            a = !1, -1 == u ? (t[i] = 0, a = !0) : u == n && (t[i] = n - 1, a = !0), -1 == l ? (t[i + 1] = 0, a = !0) : l == r && (t[i + 1] = r - 1, a = !0)
                        }
                        a = !0;
                        for (var f = t.length - 2; f >= 0 && a; f -= 2) {
                            var s = Math.floor(t[f]),
                                c = Math.floor(t[f + 1]);
                            if (s < -1 || s > n || c < -1 || c > r) throw new o.default(o.default.NotFoundException);
                            a = !1, -1 == s ? (t[f] = 0, a = !0) : s == n && (t[f] = n - 1, a = !0), -1 == c ? (t[f + 1] = 0, a = !0) : c == r && (t[f + 1] = r - 1, a = !0)
                        }
                    }
                }]), e
            }();
        t.default = u, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(40),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e() {
                    r(this, e)
                }
                return a(e, null, [{
                    key: "setGridSampler",
                    value: function (t) {
                        e.gridSampler = t
                    }
                }, {
                    key: "getInstance",
                    value: function () {
                        return e.gridSampler
                    }
                }]), e
            }();
        t.default = u, u.gridSampler = new o.default, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : u(t)) && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : u(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            f = function e(t, n, r) {
                null === t && (t = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(t, n);
                if (void 0 === a) {
                    var i = Object.getPrototypeOf(t);
                    return null === i ? void 0 : e(i, n, r)
                }
                if ("value" in a) return a.value;
                var o = a.get;
                if (void 0 !== o) return o.call(r)
            },
            s = n(42),
            c = r(s),
            d = n(2),
            h = r(d),
            v = function (e) {
                function t(e) {
                    a(this, t);
                    var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.matrix = null, n
                }
                return o(t, e), l(t, [{
                    key: "getBlackMatrix",
                    value: function () {
                        if (null !== this.matrix) return this.matrix;
                        var e = this.getLuminanceSource(),
                            n = e.getWidth(),
                            r = e.getHeight();
                        if (n >= t.MINIMUM_DIMENSION && r >= t.MINIMUM_DIMENSION) {
                            var a = e.getMatrix(),
                                i = n >> t.BLOCK_SIZE_POWER;
                            0 != (n & t.BLOCK_SIZE_MASK) && i++;
                            var o = r >> t.BLOCK_SIZE_POWER;
                            0 != (r & t.BLOCK_SIZE_MASK) && o++;
                            var u = t.calculateBlackPoints(a, i, o, n, r),
                                l = new h.default(n, r);
                            t.calculateThresholdForBlock(a, i, o, n, r, u, l), this.matrix = l
                        } else this.matrix = f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getBlackMatrix", this).call(this);
                        return this.matrix
                    }
                }, {
                    key: "createBinarizer",
                    value: function (e) {
                        return new t(e)
                    }
                }], [{
                    key: "calculateThresholdForBlock",
                    value: function (e, n, r, a, i, o, u) {
                        for (var l = i - t.BLOCK_SIZE, f = a - t.BLOCK_SIZE, s = 0; s < r; s++) {
                            var c = s << t.BLOCK_SIZE_POWER;
                            c > l && (c = l);
                            for (var d = t.cap(s, 2, r - 3), h = 0; h < n; h++) {
                                var v = h << t.BLOCK_SIZE_POWER;
                                v > f && (v = f);
                                for (var w = t.cap(h, 2, n - 3), y = 0, g = -2; g <= 2; g++) {
                                    var p = o[d + g];
                                    y += p[w - 2] + p[w - 1] + p[w] + p[w + 1] + p[w + 2]
                                }
                                var m = y / 25;
                                t.thresholdBlock(e, v, c, m, a, u)
                            }
                        }
                    }
                }, {
                    key: "cap",
                    value: function (e, t, n) {
                        return e < t ? t : e > n ? n : e
                    }
                }, {
                    key: "thresholdBlock",
                    value: function (e, n, r, a, i, o) {
                        for (var u = 0, l = r * i + n; u < t.BLOCK_SIZE; u++, l += i)
                            for (var f = 0; f < t.BLOCK_SIZE; f++) (255 & e[l + f]) <= a && o.set(n + f, r + u)
                    }
                }, {
                    key: "calculateBlackPoints",
                    value: function (e, n, r, a, i) {
                        for (var o = i - t.BLOCK_SIZE, u = a - t.BLOCK_SIZE, l = new Array(r), f = 0; f < r; f++) {
                            l[f] = new Int32Array(n);
                            var s = f << t.BLOCK_SIZE_POWER;
                            s > o && (s = o);
                            for (var c = 0; c < n; c++) {
                                var d = c << t.BLOCK_SIZE_POWER;
                                d > u && (d = u);
                                for (var h = 0, v = 255, w = 0, y = 0, g = s * a + d; y < t.BLOCK_SIZE; y++, g += a) {
                                    for (var p = 0; p < t.BLOCK_SIZE; p++) {
                                        var m = 255 & e[g + p];
                                        h += m, m < v && (v = m), m > w && (w = m)
                                    }
                                    if (w - v > t.MIN_DYNAMIC_RANGE)
                                        for (y++, g += a; y < t.BLOCK_SIZE; y++, g += a)
                                            for (var b = 0; b < t.BLOCK_SIZE; b++) h += 255 & e[g + b]
                                }
                                var E = h >> 2 * t.BLOCK_SIZE_POWER;
                                if (w - v <= t.MIN_DYNAMIC_RANGE && (E = v / 2, f > 0 && c > 0)) {
                                    var k = (l[f - 1][c] + 2 * l[f][c - 1] + l[f - 1][c - 1]) / 4;
                                    v < k && (E = k)
                                }
                                l[f][c] = E
                            }
                        }
                        return l
                    }
                }]), t
            }(c.default);
        t.default = v, v.BLOCK_SIZE_POWER = 3, v.BLOCK_SIZE = 1 << v.BLOCK_SIZE_POWER, v.BLOCK_SIZE_MASK = v.BLOCK_SIZE - 1, v.MINIMUM_DIMENSION = 5 * v.BLOCK_SIZE, v.MIN_DYNAMIC_RANGE = 24, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(6),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e() {
                    r(this, e)
                }
                return a(e, [{
                    key: "StringUtils",
                    value: function () { }
                }], [{
                    key: "guessEncoding",
                    value: function (t, n) {
                        if (null !== n && void 0 !== n && void 0 !== n.get(4)) return n.get(4).toString();
                        for (var r = t.length, a = !0, i = !0, o = !0, u = 0, l = 0, f = 0, s = 0, c = 0, d = 0, h = 0, v = 0, w = 0, y = 0, g = 0, p = t.length > 3 && 239 == t[0] && 187 == t[1] && 191 == t[2], m = 0; m < r && (a || i || o) ; m++) {
                            var b = 255 & t[m];
                            o && (u > 0 ? 0 == (128 & b) ? o = !1 : u-- : 0 != (128 & b) && (0 == (64 & b) ? o = !1 : (u++, 0 == (32 & b) ? l++ : (u++, 0 == (16 & b) ? f++ : (u++, 0 == (8 & b) ? s++ : o = !1))))), a && (b > 127 && b < 160 ? a = !1 : b > 159 && (b < 192 || 215 == b || 247 == b) && g++), i && (c > 0 ? b < 64 || 127 == b || b > 252 ? i = !1 : c-- : 128 == b || 160 == b || b > 239 ? i = !1 : b > 160 && b < 224 ? (d++, v = 0, ++h > w && (w = h)) : b > 127 ? (c++, h = 0, ++v > y && (y = v)) : (h = 0, v = 0))
                        }
                        return o && u > 0 && (o = !1), i && c > 0 && (i = !1), o && (p || l + f + s > 0) ? e.UTF8 : i && (e.ASSUME_SHIFT_JIS || w >= 3 || y >= 3) ? e.SHIFT_JIS : a && i ? 2 == w && 2 == d || 10 * g >= r ? e.SHIFT_JIS : e.ISO88591 : a ? e.ISO88591 : i ? e.SHIFT_JIS : o ? e.UTF8 : e.PLATFORM_DEFAULT_ENCODING
                    }
                }]), e
            }();
        t.default = u, u.SHIFT_JIS = o.default.SJIS.getName(), u.GB2312 = "GB2312", u.EUC_JP = "EUC_JP", u.UTF8 = o.default.UTF8.getName(), u.PLATFORM_DEFAULT_ENCODING = u.UTF8, u.ISO88591 = o.default.ISO8859_1.getName(), u.ASSUME_SHIFT_JIS = !1, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(7),
            u = r(o),
            l = n(10),
            f = r(l),
            s = n(0),
            c = r(s),
            d = function () {
                function e(t) {
                    a(this, e), this.field = t
                }
                return i(e, [{
                    key: "decode",
                    value: function (e, t) {
                        for (var n = this.field, r = new f.default(n, e), a = new Int32Array(t), i = !0, o = 0; o < t; o++) {
                            var l = r.evaluateAt(n.exp(o + n.getGeneratorBase()));
                            a[a.length - 1 - o] = l, 0 !== l && (i = !1)
                        }
                        if (!i)
                            for (var s = new f.default(n, a), d = this.runEuclideanAlgorithm(n.buildMonomial(t, 1), s, t), h = d[0], v = d[1], w = this.findErrorLocations(h), y = this.findErrorMagnitudes(v, w), g = 0; g < w.length; g++) {
                                var p = e.length - 1 - n.log(w[g]);
                                if (p < 0) throw new c.default(c.default.ReedSolomonException, "Bad error location");
                                e[p] = u.default.addOrSubtract(e[p], y[g])
                            }
                    }
                }, {
                    key: "runEuclideanAlgorithm",
                    value: function (e, t, n) {
                        if (e.getDegree() < t.getDegree()) {
                            var r = e;
                            e = t, t = r
                        }
                        for (var a = this.field, i = e, o = t, u = a.getZero(), l = a.getOne() ; o.getDegree() >= n / 2;) {
                            var f = i,
                                s = u;
                            if (i = o, u = l, i.isZero()) throw new c.default(c.default.ReedSolomonException, "r_{i-1} was zero");
                            o = f;
                            for (var d = a.getZero(), h = i.getCoefficient(i.getDegree()), v = a.inverse(h) ; o.getDegree() >= i.getDegree() && !o.isZero() ;) {
                                var w = o.getDegree() - i.getDegree(),
                                    y = a.multiply(o.getCoefficient(o.getDegree()), v);
                                d = d.addOrSubtract(a.buildMonomial(w, y)), o = o.addOrSubtract(i.multiplyByMonomial(w, y))
                            }
                            if (l = d.multiply(u).addOrSubtract(s), o.getDegree() >= i.getDegree()) throw new c.default(c.default.IllegalStateException, "Division algorithm failed to reduce polynomial?")
                        }
                        var g = l.getCoefficient(0);
                        if (0 === g) throw new c.default(c.default.ReedSolomonException, "sigmaTilde(0) was zero");
                        var p = a.inverse(g);
                        return [l.multiplyScalar(p), o.multiplyScalar(p)]
                    }
                }, {
                    key: "findErrorLocations",
                    value: function (e) {
                        var t = e.getDegree();
                        if (1 === t) return Int32Array.from([e.getCoefficient(1)]);
                        for (var n = new Int32Array(t), r = 0, a = this.field, i = 1; i < a.getSize() && r < t; i++) 0 === e.evaluateAt(i) && (n[r] = a.inverse(i), r++);
                        if (r !== t) throw new c.default(c.default.ReedSolomonException, "Error locator degree does not match number of roots");
                        return n
                    }
                }, {
                    key: "findErrorMagnitudes",
                    value: function (e, t) {
                        for (var n = t.length, r = new Int32Array(n), a = this.field, i = 0; i < n; i++) {
                            for (var o = a.inverse(t[i]), u = 1, l = 0; l < n; l++)
                                if (i !== l) {
                                    var f = a.multiply(t[l], o),
                                        s = 0 == (1 & f) ? 1 | f : -2 & f;
                                    u = a.multiply(u, s)
                                }
                            r[i] = a.multiply(e.evaluateAt(o), a.inverse(u)), 0 != a.getGeneratorBase() && (r[i] = a.multiply(r[i], o))
                        }
                        return r
                    }
                }]), e
            }();
        t.default = d, e.exports = t.default
    }, , function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(14),
            u = r(o),
            l = n(13),
            f = r(l),
            s = n(0),
            c = r(s),
            d = n(51),
            h = r(d),
            v = function () {
                function e(t) {
                    a(this, e);
                    var n = t.getHeight();
                    if (n < 21 || 1 != (3 & n)) throw new c.default(c.default.FormatException);
                    this.bitMatrix = t
                }
                return i(e, [{
                    key: "readFormatInformation",
                    value: function () {
                        if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
                        for (var e = 0, t = 0; t < 6; t++) e = this.copyBit(t, 8, e);
                        e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
                        for (var n = 5; n >= 0; n--) e = this.copyBit(8, n, e);
                        for (var r = this.bitMatrix.getHeight(), a = 0, i = r - 7, o = r - 1; o >= i; o--) a = this.copyBit(8, o, a);
                        for (var u = r - 8; u < r; u++) a = this.copyBit(u, 8, a);
                        if (this.parsedFormatInfo = f.default.decodeFormatInformation(e, a), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
                        throw new c.default(c.default.FormatException)
                    }
                }, {
                    key: "readVersion",
                    value: function () {
                        if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
                        var e = this.bitMatrix.getHeight(),
                            t = Math.floor((e - 17) / 4);
                        if (t <= 6) return u.default.getVersionForNumber(t);
                        for (var n = 0, r = e - 11, a = 5; a >= 0; a--)
                            for (var i = e - 9; i >= r; i--) n = this.copyBit(i, a, n);
                        var o = u.default.decodeVersionInformation(n);
                        if (null !== o && o.getDimensionForVersion() == e) return this.parsedVersion = o, o;
                        n = 0;
                        for (var l = 5; l >= 0; l--)
                            for (var f = e - 9; f >= r; f--) n = this.copyBit(l, f, n);
                        if (null !== (o = u.default.decodeVersionInformation(n)) && o.getDimensionForVersion() == e) return this.parsedVersion = o, o;
                        throw new c.default(c.default.FormatException)
                    }
                }, {
                    key: "copyBit",
                    value: function (e, t, n) {
                        return (this.isMirror ? this.bitMatrix.get(t, e) : this.bitMatrix.get(e, t)) ? n << 1 | 1 : n << 1
                    }
                }, {
                    key: "readCodewords",
                    value: function () {
                        var e = this.readFormatInformation(),
                            t = this.readVersion(),
                            n = h.default.values.get(e.getDataMask()),
                            r = this.bitMatrix.getHeight();
                        n.unmaskBitMatrix(this.bitMatrix, r);
                        for (var a = t.buildFunctionPattern(), i = !0, o = new Uint8Array(t.getTotalCodewords()), u = 0, l = 0, f = 0, s = r - 1; s > 0; s -= 2) {
                            6 == s && s--;
                            for (var d = 0; d < r; d++)
                                for (var v = i ? r - 1 - d : d, w = 0; w < 2; w++) a.get(s - w, v) || (f++, l <<= 1, this.bitMatrix.get(s - w, v) && (l |= 1), 8 == f && (o[u++] = l, f = 0, l = 0));
                            i = !i
                        }
                        if (u != t.getTotalCodewords()) throw new c.default(c.default.FormatException);
                        return o
                    }
                }, {
                    key: "remask",
                    value: function () {
                        if (null !== this.parsedFormatInfo) {
                            var e = h.default.values[this.parsedFormatInfo.getDataMask()],
                                t = this.bitMatrix.getHeight();
                            e.unmaskBitMatrix(this.bitMatrix, t)
                        }
                    }
                }, {
                    key: "setMirror",
                    value: function (e) {
                        this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = e
                    }
                }, {
                    key: "mirror",
                    value: function () {
                        for (var e = this.bitMatrix, t = 0, n = e.getWidth() ; t < n; t++)
                            for (var r = t + 1, a = e.getHeight() ; r < a; r++) e.get(t, r) !== e.get(r, t) && (e.flip(r, t), e.flip(t, r))
                    }
                }]), e
            }();
        t.default = v, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = n(0),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            u = function () {
                function e(t, n) {
                    r(this, e), this.numDataCodewords = t, this.codewords = n
                }
                return a(e, [{
                    key: "getNumDataCodewords",
                    value: function () {
                        return this.numDataCodewords
                    }
                }, {
                    key: "getCodewords",
                    value: function () {
                        return this.codewords
                    }
                }], [{
                    key: "getDataBlocks",
                    value: function (t, n, r) {
                        if (t.length != n.getTotalCodewords()) throw new o.default(o.default.IllegalArgumentException);
                        var a = n.getECBlocksForLevel(r),
                            i = 0,
                            u = a.getECBlocks(),
                            l = !0,
                            f = !1,
                            s = void 0;
                        try {
                            for (var c, d = u[Symbol.iterator]() ; !(l = (c = d.next()).done) ; l = !0) {
                                i += c.value.getCount()
                            }
                        } catch (e) {
                            f = !0, s = e
                        } finally {
                            try {
                                !l && d.return && d.return()
                            } finally {
                                if (f) throw s
                            }
                        }
                        var h = new Array(i),
                            v = 0,
                            w = !0,
                            y = !1,
                            g = void 0;
                        try {
                            for (var p, m = u[Symbol.iterator]() ; !(w = (p = m.next()).done) ; w = !0)
                                for (var b = p.value, E = 0; E < b.getCount() ; E++) {
                                    var k = b.getDataCodewords(),
                                        _ = a.getECCodewordsPerBlock() + k;
                                    h[v++] = new e(k, new Uint8Array(_))
                                }
                        } catch (e) {
                            y = !0, g = e
                        } finally {
                            try {
                                !w && m.return && m.return()
                            } finally {
                                if (y) throw g
                            }
                        }
                        for (var I = h[0].codewords.length, C = h.length - 1; C >= 0;) {
                            if (h[C].codewords.length === I) break;
                            C--
                        }
                        C++;
                        for (var S = I - a.getECCodewordsPerBlock(), O = 0, M = 0; M < S; M++)
                            for (var A = 0; A < v; A++) h[A].codewords[M] = t[O++];
                        for (var x = C; x < v; x++) h[x].codewords[S] = t[O++];
                        for (var P = h[0].codewords.length, N = S; N < P; N++)
                            for (var T = 0; T < v; T++) {
                                var B = T < C ? N : N + 1;
                                h[T].codewords[B] = t[O++]
                            }
                        return h
                    }
                }]), e
            }();
        t.default = u, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t, n) {
                    r(this, e), this.value = t, this.isMasked = n
                }
                return a(e, [{
                    key: "unmaskBitMatrix",
                    value: function (e, t) {
                        for (var n = 0; n < t; n++)
                            for (var r = 0; r < t; r++) this.isMasked(n, r) && e.flip(r, n)
                    }
                }]), e
            }();
        t.default = i, i.values = new Map([
            [0, new i(0, function (e, t) {
                return 0 == (e + t & 1)
            })],
            [1, new i(1, function (e, t) {
                return 0 == (1 & e)
            })],
            [2, new i(2, function (e, t) {
                return t % 3 == 0
            })],
            [3, new i(3, function (e, t) {
                return (e + t) % 3 == 0
            })],
            [4, new i(4, function (e, t) {
                return 0 == (Math.floor(e / 2) + Math.floor(t / 3) & 1)
            })],
            [5, new i(5, function (e, t) {
                return e * t % 6 == 0
            })],
            [6, new i(6, function (e, t) {
                return e * t % 6 < 3
            })],
            [7, new i(7, function (e, t) {
                return 0 == (e + t + e * t % 3 & 1)
            })]
        ]), e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(38),
            u = r(o),
            l = n(6),
            f = r(l),
            s = n(39),
            c = r(s),
            d = n(46),
            h = r(d),
            v = n(17),
            w = r(v),
            y = n(0),
            g = r(y),
            p = n(4),
            m = r(p),
            b = n(18),
            E = r(b),
            k = function () {
                function e() {
                    a(this, e)
                }
                return i(e, null, [{
                    key: "decode",
                    value: function (t, n, r, a) {
                        var i = new u.default(t),
                            o = new m.default,
                            l = new Array,
                            s = -1,
                            d = -1;
                        try {
                            var h = null,
                                v = !1,
                                y = void 0;
                            do {
                                if (i.available() < 4) y = w.default.TERMINATOR;
                                else {
                                    var p = i.readBits(4);
                                    y = w.default.forBits(p)
                                }
                                switch (y) {
                                    case w.default.TERMINATOR:
                                        break;
                                    case w.default.FNC1_FIRST_POSITION:
                                    case w.default.FNC1_SECOND_POSITION:
                                        v = !0;
                                        break;
                                    case w.default.STRUCTURED_APPEND:
                                        if (i.available() < 16) throw new g.default(g.default.FormatException);
                                        s = i.readBits(8), d = i.readBits(8);
                                        break;
                                    case w.default.ECI:
                                        var b = e.parseECIValue(i);
                                        if (null === (h = f.default.getCharacterSetECIByValue(b))) throw new g.default(g.default.FormatException);
                                        break;
                                    case w.default.HANZI:
                                        var E = i.readBits(4),
                                            k = i.readBits(y.getCharacterCountBits(n));
                                        E === e.GB2312_SUBSET && e.decodeHanziSegment(i, o, k);
                                        break;
                                    default:
                                        var _ = i.readBits(y.getCharacterCountBits(n));
                                        switch (y) {
                                            case w.default.NUMERIC:
                                                e.decodeNumericSegment(i, o, _);
                                                break;
                                            case w.default.ALPHANUMERIC:
                                                e.decodeAlphanumericSegment(i, o, _, v);
                                                break;
                                            case w.default.BYTE:
                                                e.decodeByteSegment(i, o, _, h, l, a);
                                                break;
                                            case w.default.KANJI:
                                                e.decodeKanjiSegment(i, o, _);
                                                break;
                                            default:
                                                throw new g.default(g.default.FormatException)
                                        }
                                }
                            } while (y !== w.default.TERMINATOR)
                        } catch (e) {
                            throw new g.default(g.default.FormatException)
                        }
                        return new c.default(t, o.toString(), 0 === l.length ? null : l, null === r ? null : r.toString(), s, d)
                    }
                }, {
                    key: "decodeHanziSegment",
                    value: function (e, t, n) {
                        if (13 * n > e.available()) throw new g.default(g.default.FormatException);
                        for (var r = new Uint8Array(2 * n), a = 0; n > 0;) {
                            var i = e.readBits(13),
                                o = i / 96 << 8 & 4294967295 | i % 96;
                            o += o < 959 ? 41377 : 42657, r[a] = o >> 8 & 255, r[a + 1] = 255 & o, a += 2, n--
                        }
                        try {
                            t.append(E.default.decode(r, h.default.GB2312))
                        } catch (e) {
                            throw new g.default(g.default.FormatException, e)
                        }
                    }
                }, {
                    key: "decodeKanjiSegment",
                    value: function (e, t, n) {
                        if (13 * n > e.available()) throw new g.default(g.default.FormatException);
                        for (var r = new Uint8Array(2 * n), a = 0; n > 0;) {
                            var i = e.readBits(13),
                                o = i / 192 << 8 & 4294967295 | i % 192;
                            o += o < 7936 ? 33088 : 49472, r[a] = o >> 8, r[a + 1] = o, a += 2, n--
                        }
                        try {
                            t.append(E.default.decode(r, h.default.SHIFT_JIS))
                        } catch (e) {
                            throw new g.default(g.default.FormatException, e)
                        }
                    }
                }, {
                    key: "decodeByteSegment",
                    value: function (e, t, n, r, a, i) {
                        if (8 * n > e.available()) throw new g.default(g.default.FormatException);
                        for (var o = new Uint8Array(n), u = 0; u < n; u++) o[u] = e.readBits(8);
                        var l = void 0;
                        l = null === r ? h.default.guessEncoding(o, i) : r.getName();
                        try {
                            t.append(E.default.decode(o, l))
                        } catch (e) {
                            throw new g.default(g.default.FormatException, e)
                        }
                        a.push(o)
                    }
                }, {
                    key: "toAlphaNumericChar",
                    value: function (t) {
                        if (t >= e.ALPHANUMERIC_CHARS.length) throw new g.default(g.default.FormatException);
                        return e.ALPHANUMERIC_CHARS[t]
                    }
                }, {
                    key: "decodeAlphanumericSegment",
                    value: function (t, n, r, a) {
                        for (var i = n.length() ; r > 1;) {
                            if (t.available() < 11) throw new g.default(g.default.FormatException);
                            var o = t.readBits(11);
                            n.append(e.toAlphaNumericChar(Math.floor(o / 45))), n.append(e.toAlphaNumericChar(o % 45)), r -= 2
                        }
                        if (1 == r) {
                            if (t.available() < 6) throw new g.default(g.default.FormatException);
                            n.append(e.toAlphaNumericChar(t.readBits(6)))
                        }
                        if (a)
                            for (var u = i; u < n.length() ; u++) "%" === n.charAt(u) && (u < n.length() - 1 && "%" === n.charAt(u + 1) ? n.deleteCharAt(u + 1) : n.setCharAt(u, String.fromCharCode(29)))
                    }
                }, {
                    key: "decodeNumericSegment",
                    value: function (t, n, r) {
                        for (; r >= 3;) {
                            if (t.available() < 10) throw new g.default(g.default.FormatException);
                            var a = t.readBits(10);
                            if (a >= 1e3) throw new g.default(g.default.FormatException);
                            n.append(e.toAlphaNumericChar(Math.floor(a / 100))), n.append(e.toAlphaNumericChar(Math.floor(a / 10) % 10)), n.append(e.toAlphaNumericChar(a % 10)), r -= 3
                        }
                        if (2 == r) {
                            if (t.available() < 7) throw new g.default(g.default.FormatException);
                            var i = t.readBits(7);
                            if (i >= 100) throw new g.default(g.default.FormatException);
                            n.append(e.toAlphaNumericChar(Math.floor(i / 10))), n.append(e.toAlphaNumericChar(i % 10))
                        } else if (1 == r) {
                            if (t.available() < 4) throw new g.default(g.default.FormatException);
                            var o = t.readBits(4);
                            if (o >= 10) throw new g.default(g.default.FormatException);
                            n.append(e.toAlphaNumericChar(o))
                        }
                    }
                }, {
                    key: "parseECIValue",
                    value: function (e) {
                        var t = e.readBits(8);
                        if (0 == (128 & t)) return 127 & t;
                        if (128 == (192 & t)) {
                            return (63 & t) << 8 & 4294967295 | e.readBits(8)
                        }
                        if (192 == (224 & t)) {
                            return (31 & t) << 16 & 4294967295 | e.readBits(16)
                        }
                        throw new g.default(g.default.FormatException)
                    }
                }]), e
            }();
        t.default = k, k.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", k.GB2312_SUBSET = 1, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(2),
            u = r(o),
            l = n(7),
            f = r(l),
            s = n(47),
            c = r(s),
            d = n(49),
            h = r(d),
            v = n(24),
            w = r(v),
            y = n(50),
            g = r(y),
            p = n(52),
            m = r(p),
            b = n(0),
            E = r(b),
            k = function () {
                function e() {
                    a(this, e), this.rsDecoder = new c.default(f.default.QR_CODE_FIELD_256)
                }
                return i(e, [{
                    key: "decodeBooleanArray",
                    value: function (e, t) {
                        return this.decodeBitMatrix(u.default.parseFromBooleanArray(e), t)
                    }
                }, {
                    key: "decodeBitMatrix",
                    value: function (e, t) {
                        var n = new h.default(e),
                            r = null;
                        try {
                            return this.decodeBitMatrixParser(n, t)
                        } catch (e) {
                            r = e
                        }
                        try {
                            n.remask(), n.setMirror(!0), n.readVersion(), n.readFormatInformation(), n.mirror();
                            var a = this.decodeBitMatrixParser(n, t);
                            return a.setOther(new w.default(!0)), a
                        } catch (e) {
                            if (null !== r) throw r;
                            throw e
                        }
                    }
                }, {
                    key: "decodeBitMatrixParser",
                    value: function (e, t) {
                        var n = e.readVersion(),
                            r = e.readFormatInformation().getErrorCorrectionLevel(),
                            a = e.readCodewords(),
                            i = g.default.getDataBlocks(a, n, r),
                            o = 0,
                            u = !0,
                            l = !1,
                            f = void 0;
                        try {
                            for (var s, c = i[Symbol.iterator]() ; !(u = (s = c.next()).done) ; u = !0) {
                                o += s.value.getNumDataCodewords()
                            }
                        } catch (e) {
                            l = !0, f = e
                        } finally {
                            try {
                                !u && c.return && c.return()
                            } finally {
                                if (l) throw f
                            }
                        }
                        var d = new Uint8Array(o),
                            h = 0,
                            v = !0,
                            w = !1,
                            y = void 0;
                        try {
                            for (var p, b = i[Symbol.iterator]() ; !(v = (p = b.next()).done) ; v = !0) {
                                var E = p.value,
                                    k = E.getCodewords(),
                                    _ = E.getNumDataCodewords();
                                this.correctErrors(k, _);
                                for (var I = 0; I < _; I++) d[h++] = k[I]
                            }
                        } catch (e) {
                            w = !0, y = e
                        } finally {
                            try {
                                !v && b.return && b.return()
                            } finally {
                                if (w) throw y
                            }
                        }
                        return m.default.decode(d, n, r, t)
                    }
                }, {
                    key: "correctErrors",
                    value: function (e, t) {
                        var n = (e.length, new Int32Array(e));
                        try {
                            this.rsDecoder.decode(n, e.length - t)
                        } catch (e) {
                            throw new E.default(E.default.ChecksumException)
                        }
                        for (var r = 0; r < t; r++) e[r] = n[r]
                    }
                }]), e
            }();
        t.default = k, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            l = n(9),
            f = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            s = function (e) {
                function t(e, n, i) {
                    r(this, t);
                    var o = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return o.estimatedModuleSize = i, o
                }
                return i(t, e), u(t, [{
                    key: "aboutEquals",
                    value: function (e, t, n) {
                        if (Math.abs(t - this.getY()) <= e && Math.abs(n - this.getX()) <= e) {
                            var r = Math.abs(e - this.estimatedModuleSize);
                            return r <= 1 || r <= this.estimatedModuleSize
                        }
                        return !1
                    }
                }, {
                    key: "combineEstimate",
                    value: function (e, n, r) {
                        return new t((this.getX() + n) / 2, (this.getY() + e) / 2, (this.estimatedModuleSize + r) / 2)
                    }
                }]), t
            }(f.default);
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(54),
            u = r(o),
            l = n(0),
            f = r(l),
            s = function () {
                function e(t, n, r, i, o, u, l) {
                    a(this, e), this.image = t, this.startX = n, this.startY = r, this.width = i, this.height = o, this.moduleSize = u, this.resultPointCallback = l, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
                }
                return i(e, [{
                    key: "find",
                    value: function () {
                        for (var e = this.startX, t = this.height, n = this.width, r = e + n, a = this.startY + t / 2, i = new Int32Array(3), o = this.image, u = 0; u < t; u++) {
                            var l = a + (0 == (1 & u) ? Math.floor((u + 1) / 2) : -Math.floor((u + 1) / 2));
                            i[0] = 0, i[1] = 0, i[2] = 0;
                            for (var s = e; s < r && !o.get(s, l) ;) s++;
                            for (var c = 0; s < r;) {
                                if (o.get(s, l))
                                    if (1 === c) i[1]++;
                                    else if (2 === c) {
                                        if (this.foundPatternCross(i)) {
                                            var d = this.handlePossibleCenter(i, l, s);
                                            if (null !== d) return d
                                        }
                                        i[0] = i[2], i[1] = 1, i[2] = 0, c = 1
                                    } else i[++c]++;
                                else 1 === c && c++, i[c]++;
                                s++
                            }
                            if (this.foundPatternCross(i)) {
                                var h = this.handlePossibleCenter(i, l, r);
                                if (null !== h) return h
                            }
                        }
                        if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
                        throw new f.default(f.default.NotFoundException)
                    }
                }, {
                    key: "foundPatternCross",
                    value: function (e) {
                        for (var t = this.moduleSize, n = t / 2, r = 0; r < 3; r++)
                            if (Math.abs(t - e[r]) >= n) return !1;
                        return !0
                    }
                }, {
                    key: "crossCheckVertical",
                    value: function (t, n, r, a) {
                        var i = this.image,
                            o = i.getHeight(),
                            u = this.crossCheckStateCount;
                        u[0] = 0, u[1] = 0, u[2] = 0;
                        for (var l = t; l >= 0 && i.get(n, l) && u[1] <= r;) u[1]++, l--;
                        if (l < 0 || u[1] > r) return NaN;
                        for (; l >= 0 && !i.get(n, l) && u[0] <= r;) u[0]++, l--;
                        if (u[0] > r) return NaN;
                        for (l = t + 1; l < o && i.get(n, l) && u[1] <= r;) u[1]++, l++;
                        if (l == o || u[1] > r) return NaN;
                        for (; l < o && !i.get(n, l) && u[2] <= r;) u[2]++, l++;
                        if (u[2] > r) return NaN;
                        var f = u[0] + u[1] + u[2];
                        return 5 * Math.abs(f - a) >= 2 * a ? NaN : this.foundPatternCross(u) ? e.centerFromEnd(u, l) : NaN
                    }
                }, {
                    key: "handlePossibleCenter",
                    value: function (t, n, r) {
                        var a = t[0] + t[1] + t[2],
                            i = e.centerFromEnd(t, r),
                            o = this.crossCheckVertical(n, i, 2 * t[1], a);
                        if (!isNaN(o)) {
                            var l = (t[0] + t[1] + t[2]) / 3,
                                f = !0,
                                s = !1,
                                c = void 0;
                            try {
                                for (var d, h = this.possibleCenters[Symbol.iterator]() ; !(f = (d = h.next()).done) ; f = !0) {
                                    var v = d.value;
                                    if (v.aboutEquals(l, o, i)) return v.combineEstimate(o, i, l)
                                }
                            } catch (e) {
                                s = !0, c = e
                            } finally {
                                try {
                                    !f && h.return && h.return()
                                } finally {
                                    if (s) throw c
                                }
                            }
                            var w = new u.default(i, o, l);
                            this.possibleCenters.push(w), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(w)
                        }
                        return null
                    }
                }], [{
                    key: "centerFromEnd",
                    value: function (e, t) {
                        return t - e[2] - e[1] / 2
                    }
                }]), e
            }();
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(9),
            u = r(o),
            l = n(41),
            f = r(l),
            s = n(44),
            c = r(s),
            d = n(22),
            h = r(d),
            v = n(23),
            w = r(v),
            y = n(14),
            g = r(y),
            p = n(58),
            m = r(p),
            b = n(0),
            E = r(b),
            k = n(55),
            _ = r(k),
            I = function () {
                function e(t) {
                    a(this, e), this.image = t
                }
                return i(e, [{
                    key: "getImage",
                    value: function () {
                        return this.image
                    }
                }, {
                    key: "getResultPointCallback",
                    value: function () {
                        return this.resultPointCallback
                    }
                }, {
                    key: "detect",
                    value: function (e) {
                        this.resultPointCallback = null === e || void 0 === e ? null : e.get(9);
                        var t = new m.default(this.image, this.resultPointCallback),
                            n = t.find(e);
                        return this.processFinderPatternInfo(n)
                    }
                }, {
                    key: "processFinderPatternInfo",
                    value: function (t) {
                        var n = t.getTopLeft(),
                            r = t.getTopRight(),
                            a = t.getBottomLeft(),
                            i = this.calculateModuleSize(n, r, a);
                        if (i < 1) throw new E.default(E.default.NotFoundException);
                        var o = e.computeDimension(n, r, a, i),
                            u = g.default.getProvisionalVersionForDimension(o),
                            l = u.getDimensionForVersion() - 7,
                            s = null;
                        if (u.getAlignmentPatternCenters().length > 0)
                            for (var c = r.getX() - n.getX() + a.getX(), d = r.getY() - n.getY() + a.getY(), h = 1 - 3 / l, v = Math.floor(n.getX() + h * (c - n.getX())), w = Math.floor(n.getY() + h * (d - n.getY())), y = 4; y <= 16; y <<= 1) try {
                                s = this.findAlignmentInRegion(i, v, w, y);
                                break
                            } catch (e) {
                                if (!E.default.isOfType(e, E.default.NotFoundException)) throw e
                            }
                        var p = e.createTransform(n, r, a, s, o),
                            m = e.sampleGrid(this.image, p, o),
                            b = void 0;
                        return b = null === s ? [a, n, r] : [a, n, r, s], new f.default(m, b)
                    }
                }, {
                    key: "calculateModuleSize",
                    value: function (e, t, n) {
                        return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, n)) / 2
                    }
                }, {
                    key: "calculateModuleSizeOneWay",
                    value: function (e, t) {
                        var n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY())),
                            r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY()));
                        return isNaN(n) ? r / 7 : isNaN(r) ? n / 7 : (n + r) / 14
                    }
                }, {
                    key: "sizeOfBlackWhiteBlackRunBothWays",
                    value: function (e, t, n, r) {
                        var a = this.sizeOfBlackWhiteBlackRun(e, t, n, r),
                            i = 1,
                            o = e - (n - e);
                        o < 0 ? (i = e / (e - o), o = 0) : o >= this.image.getWidth() && (i = (this.image.getWidth() - 1 - e) / (o - e), o = this.image.getWidth() - 1);
                        var u = Math.floor(t - (r - t) * i);
                        return i = 1, u < 0 ? (i = t / (t - u), u = 0) : u >= this.image.getHeight() && (i = (this.image.getHeight() - 1 - t) / (u - t), u = this.image.getHeight() - 1), o = Math.floor(e + (o - e) * i), (a += this.sizeOfBlackWhiteBlackRun(e, t, o, u)) - 1
                    }
                }, {
                    key: "sizeOfBlackWhiteBlackRun",
                    value: function (e, t, n, r) {
                        var a = Math.abs(r - t) > Math.abs(n - e);
                        if (a) {
                            var i = e;
                            e = t, t = i, i = n, n = r, r = i
                        }
                        for (var o = Math.abs(n - e), u = Math.abs(r - t), l = -o / 2, f = e < n ? 1 : -1, s = t < r ? 1 : -1, c = 0, d = n + f, h = e, v = t; h != d; h += f) {
                            var y = a ? v : h,
                                g = a ? h : v;
                            if (1 === c === this.image.get(y, g)) {
                                if (2 === c) return w.default.distance(h, v, e, t);
                                c++
                            }
                            if ((l += u) > 0) {
                                if (v === r) break;
                                v += s, l -= o
                            }
                        }
                        return 2 === c ? w.default.distance(n + f, r, e, t) : NaN
                    }
                }, {
                    key: "findAlignmentInRegion",
                    value: function (e, t, n, r) {
                        var a = Math.floor(r * e),
                            i = Math.max(0, t - a),
                            o = Math.min(this.image.getWidth() - 1, t + a);
                        if (o - i < 3 * e) throw new E.default(E.default.NotFoundException);
                        var u = Math.max(0, n - a),
                            l = Math.min(this.image.getHeight() - 1, n + a);
                        if (l - u < 3 * e) throw new E.default(E.default.NotFoundException);
                        return new _.default(this.image, i, u, o - i, l - u, e, this.resultPointCallback).find()
                    }
                }], [{
                    key: "createTransform",
                    value: function (e, t, n, r, a) {
                        var i = a - 3.5,
                            o = void 0,
                            u = void 0,
                            l = void 0,
                            f = void 0;
                        return null !== r ? (o = r.getX(), u = r.getY(), l = i - 3, f = l) : (o = t.getX() - e.getX() + n.getX(), u = t.getY() - e.getY() + n.getY(), l = i, f = i), h.default.quadrilateralToQuadrilateral(3.5, 3.5, i, 3.5, l, f, 3.5, i, e.getX(), e.getY(), t.getX(), t.getY(), o, u, n.getX(), n.getY())
                    }
                }, {
                    key: "sampleGrid",
                    value: function (e, t, n) {
                        return c.default.getInstance().sampleGridWithTransform(e, n, n, t)
                    }
                }, {
                    key: "computeDimension",
                    value: function (e, t, n, r) {
                        var a = w.default.round(u.default.distance(e, t) / r),
                            i = w.default.round(u.default.distance(e, n) / r),
                            o = Math.floor((a + i) / 2) + 7;
                        switch (3 & o) {
                            case 0:
                                o++;
                                break;
                            case 2:
                                o--;
                                break;
                            case 3:
                                throw new E.default(E.default.NotFoundException)
                        }
                        return o
                    }
                }]), e
            }();
        t.default = I, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var u = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            l = n(9),
            f = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            s = function (e) {
                function t(e, n, i, o) {
                    r(this, t);
                    var u = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                    return u.estimatedModuleSize = i, u.count = o, void 0 === o && (u.count = 1), u
                }
                return i(t, e), u(t, [{
                    key: "getEstimatedModuleSize",
                    value: function () {
                        return this.estimatedModuleSize
                    }
                }, {
                    key: "getCount",
                    value: function () {
                        return this.count
                    }
                }, {
                    key: "aboutEquals",
                    value: function (e, t, n) {
                        if (Math.abs(t - this.getY()) <= e && Math.abs(n - this.getX()) <= e) {
                            var r = Math.abs(e - this.estimatedModuleSize);
                            return r <= 1 || r <= this.estimatedModuleSize
                        }
                        return !1
                    }
                }, {
                    key: "combineEstimate",
                    value: function (e, n, r) {
                        var a = this.count + 1;
                        return new t((this.count * this.getX() + n) / a, (this.count * this.getY() + e) / a, (this.count * this.estimatedModuleSize + r) / a, a)
                    }
                }]), t
            }(f.default);
        t.default = s, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            o = n(9),
            u = r(o),
            l = n(57),
            f = r(l),
            s = n(59),
            c = r(s),
            d = n(0),
            h = r(d),
            v = function () {
                function e(t, n) {
                    a(this, e), this.image = t, this.resultPointCallback = n, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = n
                }
                return i(e, [{
                    key: "getImage",
                    value: function () {
                        return this.image
                    }
                }, {
                    key: "getPossibleCenters",
                    value: function () {
                        return this.possibleCenters
                    }
                }, {
                    key: "find",
                    value: function (t) {
                        var n = null !== t && void 0 !== t && void 0 !== t.get(3),
                            r = null !== t && void 0 !== t && void 0 !== t.get(1),
                            a = this.image,
                            i = a.getHeight(),
                            o = a.getWidth(),
                            l = Math.floor(3 * i / (4 * e.MAX_MODULES));
                        (l < e.MIN_SKIP || n) && (l = e.MIN_SKIP);
                        for (var f = !1, s = new Int32Array(5), d = l - 1; d < i && !f; d += l) {
                            s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0;
                            for (var h = 0, v = 0; v < o; v++)
                                if (a.get(v, d)) 1 == (1 & h) && h++, s[h]++;
                                else if (0 == (1 & h))
                                    if (4 === h)
                                        if (e.foundPatternCross(s)) {
                                            var w = this.handlePossibleCenter(s, d, v, r);
                                            if (!0 !== w) {
                                                s[0] = s[2], s[1] = s[3], s[2] = s[4], s[3] = 1, s[4] = 0, h = 3;
                                                continue
                                            }
                                            if (l = 2, !0 === this.hasSkipped) f = this.haveMultiplyConfirmedCenters();
                                            else {
                                                var y = this.findRowSkip();
                                                y > s[2] && (d += y - s[2] - l, v = o - 1)
                                            }
                                            h = 0, s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0
                                        } else s[0] = s[2], s[1] = s[3], s[2] = s[4], s[3] = 1, s[4] = 0, h = 3;
                                    else s[++h]++;
                                else s[h]++;
                            if (e.foundPatternCross(s)) {
                                !0 === this.handlePossibleCenter(s, d, o, r) && (l = s[0], this.hasSkipped && (f = this.haveMultiplyConfirmedCenters()))
                            }
                        }
                        var g = this.selectBestPatterns();
                        return u.default.orderBestPatterns(g), new c.default(g)
                    }
                }, {
                    key: "getCrossCheckStateCount",
                    value: function () {
                        var e = this.crossCheckStateCount;
                        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e
                    }
                }, {
                    key: "crossCheckDiagonal",
                    value: function (t, n, r, a) {
                        for (var i = this.getCrossCheckStateCount(), o = 0, u = this.image; t >= o && n >= o && u.get(n - o, t - o) ;) i[2]++, o++;
                        if (t < o || n < o) return !1;
                        for (; t >= o && n >= o && !u.get(n - o, t - o) && i[1] <= r;) i[1]++, o++;
                        if (t < o || n < o || i[1] > r) return !1;
                        for (; t >= o && n >= o && u.get(n - o, t - o) && i[0] <= r;) i[0]++, o++;
                        if (i[0] > r) return !1;
                        var l = u.getHeight(),
                            f = u.getWidth();
                        for (o = 1; t + o < l && n + o < f && u.get(n + o, t + o) ;) i[2]++, o++;
                        if (t + o >= l || n + o >= f) return !1;
                        for (; t + o < l && n + o < f && !u.get(n + o, t + o) && i[3] < r;) i[3]++, o++;
                        if (t + o >= l || n + o >= f || i[3] >= r) return !1;
                        for (; t + o < l && n + o < f && u.get(n + o, t + o) && i[4] < r;) i[4]++, o++;
                        if (i[4] >= r) return !1;
                        var s = i[0] + i[1] + i[2] + i[3] + i[4];
                        return Math.abs(s - a) < 2 * a && e.foundPatternCross(i)
                    }
                }, {
                    key: "crossCheckVertical",
                    value: function (t, n, r, a) {
                        for (var i = this.image, o = i.getHeight(), u = this.getCrossCheckStateCount(), l = t; l >= 0 && i.get(n, l) ;) u[2]++, l--;
                        if (l < 0) return NaN;
                        for (; l >= 0 && !i.get(n, l) && u[1] <= r;) u[1]++, l--;
                        if (l < 0 || u[1] > r) return NaN;
                        for (; l >= 0 && i.get(n, l) && u[0] <= r;) u[0]++, l--;
                        if (u[0] > r) return NaN;
                        for (l = t + 1; l < o && i.get(n, l) ;) u[2]++, l++;
                        if (l === o) return NaN;
                        for (; l < o && !i.get(n, l) && u[3] < r;) u[3]++, l++;
                        if (l === o || u[3] >= r) return NaN;
                        for (; l < o && i.get(n, l) && u[4] < r;) u[4]++, l++;
                        if (u[4] >= r) return NaN;
                        var f = u[0] + u[1] + u[2] + u[3] + u[4];
                        return 5 * Math.abs(f - a) >= 2 * a ? NaN : e.foundPatternCross(u) ? e.centerFromEnd(u, l) : NaN
                    }
                }, {
                    key: "crossCheckHorizontal",
                    value: function (t, n, r, a) {
                        for (var i = this.image, o = i.getWidth(), u = this.getCrossCheckStateCount(), l = t; l >= 0 && i.get(l, n) ;) u[2]++, l--;
                        if (l < 0) return NaN;
                        for (; l >= 0 && !i.get(l, n) && u[1] <= r;) u[1]++, l--;
                        if (l < 0 || u[1] > r) return NaN;
                        for (; l >= 0 && i.get(l, n) && u[0] <= r;) u[0]++, l--;
                        if (u[0] > r) return NaN;
                        for (l = t + 1; l < o && i.get(l, n) ;) u[2]++, l++;
                        if (l == o) return NaN;
                        for (; l < o && !i.get(l, n) && u[3] < r;) u[3]++, l++;
                        if (l == o || u[3] >= r) return NaN;
                        for (; l < o && i.get(l, n) && u[4] < r;) u[4]++, l++;
                        if (u[4] >= r) return NaN;
                        var f = u[0] + u[1] + u[2] + u[3] + u[4];
                        return 5 * Math.abs(f - a) >= a ? NaN : e.foundPatternCross(u) ? e.centerFromEnd(u, l) : NaN
                    }
                }, {
                    key: "handlePossibleCenter",
                    value: function (t, n, r, a) {
                        var i = t[0] + t[1] + t[2] + t[3] + t[4],
                            o = e.centerFromEnd(t, r),
                            u = this.crossCheckVertical(n, Math.floor(o), t[2], i);
                        if (!isNaN(u) && (o = this.crossCheckHorizontal(Math.floor(o), Math.floor(u), t[2], i), !isNaN(o) && (!a || this.crossCheckDiagonal(Math.floor(u), Math.floor(o), t[2], i)))) {
                            for (var l = i / 7, s = !1, c = this.possibleCenters, d = 0, h = c.length; d < h; d++) {
                                var v = c[d];
                                if (v.aboutEquals(l, u, o)) {
                                    c[d] = v.combineEstimate(u, o, l), s = !0;
                                    break
                                }
                            }
                            if (!s) {
                                var w = new f.default(o, u, l);
                                c.push(w), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(w)
                            }
                            return !0
                        }
                        return !1
                    }
                }, {
                    key: "findRowSkip",
                    value: function () {
                        if (this.possibleCenters.length <= 1) return 0;
                        var t = null,
                            n = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var i, o = this.possibleCenters[Symbol.iterator]() ; !(n = (i = o.next()).done) ; n = !0) {
                                var u = i.value;
                                if (u.getCount() >= e.CENTER_QUORUM) {
                                    if (null != t) return this.hasSkipped = !0, Math.floor((Math.abs(t.getX() - u.getX()) - Math.abs(t.getY() - u.getY())) / 2);
                                    t = u
                                }
                            }
                        } catch (e) {
                            r = !0, a = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return 0
                    }
                }, {
                    key: "haveMultiplyConfirmedCenters",
                    value: function () {
                        var t = 0,
                            n = 0,
                            r = this.possibleCenters.length,
                            a = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var u, l = this.possibleCenters[Symbol.iterator]() ; !(a = (u = l.next()).done) ; a = !0) {
                                var f = u.value;
                                f.getCount() >= e.CENTER_QUORUM && (t++, n += f.getEstimatedModuleSize())
                            }
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !a && l.return && l.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        if (t < 3) return !1;
                        var s = n / r,
                            c = 0,
                            d = !0,
                            h = !1,
                            v = void 0;
                        try {
                            for (var w, y = this.possibleCenters[Symbol.iterator]() ; !(d = (w = y.next()).done) ; d = !0) {
                                var g = w.value;
                                c += Math.abs(g.getEstimatedModuleSize() - s)
                            }
                        } catch (e) {
                            h = !0, v = e
                        } finally {
                            try {
                                !d && y.return && y.return()
                            } finally {
                                if (h) throw v
                            }
                        }
                        return c <= .05 * n
                    }
                }, {
                    key: "selectBestPatterns",
                    value: function () {
                        var e = this.possibleCenters.length;
                        if (e < 3) throw new h.default(h.default.NotFoundException);
                        var t = this.possibleCenters,
                            n = void 0;
                        if (e > 3) {
                            var r = 0,
                                a = 0,
                                i = !0,
                                o = !1,
                                u = void 0;
                            try {
                                for (var l, f = this.possibleCenters[Symbol.iterator]() ; !(i = (l = f.next()).done) ; i = !0) {
                                    var s = l.value,
                                        c = s.getEstimatedModuleSize();
                                    r += c, a += c * c
                                }
                            } catch (e) {
                                o = !0, u = e
                            } finally {
                                try {
                                    !i && f.return && f.return()
                                } finally {
                                    if (o) throw u
                                }
                            }
                            n = r / e;
                            var d = Math.sqrt(a / e - n * n);
                            t.sort(function (e, t) {
                                var r = Math.abs(t.getEstimatedModuleSize() - n),
                                    a = Math.abs(e.getEstimatedModuleSize() - n);
                                return r < a ? -1 : r > a ? 1 : 0
                            });
                            for (var v = Math.max(.2 * n, d), w = 0; w < t.length && t.length > 3; w++) {
                                var y = t[w];
                                Math.abs(y.getEstimatedModuleSize() - n) > v && (t.splice(w, 1), w--)
                            }
                        }
                        if (t.length > 3) {
                            var g = 0,
                                p = !0,
                                m = !1,
                                b = void 0;
                            try {
                                for (var E, k = t[Symbol.iterator]() ; !(p = (E = k.next()).done) ; p = !0) {
                                    g += E.value.getEstimatedModuleSize()
                                }
                            } catch (e) {
                                m = !0, b = e
                            } finally {
                                try {
                                    !p && k.return && k.return()
                                } finally {
                                    if (m) throw b
                                }
                            }
                            n = g / t.length, t.sort(function (e, t) {
                                if (t.getCount() === e.getCount()) {
                                    var r = Math.abs(t.getEstimatedModuleSize() - n),
                                        a = Math.abs(e.getEstimatedModuleSize() - n);
                                    return r < a ? 1 : r > a ? -1 : 0
                                }
                                return t.getCount() - e.getCount()
                            }), t.splice(3)
                        }
                        return [t[0], t[1], t[2]]
                    }
                }], [{
                    key: "centerFromEnd",
                    value: function (e, t) {
                        return t - e[4] - e[3] - e[2] / 2
                    }
                }, {
                    key: "foundPatternCross",
                    value: function (e) {
                        for (var t = 0, n = 0; n < 5; n++) {
                            var r = e[n];
                            if (0 === r) return !1;
                            t += r
                        }
                        if (t < 7) return !1;
                        var a = t / 7,
                            i = a / 2;
                        return Math.abs(a - e[0]) < i && Math.abs(a - e[1]) < i && Math.abs(3 * a - e[2]) < 3 * i && Math.abs(a - e[3]) < i && Math.abs(a - e[4]) < i
                    }
                }]), e
            }();
        t.default = v, v.CENTER_QUORUM = 2, v.MIN_SKIP = 3, v.MAX_MODULES = 57, e.exports = t.default
    }, function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e(t) {
                    r(this, e), this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
                }
                return a(e, [{
                    key: "getBottomLeft",
                    value: function () {
                        return this.bottomLeft
                    }
                }, {
                    key: "getTopLeft",
                    value: function () {
                        return this.topLeft
                    }
                }, {
                    key: "getTopRight",
                    value: function () {
                        return this.topRight
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }, , , , function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
            i = function () {
                function e() {
                    r(this, e)
                }
                return a(e, null, [{
                    key: "floatToIntBits",
                    value: function (e) {
                        return e
                    }
                }]), e
            }();
        t.default = i, e.exports = t.default
    }])
});
//# sourceMappingURL=zxing.qrcodereader.min.js.map