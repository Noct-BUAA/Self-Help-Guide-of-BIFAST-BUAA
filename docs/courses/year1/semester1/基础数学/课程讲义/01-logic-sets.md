---
title: 第一章 逻辑与集合
comments: true
---

# 第一章 逻辑与集合

!!! info "📄 课件下载"
    点击下方链接下载本课程讲义 PDF 原件：
    
    <a href="https://cdn.jsdelivr.net/gh/Noct-BUAA/Self-Help-Guide-of-BIFAST-BUAA@assets/01-logic-sets.pdf">📥 下载讲义 PDF（1.0 MB）</a>

!!! abstract "学习目标"

    **逻辑部分：**

    - （逻辑）命题的定义
    - 逻辑联结词（命题的运算）：$\lnot$（否定）$\lor$（析取）$\land$（合取）$\Rightarrow$（蕴含）$\Leftrightarrow$（等价）
    - 命题公式（或命题形式）的定义
    - 指派、真值表，用真值表解决证明逻辑等价（De Morgan 律、重要等价等）、解决逻辑问题

## 1 逻辑

!!! question "Exercise 1.1"

    你正在一个迷宫中行走，突然发现自己面前有三条可能的道路：左边的道路铺着黄金，前方的道路铺着大理石，而右边的道路则由小石子铺成。每条道路都有一名守护者保护。你与守护者们交谈，他们告诉你如下信息：

    - 黄金道路的守护者："这条路会直接带你到达中心。此外，如果石子路能带你到达中心，那么大理石路也能带你到达中心。"
    - 大理石道路的守护者："黄金路和石子路都不会带你到达中心。"
    - 石子道路的守护者："走黄金路你就能到达中心，走大理石路你就会迷路。"

    如果你知道所有守护者都在说谎，你能选择一条确信会带你到达迷宫中心的道路吗？如果可以，你会选择哪条路？为什么？

### 1.1 命题的定义

!!! success "Definition 1.2: 命题（Proposition）、真值"

    一个（逻辑）命题是可判断真假的陈述句。

    如果一个命题 $P$ 是真的（resp. 假的），我们称 $P$ 的真值为 $1$ （resp. $0$）。

!!! question "Exemple 1.3"

    (1) $1 + 1 = 2$

    (2) 对任意的 $n \in \mathbb{N}$，$n^2 + n + 41$ 是一个素数。

    (3) （欧拉猜想）丢番图方程 $a^4 + b^4 + c^4 = d^4$ 没有整数解。

    （N. Elkies，1986）$2682440^4 + 15365639^4 + 18796760^4 = 20615673^4$

    （R. Frye，1988）$95800^4 + 217519^4 + 414560^4 = 422481^4$

    (4) （$1 + 1$）每个不小于 6 的偶数是两个奇素数的和。

    (5) $1 + 1$ 是否等于 $2$？

    (6) 上课不许迟到！

!!! success "Definition 1.4"

    我们给出下列不同名字的数学结果的定义。

    - **公理** (axiom, axiome) 是假定正确的（逻辑）命题。
    - **命题** (proposition, proposition) 是被证明是正确的（逻辑）命题。（逻辑意义上的正确的命题）
    - **定理** (theorem, théorème) 是重要的命题。
    - **引理** (lemma, lemme) 是不很重要的命题，通常需要技巧性，但是在证明其他定理中需要用到。
    - **推论** (corollary, corollaire) 是能够立即从其他命题得到的命题。
    - 数学对象的**性质** (properties, propriétés) 是关于这个数学对象的命题。
    - **猜想** (conjecture, conjecture) 是还未被证明，但数学家认为是对的（逻辑）命题。

!!! info "Mathshell 1.5"

    - **欧式几何：** 三角形内角和 $= 180^\circ$（平面）
    - **黎曼几何：** 三角形内角和 $> 180^\circ$（球面）
    - **罗巴切夫斯基几何：** 三角形内角和 $< 180^\circ$（马鞍面）

    直线？角度？

### 1.2 逻辑联结词

!!! success "Definition 1.6: 合取（Conjunction）"

    令 $P, Q$ 为命题。我们用下列表格（**真值表**）定义命题 "$P$ 且 $Q$" （或 "$P$、$Q$ 合取式"），记为 $P \land Q$：

    | $P$ | $Q$ | $P \land Q$ |
    |:---:|:---:|:-----------:|
    |  1  |  1  |      1      |
    |  1  |  0  |      0      |
    |  0  |  1  |      0      |
    |  0  |  0  |      0      |

