---
title: 第五章 求和求积与计数原理
comments: true
---

# 第五章 求和求积与计数原理

!!! abstract "学习目标"

    **求和、求积部分：**

    - 求和 $\sum$、求积 $\prod$ 的基本性质。
    - 多重求和、三角求和的计算方法。

    **计数原理部分：**

    - 组合数的基本性质
    - 利用二项式定理（+复数）求和。

---

## 1 求和、求积

### 1.1 基本定义

**Definition 1.1 — 指标集**

设 $\mathcal{F} = (a_i)_{i \in I}$ 是一族数学对象（数、向量、集合等）。则称集合 $I$ 为这族对象的**指标集**，它的每个元素 $i \in I$ 称为一个**指标**。

!!! tip "Remark 1.2"
    - 指标集 $I$ 可以是有限或无限、可数或不可数。
    - 指标本身仅起"下标"作用，不携带运算结构。
    - 同一对象可被多个指标重复指向（允许重名）。

!!! example "Example 1.3"
    - **有限和：** $I = \{1, 2, \ldots, n\}$, $(a_k)_{k=1}^n$.
    - **无限序列：** $I = \mathbb{N}$, $(x_n)_{n \in \mathbb{N}}$.
    - **连续族：** $I = \mathbb{R}$, $(f_t)_{t \in \mathbb{R}}$.

---

**Definition 1.4 — 和与积**

设 $(a_i)_{i \in I}$ 为一族有限的实数且 $I \neq \varnothing$，定义

- $\sum_{k \in I} a_k$ 为族 $(a_k)_{k \in I}$ 的**和**；
- $\prod_{k \in I} a_k$ 为族 $(a_k)_{k \in I}$ 的**积**。

若 $I = \llbracket m, n \rrbracket \subset \mathbb{Z}$，和与积可分别记为

$$\sum_{k=m}^{n} a_k = \sum_{m \leq k \leq n} a_k = \sum_{k \in \llbracket m,n \rrbracket} a_k = a_m + a_{m+1} + \cdots + a_n,$$

与

$$\prod_{k=m}^{n} a_k = \prod_{m \leq k \leq n} a_k = \prod_{k \in \llbracket m,n \rrbracket} a_k = a_m \times a_{m+1} \times \cdots \times a_n.$$

!!! tip "Remark 1.5 — 哑变量"
    指标变量可任意改名：$\sum_{k \in I} a_k = \sum_{\ell \in I} a_\ell$.

!!! tip "Remark 1.6 — 空和与空积"
    - 空和定义为 $0$，空积定义为 $1$：$\sum_{k \in \varnothing} a_k = 0$, $\prod_{k \in \varnothing} a_k = 1$.
    - 若 $p = q + 1$（即上界小于下界），则约定 $\sum_{k=p}^{q} a_k = 0$, $\prod_{k=p}^{q} a_k = 1$.

!!! tip "Remark 1.7 — 基本运算性质"

    - $\sum_{i=m}^{n} (a_i + b_i) = \sum_{i=m}^{n} a_i + \sum_{i=m}^{n} b_i$，$\prod_{i=m}^{n} a_i b_i = \left(\prod_{i=m}^{n} a_i\right)\left(\prod_{i=m}^{n} b_i\right)$
    - $\sum_{i=m}^{n} c a_i = c\sum_{i=m}^{n} a_i$，$\prod_{i=m}^{n} a_i^p = \left(\prod_{i=m}^{n} a_i\right)^p$
    - $\sum_{i=m}^{n} a_i = \sum_{i=m}^{k} a_i + \sum_{i=k+1}^{n} a_i$，$\prod_{i=m}^{n} a_i = \left(\prod_{i=m}^{k} a_i\right)\left(\prod_{i=k}^{n} a_i\right)$

    上述结论对任意指标集 $I$ 都成立。例如，若 $I_1 \cap I_2 = \varnothing$，则 $\sum_{i \in I_1 \cup I_2} a_i = \sum_{i \in I_1} a_i + \sum_{i \in I_2} a_i$.

---

!!! example "Example 1.8 — 平方和公式"
    对任意正整数 $n$，有

    $$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}.$$

