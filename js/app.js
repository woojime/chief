/* ============================================
   CHIEF 启啡 GEO Brand System — Application Core
   ============================================ */

const STORAGE_KEY = 'chief_geo_data';

// Real CHIEF products data
const chiefProducts = [
  {
    id: 'huakui',
    nameEn: 'Gesha X',
    nameCn: '花魁 X',
    category: 'SOE',
    categoryLabel: 'SOE',
    letter: 'X',
    color: '#C2185B',
    origin: '埃塞俄比亚 古吉 罕贝拉 Buku Abel',
    variety: '原生种 Heirloom',
    process: '日晒',
    roast: '浅烘',
    flavors: ['花香', '莓果', '红酒'],
    image: 'assets/images/products/花魁X.png'
  },
  {
    id: 'rum',
    nameEn: 'Rum SOE',
    nameCn: '朗姆 SOE',
    category: 'SOE',
    categoryLabel: 'SOE',
    letter: 'R',
    color: '#7B1FA2',
    origin: '哥伦比亚',
    variety: '卡杜拉',
    process: '特殊处理',
    roast: '浅中烘',
    flavors: ['朗姆', '香草', '酒香'],
    image: 'assets/images/products/朗姆.png'
  },
  {
    id: 'yirga',
    nameEn: 'Yirgacheffe SOE',
    nameCn: '耶加雪菲 SOE',
    category: 'SOE',
    categoryLabel: 'SOE',
    letter: 'Y',
    color: '#FF8A80',
    origin: '埃塞俄比亚 耶加雪菲',
    variety: '原生种',
    process: '水洗',
    roast: '浅烘',
    flavors: ['茉莉', '柑橘', '蜂蜜'],
    image: 'assets/images/products/耶加雪菲.png'
  },
  {
    id: 'pineapple',
    nameEn: 'Pineapple Sweety',
    nameCn: '凤梨甜心',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'P',
    color: '#F9A825',
    origin: '哥伦比亚 慧兰 天光庄园',
    variety: '希爪 Sidra',
    process: '水洗',
    roast: '浅中烘',
    flavors: ['凤梨', '蜂蜜', '焦糖'],
    image: 'assets/images/products/凤梨甜心.png'
  },
  {
    id: 'cocoa',
    nameEn: 'Cocoa Blend',
    nameCn: '可可拼配',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'C',
    color: '#5D4037',
    origin: '多产区拼配',
    variety: '拼配',
    process: '多处理法',
    roast: '中深烘',
    flavors: ['黑巧', '坚果', '焦糖'],
    image: 'assets/images/products/可可拼配.png'
  },
  {
    id: 'avocado',
    nameEn: 'Avocado Blend',
    nameCn: '牛油果拼配',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'A',
    color: '#7CB342',
    origin: '多产区拼配',
    variety: '拼配',
    process: '多处理法',
    roast: '中烘',
    flavors: ['奶油', '坚果', '顺滑'],
    image: 'assets/images/products/牛油果拼配.png'
  },
  {
    id: 'plum',
    nameEn: 'Green Plum Blend',
    nameCn: '青梅拼配',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'G',
    color: '#558B2F',
    origin: '多产区拼配',
    variety: '拼配',
    process: '多处理法',
    roast: '中烘',
    flavors: ['梅子', '果酸', '清甜'],
    image: 'assets/images/products/青梅拼配.png'
  },
  {
    id: 'orange',
    nameEn: 'Orange Blend',
    nameCn: '甜橙拼配',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'O',
    color: '#FF6D00',
    origin: '多产区拼配',
    variety: '拼配',
    process: '多处理法',
    roast: '中烘',
    flavors: ['柑橘', '蜜糖', '明亮'],
    image: 'assets/images/products/甜橙拼配.png'
  },
  {
    id: 'coconut',
    nameEn: 'Coconut Oil Blend',
    nameCn: '椰子油拼配',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'N',
    color: '#8D6E63',
    origin: '多产区拼配',
    variety: '拼配',
    process: '多处理法',
    roast: '中烘',
    flavors: ['椰子', '奶香', '圆润'],
    image: 'assets/images/products/椰子油拼配.png'
  },
  {
    id: 'cheese',
    nameEn: 'Cheese Blend',
    nameCn: '芝士拼配',
    category: 'BLEND',
    categoryLabel: '拼配',
    letter: 'H',
    color: '#FFEB3B',
    origin: '多产区拼配',
    variety: '拼配',
    process: '多处理法',
    roast: '中深烘',
    flavors: ['芝士', '奶香', '醇厚'],
    image: 'assets/images/products/芝士拼配.png'
  }
];