!!! success "Definition 1.7: 析取（Disjunction）"

    令 $P, Q$ 为命题。我们用下列表格（**真值表**）定义命题 "$P$ 或 $Q$" （或 "$P$、$Q$ 析取式"），记为 $P \lor Q$：

    | $P$ | $Q$ | $P \lor Q$ |
    |:---:|:---:|:----------:|
    |  1  |  1  |     1      |
    |  1  |  0  |     1      |
    |  0  |  1  |     1      |
    |  0  |  0  |     0      |

!!! success "Definition 1.8: 非（Negation）"

    设 $P$ 为一个命题。语句 $\lnot P$ 读作"非 $P$"，它的真值由如下表格（**真值表**）决定：

    | $P$ | $\lnot P$ |
    |:---:|:---------:|
    |  1  |     0     |
    |  0  |     1     |

!!! success "Definition 1.9: 蕴含（Implication）"

    设 $P, Q$ 为命题。蕴含（命题）$P \Rightarrow Q$（视为符号）读作"$P$ 蕴含 $Q$"（或"若 $P$，则 $Q$"），它的真值由如下表格（**真值表**）决定：

    | $P$ | $Q$ | $P \Rightarrow Q$ |
    |:---:|:---:|:----------------:|
    |  1  |  1  |        1         |
    |  1  |  0  |        0         |
    |  0  |  1  |        1         |
    |  0  |  0  |        1         |

!!! success "Definition 1.10: 等价（Equivalence, Équivalence）"

    设 $P, Q$ 为命题。等价（命题）$P \Leftrightarrow Q$（视为符号）读作"$P$ 当且仅当 $Q$"，它的真值由如下表格（**真值表**）决定：

    | $P$ | $Q$ | $P \Leftrightarrow Q$ |
    |:---:|:---:|:---------------------:|
    |  1  |  1  |           1           |
    |  1  |  0  |           0           |
    |  0  |  1  |           0           |
    |  0  |  0  |           1           |

    自然语言的歧义性（需要用定义去理解，不能简单地用自然语言对应）。

!!! question "Exemple 1.11"

    将下列命题符号化：

    (1) 铁和氧化合，但铁和氮不化合。

    (2) 如果我下班早，就会去商店看看，除非我很累。

    (3) A 是数学系的学生，他住在 312 室或者 313 室。

    ??? note "解"

        (1) 令
            - $P$：铁和氧化合。
            - $Q$：铁和氮不化合。

        则命题的符号化为：

        $$P \land Q.$$

        (2) 令
            - $P$：我下班早。
            - $Q$：我去商店看看。
            - $R$：我很累。

        则命题的符号化为：

        $$(P \land \lnot R) \Rightarrow Q.$$

        (3) 令
            - $P$：A 是数学系的学生。
            - $Q$：A 住在 312 室。
            - $R$：A 住在 313 室。

        则命题的符号化为：

        $$P \land ((Q \land \lnot R) \lor (\lnot Q \land R)).$$

!!! question "Exemple 1.12"

    (1) 我们考虑下列命题：

    - $P$ : 我付给他 50 元；
    - $Q$ : 他给我一个蛋糕。

    考虑 $P \Rightarrow Q$。我们只考虑命题正不正确（是否发生），而不是很不合理。例如

    (i) 我没有付给他 50 元，但他给了我蛋糕，那么 $P \Rightarrow Q$ 是正确的，因为 $Q$ 发生了，尽管它在现实中没有道理。

    (2) 我们考虑下列命题：

    - $P$ : $2 + 2 = 3$；
    - $Q$ : 今天是晴天。

    考虑 $P \Rightarrow Q$。命题 $P \Rightarrow Q$ 是正确的，尽管我们有一个多余的错误条件，但是我们不用它来得到 $Q$。

### 1.3 命题公式（Proposition Formula）

给定两个命题 $P, Q$，利用真值表，我们定义了"$\lnot P$"、"$P \land Q$" 和 "$P \lor Q$"。另外，我们也定义了 "$P \Rightarrow Q$" 和 "$P \Leftrightarrow Q$"。可以证明后两个逻辑运算可以用前三个表示。

注意到，在逻辑学里，我们只在意命题是否正确，而不在意它们具体表达的意思。我们可以把它们看成值为 0 或 1。例如，我们考虑命题：