??? note "证明"
    利用恒等式 $(i+1)^3 - i^3 = 3i^2 + 3i + 1$。对 $i = 1$ 到 $n$ 求和：

    $$\sum_{i=1}^{n} \left((i+1)^3 - i^3\right) = 3\sum_{i=1}^{n} i^2 + 3\sum_{i=1}^{n} i + \sum_{i=1}^{n} 1.$$

    左边只剩首末两项：$(n+1)^3 - 1 = 3S_n + 3\frac{n(n+1)}{2} + n$，其中 $S_n = \sum_{i=1}^{n} i^2$。解方程得 $S_n = \frac{n(n+1)(2n+1)}{6}$。

---

!!! question "Exercise 1.9"
    证明：对任意正整数 $n$，有

    $$\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2.$$

---

### 1.2 双重求和

!!! tip "Remark 1.10 — 双重求和的可交换性"
    对任意族 $(a_{i,j})_{(i,j) \in I \times J}$ 有

    $$\sum_{(i,j) \in I \times J} a_{i,j} = \sum_{i \in I} \sum_{j \in J} a_{i,j} = \sum_{j \in J} \sum_{i \in I} a_{i,j}.$$

    特别，若对任意 $i, j \in I \times J$, $a_{i,j} = b_i c_j$，则

    $$\sum_{(i,j) \in I \times J} b_i c_j = \left(\sum_{i \in I} b_i\right)\!\left(\sum_{j \in J} c_j\right).$$

---

!!! example "Example 1.11 — 逐行/逐列求和"
    考虑族 $(a_{i,j})_{(i,j) \in \llbracket 1,3 \rrbracket \times \llbracket 1,4 \rrbracket}$，其数值见下表，计算 $S = \sum_{(i,j) \in \llbracket 1,3 \rrbracket \times \llbracket 1,4 \rrbracket} a_{i,j}$.

    | $i$ \ $j$ | 1 | 2 | 3 | 4 |
    |:---------:|:-:|:-:|:-:|:-:|
    | **1** | $-1$ | $-2$ | $1$ | $4$ |
    | **2** | $0$ | $0$ | $2$ | $1$ |
    | **3** | $-9$ | $6$ | $2$ | $2$ |

    由于实数加法可交换，求和顺序任意：

    - **先按行求和，再把三行结果相加：** $S = \sum_{i=1}^{3} \left(\sum_{j=1}^{4} a_{i,j}\right) = 2 + 3 + 1 = 6$.
    - **先按列求和，再把四列结果相加：** $S = \sum_{j=1}^{4} \left(\sum_{i=1}^{3} a_{i,j}\right) = -10 + 4 + 5 + 7 = 6$.

---

!!! example "Example 1.12 — 可分离的双重和"
    对 $n \in \mathbb{N}^*$ 计算

    $$S = \sum_{(i,j) \in \llbracket 1,n \rrbracket^2} i \cdot 2^j.$$

    我们有

    $$S = \left(\sum_{i=1}^{n} i\right)\!\left(\sum_{j=1}^{n} 2^j\right) = \frac{n(n+1)}{2}(2^{n+1} - 2) = n(n+1)(2^n - 1).$$

---

!!! example "Example 1.13 — 平方和公式的推广"

    对任意 $n \in \mathbb{N}$，有

    $$\llbracket 1, n \rrbracket^2 = \{(k,k) \mid k \in \llbracket 1,n \rrbracket\} \cup \{(i,j) \in \llbracket 1,n \rrbracket^2 \mid i < j\} \cup \{(i,j) \in \llbracket 1,n \rrbracket^2 \mid i > j\}.$$

    对任意实数族 $(a_k)_{k \in \llbracket 1,n \rrbracket}$ 有

    $$\left(\sum_{k=1}^{n} a_k\right)^2 = \sum_{(i,j) \in \llbracket 1,n \rrbracket^2} a_i a_j = \sum_{k=1}^{n} a_k^2 + \sum_{1 \leq i < j \leq n} a_i a_j + \sum_{1 \leq j < i \leq n} a_i a_j = \sum_{k=1}^{n} a_k^2 + 2\sum_{1 \leq i < j \leq n} a_i a_j.$$

---

!!! question "Exercise 1.14"
    计算：$\sum_{(i,j) \in \llbracket 1,n \rrbracket^2} ij$.

---

### 1.3 三角求和

