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

    原讲义中第 3–5 节尚为提纲，本站按源文件如实收录，待课程推进后随新版源文件补充。

## Objectifs <span class="heading-zh">学习目标</span>

1. Manipuler des matrices.

    熟练操作矩阵。
    {: .zh }

2. Mener des calculs matriciels à l'aide des coefficients.

    利用系数进行矩阵计算。
    {: .zh }

3. Calculer des puissances de matrices.

    计算矩阵的幂。
    {: .zh }

## Notations <span class="heading-zh">记号</span>

On rappelle que \(\mathbb{N}\) désigne l'ensemble des entiers naturels, \(\mathbb{R}\) désigne l'ensemble des nombres réels et \(\mathbb{C}\) désigne l'ensemble des nombres complexes.

回忆：\(\mathbb{N}\) 表示自然数集，\(\mathbb{R}\) 表示实数集，\(\mathbb{C}\) 表示复数集。
{: .zh }

Pour tout ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\) et on fixe deux entiers non nuls \((n,p)\in(\mathbb{N}^*)^2\).

本章中，\(\mathbb{K}\) 表示 \(\mathbb{R}\) 或 \(\mathbb{C}\)，并固定两个非零整数 \((n,p)\in(\mathbb{N}^*)^2\)。
{: .zh }

## 1　Matrices rectangulaires <span class="heading-zh">矩形矩阵</span>

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

    - \(L=\begin{pmatrix}l_1 & l_2 & \dots & l_p\end{pmatrix}\) est une matrice \(1\times p\) appelée une <strong>matrice ligne</strong>.

        \(L=\begin{pmatrix}l_1 & l_2 & \dots & l_p\end{pmatrix}\) 是一个 \(1\times p\) 矩阵，称为<strong>行矩阵</strong>（matrice ligne）。
        {: .zh }

    - \(C=\begin{pmatrix}c_1\\c_2\\\vdots\\c_n\end{pmatrix}\) est une matrice \(n\times 1\) appelée une <strong>matrice colonne</strong>.

        \(C=\begin{pmatrix}c_1\\c_2\\\vdots\\c_n\end{pmatrix}\) 是一个 \(n\times 1\) 矩阵，称为<strong>列矩阵</strong>（matrice colonne）。
        {: .zh }

    - On note \(0_{n,p}\) la matrice de \(\mathscr{M}_{n,p}(\mathbb{K})\) dont tous les coefficients sont nuls, appelée la <strong>matrice nulle</strong>.

        记 \(0_{n,p}\) 为 \(\mathscr{M}_{n,p}(\mathbb{K})\) 中所有系数全为零的矩阵，称为<strong>零矩阵</strong>（matrice nulle）。
        {: .zh }

!!! success "Définition 1.3 : produit d'une matrice par un scalaire<br><span class='zh-title'>定义 1.3：矩阵与标量的乘积</span>"

    Si \(\lambda\in\mathbb{K}\) et \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\), alors :

    若 \(\lambda\in\mathbb{K}\) 且 \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\)，则：
    {: .zh }

    \[
    \lambda M=(\lambda m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K}).
    \]

!!! success "Définition 1.4 : addition de matrices<br><span class='zh-title'>定义 1.4：矩阵加法</span>"

    Si \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) et \(B=(b_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\), alors :

    若 \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) 且 \(B=(b_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\)，则：
    {: .zh }

    \[
    A+B=(a_{i,j}+b_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K}).
    \]

!!! success "Définition 1.5 : multiplication de matrices<br><span class='zh-title'>定义 1.5：矩阵乘法</span>"

    Si \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) et \(B=(b_{i,j})\in\mathscr{M}_{p,q}(\mathbb{K})\), alors :

    若 \(A=(a_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\) 且 \(B=(b_{i,j})\in\mathscr{M}_{p,q}(\mathbb{K})\)，则：
    {: .zh }

    \[
    AB=\left(\sum_{k=1}^{p}a_{i,k}b_{k,j}\right)\in\mathscr{M}_{n,q}(\mathbb{K}).
    \]

!!! info "Exemple 1.6<br><span class='zh-title'>例 1.6</span>"

    （原讲义此处为空白例题，待课上补充。）

!!! danger "Propriété 1.7<br><span class='zh-title'>性质 1.7</span>"

    associativité, distributivité et compatibilité.

    <strong>结合律</strong>（associativité）、<strong>分配律</strong>（distributivité）与<strong>相容性</strong>（compatibilité）。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> faire l'associativité en cours.

    <strong>证明.</strong> 结合律留作课上完成。
    {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    La multiplication de matrices n'est pas commutative !

    矩阵乘法不满足交换律！
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
    \begin{pmatrix}2 & -3\\-4 & 6\end{pmatrix}\neq\begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}
    \qquad\text{et}\qquad
    \begin{pmatrix}3 & -6\\2 & -4\end{pmatrix}\neq\begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}
    \]

    \[
    \text{mais}\qquad
    \begin{pmatrix}2 & -3\\-4 & 6\end{pmatrix}
    \begin{pmatrix}3 & -6\\2 & -4\end{pmatrix}
    =
    \begin{pmatrix}0 & 0\\0 & 0\end{pmatrix}.
    \]

