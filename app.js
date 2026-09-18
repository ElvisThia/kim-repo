const APP_VERSION = "1.0.1";
const APP_NAME = "Julie-Store";
const STORE_KEY = "julie-store-v1";
const OLD_STORE_KEYS = ["kim-store-v1"];
const LEGACY_KEY = "kim-store-prototype-items";

const STATUS_LABELS = {
  book: { wish: "想读", doing: "在读", done: "已读", again: "又读" },
  film: { wish: "想看", doing: "在看", done: "已看", again: "又看" },
};

const STATUS_COLORS = {
  wish: "#f28c28",
  doing: "#2f6fcb",
  done: "#3f4652",
  again: "#d64545",
};

const NAV_ITEMS = [
  { id: "home", label: "首页", icon: "⌂" },
  { id: "library", label: "资料库", icon: "▦" },
  { id: "add", label: "添加", icon: "+" },
  { id: "tags", label: "标签", icon: "#" },
  { id: "backup", label: "备份", icon: "⇅" },
];

const BUILT_IN_TAGS = ["经典", "小说", "英文", "待重看", "纸书", "电子书", "影院", "配乐"];

const DEFAULT_SECTIONS = [
  { id: "sec-doing", title: "正在进行", category: "all", status: "doing", sort: "recent", limit: 6 },
  { id: "sec-done", title: "最近完成", category: "all", status: "done", sort: "recent", limit: 6 },
  { id: "sec-wish", title: "想读想看", category: "all", status: "wish", sort: "recent", limit: 6 },
];

const DEFAULT_COVER_URLS = {
  "book-1": "assets/covers/one-hundred-years.jpg",
  "book-2": "assets/covers/creative-act.jpg",
  "book-3": "assets/covers/blood-merchant.jpg",
  "book-4": "assets/covers/limit-beginning.jpg",
  "film-1": "assets/covers/life-is-beautiful.jpg",
  "film-2": "assets/covers/in-the-mood-for-love.jpg",
  "film-3": "assets/covers/before-sunrise.jpg",
  "film-4": "assets/covers/the-wire.jpg",
  "book-solitude": "assets/covers/one-hundred-years.jpg",
  "book-creative": "assets/covers/creative-act.jpg",
  "book-blood": "assets/covers/blood-merchant.jpg",
  "book-limit": "assets/covers/limit-beginning.jpg",
  "film-life": "assets/covers/life-is-beautiful.jpg",
  "film-mood": "assets/covers/in-the-mood-for-love.jpg",
  "film-sunrise": "assets/covers/before-sunrise.jpg",
  "film-wire": "assets/covers/the-wire.jpg",
};

