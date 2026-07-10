---
title: 第10章 氧化还原反应与电化学
comments: true
---

# 第10章 氧化还原反应与电化学

## 10.1 氧化还原反应的基本概念

### 10.1.1 氧化数与氧化还原

!!! abstract "定义"
    氧化数（氧化态）是某原子在化合物中形式上带的电荷数。规定：

    - 单质中元素的氧化数为 $0$
    - 氢在化合物中通常为 $+1$（金属氢化物中为 $-1$）
    - 氧在化合物中通常为 $-2$（过氧化物中为 $-1$）
    - 化合物中各元素氧化数的代数和等于化合物的总电荷

    **氧化**：氧化数升高的过程（失电子）
    **还原**：氧化数降低的过程（得电子）

### 10.1.2 氧化还原反应方程式的配平

**离子-电子法（半反应法）步骤：**

1. 将反应分成氧化半反应和还原半反应
2. 分别配平每个半反应中的原子（除 H、O 外的原子先用系数配平）
3. 在酸性介质中，用 $\mathrm{H_2O}$ 配平 O，用 $\mathrm{H^+}$ 配平 H
4. 在碱性介质中，用 $\mathrm{H_2O}$ 和 $\mathrm{OH^-}$ 配平 O 和 H
5. 用电子配平电荷
6. 将两个半反应乘以适当系数使电子数相等，相加即得配平的总反应

## 10.2 原电池与电极

### 10.2.1 原电池的组成

!!! abstract "定义"
    原电池（Galvanic cell）是将化学能转化为电能的装置。它由两个半电池（电极）组成，通过盐桥连接。

电池的表示法（电池符号）：

$$(-)\ \mathrm{Zn \mid Zn^{2+}(c_1) \parallel Cu^{2+}(c_2) \mid Cu}\ (+)$$

- **负极（阳极）**：发生氧化反应，电子流出
- **正极（阴极）**：发生还原反应，电子流入
- **盐桥**：提供离子通路，消除液接电势，维持电荷平衡

### 10.2.2 电极的类型

| 类型 | 示例 |
|:-----|:-----|
| 金属-金属离子电极 | $\mathrm{Zn \mid Zn^{2+}}$、$\mathrm{Cu \mid Cu^{2+}}$ |
| 气体-离子电极 | 标准氢电极 $\mathrm{Pt \mid H_2(g) \mid H^+}$、氯电极 |
| 金属-难溶盐-阴离子电极 | 甘汞电极 $\mathrm{Hg \mid Hg_2Cl_2 \mid Cl^-}$、$\mathrm{Ag \mid AgCl \mid Cl^-}$ |
| 氧化还原电极 | $\mathrm{Pt \mid Fe^{3+}, Fe^{2+}}$ |

## 10.3 电极电势

### 10.3.1 标准氢电极（SHE）

!!! abstract "定义"
    标准氢电极（SHE）被选为电极电势的参比标准，其电极电势被规定为零：

    $$2\mathrm{H^+(aq,\ 1\ mol/L)} + 2e^- \rightleftharpoons \mathrm{H_2(g,\ 100\ kPa)},\quad E^\ominus(\mathrm{H^+/H_2}) = 0\ \mathrm{V}$$

### 10.3.2 标准电极电势

!!! abstract "定义"
    标准电极电势（$E^\ominus$）是在标准状态下（离子浓度 $1\ \mathrm{mol \cdot L^{-1}}$，气体压力 $100\ \mathrm{kPa}$，温度通常为 298 K），以标准氢电极为参比测得的电极电势。

$E^\ominus$ 越正，电对中氧化型物质的氧化能力越强；$E^\ominus$ 越负，电对中还原型物质的还原能力越强。

### 10.3.3 Nernst 方程

!!! success "重要公式"
    对于电极反应 $a\mathrm{Ox} + ne^- \rightleftharpoons b\mathrm{Red}$：

    $$E = E^\ominus - \frac{RT}{nF}\ln\frac{[\mathrm{Red}]^b}{[\mathrm{Ox}]^a}$$

    在 298 K 时：

    $$E = E^\ominus - \frac{0.0592}{n}\lg\frac{[\mathrm{Red}]^b}{[\mathrm{Ox}]^a}$$

