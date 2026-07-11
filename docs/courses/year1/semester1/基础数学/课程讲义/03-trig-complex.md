---
title: 第三章 三角函数与复数
comments: true
---

# 第三章 三角函数与复数

!!! info "📄 课件下载"
    点击下方链接下载本课程讲义 PDF 原件：
    
    <a href="https://cdn.jsdelivr.net/gh/Noct-BUAA/Self-Help-Guide-of-BIFAST-BUAA@assets/03-trig-complex.pdf">📥 下载讲义 PDF（1.7 MB）</a>

!!! abstract "学习目标"

    **三角函数与反三角函数部分：**

    - 三角函数的定义、图像以及基本性质
    - 回忆毕达哥拉斯恒等式
    - 回忆和差角公式、和差化积公式、积化和差公式、万能变换
    - 反三角函数的定义

    **复数部分：**

    - 复数的定义以及表示方式（相互转化）
    - 复数运算的基本性质
    - 欧拉公式及其应用（三角函数和解方程）

---

## 1 三角函数与反三角函数

### 1.1 三角函数

!!! info "Mathshell 1.1"

    我们描述角度，一般分为下列的角度制和弧度制。

    - **（角度制）** 将圆周定为 $360^\circ$，则 $1^\circ = \frac{1}{360}$ 周角。起源于古巴比伦的 60 进制系统，符合人类对周天的直观认知（如一年约 360 天）。适合直观描述与日常应用，例如，工程测量、导航。
    - **（弧度制）** 设圆半径为 $r$，对圆心角 $\theta$ 所对弧长为 $s$，则 $\theta (\text{rad}) = \frac{s}{r}$。（rad 表示弧度）当 $r = 1$ 时，$\theta = s$。弧度制反映几何本质（弧长/半径），揭示三角函数的本质规律。在弧度制下，三角函数的自变量为"纯数"（无量纲），直接适用微积分公式。
    - **（转换关系）** $180^\circ = \pi \text{ rad}$.

    数学上，我们一般使用弧度表示角度。

---

**Définition 1.2 — 锐角三角函数**

在直角三角形 $ABC$ 中（$C = \frac{\pi}{2}$），对于锐角 $A$，定义：

$$\sin A = \frac{\text{对边}}{\text{斜边}} = \frac{a}{c}, \quad \cos A = \frac{\text{邻边}}{\text{斜边}} = \frac{b}{c}, \quad \tan A = \frac{\text{对边}}{\text{邻边}} = \frac{a}{b},$$

$$\cot A = \frac{\text{邻边}}{\text{对边}} = \frac{b}{a}, \quad \sec A = \frac{\text{斜边}}{\text{邻边}} = \frac{c}{b}, \quad \csc A = \frac{\text{斜边}}{\text{对边}} = \frac{c}{a}.$$

- 正角：逆时针旋转形成的角
- 负角：顺时针旋转形成的角

若 $\theta$ 是钝角，甚至大于 $\pi$，三角函数应如何定义？

---

**Définition 1.3 — 单位圆定义**

在直角坐标系中，设角 $\alpha$ 的终边与单位圆交于点 $P(x, y)$，则定义：

$$\sin \alpha = y, \quad \cos \alpha = x, \quad \tan \alpha = \frac{y}{x} \; (x \neq 0), \quad \cot \alpha = \frac{x}{y} \; (y \neq 0),$$

$$\sec \alpha = \frac{1}{x} \; (x \neq 0), \quad \csc \alpha = \frac{1}{y} \; (y \neq 0).$$

（注：PDF 原文 sec/csc 定义互换，此处已修正——$\sec = 1/\cos = 1/x$，$\csc = 1/\sin = 1/y$）

| 函数 | 定义域 | 值域 |
|------|--------|------|
| $\sin x$ | $\mathbb{R}$ | $[-1, 1]$ |
| $\cos x$ | $\mathbb{R}$ | $[-1, 1]$ |
| $\tan x$ | $\{x \mid x \neq \frac{\pi}{2} + k\pi, k \in \mathbb{Z}\}$ | $\mathbb{R}$ |
| $\cot x$ | $\{x \mid x \neq k\pi, k \in \mathbb{Z}\}$ | $\mathbb{R}$ |

---

!!! success "Proposition 1.4 — 三角函数的性质"

| 函数 | 有界性 | 单调性（一个周期内） | 奇偶性 | 最小正周期 |
|------|--------|---------------------|--------|-----------|
| $\sin x$ | $-1 \leq \sin x \leq 1$ | 在 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ 上严格增 | 奇 | $2\pi$ |
| $\cos x$ | $-1 \leq \cos x \leq 1$ | 在 $[0, \pi]$ 上严格减 | 偶 | $2\pi$ |
| $\tan x$ | 无界：$(-\infty, +\infty)$ | 在 $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ 上严格增 | 奇 | $\pi$ |
| $\cot x$ | 无界：$(-\infty, +\infty)$ | 在 $(0, \pi)$ 上严格减 | 奇 | $\pi$ |
| $\sec x$ | $\lvert\sec x\rvert \geq 1$ | 在 $[0, \pi] \setminus \{\frac{\pi}{2}\}$ 上严格增 | 偶 | $2\pi$ |
| $\csc x$ | $\lvert\csc x\rvert \geq 1$ | 在 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \setminus \{0\}$ 上严格减 | 奇 | $2\pi$ |

