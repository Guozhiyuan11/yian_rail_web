# YIAN Tech Global — 官网工程骨架

攀钢（Pangang）钢轨产品的**国际销售与项目协调**官网。英文为主、西班牙语为真实本地化版本，
目标是让海外铁路买家快速提交有效询价（RFQ）。

**视觉方向：重工业企业风** —— 参照国际钢厂官网的做法（SSAB 用自制的 SSAB Sans Pro，
voestalpine 用自制的 voestalpine 字体族）：
- **字体只用一个中性无衬线体 Archivo**，全站不出现等宽字体、不出现第二种字体。
- **近黑石墨色**（`ink` 色板）作结构色，不用企业海军蓝。
- **暖中性灰**（`steel` 色板），页面读起来像材料，不像 SaaS。
- **只有一个强调色**：焦琥珀 `#b45309`，且只出现在主按钮、激活导航、功能性小标记上。
  其余全部黑白灰，让照片负责颜色。
- 全站 0 圆角，结构靠 1px 细线，**不用阴影、不用悬浮位移**。

**素材状态**：已接入攀钢钢轨素材库（63 张实拍 + 6 张轨型剖面图，来源与清理记录见
[`docs/项目文档.md`](docs/项目文档.md)）；**技术数据字段仍为空**，待项目方确认后填入。

> 全部说明集中在 [`docs/项目文档.md`](docs/项目文档.md) 这一份文件里。

---

## 〇、最快看到页面（不用装任何东西）

打开 `offline-preview` 文件夹，**双击 `index.html`**，浏览器就会显示首页，页面之间的链接都能点。

- 想按 390px 宽度看手机端效果：在浏览器里按 `F12` → 点左上角的「设备模拟」图标 → 选 iPhone 尺寸。
- 想验证汉堡菜单：切到手机尺寸后点右上角的三道杠，抽屉会从右侧滑出。
- 英文站从 `index.html` 进；西语站从 `es/index.html` 进，也可以点右上角 `EN / ES` 切换。
- 这是**已经构建好的静态快照**，是独立副本；改动源码后需要重新 `npm run build` 才会更新。

### ⚠️ 需要你手动删掉的几个文件

我这边的工作环境**不允许删除文件**，所以有四个多余文件留了下来，请你在资源管理器里删掉：

```
dist/dist/                          ← 多余的嵌套副本
offline-preview/offline-preview/    ← 多余的嵌套副本
dist/_astro/about._wdEc6py.css      ← 上一版的旧样式表，已无引用
offline-preview/_astro/about._wdEc6py.css
```

当前生效的样式表是新版 `about.C7l23iww.css`，不要删错。

---

## 一、技术栈

| 项目 | 选择 |
| --- | --- |
| 框架 | Astro 5（静态优先，产出纯静态 HTML） |
| 语言 | TypeScript（`astro/tsconfigs/strict`） |
| 样式 | Tailwind CSS v4（`@tailwindcss/vite`，设计令牌写在 `src/styles/global.css` 的 `@theme`） |
| 站点地图 | `@astrojs/sitemap` |
| 部署目标 | Cloudflare Pages（后续） |

本轮**不含**任何后端：无数据库、无 API、无账号、无支付、无 CMS。

> **依赖版本提示**：`@tailwindcss/vite` 的 peer 范围含 `^8`，npm 默认会装 vite 8，
> 而 Astro 5 依赖 vite `^6.4.1`，两者类型不兼容会让 `astro check` 报错。
> 所以 `package.json` 的 devDependencies 里**显式钉了 `vite: ^6.4.1`**，请勿删除。

---

## 二、本机运行

### 1. 安装 Node.js

到 <https://nodejs.org> 下载 **LTS 版本**（20 或更高），安装后在终端验证：

```bash
node -v
npm -v
```

### 2. 进入项目目录并安装依赖（只做一次）

```bash
cd YIAN-Tech-Global-Website
npm install
```

### 3. 本地开发预览（带热更新）

```bash
npm run dev
```

终端会给出地址，通常是 <http://localhost:4321>。

### 4. 构建与预览构建产物

```bash
npm run build     # 先跑 astro check 类型检查，再生成静态站点到 dist/
npm run preview   # 本地预览 dist/ 的构建产物
```

---

## 三、目录结构

