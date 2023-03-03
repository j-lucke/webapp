/*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ /*!
 * Chart.js v4.2.1
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ /*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function $eed45f11f39dbf0b$export$2077e0241d6afd3c(v) {
    return v + 0.5 | 0;
}
const $eed45f11f39dbf0b$export$837ba5c449269406 = (v, l, h)=>Math.max(Math.min(v, h), l);
function $eed45f11f39dbf0b$export$bcc6e673dfa14d36(v) {
    return $eed45f11f39dbf0b$export$837ba5c449269406($eed45f11f39dbf0b$export$2077e0241d6afd3c(v * 2.55), 0, 255);
}
function $eed45f11f39dbf0b$export$869b26d4e1bbdb63(v) {
    return $eed45f11f39dbf0b$export$837ba5c449269406($eed45f11f39dbf0b$export$2077e0241d6afd3c(v / 2.55), 0, 100);
}
function $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6(v) {
    return $eed45f11f39dbf0b$export$837ba5c449269406($eed45f11f39dbf0b$export$2077e0241d6afd3c(v * 255), 0, 255);
}
function $eed45f11f39dbf0b$export$dbf961a8d278dbef(v) {
    return $eed45f11f39dbf0b$export$837ba5c449269406($eed45f11f39dbf0b$export$2077e0241d6afd3c(v / 2.55) / 100, 0, 1);
}
function $eed45f11f39dbf0b$export$aa35ef1f24408ab9(v) {
    return $eed45f11f39dbf0b$export$837ba5c449269406($eed45f11f39dbf0b$export$2077e0241d6afd3c(v * 100), 0, 100);
}
const $eed45f11f39dbf0b$var$map$1 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const $eed45f11f39dbf0b$var$hex = [
    ..."0123456789ABCDEF"
];
const $eed45f11f39dbf0b$var$h1 = (b)=>$eed45f11f39dbf0b$var$hex[b & 0xF];
const $eed45f11f39dbf0b$var$h2 = (b)=>$eed45f11f39dbf0b$var$hex[(b & 0xF0) >> 4] + $eed45f11f39dbf0b$var$hex[b & 0xF];
const $eed45f11f39dbf0b$var$eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const $eed45f11f39dbf0b$var$isShort = (v)=>$eed45f11f39dbf0b$var$eq(v.r) && $eed45f11f39dbf0b$var$eq(v.g) && $eed45f11f39dbf0b$var$eq(v.b) && $eed45f11f39dbf0b$var$eq(v.a);
function $eed45f11f39dbf0b$export$625a38b961e8b5e9(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
        if (len === 4 || len === 5) ret = {
            r: 255 & $eed45f11f39dbf0b$var$map$1[str[1]] * 17,
            g: 255 & $eed45f11f39dbf0b$var$map$1[str[2]] * 17,
            b: 255 & $eed45f11f39dbf0b$var$map$1[str[3]] * 17,
            a: len === 5 ? $eed45f11f39dbf0b$var$map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: $eed45f11f39dbf0b$var$map$1[str[1]] << 4 | $eed45f11f39dbf0b$var$map$1[str[2]],
            g: $eed45f11f39dbf0b$var$map$1[str[3]] << 4 | $eed45f11f39dbf0b$var$map$1[str[4]],
            b: $eed45f11f39dbf0b$var$map$1[str[5]] << 4 | $eed45f11f39dbf0b$var$map$1[str[6]],
            a: len === 9 ? $eed45f11f39dbf0b$var$map$1[str[7]] << 4 | $eed45f11f39dbf0b$var$map$1[str[8]] : 255
        };
    }
    return ret;
}
const $eed45f11f39dbf0b$var$alpha = (a, f)=>a < 255 ? f(a) : "";
function $eed45f11f39dbf0b$export$1b06654353ef9f67(v) {
    var f = $eed45f11f39dbf0b$var$isShort(v) ? $eed45f11f39dbf0b$var$h1 : $eed45f11f39dbf0b$var$h2;
    return v ? "#" + f(v.r) + f(v.g) + f(v.b) + $eed45f11f39dbf0b$var$alpha(v.a, f) : undefined;
}
const $eed45f11f39dbf0b$var$HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function $eed45f11f39dbf0b$var$hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function $eed45f11f39dbf0b$var$hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function $eed45f11f39dbf0b$var$hwb2rgbn(h, w, b) {
    const rgb = $eed45f11f39dbf0b$var$hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function $eed45f11f39dbf0b$var$hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function $eed45f11f39dbf0b$export$b5ba70b240f8f7f(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = $eed45f11f39dbf0b$var$hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function $eed45f11f39dbf0b$var$calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map($eed45f11f39dbf0b$export$ed9bd8dcaeba14f6);
}
function $eed45f11f39dbf0b$export$4c15bd42559b811d(h, s, l) {
    return $eed45f11f39dbf0b$var$calln($eed45f11f39dbf0b$var$hsl2rgbn, h, s, l);
}
function $eed45f11f39dbf0b$export$e2710022c70fc9ee(h, w, b) {
    return $eed45f11f39dbf0b$var$calln($eed45f11f39dbf0b$var$hwb2rgbn, h, w, b);
}
function $eed45f11f39dbf0b$export$b785a357c84e4a04(h, s, v) {
    return $eed45f11f39dbf0b$var$calln($eed45f11f39dbf0b$var$hsv2rgbn, h, s, v);
}
function $eed45f11f39dbf0b$var$hue(h) {
    return (h % 360 + 360) % 360;
}
function $eed45f11f39dbf0b$export$5e91288c399be4f9(str) {
    const m = $eed45f11f39dbf0b$var$HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? $eed45f11f39dbf0b$export$bcc6e673dfa14d36(+m[5]) : $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6(+m[5]);
    const h = $eed45f11f39dbf0b$var$hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === "hwb") v = $eed45f11f39dbf0b$export$e2710022c70fc9ee(h, p1, p2);
    else if (m[1] === "hsv") v = $eed45f11f39dbf0b$export$b785a357c84e4a04(h, p1, p2);
    else v = $eed45f11f39dbf0b$export$4c15bd42559b811d(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function $eed45f11f39dbf0b$export$bb628a54ab399bc9(v, deg) {
    var h = $eed45f11f39dbf0b$export$b5ba70b240f8f7f(v);
    h[0] = $eed45f11f39dbf0b$var$hue(h[0] + deg);
    h = $eed45f11f39dbf0b$export$4c15bd42559b811d(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function $eed45f11f39dbf0b$export$a197af1c58e6260c(v) {
    if (!v) return;
    const a = $eed45f11f39dbf0b$export$b5ba70b240f8f7f(v);
    const h = a[0];
    const s = $eed45f11f39dbf0b$export$aa35ef1f24408ab9(a[1]);
    const l = $eed45f11f39dbf0b$export$aa35ef1f24408ab9(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${$eed45f11f39dbf0b$export$dbf961a8d278dbef(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const $eed45f11f39dbf0b$var$map = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
};
const $eed45f11f39dbf0b$var$names$1 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function $eed45f11f39dbf0b$var$unpack() {
    const unpacked = {};
    const keys = Object.keys($eed45f11f39dbf0b$var$names$1);
    const tkeys = Object.keys($eed45f11f39dbf0b$var$map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, $eed45f11f39dbf0b$var$map[k]);
        }
        k = parseInt($eed45f11f39dbf0b$var$names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let $eed45f11f39dbf0b$var$names;
function $eed45f11f39dbf0b$export$b2f06b640faad956(str) {
    if (!$eed45f11f39dbf0b$var$names) {
        $eed45f11f39dbf0b$var$names = $eed45f11f39dbf0b$var$unpack();
        $eed45f11f39dbf0b$var$names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = $eed45f11f39dbf0b$var$names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const $eed45f11f39dbf0b$var$RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function $eed45f11f39dbf0b$export$91aedb20f296e541(str) {
    const m = $eed45f11f39dbf0b$var$RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? $eed45f11f39dbf0b$export$bcc6e673dfa14d36(v) : $eed45f11f39dbf0b$export$837ba5c449269406(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? $eed45f11f39dbf0b$export$bcc6e673dfa14d36(r) : $eed45f11f39dbf0b$export$837ba5c449269406(r, 0, 255));
    g = 255 & (m[4] ? $eed45f11f39dbf0b$export$bcc6e673dfa14d36(g) : $eed45f11f39dbf0b$export$837ba5c449269406(g, 0, 255));
    b = 255 & (m[6] ? $eed45f11f39dbf0b$export$bcc6e673dfa14d36(b) : $eed45f11f39dbf0b$export$837ba5c449269406(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function $eed45f11f39dbf0b$export$9595423f22cf925a(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${$eed45f11f39dbf0b$export$dbf961a8d278dbef(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const $eed45f11f39dbf0b$var$to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const $eed45f11f39dbf0b$var$from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function $eed45f11f39dbf0b$var$interpolate(rgb1, rgb2, t) {
    const r = $eed45f11f39dbf0b$var$from($eed45f11f39dbf0b$export$dbf961a8d278dbef(rgb1.r));
    const g = $eed45f11f39dbf0b$var$from($eed45f11f39dbf0b$export$dbf961a8d278dbef(rgb1.g));
    const b = $eed45f11f39dbf0b$var$from($eed45f11f39dbf0b$export$dbf961a8d278dbef(rgb1.b));
    return {
        r: $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6($eed45f11f39dbf0b$var$to(r + t * ($eed45f11f39dbf0b$var$from($eed45f11f39dbf0b$export$dbf961a8d278dbef(rgb2.r)) - r))),
        g: $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6($eed45f11f39dbf0b$var$to(g + t * ($eed45f11f39dbf0b$var$from($eed45f11f39dbf0b$export$dbf961a8d278dbef(rgb2.g)) - g))),
        b: $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6($eed45f11f39dbf0b$var$to(b + t * ($eed45f11f39dbf0b$var$from($eed45f11f39dbf0b$export$dbf961a8d278dbef(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function $eed45f11f39dbf0b$var$modHSL(v, i, ratio) {
    if (v) {
        let tmp = $eed45f11f39dbf0b$export$b5ba70b240f8f7f(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = $eed45f11f39dbf0b$export$4c15bd42559b811d(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function $eed45f11f39dbf0b$var$clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function $eed45f11f39dbf0b$var$fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6(input[3]);
        }
    } else {
        v = $eed45f11f39dbf0b$var$clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6(v.a);
    }
    return v;
}
function $eed45f11f39dbf0b$var$functionParse(str) {
    if (str.charAt(0) === "r") return $eed45f11f39dbf0b$export$91aedb20f296e541(str);
    return $eed45f11f39dbf0b$export$5e91288c399be4f9(str);
}
class $eed45f11f39dbf0b$export$892596cec99bc70e {
    constructor(input){
        if (input instanceof $eed45f11f39dbf0b$export$892596cec99bc70e) return input;
        const type = typeof input;
        let v;
        if (type === "object") v = $eed45f11f39dbf0b$var$fromObject(input);
        else if (type === "string") v = $eed45f11f39dbf0b$export$625a38b961e8b5e9(input) || $eed45f11f39dbf0b$export$b2f06b640faad956(input) || $eed45f11f39dbf0b$var$functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = $eed45f11f39dbf0b$var$clone(this._rgb);
        if (v) v.a = $eed45f11f39dbf0b$export$dbf961a8d278dbef(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = $eed45f11f39dbf0b$var$fromObject(obj);
    }
    rgbString() {
        return this._valid ? $eed45f11f39dbf0b$export$9595423f22cf925a(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? $eed45f11f39dbf0b$export$1b06654353ef9f67(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? $eed45f11f39dbf0b$export$a197af1c58e6260c(this._rgb) : undefined;
    }
    mix(color, weight) {
        if (color) {
            const c1 = this.rgb;
            const c2 = color.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color, t) {
        if (color) this._rgb = $eed45f11f39dbf0b$var$interpolate(this._rgb, color._rgb, t);
        return this;
    }
    clone() {
        return new $eed45f11f39dbf0b$export$892596cec99bc70e(this.rgb);
    }
    alpha(a) {
        this._rgb.a = $eed45f11f39dbf0b$export$ed9bd8dcaeba14f6(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = $eed45f11f39dbf0b$export$2077e0241d6afd3c(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        $eed45f11f39dbf0b$var$modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        $eed45f11f39dbf0b$var$modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        $eed45f11f39dbf0b$var$modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        $eed45f11f39dbf0b$var$modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        $eed45f11f39dbf0b$export$bb628a54ab399bc9(this._rgb, deg);
        return this;
    }
}
function $eed45f11f39dbf0b$export$2e2bcd8739ae039(input) {
    return new $eed45f11f39dbf0b$export$892596cec99bc70e(input);
}


/**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ function $94677f9766b703ce$export$cf2f7c5792f80b46() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const $94677f9766b703ce$export$2219238a014317b0 = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function $94677f9766b703ce$export$342063e11d6c3cad(value) {
    return value === null || typeof value === "undefined";
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function $94677f9766b703ce$export$8b22cf2602fb60ce(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") return true;
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function $94677f9766b703ce$export$23f2a1d2818174ef(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function $94677f9766b703ce$export$39b482c5e57630a8(value) {
    return (typeof value === "number" || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function $94677f9766b703ce$export$c4ce752e73470fba(value, defaultValue) {
    return $94677f9766b703ce$export$39b482c5e57630a8(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function $94677f9766b703ce$export$90a7f3efeed30595(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
}
const $94677f9766b703ce$export$953cecd6e717a553 = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : +value / dimension;
const $94677f9766b703ce$export$7ccc53e8f1e7dfc5 = (value, dimension)=>typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function $94677f9766b703ce$export$3722cfe417b6ed86(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") return fn.apply(thisArg, args);
}
function $94677f9766b703ce$export$d66501df72047452(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if ($94677f9766b703ce$export$8b22cf2602fb60ce(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if ($94677f9766b703ce$export$23f2a1d2818174ef(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function $94677f9766b703ce$export$995eb9fca571757(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function $94677f9766b703ce$export$d377dcb2b61d6c4e(source) {
    if ($94677f9766b703ce$export$8b22cf2602fb60ce(source)) return source.map($94677f9766b703ce$export$d377dcb2b61d6c4e);
    if ($94677f9766b703ce$export$23f2a1d2818174ef(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = $94677f9766b703ce$export$d377dcb2b61d6c4e(source[keys[k]]);
        return target;
    }
    return source;
}
function $94677f9766b703ce$var$isValidKey(key) {
    return [
        "__proto__",
        "prototype",
        "constructor"
    ].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function $94677f9766b703ce$export$667d3bf0c5f83305(key, target, source, options) {
    if (!$94677f9766b703ce$var$isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if ($94677f9766b703ce$export$23f2a1d2818174ef(tval) && $94677f9766b703ce$export$23f2a1d2818174ef(sval)) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    $94677f9766b703ce$export$efca4cbe5dd06740(tval, sval, options);
    else target[key] = $94677f9766b703ce$export$d377dcb2b61d6c4e(sval);
}
function $94677f9766b703ce$export$efca4cbe5dd06740(target, source, options) {
    const sources = $94677f9766b703ce$export$8b22cf2602fb60ce(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!$94677f9766b703ce$export$23f2a1d2818174ef(target)) return target;
    options = options || {};
    const merger = options.merger || $94677f9766b703ce$export$667d3bf0c5f83305;
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!$94677f9766b703ce$export$23f2a1d2818174ef(current)) continue;
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, current, options);
    }
    return target;
}
function $94677f9766b703ce$export$555508cbc6add439(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return $94677f9766b703ce$export$efca4cbe5dd06740(target, source, {
        merger: $94677f9766b703ce$export$317a3d46287192d8
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function $94677f9766b703ce$export$317a3d46287192d8(key, target, source) {
    if (!$94677f9766b703ce$var$isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if ($94677f9766b703ce$export$23f2a1d2818174ef(tval) && $94677f9766b703ce$export$23f2a1d2818174ef(sval)) $94677f9766b703ce$export$555508cbc6add439(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = $94677f9766b703ce$export$d377dcb2b61d6c4e(sval);
}
/**
 * @private
 */ function $94677f9766b703ce$export$1ee57be6f6687d2c(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
// resolveObjectKey resolver cache
const $94677f9766b703ce$var$keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    "": (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function $94677f9766b703ce$export$9d0e2d13d04f7070(key) {
    const parts = key.split(".");
    const keys = [];
    let tmp = "";
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith("\\")) tmp = tmp.slice(0, -1) + ".";
        else {
            keys.push(tmp);
            tmp = "";
        }
    }
    return keys;
}
function $94677f9766b703ce$var$_getKeyResolver(key) {
    const keys = $94677f9766b703ce$export$9d0e2d13d04f7070(key);
    return (obj)=>{
        for (const k of keys){
            if (k === "") break;
            obj = obj && obj[k];
        }
        return obj;
    };
}
function $94677f9766b703ce$export$2d1720544b23b823(obj, key) {
    const resolver = $94677f9766b703ce$var$keyResolvers[key] || ($94677f9766b703ce$var$keyResolvers[key] = $94677f9766b703ce$var$_getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function $94677f9766b703ce$export$a8550f7dbe79f93a(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const $94677f9766b703ce$export$dda1d9f60106f0e9 = (value)=>typeof value !== "undefined";
const $94677f9766b703ce$export$a93c5207d687da10 = (value)=>typeof value === "function";
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const $94677f9766b703ce$export$ee7c8ad385a60b7b = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function $94677f9766b703ce$export$f38c853ae54ed474(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
/**
 * @alias Chart.helpers.math
 * @namespace
 */ const $94677f9766b703ce$export$56c0d5a1e737357d = Math.PI;
const $94677f9766b703ce$export$971d5caa766a69d7 = 2 * $94677f9766b703ce$export$56c0d5a1e737357d;
const $94677f9766b703ce$export$d29e374196577086 = $94677f9766b703ce$export$971d5caa766a69d7 + $94677f9766b703ce$export$56c0d5a1e737357d;
const $94677f9766b703ce$export$2ec5befb9e6c97d4 = Number.POSITIVE_INFINITY;
const $94677f9766b703ce$export$53c86fa97d611818 = $94677f9766b703ce$export$56c0d5a1e737357d / 180;
const $94677f9766b703ce$export$7f8ddf7c7c20b3cd = $94677f9766b703ce$export$56c0d5a1e737357d / 2;
const $94677f9766b703ce$export$39c1cc7c062529d4 = $94677f9766b703ce$export$56c0d5a1e737357d / 4;
const $94677f9766b703ce$export$7a0bdf7d4a91ea88 = $94677f9766b703ce$export$56c0d5a1e737357d * 2 / 3;
const $94677f9766b703ce$export$9f4f30ee63539e24 = Math.log10;
const $94677f9766b703ce$export$2408f22a0fab9ae5 = Math.sign;
function $94677f9766b703ce$export$a05254e7c3aeba6e(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function $94677f9766b703ce$export$a33b77bbdbb8366c(range) {
    const roundedRange = Math.round(range);
    range = $94677f9766b703ce$export$a05254e7c3aeba6e(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor($94677f9766b703ce$export$9f4f30ee63539e24(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function $94677f9766b703ce$export$a07804094c3ecf2d(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
function $94677f9766b703ce$export$d141bba7fdc215a3(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function $94677f9766b703ce$export$b9a6b53f9be3734(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function $94677f9766b703ce$export$53a70dd1ebbae346(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function $94677f9766b703ce$export$625550452a3fa3ec(degrees) {
    return degrees * ($94677f9766b703ce$export$56c0d5a1e737357d / 180);
}
function $94677f9766b703ce$export$3a6d5c9ae78a2c08(radians) {
    return radians * (180 / $94677f9766b703ce$export$56c0d5a1e737357d);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function $94677f9766b703ce$export$23ebac1979863676(x) {
    if (!$94677f9766b703ce$export$39b482c5e57630a8(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function $94677f9766b703ce$export$96f57966bedc81b4(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * $94677f9766b703ce$export$56c0d5a1e737357d) angle += $94677f9766b703ce$export$971d5caa766a69d7; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    return {
        angle: angle,
        distance: radialDistanceFromCenter
    };
}
function $94677f9766b703ce$export$158acd800e1ef08b(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function $94677f9766b703ce$export$c18d01048907ea92(a, b) {
    return (a - b + $94677f9766b703ce$export$d29e374196577086) % $94677f9766b703ce$export$971d5caa766a69d7 - $94677f9766b703ce$export$56c0d5a1e737357d;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function $94677f9766b703ce$export$28f7fcd39efa255(a) {
    return (a % $94677f9766b703ce$export$971d5caa766a69d7 + $94677f9766b703ce$export$971d5caa766a69d7) % $94677f9766b703ce$export$971d5caa766a69d7;
}
/**
 * @private
 */ function $94677f9766b703ce$export$ffb5f4729a158638(angle, start, end, sameAngleIsFullCircle) {
    const a = $94677f9766b703ce$export$28f7fcd39efa255(angle);
    const s = $94677f9766b703ce$export$28f7fcd39efa255(start);
    const e = $94677f9766b703ce$export$28f7fcd39efa255(end);
    const angleToStart = $94677f9766b703ce$export$28f7fcd39efa255(s - a);
    const angleToEnd = $94677f9766b703ce$export$28f7fcd39efa255(e - a);
    const startToAngle = $94677f9766b703ce$export$28f7fcd39efa255(a - s);
    const endToAngle = $94677f9766b703ce$export$28f7fcd39efa255(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function $94677f9766b703ce$export$25ce5a424b770e84(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function $94677f9766b703ce$export$71cec2538cb2c617(value) {
    return $94677f9766b703ce$export$25ce5a424b770e84(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function $94677f9766b703ce$export$3b513254972cfc9c(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function $94677f9766b703ce$export$2ed0fc6709e59212(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo: lo,
        hi: hi
    };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const $94677f9766b703ce$export$ef35774e6d314e91 = (table, key, value, last)=>$94677f9766b703ce$export$2ed0fc6709e59212(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const $94677f9766b703ce$export$ebd11618f299a286 = (table, key, value)=>$94677f9766b703ce$export$2ed0fc6709e59212(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function $94677f9766b703ce$export$c03999cb2f36933f(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const $94677f9766b703ce$var$arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
];
function $94677f9766b703ce$export$882b5998b3b9117c(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, "_chartjs", {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    $94677f9766b703ce$var$arrayEvents.forEach((key)=>{
        const method = "_onData" + $94677f9766b703ce$export$a8550f7dbe79f93a(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === "function") object[method](...args);
                });
                return res;
            }
        });
    });
}
function $94677f9766b703ce$export$3b14a55fb2447963(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    $94677f9766b703ce$var$arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
/**
 * @param items
 */ function $94677f9766b703ce$export$71511d61b312f219(items) {
    const set = new Set();
    let i, ilen;
    for(i = 0, ilen = items.length; i < ilen; ++i)set.add(items[i]);
    if (set.size === ilen) return items;
    return Array.from(set);
}
function $94677f9766b703ce$export$fef3dfd9bad05307(pixelSize, fontStyle, fontFamily) {
    return fontStyle + " " + pixelSize + "px " + fontFamily;
}
/**
* Request animation polyfill
*/ const $94677f9766b703ce$export$43caf9889c228507 = function() {
    if (typeof window === "undefined") return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function $94677f9766b703ce$export$61196ced6d74a310(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
        // Save the args for use later
        argsToUse = args;
        if (!ticking) {
            ticking = true;
            $94677f9766b703ce$export$43caf9889c228507.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, argsToUse);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function $94677f9766b703ce$export$4c3d22f3d993c33f(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const $94677f9766b703ce$export$3c2fa207a37baaea = (align)=>align === "start" ? "left" : align === "end" ? "right" : "center";
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const $94677f9766b703ce$export$ce26c07117d59d6a = (align, start, end)=>align === "start" ? start : align === "end" ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const $94677f9766b703ce$export$9d398bebfec1c039 = (align, left, right, rtl)=>{
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function $94677f9766b703ce$export$9e5f44173e64f162(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale: iScale , _parsed: _parsed  } = meta;
        const axis = iScale.axis;
        const { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = iScale.getUserBounds();
        if (minDefined) start = $94677f9766b703ce$export$25ce5a424b770e84(Math.min($94677f9766b703ce$export$ef35774e6d314e91(_parsed, iScale.axis, min).lo, animationsDisabled ? pointCount : $94677f9766b703ce$export$ef35774e6d314e91(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
        if (maxDefined) count = $94677f9766b703ce$export$25ce5a424b770e84(Math.max($94677f9766b703ce$export$ef35774e6d314e91(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : $94677f9766b703ce$export$ef35774e6d314e91(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
        else count = pointCount - start;
    }
    return {
        start: start,
        count: count
    };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function $94677f9766b703ce$export$efccba1c4a2ef57b(meta) {
    const { xScale: xScale , yScale: yScale , _scaleRanges: _scaleRanges  } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
const $94677f9766b703ce$var$atEdge = (t)=>t === 0 || t === 1;
const $94677f9766b703ce$var$elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * $94677f9766b703ce$export$971d5caa766a69d7 / p));
const $94677f9766b703ce$var$elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * $94677f9766b703ce$export$971d5caa766a69d7 / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const $94677f9766b703ce$export$f1e1789686576879 = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * $94677f9766b703ce$export$7f8ddf7c7c20b3cd) + 1,
    easeOutSine: (t)=>Math.sin(t * $94677f9766b703ce$export$7f8ddf7c7c20b3cd),
    easeInOutSine: (t)=>-0.5 * (Math.cos($94677f9766b703ce$export$56c0d5a1e737357d * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>$94677f9766b703ce$var$atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>$94677f9766b703ce$var$atEdge(t) ? t : $94677f9766b703ce$var$elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>$94677f9766b703ce$var$atEdge(t) ? t : $94677f9766b703ce$var$elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return $94677f9766b703ce$var$atEdge(t) ? t : t < 0.5 ? 0.5 * $94677f9766b703ce$var$elasticIn(t * 2, s, p) : 0.5 + 0.5 * $94677f9766b703ce$var$elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - $94677f9766b703ce$export$f1e1789686576879.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? $94677f9766b703ce$export$f1e1789686576879.easeInBounce(t * 2) * 0.5 : $94677f9766b703ce$export$f1e1789686576879.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function $94677f9766b703ce$export$f96d196f7728bb5(value) {
    if (value && typeof value === "object") {
        const type = value.toString();
        return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
}
function $94677f9766b703ce$export$db3b6bfb95261072(value) {
    return $94677f9766b703ce$export$f96d196f7728bb5(value) ? value : new (0, $eed45f11f39dbf0b$export$892596cec99bc70e)(value);
}
function $94677f9766b703ce$export$738ab4df8bf92ae9(value) {
    return $94677f9766b703ce$export$f96d196f7728bb5(value) ? value : new (0, $eed45f11f39dbf0b$export$892596cec99bc70e)(value).saturate(0.5).darken(0.1).hexString();
}
const $94677f9766b703ce$var$numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
];
const $94677f9766b703ce$var$colors = [
    "color",
    "borderColor",
    "backgroundColor"
];
function $94677f9766b703ce$var$applyAnimationsDefaults(defaults) {
    defaults.set("animation", {
        delay: undefined,
        duration: 1000,
        easing: "easeOutQuart",
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe("animation", {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== "onProgress" && name !== "onComplete" && name !== "fn"
    });
    defaults.set("animations", {
        colors: {
            type: "color",
            properties: $94677f9766b703ce$var$colors
        },
        numbers: {
            type: "number",
            properties: $94677f9766b703ce$var$numbers
        }
    });
    defaults.describe("animations", {
        _fallback: "animation"
    });
    defaults.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: (v)=>v | 0
                }
            }
        }
    });
}
function $94677f9766b703ce$var$applyLayoutsDefaults(defaults) {
    defaults.set("layout", {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}
const $94677f9766b703ce$var$intlCache = new Map();
function $94677f9766b703ce$var$getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = $94677f9766b703ce$var$intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        $94677f9766b703ce$var$intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function $94677f9766b703ce$export$ae1af26003f05816(num, locale, options) {
    return $94677f9766b703ce$var$getNumberFormat(locale, options).format(num);
}
const $94677f9766b703ce$var$formatters = {
    values (value) {
        return $94677f9766b703ce$export$8b22cf2602fb60ce(value) ? value : "" + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = "scientific";
            delta = $94677f9766b703ce$var$calculateDelta(tickValue, ticks);
        }
        const logDelta = $94677f9766b703ce$export$9f4f30ee63539e24(Math.abs(delta));
        const numDecimal = Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation: notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return $94677f9766b703ce$export$ae1af26003f05816(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return "0";
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor($94677f9766b703ce$export$9f4f30ee63539e24(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) return $94677f9766b703ce$var$formatters.numeric.call(this, tickValue, index, ticks);
        return "";
    }
};
function $94677f9766b703ce$var$calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var $94677f9766b703ce$export$91477dc880baac21 = {
    formatters: $94677f9766b703ce$var$formatters
};
function $94677f9766b703ce$var$applyScaleDefaults(defaults) {
    defaults.set("scale", {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
        },
        title: {
            display: false,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: true,
            autoSkip: true,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: $94677f9766b703ce$export$91477dc880baac21.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: false,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    });
    defaults.route("scale.ticks", "color", "", "color");
    defaults.route("scale.grid", "color", "", "borderColor");
    defaults.route("scale.border", "color", "", "borderColor");
    defaults.route("scale.title", "color", "", "color");
    defaults.describe("scale", {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
        _indexable: (name)=>name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
    });
    defaults.describe("scales", {
        _fallback: "scale"
    });
    defaults.describe("scale.ticks", {
        _scriptable: (name)=>name !== "backdropPadding" && name !== "callback",
        _indexable: (name)=>name !== "backdropPadding"
    });
}
const $94677f9766b703ce$export$6559d589eb85fbb6 = Object.create(null);
const $94677f9766b703ce$export$2e2af4578d910ddf = Object.create(null);
function $94677f9766b703ce$var$getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split(".");
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function $94677f9766b703ce$var$set(root, scope, values) {
    if (typeof scope === "string") return $94677f9766b703ce$export$efca4cbe5dd06740($94677f9766b703ce$var$getScope$1(root, scope), values);
    return $94677f9766b703ce$export$efca4cbe5dd06740($94677f9766b703ce$var$getScope$1(root, ""), scope);
}
class $94677f9766b703ce$var$Defaults {
    constructor(_descriptors, _appliers){
        this.animation = undefined;
        this.backgroundColor = "rgba(0,0,0,0.1)";
        this.borderColor = "rgba(0,0,0,0.1)";
        this.color = "#666";
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>$94677f9766b703ce$export$738ab4df8bf92ae9(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>$94677f9766b703ce$export$738ab4df8bf92ae9(options.borderColor);
        this.hoverColor = (ctx, options)=>$94677f9766b703ce$export$738ab4df8bf92ae9(options.color);
        this.indexAxis = "x";
        this.interaction = {
            mode: "nearest",
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
        this.apply(_appliers);
    }
    set(scope, values) {
        return $94677f9766b703ce$var$set(this, scope, values);
    }
    get(scope) {
        return $94677f9766b703ce$var$getScope$1(this, scope);
    }
    describe(scope, values) {
        return $94677f9766b703ce$var$set($94677f9766b703ce$export$2e2af4578d910ddf, scope, values);
    }
    override(scope, values) {
        return $94677f9766b703ce$var$set($94677f9766b703ce$export$6559d589eb85fbb6, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = $94677f9766b703ce$var$getScope$1(this, scope);
        const targetScopeObject = $94677f9766b703ce$var$getScope$1(this, targetScope);
        const privateName = "_" + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if ($94677f9766b703ce$export$23f2a1d2818174ef(local)) return Object.assign({}, target, local);
                    return $94677f9766b703ce$export$90a7f3efeed30595(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var $94677f9766b703ce$export$4368d992c4eafac0 = /* #__PURE__ */ new $94677f9766b703ce$var$Defaults({
    _scriptable: (name)=>!name.startsWith("on"),
    _indexable: (name)=>name !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    $94677f9766b703ce$var$applyAnimationsDefaults,
    $94677f9766b703ce$var$applyLayoutsDefaults,
    $94677f9766b703ce$var$applyScaleDefaults
]);
function $94677f9766b703ce$export$1a8f5705751d8277(font) {
    if (!font || $94677f9766b703ce$export$342063e11d6c3cad(font.size) || $94677f9766b703ce$export$342063e11d6c3cad(font.family)) return null;
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
}
function $94677f9766b703ce$export$e7c866399fa523f5(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
function $94677f9766b703ce$export$faec65b429be379(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        if (thing !== undefined && thing !== null && $94677f9766b703ce$export$8b22cf2602fb60ce(thing) !== true) longest = $94677f9766b703ce$export$e7c866399fa523f5(ctx, data, gc, longest, thing);
        else if ($94677f9766b703ce$export$8b22cf2602fb60ce(thing)) for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            if (nestedThing !== undefined && nestedThing !== null && !$94677f9766b703ce$export$8b22cf2602fb60ce(nestedThing)) longest = $94677f9766b703ce$export$e7c866399fa523f5(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
function $94677f9766b703ce$export$78acf4525d8a74c4(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
function $94677f9766b703ce$export$c9170ad7d4cd7e57(canvas, ctx) {
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function $94677f9766b703ce$export$493d36ec626b6698(ctx, options, x, y) {
    $94677f9766b703ce$export$24baa2b76016ce0e(ctx, options, x, y, null);
}
function $94677f9766b703ce$export$24baa2b76016ce0e(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * $94677f9766b703ce$export$53c86fa97d611818;
    if (style && typeof style === "object") {
        type = style.toString();
        if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        default:
            if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, $94677f9766b703ce$export$971d5caa766a69d7);
            else ctx.arc(x, y, radius, 0, $94677f9766b703ce$export$971d5caa766a69d7);
            ctx.closePath();
            break;
        case "triangle":
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += $94677f9766b703ce$export$7a0bdf7d4a91ea88;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += $94677f9766b703ce$export$7a0bdf7d4a91ea88;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case "rectRounded":
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + $94677f9766b703ce$export$39c1cc7c062529d4) * size;
            xOffsetW = Math.cos(rad + $94677f9766b703ce$export$39c1cc7c062529d4) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + $94677f9766b703ce$export$39c1cc7c062529d4) * size;
            yOffsetW = Math.sin(rad + $94677f9766b703ce$export$39c1cc7c062529d4) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - $94677f9766b703ce$export$56c0d5a1e737357d, rad - $94677f9766b703ce$export$7f8ddf7c7c20b3cd);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - $94677f9766b703ce$export$7f8ddf7c7c20b3cd, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + $94677f9766b703ce$export$7f8ddf7c7c20b3cd);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + $94677f9766b703ce$export$7f8ddf7c7c20b3cd, rad + $94677f9766b703ce$export$56c0d5a1e737357d);
            ctx.closePath();
            break;
        case "rect":
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += $94677f9766b703ce$export$39c1cc7c062529d4;
        case "rectRot":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case "crossRot":
            rad += $94677f9766b703ce$export$39c1cc7c062529d4;
        case "cross":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case "star":
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += $94677f9766b703ce$export$39c1cc7c062529d4;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case "line":
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case "dash":
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
            break;
        case false:
            ctx.closePath();
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
function $94677f9766b703ce$export$e7094788287c5e9b(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function $94677f9766b703ce$export$8743009a87fcb00f(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function $94677f9766b703ce$export$3d8c2f653ac9d0b9(ctx) {
    ctx.restore();
}
function $94677f9766b703ce$export$d24c54395ce0c509(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === "middle") {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
function $94677f9766b703ce$export$6554612db691658e(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function $94677f9766b703ce$export$dc98b0b04f4c7758(ctx, text, x, y, font, opts = {}) {
    const lines = $94677f9766b703ce$export$8b22cf2602fb60ce(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i, line;
    ctx.save();
    ctx.font = font.string;
    $94677f9766b703ce$var$setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (opts.backdrop) $94677f9766b703ce$var$drawBackdrop(ctx, opts.backdrop);
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!$94677f9766b703ce$export$342063e11d6c3cad(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        $94677f9766b703ce$var$decorateText(ctx, x, y, line, opts);
        y += font.lineHeight;
    }
    ctx.restore();
}
function $94677f9766b703ce$var$setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!$94677f9766b703ce$export$342063e11d6c3cad(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function $94677f9766b703ce$var$decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function $94677f9766b703ce$var$drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
}
function $94677f9766b703ce$export$1fbe638ecf81657e(ctx, rect) {
    const { x: x , y: y , w: w , h: h , radius: radius  } = rect;
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, -$94677f9766b703ce$export$7f8ddf7c7c20b3cd, $94677f9766b703ce$export$56c0d5a1e737357d, true);
    ctx.lineTo(x, y + h - radius.bottomLeft);
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, $94677f9766b703ce$export$56c0d5a1e737357d, $94677f9766b703ce$export$7f8ddf7c7c20b3cd, true);
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, $94677f9766b703ce$export$7f8ddf7c7c20b3cd, 0, true);
    ctx.lineTo(x + w, y + radius.topRight);
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -$94677f9766b703ce$export$7f8ddf7c7c20b3cd, true);
    ctx.lineTo(x + radius.topLeft, y);
}
const $94677f9766b703ce$var$LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const $94677f9766b703ce$var$FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function $94677f9766b703ce$export$8c78c7c36408ea29(value, size) {
    const matches = ("" + value).match($94677f9766b703ce$var$LINE_HEIGHT);
    if (!matches || matches[1] === "normal") return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case "px":
            return value;
        case "%":
            value /= 100;
            break;
    }
    return size * value;
}
const $94677f9766b703ce$var$numberOrZero = (v)=>+v || 0;
function $94677f9766b703ce$export$21579262ef46735b(value, props) {
    const ret = {};
    const objProps = $94677f9766b703ce$export$23f2a1d2818174ef(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = $94677f9766b703ce$export$23f2a1d2818174ef(value) ? objProps ? (prop)=>$94677f9766b703ce$export$90a7f3efeed30595(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys)ret[prop] = $94677f9766b703ce$var$numberOrZero(read(prop));
    return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function $94677f9766b703ce$export$d66dc83d8cfc8dd(value) {
    return $94677f9766b703ce$export$21579262ef46735b(value, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function $94677f9766b703ce$export$92108d983e8ee699(value) {
    return $94677f9766b703ce$export$21579262ef46735b(value, [
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight"
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function $94677f9766b703ce$export$a9c23c6ac3fc3eca(value) {
    const obj = $94677f9766b703ce$export$d66dc83d8cfc8dd(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function $94677f9766b703ce$export$34aec0b863436764(options, fallback) {
    options = options || {};
    fallback = fallback || $94677f9766b703ce$export$4368d992c4eafac0.font;
    let size = $94677f9766b703ce$export$90a7f3efeed30595(options.size, fallback.size);
    if (typeof size === "string") size = parseInt(size, 10);
    let style = $94677f9766b703ce$export$90a7f3efeed30595(options.style, fallback.style);
    if (style && !("" + style).match($94677f9766b703ce$var$FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: $94677f9766b703ce$export$90a7f3efeed30595(options.family, fallback.family),
        lineHeight: $94677f9766b703ce$export$8c78c7c36408ea29($94677f9766b703ce$export$90a7f3efeed30595(options.lineHeight, fallback.lineHeight), size),
        size: size,
        style: style,
        weight: $94677f9766b703ce$export$90a7f3efeed30595(options.weight, fallback.weight),
        string: ""
    };
    font.string = $94677f9766b703ce$export$1a8f5705751d8277(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function $94677f9766b703ce$export$407448d2b89b1813(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === "function") {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && $94677f9766b703ce$export$8b22cf2602fb60ce(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function $94677f9766b703ce$export$db202ddc8be9136(minmax, grace, beginAtZero) {
    const { min: min , max: max  } = minmax;
    const change = $94677f9766b703ce$export$7ccc53e8f1e7dfc5(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
function $94677f9766b703ce$export$35e795649ee09318(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
function $94677f9766b703ce$export$a9c996f45e5784d0(scopes, prefixes = [
    ""
], rootScopes = scopes, fallback, getTarget = ()=>scopes[0]) {
    if (!$94677f9766b703ce$export$dda1d9f60106f0e9(fallback)) fallback = $94677f9766b703ce$var$_resolve("_fallback", scopes);
    const cache = {
        [Symbol.toStringTag]: "Object",
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: rootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>$94677f9766b703ce$export$a9c996f45e5784d0([
                scope,
                ...scopes
            ], prefixes, rootScopes, fallback)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete target._keys;
            delete scopes[0][prop];
            return true;
        },
        get (target, prop) {
            return $94677f9766b703ce$var$_cached(target, prop, ()=>$94677f9766b703ce$var$_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        has (target, prop) {
            return $94677f9766b703ce$var$getKeysFromAllScopes(target).includes(prop);
        },
        ownKeys (target) {
            return $94677f9766b703ce$var$getKeysFromAllScopes(target);
        },
        set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value;
            delete target._keys;
            return true;
        }
    });
}
function $94677f9766b703ce$export$c3950d9923825c02(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: $94677f9766b703ce$export$7910e0436ed8d1de(proxy, descriptorDefaults),
        setContext: (ctx)=>$94677f9766b703ce$export$c3950d9923825c02(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>$94677f9766b703ce$export$c3950d9923825c02(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        deleteProperty (target, prop) {
            delete target[prop];
            delete proxy[prop];
            return true;
        },
        get (target, prop, receiver) {
            return $94677f9766b703ce$var$_cached(target, prop, ()=>$94677f9766b703ce$var$_resolveWithContext(target, prop, receiver));
        },
        getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        set (target, prop, value) {
            proxy[prop] = value;
            delete target[prop];
            return true;
        }
    });
}
function $94677f9766b703ce$export$7910e0436ed8d1de(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable: _scriptable = defaults.scriptable , _indexable: _indexable = defaults.indexable , _allKeys: _allKeys = defaults.allKeys  } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: $94677f9766b703ce$export$a93c5207d687da10(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: $94677f9766b703ce$export$a93c5207d687da10(_indexable) ? _indexable : ()=>_indexable
    };
}
const $94677f9766b703ce$var$readKey = (prefix, name)=>prefix ? prefix + $94677f9766b703ce$export$a8550f7dbe79f93a(name) : name;
const $94677f9766b703ce$var$needsSubResolver = (prop, value)=>$94677f9766b703ce$export$23f2a1d2818174ef(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function $94677f9766b703ce$var$_cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) return target[prop];
    const value = resolve();
    target[prop] = value;
    return value;
}
function $94677f9766b703ce$var$_resolveWithContext(target, prop, receiver) {
    const { _proxy: _proxy , _context: _context , _subProxy: _subProxy , _descriptors: descriptors  } = target;
    let value = _proxy[prop];
    if ($94677f9766b703ce$export$a93c5207d687da10(value) && descriptors.isScriptable(prop)) value = $94677f9766b703ce$var$_resolveScriptable(prop, value, target, receiver);
    if ($94677f9766b703ce$export$8b22cf2602fb60ce(value) && value.length) value = $94677f9766b703ce$var$_resolveArray(prop, value, target, descriptors.isIndexable);
    if ($94677f9766b703ce$var$needsSubResolver(prop, value)) value = $94677f9766b703ce$export$c3950d9923825c02(value, _context, _subProxy && _subProxy[prop], descriptors);
    return value;
}
function $94677f9766b703ce$var$_resolveScriptable(prop, value, target, receiver) {
    const { _proxy: _proxy , _context: _context , _subProxy: _subProxy , _stack: _stack  } = target;
    if (_stack.has(prop)) throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    _stack.add(prop);
    value = value(_context, _subProxy || receiver);
    _stack.delete(prop);
    if ($94677f9766b703ce$var$needsSubResolver(prop, value)) value = $94677f9766b703ce$var$createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function $94677f9766b703ce$var$_resolveArray(prop, value, target, isIndexable) {
    const { _proxy: _proxy , _context: _context , _subProxy: _subProxy , _descriptors: descriptors  } = target;
    if ($94677f9766b703ce$export$dda1d9f60106f0e9(_context.index) && isIndexable(prop)) value = value[_context.index % value.length];
    else if ($94677f9766b703ce$export$23f2a1d2818174ef(value[0])) {
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = $94677f9766b703ce$var$createSubResolver(scopes, _proxy, prop, item);
            value.push($94677f9766b703ce$export$c3950d9923825c02(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function $94677f9766b703ce$var$resolveFallback(fallback, prop, value) {
    return $94677f9766b703ce$export$a93c5207d687da10(fallback) ? fallback(prop, value) : fallback;
}
const $94677f9766b703ce$var$getScope = (key, parent)=>key === true ? parent : typeof key === "string" ? $94677f9766b703ce$export$2d1720544b23b823(parent, key) : undefined;
function $94677f9766b703ce$var$addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = $94677f9766b703ce$var$getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = $94677f9766b703ce$var$resolveFallback(scope._fallback, key, value);
            if ($94677f9766b703ce$export$dda1d9f60106f0e9(fallback) && fallback !== key && fallback !== parentFallback) return fallback;
        } else if (scope === false && $94677f9766b703ce$export$dda1d9f60106f0e9(parentFallback) && key !== parentFallback) return null;
    }
    return false;
}
function $94677f9766b703ce$var$createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = $94677f9766b703ce$var$resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = $94677f9766b703ce$var$addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if ($94677f9766b703ce$export$dda1d9f60106f0e9(fallback) && fallback !== prop) {
        key = $94677f9766b703ce$var$addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return $94677f9766b703ce$export$a9c996f45e5784d0(Array.from(set), [
        ""
    ], rootScopes, fallback, ()=>$94677f9766b703ce$var$subGetTarget(resolver, prop, value));
}
function $94677f9766b703ce$var$addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key)key = $94677f9766b703ce$var$addScopes(set, allScopes, key, fallback, item);
    return key;
}
function $94677f9766b703ce$var$subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if ($94677f9766b703ce$export$8b22cf2602fb60ce(target) && $94677f9766b703ce$export$23f2a1d2818174ef(value)) return value;
    return target || {};
}
function $94677f9766b703ce$var$_resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = $94677f9766b703ce$var$_resolve($94677f9766b703ce$var$readKey(prefix, prop), scopes);
        if ($94677f9766b703ce$export$dda1d9f60106f0e9(value)) return $94677f9766b703ce$var$needsSubResolver(prop, value) ? $94677f9766b703ce$var$createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function $94677f9766b703ce$var$_resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if ($94677f9766b703ce$export$dda1d9f60106f0e9(value)) return value;
    }
}
function $94677f9766b703ce$var$getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = $94677f9766b703ce$var$resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function $94677f9766b703ce$var$resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith("_")))set.add(key);
    return Array.from(set);
}
function $94677f9766b703ce$export$4a5767248b18ef41(meta, data, start, count) {
    const { iScale: iScale  } = meta;
    const { key: key = "r"  } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse($94677f9766b703ce$export$2d1720544b23b823(item, key), index)
        };
    }
    return parsed;
}
const $94677f9766b703ce$var$EPSILON = Number.EPSILON || 1e-14;
const $94677f9766b703ce$var$getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const $94677f9766b703ce$var$getValueAxis = (indexAxis)=>indexAxis === "x" ? "y" : "x";
function $94677f9766b703ce$export$e171bab687b50e0(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = $94677f9766b703ce$export$158acd800e1ef08b(current, previous);
    const d12 = $94677f9766b703ce$export$158acd800e1ef08b(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function $94677f9766b703ce$var$monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = $94677f9766b703ce$var$getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = $94677f9766b703ce$var$getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if ($94677f9766b703ce$export$a05254e7c3aeba6e(deltaK[i], 0, $94677f9766b703ce$var$EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function $94677f9766b703ce$var$monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = $94677f9766b703ce$var$getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = $94677f9766b703ce$var$getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = $94677f9766b703ce$var$getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function $94677f9766b703ce$export$527e9aa3390079e9(points, indexAxis = "x") {
    const valueAxis = $94677f9766b703ce$var$getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = $94677f9766b703ce$var$getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = $94677f9766b703ce$var$getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : $94677f9766b703ce$export$2408f22a0fab9ae5(deltaK[i - 1]) !== $94677f9766b703ce$export$2408f22a0fab9ae5(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    $94677f9766b703ce$var$monotoneAdjust(points, deltaK, mK);
    $94677f9766b703ce$var$monotoneCompute(points, mK, indexAxis);
}
function $94677f9766b703ce$var$capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function $94677f9766b703ce$var$capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = $94677f9766b703ce$export$e7094788287c5e9b(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && $94677f9766b703ce$export$e7094788287c5e9b(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = $94677f9766b703ce$var$capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = $94677f9766b703ce$var$capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = $94677f9766b703ce$var$capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = $94677f9766b703ce$var$capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function $94677f9766b703ce$export$ab83b03e4111b1d0(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === "monotone") $94677f9766b703ce$export$527e9aa3390079e9(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = $94677f9766b703ce$export$e171bab687b50e0(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) $94677f9766b703ce$var$capBezierPoints(points, area);
}
/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
 * @private
 */ function $94677f9766b703ce$export$3a1a48c8f6ef640e() {
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * @private
 */ function $94677f9766b703ce$export$9bb611d729802a56(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") parent = parent.host;
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function $94677f9766b703ce$var$parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf("%") !== -1) // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const $94677f9766b703ce$var$getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function $94677f9766b703ce$export$a17c37559e1db147(el, property) {
    return $94677f9766b703ce$var$getComputedStyle(el).getPropertyValue(property);
}
const $94677f9766b703ce$var$positions = [
    "top",
    "right",
    "bottom",
    "left"
];
function $94677f9766b703ce$var$getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for(let i = 0; i < 4; i++){
        const pos = $94677f9766b703ce$var$positions[i];
        result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const $94677f9766b703ce$var$useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function $94677f9766b703ce$var$getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX: offsetX , offsetY: offsetY  } = source;
    let box = false;
    let x, y;
    if ($94677f9766b703ce$var$useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x: x,
        y: y,
        box: box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function $94677f9766b703ce$export$df995fae86a55f06(event, chart) {
    if ("native" in event) return event;
    const { canvas: canvas , currentDevicePixelRatio: currentDevicePixelRatio  } = chart;
    const style = $94677f9766b703ce$var$getComputedStyle(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = $94677f9766b703ce$var$getPositionedStyle(style, "padding");
    const borders = $94677f9766b703ce$var$getPositionedStyle(style, "border", "width");
    const { x: x , y: y , box: box  } = $94677f9766b703ce$var$getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width: width , height: height  } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function $94677f9766b703ce$var$getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = $94677f9766b703ce$export$9bb611d729802a56(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = $94677f9766b703ce$var$getComputedStyle(container);
            const containerBorder = $94677f9766b703ce$var$getPositionedStyle(containerStyle, "border", "width");
            const containerPadding = $94677f9766b703ce$var$getPositionedStyle(containerStyle, "padding");
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = $94677f9766b703ce$var$parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
            maxHeight = $94677f9766b703ce$var$parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
        }
    }
    return {
        width: width,
        height: height,
        maxWidth: maxWidth || $94677f9766b703ce$export$2ec5befb9e6c97d4,
        maxHeight: maxHeight || $94677f9766b703ce$export$2ec5befb9e6c97d4
    };
}
const $94677f9766b703ce$var$round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function $94677f9766b703ce$export$2329c99376c9d0a4(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = $94677f9766b703ce$var$getComputedStyle(canvas);
    const margins = $94677f9766b703ce$var$getPositionedStyle(style, "margin");
    const maxWidth = $94677f9766b703ce$var$parseMaxStyle(style.maxWidth, canvas, "clientWidth") || $94677f9766b703ce$export$2ec5befb9e6c97d4;
    const maxHeight = $94677f9766b703ce$var$parseMaxStyle(style.maxHeight, canvas, "clientHeight") || $94677f9766b703ce$export$2ec5befb9e6c97d4;
    const containerSize = $94677f9766b703ce$var$getContainerSize(canvas, bbWidth, bbHeight);
    let { width: width , height: height  } = containerSize;
    if (style.boxSizing === "content-box") {
        const borders = $94677f9766b703ce$var$getPositionedStyle(style, "border", "width");
        const paddings = $94677f9766b703ce$var$getPositionedStyle(style, "padding");
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = $94677f9766b703ce$var$round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = $94677f9766b703ce$var$round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = $94677f9766b703ce$var$round1(width / 2);
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = $94677f9766b703ce$var$round1(Math.floor(height * aspectRatio));
    }
    return {
        width: width,
        height: height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function $94677f9766b703ce$export$f787f51d84a910ad(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = Math.floor(chart.height);
    chart.width = Math.floor(chart.width);
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const $94677f9766b703ce$export$3466f893ebf79586 = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        window.addEventListener("test", null, options);
        window.removeEventListener("test", null, options);
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function $94677f9766b703ce$export$b4171a6734a65d42(element, property) {
    const value = $94677f9766b703ce$export$a17c37559e1db147(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
/**
 * @private
 */ function $94677f9766b703ce$export$8a5498727ef6be21(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function $94677f9766b703ce$export$7a38258bbe170828(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === "middle" ? t < 0.5 ? p1.y : p2.y : mode === "after" ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function $94677f9766b703ce$export$2f6ca3d3b1f80bf5(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = $94677f9766b703ce$export$8a5498727ef6be21(p1, cp1, t);
    const b = $94677f9766b703ce$export$8a5498727ef6be21(cp1, cp2, t);
    const c = $94677f9766b703ce$export$8a5498727ef6be21(cp2, p2, t);
    const d = $94677f9766b703ce$export$8a5498727ef6be21(a, b, t);
    const e = $94677f9766b703ce$export$8a5498727ef6be21(b, c, t);
    return $94677f9766b703ce$export$8a5498727ef6be21(d, e, t);
}
const $94677f9766b703ce$var$getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === "center") return align;
            return align === "right" ? "left" : "right";
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const $94677f9766b703ce$var$getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function $94677f9766b703ce$export$3d12bd131bb975d1(rtl, rectX, width) {
    return rtl ? $94677f9766b703ce$var$getRightToLeftAdapter(rectX, width) : $94677f9766b703ce$var$getLeftToRightAdapter();
}
function $94677f9766b703ce$export$91c6e00c14e7e6fd(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue("direction"),
            style.getPropertyPriority("direction")
        ];
        style.setProperty("direction", direction, "important");
        ctx.prevTextDirection = original;
    }
}
function $94677f9766b703ce$export$890c4ad488842ce7(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
}
function $94677f9766b703ce$var$propertyFn(property) {
    if (property === "angle") return {
        between: $94677f9766b703ce$export$ffb5f4729a158638,
        compare: $94677f9766b703ce$export$c18d01048907ea92,
        normalize: $94677f9766b703ce$export$28f7fcd39efa255
    };
    return {
        between: $94677f9766b703ce$export$3b513254972cfc9c,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function $94677f9766b703ce$var$normalizeSegment({ start: start , end: end , count: count , loop: loop , style: style  }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style: style
    };
}
function $94677f9766b703ce$var$getSegment(segment, points, bounds) {
    const { property: property , start: startBound , end: endBound  } = bounds;
    const { between: between , normalize: normalize  } = $94677f9766b703ce$var$propertyFn(property);
    const count = points.length;
    let { start: start , end: end , loop: loop  } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start: start,
        end: end,
        loop: loop,
        style: segment.style
    };
}
function $94677f9766b703ce$export$9fa96a7d116ea3ce(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property: property , start: startBound , end: endBound  } = bounds;
    const count = points.length;
    const { compare: compare , between: between , normalize: normalize  } = $94677f9766b703ce$var$propertyFn(property);
    const { start: start , end: end , loop: loop , style: style  } = $94677f9766b703ce$var$getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push($94677f9766b703ce$var$normalizeSegment({
                start: subStart,
                end: i,
                loop: loop,
                count: count,
                style: style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push($94677f9766b703ce$var$normalizeSegment({
        start: subStart,
        end: end,
        loop: loop,
        count: count,
        style: style
    }));
    return result;
}
function $94677f9766b703ce$export$306ddfe3a8403e2(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = $94677f9766b703ce$export$9fa96a7d116ea3ce(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function $94677f9766b703ce$var$findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start: start,
        end: end
    };
}
function $94677f9766b703ce$var$solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop: loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop: loop
    });
    return result;
}
function $94677f9766b703ce$export$1a82df3d29112e01(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start: start , end: end  } = $94677f9766b703ce$var$findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return $94677f9766b703ce$var$splitByStyles(line, [
        {
            start: start,
            end: end,
            loop: loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return $94677f9766b703ce$var$splitByStyles(line, $94677f9766b703ce$var$solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function $94677f9766b703ce$var$splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return $94677f9766b703ce$var$doSplitByStyles(line, segments, points, segmentOptions);
}
function $94677f9766b703ce$var$doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = $94677f9766b703ce$var$readStyle(line.options);
    const { _datasetIndex: datasetIndex , options: { spanGaps: spanGaps  }  } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = $94677f9766b703ce$var$readStyle(segmentOptions.setContext($94677f9766b703ce$export$35e795649ee09318(chartContext, {
                type: "segment",
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex: datasetIndex
            })));
            if ($94677f9766b703ce$var$styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function $94677f9766b703ce$var$readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function $94677f9766b703ce$var$styleChanged(style, prevStyle) {
    return prevStyle && JSON.stringify(style) !== JSON.stringify(prevStyle);
}




class $3365e949f614b097$var$Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart: chart,
                initial: anims.initial,
                numSteps: numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, $94677f9766b703ce$export$43caf9889c228507).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, "progress");
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, "complete");
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var $3365e949f614b097$export$a424a0aa8f687495 = /* #__PURE__ */ new $3365e949f614b097$var$Animator();
const $3365e949f614b097$var$transparent = "transparent";
const $3365e949f614b097$var$interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, $94677f9766b703ce$export$db3b6bfb95261072)(from || $3365e949f614b097$var$transparent);
        const c1 = c0.valid && (0, $94677f9766b703ce$export$db3b6bfb95261072)(to || $3365e949f614b097$var$transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class $3365e949f614b097$export$c35d437ae5945fcd {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, $94677f9766b703ce$export$407448d2b89b1813)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, $94677f9766b703ce$export$407448d2b89b1813)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || $3365e949f614b097$var$interpolators[cfg.type || typeof from];
        this._easing = (0, $94677f9766b703ce$export$f1e1789686576879)[cfg.easing] || (0, $94677f9766b703ce$export$f1e1789686576879).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, $94677f9766b703ce$export$407448d2b89b1813)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, $94677f9766b703ce$export$407448d2b89b1813)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res: res,
                rej: rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? "res" : "rej";
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
class $3365e949f614b097$export$8ab227dac26677d {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, $94677f9766b703ce$export$23f2a1d2818174ef)(config)) return;
        const animationOptions = Object.keys((0, $94677f9766b703ce$export$4368d992c4eafac0).animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, $94677f9766b703ce$export$23f2a1d2818174ef)(cfg)) return;
            const resolved = {};
            for (const option of animationOptions)resolved[option] = cfg[option];
            ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = $3365e949f614b097$var$resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) $3365e949f614b097$var$awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === "$") continue;
            if (prop === "options") {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new $3365e949f614b097$export$c35d437ae5945fcd(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            $3365e949f614b097$export$a424a0aa8f687495.add(this._chart, animations);
            return true;
        }
    }
}
function $3365e949f614b097$var$awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function $3365e949f614b097$var$resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function $3365e949f614b097$var$scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function $3365e949f614b097$var$defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = $3365e949f614b097$var$scaleClip(xScale, allowedOverflow);
    const y = $3365e949f614b097$var$scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function $3365e949f614b097$var$toClip(value) {
    let t, r, b, l;
    if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function $3365e949f614b097$var$getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function $3365e949f614b097$var$applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, $94677f9766b703ce$export$39b482c5e57630a8)(otherValue) && (singleMode || value === 0 || (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(value) === (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(otherValue))) value += otherValue;
    }
    return value;
}
function $3365e949f614b097$var$convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            x: key,
            y: data[key]
        };
    }
    return adata;
}
function $3365e949f614b097$var$isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function $3365e949f614b097$var$getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function $3365e949f614b097$var$getUserBounds(scale) {
    const { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function $3365e949f614b097$var$getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function $3365e949f614b097$var$getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function $3365e949f614b097$var$updateStacks(controller, parsed) {
    const { chart: chart , _cachedMeta: meta  } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale: iScale , vScale: vScale , index: datasetIndex  } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = $3365e949f614b097$var$getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index , [vAxis]: value  } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = $3365e949f614b097$var$getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = $3365e949f614b097$var$getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = $3365e949f614b097$var$getLastIndexInStack(stack, vScale, false, meta.type);
        const visualValues = stack._visualValues || (stack._visualValues = {});
        visualValues[datasetIndex] = value;
    }
}
function $3365e949f614b097$var$getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function $3365e949f614b097$var$createDatasetContext(parent, index) {
    return (0, $94677f9766b703ce$export$35e795649ee09318)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index: index,
        mode: "default",
        type: "dataset"
    });
}
function $3365e949f614b097$var$createDataContext(parent, index, element) {
    return (0, $94677f9766b703ce$export$35e795649ee09318)(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element: element,
        index: index,
        mode: "default",
        type: "data"
    });
}
function $3365e949f614b097$var$clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
        if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) delete stacks[axis]._visualValues[datasetIndex];
    }
}
const $3365e949f614b097$var$isDirectUpdateMode = (mode)=>mode === "reset" || mode === "none";
const $3365e949f614b097$var$cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const $3365e949f614b097$var$createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: $3365e949f614b097$var$getSortedDatasetIndices(chart, true),
        values: null
    };
class $3365e949f614b097$export$75572ec5c55b4048 {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = $3365e949f614b097$var$isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled("filler")) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) $3365e949f614b097$var$clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === "x" ? x : axis === "r" ? r : y;
        const xid = meta.xAxisID = (0, $94677f9766b703ce$export$90a7f3efeed30595)(dataset.xAxisID, $3365e949f614b097$var$getFirstScaleId(chart, "x"));
        const yid = meta.yAxisID = (0, $94677f9766b703ce$export$90a7f3efeed30595)(dataset.yAxisID, $3365e949f614b097$var$getFirstScaleId(chart, "y"));
        const rid = meta.rAxisID = (0, $94677f9766b703ce$export$90a7f3efeed30595)(dataset.rAxisID, $3365e949f614b097$var$getFirstScaleId(chart, "r"));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update("reset");
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, $94677f9766b703ce$export$3b14a55fb2447963)(this._data, this);
        if (meta._stacked) $3365e949f614b097$var$clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(data)) this._data = $3365e949f614b097$var$convertObjectDataToArray(data);
        else if (_data !== data) {
            if (_data) {
                (0, $94677f9766b703ce$export$3b14a55fb2447963)(_data, this);
                const meta = this._cachedMeta;
                $3365e949f614b097$var$clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, $94677f9766b703ce$export$882b5998b3b9117c)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = $3365e949f614b097$var$isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            $3365e949f614b097$var$clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) $3365e949f614b097$var$updateStacks(this, meta._parsed);
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta , _data: data  } = this;
        const { iScale: iScale , _stacked: _stacked  } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) $3365e949f614b097$var$updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale: iScale , vScale: vScale  } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale: xScale , yScale: yScale  } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale: xScale , yScale: yScale  } = meta;
        const { xAxisKey: xAxisKey = "x" , yAxisKey: yAxisKey = "y"  } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse((0, $94677f9766b703ce$export$2d1720544b23b823)(item, xAxisKey), index),
                y: yScale.parse((0, $94677f9766b703ce$export$2d1720544b23b823)(item, yAxisKey), index)
            };
        }
        return parsed;
    }
    getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
        return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: $3365e949f614b097$var$getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]._visualValues
        };
        return $3365e949f614b097$var$applyStack(stack, value, meta.index, {
            mode: mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = $3365e949f614b097$var$applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = $3365e949f614b097$var$createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin , max: otherMax  } = $3365e949f614b097$var$getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, $94677f9766b703ce$export$39b482c5e57630a8)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, $94677f9766b703ce$export$39b482c5e57630a8)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
            value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || "default");
        meta._clip = $3365e949f614b097$var$toClip((0, $94677f9766b703ce$export$90a7f3efeed30595)(this.options.clip, $3365e949f614b097$var$defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index, active) {
        const mode = active ? "active" : "default";
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = $3365e949f614b097$var$createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = $3365e949f614b097$var$createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = "default", index) {
        const active = mode === "active";
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + "-" + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, $94677f9766b703ce$export$dda1d9f60106f0e9)(index);
        if (cached) return $3365e949f614b097$var$cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            "hover",
            elementType,
            ""
        ] : [
            elementType,
            ""
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, $94677f9766b703ce$export$4368d992c4eafac0).elements[elementType]);
        const context = ()=>this.getContext(index, active, mode);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze($3365e949f614b097$var$cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new $3365e949f614b097$export$8ab227dac26677d(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || $3365e949f614b097$var$isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions: sharedOptions,
            includeOptions: includeOptions
        };
    }
    updateElement(element, index, properties, mode) {
        if ($3365e949f614b097$var$isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !$3365e949f614b097$var$isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, "active", false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, "active", true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, "active", true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, "reset");
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) $3365e949f614b097$var$clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            "_insertElements",
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            "_removeElements",
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            "_removeElements",
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            "_removeElements",
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            "_insertElements",
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            "_insertElements",
            0,
            arguments.length
        ]);
    }
}
function $3365e949f614b097$var$getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, $94677f9766b703ce$export$71511d61b312f219)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function $3365e949f614b097$var$computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = $3365e949f614b097$var$getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, $94677f9766b703ce$export$dda1d9f60106f0e9)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function $3365e949f614b097$var$computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio: ratio,
        start: ruler.pixels[index] - size / 2
    };
}
function $3365e949f614b097$var$computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start: start
    };
}
function $3365e949f614b097$var$parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart: barStart,
        barEnd: barEnd,
        start: startValue,
        end: endValue,
        min: min,
        max: max
    };
}
function $3365e949f614b097$var$parseValue(entry, item, vScale, i) {
    if ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(entry)) $3365e949f614b097$var$parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function $3365e949f614b097$var$parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push($3365e949f614b097$var$parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function $3365e949f614b097$var$isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function $3365e949f614b097$var$barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function $3365e949f614b097$var$borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = "left";
        end = "right";
    } else {
        reverse = properties.base < properties.y;
        start = "bottom";
        end = "top";
    }
    if (reverse) {
        top = "end";
        bottom = "start";
    } else {
        top = "start";
        bottom = "end";
    }
    return {
        start: start,
        end: end,
        reverse: reverse,
        top: top,
        bottom: bottom
    };
}
function $3365e949f614b097$var$setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start: start , end: end , reverse: reverse , top: top , bottom: bottom  } = $3365e949f614b097$var$borderProps(properties);
    if (edge === "middle" && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) edge = top;
        else if ((stack._bottom || 0) === index) edge = bottom;
        else {
            res[$3365e949f614b097$var$parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[$3365e949f614b097$var$parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function $3365e949f614b097$var$parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = $3365e949f614b097$var$swap(edge, a, b);
        edge = $3365e949f614b097$var$startEnd(edge, b, a);
    } else edge = $3365e949f614b097$var$startEnd(edge, a, b);
    return edge;
}
function $3365e949f614b097$var$swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function $3365e949f614b097$var$startEnd(v, start, end) {
    return v === "start" ? start : v === "end" ? end : v;
}
function $3365e949f614b097$var$setInflateAmount(properties, { inflateAmount: inflateAmount  }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class $3365e949f614b097$export$e97d5dc64e999004 extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "bar";
    static defaults = {
        datasetElementType: false,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "base",
                    "width",
                    "height"
                ]
            }
        }
    };
    static overrides = {
        scales: {
            _index_: {
                type: "category",
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: "linear",
                beginAtZero: true
            }
        }
    };
    parsePrimitiveData(meta, data, start, count) {
        return $3365e949f614b097$var$parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return $3365e949f614b097$var$parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale: iScale , vScale: vScale  } = meta;
        const { xAxisKey: xAxisKey = "x" , yAxisKey: yAxisKey = "y"  } = this._parsing;
        const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, $94677f9766b703ce$export$2d1720544b23b823)(obj, iAxisKey), i);
            parsed.push($3365e949f614b097$var$parseValue((0, $94677f9766b703ce$export$2d1720544b23b823)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale: iScale , vScale: vScale  } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = $3365e949f614b097$var$isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
            value: value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === "reset";
        const { index: index , _cachedMeta: { vScale: vScale  }  } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions: sharedOptions , includeOptions: includeOptions  } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, $94677f9766b703ce$export$342063e11d6c3cad)(parsed[vScale.axis]) ? {
                base: base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal: horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || $3365e949f614b097$var$isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? "active" : mode);
            const options = properties.options || bars[i].options;
            $3365e949f614b097$var$setBorderSkipped(properties, options, stack, index);
            $3365e949f614b097$var$setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const { iScale: iScale  } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const skipNull = (meta)=>{
            const parsed = meta.controller.getParsed(dataIndex);
            const val = parsed && parsed[meta.vScale.axis];
            if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(val) || isNaN(val)) return true;
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) continue;
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) stacks.push(meta.stack);
            if (meta.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
    _getStackIndex(datasetIndex, name1, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name1 !== undefined ? stacks.indexOf(name1) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || $3365e949f614b097$var$computeMinSampleSize(meta);
        return {
            min: min,
            pixels: pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale: vScale , _stacked: _stacked , index: datasetIndex  } , options: { base: baseValue , minBarLength: minBarLength  }  } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = $3365e949f614b097$var$isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(value) !== (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, $94677f9766b703ce$export$342063e11d6c3cad)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = $3365e949f614b097$var$barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
            if (_stacked && !floating) parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size: size,
            base: base,
            head: head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, $94677f9766b703ce$export$90a7f3efeed30595)(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === "flex" ? $3365e949f614b097$var$computeFlexCategoryTraits(index, ruler, options, stackCount) : $3365e949f614b097$var$computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center: center,
            size: size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null) rects[i].draw(this._ctx);
    }
}
class $3365e949f614b097$export$19b5c4773f17abe extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "bubble";
    static defaults = {
        datasetElementType: false,
        dataElementType: "point",
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "borderWidth",
                    "radius"
                ]
            }
        }
    };
    static overrides = {
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, $94677f9766b703ce$export$90a7f3efeed30595)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, $94677f9766b703ce$export$90a7f3efeed30595)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale: xScale , yScale: yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || "",
            value: "(" + x + ", " + y + (r ? ", " + r : "") + ")"
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale: iScale , vScale: vScale  } = this._cachedMeta;
        const { sharedOptions: sharedOptions , includeOptions: includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
    }
    resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== "active") values.radius = 0;
        values.radius += (0, $94677f9766b703ce$export$90a7f3efeed30595)(parsed && parsed._custom, radius);
        return values;
    }
}
function $3365e949f614b097$var$getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, $94677f9766b703ce$export$971d5caa766a69d7)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, $94677f9766b703ce$export$ffb5f4729a158638)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, $94677f9766b703ce$export$ffb5f4729a158638)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd), startY, endY);
        const minX = calcMin((0, $94677f9766b703ce$export$56c0d5a1e737357d), startX, endX);
        const minY = calcMin((0, $94677f9766b703ce$export$56c0d5a1e737357d) + (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX: ratioX,
        ratioY: ratioY,
        offsetX: offsetX,
        offsetY: offsetY
    };
}
class $3365e949f614b097$export$e04603e7d8b77172 extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "doughnut";
    static defaults = {
        datasetElementType: false,
        dataElementType: "arc",
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "circumference",
                    "endAngle",
                    "innerRadius",
                    "outerRadius",
                    "startAngle",
                    "x",
                    "y",
                    "offset",
                    "borderWidth",
                    "spacing"
                ]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r"
    };
    static descriptors = {
        _scriptable: (name1)=>name1 !== "spacing",
        _indexable: (name1)=>name1 !== "spacing"
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle: pointStyle , color: color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(data[start])) {
                const { key: key = "value"  } = this._parsing;
                getter = (i)=>+(0, $94677f9766b703ce$export$2d1720544b23b823)(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i)meta._parsed[i] = getter(i);
        }
    }
    _getRotation() {
        return (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, $94677f9766b703ce$export$971d5caa766a69d7);
        let max = -(0, $94677f9766b703ce$export$971d5caa766a69d7);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea: chartArea  } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, $94677f9766b703ce$export$953cecd6e717a553)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference: circumference , rotation: rotation  } = this._getRotationExtents();
        const { ratioX: ratioX , ratioY: ratioY , offsetX: offsetX , offsetY: offsetY  } = $3365e949f614b097$var$getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, $94677f9766b703ce$export$7ccc53e8f1e7dfc5)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, $94677f9766b703ce$export$971d5caa766a69d7));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions: sharedOptions , includeOptions: includeOptions  } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle: startAngle,
                endAngle: startAngle + circumference,
                circumference: circumference,
                outerRadius: outerRadius,
                innerRadius: innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? "active" : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, $94677f9766b703ce$export$971d5caa766a69d7) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, $94677f9766b703ce$export$ae1af26003f05816)(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || "",
            value: value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== "inner") max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, $94677f9766b703ce$export$90a7f3efeed30595)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