- $P$ : "今天下雨"，

$(\lnot P) = \lnot$("今天下雨") $\Leftrightarrow$ 1 $\Leftrightarrow$ ("今天不下雨").

当 $P, Q$ 是命题变元而非命题，上述运算也可以定义在 $P, Q$ 上，从而得到"函数"。

类似于算术，一个命题可以类比看成 $\mathbb{Q}$ （或 $\mathbb{R}$）上的值，上述运算可以类比于 $\mathbb{Q}$ （或 $\mathbb{R}$）上的四则运算。在算术或代数中，我们有变元 "$x, y, \cdots$" 以及公式 "$x + y$", "$x \cdot y$" 等。前者就是命题变元，后者就是我们将介绍的命题公式。

| 算术 | 逻辑 |
|:---:|:---:|
| 值 | $0, 1, \frac{1}{2}, 0.5, -54.3, \cdots$ | "$2+1=4$" "今天下雨" |
| 值的相等 | $\frac{1}{2} = 0.5$ | "$2+1=3$" $\equiv$ "一天有 24 小时" |
| 值的集合 | $\mathbb{Q}$ (或 $\mathbb{R}$) | $\{0, 1\}$ |
| 变元 | $x, y, \cdots$ | $P, Q, \cdots$ |
| 公式 | "$x+y$", "$\dfrac{x \cdot y}{z}$", $\cdots$ | "$P \land Q$", "$\lnot(P \Rightarrow Q)$", $\cdots$ |

!!! success "Definition 1.13"

    一个**命题公式**（或公式）是满足下列条件的符号串：

    (1) 真值 $0, 1$ (或命题) 是公式；

    (2) 命题变元 $P, Q, \cdots$ 是公式；

    (3) 如果 $A$ 是公式，那么 $\lnot A$ 也是公式；

    (4) 如果 $A, B$ 是公式，那么 $(A \land B)$、$(A \lor B)$、$(A \Rightarrow B)$、$(A \Leftrightarrow B)$ 也是公式；

    (5) 只有有限次应用 (1)--(4) 构成的符号串才是命题公式。

!!! tip "Remarque 1.14"

    为了书写方便，我们会省掉最外层的括号以及 $(\lnot A)$ 的括号，并规定 $\lnot$ 的运算优先级高于其他。

!!! question "Exemple 1.15"

    - $P Q \Rightarrow$、$P \lnot Q$、$P \land (\lnot Q)$、$(P \land (\lnot Q))$、$P \Rightarrow Q \Rightarrow R$

!!! tip "Remarque 1.16"

    正如我们上述所说，一个含有 $n$ 个命题变元 $P_1, \ldots, P_n$ 的命题公式 $A$ 给出了一个函数

    $$\{0, 1\}^n \to \{0, 1\}.$$

!!! success "Definition 1.17"

    设 $A$ 为含有命题变元 $P_1, \ldots, P_n$ 的公式，给 $P_1, \ldots, P_n$ 指定一组真值，称为对 $A$ 的一个**赋值**（或**真值指派**）。

    公式 $A$ 在一切可能的赋值下取得的值列成表，该表称为 $A$ 的**真值表**。

!!! success "Definition 1.18"

    令 $A$ 是一个命题公式。

    - 若 $A$ 在任何一个赋值下的值都是真的，则称 $A$ 为**重言式**（或**永真式**）；
    - 若 $A$ 在任何一个赋值下的值都是假的，则称 $A$ 为**矛盾式**（或**永假式**）；
    - 若 $A$ 至少有一个赋值使其值为真，则称 $A$ 为**可满足式**。

!!! question "Exemple 1.19: 反证法（Proof by contradiction, Raisonnement par l'absurde）"

    设 $A$ 为一个命题公式，则公式 $(((\lnot A) \Rightarrow 0) \Rightarrow A)$ 是一个重言式。

    | $A$ | $\lnot A$ | $((\lnot A) \Rightarrow 0)$ | $((\lnot A) \Rightarrow 0) \Rightarrow A$ |
    |:---:|:---------:|:--------------------------:|:----------------------------------------:|
    |  1  |     0     |             1              |                    1                     |
    |  0  |     1     |             0              |                    1                     |

!!! success "Definition 1.20"

    设 $A, B$ 为命题公式。如果 $A \Leftrightarrow B$ 是一个重言式，则称 $A$ 与 $B$ **（逻辑）等价**，记作 $A \equiv B$。

