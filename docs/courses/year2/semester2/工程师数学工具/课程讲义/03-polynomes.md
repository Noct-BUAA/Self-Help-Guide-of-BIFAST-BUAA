---
title: 第 3 章 多项式
comments: true
---

# 第 3 章　多项式

<div class="lecture-hero">
<p class="lecture-hero__fr">Chapitre n°3 — Polynômes</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Objectifs <span class="heading-zh">学习目标</span>

1. Manipuler des polynômes.

    熟练操作多项式。
    {: .zh }

1. Factoriser des polynômes à l'aide de leurs racines.

    利用多项式的根对多项式进行因式分解。
    {: .zh }

1. Décomposer des fractions rationnelles en éléments simples.

    将有理分式分解为部分分式（éléments simples）。
    {: .zh }

## Notations <span class="heading-zh">记号</span>

On rappelle que \(\mathbb{N}\) désigne l'ensemble des entiers naturels, \(\mathbb{R}\) désigne l'ensemble des nombres réels et \(\mathbb{C}\) désigne l'ensemble des nombres complexes. Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\).

回忆：\(\mathbb{N}\) 表示自然数集，\(\mathbb{R}\) 表示实数集，\(\mathbb{C}\) 表示复数集。本章中，\(\mathbb{K}\) 表示 \(\mathbb{R}\) 或 \(\mathbb{C}\)。
{: .zh }

## 1　Polynômes <span class="heading-zh">多项式</span>

!!! success "Définition 1.1 : polynôme<br><span class='zh-title'>定义 1.1：多项式（polynôme）</span>"

    Un <strong>polynôme</strong> est une suite \((a_n)_{n\geqslant 0}\in\mathbb{K}^{\mathbb{N}}\) dont tous les termes sont nuls à partir d'un certain rang :

    <strong>多项式</strong>（polynôme）是一个序列 \((a_n)_{n\geqslant 0}\in\mathbb{K}^{\mathbb{N}}\)，其所有项从某一项起均为零：
    {: .zh }

    \[
    \exists N\in\mathbb{N},\quad \forall n>N,\quad a_n=0.
    \]

    Le polynôme est alors noté :

    该多项式则记为：
    {: .zh }

    \[
    P=a_0+a_1X+a_2X^2+\cdots+a_NX^N=\sum_{n=0}^{N}a_nX^n
    \]

    où \(X\) est un symbole mathématique. Les termes de la suite \((a_0,a_1,a_2,\dots)\in\mathbb{K}^{\mathbb{N}}\) sont appelés les <strong>coefficients</strong> du polynôme \(P\), en particulier le premier terme \(a_0\) est appelé le <strong>coefficient constant</strong> de \(P\). On note \(\mathbb{K}[X]\) l'ensemble des polynômes.

    其中 \(X\) 是一个数学符号。序列 \((a_0,a_1,a_2,\dots)\in\mathbb{K}^{\mathbb{N}}\) 的各项称为多项式 \(P\) 的<strong>系数</strong>（coefficients），特别地，第一项 \(a_0\) 称为 \(P\) 的<strong>常数项</strong>（coefficient constant）。所有多项式的集合记为 \(\mathbb{K}[X]\)。
    {: .zh }

