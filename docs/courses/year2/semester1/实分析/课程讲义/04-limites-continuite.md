---
title: 第 4 章 函数的极限与连续性
comments: true
---

# 第 4 章　函数的极限与连续性

<div class="lecture-hero">
<p class="lecture-hero__fr">Chapitre n°4 — Limites de fonctions et continuité</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Objectifs <span class="heading-zh">学习目标</span>

1. Calculer des limites de fonctions.

    计算函数的极限。
    {: .zh }

1. Étudier la continuité de fonctions.

    研究函数的连续性。
    {: .zh }

1. Utiliser la continuité.

    运用连续性。
    {: .zh }

## Notations <span class="heading-zh">记号</span>

Dans ce chapitre, on considère des fonctions réelles d'une variable réelle, c'est-à-dire des fonctions \(f\) définies sur une partie \(\mathscr{D} \subset \mathbb{R}\) qui à tout nombre réel \(x \in \mathscr{D}\) associent son image \(f(x) \in \mathbb{R}\). On note \(f : \mathscr{D} \to \mathbb{R}, x \mapsto f(x)\).

本章考虑实变量的实值函数（fonctions réelles d'une variable réelle），即定义在某个子集 \(\mathscr{D} \subset \mathbb{R}\) 上的函数 \(f\)，它把每个实数 \(x \in \mathscr{D}\) 对应到它的<strong>像</strong>（image）\(f(x) \in \mathbb{R}\)。记作 \(f : \mathscr{D} \to \mathbb{R},\ x \mapsto f(x)\)。
{: .zh }

On rappelle qu'on note \(\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}\) la <strong>droite réelle achevée</strong>.

回忆：记 \(\overline{\mathbb{R}} = \mathbb{R} \cup \{-\infty, +\infty\}\) 为<strong>扩充实直线</strong>（droite réelle achevée）。
{: .zh }

## 1　Limites de fonctions <span class="heading-zh">函数的极限</span>

!!! success "Définition 1.1 : limite en \(+\infty\)<br><span class='zh-title'>定义 1.1：\(+\infty\) 处的极限（limite en \(+\infty\)）</span>"

    Soit \(f : \mathscr{D} \to \mathbb{R}\) une fonction définie au <strong>voisinage</strong> de \(+\infty\), c'est-à-dire telle que :

    设 \(f : \mathscr{D} \to \mathbb{R}\) 是定义在 \(+\infty\) 的<strong>邻域</strong>（voisinage）上的函数，即满足：
    {: .zh }

    \[
    \exists b \in \mathbb{R},\ ]b, +\infty[\, \subset \mathscr{D}.
    \]

    - On dit que \(f(x)\) <strong>tend vers</strong> \(\ell \in \mathbb{R}\) <strong>quand</strong> \(x\) <strong>tend vers</strong> \(+\infty\) lorsque :

        若<strong>当</strong> \(x\) <strong>趋于</strong>（tendre vers）\(+\infty\) <strong>时</strong> \(f(x)\) <strong>趋于</strong> \(\ell \in \mathbb{R}\)，具体地说即：
        {: .zh }

        \[
        \forall \varepsilon > 0,\ \exists B \in \mathbb{R},\ \forall x \in \mathscr{D},\ x > B \implies |f(x) - \ell| < \varepsilon.
        \]

        Dans ce cas, \(\ell\) est unique. On l'appelle la <strong>limite</strong> de \(f(x)\) quand \(x \to +\infty\), et on note \(\lim\limits_{x\to+\infty} f(x) = \ell\).

        此时 \(\ell\) 唯一，称为 \(f(x)\) 当 \(x \to +\infty\) 时的<strong>极限</strong>（limite），并记 \(\lim\limits_{x\to+\infty} f(x) = \ell\)。
        {: .zh }

    - On dit que \(f(x)\) <strong>tend vers</strong> \(+\infty\) <strong>quand</strong> \(x\) <strong>tend vers</strong> \(+\infty\) lorsque :

        若<strong>当</strong> \(x\) <strong>趋于</strong> \(+\infty\) <strong>时</strong> \(f(x)\) <strong>趋于</strong> \(+\infty\)，具体地说即：
        {: .zh }

        \[
        \forall A \in \mathbb{R},\ \exists B \in \mathbb{R},\ \forall x \in \mathscr{D},\ x > B \implies f(x) > A.
        \]

        Dans ce cas, on note \(\lim\limits_{x\to+\infty} f(x) = +\infty\).

        此时记 \(\lim\limits_{x\to+\infty} f(x) = +\infty\)。
        {: .zh }

    - On dit que \(f(x)\) <strong>tend vers</strong> \(-\infty\) <strong>quand</strong> \(x\) <strong>tend vers</strong> \(+\infty\) lorsque \(\lim\limits_{x\to+\infty} -f(x) = +\infty\). Dans ce cas, on note \(\lim\limits_{x\to+\infty} f(x) = -\infty\).

        若当 \(x\) 趋于 \(+\infty\) 时 \(-f(x)\) 趋于 \(+\infty\)，则称当 \(x\) 趋于 \(+\infty\) 时 \(f(x)\) <strong>趋于</strong> \(-\infty\)。此时记 \(\lim\limits_{x\to+\infty} f(x) = -\infty\)。
        {: .zh }

    Dans chacun de ces trois cas, on dit que \(f\) <strong>admet une limite</strong> en \(+\infty\).

    以上三种情形都称 \(f\) 在 \(+\infty\) 处<strong>有极限</strong>（admettre une limite）。
    {: .zh }

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    On reconnaît une définition similaire à celles des limites de suites réelles. En particulier, on retrouve qu'en général, \(B\) dépend de \(\varepsilon\) ou de \(A\).

    可以看出，这与实数列极限的定义相似。特别地，一般说来 \(B\) 依赖于 \(\varepsilon\) 或 \(A\)。
    {: .zh }

!!! info "Exemple 1.2<br><span class='zh-title'>例 1.2</span>"

    - Soit \(\varepsilon > 0\). On a :

        设 \(\varepsilon > 0\)，有：
        {: .zh }

        \[
        \forall x \in \mathbb{R}_+^* \setminus \{1\},\quad
        \left|\frac{2}{\ln(x)}\right| < \varepsilon
        \iff x \in \left]0, e^{-2/\varepsilon}\right[ \cup \left]e^{2/\varepsilon}, +\infty\right[.
        \]

        Ainsi, en posant \(B = e^{2/\varepsilon}\), on a montré que \(\lim\limits_{x\to+\infty} \dfrac{2}{\ln(x)} = 0\).

        于是，取 \(B = e^{2/\varepsilon}\)，便证明了 \(\lim\limits_{x\to+\infty} \frac{2}{\ln(x)} = 0\)。
        {: .zh }

    - Soit \(A \in \mathbb{R}\). On a :

        设 \(A \in \mathbb{R}\)，有：
        {: .zh }

        \[
        \forall x \in \mathbb{R}_+,\quad 1 + \sqrt{x} > A
        \iff
        \begin{cases}
        x \geqslant 0 & \text{si } A < 1\\
        x > (A-1)^2 & \text{si } A \geqslant 1
        \end{cases}.
        \]

        Ainsi, en posant \(B = (A-1)^2\), on a montré que \(\lim\limits_{x\to+\infty} 1 + \sqrt{x} = +\infty\).

        于是，取 \(B = (A-1)^2\)，便证明了 \(\lim\limits_{x\to+\infty} 1 + \sqrt{x} = +\infty\)。
        {: .zh }

    - \(x \mapsto \cos(x)\) n'admet pas de limite en \(+\infty\) (voir l'exemple 2.2).

        \(x \mapsto \cos(x)\) 在 \(+\infty\) 处没有极限（见例 2.2）。
        {: .zh }

!!! success "Définition 1.3 : limite en \(-\infty\)<br><span class='zh-title'>定义 1.3：\(-\infty\) 处的极限（limite en \(-\infty\)）</span>"

    Soit \(f : \mathscr{D} \to \mathbb{R}\) une fonction définie au <strong>voisinage</strong> de \(-\infty\), c'est-à-dire telle que :

    设 \(f : \mathscr{D} \to \mathbb{R}\) 是定义在 \(-\infty\) 的<strong>邻域</strong>上的函数，即满足：
    {: .zh }

    \[
    \exists b \in \mathbb{R},\ ]-\infty, b[\, \subset \mathscr{D}.
    \]

    On dit que \(f\) <strong>admet une limite</strong> en \(-\infty\) lorsque \(x \mapsto f(-x)\) admet une limite en \(+\infty\). Dans ce cas, on note :

    若 \(x \mapsto f(-x)\) 在 \(+\infty\) 处有极限，则称 \(f\) 在 \(-\infty\) 处<strong>有极限</strong>。此时记：
    {: .zh }

    \[
    \lim_{x\to-\infty} f(x) = \lim_{x\to+\infty} f(-x) \in \overline{\mathbb{R}}.
    \]

!!! success "Définition 1.4 : limites à droite et à gauche<br><span class='zh-title'>定义 1.4：右极限与左极限（limites à droite et à gauche）</span>"

    Soient \(a \in \mathbb{R}\) et \(f : \mathscr{D} \to \mathbb{R}\) une fonction définie au <strong>voisinage à droite</strong> de \(a\), c'est-à-dire telle que :

    设 \(a \in \mathbb{R}\)，\(f : \mathscr{D} \to \mathbb{R}\) 是定义在 \(a\) 的<strong>右邻域</strong>（voisinage à droite）上的函数，即满足：
    {: .zh }

    \[
    \exists b > a,\ ]a, b[\, \subset \mathscr{D}.
    \]

    - On dit que \(f(x)\) <strong>tend vers</strong> \(\ell \in \mathbb{R}\) <strong>quand</strong> \(x\) <strong>tend vers</strong> \(a^+\) lorsque :

        若<strong>当</strong> \(x\) <strong>趋于</strong> \(a^+\) <strong>时</strong> \(f(x)\) <strong>趋于</strong> \(\ell \in \mathbb{R}\)，即：
        {: .zh }

        \[
        \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ a < x < a + \eta \implies |f(x) - \ell| < \varepsilon.
        \]

        Dans ce cas, \(\ell\) est unique. On l'appelle la <strong>limite</strong> de \(f(x)\) quand \(x \to a^+\), et on note \(\lim\limits_{x\to a^+} f(x) = \ell\).

        此时 \(\ell\) 唯一，称为 \(f(x)\) 当 \(x \to a^+\) 时的<strong>极限</strong>，并记 \(\lim\limits_{x\to a^+} f(x) = \ell\)。
        {: .zh }

    - On dit que \(f(x)\) <strong>tend vers</strong> \(+\infty\) <strong>quand</strong> \(x\) <strong>tend vers</strong> \(a^+\) lorsque :

        若<strong>当</strong> \(x\) <strong>趋于</strong> \(a^+\) <strong>时</strong> \(f(x)\) <strong>趋于</strong> \(+\infty\)，即：
        {: .zh }

        \[
        \forall A \in \mathbb{R},\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ a < x < a + \eta \implies f(x) > A.
        \]

        Dans ce cas, on note \(\lim\limits_{x\to a^+} f(x) = +\infty\).

        此时记 \(\lim\limits_{x\to a^+} f(x) = +\infty\)。
        {: .zh }

    - On dit que \(f(x)\) <strong>tend vers</strong> \(-\infty\) <strong>quand</strong> \(x\) <strong>tend vers</strong> \(a^+\) lorsque \(\lim\limits_{x\to a^+} -f(x) = +\infty\). Dans ce cas, on note \(\lim\limits_{x\to a^+} f(x) = -\infty\).

        若当 \(x\) 趋于 \(a^+\) 时 \(-f(x)\) 趋于 \(+\infty\)，则称当 \(x\) 趋于 \(a^+\) 时 \(f(x)\) <strong>趋于</strong> \(-\infty\)。此时记 \(\lim\limits_{x\to a^+} f(x) = -\infty\)。
        {: .zh }

    Dans chacun de ces trois cas, on dit que \(f\) <strong>admet une limite à droite</strong> de \(a\).

    以上三种情形都称 \(f\) 在 \(a\) 的右侧<strong>有极限</strong>（admettre une limite à droite）。
    {: .zh }

    De même, si \(f : \mathscr{D} \to \mathbb{R}\) est définie au <strong>voisinage à gauche</strong> de \(a\), c'est-à-dire :

    同样，若 \(f : \mathscr{D} \to \mathbb{R}\) 定义在 \(a\) 的<strong>左邻域</strong>（voisinage à gauche）上，即：
    {: .zh }

    \[
    \exists b < a,\ ]b, a[\, \subset \mathscr{D}
    \]

    alors on définit la <strong>limite à gauche</strong> de \(a\) par :

    则 \(a\) 处的<strong>左极限</strong>（limite à gauche）定义为：
    {: .zh }

    - \(\lim\limits_{x\to a^-} f(x) = \ell \in \mathbb{R}\) lorsque \(\forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ a - \eta < x < a \implies |f(x) - \ell| < \varepsilon\),

        当 \(\forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ a - \eta < x < a \implies |f(x) - \ell| < \varepsilon\) 时 \(\lim\limits_{x\to a^-} f(x) = \ell \in \mathbb{R}\)，
        {: .zh }

    - \(\lim\limits_{x\to a^-} f(x) = +\infty\) lorsque \(\forall A \in \mathbb{R},\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ a - \eta < x < a \implies f(x) > A\),

        当 \(\forall A \in \mathbb{R},\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ a - \eta < x < a \implies f(x) > A\) 时 \(\lim\limits_{x\to a^-} f(x) = +\infty\)，
        {: .zh }

    - \(\lim\limits_{x\to a^-} f(x) = -\infty\) lorsque \(\lim\limits_{x\to a^-} -f(x) = +\infty\).

        当 \(\lim\limits_{x\to a^-} -f(x) = +\infty\) 时 \(\lim\limits_{x\to a^-} f(x) = -\infty\)。
        {: .zh }

!!! success "Définition 1.5 : limite en \(a \notin \mathscr{D}\)<br><span class='zh-title'>定义 1.5：\(a \notin \mathscr{D}\) 处的极限</span>"

    Soit \(f : \mathscr{D} \to \mathbb{R}\) une fonction définie au voisinage à gauche et à droite de \(a \in \mathbb{R} \setminus \mathscr{D}\), c'est-à-dire telle que :

    设 \(f : \mathscr{D} \to \mathbb{R}\) 是定义在 \(a \in \mathbb{R} \setminus \mathscr{D}\) 的左右两侧邻域上的函数，即满足：
    {: .zh }

    \[
    \exists b < a < c,\ ]b, a[\, \cup\, ]a, c[\, \subset \mathscr{D}.
    \]

    On dit que \(f\) <strong>admet une limite</strong> en \(a\) lorsque les limites de \(f\) à droite et à gauche de \(a\) existent et sont égales. Dans ce cas, on note :

    若 \(f\) 在 \(a\) 的右极限与左极限都存在且相等，则称 \(f\) 在 \(a\) 处<strong>有极限</strong>。此时记：
    {: .zh }

    \[
    \lim_{x\to a} f(x) = \lim_{x\to a^+} f(x) = \lim_{x\to a^-} f(x) \in \overline{\mathbb{R}}.
    \]

!!! info "Exemple 1.6<br><span class='zh-title'>例 1.6</span>"

    - \(x \mapsto \dfrac{1}{x}\) n'admet pas de limite en \(0\) car \(\lim\limits_{x\to 0^-} \dfrac{1}{x} = -\infty \neq +\infty = \lim\limits_{x\to 0^+} \dfrac{1}{x}\),

        \(x \mapsto \frac{1}{x}\) 在 \(0\) 处没有极限，因为 \(\lim\limits_{x\to 0^-} \frac{1}{x} = -\infty \neq +\infty = \lim\limits_{x\to 0^+} \frac{1}{x}\)，
        {: .zh }

    - \(\lim\limits_{x\to 0} \dfrac{1}{x^2} = +\infty\),

        \(\lim\limits_{x\to 0} \frac{1}{x^2} = +\infty\)，
        {: .zh }

    - \(\lim\limits_{x\to 0} \dfrac{\sin(x)}{x} = 1\),

        \(\lim\limits_{x\to 0} \frac{\sin(x)}{x} = 1\)，
        {: .zh }

    - \(\lim\limits_{x\to 1} \dfrac{x^2 - 1}{x - 1} = 2\) car \(\forall x \in \mathbb{R} \setminus \{1\},\ \dfrac{x^2 - 1}{x - 1} = \dfrac{(x-1)(x+1)}{x-1} = x + 1\).

        \(\lim\limits_{x\to 1} \frac{x^2 - 1}{x - 1} = 2\)，因为对一切 \(x \in \mathbb{R} \setminus \{1\}\)，\(\frac{x^2 - 1}{x - 1} = \frac{(x-1)(x+1)}{x-1} = x + 1\)。
        {: .zh }

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    Si \(f : \mathscr{D} \to \mathbb{R}\) admet une limite à droite de \(a \in \mathbb{R} \setminus \mathscr{D}\) et n'est pas définie au voisinage à gauche de \(a\), alors on note simplement \(\lim\limits_{x\to a} f(x) = \lim\limits_{x\to a^+} f(x)\). De même, on note simplement \(\lim\limits_{x\to a} f(x) = \lim\limits_{x\to a^-} f(x)\) lorsque \(f\) admet une limite à gauche de \(a\) et n'est pas définie au voisinage à droite de \(a\).

    若 \(f\) 在 \(a \in \mathbb{R} \setminus \mathscr{D}\) 的右侧有极限、而在 \(a\) 的左邻域上没有定义，就简记 \(\lim\limits_{x\to a} f(x) = \lim\limits_{x\to a^+} f(x)\)。同样，若 \(f\) 在 \(a\) 的左侧有极限、而在 \(a\) 的右邻域上没有定义，就简记 \(\lim\limits_{x\to a} f(x) = \lim\limits_{x\to a^-} f(x)\)。
    {: .zh }

!!! info "Exemple 1.7<br><span class='zh-title'>例 1.7</span>"

    - \(x \mapsto e^{-1/\sqrt{x}}\) est définie sur \(]0, +\infty[\) et \(\lim\limits_{x\to 0} e^{-1/\sqrt{x}} = \lim\limits_{x\to 0^+} e^{-1/\sqrt{x}} = 0\).

        \(x \mapsto e^{-1/\sqrt{x}}\) 定义在 \(]0, +\infty[\) 上，且 \(\lim\limits_{x\to 0} e^{-1/\sqrt{x}} = \lim\limits_{x\to 0^+} e^{-1/\sqrt{x}} = 0\)。
        {: .zh }

    - \(x \mapsto \ln\left(\dfrac{1-x}{1+x}\right)\) est définie sur \(]-1, 1[\), \(\lim\limits_{x\to -1} \ln\left(\dfrac{1-x}{1+x}\right) = \lim\limits_{x\to -1^+} \ln\left(\dfrac{1-x}{1+x}\right) = +\infty\) et \(\lim\limits_{x\to 1} \ln\left(\dfrac{1-x}{1+x}\right) = \lim\limits_{x\to 1^-} \ln\left(\dfrac{1-x}{1+x}\right) = -\infty\).

        \(x \mapsto \ln\left(\frac{1-x}{1+x}\right)\) 定义在 \(]-1, 1[\) 上，\(\lim\limits_{x\to -1} \ln\left(\frac{1-x}{1+x}\right) = \lim\limits_{x\to -1^+} \ln\left(\frac{1-x}{1+x}\right) = +\infty\)，且 \(\lim\limits_{x\to 1} \ln\left(\frac{1-x}{1+x}\right) = \lim\limits_{x\to 1^-} \ln\left(\frac{1-x}{1+x}\right) = -\infty\)。
        {: .zh }

!!! warning "Important<br><span class='zh-title'>要点（Important）</span>"

    Dans le cas où \(f : \mathscr{D} \to \mathbb{R}\) admet une limite en \(a \in \mathscr{D}\), on dit que \(f\) est <strong>continue</strong> en \(a\). Ce cas sera traité dans la section 4.

    若 \(f : \mathscr{D} \to \mathbb{R}\) 在 \(a \in \mathscr{D}\) 处有极限，则称 \(f\) 在 \(a\) 处<strong>连续</strong>（continue）。这一情形将在第 4 节讨论。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 1 节核心术语</span>"

    - <strong>limite en \(+\infty\) / en \(-\infty\)</strong>：\(+\infty\) / \(-\infty\) 处的极限
    - <strong>voisinage de \(+\infty\)</strong>：\(+\infty\) 的邻域
    - <strong>tendre vers</strong>：趋于
    - <strong>admettre une limite</strong>：有极限
    - <strong>limite à droite / à gauche</strong>：右极限 / 左极限
    - <strong>voisinage à droite / à gauche</strong>：右邻域 / 左邻域
    - <strong>droite réelle achevée \(\overline{\mathbb{R}}\)</strong>：扩充实直线 \(\overline{\mathbb{R}}\)
    - <strong>définie au voisinage de \(a\)</strong>：在 \(a\) 的邻域上有定义
    - <strong>être unique</strong>：唯一
    - <strong>on note \(\lim\limits_{x\to a} f(x) = \ell\)</strong>：记 \(\lim\limits_{x\to a} f(x) = \ell\)
    - <strong>on reconnaît une définition similaire</strong>：可以看出定义类似
    - <strong>en posant \(B = \dots\)</strong>：取 \(B = \dots\)
    - <strong>on a montré que \(\dots\)</strong>：于是证明了……
    - <strong>voir l'exemple 2.2</strong>：见例 2.2

## 2　Propriétés des limites <span class="heading-zh">极限的性质</span>

!!! danger "Théorème 2.1 : caractérisation séquentielle des limites de fonctions<br><span class='zh-title'>定理 2.1：函数极限的序列刻画（caractérisation séquentielle）</span>"

    Soient \(f : \mathscr{D} \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\). \(f\) admet une limite en \(a\) égale à \(\ell \in \overline{\mathbb{R}}\) si et seulement si, pour toute suite réelle \((a_n)\) dont les termes appartiennent à \(\mathscr{D}\) et qui tend vers \(a\), la suite \((f(a_n))\) tend vers \(\ell\) :

    设 \(f : \mathscr{D} \to \mathbb{R}\)，\(a \in \overline{\mathbb{R}}\)。\(f\) 在 \(a\) 处有极限 \(\ell \in \overline{\mathbb{R}}\)，当且仅当：对任意各项属于 \(\mathscr{D}\) 且趋于 \(a\) 的实数列 \((a_n)\)，数列 \((f(a_n))\) 都趋于 \(\ell\)：
    {: .zh }

    \[
    \lim_{x\to a} f(x) = \ell
    \iff
    \left(\forall (a_n) \in \mathscr{D}^{\mathbb{N}},\ \lim_{n\to+\infty} a_n = a \implies \lim_{n\to+\infty} f(a_n) = \ell\right).
    \]

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    Ce théorème est en particulier très pratique pour justifier qu'une fonction n'admet pas de limite.

    这个定理尤其便于用来论证某个函数没有极限。
    {: .zh }

!!! info "Exemple 2.2<br><span class='zh-title'>例 2.2</span>"

    On a \(\lim\limits_{n\to+\infty} 2n\pi = \lim\limits_{n\to+\infty} (2n+1)\pi = +\infty\), mais :

    有 \(\lim\limits_{n\to+\infty} 2n\pi = \lim\limits_{n\to+\infty} (2n+1)\pi = +\infty\)，但是：
    {: .zh }

    \[
    \lim_{n\to+\infty} \cos(2n\pi) = 1 \neq -1 = \lim_{n\to+\infty} \cos((2n+1)\pi).
    \]

    D'après la caractérisation séquentielle des limites, on en déduit que la fonction \(x \mapsto \cos(x)\) n'admet pas de limite en \(+\infty\).

    由极限的序列刻画推出，函数 \(x \mapsto \cos(x)\) 在 \(+\infty\) 处没有极限。
    {: .zh }

!!! danger "Lemme 2.3<br><span class='zh-title'>引理 2.3</span>"

    Soient \(f : \mathscr{D} \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\) tels que \(f\) admet une limite en \(a\). Soit \(V\) un voisinage de \(\ell = \lim\limits_{x\to a} f(x) \in \overline{\mathbb{R}}\), c'est-à-dire de la forme \(V = ]b, c[\, \ni \ell\) si \(\ell \in \mathbb{R}\), \(V = ]b, +\infty[\) si \(\ell = +\infty\) ou \(V = ]-\infty, b[\) si \(\ell = -\infty\). Alors \(V\) contient toutes les valeurs de \(f\) au voisinage de \(a\) :

    设 \(f : \mathscr{D} \to \mathbb{R}\) 与 \(a \in \overline{\mathbb{R}}\) 使得 \(f\) 在 \(a\) 处有极限。设 \(V\) 是 \(\ell = \lim\limits_{x\to a} f(x) \in \overline{\mathbb{R}}\) 的一个邻域，即：当 \(\ell \in \mathbb{R}\) 时 \(V = ]b, c[\, \ni \ell\)，当 \(\ell = +\infty\) 时 \(V = ]b, +\infty[\)，当 \(\ell = -\infty\) 时 \(V = ]-\infty, b[\)。那么 \(V\) 包含 \(f\) 在 \(a\) 的邻域内的全部取值：
    {: .zh }

    - si \(a = +\infty\), alors \(\exists A \in \mathbb{R},\ \forall x \in \mathscr{D},\ x > A \implies f(x) \in V\),

        若 \(a = +\infty\)，则存在 \(A \in \mathbb{R}\)，使一切 \(x \in \mathscr{D}\) 只要 \(x > A\) 就有 \(f(x) \in V\)，
        {: .zh }

    - si \(a = -\infty\), alors \(\exists A \in \mathbb{R},\ \forall x \in \mathscr{D},\ x < A \implies f(x) \in V\),

        若 \(a = -\infty\)，则存在 \(A \in \mathbb{R}\)，使一切 \(x \in \mathscr{D}\) 只要 \(x < A\) 就有 \(f(x) \in V\)，
        {: .zh }

    - si \(a \in \mathbb{R}\), alors \(\exists \varepsilon > 0,\ \forall x \in \mathscr{D},\ |x - a| < \varepsilon \implies f(x) \in V\).

        若 \(a \in \mathbb{R}\)，则存在 \(\varepsilon > 0\)，使一切 \(x \in \mathscr{D}\) 只要 \(|x - a| < \varepsilon\) 就有 \(f(x) \in V\)。
        {: .zh }

!!! danger "Propriété 2.4<br><span class='zh-title'>性质 2.4</span>"

    Soient \(f : \mathscr{D} \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\) tels que \(f\) admet une limite en \(a\). Si \(\lim\limits_{x\to a} f(x) > 0\), alors \(f\) est strictement positive au voisinage de \(a\).

    设 \(f : \mathscr{D} \to \mathbb{R}\) 与 \(a \in \overline{\mathbb{R}}\) 使得 \(f\) 在 \(a\) 处有极限。若 \(\lim\limits_{x\to a} f(x) > 0\)，则 \(f\) 在 \(a\) 的某邻域内严格为正。
    {: .zh }

!!! danger "Propriété 2.5 : opérations avec les limites<br><span class='zh-title'>性质 2.5：极限的运算（opérations avec les limites）</span>"

    Les opérations (addition, multiplication, division) avec les limites de fonctions sont les mêmes que les opérations avec les limites de suites.

    函数极限的运算（加法、乘法、除法）与数列极限的运算相同。
    {: .zh }

!!! danger "Propriété 2.6 : composition de limites<br><span class='zh-title'>性质 2.6：极限的复合（composition de limites）</span>"

    Soient \(f : \mathscr{D}_f \to \mathscr{D}_g\), \(g : \mathscr{D}_g \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\) tels que \(b = \lim\limits_{x\to a} f(x)\) et \(\ell = \lim\limits_{x\to b} g(x)\) existent dans \(\overline{\mathbb{R}}\). Alors \(\lim\limits_{x\to a} g(f(x)) = \ell\).

    设 \(f : \mathscr{D}_f \to \mathscr{D}_g\)，\(g : \mathscr{D}_g \to \mathbb{R}\)，\(a \in \overline{\mathbb{R}}\)，且 \(b = \lim\limits_{x\to a} f(x)\) 与 \(\ell = \lim\limits_{x\to b} g(x)\) 在 \(\overline{\mathbb{R}}\) 中存在。则 \(\lim\limits_{x\to a} g(f(x)) = \ell\)。
    {: .zh }

!!! info "Exemple 2.7<br><span class='zh-title'>例 2.7</span>"

    Pour tout \(t \in \mathbb{R}\), \(\lim\limits_{x\to 0} (1+tx)^{1/x} = \lim\limits_{x\to 0} e^{\ln(1+tx)/x} = e^t\) car \(\lim\limits_{h\to 0} \dfrac{\ln(1+h)}{h} = 1\).

    对任意 \(t \in \mathbb{R}\)，\(\lim\limits_{x\to 0} (1+tx)^{1/x} = \lim\limits_{x\to 0} e^{\ln(1+tx)/x} = e^t\)，因为 \(\lim\limits_{h\to 0} \frac{\ln(1+h)}{h} = 1\)。
    {: .zh }

!!! danger "Propriété 2.8 : comparaison de limites<br><span class='zh-title'>性质 2.8：极限的比较（comparaison de limites）</span>"

    Soient \(f : \mathscr{D}_f \to \mathbb{R}\), \(g : \mathscr{D}_g \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\) tels que \(f\) et \(g\) admettent une limite en \(a\). Si \(f \leqslant g\) au voisinage de \(a\), alors \(\lim\limits_{x\to a} f(x) \leqslant \lim\limits_{x\to a} g(x)\).

    设 \(f : \mathscr{D}_f \to \mathbb{R}\)，\(g : \mathscr{D}_g \to \mathbb{R}\)，\(a \in \overline{\mathbb{R}}\)，且 \(f\) 与 \(g\) 在 \(a\) 处都有极限。若在 \(a\) 的邻域内 \(f \leqslant g\)，则 \(\lim\limits_{x\to a} f(x) \leqslant \lim\limits_{x\to a} g(x)\)。
    {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意（Attention）</span>"

    Comme pour les suites :

    与数列情形一样：
    {: .zh }

    - cette propriété ne permet pas de justifier l'existence des limites,

        该性质不能用来证明极限的存在性，
        {: .zh }

    - en général, cette propriété est fausse pour les inégalités strictes.

        一般而言，该性质对严格不等式不成立。
        {: .zh }

!!! danger "Théorème 2.9 : théorème de limite par encadrement<br><span class='zh-title'>定理 2.9：夹逼极限定理（limite par encadrement）</span>"

    Soient \(f : \mathscr{D}_f \to \mathbb{R}\), \(g : \mathscr{D}_g \to \mathbb{R}\), \(h : \mathscr{D}_h \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\) tels que \(f \leqslant g \leqslant h\) au voisinage de \(a\). Si \(f\) et \(h\) admettent une limite en \(a\) égale à \(\ell \in \mathbb{R}\), alors \(g\) admet aussi une limite en \(a\) égale à \(\ell\).

    设 \(f : \mathscr{D}_f \to \mathbb{R}\)，\(g : \mathscr{D}_g \to \mathbb{R}\)，\(h : \mathscr{D}_h \to \mathbb{R}\) 与 \(a \in \overline{\mathbb{R}}\)，使得在 \(a\) 的邻域内 \(f \leqslant g \leqslant h\)。若 \(f\) 与 \(h\) 在 \(a\) 处有相同的极限 \(\ell \in \mathbb{R}\)，则 \(g\) 在 \(a\) 处也有极限，且等于 \(\ell\)。
    {: .zh }

!!! danger "Théorème 2.10 : théorème de limite par comparaison<br><span class='zh-title'>定理 2.10：比较极限定理（limite par comparaison）</span>"

    Soient \(f : \mathscr{D}_f \to \mathbb{R}\), \(g : \mathscr{D}_g \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\) tels que \(f \leqslant g\) au voisinage de \(a\).

    设 \(f : \mathscr{D}_f \to \mathbb{R}\)，\(g : \mathscr{D}_g \to \mathbb{R}\) 与 \(a \in \overline{\mathbb{R}}\)，使得在 \(a\) 的邻域内 \(f \leqslant g\)。
    {: .zh }

    - Si \(\lim\limits_{x\to a} f(x) = +\infty\), alors \(\lim\limits_{x\to a} g(x) = +\infty\).

        若 \(\lim\limits_{x\to a} f(x) = +\infty\)，则 \(\lim\limits_{x\to a} g(x) = +\infty\)。
        {: .zh }

    - Si \(\lim\limits_{x\to a} g(x) = -\infty\), alors \(\lim\limits_{x\to a} f(x) = -\infty\).

        若 \(\lim\limits_{x\to a} g(x) = -\infty\)，则 \(\lim\limits_{x\to a} f(x) = -\infty\)。
        {: .zh }

!!! danger "Corollaire 2.11<br><span class='zh-title'>推论 2.11</span>"

    Si \(f(x)\) tend vers \(0\) quand \(x \to a \in \overline{\mathbb{R}}\) et \(g\) est une fonction bornée au voisinage de \(a\), alors \(\lim\limits_{x\to a} f(x)g(x) = 0\).

    若当 \(x \to a \in \overline{\mathbb{R}}\) 时 \(f(x)\) 趋于 \(0\)，且 \(g\) 是 \(a\) 的邻域内的<strong>有界函数</strong>（fonction bornée），则 \(\lim\limits_{x\to a} f(x)g(x) = 0\)。
    {: .zh }

!!! info "Exemple 2.12<br><span class='zh-title'>例 2.12</span>"

    \[
    \lim_{x\to 0}\ \underbrace{x}_{\to 0}\ \underbrace{\cos\left(\frac{1}{x}\right)}_{\in [-1,1]} = 0.
    \]

    这一极限为 \(0\)：\(x\) 趋于 \(0\)，而 \(\cos\frac{1}{x}\) 的取值落在 \([-1,1]\) 内，无穷小量乘以有界量，极限仍为 \(0\)。
    {: .zh }

!!! danger "Théorème 2.13 : théorème de limite monotone<br><span class='zh-title'>定理 2.13：单调极限定理（limite monotone）</span>"

    Soit \(a \in \overline{\mathbb{R}}\) et \(b \in \overline{\mathbb{R}}\) tels que \(a < b\).

    设 \(a \in \overline{\mathbb{R}}\) 与 \(b \in \overline{\mathbb{R}}\)，且 \(a < b\)。
    {: .zh }

    - Soit \(f :\, ]a, b[\, \to \mathbb{R}\) une fonction croissante sur \(]a, b[\).

        设 \(f :\, ]a, b[\, \to \mathbb{R}\) 是 \(]a, b[\) 上的<strong>递增</strong>（croissante）函数。
        {: .zh }

        - Si \(f\) est majorée, alors \(f\) admet une limite finie en \(b\) : \(\lim\limits_{x\to b^-} f(x) \in \mathbb{R}\).

            若 \(f\) <strong>有上界</strong>（majorée），则 \(f\) 在 \(b\) 处有有限极限：\(\lim\limits_{x\to b^-} f(x) \in \mathbb{R}\)。
            {: .zh }

        - Si \(f\) n'est pas majorée, alors \(\lim\limits_{x\to b^-} f(x) = +\infty\).

            若 \(f\) 无上界，则 \(\lim\limits_{x\to b^-} f(x) = +\infty\)。
            {: .zh }

        - Si \(f\) est minorée, alors \(f\) admet une limite finie en \(a\) : \(\lim\limits_{x\to a^+} f(x) \in \mathbb{R}\).

            若 \(f\) <strong>有下界</strong>（minorée），则 \(f\) 在 \(a\) 处有有限极限：\(\lim\limits_{x\to a^+} f(x) \in \mathbb{R}\)。
            {: .zh }

        - Si \(f\) n'est pas minorée, alors \(\lim\limits_{x\to a^+} f(x) = -\infty\).

            若 \(f\) 无下界，则 \(\lim\limits_{x\to a^+} f(x) = -\infty\)。
            {: .zh }

    - Soit \(f :\, ]a, b[\, \to \mathbb{R}\) une fonction décroissante sur \(]a, b[\).

        设 \(f :\, ]a, b[\, \to \mathbb{R}\) 是 \(]a, b[\) 上的<strong>递减</strong>（décroissante）函数。
        {: .zh }

        - Si \(f\) est majorée, alors \(f\) admet une limite finie en \(a\) : \(\lim\limits_{x\to a^+} f(x) \in \mathbb{R}\).

            若 \(f\) 有上界，则 \(f\) 在 \(a\) 处有有限极限：\(\lim\limits_{x\to a^+} f(x) \in \mathbb{R}\)。
            {: .zh }

        - Si \(f\) n'est pas majorée, alors \(\lim\limits_{x\to a^+} f(x) = +\infty\).

            若 \(f\) 无上界，则 \(\lim\limits_{x\to a^+} f(x) = +\infty\)。
            {: .zh }

        - Si \(f\) est minorée, alors \(f\) admet une limite finie en \(b\) : \(\lim\limits_{x\to b^-} f(x) \in \mathbb{R}\).

            若 \(f\) 有下界，则 \(f\) 在 \(b\) 处有有限极限：\(\lim\limits_{x\to b^-} f(x) \in \mathbb{R}\)。
            {: .zh }

        - Si \(f\) n'est pas minorée, alors \(\lim\limits_{x\to b^-} f(x) = -\infty\).

            若 \(f\) 无下界，则 \(\lim\limits_{x\to b^-} f(x) = -\infty\)。
            {: .zh }

En particulier, toute fonction monotone sur \(]a, b[\) admet des limites (dans \(\overline{\mathbb{R}}\)) en \(a\) et \(b\).

特别地，\(]a, b[\) 上的任何<strong>单调</strong>（monotone）函数在 \(a\) 与 \(b\) 处都有极限（在 \(\overline{\mathbb{R}}\) 中）。
{: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 2 节核心术语</span>"

    - <strong>caractérisation séquentielle</strong>：序列刻画
    - <strong>suite qui tend vers \(a\)</strong>：趋于 \(a\) 的数列
    - <strong>voisinage de \(\ell\)</strong>：\(\ell\) 的邻域
    - <strong>composition de limites</strong>：极限的复合
    - <strong>comparaison de limites</strong>：极限的比较
    - <strong>limite par encadrement</strong>：夹逼（encadrement）
    - <strong>limite par comparaison</strong>：比较极限
    - <strong>fonction bornée</strong>：有界函数
    - <strong>fonction croissante / décroissante</strong>：递增 / 递减函数
    - <strong>être majorée / minorée</strong>：有上界 / 有下界
    - <strong>limite monotone</strong>：单调极限
    - <strong>opérations avec les limites</strong>：极限的运算
    - <strong>justifier qu'une fonction n'admet pas de limite</strong>：论证函数没有极限
    - <strong>on en déduit que</strong>：由此推出

## 3　Comparaison de fonctions <span class="heading-zh">函数的比较</span>

!!! success "Définition 3.1 : fonction négligeable par rapport à une autre<br><span class='zh-title'>定义 3.1：相对于另一函数可忽略的函数（négligeable）</span>"

    Soient \(f : \mathscr{D}_f \to \mathbb{R}\), \(g : \mathscr{D}_g \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\). On dit que \(f\) est <strong>négligeable par rapport à</strong> \(g\) au voisinage de \(a\) lorsque \(f(x)/g(x)\) tend vers \(0\) quand \(x \to a\). On note :

    设 \(f : \mathscr{D}_f \to \mathbb{R}\)，\(g : \mathscr{D}_g \to \mathbb{R}\)，\(a \in \overline{\mathbb{R}}\)。若当 \(x \to a\) 时 \(f(x)/g(x)\) 趋于 \(0\)，则称 \(f\) 在 \(a\) 的邻域内<strong>相对于</strong> \(g\) <strong>可忽略</strong>（négligeable par rapport à \(g\)）。记作：
    {: .zh }

    \[
    f(x) = \oa(g(x)) \iff \lim_{x\to a} \frac{f(x)}{g(x)} = 0.
    \]

!!! info "Exemple 3.2<br><span class='zh-title'>例 3.2</span>"

    - \(x = \oinf(x^2)\) et \(\dfrac{1}{x^2} = \oinf\left(\dfrac{1}{x}\right)\). Plus généralement :

        \(x = \oinf(x^2)\)，\(\frac{1}{x^2} = \oinf\left(\frac{1}{x}\right)\)。更一般地：
        {: .zh }

        \[
        \forall \alpha < \beta,\quad x^\alpha = \oinf(x^\beta).
        \]

    - \(x^2 = \oz(x)\) et \(\dfrac{1}{x} = \oz\left(\dfrac{1}{x^2}\right)\). Plus généralement :

        \(x^2 = \oz(x)\)，\(\frac{1}{x} = \oz\left(\frac{1}{x^2}\right)\)。更一般地：
        {: .zh }

        \[
        \forall \alpha < \beta,\quad x^\beta = \oz(x^\alpha).
        \]

!!! danger "Théorème 3.3 : théorème des croissances comparées<br><span class='zh-title'>定理 3.3：增长比较定理（croissances comparées）</span>"

    Soit \(\alpha > 0\). Alors :

    设 \(\alpha > 0\)，则：
    {: .zh }

    \[
    \ln(x) = \oinf(x^\alpha),\quad x^\alpha = \oinf(e^x)
    \]

    \[
    \text{et}\quad \ln(x) = \oz\left(\frac{1}{x^\alpha}\right).
    \]

!!! info "Exemple 3.4<br><span class='zh-title'>例 3.4</span>"

    \[
    \lim_{x\to+\infty} \frac{x}{2^x}
    = \lim_{x\to+\infty} \left(\frac{x^{1/\ln(2)}}{e^x}\right)^{\ln(2)} = 0
    \qquad \text{d'après le théorème des croissances comparées.}
    \]

    由增长比较定理即得这一极限为 \(0\)。
    {: .zh }

!!! success "Définition 3.5 : fonctions équivalentes<br><span class='zh-title'>定义 3.5：等价函数（fonctions équivalentes）</span>"

    Soient \(f : \mathscr{D}_f \to \mathbb{R}\), \(g : \mathscr{D}_g \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\). On dit que \(f\) et \(g\) sont <strong>équivalentes</strong> au voisinage de \(a\) lorsque \(f(x)/g(x)\) tend vers \(1\) quand \(x \to a\). On note :

    设 \(f : \mathscr{D}_f \to \mathbb{R}\)，\(g : \mathscr{D}_g \to \mathbb{R}\)，\(a \in \overline{\mathbb{R}}\)。若当 \(x \to a\) 时 \(f(x)/g(x)\) 趋于 \(1\)，则称 \(f\) 与 \(g\) 在 \(a\) 的邻域内<strong>等价</strong>（équivalentes）。记作：
    {: .zh }

    \[
    f(x) \sia g(x) \iff \lim_{x\to a} \frac{f(x)}{g(x)} = 1.
    \]

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    Comme pour les suites :

    与数列情形一样：
    {: .zh }

    - si \(f\) et \(g\) sont équivalentes au voisinage de \(a\), alors \(f\) admet une limite en \(a\) si et seulement si \(g\) admet une limite en \(a\), et dans ce cas ces limites sont égales,

        若 \(f\) 与 \(g\) 在 \(a\) 的邻域内等价，则 \(f\) 在 \(a\) 处有极限当且仅当 \(g\) 在 \(a\) 处有极限，且此时两个极限相等，
        {: .zh }

    - mais la réciproque est fausse en général. Par exemple \(x\) et \(x^2\) tendent vers \(0\) quand \(x \to 0\), mais ne sont pas équivalentes au voisinage de \(0\).

        但逆命题一般不成立。例如当 \(x \to 0\) 时 \(x\) 与 \(x^2\) 都趋于 \(0\)，但它们在 \(0\) 的邻域内并不等价。
        {: .zh }

!!! danger "Théorème 3.6 : équivalents usuels<br><span class='zh-title'>定理 3.6：常用等价（équivalents usuels）</span>"

    - \(\forall \alpha \in \mathbb{R}^*,\ (1+x)^\alpha - 1 \siz \alpha x\),

        对任意 \(\alpha \in \mathbb{R}^*\)，\((1+x)^\alpha - 1 \siz \alpha x\)，
        {: .zh }

    - \(\ln(1+x) \siz x\) et \(e^x - 1 \siz x\),

        \(\ln(1+x) \siz x\)，且 \(e^x - 1 \siz x\)，
        {: .zh }

    - \(\cos(x) - 1 \siz \dfrac{-x^2}{2}\), \(\sin(x) \siz x\) et \(\tan(x) \siz x\).

        \(\cos(x) - 1 \siz \frac{-x^2}{2}\)，\(\sin(x) \siz x\)，且 \(\tan(x) \siz x\)。
        {: .zh }

    以上即为当 \(x \to 0\) 时的常用等价（équivalents usuels）。
    {: .zh }

!!! info "Exemple 3.7<br><span class='zh-title'>例 3.7</span>"

    \[
    \begin{align*}
    &\bullet\ \ \lim_{x\to 0} \frac{e^x-1}{\sin^3(x)}\left(\sqrt{\cos(x)} - 1\right)\\
    &\phantom{\bullet}\ \ = \lim_{x\to 0} \frac{x}{x^3}\left(\left(1 + \cos(x) - 1\right)^{1/2} - 1\right)
    &&\begin{array}{l}\text{d'après les équivalents usuels}\\\text{de l'exponentielle et du sinus}\end{array}\\
    &\phantom{\bullet}\ \ = \lim_{x\to 0} \frac{1}{2x^2}\left(\cos(x) - 1\right)
    &&\text{car } \lim_{x\to 0} \cos(x) - 1 = 0\\
    &\phantom{\bullet}\ \ = \lim_{x\to 0} \frac{-x^2}{4x^2} = \frac{-1}{4}
    &&\text{d'après l'équivalent usuel du cosinus.}
    \end{align*}
    \]

    第一行到第二行用指数函数与正弦函数的常用等价；第三行因 \(\cos(x) - 1 \to 0\)，第四行用余弦函数的常用等价。
    {: .zh }

    \[
    \begin{align*}
    &\bullet\ \ \lim_{x\to 1} \frac{\ln(x)}{x^{888} - 1}\\
    &\phantom{\bullet}\ \ = \lim_{h\to 0} \frac{\ln(1+h)}{(1+h)^{888} - 1}
    &&\text{en posant } h = x - 1 \to 0 \text{ quand } x \to 1\\
    &\phantom{\bullet}\ \ = \lim_{h\to 0} \frac{h}{888h} = \frac{1}{888}
    &&\text{d'après les équivalents usuels.}
    \end{align*}
    \]

    令 \(h = x - 1 \to 0\)（当 \(x \to 1\) 时），再用常用等价。
    {: .zh }

    \[
    \begin{align*}
    &\bullet\ \ \lim_{x\to+\infty} \left(\cos\left(\frac{1}{\sqrt{x}}\right)\right)^x\\
    &\phantom{\bullet}\ \ = \lim_{h\to 0} e^{\frac{1}{h}\ln\left(1 + \cos(h^{1/2}) - 1\right)}
    &&\text{en posant } h = \frac{1}{x} \to 0 \text{ quand } x \to +\infty.
    \end{align*}
    \]

    Or :

    又：
    {: .zh }

    \[
    \begin{align*}
    &\phantom{\bullet}\ \ \lim_{h\to 0} \frac{1}{h}\ln\left(1 + \cos(h^{1/2}) - 1\right)\\
    &\phantom{\bullet}\ \ = \lim_{h\to 0} \frac{\cos(h^{1/2}) - 1}{h}
    &&\text{car } \lim_{h\to 0} \cos(h^{1/2}) - 1 = 0\\
    &\phantom{\bullet}\ \ = \lim_{h\to 0} \frac{-h}{2h} = \frac{-1}{2}
    &&\text{d'après l'équivalent usuel du cosinus.}
    \end{align*}
    \]

    因 \(\cos(h^{1/2}) - 1 \to 0\)，先用常用等价，再用余弦函数的常用等价。
    {: .zh }

    Donc :

    因此：
    {: .zh }

    \[
    \lim_{x\to+\infty} \left(\cos\left(\frac{1}{\sqrt{x}}\right)\right)^x = e^{-1/2} = \frac{1}{\sqrt{e}}.
    \]

!!! danger "Propriété 3.8<br><span class='zh-title'>性质 3.8</span>"

    Soient \(f : \mathscr{D}_f \to \mathbb{R}\), \(g : \mathscr{D}_g \to \mathbb{R}\) et \(a \in \overline{\mathbb{R}}\). Alors :

    设 \(f : \mathscr{D}_f \to \mathbb{R}\)，\(g : \mathscr{D}_g \to \mathbb{R}\)，\(a \in \overline{\mathbb{R}}\)。则：
    {: .zh }

    \[
    f(x) \sia g(x) \iff f(x) = g(x) + \oa(g(x)).
    \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 3 节核心术语</span>"

    - <strong>négligeable par rapport à</strong>：相对于……可忽略
    - <strong>équivalentes au voisinage de \(a\)</strong>：在 \(a\) 的邻域内等价
    - <strong>équivalents usuels</strong>：常用等价
    - <strong>théorème des croissances comparées</strong>：增长比较定理
    - <strong>la réciproque est fausse</strong>：逆命题不成立
    - <strong>en posant \(h = \dots\)</strong>：令 \(h = \dots\)
    - <strong>d'après l'équivalent usuel du cosinus</strong>：由余弦的常用等价
    - <strong>d'après les équivalents usuels de l'exponentielle et du sinus</strong>：由指数与正弦的常用等价
    - <strong>plus généralement</strong>：更一般地

## 4　Continuité en un point <span class="heading-zh">单点连续性</span>

!!! success "Définition 4.1 : continuité en un point<br><span class='zh-title'>定义 4.1：单点连续性（continuité en un point）</span>"

    Soient \(f : \mathscr{D} \to \mathbb{R}\) et \(a \in \mathscr{D}\). On dit que \(f\) est <strong>continue</strong> en \(a\) lorsque :

    设 \(f : \mathscr{D} \to \mathbb{R}\)，\(a \in \mathscr{D}\)。若存在实数 \(\ell\)，使得下述条件成立，则称 \(f\) 在 \(a\) 处<strong>连续</strong>（continue）：
    {: .zh }

    \[
    \exists \ell \in \mathbb{R},\ \forall \varepsilon > 0,\ \exists \eta > 0,\ \forall x \in \mathscr{D},\ |x - a| < \eta \implies |f(x) - \ell| < \varepsilon.
    \]

    Dans ce cas, \(\ell = f(a)\) et on note \(\lim\limits_{x\to a} f(x) = f(a)\).

    此时 \(\ell = f(a)\)，并记 \(\lim\limits_{x\to a} f(x) = f(a)\)。
    {: .zh }

!!! danger "Propriété 4.2<br><span class='zh-title'>性质 4.2</span>"

    Soient \(f : \mathscr{D} \to \mathbb{R}\) et \(a \in \mathscr{D}\).

    设 \(f : \mathscr{D} \to \mathbb{R}\)，\(a \in \mathscr{D}\)。
    {: .zh }

    - Si \(f\) est définie au voisinage à gauche et à droite de \(a\), alors :

        若 \(f\) 在 \(a\) 的左右两侧邻域上都有定义，则：
        {: .zh }

        \[
        f \text{ est continue en } a \iff \lim_{x\to a^-} f(x) = \lim_{x\to a^+} f(x) = f(a).
        \]

    - Si \(f\) est définie au voisinage à gauche de \(a\) mais pas au voisinage à droite de \(a\) :

        若 \(f\) 在 \(a\) 的左邻域上有定义、而在右邻域上没有定义：
        {: .zh }

        \[
        f \text{ est continue en } a \iff \lim_{x\to a^-} f(x) = f(a).
        \]

    - Si \(f\) est définie au voisinage à droite de \(a\) mais pas au voisinage à gauche de \(a\) :

        若 \(f\) 在 \(a\) 的右邻域上有定义、而在左邻域上没有定义：
        {: .zh }

        \[
        f \text{ est continue en } a \iff \lim_{x\to a^+} f(x) = f(a).
        \]

!!! info "Exemple 4.3<br><span class='zh-title'>例 4.3</span>"

    - \(x \mapsto \arccos(x)\) est continue sur \([-1, 1]\) car \(\forall a \in [-1, 1],\ \lim\limits_{x\to a} \arccos(x) = \arccos(a)\). Plus précisément :

        \(x \mapsto \arccos(x)\) 在 \([-1, 1]\) 上连续，因为对一切 \(a \in [-1, 1]\)，\(\lim\limits_{x\to a} \arccos(x) = \arccos(a)\)。更精确地说：
        {: .zh }

        - \(\lim\limits_{x\to -1^+} \arccos(x) = \pi = \arccos(-1)\),

            \(\lim\limits_{x\to -1^+} \arccos(x) = \pi = \arccos(-1)\)，
            {: .zh }

        - \(\forall a \in\, ]-1, 1[,\ \lim\limits_{x\to a^-} \arccos(x) = \lim\limits_{x\to a^+} \arccos(x) = \arccos(a)\),

            \(\forall a \in\, ]-1, 1[\)，\(\lim\limits_{x\to a^-} \arccos(x) = \lim\limits_{x\to a^+} \arccos(x) = \arccos(a)\)，
            {: .zh }

        - et \(\lim\limits_{x\to 1^-} \arccos(x) = 0 = \arccos(0)\).

            以及 \(\lim\limits_{x\to 1^-} \arccos(x) = 0 = \arccos(0)\)（原文如此；按定义应为 \(\arccos(1) = 0\)）。
            {: .zh }

    - \(x \mapsto \lfloor x \rfloor\) n'est pas continue en \(n \in \mathbb{Z}\) car \(\lim\limits_{x\to n^-} \lfloor x \rfloor = n - 1 \neq n = \lim\limits_{x\to n^+} \lfloor x \rfloor\).

        \(x \mapsto \lfloor x \rfloor\) 在 \(n \in \mathbb{Z}\) 处不连续，因为 \(\lim\limits_{x\to n^-} \lfloor x \rfloor = n - 1 \neq n = \lim\limits_{x\to n^+} \lfloor x \rfloor\)。
        {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 4 节核心术语</span>"

    - <strong>continue en \(a\)</strong>：在 \(a\) 处连续
    - <strong>continuité en un point</strong>：单点连续性
    - <strong>limite finie</strong>：有限极限
    - <strong>fonction partie entière \(\lfloor x \rfloor\)</strong>：取整函数 \(\lfloor x \rfloor\)
    - <strong>\(\arccos\)</strong>：反余弦函数
    - <strong>définie au voisinage à gauche / à droite</strong>：在左 / 右邻域上有定义
    - <strong>plus précisément</strong>：更精确地说
    - <strong>prolongement par continuité</strong>：连续延拓（第 5 节标题）

## 5　Prolongement par continuité <span class="heading-zh">连续延拓</span>

## 6　Propriétés des fonctions continues <span class="heading-zh">连续函数的性质</span>

## 7　Théorèmes de continuité <span class="heading-zh">连续性定理</span>

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    原讲义第 5、6、7 节目前仅有标题，正文尚待任课教师补充。
    {: .zh }