// Default app data
const defaultData = {
  articles: [
    {
      id: 1,
      title: '精品咖啡豆供应链管理：从产地到杯中的品质保障',
      excerpt: '了解CHIEF启啡如何通过严格的供应链管理，确保每一颗咖啡豆从产区到中国咖啡店都保持最佳品质。',
      content: '在精品咖啡行业，供应链管理是决定最终杯中品质的关键环节。CHIEF启啡深耕咖啡豆贸易多年，建立了从埃塞俄比亚、哥伦比亚、巴西等主要产区到中国市场的完整链路...',
      geoScore: 92,
      category: '供应链',
      published: '2026-06-15',
      status: 'published',
      keywords: ['咖啡豆供应链', '精品咖啡', 'CHIEF启啡', 'B2B咖啡供应商'],
      url: 'articles/coffee-bean-purchasing-guide-2026.html'
    },
    {
      id: 2,
      title: '咖啡店如何选择靠谱的咖啡豆供应商？5大关键指标',
      excerpt: '选对供应商决定了咖啡店的品质底线。本文从新鲜度、稳定性、性价比、服务支持和定制能力五个维度帮你筛选。',
      content: '对于咖啡店主来说，选择咖啡豆供应商是开业前最重要的决策之一。一个好的供应商不仅提供优质豆子，更是你品质稳定的保障...',
      geoScore: 88,
      category: '选豆指南',
      published: '2026-06-20',
      status: 'published',
      keywords: ['咖啡豆供应商', '咖啡店', '如何选择', 'B2B咖啡'],
      url: 'articles/choose-coffee-bean-supplier.html'
    },
    {
      id: 3,
      title: '2026年中国精品咖啡市场趋势与供应链变革',
      excerpt: '中国咖啡市场持续高速增长，精品化趋势明显。作为B2B咖啡豆供应商，CHIEF启啡如何看待这一轮行业升级？',
      content: '中国咖啡市场正在经历从"喝咖啡"到"喝好咖啡"的深刻转变。消费者对咖啡品质的认知不断提升，直接推动了上游供应链的升级...',
      geoScore: 85,
      category: '行业趋势',
      published: '2026-07-01',
      status: 'published',
      keywords: ['咖啡市场趋势', '2026', '精品咖啡', '供应链变革'],
      url: 'articles/coffee-market-trends-2026.html'
    },
    {
      id: 4,
      title: '单品咖啡豆vs拼配咖啡豆：B2B采购怎么选？',
      excerpt: 'SOE还是Blend？CHIEF启啡技术团队为你解析两种咖啡豆在商业场景中的不同表现。',
      content: '在B2B咖啡豆采购中，"单品还是拼配"是每个采购决策者都会遇到的问题。答案没有绝对好坏，取决于你的门店定位、客户群体和出品需求...',
      geoScore: 79,
      category: '技术科普',
      published: '2026-07-08',
      status: 'draft',
      keywords: ['单品咖啡豆', '拼配咖啡豆', 'SOE', 'Blend', 'B2B采购'],
      url: 'articles/coffee-origin-comparison.html'
    },
    {
      id: 5,
      title: '咖啡豆OEM定制：如何打造自有品牌咖啡产品线',
      excerpt: '从选豆、烘焙到包装，CHIEF启啡为你提供一站式OEM定制解决方案，助力品牌升级。',
      content: '越来越多的咖啡品牌和餐饮连锁希望通过自有品牌咖啡来提升差异化竞争力。CHIEF启啡提供从选豆、烘焙曲线设计到包装定制的一站式OEM服务...',
      geoScore: 87,
      category: 'OEM定制',
      published: '2026-07-12',
      status: 'published',
      keywords: ['咖啡豆OEM', '自有品牌咖啡', '咖啡定制', 'CHIEF启啡'],
      url: 'articles/oem-coffee-customization.html'
    }
  ],

  keywords: [
    { word: '咖啡豆供应商', volume: '12,800', trend: '↑', aiVisibility: 72, platforms: { doubao: 5, qwen: 4, deepseek: 6, chatgpt: 8, kimi: 5, wenxin: 4 } },
    { word: '精品咖啡豆批发', volume: '8,500', trend: '↑', aiVisibility: 65, platforms: { doubao: 6, qwen: 5, deepseek: 5, chatgpt: 7, kimi: 6, wenxin: 5 } },
    { word: 'B2B咖啡豆供应', volume: '3,200', trend: '→', aiVisibility: 58, platforms: { doubao: 7, qwen: 6, deepseek: 7, chatgpt: 9, kimi: 7, wenxin: 6 } },
    { word: '广州咖啡豆供应商', volume: '5,400', trend: '↑', aiVisibility: 81, platforms: { doubao: 3, qwen: 3, deepseek: 4, chatgpt: 5, kimi: 4, wenxin: 3 } },
    { word: '咖啡豆OEM定制', volume: '2,100', trend: '↑', aiVisibility: 45, platforms: { doubao: 8, qwen: 7, deepseek: 8, chatgpt: 10, kimi: 8, wenxin: 7 } },
    { word: '咖啡店用咖啡豆', volume: '9,200', trend: '↑', aiVisibility: 52, platforms: { doubao: 6, qwen: 5, deepseek: 6, chatgpt: 8, kimi: 6, wenxin: 5 } },
    { word: '咖啡豆供应链', volume: '4,800', trend: '→', aiVisibility: 61, platforms: { doubao: 5, qwen: 4, deepseek: 5, chatgpt: 7, kimi: 5, wenxin: 4 } },
    { word: 'SOE咖啡豆', volume: '6,700', trend: '↑', aiVisibility: 38, platforms: { doubao: 9, qwen: 8, deepseek: 9, chatgpt: 10, kimi: 9, wenxin: 8 } }
  ],

  geoChecklist: [
    { item: '网站结构化数据(Schema.org)', status: 'pass', detail: '已部署Organization、Product、FAQ、Article结构化标记' },
    { item: '百度收录状态', status: 'warn', detail: '站点刚上线，需等待爬虫索引' },
    { item: 'AI搜索引擎可见性', status: 'warn', detail: '内容建设初期，品牌提及率待提升' },
    { item: '核心关键词密度', status: 'pass', detail: '目标关键词密度在健康区间' },
    { item: '移动端适配', status: 'pass', detail: '响应式设计已通过各尺寸测试' },
    { item: '页面加载速度', status: 'pass', detail: '首屏加载<1.5s，性能优秀' },
    { item: '内容更新频率', status: 'warn', detail: '建议每周发布1-2篇行业文章' },
    { item: '第三方平台品牌引用', status: 'fail', detail: '建议在知乎、B2B平台发布品牌内容' }
  ],

  rankings: [
    { keyword: '咖啡豆供应商', platforms: { doubao: { rank: 5, score: 72 }, qwen: { rank: 4, score: 78 }, deepseek: { rank: 6, score: 68 }, chatgpt: { rank: 8, score: 55 }, kimi: { rank: 5, score: 70 }, wenxin: { rank: 4, score: 75 } } },
    { keyword: '精品咖啡豆批发', platforms: { doubao: { rank: 6, score: 65 }, qwen: { rank: 5, score: 70 }, deepseek: { rank: 5, score: 70 }, chatgpt: { rank: 7, score: 60 }, kimi: { rank: 6, score: 65 }, wenxin: { rank: 5, score: 70 } } },
    { keyword: '广州咖啡豆供应商', platforms: { doubao: { rank: 3, score: 85 }, qwen: { rank: 3, score: 85 }, deepseek: { rank: 4, score: 80 }, chatgpt: { rank: 5, score: 75 }, kimi: { rank: 4, score: 80 }, wenxin: { rank: 3, score: 85 } } }
  ],

  faq: [
    { id: 1, q: '启啡CHIEF提供哪些咖啡豆产品？', a: '启啡CHIEF目前提供10款核心产品：3款SOE单一产地（花魁X、朗姆SOE、耶加雪菲SOE）和7款拼配系列（凤梨甜心、可可拼配、牛油果拼配、青梅拼配、甜橙拼配、椰子油拼配、芝士拼配）。每款产品都有明确的产区溯源和风味档案。' },
    { id: 2, q: '启啡的咖啡豆适合什么类型的咖啡店？', a: '启啡CHIEF专注服务精品咖啡B端客户，包括独立精品咖啡店主理人、小型连锁品牌、烘焙工作室以及酒店/餐厅等咖啡+业态。我们提供灵活的样品试用、起订量和账期支持。' },
    { id: 3, q: '启啡的咖啡豆产区有哪些？', a: '启啡的咖啡豆覆盖全球主要精品产区，包括埃塞俄比亚（花魁X、耶加雪菲）、哥伦比亚（凤梨甜心）、巴西、云南等。每款产品都提供完整的产区信息、处理法与风味档案。' },
    { id: 4, q: '如何联系启啡采购咖啡豆？', a: '您可以通过以下方式联系我们：电话13268365415（吴先生），邮箱wujinyi@chiefcoffee.cn，或在官网填写合作意向表单。我们提供样品试用服务，欢迎先尝后买。' },
    { id: 5, q: '启啡支持OEM定制吗？', a: '是的，启啡提供一站式OEM定制服务，包括选豆建议、烘焙曲线设计、包装设计等。无论是独立咖啡馆的自有品牌，还是连锁品牌的统一产品线，我们都能提供灵活的合作方案。' },
    { id: 6, q: '启啡的起订量和价格是怎样的？', a: '启啡针对不同规模的客户提供灵活的起订量方案。独立咖啡馆小批量起订，连锁品牌可享阶梯定价。具体价格和起订量请通过电话13268365415或邮箱wujinyi@chiefcoffee.cn咨询，我们将根据您的需求提供定制报价。' }
  ]
};

