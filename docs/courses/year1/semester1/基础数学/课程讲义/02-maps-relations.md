---
title: 第二章 映射与等价关系
comments: true
---

# 第二章 映射与等价关系

!!! info "📄 课件下载"
    点击下方链接下载本课程讲义 PDF 原件：
    
    <a href="../../../../../assets/pdfs/02-maps-relations.pdf">📥 下载讲义 PDF（1.1 MB）</a>

!!! abstract "学习目标"

    **映射部分：**

    - 映射的定义：定义域、陪域、像、原像
    - 单射、满射、双射的定义：证明给定的映射是单射、满射或双射
    - 映射的复合
    - 逆映射

    **函数（一元实函数）部分：**

    - 定义和表示：函数，定义域，陪域，值域，反函数
    - 函数的运算：加、减、乘、除、复合
    - 性质：有界性，单调性，奇偶性，周期性
    - 基本初等函数：常值函数、幂函数、指数函数、对数函数、三角函数、反三角函数

    **等价关系与基数部分：**

    - 二元关系、等价关系的定义，证明等价关系
    - 有限集的基数以及对应的公式

---

## 1 映射

### 1.1 映射的定义

**Définition 1.1 — 映射（Map, Application）**

一个从集合 $E$ 到集合 $F$ 的映射 $f$ 是一个对应规则，它把 $E$ 中的每一个元素对应到 $F$ 中唯一的一个元素。

- 我们称 $E$ 为映射 $f$ 的**定义域**，称 $F$ 为 $f$ 的**陪域**；
- 对于 $x \in E$，由 $f$ 对应到 $F$ 中的唯一元素 $y \in F$ 称为 $x$ 在 $f$ 下的**像**，记作 $f(x)$；此时也称 $x$ 是 $y$ 在 $f$ 下的一个**原像**；
- 集合 $\Gamma = \{(x, f(x)) \mid x \in E\}$ 称为 $f$ 的**图像**；
- 集合 $f(E) := \{y \in F \mid \exists x \in E, y = f(x)\} = \{f(x) \mid x \in E\}$ 是 $F$ 的一个子集，称为 $f$ 的**像集**（或值域）；

从 $E$ 到 $F$ 的映射 $f$ 记作

$$f: E \to F, \quad x \mapsto f(x).$$

!!! tip "Remarque 1.2"
    由定义，给定两个映射 $f: E \to F$, $g: E' \to F'$，证明 $f = g$，我们需要证明：

    - $f, g$ 有相同的定义域和陪域，即 $E = E', F = F'$；
    - $\forall x \in E, f(x) = g(x)$。

---

!!! question "Exemple 1.3"
    下列映射是否相等：

    (i) $f: \mathbb{R} \to \mathbb{R}, x \mapsto x^2$，$g: \mathbb{R}_{\geq 0} \to \mathbb{R}, x \mapsto x^2$.

    (ii) $f: \mathbb{R} \to \mathbb{R}, x \mapsto \sin(x)$，$g: \mathbb{R} \to [-1, 1], x \mapsto \sin(x)$.

    (iii) $f: \mathbb{R} \to \mathbb{R}, x \mapsto \sqrt{x^2}$，$g: \mathbb{R} \to \mathbb{R}, x \mapsto \lvert x\rvert$.

??? note "题目解析"
    (i) 不相等。$f$ 的定义域为 $\mathbb{R}$，而 $g$ 的定义域为 $\mathbb{R}_{\geq 0}$，定义域不同。

    (ii) 不相等。$f$ 的陪域为 $\mathbb{R}$，而 $g$ 的陪域为 $[-1, 1]$，陪域不同。尽管 $\forall x \in \mathbb{R}, f(x) = g(x) = \sin x$，但陪域不同意味着它们不是同一个映射。

    (iii) 相等。$f, g$ 有相同的定义域 $\mathbb{R}$、相同的陪域 $\mathbb{R}$，且 $\forall x \in \mathbb{R}, \sqrt{x^2} = \lvert x\rvert$，即 $f(x) = g(x)$。

---

**Définition 1.4**

令 $f: E \to F$ 为一个映射。令 $A \subset E, B \subset F$ 为子集。

- 集合 $f(A) := \{y \in F \mid \exists x \in A, y = f(x)\} = \{f(x) \mid x \in A\}$ 是 $F$ 的一个子集，称为映射 $f$ 下 $A$ 的**像（集）**。特别地，我们把 $f(E)$ 称为 $f$ 的**值域**，有时记为 $\operatorname{Im}(f)$。
- 集合 $f^{-1}(B) := \{x \in E \mid f(x) \in B\}$ 是 $E$ 的一个子集，称为映射 $f$ 下 $B$ 的**原像**（或逆像）（集）。

!!! tip "Remarque 1.5"
    - 对任意的子集 $B \subset F$ 和 $x \in E$，我们有 $x \in f^{-1}(B) \iff f(x) \in B$。
    - 我们有 $f^{-1}(\varnothing) = \varnothing$, $f^{-1}(F) = E$。
    - 一般，我们可以记 $f^{-1}(y) := f^{-1}(\{y\})$。这与逆映射的符号一样，需要结合语境注意。

!!! example "Exemple 1.6"
    设 $f: \mathbb{R} \to \mathbb{R}, x \mapsto x^2$。我们有

    $$f(\{-2, 2\}) = \{4\}, \quad f([-2, 2]) = \{x^2 \mid x \in [-2, 2]\} = [0, 4].$$

    通过解方程或不等式，我们有

    $$f^{-1}(4) = f^{-1}(\{4\}) = \{-2, 2\}, \quad f^{-1}([0, 4]) = \{x \in \mathbb{R} \mid x^2 \in [0, 4]\} = [-2, 2], \quad f^{-1}([-2, 4]) = \{x \in \mathbb{R} \mid x^2 \in [-2, 4]\} = [-2, 2].$$

---

### 1.2 单射、满射、双射

**Définition 1.7**

令 $f: E \to F$ 是一个映射。我们称 $f$ 是

- **单的（单射）**，如果 $\forall x_1, x_2 \in E$，$(f(x_1) = f(x_2)) \Longrightarrow (x_1 = x_2)$；
- **满的（满射）**，如果 $\forall y \in F$，$\exists x \in E$，$y = f(x)$；
- **一一对应的（双射）**，如果 $f$ 既是单的也是满的。

