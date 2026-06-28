# DESIGN.md — 北航中法未来科技学院自助指南

## 颜色

### 亮色模式
- **Primary** (#3f51b5) — Material Indigo 500
- **Accent** (#3f51b5) — 同 Primary（已知问题：下一步优化应区分 accent）
- **Surface** (#ffffff) — 白色背景
- **Ink** (#1a1a1a) — 正文颜色
- **Muted** — 各透明度层级的 indigo（用于卡片背景、悬停效果）

### 暗色模式
- **Primary** (#3f51b5) — 保持不变
- **Surface** (#303030) — Material Slate
- **Ink** (#e0e0e0) — 暗色正文

### CSS 变量
```css
--buaa-blue: #3f51b5;
--buaa-blue-light: rgba(63, 81, 181, 0.08);
--buaa-blue-glow: rgba(63, 81, 181, 0.15);
--card-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
--card-shadow-hover: 0 8px 30px rgba(0, 0, 0, 0.12);
```

## 排版

### 字体
- **正文**（CJK + Latin）: Noto Sans SC — 300/400/700
- **代码**: JetBrains Mono — 400/700
- **字号基准**: 1rem (16px)
- **行高**: 正文 1.8，标题 1.3–1.4
- **栏宽**: `max-width: 65ch`

### 标题层级
- H1: 2rem / 700 / 底部 2px 实线边框
- H2: 1.5rem / 600 / 左侧 4px 装饰线
- H3: 1.2rem / 600

### CJK 特殊处理
- 中文行高 ≥1.7（当前 1.8 ✓）
- `ch` 单位对 CJK 偏宽，标题不使用 `ch` 约束
- 标题 `letter-spacing: 0.01–0.02em`

## 间距
ad-hoc 系统（待建立 scale）:
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 2rem
- xl: 4rem

## 组件

### 卡片网格
- 圆角 12px
- CSS Grid: `repeat(auto-fit, minmax(240px, 1fr))`
- 悬停: translateY(-6px) + 阴影增强 + indigo 边框
- 每个卡片含: h3 + p + 链接

### 表格
- 圆角 8px
- 渐变表头 indigo → #5c6bc0
- 斑马条纹 2% 黑色
- 悬停高亮 indigo 8% 透明度

### Admonitions（提示块）
- 圆角 8px
- CSS 进入动画（admonitionIn）
- 悬停阴影增强

### Hero 区
- Indigo 渐变背景（3%–10% 透明度）
- 径向发光伪元素动画
- 文本居中，max-width: 640px

## 动画

### CSS 动画
- `heroGlow` — 8s 无限渐变发光
- `fadeInUp` — Hero 文本入场
- `cardIn` — 卡片交错入场
- `admonitionIn` — 提示块交错入场
- `contentFadeIn` — 页面内容淡入

### GSAP (ScrollTrigger)
- Hero 文本序列入场
- 卡片网格滚动揭示（top 85%）
- 表格批量淡入（top 90%）
- 返回顶部按钮弹性弹出
- Mermaid 图表滚动揭示

### 减速运动
- JS: `prefers-reduced-motion: reduce` 时完全跳过 GSAP
- CSS: `@media (prefers-reduced-motion: reduce)` 关闭所有动画

## 已知改进项
- [ ] Accent 色与 Primary 相同——应选用互补色
- [ ] 间距系统未标准化（ad-hoc 值）
- [ ] 子页面主要为纯文本+表格，缺少视觉变化
- [ ] 无图片/图标素材（有意识地保持轻量）