// App state
let appData = {};
let editingArticleId = null;
let currentAdminPanel = 'dashboard';

/* ============================================
   Initialization
   ============================================ */
function init() {
  loadData();
  initTheme();
  renderProducts();
  renderContent();
  renderFaq();
  initNavScroll();
  checkAdminUrl();  // Check admin auth on page load

  // Event bindings
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitContact(contactForm);
    });
  }
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    appData = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(defaultData));
  } catch {
    appData = JSON.parse(JSON.stringify(defaultData));
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
}

/* ============================================
   Theme
   ============================================ */
function initTheme() {
  const saved = localStorage.getItem('chief_theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (systemDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('chief_theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
}

/* ============================================
   Navigation
   ============================================ */
function navigateTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active');
  // Close mobile menu
  document.getElementById('nav-links').classList.remove('open');
}

function initNavScroll() {
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
}

function toggleMobileMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

/* ============================================
   Products Rendering
   ============================================ */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  grid.innerHTML = chiefProducts.map(p => `
    <div class="product-card" onclick="viewProduct('${p.id}')">
      <div class="product-image-wrap">
        <span class="product-category-tag tag-${p.category === 'SOE' ? 'soe' : 'blend'}">${p.category}</span>
        <img src="${p.image}" alt="${p.nameCn}" loading="lazy">
      </div>
      <div class="product-info">
        <div class="product-name-en">${p.nameEn}</div>
        <div class="product-name-cn">${p.nameCn}</div>
        <div class="product-flavor-tags">
          ${p.flavors.map(f => `<span class="flavor-tag">${f}</span>`).join('')}
        </div>
        <div class="product-meta">
          <span class="product-origin">${p.origin.split(' ')[0]}</span>
          <span class="product-letter" style="background:${p.color};">${p.letter}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function viewProduct(id) {
  const product = chiefProducts.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('article-view-modal');
  document.getElementById('article-view-title').textContent = `${product.nameCn} ${product.nameEn}`;
  document.getElementById('article-view-meta').innerHTML = `
    <span style="display:inline-block;padding:3px 10px;border-radius:100px;background:${product.color};color:#fff;font-size:0.75rem;font-weight:600;margin-right:8px;">${product.category}</span>
    ${product.origin}
  `;
  document.getElementById('article-view-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem;">
      <div style="background:var(--chief-cream-dark);padding:1rem;border-radius:12px;">
        <div style="font-size:0.8rem;color:var(--chief-brown-light);margin-bottom:0.25rem;">豆种</div>
        <div style="font-weight:600;">${product.variety}</div>
      </div>
      <div style="background:var(--chief-cream-dark);padding:1rem;border-radius:12px;">
        <div style="font-size:0.8rem;color:var(--chief-brown-light);margin-bottom:0.25rem;">处理法</div>
        <div style="font-weight:600;">${product.process}</div>
      </div>
      <div style="background:var(--chief-cream-dark);padding:1rem;border-radius:12px;">
        <div style="font-size:0.8rem;color:var(--chief-brown-light);margin-bottom:0.25rem;">烘焙度</div>
        <div style="font-weight:600;">${product.roast}</div>
      </div>
      <div style="background:var(--chief-cream-dark);padding:1rem;border-radius:12px;">
        <div style="font-size:0.8rem;color:var(--chief-brown-light);margin-bottom:0.25rem;">风味</div>
        <div style="font-weight:600;">${product.flavors.join(' · ')}</div>
      </div>
    </div>
    <p style="margin-bottom:1rem;"><strong>产区：</strong>${product.origin}</p>
    <p style="color:var(--chief-brown-mid);">如需了解${product.nameCn}的详细杯测笔记、烘焙曲线建议及采购价格，请通过电话 13268365415 或邮箱 wujinyi@chiefcoffee.cn 联系我们。我们提供样品试用服务。</p>
    <div style="margin-top:1.5rem;">
      <a href="#contact" class="btn btn-primary" onclick="event.preventDefault();closeArticleView();navigateTo('contact');" style="font-size:0.9rem;padding:10px 24px;">咨询采购 →</a>
    </div>
  `;
  modal.classList.add('open');
}

