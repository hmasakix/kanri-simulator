// ---------- データ ----------
const ICON = {
  building: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="3" width="10" height="18"/><path d="M14 9h6v12h-6M7 7h1M10 7h1M7 11h1M10 11h1M7 15h1M10 15h1"/></svg>',
  chat: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12c0-4 3.6-7 8-7s8 3 8 7-3.6 7-8 7c-1.2 0-2.3-.2-3.3-.6L4 20l1.3-3.6C4.5 15.1 4 13.6 4 12z"/><circle cx="8.5" cy="12" r=".6" fill="currentColor"/><circle cx="12" cy="12" r=".6" fill="currentColor"/><circle cx="15.5" cy="12" r=".6" fill="currentColor"/></svg>',
  yen: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 3l3 4 3-4M6 7v6M4 9h4M4 11h4M8 20l12-12M15 8h5v5"/></svg>',
  person: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
  tool: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M14.5 6.5a4 4 0 015 5l-9 9-3-3 9-9a4 4 0 01-2-2zM5 3l3 3-2 2-3-3"/></svg>',
  calc: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 6h8v3H8zM8 13h1M12 13h1M16 13h0M8 17h1M12 17h1M16 13v4"/></svg>',
  people: '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="8" r="3.5"/><circle cx="16" cy="9" r="3"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6M16 14c3 0 6 2 6 5"/></svg>'
};

const CONCERNS = [
  { id: 'vacancy',   label: '空室がなかなか埋まらない',     icon: 'building', point: 15, solve: '空室に対して、募集戦略の見直しと改善提案を行います' },
  { id: 'proposal',  label: '管理会社から提案がない',       icon: 'chat',     point: 10, solve: '専任担当が物件の状況を定期的に分析し、空室対策や収益改善策をこちらからご提案します' },
  { id: 'rent',      label: '家賃が下がり続けている',       icon: 'yen',      point: 12, solve: '周辺の相場や需要を調査し、適正な家賃設定と家賃を維持するための改善策をご提案します' },
  { id: 'staff',     label: '担当者の対応に不満がある',     icon: 'person',   point: 10, solve: '専任担当がオーナー様の窓口となり、迅速なご連絡と定期的なご報告で安心してお任せいただけます' },
  { id: 'building',  label: '建物が古く、修繕が不安',       icon: 'tool',     point: 8, solve: '建物の状態を診断し、長期修繕計画をご提案します' },
  { id: 'cost',      label: '修繕費やコストが高い気がする', icon: 'calc',     point: 8, solve: '修繕費の見直しやコスト削減のアドバイスをします' },
  { id: 'inherit',   label: '相続や資産活用の相談がしたい', icon: 'people',   point: 5, solve: '相続や資産活用の専門家と連携し、トータルでサポートします' }
];
const OTHER_POINT = 5;
// 結果画面「スタッフからひとこと」（見出しは「IFCスタッフ　〇〇より」）
const STAFF = [
  { img: 'staff-1.png', name: '矢嶋' },
  { img: 'staff-2.png', name: '佐藤' },
  { img: 'staff-3.png', name: '小山' },
  { img: 'staff-4.png', name: '石川' }
];
const STAFF_MESSAGES = {
  vacancy:  '空室対策はお任せください。まずは募集条件と広告の見直しから、一緒に始めましょう。',
  proposal: 'これからは私たちから改善策をご提案します。物件のことを気軽にご相談ください。',
  rent:     '周辺の相場をしっかり調べて、家賃を守るための方法をご提案します。',
  staff:    'オーナー様からのご連絡には、専任の担当がすぐにお応えします。ご安心ください。',
  building: '建物の状態を確認して、無理のない修繕計画を一緒に考えます。',
  cost:     '修繕費やコストに無駄がないか、一つずつ一緒に見直していきましょう。',
  inherit:  '相続や資産活用のご相談も、専門家と連携してしっかりサポートします。',
  general:  'オーナー様のお悩みに合わせて、最適な方法をご提案します。まずはお気軽にご相談ください。'
};
// 「IFCがご提供できること」5項目（上から順）と、関係するお悩み
const OFFER_MAP = [
  ['vacancy'],                    // 空室改善提案・募集力強化
  ['proposal', 'rent', 'staff', 'cost'], // 収益改善のご提案
  ['building', 'cost'],           // 建物管理・修繕計画のサポート
  ['rent'],                       // 滞納保証・家賃保証で安心
  ['inherit']                     // 相続・資産活用の相談対応
];
const OTHER_SOLVE = 'ご相談内容に合わせて、担当者が個別にご提案します';
// 「その他」だけを選んだときに表示する一文
const GENERAL_SOLVE = 'IFCがオーナー様の状況に合わせて、最適なご提案をします';