const CATALOG = [
  {
    sourceId: "book-solitude",
    category: "book",
    title: "百年孤独",
    originalTitle: "Cien años de soledad",
    creator: "加西亚·马尔克斯",
    nationality: "哥伦比亚",
    date: "1967",
    pageCount: 471,
    status: "wish",
    progress: "未开始",
    tags: ["经典", "拉美文学"],
    coverUrl: "assets/covers/one-hundred-years.jpg",
    coverA: "#2f7d5c",
    coverB: "#d8a24d",
    mark: "百",
    versionType: "纸书",
    versionNote: "译本待确认",
    summary: "拉美文学代表作，适合记录不同版本与多次阅读。",
  },
  {
    sourceId: "book-creative",
    category: "book",
    title: "The Creative Act",
    originalTitle: "A Way of Being",
    creator: "Rick Rubin",
    nationality: "美国",
    date: "2023",
    pageCount: 432,
    status: "doing",
    progress: "第 86 页",
    tags: ["灵感", "英文"],
    coverUrl: "assets/covers/creative-act.jpg",
    coverA: "#4056a1",
    coverB: "#dbe7ff",
    mark: "T",
    versionType: "Kindle",
    versionNote: "",
    summary: "关于创作方式和注意力的短章节随笔。",
  },
  {
    sourceId: "book-blood",
    category: "book",
    title: "许三观卖血记",
    originalTitle: "Chronicle of a Blood Merchant",
    creator: "余华",
    nationality: "中国",
    date: "1995",
    pageCount: 264,
    status: "wish",
    progress: "未开始",
    tags: ["小说"],
    coverUrl: "assets/covers/blood-merchant.jpg",
    coverA: "#b94b5b",
    coverB: "#f0d3d8",
    mark: "许",
    versionType: "纸书",
    versionNote: "",
    summary: "以个人命运折射时代处境的长篇小说。",
  },
  {
    sourceId: "book-limit",
    category: "book",
    title: "始于极限",
    originalTitle: "おうふくしょかん",
    creator: "上野千鹤子、铃木凉美",
    nationality: "日本",
    date: "2022",
    pageCount: 352,
    status: "again",
    progress: "第 2 次读完",
    tags: ["访谈"],
    coverUrl: "assets/covers/limit-beginning.jpg",
    coverA: "#6c5ce7",
    coverB: "#ffeaa7",
    mark: "始",
    versionType: "电子书",
    versionNote: "做过摘录",
    summary: "围绕女性主义与个人经验展开的往复书简。",
  },
  {
    sourceId: "film-life",
    category: "film",
    title: "美丽人生",
    originalTitle: "La vita e bella",
    aliases: ["生活是美丽的", "生活如是", "Life Is Beautiful"],
    creator: "罗伯托·贝尼尼",
    nationality: "意大利",
    date: "1997",
    status: "done",
    progress: "已看完",
    tags: ["经典", "意大利"],
    coverUrl: "assets/covers/life-is-beautiful.jpg",
    coverA: "#244d61",
    coverB: "#f2c94c",
    mark: "La",
    versionType: "蓝光",
    versionNote: "修复版",
    summary: "用喜剧外壳包裹战争创伤的意大利电影。",
    songs: [{ title: "Buongiorno Principessa", artist: "Nicola Piovani" }],
  },
  {
    sourceId: "film-mood",
    category: "film",
    title: "花样年华",
    originalTitle: "In the Mood for Love",
    aliases: ["花樣年華"],
    creator: "王家卫",
    nationality: "中国香港",
    date: "2000",
    status: "again",
    progress: "第 3 次看完",
    tags: ["待重看", "配乐"],
    coverUrl: "assets/covers/in-the-mood-for-love.jpg",
    coverA: "#9b2335",
    coverB: "#223843",
    mark: "花",
    versionType: "影院",
    versionNote: "",
    summary: "关于克制、错过与时间质感的电影。",
    songs: [{ title: "Yumeji's Theme", artist: "梅林茂" }],
  },
  {
    sourceId: "film-sunrise",
    category: "film",
    title: "Before Sunrise",
    originalTitle: "",
    aliases: ["爱在黎明破晓前"],
    creator: "Richard Linklater",
    nationality: "美国",
    date: "1995",
    status: "wish",
    progress: "未开始",
    tags: ["爱情", "英文"],
    coverUrl: "assets/covers/before-sunrise.jpg",
    coverA: "#3867b7",
    coverB: "#a8dadc",
    mark: "B",
    versionType: "流媒体",
    versionNote: "",
    summary: "一夜漫游式爱情电影。",
    songs: [],
  },
  {
    sourceId: "film-wire",
    category: "film",
    title: "火线",
    originalTitle: "The Wire",
    aliases: ["线人", "监听风云"],
    creator: "David Simon",
    nationality: "美国",
    date: "2002",
    status: "doing",
    progress: "第 2 季 第 5 集",
    tags: ["剧集", "犯罪"],
    coverUrl: "assets/covers/the-wire.jpg",
    coverA: "#313638",
    coverB: "#ef6461",
    mark: "W",
    versionType: "流媒体",
    versionNote: "HBO",
    summary: "首版不拆电影和剧集，但保留季集进度。",
    songs: [],
  },
  {
    sourceId: "book-prince",
    category: "book",
    title: "小王子",
    originalTitle: "Le Petit Prince",
    creator: "安托万·德·圣-埃克苏佩里",
    nationality: "法国",
    date: "1943",
    pageCount: 96,
    status: "wish",
    progress: "未开始",
    tags: ["童话", "法语文学"],
    coverUrl: "",
    coverA: "#315f72",
    coverB: "#f0c66f",
    mark: "小",
    versionType: "纸书",
    versionNote: "",
    summary: "可用于测试新增图书候选与版本说明。",
  },
  {
    sourceId: "book-live",
    category: "book",
    title: "活着",
    originalTitle: "To Live",
    creator: "余华",
    nationality: "中国",
    date: "1993",
    pageCount: 191,
    status: "wish",
    progress: "未开始",
    tags: ["小说"],
    coverUrl: "",
    coverA: "#7a2e2e",
    coverB: "#f1d7a7",
    mark: "活",
    versionType: "纸书",
    versionNote: "",
    summary: "可用于测试同一作者的中文图书检索。",
  },
  {
    sourceId: "film-interstellar",
    category: "film",
    title: "星际穿越",
    originalTitle: "Interstellar",
    aliases: ["星际启示录"],
    creator: "Christopher Nolan",
    nationality: "美国",
    date: "2014",
    status: "wish",
    progress: "未开始",
    tags: ["科幻"],
    coverUrl: "",
    coverA: "#13293d",
    coverB: "#4f8fba",
    mark: "I",
    versionType: "流媒体",
    versionNote: "",
    summary: "可用于测试影视英文原名与中文译名匹配。",
    songs: [],
  },
  {
    sourceId: "film-manchester",
    category: "film",
    title: "海边的曼彻斯特",
    originalTitle: "Manchester by the Sea",
    aliases: ["情系海边之城"],
    creator: "Kenneth Lonergan",
    nationality: "美国",
    date: "2016",
    status: "wish",
    progress: "未开始",
    tags: ["剧情"],
    coverUrl: "",
    coverA: "#4f5d75",
    coverB: "#d0d7df",
    mark: "M",
    versionType: "流媒体",
    versionNote: "",
    summary: "可用于测试影视候选确认流程。",
    songs: [],
  },
];

const SEED_SOURCE_IDS = new Set([
  "book-solitude",
  "book-creative",
  "book-blood",
  "book-limit",
  "film-life",
  "film-mood",
  "film-sunrise",
  "film-wire",
]);

const initialState = {
  view: "library",
  category: "book",
  status: "all",
  query: "",
  sort: "recent",
  searchCategory: "book",
  searchQuery: "",
  selectedIds: new Set(),
  selectMode: false,
};

const state = { ...initialState };
const composingFields = new Set();
let renderTimer = null;
let db = loadDb();

const app = document.querySelector("#app");
const bottomNav = document.querySelector("#bottomNav");
const toast = document.querySelector("#toast");
const dialog = document.querySelector("#sheetDialog");

render();

document.addEventListener("click", handleClick);
document.addEventListener("input", handleInput);
document.addEventListener("change", handleChange);
document.addEventListener("submit", handleSubmit);
document.addEventListener("compositionstart", handleCompositionStart);
document.addEventListener("compositionend", handleCompositionEnd);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

function loadDb() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORE_KEY));
    if (stored?.items && stored?.tags && stored?.sections) return normalizeDb(stored);
  } catch {
    // Fall through to legacy migration or seed data.
  }

  for (const oldKey of OLD_STORE_KEYS) {
    try {
      const stored = JSON.parse(localStorage.getItem(oldKey));
      if (stored?.items && stored?.tags && stored?.sections) return normalizeDb(stored);
    } catch {
      // Try the next legacy key.
    }
  }

  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY));
    if (Array.isArray(legacy) && legacy.length > 0) {
      return normalizeDb({
        version: APP_VERSION,
        items: legacy.map(normalizeItem),
        tags: mergeTags(legacy.flatMap((item) => item.tags || [])),
        sections: DEFAULT_SECTIONS,
      });
    }
  } catch {
    // Fall through to seed data.
  }

  return normalizeDb({
    version: APP_VERSION,
    items: CATALOG.filter((item) => SEED_SOURCE_IDS.has(item.sourceId)).map((item, index) =>
      normalizeItem({
        ...item,
        id: `item-${index + 1}`,
        source: { provider: "sample", id: item.sourceId },
        rating: item.status === "wish" || item.status === "doing" ? "" : item.sourceId === "film-mood" ? "10" : "9",
        comment:
          item.status === "wish"
            ? ""
            : item.category === "book"
              ? "这条样例用于确认图书记录、版本说明和完成记录的展示。"
              : "这条样例用于确认影视记录、曲目和多次观看的展示。",
        completions:
          item.status === "done" || item.status === "again"
            ? [
                {
                  id: createId("done"),
                  date: "2026-09-10",
                  rating: item.sourceId === "film-mood" ? "10" : "9",
                  comment: item.status === "again" ? "一次重读/重看的记录。" : "一次完成记录。",
                },
              ]
            : [],
      }),
    ),
    tags: mergeTags(BUILT_IN_TAGS),
    sections: DEFAULT_SECTIONS,
  });
}