class $3365e949f614b097$export$3c9b5d28c11cbfd0 extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "line";
    static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: true,
        spanGaps: false
    };
    static overrides = {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line , data: points = [] , _dataset: _dataset  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start: start , count: count  } = (0, $94677f9766b703ce$export$9e5f44173e64f162)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, $94677f9766b703ce$export$efccba1c4a2ef57b)(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options: options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale: iScale , vScale: vScale , _stacked: _stacked , _dataset: _dataset  } = this._cachedMeta;
        const { sharedOptions: sharedOptions , includeOptions: includeOptions  } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps: spanGaps , segment: segment  } = this.options;
        const maxGapLength = (0, $94677f9766b703ce$export$d141bba7fdc215a3)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = (0, $94677f9766b703ce$export$342063e11d6c3cad)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
class $3365e949f614b097$export$2a270b3a0d973c85 extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "polarArea";
    static defaults = {
        dataElementType: "arc",
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "startAngle",
                    "endAngle",
                    "innerRadius",
                    "outerRadius"
                ]
            }
        },
        indexAxis: "r",
        startAngle: 0
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle: pointStyle , color: color  }  } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, $94677f9766b703ce$export$ae1af26003f05816)(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || "",
            value: value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, $94677f9766b703ce$export$4a5767248b18ef41).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === "reset";
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, $94677f9766b703ce$export$56c0d5a1e737357d);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius: outerRadius,
                startAngle: startAngle,
                endAngle: endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? "active" : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) count++;
        });
        return count;
    }
    _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}