!!! info "Exemple 1.2<br><span class='zh-title'>例 1.2</span>"

    - \(1-\pi X+\frac{1}{2}X^{888}\in\mathbb{R}[X]\) et \((1-i)X^2+X^6-jX^8\in\mathbb{C}[X]\).

        \(1-\pi X+\frac{1}{2}X^{888}\in\mathbb{R}[X]\)，且 \((1-i)X^2+X^6-jX^8\in\mathbb{C}[X]\)。
        {: .zh }

    - Puisque \(\mathbb{R}\subset\mathbb{C}\), on a \(\mathbb{R}[X]\subset\mathbb{C}[X]\).

        由于 \(\mathbb{R}\subset\mathbb{C}\)，故有 \(\mathbb{R}[X]\subset\mathbb{C}[X]\)。
        {: .zh }

    - Tout nombre \(a\in\mathbb{K}\) peut être vu comme le <strong>polynôme constant</strong> \(P=a\in\mathbb{K}[X]\) qui correspond à la suite \((a,0,0,0,\dots)\in\mathbb{K}^{\mathbb{N}}\). Autrement dit, \(\mathbb{K}\subset\mathbb{K}[X]\). En particulier, \(0\) est un polynôme, appelé le <strong>polynôme nul</strong>.

        任意数 \(a\in\mathbb{K}\) 都可看作<strong>常数多项式</strong>（polynôme constant）\(P=a\in\mathbb{K}[X]\)，它对应序列 \((a,0,0,0,\dots)\in\mathbb{K}^{\mathbb{N}}\)。换言之，\(\mathbb{K}\subset\mathbb{K}[X]\)。特别地，\(0\) 是一个多项式，称为<strong>零多项式</strong>（polynôme nul）。
        {: .zh }

    - \(X\) est un polynôme qui correspond à la suite \((0,1,0,0,0,\dots)\in\mathbb{K}^{\mathbb{N}}\).

        \(X\) 是一个多项式，对应序列 \((0,1,0,0,0,\dots)\in\mathbb{K}^{\mathbb{N}}\)。
        {: .zh }

!!! warning "Important<br><span class='zh-title'>要点</span>"

    Par définition, deux polynômes sont égaux si et seulement si leurs coefficients de même indice sont égaux. Plus précisément, pour tout \(P=\sum_{n=0}^{N_P}a_nX^n\in\mathbb{K}[X]\) et tout \(Q=\sum_{n=0}^{N_Q}b_nX^n\in\mathbb{K}[X]\) :

    按定义，两个多项式相等当且仅当它们同一下标的系数相等。更确切地说，对任意 \(P=\sum_{n=0}^{N_P}a_nX^n\in\mathbb{K}[X]\) 与 \(Q=\sum_{n=0}^{N_Q}b_nX^n\in\mathbb{K}[X]\)：
    {: .zh }

    \[
    P=Q\iff\forall n\in\mathbb{N},\quad a_n=b_n.
    \]

    Cette méthode, souvent utilisée en pratique, s'appelle l'<strong>identification des coefficients</strong>.

    这种方法在实践中经常使用，称为<strong>系数比较法</strong>（identification des coefficients）。
    {: .zh }