!!! tip "Remarque 1.21"

    两个命题公式 $A, B$ 等价当且仅当它们具有相同的真值表。

!!! question "Exemple 1.22"

    设 $P, Q$ 为命题公式。则有：

    (i) $(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P)$;

    (ii) $\lnot P \land P \equiv 0$, $\lnot P \lor P \equiv 1$.

!!! success "Proposition 1.23: 逻辑定律"

    设 $P, Q, R$ 为命题公式。我们下列命题成立。

    - **（结合律）**

    $$((P \lor Q) \lor R) \equiv (P \lor (Q \lor R)),$$

    $$((P \land Q) \land R) \equiv (P \land (Q \land R)).$$

    - **（分配律）**

    $$((P \lor Q) \land R) \equiv ((P \land R) \lor (Q \land R)),$$

    $$((P \land Q) \lor R) \equiv ((P \lor R) \land (Q \lor R)).$$

    - **（De Morgan 律）**

    $$\lnot(P \lor Q) \equiv (\lnot P \land \lnot Q),$$

    $$\lnot(P \land Q) \equiv (\lnot P \lor \lnot Q).$$

    - **（逆否命题）**

    $$(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P).$$

    - **（"$\Rightarrow$" 传递性）**

    $$(P \Rightarrow Q) \land (Q \Rightarrow R) \Rightarrow (P \Rightarrow R)$$

    是重言式 ($\equiv 1$)。

    - **（等价）**

    $$(P \Leftrightarrow Q) \equiv ((P \Rightarrow Q) \land (Q \Rightarrow P)).$$

    - **（反证法）**

    $$(\lnot P \Rightarrow 0) \Rightarrow P$$

    是重言式 ($\equiv 1$)。

    - **（"$\Rightarrow$" 分配律）**

    $$((P \lor Q) \Rightarrow R) \Rightarrow ((P \Rightarrow R) \lor (Q \Rightarrow R))$$

    是重言式 ($\equiv 1$)。

    - **"重要"**

    $$\lnot(P \Rightarrow Q) \equiv (P \land \lnot Q).$$

!!! abstract "学习目标"

    **集合部分：**

    - 集合的定义和表示方法，证明两个集合相等的思路
    - 集合的运算：$\cap$（交集）$\cup$（并集）$\setminus$（差集）$(\cdot)^c$（补集）
    - 基本运算定律与证明思路
    - 笛卡尔积
    - 逻辑谓词及其否定

## 2 集合

!!! question "Exercise 2.1"

    设想一位逻辑学家在你面前桌上放了四张卡片。每张卡片一面是数字，另一面是字母。朝上的那一面分别是 A、C、4、5。他断言："如果一张卡片的一面是元音字母，那么另一面是偶数。" 若逻辑学家的断言成立，你至少需要翻开几张卡片来验证他的断言成立？翻哪几张？为什么？

### 2.1 集合的定义

集合论是现代数学的基础，它几乎与现代数学的每个分支均有联系。集合论的内容十分丰富，这里只概况介绍经典的集合论。

!!! success "Definition 2.2: 集合（Set, Ensemble）"

    - 考查对象的全体称为**集合**。其中每个对象称为集合的**元素**。通常用大写英文字母表示集合，如：$A$、$B$、$X$ 等；用小写字母表示元素，如：$a$、$b$、$x$ 等。
    - 一个集合 $A$ 的元素个数称为 $A$ 的**基数**，记为 $\lvert A\rvert$ （或 $\#A$）。
    - 令 $A$ 是一个集合，$a$ 是一个对象。我们用 $a \in A$ 来表示 $a$ 是 $A$ 中的元素；用 $a \notin A$ 来表示 $a$ 不是 $A$ 中的元素。