class $3365e949f614b097$export$b21a3f1286706191 extends $3365e949f614b097$export$e04603e7d8b77172 {
    static id = "pie";
    static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
    };
}
class $3365e949f614b097$export$48dbc6ac651bf8be extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "radar";
    static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: true,
        elements: {
            line: {
                fill: "start"
            }
        }
    };
    static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: "radialLinear"
            }
        }
    };
    getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: "" + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, $94677f9766b703ce$export$4a5767248b18ef41).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== "resize") {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options: options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === "reset";
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? "active" : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x: x,
                y: y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options: options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
class $3365e949f614b097$export$b2f2bae6713db87 extends $3365e949f614b097$export$75572ec5c55b4048 {
    static id = "scatter";
    static defaults = {
        datasetElementType: false,
        dataElementType: "point",
        showLine: false,
        fill: false
    };
    static overrides = {
        interaction: {
            mode: "point"
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale: xScale , yScale: yScale  } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || "",
            value: "(" + x + ", " + y + ")"
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = []  } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start: start , count: count  } = (0, $94677f9766b703ce$export$9e5f44173e64f162)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, $94677f9766b703ce$export$efccba1c4a2ef57b)(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            const { dataset: line , _dataset: _dataset  } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options: options
            }, mode);
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine: showLine  } = this.options;
        if (!this.datasetElementType && showLine) this.datasetElementType = this.chart.registry.getElement("line");
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === "reset";
        const { iScale: iScale , vScale: vScale , _stacked: _stacked , _dataset: _dataset  } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps: spanGaps , segment: segment  } = this.options;
        const maxGapLength = (0, $94677f9766b703ce$export$d141bba7fdc215a3)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, $94677f9766b703ce$export$342063e11d6c3cad)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? "active" : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}
