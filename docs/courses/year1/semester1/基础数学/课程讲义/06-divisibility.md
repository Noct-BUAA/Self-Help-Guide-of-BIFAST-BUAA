---
title: 第六章 整除关系
comments: true
---

# 第六章 整除关系

!!! info "📄 课件下载"
    点击下方链接下载本课程讲义 PDF 原件：
    
    <a href="https://cdn.jsdelivr.net/gh/Noct-BUAA/Self-Help-Guide-of-BIFAST-BUAA@assets/06-divisibility.pdf">📥 下载讲义 PDF（0.8 MB）</a>

!!! abstract "学习目标"

    - 整除的定义与性质。
    - 带余除法（注意负数的情况）。
    - 素数与唯一分解定理。
    - 辗转相除法在最大公约数以及 Bézout 恒等式的应用。

---

## 1 整除关系

### 1.1 因子与倍数

!!! info "Remark 1.1 — 良序原理"
    任意子集 $S \subseteq \mathbb{N}$ 均含有最小元，即存在 $m \in S$ 使得 $\forall x \in S, m \leq x$.

---

**Definition 1.2 — 整除**

设 $a, b \in \mathbb{Z}$。若存在 $k \in \mathbb{Z}$ 使 $a = kb$，则称 $b$ **整除** $a$，记作 $b \mid a$（否则记作 $b \nmid a$）。此时也称 $b$ 是 $a$ 的**因子**（或因数），$a$ 是 $b$ 的**倍数**。

!!! tip "Remark 1.3"
    - 全体倍数记作 $b\mathbb{Z} = \{bq \mid q \in \mathbb{Z}\}$。
    - $1$ 与 $-1$ 整除所有整数；$0$ 是任何整数的倍数，但只被自身整除。

---

!!! success "Proposition 1.4 — 整除的基本性质"
    设 $a, b, d \in \mathbb{Z}$。

    | # | 性质 |
    |---|------|
    | (i) 自反性 | $a \mid a$ |
    | (ii) 传递性 | 若 $d \mid a$ 且 $a \mid b$，则 $d \mid b$ |
    | (iii) 线性组合 | 若 $d \mid a$ 且 $d \mid b$，则对任意 $u, v \in \mathbb{Z}$ 有 $d \mid (au + bv)$ |
    | (iv) 消去律 | 设 $n \in \mathbb{N}_{\geq 1}$，则 $bn \mid an \iff b \mid a$ |
    | (v) 大小估计 | 若 $a \neq 0$ 且 $b \mid a$，则 $\lvert b\rvert \leq \lvert a\rvert$，故非零整数的因子有限 |
    | (vi) 互为整除 | $a \mid b$ 且 $b \mid a \iff \lvert a\rvert = \lvert b\rvert$ |

??? note "证明"

    **(i)** $a = a \cdot 1$，因此 $a \mid a$。

    **(ii)** 由 $d \mid a$, $a \mid b$，存在 $k, \ell \in \mathbb{Z}$ 使得 $a = dk$, $b = a\ell$。故 $b = d(k\ell)$，因此 $d \mid b$。

    **(iii)** 若 $d \mid a$, $d \mid b$，则存在 $k, \ell \in \mathbb{Z}$ 使得 $a = dk$, $b = d\ell$，于是 $au + bv = d(ku + \ell v)$。因此 $d \mid (au + bv)$。

    **(iv)** 若 $bn \mid an$，则存在 $k \in \mathbb{Z}$ 使得 $an = bn \cdot k$，所以 $a = bk$（因 $n \neq 0$），反之显然。

    **(v)** 若 $a \neq 0$ 且 $b \mid a$，则存在 $k \in \mathbb{Z} \setminus \{0\}$ 使得 $a = bk$。故 $\lvert a\rvert = \lvert b\rvert \cdot \lvert k\rvert \geq \lvert b\rvert$。

    **(vi)** 若 $a \mid b$, $b \mid a$，则存在 $k, \ell \in \mathbb{Z}$ 使得 $b = ak$, $a = b\ell$。于是 $a = a(k\ell)$。若 $a \neq 0$ 则 $k\ell = 1$，因此 $\lvert k\rvert = \lvert \ell\rvert = 1$，由此可知 $\lvert a\rvert = \lvert b\rvert$；若 $a = 0$ 则 $b = 0$，亦满足。反之，若 $\lvert a\rvert = \lvert b\rvert$ 显然互相整除。

