---
title: TD7 矩阵初步解答
comments: true
---

# 第 7 次习题课　矩阵初步

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°7 — Introduction aux matrices</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">预备习题</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">produits de matrices rectangulaires　矩形矩阵的乘积</p>

On considère les matrices
{: .fr-exo }

考虑下列矩阵：
{: .zh }

\[
A=\begin{pmatrix}-1&1\\1&-1\end{pmatrix},\quad
B=\begin{pmatrix}1\\2\\3\end{pmatrix},\quad
C=\begin{pmatrix}0&2&-1\\1&-2&3\end{pmatrix},\quad
D=\begin{pmatrix}4&2\end{pmatrix}.
\]

Faire une liste de tous les produits deux à deux possibles de ces matrices, puis les calculer.
{: .fr-exo }

列出这些矩阵两两之间所有可能的乘积，然后逐一计算。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Notons les formats : \(A\) est de taille \(2\times2\), \(B\) de taille \(3\times1\), \(C\) de taille \(2\times3\) et \(D\) de taille \(1\times2\). Un produit \(XY\) n'est défini que si le nombre de colonnes de \(X\) est égal au nombre de lignes de \(Y\).

    <strong>解答。</strong>记各矩阵的尺寸：\(A\) 为 \(2\times2\)，\(B\) 为 \(3\times1\)，\(C\) 为 \(2\times3\)，\(D\) 为 \(1\times2\)。乘积 \(XY\) 有定义，当且仅当 \(X\) 的列数等于 \(Y\) 的行数。
    {: .zh }

    En examinant les seize produits ordonnés possibles, seuls six sont définis : \(AA\), \(AC\), \(BD\), \(CB\), \(DA\) et \(DC\). Les dix autres — \(AB\), \(AD\), \(BA\), \(BB\), \(BC\), \(CA\), \(C{}C\), \(CD\), \(DB\), \(DD\) — ne sont pas définis.

    考察十六个有序乘积，只有六个有定义：\(AA\)、\(AC\)、\(BD\)、\(CB\)、\(DA\)、\(DC\)。其余十个——\(AB\)、\(AD\)、\(BA\)、\(BB\)、\(BC\)、\(CA\)、\(C{}C\)、\(CD\)、\(DB\)、\(DD\)——均无定义。
    {: .zh }

    Calculons par exemple \(AC\) : le coefficient d'indice \((i,j)\) s'obtient en multipliant la \(i\)-ème ligne de \(A\) par la \(j\)-ème colonne de \(C\).

    例如计算 \(AC\)：第 \((i,j)\) 个系数等于 \(A\) 的第 \(i\) 行与 \(C\) 的第 \(j\) 列之积。
    {: .zh }

    \[
    AC=\begin{pmatrix}
    (-1)\cdot0+1\cdot1 & (-1)\cdot2+1\cdot(-2) & (-1)\cdot(-1)+1\cdot3\\
    1\cdot0+(-1)\cdot1 & 1\cdot2+(-1)\cdot(-2) & 1\cdot(-1)+(-1)\cdot3
    \end{pmatrix}
    =\begin{pmatrix}1&-4&4\\-1&4&-4\end{pmatrix}.
    \]

    Les cinq autres produits valent :

    其余五个乘积为：
    {: .zh }

    \[
    AA=\begin{pmatrix}2&-2\\-2&2\end{pmatrix},\qquad
    BD=\begin{pmatrix}4&2\\8&4\\12&6\end{pmatrix},\qquad
    CB=\begin{pmatrix}1\\6\end{pmatrix},
    \]

    \[
    DA=\begin{pmatrix}-2&2\end{pmatrix},\qquad
    DC=\begin{pmatrix}2&4&2\end{pmatrix}.
    \]

    D'où la liste complète des produits définis :

    因此所有有定义的乘积为：
    {: .zh }

    \[
    \boxed{
    \begin{gathered}
    AA=\begin{pmatrix}2&-2\\-2&2\end{pmatrix},\quad
    AC=\begin{pmatrix}1&-4&4\\-1&4&-4\end{pmatrix},\quad
    BD=\begin{pmatrix}4&2\\8&4\\12&6\end{pmatrix},\\[4pt]
    CB=\begin{pmatrix}1\\6\end{pmatrix},\quad
    DA=\begin{pmatrix}-2&2\end{pmatrix},\quad
    DC=\begin{pmatrix}2&4&2\end{pmatrix}.
    \end{gathered}}
    \]

    On remarque que \(AA=2A\), relation qui sera utilisée à l'exercice 3. Notons aussi que l'ordre des facteurs importe : \(AD\) n'est pas défini, alors que \(DA\) l'est.

    注意 \(AA=2A\)，这一关系将在练习 3 中使用。还要注意因子的顺序很重要：\(AD\) 无定义，而 \(DA\) 有定义。
    {: .zh }

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">transposée de matrice　矩阵的转置</p>

Soit \(A\in\mathcal{M}_{m,n}(\mathbb{R})\).
{: .fr-exo }

设 \(A\in\mathcal{M}_{m,n}(\mathbb{R})\)。
{: .zh }