const MANAGES = [
  { id: 'itaku',   label: '管理委託（一般管理）',     point: 8 },
  { id: 'sublease',label: 'サブリース（一括借上）',   point: 5 },
  { id: 'jishu',   label: '自主管理',                 point: 15 },
  { id: 'ichibu',  label: '一部委託（集金のみなど）', point: 12 },
  { id: 'unknown', label: 'その他・わからない',       point: 8 }
];
const TYPES = ['アパート', 'マンション', '戸建賃貸', 'その他'];
const AGES = ['築5年未満', '築5〜10年', '築10〜20年', '築20〜30年', '築30年以上'];
const UNITS = ['1〜5戸', '6〜10戸', '11〜20戸', '21〜50戸', '51戸以上'];
// 築年数・戸数の点数（上の並び順に対応）
const AGE_POINTS = [0, 3, 6, 10, 12];
const UNIT_POINTS = [2, 4, 6, 8, 10];
const AREAS = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都23区','東京都下','神奈川県','新潟県','富山県','石川県','福井県','山梨県','長野県','岐阜県','静岡県','愛知県','三重県','滋賀県','京都府','大阪府','兵庫県','奈良県','和歌山県','鳥取県','島根県','岡山県','広島県','山口県','徳島県','香川県','愛媛県','高知県','福岡県','佐賀県','長崎県','熊本県','大分県','宮崎県','鹿児島県','沖縄県'];

const FLOW = [
  { name: 'ご相談', icon: 'chat', owner: 'お問い合わせ・<br>ご相談', ifc: '状況の確認・<br>問題点の整理' },
  { name: '現状確認・<br>ヒアリング', icon: 'calc', owner: '資料のご提供・<br>ヒアリング', ifc: '現状分析・<br>改善提案' },
  { name: 'ご提案・<br>お見積り', icon: 'chat', owner: 'ご提案内容の<br>ご確認', ifc: '最適な管理プラン・<br>お見積りの提示' },
  { name: 'ご契約', icon: 'tool', owner: 'ご契約・書類の<br>ご記入', ifc: '契約手続きの<br>サポート' },
  { name: '引継ぎ・<br>各種手続き', icon: 'yen', owner: '契約内容の<br>ご確認', ifc: '現管理会社との<br>調整・入居者通知<br>各種手続き代行' },
  { name: '管理開始', icon: 'building', owner: '管理開始の<br>ご確認', ifc: '管理業務の<br>開始・運営' }
];

// ---------- 入力内容 ----------
const emptyState = () => ({ concerns: [], other: '', manage: '', type: '', age: '', units: '', area: '' });
const state = emptyState();

// ---------- 画面切り替え ----------
function go(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'p6') requestAnimationFrame(updateFlowGuide);
}
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-go]');
  if (btn && !btn.disabled) go(btn.dataset.go);
  const mock = e.target.closest('[data-mock]');
  if (mock) toast(mock.dataset.mock);
});

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ---------- ステップ表示 ----------
document.querySelectorAll('.steps').forEach(el => {
  const cur = Number(el.dataset.step);
  let html = '';
  for (let i = 1; i <= 3; i++) {
    html += `<span class="dot ${i <= cur ? 'on' : ''}">${i}</span>`;
    html += `<span class="bar ${i < cur ? 'on' : ''}"></span>`;
  }
  html += `<span class="end ${cur >= 4 ? 'on' : ''}">結果</span>`; // 結果画面では紺色で強調
  el.innerHTML = html;
});