!!! warning "Remark 1.5"
    由 (v) 可知，若 $\lvert b\rvert > \lvert a\rvert$，则 $b \nmid a$。

!!! example "Example 1.6 — 平凡与非平凡分解"
    整数 $220$ 可写成

    $$220 = 2 \times 110,\; 220 = (-1) \times (-220),\; 220 = 220 \times 1,\; 220 = 20 \times 11.$$

    其中 $220 = (-1) \times (-220)$ 与 $220 = 220 \times 1$ 称为**平凡分解**，其余为**非平凡分解**。

---

### 1.2 带余除法

!!! success "Theorem 1.7 — 带余除法"
    对任意 $a \in \mathbb{Z}$ 与 $b \in \mathbb{Z}$，存在唯一的 $(q, r) \in \mathbb{Z} \times \mathbb{N}$ 满足

    $$a = bq + r, \quad 0 \leq r < \lvert b\rvert.$$

    $q$ 称为**商**，$r$ 称为**余数**。特别地，$b \mid a \iff$ 余数 $r = 0$。

??? note "证明"

    **存在性：** 令 $q = \left\lfloor \frac{a}{\lvert b\rvert} \right\rfloor \cdot \sgn(b)$, $r = a - bq$. 由向下取整定义有 $0 \leq \frac{a}{\lvert b\rvert} - \left\lfloor \frac{a}{\lvert b\rvert} \right\rfloor < 1$，两边乘以正数 $\lvert b\rvert$ 得 $0 \leq a - \lvert b\rvert\left\lfloor \frac{a}{\lvert b\rvert} \right\rfloor < \lvert b\rvert$. 注意到 $b = \lvert b\rvert \cdot \sgn(b)$，于是 $r = a - bq = a - \lvert b\rvert\left\lfloor \frac{a}{\lvert b\rvert} \right\rfloor$ 满足 $0 \leq r < \lvert b\rvert$。

    **唯一性：** 假设另有 $(q', r')$ 满足 $a = bq' + r'$, $0 \leq r' < \lvert b\rvert$. 两式相减得 $b(q - q') = r' - r$. 于是 $b \mid r' - r$. 但 $\lvert r' - r\rvert < \lvert b\rvert$，由 Remark 1.5，必有 $r' - r = 0$，即 $r' = r$，进而 $q' = q$。

!!! warning "Remark 1.8"
    注意这边我们不要求 $a$、$b$ 为正整数。

!!! example "Example 1.9"
    对 $a = -17$, $b = 5$：$-17 = 5 \cdot (-4) + 3$，$0 \leq 3 < 5$. 故商 $q = -4$，余数 $r = 3$.

!!! example "Example 1.10"
    对 $a = 53$, $b = -7$：$53 = (-7) \cdot (-7) + 4$，$0 \leq 4 < 7$. 故商 $q = -7$，余数 $r = 4$.

---

## 2 素数、最大公约数与最小公倍数

### 2.1 素数

**Definition 2.1 — 素数**

若整数 $p \geq 2$ 的正因子只有 $1$ 与 $p$，则称 $p$ 为**素数**。

---

!!! success "Theorem 2.2 — 欧几里得"

    (i) 任何 $n \geq 2$ 都有素因子。

    (ii) 素数集合无限。