```text
YIAN-Tech-Global-Website/
├─ docs/
│  ├─ 项目大纲与架构.md          完整架构说明（站点地图、组件、数据模型、响应式策略…）
│  ├─ 素材清理记录.md            哪些图被剔除、为什么，水印处理说明
│  └─ 项目业绩来源.md            每条项目业绩的原文依据与法律边界
├─ offline-preview/             ✅ 已构建的静态快照，双击 index.html 即可查看
├─ dist/                        ✅ 构建产物（部署 Cloudflare Pages 时上传这个文件夹）
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ images/                   真实图片放这里（当前只有占位说明）
│  └─ documents/                数据表 / 图纸 PDF 放这里
└─ src/
   ├─ components/
   │  ├─ pages/                 各页面的正文（英文西语共用同一份，不重复代码）
   │  ├─ Header.astro           置顶导航 + 移动端抽屉菜单
   │  ├─ Footer.astro
   │  ├─ LanguageSwitcher.astro EN / ES 切换
   │  ├─ ProductExplorer.astro  产品列表的搜索 / 筛选 / 排序（纯前端）
   │  ├─ RFQForm.astro          询价表单
   │  └─ …（SectionHeading、ProductCard、SpecificationTable、ProcessSteps…）
   ├─ data/
   │  ├─ rails/                 产品数据 + 类型（136RE 等 6 个轨型）
   │  └─ taxonomies.ts          标准 / 应用领域 / 热处理 受控词表
   ├─ i18n/                     en.ts、es.ts、ui.ts（语言判定与路径本地化）
   ├─ layouts/BaseLayout.astro  全站外壳 + SEO / hreflang / OG
   ├─ pages/                    路由（英文在根，西语在 /es/）
   │  └─ es/
   ├─ styles/global.css         设计令牌（工业蓝 / 钢灰 / 橙）+ 通用组件类
   └─ utils/                    site.ts（站点配置）、product.ts（产品标签工具）
```

---

## 四、当前已实现

**路由（英文 14 页 + 西语 13 页，含 404 共 31 个静态页面）**

```text
/                       /es/
/rail-products          /es/rail-products
/rail/136re  (共 6 个)   /es/rail/136re
/applications           /es/applications
/manufacturing          /es/manufacturing
/export-delivery        /es/export-delivery
/about                  /es/about
/contact                /es/contact
/projects               /es/projects
/privacy                /es/privacy
/404
```

**功能**

- 置顶导航；移动端汉堡菜单 → 全屏抽屉（含语言切换与醒目 CTA）
- EN / ES 语言切换，切换后停留在同一页面
- 产品列表：搜索 + 轨型 / 标准 / 应用 / 热处理 四组筛选 + 排序 + 结果计数 + 空状态
- 产品详情：规格表、剖面与尺寸、质量与文件、制造来源、应用场景、相关产品、底部 RFQ
- 询价表单：三组分区、必填标记、原生校验、附件、captcha 占位（后端待接入）
- SEO：每页唯一 title / description、canonical、`hreflang` en/es/x-default、Open Graph、
  sitemap、robots.txt、产品页与面包屑的 JSON-LD 结构化数据
- 可访问性：跳到主内容、可见焦点环、表单 label 关联、语义化标题层级、不依赖颜色传达状态

**响应式（真正重排，不是等比缩放）**

| 区域 | 桌面 | 移动 |
| --- | --- | --- |
| 导航 | 横向 7 项 | 汉堡 → 全屏抽屉 |
| 首页 Hero | 左文右图 | 上下堆叠 |
| 信任条 | 1×4 | 2×2 |
| 产品网格 | 3–6 列 | 1–2 列 |
| 筛选面板 | 左侧固定栏 | 底部弹出抽屉 |
| 规格参数表 | 两列表格 | 标签 + 值堆叠 |
| 合作流程 | 横向 4 步 | 纵向 4 步 |
| 询价表单 | 双列 | 单列，控件 ≥44px |

---

## 五、待补素材 / 待核实内容

### 图片 —— 已接入，但版权待确认

已用素材库的 63 张实拍 + 6 张剖面图铺满全站。**授权问题尚未解决**：
来源清单中每一张图都标注"公开传播前应按来源页面联系版权方确认授权"，
其中 33 张来自新华社 / 川观新闻 / 红星新闻等媒体。详见 `docs/项目文档.md`。

