---
title: 第7章 化学平衡
comments: true
---

# 第7章 化学平衡

## 7.1 可逆反应与平衡常数

### 7.1.1 可逆反应

!!! abstract "定义"
    在同一条件下，一个化学反应既可正向进行又可逆向进行，该反应称为可逆反应。几乎所有的反应都是可逆的，只不过可逆的程度不同而已。

### 7.1.2 化学平衡

当正反应速率等于逆反应速率时，体系中各物质的浓度不再随时间改变，即达到化学平衡。化学平衡是一种**动态平衡**。

### 7.1.3 平衡常数

对于可逆反应 $a\mathrm{A} + b\mathrm{B} \rightleftharpoons c\mathrm{C} + d\mathrm{D}$：

!!! success "重要公式"
    **浓度平衡常数**（实验平衡常数）：

    $$K_c = \frac{[\mathrm{C}]^c [\mathrm{D}]^d}{[\mathrm{A}]^a [\mathrm{B}]^b}$$

    **压力平衡常数**（对气相反应）：

    $$K_p = \frac{(p_{\mathrm{C}})^c (p_{\mathrm{D}})^d}{(p_{\mathrm{A}})^a (p_{\mathrm{B}})^b}$$

    $K_p$ 与 $K_c$ 的关系：

    $$K_p = K_c (RT)^{\Delta n_g}$$

    其中 $\Delta n_g = (c + d) - (a + b)$ 为气体物质的量的变化。

### 7.1.4 标准平衡常数

!!! abstract "定义"
    标准平衡常数 $K^\ominus$：对于气相反应，$K^\ominus = K_p / (p^\ominus)^{\Delta n_g}$（$p^\ominus = 100\ \mathrm{kPa}$ 为标准压力）。标准平衡常数是**无量纲量**。

平衡常数的意义：

- $K \gg 1$：平衡时产物占优势，反应进行较完全
- $K \ll 1$：平衡时反应物占优势
- 平衡常数**仅与温度有关**，与浓度、压力、催化剂无关

## 7.2 Gibbs 自由能与化学平衡

!!! success "重要公式"
    **化学反应的等温方程**（van't Hoff 等温式）：

    $$\Delta_r G_m = \Delta_r G_m^\ominus + RT \ln Q$$

    在平衡时，$\Delta_r G_m = 0$，$Q = K^\ominus$，故：

    $$\Delta_r G_m^\ominus = -RT \ln K^\ominus$$

    即：

    $$K^\ominus = e^{-\Delta_r G_m^\ominus / RT}$$

!!! warning "重点提示"
    此公式极其重要——它将**热力学**（$\Delta G^\ominus$）与**化学平衡**（$K^\ominus$）联系起来。

## 7.3 化学平衡的移动——Le Châtelier 原理

!!! abstract "定义"
    Le Châtelier 原理：如果改变平衡体系的条件（浓度、温度、压力），平衡将向减弱这种改变的方向移动。

### 7.3.1 浓度的影响

增加反应物浓度或减少产物浓度，平衡向正方向移动；反之，向逆方向移动。**$K^\ominus$ 不变**。

### 7.3.2 压力的影响

增加总压，平衡向气体分子数减少的方向移动（仅当 $\Delta n_g \neq 0$ 时有影响）。**$K^\ominus$ 不变**。

### 7.3.3 温度的影响——van't Hoff 方程

!!! success "重要公式"
    van't Hoff 方程：

    $$\ln\frac{K_2^\ominus}{K_1^\ominus} = -\frac{\Delta_r H_m^\ominus}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

    或微分形式：

    $$\frac{\mathrm{d}\ln K^\ominus}{\mathrm{d}T} = \frac{\Delta_r H_m^\ominus}{RT^2}$$

- **吸热反应**（$\Delta H > 0$）：升温使 $K^\ominus$ 增大，平衡右移
- **放热反应**（$\Delta H < 0$）：升温使 $K^\ominus$ 减小，平衡左移

!!! question "典型例题"
    **例题：** 反应 $\mathrm{N_2(g) + 3H_2(g) \rightleftharpoons 2NH_3(g)}$，$\Delta_r H_m^\ominus = -92.2\ \mathrm{kJ \cdot mol^{-1}}$。判断下列措施对平衡的影响：(1) 加压；(2) 升温；(3) 加入催化剂。

    **解析：**

    (1) $\Delta n_g = 2 - 4 = -2 < 0$，加压使平衡向气体分子数减小的方向（正方向）移动，有利于 $\mathrm{NH_3}$ 的生成。

    (2) 该反应为放热反应（$\Delta H < 0$），升温使平衡向吸热方向（逆方向）移动，$K^\ominus$ 减小。

    (3) 催化剂同等地降低正逆反应活化能，不改变平衡位置和 $K^\ominus$，只加快达到平衡的速率。