!!! tip "Remarque 1.5"

    - **正弦函数 $y = \sin x$：** 定义域 $\mathbb{R}$，值域 $[-1, 1]$，周期 $2\pi$，奇函数。零点 $x = k\pi, k \in \mathbb{Z}$。最大值点 $x = \frac{\pi}{2} + 2k\pi$，最小值点 $x = \frac{3\pi}{2} + 2k\pi$。
    - **余弦函数 $y = \cos x$：** 定义域 $\mathbb{R}$，值域 $[-1, 1]$，周期 $2\pi$，偶函数。零点 $x = \frac{\pi}{2} + k\pi$。最大值点 $x = 2k\pi$，最小值点 $x = \pi + 2k\pi$。
    - **正切函数 $y = \tan x$：** 定义域 $\{x \mid x \neq \frac{\pi}{2} + k\pi\}$，值域 $\mathbb{R}$，周期 $\pi$，奇函数。零点 $x = k\pi$。渐近线 $x = \frac{\pi}{2} + k\pi$。

---

### 1.2 三角函数的基本恒等式

!!! success "Théorème 1.6 — 毕达哥拉斯恒等式"

    $$\sin^2 \theta + \cos^2 \theta = 1, \quad 1 + \tan^2 \theta = \sec^2 \theta, \quad 1 + \cot^2 \theta = \csc^2 \theta.$$

    （相似三角形证明）

!!! info "诱导公式"

    | 函数 | $\frac{\pi}{2} \pm \alpha$ | $\pi \pm \alpha$ | $\frac{3\pi}{2} \pm \alpha$ | $2\pi \pm \alpha$ |
    |------|:---:|:---:|:---:|:---:|
    | $\sin$ | $\cos \alpha$ | $\mp \sin \alpha$ | $-\cos \alpha$ | $\pm \sin \alpha$ |
    | $\cos$ | $\mp \sin \alpha$ | $-\cos \alpha$ | $\pm \sin \alpha$ | $\cos \alpha$ |
    | $\tan$ | $\mp \cot \alpha$ | $\pm \tan \alpha$ | $\mp \cot \alpha$ | $\pm \tan \alpha$ |

    口诀："奇变偶不变，符号看象限"

    下面我们回忆高中的公式（都不用记忆）。

---

!!! success "Théorème 1.7 — 和差角公式"

    $$\begin{aligned}
    \sin(\alpha + \beta) &= \sin \alpha \cos \beta + \cos \alpha \sin \beta \\
    \sin(\alpha - \beta) &= \sin \alpha \cos \beta - \cos \alpha \sin \beta \\
    \cos(\alpha + \beta) &= \cos \alpha \cos \beta - \sin \alpha \sin \beta \\
    \cos(\alpha - \beta) &= \cos \alpha \cos \beta + \sin \alpha \sin \beta \\
    \tan(\alpha + \beta) &= \frac{\tan \alpha + \tan \beta}{1 - \tan \alpha \tan \beta} \\
    \tan(\alpha - \beta) &= \frac{\tan \alpha - \tan \beta}{1 + \tan \alpha \tan \beta}
    \end{aligned}$$

---

!!! success "Théorème 1.8 — 和差化积公式"

    $$\begin{aligned}
    \sin \alpha + \sin \beta &= 2 \sin\left(\frac{\alpha + \beta}{2}\right) \cos\left(\frac{\alpha - \beta}{2}\right) \\
    \sin \alpha - \sin \beta &= 2 \cos\left(\frac{\alpha + \beta}{2}\right) \sin\left(\frac{\alpha - \beta}{2}\right) \\
    \cos \alpha + \cos \beta &= 2 \cos\left(\frac{\alpha + \beta}{2}\right) \cos\left(\frac{\alpha - \beta}{2}\right) \\
    \cos \alpha - \cos \beta &= -2 \sin\left(\frac{\alpha + \beta}{2}\right) \sin\left(\frac{\alpha - \beta}{2}\right)
    \end{aligned}$$

---

!!! success "Théorème 1.9 — 积化和差公式"

    $$\begin{aligned}
    \sin \alpha \cos \beta &= \tfrac{1}{2}[\sin(\alpha + \beta) + \sin(\alpha - \beta)] \\
    \cos \alpha \sin \beta &= \tfrac{1}{2}[\sin(\alpha + \beta) - \sin(\alpha - \beta)] \\
    \cos \alpha \cos \beta &= \tfrac{1}{2}[\cos(\alpha + \beta) + \cos(\alpha - \beta)] \\
    \sin \alpha \sin \beta &= -\tfrac{1}{2}[\cos(\alpha + \beta) - \cos(\alpha - \beta)]
    \end{aligned}$$