??? note "证明"

    **(i)** 对 $n \geq 2$，设 $P(n): n$ 有素因子。用第二数学归纳法证明。

    - **初始：** $n = 2$ 时，$p = 2$ 本身就是 $n$ 的素因子。
    - **归纳：** 设 $n \geq 2$，并假设所有 $k \in \{2, 3, \ldots, n\}$ 都有素因子。下证 $n+1$ 也满足：
        - 若 $n+1$ 是素数，则 $p = n+1$ 就是素因子。
        - 若 $n+1$ 不是素数，则存在正因子 $d$（$d \neq 1$ 且 $d \neq n+1$）。于是 $d \in \{2, \ldots, n\}$。由归纳假设，可取素数 $p \mid d$。由传递性 $p \mid n+1$。

    综上，$n+1$ 必有素因子。

    **(ii)** 反证法。假设素数只有有限个 $p_1, p_2, \ldots, p_k$。构造 $N = p_1 p_2 \cdots p_k + 1$. 由于 $N \geq 2$，由 (i) 知存在素数 $p \mid N$。按假设 $p$ 必等于某个 $p_i$，于是 $p \mid p_1 p_2 \cdots p_k$。从而 $p \mid (N - p_1 p_2 \cdots p_k) = 1$，矛盾。

!!! example "Example 2.3"
    - $2$ 是唯一的偶素数。
    - $3$ 是最小的奇素数。
    - $4$ 不是素数（有额外正因子 $2$）；$6$ 也不是素数（正因子为 $1, 2, 3, 6$）。

---

### 2.2 最大公约数与最小公倍数

**Definition 2.4 — 最大公约数（法语缩写 PGCD）**

对任意 $a, b \in \mathbb{Z}$，若整数 $d \in \mathbb{N}$ 满足

- $d \mid a$ 且 $d \mid b$（$d$ 是公约数）；
- 对任意整数 $c$，若 $c \mid a$ 且 $c \mid b$，则 $c \mid d$（$d$ 被所有公约数整除），

则称 $d$ 为 $a$ 与 $b$ 的**最大公约数**，记作 $\gcd(a, b)$。若 $\gcd(a, b) = 1$，则称 $a$ 与 $b$ **互素**（或互质）。

---

**Definition 2.5 — 最小公倍数（法语缩写 PPCM）**

对任意整数 $a, b \in \mathbb{Z}$，若整数 $m \in \mathbb{N}$ 满足

- $a \mid m$ 且 $b \mid m$（$m$ 是公倍数）；
- 对任意整数 $k$，若 $a \mid k$ 且 $b \mid k$，则 $m \mid k$（$m$ 整除所有公倍数），

则称 $m$ 为 $a$ 与 $b$ 的**最小公倍数**，记作 $\lcm(a, b)$。

!!! tip "Remark 2.6"
    $a = b = 0 \iff \gcd(a, b) = 0$. 因此，若 $a, b$ 不全为 $0$，则 $\gcd(a, b) \geq 1$.

!!! example "Example 2.7"
    设 $a, b \in \mathbb{Z}$。若 $a \mid b$，则 $\gcd(a, b) = \lvert a\rvert$, $\lcm(a, b) = \lvert b\rvert$. 例如：

    $$\gcd(3, -9) = 3, \;\lcm(3, -9) = 9; \quad \gcd(123, 0) = 123, \;\lcm(123, 0) = 0; \quad \gcd(0, 0) = 0, \;\lcm(0, 0) = 0.$$

!!! tip "Remark 2.8"
    对任意 $a \in \mathbb{Z}$，$\gcd(a, 0) = \lvert a\rvert$, $\lcm(a, 0) = 0$. 因此我们可以考虑两者都不为 $0$ 的情况。

---

!!! success "Theorem 2.9 — 大小刻画"
    对整数 $a, b \in \mathbb{Z} \setminus \{0\}$，

    (i) $\gcd(a, b)$ 是集合 $\{d \in \mathbb{N}_{\geq 1} : d \mid a \text{ 且 } d \mid b\}$ 中的最大元（按通常大小序 $\leq$）。

    (ii) $\lcm(a, b)$ 是集合 $\{m \in \mathbb{N}_{\geq 1} : a \mid m \text{ 且 } b \mid m\}$ 中的最小元（按同样大小序 $\leq$）。