!!! warning "Remarque 1.8"
    映射 $f$ 的单满性与集合 $E, F$ 有很大关系。

!!! example "Exemple 1.9"
    设 $E$ 是一个集合，我们有映射 $E \to E, x \mapsto x$，称为 $E$ 的**恒等映射**，记成 $\id_E$ 或 $1_E$。恒等映射是一个双射。

!!! tip "Remarque 1.10"
    注意到对任意的映射 $f: E \to F$, $g: D \to E$，我们有 $f \circ \id_E = f$, $\id_E \circ g = g$.

---

!!! question "Exemple 1.11"
    证明映射 $f: \mathbb{R}^2 \to \mathbb{R}^2, (x, y) \mapsto (x+y, x-y)$ 是双射。

??? note "证明"

    - **证明 $f$ 是单射。** 令 $(x_1, y_1), (x_2, y_2) \in \mathbb{R}^2$ 使得 $f(x_1, y_1) = f(x_2, y_2)$，即

    $$\begin{cases} x_1 + y_1 = x_2 + y_2, \\ x_1 - y_1 = x_2 - y_2. \end{cases}$$

    两式相加可得 $2x_1 = 2x_2$，从而我们有 $x_1 = x_2, y_1 = y_2$，即 $(x_1, y_1) = (x_2, y_2)$。上述结论对任意的 $(x_1, y_1), (x_2, y_2) \in \mathbb{R}^2$ 成立，所以 $f$ 是单射。

    - **证明 $f$ 是满射。** 令 $(a, b) \in \mathbb{R}^2$。我们考虑 $f(x, y) = (a, b)$，即

    $$\begin{cases} x + y = a, \\ x - y = b. \end{cases}$$

    解得 $(x, y) = \left(\frac{a+b}{2}, \frac{a-b}{2}\right)$。从而我们有 $f\left(\frac{a+b}{2}, \frac{a-b}{2}\right) = (a, b)$。上述结论对任意的 $(a, b) \in \mathbb{R}^2$ 成立，所以 $f$ 是满射。

---

!!! tip "Remarque 1.12"
    证明一个映射 $f: E \to F$ 是单射或满射的格式：

    - **单射：** 令 $x_1, x_2 \in E$ 使得 $f(x_1) = f(x_2)$。（然后证明 $x_1 = x_2$）
    - **满射：** 令 $y \in F$。我们考虑 $f(x) = y$。（然后解方程，看是否有解）

---

### 1.3 复合映射

**Définition 1.13 — 复合映射**

令 $f: E \to F$, $g: F \to G$ 是两个映射。我们定义 $g \circ f: E \to G, x \mapsto g(f(x))$，称为 $f$ 和 $g$ 的**复合**（复合映射）。

!!! example "Exemple 1.14"
    设映射 $f: \mathbb{R} \to \mathbb{R}, x \mapsto x+3$；$g: \mathbb{R} \to \mathbb{R}, x \mapsto 2x$。则复合映射 $g \circ f$ 与 $f \circ g$ 分别为

    $$g \circ f: \mathbb{R} \to \mathbb{R}, \; (g \circ f)(x) = g(f(x)) = g(x+3) = 2(x+3) = 2x+6;$$

    $$f \circ g: \mathbb{R} \to \mathbb{R}, \; (f \circ g)(x) = f(g(x)) = f(2x) = 2x+3.$$

    显然 $\forall x \in \mathbb{R}, (g \circ f)(x) \neq (f \circ g)(x)$。由此可知，**映射的复合没有交换律**，即 $g \circ f \neq f \circ g$.

---

!!! success "Proposition 1.15 — 结合律"
    设 $f: E \to F$, $g: F \to G$, $h: G \to H$ 为映射。则

    $$h \circ (g \circ f) = (h \circ g) \circ f.$$

??? note "证明"
    注意到 $h \circ (g \circ f)$ 和 $(h \circ g) \circ f$ 的定义域均为 $E$，陪域均为 $H$，故只需验证它们在任意元素 $x \in E$ 上的作用相同。对任意 $x \in E$，

    $$\begin{aligned}
    ((h \circ g) \circ f)(x) &= (h \circ g)(f(x)) &&\text{（复合定义）}\\
    &= h(g(f(x))) &&\text{（复合定义）}\\
    (h \circ (g \circ f))(x) &= h((g \circ f)(x)) &&\text{（复合定义）}\\
    &= h(g(f(x))) &&\text{（复合定义）}
    \end{aligned}$$

    因此 $((h \circ g) \circ f)(x) = (h \circ (g \circ f))(x), \forall x \in E$，从而 $(h \circ g) \circ f = h \circ (g \circ f)$.

---

### 1.4 逆映射

**Définition 1.16 — 逆映射**

令 $f: E \to F$ 是一个映射。我们称另一个映射 $g: F \to E$ 是 $f$ 的**逆映射**，如果

$$g \circ f = \id_E, \quad f \circ g = \id_F.$$

此时我们记 $g$ 为 $f^{-1}$。

!!! tip "Remarque 1.17"
    逆映射如果存在，那么它是唯一的。实际上，如果 $g, h: F \to E$ 是 $f$ 的两个逆映射，由映射复合的结合律，我们有 $g = g \circ \id_F = g \circ (f \circ h) = (g \circ f) \circ h = \id_E \circ h = h$.

---

!!! success "Proposition 1.18"
    令 $f: E \to F$ 为一个映射。我们有下面的等价条件：$f$ 是双射 $\iff$ $f$ 存在逆映射。

    实际上，如果 $f$ 是双射，那么对于任意的 $y \in F$，存在唯一 $x \in E$ 使得 $f(x) = y$。我们定义 $g(x) := y$。因此，我们有一个映射 $g: F \to E$。不难证明 $g \circ f = \id_E, f \circ g = \id_F$.