---

!!! success "Théorème 1.10 — 万能变换"

    令 $t = \tan \frac{\alpha}{2}$（$-\pi < \alpha < \pi$ 或取主值），则

    $$\begin{aligned}
    \sin \alpha &= \frac{2t}{1 + t^2}, & \cos \alpha &= \frac{1 - t^2}{1 + t^2}, & \tan \alpha &= \frac{2t}{1 - t^2} \; (t^2 \neq 1), \\
    \cot \alpha &= \frac{1 - t^2}{2t} \; (t \neq 0), & \sec \alpha &= \frac{1 + t^2}{1 - t^2} \; (t^2 \neq 1), & \csc \alpha &= \frac{1 + t^2}{2t} \; (t \neq 0).
    \end{aligned}$$

!!! tip "Remarque 1.11"
    毕达哥拉斯恒等式以及万能变换，经常在计算积分中出现。

!!! tip "Remarque 1.12 — 辅助角公式"

    对任意正实数 $a, b$ 及任意角 $\theta$，有

    $$a \sin \theta + b \cos \theta = \sqrt{a^2 + b^2} \sin(\theta + \alpha), \quad \text{其中 } \alpha = \arctan \frac{b}{a}.$$

??? note "证明"
    令 $R = \sqrt{a^2 + b^2}$，则 $a \sin \theta + b \cos \theta = R\left(\frac{a}{R} \sin \theta + \frac{b}{R} \cos \theta\right)$. 取 $\alpha = \arctan \frac{b}{a}$，则 $\cos \alpha = \frac{a}{R}, \sin \alpha = \frac{b}{R}$. 于是 $a \sin \theta + b \cos \theta = R(\cos \alpha \sin \theta + \sin \alpha \cos \theta) = R \sin(\theta + \alpha)$.

---

### 1.3 反三角函数

**Définition 1.13 — 反三角函数**

- 函数 $y = \sin x$ 在 $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ 上的反函数称为**反正弦函数**，记作 $y = \arcsin x$, $x \in [-1, 1]$, $y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.
- 函数 $y = \cos x$ 在 $[0, \pi]$ 上的反函数称为**反余弦函数**，记作 $y = \arccos x$, $x \in [-1, 1]$, $y \in [0, \pi]$.
- 函数 $y = \tan x$ 在 $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ 上的反函数称为**反正切函数**，记作 $y = \arctan x$, $x \in \mathbb{R}$, $y \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.

!!! warning "Remarque 1.14"
    注意反三角函数的值域。例如 $\arctan\left(\tan\frac{7\pi}{3}\right) = \frac{\pi}{3} \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$.

---

!!! question "Exemple 1.15"
    计算 $\cos(\arctan x), \cos(\arcsin x), \tan(\arcsin x)$（用 $x$ 的代数运算表示）。

??? note "证明"

    - **计算 $\cos(\arctan x)$：** 设 $\theta = \arctan x$，则 $\tan \theta = x$ 且 $\theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$。注意到 $\cos \theta = \frac{1}{\sqrt{1 + \tan^2 \theta}}$，则 $\cos(\arctan x) = \frac{1}{\sqrt{1 + (\tan(\arctan x))^2}} = \frac{1}{\sqrt{1 + x^2}}$.
    - **计算 $\cos(\arcsin x)$：** 设 $\phi = \arcsin x$，则 $\sin \phi = x$ 且 $\phi \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$。注意到 $\cos \phi = \sqrt{1 - \sin^2 \phi}$，则 $\cos(\arcsin x) = \sqrt{1 - (\sin(\arcsin x))^2} = \sqrt{1 - x^2}$.
    - **计算 $\tan(\arcsin x)$：** 设 $\phi = \arcsin x$，则 $\sin \phi = x$ 且 $\phi \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$。由上述结果，$\tan \phi = \frac{\sin \phi}{\cos \phi} = \frac{x}{\sqrt{1 - x^2}}$，即 $\tan(\arcsin x) = \frac{x}{\sqrt{1 - x^2}}$.

---

!!! question "Exemple 1.16"
    证明：对任意 $x \in [-1, 1]$，我们有 $\arccos x + \arcsin x = \frac{\pi}{2}$.

??? note "证明"
    令 $x \in [-1, 1]$，设 $\theta = \arcsin x$，则 $\sin \theta = x, \theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$. 由于 $\cos \theta \geq 0$ 在此区间，有 $\cos \theta = \sqrt{1 - \sin^2 \theta} = \sqrt{1 - x^2}$.

    考虑 $\arccos x$ 的定义：$\arccos x$ 是 $[0, \pi]$ 内唯一满足 $\cos \varphi = x$ 的角。由 $\cos\left(\frac{\pi}{2} - \theta\right) = \sin \theta = x$，且 $\frac{\pi}{2} - \theta \in [0, \pi]$（因为 $\theta \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$），故 $\arccos x = \frac{\pi}{2} - \theta$. 因此 $\arccos x + \arcsin x = \left(\frac{\pi}{2} - \theta\right) + \theta = \frac{\pi}{2}$.