??? note "证明"
    **(i)** 该集合非空（含 $1$）且有上界 $\lvert a\rvert$（因任何公约数不超过 $\lvert a\rvert$），故必存在最大元，记为 $g$。由最大性，任何公约数 $d$ 满足 $d \leq g$，因此 $g$ 满足最大公约数的定义，且最大元唯一。

    **(ii)** 该集合非空（含 $\lvert ab\rvert$）且良序，故存在最小元，记为 $\ell$。由最小性，任何公倍数 $m$ 满足 $\ell \leq m$，因此 $\ell$ 满足最小公倍数的定义，且最小元唯一。

---

### 2.3 辗转相除法与 Bézout 恒等式

!!! success "Lemma 2.10 — 欧几里得引理"
    若 $a = bq + r$（$0 \leq r < \lvert b\rvert$），则 $\gcd(a, b) = \gcd(b, r)$.

??? note "证明"
    令 $d = \gcd(a, b)$, $d' = \gcd(b, r)$.

    1. 因 $d \mid a$ 且 $d \mid b$，由 $r = a - bq$ 得 $d \mid r$，故 $d$ 是 $b, r$ 的公约数。由 Proposition 1.4 (v)，$d \leq d'$.
    2. 反之，$d' \mid b$ 且 $d' \mid r$，故 $d' \mid bq + r = a$，于是 $d'$ 也是 $a, b$ 的公约数，从而 $d' \leq d$.

    综上 $d = d'$.

---

!!! tip "Remark 2.11 — 辗转相除法（欧几里得算法）"

    - **输入：** 整数 $a, b$，不全为零。
    - **输出：** $\gcd(a, b)$。

    步骤：

    (i) 关键思路：反复执行带余除法 $a = bq + r$, $0 \leq r < \lvert b\rvert$，直至余数为零；此时以 $\lvert b\rvert$ 作为当前最大公约数。

    (ii) 更新规则：每次迭代令 $(a, b) \leftarrow (b, r)$.

    (iii) 终止条件：当 $b = 0$ 时停止，输出 $\lvert a\rvert$.

---

!!! question "典型例题 — Example 2.12"
    求 $a = 1071$ 与 $b = 462$ 的最大公约数。

??? note "题目解析"
    由辗转相除法：

    $$\begin{aligned}
    1071 &= 2 \cdot 462 + 147, \\
    462 &= 3 \cdot 147 + 21, \\
    147 &= 7 \cdot 21 + 0.
    \end{aligned}$$

    末次非零余数为 $21$，故 $\gcd(1071, 462) = 21$。由 Proposition 2.23，$\lcm(1071, 462) = \frac{1071 \times 462}{\gcd(1071, 462)} = 23562$.

!!! tip "Remark 2.13"
    也可以写成：$\gcd(1071, 462) = \gcd(1071 - 2 \times 462, 462) = \gcd(147, 462) = \gcd(147, 462 - 3 \times 147) = \gcd(147, 21) = 21$.

---

!!! question "典型例题 — Example 2.14"
    求 $a = 884$ 与 $b = -260$ 的最大公约数。

??? note "题目解析"
    由辗转相除法：

    $$\begin{aligned}
    884 &= (-3) \cdot (-260) + 104, \\
    -260 &= (-3) \cdot 104 + 52, \\
    104 &= 2 \cdot 52 + 0.
    \end{aligned}$$

    末次非零余数为 $52$，故 $\gcd(884, -260) = 52$。$\lcm(884, -260) = \frac{884 \times 260}{52} = 4420$.

!!! tip "Remark 2.15"
    也可以写成：$\gcd(884, -260) = \gcd(884, 260) = \gcd(884 - 3 \times 260, 260) = \gcd(104, 260) = \gcd(104, 260 - 2 \times 104) = \gcd(104, 52) = 52$.

