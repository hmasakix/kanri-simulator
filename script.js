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
  { id: 'vacancy',   label: '空室がなかなか埋まらない',     icon: 'building', solve: '空室に対して、募集戦略の見直しと改善提案を行います' },
  { id: 'proposal',  label: '管理会社から提案がない',       icon: 'chat',     solve: '専任担当が、収益改善策を定期的にご提案します' },
  { id: 'rent',      label: '家賃が下がり続けている',       icon: 'yen',      solve: '市場調査に基づく家賃査定で、適正な家賃設定をご提案します' },
  { id: 'staff',     label: '担当者の対応に不満がある',     icon: 'person',   solve: '定期的なレポート提出と改善提案で収益を最大化します' },
  { id: 'building',  label: '建物が古く、修繕が不安',       icon: 'tool',     solve: '建物の状態を診断し、長期修繕計画をご提案します' },
  { id: 'cost',      label: '修繕費やコストが高い気がする', icon: 'calc',     solve: '修繕費の見直しやコスト削減のアドバイスをします' },
  { id: 'inherit',   label: '相続や資産活用の相談がしたい', icon: 'people',   solve: '相続や資産活用の専門家と連携し、トータルでサポートします' }
];
const OTHER_SOLVE = 'ご相談内容に合わせて、担当者が個別にご提案します';
// 結果画面で、選択以外に表示する基本の解決策
const DEFAULT_SOLVE_IDS = ['vacancy', 'staff', 'building', 'cost', 'inherit'];

const MANAGES = [
  { id: 'itaku',   label: '管理委託（一般管理）',     point: 5 },
  { id: 'sublease',label: 'サブリース（一括借上）',   point: 10 },
  { id: 'jishu',   label: '自主管理',                 point: 20 },
  { id: 'ichibu',  label: '一部委託（集金のみなど）', point: 15 },
  { id: 'unknown', label: 'その他・わからない',       point: 10 }
];
const TYPES = ['アパート', 'マンション', '戸建賃貸', 'その他'];
const AGES = ['築5年未満', '築5〜10年', '築10〜20年', '築20〜30年', '築30年以上'];
const UNITS = ['1〜5戸', '6〜10戸', '11〜20戸', '21〜50戸', '51戸以上'];
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
const state = { concerns: [], other: '', manage: '', type: '', age: '', units: '', area: '' };

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
  html += '<span class="end">結果</span>';
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
  state.concerns = [...concernList.querySelectorAll('input[type=checkbox]:checked')].map(i => i.value);
  document.getElementById('toP3').disabled = state.concerns.length === 0;
});
document.getElementById('otherText').addEventListener('input', e => {
  state.other = e.target.value.trim();
  const box = concernList.querySelector('input[value=other]');
  if (state.other && !box.checked) { box.checked = true; box.dispatchEvent(new Event('change', { bubbles: true })); }
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
document.getElementById('toP5').addEventListener('click', () => { renderResult(); go('p5'); });

// ---------- P5 結果 ----------
function renderResult() {
  const manage = MANAGES.find(m => m.id === state.manage);
  const picked = state.concerns.filter(id => id !== 'other');

  // 改善可能性：お悩みの数 × 12 ＋ 管理状況の点数 ＋ 25（30〜95で丸める）
  const score = Math.min(95, Math.max(30, state.concerns.length * 12 + manage.point + 25));
  const stars = Math.round(score / 20);

  const lead = state.manage === 'jishu' ? '管理のプロへの委託で、' : '管理会社の変更で、';
  const tail = score >= 50 ? '改善できる可能性が高いです。' : '改善できる可能性があります。';
  document.getElementById('resTitle').innerHTML = `<em>${lead}</em><br>${tail}`;
  document.getElementById('resScore').textContent = score;

  const star = on => `<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="${on ? 'var(--star)' : 'none'}" stroke="${on ? 'var(--star)' : '#cfd5df'}" stroke-width="1.3"/></svg>`;
  document.getElementById('resStars').innerHTML = [1, 2, 3, 4, 5].map(i => star(i <= stars)).join('');

  document.getElementById('resSummary').textContent =
    `${state.area}の${state.type}（${state.age}・${state.units}）、${manage.label}の物件として診断しました。`;

  // 選んだお悩みへの対策を先頭に強調、残りを基本の解決策で埋める（最大5件）
  const check = '<svg class="check" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="var(--navy)"/><path d="M6 10.3l2.7 2.7L14 7.7" fill="none" stroke="#fff" stroke-width="2"/></svg>';
  let html = '';
  const used = new Set();
  picked.forEach(id => {
    const c = CONCERNS.find(x => x.id === id);
    html += `<div class="solve-item hit">${check}<span><span class="lbl">「${c.label}」への対策</span>${c.solve}</span></div>`;
    used.add(id);
  });
  if (state.concerns.includes('other')) {
    const label = state.other ? `「${state.other}」への対策` : '「その他」のお悩みへの対策';
    html += `<div class="solve-item hit">${check}<span><span class="lbl">${escapeHtml(label)}</span>${OTHER_SOLVE}</span></div>`;
  }
  let count = picked.length + (state.concerns.includes('other') ? 1 : 0);
  DEFAULT_SOLVE_IDS.forEach(id => {
    if (count >= 5 || used.has(id)) return;
    html += `<div class="solve-item">${check}<span>${CONCERNS.find(x => x.id === id).solve}</span></div>`;
    count++;
  });
  document.getElementById('resSolve').innerHTML = html;

  const concernText = state.concerns.map(id =>
    id === 'other' ? (state.other ? `その他（${escapeHtml(state.other)}）` : 'その他') : CONCERNS.find(x => x.id === id).label
  ).join('、');
  document.getElementById('resFoot').innerHTML = `お悩み：<b>${concernText}</b>管理状況：<b>${manage.label}</b>`;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// 最初からやり直す：入力をすべて消してTOPへ
document.getElementById('restart').addEventListener('click', () => {
  Object.assign(state, { concerns: [], other: '', manage: '', type: '', age: '', units: '', area: '' });
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