---

## 2 复数

### 2.1 复数的定义与表示

实数集 $\mathbb{R}$ 足以处理许多问题，但它有一个根本的局限性：不存在实数 $x$ 使得 $x^2 = -1$。为了克服这一局限性，我们通过引入一个名为虚数单位的新数来扩展实数系。

**Définition 2.1 — 虚数单位**

虚数单位，记作 $i$，定义为：$i^2 = -1$。相应地，$i = \sqrt{-1}$.

---

**Définition 2.2 — 复数**

一个复数 $z$ 是一个可以写成以下形式的数：$z = a + bi$，其中 $a$ 和 $b$ 是实数。

- $a$ 称为 $z$ 的**实部**，记作 $\RE(z)$。
- $b$ 称为 $z$ 的**虚部**，记作 $\IM(z)$。

注意到 $b = \IM(z) = 0$ 时，$z$ 是实数，即 $z \in \mathbb{R}$。当 $b \neq 0$ 时，我们称 $z$ 为**虚数**；进一步地，若 $a = \IM(z) = 0$，我们称 $z = bi$ 为**纯虚数**。所有复数的集合用 $\mathbb{C}$ 表示。

!!! tip "Remarque 2.3"
    注意到我们引入 $i$ 与 $\mathbb{R}$ 没有任意"线性关系"，即 $a + bi = 0$ 当且仅当 $a = b = 0$.

!!! tip "Remarque 2.4"
    由上述注记，我们可以证明下述映射 $\mathbb{R}^2 \to \mathbb{C}, (a, b) \mapsto a + bi$ 为双射。由此可知一个复数 $z = a + bi$ 由一对实数 $(a, b)$ 唯一确定。因此我们可以在一个二维平面上表示它们，这个平面称为**复平面**。

    - 横轴（实轴）表示实部。
    - 纵轴（虚轴）表示虚部。

    在复平面上，点 $z = a + bi$ 可以用其到原点的距离和与正实轴的夹角来定位。

!!! example "Exemple 2.5"
    - $3 + 2i$（实部为 $3$，虚部为 $2$）
    - $5$（可视为 $5 + 0i$，是实数）
    - $-4i$（可视为 $0 - 4i$，是纯虚数）

---

**Définition 2.6 — 模**

复数 $z = a + bi$ 的**模**（或绝对值），记作 $\lvert z\rvert$，定义为 $\lvert z\rvert = \sqrt{a^2 + b^2}$. 它表示 $z$ 到原点的距离。

---

**Définition 2.7 — 辐角**

复数 $z = a + bi$ 的**辐角**，记作 $\arg(z)$，是正实轴与向量 $\overrightarrow{Oz}$ 之间的夹角（以弧度为单位）。它满足 $\tan(\theta) = \frac{b}{a}$，并且需要根据 $a, b$ 的符号确定象限。通常取主值 $\arg(z) \in (-\pi, \pi]$.

---

**Définition 2.8 — 四则运算**

设 $z_1 = a + bi$, $z_2 = c + di$.

- **共轭：** $\overline{z_1} = a - bi$.
- **加法/减法：** $(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i$.
- **乘法：** $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$（应用分配律并利用 $i^2 = -1$）.
- **除法：** $\frac{z_1}{z_2} = \frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}$（分子分母同时乘以分母的共轭）.

!!! tip "Remarque 2.9"
    由定义，不难证明复数的加法和乘法具有结合律和交换律，即对任意 $z_1, z_2, z_3 \in \mathbb{C}$，

    $$z_1 + z_2 = z_2 + z_1, \quad (z_1 + z_2) + z_3 = z_1 + (z_2 + z_3), \quad z_1 z_2 = z_2 z_1, \quad (z_1 z_2) z_3 = z_1 (z_2 z_3).$$

!!! info "Mathshell 2.10（选读）"
    有了四则运算，我们才能用来求方程组的解。我们有下列"代数基本定理"：每个非常数的复系数多项式至少有一个复数根。等价地，一个 $n$ 次复系数多项式恰好有 $n$ 个根（计入重数）。（复数域 $\mathbb{C}$ 是代数闭域。）

!!! example "Exemple 2.11"
    考虑方程 $x^2 + 4x + 8 = 0$. 判别式 $\Delta = 4^2 - 4 \cdot 1 \cdot 8 = 16 - 32 = -16 < 0$，故方程无实根。由求根公式得共轭复根 $x = \frac{-4 \pm \sqrt{-16}}{2} = \frac{-4 \pm 4i}{2} = -2 \pm 2i$. 因此两个复数解为 $x_1 = -2 + 2i, x_2 = -2 - 2i$.

---