---

!!! success "Theorem 2.16 — Bézout 定理"
    对任意 $a, b \in \mathbb{Z}$，存在 $(u, v) \in \mathbb{Z}^2$ 使得

    $$au + bv = \gcd(a, b).$$

??? note "证明"
    不妨设 $b \neq 0$（否则 $\gcd(a, 0) = \lvert a\rvert$，取 $u = \sgn(a), v = 0$ 即可）。对整数 $b$ 做欧几里得算法：

    $$\begin{aligned}
    a &= bq_0 + r_1, & 0 &< r_1 < \lvert b\rvert, \\
    b &= r_1 q_1 + r_2, & 0 &< r_2 < r_1, \\
    r_1 &= r_2 q_2 + r_3, & 0 &< r_3 < r_2, \\
    &\;\;\vdots \\
    r_{k-2} &= r_{k-1} q_{k-1} + r_k, & 0 &< r_k < r_{k-1}, \\
    r_{k-1} &= r_k q_k + 0.
    \end{aligned}$$

    末次非零余数 $r_k$ 即为 $\gcd(a, b)$。从倒数第二式开始，依次把 $r_k$ 表成前两项的整系数线性组合：$r_k = r_{k-2} - r_{k-1} q_{k-1}$. 再向上回代，每次消去中间余数，最终得到 $r_k = au + bv$, $u, v \in \mathbb{Z}$.

---

!!! success "Corollary 2.17"
    令 $a, b, m \in \mathbb{Z}$。则 $\gcd(a, b) \mid m \iff$ 存在 $(u, v) \in \mathbb{Z}^2$ 使得 $au + bv = m$.

??? note "证明"
    设 $d = \gcd(a, b)$。

    - **$\Longrightarrow$：** 若 $d \mid m$，则存在 $k \in \mathbb{Z}$ 使得 $m = dk$。根据 Bézout 定理，存在 $u_0, v_0 \in \mathbb{Z}$ 使得 $au_0 + bv_0 = d$. 两边乘以 $k$ 得 $a(u_0 k) + b(v_0 k) = m$.
    - **$\Longleftarrow$：** 若存在 $u, v \in \mathbb{Z}$ 使 $au + bv = m$。因为 $d \mid a$ 且 $d \mid b$，所以 $d \mid (au + bv)$，从而 $d \mid m$.

---

!!! success "Corollary 2.18"
    设 $a, b \in \mathbb{Z}$ 不全为 $0$。则 $a, b$ 互素 $\iff$ 存在 $m, n \in \mathbb{Z}$ 使 $am + bn = 1$.

---

!!! info "Remark 2.19 — 扩展欧几里得算法"
    对任意非零 $a, b \in \mathbb{Z}$，按下表迭代可得到 $\gcd(a, b)$ 及 Bézout 系数 $x, y$：

    | $x$ | $y$ | $q$ | $ax+by$ | 辗转相除法 |
    |:---:|:---:|:---:|:-------:|-----------|
    | $1$ | $0$ | $0$ | $a$ | |
    | $0$ | $1$ | $0$ | $b$ | |
    | $1$ | $-q_0$ | $q_0$ | $r_1$ | $a = bq_0 + r_1$ |
    | $\cdots$ | $\cdots$ | $\cdots$ | $\cdots$ | $\cdots$ |
    | $x_{k-1}$ | $y_{k-1}$ | $q_{k-1}$ | $r_k$ | $r_{k-2} = r_{k-1}q_{k-1} + r_k$ |
    | $x_k$ | $y_k$ | $q_k$ | $r_{k+1}$ | $r_{k-1} = r_k q_k + r_{k+1}$ |

    每一步用上一行对当前行做带余除法，直至余数为 $0$。倒数第二行的 $x, y$ 即为所求。

---

!!! question "典型例题 — Example 2.20"
    求 $\gcd(19, 7)$ 及 Bézout 系数。

