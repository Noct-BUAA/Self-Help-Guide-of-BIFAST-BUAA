---
title: 第 4 章 矩阵
comments: true
---

# 第 4 章　矩阵

<div class="lecture-hero">
<p class="lecture-hero__fr">Chapitre n°4 — Matrices</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

    Convention : les paragraphes en retrait, en bleu foncé et en corps réduit sont la traduction chinoise.

    缩进、深蓝色、小字号的段落为中文翻译。
    {: .zh }

## Objectifs <span class="heading-zh">学习目标</span>

1. Manipuler des matrices.

    熟练操作矩阵。
    {: .zh }

2. Effectuer des calculs matriciels à l'aide des coefficients.

    利用系数进行矩阵计算。
    {: .zh }

3. Effectuer des calculs matriciels à l'aide des propriétés des opérations.

    利用运算性质进行矩阵计算。
    {: .zh }

## Notations <span class="heading-zh">记号</span>

On rappelle que \(\mathbb{N}\) désigne l'ensemble des entiers naturels, \(\mathbb{R}\) désigne l'ensemble des nombres réels et \(\mathbb{C}\) désigne l'ensemble des nombres complexes. Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\).

回忆：\(\mathbb{N}\) 表示自然数集，\(\mathbb{R}\) 表示实数集，\(\mathbb{C}\) 表示复数集。本章中，\(\mathbb{K}\) 表示 \(\mathbb{R}\) 或 \(\mathbb{C}\)。
{: .zh }

## 1　Matrices rectangulaires <span class="heading-zh">矩形矩阵</span>

Dans cette section, on fixe deux entiers \((n,p)\in(\mathbb{N}^*)^2\).

本节固定两个整数 \((n,p)\in(\mathbb{N}^*)^2\)。
{: .zh }

!!! success "Définition 1.1 : matrice<br><span class='zh-title'>定义 1.1：矩阵（matrice）</span>"

    Une <strong>matrice</strong> est un tableau de nombres de \(\mathbb{K}\) de la forme :

    一个<strong>矩阵</strong>（matrice）是 \(\mathbb{K}\) 中数构成的表格，形如：
    {: .zh }

    \[
    M=(m_{i,j})_{\substack{1\leqslant i\leqslant n\\1\leqslant j\leqslant p}}
    =
    \begin{pmatrix}
    m_{1,1} & m_{1,2} & \cdots & m_{1,p}\\
    m_{2,1} & m_{2,2} & \cdots & m_{2,p}\\
    \vdots  & \vdots  & \ddots & \vdots\\
    m_{n,1} & m_{n,2} & \cdots & m_{n,p}
    \end{pmatrix}.
    \]

    - \(n\) est appelé le nombre de <strong>lignes</strong>,

        \(n\) 称为<strong>行数</strong>（lignes），
        {: .zh }

    - \(p\) est appelé le nombre de <strong>colonnes</strong>,

        \(p\) 称为<strong>列数</strong>（colonnes），
        {: .zh }

    - \(n\times p\) est appelé la <strong>taille</strong> et on dit que \(M\) est une matrice \(n\times p\),

        \(n\times p\) 称为<strong>尺寸</strong>（taille），并称 \(M\) 是一个 \(n\times p\) 矩阵，
        {: .zh }

    - pour tout \(i\in\llbracket 1,n\rrbracket\) et tout \(j\in\llbracket 1,p\rrbracket\), \(m_{i,j}\in\mathbb{K}\) est appelé le <strong>coefficient</strong> sur la \(i\)-ième ligne et la \(j\)-ième colonne.

        对任意 \(i\in\llbracket 1,n\rrbracket\) 与任意 \(j\in\llbracket 1,p\rrbracket\)，\(m_{i,j}\in\mathbb{K}\) 称为第 \(i\) 行第 \(j\) 列上的<strong>系数</strong>（coefficient）。
        {: .zh }

    On note \(\mathscr{M}_{n,p}(\mathbb{K})\) l'ensemble des matrices \(n\times p\).

    记 \(\mathscr{M}_{n,p}(\mathbb{K})\) 为所有 \(n\times p\) 矩阵的集合。
    {: .zh }

Lorsqu'il n'y a pas d'ambiguïté, on note plus simplement \(M=(m_{i,j})\).

在无歧义时，简记为 \(M=(m_{i,j})\)。
{: .zh }

!!! info "Exemple 1.2<br><span class='zh-title'>例 1.2</span>"

    - \[
      \begin{pmatrix}
      -1 & \sqrt{2} & e\\
      \ln(3) & \pi & 0
      \end{pmatrix}\in\mathscr{M}_{2,3}(\mathbb{R})
      \qquad\text{et}\qquad
      \begin{pmatrix}
      1 & 2-3i\\
      i & 0\\
      1+i & 1-i
      \end{pmatrix}\in\mathscr{M}_{3,2}(\mathbb{C}).
      \]

    - Une <strong>matrice ligne</strong> est une matrice \(1\times p\) de la forme \(L=\begin{pmatrix}l_1 & l_2 & \dots & l_p\end{pmatrix}\).

        <strong>行矩阵</strong>（matrice ligne）是形如 \(L=\begin{pmatrix}l_1 & l_2 & \dots & l_p\end{pmatrix}\) 的 \(1\times p\) 矩阵。
        {: .zh }

    - Une <strong>matrice colonne</strong> est une matrice \(n\times 1\) de la forme \(C=\begin{pmatrix}c_1\\c_2\\\vdots\\c_n\end{pmatrix}\).

        <strong>列矩阵</strong>（matrice colonne）是形如 \(C=\begin{pmatrix}c_1\\c_2\\\vdots\\c_n\end{pmatrix}\) 的 \(n\times 1\) 矩阵。
        {: .zh }

    - On note \(0_{n,p}\) la matrice de \(\mathscr{M}_{n,p}(\mathbb{K})\) dont tous les coefficients sont nuls, appelée la <strong>matrice nulle</strong>.

        记 \(0_{n,p}\) 为 \(\mathscr{M}_{n,p}(\mathbb{K})\) 中所有系数全为零的矩阵，称为<strong>零矩阵</strong>（matrice nulle）。
        {: .zh }

!!! success "Définition 1.3 : opérations avec les matrices<br><span class='zh-title'>定义 1.3：矩阵的运算</span>"

    On définit trois opérations avec les matrices.

    定义矩阵的三种运算。
    {: .zh }

    - La <strong>multiplication par un scalaire</strong> définie pour tout nombre \(\lambda\in\mathbb{K}\) et toute matrice \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) par :

        <strong>标量乘法</strong>（multiplication par un scalaire）：对任意数 \(\lambda\in\mathbb{K}\) 与任意矩阵 \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\)，定义为：
        {: .zh }

        \[
        \lambda M=(\lambda m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K}).
        \]

    - L'<strong>addition de matrices</strong> définie pour toutes matrices \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) et \(B=(b_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) telles que <u>\(A\) et \(B\) ont la même taille</u> par :

        <strong>矩阵加法</strong>（addition de matrices）：对任意矩阵 \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) 与 \(B=(b_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\)，且 <u>\(A\) 与 \(B\) 尺寸相同</u>，定义为：
        {: .zh }

        \[
        A+B=(a_{i,j}+b_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K}).
        \]

    - La <strong>multiplication de matrices</strong> définie pour toutes matrices \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) et \(B=(b_{i,j})\in\mathscr{M}_{p,q}(\mathbb{K})\) (où \(q\in\mathbb{N}^*\)) telles que <u>le nombre de colonnes de \(A\) est égal au nombre de lignes de \(B\)</u> par :

        <strong>矩阵乘法</strong>（multiplication de matrices）：对任意矩阵 \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) 与 \(B=(b_{i,j})\in\mathscr{M}_{p,q}(\mathbb{K})\)（其中 \(q\in\mathbb{N}^*\)），且 <u>\(A\) 的列数等于 \(B\) 的行数</u>，定义为：
        {: .zh }

        \[
        AB=\left(\sum_{k=1}^{p}a_{i,k}b_{k,j}\right)\in\mathscr{M}_{n,q}(\mathbb{K}).
        \]