!!! success "Définition 1.3 : opérations avec les polynômes<br><span class='zh-title'>定义 1.3：多项式的运算</span>"

    L'ensemble \(\mathbb{K}[X]\) est muni d'une <strong>addition</strong> et d'une <strong>multiplication</strong> définies pour tout \(P=\sum_{n=0}^{N_P}a_nX^n\in\mathbb{K}[X]\) et tout \(Q=\sum_{n=0}^{N_Q}b_nX^n\in\mathbb{K}[X]\) par :

    集合 \(\mathbb{K}[X]\) 上定义了<strong>加法</strong>（addition）与<strong>乘法</strong>（multiplication），对任意 \(P=\sum_{n=0}^{N_P}a_nX^n\in\mathbb{K}[X]\) 与 \(Q=\sum_{n=0}^{N_Q}b_nX^n\in\mathbb{K}[X]\)，定义为：
    {: .zh }

    \[
    \left\{
    \begin{aligned}
    P+Q &= (a_0+b_0)+(a_1+b_1)X+(a_2+b_2)X^2+\cdots\\
        &= \sum_{n=0}^{\max\{N_P,N_Q\}}(a_n+b_n)X^n,\\[4pt]
    PQ &= a_0b_0+(a_0b_1+a_1b_0)X+(a_0b_2+a_1b_1+a_2b_0)X^2+\cdots\\
       &= \sum_{n=0}^{N_P+N_Q}\left(\sum_{k=0}^{n}a_kb_{n-k}\right)X^n.
    \end{aligned}
    \right.
    \]

!!! info "Exemple 1.4<br><span class='zh-title'>例 1.4</span>"

    - \(\displaystyle
        (1+\sqrt{2}X+X^2)(1-\sqrt{2}X+X^2)
        =
        \left(
        \begin{matrix}
        1+(-\sqrt{2}+\sqrt{2})X\\
        +(1-2+1)X^2\\
        +(0+\sqrt{2}-\sqrt{2}+0)X^3\\
        +(0+0+1+0+0)X^4
        \end{matrix}
        \right)
        =1+X^4.\)

    - Pour des polynômes constants \(P=a\in\mathbb{K}\) et \(Q=b\in\mathbb{K}\), on retrouve l'addition et la multiplication des nombres :

        对于常数多项式 \(P=a\in\mathbb{K}\) 与 \(Q=b\in\mathbb{K}\)，我们重新得到了数的加法与乘法：
        {: .zh }

        \[
        \left\{
        \begin{aligned}
        P+Q &= (a+0X+0X^2+\dots)+(b+0X+0X^2+\dots)\\
            &= (a+b)+0X+0X^2+\cdots=a+b,\\
        PQ  &= (a+0X+0X^2+\dots)(b+0X+0X^2+\dots)\\
            &= ab+(0+0)X+(0+0+0)X^2+\cdots=ab.
        \end{aligned}
        \right.
        \]

    - Pour tout \((m,n)\in\mathbb{N}^2\), on a :

        对任意 \((m,n)\in\mathbb{N}^2\)，有：
        {: .zh }

        \[
        \begin{aligned}
        X^mX^n
        &= \left(\sum_{i=0}^{m}a_iX^i\right)\left(\sum_{j=0}^{n}b_jX^j\right)
           \quad\text{où } a_i=\begin{cases}1 & \text{si } i=m\\ 0 & \text{sinon}\end{cases}
           \quad\text{et } b_j=\begin{cases}1 & \text{si } j=n\\ 0 & \text{sinon}\end{cases}\\
        &= \sum_{k=0}^{m+n}\left(\sum_{i=0}^{k}a_ib_{k-i}\right)X^k
           \quad\text{où } a_ib_{k-i}=\begin{cases}1 & \text{si } i=m \text{ et } k-i=n\\ 0 & \text{sinon}\end{cases}\\
        &= X^{m+n}.
        \end{aligned}
        \]

    - On peut montrer par récurrence que : \(\forall n\in\mathbb{N},\ (X)^n=X^n\).

        可以用归纳法证明：\(\forall n\in\mathbb{N},\ (X)^n=X^n\)。
        {: .zh }

!!! danger "Propriété 1.5<br><span class='zh-title'>性质 1.5</span>"

    Comme pour les nombres (réels ou complexes), l'addition et la multiplication de polynômes ont les mêmes propriétés algébriques : l'<strong>associativité</strong>, la <strong>commutativité</strong> et la <strong>distributivité</strong>.

    与（实或复）数一样，多项式的加法与乘法具有相同的代数性质：<strong>结合律</strong>（associativité）、<strong>交换律</strong>（commutativité）与<strong>分配律</strong>（distributivité）。
    {: .zh }

En particulier, on rappelle le résultat suivant qui se généralise aux polynômes.

特别地，我们回忆以下结果，它可推广到多项式。
{: .zh }

!!! danger "Théorème 1.6 : formule du binôme de Newton<br><span class='zh-title'>定理 1.6：牛顿二项式公式</span>"

    Pour tout \(P\in\mathbb{K}[X]\) et tout \(Q\in\mathbb{K}[X]\) :

    对任意 \(P\in\mathbb{K}[X]\) 与 \(Q\in\mathbb{K}[X]\)：
    {: .zh }

    \[
    \forall n\in\mathbb{N},\quad (P+Q)^n=\sum_{k=0}^{n}\binom{n}{k}P^kQ^{n-k}
    \quad\text{où}\quad \binom{n}{k}=\frac{n!}{k!(n-k)!}.
    \]

<span class="lecture-figure lecture-figure--float-right"><img class="fig-light" src="../../../../../../assets/images/lectures/outils-mathematiques/03-polynomes/fig-01.svg" alt="讲义插图 1"><img class="fig-dark" src="../../../../../../assets/images/lectures/outils-mathematiques/03-polynomes/fig-01-dark.svg" alt="讲义插图 1"></span>

On rappelle également que les <strong>coefficients binomiaux</strong> vérifient la relation de récurrence (avec la convention \(\binom{n}{k}=0\) si \(k>n\)) :

我们还回忆，<strong>二项式系数</strong>（coefficients binomiaux）满足递推关系（采用约定：当 \(k>n\) 时 \(\binom{n}{k}=0\)）：
{: .zh }

\[
\forall(k,n)\in\mathbb{N}^2,\quad \binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1}.
\]

On peut donc les calculer à l'aide du <strong>triangle de Pascal</strong>.

因此可以借助<strong>帕斯卡三角形</strong>（triangle de Pascal）计算它们。
{: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>polynôme</strong>：多项式
    - <strong>coefficient / coefficient constant</strong>：系数 / 常数项
    - <strong>polynôme constant / polynôme nul</strong>：常数多项式 / 零多项式
    - <strong>identification des coefficients</strong>：系数比较法
    - <strong>on note …</strong>：记作……
    - <strong>si et seulement si</strong>：当且仅当
    - <strong>autrement dit</strong>：换言之
    - <strong>en particulier</strong>：特别地

## 2　Fonctions polynomiales <span class="heading-zh">多项式函数</span>

!!! success "Définition 2.1 : fonction polynomiale<br><span class='zh-title'>定义 2.1：多项式函数（fonction polynomiale）</span>"

    Une fonction \(f:\mathscr{D}_f\to\mathbb{K}\) définie sur \(\mathscr{D}_f\subset\mathbb{K}\) est dite <strong>polynomiale</strong> lorsqu'il existe un polynôme \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\) tel que :

    定义在 \(\mathscr{D}_f\subset\mathbb{K}\) 上的函数 \(f:\mathscr{D}_f\to\mathbb{K}\) 称为<strong>多项式函数</strong>（fonction polynomiale），若存在多项式 \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\) 使得：
    {: .zh }

    \[
    \forall x\in\mathscr{D}_f,\quad f(x)=a_0+a_1x+a_2x^2+\cdots+a_Nx^N=\sum_{n=0}^{N}a_nx^n=P(x).
    \]

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Une fonction polynomiale n'est pas nécessairement définie sur tout \(\mathbb{K}\) !

    多项式函数不一定在整个 \(\mathbb{K}\) 上有定义！
    {: .zh }

!!! info "Exemple 2.2<br><span class='zh-title'>例 2.2</span>"

    - \(x\mapsto\cos(\arccos(x))\) est une fonction polynomiale définie sur \([-1,1]\) car :

        \(x\mapsto\cos(\arccos(x))\) 是定义在 \([-1,1]\) 上的多项式函数，因为：
        {: .zh }

        \[
        \forall x\in[-1,1],\quad \cos\bigl(\arccos(x)\bigr)=x.
        \]

    - \(x\mapsto|x|\) est une fonction définie sur \(\mathbb{R}\) qui n'est pas polynomiale (car non dérivable en 0).

        \(x\mapsto|x|\) 是定义在 \(\mathbb{R}\) 上的函数，但它不是多项式函数（因为在 \(0\) 处不可导）。
        {: .zh }

    - Pour tout \(n\in\mathbb{N}^*\), \(z\mapsto\frac{z^n-1}{z-1}\) est une fonction polynomiale définie sur \(\mathbb{C}\setminus\{1\}\) car :

        对任意 \(n\in\mathbb{N}^*\)，\(z\mapsto\frac{z^n-1}{z-1}\) 是定义在 \(\mathbb{C}\setminus\{1\}\) 上的多项式函数，因为：
        {: .zh }

        \[
        \forall z\in\mathbb{C}\setminus\{1\},\quad \frac{z^n-1}{z-1}=1+z+z^2+\cdots+z^{n-1}.
        \]

!!! success "Définition 2.3 : composition<br><span class='zh-title'>定义 2.3：复合（composition）</span>"

    L'ensemble \(\mathbb{K}[X]\) est muni d'une <strong>composition</strong> définie comme pour les fonctions, c'est-à-dire pour tout \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\) et tout \(Q\in\mathbb{K}[X]\) :

    集合 \(\mathbb{K}[X]\) 上定义了<strong>复合</strong>（composition），其定义方式与函数的复合相同，即对任意 \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\) 与 \(Q\in\mathbb{K}[X]\)：
    {: .zh }

    \[
    P\circ Q=a_0+a_1Q+a_2Q^2+\cdots+a_NQ^N=\sum_{n=0}^{N}a_nQ^n=P(Q).
    \]