function normalizeDb(rawDb) {
  const normalized = {
    version: APP_VERSION,
    items: (rawDb.items || []).map(normalizeItem),
    tags: mergeTags([...(rawDb.tags || []), ...BUILT_IN_TAGS, ...(rawDb.items || []).flatMap((item) => item.tags || [])]),
    sections: rawDb.sections?.length ? rawDb.sections : DEFAULT_SECTIONS,
  };
  localStorage.setItem(STORE_KEY, JSON.stringify(normalized));
  return normalized;
}

function normalizeItem(item) {
  const fallback = CATALOG.find((entry) => entry.sourceId === item.sourceId || entry.sourceId === item.source?.id);
  const category = normalizeCategory(item.category);
  return {
    id: item.id || createId("item"),
    category,
    title: item.title || "未命名作品",
    originalTitle: item.originalTitle || "",
    aliases: item.aliases || [],
    creator: item.creator || "",
    nationality: item.nationality || fallback?.nationality || DEFAULT_NATIONALITIES[item.id] || "",
    date: item.date || "",
    status: normalizeStatus(category, item.status),
    progress: item.progress || "未开始",
    tags: [...new Set(item.tags || [])],
    coverUrl: getCoverUrl(item, fallback),
    coverA: item.coverA || fallback?.coverA || "#607d8b",
    coverB: item.coverB || fallback?.coverB || "#dfe7ef",
    mark: item.mark || (item.title || "?").slice(0, 1),
    versionType: item.versionType || item.version || "",
    versionNote: item.versionNote || "",
    summary: item.summary || "",
    rating: item.rating || "",
    comment: item.comment || "",
    pageCount: item.pageCount || "",
    completions: (item.completions || []).map((record) => ({
      id: record.id || createId("done"),
      date: record.date || "",
      rating: record.rating || "",
      comment: record.comment || "",
    })),
    songs: (item.songs || []).map((song) => ({ title: song.title || "", artist: song.artist || "" })),
    source: item.source || { provider: item.sourceId ? "sample" : "manual-import", id: item.sourceId || item.id || "" },
    createdAt: item.createdAt || getToday(),
    updatedAt: item.updatedAt || getToday(),
  };
}

function saveDb(message) {
  db.version = APP_VERSION;
  localStorage.setItem(STORE_KEY, JSON.stringify(db));
  if (message) showToast(message);
}

function render() {
  renderNav();
  if (state.view === "home") renderHome();
  if (state.view === "library") renderLibrary();
  if (state.view === "add") renderAdd();
  if (state.view === "tags") renderTags();
  if (state.view === "backup") renderBackup();
}

function renderNav() {
  bottomNav.innerHTML = NAV_ITEMS.map(
    (item) => `
      <button class="nav-item ${state.view === item.id ? "is-active" : ""}" type="button" data-action="nav" data-view="${item.id}">
        <span aria-hidden="true">${item.icon}</span>
        <span>${item.label}</span>
      </button>
    `,
  ).join("");
}

function renderHome() {
  const total = db.items.length;
  const doing = db.items.filter((item) => item.status === "doing").length;
  const done = db.items.filter((item) => item.status === "done" || item.status === "again").length;
  app.innerHTML = `
    ${renderHeader(APP_NAME, "首页", '<button class="icon-button" type="button" data-action="open-section-form">栏目</button>')}
    <section class="stats-grid">
      <article><strong>${total}</strong><span>全部作品</span></article>
      <article><strong>${doing}</strong><span>正在进行</span></article>
      <article><strong>${done}</strong><span>已完成/又读</span></article>
    </section>
    <section class="section-stack">
      ${db.sections.map(renderHomeSection).join("")}
    </section>
  `;
}

function renderHomeSection(section) {
  const items = getSectionItems(section);
  return `
    <section class="home-section">
      <header class="section-header">
        <div>
          <h2>${escapeHtml(section.title)}</h2>
          <p>${describeSection(section)}</p>
        </div>
        <div class="section-actions">
          <button class="mini-button" type="button" data-action="move-section" data-id="${section.id}" data-dir="-1">↑</button>
          <button class="mini-button" type="button" data-action="move-section" data-id="${section.id}" data-dir="1">↓</button>
          <button class="mini-button danger" type="button" data-action="delete-section" data-id="${section.id}">删</button>
        </div>
      </header>
      ${
        items.length
          ? `<div class="rail">${items.map((item) => renderMiniCard(item)).join("")}</div>`
          : `<p class="empty-inline">暂无条目</p>`
      }
    </section>
  `;
}

function renderLibrary() {
  const visible = getVisibleItems();
  app.innerHTML = `
    ${renderHeader(APP_NAME, "资料库", `<button class="icon-button ${state.selectMode ? "is-active" : ""}" type="button" data-action="toggle-select">${state.selectMode ? "取消" : "多选"}</button>`)}
    ${renderCategoryTabs("library")}
    <section class="search-row">
      <label class="search-box">
        <span class="sr-only">搜索标题、作者、导演、国籍或标签</span>
        <input data-field="query" type="search" value="${escapeAttribute(state.query)}" placeholder="搜索标题、作者、导演、国籍或标签" autocomplete="off" />
      </label>
      <label class="sort-box">
        <span class="sr-only">排序</span>
        <select data-field="sort">
          ${renderOption("recent", "最近更新", state.sort)}
          ${renderOption("title", "标题", state.sort)}
          ${renderOption("date", "出版/发行日期", state.sort)}
        </select>
      </label>
    </section>
    <section class="filters" aria-label="状态筛选">
      ${renderStatusFilter("all")}
      ${Object.keys(STATUS_LABELS[state.category]).map(renderStatusFilter).join("")}
    </section>
    <section class="summary-strip">
      <span>${visible.length} 个条目</span>
      <span>${state.selectMode ? "选择后可批量整理" : "点击卡片查看详情"}</span>
    </section>
    ${
      visible.length
        ? `<section class="card-grid ${state.selectMode ? "selecting" : ""}">${visible.map(renderWorkCard).join("")}</section>`
        : renderEmpty("没有匹配条目", "换一个关键词或状态筛选试试。")
    }
    ${state.selectMode ? renderBulkBar() : ""}
  `;
}