??? note "证明"

    **$\Longrightarrow$：** 设 $f$ 为双射。对任意的 $y \in F$，由于 $f$ 是满射，存在 $x \in E$ 使得 $f(x) = y$。因为 $f$ 是单射，我们这样的 $x$ 是唯一的，记为 $g(y)$。由此，我们定义一个映射 $g: F \to E$。根据定义，对任意 $x \in E$，$(g \circ f)(x) = g(f(x)) = x$（最后一个等式是由 $g$ 的定义）。从而 $g \circ f = \id_E$。对任意 $y \in F$，根据 $g$ 的定义，$f(g(y)) = y$。从而 $f \circ g = \id_F$。故 $g$ 即为所求逆映射。

    **$\Longleftarrow$：** 设存在 $g: F \to E$ 使 $g \circ f = \id_E$ 且 $f \circ g = \id_F$.

    - **单射：** 若 $f(x_1) = f(x_2)$，则 $x_1 = (g \circ f)(x_1) = g(f(x_1)) = g(f(x_2)) = (g \circ f)(x_2) = x_2$.
    - **满射：** 对任意 $y \in F$，$y = (f \circ g)(y) = f(g(y)) \Rightarrow y$ 有原像 $g(y) \in E$.

    因此 $f$ 为双射。

!!! warning "Remarque 1.19"
    只有 $g \circ f = \id_E$ 或 $f \circ g = \id_F$ 并不足以说明 $g$ 是 $f$ 的逆映射。

!!! example "Exemple 1.20"
    $f: \mathbb{R} \to \mathbb{R}_{\geq 0}, x \mapsto \lvert x\rvert$；$g: \mathbb{R}_{\geq 0} \to \mathbb{R}, x \mapsto x$。则我们有 $f \circ g = \id_{\mathbb{R}_{\geq 0}}$，但 $g \circ f \neq \id_{\mathbb{R}}$.

!!! question "Exercise 1.21"
    令 $f: E \to F$ 是一个映射。则下列结论成立。

    (i) $f$ 是单射 $\iff$ 存在 $g: F \to E$ 使得 $g \circ f = \id_E$；

    (ii) $f$ 是满射 $\iff$ 存在 $h: F \to E$ 使得 $f \circ h = \id_F$.

---

!!! success "Proposition 1.22"
    令 $f: E \to F$，$g: F \to G$ 是两个双射。则

    $$(g \circ f)^{-1} = f^{-1} \circ g^{-1}.$$

    （证明留作练习）

---

## 2 函数（一元实函数）

### 2.1 函数的定义

**Définition 2.1**

令 $f: E \to F$ 是一个映射。如果 $E, F \subset \mathbb{R}$，则称 $f$ 为**（一元实）函数**。如果 $f$ 是双射，那么我们称 $f$ 的逆映射为 $f$ 的**反函数**。对函数 $y = f(x)$，我们称 $x$ 为**自变量**，称 $y$ 为**因变量**。

!!! tip "Remarque 2.2 — 函数的表示方法"

    **分段表示：** 例如，

    - 令 $E \subset \mathbb{R}$ 的一个子集，我们定义**指示函数** $\chi_E: \mathbb{R} \to \{0, 1\}$（或记为 $1_E$）如下：

    $$\chi_E(x) = \begin{cases} 1 & \text{如果 } x \in E, \\ 0 & \text{如果 } x \notin E. \end{cases}$$

    - 我们定义**符号函数** $\sgn: \mathbb{R} \to \{0, 1, -1\}$ 如下：

    $$\sgn(x) = \begin{cases} 1 & \text{如果 } x > 0, \\ 0 & \text{如果 } x = 0, \\ -1 & \text{如果 } x < 0. \end{cases}$$

    - 我们定义**取整函数**为 $[\cdot]: \mathbb{R} \to \mathbb{Z}, x \mapsto n$，这里 $n$ 是满足 $n \leq x < n+1$ 的整数。（有时也记为 $\lfloor\cdot\rfloor$，下取整函数）

    **隐式表示：** $F(x, y) = 0$（显式：$y = f(x)$）。例如，圆的标准方程 $x^2 + y^2 = r^2$，注意它不是函数，但 $x^2 + y^2 = r^2, y \geq 0$ 可以表示函数。

    **参数表示：** 引入第三个变量 $t$，

    $$\begin{cases} x = x(t), \\ y = y(t), \end{cases} \quad t \in [a, b].$$

    令 $E := \{x(t) \in \mathbb{R} \mid t \in [a, b]\}$, $F := \{y(t) \in \mathbb{R} \mid t \in [a, b]\}$，则上述参数方程对应函数 $f: E \to F, x(t) \mapsto y(t)$.

---

### 2.2 函数的性质

**Définition 2.3**

设函数 $f: E \to F$，这里 $E, F \subset \mathbb{R}$。

**(1) 有界性：**

- 上界：若 $\exists M \in \mathbb{R}$，使得 $\forall x \in E, f(x) \leq M$，则称 $f$ 在 $E$ 上有上界。
- 下界：若 $\exists m \in \mathbb{R}$，使得 $\forall x \in E, f(x) \geq m$，则称 $f$ 在 $E$ 上有下界。
- 有界：若 $\exists K > 0$，使得 $\forall x \in E, \lvert f(x)\rvert \leq K$，则称 $f$ 在 $E$ 上有界。

**(2) 单调性：**

- 单调递增：若 $\forall x_1, x_2 \in E, x_1 < x_2 \Rightarrow f(x_1) \leq f(x_2)$。
- 单调递减：若 $\forall x_1, x_2 \in E, x_1 < x_2 \Rightarrow f(x_1) \geq f(x_2)$。
- 严格单调递增：若 $\forall x_1, x_2 \in E, x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$。
- 严格单调递减：若 $\forall x_1, x_2 \in E, x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$。

**(3) 奇偶性：**

- 偶函数：若 $E$ 关于原点对称（即 $x \in E \Rightarrow -x \in E$），且 $\forall x \in E, f(-x) = f(x)$。
- 奇函数：若 $E$ 关于原点对称（即 $x \in E \Rightarrow -x \in E$），且 $\forall x \in E, f(-x) = -f(x)$。

**(4) 周期性：** 若存在常数 $T > 0$，使得 (i) $\forall x \in E, x + T \in E$；(ii) $\forall x \in E, f(x+T) = f(x)$；则称 $f$ 为**周期函数**，$T$ 称为它的一个周期。最小满足上述条件的 $T$ 称为**最小正周期**。

---