!!! success "Proposition 2.12 — 共轭与模的基本性质"

    设 $z, z_1, z_2 \in \mathbb{C}$。

    | # | 性质 |
    |---|------|
    | (i) | $z_1 = z_2 \iff \RE(z_1) = \RE(z_2),\; \IM(z_1) = \IM(z_2)$ |
    | (ii) | $z \in \mathbb{R} \iff z = \overline{z}$；$z \in i\mathbb{R} \iff z = -\overline{z}$ |
    | (iii) | $\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}$，$\RE(z_1 + z_2) = \RE(z_1) + \RE(z_2)$，$\IM(z_1 + z_2) = \IM(z_1) + \IM(z_2)$ |
    | (iv) | $\overline{z_1 \cdot z_2} = \overline{z_1} \cdot \overline{z_2}$，$\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}} \; (z_2 \neq 0)$ |
    | (v) | $\lvert z\rvert = \sqrt{z \overline{z}}$ |
    | (vi) | $\lvert z\rvert = 0 \iff z = 0$ |
    | (vii) | $\lvert z_1 \cdot z_2\rvert = \lvert z_1\rvert \cdot \lvert z_2\rvert$，$\left\lvert\frac{z_1}{z_2}\right\rvert = \frac{\lvert z_1\rvert}{\lvert z_2\rvert} \; (z_2 \neq 0)$ |
    | (viii) | $\lvert z_1 + z_2\rvert \leq \lvert z_1\rvert + \lvert z_2\rvert$，$\lvert z_1 - z_2\rvert \geq \bigl\lvert\lvert z_1\rvert - \lvert z_2\rvert\bigr\rvert$ |

??? note "证明"

    设 $z = a + bi$, $z_1 = a_1 + b_1 i$, $z_2 = a_2 + b_2 i$.

    **(i)** 由定义（$i$ 与 $\mathbb{R}$ 线性无关）$z_1 - z_2 = (a_1 - a_2) + i(b_1 - b_2) = 0$ 当且仅当实部、虚部同时为零。

    **(ii)** 若 $z = \overline{z}$，则 $b = 0$，因此 $z \in \mathbb{R}$；反之显然。若 $z = -\overline{z}$，即 $a - ib = -a - ib$，则 $a = 0$，因此 $z \in i\mathbb{R}$；反之亦然。

    **(iii)** 直接展开：$\overline{z_1 + z_2} = (a_1 + a_2) + i(b_1 + b_2) = (a_1 + a_2) - i(b_1 + b_2) = (a_1 - ib_1) + (a_2 - ib_2) = \overline{z_1} + \overline{z_2}$. 实部、虚部分别对应相加即得后两式。

    **(iv)** $z_1 z_2 = (a_1 + ib_1)(a_2 + ib_2) = (a_1 a_2 - b_1 b_2) + i(a_1 b_2 + a_2 b_1)$，取共轭得 $(a_1 a_2 - b_1 b_2) - i(a_1 b_2 + a_2 b_1)$. 另一方面 $\overline{z_1} \cdot \overline{z_2} = (a_1 - ib_1)(a_2 - ib_2) = (a_1 a_2 - b_1 b_2) - i(a_1 b_2 + a_2 b_1)$. 两式相等。对 $z_2 \neq 0$，利用已证的乘积性质得 $\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}$.

    **(v)** $z \overline{z} = (a + ib)(a - ib) = a^2 + b^2 = \lvert z\rvert^2$，从而 $\lvert z\rvert = \sqrt{z \overline{z}}$.

    **(vi)** $\lvert z\rvert = 0 \iff a^2 + b^2 = 0 \iff a = b = 0 \iff z = 0$.

    **(vii)** 利用 (v)：$\lvert z_1 z_2\rvert^2 = (z_1 z_2)(\overline{z_1 z_2}) = z_1 \overline{z_1} \cdot z_2 \overline{z_2} = \lvert z_1\rvert^2 \lvert z_2\rvert^2$，则 $\lvert z_1 z_2\rvert = \lvert z_1\rvert \lvert z_2\rvert$. 商的情形同理。

    **(viii)** 主不等式：$\lvert z_1 + z_2\rvert^2 = (z_1 + z_2)(\overline{z_1} + \overline{z_2}) = \lvert z_1\rvert^2 + \lvert z_2\rvert^2 + 2\RE(z_1 \overline{z_2}) \leq \lvert z_1\rvert^2 + \lvert z_2\rvert^2 + 2\lvert z_1\rvert\lvert z_2\rvert = (\lvert z_1\rvert + \lvert z_2\rvert)^2$，取平方根即得。反向不等式：$\lvert z_1\rvert \leq \lvert z_1 - z_2\rvert + \lvert z_2\rvert \Rightarrow \lvert z_1 - z_2\rvert \geq \lvert z_1\rvert - \lvert z_2\rvert$，同理 $\lvert z_1 - z_2\rvert \geq \lvert z_2\rvert - \lvert z_1\rvert$，合起来即 $\lvert z_1 - z_2\rvert \geq \bigl\lvert\lvert z_1\rvert - \lvert z_2\rvert\bigr\rvert$.

---

!!! question "Exemple 2.13"
    求 $z = \frac{2+i}{7-i}$ 的实部和虚部。