var $3365e949f614b097$export$a6506504f799c5d5 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: $3365e949f614b097$export$e97d5dc64e999004,
    BubbleController: $3365e949f614b097$export$19b5c4773f17abe,
    DoughnutController: $3365e949f614b097$export$e04603e7d8b77172,
    LineController: $3365e949f614b097$export$3c9b5d28c11cbfd0,
    PolarAreaController: $3365e949f614b097$export$2a270b3a0d973c85,
    PieController: $3365e949f614b097$export$b21a3f1286706191,
    RadarController: $3365e949f614b097$export$48dbc6ac651bf8be,
    ScatterController: $3365e949f614b097$export$b2f2bae6713db87
});
/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function $3365e949f614b097$var$abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class $3365e949f614b097$var$DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign($3365e949f614b097$var$DateAdapterBase.prototype, members);
    }
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return $3365e949f614b097$var$abstract();
    }
    parse() {
        return $3365e949f614b097$var$abstract();
    }
    format() {
        return $3365e949f614b097$var$abstract();
    }
    add() {
        return $3365e949f614b097$var$abstract();
    }
    diff() {
        return $3365e949f614b097$var$abstract();
    }
    startOf() {
        return $3365e949f614b097$var$abstract();
    }
    endOf() {
        return $3365e949f614b097$var$abstract();
    }
}
var $3365e949f614b097$export$f32766ea09ec8bc4 = {
    _date: $3365e949f614b097$var$DateAdapterBase
};
function $3365e949f614b097$var$binarySearch(metaset, axis, value, intersect) {
    const { controller: controller , data: data , _sorted: _sorted  } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, $94677f9766b703ce$export$ebd11618f299a286) : (0, $94677f9766b703ce$export$ef35774e6d314e91);
        if (!intersect) return lookupMethod(data, axis, value);
        else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === "function" && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function $3365e949f614b097$var$evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index: index , data: data  } = metasets[i];
        const { lo: lo , hi: hi  } = $3365e949f614b097$var$binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index, j);
        }
    }
}
function $3365e949f614b097$var$getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function $3365e949f614b097$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !(0, $94677f9766b703ce$export$e7094788287c5e9b)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
        });
    };
    $3365e949f614b097$var$evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function $3365e949f614b097$var$getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle: startAngle , endAngle: endAngle  } = element.getProps([
            "startAngle",
            "endAngle"
        ], useFinalPosition);
        const { angle: angle  } = (0, $94677f9766b703ce$export$96f57966bedc81b4)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, $94677f9766b703ce$export$ffb5f4729a158638)(angle, startAngle, endAngle)) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
        });
    }
    $3365e949f614b097$var$evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function $3365e949f614b097$var$getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = $3365e949f614b097$var$getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element: element,
                    datasetIndex: datasetIndex,
                    index: index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element: element,
            datasetIndex: datasetIndex,
            index: index
        });
    }
    $3365e949f614b097$var$evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function $3365e949f614b097$var$getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === "r" && !intersect ? $3365e949f614b097$var$getNearestRadialItems(chart, position, axis, useFinalPosition) : $3365e949f614b097$var$getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function $3365e949f614b097$var$getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    $3365e949f614b097$var$evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element: element,
                datasetIndex: datasetIndex,
                index: index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var $3365e949f614b097$export$a13296960cae0384 = {
    evaluateInteractionItems: $3365e949f614b097$var$evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, $94677f9766b703ce$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "x";
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? $3365e949f614b097$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : $3365e949f614b097$var$getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) elements.push({
                    element: element,
                    datasetIndex: meta.index,
                    index: index
                });
            });
            return elements;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, $94677f9766b703ce$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? $3365e949f614b097$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : $3365e949f614b097$var$getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex: datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, $94677f9766b703ce$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return $3365e949f614b097$var$getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, $94677f9766b703ce$export$df995fae86a55f06)(e, chart);
            const axis = options.axis || "xy";
            const includeInvisible = options.includeInvisible || false;
            return $3365e949f614b097$var$getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, $94677f9766b703ce$export$df995fae86a55f06)(e, chart);
            return $3365e949f614b097$var$getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, $94677f9766b703ce$export$df995fae86a55f06)(e, chart);
            return $3365e949f614b097$var$getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
        }
    }
};
const $3365e949f614b097$var$STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
];
function $3365e949f614b097$var$filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function $3365e949f614b097$var$filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>$3365e949f614b097$var$STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function $3365e949f614b097$var$sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function $3365e949f614b097$var$wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos , options: { stack: stack , stackWeight: stackWeight = 1  }  } = box);
        layoutBoxes.push({
            index: i,
            box: box,
            pos: pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight: stackWeight
        });
    }
    return layoutBoxes;
}
function $3365e949f614b097$var$buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack: stack , pos: pos , stackWeight: stackWeight  } = wrap;
        if (!stack || !$3365e949f614b097$var$STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function $3365e949f614b097$var$setLayoutDims(layouts, params) {
    const stacks = $3365e949f614b097$var$buildStacks(layouts);
    const { vBoxMaxWidth: vBoxMaxWidth , hBoxMaxHeight: hBoxMaxHeight  } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize: fullSize  } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function $3365e949f614b097$var$buildLayoutBoxes(boxes) {
    const layoutBoxes = $3365e949f614b097$var$wrapBoxes(boxes);
    const fullSize = $3365e949f614b097$var$sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = $3365e949f614b097$var$sortByWeight($3365e949f614b097$var$filterByPosition(layoutBoxes, "left"), true);
    const right = $3365e949f614b097$var$sortByWeight($3365e949f614b097$var$filterByPosition(layoutBoxes, "right"));
    const top = $3365e949f614b097$var$sortByWeight($3365e949f614b097$var$filterByPosition(layoutBoxes, "top"), true);
    const bottom = $3365e949f614b097$var$sortByWeight($3365e949f614b097$var$filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = $3365e949f614b097$var$filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = $3365e949f614b097$var$filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
        fullSize: fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: $3365e949f614b097$var$filterByPosition(layoutBoxes, "chartArea"),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function $3365e949f614b097$var$getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function $3365e949f614b097$var$updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function $3365e949f614b097$var$updateDims(chartArea, params, layout, stacks) {
    const { pos: pos , box: box  } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, $94677f9766b703ce$export$23f2a1d2818174ef)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) $3365e949f614b097$var$updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - $3365e949f614b097$var$getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - $3365e949f614b097$var$getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function $3365e949f614b097$var$handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
}
function $3365e949f614b097$var$getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        "left",
        "right"
    ]) : marginForPositions([
        "top",
        "bottom"
    ]);
}
function $3365e949f614b097$var$fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, $3365e949f614b097$var$getMargins(layout.horizontal, chartArea));
        const { same: same , other: other  } = $3365e949f614b097$var$updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && $3365e949f614b097$var$fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function $3365e949f614b097$var$setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function $3365e949f614b097$var$placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x: x , y: y  } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, $94677f9766b703ce$export$dda1d9f60106f0e9)(stack.start)) y = stack.start;
            if (box.fullSize) $3365e949f614b097$var$setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else $3365e949f614b097$var$setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height1 = chartArea.h * weight;
            const width1 = stack.size || box.width;
            if ((0, $94677f9766b703ce$export$dda1d9f60106f0e9)(stack.start)) x = stack.start;
            if (box.fullSize) $3365e949f614b097$var$setBoxDims(box, x, userPadding.top, width1, params.outerHeight - userPadding.bottom - userPadding.top);
            else $3365e949f614b097$var$setBoxDims(box, x, chartArea.top + stack.placed, width1, height1);
            stack.start = x;
            stack.placed += height1;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var $3365e949f614b097$export$1ecca0613f5e56d2 = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || "top";
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) chart.boxes.splice(index, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = $3365e949f614b097$var$buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, $94677f9766b703ce$export$d66501df72047452)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === "function") box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding: padding,
            availableWidth: availableWidth,
            availableHeight: availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        $3365e949f614b097$var$updateMaxPadding(maxPadding, (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(minPadding));
        const chartArea = Object.assign({
            maxPadding: maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = $3365e949f614b097$var$setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        $3365e949f614b097$var$fitBoxes(boxes.fullSize, chartArea, params, stacks);
        $3365e949f614b097$var$fitBoxes(verticalBoxes, chartArea, params, stacks);
        if ($3365e949f614b097$var$fitBoxes(horizontalBoxes, chartArea, params, stacks)) $3365e949f614b097$var$fitBoxes(verticalBoxes, chartArea, params, stacks);
        $3365e949f614b097$var$handleMaxPadding(chartArea);
        $3365e949f614b097$var$placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        $3365e949f614b097$var$placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, $94677f9766b703ce$export$d66501df72047452)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class $3365e949f614b097$export$7b1aeb87f31f7da8 {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width: width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class $3365e949f614b097$export$a40a96b24b46cf35 extends $3365e949f614b097$export$7b1aeb87f31f7da8 {
    acquireContext(item) {
        return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const $3365e949f614b097$var$EXPANDO_KEY = "$chartjs";
const $3365e949f614b097$var$EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
};
const $3365e949f614b097$var$isNullOrEmpty = (value)=>value === null || value === "";
function $3365e949f614b097$var$initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[$3365e949f614b097$var$EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if ($3365e949f614b097$var$isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, $94677f9766b703ce$export$b4171a6734a65d42)(canvas, "width");
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if ($3365e949f614b097$var$isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === "") canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, $94677f9766b703ce$export$b4171a6734a65d42)(canvas, "height");
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const $3365e949f614b097$var$eventListenerOptions = (0, $94677f9766b703ce$export$3466f893ebf79586) ? {
    passive: true
} : false;
function $3365e949f614b097$var$addListener(node, type, listener) {
    node.addEventListener(type, listener, $3365e949f614b097$var$eventListenerOptions);
}
function $3365e949f614b097$var$removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, $3365e949f614b097$var$eventListenerOptions);
}
function $3365e949f614b097$var$fromNativeEvent(event, chart) {
    const type = $3365e949f614b097$var$EVENT_TYPES[event.type] || event.type;
    const { x: x , y: y  } = (0, $94677f9766b703ce$export$df995fae86a55f06)(event, chart);
    return {
        type: type,
        chart: chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function $3365e949f614b097$var$nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function $3365e949f614b097$var$createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || $3365e949f614b097$var$nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !$3365e949f614b097$var$nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function $3365e949f614b097$var$createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || $3365e949f614b097$var$nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !$3365e949f614b097$var$nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const $3365e949f614b097$var$drpListeningCharts = new Map();
let $3365e949f614b097$var$oldDevicePixelRatio = 0;
function $3365e949f614b097$var$onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === $3365e949f614b097$var$oldDevicePixelRatio) return;
    $3365e949f614b097$var$oldDevicePixelRatio = dpr;
    $3365e949f614b097$var$drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function $3365e949f614b097$var$listenDevicePixelRatioChanges(chart, resize) {
    if (!$3365e949f614b097$var$drpListeningCharts.size) window.addEventListener("resize", $3365e949f614b097$var$onWindowResize);
    $3365e949f614b097$var$drpListeningCharts.set(chart, resize);
}
function $3365e949f614b097$var$unlistenDevicePixelRatioChanges(chart) {
    $3365e949f614b097$var$drpListeningCharts.delete(chart);
    if (!$3365e949f614b097$var$drpListeningCharts.size) window.removeEventListener("resize", $3365e949f614b097$var$onWindowResize);
}
function $3365e949f614b097$var$createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, $94677f9766b703ce$export$9bb611d729802a56)(canvas);
    if (!container) return;
    const resize = (0, $94677f9766b703ce$export$61196ced6d74a310)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    $3365e949f614b097$var$listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function $3365e949f614b097$var$releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === "resize") $3365e949f614b097$var$unlistenDevicePixelRatioChanges(chart);
}
function $3365e949f614b097$var$createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, $94677f9766b703ce$export$61196ced6d74a310)((event)=>{
        if (chart.ctx !== null) listener($3365e949f614b097$var$fromNativeEvent(event, chart));
    }, chart);
    $3365e949f614b097$var$addListener(canvas, type, proxy);
    return proxy;
}
class $3365e949f614b097$export$f02da7f882cf6b2e extends $3365e949f614b097$export$7b1aeb87f31f7da8 {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext("2d");
        if (context && context.canvas === canvas) {
            $3365e949f614b097$var$initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[$3365e949f614b097$var$EXPANDO_KEY]) return false;
        const initial = canvas[$3365e949f614b097$var$EXPANDO_KEY].initial;
        [
            "height",
            "width"
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[$3365e949f614b097$var$EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: $3365e949f614b097$var$createAttachObserver,
            detach: $3365e949f614b097$var$createDetachObserver,
            resize: $3365e949f614b097$var$createResizeObserver
        };
        const handler = handlers[type] || $3365e949f614b097$var$createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: $3365e949f614b097$var$releaseObserver,
            detach: $3365e949f614b097$var$releaseObserver,
            resize: $3365e949f614b097$var$releaseObserver
        };
        const handler = handlers[type] || $3365e949f614b097$var$removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, $94677f9766b703ce$export$2329c99376c9d0a4)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = (0, $94677f9766b703ce$export$9bb611d729802a56)(canvas);
        return !!(container && container.isConnected);
    }
}
function $3365e949f614b097$export$72cd9e67b1b784f9(canvas) {
    if (!(0, $94677f9766b703ce$export$3a1a48c8f6ef640e)() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) return $3365e949f614b097$export$a40a96b24b46cf35;
    return $3365e949f614b097$export$f02da7f882cf6b2e;
}
class $3365e949f614b097$export$db77ccec0bb4ccac {
    static defaults = {};
    static defaultRoutes = undefined;
    active = false;
    tooltipPosition(useFinalPosition) {
        const { x: x , y: y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x: x,
            y: y
        };
    }
    hasValue() {
        return (0, $94677f9766b703ce$export$d141bba7fdc215a3)(this.x) && (0, $94677f9766b703ce$export$d141bba7fdc215a3)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) // let's not create an object, if not needed
        return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
function $3365e949f614b097$var$autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = $3365e949f614b097$var$determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? $3365e949f614b097$var$getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        $3365e949f614b097$var$skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = $3365e949f614b097$var$calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        $3365e949f614b097$var$skip(ticks, newTicks, spacing, (0, $94677f9766b703ce$export$342063e11d6c3cad)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)$3365e949f614b097$var$skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        $3365e949f614b097$var$skip(ticks, newTicks, spacing, last, (0, $94677f9766b703ce$export$342063e11d6c3cad)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    $3365e949f614b097$var$skip(ticks, newTicks, spacing);
    return newTicks;
}
function $3365e949f614b097$var$determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function $3365e949f614b097$var$calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = $3365e949f614b097$var$getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, $94677f9766b703ce$export$a07804094c3ecf2d)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function $3365e949f614b097$var$getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function $3365e949f614b097$var$skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function $3365e949f614b097$var$skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, $94677f9766b703ce$export$90a7f3efeed30595)(majorStart, 0);
    const end = Math.min((0, $94677f9766b703ce$export$90a7f3efeed30595)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function $3365e949f614b097$var$getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const $3365e949f614b097$var$reverseAlign = (align)=>align === "left" ? "right" : align === "right" ? "left" : align;
const $3365e949f614b097$var$offsetFromEdge = (scale, edge, offset)=>edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
const $3365e949f614b097$var$getTicksLimit = (ticksLength, maxTicksLimit)=>Math.min(maxTicksLimit || ticksLength, ticksLength);
function $3365e949f614b097$var$sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function $3365e949f614b097$var$getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function $3365e949f614b097$var$garbageCollect(caches, length) {
    (0, $94677f9766b703ce$export$d66501df72047452)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function $3365e949f614b097$var$getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function $3365e949f614b097$var$getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, $94677f9766b703ce$export$34aec0b863436764)(options.font, fallback);
    const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(options.padding);
    const lines = (0, $94677f9766b703ce$export$8b22cf2602fb60ce)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function $3365e949f614b097$var$createScaleContext(parent, scale) {
    return (0, $94677f9766b703ce$export$35e795649ee09318)(parent, {
        scale: scale,
        type: "scale"
    });
}
function $3365e949f614b097$var$createTickContext(parent, index, tick) {
    return (0, $94677f9766b703ce$export$35e795649ee09318)(parent, {
        tick: tick,
        index: index,
        type: "tick"
    });
}
function $3365e949f614b097$var$titleAlign(align, position, reverse) {
    let ret = (0, $94677f9766b703ce$export$3c2fa207a37baaea)(align);
    if (reverse && position !== "right" || !reverse && position === "right") ret = $3365e949f614b097$var$reverseAlign(ret);
    return ret;
}
function $3365e949f614b097$var$titleArgs(scale, offset, position, align) {
    const { top: top , left: left , bottom: bottom , right: right , chart: chart  } = scale;
    const { chartArea: chartArea , scales: scales  } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, left, right);
        if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === "center") titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = $3365e949f614b097$var$offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
            const positionAxisID1 = Object.keys(position)[0];
            const value1 = position[positionAxisID1];
            titleX = scales[positionAxisID1].getPixelForValue(value1) - width + offset;
        } else if (position === "center") titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = $3365e949f614b097$var$offsetFromEdge(scale, position, offset);
        titleY = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, bottom, top);
        rotation = position === "left" ? -(0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd) : (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd);
    }
    return {
        titleX: titleX,
        titleY: titleY,
        maxWidth: maxWidth,
        rotation: rotation
    };
}
class $3365e949f614b097$export$d60cfc58d3c358b6 extends $3365e949f614b097$export$db77ccec0bb4ccac {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin: _userMin , _userMax: _userMax , _suggestedMin: _suggestedMin , _suggestedMax: _suggestedMax  } = this;
        _userMin = (0, $94677f9766b703ce$export$c4ce752e73470fba)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, $94677f9766b703ce$export$c4ce752e73470fba)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, $94677f9766b703ce$export$c4ce752e73470fba)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, $94677f9766b703ce$export$c4ce752e73470fba)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, $94677f9766b703ce$export$c4ce752e73470fba)(_userMin, _suggestedMin),
            max: (0, $94677f9766b703ce$export$c4ce752e73470fba)(_userMax, _suggestedMax),
            minDefined: (0, $94677f9766b703ce$export$39b482c5e57630a8)(_userMin),
            maxDefined: (0, $94677f9766b703ce$export$39b482c5e57630a8)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min: min,
            max: max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, $94677f9766b703ce$export$c4ce752e73470fba)(min, (0, $94677f9766b703ce$export$c4ce752e73470fba)(max, min)),
            max: (0, $94677f9766b703ce$export$c4ce752e73470fba)(max, (0, $94677f9766b703ce$export$c4ce752e73470fba)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        return items;
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero: beginAtZero , grace: grace , ticks: tickOpts  } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, $94677f9766b703ce$export$db202ddc8be9136)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? $3365e949f614b097$var$sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
            this.ticks = $3365e949f614b097$var$autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name1) {
        this.chart.notifyPlugins(name1, this.getContext());
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options[name1], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, $94677f9766b703ce$export$3722cfe417b6ed86)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = $3365e949f614b097$var$getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, $94677f9766b703ce$export$25ce5a424b770e84)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - $3365e949f614b097$var$getTickMarkLength(options.grid) - tickOpts.padding - $3365e949f614b097$var$getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, $94677f9766b703ce$export$3a6d5c9ae78a2c08)(Math.min(Math.asin((0, $94677f9766b703ce$export$25ce5a424b770e84)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, $94677f9766b703ce$export$25ce5a424b770e84)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, $94677f9766b703ce$export$25ce5a424b770e84)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart: chart , options: { ticks: tickOpts , title: titleOpts , grid: gridOpts  }  } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = $3365e949f614b097$var$getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = $3365e949f614b097$var$getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = $3365e949f614b097$var$getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first: first , last: last , widest: widest , highest: highest  } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align: align , padding: padding  } , position: position  } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === "start") paddingRight = last.width;
            else if (align === "end") paddingLeft = first.width;
            else if (align !== "inner") {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === "start") {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === "end") {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis: axis , position: position  } = this.options;
        return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = $3365e949f614b097$var$sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
        const { ctx: ctx , _longestTextCache: caches  } = this;
        const widths = [];
        const heights = [];
        const increment = Math.floor(length / $3365e949f614b097$var$getTicksLimit(length, maxTicksLimit));
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; i += increment){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(label) && !(0, $94677f9766b703ce$export$8b22cf2602fb60ce)(label)) {
                width = (0, $94677f9766b703ce$export$e7c866399fa523f5)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(nestedLabel) && !(0, $94677f9766b703ce$export$8b22cf2602fb60ce)(nestedLabel)) {
                    width = (0, $94677f9766b703ce$export$e7c866399fa523f5)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        $3365e949f614b097$var$garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths: widths,
            heights: heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, $94677f9766b703ce$export$71cec2538cb2c617)(this._alignToPixels ? (0, $94677f9766b703ce$export$78acf4525d8a74c4)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min: min , max: max  } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = $3365e949f614b097$var$createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = $3365e949f614b097$var$createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== "auto") return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid: grid , position: position , border: border  } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = $3365e949f614b097$var$getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, $94677f9766b703ce$export$78acf4525d8a74c4)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === "top") {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === "bottom") {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === "left") {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === "right") {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === "x") {
            if (position === "center") borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === "y") {
            if (position === "center") borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID1].getPixelForValue(value1));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, $94677f9766b703ce$export$90a7f3efeed30595)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = $3365e949f614b097$var$getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, $94677f9766b703ce$export$78acf4525d8a74c4)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1: tx1,
                ty1: ty1,
                tx2: tx2,
                ty2: ty2,
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                width: lineWidth,
                color: lineColor,
                borderDash: borderDash,
                borderDashOffset: borderDashOffset,
                tickWidth: tickWidth,
                tickColor: tickColor,
                tickBorderDash: tickBorderDash,
                tickBorderDashOffset: tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position: position , ticks: optionTicks  } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align: align , crossAlign: crossAlign , padding: padding , mirror: mirror  } = optionTicks;
        const tl = $3365e949f614b097$var$getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, $94677f9766b703ce$export$625550452a3fa3ec)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = "middle";
        if (position === "top") {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "bottom") {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === "left") {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === "right") {
            const ret1 = this._getYAxisLabelAlignment(tl);
            textAlign = ret1.textAlign;
            x = ret1.x;
        } else if (axis === "x") {
            if (position === "center") y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === "y") {
            if (position === "center") x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
                const positionAxisID1 = Object.keys(position)[0];
                const value1 = position[positionAxisID1];
                x = this.chart.scales[positionAxisID1].getPixelForValue(value1);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === "y") {
            if (align === "start") textBaseline = "top";
            else if (align === "end") textBaseline = "bottom";
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, $94677f9766b703ce$export$8b22cf2602fb60ce)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === "inner") {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? "right" : "left";
                    else if (i === 0) tickTextAlign = !this.options.reverse ? "left" : "right";
                    else tickTextAlign = "center";
                }
                if (position === "top") {
                    if (crossAlign === "near" || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === "center") textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === "near" || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === "center") textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case "middle":
                        top -= height / 2;
                        break;
                    case "bottom":
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case "center":
                        left -= width / 2;
                        break;
                    case "right":
                        left -= width;
                        break;
                }
                backdrop = {
                    left: left,
                    top: top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                label: label,
                font: font,
                textOffset: textOffset,
                options: {
                    rotation: rotation,
                    color: color,
                    strokeColor: strokeColor,
                    strokeWidth: strokeWidth,
                    textAlign: tickTextAlign,
                    textBaseline: textBaseline,
                    translation: [
                        x,
                        y
                    ],
                    backdrop: backdrop
                }
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position: position , ticks: ticks  } = this.options;
        const rotation = -(0, $94677f9766b703ce$export$625550452a3fa3ec)(this.labelRotation);
        if (rotation) return position === "top" ? "left" : "right";
        let align = "center";
        if (ticks.align === "start") align = "left";
        else if (ticks.align === "end") align = "right";
        else if (ticks.align === "inner") align = "inner";
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position: position , ticks: { crossAlign: crossAlign , mirror: mirror , padding: padding  }  } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === "left") {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x = this.left;
                }
            }
        } else if (position === "right") {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === "near") textAlign = "right";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x -= widest / 2;
                } else {
                    textAlign = "left";
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === "near") textAlign = "left";
                else if (crossAlign === "center") {
                    textAlign = "center";
                    x += widest / 2;
                } else {
                    textAlign = "right";
                    x = this.right;
                }
            }
        } else textAlign = "right";
        return {
            textAlign: textAlign,
            x: x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === "left" || position === "right") return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === "top" || position === "bottom") return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx: ctx , options: { backgroundColor: backgroundColor  } , left: left , top: top , width: width , height: height  } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart: chart , ctx: ctx , options: { border: border , grid: grid  }  } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, $94677f9766b703ce$export$78acf4525d8a74c4)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, $94677f9766b703ce$export$78acf4525d8a74c4)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, $94677f9766b703ce$export$78acf4525d8a74c4)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, $94677f9766b703ce$export$78acf4525d8a74c4)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, $94677f9766b703ce$export$8743009a87fcb00f)(ctx, area);
        const items = this.getLabelItems(chartArea);
        for (const item of items){
            const renderTextOptions = item.options;
            const tickFont = item.font;
            const label = item.label;
            const y = item.textOffset;
            (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, label, 0, y, tickFont, renderTextOptions);
        }
        if (area) (0, $94677f9766b703ce$export$3d8c2f653ac9d0b9)(ctx);
    }
    drawTitle() {
        const { ctx: ctx , options: { position: position , title: title , reverse: reverse  }  } = this;
        if (!title.display) return;
        const font = (0, $94677f9766b703ce$export$34aec0b863436764)(title.font);
        const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === "bottom" || position === "center" || (0, $94677f9766b703ce$export$23f2a1d2818174ef)(position)) {
            offset += padding.bottom;
            if ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX: titleX , titleY: titleY , maxWidth: maxWidth , rotation: rotation  } = $3365e949f614b097$var$titleArgs(this, offset, position, align);
        (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth: maxWidth,
            rotation: rotation,
            textAlign: $3365e949f614b097$var$titleAlign(align, position, reverse),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, $94677f9766b703ce$export$90a7f3efeed30595)(opts.grid && opts.grid.z, -1);
        const bz = (0, $94677f9766b703ce$export$90a7f3efeed30595)(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== $3365e949f614b097$export$d60cfc58d3c358b6.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + "AxisID";
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return (0, $94677f9766b703ce$export$34aec0b863436764)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class $3365e949f614b097$var$TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if ($3365e949f614b097$var$isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + "." + id;
        if (!id) throw new Error("class does not have id: " + item);
        if (id in items) return scope;
        items[id] = item;
        $3365e949f614b097$var$registerDefaults(item, scope, parentScope);
        if (this.override) (0, $94677f9766b703ce$export$4368d992c4eafac0).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, $94677f9766b703ce$export$4368d992c4eafac0)[scope]) {
            delete (0, $94677f9766b703ce$export$4368d992c4eafac0)[scope][id];
            if (this.override) delete (0, $94677f9766b703ce$export$6559d589eb85fbb6)[id];
        }
    }
}
function $3365e949f614b097$var$registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, $94677f9766b703ce$export$efca4cbe5dd06740)(Object.create(null), [
        parentScope ? (0, $94677f9766b703ce$export$4368d992c4eafac0).get(parentScope) : {},
        (0, $94677f9766b703ce$export$4368d992c4eafac0).get(scope),
        item.defaults
    ]);
    (0, $94677f9766b703ce$export$4368d992c4eafac0).set(scope, itemDefaults);
    if (item.defaultRoutes) $3365e949f614b097$var$routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, $94677f9766b703ce$export$4368d992c4eafac0).describe(scope, item.descriptors);
}
function $3365e949f614b097$var$routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split(".");
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join(".");
        const parts = routes[property].split(".");
        const targetName = parts.pop();
        const targetScope = parts.join(".");
        (0, $94677f9766b703ce$export$4368d992c4eafac0).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function $3365e949f614b097$var$isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
}
class $3365e949f614b097$var$Registry {
    constructor(){
        this.controllers = new $3365e949f614b097$var$TypedRegistry($3365e949f614b097$export$75572ec5c55b4048, "datasets", true);
        this.elements = new $3365e949f614b097$var$TypedRegistry($3365e949f614b097$export$db77ccec0bb4ccac, "elements");
        this.plugins = new $3365e949f614b097$var$TypedRegistry(Object, "plugins");
        this.scales = new $3365e949f614b097$var$TypedRegistry($3365e949f614b097$export$d60cfc58d3c358b6, "scales");
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each("register", args);
    }
    remove(...args) {
        this._each("unregister", args);
    }
    addControllers(...args) {
        this._each("register", args, this.controllers);
    }
    addElements(...args) {
        this._each("register", args, this.elements);
    }
    addPlugins(...args) {
        this._each("register", args, this.plugins);
    }
    addScales(...args) {
        this._each("register", args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
        return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
        return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
        return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
        this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
        this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
        this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
        this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, $94677f9766b703ce$export$d66501df72047452)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry, component) {
        const camelMethod = (0, $94677f9766b703ce$export$a8550f7dbe79f93a)(method);
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(component["before" + camelMethod], [], component);
        registry[method](component);
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + ".");
        return item;
    }
}
var $3365e949f614b097$export$4bb7493d241fd8a5 = /* #__PURE__ */ new $3365e949f614b097$var$Registry();
class $3365e949f614b097$var$PluginService {
    constructor(){
        this._init = [];
    }
    notify(chart, hook, args, filter) {
        if (hook === "beforeInit") {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, "install");
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === "afterDestroy") {
            this._notify(descriptors, chart, "stop");
            this._notify(this._init, chart, "uninstall");
        }
        return result;
    }
    _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, $94677f9766b703ce$export$3722cfe417b6ed86)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, $94677f9766b703ce$export$90a7f3efeed30595)(config.options && config.options.plugins, {});
        const plugins = $3365e949f614b097$var$allPlugins(config);
        return options === false && !all ? [] : $3365e949f614b097$var$createDescriptors(chart, plugins, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, "stop");
        this._notify(diff(descriptors, previousDescriptors), chart, "start");
    }
}
function $3365e949f614b097$var$allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys($3365e949f614b097$export$4bb7493d241fd8a5.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins.push($3365e949f614b097$export$4bb7493d241fd8a5.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i1 = 0; i1 < local.length; i1++){
        const plugin = local[i1];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins: plugins,
        localIds: localIds
    };
}
function $3365e949f614b097$var$getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function $3365e949f614b097$var$createDescriptors(chart, { plugins: plugins , localIds: localIds  }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = $3365e949f614b097$var$getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin: plugin,
            options: $3365e949f614b097$var$pluginOpts(chart.config, {
                plugin: plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function $3365e949f614b097$var$pluginOpts(config, { plugin: plugin , local: local  }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) scopes.push(plugin.defaults);
    return config.createResolver(scopes, context, [
        ""
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function $3365e949f614b097$var$getIndexAxis(type, options) {
    const datasetDefaults = (0, $94677f9766b703ce$export$4368d992c4eafac0).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
}
function $3365e949f614b097$var$getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") axis = indexAxis;
    else if (id === "_value_") axis = indexAxis === "x" ? "y" : "x";
    return axis;
}
function $3365e949f614b097$var$getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
}
function $3365e949f614b097$var$axisFromPosition(position) {
    if (position === "top" || position === "bottom") return "x";
    if (position === "left" || position === "right") return "y";
}
function $3365e949f614b097$var$determineAxis(id, scaleOptions) {
    if (id === "x" || id === "y" || id === "r") return id;
    id = scaleOptions.axis || $3365e949f614b097$var$axisFromPosition(scaleOptions.position) || id.length > 1 && $3365e949f614b097$var$determineAxis(id[0].toLowerCase(), scaleOptions);
    if (id) return id;
    throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function $3365e949f614b097$var$mergeScaleConfig(config, options) {
    const chartDefaults = (0, $94677f9766b703ce$export$6559d589eb85fbb6)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = $3365e949f614b097$var$getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, $94677f9766b703ce$export$23f2a1d2818174ef)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = $3365e949f614b097$var$determineAxis(id, scaleConf);
        const defaultId = $3365e949f614b097$var$getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = (0, $94677f9766b703ce$export$555508cbc6add439)(Object.create(null), [
            {
                axis: axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || $3365e949f614b097$var$getIndexAxis(type, options);
        const datasetDefaults = (0, $94677f9766b703ce$export$6559d589eb85fbb6)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = $3365e949f614b097$var$getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + "AxisID"] || axis;
            scales[id] = scales[id] || Object.create(null);
            (0, $94677f9766b703ce$export$555508cbc6add439)(scales[id], [
                {
                    axis: axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        (0, $94677f9766b703ce$export$555508cbc6add439)(scale, [
            (0, $94677f9766b703ce$export$4368d992c4eafac0).scales[scale.type],
            (0, $94677f9766b703ce$export$4368d992c4eafac0).scale
        ]);
    });
    return scales;
}
function $3365e949f614b097$var$initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, $94677f9766b703ce$export$90a7f3efeed30595)(options.plugins, {});
    options.scales = $3365e949f614b097$var$mergeScaleConfig(config, options);
}
function $3365e949f614b097$var$initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function $3365e949f614b097$var$initConfig(config) {
    config = config || {};
    config.data = $3365e949f614b097$var$initData(config.data);
    $3365e949f614b097$var$initOptions(config);
    return config;
}
const $3365e949f614b097$var$keyCache = new Map();
const $3365e949f614b097$var$keysCached = new Set();
function $3365e949f614b097$var$cachedKeys(cacheKey, generate) {
    let keys = $3365e949f614b097$var$keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        $3365e949f614b097$var$keyCache.set(cacheKey, keys);
        $3365e949f614b097$var$keysCached.add(keys);
    }
    return keys;
}
const $3365e949f614b097$var$addIfFound = (set, obj, key)=>{
    const opts = (0, $94677f9766b703ce$export$2d1720544b23b823)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class $3365e949f614b097$var$Config {
    constructor(config){
        this._config = $3365e949f614b097$var$initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = $3365e949f614b097$var$initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        $3365e949f614b097$var$initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return $3365e949f614b097$var$cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return $3365e949f614b097$var$cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ""
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return $3365e949f614b097$var$cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ""
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return $3365e949f614b097$var$cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options: options , type: type  } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>$3365e949f614b097$var$addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>$3365e949f614b097$var$addIfFound(scopes, options, key));
            keys.forEach((key)=>$3365e949f614b097$var$addIfFound(scopes, (0, $94677f9766b703ce$export$6559d589eb85fbb6)[type] || {}, key));
            keys.forEach((key)=>$3365e949f614b097$var$addIfFound(scopes, (0, $94677f9766b703ce$export$4368d992c4eafac0), key));
            keys.forEach((key)=>$3365e949f614b097$var$addIfFound(scopes, (0, $94677f9766b703ce$export$2e2af4578d910ddf), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if ($3365e949f614b097$var$keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options: options , type: type  } = this;
        return [
            options,
            (0, $94677f9766b703ce$export$6559d589eb85fbb6)[type] || {},
            (0, $94677f9766b703ce$export$4368d992c4eafac0).datasets[type] || {},
            {
                type: type
            },
            (0, $94677f9766b703ce$export$4368d992c4eafac0),
            (0, $94677f9766b703ce$export$2e2af4578d910ddf)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ""
    ]) {
        const result = {
            $shared: true
        };
        const { resolver: resolver , subPrefixes: subPrefixes  } = $3365e949f614b097$var$getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if ($3365e949f614b097$var$needContext(resolver, names)) {
            result.$shared = false;
            context = (0, $94677f9766b703ce$export$a93c5207d687da10)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, $94677f9766b703ce$export$c3950d9923825c02)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ""
    ], descriptorDefaults) {
        const { resolver: resolver  } = $3365e949f614b097$var$getResolver(this._resolverCache, scopes, prefixes);
        return (0, $94677f9766b703ce$export$23f2a1d2818174ef)(context) ? (0, $94677f9766b703ce$export$c3950d9923825c02)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function $3365e949f614b097$var$getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, $94677f9766b703ce$export$a9c996f45e5784d0)(scopes, prefixes);
        cached = {
            resolver: resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes("hover"))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const $3365e949f614b097$var$hasFunction = (value)=>(0, $94677f9766b703ce$export$23f2a1d2818174ef)(value) && Object.getOwnPropertyNames(value).reduce((acc, key)=>acc || (0, $94677f9766b703ce$export$a93c5207d687da10)(value[key]), false);
function $3365e949f614b097$var$needContext(proxy, names) {
    const { isScriptable: isScriptable , isIndexable: isIndexable  } = (0, $94677f9766b703ce$export$7910e0436ed8d1de)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, $94677f9766b703ce$export$a93c5207d687da10)(value) || $3365e949f614b097$var$hasFunction(value)) || indexable && (0, $94677f9766b703ce$export$8b22cf2602fb60ce)(value)) return true;
    }
    return false;
}
var $3365e949f614b097$var$version = "4.2.1";
const $3365e949f614b097$var$KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
];
function $3365e949f614b097$var$positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || $3365e949f614b097$var$KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
}
function $3365e949f614b097$var$compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function $3365e949f614b097$var$onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins("afterRender");
    (0, $94677f9766b703ce$export$3722cfe417b6ed86)(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function $3365e949f614b097$var$onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    (0, $94677f9766b703ce$export$3722cfe417b6ed86)(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
function $3365e949f614b097$var$getCanvas(item) {
    if ((0, $94677f9766b703ce$export$3a1a48c8f6ef640e)() && typeof item === "string") item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const $3365e949f614b097$var$instances = {};
const $3365e949f614b097$var$getChart = (key)=>{
    const canvas = $3365e949f614b097$var$getCanvas(key);
    return Object.values($3365e949f614b097$var$instances).filter((c)=>c.canvas === canvas).pop();
};
function $3365e949f614b097$var$moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function $3365e949f614b097$var$determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === "mouseout") return null;
    if (isClick) return lastEvent;
    return e;
}
function $3365e949f614b097$var$getDatasetArea(meta) {
    const { xScale: xScale , yScale: yScale  } = meta;
    if (xScale && yScale) return {
        left: xScale.left,
        right: xScale.right,
        top: yScale.top,
        bottom: yScale.bottom
    };
}
class $3365e949f614b097$export$acaa6426d77a227e {
    static defaults = (0, $94677f9766b703ce$export$4368d992c4eafac0);
    static instances = $3365e949f614b097$var$instances;
    static overrides = (0, $94677f9766b703ce$export$6559d589eb85fbb6);
    static registry = $3365e949f614b097$export$4bb7493d241fd8a5;
    static version = $3365e949f614b097$var$version;
    static getChart = $3365e949f614b097$var$getChart;
    static register(...items) {
        $3365e949f614b097$export$4bb7493d241fd8a5.add(...items);
        $3365e949f614b097$var$invalidatePlugins();
    }
    static unregister(...items) {
        $3365e949f614b097$export$4bb7493d241fd8a5.remove(...items);
        $3365e949f614b097$var$invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new $3365e949f614b097$var$Config(userConfig);
        const initialCanvas = $3365e949f614b097$var$getCanvas(item);
        const existingChart = $3365e949f614b097$var$getChart(initialCanvas);
        if (existingChart) throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "'" + " must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || $3365e949f614b097$export$72cd9e67b1b784f9(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, $94677f9766b703ce$export$2219238a014317b0)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new $3365e949f614b097$var$PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, $94677f9766b703ce$export$4c3d22f3d993c33f)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        $3365e949f614b097$var$instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        $3365e949f614b097$export$a424a0aa8f687495.listen(this, "complete", $3365e949f614b097$var$onAnimationsComplete);
        $3365e949f614b097$export$a424a0aa8f687495.listen(this, "progress", $3365e949f614b097$var$onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio: aspectRatio , maintainAspectRatio: maintainAspectRatio  } , width: width , height: height , _aspectRatio: _aspectRatio  } = this;
        if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return $3365e949f614b097$export$4bb7493d241fd8a5;
    }
    _initialize() {
        this.notifyPlugins("beforeInit");
        if (this.options.responsive) this.resize();
        else (0, $94677f9766b703ce$export$f787f51d84a910ad)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins("afterInit");
        return this;
    }
    clear() {
        (0, $94677f9766b703ce$export$c9170ad7d4cd7e57)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        $3365e949f614b097$export$a424a0aa8f687495.stop(this);
        return this;
    }
    resize(width, height) {
        if (!$3365e949f614b097$export$a424a0aa8f687495.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width: width,
            height: height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? "resize" : "attach";
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, $94677f9766b703ce$export$f787f51d84a910ad)(this, newRatio, true)) return;
        this.notifyPlugins("resize", {
            size: newSize
        });
        (0, $94677f9766b703ce$export$3722cfe417b6ed86)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, $94677f9766b703ce$export$d66501df72047452)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = $3365e949f614b097$var$determineAxis(id, scaleOptions);
            const isRadial = axis === "r";
            const isHorizontal = axis === "x";
            return {
                options: scaleOptions,
                dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
                dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
            };
        }));
        (0, $94677f9766b703ce$export$d66501df72047452)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = $3365e949f614b097$var$determineAxis(id, scaleOptions);
            const scaleType = (0, $94677f9766b703ce$export$90a7f3efeed30595)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || $3365e949f614b097$var$positionIsHorizontal(scaleOptions.position, axis) !== $3365e949f614b097$var$positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) scale = scales[id];
            else {
                const scaleClass = $3365e949f614b097$export$4bb7493d241fd8a5.getScale(scaleType);
                scale = new scaleClass({
                    id: id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, $94677f9766b703ce$export$d66501df72047452)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales[id];
        });
        (0, $94677f9766b703ce$export$d66501df72047452)(scales, (scale)=>{
            $3365e949f614b097$export$1ecca0613f5e56d2.configure(this, scale, scale.options);
            $3365e949f614b097$export$1ecca0613f5e56d2.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort($3365e949f614b097$var$compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets , data: { datasets: datasets  }  } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || $3365e949f614b097$var$getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = "" + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = $3365e949f614b097$export$4bb7493d241fd8a5.getController(type);
                const { datasetElementType: datasetElementType , dataElementType: dataElementType  } = (0, $94677f9766b703ce$export$4368d992c4eafac0).datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: $3365e949f614b097$export$4bb7493d241fd8a5.getElement(dataElementType),
                    datasetElementType: datasetElementType && $3365e949f614b097$export$4bb7493d241fd8a5.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, $94677f9766b703ce$export$d66501df72047452)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins("reset");
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins("beforeUpdate", {
            mode: mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller: controller  } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, $94677f9766b703ce$export$d66501df72047452)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins("afterUpdate", {
            mode: mode
        });
        this._layers.sort($3365e949f614b097$var$compare2Level("z", "_idx"));
        const { _active: _active , _lastEvent: _lastEvent  } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, $94677f9766b703ce$export$d66501df72047452)(this.scales, (scale)=>{
            $3365e949f614b097$export$1ecca0613f5e56d2.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, $94677f9766b703ce$export$ee7c8ad385a60b7b)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices: _hiddenIndices  } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method: method , start: start , count: count  } of changes){
            const move = method === "_removeElements" ? -count : count;
            $3365e949f614b097$var$moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + "," + c.splice(1).join(",")));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!(0, $94677f9766b703ce$export$ee7c8ad385a60b7b)(changeSet, makeSet(i))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(",")).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: true
        }) === false) return;
        $3365e949f614b097$export$1ecca0613f5e56d2.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, $94677f9766b703ce$export$d66501df72047452)(this.boxes, (box)=>{
            if (noArea && box.position === "chartArea") return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i1 = 0, ilen1 = this.data.datasets.length; i1 < ilen1; ++i1)this._updateDataset(i1, (0, $94677f9766b703ce$export$a93c5207d687da10)(mode) ? mode({
            datasetIndex: i1
        }) : mode);
        this.notifyPlugins("afterDatasetsUpdate", {
            mode: mode
        });
    }
    _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta: meta,
            index: index,
            mode: mode,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetUpdate", args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
        if (this.notifyPlugins("beforeRender", {
            cancelable: true
        }) === false) return;
        if ($3365e949f614b097$export$a424a0aa8f687495.has(this)) {
            if (this.attached && !$3365e949f614b097$export$a424a0aa8f687495.running(this)) $3365e949f614b097$export$a424a0aa8f687495.start(this);
        } else {
            this.draw();
            $3365e949f614b097$var$onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width: width , height: height  } = this._resizeBeforeDraw;
            this._resize(width, height);
            this._resizeBeforeDraw = null;
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins("beforeDraw", {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const clip = meta._clip;
        const useClip = !clip.disabled;
        const area = $3365e949f614b097$var$getDatasetArea(meta) || this.chartArea;
        const args = {
            meta: meta,
            index: meta.index,
            cancelable: true
        };
        if (this.notifyPlugins("beforeDatasetDraw", args) === false) return;
        if (useClip) (0, $94677f9766b703ce$export$8743009a87fcb00f)(ctx, {
            left: clip.left === false ? 0 : area.left - clip.left,
            right: clip.right === false ? this.width : area.right + clip.right,
            top: clip.top === false ? 0 : area.top - clip.top,
            bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
        meta.controller.draw();
        if (useClip) (0, $94677f9766b703ce$export$3d8c2f653ac9d0b9)(ctx);
        args.cancelable = false;
        this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
        return (0, $94677f9766b703ce$export$e7094788287c5e9b)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = $3365e949f614b097$export$a13296960cae0384.modes[mode];
        if (typeof method === "function") return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, $94677f9766b703ce$export$35e795649ee09318)(null, {
            chart: this,
            type: "chart"
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? "show" : "hide";
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, $94677f9766b703ce$export$dda1d9f60106f0e9)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible: visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        $3365e949f614b097$export$a424a0aa8f687495.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const { canvas: canvas , ctx: ctx  } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, $94677f9766b703ce$export$c9170ad7d4cd7e57)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete $3365e949f614b097$var$instances[this.id];
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, $94677f9766b703ce$export$d66501df72047452)(this.options.events, (type)=>_add(type, listener));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove("attach", attached);
            this.attached = true;
            this.resize();
            _add("resize", listener);
            _add("detach", detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove("resize", listener);
            this._stop();
            this._resize(0, 0);
            _add("attach", attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, $94677f9766b703ce$export$d66501df72047452)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, $94677f9766b703ce$export$d66501df72047452)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? "set" : "remove";
        let meta, item, i, ilen;
        if (mode === "dataset") {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller["_" + prefix + "DatasetHoverStyle"]();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex: datasetIndex , index: index  })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("No dataset found at index " + datasetIndex);
            return {
                datasetIndex: datasetIndex,
                element: meta.data[index],
                index: index
            };
        });
        const changed = !(0, $94677f9766b703ce$export$995eb9fca571757)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay: replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins("afterEvent", args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [] , options: options  } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, $94677f9766b703ce$export$f38c853ae54ed474)(e);
        const lastEvent = $3365e949f614b097$var$determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, $94677f9766b703ce$export$3722cfe417b6ed86)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, $94677f9766b703ce$export$3722cfe417b6ed86)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, $94677f9766b703ce$export$995eb9fca571757)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function $3365e949f614b097$var$invalidatePlugins() {
    return (0, $94677f9766b703ce$export$d66501df72047452)($3365e949f614b097$export$acaa6426d77a227e.instances, (chart)=>chart._plugins.invalidate());
}
function $3365e949f614b097$var$clipArc(ctx, element, endAngle) {
    const { startAngle: startAngle , pixelMargin: pixelMargin , x: x , y: y , outerRadius: outerRadius , innerRadius: innerRadius  } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd), startAngle - (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd));
    ctx.closePath();
    ctx.clip();
}
function $3365e949f614b097$var$toRadiusCorners(value) {
    return (0, $94677f9766b703ce$export$21579262ef46735b)(value, [
        "outerStart",
        "outerEnd",
        "innerStart",
        "innerEnd"
    ]);
}
/**
 * Parse border radius from the provided options
 */ function $3365e949f614b097$var$parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = $3365e949f614b097$var$toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, $94677f9766b703ce$export$25ce5a424b770e84)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, $94677f9766b703ce$export$25ce5a424b770e84)(o.innerStart, 0, innerLimit),
        innerEnd: (0, $94677f9766b703ce$export$25ce5a424b770e84)(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function $3365e949f614b097$var$rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function $3365e949f614b097$var$pathArc(ctx, element, offset, spacing, end, circular) {
    const { x: x , y: y , startAngle: start , pixelMargin: pixelMargin , innerRadius: innerR  } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, $94677f9766b703ce$export$56c0d5a1e737357d)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart: outerStart , outerEnd: outerEnd , innerStart: innerStart , innerEnd: innerEnd  } = $3365e949f614b097$var$parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = $3365e949f614b097$var$rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd));
        }
        // The line from point 3 to point 4
        const p4 = $3365e949f614b097$var$rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter1 = $3365e949f614b097$var$rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter1.x, pCenter1.y, innerEnd, endAngle + (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd), innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter2 = $3365e949f614b097$var$rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter2.x, pCenter2.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd));
        }
        // The line from point 7 to point 8
        const p8 = $3365e949f614b097$var$rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter3 = $3365e949f614b097$var$rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter3.x, pCenter3.y, outerStart, startAngle - (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd), outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function $3365e949f614b097$var$drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles: fullCircles , startAngle: startAngle , circumference: circumference  } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        $3365e949f614b097$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, $94677f9766b703ce$export$971d5caa766a69d7) || (0, $94677f9766b703ce$export$971d5caa766a69d7));
    }
    $3365e949f614b097$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function $3365e949f614b097$var$drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles: fullCircles , startAngle: startAngle , circumference: circumference , options: options  } = element;
    const { borderWidth: borderWidth , borderJoinStyle: borderJoinStyle  } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) return;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || "round";
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || "bevel";
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        $3365e949f614b097$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.stroke();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, $94677f9766b703ce$export$971d5caa766a69d7) || (0, $94677f9766b703ce$export$971d5caa766a69d7));
    }
    if (inner) $3365e949f614b097$var$clipArc(ctx, element, endAngle);
    if (!fullCircles) {
        $3365e949f614b097$var$pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class $3365e949f614b097$export$d48203c759d6a1fc extends $3365e949f614b097$export$db77ccec0bb4ccac {
    static id = "arc";
    static defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor"
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        const { angle: angle , distance: distance  } = (0, $94677f9766b703ce$export$96f57966bedc81b4)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle: startAngle , endAngle: endAngle , innerRadius: innerRadius , outerRadius: outerRadius , circumference: circumference  } = this.getProps([
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "circumference"
        ], useFinalPosition);
        const rAdjust = this.options.spacing / 2;
        const _circumference = (0, $94677f9766b703ce$export$90a7f3efeed30595)(circumference, endAngle - startAngle);
        const betweenAngles = _circumference >= (0, $94677f9766b703ce$export$971d5caa766a69d7) || (0, $94677f9766b703ce$export$ffb5f4729a158638)(angle, startAngle, endAngle);
        const withinRadius = (0, $94677f9766b703ce$export$3b513254972cfc9c)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x: x , y: y , startAngle: startAngle , endAngle: endAngle , innerRadius: innerRadius , outerRadius: outerRadius  } = this.getProps([
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius"
        ], useFinalPosition);
        const { offset: offset , spacing: spacing  } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options: options , circumference: circumference  } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
        this.fullCircles = circumference > (0, $94677f9766b703ce$export$971d5caa766a69d7) ? Math.floor(circumference / (0, $94677f9766b703ce$export$971d5caa766a69d7)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min((0, $94677f9766b703ce$export$56c0d5a1e737357d), circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        $3365e949f614b097$var$drawArc(ctx, this, radiusOffset, spacing, circular);
        $3365e949f614b097$var$drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}
function $3365e949f614b097$var$setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, $94677f9766b703ce$export$90a7f3efeed30595)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, $94677f9766b703ce$export$90a7f3efeed30595)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, $94677f9766b703ce$export$90a7f3efeed30595)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, $94677f9766b703ce$export$90a7f3efeed30595)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, $94677f9766b703ce$export$90a7f3efeed30595)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, $94677f9766b703ce$export$90a7f3efeed30595)(style.borderColor, options.borderColor);
}
function $3365e949f614b097$var$lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function $3365e949f614b097$var$getLineMethod(options) {
    if (options.stepped) return 0, $94677f9766b703ce$export$d24c54395ce0c509;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, $94677f9766b703ce$export$6554612db691658e;
    return $3365e949f614b097$var$lineTo;
}
function $3365e949f614b097$var$pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0 , end: paramsEnd = count - 1  } = params;
    const { start: segmentStart , end: segmentEnd  } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count: count,
        start: start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function $3365e949f614b097$var$pathSegment(ctx, line, segment, params) {
    const { points: points , options: options  } = line;
    const { count: count , start: start , loop: loop , ilen: ilen  } = $3365e949f614b097$var$pathVars(points, segment, params);
    const lineMethod = $3365e949f614b097$var$getLineMethod(options);
    let { move: move = true , reverse: reverse  } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function $3365e949f614b097$var$fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count: count , start: start , ilen: ilen  } = $3365e949f614b097$var$pathVars(points, segment, params);
    const { move: move = true , reverse: reverse  } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function $3365e949f614b097$var$_getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? $3365e949f614b097$var$fastPathSegment : $3365e949f614b097$var$pathSegment;
}
function $3365e949f614b097$var$_getInterpolationMethod(options) {
    if (options.stepped) return 0, $94677f9766b703ce$export$7a38258bbe170828;
    if (options.tension || options.cubicInterpolationMode === "monotone") return 0, $94677f9766b703ce$export$2f6ca3d3b1f80bf5;
    return 0, $94677f9766b703ce$export$8a5498727ef6be21;
}
function $3365e949f614b097$var$strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    $3365e949f614b097$var$setStyle(ctx, line.options);
    ctx.stroke(path);
}
function $3365e949f614b097$var$strokePathDirect(ctx, line, start, count) {
    const { segments: segments , options: options  } = line;
    const segmentMethod = $3365e949f614b097$var$_getSegmentMethod(line);
    for (const segment of segments){
        $3365e949f614b097$var$setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start: start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const $3365e949f614b097$var$usePath2D = typeof Path2D === "function";
function $3365e949f614b097$var$draw(ctx, line, start, count) {
    if ($3365e949f614b097$var$usePath2D && !line.options.segment) $3365e949f614b097$var$strokePathWithCache(ctx, line, start, count);
    else $3365e949f614b097$var$strokePathDirect(ctx, line, start, count);
}
class $3365e949f614b097$export$55e463fa7bcd3469 extends $3365e949f614b097$export$db77ccec0bb4ccac {
    static id = "line";
    static defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: "default",
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name1)=>name1 !== "borderDash" && name1 !== "fill"
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, $94677f9766b703ce$export$ab83b03e4111b1d0)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, $94677f9766b703ce$export$1a82df3d29112e01)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, $94677f9766b703ce$export$306ddfe3a8403e2)(this, {
            property: property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = $3365e949f614b097$var$_getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start: start , end: end  } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = $3365e949f614b097$var$_getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = $3365e949f614b097$var$_getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start: start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            $3365e949f614b097$var$draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
function $3365e949f614b097$var$inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value  } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class $3365e949f614b097$export$bd159b522b230b7a extends $3365e949f614b097$export$db77ccec0bb4ccac {
    static id = "point";
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x: x , y: y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return $3365e949f614b097$var$inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return $3365e949f614b097$var$inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x: x , y: y  } = this.getProps([
            "x",
            "y"
        ], useFinalPosition);
        return {
            x: x,
            y: y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, $94677f9766b703ce$export$e7094788287c5e9b)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, $94677f9766b703ce$export$493d36ec626b6698)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}