!!! info "Exemple 2.4<br><span class='zh-title'>例 2.4</span>"

    Si \(P=1+X^3\) et \(Q=1-X^2\) alors \(P\circ Q=1+(1-X^2)^3=2-3X^2+3X^4-X^6\) et \(Q\circ P=1-(1+X^3)^2=-2X^3-X^6\). En particulier, la composition n'est pas commutative.

    若 \(P=1+X^3\) 且 \(Q=1-X^2\)，则 \(P\circ Q=1+(1-X^2)^3=2-3X^2+3X^4-X^6\)，且 \(Q\circ P=1-(1+X^3)^2=-2X^3-X^6\)。特别地，复合不满足交换律。
    {: .zh }

!!! success "Définition 2.5 : dérivation<br><span class='zh-title'>定义 2.5：求导（dérivation）</span>"

    Pour tout polynôme \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\), on définit son <strong>polynôme dérivé</strong> par :

    对任意多项式 \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\)，定义其<strong>导多项式</strong>（polynôme dérivé）为：
    {: .zh }

    \[
    P'=a_1+2a_2X+3a_3X^2+\cdots+Na_NX^{N-1}=\sum_{n=0}^{N-1}(n+1)a_{n+1}X^n.
    \]

    On peut dériver plusieurs fois : pour tout \(k\in\mathbb{N}\), on note \(P^{(k)}\) le <strong>polynôme dérivé \(k\) fois</strong> qui est défini par \(P^{(0)}=P\) et la relation de récurrence \(P^{(k+1)}=(P^{(k)})'\).

    可以多次求导：对任意 \(k\in\mathbb{N}\)，记 \(P^{(k)}\) 为<strong>求导 \(k\) 次所得的多项式</strong>，它由 \(P^{(0)}=P\) 与递推关系 \(P^{(k+1)}=(P^{(k)})'\) 定义。
    {: .zh }

On retrouve les formules classiques de dérivation des fonctions réelles.

我们由此重新得到实函数求导的经典公式。
{: .zh }

!!! danger "Propriété 2.6<br><span class='zh-title'>性质 2.6</span>"

    Pour tout \((P,Q)\in\mathbb{K}[X]^2\) :

    对任意 \((P,Q)\in\mathbb{K}[X]^2\)：
    {: .zh }

    \[
    (P+Q)'=P'+Q',\qquad (PQ)'=P'Q+PQ'\qquad\text{et}\qquad (P\circ Q)'=(P'\circ Q)Q'.
    \]

On peut exprimer les coefficients d'un polynôme à l'aide de ses dérivées en 0. Plus généralement, on a le résultat suivant.

可以用多项式在 \(0\) 处的各阶导数来表示其系数。更一般地，有如下结果。
{: .zh }

!!! danger "Théorème 2.7 : formule de Taylor pour les polynômes<br><span class='zh-title'>定理 2.7：多项式的泰勒公式</span>"

    Soient \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\) et \(a\in\mathbb{K}\). Alors :

    设 \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\) 且 \(a\in\mathbb{K}\)。则：
    {: .zh }

    \[
    P=\sum_{n=0}^{N}\frac{P^{(n)}(a)}{n!}(X-a)^n.
    \]

    En particulier : \(\forall n\in\mathbb{N},\ a_n=\frac{P^{(n)}(0)}{n!}\).

    特别地：\(\forall n\in\mathbb{N},\ a_n=\frac{P^{(n)}(0)}{n!}\)。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> On pose \(Q=P(X+a)=\sum_{n=0}^{N}b_nX^n\). Ainsi :

    \[
    P=Q(X-a)=\sum_{n=0}^{N}b_n(X-a)^n
    \qquad\text{et}\qquad
    \forall n\in\mathbb{N},\quad Q^{(n)}(0)=P^{(n)}(a).
    \]

    <strong>证明.</strong> 令 \(Q=P(X+a)=\sum_{n=0}^{N}b_nX^n\)。于是：
    {: .zh }

    !!! danger "Lemme 2.8<br><span class='zh-title'>引理 2.8</span>"

        \[
        \forall(k,n)\in\mathbb{N}^2,\quad (X^n)^{(k)}
        =\begin{cases}
        \dfrac{n!}{(n-k)!}X^{n-k} & \text{si } k\leqslant n,\\[6pt]
        0 & \text{sinon}.
        \end{cases}
        \]

        即：单项式 \(X^n\) 求导 \(k\) 次，当 \(k\leqslant n\) 时得到 \(\frac{n!}{(n-k)!}X^{n-k}\)，否则为 \(0\)。
        {: .zh }

    D'après le lemme, on a :

    \[
    \forall k\in\mathbb{N},\quad Q^{(k)}
    =\sum_{n=k}^{N}\frac{n!}{(n-k)!}b_nX^{n-k}
    =\sum_{n=0}^{N-k}\frac{(n+k)!}{n!}b_{n+k}X^n
    \quad\text{donc}\quad Q^{(k)}(0)=k!\,b_k.
    \]

    根据该引理，有：
    {: .zh }

    Par conséquent :

    \[
    P=Q(X-a)=\sum_{n=0}^{N}\frac{Q^{(n)}(0)}{n!}(X-a)^n
    =\sum_{n=0}^{N}\frac{P^{(n)}(a)}{n!}(X-a)^n.
    \]

    因此：
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>fonction polynomiale</strong>：多项式函数
    - <strong>composition</strong>：复合
    - <strong>polynôme dérivé / dériver</strong>：导多项式 / 求导
    - <strong>on pose …</strong>：令……
    - <strong>tel que</strong>：使得
    - <strong>on retrouve</strong>：重新得到
    - <strong>d'après le lemme</strong>：根据引理
    - <strong>par conséquent</strong>：因此

