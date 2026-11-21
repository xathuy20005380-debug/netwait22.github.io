(function (_gb941a) {
  'use strict';

  var _exa3fe94 = new Array(256), _lg947087e = new Array(256);
  for (var _a87 = 0; _a87 < 8; _a87++) _exa3fe94[_a87] = 1 << _a87;
  for (var _b44235 = 8; _b44235 < 256; _b44235++) _exa3fe94[_b44235] = _exa3fe94[_b44235 - 4] ^ _exa3fe94[_b44235 - 5] ^ _exa3fe94[_b44235 - 6] ^ _exa3fe94[_b44235 - 8];
  for (var _c55030 = 0; _c55030 < 255; _c55030++) _lg947087e[_exa3fe94[_c55030]] = _c55030;
  function _gl036135(n) { if (n < 1) throw new Error('gf'); return _lg947087e[n]; }
  function _gx35ba3(n) { while (n < 0) n += 255; while (n >= 256) n -= 255; return _exa3fe94[n]; }

  function _Pl32a0(num, shift) {
    var off = 0;
    while (off < num.length && num[off] === 0) off++;
    this.num = new Array(num.length - off + shift);
    for (var i = 0; i < num.length - off; i++) this.num[i] = num[i + off];
    for (var i = num.length - off; i < this.num.length; i++) this.num[i] = 0;
  }
  _Pl32a0.prototype.get = function (i) { return this.num[i]; };
  _Pl32a0.prototype.len = function () { return this.num.length; };
  _Pl32a0.prototype.mul = function (e) {
    var num = new Array(this.len() + e.len() - 1);
    for (var k = 0; k < num.length; k++) num[k] = 0;
    for (var i = 0; i < this.len(); i++) {
      for (var j = 0; j < e.len(); j++) {
        if (this.get(i) !== 0 && e.get(j) !== 0) {
          num[i + j] ^= _gx35ba3(_gl036135(this.get(i)) + _gl036135(e.get(j)));
        }
      }
    }
    return new _Pl32a0(num, 0);
  };
  _Pl32a0.prototype.mod = function (e) {
    if (this.len() - e.len() < 0) return this;
    var ratio = _gl036135(this.get(0)) - _gl036135(e.get(0));
    var num = this.num.slice();
    for (var i = 0; i < e.len(); i++) num[i] ^= _gx35ba3(_gl036135(e.get(i)) + ratio);
    return new _Pl32a0(num, 0).mod(e);
  };

  function _epfc0(len) {
    var a = new _Pl32a0([1], 0);
    for (var i = 0; i < len; i++) a = a.mul(new _Pl32a0([1, _gx35ba3(i)], 0));
    return a;
  }

  var _rs9145 = {
    1:  [[1, 26, 9]],
    2:  [[1, 44, 16]],
    3:  [[2, 35, 13]],
    4:  [[4, 25, 9]],
    5:  [[2, 33, 11], [2, 34, 12]],
    6:  [[4, 43, 15]],
    7:  [[4, 39, 13], [1, 40, 14]],
    8:  [[4, 40, 14], [2, 41, 15]],
    9:  [[4, 36, 12], [4, 37, 13]],
    10: [[6, 43, 15], [2, 44, 16]]
  };
  var _alc39c595 = {
    1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30],
    6: [6, 34], 7: [6, 22, 38], 8: [6, 24, 42], 9: [6, 26, 46], 10: [6, 28, 50]
  };
  function _bd595c(d) { var c = 0; while (d !== 0) { c++; d >>>= 1; } return c; }
  var _bt915b7 = function (d) {
    var c = d << 10;
    while (_bd595c(c) - _bd595c(1335) >= 0) c ^= 1335 << (_bd595c(c) - _bd595c(1335));
    return ((d << 10) | c) ^ 21522;
  };
  var _bv7d5b = function (d) {
    var c = d << 12;
    while (_bd595c(c) - _bd595c(7973) >= 0) c ^= 7973 << (_bd595c(c) - _bd595c(7973));
    return (d << 12) | c;
  };

  function _mkf6c0(text) {
    var bytes = [];
    for (var i = 0; i < text.length; i++) {
      var code = text.charCodeAt(i);
      bytes.push(code < 128 ? code : 63);
    }
    var ver = 1;
    for (var v = 1; v <= 10; v++) {
      var cap = 0;
      _rs9145[v].forEach(function (b) { cap += b[0] * b[2]; });
      var hdrBits = v >= 10 ? 16 : 8;
      if (bytes.length * 8 + 4 + hdrBits <= cap * 8) { ver = v; break; }
      if (v === 10) ver = 10;
    }
    var rsBlocks = [];
    _rs9145[ver].forEach(function (b) {
      for (var k = 0; k < b[0]; k++) rsBlocks.push({ total: b[1], data: b[2] });
    });
    var totalDataBytes = rsBlocks.reduce(function (s, b) { return s + b.data; }, 0);
    var bits = [];
    function pushBits(val, len) {
      for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1);
    }
    pushBits(4, 4);
    pushBits(bytes.length, ver >= 10 ? 16 : 8);
    for (var i = 0; i < bytes.length; i++) pushBits(bytes[i], 8);
    if (bits.length + 4 <= totalDataBytes * 8) pushBits(0, 4);
    while (bits.length % 8 !== 0) bits.push(0);
    var padIdx = 0;
    while (bits.length < totalDataBytes * 8) {
      pushBits(padIdx % 2 === 0 ? 0xEC : 0x11, 8);
      padIdx++;
    }
    var dataBytes = [];
    for (var i = 0; i < bits.length; i += 8) {
      var b = 0;
      for (var j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
      dataBytes.push(b);
    }
    var offset = 0, dcList = [], ecList = [], maxDc = 0, maxEc = 0;
    rsBlocks.forEach(function (blk) {
      var dc = dataBytes.slice(offset, offset + blk.data);
      offset += blk.data;
      var ecLen = blk.total - blk.data;
      maxDc = Math.max(maxDc, dc.length);
      maxEc = Math.max(maxEc, ecLen);
      var rsPoly = _epfc0(ecLen);
      var rawPoly = new _Pl32a0(dc, rsPoly.len() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      var ec = [];
      for (var i = 0; i < ecLen; i++) {
        var idx = i + modPoly.len() - ecLen;
        ec.push(idx >= 0 ? modPoly.get(idx) : 0);
      }
      dcList.push(dc);
      ecList.push(ec);
    });
    var finalBytes = [];
    for (var i = 0; i < maxDc; i++) dcList.forEach(function (dc) { if (i < dc.length) finalBytes.push(dc[i]); });
    for (var i = 0; i < maxEc; i++) ecList.forEach(function (ec) { if (i < ec.length) finalBytes.push(ec[i]); });

    var n = ver * 4 + 17;
    var bestM = null, bestPenalty = 1e9;
    for (var mask = 0; mask < 8; mask++) {
      var m = Array.from({ length: n }, function () { return new Array(n).fill(null); });
      function placeFinder(r, c) {
        for (var dr = -1; dr <= 7; dr++) {
          for (var dc = -1; dc <= 7; dc++) {
            var rr = r + dr, cc = c + dc;
            if (rr < 0 || rr >= n || cc < 0 || cc >= n) continue;
            var on = (dr >= 0 && dr <= 6 && (dc === 0 || dc === 6)) ||
                     (dc >= 0 && dc <= 6 && (dr === 0 || dr === 6)) ||
                     (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4);
            m[rr][cc] = on ? 1 : 0;
          }
        }
      }
      placeFinder(0, 0); placeFinder(0, n - 7); placeFinder(n - 7, 0);
      var pos = _alc39c595[ver];
      for (var a = 0; a < pos.length; a++) {
        for (var b = 0; b < pos.length; b++) {
          var ar = pos[a], ac = pos[b];
          if (m[ar][ac] !== null) continue;
          for (var dr = -2; dr <= 2; dr++) {
            for (var dc = -2; dc <= 2; dc++) {
              m[ar + dr][ac + dc] = (Math.abs(dr) === 2 || Math.abs(dc) === 2 || (dr === 0 && dc === 0)) ? 1 : 0;
            }
          }
        }
      }
      for (var i = 8; i < n - 8; i++) {
        if (m[i][6] === null) m[i][6] = (i % 2 === 0) ? 1 : 0;
        if (m[6][i] === null) m[6][i] = (i % 2 === 0) ? 1 : 0;
      }
      m[n - 8][8] = 1;
      var fmt = _bt915b7((2 << 3) | mask);
      for (var i = 0; i < 15; i++) {
        var mod = (fmt >>> i) & 1;
        if (i < 6) m[i][8] = mod;
        else if (i < 8) m[i + 1][8] = mod;
        else m[n - 15 + i][8] = mod;
        if (i < 8) m[8][n - i - 1] = mod;
        else if (i < 9) m[8][15 - i] = mod;
        else m[8][15 - i - 1] = mod;
      }
      if (ver >= 7) {
        var vb = _bv7d5b(ver);
        for (var i = 0; i < 18; i++) {
          var mod = (vb >>> i) & 1;
          m[Math.floor(i / 3)][i % 3 + n - 11] = mod;
          m[i % 3 + n - 11][Math.floor(i / 3)] = mod;
        }
      }
      var inc = -1, row = n - 1, bitIdx = 7, byteIdx = 0;
      for (var col = n - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (m[row][col - c] === null) {
              var dark = false;
              if (byteIdx < finalBytes.length) dark = ((finalBytes[byteIdx] >>> bitIdx) & 1) === 1;
              var r0 = row, c0 = col - c;
              var cond = mask === 0 ? (r0 + c0) % 2 === 0 :
                         mask === 1 ? r0 % 2 === 0 :
                         mask === 2 ? c0 % 3 === 0 :
                         mask === 3 ? (r0 + c0) % 3 === 0 :
                         mask === 4 ? (Math.floor(r0 / 2) + Math.floor(c0 / 3)) % 2 === 0 :
                         mask === 5 ? ((r0 * c0) % 2 + (r0 * c0) % 3) === 0 :
                         mask === 6 ? (((r0 * c0) % 2 + (r0 * c0) % 3) % 2) === 0 :
                                      (((r0 + c0) % 2 + (r0 * c0) % 3) % 2) === 0;
              m[row][col - c] = (cond ? !dark : dark) ? 1 : 0;
              bitIdx--;
              if (bitIdx < 0) { byteIdx++; bitIdx = 7; }
            }
          }
          row += inc;
          if (row < 0 || row >= n) { row -= inc; inc = -inc; break; }
        }
      }
      var penalty = 0;
      for (var r = 0; r < n; r++) {
        var run = 1;
        for (var c = 1; c < n; c++) {
          if (m[r][c] === m[r][c - 1]) { run++; if (run === 5) penalty += 3; else if (run > 5) penalty++; }
          else run = 1;
        }
      }
      for (var c = 0; c < n; c++) {
        var run = 1;
        for (var r = 1; r < n; r++) {
          if (m[r][c] === m[r - 1][c]) { run++; if (run === 5) penalty += 3; else if (run > 5) penalty++; }
          else run = 1;
        }
      }
      if (penalty < bestPenalty) { bestPenalty = penalty; bestM = m; }
    }
    return bestM;
  }

  function _bg5e95(ctx, sz, chainName, accentColor) {
    var r = 16, cx = sz / 2, cy = sz / 2;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, r + 3, 0, Math.PI * 2);
    ctx.fill();
    var cStr = String(chainName || '');
    var col = accentColor || '#EF4444';
    if (cStr.indexOf('ERC20') >= 0) col = '#627EEA';
    else if (cStr.indexOf('BEP20') >= 0) col = '#F3BA2F';
    else if (cStr.indexOf('Solana') >= 0) col = '#14F195';
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = (cStr.indexOf('BEP20') >= 0 || cStr.indexOf('Solana') >= 0) ? '#111827' : '#FFFFFF';
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(cStr.replace('USDT-', '').slice(0, 3).toUpperCase(), cx, cy + 0.5);
  }
  function _fb0e46(ctx, sz, addr) {
    try {
      ctx.fillStyle = '#FFFFFF'; ctx.fillRect(0, 0, sz, sz);
      ctx.strokeStyle = '#111827'; ctx.lineWidth = 4;
      ctx.strokeRect(12, 12, 28, 28); ctx.strokeRect(sz - 40, 12, 28, 28); ctx.strokeRect(12, sz - 40, 28, 28);
      ctx.fillStyle = '#111827'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
      ctx.fillText(String(addr || '').slice(0, 14) + '...', sz / 2, sz / 2);
    } catch (ignore) {}
  }

  _gb941a['drawChainQr'] = function (el, targetAddr, netType, tint) {
    if (!el) return;
    if (!el.getContext) {
      el.innerHTML = '';
      var _cv = document.createElement('canvas');
      el.appendChild(_cv);
      el = _cv;
    }
    if (typeof netType === 'number') netType = 'trc20';
    var dim = 184, pad = 10;
    el.width = dim; el.height = dim;
    var g = el.getContext('2d');
    if (!g) return;
    try {
      var grid = _mkf6c0(String(targetAddr || ''));
      var cnt = grid.length, unit = (dim - pad * 2) / cnt;
      g.fillStyle = '#FFFFFF';
      g.fillRect(0, 0, dim, dim);
      g.fillStyle = '#1E293B';
      for (var y = 0; y < cnt; y++) {
        var x = 0;
        while (x < cnt) {
          if (grid[y][x] === 1) {
            var span = 1;
            while (x + span < cnt && grid[y][x + span] === 1) span++;
            g.fillRect(Math.floor(pad + x * unit), Math.floor(pad + y * unit), Math.ceil(span * unit), Math.ceil(unit));
            x += span;
          } else { x++; }
        }
      }
      _bg5e95(g, dim, netType, tint);
    } catch (err) { _fb0e46(g, dim, targetAddr); }
  };

})(window);