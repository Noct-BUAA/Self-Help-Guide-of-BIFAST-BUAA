---
title: 第1章 物质的状态与转化
comments: true
---

# 第1章 物质的状态与转化

## 1.1 概述

物质通常以三种状态存在：气体（gas）、液体（liquid）和固体（solid）。三种物态之间可随温度或压力变化而互相转化。本章主要讨论气体的基本定律、液体和溶液的性质，以及相变过程的基本规律。

## 1.2 气体

### 1.2.1 理想气体状态方程

!!! abstract "定义"
    理想气体是指气体分子本身没有体积、分子间没有相互作用力的气体。理想气体是一个理论模型，真实气体在低压高温条件下接近理想气体行为。

理想气体状态方程为：

!!! success "重要公式"
    $$pV = nRT$$

    其中：

    - $p$ — 气体压强（Pa 或 atm）
    - $V$ — 气体体积（m³ 或 L）
    - $n$ — 气体的物质的量（mol）
    - $T$ — 热力学温度（K）
    - $R$ — 摩尔气体常数，$R = 8.314\ \mathrm{J \cdot mol^{-1} \cdot K^{-1}} = 0.08206\ \mathrm{L \cdot atm \cdot mol^{-1} \cdot K^{-1}}$

### 1.2.2 气体分压定律（Dalton 分压定律）

混合气体的总压等于各组分气体的分压之和：

!!! success "重要公式"
    $$p_{\text{总}} = \sum_i p_i = p_1 + p_2 + \cdots + p_n$$

    $$p_i = x_i \cdot p_{\text{总}}$$

    其中 $x_i = \dfrac{n_i}{n_{\text{总}}}$ 为组分 $i$ 的摩尔分数。

### 1.2.3 气体分子运动论

气体分子运动论的基本要点：

1. 气体由大量分子组成，分子间距离远大于分子本身大小
2. 气体分子处于持续不断的无规则运动中
3. 分子间的碰撞以及分子与器壁的碰撞是完全弹性碰撞
4. 分子的平均动能与热力学温度成正比：$E_k = \dfrac{3}{2}kT$

### 1.2.4 真实气体与 van der Waals 方程

真实气体在高压低温条件下偏离理想气体行为。van der Waals 方程对理想气体状态方程进行了修正：

!!! success "重要公式"
    $$\left(p + \frac{an^2}{V^2}\right)(V - nb) = nRT$$

    其中 $a$ 为分子间引力修正系数，$b$ 为分子体积修正系数（1 mol 气体的已占体积）。

## 1.3 液体与相变

### 1.3.1 液体的基本性质

液体的特征：

- **蒸气压**：在一定温度下，液体与其蒸气达到平衡时蒸气的压力
- **沸点**：液体的蒸气压等于外界大气压时的温度
- **表面张力**：液体表面分子受到的指向液体内部的净吸引力
- **黏度**：液体流动时内摩擦力的量度

### 1.3.2 相变与相图

!!! abstract "定义"
    相（phase）是指系统中物理性质和化学性质完全均匀的部分。相变是物质从一种相转变为另一种相的过程。

常见的相变类型：

| 相变 | 方向 | 英文 |
|:-----|:-----|:-----|
| 熔化（fusion） | 固体 → 液体 | melting |
| 凝固（freezing） | 液体 → 固体 | freezing |
| 汽化（vaporization） | 液体 → 气体 | vaporization |
| 冷凝（condensation） | 气体 → 液体 | condensation |
| 升华（sublimation） | 固体 → 气体 | sublimation |
| 凝华（deposition） | 气体 → 固体 | deposition |

### 1.3.3 Clausius-Clapeyron 方程

液-气平衡时蒸气压与温度的关系：

!!! success "重要公式"
    $$\ln\frac{p_2}{p_1} = -\frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

    或

    $$\ln p = -\frac{\Delta H_{\text{vap}}}{RT} + C$$

## 1.4 溶液

### 1.4.1 溶液浓度的表示方法

| 浓度类型 | 定义 | 单位 |
|:---------|:-----|:-----|
| 质量分数 | $w = \dfrac{m_{\text{溶质}}}{m_{\text{溶液}}} \times 100\%$ | 无量纲 |
| 物质的量浓度 | $c = \dfrac{n}{V}$ | mol/L |
| 质量摩尔浓度 | $b = \dfrac{n_{\text{溶质}}}{m_{\text{溶剂}}}$ | mol/kg |
| 摩尔分数 | $x_A = \dfrac{n_A}{n_{\text{总}}}$ | 无量纲 |

### 1.4.2 稀溶液的依数性

稀溶液具有一些只取决于溶质粒子数目、而与溶质本性无关的性质：

!!! abstract "定义"
    1. **蒸气压降低**：$\Delta p = p^* \cdot x_B$（Raoult 定律）
    2. **沸点升高**：$\Delta T_b = K_b \cdot b$
    3. **凝固点降低**：$\Delta T_f = K_f \cdot b$
    4. **渗透压**：$\Pi = cRT = \dfrac{n}{V}RT$

    其中 $K_b$ 为沸点升高常数，$K_f$ 为凝固点降低常数，仅与溶剂性质有关。

!!! question "典型例题"
    **例题：** 将 5.00 g 某非电解质溶于 100.0 g 水中，测得溶液的凝固点为 $-0.465\ {}^\circ\mathrm{C}$。已知水的 $K_f = 1.86\ \mathrm{K \cdot kg \cdot mol^{-1}}$，求该非电解质的摩尔质量。

    **解析：** 由凝固点降低公式 $\Delta T_f = K_f \cdot b$，得：

    $$b = \frac{\Delta T_f}{K_f} = \frac{0.465}{1.86} = 0.250\ \mathrm{mol \cdot kg^{-1}}$$

    又 $b = \dfrac{n}{m_{\text{溶剂}}} = \dfrac{m/M}{0.100\ \mathrm{kg}}$，故：

    $$M = \frac{m}{b \times 0.100} = \frac{5.00}{0.250 \times 0.100} = 200\ \mathrm{g \cdot mol^{-1}}$$
