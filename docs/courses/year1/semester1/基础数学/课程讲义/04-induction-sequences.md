---
title: 第四章 数学归纳法与数列
comments: true
---

# 第四章 数学归纳法与数列

!!! info "📄 课件下载"
    点击下方链接下载本课程讲义 PDF 原件：
    
    <a href="../../../../../assets/pdfs/04-induction-sequences.pdf">📥 下载讲义 PDF（1.1 MB）</a>

!!! abstract "学习目标"

    **数学归纳法部分：**

    - 数学归纳法在证明中的应用。
    - 数学归纳法在构造问题中的应用。

    **数列部分：**

    - 数列的定义以及性质（有界性、单调性）的证明。
    - 常见（等差、等比、等差-等比、二阶线性递推）数列的通项公式和求和公式。
    - 将数学归纳法应用在数列的相关证明上。

---

## 1 数学归纳法

### 1.1 第一数学归纳法（最常用）

数学归纳法（Principe de récurrence）是证明与整数 $n$ 有关命题 $P(n)$ 的常用方法，其本质为"递推"：初始 $\to$ 归纳 $\to$ 全体成立。

!!! success "Theorem 1.1 — 第一数学归纳法"
    设命题 $P(n)$ 对每个整数 $n \in \mathbb{N}_{\geq n_0}$ 都有定义。若

    (1) **初始：** 当 $n = n_0$ 时，$P(n_0)$ 成立；

    (2) **归纳：** 假设 $P(k)$ 成立（归纳假设），可推出 $P(k+1)$ 成立，

    则 $P(n)$ 对所有 $n \in \mathbb{N}_{\geq n_0}$ 成立。

??? note "证明"
    反证法。若存在 $n \geq n_0$ 使得 $P(n)$ 不成立，则取最小反例 $m$。由 (2) 知 $m > n_0$，故 $m-1 \geq n_0$ 且 $P(m-1)$ 成立。由 (2) 得 $P(m)$ 成立，矛盾。

---

!!! question "典型例题 — Example 1.2"
    证明：对任意正整数 $n$，有

    $$1 + 2 + \cdots + n = \frac{n(n+1)}{2}.$$

??? note "题目解析"
    对任意 $n \in \mathbb{N}_{\geq 1}$，记命题

    $$P(n): 1 + 2 + \cdots + n = \frac{n(n+1)}{2}.$$

    - **初始：** $n = 1$ 时，左边 $= 1$，右边 $= \frac{1 \cdot 2}{2} = 1$，成立。
    - **归纳：** 假设当 $n = k \in \mathbb{N}_{\geq 1}$ 时，$P(k)$ 成立，即 $1 + \cdots + k = \frac{k(k+1)}{2}$。我们有

    $$1 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2},$$

    即 $P(k+1)$ 成立。

    由（第一）数学归纳法，$P(n)$ 对所有 $n \geq 1$ 成立。

---

### 1.2 第二数学归纳法（强归纳）

!!! success "Theorem 1.3 — 第二数学归纳法"
    设命题 $P(n)$ 对每个整数 $n \geq n_0$ 都有定义。若

    (1) **初始：** 当 $n = n_0$ 时，$P(n_0)$ 成立；

    (2) **归纳：** 假设对所有 $n_0 \leq j \leq k$ 已有 $P(j)$ 成立，可推出 $P(k+1)$ 成立，

    则 $P(n)$ 对所有 $n \geq n_0$ 成立。

回忆：一个大于 $1$ 的正整数 $n \in \mathbb{N}_{\geq 2}$ 被称为**素数**当且仅当它仅能被 $1$ 和自身整除。否则称 $n$ 为**合数**。

---

!!! question "典型例题 — Example 1.4（算术基本定理）"
    每个大于 $1$ 的整数 $n$ 都可表示为若干个素数的乘积。

??? note "题目解析"
    对任意 $n \in \mathbb{N}$，设

    $$P(n): \text{整数 } n \text{ 可写成素数乘积}.$$

    对 $n \geq 2$ 作第二数学归纳法证明 $P(n)$。

    - **初始：** $n = 2$ 时，$2$ 本身是素数，乘积仅含一项，$P(2)$ 成立。
    - **归纳：** 假设对 $n = k \geq 2$，所有 $2 \leq m \leq k$ 的 $m$ 都已满足 $P(m)$。考察 $n = k+1$：
        - 若 $k+1$ 为素数，则它自身即为所求。
        - 若 $k+1$ 为合数，则存在分解 $k+1 = ab$，其中 $2 \leq a, b \leq k$。由归纳假设，$a, b$ 分别可写成素数乘积：$a = p_1 \cdots p_r$, $b = q_1 \cdots q_s$，于是 $k+1 = p_1 \cdots p_r q_1 \cdots q_s$，也是素数乘积。
    - 无论哪种情况，$P(k+1)$ 都成立。

    根据（第二）数学归纳法，任意大于 $1$ 的整数均可分解为素数乘积。

---

!!! tip "Remark 1.5 — 使用数学归纳法的步骤"
    - **明确命题：** 写出 $P(n)$ 并指出起始值 $n_0$。
    - **初始：** 验证 $n = n_0$ 时，$P(n_0)$ 成立（必要时多验几项）。
    - **归纳：** 设 $P(k)$ 成立（强归纳则设 $P(j)$ 对 $j \leq k$ 成立）。由假设推出 $P(k+1)$。
    - **结论：** 据数学归纳法，$P(n)$ 对所有 $n \geq n_0$ 成立。

---