!!! info "Exemple 1.4<br><span class='zh-title'>例 1.4</span>"

    - \[
      \begin{aligned}
      7\begin{pmatrix}1 & 2 & 3\\4 & 5 & 6\end{pmatrix}
      -\begin{pmatrix}8 & 9 & 10\\11 & 12 & 13\end{pmatrix}
      &=
      \begin{pmatrix}7 & 14 & 21\\28 & 35 & 42\end{pmatrix}
      +
      \begin{pmatrix}-8 & -9 & -10\\-11 & -12 & -13\end{pmatrix}\\
      &=
      \begin{pmatrix}-1 & 5 & 11\\17 & 23 & 29\end{pmatrix}.
      \end{aligned}
      \]

    - Pour calculer le produit de deux matrices, on peut organiser les calculs dans un tableau. Par exemple, si on considère les matrices :

        计算两个矩阵的乘积时，可以把计算过程组织成表格。例如，考虑矩阵：
        {: .zh }

        \[
        A=\begin{pmatrix}1 & 2 & 3\\4 & 5 & 6\end{pmatrix}\in\mathscr{M}_{2,3}(\mathbb{R}),
        \qquad\text{et}\qquad
        B=\begin{pmatrix}
        7 & 8 & 9 & 10\\
        11 & 12 & 13 & 14\\
        15 & 16 & 17 & 18
        \end{pmatrix}\in\mathscr{M}_{3,4}(\mathbb{R}),
        \]

        alors on peut calculer le produit \(AB=(m_{i,j})\in\mathscr{M}_{2,4}(\mathbb{R})\) de la façon suivante :

        则可以按如下方式计算乘积 \(AB=(m_{i,j})\in\mathscr{M}_{2,4}(\mathbb{R})\)：
        {: .zh }

        \[
        \begin{array}{c|c|c|c|c}
        \hline
        & 7 & 8 & 9 & 10\\
        \hline
        & 11 & 12 & 13 & 14\\
        \hline
        & 15 & 16 & 17 & 18\\
        \hline
        1\quad 2\quad 3 & m_{1,1} & & & \\
        \hline
        4\quad 5\quad 6 & & & m_{2,3} & \\
        \hline
        \end{array}
        \]

        \[
        m_{1,1}=1\times7+2\times11+3\times15=74
        \qquad\text{et}\qquad
        m_{2,3}=4\times9+5\times13+6\times17=203.
        \]

        En procédant de même pour les autres coefficients, on obtient :

        对其余系数作同样的计算，得到：
        {: .zh }

        \[
        AB=\begin{pmatrix}74 & 80 & 86 & 92\\173 & 188 & 203 & 218\end{pmatrix}\in\mathscr{M}_{2,4}(\mathbb{R}).
        \]

        Par contre, le produit \(BA\) n'est pas défini car le nombre de colonnes de \(B\) n'est pas égal au nombre de lignes de \(A\).

        另一方面，乘积 \(BA\) 无定义，因为 \(B\) 的列数不等于 \(A\) 的行数。
        {: .zh }

    - Pour \(n=p=1\), on retrouve l'addition et la multiplication des nombres. Autrement dit, l'ensemble \(\mathscr{M}_{1,1}(\mathbb{K})\) des matrices \(1\times1\) peut être vu comme l'ensemble \(\mathbb{K}\).

        当 \(n=p=1\) 时，重新得到数的加法与乘法。换言之，\(1\times1\) 矩阵的集合 \(\mathscr{M}_{1,1}(\mathbb{K})\) 可视为集合 \(\mathbb{K}\)。
        {: .zh }

    - Pour tout \(\lambda\in\mathbb{K}\) et tout \(M\in\mathscr{M}_{n,p}(\mathbb{K})\), on a :

        对任意 \(\lambda\in\mathbb{K}\) 与任意 \(M\in\mathscr{M}_{n,p}(\mathbb{K})\)，有：
        {: .zh }

        \[
        \lambda 0_{n,p}=0_{n,p},\qquad
        M+0_{n,p}=0_{n,p}+M=M,\qquad
        M0_{p,q}=0_{n,q}
        \qquad\text{et}\qquad
        0_{q,n}M=0_{q,p}.
        \]

!!! danger "Propriété 1.5<br><span class='zh-title'>性质 1.5</span>"

    Les opérations avec les matrices vérifient les propriétés suivantes :

    矩阵运算满足以下性质：
    {: .zh }

    - <strong>associativité</strong>（结合律）：

        \[
        \left\{
        \begin{aligned}
        &\forall(A,B,C)\in\mathscr{M}_{n,p}(\mathbb{K})^3,\quad (A+B)+C=A+(B+C)\\
        &\forall(A,B,C)\in\mathscr{M}_{n,p}(\mathbb{K})\times\mathscr{M}_{p,q}(\mathbb{K})\times\mathscr{M}_{q,r}(\mathbb{K}),\quad (AB)C=A(BC)
        \end{aligned}
        \right.
        \]

    - <strong>distributivité</strong>（分配律）：

        \[
        \left\{
        \begin{aligned}
        &\forall(A,(B,C))\in\mathscr{M}_{n,p}(\mathbb{K})\times\mathscr{M}_{p,q}(\mathbb{K})^2,\quad A(B+C)=AB+AC\\
        &\forall((A,B),C)\in\mathscr{M}_{n,p}(\mathbb{K})^2\times\mathscr{M}_{p,q}(\mathbb{K}),\quad (A+B)C=AC+BC
        \end{aligned}
        \right.
        \]

    - <strong>linéarité</strong>（线性性）：

        \[
        \left\{
        \begin{aligned}
        &\forall((\lambda,\mu),A)\in\mathbb{K}^2\times\mathscr{M}_{n,p}(\mathbb{K}),\quad (\lambda+\mu)A=\lambda A+\mu A\\
        &\forall(\lambda,(A,B))\in\mathbb{K}\times\mathscr{M}_{n,p}(\mathbb{K})^2,\quad \lambda(A+B)=\lambda A+\lambda B
        \end{aligned}
        \right.
        \]

    - <strong>compatibilité</strong>（相容性）：

        \[
        \left\{
        \begin{aligned}
        &\forall((\lambda,\mu),A)\in\mathbb{K}^2\times\mathscr{M}_{n,p}(\mathbb{K}),\quad \lambda(\mu A)=(\lambda\mu)A\\
        &\forall(\lambda,A,B)\in\mathbb{K}\times\mathscr{M}_{n,p}(\mathbb{K})\times\mathscr{M}_{p,q}(\mathbb{K}),\quad \lambda(AB)=(\lambda A)B=A(\lambda B)
        \end{aligned}
        \right.
        \]

!!! demo ""

    <strong>Démonstration.</strong> Par exemple, pour l'associativité de la multiplication de matrices, on pose : \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\), \(B=(b_{i,j})\in\mathscr{M}_{p,q}(\mathbb{K})\) et \(C=(c_{i,j})\in\mathscr{M}_{q,r}(\mathbb{K})\). Alors :

    <strong>证明.</strong> 例如，对矩阵乘法的结合律，令 \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\)、\(B=(b_{i,j})\in\mathscr{M}_{p,q}(\mathbb{K})\)、\(C=(c_{i,j})\in\mathscr{M}_{q,r}(\mathbb{K})\)。则：
    {: .zh }

    \[
    \begin{aligned}
    AB&=\left(\sum_{k=1}^{p}a_{i,k}b_{k,j}\right)\in\mathscr{M}_{n,q}(\mathbb{K}),\\
    \text{donc}\quad (AB)C&=\left(\sum_{\ell=1}^{q}\left(\sum_{k=1}^{p}a_{i,k}b_{k,\ell}\right)c_{\ell,j}\right)\in\mathscr{M}_{n,r}(\mathbb{K}),
    \end{aligned}
    \]

    et de même :

    同样地：
    {: .zh }

    \[
    \begin{aligned}
    BC&=\left(\sum_{\ell=1}^{q}b_{i,\ell}c_{\ell,j}\right)\in\mathscr{M}_{p,r}(\mathbb{K}),\\
    \text{donc}\quad A(BC)&=\left(\sum_{k=1}^{p}a_{i,k}\left(\sum_{\ell=1}^{q}b_{k,\ell}c_{\ell,j}\right)\right)\in\mathscr{M}_{n,r}(\mathbb{K}).
    \end{aligned}
    \]

    On en déduit que \((AB)C=A(BC)\) car pour tout \(i\in\llbracket 1,n\rrbracket\) et tout \(j\in\llbracket 1,r\rrbracket\) :

    由此可知 \((AB)C=A(BC)\)，因为对任意 \(i\in\llbracket 1,n\rrbracket\) 与 \(j\in\llbracket 1,r\rrbracket\)：
    {: .zh }

    \[
    \sum_{\ell=1}^{q}\left(\sum_{k=1}^{p}a_{i,k}b_{k,\ell}\right)c_{\ell,j}
    =
    \sum_{\substack{1\leqslant k\leqslant p\\1\leqslant\ell\leqslant q}}a_{i,k}b_{k,\ell}c_{\ell,j}
    =
    \sum_{k=1}^{p}a_{i,k}\left(\sum_{\ell=1}^{q}b_{k,\ell}c_{\ell,j}\right).
    \]

    On montre de même les autres propriétés.

    其余性质同理可证。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    L'addition des matrices est commutative : \(\forall(A,B)\in\mathscr{M}_{n,p}(\mathbb{K})^2,\ A+B=B+A\). Par contre, la multiplication de matrices n'est pas commutative !

    矩阵加法满足交换律：\(\forall(A,B)\in\mathscr{M}_{n,p}(\mathbb{K})^2,\ A+B=B+A\)。但矩阵乘法不满足交换律！
    {: .zh }

    - En effet, les multiplications \(AB\) et \(BA\) ne sont pas toujours définies. Par exemple, si \(A\) est une matrice \(2\times 3\) et \(B\) est une matrice \(3\times 4\), alors \(AB\) est une matrice \(2\times 4\) mais la multiplication \(BA\) n'est pas définie.

        事实上，乘积 \(AB\) 与 \(BA\) 并非总有定义。例如，若 \(A\) 是 \(2\times 3\) 矩阵、\(B\) 是 \(3\times 4\) 矩阵，则 \(AB\) 是 \(2\times 4\) 矩阵，而乘积 \(BA\) 无定义。
        {: .zh }

    - Même si \(AB\) et \(BA\) sont bien définies, elles n'ont pas toujours la même taille. Par exemple :

        即使 \(AB\) 与 \(BA\) 都有定义，它们的尺寸也未必相同。例如：
        {: .zh }

        \[
        \underbrace{\begin{pmatrix}1\\2\end{pmatrix}}_{2\times 1}
        \underbrace{\begin{pmatrix}3 & 4\end{pmatrix}}_{1\times 2}
        =
        \underbrace{\begin{pmatrix}3 & 4\\6 & 8\end{pmatrix}}_{2\times 2}
        \neq
        \underbrace{\begin{pmatrix}11\end{pmatrix}}_{1\times 1}
        =
        \underbrace{\begin{pmatrix}3 & 4\end{pmatrix}}_{1\times 2}
        \underbrace{\begin{pmatrix}1\\2\end{pmatrix}}_{2\times 1}.
        \]

    - Et même si \(AB\) et \(BA\) ont la même taille, \(AB\neq BA\) en général. Par exemple :

        即使 \(AB\) 与 \(BA\) 尺寸相同，一般也有 \(AB\neq BA\)。例如：
        {: .zh }

        \[
        \begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}
        \begin{pmatrix}5 & 6\\7 & 8\end{pmatrix}
        =
        \begin{pmatrix}19 & 22\\43 & 50\end{pmatrix}
        \neq
        \begin{pmatrix}23 & 34\\31 & 46\end{pmatrix}
        =
        \begin{pmatrix}5 & 6\\7 & 8\end{pmatrix}
        \begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}.
        \]

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Il n'y a pas d'intégrité dans l'ensemble des matrices ! Par exemple :

    矩阵集合中不存在<strong>整性</strong>（intégrité）！例如：
    {: .zh }

    \[
    \underbrace{\begin{pmatrix}2 & -3\\-4 & 6\end{pmatrix}}_{\neq 0_{2,2}}
    \underbrace{\begin{pmatrix}3 & -6\\2 & -4\end{pmatrix}}_{\neq 0_{2,2}}
    =
    \begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}.
    \]