!!! info "Mathshell 2.3: ZFC 公理集合论（Wikipedia）"

    我们的定义是直观的经典定义，而非严格的数学定义。这个定义在 20 世纪初发生改变，这一时期，集合论被严格定义。

    集合论中其中一套由 Skolem 最后整理的公理系统（模型论），称为 **Zermelo-Fraenkel 集合论（ZF）**。实际上，这个名称通常不包括历史上远比今天具争议性的选择公理，当包括了选择公理，这套系统被称为 **ZFC**。

    - **外延公理（Axiom of extensionality）：** 令 $A, B$ 为两个集合。那么 $A = B$ 当且仅当对任意的 $x \in A$，我们有 $x \in B$；对任意 $y \in B$，我们有 $y \in A$。
    - **分类公理（Axiom schema of specification）：** 给出任何集合及命题 $P(x)$，存在一个集合，其元素为原来集合中所有使 $P(x)$ 成立的元素。
    - **配对公理（Axiom of pairing）：** 对任意集合 $x, y$，存在集合 $\{x, y\}$ 其仅有元素为 $x$ 与 $y$。
    - **并集公理（Axiom of union）：** 每一个集合有一个并集。即对任意集合 $x$，存在集合 $y$，其元素正是 $x$ 的元素的元素。（主要用于得到并集）
    - **空集公理：** 存在着一个没有任何元素的集合，我们记这个空集合为 $\varnothing$。可由分类公理得出。
    - **无穷公理（Axiom of infinity）：** 存在着一个集合 $x$，空集 $\varnothing$ 为其元素之一，且对于任何 $x$ 中的元素 $y$，$y \cup \{y\}$ 也是 $x$ 的元素。
    - **替代公理（Axiom schema of replacement）：** 一个集合在一个映射（泛函谓词）下的像也是一个集合。
    - **幂集公理（Axiom of power set）：** 每一个集合有其幂集。即对于任何集合 $x$，存在一个集合 $y$，其元素是 $x$ 的所有子集。
    - **正规公理（Axiom of regularity）：** 每一个非空集合 $x$，总有一元素 $y$ 与 $x$ 不相交。
    - **选择公理（Axiom of choice）：** 给出一个集合 $x$，其元素皆为互不相交的非空集，那总存在着一个集合 $y$（$x$ 的一个选择集合），$x$ 的每一个元素都有且仅有一个元素属于 $y$。

    所以，ZFC 集合公理中的集合是什么？只是元素，或者说符号（模型论 $\mathcal{V} = (V, \in)$）。ZFC 只通过公理告诉我们"集合能做什么"，而不回答"集合是什么"。

    由于外延公理，一般我们会要求集合中的元素两两互异（$\{1, 1\} = \{1\}$）。

!!! tip "Remarque 2.4"

    集合通常有两种表示方法：**枚举法**（列举法）和**描述法**。

    - **枚举法：**
    - 有限集合：$S = \{a_1, \ldots, a_n\}$，$\varnothing = \{\}$.
    - 无限集合（可列集）：

        $$\mathbb{Z} := \{0, 1, -1, 2, -2, \ldots\},$$

        $$\mathbb{N} := \{0, 1, 2, 3, \ldots\}.$$

        对任意 $k \in \mathbb{N}$，我们一般记

        $$\mathbb{N}_{\ge k} := \{k, k+1, k+2, \ldots\} = \mathbb{N}_{> (k-1)}.$$

        我们也记 $\mathbb{N}_+ := \mathbb{N}_{\ge 1}$.

    - **描述法：** $E := \{x \mid x \text{ 具有性质 } P\}$。例如

        $$\mathbb{Q} := \left\{ \frac{q}{p} \;\middle|\; p \in \mathbb{N}_{\ge 1}, q \in \mathbb{Z}, \gcd(p, q) = 1 \right\},$$

        $$\mathbb{R} := \{x \mid x \text{ 是有理数或 } x \text{ 是无理数}\},$$

        $$\varnothing = \{x \in \mathbb{R} \mid x^2 + 1 = 0\}.$$

        需要注意的是，上述 $\mathbb{R}$ 的定义（高中）是不严谨的（先有无理数还是实数？），其中一个严格的定义是下述《分析 I》的内容（目前不需要掌握）：

        $$\mathbb{R} := \{(a_n)_{n \in \mathbb{N}_{\ge 1}} \mid a_n \in \mathbb{Q}, (a_n)_{n \in \mathbb{N}_{\ge 1}} \text{ 是柯西列}\} / {\sim}$$

        其中 $\sim$ 为柯西列上的等价关系。

