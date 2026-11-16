---
title: TD8 特殊矩阵解答
comments: true
---

# 第 8 次习题课　特殊矩阵

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°8 — Matrices spéciales</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">预备习题</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">produit de matrices symétriques　对称矩阵的乘积</p>

Trouver une condition nécessaire et suffisante pour que le produit de deux matrices symétriques soit symétrique.
{: .fr-exo }

求两个对称矩阵之积为对称矩阵的一个充分必要条件。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Soient \(A,B\in\mathcal{M}_n(\mathbb{R})\) deux matrices symétriques, c'est-à-dire \(A^T=A\) et \(B^T=B\). Le produit \(AB\) est symétrique si et seulement si \((AB)^T=AB\). Or la transposée d'un produit renverse l'ordre des facteurs :

    <strong>解答。</strong>设 \(A,B\in\mathcal{M}_n(\mathbb{R})\) 为两个对称矩阵，即 \(A^T=A\)、\(B^T=B\)。乘积 \(AB\) 为对称矩阵，当且仅当 \((AB)^T=AB\)。而乘积的转置会颠倒因子的顺序：
    {: .zh }

    \[
    (AB)^T=B^T A^T=BA.
    \]

    Ainsi \((AB)^T=AB\) équivaut à \(BA=AB\) : le produit est symétrique si et seulement si les deux matrices commutent.

    因此 \((AB)^T=AB\) 等价于 \(BA=AB\)：乘积为对称矩阵，当且仅当两个矩阵可交换。
    {: .zh }

    \[
    \boxed{AB\ \text{est symétrique}\iff AB=BA.}
    \]

    La condition cherchée est donc que \(A\) et \(B\) commutent. Elle est évidemment satisfaite lorsque \(B\) est un polynôme en \(A\) (par exemple \(B=A^2\), ou \(B=A^{-1}\) si \(A\) est inversible).

    所求条件即为 \(A\) 与 \(B\) 可交换。当 \(B\) 是 \(A\) 的多项式时（例如 \(B=A^2\)，或当 \(A\) 可逆时 \(B=A^{-1}\)），该条件显然满足。
    {: .zh }

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">puissances négatives　负幂</p>

Soit
{: .fr-exo }

设
{: .zh }

\[
M=\begin{pmatrix}2&-2&1\\2&-3&2\\-1&2&0\end{pmatrix}.
\]