## 3　Degré <span class="heading-zh">次数</span>

!!! success "Définition 3.1 : degré d'un polynôme<br><span class='zh-title'>定义 3.1：多项式的次数（degré）</span>"

    Soit \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\). Si \(P\neq0\) alors il existe un unique entier \(\deg(P)\in\mathbb{N}\), appelé le <strong>degré</strong> de \(P\), tel que :

    设 \(P=\sum_{n=0}^{N}a_nX^n\in\mathbb{K}[X]\)。若 \(P\neq0\)，则存在唯一的整数 \(\deg(P)\in\mathbb{N}\)，称为 \(P\) 的<strong>次数</strong>（degré），使得：
    {: .zh }

    \[
    P=a_0+a_1X+a_2X^2+\cdots+a_{\deg(P)}X^{\deg(P)}
    \qquad\text{et}\qquad a_{\deg(P)}\neq0.
    \]

    Si \(P=0\), on utilise la convention \(\deg(0)=-\infty\). Pour tout \(n\in\mathbb{N}\), on note \(\mathbb{K}_n[X]\) l'ensemble des polynômes de degré inférieur ou égal à \(n\) (y compris le polynôme nul).

    若 \(P=0\)，采用约定 \(\deg(0)=-\infty\)。对任意 \(n\in\mathbb{N}\)，记 \(\mathbb{K}_n[X]\) 为次数小于或等于 \(n\) 的多项式（包括零多项式）的集合。
    {: .zh }