1. Dans le cas \(m=1\), calculer le réel \(AA^T\) en fonction des coefficients de \(A=(a_{1,j})\).
    {: .fr-exo }

    当 \(m=1\) 时，用 \(A=(a_{1,j})\) 的系数表示并计算实数 \(AA^T\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Pour \(m=1\), la matrice \(A\) est une matrice ligne \(A=(a_{1,1}\ \cdots\ a_{1,n})\). Sa transposée est la matrice colonne des \(a_{1,j}\), donc \(AA^T\) est la matrice \(1\times1\)

        <strong>解答。</strong>当 \(m=1\) 时，\(A\) 是行矩阵 \(A=(a_{1,1}\ \cdots\ a_{1,n})\)。其转置为各 \(a_{1,j}\) 组成的列矩阵，因此 \(AA^T\) 是 \(1\times1\) 矩阵
        {: .zh }

        \[
        \boxed{AA^T=\sum_{j=1}^{n}a_{1,j}^{2}}.
        \]

2. Dans le cas général, démontrer que \(AA^T=0\implies A=0\).
    {: .fr-exo }

    在一般情形下，证明 \(AA^T=0\implies A=0\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Le coefficient diagonal d'indice \((i,i)\) de \(AA^T\) est le produit de la \(i\)-ème ligne de \(A\) par la \(i\)-ème colonne de \(A^T\), c'est-à-dire par la \(i\)-ème ligne de \(A\) :

        <strong>解答。</strong>\(AA^T\) 的第 \((i,i)\) 个对角系数等于 \(A\) 的第 \(i\) 行与 \(A^T\) 的第 \(i\) 列（即 \(A\) 的第 \(i\) 行）之积：
        {: .zh }

        \[
        (AA^T)_{i,i}=\sum_{j=1}^{n}a_{i,j}^{2}.
        \]

        Si \(AA^T=0\), alors tous ces coefficients sont nuls. Une somme de carrés de réels est nulle si et seulement si chaque terme est nul, donc \(a_{i,j}=0\) pour tous \(i,j\), c'est-à-dire \(A=0\).

        若 \(AA^T=0\)，则所有这些系数为零。实数平方和为零当且仅当每一项为零，故对一切 \(i,j\) 有 \(a_{i,j}=0\)，即 \(A=0\)。
        {: .zh }

        \[
        \boxed{AA^T=0\implies A=0}.
        \]

3. Cette implication est-elle encore vraie si \(A\in\mathcal{M}_{m,n}(\mathbb{C})\) ?
    {: .fr-exo }

    若 \(A\in\mathcal{M}_{m,n}(\mathbb{C})\)，该蕴含关系是否仍然成立？
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Sur \(\mathbb{C}\), l'implication est fausse : le contre-exemple suivant le prouve.

        <strong>解答。</strong>在 \(\mathbb{C}\) 上该蕴含关系不成立：下面的反例即可说明。
        {: .zh }

        \[
        A=\begin{pmatrix}1&i\end{pmatrix}\in\mathcal{M}_{1,2}(\mathbb{C}),
        \qquad
        AA^T=1\cdot1+i\cdot i=1+i^{2}=0,
        \qquad
        A\neq0.
        \]

        \[
        \boxed{\text{Non : }A=\begin{pmatrix}1&i\end{pmatrix}\text{ est un contre-exemple.}}
        \]

        La démonstration de la question 2 utilise en effet la positivité des carrés, qui n'a pas de sens pour les nombres complexes. Avec la transposée conjuguée \(\overline{A}^{T}\), l'implication redevient vraie.

        第 2 问的证明确实用到了平方的非负性，而这对复数没有意义。若改用共轭转置 \(\overline{A}^{T}\)，该蕴含关系重新成立。
        {: .zh }

4. Soit \(B\in\mathcal{M}_{p,m}(\mathbb{R})\). Montrer que \(BAA^T=0\implies BA=0\).
    {: .fr-exo }

    设 \(B\in\mathcal{M}_{p,m}(\mathbb{R})\)。证明 \(BAA^T=0\implies BA=0\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Supposons \(BAA^T=0\). En multipliant à droite par \(B^T\), il vient

        <strong>解答。</strong>设 \(BAA^T=0\)。右乘 \(B^T\)，得
        {: .zh }

        \[
        0=BAA^TB^T=(BA)(BA)^T.
        \]

        La matrice \(BA\) appartient à \(\mathcal{M}_{p,n}(\mathbb{R})\) ; d'après la question 2 appliquée à \(BA\), on obtient \(BA=0\).

        矩阵 \(BA\) 属于 \(\mathcal{M}_{p,n}(\mathbb{R})\)；对 \(BA\) 应用第 2 问，得到 \(BA=0\)。
        {: .zh }

        \[
        \boxed{BAA^T=0\implies BA=0}.
        \]

5. Soient \(B,C\in\mathcal{M}_{p,m}(\mathbb{R})\). Montrer que \(BAA^T=CAA^T\implies BA=CA\).
    {: .fr-exo }

    设 \(B,C\in\mathcal{M}_{p,m}(\mathbb{R})\)。证明 \(BAA^T=CAA^T\implies BA=CA\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Si \(BAA^T=CAA^T\), alors en soustrayant :

        <strong>解答。</strong>若 \(BAA^T=CAA^T\)，相减得：
        {: .zh }

        \[
        (B-C)AA^T=0.
        \]

        La question 4, appliquée à \(B-C\in\mathcal{M}_{p,m}(\mathbb{R})\), donne \((B-C)A=0\), c'est-à-dire \(BA=CA\).

        对 \(B-C\in\mathcal{M}_{p,m}(\mathbb{R})\) 应用第 4 问，得 \((B-C)A=0\)，即 \(BA=CA\)。
        {: .zh }

        \[
        \boxed{BAA^T=CAA^T\implies BA=CA}.
        \]

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">puissances de matrices　矩阵的幂</p>

Calculer \(A^n\) pour tout \(n\in\mathbb{N}\) dans chacun des cas suivants :
{: .fr-exo }

对下列每种情形，计算 \(A^n\)（\(n\in\mathbb{N}\)）：
{: .zh }

1. \(A=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\)
    {: .fr-exo }

    \(A=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}\)
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On calcule

        <strong>解答。</strong>计算
        {: .zh }

        \[
        A^2=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}^{2}
        =\begin{pmatrix}2&-2\\-2&2\end{pmatrix}=2A.
        \]

        On en déduit par récurrence que, pour tout \(n\geqslant1\),

        由此用递推证明：对一切 \(n\geqslant1\)，
        {: .zh }

        \[
        \boxed{A^n=2^{\,n-1}A=
        \begin{pmatrix}2^{\,n-1}&-2^{\,n-1}\\-2^{\,n-1}&2^{\,n-1}\end{pmatrix}}.
        \]

        En effet, si \(A^k=2^{k-1}A\), alors \(A^{k+1}=2^{k-1}A^2=2^{k}A\). Pour \(n=0\), on a \(A^0=I_2\).

        事实上，若 \(A^k=2^{k-1}A\)，则 \(A^{k+1}=2^{k-1}A^2=2^{k}A\)。当 \(n=0\) 时，\(A^0=I_2\)。
        {: .zh }

2. \(A=\begin{pmatrix}a&b\\0&a\end{pmatrix}\) où \(a,b\in\mathbb{R}\)
    {: .fr-exo }

    \(A=\begin{pmatrix}a&b\\0&a\end{pmatrix}\)，其中 \(a,b\in\mathbb{R}\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On écrit \(A=aI_2+bN\) avec \(N=\begin{pmatrix}0&1\\0&0\end{pmatrix}\). Comme \(N^2=0\), la formule du binôme de Newton donne, pour \(n\geqslant1\),

        <strong>解答。</strong>写成 \(A=aI_2+bN\)，其中 \(N=\begin{pmatrix}0&1\\0&0\end{pmatrix}\)。由于 \(N^2=0\)，由牛顿二项式公式，对 \(n\geqslant1\) 有
        {: .zh }

        \[
        A^n=a^nI_2+na^{n-1}b\,N
        =\boxed{\begin{pmatrix}a^n&na^{n-1}b\\0&a^n\end{pmatrix}}.
        \]

        Les matrices \(I_2\) et \(N\) commutent, ce qui justifie la formule du binôme ; les termes en \(N^k\), \(k\geqslant2\), sont nuls. Pour \(n=0\), on a \(A^0=I_2\).

        \(I_2\) 与 \(N\) 可交换，故二项式公式适用；\(N^k\)（\(k\geqslant2\)）的各项为零。当 \(n=0\) 时，\(A^0=I_2\)。
        {: .zh }

3. \(A=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)
    {: .fr-exo }

    \(A=\begin{pmatrix}1&1\\0&2\end{pmatrix}\)
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On pose \(N=A-I_2=\begin{pmatrix}0&1\\0&1\end{pmatrix}\). On vérifie que \(N^2=N\) (matrice idempotente). Comme \(I_2\) et \(N\) commutent,

        <strong>解答。</strong>令 \(N=A-I_2=\begin{pmatrix}0&1\\0&1\end{pmatrix}\)。可验证 \(N^2=N\)（幂等矩阵）。由于 \(I_2\) 与 \(N\) 可交换，
        {: .zh }

        \[
        A^n=(I_2+N)^n=I_2+\Bigl(\sum_{k=1}^{n}\binom{n}{k}\Bigr)N=I_2+(2^n-1)N,
        \]

        car \(\displaystyle\sum_{k=0}^{n}\binom{n}{k}=2^n\). Ainsi, pour tout \(n\in\mathbb{N}\),

        因为 \(\displaystyle\sum_{k=0}^{n}\binom{n}{k}=2^n\)。于是对一切 \(n\in\mathbb{N}\)，
        {: .zh }

        \[
        \boxed{A^n=\begin{pmatrix}1&2^n-1\\0&2^n\end{pmatrix}}.
        \]

4. \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)
    {: .fr-exo }

    \(A=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On écrit \(A=I_2+2K\) avec \(K=\begin{pmatrix}0&1\\1&0\end{pmatrix}\), et \(K^2=I_2\). La formule du binôme, licite car \(I_2\) et \(K\) commutent, donne

        <strong>解答。</strong>写成 \(A=I_2+2K\)，其中 \(K=\begin{pmatrix}0&1\\1&0\end{pmatrix}\)，且 \(K^2=I_2\)。由于 \(I_2\) 与 \(K\) 可交换，二项式公式给出
        {: .zh }

        \[
        A^n=\sum_{k=0}^{n}\binom{n}{k}2^kK^k
        =\Bigl(\sum_{k\ \text{pair}}\binom{n}{k}2^k\Bigr)I_2
        +\Bigl(\sum_{k\ \text{impair}}\binom{n}{k}2^k\Bigr)K.
        \]

        Or, par la formule du binôme appliquée à \((1+2)^n\) et \((1-2)^n\),

        而对 \((1+2)^n\) 与 \((1-2)^n\) 应用二项式公式，
        {: .zh }

        \[
        \sum_{k\ \text{pair}}\binom{n}{k}2^k=\frac{3^n+(-1)^n}{2},
        \qquad
        \sum_{k\ \text{impair}}\binom{n}{k}2^k=\frac{3^n-(-1)^n}{2}.
        \]

        D'où, pour tout \(n\in\mathbb{N}\),

        因此对一切 \(n\in\mathbb{N}\)，
        {: .zh }

        \[
        \boxed{A^n=\frac12\begin{pmatrix}
        3^n+(-1)^n&3^n-(-1)^n\\[2pt]
        3^n-(-1)^n&3^n+(-1)^n
        \end{pmatrix}}.
        \]

        Vérification pour \(n=1\) : on retrouve bien \(\frac12\begin{pmatrix}2&4\\4&2\end{pmatrix}=\begin{pmatrix}1&2\\2&1\end{pmatrix}\).

        验证 \(n=1\)：确实得到 \(\frac12\begin{pmatrix}2&4\\4&2\end{pmatrix}=\begin{pmatrix}1&2\\2&1\end{pmatrix}\)。
        {: .zh }

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">à l'aide de polynômes　借助多项式</p>

On considère la matrice \(A=\begin{pmatrix}7&5\\-6&-4\end{pmatrix}\).
{: .fr-exo }

考虑矩阵 \(A=\begin{pmatrix}7&5\\-6&-4\end{pmatrix}\)。
{: .zh }

1. Calculer \(A^2-3A+2I_2\).
    {: .fr-exo }

    计算 \(A^2-3A+2I_2\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On calcule

        <strong>解答。</strong>计算
        {: .zh }

        \[
        A^2=\begin{pmatrix}7&5\\-6&-4\end{pmatrix}^{2}
        =\begin{pmatrix}19&15\\-18&-14\end{pmatrix},
        \]

        puis

        于是
        {: .zh }

        \[
        A^2-3A+2I_2
        =\begin{pmatrix}19&15\\-18&-14\end{pmatrix}
        -3\begin{pmatrix}7&5\\-6&-4\end{pmatrix}
        +2\begin{pmatrix}1&0\\0&1\end{pmatrix}
        =\boxed{\begin{pmatrix}0&0\\0&0\end{pmatrix}}.
        \]

2. Soit \(n\geqslant2\). Déterminer le reste de la division euclidienne de \(X^n\) par \(X^2-3X+2\). (On pourra chercher les réels \(a,b\) tels que \(\exists Q\in\mathbb{R}[X],\ X^n=(X^2-3X+2)Q+aX+b\).)
    {: .fr-exo }

    设 \(n\geqslant2\)。求 \(X^n\) 除以 \(X^2-3X+2\) 的欧几里得除法的余式。（可以寻找实数 \(a,b\)，使得 \(\exists Q\in\mathbb{R}[X]\)，\(X^n=(X^2-3X+2)Q+aX+b\)。）
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(X^2-3X+2=(X-1)(X-2)\), le reste \(R=aX+b\) (de degré \(<2\)) vérifie, en évaluant l'identité \(X^n=(X^2-3X+2)Q+aX+b\) en \(X=1\) et en \(X=2\) :

        <strong>解答。</strong>由于 \(X^2-3X+2=(X-1)(X-2)\)，余式 \(R=aX+b\)（次数 \(<2\)）满足：在恒等式 \(X^n=(X^2-3X+2)Q+aX+b\) 中取 \(X=1\) 与 \(X=2\)，得
        {: .zh }

        \[
        \begin{cases}
        a+b=1,\\
        2a+b=2^n.
        \end{cases}
        \]

        On en déduit \(a=2^n-1\) et \(b=1-a=2-2^n\), donc

        由此 \(a=2^n-1\)，\(b=1-a=2-2^n\)，故
        {: .zh }

        \[
        \boxed{R=(2^n-1)X+(2-2^n)}.
        \]

3. En déduire \(A^n\).
    {: .fr-exo }

    由此推出 \(A^n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> D'après la question 1, le polynôme \(X^2-3X+2\) est annulateur de \(A\) : \(A^2-3A+2I_2=0\). En substituant \(A\) à \(X\) dans l'identité de division, le terme \((A^2-3A+2I_2)Q(A)\) est nul, donc

        <strong>解答。</strong>由第 1 问，多项式 \(X^2-3X+2\) 是 \(A\) 的零化多项式：\(A^2-3A+2I_2=0\)。把除法恒等式中的 \(X\) 换成 \(A\)，项 \((A^2-3A+2I_2)Q(A)\) 为零，因此
        {: .zh }

        \[
        A^n=aA+bI_2=(2^n-1)A+(2-2^n)I_2.
        \]

        C'est-à-dire, pour tout \(n\geqslant2\) (et en fait pour tout \(n\in\mathbb{N}\)),

        即对一切 \(n\geqslant2\)（事实上对一切 \(n\in\mathbb{N}\)），
        {: .zh }

        \[
        \boxed{A^n=
        \begin{pmatrix}
        6\cdot2^n-5 & 5\cdot2^n-5\\[2pt]
        -6\cdot2^n+6 & -5\cdot2^n+6
        \end{pmatrix}}.
        \]

        Vérification pour \(n=2\) : \(\begin{pmatrix}24-5&20-5\\-24+6&-20+6\end{pmatrix}=\begin{pmatrix}19&15\\-18&-14\end{pmatrix}=A^2\).

        验证 \(n=2\)：\(\begin{pmatrix}24-5&20-5\\-24+6&-20+6\end{pmatrix}=\begin{pmatrix}19&15\\-18&-14\end{pmatrix}=A^2\)。
        {: .zh }

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">matrice circulante　循环矩阵</p>

On note
{: .fr-exo }

记
{: .zh }

\[
J=\begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}.
\]

1. Calculer \(J^2\) et \(J^3\).
    {: .fr-exo }

    计算 \(J^2\) 与 \(J^3\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Un calcul direct donne

        <strong>解答。</strong>直接计算得
        {: .zh }

        \[
        \boxed{J^2=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix},
        \qquad
        J^3=J\cdot J^2=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}=I_3.}
        \]

        On a donc \(J^3=I_3\), d'où \(J^4=J\), \(J^5=J^2\), etc. : les puissances de \(J\) sont périodiques de période \(3\).

        因此 \(J^3=I_3\)，从而 \(J^4=J\)、\(J^5=J^2\) 等：\(J\) 的幂以 \(3\) 为周期。
        {: .zh }

2. Soient \(A=J+J^2\) et \(n\in\mathbb{N}\). Calculer \(A^n\).
    {: .fr-exo }

    设 \(A=J+J^2\)，\(n\in\mathbb{N}\)。计算 \(A^n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(J\) et \(J^2\) commutent,

        <strong>解答。</strong>由于 \(J\) 与 \(J^2\) 可交换，
        {: .zh }

        \[
        A^2=(J+J^2)^2=J^2+2J^3+J^4=J^2+2I_3+J=A+2I_3.
        \]

        Ainsi \(A^2-A-2I_3=0\) : le polynôme \(X^2-X-2=(X-2)(X+1)\) est annulateur de \(A\). Le reste de la division euclidienne de \(X^n\) par \(X^2-X-2\) s'écrit \(aX+b\), avec

        于是 \(A^2-A-2I_3=0\)：多项式 \(X^2-X-2=(X-2)(X+1)\) 是 \(A\) 的零化多项式。\(X^n\) 除以 \(X^2-X-2\) 的余式记为 \(aX+b\)，其中
        {: .zh }

        \[
        \begin{cases}
        a+b=(-1)^n &(\text{évaluation en }X=-1),\\
        2a+b=2^n &(\text{évaluation en }X=2),
        \end{cases}
        \]

        d'où

        由此
        {: .zh }

        \[
        a=\frac{2^n-(-1)^n}{3},\qquad b=\frac{2^n+2(-1)^n}{3}.
        \]

        En substituant \(A\), on obtient, pour tout \(n\in\mathbb{N}\),

        代入 \(A\)，对一切 \(n\in\mathbb{N}\) 得
        {: .zh }

        \[
        \boxed{A^n=\frac13\Bigl[\bigl(2^n-(-1)^n\bigr)A+\bigl(2^n+2(-1)^n\bigr)I_3\Bigr]},
        \]

        soit, sous forme explicite,

        即显式地，
        {: .zh }

        \[
        \boxed{A^n=\frac13\begin{pmatrix}
        2^n+2(-1)^n & 2^n-(-1)^n & 2^n-(-1)^n\\
        2^n-(-1)^n & 2^n+2(-1)^n & 2^n-(-1)^n\\
        2^n-(-1)^n & 2^n-(-1)^n & 2^n+2(-1)^n
        \end{pmatrix}}.
        \]

        Vérification pour \(n=2\) : \(A^2=A+2I_3=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\), et la formule donne bien des coefficients diagonaux \(\frac{4+2}{3}=2\) et hors diagonale \(\frac{4-1}{3}=1\).

        验证 \(n=2\)：\(A^2=A+2I_3=\begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\)，而公式确实给出对角系数 \(\frac{4+2}{3}=2\)、非对角系数 \(\frac{4-1}{3}=1\)。
        {: .zh }

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">commutativité　交换性</p>

Déterminer l'ensemble des matrices \(B\in\mathcal{M}_2(\mathbb{R})\) qui commutent avec \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\).
{: .fr-exo }

求所有与 \(A=\begin{pmatrix}1&2\\3&4\end{pmatrix}\) 可交换的矩阵 \(B\in\mathcal{M}_2(\mathbb{R})\) 的集合。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Écrivons \(B=\begin{pmatrix}x&y\\z&t\end{pmatrix}\) et calculons les deux produits :

    <strong>解答。</strong>记 \(B=\begin{pmatrix}x&y\\z&t\end{pmatrix}\)，计算两个乘积：
    {: .zh }

    \[
    AB=\begin{pmatrix}x+2z&y+2t\\3x+4z&3y+4t\end{pmatrix},
    \qquad
    BA=\begin{pmatrix}x+3y&2x+4y\\z+3t&2z+4t\end{pmatrix}.
    \]

    L'égalité \(AB=BA\) équivaut au système

    等式 \(AB=BA\) 等价于方程组
    {: .zh }

    \[
    \begin{cases}
    x+2z=x+3y,\\
    y+2t=2x+4y,\\
    3x+4z=z+3t,\\
    3y+4t=2z+4t,
    \end{cases}
    \qquad\text{c'est-à-dire}\qquad
    \begin{cases}
    2z=3y,\\
    2t=2x+3y,\\
    3x+3z=3t,\\
    3y=2z.
    \end{cases}
    \]

    La première et la dernière équation sont identiques. La troisième donne \(t=x+z\) ; en reportant dans la deuxième, on obtient \(2x+2z=2x+3y\), soit \(2z=3y\), qui est la première équation. Le système se réduit donc à

    第一式与最后一式相同。第三式给出 \(t=x+z\)；代入第二式得 \(2x+2z=2x+3y\)，即 \(2z=3y\)，正是第一式。方程组因此化为
    {: .zh }

    \[
    z=\frac32\,y,\qquad t=x+\frac32\,y,\qquad (x,y)\in\mathbb{R}^2.
    \]

    Les matrices cherchées sont donc

    所求矩阵因此为
    {: .zh }

    \[
    \boxed{
    B=\begin{pmatrix}x&y\\[2pt]\frac32\,y&x+\frac32\,y\end{pmatrix},\qquad (x,y)\in\mathbb{R}^2
    }
    \]

    ou, de façon équivalente,

    等价地，
    {: .zh }

    \[
    \boxed{B=\alpha I_2+\beta A,\qquad (\alpha,\beta)\in\mathbb{R}^2}
    \]

    avec \(\alpha=x-\frac y2\) et \(\beta=\frac y2\). L'ensemble des matrices qui commutent avec \(A\) est donc le plan vectoriel \(\mathrm{Vect}(I_2,A)\), formé des polynômes de degré \(\leqslant1\) en \(A\).

    其中 \(\alpha=x-\frac y2\)，\(\beta=\frac y2\)。因此与 \(A\) 可交换的矩阵集合是向量平面 \(\mathrm{Vect}(I_2,A)\)，由 \(A\) 的次数 \(\leqslant1\) 的多项式组成。
    {: .zh }

    Réciproquement, toute matrice de cette forme commute avec \(A\), puisque \(I_2\) et \(A\) commutent avec \(A\).

    反之，这种形式的矩阵都与 \(A\) 可交换，因为 \(I_2\) 与 \(A\) 都与 \(A\) 可交换。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice rectangulaire de taille \(m\times n\)</strong>：\(m\times n\) 矩形矩阵
    - <strong>produit matriciel</strong>：矩阵乘法
    - <strong>compatibilité des dimensions</strong>：维数相容
    - <strong>matrice ligne / matrice colonne</strong>：行矩阵 / 列矩阵
    - <strong>transposée</strong>：转置
    - <strong>transposée conjuguée</strong>：共轭转置
    - <strong>matrice nulle</strong>：零矩阵
    - <strong>implication</strong>：蕴含
    - <strong>contre-exemple</strong>：反例
    - <strong>somme de carrés</strong>：平方和
    - <strong>puissance \(n\)-ième</strong>：\(n\) 次幂
    - <strong>matrice idempotente</strong>：幂等矩阵
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>polynôme annulateur</strong>：零化多项式
    - <strong>division euclidienne</strong>：欧几里得除法
    - <strong>reste</strong>：余式
    - <strong>matrice circulante</strong>：循环矩阵
    - <strong>commuter avec \(A\)</strong>：与 \(A\) 可交换
    - <strong>l'ensemble des matrices qui commutent avec \(A\)</strong>：与 \(A\) 可交换的矩阵集合（中心化子）
    - <strong>en déduire</strong>：由此推出
    - <strong>vérifier</strong>：验证
    - <strong>pour tout \(n\in\mathbb{N}\)</strong>：对一切 \(n\in\mathbb{N}\)

## Exercices supplémentaires <span class="heading-zh">补充习题</span>

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">ensemble commutatif　交换矩阵族</p>

Soit \(E\) l'ensemble des matrices de la forme
{: .fr-exo }

设 \(E\) 为下列形式的矩阵的集合：
{: .zh }

\[
A=\begin{pmatrix}
a&b&c\\
3c&a-3c&b\\
3b&3c-3b&a-3c
\end{pmatrix}
\quad\text{où } a,b,c\in\mathbb{R}.
\]

其中 \(a,b,c\in\mathbb{R}\)。
{: .zh }

Montrer que \(\forall A,B\in E,\ AB=BA\).
{: .fr-exo }

证明 \(\forall A,B\in E,\ AB=BA\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> L'idée est d'écrire toute matrice de \(E\) comme un polynôme en une même matrice \(M\). Posons

    <strong>解答。</strong>思路是把 \(E\) 中每个矩阵都写成同一个矩阵 \(M\) 的多项式。令
    {: .zh }

    \[
    M=\begin{pmatrix}0&1&0\\0&0&1\\3&-3&0\end{pmatrix}.
    \]

    Un calcul direct donne

    直接计算得
    {: .zh }

    \[
    M^2=\begin{pmatrix}0&0&1\\3&-3&0\\0&3&-3\end{pmatrix}.
    \]

    On vérifie alors que

    于是可验证
    {: .zh }

    \[
    aI_3+bM+cM^2
    =\begin{pmatrix}
    a&b&c\\
    3c&a-3c&b\\
    3b&3c-3b&a-3c
    \end{pmatrix}.
    \]

    Ainsi \(E=\{aI_3+bM+cM^2\mid a,b,c\in\mathbb{R}\}\) : tout élément de \(E\) est un polynôme en \(M\).

    因此 \(E=\{aI_3+bM+cM^2\mid a,b,c\in\mathbb{R}\}\)：\(E\) 的每个元素都是 \(M\) 的多项式。
    {: .zh }

    Soient \(A=aI_3+bM+cM^2\) et \(B=a'I_3+b'M+c'M^2\) deux éléments de \(E\). En développant le produit, chaque terme est un coefficient réel fois une puissance de \(M\) :

    设 \(A=aI_3+bM+cM^2\) 与 \(B=a'I_3+b'M+c'M^2\) 为 \(E\) 中两个元素。展开乘积，每一项都是实数系数乘以 \(M\) 的某个幂：
    {: .zh }

    \[
    AB=\sum_{i,j\in\{0,1,2\}}c_i\,c'_j\,M^{i+j},
    \qquad\text{avec } c_0=a,\ c_1=b,\ c_2=c.
    \]

    Or \(M^iM^j=M^{i+j}=M^jM^i\) pour tous \(i,j\) : toutes ces puissances commutent. L'expression ci-dessus est donc symétrique en \((A,B)\), et

    而 \(M^iM^j=M^{i+j}=M^jM^i\) 对一切 \(i,j\) 成立：这些幂两两可交换。上式因此关于 \((A,B)\) 对称，故
    {: .zh }

    \[
    \boxed{\forall A,B\in E,\qquad AB=BA}.
    \]

    Plus précisément, \(M^3=M\cdot M^2\) vaut

    更具体地，\(M^3=M\cdot M^2\) 等于
    {: .zh }

    \[
    M^3=3I_3-3M,
    \]

    donc \(E\) est stable par produit : c'est la sous-algèbre commutative des polynômes en \(M\).

    因此 \(E\) 对乘法封闭：它是 \(M\) 的多项式构成的交换子代数。
    {: .zh }

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">matrice nilpotente　幂零矩阵</p>

1. On considère la matrice
    {: .fr-exo }

    考虑矩阵
    {: .zh }

    \[
    M=\begin{pmatrix}
    0&m_{1,2}&\cdots&m_{1,n}\\
    \vdots&0&\ddots&\vdots\\
    \vdots&&\ddots&m_{n-1,n}\\
    0&\cdots&\cdots&0
    \end{pmatrix}\in\mathcal{M}_n(\mathbb{R}).
    \]

    Montrer que \(M\) est nilpotente, c'est-à-dire que \(M^n=0_n\). (On pourra calculer \(M^pe_i\) pour \(e_i\) le vecteur colonne ayant un 1 à la \(i\)-ème ligne et des zéros ailleurs, pour \(1\leqslant i\leqslant n\) et \(1\leqslant p\leqslant n\).)
    {: .fr-exo }

    证明 \(M\) 是幂零的，即 \(M^n=0_n\)。（可以计算 \(M^pe_i\)，其中 \(e_i\) 是第 \(i\) 行为 1、其余为零的列向量，\(1\leqslant i\leqslant n\)，\(1\leqslant p\leqslant n\)。）
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Notons \((e_1,\dots,e_n)\) la base canonique de \(\mathbb{R}^n\). La \(i\)-ème colonne de \(M\) est \(Me_i\) ; comme \(M\) est strictement triangulaire supérieure, ses coefficients sous la diagonale sont nuls, et

        <strong>解答。</strong>记 \((e_1,\dots,e_n)\) 为 \(\mathbb{R}^n\) 的标准基。\(M\) 的第 \(i\) 列是 \(Me_i\)；由于 \(M\) 为严格上三角矩阵，对角线以下的系数为零，因此
        {: .zh }

        \[
        Me_i=\sum_{k=1}^{i-1}m_{k,i}\,e_k\in\mathrm{Vect}(e_1,\dots,e_{i-1}),
        \]

        avec la convention \(\mathrm{Vect}(\varnothing)=\{0\}\).

        其中约定 \(\mathrm{Vect}(\varnothing)=\{0\}\)。
        {: .zh }

        Montrons par récurrence sur \(p\geqslant0\) que

        对 \(p\geqslant0\) 用递推证明
        {: .zh }

        \[
        M^pe_i\in\mathrm{Vect}(e_1,\dots,e_{i-p}),
        \]

        où l'on convient que \(\mathrm{Vect}(e_1,\dots,e_j)=\{0\}\) si \(j\leqslant0\). Pour \(p=0\), \(M^0e_i=e_i\). Si la propriété vaut au rang \(p\), écrivons \(M^pe_i=\sum_{k\leqslant i-p}\lambda_k e_k\) ; alors

        其中约定当 \(j\leqslant0\) 时 \(\mathrm{Vect}(e_1,\dots,e_j)=\{0\}\)。当 \(p=0\) 时，\(M^0e_i=e_i\)。若性质在第 \(p\) 步成立，记 \(M^pe_i=\sum_{k\leqslant i-p}\lambda_k e_k\)；则
        {: .zh }

        \[
        M^{p+1}e_i=\sum_{k\leqslant i-p}\lambda_k\,Me_k
        \in\mathrm{Vect}(e_1,\dots,e_{i-p-1}),
        \]

        car \(Me_k\in\mathrm{Vect}(e_1,\dots,e_{k-1})\). La propriété est donc vraie au rang \(p+1\).

        因为 \(Me_k\in\mathrm{Vect}(e_1,\dots,e_{k-1})\)。故性质在第 \(p+1\) 步也成立。
        {: .zh }

        Pour \(p=n\geqslant i\), on obtient \(M^ne_i=0\). Comme les \(e_i\) forment une base, la matrice nulle est caractérisée par son action sur la base :

        当 \(p=n\geqslant i\) 时得到 \(M^ne_i=0\)。由于 \(e_i\) 构成一组基，零矩阵由其在基上的作用唯一确定：
        {: .zh }

        \[
        \boxed{M^n=0_n}.
        \]

        Plus précisément, \(M^p=0\) dès que \(p\geqslant n\) : \(M\) est nilpotente d'indice au plus \(n\).

        更精确地说，只要 \(p\geqslant n\) 就有 \(M^p=0\)：\(M\) 是幂零矩阵，幂零指数不超过 \(n\)。
        {: .zh }

2. Soit \(M=\begin{pmatrix}3&1&0\\0&3&2\\0&0&3\end{pmatrix}\in\mathcal{M}_3(\mathbb{R})\). Pour tout entier \(p\geqslant1\), calculer \(M^p\).
    {: .fr-exo }

    设 \(M=\begin{pmatrix}3&1&0\\0&3&2\\0&0&3\end{pmatrix}\in\mathcal{M}_3(\mathbb{R})\)。对一切整数 \(p\geqslant1\)，计算 \(M^p\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On décompose \(M=3I_3+N\) avec

        <strong>解答。</strong>分解 \(M=3I_3+N\)，其中
        {: .zh }

        \[
        N=\begin{pmatrix}0&1&0\\0&0&2\\0&0&0\end{pmatrix},
        \qquad
        N^2=\begin{pmatrix}0&0&2\\0&0&0\\0&0&0\end{pmatrix},
        \qquad
        N^3=0.
        \]

        Comme \(3I_3\) et \(N\) commutent, la formule du binôme donne, pour tout \(p\geqslant1\),

        由于 \(3I_3\) 与 \(N\) 可交换，由二项式公式，对一切 \(p\geqslant1\) 有
        {: .zh }

        \[
        M^p=\sum_{k=0}^{p}\binom pk 3^{p-k}N^k
        =3^pI_3+p\,3^{p-1}N+\binom p2 3^{p-2}N^2,
        \]

        les termes \(k\geqslant3\) étant nuls. En explicitant :

        其中 \(k\geqslant3\) 的项为零。显式写出：
        {: .zh }

        \[
        \boxed{M^p=
        \begin{pmatrix}
        3^p & p\,3^{p-1} & p(p-1)\,3^{p-2}\\[2pt]
        0 & 3^p & 2p\,3^{p-1}\\[2pt]
        0 & 0 & 3^p
        \end{pmatrix}}.
        \]

        car \(2\binom p2=p(p-1)\). Vérification pour \(p=2\) : on retrouve bien \(M^2=\begin{pmatrix}9&6&2\\0&9&12\\0&0&9\end{pmatrix}\).

        因为 \(2\binom p2=p(p-1)\)。验证 \(p=2\)：确实得到 \(M^2=\begin{pmatrix}9&6&2\\0&9&12\\0&0&9\end{pmatrix}\)。
        {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>sous-algèbre commutative</strong>：交换子代数
    - <strong>stable par produit</strong>：对乘法封闭
    - <strong>polynôme en \(M\)</strong>：\(M\) 的多项式
    - <strong>matrice triangulaire supérieure stricte</strong>：严格上三角矩阵
    - <strong>vecteur colonne</strong>：列向量
    - <strong>base canonique</strong>：标准基
    - <strong>sous-espace vectoriel engendré</strong>：生成的（子）空间
    - <strong>combinaison linéaire</strong>：线性组合
    - <strong>récurrence</strong>：递推
    - <strong>initialisation / hérédité</strong>：初始步骤 / 递推步骤
    - <strong>indice de nilpotence</strong>：幂零指数
    - <strong>c'est-à-dire</strong>：即
    - <strong>on vérifie que</strong>：可以验证
    - <strong>pour tout entier \(p\geqslant1\)</strong>：对一切整数 \(p\geqslant1\)