function $3365e949f614b097$var$getBarBounds(bar, useFinalPosition) {
    const { x: x , y: y , base: base , width: width , height: height  } = bar.getProps([
        "x",
        "y",
        "base",
        "width",
        "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left: left,
        top: top,
        right: right,
        bottom: bottom
    };
}
function $3365e949f614b097$var$skipOrLimit(skip, value, min, max) {
    return skip ? 0 : (0, $94677f9766b703ce$export$25ce5a424b770e84)(value, min, max);
}
function $3365e949f614b097$var$parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = (0, $94677f9766b703ce$export$d66dc83d8cfc8dd)(value);
    return {
        t: $3365e949f614b097$var$skipOrLimit(skip.top, o.top, 0, maxH),
        r: $3365e949f614b097$var$skipOrLimit(skip.right, o.right, 0, maxW),
        b: $3365e949f614b097$var$skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: $3365e949f614b097$var$skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function $3365e949f614b097$var$parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius: enableBorderRadius  } = bar.getProps([
        "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o = (0, $94677f9766b703ce$export$92108d983e8ee699)(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, $94677f9766b703ce$export$23f2a1d2818174ef)(value);
    return {
        topLeft: $3365e949f614b097$var$skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: $3365e949f614b097$var$skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: $3365e949f614b097$var$skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: $3365e949f614b097$var$skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function $3365e949f614b097$var$boundingRects(bar) {
    const bounds = $3365e949f614b097$var$getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = $3365e949f614b097$var$parseBorderWidth(bar, width / 2, height / 2);
    const radius = $3365e949f614b097$var$parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius: radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function $3365e949f614b097$var$inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && $3365e949f614b097$var$getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, $94677f9766b703ce$export$3b513254972cfc9c)(x, bounds.left, bounds.right)) && (skipY || (0, $94677f9766b703ce$export$3b513254972cfc9c)(y, bounds.top, bounds.bottom));
}
function $3365e949f614b097$var$hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function $3365e949f614b097$var$addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function $3365e949f614b097$var$inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class $3365e949f614b097$export$a16ed71bf4b07672 extends $3365e949f614b097$export$db77ccec0bb4ccac {
    static id = "bar";
    static defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: undefined
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount: inflateAmount , options: { borderColor: borderColor , backgroundColor: backgroundColor  }  } = this;
        const { inner: inner , outer: outer  } = $3365e949f614b097$var$boundingRects(this);
        const addRectPath = $3365e949f614b097$var$hasRadius(outer.radius) ? (0, $94677f9766b703ce$export$1fbe638ecf81657e) : $3365e949f614b097$var$addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, $3365e949f614b097$var$inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, $3365e949f614b097$var$inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill("evenodd");
        }
        ctx.beginPath();
        addRectPath(ctx, $3365e949f614b097$var$inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return $3365e949f614b097$var$inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return $3365e949f614b097$var$inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return $3365e949f614b097$var$inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x: x , y: y , base: base , horizontal: horizontal  } = this.getProps([
            "x",
            "y",
            "base",
            "horizontal"
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === "x" ? this.width / 2 : this.height / 2;
    }
}
var $3365e949f614b097$export$7a5d735b2ab6389d = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: $3365e949f614b097$export$d48203c759d6a1fc,
    LineElement: $3365e949f614b097$export$55e463fa7bcd3469,
    PointElement: $3365e949f614b097$export$bd159b522b230b7a,
    BarElement: $3365e949f614b097$export$a16ed71bf4b07672
});
const $3365e949f614b097$var$BORDER_COLORS = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)" // grey
];
// Border colors with 50% transparency
const $3365e949f614b097$var$BACKGROUND_COLORS = /* #__PURE__ */ $3365e949f614b097$var$BORDER_COLORS.map((color)=>color.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function $3365e949f614b097$var$getBorderColor(i) {
    return $3365e949f614b097$var$BORDER_COLORS[i % $3365e949f614b097$var$BORDER_COLORS.length];
}
function $3365e949f614b097$var$getBackgroundColor(i) {
    return $3365e949f614b097$var$BACKGROUND_COLORS[i % $3365e949f614b097$var$BACKGROUND_COLORS.length];
}
function $3365e949f614b097$var$colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = $3365e949f614b097$var$getBorderColor(i);
    dataset.backgroundColor = $3365e949f614b097$var$getBackgroundColor(i);
    return ++i;
}
function $3365e949f614b097$var$colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>$3365e949f614b097$var$getBorderColor(i++));
    return i;
}
function $3365e949f614b097$var$colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>$3365e949f614b097$var$getBackgroundColor(i++));
    return i;
}
function $3365e949f614b097$var$getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex)=>{
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        if (controller instanceof $3365e949f614b097$export$e04603e7d8b77172) i = $3365e949f614b097$var$colorizeDoughnutDataset(dataset, i);
        else if (controller instanceof $3365e949f614b097$export$2a270b3a0d973c85) i = $3365e949f614b097$var$colorizePolarAreaDataset(dataset, i);
        else if (controller) i = $3365e949f614b097$var$colorizeDefaultDataset(dataset, i);
    };
}
function $3365e949f614b097$var$containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) return true;
    }
    return false;
}
function $3365e949f614b097$var$containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
var $3365e949f614b097$export$c537fa0d021d010b = {
    id: "colors",
    defaults: {
        enabled: true,
        forceOverride: false
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) return;
        const { data: { datasets: datasets  } , options: chartOptions  } = chart.config;
        const { elements: elements  } = chartOptions;
        if (!options.forceOverride && ($3365e949f614b097$var$containsColorsDefinitions(datasets) || $3365e949f614b097$var$containsColorsDefinition(chartOptions) || elements && $3365e949f614b097$var$containsColorsDefinitions(elements))) return;
        const colorizer = $3365e949f614b097$var$getColorizer(chart);
        datasets.forEach(colorizer);
    }
};
function $3365e949f614b097$var$lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx , y: pointAy  } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function $3365e949f614b097$var$minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(minIndex) && !(0, $94677f9766b703ce$export$342063e11d6c3cad)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function $3365e949f614b097$var$cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, "data", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: data
        });
    }
}
function $3365e949f614b097$var$cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        $3365e949f614b097$var$cleanDecimatedDataset(dataset);
    });
}
function $3365e949f614b097$var$getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale: iScale  } = meta;
    const { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = iScale.getUserBounds();
    if (minDefined) start = (0, $94677f9766b703ce$export$25ce5a424b770e84)((0, $94677f9766b703ce$export$ef35774e6d314e91)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, $94677f9766b703ce$export$25ce5a424b770e84)((0, $94677f9766b703ce$export$ef35774e6d314e91)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start: start,
        count: count
    };
}
var $3365e949f614b097$export$be17f937e9aa7533 = {
    id: "decimation",
    defaults: {
        algorithm: "min-max",
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            $3365e949f614b097$var$cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data: _data , indexAxis: indexAxis  } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, $94677f9766b703ce$export$407448d2b89b1813)([
                indexAxis,
                chart.options.indexAxis
            ]) === "y") return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== "linear" && xAxis.type !== "time") return;
            if (chart.options.parsing) return;
            let { start: start , count: count  } = $3365e949f614b097$var$getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                $3365e949f614b097$var$cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, "data", {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case "lttb":
                    decimated = $3365e949f614b097$var$lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case "min-max":
                    decimated = $3365e949f614b097$var$minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        $3365e949f614b097$var$cleanDecimatedData(chart);
    }
};
function $3365e949f614b097$var$_segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start: start , end: end  } = segment;
        end = $3365e949f614b097$var$_findSegmentEnd(start, end, points);
        const bounds = $3365e949f614b097$var$_getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, $94677f9766b703ce$export$306ddfe3a8403e2)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = $3365e949f614b097$var$_getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, $94677f9766b703ce$export$9fa96a7d116ea3ce)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: $3365e949f614b097$var$_getEdge(bounds, subBounds, "start", Math.max)
                },
                end: {
                    [property]: $3365e949f614b097$var$_getEdge(bounds, subBounds, "end", Math.min)
                }
            });
        }
    }
    return parts;
}
function $3365e949f614b097$var$_getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
        start = (0, $94677f9766b703ce$export$28f7fcd39efa255)(start);
        end = (0, $94677f9766b703ce$export$28f7fcd39efa255)(end);
    }
    return {
        property: property,
        start: start,
        end: end
    };
}
function $3365e949f614b097$var$_pointsFromSegments(boundary, line) {
    const { x: x = null , y: y = null  } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start: start , end: end  })=>{
        end = $3365e949f614b097$var$_findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y: y
            });
            points.push({
                x: last.x,
                y: y
            });
        } else if (x !== null) {
            points.push({
                x: x,
                y: first.y
            });
            points.push({
                x: x,
                y: last.y
            });
        }
    });
    return points;
}
function $3365e949f614b097$var$_findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function $3365e949f614b097$var$_getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function $3365e949f614b097$var$_createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = $3365e949f614b097$var$_pointsFromSegments(boundary, line);
    return points.length ? new $3365e949f614b097$export$55e463fa7bcd3469({
        points: points,
        options: {
            tension: 0
        },
        _loop: _loop,
        _fullLoop: _loop
    }) : null;
}
function $3365e949f614b097$var$_shouldApplyFill(source) {
    return source && source.fill !== false;
}
function $3365e949f614b097$var$_resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) return fill;
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!(0, $94677f9766b703ce$export$39b482c5e57630a8)(fill)) return fill;
        target = sources[fill];
        if (!target) return false;
        if (target.visible) return fill;
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
function $3365e949f614b097$var$_decodeFill(line, index, count) {
    const fill = $3365e949f614b097$var$parseFillOption(line);
    if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(fill)) return isNaN(fill.value) ? false : fill;
    let target = parseFloat(fill);
    if ((0, $94677f9766b703ce$export$39b482c5e57630a8)(target) && Math.floor(target) === target) return $3365e949f614b097$var$decodeTargetIndex(fill[0], index, target, count);
    return [
        "origin",
        "start",
        "end",
        "stack",
        "shape"
    ].indexOf(fill) >= 0 && fill;
}
function $3365e949f614b097$var$decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === "-" || firstCh === "+") target = index + target;
    if (target === index || target < 0 || target >= count) return false;
    return target;
}
function $3365e949f614b097$var$_getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === "start") pixel = scale.bottom;
    else if (fill === "end") pixel = scale.top;
    else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(fill)) pixel = scale.getPixelForValue(fill.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function $3365e949f614b097$var$_getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === "start") value = startValue;
    else if (fill === "end") value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, $94677f9766b703ce$export$23f2a1d2818174ef)(fill)) value = fill.value;
    else value = scale.getBaseValue();
    return value;
}
function $3365e949f614b097$var$parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = (0, $94677f9766b703ce$export$90a7f3efeed30595)(fillOption && fillOption.target, fillOption);
    if (fill === undefined) fill = !!options.backgroundColor;
    if (fill === false || fill === null) return false;
    if (fill === true) return "origin";
    return fill;
}
function $3365e949f614b097$var$_buildStackLine(source) {
    const { scale: scale , index: index , line: line  } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = $3365e949f614b097$var$getLinesBelow(scale, index);
    linesBelow.push($3365e949f614b097$var$_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)$3365e949f614b097$var$addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new $3365e949f614b097$export$55e463fa7bcd3469({
        points: points,
        options: {}
    });
}
function $3365e949f614b097$var$getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function $3365e949f614b097$var$addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first: first , last: last , point: point  } = $3365e949f614b097$var$findPoint(line, sourcePoint, "x");
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function $3365e949f614b097$var$findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, $94677f9766b703ce$export$3b513254972cfc9c)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first: first,
        last: last,
        point: point
    };
}
class $3365e949f614b097$var$simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x: x , y: y , radius: radius  } = this;
        bounds = bounds || {
            start: 0,
            end: (0, $94677f9766b703ce$export$971d5caa766a69d7)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x: x , y: y , radius: radius  } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle: angle
        };
    }
}
function $3365e949f614b097$var$_getTarget(source) {
    const { chart: chart , fill: fill , line: line  } = source;
    if ((0, $94677f9766b703ce$export$39b482c5e57630a8)(fill)) return $3365e949f614b097$var$getLineByIndex(chart, fill);
    if (fill === "stack") return $3365e949f614b097$var$_buildStackLine(source);
    if (fill === "shape") return true;
    const boundary = $3365e949f614b097$var$computeBoundary(source);
    if (boundary instanceof $3365e949f614b097$var$simpleArc) return boundary;
    return $3365e949f614b097$var$_createBoundaryLine(boundary, line);
}
function $3365e949f614b097$var$getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function $3365e949f614b097$var$computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return $3365e949f614b097$var$computeCircularBoundary(source);
    return $3365e949f614b097$var$computeLinearBoundary(source);
}
function $3365e949f614b097$var$computeLinearBoundary(source) {
    const { scale: scale = {} , fill: fill  } = source;
    const pixel = $3365e949f614b097$var$_getTargetPixel(fill, scale);
    if ((0, $94677f9766b703ce$export$39b482c5e57630a8)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function $3365e949f614b097$var$computeCircularBoundary(source) {
    const { scale: scale , fill: fill  } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = $3365e949f614b097$var$_getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new $3365e949f614b097$var$simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function $3365e949f614b097$var$_drawfill(ctx, source, area) {
    const target = $3365e949f614b097$var$_getTarget(source);
    const { line: line , scale: scale , axis: axis  } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above: above = color , below: below = color  } = fillOption || {};
    if (target && line.points.length) {
        (0, $94677f9766b703ce$export$8743009a87fcb00f)(ctx, area);
        $3365e949f614b097$var$doFill(ctx, {
            line: line,
            target: target,
            above: above,
            below: below,
            area: area,
            scale: scale,
            axis: axis
        });
        (0, $94677f9766b703ce$export$3d8c2f653ac9d0b9)(ctx);
    }
}
function $3365e949f614b097$var$doFill(ctx, cfg) {
    const { line: line , target: target , above: above , below: below , area: area , scale: scale  } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    if (property === "x" && below !== above) {
        $3365e949f614b097$var$clipVertical(ctx, target, area.top);
        $3365e949f614b097$var$fill(ctx, {
            line: line,
            target: target,
            color: above,
            scale: scale,
            property: property
        });
        ctx.restore();
        ctx.save();
        $3365e949f614b097$var$clipVertical(ctx, target, area.bottom);
    }
    $3365e949f614b097$var$fill(ctx, {
        line: line,
        target: target,
        color: below,
        scale: scale,
        property: property
    });
    ctx.restore();
}
function $3365e949f614b097$var$clipVertical(ctx, target, clipY) {
    const { segments: segments , points: points  } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start: start , end: end  } = segment;
        const firstPoint = points[start];
        const lastPoint = points[$3365e949f614b097$var$_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function $3365e949f614b097$var$fill(ctx, cfg) {
    const { line: line , target: target , property: property , color: color , scale: scale  } = cfg;
    const segments = $3365e949f614b097$var$_segments(line, target, property);
    for (const { source: src , target: tgt , start: start , end: end  } of segments){
        const { style: { backgroundColor: backgroundColor = color  } = {}  } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        $3365e949f614b097$var$clipBounds(ctx, scale, notShape && $3365e949f614b097$var$_getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else $3365e949f614b097$var$interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) $3365e949f614b097$var$interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? "evenodd" : "nonzero");
        ctx.restore();
    }
}
function $3365e949f614b097$var$clipBounds(ctx, scale, bounds) {
    const { top: top , bottom: bottom  } = scale.chart.chartArea;
    const { property: property , start: start , end: end  } = bounds || {};
    if (property === "x") {
        ctx.beginPath();
        ctx.rect(start, top, end - start, bottom - top);
        ctx.clip();
    }
}
function $3365e949f614b097$var$interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var $3365e949f614b097$export$d19ba4d812bed757 = {
    id: "filler",
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof $3365e949f614b097$export$55e463fa7bcd3469) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: $3365e949f614b097$var$_decodeFill(line, i, count),
                chart: chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line: line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = $3365e949f614b097$var$_resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === "beforeDraw";
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) $3365e949f614b097$var$_drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== "beforeDatasetsDraw") return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if ($3365e949f614b097$var$_shouldApplyFill(source)) $3365e949f614b097$var$_drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!$3365e949f614b097$var$_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") return;
        $3365e949f614b097$var$_drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: "beforeDatasetDraw"
    }
};
const $3365e949f614b097$var$getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight: boxHeight = fontSize , boxWidth: boxWidth = fontSize  } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth: boxWidth,
        boxHeight: boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const $3365e949f614b097$var$itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class $3365e949f614b097$var$Legend extends $3365e949f614b097$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, $94677f9766b703ce$export$3722cfe417b6ed86)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options: options , ctx: ctx  } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, $94677f9766b703ce$export$34aec0b863436764)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth: boxWidth , itemHeight: itemHeight  } = $3365e949f614b097$var$getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx: ctx , maxWidth: maxWidth , options: { labels: { padding: padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top: top,
                row: row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx: ctx , maxHeight: maxHeight , options: { labels: { padding: padding  }  }  } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth: itemWidth , itemHeight: itemHeight  } = $3365e949f614b097$var$calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left: left,
                top: currentColHeight,
                col: col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes , options: { align: align , labels: { padding: padding  } , rtl: rtl  }  } = this;
        const rtlHelper = (0, $94677f9766b703ce$export$3d12bd131bb975d1)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox1 of hitboxes){
                if (hitbox1.col !== col) {
                    col = hitbox1.col;
                    top = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox1.top = top;
                hitbox1.left += this.left + padding;
                hitbox1.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox1.left), hitbox1.width);
                top += hitbox1.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, $94677f9766b703ce$export$8743009a87fcb00f)(ctx, this);
            this._draw();
            (0, $94677f9766b703ce$export$3d8c2f653ac9d0b9)(ctx);
        }
    }
    _draw() {
        const { options: opts , columnSizes: columnSizes , lineWidths: lineWidths , ctx: ctx  } = this;
        const { align: align , labels: labelOpts  } = opts;
        const defaultColor = (0, $94677f9766b703ce$export$4368d992c4eafac0).color;
        const rtlHelper = (0, $94677f9766b703ce$export$3d12bd131bb975d1)(opts.rtl, this.left, this.width);
        const labelFont = (0, $94677f9766b703ce$export$34aec0b863436764)(labelOpts.font);
        const { padding: padding  } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign("left");
        ctx.textBaseline = "middle";
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth: boxWidth , boxHeight: boxHeight , itemHeight: itemHeight  } = $3365e949f614b097$var$getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.lineCap, "butt");
            ctx.lineDashOffset = (0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.lineJoin, "miter");
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, $94677f9766b703ce$export$90a7f3efeed30595)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, $94677f9766b703ce$export$24baa2b76016ce0e)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, $94677f9766b703ce$export$92108d983e8ee699)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, $94677f9766b703ce$export$1fbe638ecf81657e)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, $94677f9766b703ce$export$91c6e00c14e7e6fd)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, $94677f9766b703ce$export$9d398bebfec1c039)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else if (typeof legendItem.text !== "string") {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += $3365e949f614b097$var$calculateLegendItemHeight(legendItem, fontLineHeight);
            } else cursor.y += lineHeight;
        });
        (0, $94677f9766b703ce$export$890c4ad488842ce7)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, $94677f9766b703ce$export$34aec0b863436764)(titleOpts.font);
        const titlePadding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, $94677f9766b703ce$export$3d12bd131bb975d1)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, $94677f9766b703ce$export$ce26c07117d59d6a)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, $94677f9766b703ce$export$3c2fa207a37baaea)(position));
        ctx.textBaseline = "middle";
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, $94677f9766b703ce$export$34aec0b863436764)(titleOpts.font);
        const titlePadding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, $94677f9766b703ce$export$3b513254972cfc9c)(x, this.left, this.right) && (0, $94677f9766b703ce$export$3b513254972cfc9c)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, $94677f9766b703ce$export$3b513254972cfc9c)(x, hitBox.left, hitBox.left + hitBox.width) && (0, $94677f9766b703ce$export$3b513254972cfc9c)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!$3365e949f614b097$var$isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === "mousemove" || e.type === "mouseout") {
            const previous = this._hoveredItem;
            const sameItem = $3365e949f614b097$var$itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, $94677f9766b703ce$export$3722cfe417b6ed86)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, $94677f9766b703ce$export$3722cfe417b6ed86)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, $94677f9766b703ce$export$3722cfe417b6ed86)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function $3365e949f614b097$var$calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = $3365e949f614b097$var$calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = $3365e949f614b097$var$calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth: itemWidth,
        itemHeight: itemHeight
    };
}
function $3365e949f614b097$var$calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== "string") legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function $3365e949f614b097$var$calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== "string") itemHeight = $3365e949f614b097$var$calculateLegendItemHeight(legendItem, fontLineHeight);
    return itemHeight;
}
function $3365e949f614b097$var$calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length + 0.5 : 0;
    return fontLineHeight * labelHeight;
}
function $3365e949f614b097$var$isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === "click" || type === "mouseup")) return true;
    return false;
}
var $3365e949f614b097$export$ed247974535929c7 = {
    id: "legend",
    _element: $3365e949f614b097$var$Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new $3365e949f614b097$var$Legend({
            ctx: chart.ctx,
            options: options,
            chart: chart
        });
        $3365e949f614b097$export$1ecca0613f5e56d2.configure(chart, legend, options);
        $3365e949f614b097$export$1ecca0613f5e56d2.addBox(chart, legend);
    },
    stop (chart) {
        $3365e949f614b097$export$1ecca0613f5e56d2.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        $3365e949f614b097$export$1ecca0613f5e56d2.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: "top",
        align: "center",
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle: usePointStyle , pointStyle: pointStyle , textAlign: textAlign , color: color , useBorderRadius: useBorderRadius , borderRadius: borderRadius  }  } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: (name1)=>!name1.startsWith("on"),
        labels: {
            _scriptable: (name1)=>![
                    "generateLabels",
                    "filter",
                    "sort"
                ].includes(name1)
        }
    }
};
class $3365e949f614b097$var$Title extends $3365e949f614b097$export$db77ccec0bb4ccac {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, $94677f9766b703ce$export$8b22cf2602fb60ce)(opts.text) ? opts.text.length : 1;
        this._padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(opts.padding);
        const textSize = lineCount * (0, $94677f9766b703ce$export$34aec0b863436764)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
        const { top: top , left: left , bottom: bottom , right: right , options: options  } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === "left") {
                titleX = left + offset;
                titleY = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, bottom, top);
                rotation = (0, $94677f9766b703ce$export$56c0d5a1e737357d) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, $94677f9766b703ce$export$ce26c07117d59d6a)(align, top, bottom);
                rotation = (0, $94677f9766b703ce$export$56c0d5a1e737357d) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX: titleX,
            titleY: titleY,
            maxWidth: maxWidth,
            rotation: rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, $94677f9766b703ce$export$34aec0b863436764)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX: titleX , titleY: titleY , maxWidth: maxWidth , rotation: rotation  } = this._drawArgs(offset);
        (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth: maxWidth,
            rotation: rotation,
            textAlign: (0, $94677f9766b703ce$export$3c2fa207a37baaea)(opts.align),
            textBaseline: "middle",
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function $3365e949f614b097$var$createTitle(chart, titleOpts) {
    const title = new $3365e949f614b097$var$Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart: chart
    });
    $3365e949f614b097$export$1ecca0613f5e56d2.configure(chart, title, titleOpts);
    $3365e949f614b097$export$1ecca0613f5e56d2.addBox(chart, title);
    chart.titleBlock = title;
}
var $3365e949f614b097$export$f99233281efd08a0 = {
    id: "title",
    _element: $3365e949f614b097$var$Title,
    start (chart, _args, options) {
        $3365e949f614b097$var$createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        $3365e949f614b097$export$1ecca0613f5e56d2.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        $3365e949f614b097$export$1ecca0613f5e56d2.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "bold"
        },
        fullSize: true,
        padding: 10,
        position: "top",
        text: "",
        weight: 2000
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const $3365e949f614b097$var$map = new WeakMap();
var $3365e949f614b097$export$d5c56664638992a4 = {
    id: "subtitle",
    start (chart, _args, options) {
        const title = new $3365e949f614b097$var$Title({
            ctx: chart.ctx,
            options: options,
            chart: chart
        });
        $3365e949f614b097$export$1ecca0613f5e56d2.configure(chart, title, options);
        $3365e949f614b097$export$1ecca0613f5e56d2.addBox(chart, title);
        $3365e949f614b097$var$map.set(chart, title);
    },
    stop (chart) {
        $3365e949f614b097$export$1ecca0613f5e56d2.removeBox(chart, $3365e949f614b097$var$map.get(chart));
        $3365e949f614b097$var$map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = $3365e949f614b097$var$map.get(chart);
        $3365e949f614b097$export$1ecca0613f5e56d2.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: "center",
        display: false,
        font: {
            weight: "normal"
        },
        fullSize: true,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const $3365e949f614b097$var$positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let x = 0;
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }
        return {
            x: x / count,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, $94677f9766b703ce$export$158acd800e1ef08b)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x: x,
            y: y
        };
    }
};
function $3365e949f614b097$var$pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, $94677f9766b703ce$export$8b22cf2602fb60ce)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function $3365e949f614b097$var$splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) return str.split("\n");
    return str;
}
function $3365e949f614b097$var$createTooltipItem(chart, item) {
    const { element: element , datasetIndex: datasetIndex , index: index  } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label: label , value: value  } = controller.getLabelAndValue(index);
    return {
        chart: chart,
        label: label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex: datasetIndex,
        element: element
    };
}
function $3365e949f614b097$var$getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body: body , footer: footer , title: title  } = tooltip;
    const { boxWidth: boxWidth , boxHeight: boxHeight  } = options;
    const bodyFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.bodyFont);
    const titleFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.titleFont);
    const footerFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, $94677f9766b703ce$export$d66501df72047452)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, $94677f9766b703ce$export$d66501df72047452)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, $94677f9766b703ce$export$d66501df72047452)(body, (bodyItem)=>{
        (0, $94677f9766b703ce$export$d66501df72047452)(bodyItem.before, maxLineWidth);
        (0, $94677f9766b703ce$export$d66501df72047452)(bodyItem.lines, maxLineWidth);
        (0, $94677f9766b703ce$export$d66501df72047452)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, $94677f9766b703ce$export$d66501df72047452)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width: width,
        height: height
    };
}
function $3365e949f614b097$var$determineYAlign(chart, size) {
    const { y: y , height: height  } = size;
    if (y < height / 2) return "top";
    else if (y > chart.height - height / 2) return "bottom";
    return "center";
}
function $3365e949f614b097$var$doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x: x , width: width  } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x + width + caret > chart.width) return true;
    if (xAlign === "right" && x - width - caret < 0) return true;
}
function $3365e949f614b097$var$determineXAlign(chart, options, size, yAlign) {
    const { x: x , width: width  } = size;
    const { width: chartWidth , chartArea: { left: left , right: right  }  } = chart;
    let xAlign = "center";
    if (yAlign === "center") xAlign = x <= (left + right) / 2 ? "left" : "right";
    else if (x <= width / 2) xAlign = "left";
    else if (x >= chartWidth - width / 2) xAlign = "right";
    if ($3365e949f614b097$var$doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = "center";
    return xAlign;
}
function $3365e949f614b097$var$determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || $3365e949f614b097$var$determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || $3365e949f614b097$var$determineXAlign(chart, options, size, yAlign),
        yAlign: yAlign
    };
}
function $3365e949f614b097$var$alignX(size, xAlign) {
    let { x: x , width: width  } = size;
    if (xAlign === "right") x -= width;
    else if (xAlign === "center") x -= width / 2;
    return x;
}
function $3365e949f614b097$var$alignY(size, yAlign, paddingAndSize) {
    let { y: y , height: height  } = size;
    if (yAlign === "top") y += paddingAndSize;
    else if (yAlign === "bottom") y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function $3365e949f614b097$var$getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize: caretSize , caretPadding: caretPadding , cornerRadius: cornerRadius  } = options;
    const { xAlign: xAlign , yAlign: yAlign  } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $94677f9766b703ce$export$92108d983e8ee699)(cornerRadius);
    let x = $3365e949f614b097$var$alignX(size, xAlign);
    const y = $3365e949f614b097$var$alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
        if (xAlign === "left") x += paddingAndSize;
        else if (xAlign === "right") x -= paddingAndSize;
    } else if (xAlign === "left") x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === "right") x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, $94677f9766b703ce$export$25ce5a424b770e84)(x, 0, chart.width - size.width),
        y: (0, $94677f9766b703ce$export$25ce5a424b770e84)(y, 0, chart.height - size.height)
    };
}
function $3365e949f614b097$var$getAlignedX(tooltip, align, options) {
    const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function $3365e949f614b097$var$getBeforeAfterBodyLines(callback) {
    return $3365e949f614b097$var$pushOrConcat([], $3365e949f614b097$var$splitNewlines(callback));
}
function $3365e949f614b097$var$createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, $94677f9766b703ce$export$35e795649ee09318)(parent, {
        tooltip: tooltip,
        tooltipItems: tooltipItems,
        type: "tooltip"
    });
}
function $3365e949f614b097$var$overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const $3365e949f614b097$var$defaultCallbacks = {
    beforeTitle: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === "dataset") return item.dataset.label || "";
            else if (item.label) return item.label;
            else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
        }
        return "";
    },
    afterTitle: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    beforeBody: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    beforeLabel: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    label (tooltipItem) {
        if (this && this.options && this.options.mode === "dataset") return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
        let label = tooltipItem.dataset.label || "";
        if (label) label += ": ";
        const value = tooltipItem.formattedValue;
        if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(value)) label += value;
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    afterBody: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    beforeFooter: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    footer: (0, $94677f9766b703ce$export$cf2f7c5792f80b46),
    afterFooter: (0, $94677f9766b703ce$export$cf2f7c5792f80b46)
};
function $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, name1, ctx, arg) {
    const result = callbacks[name1].call(ctx, arg);
    if (typeof result === "undefined") return $3365e949f614b097$var$defaultCallbacks[name1].call(ctx, arg);
    return result;
}
class $3365e949f614b097$var$Tooltip extends $3365e949f614b097$export$db77ccec0bb4ccac {
    static positioners = $3365e949f614b097$var$positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new $3365e949f614b097$export$8ab227dac26677d(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = $3365e949f614b097$var$createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks: callbacks  } = options;
        const beforeTitle = $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, "beforeTitle", this, context);
        const title = $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, "title", this, context);
        const afterTitle = $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, "afterTitle", this, context);
        let lines = [];
        lines = $3365e949f614b097$var$pushOrConcat(lines, $3365e949f614b097$var$splitNewlines(beforeTitle));
        lines = $3365e949f614b097$var$pushOrConcat(lines, $3365e949f614b097$var$splitNewlines(title));
        lines = $3365e949f614b097$var$pushOrConcat(lines, $3365e949f614b097$var$splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return $3365e949f614b097$var$getBeforeAfterBodyLines($3365e949f614b097$var$invokeCallbackWithFallback(options.callbacks, "beforeBody", this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks: callbacks  } = options;
        const bodyItems = [];
        (0, $94677f9766b703ce$export$d66501df72047452)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = $3365e949f614b097$var$overrideCallbacks(callbacks, context);
            $3365e949f614b097$var$pushOrConcat(bodyItem.before, $3365e949f614b097$var$splitNewlines($3365e949f614b097$var$invokeCallbackWithFallback(scoped, "beforeLabel", this, context)));
            $3365e949f614b097$var$pushOrConcat(bodyItem.lines, $3365e949f614b097$var$invokeCallbackWithFallback(scoped, "label", this, context));
            $3365e949f614b097$var$pushOrConcat(bodyItem.after, $3365e949f614b097$var$splitNewlines($3365e949f614b097$var$invokeCallbackWithFallback(scoped, "afterLabel", this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return $3365e949f614b097$var$getBeforeAfterBodyLines($3365e949f614b097$var$invokeCallbackWithFallback(options.callbacks, "afterBody", this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks: callbacks  } = options;
        const beforeFooter = $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, "beforeFooter", this, tooltipItems);
        const footer = $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, "footer", this, tooltipItems);
        const afterFooter = $3365e949f614b097$var$invokeCallbackWithFallback(callbacks, "afterFooter", this, tooltipItems);
        let lines = [];
        lines = $3365e949f614b097$var$pushOrConcat(lines, $3365e949f614b097$var$splitNewlines(beforeFooter));
        lines = $3365e949f614b097$var$pushOrConcat(lines, $3365e949f614b097$var$splitNewlines(footer));
        lines = $3365e949f614b097$var$pushOrConcat(lines, $3365e949f614b097$var$splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push($3365e949f614b097$var$createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, $94677f9766b703ce$export$d66501df72047452)(tooltipItems, (context)=>{
            const scoped = $3365e949f614b097$var$overrideCallbacks(options.callbacks, context);
            labelColors.push($3365e949f614b097$var$invokeCallbackWithFallback(scoped, "labelColor", this, context));
            labelPointStyles.push($3365e949f614b097$var$invokeCallbackWithFallback(scoped, "labelPointStyle", this, context));
            labelTextColors.push($3365e949f614b097$var$invokeCallbackWithFallback(scoped, "labelTextColor", this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = $3365e949f614b097$var$positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = $3365e949f614b097$var$getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = $3365e949f614b097$var$determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = $3365e949f614b097$var$getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign: xAlign , yAlign: yAlign  } = this;
        const { caretSize: caretSize , cornerRadius: cornerRadius  } = options;
        const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $94677f9766b703ce$export$92108d983e8ee699)(cornerRadius);
        const { x: ptX , y: ptY  } = tooltipPoint;
        const { width: width , height: height  } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === "center") {
            y2 = ptY + height / 2;
            if (xAlign === "left") {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === "left") x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === "right") x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === "top") {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1: x1,
            x2: x2,
            x3: x3,
            y1: y1,
            y2: y2,
            y3: y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, $94677f9766b703ce$export$3d12bd131bb975d1)(options.rtl, this.x, this.width);
            pt.x = $3365e949f614b097$var$getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = "middle";
            titleFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColors = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight: boxHeight , boxWidth: boxWidth , boxPadding: boxPadding  } = options;
        const bodyFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.bodyFont);
        const colorX = $3365e949f614b097$var$getAlignedX(this, "left", options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, $94677f9766b703ce$export$493d36ec626b6698)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColors.borderColor;
            ctx.fillStyle = labelColors.backgroundColor;
            (0, $94677f9766b703ce$export$493d36ec626b6698)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = (0, $94677f9766b703ce$export$23f2a1d2818174ef)(labelColors.borderWidth) ? Math.max(...Object.values(labelColors.borderWidth)) : labelColors.borderWidth || 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.setLineDash(labelColors.borderDash || []);
            ctx.lineDashOffset = labelColors.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth - boxPadding);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - boxPadding - 2);
            const borderRadius = (0, $94677f9766b703ce$export$92108d983e8ee699)(labelColors.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, $94677f9766b703ce$export$1fbe638ecf81657e)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.beginPath();
                (0, $94677f9766b703ce$export$1fbe638ecf81657e)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColors.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body: body  } = this;
        const { bodySpacing: bodySpacing , bodyAlign: bodyAlign , displayColors: displayColors , boxHeight: boxHeight , boxWidth: boxWidth , boxPadding: boxPadding  } = options;
        const bodyFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, $94677f9766b703ce$export$3d12bd131bb975d1)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = "middle";
        ctx.font = bodyFont.string;
        pt.x = $3365e949f614b097$var$getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, $94677f9766b703ce$export$d66501df72047452)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, $94677f9766b703ce$export$d66501df72047452)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, $94677f9766b703ce$export$d66501df72047452)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, $94677f9766b703ce$export$d66501df72047452)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, $94677f9766b703ce$export$3d12bd131bb975d1)(options.rtl, this.x, this.width);
            pt.x = $3365e949f614b097$var$getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = "middle";
            footerFont = (0, $94677f9766b703ce$export$34aec0b863436764)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign: xAlign , yAlign: yAlign  } = this;
        const { x: x , y: y  } = pt;
        const { width: width , height: height  } = tooltipSize;
        const { topLeft: topLeft , topRight: topRight , bottomLeft: bottomLeft , bottomRight: bottomRight  } = (0, $94677f9766b703ce$export$92108d983e8ee699)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === "top") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === "center" && xAlign === "right") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === "bottom") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === "center" && xAlign === "left") this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = $3365e949f614b097$var$positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = $3365e949f614b097$var$getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = $3365e949f614b097$var$determineAlignment(chart, options, positionAndSize);
            const point = $3365e949f614b097$var$getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, $94677f9766b703ce$export$91c6e00c14e7e6fd)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, $94677f9766b703ce$export$890c4ad488842ce7)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex: datasetIndex , index: index  })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error("Cannot find a dataset at index " + datasetIndex);
            return {
                datasetIndex: datasetIndex,
                element: meta.data[index],
                index: index
            };
        });
        const changed = !(0, $94677f9766b703ce$export$995eb9fca571757)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, $94677f9766b703ce$export$995eb9fca571757)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === "mouseout") return [];
        if (!inChartArea) return lastActive;
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX: caretX , caretY: caretY , options: options  } = this;
        const position = $3365e949f614b097$var$positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var $3365e949f614b097$export$28c660c63b792dea = {
    id: "tooltip",
    _element: $3365e949f614b097$var$Tooltip,
    positioners: $3365e949f614b097$var$positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new $3365e949f614b097$var$Tooltip({
            chart: chart,
            options: options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip: tooltip
            };
            if (chart.notifyPlugins("beforeTooltipDraw", {
                ...args,
                cancelable: true
            }) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins("afterTooltipDraw", args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: true,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: [
                    "x",
                    "y",
                    "width",
                    "height",
                    "caretX",
                    "caretY"
                ]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: $3365e949f614b097$var$defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: (name1)=>name1 !== "filter" && name1 !== "itemSort" && name1 !== "external",
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: [
        "interaction"
    ]
};
var $3365e949f614b097$export$8b3ca321c77fdea6 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Colors: $3365e949f614b097$export$c537fa0d021d010b,
    Decimation: $3365e949f614b097$export$be17f937e9aa7533,
    Filler: $3365e949f614b097$export$d19ba4d812bed757,
    Legend: $3365e949f614b097$export$ed247974535929c7,
    SubTitle: $3365e949f614b097$export$d5c56664638992a4,
    Title: $3365e949f614b097$export$f99233281efd08a0,
    Tooltip: $3365e949f614b097$export$28c660c63b792dea
});
const $3365e949f614b097$var$addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === "string") {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index: index,
            label: raw
        });
    } else if (isNaN(raw)) index = null;
    return index;
};
function $3365e949f614b097$var$findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return $3365e949f614b097$var$addIfString(labels, raw, index, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const $3365e949f614b097$var$validIndex = (index, max)=>index === null ? null : (0, $94677f9766b703ce$export$25ce5a424b770e84)(Math.round(index), 0, max);
function $3365e949f614b097$var$_getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) return labels[value];
    return value;
}
class $3365e949f614b097$export$29e663ba4d09fe7 extends $3365e949f614b097$export$d60cfc58d3c358b6 {
    static id = "category";
    static defaults = {
        ticks: {
            callback: $3365e949f614b097$var$_getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index: index , label: label  } of added)if (labels[index] === label) labels.splice(index, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(raw)) return null;
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : $3365e949f614b097$var$findOrAddLabel(labels, raw, (0, $94677f9766b703ce$export$90a7f3efeed30595)(index, raw), this._addedLabels);
        return $3365e949f614b097$var$validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let { min: min , max: max  } = this.getMinMax(true);
        if (this.options.bounds === "ticks") {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value: value
        });
        return ticks;
    }
    getLabelForValue(value) {
        return $3365e949f614b097$var$_getLabelForValue.call(this, value);
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== "number") value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
function $3365e949f614b097$var$generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds: bounds , step: step , min: min , max: max , precision: precision , count: count , maxTicks: maxTicks , maxDigits: maxDigits , includeBounds: includeBounds  } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin , max: rmax  } = dataRange;
    const minDefined = !(0, $94677f9766b703ce$export$342063e11d6c3cad)(min);
    const maxDefined = !(0, $94677f9766b703ce$export$342063e11d6c3cad)(max);
    const countDefined = !(0, $94677f9766b703ce$export$342063e11d6c3cad)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, $94677f9766b703ce$export$a33b77bbdbb8366c)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, $94677f9766b703ce$export$a33b77bbdbb8366c)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, $94677f9766b703ce$export$b9a6b53f9be3734)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, $94677f9766b703ce$export$a05254e7c3aeba6e)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, $94677f9766b703ce$export$23ebac1979863676)(spacing), (0, $94677f9766b703ce$export$23ebac1979863676)(niceMin));
    factor = Math.pow(10, (0, $94677f9766b703ce$export$342063e11d6c3cad)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, $94677f9766b703ce$export$a05254e7c3aeba6e)(Math.round((niceMin + j * spacing) * factor) / factor, min, $3365e949f614b097$var$relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j)ticks.push({
        value: Math.round((niceMin + j * spacing) * factor) / factor
    });
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, $94677f9766b703ce$export$a05254e7c3aeba6e)(ticks[ticks.length - 1].value, max, $3365e949f614b097$var$relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function $3365e949f614b097$var$relativeLabelSize(value, minSpacing, { horizontal: horizontal , minRotation: minRotation  }) {
    const rad = (0, $94677f9766b703ce$export$625550452a3fa3ec)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
}
class $3365e949f614b097$var$LinearScaleBase extends $3365e949f614b097$export$d60cfc58d3c358b6 {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(raw)) return null;
        if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero: beginAtZero  } = this.options;
        const { minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let { min: min , max: max  } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(min);
            const maxSign = (0, $94677f9766b703ce$export$2408f22a0fab9ae5)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit: maxTicksLimit , stepSize: stepSize  } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks: maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = $3365e949f614b097$var$generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === "ticks") (0, $94677f9766b703ce$export$53a70dd1ebbae346)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, $94677f9766b703ce$export$ae1af26003f05816)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class $3365e949f614b097$export$e7f4e5e8656f0b93 extends $3365e949f614b097$var$LinearScaleBase {
    static id = "linear";
    static defaults = {
        ticks: {
            callback: (0, $94677f9766b703ce$export$91477dc880baac21).formatters.numeric
        }
    };
    determineDataLimits() {
        const { min: min , max: max  } = this.getMinMax(true);
        this.min = (0, $94677f9766b703ce$export$39b482c5e57630a8)(min) ? min : 0;
        this.max = (0, $94677f9766b703ce$export$39b482c5e57630a8)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
const $3365e949f614b097$var$log10Floor = (v)=>Math.floor((0, $94677f9766b703ce$export$9f4f30ee63539e24)(v));
const $3365e949f614b097$var$changeExponent = (v, m)=>Math.pow(10, $3365e949f614b097$var$log10Floor(v) + m);
function $3365e949f614b097$var$isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, $3365e949f614b097$var$log10Floor(tickVal));
    return remain === 1;
}
function $3365e949f614b097$var$steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function $3365e949f614b097$var$startExp(min, max) {
    const range = max - min;
    let rangeExp = $3365e949f614b097$var$log10Floor(range);
    while($3365e949f614b097$var$steps(min, max, rangeExp) > 10)rangeExp++;
    while($3365e949f614b097$var$steps(min, max, rangeExp) < 10)rangeExp--;
    return Math.min(rangeExp, $3365e949f614b097$var$log10Floor(min));
}
function $3365e949f614b097$var$generateTicks(generationOptions, { min: min , max: max  }) {
    min = (0, $94677f9766b703ce$export$c4ce752e73470fba)(generationOptions.min, min);
    const ticks = [];
    const minExp = $3365e949f614b097$var$log10Floor(min);
    let exp = $3365e949f614b097$var$startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = (0, $94677f9766b703ce$export$c4ce752e73470fba)(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value: value,
            major: $3365e949f614b097$var$isMajor(value),
            significand: significand
        });
        if (significand >= 10) significand = significand < 15 ? 15 : 20;
        else significand++;
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = (0, $94677f9766b703ce$export$c4ce752e73470fba)(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: $3365e949f614b097$var$isMajor(lastTick),
        significand: significand
    });
    return ticks;
}
class $3365e949f614b097$export$85295eaf7cb3ac3e extends $3365e949f614b097$export$d60cfc58d3c358b6 {
    static id = "logarithmic";
    static defaults = {
        ticks: {
            callback: (0, $94677f9766b703ce$export$91477dc880baac21).formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = $3365e949f614b097$var$LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, $94677f9766b703ce$export$39b482c5e57630a8)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min: min , max: max  } = this.getMinMax(true);
        this.min = (0, $94677f9766b703ce$export$39b482c5e57630a8)(min) ? Math.max(0, min) : null;
        this.max = (0, $94677f9766b703ce$export$39b482c5e57630a8)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        if (this._zero && this.min !== this._suggestedMin && !(0, $94677f9766b703ce$export$39b482c5e57630a8)(this._userMin)) this.min = min === $3365e949f614b097$var$changeExponent(this.min, 0) ? $3365e949f614b097$var$changeExponent(this.min, -1) : $3365e949f614b097$var$changeExponent(this.min, 0);
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin($3365e949f614b097$var$changeExponent(min, -1));
                setMax($3365e949f614b097$var$changeExponent(max, 1));
            }
        }
        if (min <= 0) setMin($3365e949f614b097$var$changeExponent(max, -1));
        if (max <= 0) setMax($3365e949f614b097$var$changeExponent(min, 1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = $3365e949f614b097$var$generateTicks(generationOptions, this);
        if (opts.bounds === "ticks") (0, $94677f9766b703ce$export$53a70dd1ebbae346)(ticks, this, "value");
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? "0" : (0, $94677f9766b703ce$export$ae1af26003f05816)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, $94677f9766b703ce$export$9f4f30ee63539e24)(start);
        this._valueRange = (0, $94677f9766b703ce$export$9f4f30ee63539e24)(this.max) - (0, $94677f9766b703ce$export$9f4f30ee63539e24)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, $94677f9766b703ce$export$9f4f30ee63539e24)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
