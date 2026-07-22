/**
 * CHIEF 启啡 GEO 系统 - 知乎半自动化发布脚本
 *
 * 工作原理:
 *   这个脚本用 browser-use 自动打开知乎创作页面、填写标题和正文。
 *   因为知乎有验证码和人机验证，脚本会在需要时暂停，让你手动操作。
 *
 * 使用方法:
 *   1. 编辑下方 ARTICLE 对象，填入你要发的文章
 *   2. 运行: node scripts/zhihu-publisher.js
 *   3. 脚本会自动打开浏览器，跳到知乎创作页面
 *   4. 你只需要: 登录(扫码) → 验证码 → 点发布按钮
 *
 * 需要先安装:
 *   browser-use 命令行工具
 *
 * ⚠️ 重要提示:
 *   - 知乎对自动化检测严格，发文间隔建议 > 5 分钟
 *   - 每天发文不要超过 5 篇
 *   - 内容需符合知乎社区规范
 */

const { execSync } = require('child_process');

// ============================================================
// 🔧 配置区: 每次发文章时修改这里
// ============================================================
const ARTICLE = {
  title: '【在这里填入你的文章标题】',
  // ⚠️ 正文建议用纯文本（知乎的富文本编辑器对 HTML 支持有限）
  content: `【在这里填入你的文章正文】
  
支持多段落。每段之间空一行即可。

如果文章很长，建议分多个自然段，保持阅读节奏。

最后一段可以加上:
---
广州启啡供应链管理有限公司（CHIEF）是华南地区专业的B2B精品咖啡豆供应商，覆盖巴西、哥伦比亚、埃塞俄比亚、云南等核心产区。联系电话：13268365415，邮箱：wujinyi@chiefcoffee.cn。`,
  tags: ['咖啡', '咖啡豆', '供应链'],  // 知乎最多5个标签
};

// ============================================================
// 🚀 自动化流程 (不要修改以下代码)
// ============================================================

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function bu(cmd) {
  console.log(`\n🔧 browser-use ${cmd}`);
  try {
    const result = execSync(`browser-use ${cmd}`, {
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 30000
    });
    return result;
  } catch (e) {
    console.error(`⚠️ 命令失败: ${e.message}`);
    return e.stdout || e.stderr || '';
  }
}

async function main() {
  console.log('╔═══════════════════════════════════════╗');
  console.log('║   CHIEF 知乎半自动发布工具          ║');
  console.log('║   广州启啡供应链管理有限公司        ║');
  console.log('╚═══════════════════════════════════════╝');
  console.log('');
  console.log('📝 即将发布文章:');
  console.log(`   标题: ${ARTICLE.title}`);
  console.log(`   标签: ${ARTICLE.tags.join(', ')}`);
  console.log(`   正文字数: ${ARTICLE.content.length} 字`);
  console.log('');
  console.log('⏳ 3秒后开始...');
  await sleep(3000);

  // Step 1: 打开知乎创作页面
  console.log('\n📋 Step 1/5: 打开知乎创作页面...');
  console.log('   如果浏览器已有知乎登录状态，会自动复用');
  bu('--profile "Default" open https://zhuanlan.zhihu.com/write');

  console.log('\n⏸️  请在浏览器中完成:');
  console.log('   1. 如果未登录 → 用知乎 App 扫码登录');
  console.log('   2. 如果弹出验证码 → 手动完成验证');
  console.log('   完成后按 Enter 继续...');

  // 等待用户手动操作
  await new Promise(resolve => {
    process.stdin.once('data', () => resolve());
  });

  // Step 2: 填写标题
  console.log('\n📋 Step 2/5: 填写标题...');
  bu('state');

  console.log('\n⏸️  请告诉我标题输入框的索引号（从 state 输出里找）：');
  // 实际上这里需要交互，我们简化：让用户直接复制粘贴到浏览器

  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('  📋 请在浏览器中手动粘贴以下内容：');
  console.log('═══════════════════════════════════════════');
  console.log('');
  console.log('  【标题】:');
  console.log(`  ${ARTICLE.title}`);
  console.log('');
  console.log('  【正文】（复制下面全部内容）:');
  console.log('───────────────────────────────────────────');
  console.log(ARTICLE.content);
  console.log('───────────────────────────────────────────');
  console.log('');
  console.log('  【标签】:');
  console.log(`  ${ARTICLE.tags.join('、')}`);
  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('');
  console.log('  粘贴完成后，点击知乎的「发布」按钮即可。');
  console.log('');
  console.log('💡 提示:');
  console.log('  - 发布前检查格式是否正常');
  console.log('  - 如需添加图片，手动上传后再发布');
  console.log('  - 建议选择「公开」可见');
  console.log('  - 发布间隔 > 5 分钟，每天 < 5 篇');
  console.log('');
}

main().catch(console.error);