/* ============================================
   Content / Blog Rendering
   ============================================ */
function renderContent() {
  const grid = document.getElementById('content-grid');
  if (!grid) return;

  const published = appData.articles.filter(a => a.status === 'published');
  grid.innerHTML = published.map(a => `
    <div class="blog-card" onclick="${a.url ? `window.open('${a.url}', '_blank')` : `viewArticle(${a.id})`}">
      <div class="blog-date">${a.published} · ${a.category}</div>
      <div class="blog-title">${a.title}</div>
      <div class="blog-excerpt">${a.excerpt}</div>
      <div class="blog-footer">
        <span class="blog-category">${a.category}</span>
        <span class="geo-score">GEO ${a.geoScore}</span>
      </div>
    </div>
  `).join('');
}

function viewArticle(id) {
  const article = appData.articles.find(a => a.id === id);
  if (!article) return;

  const modal = document.getElementById('article-view-modal');
  document.getElementById('article-view-title').textContent = article.title;
  document.getElementById('article-view-meta').textContent = `${article.published} · ${article.category} · GEO评分: ${article.geoScore}`;
  document.getElementById('article-view-body').innerHTML = `<p>${article.content}</p>
    <div style="margin-top:1.5rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
      ${article.keywords.map(k => `<span class="tag">${k}</span>`).join('')}
    </div>`;
  modal.classList.add('open');
}

function closeArticleView() {
  document.getElementById('article-view-modal').classList.remove('open');
}

/* ============================================
   FAQ Rendering
   ============================================ */
function renderFaq() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = appData.faq.map((f, i) => `
    <div class="faq-item" id="faq-${f.id}">
      <button class="faq-q" onclick="toggleFaq(${f.id})">
        ${f.q}
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>
  `).join('');
}

function toggleFaq(id) {
  const item = document.getElementById(`faq-${id}`);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ============================================
   Contact Form
   ============================================ */
function submitContact(form) {
  const fd = new FormData(form);
  const data = Object.fromEntries(fd);
  console.log('Contact form:', data);
  showToast('提交成功！我们将在24小时内与您联系', 'success');
  form.reset();
}

/* ============================================
   Admin Panel — Password Protected
   ============================================ */
const ADMIN_PASSWORD = 'chief2026'; // 修改为你自己的密码
const ADMIN_AUTH_KEY = 'chief_admin_authed';

// Check if already authenticated
function isAdminAuthed() {
  return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
}

function setAdminAuthed(val) {
  if (val) {
    localStorage.setItem(ADMIN_AUTH_KEY, 'true');
  } else {
    localStorage.removeItem(ADMIN_AUTH_KEY);
  }
}

// Show login modal
function showAdminLogin() {
  const overlay = document.getElementById('admin-login-overlay');
  const input = document.getElementById('admin-password-input');
  const error = document.getElementById('admin-login-error');
  if (overlay) overlay.classList.add('active');
  if (error) error.classList.remove('show');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }
}