Autrement dit, si \(P\neq0\) alors \(\deg(P)=\max\{n\in\mathbb{N}\mid a_n\neq0\}\).

换言之，若 \(P\neq0\)，则 \(\deg(P)=\max\{n\in\mathbb{N}\mid a_n\neq0\}\)。
{: .zh }

!!! info "Exemple 3.2<br><span class='zh-title'>例 3.2</span>"

    - \(\deg(0)=-\infty\), \(\deg(5)=0\), \(\deg(6X^7-3X^8+0X^9)=8\) et \(\forall n\in\mathbb{N},\ \deg(X^n)=n\).

        \(\deg(0)=-\infty\)，\(\deg(5)=0\)，\(\deg(6X^7-3X^8+0X^9)=8\)，且 \(\forall n\in\mathbb{N},\ \deg(X^n)=n\)。
        {: .zh }

    - \(\mathbb{K}_0[X]\) est l'ensemble des polynômes constants.

        \(\mathbb{K}_0[X]\) 是常数多项式的集合。
        {: .zh }

!!! success "Définition 3.3 : coefficient dominant<br><span class='zh-title'>定义 3.3：首项系数（coefficient dominant）</span>"

    Soit \(P\in\mathbb{K}[X]\setminus\{0\}\). Le coefficient d'indice \(\deg(P)\) de \(P\) est appelé son <strong>coefficient dominant</strong>. De plus, on dit que \(P\) est <strong>unitaire</strong> lorsque son coefficient dominant est égal à 1.

    设 \(P\in\mathbb{K}[X]\setminus\{0\}\)。\(P\) 中下标为 \(\deg(P)\) 的系数称为它的<strong>首项系数</strong>（coefficient dominant）。此外，若首项系数等于 1，则称 \(P\) 是<strong>首一的</strong>（unitaire）。
    {: .zh }

