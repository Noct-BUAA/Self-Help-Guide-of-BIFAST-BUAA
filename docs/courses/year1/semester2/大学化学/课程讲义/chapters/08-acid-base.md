---
title: 第8章 酸碱平衡
comments: true
---

# 第8章 酸碱平衡

## 8.1 酸碱理论的发展

### 8.1.1 Arrhenius 酸碱理论（1887 年）

!!! abstract "定义"
    Arrhenius 理论：酸是在水溶液中电离产生 $\mathrm{H^+}$ 的物质；碱是在水溶液中电离产生 $\mathrm{OH^-}$ 的物质。

局限：只适用于水溶液，无法解释 $\mathrm{NH_3}$ 等非氢氧化物的碱性。

### 8.1.2 Brønsted-Lowry 酸碱质子理论（1923 年）

!!! abstract "定义"
    Brønsted-Lowry 质子理论：**酸是质子的给予体（供体）；碱是质子的接受体（受体）**。

共轭酸碱对：$\mathrm{HA \rightleftharpoons H^+ + A^-}$，$\mathrm{HA}$ 和 $\mathrm{A^-}$ 互为共轭酸碱对。

两性物质（如 $\mathrm{H_2O}$、$\mathrm{HCO_3^-}$、$\mathrm{HS^-}$）既可给出质子也可接受质子。

酸碱反应的实质：共轭酸碱对之间的质子转移。例如：

$$\mathrm{HA + B \rightleftharpoons A^- + BH^+}$$

$$\text{酸}_1 + \text{碱}_2 \rightleftharpoons \text{碱}_1 + \text{酸}_2$$

### 8.1.3 Lewis 酸碱理论

!!! abstract "定义"
    Lewis 理论：**酸是电子对的接受体；碱是电子对的给予体**。

这是最广泛的酸碱定义。如 $\mathrm{BF_3}$ 和 $\mathrm{AlCl_3}$ 都是 Lewis 酸（可接受电子对）。

## 8.2 弱酸和弱碱的解离平衡

### 8.2.1 水的自耦解离与 pH

!!! success "重要公式"
    水的离子积常数：

    $$K_w^\ominus = [\mathrm{H^+}][\mathrm{OH^-}] = 1.0 \times 10^{-14}\ (25\ {}^\circ\mathrm{C})$$

    $$\mathrm{pH} = -\lg[\mathrm{H^+}],\quad \mathrm{pOH} = -\lg[\mathrm{OH^-}]$$

    $$\mathrm{pH} + \mathrm{pOH} = 14\ (25\ {}^\circ\mathrm{C})$$

### 8.2.2 弱酸弱碱的解离常数

对于弱酸 $\mathrm{HA}$ 的解离：$\mathrm{HA \rightleftharpoons H^+ + A^-}$

$$K_a = \frac{[\mathrm{H^+}][\mathrm{A^-}]}{[\mathrm{HA}]}$$

对于弱碱 $\mathrm{B}$ 的解离：$\mathrm{B + H_2O \rightleftharpoons BH^+ + OH^-}$

$$K_b = \frac{[\mathrm{BH^+}][\mathrm{OH^-}]}{[\mathrm{B}]}$$

!!! success "重要公式"
    共轭酸碱对的 $K_a$ 和 $K_b$ 的关系：

    $$K_a \cdot K_b = K_w = 1.0 \times 10^{-14}$$

    即 $K_a$ 越大（酸越强），其共轭碱的 $K_b$ 越小（碱越弱）。

### 8.2.3 弱酸弱碱溶液 pH 的计算

!!! success "重要公式"
    一元弱酸（$c \gg K_a$，$cK_a \geq 20K_w$）：

    $$[\mathrm{H^+}] = \sqrt{K_a \cdot c}$$

    一元弱碱（$c \gg K_b$，$cK_b \geq 20K_w$）：

    $$[\mathrm{OH^-}] = \sqrt{K_b \cdot c}$$

## 8.3 缓冲溶液