!!! example "Exemple 2.4 — $f(x) = \sin x$"

    1. **有界性：** $\lvert\sin x\rvert \leq 1 \; (\forall x \in \mathbb{R}) \Longrightarrow$ 有界，上界 $1$，下界 $-1$.

    2. **单调性：** 整体不单调；局部单调区间：

    $$\left[-\frac{\pi}{2} + 2k\pi, \frac{\pi}{2} + 2k\pi\right] \text{ 严格递增},\quad \left[\frac{\pi}{2} + 2k\pi, \frac{3\pi}{2} + 2k\pi\right] \text{ 严格递减},\; k \in \mathbb{Z}.$$

    3. **奇偶性：** $\sin(-x) = -\sin x \Rightarrow$ 奇函数.

    4. **周期性：** $\sin(x + 2\pi) = \sin x \Longrightarrow 2\pi$ 是最小正周期.

---

!!! example "Exemple 2.5 — 狄利克雷函数"

    $$D(x) = \begin{cases} 1, & x \in \mathbb{Q}, \\ 0, & x \notin \mathbb{Q}. \end{cases}$$

    性质一览：

    - 有界：$0 \leq D(x) \leq 1$。
    - 周期：任意 $T \in \mathbb{Q}^+$ 都是周期，无最小正周期。
    - 不单调。
    - 偶函数：$D(-x) = D(x)$。

---

### 2.3 初等函数

**Définition 2.6**

由下列六类基本初等函数经过有限次四则运算（加、减、乘、除）和复合运算所得到的函数，称为**初等函数**。

**六类基本初等函数：**

| # | 类别 | 形式 | 说明 |
|---|------|------|------|
| (i) | 常值函数 | $f(x) = C$ | $C \in \mathbb{R}$ |
| (ii) | 幂函数 | $f(x) = x^\alpha$ | $\alpha \in \mathbb{R}$ |
| (iii) | 指数函数 | $f(x) = a^x$ | $a > 0, a \neq 1$ |
| (iv) | 对数函数 | $f(x) = \log_a x$ | $a > 0, a \neq 1$ |
| (v) | 三角函数 | $\sin x, \cos x, \tan x, \cot x, \sec x, \csc x$ | |
| (vi) | 反三角函数 | $\arcsin x, \arccos x, \arctan x, \arccot x$ | |

!!! info "Remarque 2.7（选读）"
    - 初等函数在其自然定义域内连续（$\Longrightarrow$ 可积）。
    - 分段函数（如符号函数、取整函数）不是初等函数。
    - 初等函数的导数仍是初等函数；但其原函数（不定积分）未必是初等函数。

!!! tip "Remarque 2.8 — 反三角函数的自然定义域与主值范围"

    | 函数 | 定义域 | 值域 |
    |------|--------|------|
    | $y = \arcsin x$ | $[-1, 1]$ | $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ |
    | $y = \arccos x$ | $[-1, 1]$ | $[0, \pi]$ |
    | $y = \arctan x$ | $(-\infty, +\infty)$ | $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ |
    | $y = \arccot x$ | $(-\infty, +\infty)$ | $(0, \pi)$ |

---

## 3 等价关系与（集合）基数

### 3.1 等价关系

**Définition 3.1**

一个集合 $E$ 上的一个**二元关系** $\mathcal{R}$ 是 $E \times E$ 的一个子集。在这种情况下，元素 $(x, y) \in \mathcal{R}$ 通常写作 $x\mathcal{R}y$.

!!! example "Exemple 3.2"
    设 $f: E \to E$。则图像 $\{(x, f(x)) \in E \times E \mid x \in E\} \subset E \times E$ 是一个二元关系。

!!! example "Exemple 3.3"
    设某公司的员工集合 $E = \{a, b, c, d, e, f, g\}$，其中 $a$ 是 CEO；$\{b, d, e\}$ 是技术部（$b$ 是技术总监，$d, e$ 是他的下属）；$\{c, f, g\}$ 是产品部（$c$ 是产品总监，$f, g$ 是她的下属）。

    - 关系 1（直属上下级）：$\mathcal{R}_1 = \{(a,b), (a,c), (b,d), (b,e), (c,f), (c,g)\}$
    - 关系 2（同部门——等价关系）：$\mathcal{R}_2 = \{(a,a), (b,b), (d,d), (e,e), (b,d), (d,b), (b,e), (e,b), (d,e), (e,d), \ldots\}$
    - 关系 3（午餐搭子）：$\mathcal{R}_3 = \{(d,e), (e,d), (f,g), (g,f), (a,b), (b,a)\}$

---

**Définition 3.4**

设 $E$ 是一个集合，$\mathcal{R}$ 是 $E$ 上的一个二元关系。我们说 $\mathcal{R}$ 是一个**等价关系**，如果它满足以下三个性质：

(1) **自反性：** $\forall x \in E, x\mathcal{R}x$；

(2) **对称性：** $\forall x, y \in E, (x\mathcal{R}y \Longrightarrow y\mathcal{R}x)$；

(3) **传递性：** $\forall x, y, z \in E, (x\mathcal{R}y \wedge y\mathcal{R}z \Longrightarrow x\mathcal{R}z)$.

!!! example "Exemple 3.5"
    设 $f: E \to E$。则图像 $\{(x, f(x)) \in E \times E \mid x \in E\} \subset E \times E$ 是一个等价关系 $\iff f = \id_E$.

---

**Définition 3.6 — 等价类，商集**

设 $E$ 是一个集合，$\sim$ 是 $E$ 上的一个等价关系。设 $e \in E$。我们定义 $e$ 关于关系 $\sim$ 的**等价类**是如下集合

$$\Cl(e) \; (= [e]) := \{x \in E \mid x \sim e\}.$$

所有等价类的集合记作 $E/{\sim}$，称为 $E$ 关于 $\sim$ 的**商集**。

!!! tip "Remarque 3.7"
    注意 $E/{\sim} \subset \mathcal{P}(E)$.