!!! success "Définition 1.8 : transposition<br><span class='zh-title'>定义 1.8：转置（transposition）</span>"

    Si \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\), alors :

    若 \(M=(m_{i,j})\in\mathscr{M}_{n,p}(\mathbb{K})\)，则：
    {: .zh }

    \[
    M^{\mathrm{T}}=(m_{j,i})\in\mathscr{M}_{p,n}(\mathbb{K}).
    \]

!!! info "Exemple 1.9<br><span class='zh-title'>例 1.9</span>"

    \[
    \begin{pmatrix}1 & 2 & 3\\4 & 5 & 6\end{pmatrix}^{\mathrm{T}}
    =
    \begin{pmatrix}1 & 4\\2 & 5\\3 & 6\end{pmatrix}.
    \]

!!! danger "Propriété 1.10<br><span class='zh-title'>性质 1.10</span>"

    - \((M^{\mathrm{T}})^{\mathrm{T}}=M\),
    - \((\lambda M)^{\mathrm{T}}=\lambda M^{\mathrm{T}}\),
    - \((A+B)^{\mathrm{T}}=A^{\mathrm{T}}+B^{\mathrm{T}}\),
    - \((AB)^{\mathrm{T}}=B^{\mathrm{T}}A^{\mathrm{T}}\).

Attention aux tailles : si \(A\) est une matrice \(n\times p\) et \(B\) est une matrice \(p\times q\), alors \(A^{\mathrm{T}}\) est une matrice \(p\times n\) et \(B^{\mathrm{T}}\) est une matrice \(q\times p\), donc la multiplication \(A^{\mathrm{T}}B^{\mathrm{T}}\) n'est en général pas définie alors que \(B^{\mathrm{T}}A^{\mathrm{T}}\) est une matrice \(q\times n\) bien définie.