!!! success "Définition 1.6 : transposition<br><span class='zh-title'>定义 1.6：转置（transposition）</span>"

    La <strong>transposée</strong> d'une matrice \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) est la matrice :

    矩阵 \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) 的<strong>转置</strong>（transposée）是矩阵：
    {: .zh }

    \[
    M^{\mathrm{T}}=(m_{j,i})\in\mathscr{M}_{p,n}(\mathbb{K}).
    \]

!!! info "Exemple 1.7<br><span class='zh-title'>例 1.7</span>"

    \[
    \begin{pmatrix}1 & 2 & 3\\4 & 5 & 6\end{pmatrix}^{\mathrm{T}}
    =
    \begin{pmatrix}1 & 4\\2 & 5\\3 & 6\end{pmatrix}.
    \]

!!! danger "Propriété 1.8<br><span class='zh-title'>性质 1.8</span>"

    - \(\forall M\in\mathscr{M}_{n,p}(\mathbb{K}),\quad (M^{\mathrm{T}})^{\mathrm{T}}=M\),

    - \(\forall(\lambda,M)\in\mathbb{K}\times\mathscr{M}_{n,p}(\mathbb{K}),\quad (\lambda M)^{\mathrm{T}}=\lambda M^{\mathrm{T}}\),

    - \(\forall(A,B)\in\mathscr{M}_{n,p}(\mathbb{K})^2,\quad (A+B)^{\mathrm{T}}=A^{\mathrm{T}}+B^{\mathrm{T}}\),

    - \(\forall(A,B)\in\mathscr{M}_{n,p}(\mathbb{K})\times\mathscr{M}_{p,q}(\mathbb{K}),\quad (AB)^{\mathrm{T}}=B^{\mathrm{T}}A^{\mathrm{T}}\).

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Attention aux tailles : si \(A\) est une matrice \(n\times p\) et \(B\) est une matrice \(p\times q\), alors \(B^{\mathrm{T}}A^{\mathrm{T}}\) est une matrice \(q\times n\) mais la multiplication \(A^{\mathrm{T}}B^{\mathrm{T}}\) n'est en général pas définie.

    注意尺寸：若 \(A\) 是 \(n\times p\) 矩阵、\(B\) 是 \(p\times q\) 矩阵，则 \(B^{\mathrm{T}}A^{\mathrm{T}}\) 是 \(q\times n\) 矩阵，而乘积 \(A^{\mathrm{T}}B^{\mathrm{T}}\) 一般无定义。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice</strong>：矩阵
    - <strong>ligne / colonne</strong>：行 / 列
    - <strong>taille</strong>：尺寸
    - <strong>coefficient</strong>：系数
    - <strong>matrice ligne / matrice colonne</strong>：行矩阵 / 列矩阵
    - <strong>matrice nulle</strong>：零矩阵
    - <strong>multiplication par un scalaire</strong>：标量乘法
    - <strong>addition de matrices</strong>：矩阵加法
    - <strong>multiplication de matrices</strong>：矩阵乘法
    - <strong>associativité / distributivité</strong>：结合律 / 分配律
    - <strong>linéarité / compatibilité</strong>：线性性 / 相容性
    - <strong>transposition</strong>：转置
    - <strong>commutativité</strong>：交换律
    - <strong>intégrité</strong>：整性
    - <strong>être bien définie</strong>：有定义 / 定义良好

## 2　Matrices carrées <span class="heading-zh">方阵</span>

Dans cette section, on fixe un entier \(n\in\mathbb{N}^*\).

本节固定一个整数 \(n\in\mathbb{N}^*\)。
{: .zh }

!!! success "Définition 2.1 : matrice carrée<br><span class='zh-title'>定义 2.1：方阵（matrice carrée）</span>"

    Une matrice qui a le même nombre de lignes et de colonnes est dite <strong>matrice carrée</strong>. On note \(\mathscr{M}_n(\mathbb{K})\) l'ensemble des matrices carrées \(n\times n\), \(0_n\) la matrice de \(\mathscr{M}_n(\mathbb{K})\) dont tous les coefficients sont nuls, appelée la <strong>matrice nulle</strong>, et \(I_n\) la matrice suivante appelée la <strong>matrice identité</strong> :

    行数与列数相同的矩阵称为<strong>方阵</strong>（matrice carrée）。记 \(\mathscr{M}_n(\mathbb{K})\) 为所有 \(n\times n\) 方阵的集合，\(0_n\) 为 \(\mathscr{M}_n(\mathbb{K})\) 中所有系数全为零的矩阵，称为<strong>零矩阵</strong>（matrice nulle）；并记 \(I_n\) 为如下矩阵，称为<strong>单位矩阵</strong>（matrice identité）：
    {: .zh }

    \[
    I_n=
    \begin{pmatrix}
    1 & 0 & \cdots & 0\\
    0 & \ddots & \ddots & \vdots\\
    \vdots & \ddots & \ddots & 0\\
    0 & \cdots & 0 & 1
    \end{pmatrix}\in\mathscr{M}_n(\mathbb{K}).
    \]

!!! info "Exemple 2.2<br><span class='zh-title'>例 2.2</span>"

    - Si \(A\) et \(B\) sont des matrices carrées \(n\times n\), alors \(AB\) et \(BA\) sont aussi des matrices carrées \(n\times n\) (mais \(AB\neq BA\) en général).

        若 \(A\) 与 \(B\) 都是 \(n\times n\) 方阵，则 \(AB\) 与 \(BA\) 也是 \(n\times n\) 方阵（但一般 \(AB\neq BA\)）。
        {: .zh }

    - Pour tout \(M\in\mathscr{M}_n(\mathbb{K})\), on a : \(MI_n=I_nM=M\).

        对任意 \(M\in\mathscr{M}_n(\mathbb{K})\)，有 \(MI_n=I_nM=M\)。
        {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Ne pas confondre la matrice identité \(I_n\) et le nombre 1 ! Par exemple, pour tout \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\), on a : \(AB+A=AB+AI_n=A(B+I_n)\), mais l'addition \(B+1\) n'est pas définie.

    不要把单位矩阵 \(I_n\) 与数 \(1\) 混淆！例如，对任意 \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\)，有 \(AB+A=AB+AI_n=A(B+I_n)\)，但加法 \(B+1\) 无定义。
    {: .zh }

!!! success "Définition 2.3 : puissances d'une matrice carrée<br><span class='zh-title'>定义 2.3：方阵的幂</span>"

    Pour toute matrice carrée \(M\in\mathscr{M}_n(\mathbb{K})\) et tout \(k\in\mathbb{N}\), on définit \(M^k\) par \(M^0=I_n\) et la relation de récurrence \(M^{k+1}=MM^k=M^kM\).

    对任意方阵 \(M\in\mathscr{M}_n(\mathbb{K})\) 与任意 \(k\in\mathbb{N}\)，定义 \(M^k\) 为 \(M^0=I_n\) 及递推关系 \(M^{k+1}=MM^k=M^kM\)。
    {: .zh }