function renderAdd() {
  const results = searchCatalog();
  app.innerHTML = `
    ${renderHeader("添加作品", "搜索后保存", "")}
    ${renderCategoryTabs("add")}
    <section class="search-row one-col">
      <label class="search-box">
        <span class="sr-only">搜索作品</span>
        <input data-field="searchQuery" type="search" value="${escapeAttribute(state.searchQuery)}" placeholder="输入书名、片名、作者、导演或别名" autocomplete="off" />
      </label>
    </section>
    <section class="candidate-list">
      ${
        results.length
          ? results.map(renderCandidate).join("")
          : renderEmpty("输入关键词开始检索", "当前版本使用内置候选库模拟自动补全，后续可替换为真实 API。")
      }
    </section>
  `;
}

function renderTags() {
  const customTags = db.tags.filter((tag) => !BUILT_IN_TAGS.includes(tag));
  app.innerHTML = `
    ${renderHeader("标签", "固定标签 + 自定义标签", "")}
    <form class="inline-form" data-action="create-tag">
      <input name="tag" placeholder="新增自定义标签" autocomplete="off" />
      <button type="submit">添加</button>
    </form>
    <section class="tag-manager">
      <h2>固定标签</h2>
      <div class="tag-cloud">${BUILT_IN_TAGS.map((tag) => `<span class="tag-pill">${escapeHtml(tag)}</span>`).join("")}</div>
      <h2>自定义标签</h2>
      ${
        customTags.length
          ? customTags.map(renderCustomTag).join("")
          : `<p class="empty-inline">暂无自定义标签</p>`
      }
    </section>
  `;
}

function renderBackup() {
  const exportText = JSON.stringify(db, null, 2);
  app.innerHTML = `
    ${renderHeader("备份", "导入、导出与迁移", "")}
    <section class="tool-panel">
      <h2>导出备份</h2>
      <p>导出当前设备中的作品、标签、栏目和个人记录。</p>
      <button class="primary-button" type="button" data-action="download-backup">下载 JSON</button>
      <textarea readonly>${escapeHtml(exportText)}</textarea>
    </section>
    <section class="tool-panel">
      <h2>导入文件</h2>
      <p>支持 Julie-Store JSON 备份，或包含 title/category/status/creator/date/rating/comment/tags 表头的 CSV。</p>
      <input id="importFile" type="file" accept=".json,.csv,text/csv,application/json" />
      <button class="secondary-button" type="button" data-action="import-file">导入</button>
    </section>
    <section class="tool-panel">
      <h2>重置样例</h2>
      <p>仅恢复本机样例数据，会覆盖当前本地资料库。</p>
      <button class="danger-button" type="button" data-action="reset-demo">恢复样例</button>
    </section>
  `;
}

function renderHeader(eyebrow, title, actionHtml) {
  return `
    <header class="topbar">
      <div>
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
      </div>
      <div class="top-actions">${actionHtml || ""}</div>
    </header>
  `;
}

function renderCategoryTabs(context) {
  const active = context === "add" ? state.searchCategory : state.category;
  return `
    <section class="tabs" aria-label="内容分类">
      <button class="tab ${active === "book" ? "is-active" : ""}" type="button" data-action="category" data-context="${context}" data-category="book">图书</button>
      <button class="tab ${active === "film" ? "is-active" : ""}" type="button" data-action="category" data-context="${context}" data-category="film">影视</button>
    </section>
  `;
}

function renderStatusFilter(status) {
  const label = status === "all" ? "全部" : STATUS_LABELS[state.category][status];
  return `<button class="filter ${state.status === status ? "is-active" : ""}" type="button" data-action="status-filter" data-status="${status}">${label}</button>`;
}

function renderWorkCard(item) {
  const selected = state.selectedIds.has(item.id) ? " is-selected" : "";
  const label = STATUS_LABELS[item.category][item.status] || item.status;
  const tags = getDisplayTags(item);
  return `
    <button class="work-card${selected}" type="button" data-action="card" data-id="${item.id}">
      ${renderCover(item, "card")}
      <span>
        <span class="work-title-row">
          <span class="work-title">${escapeHtml(item.title)}</span>
          ${item.nationality ? `<span class="nationality-badge">${escapeHtml(item.nationality)}</span>` : ""}
        </span>
        ${tags.length ? `<span class="work-tags">${tags.map(escapeHtml).join(" · ")}</span>` : ""}
        <span class="work-meta">${escapeHtml(item.creator)} · ${escapeHtml(item.date)}</span>
        <span class="work-progress">${escapeHtml(item.progress)}</span>
      </span>
    </button>
  `;
}

function renderMiniCard(item) {
  return `
    <button class="mini-card" type="button" data-action="open-detail" data-id="${item.id}">
      ${renderCover(item, "mini")}
      <span>${escapeHtml(item.title)}</span>
    </button>
  `;
}

function renderCover(item, size) {
  const label = STATUS_LABELS[item.category][item.status] || item.status;
  return `
    <span class="cover ${size === "mini" ? "cover-mini" : ""}" style="--cover-a: ${item.coverA}; --cover-b: ${item.coverB}; --status-color: ${STATUS_COLORS[item.status] || "#3f4652"}">
      ${item.coverUrl ? `<img class="cover-img" src="${escapeAttribute(item.coverUrl)}" alt="${escapeAttribute(item.title)}封面" loading="lazy" onerror="this.hidden = true" />` : ""}
      <span class="status-badge">${label}</span>
      <span class="select-check">✓</span>
      <span class="cover-mark">${escapeHtml(item.mark)}</span>
    </span>
  `;
}