!!! danger "Propriété 3.4<br><span class='zh-title'>性质 3.4</span>"

    - \(\forall(P,Q)\in\mathbb{K}[X]^2\), \(\deg(P+Q)\leqslant\max\bigl\{\deg(P),\deg(Q)\bigr\}\) avec égalité si \(\deg(P)\neq\deg(Q)\),

        对任意 \((P,Q)\in\mathbb{K}[X]^2\)，\(\deg(P+Q)\leqslant\max\{\deg(P),\deg(Q)\}\)，且当 \(\deg(P)\neq\deg(Q)\) 时取等号，
        {: .zh }

    - \(\forall(P,Q)\in\mathbb{K}[X]^2\), \(\deg(PQ)=\deg(P)+\deg(Q)\),

        对任意 \((P,Q)\in\mathbb{K}[X]^2\)，\(\deg(PQ)=\deg(P)+\deg(Q)\)，
        {: .zh }

    - \(\forall(P,Q)\in\mathbb{K}[X]^2\), \(\deg(Q)\geqslant1\implies\deg(P\circ Q)=\deg(P)\deg(Q)\),

        对任意 \((P,Q)\in\mathbb{K}[X]^2\)，\(\deg(Q)\geqslant1\implies\deg(P\circ Q)=\deg(P)\deg(Q)\)，
        {: .zh }

    - \(\forall(P,k)\in\mathbb{K}[X]\times\mathbb{N}\), \(\deg(P^{(k)})=\begin{cases}\deg(P)-k & \text{si } \deg(P)\geqslant k,\\ -\infty & \text{sinon}.\end{cases}\)

        对任意 \((P,k)\in\mathbb{K}[X]\times\mathbb{N}\)，\(\deg(P^{(k)})=\begin{cases}\deg(P)-k & \text{若 } \deg(P)\geqslant k,\\ -\infty & \text{否则}.\end{cases}\)
        {: .zh }