function $3365e949f614b097$var$getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(tickOpts.backdropPadding);
        return (0, $94677f9766b703ce$export$90a7f3efeed30595)(tickOpts.font && tickOpts.font.size, (0, $94677f9766b703ce$export$4368d992c4eafac0).font.size) + padding.height;
    }
    return 0;
}
function $3365e949f614b097$var$measureLabelSize(ctx, font, label) {
    label = (0, $94677f9766b703ce$export$8b22cf2602fb60ce)(label) ? label : [
        label
    ];
    return {
        w: (0, $94677f9766b703ce$export$faec65b429be379)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function $3365e949f614b097$var$determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function $3365e949f614b097$var$fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, $94677f9766b703ce$export$56c0d5a1e737357d) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, $94677f9766b703ce$export$34aec0b863436764)(opts.font);
        const textSize = $3365e949f614b097$var$measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, $94677f9766b703ce$export$28f7fcd39efa255)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, $94677f9766b703ce$export$3a6d5c9ae78a2c08)(angleRadians));
        const hLimits = $3365e949f614b097$var$determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = $3365e949f614b097$var$determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        $3365e949f614b097$var$updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = $3365e949f614b097$var$buildPointLabelItems(scale, labelSizes, padding);
}
function $3365e949f614b097$var$updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function $3365e949f614b097$var$buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const extra = $3365e949f614b097$var$getTickBackdropHeight(opts) / 2;
    const outerDistance = scale.drawingArea;
    const additionalAngle = opts.pointLabels.centerPointLabels ? (0, $94677f9766b703ce$export$56c0d5a1e737357d) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + padding[i], additionalAngle);
        const angle = Math.round((0, $94677f9766b703ce$export$3a6d5c9ae78a2c08)((0, $94677f9766b703ce$export$28f7fcd39efa255)(pointLabelPosition.angle + (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd))));
        const size = labelSizes[i];
        const y = $3365e949f614b097$var$yForAngle(pointLabelPosition.y, size.h, angle);
        const textAlign = $3365e949f614b097$var$getTextAlignForAngle(angle);
        const left = $3365e949f614b097$var$leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
        items.push({
            x: pointLabelPosition.x,
            y: y,
            textAlign: textAlign,
            left: left,
            top: y,
            right: left + size.w,
            bottom: y + size.h
        });
    }
    return items;
}
function $3365e949f614b097$var$getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return "center";
    else if (angle < 180) return "left";
    return "right";
}
function $3365e949f614b097$var$leftForTextAlign(x, w, align) {
    if (align === "right") x -= w;
    else if (align === "center") x -= w / 2;
    return x;
}
function $3365e949f614b097$var$yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function $3365e949f614b097$var$drawPointLabels(scale, labelCount) {
    const { ctx: ctx , options: { pointLabels: pointLabels  }  } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        const plFont = (0, $94677f9766b703ce$export$34aec0b863436764)(optsAtIndex.font);
        const { x: x , y: y , textAlign: textAlign , left: left , top: top , right: right , bottom: bottom  } = scale._pointLabelItems[i];
        const { backdropColor: backdropColor  } = optsAtIndex;
        if (!(0, $94677f9766b703ce$export$342063e11d6c3cad)(backdropColor)) {
            const borderRadius = (0, $94677f9766b703ce$export$92108d983e8ee699)(optsAtIndex.borderRadius);
            const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(optsAtIndex.backdropPadding);
            ctx.fillStyle = backdropColor;
            const backdropLeft = left - padding.left;
            const backdropTop = top - padding.top;
            const backdropWidth = right - left + padding.width;
            const backdropHeight = bottom - top + padding.height;
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                (0, $94677f9766b703ce$export$1fbe638ecf81657e)(ctx, {
                    x: backdropLeft,
                    y: backdropTop,
                    w: backdropWidth,
                    h: backdropHeight,
                    radius: borderRadius
                });
                ctx.fill();
            } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
        }
        (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: "middle"
        });
    }
}
function $3365e949f614b097$var$pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx: ctx  } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, $94677f9766b703ce$export$971d5caa766a69d7));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function $3365e949f614b097$var$drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color , lineWidth: lineWidth  } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    $3365e949f614b097$var$pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function $3365e949f614b097$var$createPointLabelContext(parent, index, label) {
    return (0, $94677f9766b703ce$export$35e795649ee09318)(parent, {
        label: label,
        index: index,
        type: "pointLabel"
    });
}
class $3365e949f614b097$export$cfafc36d95386d38 extends $3365e949f614b097$var$LinearScaleBase {
    static id = "radialLinear";
    static defaults = {
        display: true,
        animate: true,
        position: "chartArea",
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: (0, $94677f9766b703ce$export$91477dc880baac21).formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    };
    static descriptors = {
        angleLines: {
            _fallback: "grid"
        }
    };
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)($3365e949f614b097$var$getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min: min , max: max  } = this.getMinMax(false);
        this.min = (0, $94677f9766b703ce$export$39b482c5e57630a8)(min) && !isNaN(min) ? min : 0;
        this.max = (0, $94677f9766b703ce$export$39b482c5e57630a8)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / $3365e949f614b097$var$getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        $3365e949f614b097$var$LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = (0, $94677f9766b703ce$export$3722cfe417b6ed86)(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : "";
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) $3365e949f614b097$var$fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = (0, $94677f9766b703ce$export$971d5caa766a69d7) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, $94677f9766b703ce$export$28f7fcd39efa255)(index * angleMultiplier + (0, $94677f9766b703ce$export$625550452a3fa3ec)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return $3365e949f614b097$var$createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - (0, $94677f9766b703ce$export$7f8ddf7c7c20b3cd) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle: angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left: left , top: top , right: right , bottom: bottom  } = this._pointLabelItems[index];
        return {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        };
    }
    drawBackground() {
        const { backgroundColor: backgroundColor , grid: { circular: circular  }  } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            $3365e949f614b097$var$pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines: angleLines , grid: grid , border: border  } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) $3365e949f614b097$var$drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index)=>{
            if (index !== 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const context = this.getContext(index);
                const optsAtIndex = grid.setContext(context);
                const optsAtIndexBorder = border.setContext(context);
                $3365e949f614b097$var$drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color: color , lineWidth: lineWidth  } = optsAtIndex;
                if (!lineWidth || !color) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = (0, $94677f9766b703ce$export$34aec0b863436764)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, $94677f9766b703ce$export$a9c23c6ac3fc3eca)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, $94677f9766b703ce$export$dc98b0b04f4c7758)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