function renderCandidate(candidate) {
  const exists = db.items.some((item) => item.source?.provider === "sample" && item.source.id === candidate.sourceId);
  return `
    <article class="candidate">
      ${renderCover({ ...candidate, status: "wish" }, "mini")}
      <div>
        <h2>${escapeHtml(candidate.title)} ${candidate.nationality ? `<span class="nationality-badge">${escapeHtml(candidate.nationality)}</span>` : ""}</h2>
        <p>${escapeHtml(candidate.creator)} · ${escapeHtml(candidate.date)}</p>
        <p>${escapeHtml(candidate.originalTitle || candidate.summary || "")}</p>
      </div>
      <button class="primary-button" type="button" data-action="save-candidate" data-source-id="${candidate.sourceId}" ${exists ? "disabled" : ""}>${exists ? "已保存" : "保存"}</button>
    </article>
  `;
}

function renderCustomTag(tag) {
  const count = db.items.filter((item) => item.tags.includes(tag)).length;
  return `
    <article class="tag-row">
      <span><strong>${escapeHtml(tag)}</strong><small>${count} 个条目</small></span>
      <button class="mini-button" type="button" data-action="rename-tag" data-tag="${escapeAttribute(tag)}">改名</button>
      <button class="mini-button" type="button" data-action="merge-tag" data-tag="${escapeAttribute(tag)}">合并</button>
      <button class="mini-button danger" type="button" data-action="delete-tag" data-tag="${escapeAttribute(tag)}">删除</button>
    </article>
  `;
}

function renderBulkBar() {
  return `
    <aside class="bulk-bar">
      <div>
        <strong>已选择 ${state.selectedIds.size} 项</strong>
        <span>批量操作只修改状态或标签</span>
      </div>
      <div class="bulk-controls">
        <select data-bulk="status" aria-label="批量修改状态">
          <option value="">改状态</option>
          ${Object.entries(STATUS_LABELS[state.category]).map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}
        </select>
        <button type="button" data-action="bulk-status">应用</button>
        <select data-bulk="tag" aria-label="选择标签">
          ${db.tags.map((tag) => `<option value="${escapeAttribute(tag)}">${escapeHtml(tag)}</option>`).join("")}
        </select>
        <button type="button" data-action="bulk-add-tag">加标签</button>
        <button type="button" data-action="bulk-remove-tag">移除</button>
      </div>
    </aside>
  `;
}

function renderEmpty(title, body) {
  return `
    <section class="empty-state">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(body)}</p>
    </section>
  `;
}

function handleClick(event) {
  const target = event.target.closest("button[data-action], [data-action]:not(form)");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "nav") {
    state.view = target.dataset.view;
    state.selectMode = false;
    state.selectedIds.clear();
    render();
  }

  if (action === "category") {
    if (target.dataset.context === "add") state.searchCategory = target.dataset.category;
    else {
      state.category = target.dataset.category;
      state.status = "all";
      state.selectedIds.clear();
    }
    render();
  }

  if (action === "status-filter") {
    state.status = target.dataset.status;
    render();
  }

  if (action === "toggle-select") {
    state.selectMode = !state.selectMode;
    state.selectedIds.clear();
    render();
  }

  if (action === "card") {
    const id = target.dataset.id;
    if (state.selectMode) toggleSelected(id);
    else openDetail(id);
  }

  if (action === "open-detail") openDetail(target.dataset.id);
  if (action === "save-candidate") saveCandidate(target.dataset.sourceId);
  if (action === "bulk-status") applyBulkStatus();
  if (action === "bulk-add-tag") applyBulkTag("add");
  if (action === "bulk-remove-tag") applyBulkTag("remove");
  if (action === "open-section-form") openSectionForm();
  if (action === "move-section") moveSection(target.dataset.id, Number(target.dataset.dir));
  if (action === "delete-section") deleteSection(target.dataset.id);
  if (action === "rename-tag") renameTag(target.dataset.tag);
  if (action === "merge-tag") mergeTag(target.dataset.tag);
  if (action === "delete-tag") deleteTag(target.dataset.tag);
  if (action === "download-backup") downloadBackup();
  if (action === "import-file") importFile();
  if (action === "reset-demo") resetDemo();
  if (action === "close-dialog") closeDialog();
  if (action === "add-completion-row") addCompletionRow();
  if (action === "add-song-row") addSongRow();
  if (action === "delete-record") target.closest(".editable-row")?.remove();
  if (action === "clear-metadata") clearMetadata(target.dataset.id);
}

function handleInput(event) {
  const field = event.target.dataset.field;
  if (!field) return;
  const cursor = event.target.selectionStart;
  state[field] = event.target.value;
  if (composingFields.has(field)) return;
  scheduleRender(field, cursor);
}

function handleChange(event) {
  const field = event.target.dataset.field;
  if (!field) return;
  state[field] = event.target.value;
  render();
}

function handleCompositionStart(event) {
  const field = event.target.dataset.field;
  if (field) composingFields.add(field);
}

function handleCompositionEnd(event) {
  const field = event.target.dataset.field;
  if (!field) return;
  composingFields.delete(field);
  state[field] = event.target.value;
  scheduleRender(field, event.target.selectionStart, 0);
}

function scheduleRender(field, cursor, delay = 90) {
  window.clearTimeout(renderTimer);
  renderTimer = window.setTimeout(() => {
    render();
    restoreInput(field, cursor);
  }, delay);
}

function restoreInput(field, cursor) {
  window.requestAnimationFrame(() => {
    const input = document.querySelector(`[data-field="${field}"]`);
    if (!input) return;
    input.focus();
    if (typeof cursor === "number" && typeof input.setSelectionRange === "function") {
      input.setSelectionRange(cursor, cursor);
    }
  });
}

function handleSubmit(event) {
  const form = event.target;
  const action = form.dataset.action;
  if (!action) return;
  event.preventDefault();
  if (action === "save-item") saveItemForm(form);
  if (action === "create-tag") createTag(new FormData(form).get("tag"));
  if (action === "save-section") saveSectionForm(form);
}

function getVisibleItems() {
  const query = normalizeText(state.query);
  return db.items
    .filter((item) => item.category === state.category)
    .filter((item) => state.status === "all" || item.status === state.status)
    .filter((item) => !query || searchableText(item).includes(query))
    .sort(sortItems(state.sort));
}