- Si \(\deg(P)=\deg(Q)\in\mathbb{N}\) alors \(\deg(P+Q)=\deg(P)=\deg(Q)\) si et seulement si la somme des coefficients dominants de \(P\) et \(Q\) n'est pas égale à 0.

    若 \(\deg(P)=\deg(Q)\in\mathbb{N}\)，则 \(\deg(P+Q)=\deg(P)=\deg(Q)\) 当且仅当 \(P\) 与 \(Q\) 的首项系数之和不等于 0。
    {: .zh }

- Si \(\deg(Q)<1\), donc \(Q=b\in\mathbb{K}\) est un polynôme constant, alors \(\deg(P\circ Q)=\deg(P(b))\) est égal à 0 si \(P(b)\neq0\) et à \(-\infty\) si \(P(b)=0\).

    若 \(\deg(Q)<1\)，即 \(Q=b\in\mathbb{K}\) 是常数多项式，则 \(\deg(P\circ Q)=\deg(P(b))\)：当 \(P(b)\neq0\) 时等于 0，当 \(P(b)=0\) 时等于 \(-\infty\)。
    {: .zh }

!!! danger "Théorème 3.5 : intégrité dans \(\mathbb{K}[X]\)<br><span class='zh-title'>定理 3.5：\(\mathbb{K}[X]\) 的整性</span>"

    \[
    \forall(P,Q)\in\mathbb{K}[X]^2,\quad PQ=0\iff(P=0\ \text{ou}\ Q=0).
    \]

    即：两个多项式之积为零，当且仅当其中至少有一个为零。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong>

    \[
    \begin{aligned}
    PQ=0 &\iff \deg(PQ)=-\infty \iff \deg(P)+\deg(Q)=-\infty\\
    &\iff \bigl(\deg(P)=-\infty\ \text{ou}\ \deg(Q)=-\infty\bigr)
    \iff (P=0\ \text{ou}\ Q=0).
    \end{aligned}
    \]

    <strong>证明.</strong> 即：若乘积为零，则其次数为 \(-\infty\)，故两个多项式的次数中至少一个为 \(-\infty\)，从而至少一个多项式为零。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Remarque<br><span class='zh-title'>注</span>"

    L'<strong>intégrité</strong> dans \(\mathbb{K}[X]\) est une propriété remarquable des polynômes. En effet, il n'y a pas d'intégrité dans l'ensemble des fonctions. Par exemple, \(f:x\mapsto|x|+x\) et \(g:x\mapsto|x|-x\) ne sont pas égales à la fonction constante égale à 0 (car \(f(1)=g(-1)=2\neq0\)) alors que&nbsp;:

    \(\mathbb{K}[X]\) 中的<strong>整性</strong>（intégrité）是多项式的一个显著性质。事实上，函数集合中并不具有整性。例如，\(f:x\mapsto|x|+x\) 与 \(g:x\mapsto|x|-x\) 都不等于恒为零的常函数（因为 \(f(1)=g(-1)=2\neq0\)），然而：
    {: .zh }

    \[
    \forall x\in\mathbb{R},\quad f(x)g(x)=|x|^2-x^2=0.
    \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>degré d'un polynôme</strong>：多项式的次数
    - <strong>coefficient dominant</strong>：首项系数
    - <strong>polynôme unitaire</strong>：首一多项式
    - <strong>intégrité</strong>：整性
    - <strong>avec égalité si …</strong>：当……时取等号
    - <strong>si et seulement si</strong>：当且仅当
    - <strong>autrement dit</strong>：换言之