??? note "证明"
    分子分母同乘分母的共轭：

    $$z = \frac{2 + i}{7 - i} \cdot \frac{7 + i}{7 + i} = \frac{(2 + i)(7 + i)}{7^2 + 1^2} = \frac{14 + 2i + 7i + i^2}{50} = \frac{14 - 1 + 9i}{50} = \frac{13 + 9i}{50}.$$

    故 $\RE(z) = \frac{13}{50}$，$\IM(z) = \frac{9}{50}$.

---

### 2.2 欧拉公式

!!! info "Remarque 2.14"
    回顾高中自然常数 $e$ 的定义：把 $1$ 元钱存入银行，年利率 $100\%$，结算周期越来越密，一年后本息和为 $A_n = \left(1 + \frac{1}{n}\right)^n$.

    | 结算周期 | 本息和 $A_n$ |
    |----------|-------------|
    | 一年一次 | $2$ |
    | 半年一次 | $2.25$ |
    | 一季一次 | $\approx 2.4414$ |
    | 一月一次 | $\approx 2.6130$ |
    | 一日一次 | $\approx 2.7146$ |
    | 实时结算（$n \to \infty$） | $e \approx 2.71828$ |

    我们有 $e := \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n$. 由于我们尚未涉及到微积分，我们用欧拉公式来定义 $e^{i\theta}$.

---

**Définition 2.15 — 欧拉公式**

对任意 $\theta \in \mathbb{R}$，我们定义 $e^{i\theta} := \cos \theta + i \sin \theta$. 对任意 $z = x + iy \in \mathbb{C}$，我们定义 $e^z = e^{x+iy} := e^x \cdot e^{iy}$. 所以我们定义了一个映射 $\mathbb{C} \to \mathbb{C}, z \mapsto e^z$.

!!! tip "Remarque 2.16"
    (i) $f: \mathbb{C} \to \mathbb{C}, z \mapsto e^z$ 是 $g: \mathbb{R} \to \mathbb{R}, x \mapsto e^x$ 的"延拓"，即对任意 $x \in \mathbb{R}$，有 $f(x) = g(x)$.

    (ii) 对任意 $z \in \mathbb{C}$，$e^z \neq 0$.

!!! info "Mathshell 2.17（选读）"
    （$e^z$ 的另一种定义）对任意 $z \in \mathbb{C}$，我们定义 $e^z := \lim_{n \to \infty} \left(1 + \frac{z}{n}\right)^n$. 可以证明对任意 $z \in \mathbb{C}$，这个极限存在且有限。我们下面证明欧拉公式：$e^{i\theta} = \cos \theta + i \sin \theta, \forall \theta \in \mathbb{R}$.

    **证明：** 固定 $\theta \in \mathbb{R}$，记 $w_n = 1 + \frac{i\theta}{n}$. 将 $w_n$ 写成极坐标形式：

    $$w_n = \sqrt{1 + \frac{\theta^2}{n^2}}\,(\cos \varphi_n + i \sin \varphi_n), \quad \varphi_n = \arctan \frac{\theta}{n}.$$

    于是

    $$w_n^n = \left(1 + \frac{\theta^2}{n^2}\right)^{n/2} (\cos(n\varphi_n) + i \sin(n\varphi_n)).$$

    - **模长极限：** $\lim_{n \to \infty} \left(1 + \frac{\theta^2}{n^2}\right)^{n/2} = \lim_{n \to \infty} \left[\left(1 + \frac{\theta^2}{n^2}\right)^{n^2/\theta^2}\right]^{\theta^2/(2n)} = e^0 = 1$.
    - **辐角极限：** 当 $n \to \infty$ 时，$\arctan \frac{\theta}{n} \sim \frac{\theta}{n}$，故 $\lim_{n \to \infty} n\varphi_n = \lim_{n \to \infty} \left(n \arctan \frac{\theta}{n}\right) = \theta$. 由 $\cos, \sin$ 的连续性得 $\cos(n\varphi_n) \to \cos \theta$, $\sin(n\varphi_n) \to \sin \theta$.
    - **合并结果：** 把模与幅角代回极限：$e^{i\theta} = \lim_{n \to \infty} w_n^n = 1 \cdot (\cos \theta + i \sin \theta) = \cos \theta + i \sin \theta$.

---

### 2.3 复数的表示方法

利用模和辐角，我们可以得到复数更强大的表示形式。

!!! success "Remarque 2.18 — 四种表示形式与相互转换"

    设复数 $z$ 对应复平面上的点，模长 $r \geq 0$，辐角 $\theta \in \mathbb{R}$。

    - **(代数形式)** $z = x + iy$（$x, y \in \mathbb{R}$）
    - **(几何形式)** $z = (x, y)$ 复平面上的向量
    - **(三角形式)** $z = r(\cos \theta + i \sin \theta)$, $r = \lvert z\rvert = \sqrt{x^2 + y^2}$, $\tan \theta = y/x$
    - **(指数形式)** $z = r e^{i\theta}$

    **相互转换：** $\begin{cases} x = r \cos \theta, \\ y = r \sin \theta; \end{cases}$ $\begin{cases} r = \sqrt{x^2 + y^2}, \\ \theta = \arg z. \end{cases}$

    **运算优势：** 加减法用代数形式最简；乘除法、乘方、开方用指数形式最简。