function getSectionItems(section) {
  return db.items
    .filter((item) => section.category === "all" || item.category === section.category)
    .filter((item) => section.status === "all" || item.status === section.status)
    .sort(sortItems(section.sort))
    .slice(0, Number(section.limit) || 6);
}

function searchCatalog() {
  const query = normalizeText(state.searchQuery);
  if (!query) return [];
  return CATALOG.filter((item) => item.category === state.searchCategory)
    .filter((item) => searchableText(item).includes(query))
    .slice(0, 8);
}

function searchableText(item) {
  return normalizeText(
    [
      item.title,
      item.originalTitle,
      item.creator,
      item.nationality,
      item.date,
      item.summary,
      ...(item.aliases || []),
      ...(item.tags || []),
    ].join(" "),
  );
}

function sortItems(sort) {
  return (a, b) => {
    if (sort === "title") return a.title.localeCompare(b.title, "zh-CN");
    if (sort === "date") return String(b.date).localeCompare(String(a.date));
    return String(b.updatedAt).localeCompare(String(a.updatedAt));
  };
}

function saveCandidate(sourceId) {
  const candidate = CATALOG.find((item) => item.sourceId === sourceId);
  if (!candidate) return;
  const exists = db.items.some((item) => item.source?.provider === "sample" && item.source.id === sourceId);
  if (exists) {
    showToast("这部作品已经在资料库中");
    return;
  }
  const item = normalizeItem({
    ...candidate,
    id: createId("item"),
    source: { provider: "sample", id: sourceId },
    status: "wish",
    progress: "未开始",
    rating: "",
    comment: "",
    completions: [],
    createdAt: getToday(),
    updatedAt: getToday(),
  });
  db.items.unshift(item);
  db.tags = mergeTags([...db.tags, ...item.tags]);
  saveDb("已保存到资料库");
  state.view = "library";
  state.category = item.category;
  state.query = item.title;
  render();
}

function openDetail(id) {
  const item = db.items.find((candidate) => candidate.id === id);
  if (!item) return;
  dialog.innerHTML = renderDetailForm(item);
  dialog.showModal();
}

function renderDetailForm(item) {
  return `
    <form class="sheet" data-action="save-item" data-id="${item.id}">
      <header class="sheet-header">
        <div>
          <p class="eyebrow">${item.category === "book" ? "图书" : "影视"}</p>
          <h2>${escapeHtml(item.title)}</h2>
        </div>
        <button class="detail-close" type="button" data-action="close-dialog" aria-label="关闭">×</button>
      </header>
      <div class="detail-top">
        ${renderCover(item, "detail")}
        <div>
          <p class="detail-muted">${escapeHtml(item.originalTitle || item.creator)}</p>
          <p class="detail-muted">${escapeHtml(item.creator)} · ${escapeHtml(item.nationality || "国籍待补")} · ${escapeHtml(item.date)}</p>
          <button class="secondary-button" type="button" data-action="clear-metadata" data-id="${item.id}">清除外部资料</button>
        </div>
      </div>
      <section class="form-grid">
        ${field("title", "标题", item.title)}
        ${field("originalTitle", "原名/别名", item.originalTitle)}
        ${field("creator", item.category === "book" ? "作者" : "导演/主创", item.creator)}
        ${field("nationality", "国籍/地区", item.nationality)}
        ${field("date", "出版/发行日期", item.date)}
        ${field("progress", "页数/集数进度", item.progress)}
        ${selectField("status", "状态", item.status, STATUS_LABELS[item.category])}
        ${selectField("versionType", "版本/媒介", item.versionType, {
          "": "未填写",
          纸书: "纸书",
          电子书: "电子书",
          Kindle: "Kindle",
          影院: "影院",
          流媒体: "流媒体",
          蓝光: "蓝光",
          其他: "其他",
        })}
        ${field("versionNote", "版本说明", item.versionNote)}
        ${field("rating", "评分（十分制）", item.rating)}
        <label class="field full"><span>标签（用逗号分隔）</span><input name="tags" value="${escapeAttribute(item.tags.join("，"))}" /></label>
        <label class="field full"><span>简介</span><textarea name="summary">${escapeHtml(item.summary)}</textarea></label>
        <label class="field full"><span>总评</span><textarea name="comment">${escapeHtml(item.comment)}</textarea></label>
      </section>
      <section class="sub-editor">
        <header>
          <h3>完成记录</h3>
          <button class="mini-button" type="button" data-action="add-completion-row">添加</button>
        </header>
        <div id="completionRows">
          ${item.completions.map(renderCompletionRow).join("") || `<p class="empty-inline">暂无完成记录</p>`}
        </div>
      </section>
      ${
        item.category === "film"
          ? `<section class="sub-editor">
              <header>
                <h3>主题曲与插曲</h3>
                <button class="mini-button" type="button" data-action="add-song-row">添加</button>
              </header>
              <div id="songRows">${item.songs.map(renderSongRow).join("") || `<p class="empty-inline">暂无曲目</p>`}</div>
            </section>`
          : ""
      }
      <footer class="sheet-actions">
        <button class="secondary-button" type="button" data-action="close-dialog">取消</button>
        <button class="primary-button" type="submit">保存</button>
      </footer>
    </form>
  `;
}

function field(name, label, value) {
  return `<label class="field"><span>${label}</span><input name="${name}" value="${escapeAttribute(value || "")}" /></label>`;
}

function selectField(name, label, value, options) {
  return `
    <label class="field">
      <span>${label}</span>
      <select name="${name}">
        ${Object.entries(options).map(([optionValue, optionLabel]) => renderOption(optionValue, optionLabel, value)).join("")}
      </select>
    </label>
  `;
}

function renderCompletionRow(record = {}) {
  return `
    <div class="editable-row" data-row="completion">
      <input name="completionDate" type="date" value="${escapeAttribute(record.date || getToday())}" />
      <input name="completionRating" inputmode="decimal" placeholder="评分" value="${escapeAttribute(record.rating || "")}" />
      <input name="completionComment" placeholder="评论" value="${escapeAttribute(record.comment || "")}" />
      <button class="mini-button danger" type="button" data-action="delete-record">删</button>
    </div>
  `;
}