上面我们主要讨论了指标集为 $I = \llbracket 1, n \rrbracket$ 以及 $I = \llbracket 1, n \rrbracket \times \llbracket 1, m \rrbracket$ 的情况，下面我们考虑 $I = \{(i,j) \in \llbracket 1,n \rrbracket^2 \mid i < j\}$ 或 $I = \{(i,j) \in \llbracket 1,n \rrbracket^2 \mid i \leq j\}$。

!!! tip "Remark 1.15 — 三角求和"
    对任意族 $(a_{i,j})_{1 \leq i \leq j \leq n}$ 有

    $$\sum_{1 \leq i \leq j \leq n} a_{i,j} = \sum_{j=1}^{n} \sum_{i=1}^{j} a_{i,j} = \sum_{i=1}^{n} \sum_{j=i}^{n} a_{i,j}.$$

---

!!! example "Example 1.16 — 三角求和实例"
    考虑族 $(a_{i,j})_{1 \leq i \leq j \leq 4}$，其值由下表给出，计算 $S = \sum_{1 \leq i \leq j \leq 4} a_{i,j}$.

    | $i$ \ $j$ | 1 | 2 | 3 | 4 |
    |:---------:|:-:|:-:|:-:|:-:|
    | **1** | $2$ | $2$ | $1$ | $-1$ |
    | **2** | — | $-2$ | $6$ | $-6$ |
    | **3** | — | — | $2$ | $1$ |
    | **4** | — | — | — | $5$ |

    两种自然顺序：

    - **先逐行求和，再相加：** $S = \sum_{j=1}^{4} \left(\sum_{i=1}^{j} a_{i,j}\right) = 2 + 0 + (-2) + 6 = 6$.
    - **先逐列求和，再相加：** $S = \sum_{i=1}^{4} \left(\sum_{j=i}^{4} a_{i,j}\right) = 3 + 6 + (-8) + 5 = 6$.

---

!!! question "Exercise 1.17"
    计算：

    - $\sum_{1 \leq i \leq j \leq n} \min\{i, j\}$
    - $\sum_{1 \leq i \leq j \leq n} \frac{i}{j}$

---

## 2 计数原理

!!! tip "Remark 2.1 — 回忆"

    - $0! = 1$
    - 从 $n$ 个不同元素中取出 $m$ 个元素的**排列数**：$A_n^m := \frac{n!}{(n-m)!} = n(n-1)(n-2)\cdots(n-m+1)$
    - 从 $n$ 个不同元素中取出 $m$ 个元素的**组合数**：$C_n^m = \binom{n}{m} := \frac{n!}{m!(n-m)!}$
    - **二项式定理**：$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$

---

!!! success "Proposition 2.2 — 组合数的基本性质"

    - 对任意 $k \in \llbracket 1, n \rrbracket$，$\binom{n}{k} = \binom{n}{n-k}$.
    - 对任意 $k \in \llbracket 1, n \rrbracket$，$k\binom{n}{k} = n\binom{n-1}{k-1}$.
    - 对任意 $k \in \llbracket 1, n \rrbracket$，$\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$（Pascal 恒等式）.

---

!!! question "典型例题 — Example 2.3（二项式定理的归纳证明）"
    证明二项式定理：令 $x, y \in \mathbb{R}$（或 $\mathbb{C}$）。对任意 $n \in \mathbb{N}$

    $$(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}.$$