!!! info "Exemple 2.4<br><span class='zh-title'>例 2.4</span>"

    - On considère la matrice carrée \(U_n=\begin{pmatrix}1 & \cdots & 1\\ \vdots & & \vdots\\ 1 & \cdots & 1\end{pmatrix}\in\mathscr{M}_n(\mathbb{R})\). On a :

        考虑方阵 \(U_n=\begin{pmatrix}1 & \cdots & 1\\ \vdots & & \vdots\\ 1 & \cdots & 1\end{pmatrix}\in\mathscr{M}_n(\mathbb{R})\)。有：
        {: .zh }

        \[
        U_n^0=I_n=
        \begin{pmatrix}
        1 & 0 & \cdots & 0\\
        0 & \ddots & \ddots & \vdots\\
        \vdots & \ddots & \ddots & 0\\
        0 & \cdots & 0 & 1
        \end{pmatrix},
        \qquad
        U_n^1=U_n=
        \begin{pmatrix}
        1 & \cdots & 1\\
        \vdots & & \vdots\\
        1 & \cdots & 1
        \end{pmatrix},
        \]

        \[
        U_n^2=U_nU_n=
        \begin{pmatrix}
        n & \cdots & n\\
        \vdots & & \vdots\\
        n & \cdots & n
        \end{pmatrix}
        =nU_n,
        \qquad
        U_n^3=U_nU_n^2=U_n\,nU_n=nU_n^2=n^2U_n,
        \]

        \[
        U_n^4=U_nU_n^3=U_n\,n^2U_n=n^2U_n^2=n^3U_n,\quad\dots
        \]

        On conjecture que, pour tout \(k\in\mathbb{N}^*\), \(U_n^k=n^{k-1}U_n\). On peut montrer cette conjecture par récurrence.

        猜测：对任意 \(k\in\mathbb{N}^*\)，\(U_n^k=n^{k-1}U_n\)。可用归纳法证明这一猜测。
        {: .zh }

        - <strong>Initialisation.</strong> On a \(U_n^1=U_n=n^{1-1}U_n\) donc le résultat est vrai pour \(k=1\).

            <strong>初始化.</strong> 有 \(U_n^1=U_n=n^{1-1}U_n\)，故 \(k=1\) 时结论成立。
            {: .zh }

        - <strong>Hérédité.</strong> On suppose que \(U_n^k=n^{k-1}U_n\) pour une puissance \(k\in\mathbb{N}^*\) fixée. Alors :

            <strong>归纳递推.</strong> 设对某个固定的幂次 \(k\in\mathbb{N}^*\) 有 \(U_n^k=n^{k-1}U_n\)。则：
            {: .zh }

            \[
            U_n^{k+1}=U_nU_n^k=n^{k-1}U_n^2=n^{k+1-1}U_n.
            \]

            Ainsi, le résultat est vrai aussi pour la puissance \(k+1\).

            因此，对幂次 \(k+1\) 结论也成立。
            {: .zh }

        - <strong>Conclusion.</strong> D'après le principe de récurrence, le résultat est vrai pour toute puissance \(k\in\mathbb{N}^*\).

            <strong>结论.</strong> 由归纳原理，结论对所有幂次 \(k\in\mathbb{N}^*\) 成立。
            {: .zh }

    - Soit \(M=\begin{pmatrix}-1 & 2 & 1 & 1\\-1 & 3 & 3 & 1\\1 & -2 & -1 & -1\\1 & -3 & -3 & -1\end{pmatrix}\in\mathscr{M}_4(\mathbb{R})\). On a :

        设 \(M=\begin{pmatrix}-1 & 2 & 1 & 1\\-1 & 3 & 3 & 1\\1 & -2 & -1 & -1\\1 & -3 & -3 & -1\end{pmatrix}\in\mathscr{M}_4(\mathbb{R})\)。有：
        {: .zh }

        \[
        M^2=MM=
        \begin{pmatrix}-1 & 2 & 1 & 1\\-1 & 3 & 3 & 1\\1 & -2 & -1 & -1\\1 & -3 & -3 & -1\end{pmatrix}
        \begin{pmatrix}-1 & 2 & 1 & 1\\-1 & 3 & 3 & 1\\1 & -2 & -1 & -1\\1 & -3 & -3 & -1\end{pmatrix}
        =
        \begin{pmatrix}1 & -1 & 1 & -1\\2 & -2 & 2 & -2\\-1 & 1 & -1 & 1\\-2 & 2 & -2 & 2\end{pmatrix},
        \]

        \[
        M^3=MM^2=
        \begin{pmatrix}-1 & 2 & 1 & 1\\-1 & 3 & 3 & 1\\1 & -2 & -1 & -1\\1 & -3 & -3 & -1\end{pmatrix}
        \begin{pmatrix}1 & -1 & 1 & -1\\2 & -2 & 2 & -2\\-1 & 1 & -1 & 1\\-2 & 2 & -2 & 2\end{pmatrix}
        =
        \begin{pmatrix}0 & 0 & 0 & 0\\0 & 0 & 0 & 0\\0 & 0 & 0 & 0\\0 & 0 & 0 & 0\end{pmatrix}=0_4.
        \]

        On en déduit que, pour tout \(k\geqslant3\), \(M^k=0_4\).

        由此可知，对任意 \(k\geqslant3\)，\(M^k=0_4\)。
        {: .zh }

!!! success "Définition 2.5 : matrice nilpotente<br><span class='zh-title'>定义 2.5：幂零矩阵（matrice nilpotente）</span>"

    On dit qu'une matrice carrée \(M\in\mathscr{M}_n(\mathbb{K})\) est <strong>nilpotente</strong> lorsque :

    若存在 \(k\in\mathbb{N}^*\) 使 \(M^k=0_n\)，则称方阵 \(M\in\mathscr{M}_n(\mathbb{K})\) 是<strong>幂零的</strong>（nilpotente）：
    {: .zh }

    \[
    \exists k\in\mathbb{N}^*,\quad M^k=0_n.
    \]

    Le plus petit entier \(k\in\mathbb{N}^*\) vérifiant cette propriété est appelé l'<strong>indice de nilpotence</strong>.

    满足该性质的最小整数 \(k\in\mathbb{N}^*\) 称为<strong>幂零指数</strong>（indice de nilpotence）。
    {: .zh }

On peut montrer que l'indice de nilpotence est inférieur ou égal à \(n\). Ainsi, \(M\in\mathscr{M}_n(\mathbb{K})\) est nilpotente si et seulement si \(M^n=0_n\), et dans ce cas : \(\forall k\geqslant n,\ M^k=0_n\).

可以证明幂零指数小于或等于 \(n\)。因此，\(M\in\mathscr{M}_n(\mathbb{K})\) 幂零当且仅当 \(M^n=0_n\)；此时对任意 \(k\geqslant n\)，有 \(M^k=0_n\)。
{: .zh }

!!! success "Définition 2.6 : polynôme de matrice<br><span class='zh-title'>定义 2.6：矩阵多项式（polynôme de matrice）</span>"

    Soient \(M\in\mathscr{M}_n(\mathbb{K})\) et \(P=\sum_{k=0}^{N}a_kX^k\in\mathbb{K}[X]\). On définit :

    设 \(M\in\mathscr{M}_n(\mathbb{K})\)，\(P=\sum_{k=0}^{N}a_kX^k\in\mathbb{K}[X]\)。定义：
    {: .zh }

    \[
    P(M)=\sum_{k=0}^{N}a_kM^k=a_0I_n+a_1M+a_2M^2+\cdots+a_NM^N\in\mathscr{M}_n(\mathbb{K}).
    \]

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Ne pas oublier \(M^0=I_n\) ! L'addition d'une matrice et d'un nombre n'est pas définie.

    不要忘记 \(M^0=I_n\)！矩阵与数的加法没有定义。
    {: .zh }