function renderSongRow(song = {}) {
  return `
    <div class="editable-row" data-row="song">
      <input name="songTitle" placeholder="歌名" value="${escapeAttribute(song.title || "")}" />
      <input name="songArtist" placeholder="歌手" value="${escapeAttribute(song.artist || "")}" />
      <button class="mini-button danger" type="button" data-action="delete-record">删</button>
    </div>
  `;
}

function saveItemForm(form) {
  const id = form.dataset.id;
  const data = new FormData(form);
  db.items = db.items.map((item) => {
    if (item.id !== id) return item;
    const updated = {
      ...item,
      title: clean(data.get("title")),
      originalTitle: clean(data.get("originalTitle")),
      creator: clean(data.get("creator")),
      nationality: clean(data.get("nationality")),
      date: clean(data.get("date")),
      progress: clean(data.get("progress")),
      status: clean(data.get("status")) || item.status,
      versionType: clean(data.get("versionType")),
      versionNote: clean(data.get("versionNote")),
      rating: clean(data.get("rating")),
      tags: parseTags(data.get("tags")),
      summary: clean(data.get("summary")),
      comment: clean(data.get("comment")),
      completions: readCompletionRows(form),
      songs: item.category === "film" ? readSongRows(form) : item.songs,
      updatedAt: getToday(),
    };
    if (updated.completions.length > 1 && updated.status === "done") updated.status = "again";
    return updated;
  });
  db.tags = mergeTags([...db.tags, ...db.items.flatMap((item) => item.tags)]);
  saveDb("已保存");
  closeDialog();
  render();
}

function readCompletionRows(form) {
  return [...form.querySelectorAll('[data-row="completion"]')]
    .map((row) => ({
      id: createId("done"),
      date: clean(row.querySelector('[name="completionDate"]').value),
      rating: clean(row.querySelector('[name="completionRating"]').value),
      comment: clean(row.querySelector('[name="completionComment"]').value),
    }))
    .filter((record) => record.date || record.rating || record.comment);
}

function readSongRows(form) {
  return [...form.querySelectorAll('[data-row="song"]')]
    .map((row) => ({
      title: clean(row.querySelector('[name="songTitle"]').value),
      artist: clean(row.querySelector('[name="songArtist"]').value),
    }))
    .filter((song) => song.title || song.artist);
}

function addCompletionRow() {
  const container = dialog.querySelector("#completionRows");
  if (!container) return;
  container.querySelector(".empty-inline")?.remove();
  container.insertAdjacentHTML("beforeend", renderCompletionRow());
}

function addSongRow() {
  const container = dialog.querySelector("#songRows");
  if (!container) return;
  container.querySelector(".empty-inline")?.remove();
  container.insertAdjacentHTML("beforeend", renderSongRow());
}

function clearMetadata(id) {
  db.items = db.items.map((item) =>
    item.id === id
      ? {
          ...item,
          originalTitle: "",
          creator: "",
          nationality: "",
          date: "",
          summary: "",
          coverUrl: "",
          source: { provider: "cleared", id: "" },
          updatedAt: getToday(),
        }
      : item,
  );
  saveDb("已清除外部资料，个人记录已保留");
  closeDialog();
  render();
}

function toggleSelected(id) {
  if (state.selectedIds.has(id)) state.selectedIds.delete(id);
  else state.selectedIds.add(id);
  render();
}

function applyBulkStatus() {
  const status = document.querySelector('[data-bulk="status"]')?.value;
  if (!status || state.selectedIds.size === 0) return;
  db.items = db.items.map((item) =>
    state.selectedIds.has(item.id) ? { ...item, status, updatedAt: getToday() } : item,
  );
  saveDb("已批量修改状态");
  render();
}

function applyBulkTag(mode) {
  const tag = document.querySelector('[data-bulk="tag"]')?.value;
  if (!tag || state.selectedIds.size === 0) return;
  db.items = db.items.map((item) => {
    if (!state.selectedIds.has(item.id)) return item;
    const tags = mode === "add" ? [...new Set([...item.tags, tag])] : item.tags.filter((current) => current !== tag);
    return { ...item, tags, updatedAt: getToday() };
  });
  saveDb(mode === "add" ? "已批量添加标签" : "已批量移除标签");
  render();
}

function createTag(value) {
  const tag = clean(value);
  if (!tag) return;
  db.tags = mergeTags([...db.tags, tag]);
  saveDb("标签已添加");
  render();
}

function renameTag(oldTag) {
  const next = prompt("新的标签名", oldTag);
  const newTag = clean(next);
  if (!newTag || newTag === oldTag) return;
  db.items = db.items.map((item) => ({
    ...item,
    tags: item.tags.map((tag) => (tag === oldTag ? newTag : tag)),
  }));
  db.tags = mergeTags(db.tags.map((tag) => (tag === oldTag ? newTag : tag)));
  saveDb("标签已改名");
  render();
}

function mergeTag(oldTag) {
  const target = prompt("合并到哪个标签？", db.tags.find((tag) => tag !== oldTag) || "");
  const newTag = clean(target);
  if (!newTag || newTag === oldTag) return;
  db.items = db.items.map((item) => ({
    ...item,
    tags: [...new Set(item.tags.map((tag) => (tag === oldTag ? newTag : tag)))],
  }));
  db.tags = mergeTags(db.tags.filter((tag) => tag !== oldTag).concat(newTag));
  saveDb("标签已合并");
  render();
}

function deleteTag(tag) {
  if (!confirm(`删除标签“${tag}”？作品不会被删除。`)) return;
  db.items = db.items.map((item) => ({ ...item, tags: item.tags.filter((current) => current !== tag) }));
  db.tags = db.tags.filter((current) => current !== tag);
  saveDb("标签已删除");
  render();
}