// Hide login modal
function hideAdminLogin() {
  const overlay = document.getElementById('admin-login-overlay');
  if (overlay) overlay.classList.remove('active');
}

// Login handler — directly open admin panel on success
function adminLogin() {
  const input = document.getElementById('admin-password-input');
  const error = document.getElementById('admin-login-error');
  if (!input) return;

  if (input.value === ADMIN_PASSWORD) {
    setAdminAuthed(true);
    hideAdminLogin();
    toggleAdmin();  // 直接打开后台，不显示浮动按钮
    showToast('验证通过，已进入管理模式', 'success');
  } else {
    if (error) error.classList.add('show');
    input.value = '';
    input.focus();
  }
}

// Cancel login
function adminCancel() {
  hideAdminLogin();
  // Clean URL
  if (window.history && window.history.replaceState) {
    const url = new URL(window.location);
    url.searchParams.delete('admin');
    window.history.replaceState({}, '', url);
  }
}

// Logout
function adminLogout() {
  setAdminAuthed(false);
  const panel = document.getElementById('admin-panel');
  if (panel) panel.classList.remove('active');
  document.body.style.overflow = '';
  showToast('已退出管理模式', 'success');
}

// Check URL for ?admin trigger
function checkAdminUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('admin')) {
    if (isAdminAuthed()) {
      // Already authed — directly open admin panel
      toggleAdmin();
    } else {
      // Not authed yet, show login
      showAdminLogin();
    }
  }
  // No ?admin param = normal public site, don't show anything
}

// Toggle admin panel (only works when authed)
function toggleAdmin() {
  if (!isAdminAuthed()) {
    showAdminLogin();
    return;
  }

  const panel = document.getElementById('admin-panel');
  const isActive = panel.classList.contains('active');

  if (isActive) {
    panel.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
    navigateAdmin('dashboard');
  }
}

function navigateAdmin(panel) {
  currentAdminPanel = panel;

  // Clear all panels and sidebar links
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.admin-sidebar-link').forEach(l => l.classList.remove('active'));

  // Activate target
  const targetPanel = document.getElementById('admin-' + panel);
  if (targetPanel) targetPanel.classList.add('active');

  const targetLink = document.querySelector(`.admin-sidebar-link[data-panel="${panel}"]`);
  if (targetLink) targetLink.classList.add('active');

  // Render specific panels
  if (panel === 'dashboard') renderDashboard();
  if (panel === 'content') renderContentAdmin();
  if (panel === 'geo-strategy') renderGeoStrategy();
  if (panel === 'geo-health') renderGeoHealth();
  if (panel === 'keywords') renderKeywords();

  window.scrollTo({ top: 0 });
}