??? note "题目解析"

    $$\begin{aligned}
    19 &= 2 \cdot 7 + 5, \\
    7 &= 1 \cdot 5 + 2, \\
    5 &= 2 \cdot 2 + 1.
    \end{aligned}$$

    倒代得 $1 = 3 \cdot 19 - 8 \cdot 7$，故 $(u, v) = (3, -8)$ 是一组 Bézout 系数。

---

!!! question "典型例题 — Example 2.21"
    求 $\gcd(437, 667)$ 及 Bézout 系数。

??? note "题目解析"

    迭代过程如下：

    | $x$ | $y$ | $q$ | $ax+by$ | 辗转相除法 |
    |:---:|:---:|:---:|:-------:|-----------|
    | $1$ | $0$ | $0$ | $437$ | |
    | $0$ | $1$ | $0$ | $667$ | |
    | $1$ | $0$ | $0$ | $437$ | $437 = 667 \times 0 + 437$ |
    | $-1$ | $1$ | $1$ | $230$ | $667 = 437 \times 1 + 230$ |
    | $2$ | $-1$ | $1$ | $207$ | $437 = 230 \times 1 + 207$ |
    | $-3$ | $2$ | $1$ | $23$ | $230 = 207 \times 1 + 23$ |
    | | | $9$ | $0$ | $207 = 23 \times 9$ |

    得到 $\gcd(437, 667) = 23$，且 $(-3) \cdot 437 + 2 \cdot 667 = 23$.

---

!!! success "Lemma 2.22 — 高斯引理"
    设 $a, b, d \in \mathbb{Z}$。若 $d \mid ab$ 且 $\gcd(a, d) = 1$，则 $d \mid b$.

??? note "证明"
    由 $\gcd(a, d) = 1$ 知存在整数 $x, y$ 使 $ax + dy = 1$. 两边同乘 $b$ 得 $(ab)x + (bd)y = b$. 因 $d \mid ab$，故 $d$ 整除左侧两项，从而 $d \mid b$.

---

!!! success "Proposition 2.23 — gcd 与 lcm 的数量关系"
    对 $a, b \in \mathbb{Z}$ 有

    $$\gcd(a, b) \cdot \lcm(a, b) = \lvert ab\rvert.$$

??? note "证明"
    令 $d = \gcd(a, b)$。由定义，存在 $x, y \in \mathbb{Z}$ 使得 $a = dx$, $b = dy$, $\gcd(x, y) = 1$.

    下面证明 $\lcm(a, b) = \lvert dxy\rvert$。首先 $a \mid \lvert dxy\rvert = \lvert ay\rvert$, $b \mid \lvert dxy\rvert$，则 $\lvert dxy\rvert$ 是 $a, b$ 的公倍数。令 $m$ 是 $a$ 与 $b$ 的任一公倍数，设 $m = aa_1 = bb_1$，其中 $a_1, b_1 \in \mathbb{Z}$。则 $m = dxa_1 = dyb_1$，$xa_1 = yb_1$. 由 $\gcd(x, y) = 1$ 且 $x \mid yb_1$，得 $x \mid b_1$（高斯引理）。设 $b_1 = xt$，则 $m = bb_1 = (dy)(xt) = dxyt$. 所以 $\lvert dxy\rvert \mid m$. 上述过程对任意公倍数 $m$ 成立，所以 $\lcm(a, b) = \lvert dxy\rvert$，从而 $\gcd(a, b) \cdot \lcm(a, b) = d \cdot \lvert dxy\rvert = \lvert d^2 xy\rvert = \lvert ab\rvert$.

---

### 2.4 唯一素因子分解

!!! success "Proposition 2.24 — 素数整除乘积"
    设 $p$ 为素数，$k \geq 1$，$n_1, \ldots, n_k \in \mathbb{Z}$。若 $p \mid n_1 \cdots n_k$，则 $\exists i, p \mid n_i$.