### 1.3 数学归纳法在构造性问题中的应用

数学归纳法不仅是证明工具，更是强大的构造性方法。

!!! tip "Remark 1.6 — 归纳构造法"
    设要构造的对象序列为 $A_1, A_2, \ldots, A_n$，满足性质 $\mathcal{P}$。

    (i) **初始:** 显式构造 $A_1$，验证 $\mathcal{P}(A_1)$ 成立；

    (ii) **归纳:** 假设已构造 $A_k$ 满足 $\mathcal{P}(A_k)$，给出算法构造 $A_{k+1}$ 并证明 $\mathcal{P}(A_{k+1})$ 成立。

---

!!! question "典型例题 — Example 1.7"
    构造一个无穷正整数数列 $x_0, x_1, x_2, \ldots$，使得：

    (i) 数列严格递增，即对任意 $n \in \mathbb{N}$, $x_n < x_{n+1}$；

    (ii) 对于任意不同的 $i, j$，$x_j \neq 2x_i$；

    (iii) 对于任意不同的 $i, j$，$x_i + x_j$ 不在数列中。

??? note "题目解析"
    对 $n$ 进行数学归纳法构造 $x_n$：

    - **初始:** $n = 0$ 时，令 $x_0 = 3$。
    - **归纳:** 假设当 $n = k \geq 0$ 时，已构造 $x_0, \ldots, x_k$ 满足条件 (i), (ii), (iii)，下面构造 $x_{k+1}$。

    按自然数顺序依次检查每个候选数 $t$（从 $x_k + 1$ 开始），看 $t$ 是否可以加入数列：

    (i) 若存在 $x_i, i \in \llbracket 0, k \rrbracket$ 使得 $t = 2x_i$ 或 $t = x_a + x_b$（其中 $0 \leq a < b \leq k$），则跳过 $t$，考虑下一个自然数 $t+1$，仍设为 $t$，重新检查。

    (ii) 否则，将 $t$ 加入数列，即令 $x_{k+1} = t$。

    由于禁止集是有限的，而大于 $x_k$ 的正整数有无穷多，因此总存在满足所有条件的 $t$。则数列 $x_0, \ldots, x_{k+1}$ 满足条件 (i), (ii), (iii)。

    由数学归纳法，我们构造出了满足条件的数列 $x_0, x_1, \ldots, x_n, \ldots$。

!!! tip "Remark 1.8 — 前几项的构造过程"

    - $x_0 = 3$
    - $x_1$: $t = 4$，不是 $2 \times 3$，加入 $x_1 = 4$
    - $x_2$: $t = 5$：不是 $2 \times 3$, $2 \times 4$，不是 $3 + 4$，加入 $x_2 = 5$
    - $x_3$: $t = 6$（$6 = 2 \times 3$ 跳过）；$t = 7$（$7 = 3 + 4$ 跳过）；$t = 8$（$8 = 2 \times 4$ 跳过）；$t = 9$（$9 = 4 + 5$ 跳过）；$t = 10$（$10 = 2 \times 5$ 跳过）；$t = 11$（检查通过），加入 $x_3 = 11$
    - $\ldots$

    得到数列的前几项为：$3, 4, 5, 11, \ldots$

---

!!! question "典型例题 — Example 1.9"
    构造 $\{1, 2, \ldots, 3^n\}$ 的子集，大小为 $2^n$ 且任意三项组成的数列都不是等差数列。

??? note "题目解析"
    对 $n$ 进行数学归纳法构造集合 $S_n \subset \{1, 2, \ldots, 3^n\}$ 满足上述条件。

    - **初始:** $n = 1$，取 $S_1 = \{1, 2\} \subset \{1, 2, 3\}$。
    - **归纳:** 假设 $n = k$ 时，已经有 $S_k \subset \{1, \ldots, 3^k\}$ 满足条件。设

    $$A = S_k, \quad B = \{2 \cdot 3^k + x \mid x \in S_k\}.$$

    令 $S_{k+1} = A \cup B \subset \{1, \ldots, 3^{k+1}\}$。

    注意：$A \subset [1, 3^k]$，$B \subset [2 \cdot 3^k + 1, 2 \cdot 3^k + 3^k] = [2 \cdot 3^k + 1, 3^{k+1}]$，$A$ 与 $B$ 不相交，且 $B$ 是 $A$ 平移 $2 \cdot 3^k$ 得到的。

    假设 $S_{k+1}$ 中有三项等差数列 $p, q, r$（即 $p + r = 2q$），且 $p < q < r$。按 $p, q, r$ 在 $A, B$ 中的分布分类讨论（共 8 种，对称后 4 种）：

    - **情况 1：** $p, q, r \in A$。由归纳假设，$S_k = A$ 无三项等差数列，矛盾。
    - **情况 2：** $p, q, r \in B$。设 $p = 2 \cdot 3^k + a, q = 2 \cdot 3^k + b, r = 2 \cdot 3^k + c$（$a, b, c \in A$）。由等差数列条件：$a + c = 2b$，于是 $a, b, c \in A$ 构成等差数列，与归纳假设矛盾。
    - **情况 3：** $p, q \in A, r \in B$。由 $p + r = 2q$ 得 $r = 2q - p$。因为 $p, q \leq 3^k$，所以 $r \leq 2 \cdot 3^k - 1$。但 $r \in B$ 意味着 $r \geq 2 \cdot 3^k + 1$，矛盾。
    - **情况 4：** $p \in A, q, r \in B$。设 $q = 2 \cdot 3^k + b, r = 2 \cdot 3^k + c$（$b, c \in A$）。由等差数列条件：$p + (2 \cdot 3^k + c) = 2(2 \cdot 3^k + b)$，即 $p + c = 2 \cdot 3^k + 2b$。左边 $p + c \leq 3^k + 3^k = 2 \cdot 3^k$，右边 $2 \cdot 3^k + 2b \geq 2 \cdot 3^k + 2$，矛盾。
    - **其他情况：** 其余分布如 $(p \in B, q \in A, r \in A)$ 等，都会导致顺序矛盾（如 $p \in B$ 则 $p > 3^k$，但 $q \in A$ 则 $q \leq 3^k$，与 $p < q$ 矛盾）。

    所有可能的情况均导致矛盾，则 $S_{k+1}$ 也无三项等差数列。同时：$\lvert S_{k+1}\rvert = 2\lvert S_k\rvert = 2^{k+1}$，$S_{k+1} \subset \llbracket 1, 3^{k+1} \rrbracket$。

    由数学归纳法，对任意 $n \in \mathbb{N}_{\geq 1}$，我们构造了 $\{1, 2, \cdots, 3^n\}$ 的子集 $S_n$ 使得 $\lvert S_n\rvert = 2^n$ 且任意三项都不能组成等差数列。