!!! abstract "定义"
    缓冲溶液是能够抵抗少量强酸或强碱的加入而保持 pH 基本不变的溶液。通常由弱酸及其共轭碱（或弱碱及其共轭酸）组成。

!!! success "重要公式"
    **Henderson-Hasselbalch 方程：**

    $$\mathrm{pH} = \mathrm{p}K_a + \lg\frac{[\text{共轭碱}]}{[\text{酸}]}$$

    或

    $$\mathrm{pH} = \mathrm{p}K_a + \lg\frac{c_{\text{盐}}}{c_{\text{酸}}}$$

**缓冲容量**：缓冲溶液抵抗 pH 变化的能力，当共轭酸碱对的浓度比为 $1:1$ 时缓冲容量最大。

**缓冲范围**：$\mathrm{pH} = \mathrm{p}K_a \pm 1$

!!! question "典型例题"
    **例题：** 欲配制 $\mathrm{pH} = 4.75$ 的缓冲溶液，需在 100 mL $0.10\ \mathrm{mol \cdot L^{-1}}$ HAc 溶液中加入多少克 NaAc？已知 HAc 的 $\mathrm{p}K_a = 4.75$，NaAc 的摩尔质量为 $82.0\ \mathrm{g \cdot mol^{-1}}$。

    **解析：** 由 Henderson-Hasselbalch 方程：

    $$\mathrm{pH} = \mathrm{p}K_a + \lg\frac{c(\mathrm{Ac^-})}{c(\mathrm{HAc})}$$

    $$4.75 = 4.75 + \lg\frac{c(\mathrm{Ac^-})}{0.10}$$

    得 $\lg[c(\mathrm{Ac^-})/0.10] = 0$，$c(\mathrm{Ac^-}) = 0.10\ \mathrm{mol \cdot L^{-1}}$。

    $$n(\mathrm{NaAc}) = cV = 0.10 \times 0.100 = 0.010\ \mathrm{mol}$$

    $$m(\mathrm{NaAc}) = 0.010 \times 82.0 = 0.82\ \mathrm{g}$$

## 8.4 盐类的水解

盐的离子与水中的 $\mathrm{H^+}$ 或 $\mathrm{OH^-}$ 作用生成弱电解质，使溶液偏离中性的现象称为水解。

**表9：各类盐的水解情况**

| 盐的类型 | 水解情况 | 溶液酸碱性 |
|:---------|:---------|:-----------|
| 强酸强碱盐（如 NaCl） | 不水解 | 中性 |
| 强酸弱碱盐（如 $\mathrm{NH_4Cl}$） | 阳离子水解 | 酸性 |
| 弱酸强碱盐（如 NaAc） | 阴离子水解 | 碱性 |
| 弱酸弱碱盐（如 $\mathrm{NH_4Ac}$） | 双水解 | 取决于 $K_a$ 与 $K_b$ 的相对大小 |

!!! success "重要公式"
    一元弱酸强碱盐（如 NaA）的水解常数：

    $$K_h = \frac{K_w}{K_a}$$

    $$[\mathrm{OH^-}] = \sqrt{K_h \cdot c} = \sqrt{\frac{K_w}{K_a} \cdot c}$$

## 8.5 电解质溶液理论

### 8.5.1 强电解质与弱电解质

- **强电解质**：在溶液中完全电离（如强酸、强碱、大多数盐）
- **弱电解质**：在溶液中部分电离（如弱酸、弱碱）

### 8.5.2 解离度

!!! abstract "定义"
    $$\text{解离度}\ \alpha = \frac{\text{已解离的分子数}}{\text{分子总数}} \times 100\%$$

    对于一元弱酸 $\mathrm{HA}$：

    $$\alpha \approx \sqrt{\frac{K_a}{c}} \quad (\text{当}\ \alpha < 5\%\ \text{时适用，即稀释定律})$$

### 8.5.3 同离子效应

在弱电解质溶液中加入含有相同离子的强电解质时，弱电解质的解离度降低，称为**同离子效应**。这是缓冲溶液发挥作用的基础。