const $3365e949f614b097$var$INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const $3365e949f614b097$var$UNITS = /* #__PURE__ */ Object.keys($3365e949f614b097$var$INTERVALS);
function $3365e949f614b097$var$sorter(a, b) {
    return a - b;
}
function $3365e949f614b097$var$parse(scale, input) {
    if ((0, $94677f9766b703ce$export$342063e11d6c3cad)(input)) return null;
    const adapter = scale._adapter;
    const { parser: parser , round: round , isoWeekday: isoWeekday  } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") value = parser(value);
    if (!(0, $94677f9766b703ce$export$39b482c5e57630a8)(value)) value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === "week" && ((0, $94677f9766b703ce$export$d141bba7fdc215a3)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function $3365e949f614b097$var$determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = $3365e949f614b097$var$UNITS.length;
    for(let i = $3365e949f614b097$var$UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = $3365e949f614b097$var$INTERVALS[$3365e949f614b097$var$UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return $3365e949f614b097$var$UNITS[i];
    }
    return $3365e949f614b097$var$UNITS[ilen - 1];
}
function $3365e949f614b097$var$determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = $3365e949f614b097$var$UNITS.length - 1; i >= $3365e949f614b097$var$UNITS.indexOf(minUnit); i--){
        const unit = $3365e949f614b097$var$UNITS[i];
        if ($3365e949f614b097$var$INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return $3365e949f614b097$var$UNITS[minUnit ? $3365e949f614b097$var$UNITS.indexOf(minUnit) : 0];
}
function $3365e949f614b097$var$determineMajorUnit(unit) {
    for(let i = $3365e949f614b097$var$UNITS.indexOf(unit) + 1, ilen = $3365e949f614b097$var$UNITS.length; i < ilen; ++i){
        if ($3365e949f614b097$var$INTERVALS[$3365e949f614b097$var$UNITS[i]].common) return $3365e949f614b097$var$UNITS[i];
    }
}
function $3365e949f614b097$var$addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo: lo , hi: hi  } = (0, $94677f9766b703ce$export$2ed0fc6709e59212)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function $3365e949f614b097$var$setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) ticks[index].major = true;
    }
    return ticks;
}
function $3365e949f614b097$var$ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value: value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : $3365e949f614b097$var$setMajorTicks(scale, ticks, map, majorUnit);
}
class $3365e949f614b097$export$a894c72689ff3ec extends $3365e949f614b097$export$d60cfc58d3c358b6 {
    static id = "time";
    static defaults = {
        bounds: "data",
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            source: "auto",
            callback: false,
            major: {
                enabled: false
            }
        }
    };
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = "day";
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new $3365e949f614b097$export$f32766ea09ec8bc4._date(scaleOpts.adapters.date);
        adapter.init(opts);
        (0, $94677f9766b703ce$export$555508cbc6add439)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return $3365e949f614b097$var$parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || "day";
        let { min: min , max: max , minDefined: minDefined , maxDefined: maxDefined  } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== "ticks" || options.ticks.source !== "labels") _applyBounds(this.getMinMax(false));
        }
        min = (0, $94677f9766b703ce$export$39b482c5e57630a8)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, $94677f9766b703ce$export$39b482c5e57630a8)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min: min,
            max: max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === "ticks" && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, $94677f9766b703ce$export$c03999cb2f36933f)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? $3365e949f614b097$var$determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : $3365e949f614b097$var$determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? undefined : $3365e949f614b097$var$determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return $3365e949f614b097$var$ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, $94677f9766b703ce$export$25ce5a424b770e84)(start, 0, limit);
        end = (0, $94677f9766b703ce$export$25ce5a424b770e84)(end, 0, limit);
        this._offsets = {
            start: start,
            end: end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || $3365e949f614b097$var$determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, $94677f9766b703ce$export$90a7f3efeed30595)(options.ticks.stepSize, 1);
        const weekday = minor === "week" ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, $94677f9766b703ce$export$d141bba7fdc215a3)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, "isoWeek", weekday);
        first = +adapter.startOf(first, hasWeekday ? "day" : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
        const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)$3365e949f614b097$var$addTick(ticks, time, timestamps);
        if (time === max || options.bounds === "ticks" || count === 1) $3365e949f614b097$var$addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort((a, b)=>a - b).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const fmt = format || formats[unit];
        return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) return (0, $94677f9766b703ce$export$3722cfe417b6ed86)(formatter, [
            time,
            index,
            ticks
        ], this);
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, $94677f9766b703ce$export$625550452a3fa3ec)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, $3365e949f614b097$var$ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push($3365e949f614b097$var$parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, $94677f9766b703ce$export$71511d61b312f219)(values.sort($3365e949f614b097$var$sorter));
    }
}
function $3365e949f614b097$var$interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo: lo , hi: hi  } = (0, $94677f9766b703ce$export$ef35774e6d314e91)(table, "pos", val));
        ({ pos: prevSource , time: prevTarget  } = table[lo]);
        ({ pos: nextSource , time: nextTarget  } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo: lo , hi: hi  } = (0, $94677f9766b703ce$export$ef35774e6d314e91)(table, "time", val));
        ({ time: prevSource , pos: prevTarget  } = table[lo]);
        ({ time: nextSource , pos: nextTarget  } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class $3365e949f614b097$export$85df64a8eb6dc986 extends $3365e949f614b097$export$a894c72689ff3ec {
    static id = "timeseries";
    static defaults = $3365e949f614b097$export$a894c72689ff3ec.defaults;
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = $3365e949f614b097$var$interpolate(table, this.min);
        this._tableRange = $3365e949f614b097$var$interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min: min , max: max  } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return ($3365e949f614b097$var$interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return $3365e949f614b097$var$interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
var $3365e949f614b097$export$bcac1c16f1530ec2 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: $3365e949f614b097$export$29e663ba4d09fe7,
    LinearScale: $3365e949f614b097$export$e7f4e5e8656f0b93,
    LogarithmicScale: $3365e949f614b097$export$85295eaf7cb3ac3e,
    RadialLinearScale: $3365e949f614b097$export$cfafc36d95386d38,
    TimeScale: $3365e949f614b097$export$a894c72689ff3ec,
    TimeSeriesScale: $3365e949f614b097$export$85df64a8eb6dc986
});
const $3365e949f614b097$export$e8959e79e3af550f = [
    $3365e949f614b097$export$a6506504f799c5d5,
    $3365e949f614b097$export$7a5d735b2ab6389d,
    $3365e949f614b097$export$8b3ca321c77fdea6,
    $3365e949f614b097$export$bcac1c16f1530ec2
];