---

!!! info "Mathshell 1.10 — 超限归纳法（选读）"

    一个集合 $X$ 上的**良序关系** $\leq$ 是一个二元关系满足：

    (i) （偏序关系）$\leq$ 满足自反性、反对称性、传递性；

    (ii) 任意两个元素都能比较：即对任意 $x, y \in X$，有 $x \leq y$ 或 $y \leq x$；

    (iii) 任意的 $X$ 中的子集 $S$ 都有最小元素：存在 $x_0 \in S$ 使得对任意 $x \in S$，有 $x_0 \leq x$。

    设 $(X, \leq)$ 是良序集，$P(x)$ 是关于 $x \in X$ 的命题。如果满足：

    (i) **初始:** 对于 $X$ 的最小元 $x_0$，$P(x_0)$ 成立；

    (ii) **归纳:** 对于任意 $y \in X$，如果 $\forall x < y, P(x)$ 成立，则 $P(y)$ 成立；

    那么 $\forall x \in X, P(x)$ 成立。

---

## 2 数列

### 2.1 定义

**Definition 2.1 — 数列**

一个（实）数列是从某个整数区间到实数集（或其他集合）的函数，记作

$$u: I \to \mathbb{R}, \quad n \mapsto u_n,$$

其中 $I$ 通常为

- 有限情形：$I = \{0, 1, 2, \ldots, N\}$，称为**有限数列**；
- 无限情形：$I = \mathbb{N} = \{0, 1, 2, \ldots\}$，称为**无限数列**。

数列可写成 $(u_n)_{n \in I} = u_0, u_1, u_2, \ldots$

- $u_0$ 是数列 $(u_n)_{n \in I}$ 的**首项**。
- $u_n$ 是数列 $(u_n)_{n \in I}$ 的第 $n$ 项。

!!! tip "Remark 2.2"
    函数 $u_n$ 的一个显示表达式称为 $(u_n)_{n \in \mathbb{N}}$ 的**通项公式**。

!!! tip "Remark 2.3"
    一般地，数列从指标 $0$ 开始；但也可能从某个指标 $N_0 \in \mathbb{N}$ 起才有定义，此时记作 $(u_n)_{n \geq N_0}$。

!!! tip "Remark 2.4"
    类似地，一个复数列是从某个整数区间到复数集的函数。这一章的结论对复数列也都成立。

!!! example "Example 2.5"
    - 有限数列：$u_n = 2n$，$n = 0, 1, 2, 3, 4$，即 $0, 2, 4, 6, 8$。
    - 无限数列：$u_n = 2n$，$n \in \mathbb{N}$，即 $0, 2, 4, 6, 8, \ldots$，其中第 $n$ 项为 $u_n = 2n$。

---

**Definition 2.6 — 数列的运算**

给定两个（实）数列 $u = (u_n)_{n \in \mathbb{N}}$ 与 $v = (v_n)_{n \in \mathbb{N}}$，

- **和** $u + v$ 指数列 $(u_n + v_n)_{n \in \mathbb{N}}$；
- **积** $u \cdot v$ 指数列 $(u_n \cdot v_n)_{n \in \mathbb{N}}$；
- 若对所有 $n \in \mathbb{N}$ 有 $v_n \neq 0$，则**商** $\frac{u}{v}$ 指数列 $\left(\frac{u_n}{v_n}\right)_{n \in \mathbb{N}}$。

---

**Definition 2.7 — 有界数列**

设 $(u_n)_{n \in \mathbb{N}}$ 为一个数列。

| 概念 | 定义 |
|------|------|
| **有上界** | $\exists M \in \mathbb{R}, \forall n \in \mathbb{N}, u_n \leq M$ |
| **有下界** | $\exists m \in \mathbb{R}, \forall n \in \mathbb{N}, m \leq u_n$ |
| **有界** | $\exists m \in \mathbb{R}, \exists M \in \mathbb{R}, \forall n \in \mathbb{N}, m \leq u_n \leq M$ |

---

!!! success "Proposition 2.8 — 用绝对值刻画有界性"
    对数列 $(u_n)_{n \in \mathbb{N}}$，下列命题等价：

    (i) 数列 $(u_n)_{n \in \mathbb{N}}$ 有界；

    (ii) 数列 $(\lvert u_n\rvert)_{n \in \mathbb{N}}$ 有上界。