!!! info "Remarque 3.8（选读）"
    我们有一个典范映射 $\pi: E \to E/{\sim}, e \mapsto [e]$。则 $(E/{\sim}, \pi)$ 由如下泛性质刻画：对于任意 $(D, f)$，其中 $D$ 是一个集合且 $f: E \to D$ 满足 $\forall (x, y) \in E^2, (x \sim y) \Longrightarrow (f(x) = f(y))$，则存在唯一的映射 $g: E/{\sim} \to D$ 使得 $f = g \circ \pi$。（请证明这一点）

!!! example "Exemple 3.9"
    设 $E = \{x_1, \cdots, x_{180}\}$ 是所有大一学生的集合。我们知道学生被分成若干班级（例如，1 班由 $x_1, \cdots, x_{30}$ 组成，2 班由 $x_{31}, \cdots, x_{60}$ 组成，等等）。我们在 $E$ 上定义关系 $\sim$ 如下：对于任意 $x, y \in E$，$x \sim y \iff x \text{ 和 } y \text{ 是同班同学}$。则（我们可以证明）

    - $\sim$ 是一个等价关系，
    - $x_1$ 的等价类是 $[x_1] = \{x_1, \cdots, x_{30}\} = [x_2]$，
    - 商集 $E/{\sim}$ 是 $\{[x_1], [x_{31}], [x_{61}], [x_{91}], [x_{121}], [x_{151}]\}$.

---

!!! question "Exemple 3.10 — 模 $d$ 同余"
    我们考虑 $E = \mathbb{Z}$ 并设 $d \in \mathbb{N}_{>0}$。我们在 $\mathbb{Z}$ 上定义关系 $\sim$ 如下：对于任意 $n, m \in \mathbb{Z}$，$n \sim m$ 当且仅当 $n - m \in d\mathbb{Z}$，即 $d \mid (n-m)$。则

    - $\sim$ 是一个等价关系，
    - 并且商集为 $\mathbb{Z}/d\mathbb{Z} := \mathbb{Z}/{\sim} = \{d\mathbb{Z}, 1 + d\mathbb{Z}, \cdots, (d-1) + d\mathbb{Z}\}$，其中对于 $a \in \{0, 1, \cdots, d-1\}$，$a + d\mathbb{Z} := \{a + dq \mid q \in \mathbb{Z}\}$。此外 $a + d\mathbb{Z} \neq b + d\mathbb{Z}$ 除非 $a = b$（我们有一个双射 $\mathbb{Z}/{\sim} \to \{0, 1, \cdots, d-1\}$。）

??? note "证明"

    - **自反性：** 对于任意 $x \in \mathbb{Z}$，我们有 $x - x = 0 \in d\mathbb{Z}$，即 $d \mid 0$，所以 $x \sim x$.
    - **对称性：** 设 $x, y \in \mathbb{Z}$。如果 $x \sim y$，即 $d \mid (x-y)$，则 $d \mid (y-x)$，所以 $y \sim x$.
    - **传递性：** 设 $x, y, z \in \mathbb{Z}$。如果 $x \sim y, y \sim z$，即 $x-y \in d\mathbb{Z}, y-z \in d\mathbb{Z}$，则存在 $n_1, n_2 \in \mathbb{Z}$ 使得 $x-y = dn_1, y-z = dn_2$。所以 $x-z = (x-y)+(y-z) = d(n_1+n_2) \in d\mathbb{Z}$。因此 $x \sim z$.

    还需证明 $\mathbb{Z}/{\sim} = \{d\mathbb{Z}, 1 + d\mathbb{Z}, \cdots, (d-1) + d\mathbb{Z}\}$。

    - **"$\supset$"：** 设 $a \in \{0, \cdots, d-1\}$。我们断言 $[a] = a + d\mathbb{Z}$。设 $x \in [a]$，则 $x-a \in d\mathbb{Z}$，即存在 $n \in \mathbb{Z}$ 使得 $x-a = dn$。所以 $x = a+dn \in a+d\mathbb{Z}$。故 $[a] \subset a+d\mathbb{Z}$。反之，设 $x \in a+d\mathbb{Z}$，即 $x = a+dn$，则 $x-a = dn \in d\mathbb{Z}$，所以 $x \sim a$，且 $x \in [a]$。故 $a+d\mathbb{Z} \subset [a]$。因此 $[a] = a+d\mathbb{Z}$.
    - **"$\subset$"：** 设 $[x] \in \mathbb{Z}/{\sim}$，取 $a \in \{0, 1, \cdots, d-1\}$ 是 $x$ 除以 $d$ 的余数，类似可证 $[x] = a + d\mathbb{Z}$.

    设 $a, b \in \{0, 1, \cdots, d-1\}$。如果 $a+d\mathbb{Z} = b+d\mathbb{Z}$，则 $a \in b+d\mathbb{Z}$。所以存在 $n \in \mathbb{Z}$ 使得 $a = b+dn$，即 $a-b = dn$。注意到 $0 \leq \lvert a-b\rvert < d$，所以 $n = 0$。因此 $a = b$。由逆否命题，如果 $a \neq b$，则 $a+d\mathbb{Z} \neq b+d\mathbb{Z}$.

!!! tip "Remarque 3.11"
    如果 $d = 3$，则 $\mathbb{Z}/{\sim} = \{3\mathbb{Z}, 1+3\mathbb{Z}, 2+3\mathbb{Z}\}$.

!!! example "Exemple 3.12"
    设 $f: E \to F$ 是一个映射。我们在 $E$ 上定义关系 $\sim$ 如下：对于任意 $x, y \in E$，$x \sim y$ 当且仅当 $f(x) = f(y)$。则

    - $\sim$ 是一个等价关系，
    - 并且商集为 $E/{\sim} = \{f^{-1}(b) \mid b \in f(E)\}$。此外，$f^{-1}(b_1) \neq f^{-1}(b_2)$ 除非 $b_1 = b_2$。（因此 $f$ 诱导一个双射 $E/{\sim} \to \operatorname{Im}(f)$。）