## 10.4 电池反应的热力学

### 10.4.1 电池电动势与 $\Delta_r G_m$

!!! success "重要公式"
    $$\Delta_r G_m = -nFE$$

    $$\Delta_r G_m^\ominus = -nFE^\ominus$$

    其中 $n$ 为电池反应中转移的电子数，$F = 96485\ \mathrm{C \cdot mol^{-1}}$ 为 Faraday 常数。

### 10.4.2 平衡常数与标准电动势

!!! success "重要公式"
    $$\ln K^\ominus = \frac{nFE^\ominus}{RT}$$

    在 298 K 时：

    $$\lg K^\ominus = \frac{nE^\ominus}{0.0592}$$

判断氧化还原反应的方向：在恒温恒压下，$\Delta_r G_m = -nFE$。

- $E > 0$（即 $E_{\text{正}} > E_{\text{负}}$）：正反应自发
- $E = 0$：达到平衡
- $E < 0$：逆反应自发

## 10.5 电极电势的应用

1. **判断氧化剂和还原剂的相对强弱**：$E^\ominus$ 越大，氧化型氧化能力越强
2. **判断氧化还原反应的方向**：强氧化型 + 强还原型 → 弱还原型 + 弱氧化型
3. **计算反应的平衡常数**：$\lg K^\ominus = nE^\ominus / 0.0592$
4. **计算溶度积常数**：通过设计原电池，利用 $E^\ominus$ 计算 $K_{sp}$

!!! question "典型例题"
    **例题：** 已知 $E^\ominus(\mathrm{Cu^{2+}/Cu}) = +0.337\ \mathrm{V}$，$E^\ominus(\mathrm{Zn^{2+}/Zn}) = -0.763\ \mathrm{V}$。计算反应 $\mathrm{Cu^{2+} + Zn \to Cu + Zn^{2+}}$ 的平衡常数。

    **解析：** 电池标准电动势：

    $$E^\ominus = E^\ominus(\mathrm{Cu^{2+}/Cu}) - E^\ominus(\mathrm{Zn^{2+}/Zn}) = 0.337 - (-0.763) = 1.100\ \mathrm{V}$$

    反应转移电子数 $n = 2$。

    $$\lg K^\ominus = \frac{nE^\ominus}{0.0592} = \frac{2 \times 1.100}{0.0592} = 37.16$$

    $$K^\ominus = 1.45 \times 10^{37}$$

    平衡常数极大，说明该反应进行得非常完全。

## 10.6 图解法讨论电极电势

### 10.6.1 元素电势图（Latimer 图）

对同一元素的不同氧化态，按氧化数从高到低排列，在连线上标出相应的标准电极电势。

例如，酸性介质中锰的元素电势图：

$$\mathrm{MnO_4^- \xrightarrow{+0.56\ \mathrm{V}} MnO_4^{2-} \xrightarrow{+2.26\ \mathrm{V}} MnO_2 \xrightarrow{+0.95\ \mathrm{V}} Mn^{3+} \xrightarrow{+1.51\ \mathrm{V}} Mn^{2+} \xrightarrow{-1.18\ \mathrm{V}} Mn}$$

利用元素电势图可以判断**歧化反应**是否可能发生：若某物种右边的 $E_{\text{右}}^\ominus$ 大于左边的 $E_{\text{左}}^\ominus$，则该物种可发生歧化反应。

### 10.6.2 Frost 图与 Pourbaix 图（了解）

- **Frost 图**：以氧化数 $n$ 为横坐标，$nE^\ominus$ 为纵坐标，可以直观比较不同氧化态的稳定性
- **Pourbaix 图**（电势-pH 图）：以 pH 为横坐标，电极电势 $E$ 为纵坐标，描述水溶液中电化学平衡与 pH 的关系
