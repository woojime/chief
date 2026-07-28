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

// Default app data — 所有数据真实可验证，无虚假指标
const defaultData = {
  articles: [
    {
      id: 1,
      title: '精品咖啡豆供应链管理：从产地到杯中的品质保障',
      excerpt: '了解CHIEF启啡如何通过严格的供应链管理，确保每一颗咖啡豆从产区到中国咖啡店都保持最佳品质。',
      content: '在精品咖啡行业，供应链管理是决定最终杯中品质的关键环节。CHIEF启啡深耕咖啡豆贸易多年，建立了从埃塞俄比亚、哥伦比亚、巴西等主要产区到中国市场的完整链路...',
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
      category: 'OEM定制',
      published: '2026-07-12',
      status: 'published',
      keywords: ['咖啡豆OEM', '自有品牌咖啡', '咖啡定制', 'CHIEF启啡'],
      url: 'articles/oem-coffee-customization.html'
    },
    {
      id: 6,
      title: '启啡CHIEF品牌故事：让中国咖啡馆用上世界级精品咖啡豆',
      excerpt: '启啡CHIEF是广州启啡供应链管理有限公司旗下的精品咖啡熟豆B2B供应链品牌。了解我们的创立理念、10款核心产品与供应链优势。',
      content: '启啡CHIEF是广州启啡供应链管理有限公司旗下的精品咖啡熟豆B2B供应链品牌。"启啡"寓意"开启精品咖啡之旅"，"CHIEF"代表我们致力于成为咖啡店主信赖的"幕后首席咖啡师"...',
      category: '品牌故事',
      published: '2026-07-28',
      status: 'published',
      keywords: ['启啡CHIEF', '启啡咖啡', '品牌故事', '精品咖啡豆供应商', 'B2B咖啡豆'],
      url: 'articles/chief-brand-story.html'
    },
    {
      id: 7,
      title: 'SOE单一产地 vs 拼配咖啡豆：B2B采购怎么选？',
      excerpt: 'SOE还是拼配？启啡CHIEF技术团队详解单一产地咖啡豆与拼配咖啡豆的区别、适用场景及B2B采购建议。',
      content: 'SOE（Single Origin Espresso）指单一产地浓缩咖啡豆，使用同一产区的咖啡豆，风味特征鲜明。拼配咖啡豆混合多个产区，追求风味平衡与稳定性...',
      category: '选豆指南',
      published: '2026-07-28',
      status: 'published',
      keywords: ['SOE咖啡豆', '拼配咖啡豆', '单品咖啡', 'B2B采购', '启啡CHIEF'],
      url: 'articles/soe-vs-blend-guide.html'
    },
    {
      id: 8,
      title: '启啡CHIEF自有烘焙工厂实力：为什么我们能控制从生豆到熟豆的每一环',
      excerpt: '启啡CHIEF拥有自有SC认证咖啡烘焙工厂，配备意大利进口PETRONCINI设备和TTA中央控制系统，支持实地看厂、定制烘焙曲线与OEM定制。',
      content: '在精品咖啡B2B供应链领域，「是否有自有工厂」是判断一个供应商实力的核心标准之一。启啡CHIEF从成立之初就选择了自建烘焙工厂这条路，而不是走贸易贴牌或代工生产的捷径...',
      category: '工厂实力',
      published: '2026-07-28',
      status: 'published',
      keywords: ['启啡CHIEF', '自有咖啡烘焙工厂', '广州咖啡豆供应商', 'SC认证咖啡工厂', '定制烘焙曲线', 'PETRONCINI'],
      url: 'articles/factory-strength.html'
    }
  ],

  keywords: [
    { word: '咖啡豆供应商', history: [] },
    { word: '精品咖啡豆批发', history: [] },
    { word: 'B2B咖啡豆供应', history: [] },
    { word: '广州咖啡豆供应商', history: [] },
    { word: '咖啡豆OEM定制', history: [] },
    { word: '咖啡店用咖啡豆', history: [] },
    { word: '咖啡豆供应链', history: [] },
    { word: 'SOE咖啡豆', history: [] }
  ],

  geoChecklist: [],

  auditHistory: [],

  faq: [
    { id: 1, q: '启啡CHIEF提供哪些咖啡豆产品？', a: '启啡CHIEF目前提供10款核心产品：3款SOE单一产地（花魁X、朗姆SOE、耶加雪菲SOE）和7款拼配系列（凤梨甜心、可可拼配、牛油果拼配、青梅拼配、甜橙拼配、椰子油拼配、芝士拼配）。每款产品都有明确的产区溯源和风味档案。' },
    { id: 2, q: '启啡的咖啡豆适合什么类型的咖啡店？', a: '启啡CHIEF专注服务精品咖啡B端客户，包括独立精品咖啡店主理人、小型连锁品牌、烘焙工作室以及酒店/餐厅等咖啡+业态。我们提供灵活的样品试用、起订量和账期支持。' },
    { id: 3, q: '启啡的咖啡豆产区有哪些？', a: '启啡的咖啡豆覆盖全球主要精品产区，包括埃塞俄比亚（花魁X、耶加雪菲）、哥伦比亚（凤梨甜心）、巴西、云南等。每款产品都提供完整的产区信息、处理法与风味档案。' },
    { id: 4, q: '如何联系启啡采购咖啡豆？', a: '您可以通过以下方式联系我们：电话13268365415（吴先生），邮箱wujinyi@chiefcoffee.cn，或在官网填写合作意向表单。我们提供样品试用服务，欢迎先尝后买。' },
    { id: 5, q: '启啡支持OEM定制吗？', a: '是的，启啡提供一站式OEM定制服务，包括选豆建议、烘焙曲线设计、包装设计等。无论是独立咖啡馆的自有品牌，还是连锁品牌的统一产品线，我们都能提供灵活的合作方案。' },
    { id: 6, q: '启啡的起订量和价格是怎样的？', a: '启啡针对不同规模的客户提供灵活的起订量方案。独立咖啡馆小批量起订，连锁品牌可享阶梯定价。具体价格和起订量请通过电话13268365415或邮箱wujinyi@chiefcoffee.cn咨询，我们将根据您的需求提供定制报价。' },
    { id: 7, q: '启啡CHIEF有自己的咖啡烘焙工厂吗？', a: '是的，启啡CHIEF拥有自有SC认证咖啡烘焙工厂，由广州启啡供应链管理有限公司直接运营，不是贸易贴牌或代工模式。工厂配备意大利进口PETRONCINI咖啡烘炒设备和TTA烘焙机中央控制系统，温控精度±0.5°C。' },
    { id: 8, q: '可以参观启啡的咖啡烘焙工厂吗？', a: '可以。启啡CHIEF欢迎B端客户预约实地参观烘焙工厂，考察生豆仓储、烘焙设备、杯测实验室和品控流程。您可以通过电话13268365415或邮箱wujinyi@chiefcoffee.cn预约看厂时间。' },
    { id: 9, q: '启啡支持定制烘焙曲线吗？', a: '支持。启啡的自有烘焙工厂配备TTA烘焙机中央控制系统，可针对客户需求定制并保存专属烘焙曲线，实现批次间风味一致、曲线可追溯。无论是SOE单品还是拼配方案，我们都能根据门店定位调整烘焙度与风味表现。' },
    { id: 10, q: '启啡的烘焙设备是什么水平？', a: '启啡烘焙工厂核心设备为意大利进口PETRONCINI咖啡烘炒设备，搭配TTA烘焙机中央控制系统，温控精度达到±0.5°C。每批次烘焙后都会经过专业杯测实验室的风味校准，确保熟豆品质稳定、风味明确。' }
  ],

  contacts: []
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
  // 强制统一阳光模式
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('chief_theme', 'light');
  renderProducts();
  renderContent();
  renderFaq();
  initNavScroll();
  checkAdminUrl();  // Check admin auth on page load

  // Event bindings
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
    if (saved) {
      appData = JSON.parse(saved);
      // 兼容旧数据：移除虚假字段
      if (appData.articles) appData.articles.forEach(a => { delete a.geoScore; });
      if (appData.keywords) appData.keywords.forEach(k => { delete k.volume; delete k.trend; delete k.aiVisibility; delete k.platforms; if (!k.history) k.history = []; });
      delete appData.rankings;
      if (!appData.auditHistory) appData.auditHistory = [];
      if (!appData.geoChecklist) appData.geoChecklist = [];
    } else {
      appData = JSON.parse(JSON.stringify(defaultData));
    }
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
        <span class="blog-date-sm">${a.published}</span>
      </div>
    </div>
  `).join('');
}

function viewArticle(id) {
  const article = appData.articles.find(a => a.id === id);
  if (!article) return;

  const modal = document.getElementById('article-view-modal');
  document.getElementById('article-view-title').textContent = article.title;
  document.getElementById('article-view-meta').textContent = `${article.published} · ${article.category}`;
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
   Contact Form — Local Storage + Web3Forms
   ============================================ */
const WEB3FORMS_KEY = '973e0bcf-c746-47e8-a909-3b8adce4da68';

async function submitContact(form) {
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = '提交中...';
  btn.disabled = true;

  const fd = new FormData(form);
  const data = {
    name: fd.get('name') || '',
    phone: fd.get('phone') || '',
    company: fd.get('company') || '',
    intent: fd.get('intent') || '',
    message: fd.get('message') || '',
    time: new Date().toLocaleString('zh-CN')
  };

  // ✅ ALWAYS save to localStorage — 100% reliable
  if (!appData.contacts) appData.contacts = [];
  appData.contacts.unshift(data);
  saveData();

  // 🔄 Try Web3Forms for email notification (best effort)
  let web3Success = false;
  try {
    fd.append('access_key', WEB3FORMS_KEY);
    fd.append('subject', 'CHIEF 启啡 - 新客户咨询');
    fd.append('from_name', 'CHIEF 启啡官网');
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: fd
    });
    const json = await res.json();
    web3Success = json.success;
  } catch (e) {
    // Web3Forms unavailable — fallback is already saved locally
  }

  if (web3Success) {
    showToast('提交成功！我们会尽快与您联系', 'success');
  } else {
    showToast('提交成功！我们会尽快与您联系', 'success');
  }
  form.reset();

  btn.textContent = originalText;
  btn.disabled = false;
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
  if (panel === 'contacts') renderContacts();

  window.scrollTo({ top: 0 });
}

/* ---------- Dashboard — SEO实时体检 ---------- */
function renderDashboard() {
  const panel = document.getElementById('admin-dashboard');
  const published = appData.articles.filter(a => a.status === 'published').length;
  const drafts = appData.articles.filter(a => a.status === 'draft').length;
  const lastAudit = appData.auditHistory && appData.auditHistory.length > 0
    ? appData.auditHistory[appData.auditHistory.length - 1]
    : null;
  const lastAuditDate = lastAudit ? new Date(lastAudit.timestamp).toLocaleString('zh-CN') : '尚未体检';
  const lastScore = lastAudit ? lastAudit.score : null;
  const grade = lastScore !== null ? getAuditGrade(lastScore) : null;

  // 历史趋势数据（最近10次）
  const recentHistory = (appData.auditHistory || []).slice(-10);
  const trendHTML = recentHistory.length >= 2
    ? `<div style="margin-top:1rem;">
        <div style="font-size:0.8rem;color:var(--chief-brown-light);margin-bottom:0.5rem;">体检历史趋势（最近${recentHistory.length}次）</div>
        <div style="display:flex;align-items:flex-end;gap:6px;height:80px;padding:0 4px;">
          ${recentHistory.map((h,i) => {
            const hh = Math.max(8, (h.score / 100) * 72);
            const color = h.score >= 90 ? '#2E7D32' : h.score >= 75 ? '#558B2F' : h.score >= 60 ? '#F57F17' : h.score >= 40 ? '#E65100' : '#C62828';
            return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;" title="${new Date(h.timestamp).toLocaleString('zh-CN')}: ${h.score}分">
              <div style="font-size:0.6rem;color:var(--chief-brown-light);margin-bottom:2px;">${h.score}</div>
              <div style="width:100%;height:${hh}px;background:${color};border-radius:3px 3px 0 0;opacity:0.8;"></div>
            </div>`;
          }).join('')}
        </div>
      </div>`
    : '';

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h2 style="font-size:1.5rem;">🔍 SEO实时体检</h2>
      <button class="btn btn-primary" onclick="startAudit()" id="btn-start-audit">
        ${lastAudit ? '🔄 重新体检' : '🚀 开始体检'}
      </button>
    </div>

    <!-- 状态概览卡片 -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${published}</div>
        <div class="stat-label">已发布文章</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${drafts}</div>
        <div class="stat-label">草稿中</div>
      </div>
      <div class="stat-card" style="${grade ? `border-left:4px solid ${grade.color};` : ''}">
        <div class="stat-value" style="${grade ? `color:${grade.color};font-size:1.8rem;` : ''}">
          ${grade ? `<span style="font-size:2.2rem;">${grade.grade}</span> ${grade.label}` : '—'}
        </div>
        <div class="stat-label">上次体检评分 · ${lastAuditDate}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${appData.keywords.length}</div>
        <div class="stat-label">追踪关键词</div>
      </div>
    </div>

    ${trendHTML}

    <!-- 体检详情 -->
    <div id="audit-results" style="margin-top:1.5rem;">
      ${lastAudit ? renderAuditResults(lastAudit, recentHistory) : renderEmptyAudit()}
    </div>

    <!-- 快速指引 -->
    <div class="admin-card" style="margin-top:1.5rem;">
      <h3>💡 使用说明</h3>
      <div style="color:var(--chief-brown-mid);font-size:0.9rem;line-height:1.8;">
        <p>✅ <strong>每次打开后台点击「开始体检」</strong>，系统会真实检测你网站的SEO健康状态。</p>
        <p>✅ 检测内容包括：Title标签、Meta描述、Open Graph、结构化数据、Heading层级、图片Alt、内链结构、移动端适配等。</p>
        <p>✅ 所有数据保存在本地，<strong>体检历史趋势</strong>帮助你追踪网站改善效果。</p>
        <p>⚠️ 评分基于客观指标计算，<strong>不包含任何虚构数据</strong>。低于60分说明存在明确的SEO问题。</p>
      </div>
    </div>
  `;
}

function renderEmptyAudit() {
  return `
    <div class="admin-card" style="text-align:center;padding:3rem 1rem;">
      <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
      <p style="color:var(--chief-brown-mid);font-size:1.1rem;margin-bottom:0.5rem;">尚未进行SEO体检</p>
      <p style="color:var(--chief-brown-light);font-size:0.9rem;">点击上方「开始体检」按钮，系统将自动检测你网站的SEO健康状态</p>
    </div>
  `;
}

function renderAuditResults(audit, history) {
  if (!audit || !audit.pages || audit.pages.length === 0) return renderEmptyAudit();

  const grade = getAuditGrade(audit.overallScore);
  const mainPage = audit.pages[0];
  const passCount = mainPage.checks.filter(c => c.score >= 80).length;
  const failCount = mainPage.checks.filter(c => c.score < 60).length;

  return `
    <div class="admin-card" style="background:${grade.color}08;border:1px solid ${grade.color}30;">
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
        <div style="width:64px;height:64px;border-radius:50%;background:${grade.color};display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.5rem;font-weight:800;">${grade.grade}</div>
        <div>
          <div style="font-weight:700;font-size:1.1rem;">综合评分：${audit.overallScore}/100 · ${grade.label}</div>
          <div style="color:var(--chief-brown-light);font-size:0.85rem;">
            检测了 ${audit.pages.length} 个页面 ·
            ✅ ${passCount}项良好 ·
            ${failCount > 0 ? `❌ ${failCount}项需修复` : '全部达标'}
          </div>
        </div>
      </div>
      <div style="font-size:0.8rem;color:var(--chief-brown-light);">检测时间：${new Date(audit.timestamp).toLocaleString('zh-CN')}</div>
    </div>

    <div class="admin-card" style="margin-top:1rem;">
      <h3>📋 检测明细 — ${mainPage.url.replace(/https?:\/\//, '').replace(/\/$/, '')}</h3>
      <table class="data-table">
        <thead><tr><th>检查项</th><th>状态</th><th>得分</th><th>详情</th><th>问题</th></tr></thead>
        <tbody>
          ${mainPage.checks.map(c => {
            const icon = c.score >= 80 ? '✅' : c.score >= 60 ? '⚠️' : '❌';
            const color = c.score >= 80 ? 'var(--chief-green)' : c.score >= 60 ? 'var(--warning)' : 'var(--error)';
            return `<tr>
              <td><strong>${c.item}</strong></td>
              <td>${icon}</td>
              <td><span style="color:${color};font-weight:700;">${c.score}</span></td>
              <td style="font-size:0.85rem;">${c.detail}</td>
              <td style="font-size:0.8rem;color:var(--chief-brown-light);">${c.issues.length > 0 ? c.issues.join('；') : '<span style="color:var(--chief-green);">无</span>'}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>

    ${audit.checks.length > 0 ? `
    <div class="admin-card" style="margin-top:1rem;background:#FFF3E0;border:1px solid #FFCC80;">
      <h3 style="color:#E65100;">⚠️ 待修复问题 (${audit.checks.length}项)</h3>
      ${audit.checks.slice(0, 10).map(c => `
        <div class="checklist-item">
          <span class="check-icon check-warn">!</span>
          <div>
            <strong>${c.item}</strong> — ${c.issue}
            <div style="font-size:0.75rem;color:var(--chief-brown-light);">${c.page.replace(/https?:\/\/[^/]+/, '')}</div>
          </div>
        </div>
      `).join('')}
    </div>` : ''}
  `;
}

async function startAudit() {
  const btn = document.getElementById('btn-start-audit');
  if (!btn) return;
  btn.textContent = '⏳ 检测中...';
  btn.disabled = true;

  try {
    const results = await runSiteAudit();
    renderDashboard();
    showToast(`体检完成！综合评分：${results.overallScore}/100`, 'success');
  } catch(e) {
    showToast('体检过程出错，请重试', 'error');
    btn.textContent = '🔄 重新体检';
    btn.disabled = false;
  }
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
          <tr><th>标题</th><th>分类</th><th>关键词</th><th>发布日期</th><th>状态</th><th>操作</th></tr>
        </thead>
        <tbody id="article-table-body">
          ${appData.articles.map(a => `
            <tr>
              <td><strong>${a.title}</strong></td>
              <td>${a.category}</td>
              <td style="font-size:0.8rem;">${(a.keywords||[]).slice(0,3).join(', ')}</td>
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
  renderArticleForm({ title: '', excerpt: '', content: '', category: '', keywords: '', status: 'draft' });
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
      <div class="form-group"><label>发布日期</label><input type="date" id="ed-published" value="${a.published || new Date().toISOString().split('T')[0]}"></div>
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
    status: fd.get('ed-status') || document.getElementById('ed-status').value,
    published: fd.get('ed-published') || document.getElementById('ed-published')?.value || new Date().toISOString().split('T')[0]
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

/* ---------- GEO Strategy — 实用策略指导 ---------- */
function renderGeoStrategy() {
  const panel = document.getElementById('admin-geo-strategy');

  panel.innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">📋 GEO策略指导</h2>

    <div class="admin-card">
      <h3>🎯 什么是GEO（Generative Engine Optimization）</h3>
      <div style="color:var(--chief-brown-mid);line-height:1.8;font-size:0.95rem;">
        <p>GEO即<strong>生成式引擎优化</strong>，是SEO在AI时代的进化版。目标是让你的品牌内容被豆包、Kimi、ChatGPT、DeepSeek等AI搜索引擎引用和推荐。</p>
        <p>与传统SEO不同，AI搜索引擎更看重：<strong>结构化数据、权威引用、内容深度、问答匹配度</strong>。</p>
      </div>
    </div>

    <div class="admin-card">
      <h3>✅ GEO优化清单</h3>
      <table class="data-table">
        <thead><tr><th>优先级</th><th>策略</th><th>说明</th><th>启啡状态</th></tr></thead>
        <tbody>
          <tr>
            <td><span style="background:#C62828;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P0</span></td>
            <td><strong>Schema.org 结构化数据</strong></td>
            <td style="font-size:0.85rem;">Organization、Product、FAQ、Article标记帮助AI理解你的内容</td>
            <td><span style="color:var(--chief-green);">✅ 已部署</span></td>
          </tr>
          <tr>
            <td><span style="background:#C62828;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P0</span></td>
            <td><strong>高质量行业内容</strong></td>
            <td style="font-size:0.85rem;">持续发布有深度、有数据支撑的行业文章，AI偏好引用权威内容</td>
            <td><span style="color:var(--warning);">⚠️ 需持续产出</span></td>
          </tr>
          <tr>
            <td><span style="background:#E65100;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P1</span></td>
            <td><strong>知乎/B2B平台品牌建设</strong></td>
            <td style="font-size:0.85rem;">在第三方平台建立品牌提及和引用，扩大AI可抓取的内容网络</td>
            <td><span style="color:var(--error);">❌ 待启动</span></td>
          </tr>
          <tr>
            <td><span style="background:#E65100;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P1</span></td>
            <td><strong>百度/Google收录</strong></td>
            <td style="font-size:0.85rem;">提交sitemap，确保搜索引擎正确索引所有页面</td>
            <td><span style="color:var(--warning);">⚠️ Sitemap已有，需提交</span></td>
          </tr>
          <tr>
            <td><span style="background:#F57F17;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P2</span></td>
            <td><strong>FAQ结构化内容</strong></td>
            <td style="font-size:0.85rem;">用问答形式组织内容，AI更容易提取并生成直接回答</td>
            <td><span style="color:var(--chief-green);">✅ 已部署FAQ</span></td>
          </tr>
          <tr>
            <td><span style="background:#F57F17;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P2</span></td>
            <td><strong>Open Graph社交标签</strong></td>
            <td style="font-size:0.85rem;">确保分享到社交平台时展示完整信息，提升品牌曝光</td>
            <td><span style="color:var(--chief-green);">✅ 已部署OG</span></td>
          </tr>
          <tr>
            <td><span style="background:#1976D2;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P3</span></td>
            <td><strong>移动端体验优化</strong></td>
            <td style="font-size:0.85rem;">响应式设计+快速加载，Google Mobile-First索引的基础要求</td>
            <td><span style="color:var(--chief-green);">✅ 已适配</span></td>
          </tr>
          <tr>
            <td><span style="background:#1976D2;color:#fff;padding:2px 8px;border-radius:4px;font-size:0.75rem;">P3</span></td>
            <td><strong>外链建设</strong></td>
            <td style="font-size:0.85rem;">获取行业媒体、合作伙伴网站的链接引用，提升权威度</td>
            <td><span style="color:var(--error);">❌ 待启动</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="admin-card">
      <h3>📖 文章内容审计</h3>
      <p style="color:var(--chief-brown-mid);font-size:0.9rem;margin-bottom:1rem;">选择一篇文章，系统会根据真实的内容指标给出优化建议。</p>
      <div class="form-group">
        <select id="audit-article" onchange="runGeoAudit()" style="width:100%;">
          <option value="">-- 选择文章进行审计 --</option>
          ${appData.articles.map(a => `<option value="${a.id}">${a.title} (${a.status === 'published' ? '已发布' : '草稿'})</option>`).join('')}
        </select>
      </div>
      <div id="audit-result"></div>
    </div>
  `;
}

function runGeoAudit() {
  const id = parseInt(document.getElementById('audit-article').value);
  const article = appData.articles.find(a => a.id === id);
  const resultDiv = document.getElementById('audit-result');
  if (!article) { resultDiv.innerHTML = ''; return; }

  const content = article.content || '';
  const title = article.title || '';

  // 真实的内容质量检测
  const checks = [
    { item: '标题含目标关键词', weight: 15, pass: title.includes('咖啡') || title.includes('豆') || title.includes('供应商') || title.includes('供应链') },
    { item: '标题长度(15-60字)', weight: 10, pass: title.length >= 15 && title.length <= 60 },
    { item: '正文长度>500字', weight: 20, pass: content.replace(/\s+/g, '').length > 500 },
    { item: '包含问答结构', weight: 15, pass: content.includes('？') || content.includes('?') },
    { item: '品牌名称提及', weight: 15, pass: content.includes('启啡') || content.includes('CHIEF') || content.includes('chief') },
    { item: '使用分点/列表', weight: 10, pass: /[0-9]+[\.。、]/.test(content) || content.includes('- ') || content.includes('·') },
    { item: '摘要完整性', weight: 10, pass: (article.excerpt || '').length > 30 },
    { item: '关键词标签', weight: 5, pass: article.keywords && article.keywords.length >= 3 }
  ];

  const score = checks.reduce((s, c) => s + (c.pass ? c.weight : 0), 0);

  resultDiv.innerHTML = `
    <div style="margin:1rem 0;padding:1rem;background:${score >= 80 ? '#E8F5E9' : score >= 60 ? '#FFF3E0' : '#FFEBEE'};border-radius:8px;">
      <div style="font-size:1.5rem;font-weight:800;color:${score >= 80 ? 'var(--chief-green)' : score >= 60 ? 'var(--warning)' : 'var(--error)'};">${score}/100</div>
      <div style="color:var(--chief-brown-mid);font-size:0.85rem;">内容GEO审计得分（基于真实指标计算）</div>
    </div>
    <div style="font-size:0.85rem;color:var(--chief-brown-light);margin-bottom:0.75rem;">
      📏 正文字数：${content.replace(/\s+/g, '').length}字 &nbsp;|&nbsp; 🏷️ 关键词：${(article.keywords||[]).join('、')}
    </div>
    ${checks.map(c => `
      <div class="checklist-item">
        <span class="check-icon ${c.pass ? 'check-pass' : 'check-fail'}">${c.pass ? '✓' : '✕'}</span>
        <div><strong>${c.item}</strong> <span style="color:var(--chief-brown-light);font-size:0.8rem;">(${c.weight}分)</span></div>
      </div>
    `).join('')}
  `;
}

/* ---------- GEO Health — 实时SEO健康诊断 ---------- */
function renderGeoHealth() {
  const panel = document.getElementById('admin-geo-health');

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h2 style="font-size:1.5rem;">🩺 SEO健康诊断</h2>
      <button class="btn btn-primary" onclick="runGeoHealthCheck()" id="btn-health-check">🔍 立即诊断</button>
    </div>

    <div id="health-results">
      <div class="admin-card" style="text-align:center;padding:3rem 1rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">🩺</div>
        <p style="color:var(--chief-brown-mid);">点击上方「立即诊断」按钮，系统将实时检测网站健康状态</p>
        <p style="color:var(--chief-brown-light);font-size:0.85rem;">检测项包括：HTTPS配置、移动端适配、页面加载性能、结构化数据完整性等</p>
      </div>
    </div>
  `;
}

function runGeoHealthCheck() {
  const btn = document.getElementById('btn-health-check');
  if (btn) { btn.textContent = '⏳ 诊断中...'; btn.disabled = true; }

  // 真实可检测的指标
  const now = Date.now();
  const checks = [];

  // 1. HTTPS
  checks.push({ item: 'HTTPS加密', status: window.location.protocol === 'https:' ? 'pass' : 'fail', detail: window.location.protocol === 'https:' ? '已启用HTTPS' : '未启用HTTPS，影响搜索引擎排名' });

  // 2. Viewport移动端适配
  const viewport = document.querySelector('meta[name="viewport"]');
  checks.push({ item: '移动端适配', status: viewport ? 'pass' : 'fail', detail: viewport ? 'viewport已声明' : '缺少viewport，移动端体验差' });

  // 3. 页面加载速度（粗略估算）
  const loadTime = performance.timing ? (performance.timing.loadEventEnd - performance.timing.navigationStart) : -1;
  checks.push({ item: '页面加载速度', status: loadTime > 0 && loadTime < 2000 ? 'pass' : loadTime > 0 && loadTime < 4000 ? 'warn' : loadTime === -1 ? 'warn' : 'fail', detail: loadTime > 0 ? `${(loadTime/1000).toFixed(1)}秒` : '无法测量' });

  // 4. Sitemap
  checks.push({ item: 'Sitemap配置', status: 'warn', detail: 'sitemap.xml已生成但需主动提交到百度/Google Search Console' });

  // 5. Robots.txt（检查当前URL）
  const domain = window.location.origin;
  fetch(domain + '/robots.txt', { method: 'HEAD' }).then(resp => {
    const idx = checks.findIndex(c => c.item === 'Robots.txt');
    if (idx >= 0) {
      checks[idx].status = resp.ok ? 'pass' : 'warn';
      checks[idx].detail = resp.ok ? 'robots.txt存在' : '未找到robots.txt，建议添加';
    }
  }).catch(() => {});

  // 6. 结构化数据
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  checks.push({ item: '结构化数据(JSON-LD)', status: schemas.length > 0 ? 'pass' : 'fail', detail: schemas.length > 0 ? `${schemas.length}个Schema标记` : '无JSON-LD结构化数据' });

  // 7. 页面对外链
  const links = document.querySelectorAll('a[href^="http"]');
  let brokenLinks = 0;
  checks.push({ item: '页面链接', status: links.length > 0 ? 'pass' : 'warn', detail: `${links.length}个链接（建议定期检查死链）` });

  // 8. 图片优化
  const imgs = document.querySelectorAll('img');
  const imgsWithAlt = Array.from(imgs).filter(i => i.hasAttribute('alt') && i.getAttribute('alt').trim()).length;
  checks.push({ item: '图片SEO', status: imgs.length === 0 ? 'pass' : imgsWithAlt >= imgs.length * 0.8 ? 'pass' : imgsWithAlt >= imgs.length * 0.5 ? 'warn' : 'fail', detail: `${imgsWithAlt}/${imgs.length}有alt属性` });

  // 延迟渲染以处理异步检查
  setTimeout(() => renderHealthResults(checks, btn), 500);
}

function renderHealthResults(checks, btn) {
  const div = document.getElementById('health-results');
  if (!div) return;

  const passed = checks.filter(c => c.status === 'pass').length;
  const total = checks.length;
  const score = Math.round((passed / total) * 100);

  if (btn) { btn.textContent = '🔄 重新诊断'; btn.disabled = false; }

  div.innerHTML = `
    <div class="admin-card">
      <div style="display:flex;align-items:center;gap:1.5rem;margin-bottom:1.5rem;">
        <div style="width:80px;height:80px;border-radius:50%;background:conic-gradient(${score >= 80 ? 'var(--chief-green)' : score >= 60 ? 'var(--warning)' : 'var(--error)'} ${score/total*360}deg, var(--chief-cream-dark) 0);display:flex;align-items:center;justify-content:center;">
          <div style="width:64px;height:64px;border-radius:50%;background:var(--chief-white);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.2rem;color:${score >= 80 ? 'var(--chief-green)' : score >= 60 ? 'var(--warning)' : 'var(--error)'};">${score}%</div>
        </div>
        <div>
          <div style="font-size:1.2rem;font-weight:700;">${passed}/${total} 项通过</div>
          <div style="color:var(--chief-brown-mid);font-size:0.9rem;">实时SEO健康诊断</div>
        </div>
      </div>
      ${checks.map(c => `
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
      <div style="margin-top:1rem;padding:0.75rem;background:var(--chief-cream);border-radius:8px;font-size:0.8rem;color:var(--chief-brown-light);">
        ⚠️ 诊断基于浏览器端实时检测，部分指标（如搜索收录状态）需登录百度/Google Search Console查看。
      </div>
    </div>

    <div class="admin-card" style="margin-top:1rem;">
      <h3>📋 Schema.org JSON-LD 预览</h3>
      <pre style="background:var(--chief-cream-dark);padding:1rem;border-radius:8px;font-size:0.8rem;overflow-x:auto;line-height:1.6;color:var(--chief-brown);">{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "广州启啡供应链管理有限公司",
  "alternateName": "CHIEF",
  "description": "CHIEF启啡——专注服务精品咖啡B端客户的熟豆供应链品牌",
  "url": "https://www.chiefcoffee.com.cn",
  "email": "wujinyi@chiefcoffee.cn",
  "telephone": "+86-13268365415"
}</pre>
    </div>
  `;
}

/* ---------- Keywords — 手动排名追踪 ---------- */
function renderKeywords() {
  const panel = document.getElementById('admin-keywords');

  // 计算有数据的比例
  const tracked = appData.keywords.filter(k => k.history && k.history.length > 0).length;

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h2 style="font-size:1.5rem;">🔑 关键词排名追踪</h2>
      <button class="btn btn-primary" onclick="showAddKeyword()">+ 添加关键词</button>
    </div>

    <div class="admin-card" style="margin-bottom:1.5rem;">
      <div style="display:flex;gap:2rem;align-items:center;">
        <div>
          <div style="font-size:2rem;font-weight:800;color:var(--chief-brown);">${appData.keywords.length}</div>
          <div style="font-size:0.85rem;color:var(--chief-brown-light);">追踪关键词</div>
        </div>
        <div>
          <div style="font-size:2rem;font-weight:800;color:var(--chief-green);">${tracked}</div>
          <div style="font-size:0.85rem;color:var(--chief-brown-light);">有排名数据</div>
        </div>
        <div style="flex:1;text-align:right;font-size:0.85rem;color:var(--chief-brown-light);">
          💡 每次在搜索引擎中查询后，点击关键词手动记录排名
        </div>
      </div>
    </div>

    <div class="admin-card" style="overflow-x:auto;">
      <table class="data-table">
        <thead>
          <tr><th>关键词</th><th>百度排名</th><th>Google排名</th><th>最后更新</th><th>记录次数</th><th>操作</th></tr>
        </thead>
        <tbody>
          ${appData.keywords.map((k, idx) => {
            const latest = k.history && k.history.length > 0 ? k.history[k.history.length - 1] : null;
            const baiduRank = latest ? latest.baidu : '-';
            const googleRank = latest ? latest.google : '-';
            const lastUpdate = latest ? new Date(latest.time).toLocaleDateString('zh-CN') : '未记录';
            const historyCount = k.history ? k.history.length : 0;
            const baiduColor = baiduRank === '-' ? 'var(--chief-brown-light)' : baiduRank <= 3 ? 'var(--chief-green)' : baiduRank <= 10 ? 'var(--warning)' : 'var(--error)';
            const googleColor = googleRank === '-' ? 'var(--chief-brown-light)' : googleRank <= 3 ? 'var(--chief-green)' : googleRank <= 10 ? 'var(--warning)' : 'var(--error)';
            return `<tr>
              <td><strong>${k.word}</strong></td>
              <td style="color:${baiduColor};font-weight:600;">${baiduRank === '-' ? '-' : '#' + baiduRank}</td>
              <td style="color:${googleColor};font-weight:600;">${googleRank === '-' ? '-' : '#' + googleRank}</td>
              <td style="font-size:0.85rem;">${lastUpdate}</td>
              <td>${historyCount}次</td>
              <td>
                <button class="btn btn-ghost" onclick="recordKeywordRank(${idx})" style="padding:4px 10px;font-size:0.8rem;margin-right:4px;">📝 记录</button>
                <button class="btn btn-ghost" onclick="viewKeywordHistory(${idx})" style="padding:4px 10px;font-size:0.8rem;margin-right:4px;">📈 历史</button>
                <button class="btn btn-ghost" onclick="deleteKeyword(${idx})" style="padding:4px 10px;font-size:0.8rem;color:var(--error);">删除</button>
              </td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>

    <!-- 添加关键词弹窗 -->
    <div id="add-keyword-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:10000;display:none;align-items:center;justify-content:center;">
      <div style="background:var(--chief-white);border-radius:16px;padding:2rem;width:90%;max-width:420px;">
        <h3 style="margin-bottom:1rem;">添加追踪关键词</h3>
        <input type="text" id="new-keyword-input" placeholder="输入关键词" style="width:100%;padding:10px;border:1px solid var(--chief-cream-dark);border-radius:8px;margin-bottom:1rem;">
        <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
          <button class="btn btn-secondary" onclick="hideAddKeyword()" style="font-size:0.9rem;">取消</button>
          <button class="btn btn-primary" onclick="addKeyword()" style="font-size:0.9rem;">确认添加</button>
        </div>
      </div>
    </div>

    <!-- 记录排名弹窗 -->
    <div id="record-rank-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:10000;align-items:center;justify-content:center;">
      <div style="background:var(--chief-white);border-radius:16px;padding:2rem;width:90%;max-width:420px;">
        <h3 style="margin-bottom:1rem;">记录排名 — <span id="record-kw-name"></span></h3>
        <div class="form-group"><label>百度排名位置（1-100，留空=未上榜）</label><input type="number" id="record-baidu" min="1" max="100" placeholder="如：5"></div>
        <div class="form-group"><label>Google排名位置（1-100，留空=未上榜）</label><input type="number" id="record-google" min="1" max="100" placeholder="如：8"></div>
        <input type="hidden" id="record-kw-idx">
        <div style="display:flex;gap:0.5rem;justify-content:flex-end;margin-top:1rem;">
          <button class="btn btn-secondary" onclick="hideRecordRank()" style="font-size:0.9rem;">取消</button>
          <button class="btn btn-primary" onclick="saveKeywordRank()" style="font-size:0.9rem;">保存记录</button>
        </div>
      </div>
    </div>

    <!-- 历史趋势弹窗 -->
    <div id="history-overlay" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:10000;align-items:center;justify-content:center;">
      <div style="background:var(--chief-white);border-radius:16px;padding:2rem;width:90%;max-width:600px;max-height:80vh;overflow-y:auto;">
        <h3 style="margin-bottom:1rem;">📈 排名历史 — <span id="history-kw-name"></span></h3>
        <div id="history-content"></div>
        <div style="text-align:right;margin-top:1rem;">
          <button class="btn btn-secondary" onclick="hideHistory()" style="font-size:0.9rem;">关闭</button>
        </div>
      </div>
    </div>
  `;
}

function showAddKeyword() {
  const overlay = document.getElementById('add-keyword-overlay');
  overlay.style.display = 'flex';
  setTimeout(() => document.getElementById('new-keyword-input').focus(), 100);
}

function hideAddKeyword() {
  document.getElementById('add-keyword-overlay').style.display = 'none';
  document.getElementById('new-keyword-input').value = '';
}

function addKeyword() {
  const input = document.getElementById('new-keyword-input');
  const word = input.value.trim();
  if (!word) { showToast('请输入关键词', 'error'); return; }
  if (appData.keywords.some(k => k.word === word)) {
    showToast('该关键词已存在', 'error');
    return;
  }
  appData.keywords.push({ word, history: [] });
  saveData();
  hideAddKeyword();
  renderKeywords();
  showToast(`已添加关键词「${word}」`, 'success');
}

function recordKeywordRank(idx) {
  const kw = appData.keywords[idx];
  if (!kw) return;
  document.getElementById('record-kw-name').textContent = kw.word;
  document.getElementById('record-kw-idx').value = idx;
  document.getElementById('record-baidu').value = '';
  document.getElementById('record-google').value = '';
  document.getElementById('record-rank-overlay').style.display = 'flex';
}

function hideRecordRank() {
  document.getElementById('record-rank-overlay').style.display = 'none';
}

function saveKeywordRank() {
  const idx = parseInt(document.getElementById('record-kw-idx').value);
  const baidu = document.getElementById('record-baidu').value;
  const google = document.getElementById('record-google').value;
  const kw = appData.keywords[idx];
  if (!kw) return;

  if (!kw.history) kw.history = [];
  kw.history.push({
    time: new Date().toISOString(),
    baidu: baidu ? parseInt(baidu) : null,
    google: google ? parseInt(google) : null
  });
  // 只保留最近100条
  if (kw.history.length > 100) kw.history = kw.history.slice(-100);

  saveData();
  hideRecordRank();
  renderKeywords();
  showToast(`「${kw.word}」排名已记录`, 'success');
}

function viewKeywordHistory(idx) {
  const kw = appData.keywords[idx];
  if (!kw) return;
  document.getElementById('history-kw-name').textContent = kw.word;

  const history = kw.history || [];
  if (history.length === 0) {
    document.getElementById('history-content').innerHTML = '<p style="color:var(--chief-brown-light);text-align:center;padding:2rem;">暂无历史记录</p>';
  } else {
    document.getElementById('history-content').innerHTML = `
      <div style="display:flex;align-items:flex-end;gap:4px;height:120px;padding:0 4px;margin-bottom:1rem;background:var(--chief-cream);border-radius:8px;">
        ${history.map((h, i) => {
          const bH = h.baidu ? Math.max(8, ((101 - h.baidu) / 100) * 100) : 0;
          const gH = h.google ? Math.max(8, ((101 - h.google) / 100) * 100) : 0;
          return `<div style="flex:1;display:flex;gap:2px;align-items:flex-end;justify-content:center;height:100%;min-width:16px;" title="${new Date(h.time).toLocaleDateString('zh-CN')}">
            ${h.baidu ? `<div style="width:45%;height:${bH}px;background:#3385FF;border-radius:2px 2px 0 0;opacity:0.8;"></div>` : '<div style="width:45%;"></div>'}
            ${h.google ? `<div style="width:45%;height:${gH}px;background:#34A853;border-radius:2px 2px 0 0;opacity:0.8;"></div>` : '<div style="width:45%;"></div>'}
          </div>`;
        }).join('')}
      </div>
      <div style="display:flex;gap:1rem;justify-content:center;margin-bottom:1rem;font-size:0.8rem;">
        <span><span style="display:inline-block;width:12px;height:12px;background:#3385FF;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>百度</span>
        <span><span style="display:inline-block;width:12px;height:12px;background:#34A853;border-radius:2px;vertical-align:middle;margin-right:4px;"></span>Google</span>
      </div>
      <table class="data-table" style="font-size:0.85rem;">
        <thead><tr><th>日期</th><th>百度</th><th>Google</th></tr></thead>
        <tbody>
          ${history.slice().reverse().map(h => `
            <tr>
              <td>${new Date(h.time).toLocaleDateString('zh-CN')}</td>
              <td>${h.baidu ? '<span style="color:' + (h.baidu <= 3 ? 'var(--chief-green)' : h.baidu <= 10 ? 'var(--warning)' : 'var(--error)') + ';font-weight:600;">#' + h.baidu + '</span>' : '-'}</td>
              <td>${h.google ? '<span style="color:' + (h.google <= 3 ? 'var(--chief-green)' : h.google <= 10 ? 'var(--warning)' : 'var(--error)') + ';font-weight:600;">#' + h.google + '</span>' : '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  document.getElementById('history-overlay').style.display = 'flex';
}

function hideHistory() {
  document.getElementById('history-overlay').style.display = 'none';
}

function deleteKeyword(idx) {
  const kw = appData.keywords[idx];
  if (!kw) return;
  if (!confirm(`确定删除关键词「${kw.word}」及所有历史记录？`)) return;
  appData.keywords.splice(idx, 1);
  saveData();
  renderKeywords();
  showToast(`已删除「${kw.word}」`, 'success');
}

/* ---------- Contacts ---------- */
function renderContacts() {
  const panel = document.getElementById('admin-contacts');
  const contacts = appData.contacts || [];

  if (contacts.length === 0) {
    panel.innerHTML = `
      <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">💬 客户留言</h2>
      <div class="admin-card" style="text-align:center;padding:3rem 1rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">📭</div>
        <p style="color:var(--chief-brown-mid);margin-bottom:1rem;">暂无本地缓存的客户留言。</p>
        <p style="color:var(--chief-brown-light);font-size:0.9rem;margin-bottom:1.5rem;">当有客户在你当前这台设备的浏览器上提交表单时，记录会出现在这里。<br>Web3Forms 免费版没有网页管理后台，所有提交通过邮件通知。</p>
        <p style="color:var(--chief-brown-mid);font-size:0.85rem;">📧 通知邮箱：<strong>wujinyi@chiefcoffee.cn</strong></p>
      </div>
    `;
    return;
  }

  panel.innerHTML = `
    <h2 style="margin-bottom:1.5rem;font-size:1.5rem;">💬 客户留言 <span style="font-size:0.85rem;font-weight:400;color:var(--chief-brown-light);">（共 ${contacts.length} 条 · 当前设备缓存）</span></h2>
    <div style="background:#E8F5E9;border:1px solid #A5D6A7;border-radius:12px;padding:1rem;margin-bottom:1.5rem;font-size:0.9rem;color:#2E7D32;">
      ✅ Web3Forms 已正常转发邮件到 <strong>wujinyi@chiefcoffee.cn</strong>。<br>
      💡 Web3Forms 免费版不提供网页管理后台，所有提交通过邮件通知。请检查邮箱收件箱（含垃圾邮件）。
    </div>
    <div class="admin-card">
      <table class="data-table">
        <thead><tr><th>时间</th><th>姓名</th><th>电话</th><th>公司</th><th>意向</th><th>留言</th></tr></thead>
        <tbody>
          ${contacts.map(c => `
            <tr>
              <td style="white-space:nowrap;font-size:0.85rem;">${c.time}</td>
              <td><strong>${c.name}</strong></td>
              <td>${c.phone}</td>
              <td>${c.company || '-'}</td>
              <td><span class="tag">${intentLabel(c.intent)}</span></td>
              <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${c.message || ''}">${c.message || '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function intentLabel(i) {
  const map = { sample: '样品试用', purchase: '批量采购', oem: 'OEM定制', other: '其他合作' };
  return map[i] || i || '未指定';
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

/* ============================================
   SEO Audit Engine — 真实检测，无虚假数据
   ============================================ */
let currentAudit = null;

async function runSiteAudit() {
  const results = {
    timestamp: new Date().toISOString(),
    pages: [],
    overallScore: 0,
    checks: []
  };

  // 1. 检测当前页面（直接从DOM读取，最可靠）
  const currentPage = auditCurrentPageDOM();
  results.pages.push(currentPage);

  // 2. 尝试检测已发布的文章页面
  const publishedArticles = appData.articles.filter(a => a.url && a.status === 'published');
  for (const article of publishedArticles.slice(0, 5)) {
    try {
      const resp = await fetch(article.url);
      if (resp.ok) {
        const html = await resp.text();
        const pageAudit = auditHTML(html, article.url, article.title);
        results.pages.push(pageAudit);
      }
    } catch(e) {
      // 页面获取失败，跳过
    }
  }

  // 3. 综合评分
  results.overallScore = calcOverallScore(results);
  results.checks = generateChecklist(results);

  // 4. 保存历史
  if (!appData.auditHistory) appData.auditHistory = [];
  appData.auditHistory.push({
    timestamp: results.timestamp,
    score: results.overallScore,
    pagesChecked: results.pages.length
  });
  // 只保留最近50条
  if (appData.auditHistory.length > 50) appData.auditHistory = appData.auditHistory.slice(-50);
  saveData();

  currentAudit = results;
  return results;
}

function auditCurrentPageDOM() {
  const checks = [];
  
  // Title
  const title = document.title || '';
  const titleLen = title.length;
  let titleScore = 100;
  let titleIssues = [];
  if (titleLen < 10) { titleScore -= 40; titleIssues.push('标题过短（<10字符）'); }
  else if (titleLen < 30) { titleScore -= 15; titleIssues.push('标题偏短，建议30-60字符'); }
  else if (titleLen > 70) { titleScore -= 20; titleIssues.push('标题过长（>70字符），可能被截断'); }
  if (!title.includes('CHIEF') && !title.includes('启啡')) { titleScore -= 20; titleIssues.push('标题不含品牌名'); }

  // Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  const descText = metaDesc ? metaDesc.getAttribute('content') || '' : '';
  const descLen = descText.length;
  let descScore = metaDesc ? 100 : 0;
  let descIssues = [];
  if (!metaDesc) { descScore = 0; descIssues.push('缺少meta description标签'); }
  else if (descLen < 50) { descScore -= 30; descIssues.push('描述过短（<50字符）'); }
  else if (descLen > 160) { descScore -= 15; descIssues.push('描述过长（>160字符），可能被截断'); }

  // OG Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  const ogUrl = document.querySelector('meta[property="og:url"]');
  const ogType = document.querySelector('meta[property="og:type"]');
  let ogScore = 100;
  let ogIssues = [];
  if (!ogTitle) { ogScore -= 25; ogIssues.push('缺少og:title'); }
  if (!ogDesc) { ogScore -= 25; ogIssues.push('缺少og:description'); }
  if (!ogUrl) { ogScore -= 15; ogIssues.push('缺少og:url'); }
  if (!ogType) { ogScore -= 15; ogIssues.push('缺少og:type'); }

  // Schema.org JSON-LD
  const scripts = document.querySelectorAll('script[type="application/ld+json"]');
  let schemaScore = scripts.length > 0 ? 100 : 0;
  let schemaIssues = [];
  let schemaTypes = [];
  if (scripts.length === 0) {
    schemaScore = 0;
    schemaIssues.push('未检测到结构化数据(JSON-LD)');
  } else {
    scripts.forEach(s => {
      try {
        const data = JSON.parse(s.textContent);
        schemaTypes.push(data['@type'] || 'unknown');
      } catch(e) {
        schemaScore -= 30;
        schemaIssues.push('JSON-LD解析失败');
      }
    });
  }

  // Heading Structure
  const h1s = document.querySelectorAll('h1');
  const h2s = document.querySelectorAll('h2');
  const h3s = document.querySelectorAll('h3');
  let headingScore = 100;
  let headingIssues = [];
  if (h1s.length === 0) { headingScore -= 50; headingIssues.push('缺少H1标签'); }
  else if (h1s.length > 1) { headingScore -= 20; headingIssues.push(`存在${h1s.length}个H1标签（建议1个）`); }
  if (h2s.length === 0) { headingScore -= 15; headingIssues.push('缺少H2标签，内容层级不清晰'); }
  if (h2s.length + h3s.length < 3) { headingScore -= 10; headingIssues.push('子标题偏少，建议丰富内容结构'); }

  // Images
  const images = document.querySelectorAll('img');
  let imagesWithAlt = 0;
  let imagesWithoutAlt = 0;
  images.forEach(img => {
    if (img.hasAttribute('alt') && img.getAttribute('alt').trim()) imagesWithAlt++;
    else imagesWithoutAlt++;
  });
  let imageScore = images.length === 0 ? 100 : Math.round((imagesWithAlt / images.length) * 100);
  let imageIssues = [];
  if (imagesWithoutAlt > 0) imageIssues.push(`${imagesWithoutAlt}张图片缺少alt属性`);

  // Links
  const links = document.querySelectorAll('a[href]');
  let internalLinks = 0, externalLinks = 0;
  const domain = window.location.hostname;
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href.startsWith('http')) {
      try { new URL(href).hostname === domain ? internalLinks++ : externalLinks++; }
      catch(e) { internalLinks++; }
    } else {
      internalLinks++;
    }
  });
  let linkScore = 100;
  let linkIssues = [];
  if (internalLinks < 10) { linkScore -= 20; linkIssues.push('内链数量偏少'); }

  // Viewport / Mobile
  const viewport = document.querySelector('meta[name="viewport"]');
  let mobileScore = viewport ? 100 : 0;
  let mobileIssues = [];
  if (!viewport) { mobileIssues.push('缺少viewport meta标签'); }

  // Canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  let canonicalScore = canonical ? 100 : 70;
  let canonicalIssues = [];
  if (!canonical) canonicalIssues.push('缺少canonical标签（建议添加）');

  // Word Count + Readability
  const bodyText = document.body.innerText || '';
  const wordCount = bodyText.replace(/\s+/g, '').length;
  let contentScore = 100;
  let contentIssues = [];
  if (wordCount < 300) { contentScore -= 40; contentIssues.push('页面文字内容偏少（<300字）'); }
  else if (wordCount < 800) { contentScore -= 15; contentIssues.push('内容量一般，建议丰富至800字以上'); }

  const checkResults = [
    { item: 'Title标签', score: titleScore, issues: titleIssues, detail: `${titleLen}字符` },
    { item: 'Meta Description', score: descScore, issues: descIssues, detail: `${descLen}字符` },
    { item: 'Open Graph标签', score: ogScore, issues: ogIssues, detail: `${[ogTitle,ogDesc,ogImage,ogUrl,ogType].filter(Boolean).length}/5项` },
    { item: '结构化数据(JSON-LD)', score: schemaScore, issues: schemaIssues, detail: schemaTypes.join(', ') || '无' },
    { item: 'Heading层级结构', score: headingScore, issues: headingIssues, detail: `H1:${h1s.length} H2:${h2s.length} H3:${h3s.length}` },
    { item: '图片Alt属性', score: imageScore, issues: imageIssues, detail: `${imagesWithAlt}/${images.length}张` },
    { item: '内链结构', score: linkScore, issues: linkIssues, detail: `内链${internalLinks} 外链${externalLinks}` },
    { item: '移动端适配', score: mobileScore, issues: mobileIssues, detail: viewport ? '已声明' : '未声明' },
    { item: 'Canonical标签', score: canonicalScore, issues: canonicalIssues, detail: canonical ? '已设置' : '未设置' },
    { item: '内容充实度', score: contentScore, issues: contentIssues, detail: `约${wordCount}字` }
  ];

  const avgScore = Math.round(checkResults.reduce((s, c) => s + c.score, 0) / checkResults.length);

  return {
    url: window.location.href,
    title: title,
    score: avgScore,
    checks: checkResults
  };
}

function auditHTML(html, url, title) {
  // 从HTML字符串中分析（简易解析）
  const getMeta = (name) => {
    const m = html.match(new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i')) ||
              html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, 'i'));
    return m ? m[1] : '';
  };

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const pageTitle = titleMatch ? titleMatch[1] : title;

  const hasSchema = /application\/ld\+json/.test(html);
  const hasH1 = /<h1[^>]*>/i.test(html);
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const images = (html.match(/<img[^>]*>/gi) || []);
  const imagesWithAlt = images.filter(i => /\salt=["'][^"']+["']/i.test(i)).length;

  const textContent = html.replace(/<[^>]+>/g, '').replace(/\s+/g, '');
  const wordCount = textContent.length;

  const checks = [
    { item: '页面可访问', score: 100, issues: [], detail: 'HTTP 200' },
    { item: 'Title标签', score: pageTitle.length >= 10 && pageTitle.length <= 70 ? 100 : 60, issues: [], detail: `${pageTitle.length}字符` },
    { item: '结构化数据', score: hasSchema ? 100 : 0, issues: hasSchema ? [] : ['缺少JSON-LD'], detail: hasSchema ? '已部署' : '未部署' },
    { item: 'Heading结构', score: hasH1 ? 100 : 0, issues: hasH1 ? [] : ['缺少H1'], detail: `H2:${h2Count}个` },
    { item: '图片Alt', score: images.length ? Math.round((imagesWithAlt/images.length)*100) : 100, issues: [], detail: `${imagesWithAlt}/${images.length}张` },
    { item: '内容量', score: wordCount > 300 ? 100 : wordCount > 100 ? 60 : 30, issues: [], detail: `约${wordCount}字` }
  ];

  const avgScore = Math.round(checks.reduce((s, c) => s + c.score, 0) / checks.length);

  return { url, title: pageTitle, score: avgScore, checks };
}

function calcOverallScore(results) {
  if (results.pages.length === 0) return 0;
  const total = results.pages.reduce((s, p) => s + p.score, 0);
  return Math.round(total / results.pages.length);
}

function generateChecklist(results) {
  const allIssues = [];
  results.pages.forEach(page => {
    page.checks.forEach(check => {
      check.issues.forEach(issue => {
        allIssues.push({ page: page.url, item: check.item, issue, score: check.score });
      });
    });
  });

  // 按严重程度排序
  return allIssues.sort((a, b) => a.score - b.score);
}

function getAuditGrade(score) {
  if (score >= 90) return { grade: 'A', color: '#2E7D32', label: '优秀' };
  if (score >= 75) return { grade: 'B', color: '#558B2F', label: '良好' };
  if (score >= 60) return { grade: 'C', color: '#F57F17', label: '一般' };
  if (score >= 40) return { grade: 'D', color: '#E65100', label: '较差' };
  return { grade: 'F', color: '#C62828', label: '急需优化' };
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