??? note "证明"
    **(i) $\Longrightarrow$ (ii)：** 设 $(u_n)_{n \in \mathbb{N}}$ 有界，取 $m, M$ 使 $\forall n, m \leq u_n \leq M$，则 $\lvert u_n\rvert \leq \max(\lvert m\rvert, \lvert M\rvert)$，故 $(\lvert u_n\rvert)_{n \in \mathbb{N}}$ 有上界。

    **(ii) $\Longrightarrow$ (i)：** 设 $\exists M > 0, \forall n, \lvert u_n\rvert \leq M$，则 $-M \leq u_n \leq M$，于是 $(u_n)$ 既有下界又有上界，从而有界。

---

!!! example "Example 2.9"
    考虑数列 $u_n = \frac{2 + \cos n}{n + 1}$, $n \in \mathbb{N}$。则 $(u_n)_{n \in \mathbb{N}}$ 是有界数列。

??? note "证明"
    对任意 $n \in \mathbb{N}$ 有 $\lvert\cos n\rvert \leq 1$，则 $\lvert 2 + \cos n\rvert \leq 2 + \lvert\cos n\rvert \leq 3$。而分母 $n + 1 \geq 1$，故

    $$\lvert u_n\rvert = \frac{\lvert 2 + \cos n\rvert}{n + 1} \leq \frac{3}{n + 1} \leq 3.$$

    因此取 $M = 3$ 即得 $\lvert u_n\rvert \leq 3$, $\forall n \in \mathbb{N}$。由 Proposition 2.8，$(u_n)_{n \in \mathbb{N}}$ 是有界数列。

---

!!! success "Proposition 2.10 — 从某项起有界"
    对数列 $(u_n)_{n \in \mathbb{N}}$，下列命题等价：

    (i) $(u_n)_{n \in \mathbb{N}}$ 有界；

    (ii) $(u_n)_{n \in \mathbb{N}}$ 从某个指标起有界。

??? note "证明"
    **(i) $\Longrightarrow$ (ii)：** 取起始指标为 $0$ 即可。

    **(ii) $\Longrightarrow$ (i)：** 设对任意 $n \geq n_0$，$\lvert u_n\rvert \leq M$。令 $M' = \max(M, \lvert u_0\rvert, \lvert u_1\rvert, \ldots, \lvert u_{n_0-1}\rvert)$，则 $\forall n \in \mathbb{N}, \lvert u_n\rvert \leq M'$，故 $(u_n)_{n \in \mathbb{N}}$ 有界。

---

!!! example "Example 2.11"
    设 $u_n = \frac{n + (-1)^n \cdot 2^n}{2^n}$，判断 $(u_n)_{n \in \mathbb{N}}$ 是否有界。

??? note "证明"
    当 $n \geq 1$ 时，有 $\frac{n+1}{2^{n+1}} - \frac{n}{2^n} = \frac{1-n}{2^{n+1}} \leq 0$（当 $n \geq 1$ 时，$(\frac{n}{2^n})_{n \in \mathbb{N}_{\geq 1}}$ 单调递减）。因此，当 $n \geq 1$ 时，$\frac{n}{2^n} \leq \frac{1}{2}$，所以

    $$\lvert u_n\rvert = \left\lvert\frac{n + (-1)^n \cdot 2^n}{2^n}\right\rvert \leq \frac{n}{2^n} + 1 \leq \frac{3}{2}.$$

    由 Proposition 2.10 可得 $(u_n)_{n \in \mathbb{N}}$ 有界。

---

**Definition 2.12 — 单调数列**

称数列 $(u_n)_{n \in \mathbb{N}}$

| 概念 | 定义 |
|------|------|
| 单调递增 | $\forall p, q \in \mathbb{N}, p \leq q \Longrightarrow u_p \leq u_q$ |
| 单调递减 | $\forall p, q \in \mathbb{N}, p \leq q \Longrightarrow u_p \geq u_q$ |
| 单调 | 递增或递减 |
| 严格递增 | $\forall p, q \in \mathbb{N}, p < q \Longrightarrow u_p < u_q$ |
| 严格递减 | $\forall p, q \in \mathbb{N}, p < q \Longrightarrow u_p > u_q$ |
| 严格单调 | 严格递增或严格递减 |

---

!!! success "Proposition 2.13 — 递增数列的等价刻画"
    对实数列 $(u_n)_{n \in \mathbb{N}}$，下列命题等价：

    (i) $(u_n)_{n \in \mathbb{N}}$ 递增；

    (ii) $\forall n \in \mathbb{N}, u_n \leq u_{n+1}$。

??? note "证明"
    **(i) $\Longrightarrow$ (ii)：** 假设数列递增。设 $n \in \mathbb{N}$，由于 $n \leq n+1$，得 $u_n \leq u_{n+1}$。

    **(ii) $\Longrightarrow$ (i)：** 假设 (ii) 成立，通过关于 $q \in \mathbb{N}$ 的数学归纳法证明 $P(q): \forall p \in \llbracket 0, q \rrbracket, u_p \leq u_q$。

    - **初始：** $q = 0$，$u_0 \leq u_0$ 成立。
    - **归纳：** 假设 $P(k)$ 成立，即 $\forall p \in \llbracket 0, k \rrbracket, u_p \leq u_k$。根据 (ii)，$u_k \leq u_{k+1}$。因此 $\forall p \in \llbracket 0, k \rrbracket$，$u_p \leq u_k \leq u_{k+1}$，即 $P(k+1)$ 成立。

    由数学归纳法得证。