!!! tip "Remarque 2.19"
    $r_1 e^{i\theta_1} = r_2 e^{i\theta_2} \iff r_1 = r_2,\; \theta_1 - \theta_2 \in 2\pi\mathbb{Z}$.

!!! question "Exemple 2.20"
    将 $z = 1 + i$ 化为三角形式和指数形式。

??? note "证明"
    $r = \lvert 1 + i\rvert = \sqrt{1^2 + 1^2} = \sqrt{2}$，$\theta = \arg(1 + i) = \arctan(1) = \frac{\pi}{4}$.

    三角形式：$z = \sqrt{2}\left(\cos \frac{\pi}{4} + i \sin \frac{\pi}{4}\right)$. 指数形式：$z = \sqrt{2} e^{i\pi/4}$.

---

!!! success "Proposition 2.21 — 指数形式下的运算"

    设 $z = re^{i\theta}, z_1 = r_1 e^{i\theta_1}, z_2 = r_2 e^{i\theta_2} \in \mathbb{C}$。

    | # | 运算 | 公式 |
    |---|------|------|
    | (i) | 共轭 | $\overline{z} = re^{-i\theta}$ |
    | (ii) | 乘法 | $z_1 z_2 = (r_1 r_2) e^{i(\theta_1 + \theta_2)}$（模相乘，辐角相加） |
    | (iii) | 除法 | $\frac{z_1}{z_2} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}$（模相除，辐角相减） |
    | (iv) | De Moivre | $z^n = r^n(\cos n\theta + i \sin n\theta)$ |
    | (v) | 开方 | $z^{1/n} = r^{1/n} e^{i(\theta + 2k\pi)/n}, k = 0, 1, \ldots, n-1$（$n$ 个不同值） |

??? note "证明"

    **(i)** $\overline{z} = \overline{re^{i\theta}} = r(\cos \theta - i \sin \theta) = re^{-i\theta}$.

    **(ii)** $z_1 z_2 = r_1 e^{i\theta_1} r_2 e^{i\theta_2} = (r_1 r_2) e^{i(\theta_1 + \theta_2)}$.

    **(iii)** $\frac{z_1}{z_2} = \frac{r_1 e^{i\theta_1}}{r_2 e^{i\theta_2}} = \frac{r_1}{r_2} e^{i(\theta_1 - \theta_2)}, r_2 \neq 0$.

    **(iv)** 对 $n \in \mathbb{Z}$，$z^n = (re^{i\theta})^n = r^n e^{in\theta} = r^n(\cos n\theta + i \sin n\theta)$. 当 $r = 1$ 时即经典的 De Moivre 公式。

    **(v)** 对正整数 $n$，解 $w^n = z$。设 $w = \rho e^{i\phi}$，则 $\rho^n e^{in\phi} = re^{i\theta}$。由此 $\rho = r^{1/n}$, $n\phi = \theta + 2k\pi, k = 0, 1, \ldots, n-1$. 故 $\sqrt[n]{z} = r^{1/n} \exp\left(i\frac{\theta + 2k\pi}{n}\right)$. 共 $n$ 个根，模均为 $r^{1/n}$，辐角等差 $2\pi/n$.

!!! warning "Remarque 2.22"
    注意 $z^{1/n}$ 表示 $x^n = z$ 的解。

!!! question "Exercise 2.23"
    设 $z_1, z_2 \in \mathbb{C}$，证明：$e^{z_1 + z_2} = e^{z_1} \cdot e^{z_2}$.

---

!!! question "Exemple 2.24"
    将 $z = (-3 + \sqrt{3}i)^{19}$ 化为三角形式和指数形式。

??? note "证明"
    $(-3 + \sqrt{3}i) = 2\sqrt{3} \cdot \left(-\frac{\sqrt{3}}{2} + \frac{1}{2}i\right) = 2\sqrt{3} e^{-\frac{\pi}{6}i}$.

    指数形式：$z = \left(2\sqrt{3} e^{-\frac{\pi}{6}i}\right)^{19} = (2\sqrt{3})^{19} \cdot e^{-\frac{19\pi}{6}i} = (2\sqrt{3})^{19} \cdot e^{\frac{5\pi}{6}i}$.

    三角形式：$z = (2\sqrt{3})^{19} \cdot \left(\cos \frac{5\pi}{6} + i \sin \frac{5\pi}{6}\right)$.

---

### 2.4 复数的应用

利用欧拉公式，我们可以解决大部分三角函数的算术问题。由欧拉公式，我们有