!!! question "Exercise 3.13"
    设 $\sim$ 是 $\mathbb{N} \times \mathbb{N}$ 上的一个关系定义如下。对于 $(a, b), (c, d) \in \mathbb{N} \times \mathbb{N}$，$(a, b) \sim (c, d)$ 当且仅当 $a + d = b + c$。

    (i) 证明 $\sim$ 是一个等价关系。

    (ii) 对于任意 $t \in \mathbb{Z}$，设 $S_t := \{(a, b) \in \mathbb{N} \times \mathbb{N} \mid a - b = t\}$。证明 $(\mathbb{N} \times \mathbb{N})/{\sim} = \{S_t \mid t \in \mathbb{Z}\}$。此外，$S_{t_1} \neq S_{t_2}$ 除非 $t_1 = t_2$。（因此我们有双射 $(\mathbb{N} \times \mathbb{N})/{\sim} \to \mathbb{Z}, \Cl(a, b) \mapsto a-b$。）

!!! question "Exercise 3.14 (Kenneth Rosen, P646, Ex3)"
    集合 $\{f: \mathbb{Z} \to \mathbb{Z}\}$ 上的哪些关系是等价关系？确定其他关系缺少的等价关系性质。

    (a) $\{(f, g) \mid f(1) = g(1)\}$

    (b) $\{(f, g) \mid (f(0) = g(0)) \vee (f(1) = g(1))\}$

    (c) $\{(f, g) \mid \forall x \in \mathbb{Z}, f(x) - g(x) = 1\}$

    (d) $\{(f, g) \mid \exists C \in \mathbb{Z}, \forall x \in \mathbb{Z}, f(x) - g(x) = C\}$

    (e) $\{(f, g) \mid (f(0) = g(1)) \wedge (f(1) = g(0))\}$

---

### 3.2 等价关系与划分

!!! success "Lemma 3.15"
    设 $E$ 是一个集合，$\sim$ 是 $E$ 上的一个等价关系。则以下陈述成立：

    - $\forall A \in E/{\sim}, A \neq \varnothing$；
    - $\forall A, B \in E/{\sim}, (A \neq B) \Rightarrow (A \cap B = \varnothing)$；
    - $\bigcup_{A \in E/{\sim}} A = E$.

??? note "证明"

    - 设 $A \in E/{\sim}$。存在 $e \in E$ 使得 $A = [e]$。注意到 $e \in [e]$，所以 $A = [e] \neq \varnothing$。由于我们的陈述对任意 $A \in E/{\sim}$ 成立，第一条性质成立。
    - 设 $A, B \in E/{\sim}$。存在 $x, y \in E$ 使得 $A = [x], B = [y]$。如果 $A \cap B \neq \varnothing$，则存在 $z \in A \cap B = [x] \cap [y]$，即 $z \sim x$ 且 $z \sim y$。设 $w \in A = [x]$，即 $w \sim x$。由于 $x \sim z, z \sim y$，我们有 $w \sim y$。所以 $w \in [y] = B$。该陈述对任意 $w \in A$ 成立，所以 $A \subset B$。反之，我们可以类似地证明 $B \subset A$。因此 $A = B$。由于我们的陈述对任意 $A, B$ 成立，由逆否命题，第二条性质成立。
    - 由于 $E/{\sim} \subset \mathcal{P}(E)$，我们有 $\bigcup_{A \in E/{\sim}} A \subset E$。反之，设 $e \in E$。则 $e \in [e] \in E/{\sim}$。所以 $e \in \bigcup_{A \in E/{\sim}} A$。因此 $\bigcup_{A \in E/{\sim}} A = E$.

!!! tip "Remarque 3.16"
    一个有用的观察是 $(x \sim y) \iff ([x] = [y]) \iff ([x] \cap [y] \neq \varnothing)$。一个等价关系可以用一个划分来描述。

---

**Définition 3.17 — 划分**

设 $E$ 是一个集合，**划分** $\mathcal{U}$ 是 $\mathcal{P}(E)$ 的一个子集，满足

- $\forall A \in \mathcal{U}, A \neq \varnothing$；
- $\forall A, B \in \mathcal{U}, (A \neq B) \Rightarrow (A \cap B = \varnothing)$；
- $\bigcup_{A \in \mathcal{U}} A = E$.

!!! example "Exemple 3.18"
    我们考虑 Exemple 3.10（$d \in \mathbb{N}_{>0}$）。我们在 $\mathbb{Z}$ 上有一个划分 $\{d\mathbb{Z}, 1+d\mathbb{Z}, \cdots, (d-1)+d\mathbb{Z}\}$：

    $$\mathbb{Z} = \bigcup_{a=0}^{d-1} (a + d\mathbb{Z}) = d\mathbb{Z} \cup (1+d\mathbb{Z}) \cup \cdots \cup (d-1+d\mathbb{Z}).$$

!!! question "Exercise 3.19"
    集合 $\{1, 2, 3\}$ 的所有可能划分是什么？

!!! question "Exercise 3.20 (Kenneth Rosen, P648, 45)"

---

!!! success "Théorème 3.21 — 等价关系与划分的一一对应"
    设 $E$ 是一个集合。则存在一个双射

    $$\{E \text{ 上的等价关系}\} \longleftrightarrow \{E \text{ 的划分}\},$$

    $$\sim\; \longmapsto E/{\sim},$$

    $$(x \sim_{\mathcal{U}} y \iff (\exists A \in \mathcal{U}, x, y \in A)) \longmapsfrom \mathcal{U}.$$