!!! tip "Remark 2.14"
    同理：

    - $(u_n)_{n \in \mathbb{N}}$ 单调递减 $\iff \forall n \in \mathbb{N}, u_n \geq u_{n+1}$；
    - $(u_n)_{n \in \mathbb{N}}$ 严格递增 $\iff \forall n \in \mathbb{N}, u_n < u_{n+1}$；
    - $(u_n)_{n \in \mathbb{N}}$ 严格递减 $\iff \forall n \in \mathbb{N}, u_n > u_{n+1}$。

---

!!! example "Example 2.15"
    设数列 $u_n = \frac{n!}{n^n}$, $n \geq 1$。则 $(u_n)_{n \in \mathbb{N}}$ 严格递减。

??? note "证明"
    考虑相邻两项比值：对任意 $n \in \mathbb{N}$，

    $$\frac{u_{n+1}}{u_n} = \frac{(n+1)!}{(n+1)^{n+1}} \cdot \frac{n^n}{n!} = \frac{n^n}{(n+1)^n} = \left(1 + \frac{1}{n}\right)^{-n}.$$

    注意到 $\forall n \geq 1$, $\left(1 + \frac{1}{n}\right)^n > 1$，于是 $\frac{u_{n+1}}{u_n} < 1$。因此 $u_{n+1} < u_n$，由 Remark 2.14 知数列严格递减。

---

!!! question "Exercise 2.16"
    求下列数列的上下界以及单调性（证明）:

    (1) $\forall n \in \mathbb{N}, u_n := (-1)^n$；

    (2) $u_0 = 1$, $\forall n \in \mathbb{N}_{\geq 1}, u_n = \sin u_{n-1}$；

    (3) $\forall n \in \mathbb{N}_{\geq 1}, u_n = n! = n \cdot (n-1) \cdots 2 \cdot 1$。

---

!!! question "典型例题 — Example 2.17"
    设 $u_0 > 0$，且对 $n \in \mathbb{N}$ 有 $u_{n+1} = 1 + \frac{u_n}{u_n + 1}$。证明 $(u_n)_{n \in \mathbb{N}}$ 单调有界。

??? note "题目解析"
    首先，证明对任意 $n \in \mathbb{N}$, $u_n > 0$。令 $Q(n): u_n > 0$，用数学归纳法证明。

    - **初始：** $n = 0$，$u_0 > 0$，$Q(0)$ 成立。
    - **归纳：** 假设 $Q(k)$ 成立，即 $u_k > 0$。则 $u_{k+1} = 1 + \frac{u_k}{u_k + 1} > 1 > 0$。$Q(k+1)$ 成立。

    由数学归纳法，对任意 $n \in \mathbb{N}, u_n > 0$。由此可知对 $n \in \mathbb{N}_{\geq 1}$，$1 \leq u_n \leq 2$，则 $(u_n)_{n \in \mathbb{N}}$ 有界。

    下面证明单调性。首先假设 $u_0 \leq u_1$。令 $P(n): u_n \leq u_{n+1}$，用数学归纳法证明。

    - **初始：** $n = 0$，$u_0 \leq u_1$，$P(0)$ 成立。
    - **归纳：** 假设 $P(k)$ 成立。则

    $$u_{k+1} - u_k = \left(1 + \frac{u_k}{u_k + 1}\right) - \left(1 + \frac{u_{k-1}}{u_{k-1} + 1}\right) = \frac{u_k - u_{k-1}}{(u_k + 1)(u_{k-1} + 1)}.$$

    因为 $1 \leq u_k, u_{k-1} \leq 2$，由归纳假设 $u_k - u_{k-1} \geq 0$，故 $u_{k+1} - u_k \geq 0$，即 $P(k+1)$ 成立。

    由数学归纳法，$(u_n)_{n \in \mathbb{N}}$ 单调递增。同理，当 $u_0 \geq u_1$ 时单调递减。综上，$(u_n)_{n \in \mathbb{N}}$ 单调。

---

!!! question "Exercise 2.18"
    设 $u_0 = \sqrt{2}$，且对 $n \in \mathbb{N}$ 有 $u_{n+1} = \sqrt{3 + 2u_n}$。证明 $(u_n)_{n \in \mathbb{N}}$ 单调有界。

---

### 2.2 常见数列

#### 2.2.1 等差数列

**Definition 2.19 — 等差数列**

设 $(u_n)_{n \in \mathbb{N}}$ 为数列。若存在 $d \in \mathbb{R}$ 使得

$$\forall n \in \mathbb{N}, u_{n+1} = u_n + d,$$

则称 $(u_n)_{n \in \mathbb{N}}$ 为**等差数列**，称 $d$ 为**公差**。

!!! tip "Remark 2.20"
    数列 $(u_n)_{n \in \mathbb{N}}$ 是等差数列当且仅当 $\forall n \in \mathbb{N}, u_{n+1} - u_n = u_n - u_{n-1}$。

---

!!! success "Proposition 2.21 — 通项公式"
    设 $(u_n)_{n \in \mathbb{N}}$ 为公差 $d$ 的等差数列，则

    $$\forall n \in \mathbb{N}, u_n = u_0 + nd.$$

??? note "证明"
    对 $n \in \mathbb{N}$，设 $P(n): u_n = u_0 + nd$，用数学归纳法证明。

    - **初始：** $n = 0$，$u_0 = u_0 + 0 \cdot d$，$P(0)$ 成立。
    - **归纳：** 设 $P(k)$ 成立，即 $u_k = u_0 + kd$。由等差定义：$u_{k+1} = u_k + d = (u_0 + kd) + d = u_0 + (k+1)d$。$P(k+1)$ 成立。