注意尺寸：若 \(A\) 是 \(n\times p\) 矩阵、\(B\) 是 \(p\times q\) 矩阵，则 \(A^{\mathrm{T}}\) 是 \(p\times n\) 矩阵，\(B^{\mathrm{T}}\) 是 \(q\times p\) 矩阵；因此乘积 \(A^{\mathrm{T}}B^{\mathrm{T}}\) 一般无定义，而 \(B^{\mathrm{T}}A^{\mathrm{T}}\) 是定义良好的 \(q\times n\) 矩阵。
{: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice</strong>：矩阵
    - <strong>ligne / colonne</strong>：行 / 列
    - <strong>taille</strong>：尺寸
    - <strong>coefficient</strong>：系数
    - <strong>matrice ligne / matrice colonne</strong>：行矩阵 / 列矩阵
    - <strong>matrice nulle</strong>：零矩阵
    - <strong>produit d'une matrice par un scalaire</strong>：矩阵与标量的乘积
    - <strong>addition de matrices</strong>：矩阵加法
    - <strong>multiplication de matrices</strong>：矩阵乘法
    - <strong>transposition</strong>：转置
    - <strong>commutativité</strong>：交换律
    - <strong>intégrité</strong>：整性
    - <strong>être bien définie</strong>：有定义 / 定义良好
    - <strong>en général</strong>：一般地

## 2　Matrices carrées <span class="heading-zh">方阵</span>

!!! success "Définition 2.1 : matrice carrée<br><span class='zh-title'>定义 2.1：方阵（matrice carrée）</span>"

    matrice carrée d'ordre \(n\), notation \(\mathscr{M}_n(\mathbb{K})\), matrice nulle \(0_n\), et matrice identité \(I_n\).

    \(n\) 阶<strong>方阵</strong>（matrice carrée d'ordre \(n\)）、记号 \(\mathscr{M}_n(\mathbb{K})\)、零矩阵 \(0_n\) 以及<strong>单位矩阵</strong>（matrice identité）\(I_n\)。
    {: .zh }

!!! info "Exemple 2.2<br><span class='zh-title'>例 2.2</span>"

    identification de \(\mathbb{K}\) avec les matrices carrées d'ordre 1, addition et multiplication par \(0_n\), multiplication par \(I_n\).

    将 \(\mathbb{K}\) 与一阶方阵等同；与 \(0_n\) 的加法及乘法；与 \(I_n\) 的乘法。
    {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    attention à la factorisation de \(AB+A\).

    注意 \(AB+A\) 的因式分解。
    {: .zh }

!!! success "Définition 2.3 : puissances d'une matrice carrée<br><span class='zh-title'>定义 2.3：方阵的幂</span>"

    à faire en cours.

    课上完成。
    {: .zh }

!!! info "Exemple 2.4<br><span class='zh-title'>例 2.4</span>"

    - Calculer les puissances de

        计算该矩阵的各次幂。
        {: .zh }

        \[
        \begin{pmatrix}1 & 0 & 1\\0 & 1 & 0\\1 & 0 & 1\end{pmatrix}\in\mathscr{M}_3(\mathbb{R}).
        \]

    - Calculer les puissances de

        计算该矩阵的各次幂。
        {: .zh }

        \[
        \begin{pmatrix}
        2 & -2 & -1 & 1\\
        1 & -1 & 0 & 0\\
        1 & -1 & 0 & 0\\
        0 & 0 & 1 & -1
        \end{pmatrix}\in\mathscr{M}_4(\mathbb{R}).
        \]

!!! success "Définition 2.5 : matrice nilpotente<br><span class='zh-title'>定义 2.5：幂零矩阵（matrice nilpotente）</span>"

    à faire en cours.

    课上完成。
    {: .zh }

!!! success "Définition 2.6 : polynôme de matrice<br><span class='zh-title'>定义 2.6：矩阵多项式（polynôme de matrice）</span>"

    à faire en cours.

    课上完成。
    {: .zh }

!!! info "Exemple 2.7<br><span class='zh-title'>例 2.7</span>"

    \(M=\begin{pmatrix}0 & 1 & 0\\-1 & -1 & 1\\1 & 0 & -2\end{pmatrix}\) et \(P=X^3+3X^2+3X+2\).

    其中 \(M\) 为上述矩阵，\(P=X^3+3X^2+3X+2\)。
    {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    attention à l'absence de commutativité :

    注意非交换性：
    {: .zh }

    - \((AB)^p\neq A^pB^p\) en général,

        一般地，\((AB)^p\neq A^pB^p\)，
        {: .zh }

    - \((A+B)^2\neq A^2+2AB+B^2\) en général.

        一般地，\((A+B)^2\neq A^2+2AB+B^2\)。
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

    Calculer les puissances de

    计算该矩阵的各次幂。
    {: .zh }

    \[
    \begin{pmatrix}
    2 & 1 & \cdots & 1\\
    1 & 2 & \ddots & \vdots\\
    \vdots & \ddots & \ddots & 1\\
    1 & \cdots & 1 & 2
    \end{pmatrix}\in\mathscr{M}_n(\mathbb{R}).
    \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice carrée d'ordre \(n\)</strong>：\(n\) 阶方阵
    - <strong>matrice identité</strong>：单位矩阵
    - <strong>matrice nilpotente</strong>：幂零矩阵
    - <strong>polynôme de matrice</strong>：矩阵多项式
    - <strong>puissance d'une matrice</strong>：矩阵的幂
    - <strong>commutent</strong>：可交换
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>absence de commutativité</strong>：非交换性
    - <strong>factorisation</strong>：因式分解

## 3　Matrices carrées particulières <span class="heading-zh">特殊方阵</span>

matrices diagonales

对角矩阵（matrices diagonales）。
{: .zh }

triangulaire supérieure et inférieure

上三角矩阵与下三角矩阵（triangulaire supérieure et inférieure）。
{: .zh }

matrices symétriques et antisymétriques

对称矩阵与反对称矩阵（matrices symétriques et antisymétriques）。
{: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice diagonale</strong>：对角矩阵
    - <strong>matrice triangulaire supérieure / inférieure</strong>：上三角 / 下三角矩阵
    - <strong>matrice symétrique / antisymétrique</strong>：对称 / 反对称矩阵

## 4　Matrices carrées inversibles <span class="heading-zh">可逆方阵</span>

matrices inversibles, unicité, notation \(\mathscr{G}\ell_n(\mathbb{K})\)

可逆矩阵、唯一性、记号 \(\mathscr{G}\ell_n(\mathbb{K})\)。
{: .zh }

exemple de simplification

化简示例。
{: .zh }

exemple de calcul de l'inverse par polynôme annulateur

用零化多项式计算逆矩阵的示例。
{: .zh }

propriétés de l'inverse

逆矩阵的性质。
{: .zh }

théorème de l'inverse d'une matrice carrée d'ordre 2

二阶方阵的求逆定理。
{: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice inversible</strong>：可逆矩阵
    - <strong>unicité</strong>：唯一性
    - <strong>polynôme annulateur</strong>：零化多项式
    - <strong>inverse d'une matrice</strong>：逆矩阵
    - <strong>matrice carrée d'ordre 2</strong>：二阶方阵

## 5　Matrices semblables <span class="heading-zh">相似矩阵</span>

matrices semblables

相似矩阵（matrices semblables）。
{: .zh }

propriétés des matrices semblables

相似矩阵的性质。
{: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrices semblables</strong>：相似矩阵
    - <strong>propriétés</strong>：性质