??? note "证明"
    设 $S$ 为 $E$ 上的等价关系的集合，$T$ 为 $E$ 的划分的集合。由 Lemma 3.15，我们有映射 $\varphi: S \to T, \sim\; \mapsto E/{\sim}$.

    反之，给定一个划分 $\mathcal{U}$，我们可以在 $E$ 上定义关系 $\sim_{\mathcal{U}}$ 如下：对于任意 $x, y \in E$，$x \sim_{\mathcal{U}} y$ 当且仅当存在 $A \in \mathcal{U}$ 使得 $x, y \in A$。我们断言 $\sim_{\mathcal{U}}$ 是一个等价关系：

    - **自反性：** 由于 $x \in E = \bigcup_{A \in \mathcal{U}} A$，存在 $A \in \mathcal{U}$ 使得 $x \in A$，所以 $x \sim_{\mathcal{U}} x$.
    - **对称性：** 如果 $x \sim_{\mathcal{U}} y$，则存在 $A \in \mathcal{U}$ 使得 $x, y \in A$，所以 $y \sim_{\mathcal{U}} x$.
    - **传递性：** 如果 $x \sim_{\mathcal{U}} y, y \sim_{\mathcal{U}} z$，则存在 $A, B \in \mathcal{U}$ 使得 $x, y \in A$，$y, z \in B$。所以 $y \in A \cap B$。特别地，$A \cap B \neq \varnothing$。由于 $\mathcal{U}$ 是划分，$A \cap B \neq \varnothing$ 意味着 $A = B$。所以 $x, y, z \in A = B$。因此 $x \sim_{\mathcal{U}} z$.

    我们考虑映射 $\psi: T \to S, \mathcal{U} \mapsto \sim_{\mathcal{U}}$. 还需证明 $\psi \circ \varphi = \id_S$ 和 $\varphi \circ \psi = \id_T$. 设 $\sim \in S$ 且 $\sim' := \psi(\varphi(\sim))$。为了证明 $\sim = \sim'$ 在 $E$ 上成立，设 $x, y \in E$。则 $x \sim y \iff [x] = [y] \iff x, y$ 属于 $E/{\sim}$ 中的同一个等价类 $\iff \exists A \in E/{\sim}, x, y \in A \iff x \sim' y$。因此 $\sim = \sim'$ 在 $E$ 上成立。

    设 $\mathcal{U} \in T$。为了证明 $\mathcal{U} = E/{\sim_{\mathcal{U}}}$，设 $A \in \mathcal{U}$。我们取 $x \in A \neq \varnothing$。由定义，我们有 $A \subset [x]$。反之，对于任意 $y \in [x]$，$\exists B \in \mathcal{U}, x, y \in B$。由于 $\mathcal{U}$ 是划分且 $x \in A \cap B$，所以 $A = B$ 且 $y \in A$。因此 $[x] \subset A$。所以 $A = [x] \in E/{\sim_{\mathcal{U}}}$。故 $\mathcal{U} \subset E/{\sim_{\mathcal{U}}}$。类似可证 $E/{\sim_{\mathcal{U}}} \subset \mathcal{U}$。因此 $\mathcal{U} = E/{\sim_{\mathcal{U}}}$，即 $\mathcal{U} = \varphi(\psi(\mathcal{U}))$.

!!! tip "Remarque 3.22"
    该定理意味着在 $E$ 上给定一个等价关系等价于给定一个划分。它们是等价的。当我们谈论一个等价关系时，你马上知道我们有一个对应的划分。

!!! question "Exercise 3.23 (Kenneth Rosen, P648, 47)"

---

### 3.3 基数

**Définition 3.24**

设 $E, F$ 是集合。如果存在一个双射 $\phi: E \to F$，则称 $E, F$ 有相同的基数，记作 $\card(E) = \card(F)$（或 $\lvert E\rvert = \lvert F\rvert$，或 $\#E = \#F$）。如果存在一个整数 $n$ 使得 $E$ 和 $\{1, 2, \cdots, n\}$ 有相同的基数，则称 $E$ 是**有限的**。

!!! info "Remarque 3.25（选读）"
    基数关系是一个等价关系。设 $S$ 为所有集合的集合。我们可以将一个集合的基数视为 $S/{\sim}$ 中的一个元素。此外，我们有一个单射 $\mathbb{N} \to S/{\sim}, n \mapsto \Cl(\llbracket 1, n \rrbracket)$。设 $S_{\text{fin}}$ 为所有有限集合的集合。则我们有一个双射 $\mathbb{N} \leftrightarrow S_{\text{fin}}/{\sim} \; (\subset S/{\sim})$.

!!! example "Exemple 3.26（选做）"
    设 $E$ 是一个集合。则 $\card(E) \leq \card(\mathcal{P}(E))$.

!!! example "Exemple 3.27"
    $\card(\llbracket m, n \rrbracket) = m - n + 1$.

---

!!! success "Proposition 3.28"
    设 $E$ 是一个有限集合。则它的基数是唯一的。

??? note "证明"
    设 $n \neq m \in \mathbb{N}$。假设 $E$ 有基数 $n$ 和基数 $m$。则存在双射 $f: E \to \llbracket 1, n \rrbracket$ 和 $g: E \to \llbracket 1, m \rrbracket$。于是我们有一个双射 $h := f \circ g^{-1}: \llbracket 1, m \rrbracket \to \llbracket 1, n \rrbracket$，这是不可能的。所以只有一个基数。

!!! tip "Remarque 3.29"
    注意到 $\card(E) \geq 0$。此外，$\card(E) = 0$ 当且仅当 $E = \varnothing$.

---

!!! success "Proposition 3.30"
    设 $A, B$ 是一个集合 $E$ 的两个子集。则

    (1) $\card(A) = \card(E) - \card(A^c)$,

    (2) $\card(B \setminus A) = \card(B) - \card(A \cap B)$.（注意 $B \setminus A = B \cap A^c$）

??? note "证明"
    (1) 设 $n := \card(A)$ 和 $m := \card(A^c)$。所以存在双射 $\phi_1: A \to \llbracket 1, m \rrbracket$, $\phi_2: A^c \to \llbracket 1, n \rrbracket$。我们定义

    $$\phi: E \to \llbracket 1, m+n \rrbracket, \quad x \mapsto \begin{cases} \phi_1(x) & x \in A, \\ \phi_2(x) + m & x \in A^c. \end{cases}$$

    则 $\phi$ 是双射。所以 $\card(E) = m + n = \card(A) + \card(A^c)$。这证明了 (1)。

    (2) 只需将 (1) 应用于 $B$ 和 $A \cap B$。注意到 $B \setminus A$ 是 $A \cap B$ 在 $B$ 中的补集。

---

!!! success "Corollaire 3.31"
    设 $F$ 是一个集合，且 $E \subset F$。则 $\card(E) \leq \card(F)$。等号成立当且仅当 $E = F$.

??? note "证明"
    设 $E^c$ 为 $E$ 在 $F$ 中的补集。由 Proposition 3.30 (1)，$\card(F) = \card(E^c) + \card(E)$。所以 $\card(F) \geq \card(E)$。为了证明等价性，"$\Longleftarrow$"显然；"$\Longrightarrow$"如果 $\card(E) = \card(F)$，则 $\card(E^c) = 0$，所以 $E^c = \varnothing$，因此 $E = F$.

---

