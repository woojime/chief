/**
 * CHIEF 启啡 GEO 系统 - 自动生成 sitemap.xml
 * 扫描项目中所有 HTML 页面，生成站点地图，帮助搜索引擎发现和收录内容
 * 运行方式: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://chiefcoffee.com.cn';
const ROOT_DIR = path.resolve(__dirname, '..');

// 扫描目录下所有 .html 文件
function scanHtmlFiles(dir, base = '') {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = base ? `${base}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      results.push(...scanHtmlFiles(fullPath, relativePath));
    } else if (entry.name.endsWith('.html')) {
      const stat = fs.statSync(fullPath);
      results.push({
        url: relativePath,
        lastmod: stat.mtime.toISOString().split('T')[0],
        priority: relativePath === 'index.html' ? '1.0' : '0.8'
      });
    }
  }

  return results;
}

// 生成 sitemap.xml
function generateSitemap() {
  const pages = scanHtmlFiles(ROOT_DIR);

  const urls = pages.map(p => {
    const loc = p.url === 'index.html'
      ? BASE_URL
      : `${BASE_URL}/${p.url}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(ROOT_DIR, 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`✅ Sitemap generated: ${outputPath}`);
  console.log(`   Total pages: ${pages.length}`);
  pages.forEach(p => {
    const loc = p.url === 'index.html' ? '/' : `/${p.url}`;
    console.log(`   - ${loc} (lastmod: ${p.lastmod}, priority: ${p.priority})`);
  });
}

generateSitemap();