!!! info "Exemple 2.7<br><span class='zh-title'>例 2.7</span>"

    Soient \(P=X^2-3X+2\in\mathbb{R}[X]\) et \(M=\begin{pmatrix}2 & 1 & -1\\1 & 2 & -1\\1 & 1 & 0\end{pmatrix}\). On a :

    设 \(P=X^2-3X+2\in\mathbb{R}[X]\)，\(M=\begin{pmatrix}2 & 1 & -1\\1 & 2 & -1\\1 & 1 & 0\end{pmatrix}\)。有：
    {: .zh }

    \[
    \begin{aligned}
    P(M)&=M^2-3M+2I_3\\
    &=
    \begin{pmatrix}4 & 3 & -3\\3 & 4 & -3\\3 & 3 & -2\end{pmatrix}
    +\begin{pmatrix}-6 & -3 & 3\\-3 & -6 & 3\\-3 & -3 & 0\end{pmatrix}
    +\begin{pmatrix}2 & 0 & 0\\0 & 2 & 0\\0 & 0 & 2\end{pmatrix}
    =
    \begin{pmatrix}0 & 0 & 0\\0 & 0 & 0\\0 & 0 & 0\end{pmatrix}
    =0_3.
    \end{aligned}
    \]

    On dit que \(P\) est un <strong>polynôme annulateur</strong> de \(M\). En particulier :

    称 \(P\) 为 \(M\) 的<strong>零化多项式</strong>（polynôme annulateur）。特别地：
    {: .zh }

    \[
    M^2=3M-2I_3,\qquad
    M^3=MM^2=3M^2-2M=9M-6I_3-2M=7M-6I_3,
    \]

    \[
    M^4=MM^3=7M^2-6M=21M-14I_3-6M=15M-14I_3,\quad\dots
    \]

    On peut montrer par récurrence que, pour tout \(k\in\mathbb{N}\), il existe \((a_k,b_k)\in\mathbb{R}^2\) tels que \(M^k=a_kM+b_kI_3\). De plus, les suites \((a_k)_{k\geqslant0}\) et \((b_k)_{k\geqslant0}\) vérifient :

    可以用归纳法证明：对任意 \(k\in\mathbb{N}\)，存在 \((a_k,b_k)\in\mathbb{R}^2\) 使 \(M^k=a_kM+b_kI_3\)。此外，数列 \((a_k)_{k\geqslant0}\) 与 \((b_k)_{k\geqslant0}\) 满足：
    {: .zh }

    \[
    (a_0,b_0)=(0,1),\quad (a_1,b_1)=(1,0)
    \qquad\text{et}\qquad
    \forall k\geqslant0,\quad
    \begin{cases}
    a_{k+1}=3a_k+b_k,\\
    b_{k+1}=-2a_k,
    \end{cases}
    \]

    donc :

    因此：
    {: .zh }

    \[
    \forall k\geqslant0,\quad
    \begin{cases}
    a_{k+2}=3a_{k+1}+b_{k+1}=3a_{k+1}-2a_k\\
    b_{k+2}=-2a_{k+1}=-6a_k-2b_k=3b_{k+1}-2b_k
    \end{cases}
    \]

    On reconnaît des suites récurrentes linéaires d'ordre 2. On sait calculer le terme général à l'aide de l'équation caractéristique \(q^2=3q-2\) d'inconnue \(q\in\mathbb{C}\). On obtient :

    可辨认出这是二阶线性递推数列。借助特征方程 \(q^2=3q-2\)（未知量 \(q\in\mathbb{C}\)）可求出通项。得到：
    {: .zh }

    \[
    \forall k\geqslant0,\quad (a_k,b_k)=(2^k-1,\,2-2^k)
    \qquad\text{donc}\qquad
    M^k=(2^k-1)M+(2-2^k)I_3.
    \]

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Puisque la multiplication de matrices n'est pas commutative, certaines propriétés des puissances de nombres ne se généralisent pas aux puissances de matrices. En particulier :

    由于矩阵乘法不满足交换律，某些关于数的幂的性质不能推广到矩阵的幂。特别地：
    {: .zh }

    - \((AB)^2=ABAB\neq AABB=A^2B^2\) en général,

        一般地，\((AB)^2=ABAB\neq AABB=A^2B^2\)，
        {: .zh }

    - \((A+B)^2=A^2+AB+BA+B^2\neq A^2+2AB+B^2\) en général.

        一般地，\((A+B)^2=A^2+AB+BA+B^2\neq A^2+2AB+B^2\)。
        {: .zh }

!!! danger "Théorème 2.8 : formule du binôme de Newton pour les matrices<br><span class='zh-title'>定理 2.8：矩阵的牛顿二项式公式</span>"

    Pour tout \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\) et tout \(p\in\mathbb{N}\) :

    对任意 \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\) 与任意 \(p\in\mathbb{N}\)：
    {: .zh }

    \[
    AB=BA\implies (A+B)^p=\sum_{k=0}^{p}\binom{p}{k}A^kB^{p-k}.
    \]

    Lorsque \(AB=BA\), on dit que \(A\) et \(B\) <strong>commutent</strong>.

    当 \(AB=BA\) 时，称 \(A\) 与 \(B\) <strong>可交换</strong>（commutent）。
    {: .zh }