??? note "证明"
    对 $k \in \mathbb{N}_{\geq 1}$，设 $P(k)$: 对任意 $n_1, \ldots, n_k \in \mathbb{Z}$，若 $p \mid n_1 \cdots n_k$，则存在 $i$ 使得 $p \mid n_i$.

    - **初始：** $k = 1$ 时显然成立。
    - **归纳：** 设结论对 $k$ 成立，考虑 $N = n_1 \cdots n_k \cdot n_{k+1}$. 记 $A = n_1 \cdots n_k$，则 $N = A \cdot n_{k+1}$.

    若 $p \mid n_{k+1}$，则已得证；否则 $p \nmid n_{k+1}$，因 $p$ 为素数，故 $\gcd(p, n_{k+1}) = 1$. 由高斯引理得 $p \mid A$. 由归纳假设，存在 $i \in \{1, \ldots, k\}$ 使 $p \mid n_i$. 综上所述，$P(k+1)$ 成立。

---

!!! success "Theorem 2.25 — 唯一素因子分解（算术基本定理）"
    任何整数 $n \in \mathbb{Z} \setminus \{0, -1, 1\}$ 可唯一地写成

    $$n = \varepsilon p_1 p_2 \cdots p_m,$$

    其中 $\varepsilon \in \{-1, 1\}$，$m \geq 1$，$p_i$ 为素数（不计顺序唯一）。

??? note "证明"
    只需证明 $n \in \mathbb{N}_{\geq 2}$ 的情况（负数情况由 $-n$ 可得）。

    **存在性：** 对 $n \geq 2$ 做第二数学归纳法。

    - **初始：** $n = 2$ 已是素数，成立。
    - **归纳：** 设所有 $2 \leq k < n$ 皆可表为素数乘积。若 $n$ 为素数，则自身即为一项；若 $n$ 为合数，则 $n = ab$（$1 < a, b < n$）。由归纳假设，$a, b$ 皆可表为素数乘积，合并即得 $n$ 的分解。

    **唯一性：** 假设存在反例，取最小反例 $n \geq 2$：$n = p_1 \cdots p_r = q_1 \cdots q_s$（两组素因子不完全相同）。因 $p_1 \mid n$，故 $p_1 \mid q_1 \cdots q_s$。由 Proposition 2.24，存在 $q_j$ 使 $p_1 \mid q_j$，于是 $p_1 = q_j$. 两边约去 $p_1$ 后得到比 $n$ 小且仍有两组不同素因子的整数，与"最小反例"假设矛盾。

!!! example "Example 2.26"
    - $360 = 2^3 \times 3^2 \times 5$
    - $60 = 2 \times 2 \times 3 \times 5 = 2^2 \times 3 \times 5$
    - $1001 = 7 \times 11 \times 13$
    - $-84 = -1 \times 2^2 \times 3 \times 7$

---

## 核心公式速查表

| 概念 | 公式/定义 |
|------|----------|
| 整除定义 | $b \mid a \iff \exists k \in \mathbb{Z}, a = kb$ |
| 带余除法 | $a = bq + r$, $0 \leq r < \lvert b\rvert$ |
| 欧几里得引理 | $\gcd(a, b) = \gcd(b, r)$ 其中 $a = bq + r$ |
| Bézout 定理 | $\exists u, v \in \mathbb{Z}, au + bv = \gcd(a, b)$ |
| 互素刻画 | $\gcd(a, b) = 1 \iff \exists m, n, am + bn = 1$ |
| 高斯引理 | $\gcd(a, d) = 1$ 且 $d \mid ab \Rightarrow d \mid b$ |
| gcd·lcm 关系 | $\gcd(a, b) \cdot \lcm(a, b) = \lvert ab\rvert$ |
| 唯一素因子分解 | $n = \varepsilon p_1 \cdots p_m$（不计顺序唯一） |
| 素数无限 | 欧几里得反证法：$p_1 \cdots p_k + 1$ |