$$\cos(\theta) = \RE(e^{i\theta}) = \frac{e^{i\theta} + e^{-i\theta}}{2}, \quad \sin(\theta) = \IM(e^{i\theta}) = \frac{e^{i\theta} - e^{-i\theta}}{2i}.$$

（注：PDF 原文误写为 $\cos(\theta) = \IM(e^{i\theta})$，此处已修正）

!!! question "Exemple 2.25"
    令 $\theta \in \mathbb{R} \setminus 2\pi\mathbb{Z}$，$n \in \mathbb{N}_{\geq 1}$。求：

    (1) $\sum_{k=0}^{n} \cos(k\theta)$，(2) $\sum_{k=0}^{n} \sin(k\theta)$.

??? note "证明"
    我们只求第一个式子：

    $$\begin{aligned}
    \sum_{k=0}^{n} \cos(k\theta) &= \sum_{k=0}^{n} \RE(e^{ik\theta})
    = \RE\left(\sum_{k=0}^{n} e^{ik\theta}\right)
    = \RE\left(\frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}}\right) \\
    &= \RE\left(\frac{(1 - e^{-i\theta})(1 - e^{i(n+1)\theta})}{(1 - e^{-i\theta})(1 - e^{i\theta})}\right)
    = \RE\left(\frac{1 - e^{-i\theta} + e^{in\theta} - e^{i(n+1)\theta}}{2 - 2\cos\theta}\right) \\
    &= \frac{1 - \cos\theta + \cos n\theta - \cos(n+1)\theta}{2 - 2\cos\theta}.
    \end{aligned}$$

!!! tip "Remarque 2.26"
    对于复数域上的等比数列 $a, aq, aq^2, \ldots (q \neq 1)$，我们也有求和公式 $\sum_{k=0}^{n} aq^k = \frac{a(1 - q^{n+1})}{1 - q}$. 我们将在数列的部分证明。

!!! question "Exemple 2.27 — $n$ 次单位根"

    方程 $z^n = 1$ 的解称为 **$n$ 次单位根**：

    $$z_k = e^{2\pi i k / n} = \cos\left(\frac{2\pi k}{n}\right) + i \sin\left(\frac{2\pi k}{n}\right), \quad k = 0, 1, \ldots, n-1.$$

    （见 Proposition 2.21）在复平面上，它们位于单位圆上，并将圆 $n$ 等分。

!!! info "Remarque 2.28"
    代数基本定理说 $n$ 次方程有 $n$ 个复数根，但一般的 $n$ 次方程的解并不能用方程的系数利用四则运算和开方得到（Abel, Galois）。

!!! question "Exercise 2.29"
    设 $\omega_1, \ldots, \omega_n$ 为 $n$ 次单位根，证明 $\omega_1 + \cdots + \omega_n = 0$.

!!! question "Exemple 2.30"
    求解方程 $z^3 - 3z^2 + 3z - 28 = 0$.

??? note "证明"
    注意到原方程可转化为 $\left(\frac{z-1}{3}\right)^3 = 1$. 则 $\frac{z-1}{3}$ 为 $3$ 次单位根：

    $$\frac{z-1}{3} = e^{2\pi i k / 3}, \quad k = 0, 1, 2,$$

    即 $z = 4,\; 1 + 3e^{2\pi i/3},\; 1 + 3e^{4\pi i/3}$. 从而可知

    $$z_1 = 4, \quad z_2 = \frac{1}{2} + \frac{3\sqrt{3}}{3}i, \quad z_3 = \frac{1}{2} - \frac{3\sqrt{3}}{3}i$$

    为方程的三个根。

!!! question "Exercise 2.31"
    求解方程 $z^6 + (3z - 1)^6 = 0$.

---

## 核心公式速查表

| 类别 | 公式 |
|------|------|
| 毕达哥拉斯恒等式 | $\sin^2\theta + \cos^2\theta = 1$，$1 + \tan^2\theta = \sec^2\theta$ |
| 和差角 | $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$ |
| 和差化积 | $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$ |
| 万能变换 | $t = \tan\frac{\alpha}{2}$，$\sin\alpha = \frac{2t}{1+t^2}$，$\cos\alpha = \frac{1-t^2}{1+t^2}$ |
| 辅助角 | $a\sin\theta + b\cos\theta = \sqrt{a^2+b^2}\sin(\theta + \arctan\frac{b}{a})$ |
| 欧拉公式 | $e^{i\theta} = \cos\theta + i\sin\theta$ |
| De Moivre | $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$ |
| $n$ 次单位根 | $z_k = e^{2\pi i k / n}, \; k = 0, 1, \ldots, n-1$ |
| 复数模运算 | $\lvert z_1 z_2\rvert = \lvert z_1\rvert\lvert z_2\rvert$，$\lvert z_1 + z_2\rvert \leq \lvert z_1\rvert + \lvert z_2\rvert$ |
| $\cos$/$\sin$ 指数表示 | $\cos\theta = \frac{e^{i\theta}+e^{-i\theta}}{2}$，$\sin\theta = \frac{e^{i\theta}-e^{-i\theta}}{2i}$ |