!!! info "Exemple 2.9<br><span class='zh-title'>例 2.9</span>"

    Soit \(M=\begin{pmatrix}2 & 1 & \cdots & 1\\1 & \ddots & \ddots & \vdots\\\vdots & \ddots & \ddots & 1\\1 & \cdots & 1 & 2\end{pmatrix}\in\mathscr{M}_n(\mathbb{R})\). On pose \(U_n=M-I_n\), donc :

    设 \(M=\begin{pmatrix}2 & 1 & \cdots & 1\\1 & \ddots & \ddots & \vdots\\\vdots & \ddots & \ddots & 1\\1 & \cdots & 1 & 2\end{pmatrix}\in\mathscr{M}_n(\mathbb{R})\)。令 \(U_n=M-I_n\)，则：
    {: .zh }

    \[
    M=U_n+I_n
    \qquad\text{et}\qquad
    U_nI_n=U_n=I_nU_n.
    \]

    Puisque \(U_n\) et \(I_n\) commutent, on a d'après la formule du binôme de Newton :

    由于 \(U_n\) 与 \(I_n\) 可交换，根据牛顿二项式公式有：
    {: .zh }

    \[
    \forall p\in\mathbb{N},\quad
    M^p=(U_n+I_n)^p=\sum_{k=0}^{p}\binom{p}{k}U_n^kI_n^{p-k}=\sum_{k=0}^{p}\binom{p}{k}U_n^k.
    \]

    Or on a vu dans l'exemple 2.4 que, pour tout \(k\in\mathbb{N}^*\), \(U_n^k=n^{k-1}U_n\). Par conséquent :

    而由例 2.4 已证：对任意 \(k\in\mathbb{N}^*\)，\(U_n^k=n^{k-1}U_n\)。因此：
    {: .zh }

    \[
    \begin{aligned}
    \forall p\in\mathbb{N},\quad
    M^p
    &=\binom{p}{0}U_n^0+\sum_{k=1}^{p}\binom{p}{k}n^{k-1}U_n
    =I_n+\frac{1}{n}\left(\sum_{k=0}^{p}\binom{p}{k}n^k-\binom{p}{0}n^0\right)U_n\\
    &=I_n+\frac{1}{n}\bigl((n+1)^p-1\bigr)U_n
    \qquad\text{d'après la formule du binôme de Newton.}
    \end{aligned}
    \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice carrée d'ordre \(n\)</strong>：\(n\) 阶方阵
    - <strong>matrice identité</strong>：单位矩阵
    - <strong>puissance d'une matrice</strong>：矩阵的幂
    - <strong>démonstration par récurrence</strong>：归纳法证明
    - <strong>matrice nilpotente / indice de nilpotence</strong>：幂零矩阵 / 幂零指数
    - <strong>polynôme de matrice</strong>：矩阵多项式
    - <strong>polynôme annulateur</strong>：零化多项式
    - <strong>commuter</strong>：交换
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式

## 3　Matrices carrées particulières <span class="heading-zh">特殊方阵</span>

!!! success "Définition 3.1 : matrice diagonale, triangulaire<br><span class='zh-title'>定义 3.1：对角矩阵与三角矩阵</span>"

    Soit \(M=(m_{i,j})\in\mathscr{M}_n(\mathbb{K})\) une matrice carrée.

    设 \(M=(m_{i,j})\in\mathscr{M}_n(\mathbb{K})\) 为方阵。
    {: .zh }

    - \(M\) est dite <strong>diagonale</strong> lorsque :

        若满足下式，则称 \(M\) 为<strong>对角矩阵</strong>（diagonale）：
        {: .zh }

        \[
        \forall(i,j)\in\llbracket1,n\rrbracket^2,\quad i\neq j\implies m_{i,j}=0.
        \]

        Dans ce cas, on note \(M=\operatorname{Diag}(m_{1,1},m_{2,2},\dots,m_{n,n})\).

        此时记 \(M=\operatorname{Diag}(m_{1,1},m_{2,2},\dots,m_{n,n})\)。
        {: .zh }

    - \(M\) est dite <strong>triangulaire supérieure</strong> lorsque :

        若满足下式，则称 \(M\) 为<strong>上三角矩阵</strong>（triangulaire supérieure）：
        {: .zh }

        \[
        \forall(i,j)\in\llbracket1,n\rrbracket^2,\quad i>j\implies m_{i,j}=0.
        \]

    - \(M\) est dite <strong>triangulaire inférieure</strong> lorsque :

        若满足下式，则称 \(M\) 为<strong>下三角矩阵</strong>（triangulaire inférieure）：
        {: .zh }

        \[
        \forall(i,j)\in\llbracket1,n\rrbracket^2,\quad i<j\implies m_{i,j}=0.
        \]

!!! info "Exemple 3.2<br><span class='zh-title'>例 3.2</span>"

    - \(0_n=\operatorname{Diag}(\underbrace{0,0,\dots,0}_{n\text{ fois}})\) et \(I_n=\operatorname{Diag}(\underbrace{1,1,\dots,1}_{n\text{ fois}})\).

        即对角线上分别为 \(n\) 个 \(0\) 与 \(n\) 个 \(1\) 的对角矩阵。
        {: .zh }

    - La somme et le produit de matrices triangulaires supérieures sont des matrices triangulaires supérieures, et de même pour les matrices triangulaires inférieures. Par exemple si \(A=(a_{i,j})\in\mathscr{M}_n(\mathbb{K})\) et \(B=(b_{i,j})\in\mathscr{M}_n(\mathbb{K})\) sont triangulaires supérieures alors pour tout \((i,j)\in\llbracket1,n\rrbracket^2\) tel que \(i>j\), on a :

        上三角矩阵的和与积仍是上三角矩阵，下三角矩阵亦然。例如，若 \(A=(a_{i,j})\in\mathscr{M}_n(\mathbb{K})\) 与 \(B=(b_{i,j})\in\mathscr{M}_n(\mathbb{K})\) 为上三角矩阵，则对任意满足 \(i>j\) 的 \((i,j)\in\llbracket1,n\rrbracket^2\)，有：
        {: .zh }

        \[
        \sum_{k=1}^{n}a_{i,k}b_{k,j}
        =
        \sum_{k=1}^{i-1}\underbrace{a_{i,k}}_{=0}b_{k,j}
        +
        \sum_{k=i}^{n}a_{i,k}\underbrace{b_{k,j}}_{=0}
        =0.
        \]

!!! danger "Propriété 3.3<br><span class='zh-title'>性质 3.3</span>"

    Soient \(\operatorname{Diag}(a_1,a_2,\dots,a_n)\in\mathscr{M}_n(\mathbb{K})\) et \(\operatorname{Diag}(b_1,b_2,\dots,b_n)\in\mathscr{M}_n(\mathbb{K})\) deux matrices diagonales. Alors :

    设 \(\operatorname{Diag}(a_1,a_2,\dots,a_n)\in\mathscr{M}_n(\mathbb{K})\) 与 \(\operatorname{Diag}(b_1,b_2,\dots,b_n)\in\mathscr{M}_n(\mathbb{K})\) 为两个对角矩阵。则：
    {: .zh }

    - \(\forall\lambda\in\mathbb{K},\quad \lambda\operatorname{Diag}(a_1,a_2,\dots,a_n)=\operatorname{Diag}(\lambda a_1,\lambda a_2,\dots,\lambda a_n)\),

    - \(\operatorname{Diag}(a_1,a_2,\dots,a_n)+\operatorname{Diag}(b_1,b_2,\dots,b_n)=\operatorname{Diag}(a_1+b_1,a_2+b_2,\dots,a_n+b_n)\),

    - \(\operatorname{Diag}(a_1,a_2,\dots,a_n)\operatorname{Diag}(b_1,b_2,\dots,b_n)=\operatorname{Diag}(a_1b_1,a_2b_2,\dots,a_nb_n)\),

    - \(\operatorname{Diag}(a_1,a_2,\dots,a_n)^{\mathrm{T}}=\operatorname{Diag}(a_1,a_2,\dots,a_n)\).

!!! success "Définition 3.4 : matrice symétrique, antisymétrique<br><span class='zh-title'>定义 3.4：对称矩阵与反对称矩阵</span>"

    Soit \(M=(m_{i,j})\in\mathscr{M}_n(\mathbb{K})\) une matrice carrée.

    设 \(M=(m_{i,j})\in\mathscr{M}_n(\mathbb{K})\) 为方阵。
    {: .zh }

    - \(M\) est dite <strong>symétrique</strong> lorsque \(M^{\mathrm{T}}=M\), c'est-à-dire :

        若 \(M^{\mathrm{T}}=M\)，则称 \(M\) 为<strong>对称矩阵</strong>（symétrique），即：
        {: .zh }

        \[
        \forall(i,j)\in\llbracket1,n\rrbracket^2,\quad m_{i,j}=m_{j,i}.
        \]

    - \(M\) est dite <strong>antisymétrique</strong> lorsque \(M^{\mathrm{T}}=-M\), c'est-à-dire :

        若 \(M^{\mathrm{T}}=-M\)，则称 \(M\) 为<strong>反对称矩阵</strong>（antisymétrique），即：
        {: .zh }

        \[
        \forall(i,j)\in\llbracket1,n\rrbracket^2,\quad m_{i,j}=-m_{j,i}.
        \]

En particulier, si \(M\in\mathscr{M}_n(\mathbb{K})\) est antisymétrique alors ses <strong>coefficients diagonaux</strong> sont nuls.

特别地，若 \(M\in\mathscr{M}_n(\mathbb{K})\) 反对称，则其<strong>对角系数</strong>（coefficients diagonaux）为零。
{: .zh }

!!! info "Exemple 3.5<br><span class='zh-title'>例 3.5</span>"

    - Les matrices diagonales sont symétriques.

        对角矩阵都是对称矩阵。
        {: .zh }

    - La seule matrice symétrique et antisymétrique est la matrice nulle \(0_n\).

        唯一同时为对称与反对称的矩阵是零矩阵 \(0_n\)。
        {: .zh }

    - Toute matrice \(M\in\mathscr{M}_n(\mathbb{K})\) peut s'écrire de manière unique comme somme \(M=S+A\) d'une matrice \(S\) symétrique et d'une matrice \(A\) antisymétrique. En effet :

        任意矩阵 \(M\in\mathscr{M}_n(\mathbb{K})\) 都可唯一地写成 \(M=S+A\)，其中 \(S\) 为对称矩阵、\(A\) 为反对称矩阵。事实上：
        {: .zh }

        - <strong>Unicité.</strong> Si \(M=S+A\) avec \(S^{\mathrm{T}}=S\) et \(A^{\mathrm{T}}=-A\), alors \(M^{\mathrm{T}}=S^{\mathrm{T}}+A^{\mathrm{T}}=S-A\) donc \(S=\frac{1}{2}(M+M^{\mathrm{T}})\) et \(A=\frac{1}{2}(M-M^{\mathrm{T}})\).

            <strong>唯一性.</strong> 若 \(M=S+A\) 且 \(S^{\mathrm{T}}=S\)、\(A^{\mathrm{T}}=-A\)，则 \(M^{\mathrm{T}}=S^{\mathrm{T}}+A^{\mathrm{T}}=S-A\)，故 \(S=\frac{1}{2}(M+M^{\mathrm{T}})\)，\(A=\frac{1}{2}(M-M^{\mathrm{T}})\)。
            {: .zh }

        - <strong>Existence.</strong> Si \(S=\frac{1}{2}(M+M^{\mathrm{T}})\) et \(A=\frac{1}{2}(M-M^{\mathrm{T}})\), alors \(S^{\mathrm{T}}=S\), \(A^{\mathrm{T}}=-A\) et \(M=S+A\).

            <strong>存在性.</strong> 若 \(S=\frac{1}{2}(M+M^{\mathrm{T}})\)、\(A=\frac{1}{2}(M-M^{\mathrm{T}})\)，则 \(S^{\mathrm{T}}=S\)、\(A^{\mathrm{T}}=-A\) 且 \(M=S+A\)。
            {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice diagonale</strong>：对角矩阵
    - <strong>matrice triangulaire supérieure / inférieure</strong>：上三角 / 下三角矩阵
    - <strong>matrice symétrique / antisymétrique</strong>：对称 / 反对称矩阵
    - <strong>coefficients diagonaux</strong>：对角系数
    - <strong>unicité / existence</strong>：唯一性 / 存在性

## 4　Matrices carrées inversibles <span class="heading-zh">可逆方阵</span>

!!! success "Définition 4.1 : matrice inversible<br><span class='zh-title'>定义 4.1：可逆矩阵（matrice inversible）</span>"

    On dit qu'une matrice carrée \(A\in\mathscr{M}_n(\mathbb{K})\) est <strong>inversible</strong> s'il existe \(B\in\mathscr{M}_n(\mathbb{K})\) telle que \(AB=BA=I_n\). On note \(\mathscr{G}\ell_n(\mathbb{K})\) l'ensemble des matrices inversibles \(n\times n\).

    若存在 \(B\in\mathscr{M}_n(\mathbb{K})\) 使 \(AB=BA=I_n\)，则称方阵 \(A\in\mathscr{M}_n(\mathbb{K})\) 是<strong>可逆的</strong>（inversible）。记 \(\mathscr{G}\ell_n(\mathbb{K})\) 为所有 \(n\times n\) 可逆矩阵的集合。
    {: .zh }

!!! info "Exemple 4.2<br><span class='zh-title'>例 4.2</span>"

    - La matrice identité \(I_n\) est inversible car \(I_nI_n=I_n\).

        单位矩阵 \(I_n\) 可逆，因为 \(I_nI_n=I_n\)。
        {: .zh }

    - La matrice nulle \(0_n\) n'est pas inversible car \(\forall B\in\mathscr{M}_n(\mathbb{K}),\ 0_nB=B0_n=0_n\neq I_n\).

        零矩阵 \(0_n\) 不可逆，因为 \(\forall B\in\mathscr{M}_n(\mathbb{K}),\ 0_nB=B0_n=0_n\neq I_n\)。
        {: .zh }

    - Soient \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\) telles que \(A\neq0_n\), \(B\neq0_n\) et \(AB=0_n\). Alors \(A\) et \(B\) ne sont pas inversibles. En effet, si on suppose par l'absurde que \(A\in\mathscr{G}\ell_n(\mathbb{K})\), alors il existe \(C\in\mathscr{M}_n(\mathbb{K})\) telle que \(AC=CA=I_n\), donc \(B=CAB=0_n\) ce qui est absurde.

        设 \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\) 满足 \(A\neq0_n\)、\(B\neq0_n\) 且 \(AB=0_n\)。则 \(A\) 与 \(B\) 都不可逆。事实上，反设 \(A\in\mathscr{G}\ell_n(\mathbb{K})\)，则存在 \(C\in\mathscr{M}_n(\mathbb{K})\) 使 \(AC=CA=I_n\)，于是 \(B=CAB=0_n\)，矛盾。
        {: .zh }

    - En particulier, les matrices nilpotentes ne sont pas inversibles.

        特别地，幂零矩阵都不可逆。
        {: .zh }

!!! danger "Propriété 4.3 : unicité de l'inverse<br><span class='zh-title'>性质 4.3：逆矩阵的唯一性</span>"

    Soit \(A\in\mathscr{G}\ell_n(\mathbb{K})\). Alors la matrice \(B\in\mathscr{M}_n(\mathbb{K})\) de la définition 4.1 est unique. On l'appelle la <strong>matrice inverse</strong> de \(A\) et on note \(B=A^{-1}\).

    设 \(A\in\mathscr{G}\ell_n(\mathbb{K})\)。则定义 4.1 中的矩阵 \(B\in\mathscr{M}_n(\mathbb{K})\) 唯一。称其为 \(A\) 的<strong>逆矩阵</strong>（matrice inverse），记作 \(B=A^{-1}\)。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> Par l'absurde, on suppose qu'il existe deux matrices \(B_1\neq B_2\) telles que \(AB_1=B_1A=I_n=AB_2=B_2A\). Alors on a par associativité :

    <strong>证明.</strong> 反设存在两个矩阵 \(B_1\neq B_2\) 使 \(AB_1=B_1A=I_n=AB_2=B_2A\)。则由结合律：
    {: .zh }

    \[
    B_1=B_1(AB_2)=(B_1A)B_2=B_2
    \qquad\text{ce qui est absurde.}
    \]

    <p class="cqfd">∎</p>

!!! info "Exemple 4.4<br><span class='zh-title'>例 4.4</span>"

    - \(I_n^{-1}=I_n\).

        \(I_n^{-1}=I_n\)。
        {: .zh }

    - Soit \(A=\operatorname{Diag}(a_1,a_2,\dots,a_n)\in\mathscr{M}_n(\mathbb{K})\). Alors \(A\) est inversible si et seulement si ses coefficients diagonaux sont tous non nuls, c'est-à-dire \(a_1a_2\dots a_n\neq0\), et dans ce cas :

        设 \(A=\operatorname{Diag}(a_1,a_2,\dots,a_n)\in\mathscr{M}_n(\mathbb{K})\)。则 \(A\) 可逆当且仅当其对角系数全不为零，即 \(a_1a_2\dots a_n\neq0\)；此时：
        {: .zh }

        \[
        \operatorname{Diag}(a_1,a_2,\dots,a_n)^{-1}
        =
        \operatorname{Diag}\left(\frac{1}{a_1},\frac{1}{a_2},\dots,\frac{1}{a_n}\right).
        \]

    - Dans l'exemple 2.7, on a vu que \(P=X^2-3X+2\) est un polynôme annulateur de la matrice :

        在例 2.7 中已见 \(P=X^2-3X+2\) 是矩阵的零化多项式：
        {: .zh }

        \[
        M=\begin{pmatrix}2 & 1 & -1\\1 & 2 & -1\\1 & 1 & 0\end{pmatrix}.
        \]

        Autrement dit, \(M^2-3M+2I_3=0_3\), donc :

        换言之，\(M^2-3M+2I_3=0_3\)，因此：
        {: .zh }

        \[
        I_3=\frac{-1}{2}M^2+\frac{3}{2}M
        =M\left(\frac{-1}{2}M+\frac{3}{2}I_3\right)
        =\left(\frac{-1}{2}M+\frac{3}{2}I_3\right)M.
        \]

        Par conséquent, \(M\) est inversible et :

        从而 \(M\) 可逆，且：
        {: .zh }

        \[
        M^{-1}
        =
        \frac{-1}{2}M+\frac{3}{2}I_3
        =
        \frac{1}{2}(-M+3I_3)
        =
        \frac{1}{2}
        \begin{pmatrix}
        1 & -1 & 1\\
        -1 & 1 & 1\\
        -1 & -1 & 3
        \end{pmatrix}.
        \]

!!! warning "Remarque<br><span class='zh-title'>注</span>"

    Plus généralement, si une matrice admet un polynôme annulateur dont le coefficient constant est non nul, alors cette matrice est inversible.

    更一般地，若一个矩阵存在常数项非零的零化多项式，则该矩阵可逆。
    {: .zh }

!!! danger "Propriété 4.5<br><span class='zh-title'>性质 4.5</span>"

    - \(\forall M\in\mathscr{G}\ell_n(\mathbb{K}),\quad M^{-1}\in\mathscr{G}\ell_n(\mathbb{K})\quad\text{et}\quad (M^{-1})^{-1}=M\),

    - \(\forall(\lambda,M)\in\mathbb{K}^*\times\mathscr{G}\ell_n(\mathbb{K}),\quad \lambda M\in\mathscr{G}\ell_n(\mathbb{K})\quad\text{et}\quad (\lambda M)^{-1}=\frac{1}{\lambda}M^{-1}\),

    - \(\forall(A,B)\in\mathscr{G}\ell_n(\mathbb{K})^2,\quad AB\in\mathscr{G}\ell_n(\mathbb{K})\quad\text{et}\quad (AB)^{-1}=B^{-1}A^{-1}\),

    - \(\forall M\in\mathscr{G}\ell_n(\mathbb{K}),\quad M^{\mathrm{T}}\in\mathscr{G}\ell_n(\mathbb{K})\quad\text{et}\quad (M^{\mathrm{T}})^{-1}=(M^{-1})^{\mathrm{T}}\).

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    Attention à l'ordre : si \((A,B)\in\mathscr{G}\ell_n(\mathbb{K})^2\) alors \(ABB^{-1}A^{-1}=B^{-1}A^{-1}AB=I_n\), mais \(ABA^{-1}B^{-1}\neq I_n\) et \(A^{-1}B^{-1}AB\neq I_n\) en général.

    注意顺序：若 \((A,B)\in\mathscr{G}\ell_n(\mathbb{K})^2\)，则 \(ABB^{-1}A^{-1}=B^{-1}A^{-1}AB=I_n\)，但一般 \(ABA^{-1}B^{-1}\neq I_n\) 且 \(A^{-1}B^{-1}AB\neq I_n\)。
    {: .zh }

!!! danger "Propriété 4.6 : simplification par une matrice inversible<br><span class='zh-title'>性质 4.6：用可逆矩阵消去</span>"

    Soit \((A,B,C)\in\mathscr{M}_n(\mathbb{K})^3\). Si \(A\) est inversible alors :

    设 \((A,B,C)\in\mathscr{M}_n(\mathbb{K})^3\)。若 \(A\) 可逆，则：
    {: .zh }

    \[
    AB=AC\implies B=C
    \qquad\text{et}\qquad
    BA=CA\implies B=C.
    \]

!!! demo ""

    <strong>Démonstration.</strong> Si \(AB=AC\) alors \(B=A^{-1}AB=A^{-1}AC=C\) par associativité. De même, si \(BA=CA\) alors \(B=BAA^{-1}=CAA^{-1}=C\).

    <strong>证明.</strong> 若 \(AB=AC\)，则由结合律 \(B=A^{-1}AB=A^{-1}AC=C\)。同样地，若 \(BA=CA\)，则 \(B=BAA^{-1}=CAA^{-1}=C\)。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    En général, on ne peut pas simplifier par une matrice non inversible. Par exemple :

    一般地，不能用不可逆矩阵消去。例如：
    {: .zh }

    \[
    \begin{pmatrix}1 & 2\\2 & 4\end{pmatrix}
    \begin{pmatrix}5 & 0\\3 & 4\end{pmatrix}
    =
    \begin{pmatrix}11 & 8\\22 & 16\end{pmatrix}
    =
    \begin{pmatrix}1 & 2\\2 & 4\end{pmatrix}
    \begin{pmatrix}3 & 2\\4 & 3\end{pmatrix}
    \qquad\text{mais}\qquad
    \begin{pmatrix}5 & 0\\3 & 4\end{pmatrix}\neq\begin{pmatrix}3 & 2\\4 & 3\end{pmatrix}.
    \]

!!! danger "Théorème 4.7 : inverse d'une matrice \(2\times2\)<br><span class='zh-title'>定理 4.7：\(2\times2\) 矩阵的逆</span>"

    Soit \(M=\begin{pmatrix}a & b\\c & d\end{pmatrix}\in\mathscr{M}_2(\mathbb{K})\). On définit le <strong>déterminant</strong> de \(M\) par \(\det(M)=ad-bc\).

    设 \(M=\begin{pmatrix}a & b\\c & d\end{pmatrix}\in\mathscr{M}_2(\mathbb{K})\)。定义 \(M\) 的<strong>行列式</strong>（déterminant）为 \(\det(M)=ad-bc\)。
    {: .zh }

    \[
    M\ \text{est inversible}\iff \det(M)\neq0.
    \]

    Et dans ce cas, on a :

    此时有：
    {: .zh }

    \[
    M^{-1}=\frac{1}{\det(M)}
    \begin{pmatrix}
    d & -b\\
    -c & a
    \end{pmatrix}.
    \]

!!! demo ""

    <strong>Démonstration.</strong> On a :

    <strong>证明.</strong> 有：
    {: .zh }

    \[
    \begin{pmatrix}a & b\\c & d\end{pmatrix}
    \begin{pmatrix}d & -b\\-c & a\end{pmatrix}
    =
    \begin{pmatrix}ad-bc & -ab+ba\\cd-dc & -cb+da\end{pmatrix}
    =\det(M)I_2
    \]

    \[
    \text{et de même}\qquad
    \begin{pmatrix}d & -b\\-c & a\end{pmatrix}
    \begin{pmatrix}a & b\\c & d\end{pmatrix}
    =\det(M)I_2.
    \]

    \(\Leftarrow\) Si \(\det(M)\neq0\), on en déduit que \(M\in\mathscr{G}\ell_2(\mathbb{K})\) et \(M^{-1}=\frac{1}{\det(M)}\begin{pmatrix}d & -b\\-c & a\end{pmatrix}\).

    \(\Leftarrow\) 若 \(\det(M)\neq0\)，由此可知 \(M\in\mathscr{G}\ell_2(\mathbb{K})\) 且 \(M^{-1}=\frac{1}{\det(M)}\begin{pmatrix}d & -b\\-c & a\end{pmatrix}\)。
    {: .zh }

    \(\Rightarrow\) Si \(M\in\mathscr{G}\ell_2(\mathbb{K})\), on en déduit que \(\begin{pmatrix}d & -b\\-c & a\end{pmatrix}=\det(M)M^{-1}\). Par l'absurde, si \(\det(M)=0\), alors \(a=b=c=d=0\), donc \(M=0_2\) ce qui est absurde.

    \(\Rightarrow\) 若 \(M\in\mathscr{G}\ell_2(\mathbb{K})\)，由此可知 \(\begin{pmatrix}d & -b\\-c & a\end{pmatrix}=\det(M)M^{-1}\)。反设 \(\det(M)=0\)，则 \(a=b=c=d=0\)，于是 \(M=0_2\)，矛盾。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice inversible</strong>：可逆矩阵
    - <strong>matrice inverse</strong>：逆矩阵
    - <strong>unicité de l'inverse</strong>：逆矩阵的唯一性
    - <strong>simplification par une matrice inversible</strong>：用可逆矩阵消去
    - <strong>déterminant</strong>：行列式
    - <strong>polynôme annulateur</strong>：零化多项式
    - <strong>coefficient constant</strong>：常数项

## 5　Matrices semblables <span class="heading-zh">相似矩阵</span>

!!! success "Définition 5.1 : matrices semblables<br><span class='zh-title'>定义 5.1：相似矩阵（matrices semblables）</span>"

    Soit \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\). On dit que \(A\) et \(B\) sont <strong>semblables</strong> lorsque :

    设 \((A,B)\in\mathscr{M}_n(\mathbb{K})^2\)。若满足下式，则称 \(A\) 与 \(B\) <strong>相似</strong>（semblables）：
    {: .zh }

    \[
    \exists P\in\mathscr{G}\ell_n(\mathbb{K}),\quad B=P^{-1}AP.
    \]