!!! info "Mathshell 2.5"

    如果一个集合 $S$ 能与自然数集 $\mathbb{N}$ 建立一一对应，称 $S$ 是**可列集**（**可数集**）。例如整数、有理数都是可数集；其元素可排成无限序列，但实数集不可列。

    康托 1874 年写信给戴德金，用对角线法证明 $\lvert \mathbb{R} \rvert = \lvert \mathcal{P}(\mathbb{Z}) \rvert$，说明了"直线上的点比自然数多"，这颠覆"无穷即无穷"的直觉。在 1877 年，他还证明了对任意 $n \in \mathbb{N}_+$，$\lvert \mathbb{R} \rvert = \lvert \mathbb{R}^n \rvert$。他感叹："我看到了它，却不敢相信！"（"Ich sehe es, aber ich glaube es nicht!"）。随后他提出"**连续统假设**"猜想：是否有介于 $\lvert \mathbb{Z} \rvert$ 和 $\lvert \mathbb{R} \rvert$ 的基数？（连续统假设，希尔伯特 23 个问题的第一个问题，由哥德尔 (1940) 与科恩 (1963) 完整解决）。

    下列**罗素悖论**是集合论不得不公理化的主要原因。

!!! question "Exemple 2.6: 罗素悖论"

    令 $A$ 是所有集合的集合，

    $$B = \{x \in A \mid x \notin x\}.$$

    则 $B \in B \iff B \notin B$。

    ??? note "证明"

        只需证明左右命题相互蕴含。

    - 证明 $B \in B \Rightarrow B \notin B$。若 $B \in B$，则由 $B$ 的定义，我们有 $B \notin B$。
    - 证明 $B \notin B \Rightarrow B \in B$。若 $B \notin B$，则由 $B$ 的定义，我们有 $B \in B$。

!!! tip "Remarque 2.7"

    用罗素悖论的思路可以证明下列问题（第二章内容后再看）：

    令 $A$ 是一个非空集合。证明：任意的映射 $f : A \to \mathcal{P}(A)$ 不是双射。（$\mathcal{P}(A)$ 为 $A$ 的幂集）

!!! success "Théorème 2.8: 空集公理"

    $$\forall x\,(x \notin \varnothing)$$

    存在唯一一个没有元素的集合，用 $\varnothing$ 表示。

    ??? note "证明"
        （不要求掌握）

### 2.2 子集

!!! success "Definition 2.9: 子集（Subsets, Sous-ensemble）"

    令 $A, B$ 是两个集合。如果对任意 $x \in A$，都有 $x \in B$，则我们称 $A$ 是 $B$ 的一个**子集**（subset），记为 $A \subset B$。否则，我们记 $A \not\subset B$。

!!! tip "Remarque 2.10"

    由上述定义以及外延公理，对任意的两个集合 $A, B$，我们有 $A = B$ 当且仅当 $A \subset B$、$B \subset A$。这是我们证明两个集合相等的基本思路。

!!! question "Exemple 2.11"

    (1) 空集 $\varnothing$ 是任何集合的子集。（思考形式化证明，即从 $\forall x\,(x \notin \varnothing)$ 得到结论）

    (2) $\{1, 2, 3\} \subset \{1, 2, 3, 4\}$

!!! success "Proposition 2.12"

    集合的包含关系满足下列性质（**偏序关系**）：

    (1) （自反性）对任意的集合 $A$，我们有 $A \subset A$；

    (2) （反对称性）对任意的集合 $A, B$，如果 $A \subset B$，$B \subset A$，则 $A = B$；

    (3) （传递性）对任意的集合 $A, B, C$，如果 $A \subset B$ 且 $B \subset C$，则 $A \subset C$。

!!! success "Definition 2.13"

    令 $A$ 是一个集合。我们把 $A$ 的所有子集所组成的集合记为 $\mathcal{P}(A)$ （或 $2^A$）。

!!! question "Exemple 2.14"

    令 $A = \{1, 2, 3\}$。则我们有

    $$\mathcal{P}(A) = \{\varnothing, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{2, 3\}, \{1, 3\}, \{1, 2, 3\}\}.$$

### 2.3 集合的运算

!!! success "Definition 2.15"

    令 $A, B$ 是两个集合。

    - **交集** $A \cap B$：$x \in A \cap B$ 当且仅当 $x \in A$ 且 $x \in B$。
    - **并集** $A \cup B$：$x \in A \cup B$ 当且仅当 $x \in A$ 或 $x \in B$。
    - **差集** $A \setminus B := \{x \in A \mid x \notin B\}$。
    - **补集** $A^c$：这里 $A$ 是某个集合 $E$ 的子集，$A^c := \{x \in E \mid x \notin A\}$。

!!! tip "Remarque 2.16"

    差集的符号比补集更广，它不需要包含关系。