---

!!! success "Proposition 2.22 — 连续项求和"
    设 $(u_n)_{n \in \mathbb{N}}$ 为等差数列，$p \leq q$ 为非负整数，则

    $$\sum_{k=p}^{q} u_k = \frac{u_p + u_q}{2}(q - p + 1).$$

??? note "证明"
    记项数 $N = q - p + 1$。将和式正序与倒序各写一次：

    $$S = u_p + u_{p+1} + \cdots + u_q, \quad S = u_q + u_{q-1} + \cdots + u_p.$$

    两式对应项相加，利用等差性质 $u_p + u_q = u_{p+1} + u_{q-1} = \cdots$ 得

    $$2S = (u_p + u_q) + (u_p + u_q) + \cdots + (u_p + u_q) = N(u_p + u_q).$$

    故 $S = \frac{u_p + u_q}{2} \cdot N = \frac{u_p + u_q}{2}(q - p + 1)$。

---

#### 2.2.2 等比数列

**Definition 2.23 — 等比数列**

设 $(u_n)_{n \in \mathbb{N}}$ 为数列。若存在 $q \in \mathbb{R}$ 使得

$$\forall n \in \mathbb{N}, u_{n+1} = q u_n,$$

则称 $(u_n)_{n \in \mathbb{N}}$ 为**等比数列**，称 $q$ 为**公比**。

---

!!! success "Proposition 2.24 — 通项公式"
    设 $(u_n)$ 为公比 $q$ 的等比数列，则

    $$\forall n \in \mathbb{N}, u_n = u_0 q^n.$$

??? note "证明"
    对 $n \in \mathbb{N}$，设 $P(n): u_n = u_0 q^n$。数学归纳法：

    - **初始：** $n = 0$，$u_0 = u_0 q^0 = u_0$，成立。
    - **归纳：** $u_{k+1} = q u_k = q(u_0 q^k) = u_0 q^{k+1}$。

---

!!! success "Proposition 2.25 — 连续项求和"
    设 $(u_n)$ 为公比 $q$ 的等比数列，$m \leq n$ 为非负整数。

    - 若 $q = 1$：$\sum_{k=m}^{n} u_k = u_m \cdot (n - m + 1)$；
    - 若 $q \neq 1$：$\sum_{k=m}^{n} u_k = \frac{u_m - u_{n+1}}{1 - q} = \frac{u_m(1 - q^{n-m+1})}{1 - q}$。

??? note "证明"
    由通项公式，对任意 $k \geq m$，$u_k = u_m q^{k-m}$。

    **情形 1（$q = 1$）：** $u_k = u_m$ 为常数，项数 $n - m + 1$，故 $\sum_{k=m}^{n} u_k = u_m \cdot (n - m + 1)$。

    **情形 2（$q \neq 1$）：** 写出和式 $S = \sum_{k=m}^{n} u_k = u_m \sum_{j=0}^{n-m} q^j$（$j = k - m$）。

    $$qS = \sum_{k=m}^{n} q u_k = \sum_{k=m}^{n} u_{k+1} = \sum_{k=m+1}^{n+1} u_k.$$

    则 $qS - S = u_{n+1} - u_m = u_m q^{n-m+1} - u_m = u_m(q^{n-m+1} - 1)$。因为 $q \neq 1$，所以 $S = \frac{u_m - u_{n+1}}{1 - q} = \frac{u_m(1 - q^{n-m+1})}{1 - q}$。

---

#### 2.2.3 等差—等比数列（算术几何数列）

**Definition 2.26 — 等差—等比数列**

设 $(u_n)_{n \in \mathbb{N}}$ 为一个数列。若存在 $q, d \in \mathbb{R}$ 使得

$$\forall n \in \mathbb{N}, u_{n+1} = q u_n + d,$$

则称其为**等差-等比数列**（或算术几何数列）。

---

!!! success "Proposition 2.27 — 通项公式"
    设 $(u_n)_{n \in \mathbb{N}}$ 满足 $q \neq 1$, $\forall n \in \mathbb{N}, u_{n+1} = q u_n + d$。解不动点方程 $\alpha = q\alpha + d$，即 $\alpha = \frac{d}{1 - q}$。令 $v_n = u_n - \alpha$，则 $(v_n)$ 为公比 $q$ 的等比数列，从而

    $$u_n = \alpha + (u_0 - \alpha)q^n.$$

??? note "证明"
    $v_{n+1} = u_{n+1} - \alpha = (q u_n + d) - (q\alpha + d) = q(u_n - \alpha) = q v_n$。于是 $(v_n)$ 为公比 $q$ 的等比数列，$v_n = v_0 q^n = (u_0 - \alpha)q^n$。从而 $u_n = \alpha + v_n = \alpha + (u_0 - \alpha)q^n$。

---

!!! success "Proposition 2.28 — 求和公式"
    设 $(u_n)_{n \in \mathbb{N}}$ 满足 $q \neq 1$, $u_{n+1} = q u_n + d$。则

    $$\sum_{k=0}^{n} u_k = \frac{u_0 - \alpha}{1 - q}(1 - q^{n+1}) + \alpha(n + 1), \quad \text{其中 } \alpha = \frac{d}{1 - q}.$$