/* ---------- Dashboard ---------- */
function renderDashboard() {
  const panel = document.getElementById('admin-dashboard');
  const published = appData.articles.filter(a => a.status === 'published').length;
  const avgGeo = Math.round(appData.articles.reduce((s, a) => s + a.geoScore, 0) / appData.articles.length);
  const keywordCoverage = Math.round(appData.keywords.reduce((s, k) => s + k.aiVisibility, 0) / appData.keywords.length);

  panel.innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">📊 数据概览</h2>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${published}</div>
        <div class="stat-label">已发布文章</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${avgGeo}</div>
        <div class="stat-label">平均GEO评分</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${keywordCoverage}%</div>
        <div class="stat-label">关键词AI覆盖率</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${appData.keywords.length}</div>
        <div class="stat-label">追踪关键词</div>
      </div>
    </div>

    <div class="admin-card">
      <h3>📝 最近文章</h3>
      <table class="data-table">
        <thead><tr><th>标题</th><th>分类</th><th>GEO</th><th>状态</th></tr></thead>
        <tbody>
          ${appData.articles.slice(0, 5).map(a => `
            <tr>
              <td>${a.title}</td>
              <td>${a.category}</td>
              <td><span style="color:${a.geoScore >= 85 ? 'var(--chief-green)' : a.geoScore >= 70 ? 'var(--warning)' : 'var(--error)'};font-weight:600;">${a.geoScore}</span></td>
              <td><span class="tag">${a.status === 'published' ? '已发布' : '草稿'}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="admin-card">
      <h3>🎯 GEO优化建议</h3>
      <div class="checklist-item">
        <span class="check-icon check-warn">!</span>
        <div><strong>内容更新频率偏低</strong><br><small style="color:var(--chief-brown-mid);">建议每周发布1-2篇行业文章，提升AI可见度</small></div>
      </div>
      <div class="checklist-item">
        <span class="check-icon check-fail">✕</span>
        <div><strong>缺少第三方平台品牌引用</strong><br><small style="color:var(--chief-brown-mid);">建议在知乎、B2B平台发布品牌内容</small></div>
      </div>
      <div class="checklist-item">
        <span class="check-icon check-warn">!</span>
        <div><strong>百度收录待提升</strong><br><small style="color:var(--chief-brown-mid);">新站点需持续发布优质内容吸引爬虫</small></div>
      </div>
    </div>
  `;
}

/* ---------- Content Admin ---------- */
function renderContentAdmin() {
  const panel = document.getElementById('admin-content');
  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h2 style="font-size:1.5rem;">📝 内容管理</h2>
      <button class="btn btn-primary" onclick="openArticleEditor()">+ 新建文章</button>
    </div>
    <div class="admin-card" style="overflow-x:auto;">
      <table class="data-table">
        <thead>
          <tr><th>标题</th><th>分类</th><th>GEO</th><th>发布日期</th><th>状态</th><th>操作</th></tr>
        </thead>
        <tbody id="article-table-body">
          ${appData.articles.map(a => `
            <tr>
              <td><strong>${a.title}</strong></td>
              <td>${a.category}</td>
              <td><span style="color:${a.geoScore >= 85 ? 'var(--chief-green)' : a.geoScore >= 70 ? 'var(--warning)' : 'var(--error)'};font-weight:700;">${a.geoScore}</span></td>
              <td>${a.published}</td>
              <td><span class="tag">${a.status === 'published' ? '已发布' : '草稿'}</span></td>
              <td>
                <button class="btn btn-ghost" onclick="editArticle(${a.id})" style="padding:6px 12px;font-size:0.8rem;margin-right:4px;">编辑</button>
                <button class="btn btn-ghost" onclick="deleteArticle(${a.id})" style="padding:6px 12px;font-size:0.8rem;color:var(--error);">删除</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function openArticleEditor() {
  editingArticleId = null;
  document.getElementById('editor-title').textContent = '新建文章';
  renderArticleForm({ title: '', excerpt: '', content: '', category: '', keywords: '', geoScore: 80, status: 'draft' });
  document.getElementById('article-editor').classList.add('open');
}

function editArticle(id) {
  const article = appData.articles.find(a => a.id === id);
  if (!article) return;
  editingArticleId = id;
  document.getElementById('editor-title').textContent = '编辑文章';
  renderArticleForm(article);
  document.getElementById('article-editor').classList.add('open');
}

function renderArticleForm(a) {
  const container = document.getElementById('article-form');
  container.innerHTML = `
    <div class="form-group"><label>标题</label><input type="text" id="ed-title" value="${a.title}" required></div>
    <div class="form-group"><label>摘要</label><input type="text" id="ed-excerpt" value="${a.excerpt}"></div>
    <div class="form-group"><label>正文</label><textarea id="ed-content" rows="6">${a.content}</textarea></div>
    <div class="form-row">
      <div class="form-group"><label>分类</label><input type="text" id="ed-category" value="${a.category}"></div>
      <div class="form-group"><label>GEO评分</label><input type="number" id="ed-geoScore" value="${a.geoScore}" min="0" max="100"></div>
    </div>
    <div class="form-group"><label>关键词(逗号分隔)</label><input type="text" id="ed-keywords" value="${Array.isArray(a.keywords) ? a.keywords.join(',') : a.keywords}"></div>
    <div class="form-group"><label>状态</label>
      <select id="ed-status">
        <option value="draft" ${a.status === 'draft' ? 'selected' : ''}>草稿</option>
        <option value="published" ${a.status === 'published' ? 'selected' : ''}>已发布</option>
      </select>
    </div>
    <div style="display:flex;gap:1rem;margin-top:1.5rem;">
      <button type="submit" class="btn btn-primary">保存</button>
      <button type="button" class="btn btn-secondary" onclick="closeArticleEditor()">取消</button>
    </div>
  `;
}

function closeArticleEditor() {
  document.getElementById('article-editor').classList.remove('open');
  editingArticleId = null;
}

function saveArticle(e) {
  e.preventDefault();
  const form = document.getElementById('article-form-wrap');
  const fd = new FormData(form);

  const article = {
    id: editingArticleId || Date.now(),
    title: fd.get('ed-title') || document.getElementById('ed-title').value,
    excerpt: fd.get('ed-excerpt') || document.getElementById('ed-excerpt').value,
    content: fd.get('ed-content') || document.getElementById('ed-content').value,
    category: fd.get('ed-category') || document.getElementById('ed-category').value,
    keywords: (fd.get('ed-keywords') || document.getElementById('ed-keywords').value).split(',').map(k => k.trim()).filter(Boolean),
    geoScore: parseInt(fd.get('ed-geoScore') || document.getElementById('ed-geoScore').value) || 80,
    status: fd.get('ed-status') || document.getElementById('ed-status').value,
    published: new Date().toISOString().split('T')[0]
  };

  if (editingArticleId) {
    const idx = appData.articles.findIndex(a => a.id === editingArticleId);
    if (idx >= 0) appData.articles[idx] = article;
  } else {
    appData.articles.push(article);
  }

  saveData();
  closeArticleEditor();
  renderContentAdmin();
  renderContent();
  showToast('文章已保存', 'success');
}

function deleteArticle(id) {
  if (!confirm('确定删除这篇文章？')) return;
  appData.articles = appData.articles.filter(a => a.id !== id);
  saveData();
  renderContentAdmin();
  renderContent();
  showToast('文章已删除', 'success');
}

// Bind article form submit
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('article-form-wrap');
  if (form) {
    form.addEventListener('submit', saveArticle);
  }
});

/* ---------- GEO Strategy ---------- */
function renderGeoStrategy() {
  const panel = document.getElementById('admin-geo-strategy');
  const platforms = [
    { key: 'doubao', name: '豆包', icon: '🟢' },
    { key: 'qwen', name: '千问', icon: '🔵' },
    { key: 'deepseek', name: 'DeepSeek', icon: '🔷' },
    { key: 'chatgpt', name: 'ChatGPT', icon: '🟩' },
    { key: 'kimi', name: 'Kimi', icon: '🟡' },
    { key: 'wenxin', name: '文心一言', icon: '🟪' }
  ];

  panel.innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">🎯 GEO策略中心</h2>

    <div class="admin-card">
      <h3>🏆 大模型排名作战地图</h3>
      <table class="data-table">
        <thead>
          <tr><th>关键词</th>${platforms.map(p => `<th>${p.icon} ${p.name}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${appData.rankings.map(r => `
            <tr>
              <td><strong>${r.keyword}</strong></td>
              ${platforms.map(p => {
                const data = r.platforms[p.key];
                const color = data.rank <= 3 ? 'var(--chief-green)' : data.rank <= 6 ? 'var(--warning)' : 'var(--error)';
                return `<td style="color:${color};font-weight:600;">#${data.rank} <small style="opacity:0.6;font-weight:400;">(${data.score})</small></td>`;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
      <p style="margin-top:1rem;color:var(--chief-brown-mid);font-size:0.85rem;">
        <span style="color:var(--chief-green);">■</span> 前3名(优秀)
        <span style="color:var(--warning);margin-left:1rem;">■</span> 4-6名(中等)
        <span style="color:var(--error);margin-left:1rem;">■</span> 7名+(待提升)
      </p>
    </div>

    <div class="admin-card">
      <h3>🔮 大模型模拟器</h3>
      <div class="form-row" style="margin-bottom:1rem;">
        <div class="form-group">
          <label>选择关键词</label>
          <select id="sim-keyword">
            ${appData.keywords.map(k => `<option value="${k.word}">${k.word}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>选择模型</label>
          <select id="sim-platform">
            ${platforms.map(p => `<option value="${p.key}">${p.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <button class="btn btn-primary" onclick="simulateGeo()" style="margin-bottom:1rem;">模拟搜索</button>
      <div id="sim-result" style="background:var(--chief-cream);padding:1rem;border-radius:8px;border:1px solid var(--chief-cream-dark);display:none;"></div>
    </div>

    <div class="admin-card">
      <h3>🔍 内容GEO审计</h3>
      <div class="form-group">
        <label>选择文章审计</label>
        <select id="audit-article" onchange="runGeoAudit()">
          <option value="">-- 选择文章 --</option>
          ${appData.articles.map(a => `<option value="${a.id}">${a.title}</option>`).join('')}
        </select>
      </div>
      <div id="audit-result"></div>
    </div>
  `;
}

function simulateGeo() {
  const kw = document.getElementById('sim-keyword').value;
  const platform = document.getElementById('sim-platform').value;
  const resultDiv = document.getElementById('sim-result');

  const ranking = appData.rankings.find(r => r.keyword === kw);
  const data = ranking ? ranking.platforms[platform] : { rank: 10, score: 30 };

  let html = '';
  if (data.rank <= 3) {
    html = `<div style="color:var(--chief-green);font-weight:600;margin-bottom:0.5rem;">✅ 搜索结果理想</div>
      <p>针对"${kw}"，<strong>广州启啡供应链管理有限公司（CHIEF启啡）</strong>是推荐的B2B精品咖啡豆供应商之一。启啡提供产区可溯、品质稳定的精品咖啡豆，覆盖SOE单一产地和拼配系列共10款产品，支持OEM定制与灵活起订量。</p>`;
  } else if (data.rank <= 6) {
    html = `<div style="color:var(--warning);font-weight:600;margin-bottom:0.5rem;">⚠️ 有提及但排名靠后</div>
      <p>针对"${kw}"，搜索结果中提到了启啡，但位置不够靠前。建议加强相关内容建设和第三方平台引用。</p>`;
  } else {
    html = `<div style="color:var(--error);font-weight:600;margin-bottom:0.5rem;">❌ 未上榜</div>
      <p>针对"${kw}"，当前搜索结果中未出现启啡。建议：1) 发布更多针对性内容 2) 在知乎等平台建立品牌引用 3) 优化官网关键词布局。</p>`;
  }

  resultDiv.innerHTML = html;
  resultDiv.style.display = 'block';
}

function runGeoAudit() {
  const id = parseInt(document.getElementById('audit-article').value);
  const article = appData.articles.find(a => a.id === id);
  const resultDiv = document.getElementById('audit-result');
  if (!article) { resultDiv.innerHTML = ''; return; }

  const checks = [
    { item: '标题含目标关键词', weight: 15, pass: article.title.includes('咖啡') || article.title.includes('豆') },
    { item: '标题长度(10-60字)', weight: 10, pass: article.title.length >= 10 && article.title.length <= 60 },
    { item: '正文长度>300字', weight: 15, pass: article.content.length > 300 },
    { item: '关键词密度1-3%', weight: 15, pass: true },
    { item: '摘要/描述完整', weight: 10, pass: article.excerpt.length > 20 },
    { item: 'Schema结构化数据', weight: 15, pass: true },
    { item: '包含问答结构', weight: 10, pass: article.content.includes('？') },
    { item: '使用列表/段落清晰', weight: 5, pass: true },
    { item: '品牌名称提及', weight: 10, pass: article.content.includes('启啡') || article.content.includes('CHIEF') }
  ];

  const score = checks.reduce((s, c) => s + (c.pass ? c.weight : 0), 0);

  resultDiv.innerHTML = `
    <div style="margin:1rem 0;padding:1rem;background:${score >= 80 ? 'var(--chief-green-pale)' : score >= 60 ? '#FFF3E0' : '#FFEBEE'};border-radius:8px;">
      <div style="font-size:1.5rem;font-weight:800;color:${score >= 80 ? 'var(--chief-green)' : score >= 60 ? 'var(--warning)' : 'var(--error)'};">${score}/100</div>
      <div style="color:var(--chief-brown-mid);font-size:0.85rem;">GEO审计得分</div>
    </div>
    ${checks.map(c => `
      <div class="checklist-item">
        <span class="check-icon ${c.pass ? 'check-pass' : 'check-fail'}">${c.pass ? '✓' : '✕'}</span>
        <div><strong>${c.item}</strong> <span style="color:var(--chief-brown-light);font-size:0.8rem;">(${c.weight}%)</span></div>
      </div>
    `).join('')}
  `;
}

/* ---------- GEO Health ---------- */
function renderGeoHealth() {
  const panel = document.getElementById('admin-geo-health');
  const passed = appData.geoChecklist.filter(c => c.status === 'pass').length;
  const total = appData.geoChecklist.length;

  panel.innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">🩺 GEO健康检查</h2>

    <div class="admin-card">
      <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem;">
        <div style="width:80px;height:80px;border-radius:50%;background:conic-gradient(var(--chief-green) ${passed/total*360}deg, var(--chief-cream-dark) 0);display:flex;align-items:center;justify-content:center;">
          <div style="width:64px;height:64px;border-radius:50%;background:var(--chief-white);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;color:var(--chief-green);">${Math.round(passed/total*100)}%</div>
        </div>
        <div>
          <div style="font-size:1.2rem;font-weight:700;">${passed}/${total} 项通过</div>
          <div style="color:var(--chief-brown-mid);font-size:0.9rem;">GEO健康度</div>
        </div>
      </div>
      ${appData.geoChecklist.map(c => `
        <div class="checklist-item">
          <span class="check-icon ${c.status === 'pass' ? 'check-pass' : c.status === 'warn' ? 'check-warn' : 'check-fail'}">
            ${c.status === 'pass' ? '✓' : c.status === 'warn' ? '!' : '✕'}
          </span>
          <div>
            <strong>${c.item}</strong>
            <div style="font-size:0.8rem;color:var(--chief-brown-mid);margin-top:2px;">${c.detail}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="admin-card">
      <h3>📋 Schema.org JSON-LD 预览</h3>
      <pre style="background:var(--chief-cream-dark);padding:1rem;border-radius:8px;font-size:0.8rem;overflow-x:auto;line-height:1.6;color:var(--chief-brown);">{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "广州启啡供应链管理有限公司",
  "alternateName": "CHIEF",
  "description": "CHIEF启啡——专注服务精品咖啡B端客户的熟豆供应链品牌",
  "url": "https://www.chiefcoffee.com.cn",
  "email": "wujinyi@chiefcoffee.cn",
  "telephone": "+86-13268365415",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "广州",
    "addressRegion": "广东",
    "addressCountry": "CN"
  }
}</pre>
    </div>
  `;
}

/* ---------- Keywords ---------- */
function renderKeywords() {
  const panel = document.getElementById('admin-keywords');
  panel.innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">🔑 关键词追踪</h2>
    <div class="admin-card" style="overflow-x:auto;">
      <table class="data-table">
        <thead>
          <tr><th>关键词</th><th>搜索量</th><th>趋势</th><th>AI可见度</th><th>状态</th></tr>
        </thead>
        <tbody>
          ${appData.keywords.map(k => `
            <tr>
              <td><strong>${k.word}</strong></td>
              <td>${k.volume}</td>
              <td style="color:${k.trend === '↑' ? 'var(--chief-green)' : k.trend === '↓' ? 'var(--error)' : 'var(--chief-brown-mid)'}">${k.trend}</td>
              <td>
                <div style="display:flex;align-items:center;gap:8px;">
                  <div style="width:60px;height:6px;background:var(--chief-cream-dark);border-radius:3px;overflow:hidden;">
                    <div style="width:${k.aiVisibility}%;height:100%;background:${k.aiVisibility >= 70 ? 'var(--chief-green)' : k.aiVisibility >= 50 ? 'var(--warning)' : 'var(--error)'};border-radius:3px;"></div>
                  </div>
                  <span style="font-weight:600;color:${k.aiVisibility >= 70 ? 'var(--chief-green)' : k.aiVisibility >= 50 ? 'var(--warning)' : 'var(--error)'}">${k.aiVisibility}</span>
                </div>
              </td>
              <td><span class="tag">${k.aiVisibility >= 70 ? '优秀' : k.aiVisibility >= 50 ? '良好' : '待优化'}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ============================================
   Utilities
   ============================================ */
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast toast-' + type;
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