// ---------- P2 お悩み ----------
const concernList = document.getElementById('concernList');
concernList.innerHTML = CONCERNS.map(c => `
  <label class="opt" data-id="${c.id}">
    <input type="checkbox" value="${c.id}">
    <span class="mark box"></span>${ICON[c.icon]}<span>${c.label}</span>
  </label>`).join('') + `
  <label class="opt" data-id="other">
    <input type="checkbox" value="other">
    <span class="mark box"></span><span style="font-weight:700">その他</span>
    <input type="text" class="other-input" id="otherText" placeholder="自由入力">
  </label>`;

concernList.addEventListener('change', e => {
  if (e.target.type !== 'checkbox') return;
  e.target.closest('.opt').classList.toggle('checked', e.target.checked);
  // 「その他」のチェックを外したら、入力内容も消す（画面に見えない内容が結果に残らないように）
  if (e.target.value === 'other' && !e.target.checked) {
    document.getElementById('otherText').value = '';
    state.other = '';
  }
  state.concerns = [...concernList.querySelectorAll('input[type=checkbox]:checked')].map(i => i.value);
  document.getElementById('toP3').disabled = state.concerns.length === 0;
});
document.getElementById('otherText').addEventListener('input', e => {
  state.other = e.target.value.trim();
  const box = concernList.querySelector('input[value=other]');
  // 入力したら「その他」に自動でチェック、文字をすべて消したらチェックも外す
  if (state.other && !box.checked) { box.checked = true; box.dispatchEvent(new Event('change', { bubbles: true })); }
  if (!state.other && box.checked) { box.checked = false; box.dispatchEvent(new Event('change', { bubbles: true })); }
});

// ---------- P3 管理状況 ----------
function radioGroup(el, items, name, onPick) {
  el.innerHTML = items.map(m => `
    <label class="opt">
      <input type="radio" name="${name}" value="${m.id ?? m}">
      <span class="mark radio"></span><span>${m.label ?? m}</span>
    </label>`).join('');
  el.addEventListener('change', e => {
    el.querySelectorAll('.opt').forEach(o => o.classList.toggle('checked', o.querySelector('input').checked));
    onPick(e.target.value);
  });
}
radioGroup(document.getElementById('manageList'), MANAGES, 'manage', v => {
  state.manage = v;
  document.getElementById('toP4').disabled = false;
});

// ---------- P4 物件情報 ----------
radioGroup(document.getElementById('typeList'), TYPES, 'ptype', v => { state.type = v; checkP4(); });
function fillSelect(id, list) {
  const sel = document.getElementById(id);
  sel.insertAdjacentHTML('beforeend', list.map(v => `<option>${v}</option>`).join(''));
  sel.addEventListener('change', () => { state[id] = sel.value; checkP4(); });
}
fillSelect('age', AGES);
fillSelect('units', UNITS);
fillSelect('area', AREAS);
function checkP4() {
  document.getElementById('toP5').disabled = !(state.type && state.age && state.units && state.area);
}
// 「結果を見る」→「診断中…」を約1.2秒表示してから結果へ
document.getElementById('toP5').addEventListener('click', () => {
  go('loading');
  setTimeout(() => { renderResult(); go('p5'); }, 1200);
});

