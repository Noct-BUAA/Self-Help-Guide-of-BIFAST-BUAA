---
title: 第6章 化学反应速率
comments: true
---

# 第6章 化学反应速率

## 6.1 化学反应速率的基本概念

### 6.1.1 热力学与动力学的区别

!!! warning "重点提示"
    热力学回答"反应能否发生"和"反应的限度"的问题；动力学回答"反应有多快"和"反应如何进行"的问题。

一个在热力学上可行的反应（$\Delta G < 0$），在动力学上可能非常缓慢（如金刚石转变为石墨）。

### 6.1.2 反应速率的定义

!!! abstract "定义"
    平均速率：单位时间内反应物或生成物浓度改变量的正值。

对于反应 $a\mathrm{A} + b\mathrm{B} \to c\mathrm{C} + d\mathrm{D}$：

$$\bar{v} = -\frac{1}{a}\frac{\Delta c(\mathrm{A})}{\Delta t} = -\frac{1}{b}\frac{\Delta c(\mathrm{B})}{\Delta t} = \frac{1}{c}\frac{\Delta c(\mathrm{C})}{\Delta t} = \frac{1}{d}\frac{\Delta c(\mathrm{D})}{\Delta t}$$

**瞬时速率**：时间间隔 $\Delta t$ 趋于无限小时的平均速率的极限。

$$v = -\frac{1}{a}\frac{\mathrm{d}c(\mathrm{A})}{\mathrm{d}t}$$

对于定容气相反应，也可用分压变化率定义：$v = -\dfrac{1}{a}\dfrac{\mathrm{d}p(\mathrm{A})}{\mathrm{d}t}$。

### 6.1.3 反应速率的实验测定

- **量气法**：收集气体体积的变化，计算反应速率
- **分光光度法**：利用朗伯-比尔定律 $A = \varepsilon bc$，将吸光度转化为浓度
- **电导率法**：测量溶液电导率的变化（适合离子浓度有变化的反应）

## 6.2 化学反应速率方程

### 6.2.1 速率方程与反应级数

!!! abstract "定义"
    对于反应 $a\mathrm{A} + b\mathrm{B} \to$ 产物，其速率方程的一般形式为：

    $$v = k \cdot c(\mathrm{A})^\alpha \cdot c(\mathrm{B})^\beta$$

    其中：
    - $k$ — 速率常数（rate constant），与温度有关
    - $\alpha$ — 对 A 的反应级数
    - $\beta$ — 对 B 的反应级数
    - $n = \alpha + \beta$ — 反应总级数

注意：$\alpha$、$\beta$ 必须由**实验确定**，不一定等于化学计量系数 $a$、$b$。

### 6.2.2 一级反应

!!! success "重要公式"
    一级反应的速率方程：$v = k \cdot c(\mathrm{A})$

    积分形式：

    $$\ln\frac{c_0}{c} = kt \quad \text{或} \quad \ln c = \ln c_0 - kt$$

    半衰期（与初始浓度无关）：

    $$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$$

一级反应的特征：$\ln c$ 对 $t$ 作图为**直线**，斜率为 $-k$；半衰期与初始浓度无关。

### 6.2.3 零级反应和二级反应

**表8：各反应级数的特征**

| 特征 | 零级反应 | 一级反应 | 二级反应（单一反应物） |
|:-----|:---------|:---------|:---------------------|
| 速率方程 | $v = k$ | $v = kc$ | $v = kc^2$ |
| 积分式 | $c = c_0 - kt$ | $\ln(c_0/c) = kt$ | $1/c - 1/c_0 = kt$ |
| 线性关系 | $c \sim t$ | $\ln c \sim t$ | $1/c \sim t$ |
| $k$ 单位 | $\mathrm{mol \cdot L^{-1} \cdot s^{-1}}$ | $\mathrm{s^{-1}}$ | $\mathrm{L \cdot mol^{-1} \cdot s^{-1}}$ |
| $t_{1/2}$ | $\dfrac{c_0}{2k}$ | $\dfrac{0.693}{k}$ | $\dfrac{1}{kc_0}$ |

## 6.3 影响反应速率的因素

### 6.3.1 Arrhenius 方程

!!! success "重要公式"
    Arrhenius 方程：

    $$k = A \cdot e^{-E_a/RT}$$

    取对数形式：

    $$\ln k = \ln A - \frac{E_a}{RT}$$

    两点式（用于计算活化能或不同温度的速率常数）：

    $$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

    其中 $E_a$ 为**活化能**，$A$ 为**指前因子**（频率因子）。

### 6.3.2 温度的影响

温度升高，反应速率增大。根据 Arrhenius 方程，$\ln k \sim 1/T$ 为直线，斜率为 $-E_a/R$。

### 6.3.3 催化剂的影响

!!! abstract "定义"
    催化剂是能够改变反应速率而本身在反应前后化学组成和数量不发生变化的物质。催化剂通过改变反应途径、降低活化能来提高反应速率。

催化剂的特点：

- 催化剂不改变反应的 $\Delta H$、$\Delta G$ 和平衡常数
- 催化剂同等地降低正逆反应的活化能
- 催化剂具有**选择性**

!!! question "典型例题"
    **例题：** 某反应的活化能为 $E_a = 100\ \mathrm{kJ \cdot mol^{-1}}$，温度从 300 K 升高到 310 K，求反应速率增大的倍数。

    **解析：** 由 Arrhenius 方程：

    $$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = \frac{100 \times 10^3}{8.314} \times \left(\frac{1}{300} - \frac{1}{310}\right) = 1.293$$

    $$\frac{k_2}{k_1} = e^{1.293} \approx 3.64$$

    温度升高 10 K，反应速率增大为原来的约 **3.64 倍**。

## 6.4 反应速率的动力学理论

### 6.4.1 碰撞理论

只有具有足够能量（$E \geq E_a$）且取向适当的分子碰撞（**有效碰撞**）才能发生反应。

### 6.4.2 过渡态理论

反应物先形成高能量的活化络合物（过渡态），然后分解为产物。活化能 $E_a$ 即为过渡态与反应物的能量差。