??? note "证明"
    由通项 $u_k = \alpha + (u_0 - \alpha)q^k$，代入和式：

    $$\sum_{k=0}^{n} u_k = \sum_{k=0}^{n} [\alpha + (u_0 - \alpha)q^k] = \alpha(n+1) + (u_0 - \alpha)\sum_{k=0}^{n} q^k = \alpha(n+1) + (u_0 - \alpha)\frac{1 - q^{n+1}}{1 - q}.$$

---

!!! question "Exercise 2.29"
    设数列 $(u_n)$ 满足 $u_0 = 2$ 且 $\forall n \in \mathbb{N}, u_{n+1} = 2u_n + 5$。求通项 $u_n$ 和 $\sum_{k=0}^{n} u_k$。

---

#### 2.2.4 二阶线性递推数列

**Definition 2.30 — $k$ 阶线性递推数列**

设 $k \in \mathbb{N}_{\geq 1}$，给定实数（或复数）系数 $a_0, a_1, \ldots, a_{k-1}$ 且 $a_0 \neq 0$，函数 $f: \mathbb{N} \to \mathbb{R}$，以及初始值 $u_0, u_1, \ldots, u_{k-1}$。若数列 $(u_n)_{n \in \mathbb{N}}$ 满足

$$\forall n \in \mathbb{N}, u_{n+k} = a_{k-1}u_{n+k-1} + a_{k-2}u_{n+k-2} + \cdots + a_0 u_n + f(n),$$

则称 $(u_n)_{n \in \mathbb{N}}$ 为 $k$ **阶线性递推数列**。

- 若 $f(n) \equiv 0$，称为 $k$ 阶线性**齐次**递推数列；
- 若 $f(n) \not\equiv 0$，称为 $k$ 阶线性**非齐次**递推数列。

!!! tip "Remark 2.31"
    等差-等比数列是一阶线性递推数列。我们主要讨论二阶线性（齐次）递推数列。

---

**Definition 2.32 — 特征方程**

设 $(u_n)_{n \in \mathbb{N}}$ 为二阶线性递推数列，即存在 $a, b \in \mathbb{R}$ 使得 $b \neq 0$，

$$\forall n \in \mathbb{N}, u_{n+2} = a u_{n+1} + b u_n.$$

称方程 $x^2 - a x - b = 0$ 为其**特征方程**。

---

!!! success "Theorem 2.33 — 二阶线性递推通项公式"

    设二阶线性递推数列 $(u_n)_{n \in \mathbb{N}}$ 的特征方程为 $x^2 - a x - b = 0$，判别式 $\Delta = a^2 + 4b$。

    | 判别式 | 根 | 通项公式 |
    |--------|-----|---------|
    | (i) $\Delta > 0$ | 两相异实根 $x_1, x_2$ | $u_n = A x_1^n + B x_2^n$（$A, B \in \mathbb{R}$） |
    | (ii) $\Delta = 0$ | 重根 $x_0$ | $u_n = (A + Bn)x_0^n$（$A, B \in \mathbb{R}$） |
    | (iii) $\Delta < 0$ | 共轭复根 $x_0 = re^{i\theta}$ | $u_n = r^n(A \cos n\theta + B \sin n\theta)$（$A, B \in \mathbb{R}$） |

??? note "证明"

    **(i) $\Delta > 0$：** 解出 $x_1 \neq x_2$。由初始条件确定唯一的 $A, B$ 满足 $u_0 = A + B$, $u_1 = A x_1 + B x_2$。设 $P(n): u_n = A x_1^n + B x_2^n$，用第二数学归纳法：

    - $P(0), P(1)$ 由 $A, B$ 选取成立。
    - 假设 $P(0), \ldots, P(k)$ 成立，则

    $$\begin{aligned}
    u_{k+1} &= a u_k + b u_{k-1} \\
    &= a(A x_1^k + B x_2^k) + b(A x_1^{k-1} + B x_2^{k-1}) \\
    &= A x_1^{k-1}(a x_1 + b) + B x_2^{k-1}(a x_2 + b) \\
    &= A x_1^{k+1} + B x_2^{k+1},
    \end{aligned}$$

    其中用到 $x_i^2 = a x_i + b$。故 $P(k+1)$ 成立。

    **(ii) $\Delta = 0$：** $x_0 \neq 0$（$b \neq 0$）。确定 $A, B$ 使 $u_0 = A$, $u_1 = (A+B)x_0$。归纳步骤类似：

    $$\begin{aligned}
    u_{k+1} &= a u_k + b u_{k-1} \\
    &= a(A + Bk)x_0^k + b(A + B(k-1))x_0^{k-1} \\
    &= x_0^{k-1}[a(A+Bk)x_0 + b(A + B(k-1))].
    \end{aligned}$$

    利用韦达定理 $a = 2x_0$, $b = -x_0^2$，化简得 $u_{k+1} = (A + B(k+1))x_0^{k+1}$。

    **(iii) $\Delta < 0$：** $x_0 = re^{i\theta}$, $\overline{x_0} = re^{-i\theta}$。先用复系数形式 $u_n = C x_0^n + D \overline{x_0}^n$（$C, D \in \mathbb{C}$）。由于 $x_0 - \overline{x_0} = 2ir \sin\theta \neq 0$，可唯一确定 $C, D$。令 $2C = A - iB$, $2D = A + iB$，则 $u_n = r^n(A \cos n\theta + B \sin n\theta)$。归纳步骤与 (i) 相同。

---