// ---------- P5 結果 ----------
function renderResult() {
  const manage = MANAGES.find(m => m.id === state.manage);
  const picked = state.concerns.filter(id => id !== 'other');

  // 改善可能性 ＝ 基本点20 ＋ お悩み点 ＋ 管理状況点 ＋ 築年数点 ＋ 戸数点（30〜95にそろえる）
  const concernPoint = state.concerns.reduce((sum, id) =>
    sum + (id === 'other' ? OTHER_POINT : CONCERNS.find(x => x.id === id).point), 0);
  const agePoint = AGE_POINTS[AGES.indexOf(state.age)];
  const unitPoint = UNIT_POINTS[UNITS.indexOf(state.units)];
  const score = Math.min(95, Math.max(30, 20 + concernPoint + manage.point + agePoint + unitPoint));
  // 星：30〜44=1 / 45〜59=2 / 60〜74=3 / 75〜89=4 / 90〜95=5
  const stars = score >= 90 ? 5 : score >= 75 ? 4 : score >= 60 ? 3 : score >= 45 ? 2 : 1;

  const lead = state.manage === 'jishu' ? '管理のプロへの委託で' : '管理会社の変更で';
  const tail = score >= 50 ? '改善できる<br class="sp-only">可能性が高いです' : '改善できる<br class="sp-only">可能性があります';
  document.getElementById('resTitle').innerHTML = `<em>${lead}</em><br>${tail}`;
  document.getElementById('resTitle').classList.toggle('long', state.manage === 'jishu');
  document.getElementById('resScore').textContent = 0;

  const star = on => `<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="${on ? 'var(--star)' : 'none'}" stroke="${on ? 'var(--star)' : '#cfd5df'}" stroke-width="1.3"/></svg>`;
  document.getElementById('resStars').innerHTML = [1, 2, 3, 4, 5].map(() => star(false)).join('');

  document.getElementById('resSummary').textContent =
    `${state.area}の${state.type}（${state.age}・${state.units}）、${manage.label}の物件として診断しました。`;

  // STEP1で選んだお悩みだけを「お悩み＋答え」のセットで並べる（選んだ順・選んだ数だけ）
  const check = '<svg class="check" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="var(--navy)"/><path d="M6 10.3l2.7 2.7L14 7.7" fill="none" stroke="#fff" stroke-width="2"/></svg>';
  const item = (label, text) =>
    `<div class="solve-item hit">${check}<span>${label ? `<span class="lbl">${label}</span>` : ''}${text}</span></div>`;
  let html = '';
  if (picked.length === 0) {
    // 「その他」だけの場合は、一般的な一文（入力内容があれば見出しに表示）
    html = item(state.other ? `「${escapeHtml(state.other)}」への対策` : '', GENERAL_SOLVE);
  } else {
    picked.forEach(id => {
      const c = CONCERNS.find(x => x.id === id);
      html += item(`「${c.label}」への対策`, c.solve);
    });
    if (state.concerns.includes('other')) {
      const label = state.other ? `「${escapeHtml(state.other)}」への対策` : '「その他」のお悩みへの対策';
      html += item(label, OTHER_SOLVE);
    }
  }
  document.getElementById('resSolve').innerHTML = html;

  // スタッフからひとこと：スタッフは4人からランダム、ひとことは最初に選んだお悩みに合わせる
  const member = STAFF[Math.floor(Math.random() * STAFF.length)];
  document.getElementById('staffImg').src = member.img;
  document.getElementById('staffLabel').textContent = `IFCスタッフ　${member.name}より`;
  document.getElementById('staffText').textContent = STAFF_MESSAGES[picked[0]] || STAFF_MESSAGES.general;

  // 「IFCがご提供できること」：選んだお悩みに関係する項目を強調し、ほかは薄く表示
  const offerItems = document.querySelectorAll('#offerList li');
  const hits = OFFER_MAP.map(ids => ids.some(id => picked.includes(id)));
  const anyHit = hits.some(Boolean);
  offerItems.forEach((li, i) => {
    li.classList.toggle('on', anyHit && hits[i]);
    li.classList.toggle('off', anyHit && !hits[i]); // 「その他」だけの場合は全項目をふつうに表示
  });

  playResultAnimation(score, stars);
}