function openSectionForm() {
  dialog.innerHTML = `
    <form class="sheet" data-action="save-section">
      <header class="sheet-header">
        <div>
          <p class="eyebrow">首页栏目</p>
          <h2>新建栏目</h2>
        </div>
        <button class="detail-close" type="button" data-action="close-dialog" aria-label="关闭">×</button>
      </header>
      <section class="form-grid">
        ${field("title", "栏目名称", "我的栏目")}
        ${selectField("category", "分类", "all", { all: "全部", book: "图书", film: "影视" })}
        ${selectField("status", "状态", "doing", { all: "全部", wish: "想读/想看", doing: "在读/在看", done: "已读/已看", again: "又读/又看" })}
        ${selectField("sort", "排序", "recent", { recent: "最近更新", title: "标题", date: "出版/发行日期" })}
        ${field("limit", "显示数量", "6")}
      </section>
      <footer class="sheet-actions">
        <button class="secondary-button" type="button" data-action="close-dialog">取消</button>
        <button class="primary-button" type="submit">保存</button>
      </footer>
    </form>
  `;
  dialog.showModal();
}

function saveSectionForm(form) {
  const data = new FormData(form);
  db.sections.push({
    id: createId("sec"),
    title: clean(data.get("title")) || "我的栏目",
    category: clean(data.get("category")) || "all",
    status: clean(data.get("status")) || "all",
    sort: clean(data.get("sort")) || "recent",
    limit: Number(data.get("limit")) || 6,
  });
  saveDb("栏目已添加");
  closeDialog();
  render();
}

function moveSection(id, direction) {
  const index = db.sections.findIndex((section) => section.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= db.sections.length) return;
  const sections = [...db.sections];
  const [section] = sections.splice(index, 1);
  sections.splice(nextIndex, 0, section);
  db.sections = sections;
  saveDb();
  render();
}

function deleteSection(id) {
  db.sections = db.sections.filter((section) => section.id !== id);
  saveDb("栏目已删除");
  render();
}

function importFile() {
  const input = document.querySelector("#importFile");
  const file = input?.files?.[0];
  if (!file) {
    showToast("请选择文件");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = file.name.endsWith(".csv") ? parseCsv(reader.result) : parseJsonImport(reader.result);
      mergeImportedItems(imported);
      saveDb(`已导入 ${imported.length} 个条目`);
      render();
    } catch (error) {
      showToast(`导入失败：${error.message}`);
    }
  };
  reader.readAsText(file);
}

function parseJsonImport(text) {
  const parsed = JSON.parse(text);
  const items = Array.isArray(parsed) ? parsed : parsed.items;
  if (!Array.isArray(items)) throw new Error("JSON 中没有 items 数组");
  return items.map(normalizeItem);
}

function parseCsv(text) {
  const rows = text.trim().split(/\r?\n/).map(parseCsvLine);
  const headers = rows.shift()?.map((header) => header.trim()) || [];
  if (!headers.includes("title")) throw new Error("CSV 需要 title 表头");
  return rows
    .filter((row) => row.some(Boolean))
    .map((row) => {
      const entry = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
      return normalizeItem({
        title: entry.title,
        category: entry.category || "book",
        status: entry.status || "wish",
        creator: entry.creator,
        date: entry.date,
        nationality: entry.nationality,
        rating: entry.rating,
        comment: entry.comment,
        tags: parseTags(entry.tags),
        source: { provider: "import", id: `${entry.category || "book"}-${entry.title}` },
      });
    });
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (const char of line) {
    if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) {
      cells.push(current);
      current = "";
    } else current += char;
  }
  cells.push(current);
  return cells.map((cell) => cell.trim());
}

function mergeImportedItems(imported) {
  const existingKeys = new Set(db.items.map(itemKey));
  imported.forEach((item) => {
    if (existingKeys.has(itemKey(item))) return;
    db.items.unshift({ ...item, id: createId("item"), createdAt: getToday(), updatedAt: getToday() });
    existingKeys.add(itemKey(item));
  });
  db.tags = mergeTags([...db.tags, ...db.items.flatMap((item) => item.tags)]);
}

function downloadBackup() {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `julie-store-backup-${getToday()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function resetDemo() {
  if (!confirm("确认恢复样例数据？当前本地修改会被覆盖。")) return;
  localStorage.removeItem(STORE_KEY);
  localStorage.removeItem(LEGACY_KEY);
  db = loadDb();
  state.view = "library";
  state.category = "book";
  showToast("已恢复样例数据");
  render();
}

function closeDialog() {
  dialog.close();
  dialog.innerHTML = "";
}

function describeSection(section) {
  const category = section.category === "book" ? "图书" : section.category === "film" ? "影视" : "全部";
  const status = section.status === "all" ? "全部状态" : `${STATUS_LABELS.book[section.status]}/${STATUS_LABELS.film[section.status]}`;
  return `${category} · ${status}`;
}

function getDisplayTags(item) {
  const statusLabels = new Set(Object.values(STATUS_LABELS[item.category]));
  return item.tags.filter((tag) => !statusLabels.has(tag));
}

function getCoverUrl(item, fallback) {
  const fallbackUrl =
    fallback?.coverUrl || DEFAULT_COVER_URLS[item.id] || DEFAULT_COVER_URLS[item.source?.id] || "";
  if (!item.coverUrl) return fallbackUrl;
  if (item.coverUrl.startsWith("http")) return fallbackUrl || item.coverUrl;
  return item.coverUrl;
}

function normalizeCategory(value) {
  const text = clean(value).toLowerCase();
  if (text === "film" || text === "movie" || text === "video" || text === "影视" || text === "电影") {
    return "film";
  }
  return "book";
}

function normalizeStatus(category, value) {
  const text = clean(value);
  const map = {
    wish: "wish",
    doing: "doing",
    done: "done",
    again: "again",
    想读: "wish",
    想看: "wish",
    在读: "doing",
    在看: "doing",
    已读: "done",
    已看: "done",
    又读: "again",
    又看: "again",
  };
  const status = map[text] || text || "wish";
  return STATUS_LABELS[category][status] ? status : "wish";
}

function parseTags(value) {
  return String(value || "")
    .split(/[，,]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function mergeTags(tags) {
  return [...new Set(tags.map((tag) => clean(tag)).filter(Boolean))];
}

function itemKey(item) {
  return `${item.category}:${item.source?.provider || ""}:${item.source?.id || item.title}`;
}

function renderOption(value, label, selected) {
  return `<option value="${escapeAttribute(value)}" ${String(value) === String(selected) ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

function clean(value) {
  return String(value || "").trim();
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function createId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}