!!! warning "Important<br><span class='zh-title'>要点</span>"

    \(B=P^{-1}AP\iff A=PBP^{-1}=Q^{-1}BQ\) où \(Q=P^{-1}\).

    相似关系是对称的：\(B=P^{-1}AP\) 当且仅当 \(A=PBP^{-1}=Q^{-1}BQ\)（其中 \(Q=P^{-1}\)）。
    {: .zh }

!!! info "Exemple 5.2<br><span class='zh-title'>例 5.2</span>"

    - On considère les matrices \(A=\begin{pmatrix}5 & -1\\6 & 0\end{pmatrix}\) et \(P=\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}\). Puisque \(\det(P)=-2\neq0\), \(P\) est inversible. De plus :

        考虑矩阵 \(A=\begin{pmatrix}5 & -1\\6 & 0\end{pmatrix}\) 与 \(P=\begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}\)。由于 \(\det(P)=-2\neq0\)，\(P\) 可逆。此外：
        {: .zh }

        \[
        P^{-1}AP
        =
        \frac{1}{-2}
        \begin{pmatrix}4 & -2\\-3 & 1\end{pmatrix}
        \begin{pmatrix}5 & -1\\6 & 0\end{pmatrix}
        \begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}
        =
        \begin{pmatrix}2 & 0\\0 & 3\end{pmatrix}
        =\operatorname{Diag}(2,3).
        \]

        Ainsi, \(A\) et \(\operatorname{Diag}(2,3)\) sont semblables. En particulier, on a pour tout \(n\in\mathbb{N}\) :

        因此，\(A\) 与 \(\operatorname{Diag}(2,3)\) 相似。特别地，对任意 \(n\in\mathbb{N}\)，有：
        {: .zh }

        \[
        \begin{aligned}
        A^n
        &=\left(P\operatorname{Diag}(2,3)P^{-1}\right)^n\\
        &=\underbrace{\left(P\operatorname{Diag}(2,3)P^{-1}\right)\left(P\operatorname{Diag}(2,3)P^{-1}\right)\cdots\left(P\operatorname{Diag}(2,3)P^{-1}\right)}_{n\text{ fois}}\\
        &=P\operatorname{Diag}(2,3)\left(P^{-1}P\right)\operatorname{Diag}(2,3)\cdots\\
        &\qquad\cdots\left(P^{-1}P\right)\operatorname{Diag}(2,3)P^{-1}
        \qquad\text{par associativité}\\
        &=P\operatorname{Diag}(2,3)^nP^{-1}=P\operatorname{Diag}\left(2^n,3^n\right)P^{-1}\\
        &=
        \begin{pmatrix}1 & 2\\3 & 4\end{pmatrix}
        \begin{pmatrix}2^n & 0\\0 & 3^n\end{pmatrix}
        \frac{1}{-2}
        \begin{pmatrix}4 & -2\\-3 & 1\end{pmatrix}
        =
        \begin{pmatrix}
        -2^{n+1}+3^{n+1} & 2^n-3^n\\
        6\left(-2^n+3^n\right) & 3\times2^n-2\times3^n
        \end{pmatrix}.
        \end{aligned}
        \]

    - On considère les matrices :

        考虑矩阵：
        {: .zh }

        \[
        A=\begin{pmatrix}2 & 1 & -2\\1 & 2 & -2\\1 & 1 & -1\end{pmatrix},
        \qquad
        P=\begin{pmatrix}1 & 1 & 1\\1 & -1 & 0\\1 & 0 & 0\end{pmatrix}
        \qquad\text{et}\qquad
        Q=\begin{pmatrix}0 & 0 & 1\\0 & -1 & 1\\1 & 1 & -2\end{pmatrix}.
        \]

        On peut vérifier que \(PQ=QP=I_3\), donc \(P\) est inversible avec \(P^{-1}=Q\), et que :

        可以验证 \(PQ=QP=I_3\)，故 \(P\) 可逆且 \(P^{-1}=Q\)，并且：
        {: .zh }

        \[
        P^{-1}AP=QAP=
        \begin{pmatrix}1 & 0 & 1\\0 & 1 & 0\\0 & 0 & 1\end{pmatrix}
        =I_3+N
        \qquad\text{où}\qquad
        N=\begin{pmatrix}0 & 0 & 1\\0 & 0 & 0\\0 & 0 & 0\end{pmatrix}.
        \]

        Puisque \(I_3\) et \(N\) commutent, on a d'après la formule du binôme de Newton :

        由于 \(I_3\) 与 \(N\) 可交换，根据牛顿二项式公式有：
        {: .zh }

        \[
        \begin{aligned}
        \forall n\in\mathbb{N},\quad
        A^n
        &=P(I_3+N)^nP^{-1}
        =P\left(\sum_{k=0}^{n}\binom{n}{k}N^kI_3^{n-k}\right)Q\\
        &=P\left(\binom{n}{0}N^0+\binom{n}{1}N^1+0_3\right)Q
        \qquad\text{car }N^2=0_3\ (N\text{ est nilpotente})\\
        &=P(I_3+nN)Q=P(I_3+N)Q+(n-1)PNQ\\
        &=A+(n-1)
        \begin{pmatrix}1 & 1 & -2\\1 & 1 & -2\\1 & 1 & -2\end{pmatrix}
        =
        \begin{pmatrix}
        n+1 & n & -2n\\
        n & n+1 & -2n\\
        n & n & -2n+1
        \end{pmatrix}.
        \end{aligned}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrices semblables</strong>：相似矩阵
    - <strong>relation symétrique</strong>：对称关系
    - <strong>par associativité</strong>：由结合律