!!! success "Proposition 2.17: 基本运算定律"

    - **（交换律）** 对任意的集合 $A, B$，我们有

    $$A \cap B = B \cap A \quad \text{和} \quad A \cup B = B \cup A.$$

    - **（结合律）** 对任意的集合 $A, B, C$，我们有

    $$(A \cap B) \cap C = A \cap (B \cap C) \quad \text{和} \quad (A \cup B) \cup C = A \cup (B \cup C).$$

    - **（分配律）** 对任意的集合 $A, B, C$，我们有

    $$A \cap (B \cup C) = (A \cap B) \cup (A \cap C),$$

    $$A \cup (B \cap C) = (A \cup B) \cap (A \cup C).$$

    - **（De Morgan 律）** 对任意的集合 $E$，以及 $E$ 的子集 $A, B$，我们有

    $$(A \cap B)^c = A^c \cup B^c \quad \text{和} \quad (A \cup B)^c = A^c \cap B^c.$$

    - **（双补律）** 对任意的集合 $E$，以及 $E$ 的子集 $A$，我们有

    $$A \cup A^c = E \quad \text{和} \quad A \cap A^c = \varnothing.$$

    ??? note "证明"

        我们只证明（De Morgan 律）的第一个等式。令 $E$ 是一个集合，$A, B \subset E$。证明 $(A \cap B)^c = A^c \cup B^c$ 只需证明 $(A \cap B)^c \subset A^c \cup B^c$ 且 $(A \cap B)^c \supset A^c \cup B^c$。

    - 证明 $(A \cap B)^c \subset A^c \cup B^c$。令 $x \in (A \cap B)^c$，即 $x \in E$，但 $x \notin A \cap B$。所以 $x \notin A$ 或者 $x \notin B$，即 $x \in A^c$ 或 $x \in B^c$。由并集的定义，我们有 $x \in A^c \cup B^c$。上述过程对任意的 $x \in (A \cap B)^c$ 都成立，所以 $(A \cap B)^c \subset A^c \cup B^c$。

    - 证明 $A^c \cup B^c \subset (A \cap B)^c$。令 $x \in A^c \cup B^c$，则 $x \in A^c$ 或 $x \in B^c$。若 $x \in A^c$，即 $x \in E$ 但 $x \notin A$，则 $x \notin A \cap B$。所以 $x \in (A \cap B)^c$。类似地，若 $x \in B^c$，我们也有 $x \in (A \cap B)^c$。从而无论哪种情况，我们都有 $x \in (A \cap B)^c$。上述过程对任意的 $x \in A^c \cup B^c$ 都成立，所以 $A^c \cup B^c \subset (A \cap B)^c$。

        综上所述，我们有 $(A \cap B)^c = A^c \cup B^c$。

!!! success "Definition 2.18: 笛卡尔积"

    令 $A, B$ 是两个集合。我们定义 $A$ 和 $B$ 的**笛卡尔积**为

    $$A \times B := \{(x, y) \mid x \in A, y \in B\}.$$

### 2.4 谓词逻辑

!!! success "Definition 2.19"

    令 $P(x)$ 为一个依赖于集合 $E$ 中变量 $x$ 的命题。

    - 如果对于任意 $x \in E$，命题 $P(x)$ 都是真命题，则认为命题 "$\forall x \in E,\ P(x)$" 是真的。
    - 如果存在 $x \in E$ 使得命题 $P(x)$ 是真命题，则认为命题 "$\exists x \in E,\ P(x)$" 是真的。
    - 如果存在唯一的 $x \in E$ 使得命题 $P(x)$ 是真命题，则认为命题 "$\exists!\,x \in E,\ P(x)$" 是真的。

    我们称 $P(x)$ 为**谓词** (predicate)，称 $E$ 为谓词 $P(x)$ 的**体域** (domain of discourse)，称 "$\forall$" 为**全称量词**，称 "$\exists$" 为**存在量词**。

!!! tip "Remarque 2.20"

    容易看到，上述使用量词的命题的真值，首先应强调体域，"同一"命题在不同的体域可能有不同的真值。例如

    $$P(x): x \text{ 是偶数}.$$

    当 $E = \mathbb{N}$，命题 "$\forall x \in E,\ P(x)$" 是假命题，当 $E = \{2, 4, 6, 8\}$ 时，命题 "$\forall x \in E,\ P(x)$" 是真命题。

    当没有指出谓词的体域时，一般认为体域为一切事物构成的集合。