(0, $3365e949f614b097$export$acaa6426d77a227e).register(...(0, $3365e949f614b097$export$e8959e79e3af550f));
var $a2cd264cd732c23b$export$2e2bcd8739ae039 = (0, $3365e949f614b097$export$acaa6426d77a227e);


//---------------------------------------------------------
//----------  HTML elements -------------------------------
//---------------------------------------------------------
const $9255a96f441295c6$var$add = document.getElementById("add");
const $9255a96f441295c6$var$clear = document.getElementById("clear");
const $9255a96f441295c6$var$stage = document.getElementById("stage");
const $9255a96f441295c6$var$namesList = document.createElement("ul");
$9255a96f441295c6$var$namesList.setAttribute("class", "drop-down");
//---------------------------------------------------------
//------------ global variables ---------------------------
//---------------------------------------------------------
let $9255a96f441295c6$var$i; //loop counter.  don't ask, cause i don't get it
let $9255a96f441295c6$var$masterList = [];
let $9255a96f441295c6$var$alphaList = [];
//---------------------------------------------------------
//---------------- utilities ------------------------------
//---------------------------------------------------------
function $9255a96f441295c6$var$createDate(columnString) {
    const bits = columnString.split("-");
    return new Date(bits[0], bits[1], bits[2], bits[3]);
}
function $9255a96f441295c6$var$daysSinceLaunch(d) {
    const launch = new Date(2023, 0, 26, 23);
    return (d.getTime() - launch.getTime()) / 86400000;
}
function $9255a96f441295c6$var$dateFromLaunch(d) {
    // inverse of daysSinceLaunch
    const msecSinceLaunch = d * 86400000;
    const launch = new Date(2023, 0, 26, 23);
    const day = new Date(launch.getTime() + msecSinceLaunch);
    return `${day.getMonth() + 1}-${day.getDate()}`;
}
function $9255a96f441295c6$var$filterInfo(data, x) {
    const dx = data.length / x;
    const shorterArray = [];
    for($9255a96f441295c6$var$i = 0; $9255a96f441295c6$var$i < x; $9255a96f441295c6$var$i++){
        const index = Math.floor($9255a96f441295c6$var$i * dx);
        shorterArray.push(data[index]);
    }
    return shorterArray;
}
function $9255a96f441295c6$var$USMNTtrackerLink(player) {
    const name = player.first_name + "_" + player.last_name;
    const url = "https://usmnt-tracker.com/player/" + name.replace(" ", "_");
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    const text = document.createTextNode("recent matches");
    link.appendChild(text);
    return link;
}
function $9255a96f441295c6$var$createNamePlate(myMan) {
    $9255a96f441295c6$var$USMNTtrackerLink(myMan);
    const plate = document.createElement("div");
    plate.setAttribute("class", "name-plate");
    const xbox = document.createElement("a");
    xbox.setAttribute("class", "xbox");
    xbox.id = "xbox-" + myMan.id;
    xbox.innerHTML = "X";
    plate.appendChild(xbox);
    const name = document.createElement("div");
    name.setAttribute("class", "name");
    name.innerHTML = `${myMan.first_name} ${myMan.last_name}`;
    /*
	const followers = document.createElement('div');
	followers.setAttribute('class', 'followers');

	const index = masterList.findIndex(x => x.id == myMan.id);
	followers.innerHTML = `${myMan.current_count} followers (${printOrdinal(index+1)})`;
	*/ const handle = document.createElement("a");
    handle.setAttribute("class", "handle");
    handle.innerHTML = myMan.twitter_name;
    handle.href = "https://twitter.com/" + myMan.twitter_name;
    handle.setAttribute("target", "_blank");
    plate.appendChild(name);
    //plate.appendChild(followers);
    plate.appendChild($9255a96f441295c6$var$USMNTtrackerLink(myMan));
    plate.appendChild(handle);
    return plate;
}
async function $9255a96f441295c6$var$show(x) {
    console.log(x);
    return 1;
}
async function $9255a96f441295c6$var$cleanRecord(row) {
    const rec = row[0];
    const unNeededColumns = [
        "id",
        "first_name",
        "last_name",
        "twitter_name",
        "current_count"
    ];
    const data = [];
    for(const property in rec)if (!unNeededColumns.includes(property)) data.push({
        x: $9255a96f441295c6$var$daysSinceLaunch($9255a96f441295c6$var$createDate(property)),
        y: rec[property]
    });
    const player = {
        id: rec.id,
        first_name: rec.first_name,
        last_name: rec.last_name,
        twitter_name: rec.twitter_name,
        current_count: rec.current_count
    };
    return {
        bio: player,
        info: data
    };
}
async function $9255a96f441295c6$var$createFollowersGraph(myMan) {
    const record = await fetch(`/id/${myMan.id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then((response)=>response.json()).then($9255a96f441295c6$var$cleanRecord);
    const graph = document.createElement("canvas");
    new (0, $a2cd264cd732c23b$export$2e2bcd8739ae039)(graph, {
        type: "line",
        options: {
            scales: {
                x: {
                    type: "linear",
                    ticks: {
                        callback: function(value, index, ticks) {
                            return $9255a96f441295c6$var$dateFromLaunch(value);
                        }
                    }
                }
            }
        },
        data: {
            datasets: [
                {
                    //label: record.bio.twitter_name,
                    label: "followers",
                    data: $9255a96f441295c6$var$filterInfo(record.info, 40)
                }
            ]
        }
    });
    return graph;
}
async function $9255a96f441295c6$var$createMentionsGraph(myMan) {
    const record = await fetch(`/mentions/id/${myMan.id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then((response)=>response.json());
    const weeklyData = JSON.parse(record.twitter_report);
    console.log(weeklyData.data.map((x)=>x.tweet_count));
    const graph = document.createElement("canvas");
    new (0, $a2cd264cd732c23b$export$2e2bcd8739ae039)(graph, {
        type: "bar",
        data: {
            labels: weeklyData.data.map((x)=>x.start.split("T")[0].substring(5)),
            datasets: [
                {
                    label: "mentions over last week",
                    data: weeklyData.data.map((x)=>x.tweet_count)
                }
            ]
        }
    });
    return graph;
}
async function $9255a96f441295c6$var$loadPlayer(playerId) {
    const index = $9255a96f441295c6$var$masterList.findIndex((x)=>x.id == playerId);
    const player = $9255a96f441295c6$var$masterList[index];
    const cardsOnDisplay = document.querySelectorAll(".cards");
    cardsOnDisplay.forEach((card)=>{
        if (card.id == "card-" + player.id) return;
    });
    const newNode = document.createElement("div");
    newNode.setAttribute("class", "card");
    newNode.id = "card-" + player.id;
    const namePlate = $9255a96f441295c6$var$createNamePlate(player);
    newNode.appendChild(namePlate);
    const graphStage = document.createElement("div");
    graphStage.setAttribute("class", "graph-stage");
    newNode.appendChild(graphStage);
    const chart1 = await $9255a96f441295c6$var$createFollowersGraph(player);
    const graphWrapper = document.createElement("div");
    graphWrapper.setAttribute("class", "wrapper");
    graphWrapper.appendChild(chart1);
    graphStage.appendChild(graphWrapper);
    const chart2 = await $9255a96f441295c6$var$createMentionsGraph(player);
    const gwrap = document.createElement("div");
    gwrap.setAttribute("class", "wrapper");
    gwrap.appendChild(chart2);
    graphStage.appendChild(gwrap);
    $9255a96f441295c6$var$stage.appendChild(newNode);
}
function $9255a96f441295c6$var$removePlayer(playerId) {
    const cardsOnDisplay = document.querySelectorAll(".card");
    cardsOnDisplay.forEach((card)=>{
        if (card.id == "card-" + playerId) card.remove();
    });
}
function $9255a96f441295c6$var$printOrdinal(x) {
    let suffix = "th";
    switch(x % 10){
        case 1:
            suffix = "st";
            break;
        case 2:
            suffix = "nd";
            break;
        case 3:
            suffix = "rd";
            break;
    }
    return x + suffix;
}
//---------------------------------------------------------
//--------  load master list of players -------------------
//---- in order of twitter followers (descending) ---------
//---------and populate alphaList of not-null -------------
//---------------------------------------------------------
const $9255a96f441295c6$var$masterListRequest = new XMLHttpRequest();
$9255a96f441295c6$var$masterListRequest.onload = function() {
    const tempList = JSON.parse($9255a96f441295c6$var$masterListRequest.response);
    tempList.forEach((x)=>{
        const y = Object.assign({}, x);
        $9255a96f441295c6$var$masterList.push(y);
    });
    $9255a96f441295c6$var$masterList.forEach((x)=>{
        if (x.twitter_name != null) $9255a96f441295c6$var$alphaList.push(x);
    });
    $9255a96f441295c6$var$alphaList.sort((a, b)=>{
        if (a.last_name.toUpperCase() < b.last_name.toUpperCase()) return -1;
        else return 1;
    });
    let listNum = 0;
    $9255a96f441295c6$var$alphaList.forEach((x)=>{
        const temp = document.createElement("li");
        temp.setAttribute("class", "list-name");
        temp.innerHTML = `${x.first_name} ${x.last_name}`;
        temp.id = "list-name-" + x.id;
        $9255a96f441295c6$var$namesList.appendChild(temp);
    });
    $9255a96f441295c6$var$namesList.style.display = "none";
    $9255a96f441295c6$var$add.appendChild($9255a96f441295c6$var$namesList);
};
$9255a96f441295c6$var$masterListRequest.open("GET", "master", false);
$9255a96f441295c6$var$masterListRequest.send();
//---------------------------------------------------------
//------------ manage stage  ------------------------------
//---------------------------------------------------------
$9255a96f441295c6$var$add.addEventListener("click", ()=>{
    if ($9255a96f441295c6$var$namesList.style.display == "none") $9255a96f441295c6$var$namesList.style.display = "block";
    else $9255a96f441295c6$var$namesList.style.display = "none";
});
$9255a96f441295c6$var$clear.addEventListener("click", ()=>{
    const cardsOnDisplay = document.querySelectorAll(".card");
    cardsOnDisplay.forEach((card)=>card.remove());
});
$9255a96f441295c6$var$namesList.addEventListener("click", (e)=>{
    const player_id = e.target.id.split("-")[2];
    $9255a96f441295c6$var$loadPlayer(player_id);
});
$9255a96f441295c6$var$stage.addEventListener("click", (e)=>{
    const player_id = e.target.id.split("-")[1];
    $9255a96f441295c6$var$removePlayer(player_id);
});


//# sourceMappingURL=index.206c2610.js.map
