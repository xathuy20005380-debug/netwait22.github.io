(function () {
  'use strict';
  var CHAINS = [{"key": "trc20", "label": "USDT-TRC20", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"34\" height=\"34\" aria-hidden=\"true\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#EF0027\"/><path d=\"M23.1 23.3l8.1 1.4-4.7 6.9-3.4-8.3zm1.3 1.1l2.1 5.1 1.1-4.1-3.2-1zm4.1 1.2l-.9 3.4 2.4-3.1-1.5-.3z\" fill=\"#FFFFFF\"/></svg>"}, {"key": "erc20", "label": "USDT-ERC20", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"34\" height=\"34\" aria-hidden=\"true\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#627EEA\"/><path d=\"M27 21.8v3.85l3.25 1.45L27 21.8z\" fill=\"#FFFFFF\" fill-opacity=\"0.72\"/><path d=\"M27 21.8l-3.25 5.3 3.25-1.45V21.8z\" fill=\"#FFFFFF\"/><path d=\"M27 29.55v2.65l3.25-4.5L27 29.55z\" fill=\"#FFFFFF\" fill-opacity=\"0.72\"/><path d=\"M27 32.2v-2.65l-3.25-1.85L27 32.2z\" fill=\"#FFFFFF\"/><path d=\"M27 28.95l3.25-1.85L27 25.65v3.3z\" fill=\"#FFFFFF\" fill-opacity=\"0.45\"/><path d=\"M23.75 27.1L27 28.95v-3.3l-3.25 1.45z\" fill=\"#FFFFFF\" fill-opacity=\"0.82\"/></svg>"}, {"key": "bep20", "label": "USDT-BEP20", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"34\" height=\"34\" aria-hidden=\"true\"><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#F3BA2F\"/><path d=\"M27 22.7l1.85 1.85-1.85 1.85-1.85-1.85L27 22.7zm-4.3 4.3l1.45-1.45 1.45 1.45-1.45 1.45L22.7 27zm8.6 0l-1.45 1.45-1.45-1.45 1.45-1.45L31.3 27zM27 31.3l-1.85-1.85L27 27.6l1.85 1.85L27 31.3zm0-5.45l1.15 1.15L27 28.15 25.85 27 27 25.85z\" fill=\"#FFFFFF\"/></svg>"}, {"key": "solana", "label": "USDT-Solana", "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 36 36\" width=\"34\" height=\"34\" aria-hidden=\"true\"><defs><linearGradient id=\"solChainGrad\" x1=\"20\" y1=\"20\" x2=\"34\" y2=\"34\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0%\" stop-color=\"#00FFA3\"/><stop offset=\"100%\" stop-color=\"#DC1FFF\"/></linearGradient></defs><circle cx=\"15.5\" cy=\"15.5\" r=\"13.5\" fill=\"#26A17B\"/><path d=\"M17.35 16.42v-.01c-.1.01-.63.04-1.82.04-1.02 0-1.63-.03-1.86-.04v.01c-3.55-.16-6.2-.78-6.2-1.52 0-.74 2.65-1.36 6.2-1.52v2.43c.24.02.86.05 1.88.05 1.15 0 1.71-.04 1.8-.05v-2.43c3.54.16 6.19.78 6.19 1.52 0 .74-2.65 1.36-6.19 1.52zm0-3.29v-2.17h5.05V7.95H8.62v3.01h5.05v2.17c-4.02.18-7.04.98-7.04 1.94 0 .96 3.02 1.76 7.04 1.94v6.95h3.68v-6.95c4.01-.18 7.03-.98 7.03-1.94 0-.96-3.02-1.76-7.03-1.94z\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"8.2\" fill=\"#FFFFFF\"/><circle cx=\"27\" cy=\"27\" r=\"7\" fill=\"#111827\"/><path d=\"M23.5 29.2c.1-.1.25-.15.4-.15h6.8c.25 0 .38.3.2.48l-1.3 1.32c-.1.1-.25.15-.4.15h-6.8c-.25 0-.38-.3-.2-.48l1.3-1.32zm0-5.4c.1-.1.25-.15.4-.15h6.8c.25 0 .38.3.2.48l-1.3 1.32c-.1.1-.25.15-.4.15h-6.8c-.25 0-.38-.3-.2-.48l1.3-1.32zm6.1 2.7c-.1-.1-.25-.15-.4-.15h-6.8c-.25 0-.38.3-.2.48l1.3 1.32c.1.1.25.15.4.15h6.8c.25 0 .38-.3.2-.48l-1.3-1.32z\" fill=\"url(#solChainGrad)\"/></svg>"}];
  var cdTimer = null;

  function showToast(msg, type) {
    var wrap = document.getElementById('wwk-toast-wrap');
    if (!wrap) return;
    var el = document.createElement('div');
    el.className = 'wwk-toast ' + (type === 'error' ? 'is-err' : (type === 'success' ? 'is-ok' : ''));
    el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 3000);
  }

  // Mobile Menu
  var burger = document.getElementById('wwk-burger');
  var drawer = document.getElementById('wwk-drawer');
  function closeDrawer() {
    if (!burger || !drawer) return;
    drawer.setAttribute('hidden', '');
    burger.textContent = '☰';
    burger.setAttribute('aria-expanded', 'false');
  }
  if (burger && drawer) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isHidden = drawer.hasAttribute('hidden');
      if (isHidden) {
        drawer.removeAttribute('hidden');
        burger.textContent = '×';
        burger.setAttribute('aria-expanded', 'true');
      } else {
        closeDrawer();
      }
    });
    document.addEventListener('click', function (e) {
      if (!drawer.hasAttribute('hidden') && !drawer.contains(e.target) && e.target !== burger) {
        closeDrawer();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  // Homepage Category Filter
  var catLinks = document.querySelectorAll('.wwk-catbar a[data-cat]');
  var cards = document.querySelectorAll('.wwk-grid .wwk-card[data-cat]');
  if (catLinks.length && cards.length) {
    catLinks.forEach(function (lnk) {
      lnk.addEventListener('click', function (e) {
        e.preventDefault();
        var targetCat = lnk.getAttribute('data-cat');
        catLinks.forEach(function (x) { x.classList.remove('is-active'); });
        lnk.classList.add('is-active');
        cards.forEach(function (c) {
          c.style.display = (targetCat === 'all' || c.getAttribute('data-cat') === targetCat) ? '' : 'none';
        });
      });
    });
  }

  // Utility Modals (Query & Ticket)
  var mask = document.getElementById('wwk-util-mask');
  function closeMask() {
    if (cdTimer) { clearInterval(cdTimer); cdTimer = null; }
    if (mask) { mask.setAttribute('hidden', ''); mask.innerHTML = ''; }
  }
  if (mask) {
    mask.addEventListener('click', function (e) {
      if (e.target === mask) closeMask();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !mask.hasAttribute('hidden')) closeMask();
    });
  }

  document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeDrawer();
      var mode = btn.getAttribute('data-open-modal');
      if (!mask) return;
      if (mode === 'query') {
        mask.innerHTML = '<div class="wwk-modal wwk-modal-sm">' +
          '<button type="button" class="wwk-modal-close" aria-label="关闭">×</button>' +
          '<h2 style="margin-top:0">自助订单查询</h2>' +
          '<div class="wwk-field"><label>订单编号</label><input class="wwk-input" id="wwk-q-oid" placeholder="例如 WWK20261120..."></div>' +
          '<div class="wwk-field"><label>收货电子邮箱</label><input class="wwk-input" id="wwk-q-mail" type="email" placeholder="下单时填写的邮箱"></div>' +
          '<button type="button" class="wwk-buy-btn" id="wwk-q-sub">立即查询订单</button>' +
          '<p id="wwk-q-res" style="margin:12px 0 0;font-size:13.5px;color:#52525B"></p></div>';
      } else {
        mask.innerHTML = '<div class="wwk-modal wwk-modal-sm">' +
          '<button type="button" class="wwk-modal-close" aria-label="关闭">×</button>' +
          '<h2 style="margin-top:0">提交售后工单</h2>' +
          '<div class="wwk-field"><label>订单编号</label><input class="wwk-input" id="wwk-t-oid" placeholder="例如 WWK20261120..."></div>' +
          '<div class="wwk-field"><label>下单邮箱</label><input class="wwk-input" id="wwk-t-mail" type="email" placeholder="用于接收处理结果"></div>' +
          '<div class="wwk-field"><label>异常类型</label><select class="wwk-input" id="wwk-t-type"><option>首登密码或辅助验证异常</option><option>未收到自动发货卡密</option><option>规格参数核对不符</option><option>其他问题咨询</option></select></div>' +
          '<div class="wwk-field"><label>问题描述</label><textarea class="wwk-input" id="wwk-t-desc" style="height:88px;padding:10px 13px" placeholder="请简述遇到的情况与截图时间"></textarea></div>' +
          '<button type="button" class="wwk-buy-btn" id="wwk-t-sub">提交工单申请</button></div>';
      }
      mask.removeAttribute('hidden');
      var cb = mask.querySelector('.wwk-modal-close');
      if (cb) cb.addEventListener('click', closeMask);
      var qSub = document.getElementById('wwk-q-sub');
      if (qSub) qSub.addEventListener('click', function () {
        var oid = document.getElementById('wwk-q-oid').value.trim();
        var ml = document.getElementById('wwk-q-mail').value.trim();
        if (!oid || !ml) { showToast('请填写订单编号与收货邮箱', 'error'); return; }
        document.getElementById('wwk-q-res').textContent = '已收到查询请求，若订单已完成付款，卡密已投递至 ' + ml + '（请同步检查垃圾邮件箱）。';
        showToast('订单状态已核对', 'success');
      });
      var tSub = document.getElementById('wwk-t-sub');
      if (tSub) tSub.addEventListener('click', function () {
        var oid = document.getElementById('wwk-t-oid').value.trim();
        var ml = document.getElementById('wwk-t-mail').value.trim();
        var ds = document.getElementById('wwk-t-desc').value.trim();
        if (!oid || !ml || !ds) { showToast('请完整填写订单号、邮箱及问题描述', 'error'); return; }
        showToast('售后工单已受理，结果将发送至您的邮箱', 'success');
        closeMask();
      });
    });
  });

  // Detail Page Checkout & Payment Modal
  var chainGrid = document.getElementById('wwk-chain-grid');
  var buyBtn = document.getElementById('wwk-buy-btn');
  if (chainGrid && buyBtn) {
    var selectedChain = CHAINS[0];
    var qtyInput = document.getElementById('wwk-qty');
    var totalEl = document.getElementById('wwk-total-val');
    var unitPrice = parseFloat(buyBtn.getAttribute('data-price') || '0');
    var productName = buyBtn.getAttribute('data-title') || '精选小红书账号';

    function updateTotal() {
      var q = Math.max(1, parseInt(qtyInput.value || '1', 10) || 1);
      qtyInput.value = q;
      totalEl.textContent = '$' + (unitPrice * q).toFixed(2) + ' USD';
    }
    document.getElementById('wwk-qty-dec').addEventListener('click', function () {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
      updateTotal();
    });
    document.getElementById('wwk-qty-inc').addEventListener('click', function () {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
      updateTotal();
    });
    qtyInput.addEventListener('change', updateTotal);

    CHAINS.forEach(function (ch, idx) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'wwk-chain-btn' + (idx === 0 ? ' is-active' : '');
      b.innerHTML = ch.svg + '<span>' + ch.label + '</span>';
      b.addEventListener('click', function () {
        selectedChain = ch;
        chainGrid.querySelectorAll('.wwk-chain-btn').forEach(function (x) { x.classList.remove('is-active'); });
        b.classList.add('is-active');
      });
      chainGrid.appendChild(b);
    });

    function openPaymentModal(email, qty, totalStr, orderId, chainObj) {
      var nodes = window.WWK_SETTLE_NODES || {};
      var addr = nodes[chainObj.key] || '';
      mask.innerHTML =
        '<div class="wwk-modal">' +
        '<button type="button" class="wwk-modal-close" aria-label="关闭">×</button>' +
        '<div class="wwk-pay-grid">' +
          '<div class="wwk-pay-left">' +
            '<div class="wwk-cd-box">' +
              '<div class="wwk-cd-top">请在规定时间内完成支付</div>' +
              '<div class="wwk-cd-time" id="wwk-cd-clock">15:00</div>' +
              '<small>订单将在倒计时结束后自动取消</small>' +
            '</div>' +
            '<div class="wwk-order-box">' +
              '<div class="wwk-order-row"><span>已选商品</span><strong>' + productName + ' × ' + qty + '</strong></div>' +
              '<div class="wwk-order-row"><span>收件邮箱</span><strong>' + email + '</strong></div>' +
              '<div class="wwk-order-row"><span>订单编号</span><strong class="wwk-num">' + orderId + '</strong></div>' +
              '<div class="wwk-order-row"><span>结算方式</span><strong>' + chainObj.label + '</strong></div>' +
              '<div class="wwk-order-row"><span>应付总额</span><strong class="wwk-num" style="color:#FF2442">' + totalStr + '</strong></div>' +
            '</div>' +
          '</div>' +
          '<div class="wwk-pay-right">' +
            '<div class="wwk-addr-bar"><code id="wwk-pay-addr">' + addr + '</code>' +
            '<button type="button" class="wwk-copy-btn" id="wwk-copy-addr">复制地址</button></div>' +
            '<div class="wwk-qr-box" id="wwk-qr-wrap"></div>' +
            '<p class="wwk-pay-guide">请使用支持 ' + chainObj.label + ' 的钱包扫码支付，请核对转账网络</p>' +
            '<p class="wwk-pay-sub">付款完成后自动发卡至上方收件邮箱</p>' +
          '</div>' +
        '</div></div>';
      mask.removeAttribute('hidden');
      mask.querySelector('.wwk-modal-close').addEventListener('click', closeMask);

      var qrWrap = document.getElementById('wwk-qr-wrap');
      if (qrWrap && typeof window.drawChainQr === 'function') {
        try {
          var cv = document.createElement('canvas');
          qrWrap.appendChild(cv);
          window.drawChainQr(cv, addr, chainObj.label, '#FF2442');
        } catch (err) {}
      }

      var copyBtn = document.getElementById('wwk-copy-addr');
      if (copyBtn) {
        copyBtn.addEventListener('click', function () {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(addr).then(function () {
              copyBtn.textContent = '已复制 ✓';
              showToast('收款地址已复制', 'success');
            });
          } else {
            copyBtn.textContent = '已复制 ✓';
            showToast('收款地址已复制', 'success');
          }
        });
      }

      var remain = 15 * 60;
      var clockEl = document.getElementById('wwk-cd-clock');
      if (cdTimer) clearInterval(cdTimer);
      cdTimer = setInterval(function () {
        remain--;
        if (remain <= 0) {
          clearInterval(cdTimer);
          if (clockEl) clockEl.textContent = '00:00';
          return;
        }
        var m = String(Math.floor(remain / 60)).padStart(2, '0');
        var s = String(remain % 60).padStart(2, '0');
        if (clockEl) clockEl.textContent = m + ':' + s;
      }, 1000);
    }

    buyBtn.addEventListener('click', function () {
      var mailInput = document.getElementById('wwk-buyer-email');
      var email = (mailInput ? mailInput.value : '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('请先填写有效的收货电子邮箱', 'error');
        if (mailInput) mailInput.focus();
        return;
      }
      var qty = Math.max(1, parseInt(qtyInput.value || '1', 10) || 1);
      var totalStr = '$' + (unitPrice * qty).toFixed(2) + ' USD';
      var origHtml = buyBtn.innerHTML;
      buyBtn.disabled = true;
      buyBtn.textContent = '正在创建订单...';
      setTimeout(function () {
        buyBtn.textContent = '订单已生成，正在调起支付';
        showToast('订单已生成，请在弹窗完成支付', 'info');
        setTimeout(function () {
          var oid = 'WWK' + Date.now().toString().slice(-8);
          buyBtn.disabled = false;
          buyBtn.innerHTML = origHtml;
          openPaymentModal(email, qty, totalStr, oid, selectedChain);
        }, 280);
      }, 520);
    });
  }
})();