1. Calculer \(M^2+2M-3I_3\).
    {: .fr-exo }

    计算 \(M^2+2M-3I_3\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On calcule d'abord \(M^2\) :

        <strong>解答。</strong>先计算 \(M^2\)：
        {: .zh }

        \[
        M^2=\begin{pmatrix}2&-2&1\\2&-3&2\\-1&2&0\end{pmatrix}^{2}
        =\begin{pmatrix}-1&4&-2\\-4&9&-4\\2&-4&3\end{pmatrix}.
        \]

        puis

        于是
        {: .zh }

        \[
        M^2+2M-3I_3
        =\begin{pmatrix}-1&4&-2\\-4&9&-4\\2&-4&3\end{pmatrix}
        +2\begin{pmatrix}2&-2&1\\2&-3&2\\-1&2&0\end{pmatrix}
        -3\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}
        =\begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}.
        \]

        On obtient donc la relation fondamentale

        因此得到基本关系式
        {: .zh }

        \[
        \boxed{M^2+2M-3I_3=0_3,\qquad\text{c'est-à-dire}\qquad M^2=3I_3-2M.}
        \]

2. En déduire pour tout \(n\in\mathbb{N}\), \(M^n\) en fonction de \(M\) et de \(I_3\).
    {: .fr-exo }

    由此推出对一切 \(n\in\mathbb{N}\)，\(M^n\) 关于 \(M\) 与 \(I_3\) 的表达式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> L'identité précédente s'écrit \(M^2=3I_3-2M\). Cherchons \(M^n\) sous la forme \(M^n=a_nM+b_nI_3\), avec \(a_n,b_n\in\mathbb{R}\).

        <strong>解答。</strong>上式可写为 \(M^2=3I_3-2M\)。我们寻求形如 \(M^n=a_nM+b_nI_3\) 的表达式，其中 \(a_n,b_n\in\mathbb{R}\)。
        {: .zh }

        En multipliant par \(M\) et en remplaçant \(M^2\) par \(3I_3-2M\),

        两边乘以 \(M\) 并把 \(M^2\) 换成 \(3I_3-2M\)，
        {: .zh }

        \[
        M^{n+1}=a_nM^2+b_nM=a_n(3I_3-2M)+b_nM=(b_n-2a_n)M+3a_nI_3.
        \]

        Par identification,

        比较系数得
        {: .zh }

        \[
        a_{n+1}=b_n-2a_n,\qquad b_{n+1}=3a_n.
        \]

        En reportant \(b_n=3a_{n-1}\) dans la première relation, la suite \((a_n)\) vérifie

        将 \(b_n=3a_{n-1}\) 代入第一式，数列 \((a_n)\) 满足
        {: .zh }

        \[
        a_{n+2}+2a_{n+1}-3a_n=0.
        \]

        L'équation caractéristique \(r^2+2r-3=0\) a pour racines \(1\) et \(-3\), donc \(a_n=\lambda+\mu(-3)^n\). Les conditions initiales \(a_0=0\) (car \(M^0=I_3\)) et \(a_1=1\) donnent \(\lambda+\mu=0\) et \(\lambda-3\mu=1\), d'où \(\lambda=\frac14\) et \(\mu=-\frac14\).

        特征方程 \(r^2+2r-3=0\) 的根为 \(1\) 与 \(-3\)，故 \(a_n=\lambda+\mu(-3)^n\)。由初始条件 \(a_0=0\)（因为 \(M^0=I_3\)）与 \(a_1=1\) 得 \(\lambda+\mu=0\)、\(\lambda-3\mu=1\)，从而 \(\lambda=\frac14\)、\(\mu=-\frac14\)。
        {: .zh }

        Ainsi \(a_n=\dfrac{1-(-3)^n}{4}\), puis \(b_n=a_{n+1}+2a_n=\dfrac{3+(-3)^n}{4}\). Pour tout \(n\in\mathbb{N}\),

        于是 \(a_n=\dfrac{1-(-3)^n}{4}\)，进而 \(b_n=a_{n+1}+2a_n=\dfrac{3+(-3)^n}{4}\)。对一切 \(n\in\mathbb{N}\)，
        {: .zh }

        \[
        \boxed{M^n=\frac{1-(-3)^n}{4}\,M+\frac{3+(-3)^n}{4}\,I_3.}
        \]

        Sous forme explicite, en notant \(t=(-3)^n\),

        记 \(t=(-3)^n\)，显式地，
        {: .zh }

        \[
        M^n=\frac14\begin{pmatrix}
        5-t & 2t-2 & 1-t\\
        2-2t & 4t & 2-2t\\
        t-1 & 2-2t & 3+t
        \end{pmatrix}.
        \]

        Vérification : pour \(n=0\), on trouve \(M^0=I_3\) ; pour \(n=1\), \(M^1=M\) ; pour \(n=2\), \(M^2=3I_3-2M\), ce qui est bien l'identité de la question 1.

        验证：当 \(n=0\) 时得 \(M^0=I_3\)；当 \(n=1\) 时得 \(M^1=M\)；当 \(n=2\) 时得 \(M^2=3I_3-2M\)，正是第 1 问的恒等式。
        {: .zh }

3. Cette formule peut-elle être étendue à \(n\in\mathbb{Z}\) ?
    {: .fr-exo }

    该公式能否推广到 \(n\in\mathbb{Z}\)？
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Oui. L'identité \(M^2+2M-3I_3=0\) s'écrit \(M(M+2I_3)=3I_3\), donc \(M\) est inversible et

        <strong>解答。</strong>可以。恒等式 \(M^2+2M-3I_3=0\) 可写为 \(M(M+2I_3)=3I_3\)，故 \(M\) 可逆，且
        {: .zh }

        \[
        \boxed{M^{-1}=\frac{M+2I_3}{3}
        =\frac13\begin{pmatrix}4&-2&1\\2&-1&2\\-1&2&2\end{pmatrix}.}
        \]

        Pour \(n\in\mathbb{Z}\), la quantité \((-3)^n\) est bien définie (pour \(n=-k\), on a \((-3)^{-k}=1/(-3)^k\)). La relation de récurrence \(M^{n+1}=M\,M^n\) et l'initialisation \(M^0=I_3\) restent valables pour tout \(n\in\mathbb{Z}\), donc la même formule donne \(M^n\) pour tout entier relatif :

        对 \(n\in\mathbb{Z}\)，\((-3)^n\) 有定义（当 \(n=-k\) 时，\((-3)^{-k}=1/(-3)^k\)）。递推关系 \(M^{n+1}=M\,M^n\) 与初始条件 \(M^0=I_3\) 对一切 \(n\in\mathbb{Z}\) 仍成立，因此同一公式给出任意整数 \(n\) 的 \(M^n\)：
        {: .zh }

        \[
        \boxed{M^n=\frac{1-(-3)^n}{4}\,M+\frac{3+(-3)^n}{4}\,I_3
        \quad\text{pour tout }n\in\mathbb{Z}.}
        \]

        En particulier, pour \(n=-1\), on retrouve bien \(M^{-1}\) : \(\frac{1-(-1/3)}{4}=\frac13\) et \(\frac{3-1/3}{4}=\frac23\), d'où \(M^{-1}=\frac13M+\frac23I_3=\frac{M+2I_3}{3}\).

        特别地，当 \(n=-1\) 时确实得到 \(M^{-1}\)：\(\frac{1-(-1/3)}{4}=\frac13\)、\(\frac{3-1/3}{4}=\frac23\)，故 \(M^{-1}=\frac13M+\frac23I_3=\frac{M+2I_3}{3}\)。
        {: .zh }

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">matrice nilpotente　幂零矩阵</p>

Soit \(N\in\mathcal{M}_n(\mathbb{R})\) une matrice nilpotente, c'est-à-dire telle que \(N^n=0_n\).
{: .fr-exo }

设 \(N\in\mathcal{M}_n(\mathbb{R})\) 为幂零矩阵，即满足 \(N^n=0_n\)。
{: .zh }

1. Développer le polynôme \((1-X)\sum\limits_{k=0}^{n-1}X^k\).
    {: .fr-exo }

    展开多项式 \((1-X)\sum\limits_{k=0}^{n-1}X^k\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En développant et en regroupant les termes,

        <strong>解答。</strong>展开并合并同类项，
        {: .zh }

        \[
        (1-X)\sum_{k=0}^{n-1}X^k
        =\sum_{k=0}^{n-1}X^k-\sum_{k=0}^{n-1}X^{k+1}
        =1-X^n.
        \]

        Les termes intermédiaires se télescopent (se compensent deux à deux). Donc

        中间各项两两相消（télescopage）。因此
        {: .zh }

        \[
        \boxed{(1-X)\sum_{k=0}^{n-1}X^k=1-X^n.}
        \]

2. En déduire que la matrice \(I_n-N\) est inversible et préciser son inverse.
    {: .fr-exo }

    由此推出矩阵 \(I_n-N\) 可逆，并写出其逆矩阵。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En substituant \(X=N\) dans l'identité précédente,

        <strong>解答。</strong>在上式中令 \(X=N\)，
        {: .zh }

        \[
        (I_n-N)\left(I_n+N+\cdots+N^{n-1}\right)=I_n-N^n=I_n,
        \]

        car \(N^n=0_n\). Les deux facteurs sont des polynômes en \(N\), donc ils commutent ; le produit dans l'autre ordre vaut également \(I_n\). Ainsi \(I_n-N\) est inversible et

        因为 \(N^n=0_n\)。两个因子都是 \(N\) 的多项式，故可交换；反序乘积也等于 \(I_n\)。因此 \(I_n-N\) 可逆，且
        {: .zh }

        \[
        \boxed{(I_n-N)^{-1}=I_n+N+N^2+\cdots+N^{n-1}=\sum_{k=0}^{n-1}N^k.}
        \]

3. Soit \(M\) la matrice suivante :
    {: .fr-exo }

    设 \(M\) 为下列矩阵：
    {: .zh }

    \[
    M=\begin{pmatrix}1&1&1&1\\0&1&1&1\\0&0&1&1\\0&0&0&1\end{pmatrix}.
    \]

    Montrer que \(M\) est inversible et calculer son inverse.
    {: .fr-exo }

    证明 \(M\) 可逆并计算其逆矩阵。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Écrivons \(M=I_4+N\) avec

        <strong>解答。</strong>将 \(M\) 写成 \(M=I_4+N\)，其中
        {: .zh }

        \[
        N=\begin{pmatrix}0&1&1&1\\0&0&1&1\\0&0&0&1\\0&0&0&0\end{pmatrix}.
        \]

        La matrice \(N\) est strictement triangulaire supérieure, donc nilpotente ; un calcul direct donne

        \(N\) 为严格上三角矩阵，故幂零；直接计算得
        {: .zh }

        \[
        N^2=\begin{pmatrix}0&0&1&2\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix},
        \qquad
        N^3=\begin{pmatrix}0&0&0&1\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix},
        \qquad
        N^4=0_4.
        \]

        Comme \(M=I_4-(-N)\), la question 2 appliquée à \(-N\) donne

        由于 \(M=I_4-(-N)\)，对 \(-N\) 应用第 2 问得
        {: .zh }

        \[
        M^{-1}=I_4-N+N^2-N^3
        =\begin{pmatrix}
        1&-1&0&0\\
        0&1&-1&0\\
        0&0&1&-1\\
        0&0&0&1
        \end{pmatrix}.
        \]

        \[
        \boxed{M^{-1}=
        \begin{pmatrix}
        1&-1&0&0\\
        0&1&-1&0\\
        0&0&1&-1\\
        0&0&0&1
        \end{pmatrix}}
        \]

        On vérifie directement que \(MM^{-1}=I_4\).

        可直接验证 \(MM^{-1}=I_4\)。
        {: .zh }

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">matrice diagonale　对角矩阵</p>

Soient
{: .fr-exo }

设
{: .zh }

\[
A=\begin{pmatrix}5&-2&4\\2&0&2\\-2&1&-1\end{pmatrix},
\quad
P=\begin{pmatrix}-1&2&-3\\0&1&-2\\1&-1&2\end{pmatrix}
\quad\text{et}\quad
Q=\begin{pmatrix}0&1&1\\2&-1&2\\1&-1&1\end{pmatrix}.
\]

1. Vérifier que \(PQ=I_3\). On notera par la suite \(P^{-1}=Q\).
    {: .fr-exo }

    验证 \(PQ=I_3\)。以下记 \(P^{-1}=Q\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Un calcul direct donne

        <strong>解答。</strong>直接计算得
        {: .zh }

        \[
        PQ=
        \begin{pmatrix}-1&2&-3\\0&1&-2\\1&-1&2\end{pmatrix}
        \begin{pmatrix}0&1&1\\2&-1&2\\1&-1&1\end{pmatrix}
        =\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}=I_3.
        \]

        Comme \(P\) et \(Q\) sont des matrices carrées de même taille et que \(PQ=I_3\), \(P\) est inversible et \(P^{-1}=Q\) (on a de même \(QP=I_3\)).

        由于 \(P\)、\(Q\) 为同阶方阵且 \(PQ=I_3\)，故 \(P\) 可逆，且 \(P^{-1}=Q\)（同样有 \(QP=I_3\)）。
        {: .zh }

2. Calculer \(P^{-1}AP\) et vérifier que c'est une matrice diagonale.
    {: .fr-exo }

    计算 \(P^{-1}AP\)，并验证它是对角矩阵。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Calculons d'abord \(AP\) :

        <strong>解答。</strong>先计算 \(AP\)：
        {: .zh }

        \[
        AP=
        \begin{pmatrix}5&-2&4\\2&0&2\\-2&1&-1\end{pmatrix}
        \begin{pmatrix}-1&2&-3\\0&1&-2\\1&-1&2\end{pmatrix}
        =\begin{pmatrix}-1&4&-3\\0&2&-2\\1&-2&2\end{pmatrix}.
        \]

        puis

        再算
        {: .zh }

        \[
        P^{-1}AP=QAP
        =\begin{pmatrix}0&1&1\\2&-1&2\\1&-1&1\end{pmatrix}
        \begin{pmatrix}-1&4&-3\\0&2&-2\\1&-2&2\end{pmatrix}
        =\begin{pmatrix}1&0&0\\0&2&0\\0&0&1\end{pmatrix}.
        \]

        C'est bien une matrice diagonale :

        这确实是对角矩阵：
        {: .zh }

        \[
        \boxed{P^{-1}AP=D=\operatorname{diag}(1,2,1).}
        \]

3. En déduire \(A^n\) en fonction de \(n\in\mathbb{Z}\).
    {: .fr-exo }

    由此推出 \(A^n\) 关于 \(n\in\mathbb{Z}\) 的表达式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> De \(P^{-1}AP=D\) on déduit \(A=PDP^{-1}=PDQ\). Donc, pour tout \(n\in\mathbb{Z}\),

        <strong>解答。</strong>由 \(P^{-1}AP=D\) 得 \(A=PDP^{-1}=PDQ\)。因此对一切 \(n\in\mathbb{Z}\)，
        {: .zh }

        \[
        A^n=PD^nQ=P\begin{pmatrix}1&0&0\\0&2^n&0\\0&0&1\end{pmatrix}Q.
        \]

        Cette expression a un sens pour \(n\in\mathbb{Z}\) car \(D\) est inversible (ses coefficients diagonaux \(1,2,1\) sont non nuls). Ainsi

        由于 \(D\) 可逆（其对角系数 \(1,2,1\) 均非零），该表达式对 \(n\in\mathbb{Z}\) 有意义。因此
        {: .zh }

        \[
        \boxed{A^n=P\begin{pmatrix}1&0&0\\0&2^n&0\\0&0&1\end{pmatrix}Q
        \qquad(n\in\mathbb{Z}).}
        \]

        Sous forme explicite,

        显式地，
        {: .zh }

        \[
        \boxed{A^n=
        \begin{pmatrix}
        2^{n+2}-3 & 2-2^{n+1} & 2^{n+2}-4\\[2pt]
        2^{n+1}-2 & 2-2^n & 2^{n+1}-2\\[2pt]
        2-2^{n+1} & 2^n-1 & 3-2^{n+1}
        \end{pmatrix}\qquad(n\in\mathbb{Z}).}
        \]

        Vérification : pour \(n=0\) on retrouve \(I_3\) ; pour \(n=1\) on retrouve \(A\).

        验证：当 \(n=0\) 时得 \(I_3\)；当 \(n=1\) 时得 \(A\)。
        {: .zh }

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">matrice à paramètres　含参数的矩阵</p>

Soit \(U\) la matrice suivante :
{: .fr-exo }

设 \(U\) 为下列矩阵：
{: .zh }

\[
U=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.
\]

On considère \(A=aI_3+bU\) avec \((a,b)\in\mathbb{R}^2\).
{: .fr-exo }

考虑 \(A=aI_3+bU\)，其中 \((a,b)\in\mathbb{R}^2\)。
{: .zh }

1. Calculer \(U^p\) en fonction de \(p\geqslant1\).
    {: .fr-exo }

    计算 \(U^p\)（\(p\geqslant1\)）。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme toutes les colonnes de \(U\) sont égales à \((1,1,1)^T\), chaque coefficient de \(U^2\) vaut \(1\cdot1+1\cdot1+1\cdot1=3\), donc \(U^2=3U\).

        <strong>解答。</strong>由于 \(U\) 的各列都等于 \((1,1,1)^T\)，\(U^2\) 的每个系数都等于 \(1\cdot1+1\cdot1+1\cdot1=3\)，故 \(U^2=3U\)。
        {: .zh }

        Par récurrence, pour tout \(p\geqslant1\),

        由递推，对一切 \(p\geqslant1\)，
        {: .zh }

        \[
        \boxed{U^p=3^{p-1}U.}
        \]

2. Trouver \((\alpha,\beta)\in\mathbb{R}^2\) tel que \(A^2=\alpha A+\beta I_3\).
    {: .fr-exo }

    求 \((\alpha,\beta)\in\mathbb{R}^2\)，使得 \(A^2=\alpha A+\beta I_3\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(I_3\) et \(U\) commutent,

        <strong>解答。</strong>由于 \(I_3\) 与 \(U\) 可交换，
        {: .zh }

        \[
        A^2=(aI_3+bU)^2=a^2I_3+2abU+b^2U^2
        =a^2I_3+(2ab+3b^2)U.
        \]

        On cherche \((\alpha,\beta)\) tel que \(A^2=\alpha A+\beta I_3\), c'est-à-dire

        寻求 \((\alpha,\beta)\) 使 \(A^2=\alpha A+\beta I_3\)，即
        {: .zh }

        \[
        a^2I_3+(2ab+3b^2)U=(\alpha a+\beta)I_3+\alpha bU.
        \]

        Par identification, \(\alpha=2a+3b\) et \(\beta=a^2-\alpha a=-a(a+3b)\). On a donc, pour tout \((a,b)\in\mathbb{R}^2\),

        比较系数得 \(\alpha=2a+3b\)，\(\beta=a^2-\alpha a=-a(a+3b)\)。因此对一切 \((a,b)\in\mathbb{R}^2\)，
        {: .zh }

        \[
        \boxed{A^2=(2a+3b)A-a(a+3b)I_3.}
        \]

3. En déduire une condition nécessaire et suffisante pour que \(A\) soit inversible et calculer cet inverse.
    {: .fr-exo }

    由此推出 \(A\) 可逆的一个充分必要条件，并计算其逆矩阵。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> L'identité précédente s'écrit

        <strong>解答。</strong>上式可写为
        {: .zh }

        \[
        A\bigl(A-(2a+3b)I_3\bigr)=-a(a+3b)I_3.
        \]

        Si \(a(a+3b)\neq0\), la matrice \(A\) est inversible et

        若 \(a(a+3b)\neq0\)，则 \(A\) 可逆，且
        {: .zh }

        \[
        A^{-1}=-\frac{A-(2a+3b)I_3}{a(a+3b)}
        =\frac{(a+3b)I_3-bU}{a(a+3b)}.
        \]

        Réciproquement, si \(a(a+3b)=0\), montrons que \(A\) n'est pas inversible. Si \(a=0\), alors \(A=bU\) et \(U\) n'est pas inversible (par exemple \(U(1,-1,0)^T=0\)), donc \(A\) ne l'est pas non plus. Si \(a=-3b\) avec \(a\neq0\), alors \(A=b(U-3I_3)\) et \((U-3I_3)(1,1,1)^T=0\), donc \(A\) n'est pas inversible.

        反之，若 \(a(a+3b)=0\)，证明 \(A\) 不可逆。若 \(a=0\)，则 \(A=bU\)，而 \(U\) 不可逆（例如 \(U(1,-1,0)^T=0\)），故 \(A\) 也不可逆。若 \(a=-3b\) 且 \(a\neq0\)，则 \(A=b(U-3I_3)\)，且 \((U-3I_3)(1,1,1)^T=0\)，故 \(A\) 不可逆。
        {: .zh }

        Ainsi \(A\) est inversible si et seulement si \(a\neq0\) et \(a+3b\neq0\). Sous cette condition,

        因此 \(A\) 可逆当且仅当 \(a\neq0\) 且 \(a+3b\neq0\)。在此条件下，
        {: .zh }

        \[
        \boxed{A^{-1}=\frac{(a+3b)I_3-bU}{a(a+3b)}
        =\frac{1}{a(a+3b)}
        \begin{pmatrix}
        a+2b&-b&-b\\
        -b&a+2b&-b\\
        -b&-b&a+2b
        \end{pmatrix}.}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice symétrique</strong>：对称矩阵
    - <strong>condition nécessaire et suffisante (CNS)</strong>：充分必要条件
    - <strong>commuter</strong>：可交换
    - <strong>puissances négatives</strong>：负幂
    - <strong>relation de récurrence</strong>：递推关系
    - <strong>équation caractéristique</strong>：特征方程
    - <strong>matrice nilpotente / nilpotence</strong>：幂零矩阵 / 幂零性
    - <strong>matrice strictement triangulaire supérieure</strong>：严格上三角矩阵
    - <strong>sommation télescopique</strong>：裂项相消
    - <strong>matrice inversible</strong>：可逆矩阵
    - <strong>inverse d'une matrice</strong>：矩阵的逆
    - <strong>matrice diagonale</strong>：对角矩阵
    - <strong>matrice à paramètres</strong>：含参数的矩阵
    - <strong>en fonction de</strong>：关于……的表达式
    - <strong>en déduire</strong>：由此推出
    - <strong>vérifier</strong>：验证

## Exercices supplémentaires <span class="heading-zh">补充习题</span>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">inverses　逆矩阵</p>

Soit \(A\in\mathcal{M}_n(\mathbb{R})\) tel que \(I_n+A\) soit inversible. On considère \(B=(I_n-A)(I_n+A)^{-1}\).
{: .fr-exo }

设 \(A\in\mathcal{M}_n(\mathbb{R})\) 使得 \(I_n+A\) 可逆。考虑 \(B=(I_n-A)(I_n+A)^{-1}\)。
{: .zh }

1. Montrer que \(B=(I_n+A)^{-1}(I_n-A)\).
    {: .fr-exo }

    证明 \(B=(I_n+A)^{-1}(I_n-A)\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Posons \(C=I_n+A\), qui est inversible. Alors \(I_n-A=2I_n-C\), donc

        <strong>解答。</strong>令 \(C=I_n+A\)，它可逆。则 \(I_n-A=2I_n-C\)，故
        {: .zh }

        \[
        (I_n-A)C^{-1}=(2I_n-C)C^{-1}=2C^{-1}-I_n=C^{-1}(2I_n-C)=C^{-1}(I_n-A).
        \]

        C'est-à-dire

        即
        {: .zh }

        \[
        \boxed{B=(I_n-A)(I_n+A)^{-1}=(I_n+A)^{-1}(I_n-A).}
        \]

2. Montrer que \(I_n+B\) est inversible et exprimer \(A\) en fonction de \(B\).
    {: .fr-exo }

    证明 \(I_n+B\) 可逆，并用 \(B\) 表示 \(A\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En utilisant l'expression symétrique de \(B\),

        <strong>解答。</strong>利用 \(B\) 的对称表达式，
        {: .zh }

        \[
        \begin{aligned}
        I_n+B&=I_n+(I_n-A)(I_n+A)^{-1}\\
        &=\bigl[(I_n+A)+(I_n-A)\bigr](I_n+A)^{-1}
        =2I_n(I_n+A)^{-1}=2(I_n+A)^{-1}.
        \end{aligned}
        \]

        Comme \(I_n+A\) est inversible, \(2(I_n+A)^{-1}\) l'est aussi ; donc \(I_n+B\) est inversible et

        由于 \(I_n+A\) 可逆，\(2(I_n+A)^{-1}\) 也可逆；故 \(I_n+B\) 可逆，且
        {: .zh }

        \[
        (I_n+B)^{-1}=\frac12(I_n+A).
        \]

        On en déduit

        由此得
        {: .zh }

        \[
        \boxed{A=2(I_n+B)^{-1}-I_n.}
        \]

        De façon équivalente, en utilisant \(I_n-B=2A(I_n+A)^{-1}\) et \(I_n+B=2(I_n+A)^{-1}\),

        等价地，利用 \(I_n-B=2A(I_n+A)^{-1}\) 与 \(I_n+B=2(I_n+A)^{-1}\)，
        {: .zh }

        \[
        \boxed{A=(I_n-B)(I_n+B)^{-1}.}
        \]

        La transformation \(A\mapsto B\) est appelée transformation de Cayley.

        变换 \(A\mapsto B\) 称为 Cayley 变换（transformation de Cayley）。
        {: .zh }

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">série de matrices　矩阵级数</p>

Soit \(A=(a_{ij})\in\mathcal{M}_n(\mathbb{C})\) telle que
{: .fr-exo }

设 \(A=(a_{ij})\in\mathcal{M}_n(\mathbb{C})\) 满足
{: .zh }

\[
\forall(i,j)\in[\![1,n]\!]^2,\qquad |a_{ij}|<\frac1n.
\]

1. Soit \(\alpha=\max\limits_{1\leqslant i,j\leqslant n}|a_{ij}|\). On note \(A^p=\bigl(a_{ij}^{(p)}\bigr)\), \(p\in\mathbb{N}^*\). Montrer par récurrence sur \(p\in\mathbb{N}^*\) que \(\max\limits_{1\leqslant i,j\leqslant n}|a_{ij}^{(p)}|\leqslant(n\alpha)^p\).
    {: .fr-exo }

    设 \(\alpha=\max\limits_{1\leqslant i,j\leqslant n}|a_{ij}|\)。记 \(A^p=\bigl(a_{ij}^{(p)}\bigr)\)，\(p\in\mathbb{N}^*\)。对 \(p\in\mathbb{N}^*\) 用递推证明 \(\max\limits_{1\leqslant i,j\leqslant n}|a_{ij}^{(p)}|\leqslant(n\alpha)^p\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Notons \(A^p=(a_{ij}^{(p)})\). Pour \(p=1\), on a \(a_{ij}^{(1)}=a_{ij}\), donc

        <strong>解答。</strong>记 \(A^p=(a_{ij}^{(p)})\)。当 \(p=1\) 时，\(a_{ij}^{(1)}=a_{ij}\)，故
        {: .zh }

        \[
        \max_{1\leqslant i,j\leqslant n}|a_{ij}^{(1)}|=\alpha\leqslant n\alpha=(n\alpha)^1.
        \]

        Supposons la propriété vraie au rang \(p\geqslant1\). Pour tout \((i,j)\), la formule du produit matriciel donne

        设性质在第 \(p\geqslant1\) 步成立。对任意 \((i,j)\)，矩阵乘积公式给出
        {: .zh }

        \[
        a_{ij}^{(p+1)}=\sum_{k=1}^{n}a_{ik}^{(p)}a_{kj}.
        \]

        En majorant chaque terme par \((n\alpha)^p\cdot\alpha\) et en sommant sur les \(n\) indices \(k\),

        将每一项放大为 \((n\alpha)^p\cdot\alpha\)，再对 \(n\) 个指标 \(k\) 求和，
        {: .zh }

        \[
        |a_{ij}^{(p+1)}|
        \leqslant\sum_{k=1}^{n}|a_{ik}^{(p)}|\,|a_{kj}|
        \leqslant n\,(n\alpha)^p\,\alpha=(n\alpha)^{p+1}.
        \]

        La propriété est donc vraie au rang \(p+1\). Par récurrence,

        故性质在第 \(p+1\) 步也成立。由递推，
        {: .zh }

        \[
        \boxed{\max_{1\leqslant i,j\leqslant n}|a_{ij}^{(p)}|\leqslant(n\alpha)^p,
        \qquad p\in\mathbb{N}^*.}
        \]

2. En déduire que \(\forall(i,j)\in[\![1,n]\!]^2\), la série \(\sum\limits_{p\geqslant0}(-1)^p a_{ij}^{(p)}\) est absolument convergente.
    {: .fr-exo }

    由此推出：对一切 \((i,j)\in[\![1,n]\!]^2\)，级数 \(\sum\limits_{p\geqslant0}(-1)^p a_{ij}^{(p)}\) 绝对收敛。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Pour \((i,j)\) fixé, le terme général de la série s'écrit \((-1)^p a_{ij}^{(p)}\). D'après la question 1,

        <strong>解答。</strong>固定 \((i,j)\)，级数的通项为 \((-1)^p a_{ij}^{(p)}\)。由第 1 问，
        {: .zh }

        \[
        |(-1)^p a_{ij}^{(p)}|=|a_{ij}^{(p)}|\leqslant(n\alpha)^p.
        \]

        Pour \(p=0\), on a \(a_{ij}^{(0)}=\delta_{ij}\), donc \(|a_{ij}^{(0)}|\leqslant1=(n\alpha)^0\) : l'inégalité vaut encore. Or \(\alpha<1/n\) par hypothèse, donc \(n\alpha<1\) et la série géométrique \(\sum(n\alpha)^p\) converge. Par comparaison, la série \(\sum(-1)^p a_{ij}^{(p)}\) est absolument convergente.

        当 \(p=0\) 时，\(a_{ij}^{(0)}=\delta_{ij}\)，故 \(|a_{ij}^{(0)}|\leqslant1=(n\alpha)^0\)：不等式仍然成立。又由假设 \(\alpha<1/n\)，故 \(n\alpha<1\)，几何级数 \(\sum(n\alpha)^p\) 收敛。由比较判别法，级数 \(\sum(-1)^p a_{ij}^{(p)}\) 绝对收敛。
        {: .zh }

        \[
        \boxed{\forall(i,j)\in[\![1,n]\!]^2,\qquad
        \sum_{p\geqslant0}(-1)^p a_{ij}^{(p)}\ \text{converge absolument}.}
        \]

3. Soit \(N\in\mathbb{N}^*\). Développer \((1+X)\sum\limits_{p=0}^{2N}(-X)^p\).
    {: .fr-exo }

    设 \(N\in\mathbb{N}^*\)。展开 \((1+X)\sum\limits_{p=0}^{2N}(-X)^p\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En développant, les termes se télescopent :

        <strong>解答。</strong>展开后各项两两相消：
        {: .zh }

        \[
        (1+X)\sum_{p=0}^{2N}(-X)^p
        =\sum_{p=0}^{2N}(-X)^p+\sum_{p=0}^{2N}(-X)^{p+1}
        =\sum_{p=0}^{2N}(-X)^p-\sum_{p=1}^{2N+1}(-X)^p,
        \]

        d'où

        故
        {: .zh }

        \[
        (1+X)\sum_{p=0}^{2N}(-X)^p=1-(-X)^{2N+1}=1+X^{2N+1}.
        \]

        \[
        \boxed{(1+X)\sum_{p=0}^{2N}(-X)^p=1+X^{2N+1}.}
        \]

4. En déduire que \(I_n+A\) est inversible et calculer son inverse comme somme d'une série.
    {: .fr-exo }

    由此推出 \(I_n+A\) 可逆，并将它的逆矩阵表示为级数的和。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Substituons \(X=A\) dans l'identité polynomiale de la question 3 :

        <strong>解答。</strong>在第 3 问的多项式恒等式中令 \(X=A\)：
        {: .zh }

        \[
        (I_n+A)\sum_{p=0}^{2N}(-A)^p=I_n+A^{2N+1}.
        \]

        D'après la question 1 appliquée à \(p=2N+1\), chaque coefficient de \(A^{2N+1}\) est majoré en module par \((n\alpha)^{2N+1}\), quantité qui tend vers \(0\) car \(n\alpha<1\). Donc \(A^{2N+1}\to0_n\) coefficient par coefficient.

        由第 1 问应用于 \(p=2N+1\)，\(A^{2N+1}\) 的每个系数在模下都不超过 \((n\alpha)^{2N+1}\)；由于 \(n\alpha<1\)，该量趋于 \(0\)。故 \(A^{2N+1}\to0_n\)（按系数收敛）。
        {: .zh }

        La série \(\sum\limits_{p\geqslant0}(-A)^p\) converge donc coefficient par coefficient (absolument, d'après la question 2). En passant à la limite \(N\to+\infty\) dans l'identité précédente, on obtient

        因此级数 \(\sum\limits_{p\geqslant0}(-A)^p\) 按系数绝对收敛（由第 2 问）。在上述恒等式中令 \(N\to+\infty\) 取极限，得
        {: .zh }

        \[
        (I_n+A)\,S=I_n,
        \qquad
        S=\sum_{p=0}^{+\infty}(-A)^p=\sum_{p=0}^{+\infty}(-1)^pA^p.
        \]

        Le même argument avec la somme à gauche donne \(S(I_n+A)=I_n\) (en dimension finie, l'égalité \((I_n+A)S=I_n\) suffit déjà). Ainsi \(I_n+A\) est inversible et

        用左乘的同一论证还给出 \(S(I_n+A)=I_n\)（在有限维情形，\((I_n+A)S=I_n\) 已足够）。因此 \(I_n+A\) 可逆，且
        {: .zh }

        \[
        \boxed{(I_n+A)^{-1}=\sum_{p=0}^{+\infty}(-1)^pA^p
        =\sum_{p=0}^{+\infty}(-A)^p.}
        \]

        Ce développement généralise la formule de la somme géométrique ; il montre que \(I_n+A\) est inversible dès que la « norme » de \(A\) est assez petite.

        该展开推广了几何级数求和公式；它表明只要 \(A\) 的「范数」足够小，\(I_n+A\) 就可逆。
        {: .zh }

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">inversion d'une matrice　矩阵求逆</p>

Soit
{: .fr-exo }

设
{: .zh }

\[
A=\begin{pmatrix}
3&0&-2&2\\
4&-1&-2&2\\
4&2&-4&5\\
0&2&-1&2
\end{pmatrix}.
\]

Calculer \(A^2\), \(A^2-I_4\) et \(A^3-A\) puis en déduire \(A^{-1}\).
{: .fr-exo }

计算 \(A^2\)、\(A^2-I_4\) 与 \(A^3-A\)，然后由此推出 \(A^{-1}\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Un calcul direct donne

    <strong>解答。</strong>直接计算得
    {: .zh }

    \[
    A^2=
    \begin{pmatrix}
    3&0&-2&2\\
    4&-1&-2&2\\
    4&2&-4&5\\
    0&2&-1&2
    \end{pmatrix}^{2}
    =
    \begin{pmatrix}
    1&0&0&0\\
    0&1&0&0\\
    4&0&-1&2\\
    4&0&-2&3
    \end{pmatrix}.
    \]

    d'où

    从而
    {: .zh }

    \[
    A^2-I_4=
    \begin{pmatrix}
    0&0&0&0\\
    0&0&0&0\\
    4&0&-2&2\\
    4&0&-2&2
    \end{pmatrix}.
    \]

    Ensuite, en multipliant \(A^2-I_4\) par \(A\),

    接着，用 \(A\) 左乘 \(A^2-I_4\)，
    {: .zh }

    \[
    A^3-A=A(A^2-I_4)=
    \begin{pmatrix}
    0&0&0&0\\
    0&0&0&0\\
    4&0&-2&2\\
    4&0&-2&2
    \end{pmatrix}
    =A^2-I_4.
    \]

    On a donc \(A^3-A^2-A+I_4=0_4\), c'est-à-dire

    因此 \(A^3-A^2-A+I_4=0_4\)，即
    {: .zh }

    \[
    A(A^2-A-I_4)=-I_4.
    \]

    En multipliant par \(-1\),

    两边乘以 \(-1\)，
    {: .zh }

    \[
    A(I_4+A-A^2)=I_4.
    \]

    Ainsi \(A\) est inversible et

    因此 \(A\) 可逆，且
    {: .zh }

    \[
    \boxed{A^{-1}=I_4+A-A^2=
    \begin{pmatrix}
    3&0&-2&2\\
    4&-1&-2&2\\
    0&2&-2&3\\
    -4&2&1&0
    \end{pmatrix}.}
    \]

    Vérification : le produit \(A(I_4+A-A^2)\) redonne bien \(I_4\). On peut aussi remarquer que l'identité \(A^3-A^2-A+I_4=0_4\) se factorise en \((A-I_4)^2(A+I_4)=0_4\).

    验证：乘积 \(A(I_4+A-A^2)\) 确实等于 \(I_4\)。还可注意恒等式 \(A^3-A^2-A+I_4=0_4\) 可分解为 \((A-I_4)^2(A+I_4)=0_4\)。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>transformation de Cayley</strong>：Cayley 变换
    - <strong>série de matrices</strong>：矩阵级数
    - <strong>série géométrique</strong>：几何级数
    - <strong>convergence absolue</strong>：绝对收敛
    - <strong>série absolument convergente</strong>：绝对收敛级数
    - <strong>terme général</strong>：通项
    - <strong>majorer</strong>：给出上界 / 放大
    - <strong>récurrence sur \(p\)</strong>：对 \(p\) 的递推
    - <strong>coefficient</strong>：系数
    - <strong>passer à la limite</strong>：取极限
    - <strong>somme d'une série</strong>：级数的和
    - <strong>condition nécessaire et suffisante</strong>：充分必要条件
    - <strong>calcul direct</strong>：直接计算
    - <strong>en déduire que</strong>：由此推出
    - <strong>pour tout \((i,j)\)</strong>：对一切 \((i,j)\)