!!! success "Proposition 3.32"
    设 $A$ 和 $B$ 是有限集合。

    (1) $\card(A \cup B) = \card(A) + \card(B) - \card(A \cap B)$. 特别地，如果 $A \cap B = \varnothing$，则 $\card(A \cup B) = \card(A) + \card(B)$.

    (2) $\card(A \times B) = \card(A) \times \card(B)$.

??? note "证明"
    (1) 设 $E := A \cup B$。注意到 $A$ 在 $E$ 中的补集是 $B \setminus A$。由 Proposition 3.30，$\card(E) = \card(A) + \card(B \setminus A) = \card(A) + \card(B) - \card(A \cap B)$.

    (2) 设 $m := \card(A), n := \card(B)$。只需证明在 $\llbracket 1, m \rrbracket \times \llbracket 1, n \rrbracket \to \llbracket 1, mn \rrbracket$ 之间存在一个双射。映射 $(k, \ell) \mapsto k + (\ell-1)m$ 是双射（练习）。

---

!!! info "Remarque 3.33 — 容斥原理"

    $$\begin{aligned}
    \card\left(\bigcup_{i=1}^{n} A_i\right) &= \sum_{\varnothing \neq I \subset \llbracket 1,n \rrbracket} (-1)^{\card(I)+1} \card\left(\bigcap_{i\in I} A_i\right) \\
    &= \sum_{i=1}^{n} \card(A_i) - \sum_{1 \leqslant i < j \leqslant n} \card(A_i \cap A_j) + \cdots + (-1)^{n+1} \card(A_1 \cap \cdots \cap A_n).
    \end{aligned}$$

!!! example "Exemple 3.34"
    确定集合 $\{0, 1, 2\} \times \{1, 3\}$ 和 $\{0, 1, 2, 3\} \cup \{1, 3, 5\}$ 的基数。

    解：$\card(\{0, 1, 2\} \times \{1, 3\}) = 3 \times 2 = 6$；$\card(\{0, 1, 2, 3\} \cup \{1, 3, 5\}) = 4 + 3 - 2 = 5$.

---

!!! success "Théorème 3.35 — 基数、单射与满射"
    设 $f: E \to F$ 是有限集合之间的映射。如果 $\card(E) = \card(F)$，则以下三个性质等价：

    (a) $f$ 是单射； (b) $f$ 是满射； (c) $f$ 是双射。

??? note "证明"

    - **"(a) $\Longrightarrow$ (b)"：** 假设 $f$ 是单射。由单射性，$\card(E) = \card(f(E))$。此外，由于 $\card(E) = \card(F)$，我们有 $\card(f(E)) = \card(F)$。由 Corollaire 3.31，$f(E) = F$，所以 $f$ 是满射。
    - **"(b) $\Longrightarrow$ (c)"：** 假设 $f$ 是满射。为了证明 $f$ 是双射，只需证明 $f$ 是单射。对于所有 $x, y \in E$，我们定义 $x \sim y \iff f(x) = f(y)$。则 $\sim$ 是一个等价关系。由构造，$\card(E/{\sim}) = \card(f(E)) = \card(F)$（见 Exemple 3.12）。所以 $\card(E/{\sim}) = \card(E)$。这意味着每个等价类只包含一个元素，即对于任意 $b \in F$，有 $\card(f^{-1}(b)) = 1$。所以 $f$ 是单射。
    - **"(c) $\Longrightarrow$ (a)"：** 显然。

---

!!! success "Théorème 3.36"
    设 $E$ 是一个有限集合，$\{A_i\}_{1 \leq i \leq k}$ 是 $E$ 的一个划分。则

    $$\card(E) = \sum_{i=1}^{k} \card(A_i).$$

??? note "证明"
    我们对 $k$ 进行归纳证明。

    - 当 $k = 1$ 时，这是显然的。
    - 当 $k > 1$ 时，我们假设该陈述对 $k-1$ 成立。则 $\{A_i\}_{1 \leq i \leq k-2} \cup \{A_{k-1} \cup A_k\}$ 是 $E$ 的一个基数为 $k-1$ 的划分。由 Proposition 3.32 (1)，$\card(A_{k-1} \cup A_k) = \card(A_{k-1}) + \card(A_k)$。由归纳假设，

    $$\card(E) = \sum_{i=1}^{k-2} \card(A_i) + \card(A_{k-1} \cup A_k) = \sum_{i=1}^{k} \card(A_i).$$

---

!!! success "Théorème 3.37"
    设 $E$ 是一个集合，且 $n = \card(E)$。则 $\mathcal{P}(E)$ 的基数是 $2^n$.

??? note "证明"
    设 $p \in \{0, \cdots, n\}$。我们设 $C_p = \{A \subset E \mid \card(A) = p\}$。集合 $\{C_p \mid 0 \leq p \leq n\}$ 是 $\mathcal{P}(E)$ 的一个划分。则

    $$\card(\mathcal{P}(E)) = \sum_{p=0}^{n} \card(C_p) = \sum_{p=0}^{n} \binom{n}{p} = (1+1)^n = 2^n.$$

---

## 核心公式速查表

| 概念 | 公式 |
|------|------|
| 恒等映射 | $\id_E: E \to E, x \mapsto x$ |
| 单射条件 | $f(x_1) = f(x_2) \Longrightarrow x_1 = x_2$ |
| 满射条件 | $\forall y \in F, \exists x \in E, y = f(x)$ |
| 复合结合律 | $h \circ (g \circ f) = (h \circ g) \circ f$ |
| 逆映射条件 | $g \circ f = \id_E \wedge f \circ g = \id_F$ |
| 双射复合逆 | $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ |
| 等价关系三性 | 自反性 + 对称性 + 传递性 |
| 等价关系 $\leftrightarrow$ 划分 | 一一对应（Théorème 3.21） |
| 并集基数 | $\card(A \cup B) = \card(A) + \card(B) - \card(A \cap B)$ |
| 笛卡尔积基数 | $\card(A \times B) = \card(A) \times \card(B)$ |
| 幂集基数 | $\card(\mathcal{P}(E)) = 2^{\card(E)}$ |
| 等基数下三等价 | $\card(E) = \card(F)$ 时，单 $\iff$ 满 $\iff$ 双 |