!!! tip "Remark 2.34 — 求和"
    对于二阶线性递推数列，有两种计算 $S_n := \sum_{k=0}^{n} u_k$ 的方法：

    **法一（利用通项公式）：**

    - (i) $\Delta > 0$, $u_n = A x_1^n + B x_2^n$（$x_1, x_2 \neq 1$）：$S_n = A\frac{1 - x_1^{n+1}}{1 - x_1} + B\frac{1 - x_2^{n+1}}{1 - x_2}$。
    - (ii) $\Delta = 0$, $u_n = (A + Bn)x_0^n$（$x_0 \neq 1$）：利用 $\sum_{k=0}^{n} k x_0^k = \frac{x_0(1 - (n+1)x_0^n + n x_0^{n+1})}{(1 - x_0)^2}$。
    - (iii) $\Delta < 0$：利用三角级数求和。

    **法二（利用递推公式）：** $S_{n+2} - u_1 - u_0 = a S_{n+1} + b S_n - a u_0$，解出 $(a+b-1)S_n = u_{n+2} + (1-a)u_{n+1} - u_1 + (a-1)u_0$.

---

!!! question "典型例题 — Example 2.35"
    求下列二阶线性递推数列的通项公式（用实数表示）以及前 $(n+1)$ 项和：

    **(i)** $u_0 = 1, u_1 = 1, u_{n+2} = 3u_{n+1} - u_n$；

    **(ii)** $u_0 = 1, u_1 = 1, u_{n+2} = -u_{n+1} - u_n$；

    **(iii)** $u_0 = 1, u_1 = 1, u_{n+2} = 2u_{n+1} - u_n$。

??? note "题目解析"

    **(i)** 特征方程 $x^2 - 3x + 1 = 0$，解得 $x_1 = \frac{3+\sqrt{5}}{2}$, $x_2 = \frac{3-\sqrt{5}}{2}$。设 $u_n = A\left(\frac{3+\sqrt{5}}{2}\right)^n + B\left(\frac{3-\sqrt{5}}{2}\right)^n$。

    由 $u_0 = 1$：$A + B = 1$；由 $u_1 = 1$：$A\frac{3+\sqrt{5}}{2} + B\frac{3-\sqrt{5}}{2} = 1$。解得 $A = \frac{5-\sqrt{5}}{10}, B = \frac{5+\sqrt{5}}{10}$。

    故 $u_n = \frac{5-\sqrt{5}}{10}\left(\frac{3+\sqrt{5}}{2}\right)^n + \frac{5+\sqrt{5}}{10}\left(\frac{3-\sqrt{5}}{2}\right)^n$。

    **(ii)** 特征方程 $x^2 + x + 1 = 0$，$r = e^{\pm 2\pi i/3}$。$x_1 = e^{2\pi i/3}, x_2 = e^{-2\pi i/3}$。设 $u_n = A\cos\frac{2\pi n}{3} + B\sin\frac{2\pi n}{3}$。

    由 $u_0 = 1$：$A = 1$；由 $u_1 = 1$：$A\cos\frac{2\pi}{3} + B\sin\frac{2\pi}{3} = 1$。利用 $\cos\frac{2\pi}{3} = -\frac{1}{2}$, $\sin\frac{2\pi}{3} = \frac{\sqrt{3}}{2}$ 得 $B = \sqrt{3}$。

    故 $u_n = \cos\frac{2\pi n}{3} + \sqrt{3}\sin\frac{2\pi n}{3}$。

    **(iii)** 特征方程 $x^2 - 2x + 1 = 0$，重根 $x_0 = 1$。设 $u_n = A + Bn$。

    由 $u_0 = 1$：$A = 1$；由 $u_1 = 1$：$A + B = 1$，得 $B = 0$。

    故 $u_n = 1$。

---

!!! question "Exercise 2.36"

    **(i) 斐波那契数列：** $F_0 = F_1 = 1$, $F_{n+2} = F_{n+1} + F_n$，求通项。

    **(ii)** 设 $u_{n+2} = -u_{n+1} - u_n$，证明其为周期数列。

    **(iii)** 设 $v_0 = 1, v_1 = 3$, $v_{n+2} = 4v_{n+1} - 4v_n$，求通项。

---

## 核心公式速查表

| 类别 | 公式 |
|------|------|
| 第一数学归纳法 | $P(n_0)$ 真 $\wedge$ ($P(k) \Rightarrow P(k+1)$) $\Rightarrow$ $\forall n \geq n_0, P(n)$ 真 |
| 第二数学归纳法 | $P(n_0)$ 真 $\wedge$ ($\forall j \in \llbracket n_0, k\rrbracket P(j) \Rightarrow P(k+1)$) $\Rightarrow$ $\forall n \geq n_0, P(n)$ 真 |
| 等差数列通项 | $u_n = u_0 + nd$ |
| 等差数列求和 | $\sum_{k=p}^{q} u_k = \frac{u_p + u_q}{2}(q-p+1)$ |
| 等比数列通项 | $u_n = u_0 q^n$ |
| 等比数列求和 ($q \neq 1$) | $\sum_{k=m}^{n} u_k = \frac{u_m(1 - q^{n-m+1})}{1 - q}$ |
| 等差-等比通项 ($q \neq 1$) | $u_n = \frac{d}{1-q} + \left(u_0 - \frac{d}{1-q}\right)q^n$ |
| 二阶递推 ($\Delta > 0$) | $u_n = A x_1^n + B x_2^n$ |
| 二阶递推 ($\Delta = 0$) | $u_n = (A + Bn)x_0^n$ |
| 二阶递推 ($\Delta < 0$) | $u_n = r^n(A\cos n\theta + B\sin n\theta)$ |