> 规则：必须使用项目方提供或经官方批准的真实素材；**不得用 AI 生成的厂区图冒充真实攀钢厂区**。

### 技术数据（需项目方核实后填入 `src/data/rails/*.ts`）

每个轨型的 `unitWeight / dimensions / steelGrade / heatTreatment / length / tolerance /
packaging / leadTime`，以及尺寸图纸与数据表 PDF。
**目前这些字段一律留 `null`**：开发模式下页面会显示浅色 `TODO` 标记，
生产构建中该标记自动消失、对应字段整行隐藏。

### 文案与法务

公司介绍、关于攀钢段落的中英西定稿；隐私政策正文；联系方式（邮箱、WhatsApp、办公地址）；
以及涉及攀钢关系的**授权措辞**。

### 域名与部署

确认 `https://rail.yiantechglobal.com`，配置 Cloudflare Pages；准备品牌 logo / 分享图（OG image）。

---

## 六、内容与法务红线（长期遵守）

- 不得出现 `Official Pangang Website` / `Exclusive Distributor` / `Official Partner` /
  `Authorized Agent` / `Sole Representative` 等表述 —— 除非项目方出具书面授权与确切措辞。
- 不得编造技术参数、钢种、认证、产能、出口市场、客户名、交期、起订量、厂区归属。
- 生产页面不得出现 `Lorem ipsum` / `Unknown` / 假技术值。
- 网站主体始终是 **YIAN Tech Global**，攀钢只作为「制造来源 / 制造可信度」出现。

代码里已经把 `Pangang` 限定在允许的措辞内（如 *manufactured by Pangang*）。
产品页的结构化数据 **有意未标注 manufacturer**，等授权措辞确认后再加。

---

## 七、已知限制

1. **表单未接后端**：提交时只显示「后端将在后续阶段接入」的提示，不会发送数据。
   captcha 是禁用的占位控件，后续接 Cloudflare Turnstile。
2. **筛选依赖 JavaScript**：产品网格本身由服务端渲染（无 JS 也能看到全部产品），
   但移动端的筛选抽屉需要 JS。
3. **404 只有英文**：静态站只有一个 `404.html`，使用默认语言渲染。
4. **剖面图分辨率偏低**：115RE / 136RE / 60E1 三张源图仅约 750px 宽，
   在大屏上会略显模糊，建议项目方提供矢量版（SVG 或 PDF）。
5. **办公地址仍为空**：页脚与联系页会自动隐藏该行。
   邮箱 `hang@yiantechglobal.com` 与电话/WhatsApp `+61 0410983877` 已按你提供的信息更新。
6. **`offline-preview/` 是快照**：源码改动后需要重新 `npm run build` 并重新生成，
   正式预览请用 `npm run dev`。
7. **图片版权待确认**：见 `docs/项目文档.md`，来源清单中每张图都标注需要授权。
8. **项目业绩的总量数字是 2023 年 10 月口径**（36 国 / 300 万吨），
   上线前请更新或删除，见 `docs/项目文档.md`。
9. **桌面导航在 1280px 以上才展开**：8 个导航项在 1024px 会挤到换行，
   所以 1024 及以下使用汉堡抽屉（已实测抽屉可正常打开）。

---

## 八、后续阶段

| 阶段 | 内容 | 状态 |
| --- | --- | --- |
| Stage 1 | 工程骨架、设计系统、Header/Footer/语言切换、路由 | ✅ 完成，构建通过 |
| Stage 2 | 视觉重做：工程制图风（0 圆角 + IBM Plex）+ 接入真实素材 | ✅ 完成，构建通过 |
| Stage 3 | 视觉二次重做（字体/配色对标国际钢厂）+ 项目业绩模块 | ✅ 完成，构建通过 |
| Stage 3b | 产品系统完善（更多轨型、筛选交互打磨） | 骨架已就位 |
| Stage 4 | 产品详情页视觉打磨 | 骨架已就位 |
| Stage 5 | 其余内页打磨 | 骨架已就位 |
| Stage 6 | 静态站 QA（1440 / 1024 / 768 / 390 四档、双语、SEO、无障碍、性能） | 待开始 |
| Stage 7 | 后端接入：Cloudflare Workers + D1 + R2 + Turnstile + Resend | 未开始 |