!!! question "Exemple 2.21"

    令 $E = \{\text{我们班的同学}\}$。对 $x \in E$，令

    - $P(x)$：$x$ 在期中考试及格。

    则下列命题用谓词逻辑表示为：

    (i) 我们班中，有人期中考不及格。

    $$\exists x \in E,\ \lnot P(x)$$

    (ii) 我们班中，只有一个人期中考不及格。

    $$\exists!\,x \in E,\ \lnot P(x)$$

    (iii) 我们班中，所有人期中考都及格。

    $$\forall x \in E,\ P(x)$$

!!! success "Proposition 2.22"

    令 $P(x)$ 为一个依赖于集合 $E$ 中变量 $x$ 的命题。则我们有

    - $\lnot\bigl(\forall x \in E,\ P(x)\bigr) \iff \bigl(\exists x \in E,\ \lnot P(x)\bigr)$；
    - $\lnot\bigl(\exists x \in E,\ P(x)\bigr) \iff \bigl(\forall x \in E,\ \lnot P(x)\bigr)$。

    ??? note "证明"

        我们只证明第一个等价。

    - 证明 $\lnot(\forall x \in E,\ P(x)) \Rightarrow (\exists x \in E,\ \lnot P(x))$。若 $\lnot(\forall x \in E,\ P(x))$ 是真命题（假命题的情况，显然有蕴含关系），即命题 $(\forall x \in E,\ P(x))$ 是假命题，那么我们可以找到 $x_0 \in E$ 使得 $x_0$ 不满足命题 $P(x_0)$，即满足 $\lnot P(x)$。根据定义，这说明了 $(\exists x \in E,\ \lnot P(x))$ 是真命题。

    - 证明 $(\exists x \in E,\ \lnot P(x)) \Rightarrow \lnot(\forall x \in E,\ P(x))$。若 $(\exists x \in E,\ \lnot P(x))$ 是真命题，根据定义，我们可以找到 $x_0 \in E$ 使得命题 $\lnot P(x_0)$ 成立，即命题 $P(x_0)$ 不成立。这说明 $(\forall x \in E,\ P(x))$ 是假命题，从而 $\lnot(\forall x \in E,\ P(x))$ 是真命题。

!!! question "Exemple 2.23"

    写出下列命题的**否命题**：

    - $\exists x \in \mathbb{R},\ \forall y \in \mathbb{R},\ x > y$.
    - $\forall x \in \mathbb{R},\ \forall y \in \mathbb{R},\ \bigl((x > y) \Rightarrow (x^2 > y^2)\bigr)$.

    ??? note "解"

    - $\lnot\bigl(\exists x \in \mathbb{R},\ \forall y \in \mathbb{R},\ x > y\bigr) \equiv \forall x \in \mathbb{R},\ \exists y \in \mathbb{R},\ x \le y$.
    - $\lnot\bigl(\forall x \in \mathbb{R},\ \forall y \in \mathbb{R},\ ((x > y) \Rightarrow (x^2 > y^2))\bigr) \equiv \exists x \in \mathbb{R},\ \exists y \in \mathbb{R},\ \bigl((x > y) \land (x^2 \le y^2)\bigr)$.

## 核心公式速查表

| 逻辑等价（Proposition 1.23） | 集合运算定律（Proposition 2.17） |
|:---|:---|
| $\lnot(P \lor Q) \equiv (\lnot P \land \lnot Q)$ | $(A \cap B)^c = A^c \cup B^c$ |
| $\lnot(P \land Q) \equiv (\lnot P \lor \lnot Q)$ | $(A \cup B)^c = A^c \cap B^c$ |
| $(P \Rightarrow Q) \equiv (\lnot Q \Rightarrow \lnot P)$ | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |
| $\lnot(P \Rightarrow Q) \equiv (P \land \lnot Q)$ | $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ |
| $(P \Leftrightarrow Q) \equiv ((P \Rightarrow Q) \land (Q \Rightarrow P))$ | $A \cup A^c = E,\quad A \cap A^c = \varnothing$ |
| **量词否定（Proposition 2.22）** | **笛卡尔积（Definition 2.18）** |
| $\lnot(\forall x \in E,\ P(x)) \iff (\exists x \in E,\ \lnot P(x))$ | $A \times B := \{(x, y) \mid x \in A,\ y \in B\}$ |
| $\lnot(\exists x \in E,\ P(x)) \iff (\forall x \in E,\ \lnot P(x))$ | $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$（有限集） |