??? note "题目解析"
    对任意 $n \in \mathbb{N}$，令 $P(n): (x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$，用数学归纳法证明。

    - **初始：** $n = 0$ 时，等式显然成立。
    - **归纳：** 设 $n = m \geq 0$ 时 $P(m)$ 成立。则

    $$\begin{aligned}
    (x+y)^{m+1} &= (x+y)\sum_{k=0}^{m} \binom{m}{k} x^k y^{m-k} \\
    &= \sum_{k=0}^{m} \binom{m}{k} x^{k+1} y^{m-k} + \sum_{k=0}^{m} \binom{m}{k} x^k y^{m+1-k} \\
    &= \sum_{k=1}^{m+1} \binom{m}{k-1} x^k y^{m+1-k} + \sum_{k=0}^{m} \binom{m}{k} x^k y^{m+1-k} \\
    &= \sum_{k=0}^{m+1} \binom{m+1}{k} x^k y^{m+1-k},
    \end{aligned}$$

    最后一个等式用到 $\binom{m}{k-1} + \binom{m}{k} = \binom{m+1}{k}$（$1 \leq k \leq m$）。则 $P(m+1)$ 成立。

    由数学归纳法原理，对任意 $n \in \mathbb{N}$，$P(n)$ 都成立。

---

!!! question "典型例题 — Example 2.4（组合恒等式求和）"
    计算：

    (i) $\sum_{k=0}^{n} \binom{n}{k}$

    (ii) $\sum_{k=0}^{n} k\binom{n}{k}$

    (iii) $\sum_{k=0}^{n} \frac{1}{k+1}\binom{n}{k}$

    (iv) $\sum_{k=0}^{n} (-1)^k \binom{n}{k}$

    (v) $\sum_{k=0}^{\lfloor n/2 \rfloor} \binom{n}{2k}$

    (vi) $\sum_{k=0}^{\lfloor n/2 \rfloor} (-1)^k \binom{n}{2k}$

    (vii) $S_0 = \sum_{k=0}^{\lfloor n/3 \rfloor} \binom{n}{3k}$, $S_1 = \sum_{k=0}^{\lfloor (n-1)/3 \rfloor} \binom{n}{3k+1}$, $S_2 = \sum_{k=0}^{\lfloor (n-2)/3 \rfloor} \binom{n}{3k+2}$

??? note "题目解析"

    **(i)** 由二项式定理：$(1+1)^n = \sum_{k=0}^{n} \binom{n}{k} 1^k 1^{n-k} = \sum_{k=0}^{n} \binom{n}{k} = 2^n$.

    **(ii)** 对任意 $k \in \llbracket 1, n \rrbracket$，$k\binom{n}{k} = k \cdot \frac{n!}{k!(n-k)!} = n \cdot \frac{(n-1)!}{(k-1)!(n-k)!} = n\binom{n-1}{k-1}$. 则

    $$\sum_{k=0}^{n} k\binom{n}{k} = \sum_{k=1}^{n} k\binom{n}{k} = \sum_{k=1}^{n} n\binom{n-1}{k-1} = n\sum_{k=0}^{n-1} \binom{n-1}{k} = n 2^{n-1}.$$

    **(iii)** 对任意 $k \in \llbracket 0, n \rrbracket$，$\frac{1}{k+1}\binom{n}{k} = \frac{1}{k+1} \cdot \frac{n!}{k!(n-k)!} = \frac{1}{n+1} \cdot \frac{(n+1)!}{(k+1)!(n-k)!} = \frac{1}{n+1}\binom{n+1}{k+1}$. 则

    $$\sum_{k=0}^{n} \frac{1}{k+1}\binom{n}{k} = \sum_{k=0}^{n} \frac{1}{n+1}\binom{n+1}{k+1} = \frac{1}{n+1}\left(\sum_{k=0}^{n+1} \binom{n+1}{k} - 1\right) = \frac{1}{n+1}(2^{n+1} - 1).$$

    **(iv)** 由二项式定理：$(1-1)^n = \sum_{k=0}^{n} \binom{n}{k} (-1)^k = 0$.

    **(v)** 令 $S_1 = \sum_{k=0}^{\lfloor n/2 \rfloor} \binom{n}{2k}$, $S_2 = \sum_{k=0}^{\lfloor (n-1)/2 \rfloor} \binom{n}{2k+1}$. 由二项式定理：

    $$(1+1)^n = S_1 + S_2 = 2^n, \quad (1-1)^n = S_1 - S_2 = 0,$$

    解得 $S_1 = S_2 = 2^{n-1}$.

    **(vi)** 设 $\omega = e^{2\pi i/4} = i$，则 $(1+i)^n = \sum_{k=0}^{n} \binom{n}{k} i^k$. 取实部：

    $$\RE(1+i)^n = \sum_{\substack{k=0 \\ k \text{ even}}}^{n} \binom{n}{k} (-1)^{k/2} = \sum_{k=0}^{\lfloor n/2 \rfloor} (-1)^k \binom{n}{2k}.$$

    另一方面，$1+i = \sqrt{2} e^{\pi i/4}$，故 $\RE(1+i)^n = \RE\left((\sqrt{2} e^{\pi i/4})^n\right) = 2^{n/2} \cos\frac{n\pi}{4}$. 从而

    $$\sum_{k=0}^{\lfloor n/2 \rfloor} (-1)^k \binom{n}{2k} = 2^{n/2} \cos\frac{n\pi}{4}.$$

    **(vii)** 对 $m = 0, 1, 2$ 记 $S_m = \sum_{k=0}^{\lfloor (n-m)/3 \rfloor} \binom{n}{3k+m}$. 令 $\omega = e^{2\pi i/3}$ 为三次单位根，满足 $1 + \omega + \omega^2 = 0$。二项式定理给出：

    $$\begin{cases}
    (1+1)^n = S_0 + S_1 + S_2 = 2^n, \\
    (1+\omega)^n = S_0 + \omega S_1 + \omega^2 S_2 = e^{n\pi i/3}, \\
    (1+\omega^2)^n = S_0 + \omega^2 S_1 + \omega S_2 = e^{-n\pi i/3}.
    \end{cases}$$

    三式相加，利用 $1 + \omega + \omega^2 = 0$ 得 $3S_0 = 2^n + e^{n\pi i/3} + e^{-n\pi i/3}$. 同理

    $$3S_1 = 2^n + \omega^2 e^{n\pi i/3} + \omega e^{-n\pi i/3}, \quad 3S_2 = 2^n + \omega e^{n\pi i/3} + \omega^2 e^{-n\pi i/3}.$$

    即得

    $$S_0 = \frac{1}{3}\left(2^n + 2\cos\frac{n\pi}{3}\right),\; S_1 = \frac{1}{3}\left(2^n + 2\cos\frac{(n+4)\pi}{3}\right),\; S_2 = \frac{1}{3}\left(2^n + 2\cos\frac{(n+2)\pi}{3}\right).$$

---

!!! tip "Remark 2.5 — 推广到一般 $m$ 取模求和"

    令 $\omega = e^{2\pi i/m}$，对任意 $0 \leq p \leq m-1$，令 $S_p := \sum_{k=0}^{\lfloor (n-p)/m \rfloor} \binom{n}{mk+p}$. 对任意 $0 \leq j \leq m-1$，有

    $$(1+\omega^j)^n = \sum_{p=0}^{m-1} \sum_{k=0}^{\lfloor (n-p)/m \rfloor} \binom{n}{mk+p} \omega^{j(mk+p)} = \sum_{p=0}^{m-1} S_p \cdot \omega^{jp}.$$

    （这里用到 $\omega^{mk+p} = \omega^p$）我们有 $m$ 个方程，$m$ 个未知数，从而可以求得 $S_0, \cdots, S_{m-1}$。

---

!!! question "Exercise 2.6"

    计算：

    - $\sum_{k=0}^{\lfloor n/4 \rfloor} \binom{n}{4k}$, $\sum_{k=0}^{\lfloor (n-1)/4 \rfloor} \binom{n}{4k+1}$, $\sum_{k=0}^{\lfloor (n-2)/4 \rfloor} \binom{n}{4k+2}$, $\sum_{k=0}^{\lfloor (n-3)/4 \rfloor} \binom{n}{4k+3}$.
    - $\sum_{k=0}^{\lfloor n/2 \rfloor} \binom{n}{2k+1} (-1)^k$. （注意这边有 $(-1)^k$，所以不能直接用上述注记）

---

## 核心公式速查表

| 类别 | 公式 |
|------|------|
| 空和/空积 | $\sum_{k \in \varnothing} a_k = 0$, $\prod_{k \in \varnothing} a_k = 1$ |
| 双重和可分离 | $\sum_{(i,j)} b_i c_j = (\sum_i b_i)(\sum_j c_j)$ |
| 三角求和 | $\sum_{1 \leq i \leq j \leq n} a_{i,j} = \sum_{j=1}^{n} \sum_{i=1}^{j} a_{i,j}$ |
| 平方和 | $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$ |
| 立方和 | $\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2$ |
| 二项式定理 | $(x+y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k}$ |
| 组合对称性 | $\binom{n}{k} = \binom{n}{n-k}$ |
| Pascal 恒等式 | $\binom{n}{k} = \binom{n-1}{k} + \binom{n-1}{k-1}$ |
| 组合递推 | $k\binom{n}{k} = n\binom{n-1}{k-1}$ |
| 二项式系数和 | $\sum_{k=0}^{n} \binom{n}{k} = 2^n$ |
| 交错和 | $\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ |
