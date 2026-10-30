---
title: 第 3 章 数项级数
comments: true
---

# 第 3 章　数项级数

<div class="lecture-hero">
<p class="lecture-hero__fr">Chapitre n°3 — Séries numériques</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Objectifs <span class="heading-zh">学习目标</span>

1. Manipuler des séries.

    熟练操作级数（manipuler des séries）。
    {: .zh }

1. Déterminer la nature de séries numériques.

    判定数项级数的性质（nature，即收敛或发散）。
    {: .zh }

1. Calculer la somme de séries convergentes.

    计算收敛级数的和。
    {: .zh }

## Notations <span class="heading-zh">记号</span>

On rappelle que \(\mathbb{N}\) désigne l'ensemble des entiers naturels, \(\mathbb{Z}\) désigne l'ensemble des entiers relatifs, \(\mathbb{R}\) désigne l'ensemble des nombres réels et \(\mathbb{C}\) désigne l'ensemble des nombres complexes.

回忆：\(\mathbb{N}\) 表示<strong>自然数</strong>集（entiers naturels），\(\mathbb{Z}\) 表示<strong>整数</strong>集（entiers relatifs）， \(\mathbb{R}\) 表示<strong>实数</strong>集，\(\mathbb{C}\) 表示<strong>复数</strong>集。
{: .zh }

Pour tout ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\) et on fixe un entier \(n_0 \in \mathbb{Z}\).

本章自始至终，\(\mathbb{K}\) 表示 \(\mathbb{R}\) 或 \(\mathbb{C}\)，并固定一个整数 \(n_0 \in \mathbb{Z}\)。
{: .zh }

## 1　Séries numériques <span class="heading-zh">数项级数</span>

!!! success "Définition 1.1 : série numérique<br><span class='zh-title'>定义 1.1：数项级数（série numérique）</span>"

    Soit \((u_n)_{n\geqslant n_0}\) une suite numérique. La <strong>série numérique</strong> de terme général \(u_n\), notée \(\sum\limits_{n\geqslant n_0} u_n\) est la suite \((S_n)_{n\geqslant n_0}\) des <strong>sommes partielles</strong> de \((u_n)_{n\geqslant n_0}\) définie par :

    设 \((u_n)_{n\geqslant n_0}\) 为一个数列。以 \(u_n\) 为通项的<strong>数项级数</strong>（série numérique），记作 \(\sum\limits_{n\geqslant n_0} u_n\)，是 \((u_n)_{n\geqslant n_0}\) 的<strong>部分和</strong>（sommes partielles）所成的数列 \((S_n)_{n\geqslant n_0}\)，定义为：
    {: .zh }

    \[
    \forall n \geqslant n_0,\ S_n = u_{n_0} + u_{n_0+1} + u_{n_0+2} + \cdots + u_{n-1} + u_n = \sum_{k=n_0}^{n} u_k.
    \]

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    - On peut retrouver le terme général d'une série à l'aide de ses sommes partielles :

        可以由部分和反求出级数的通项：
        {: .zh }

        \[
        u_{n_0} = S_{n_0} \quad \text{et} \quad \forall n \geqslant n_0 + 1,\ u_n = S_n - S_{n-1}.
        \]

    - Lorsqu'il n'y a pas d'ambiguïté, on note plus simplement \(\sum u_n = \sum\limits_{n\geqslant n_0} u_n\).

        当不产生歧义时，简记为 \(\sum u_n = \sum\limits_{n\geqslant n_0} u_n\)。
        {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意（Attention）</span>"

    Ne pas confondre la <u>série</u> \(\sum u_n\), la <u>suite</u> \((u_n)\) et le <u>nombre</u> \(u_n\).

    不要把<u>级数</u> \(\sum u_n\)、<u>数列</u> \((u_n)\) 与<u>数</u> \(u_n\) 混为一谈。
    {: .zh }

Puisqu'une série est une suite particulière, on retrouve toutes les définitions et tous les résultats sur les suites numériques.

由于级数是一种特殊的数列，关于数列的全部定义与结论在这里都成立。
{: .zh }

!!! success "Définition 1.2 : somme et reste d'une série convergente<br><span class='zh-title'>定义 1.2：收敛级数的和与余项</span>"

    Soit \(\sum\limits_{n\geqslant n_0} u_n\) une série numérique. On dit que \(\sum\limits_{n\geqslant n_0} u_n\) est <strong>convergente</strong> lorsque la suite \((S_n)_{n\geqslant n_0}\) de ses sommes partielles converge vers une limite finie. Cette limite est appelée la <strong>somme</strong> de \(\sum\limits_{n\geqslant n_0} u_n\) et on note :

    设 \(\sum\limits_{n\geqslant n_0} u_n\) 为一个数项级数。若其部分和所成的数列 \((S_n)_{n\geqslant n_0}\) 收敛于一个有限极限，则称 \(\sum\limits_{n\geqslant n_0} u_n\) 是<strong>收敛的</strong>（convergente）。这个极限称为 \(\sum\limits_{n\geqslant n_0} u_n\) 的<strong>和</strong>（somme），并记作：
    {: .zh }

    \[
    \sum_{n=n_0}^{+\infty} u_n = \lim_{n\to+\infty} S_n.
    \]

    De plus, lorsque \(\sum\limits_{n\geqslant n_0} u_n\) est convergente, on définit la suite \((R_n)_{n\geqslant n_0}\) de ses <strong>restes</strong> par :

    此外，当 \(\sum\limits_{n\geqslant n_0} u_n\) 收敛时，定义其<strong>余项</strong>（restes）所成的数列 \((R_n)_{n\geqslant n_0}\) 为：
    {: .zh }

    \[
    \forall n \geqslant n_0,\ R_n = \sum_{k=n_0}^{+\infty} u_k - S_n = \sum_{k=n+1}^{+\infty} u_k.
    \]

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    La suite des restes d'une série convergente converge toujours vers 0. Son étude, par exemple trouver une suite équivalente plus simple, permet de décrire la <strong>vitesse de convergence</strong> de la série vers sa somme.

    收敛级数的余项数列总收敛于 0。研究它（例如找出一个更简单的等价数列），可以刻画级数趋于其和的<strong>收敛速度</strong>（vitesse de convergence）。
    {: .zh }

!!! info "Exemple 1.3<br><span class='zh-title'>例 1.3</span>"

    - Soit \(q \in \mathbb{C}\). On a :

        设 \(q \in \mathbb{C}\)。有：
        {: .zh }

        \[
        \forall n \in \mathbb{N},\quad \sum_{k=0}^{n} q^k =
        \begin{cases}
        n + 1 & \text{si } q = 1, \\[4pt]
        \dfrac{1 - q^{n+1}}{1 - q} & \text{sinon.}
        \end{cases}
        \]

        Ainsi, la <strong>série géométrique</strong> \(\sum\limits_{n\geqslant 0} q^n\) est convergente si et seulement si \(|q| < 1\). Dans ce cas, sa somme est égale à :

        因此，<strong>几何级数</strong>（série géométrique）\(\sum\limits_{n\geqslant 0} q^n\) 收敛当且仅当 \(|q| < 1\)。此时其和等于：
        {: .zh }

        \[
        \sum_{n=0}^{+\infty} q^n = \frac{1}{1 - q}.
        \]

    - Soit \((u_n)_{n\geqslant n_0}\) une suite numérique. On a :

        设 \((u_n)_{n\geqslant n_0}\) 为一个数列。有：
        {: .zh }

        \[
        \forall n \geqslant n_0,\quad \sum_{k=n_0}^{n} (u_{k+1} - u_k) = u_{n+1} - u_{n_0}.
        \]

        Ainsi, la <strong>série télescopique</strong> \(\sum\limits_{n\geqslant n_0}(u_{n+1} - u_n)\) converge si et seulement si la suite \((u_n)_{n\geqslant n_0}\) converge.

        因此，<strong>裂项级数</strong>（série télescopique）\(\sum\limits_{n\geqslant n_0}(u_{n+1} - u_n)\) 收敛当且仅当数列 \((u_n)_{n\geqslant n_0}\) 收敛。
        {: .zh }

!!! success "Définition 1.4 : nature de séries numériques<br><span class='zh-title'>定义 1.4：级数的性质（nature）</span>"

    À faire en cours.

    课上完成。
    {: .zh }

!!! warning "Important<br><span class='zh-title'>重要（Important）</span>"

    La nature d'une série ne dépend pas de ses premiers termes : pour tout \(n_1 \geqslant n_0\), les séries \(\sum\limits_{n\geqslant n_0} u_n\) et \(\sum\limits_{n\geqslant n_1} u_n\) ont même nature. Par contre, dans le cas où ces séries convergent, leurs sommes sont différentes en général :

    级数的性质（nature，即收敛或发散）与它的最初几项无关：对任意 \(n_1 \geqslant n_0\)，级数 \(\sum\limits_{n\geqslant n_0} u_n\) 与 \(\sum\limits_{n\geqslant n_1} u_n\) 同性质。但反过来，当这两个级数都收敛时，它们的和一般并不相同：
    {: .zh }

    \[
    \sum_{n=n_0}^{+\infty} u_n = \sum_{n=n_0}^{n_1-1} u_n + \sum_{n=n_1}^{+\infty} u_n.
    \]

!!! danger "Propriété 1.5 : divergence grossière<br><span class='zh-title'>性质 1.5：粗略发散（divergence grossière）</span>"

    À faire en cours.

    课上完成。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> À faire en cours.

    <strong>证明.</strong> 课上完成。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Attention<br><span class='zh-title'>注意（Attention）</span>"

    Il existe des séries qui divergent non grossièrement, c'est-à-dire des séries divergentes dont le terme général tend vers 0.

    存在并非粗略发散的级数，即通项趋于 0 却仍然发散的级数。
    {: .zh }

!!! info "Exemple 1.6<br><span class='zh-title'>例 1.6</span>"

    La <strong>série harmonique</strong> à faire en cours.

    <strong>调和级数</strong>（série harmonique）——课上完成。
    {: .zh }

!!! danger "Propriété 1.7 : linéarité de la somme<br><span class='zh-title'>性质 1.7：和（somme）的线性性</span>"

    À faire en cours.

    课上完成。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 1 节核心术语</span>"

    - <strong>série numérique</strong>：数项级数
    - <strong>terme général \(u_n\)</strong>：通项 \(u_n\)
    - <strong>somme partielle</strong>：部分和
    - <strong>série convergente / divergente</strong>：收敛级数 / 发散级数
    - <strong>somme d'une série convergente</strong>：收敛级数的和
    - <strong>reste d'une série convergente</strong>：收敛级数的余项
    - <strong>vitesse de convergence</strong>：收敛速度
    - <strong>série géométrique；raison</strong>：几何级数；公比
    - <strong>série télescopique</strong>：裂项级数（télescopique）
    - <strong>nature d'une série</strong>：级数的性质（敛散性）
    - <strong>divergence grossière</strong>：粗略发散（通项不趋于 0）
    - <strong>linéarité de la somme</strong>：和的线性性
    - <strong>à faire en cours</strong>：课上完成

## 2　Séries à termes positifs <span class="heading-zh">正项级数</span>

Dans cette section, on considère seulement des séries à termes positifs, en particulier \(\mathbb{K} = \mathbb{R}\).

本节只考虑正项级数（séries à termes positifs），特别地取 \(\mathbb{K} = \mathbb{R}\)。
{: .zh }

!!! danger "Théorème 2.1 : nature des séries à termes positifs<br><span class='zh-title'>定理 2.1：正项级数的性质</span>"

    À faire en cours.

    课上完成。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> À faire en cours.

    <strong>证明.</strong> 课上完成。
    {: .zh }

    <p class="cqfd">∎</p>

!!! info "Exemple 2.2<br><span class='zh-title'>例 2.2</span>"

    Retour sur la série harmonique et nature de la <strong>série d'Euler</strong> \(\sum\limits_{n\geqslant 1}\frac{1}{n^2}\) à faire en cours.

    回顾调和级数，并判断<strong>欧拉级数</strong>（série d'Euler）\(\sum\limits_{n\geqslant 1}\frac{1}{n^2}\) 的性质——课上完成。
    {: .zh }

!!! warning "Remarque<br><span class='zh-title'>注（Remarque）</span>"

    On peut montrer que la somme de la série d'Euler est égale à :

    可以证明欧拉级数的和等于：
    {: .zh }

    \[
    \sum_{n=1}^{+\infty} \frac{1}{n^2} = \frac{\pi^2}{6}.
    \]

!!! danger "Théorème 2.3 : théorème de comparaison des séries à termes positifs<br><span class='zh-title'>定理 2.3：正项级数的比较判别法</span>"

    À faire en cours.

    课上完成。
    {: .zh }

!!! info "Exemple 2.4<br><span class='zh-title'>例 2.4</span>"

    Nature de \(\sum\limits_{n\geqslant 0}\frac{1}{2^n+1}\) et de \(\sum\limits_{n\geqslant 0}\frac{n}{2^n}\) à faire en cours.

    判断 \(\sum\limits_{n\geqslant 0}\frac{1}{2^n+1}\) 与 \(\sum\limits_{n\geqslant 0}\frac{n}{2^n}\) 的性质——课上完成。
    {: .zh }

!!! danger "Théorème 2.5 : sommation des équivalents<br><span class='zh-title'>定理 2.5：等价量求和（sommation des équivalents）</span>"

    Soient \((a_n)_{n\geqslant n_0}\) et \((b_n)_{n\geqslant n_0}\) deux suites réelles positives telles que \(a_n \simn b_n\). Alors \(\sum\limits_{n\geqslant n_0} a_n\) et \(\sum\limits_{n\geqslant n_0} b_n\) ont même nature. De plus :

    设 \((a_n)_{n\geqslant n_0}\) 与 \((b_n)_{n\geqslant n_0}\) 是两个非负实数列，且 \(a_n \simn b_n\)。则 \(\sum\limits_{n\geqslant n_0} a_n\) 与 \(\sum\limits_{n\geqslant n_0} b_n\) 同性质。此外：
    {: .zh }

    - si \(\sum\limits_{n\geqslant n_0} a_n\) et \(\sum\limits_{n\geqslant n_0} b_n\) convergent, alors \(\sum\limits_{k=n+1}^{+\infty} a_k \simn \sum\limits_{k=n+1}^{+\infty} b_k\),

        若 \(\sum\limits_{n\geqslant n_0} a_n\) 与 \(\sum\limits_{n\geqslant n_0} b_n\) 都收敛，则 \(\sum\limits_{k=n+1}^{+\infty} a_k \simn \sum\limits_{k=n+1}^{+\infty} b_k\)；
        {: .zh }

    - si \(\sum\limits_{n\geqslant n_0} a_n\) et \(\sum\limits_{n\geqslant n_0} b_n\) divergent, alors \(\sum\limits_{k=n_0}^{n} a_k \simn \sum\limits_{k=n_0}^{n} b_k\).

        若 \(\sum\limits_{n\geqslant n_0} a_n\) 与 \(\sum\limits_{n\geqslant n_0} b_n\) 都发散，则 \(\sum\limits_{k=n_0}^{n} a_k \simn \sum\limits_{k=n_0}^{n} b_k\)。
        {: .zh }

!!! info "Exemple 2.6<br><span class='zh-title'>例 2.6</span>"

    Retour sur la série d'Euler \(\sum\limits_{n\geqslant 1}\frac{1}{n^2}\) et équivalent des sommes partielles de \(\sum\limits_{n\geqslant 1}\frac{1}{\sqrt{n}}\) à faire en cours.

    回顾欧拉级数 \(\sum\limits_{n\geqslant 1}\frac{1}{n^2}\)，并求 \(\sum\limits_{n\geqslant 1}\frac{1}{\sqrt{n}}\) 部分和的等价——课上完成。
    {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意（Attention）</span>"

    Le théorème de sommation des équivalents est en général faux lorsque les deux suites ne sont pas de signe constant à partir d'un certain rang. Voir l'exemple 5.3.

    当两个数列从某一项起不保持符号恒定（de signe constant）时，等价量求和定理一般不再成立。参见例 5.3。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 2 节核心术语</span>"

    - <strong>série à termes positifs</strong>：正项级数
    - <strong>série harmonique</strong>：调和级数
    - <strong>série d'Euler</strong>：欧拉级数（\(\sum 1/n^2\)）
    - <strong>théorème de comparaison</strong>：比较判别法
    - <strong>équivalent</strong>：等价
    - <strong>sommation des équivalents</strong>：等价量求和
    - <strong>de signe constant</strong>：符号恒定的
    - <strong>à partir d'un certain rang</strong>：从某一项起
    - <strong>avoir même nature</strong>：同性质（同时收敛或同时发散）

## 3　Comparaison série-intégrale <span class="heading-zh">级数与积分的比较</span>

Dans cette section, on considère toujours des séries à termes positifs, en particulier \(\mathbb{K} = \mathbb{R}\).

本节仍然只考虑正项级数，特别地取 \(\mathbb{K} = \mathbb{R}\)。
{: .zh }

!!! danger "Théorème 3.1 : comparaison série-intégrale<br><span class='zh-title'>定理 3.1：级数与积分的比较</span>"

    Soit \(f : [n_0, +\infty[\, \to \mathbb{R}_+\) une fonction réelle continue et décroissante. La série \(\sum\limits_{n\geqslant n_0} f(n)\) converge si et seulement si la suite \((\int_{n_0}^{n} f(t)\,\mathrm{d}t)_{n\geqslant n_0}\) converge.

    设 \(f : [n_0, +\infty[\, \to \mathbb{R}_+\) 是连续、递减的实函数。级数 \(\sum\limits_{n\geqslant n_0} f(n)\) 收敛当且仅当数列 \((\int_{n_0}^{n} f(t)\,\mathrm{d}t)_{n\geqslant n_0}\) 收敛。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> À faire en cours.

    <strong>证明.</strong> 课上完成。
    {: .zh }

    <p class="cqfd">∎</p>

!!! info "Exemple 3.2<br><span class='zh-title'>例 3.2</span>"

    Nature de \(\sum\limits_{n\geqslant 2}\frac{1}{n\ln(n)}\) et équivalent de la série harmonique à faire en cours.

    判断 \(\sum\limits_{n\geqslant 2}\frac{1}{n\ln(n)}\) 的性质，并求调和级数的等价——课上完成。
    {: .zh }

!!! danger "Théorème 3.3 : séries de Riemann<br><span class='zh-title'>定理 3.3：黎曼级数（séries de Riemann）</span>"

    Soit \(\alpha \in \mathbb{R}\). La série \(\sum\limits_{n\geqslant 1}\frac{1}{n^\alpha}\) converge si et seulement si \(\alpha > 1\).

    设 \(\alpha \in \mathbb{R}\)。级数 \(\sum\limits_{n\geqslant 1}\frac{1}{n^\alpha}\) 收敛当且仅当 \(\alpha > 1\)。
    {: .zh }

En particulier, on retrouve que :

特别地，由此重新得到：
{: .zh }

- la série harmonique \(\sum\limits_{n\geqslant 1}\frac{1}{n}\) diverge,

    调和级数 \(\sum\limits_{n\geqslant 1}\frac{1}{n}\) 发散；
    {: .zh }

- et que la série d'Euler \(\sum\limits_{n\geqslant 1}\frac{1}{n^2}\) converge.

    以及欧拉级数 \(\sum\limits_{n\geqslant 1}\frac{1}{n^2}\) 收敛。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> À faire en cours.

    <strong>证明.</strong> 课上完成。
    {: .zh }

    <p class="cqfd">∎</p>

La méthode de comparaison série-intégrale peut s'adapter aux fonctions croissantes.

级数与积分比较的方法也可以推广到递增函数。
{: .zh }

!!! info "Exemple 3.4<br><span class='zh-title'>例 3.4</span>"

    Déterminer un équivalent de \(\ln(n!) = \sum\limits_{k=2}^{n}\ln(k)\) en cours.

    求 \(\ln(n!) = \sum\limits_{k=2}^{n}\ln(k)\) 的等价——课上完成。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>第 3 节核心术语</span>"

    - <strong>comparaison série-intégrale</strong>：级数与积分比较
    - <strong>fonction continue et décroissante</strong>：连续递减函数
    - <strong>intégrale \(\int_{n_0}^{n} f(t)\,\mathrm{d}t\)</strong>：积分
    - <strong>série de Riemann</strong>：黎曼级数（\(p\)-级数）
    - <strong>diverger / converger</strong>：发散 / 收敛
    - <strong>fonction croissante</strong>：递增函数
    - <strong>un équivalent de \dots</strong>：……的等价量