// ---------- 結果画面の演出 ----------
let animTimers = [];
let animFrame = null;
function playResultAnimation(score, stars) {
  animTimers.forEach(clearTimeout);
  animTimers = [];
  cancelAnimationFrame(animFrame);

  const scoreEl = document.getElementById('resScore');
  const starEls = document.querySelectorAll('#resStars svg');
  const items = document.querySelectorAll('#resSolve .solve-item, #staffMsg'); // 解決策のあとにスタッフのひとことも表示
  const lightStar = el => {
    const path = el.querySelector('path');
    path.setAttribute('fill', 'var(--star)');
    path.setAttribute('stroke', 'var(--star)');
    el.classList.add('pop');
  };

  // 動きを控える設定の場合は、演出なしで最終の状態を表示
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    scoreEl.textContent = score;
    for (let i = 0; i < stars; i++) lightStar(starEls[i]);
    return;
  }

  items.forEach(el => el.classList.add('wait'));

  // 1. 数字のカウントアップ（約1.2秒、終わりに向けてゆっくり）
  const duration = 1200;
  const start = performance.now();
  const tick = now => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    scoreEl.textContent = Math.round(score * eased);
    if (t < 1) animFrame = requestAnimationFrame(tick);
  };
  animFrame = requestAnimationFrame(tick);

  // 2. 星を左から1つずつ点灯（約0.15秒ずつ）
  for (let i = 0; i < stars; i++) {
    animTimers.push(setTimeout(() => lightStar(starEls[i]), duration + i * 150));
  }

  // 3. 解決策を上から順に表示
  const itemsStart = duration + stars * 150 + 100;
  items.forEach((el, i) => {
    animTimers.push(setTimeout(() => el.classList.remove('wait'), itemsStart + i * 120));
  });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// 最初からやり直す：入力をすべて消してTOPへ
document.getElementById('restart').addEventListener('click', () => {
  Object.assign(state, emptyState());
  document.querySelectorAll('input[type=checkbox], input[type=radio]').forEach(i => i.checked = false);
  document.querySelectorAll('.opt').forEach(o => o.classList.remove('checked'));
  document.getElementById('otherText').value = '';
  document.querySelectorAll('select').forEach(s => s.value = '');
  ['toP3', 'toP4', 'toP5'].forEach(id => document.getElementById(id).disabled = true);
  go('p1');
});

// ---------- P6 流れ ----------
const flowIcon = k => ICON[k].replace('class="ic"', '');
document.getElementById('flowTable').innerHTML =
  '<div></div>' +
  FLOW.map((f, i) => `<div class="head-step"><div class="num">0${i + 1}</div><div class="name">${f.name}</div>${flowIcon(f.icon)}</div>`).join('') +
  '<div class="row-label">オーナー様が<br>行うこと</div>' +
  FLOW.map(f => `<div class="cell">${f.owner}</div>`).join('') +
  '<div class="row-label">IFCが<br>サポート<br>すること</div>' +
  FLOW.map(f => `<div class="cell ifc">${f.ifc}</div>`).join('');

// ---------- P6 横スクロールのガイド ----------
const flowTable = document.getElementById('flowTable');
flowTable.insertAdjacentHTML('afterend', `
  <div class="scroll-guide" id="flowGuide">
    <p class="hint">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V5.5a1.5 1.5 0 013 0V11m0-1.5a1.5 1.5 0 013 0V11m0-.5a1.5 1.5 0 013 0V15a6 6 0 01-6 6h-1a6 6 0 01-4.6-2.2L4 15.5a1.5 1.5 0 012.3-1.9L9 16"/></svg>
      横にスクロールできます
    </p>
    <div class="track"><div class="thumb" id="flowThumb"></div></div>
  </div>`);

function updateFlowGuide() {
  const guide = document.getElementById('flowGuide');
  const thumb = document.getElementById('flowThumb');
  const max = flowTable.scrollWidth - flowTable.clientWidth;
  guide.classList.toggle('show', max > 2);
  if (max <= 2) return;
  const ratio = flowTable.clientWidth / flowTable.scrollWidth;
  thumb.style.width = (ratio * 100) + '%';
  thumb.style.left = (flowTable.scrollLeft / max) * (1 - ratio) * 100 + '%';
}
flowTable.addEventListener('scroll', updateFlowGuide, { passive: true });
window.addEventListener('resize', updateFlowGuide);

// ---------- P7 CTA：オペレーター画像をランダム表示 ----------
const operatorImages = ['operator-a.png', 'operator-b.png', 'operator-c.png'];
const operatorImg = document.getElementById('operator-img');
if (operatorImg) {
  operatorImg.src = operatorImages[Math.floor(Math.random() * operatorImages.length)];
}
