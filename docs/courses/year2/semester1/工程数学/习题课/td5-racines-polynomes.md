---
title: TD5 多项式的根解答
comments: true
---

# 第 5 次习题课　多项式的根

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°5 — Racines de polynômes</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">预备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">multiplicité des racines　根的重数</p>

Soit \(P=X^4+2X^2+1\). Déterminer les multiplicités des racines \(i\) et \(-i\) de \(P\) de deux manières différentes :
{: .fr-exo }

设 \(P=X^4+2X^2+1\)。用两种不同的方法确定 \(P\) 的根 \(i\) 与 \(-i\) 的<strong>重数</strong>（multiplicité）：
{: .zh }

1. en factorisant \(P\),
    {: .fr-exo }

    通过因式分解 \(P\)，
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On reconnaît une identité remarquable :

        <strong>解答。</strong>我们辨认出一个常用恒等式（identité remarquable）：
        {: .zh }

        \[
        P=X^4+2X^2+1=(X^2+1)^2.
        \]

        Or, dans \(\mathbb{C}[X]\),

        而在 \(\mathbb{C}[X]\) 中，
        {: .zh }

        \[
        X^2+1=(X-i)(X+i).
        \]

        Par suite,

        因此，
        {: .zh }

        \[
        P=\bigl((X-i)(X+i)\bigr)^2=(X-i)^2(X+i)^2.
        \]

        Ainsi \(i\) et \(-i\) sont deux racines de \(P\), chacune de multiplicité au moins \(2\). Comme \(\deg P=4\), la somme des multiplicités vaut exactement \(4\) : chacune est donc exactement double.

        于是 \(i\) 与 \(-i\) 都是 \(P\) 的根，且每个的重数至少为 \(2\)。由于 \(\deg P=4\)，各重数之和恰为 \(4\)：故每个都恰为二重。
        {: .zh }

        \[
        \boxed{m(i)=m(-i)=2.}
        \]

2. en calculant sa dérivée.
    {: .fr-exo }

    通过计算其导数。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On dérive \(P\) :

        <strong>解答。</strong>对 \(P\) 求导：
        {: .zh }

        \[
        P'(X)=4X^3+4X=4X(X^2+1),
        \qquad
        P''(X)=12X^2+4.
        \]

        On évalue ces expressions en \(i\) :

        在 \(i\) 处计算这些表达式：
        {: .zh }

        \[
        P(i)=i^4+2i^2+1=1-2+1=0,
        \qquad
        P'(i)=4i\,(i^2+1)=0,
        \]

        \[
        P''(i)=-12+4=-8\neq 0.
        \]

        D'après le critère de multiplicité (une racine \(a\) est de multiplicité \(m\) si \(P(a)=\cdots=P^{(m-1)}(a)=0\) et \(P^{(m)}(a)\neq 0\)), la racine \(i\) est double.

        根据重数判别法（若 \(P(a)=\cdots=P^{(m-1)}(a)=0\) 且 \(P^{(m)}(a)\neq 0\)，则 \(a\) 是 \(m\) 重根），根 \(i\) 是二重的。
        {: .zh }

        De même, \(P\) étant à coefficients réels, \(P(-i)=\overline{P(i)}=0\), \(P'(-i)=\overline{P'(i)}=0\) et \(P''(-i)=\overline{P''(i)}=-8\neq 0\) : la racine \(-i\) est elle aussi double.

        同样，由于 \(P\) 的系数为实数，\(P(-i)=\overline{P(i)}=0\)、\(P'(-i)=\overline{P'(i)}=0\) 且 \(P''(-i)=\overline{P''(i)}=-8\neq 0\)：根 \(-i\) 也是二重的。
        {: .zh }

        \[
        \boxed{m(i)=m(-i)=2.}
        \]

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">interpolation de Lagrange　拉格朗日插值</p>

Déterminer le polynôme \(P\in\mathbb{R}_3[X]\) tel que \(P(0)=0\), \(P(1)=0\), \(P(2)=4\) et \(P(3)=18\) de deux manières différentes :
{: .fr-exo }

求多项式 \(P\in\mathbb{R}_3[X]\)，使其满足 \(P(0)=0\)、\(P(1)=0\)、\(P(2)=4\) 且 \(P(3)=18\)，用两种不同的方法：
{: .zh }

1. directement en posant \(P=X(X-1)(aX+b)\) avec \(a,b\in\mathbb{R}\),
    {: .fr-exo }

    直接令 \(P=X(X-1)(aX+b)\)，其中 \(a,b\in\mathbb{R}\)，
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(P(0)=P(1)=0\), les polynômes \(X\) et \(X-1\) divisent \(P\). Ils sont premiers entre eux, donc \(X(X-1)\) divise \(P\). Comme \(\deg P\leqslant 3\), le quotient est de degré au plus \(1\) : il existe \(a,b\in\mathbb{R}\) tels que

        <strong>解答。</strong>由于 \(P(0)=P(1)=0\)，多项式 \(X\) 与 \(X-1\) 都整除 \(P\)。二者互素，故 \(X(X-1)\) 整除 \(P\)。由于 \(\deg P\leqslant 3\)，商至多为一次：存在 \(a,b\in\mathbb{R}\) 使得
        {: .zh }

        \[
        P=X(X-1)(aX+b).
        \]

        Les deux conditions restantes s'écrivent

        剩下的两个条件写成
        {: .zh }

        \[
        P(2)=4\iff 2\cdot 1\cdot(2a+b)=4\iff 2a+b=2,
        \]

        \[
        P(3)=18\iff 3\cdot 2\cdot(3a+b)=18\iff 3a+b=3.
        \]

        En soustrayant ces deux équations, on obtient \(a=1\), puis \(b=2-2a=0\). Ainsi

        两式相减得 \(a=1\)，再由 \(b=2-2a\) 得 \(b=0\)。于是
        {: .zh }

        \[
        \boxed{P=X^2(X-1)=X^3-X^2.}
        \]

        Vérification : \(P(0)=0\), \(P(1)=0\), \(P(2)=4\), \(P(3)=27-9=18\). De plus, si deux polynômes de degré au plus \(3\) coïncidaient en \(0,1,2,3\), leur différence aurait quatre racines distinctes sans être nulle, ce qui est impossible : ce polynôme est donc unique.

        验证：\(P(0)=0\)、\(P(1)=0\)、\(P(2)=4\)、\(P(3)=27-9=18\)。此外，若两个次数不超过 \(3\) 的多项式在 \(0,1,2,3\) 处取值相同，则它们的差有四个互不相同的根却不为零，这是不可能的：因此该多项式唯一。
        {: .zh }

2. en passant par les polynômes interpolateurs de Lagrange \(L_2=-\frac{1}{2}X(X-1)(X-3)\) et \(L_3=\frac{1}{6}X(X-1)(X-2)\).
    {: .fr-exo }

    借助拉格朗日插值多项式 \(L_2=-\frac{1}{2}X(X-1)(X-3)\) 与 \(L_3=\frac{1}{6}X(X-1)(X-2)\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Les polynômes interpolateurs de Lagrange aux nœuds \(0,1,2,3\) sont, pour \(k\in\{0,1,2,3\}\),

        <strong>解答。</strong>在节点 \(0,1,2,3\) 处的拉格朗日插值多项式为（对 \(k\in\{0,1,2,3\}\)）
        {: .zh }

        \[
        L_k(X)=\prod_{\substack{0\leqslant j\leqslant 3\\ j\neq k}}\frac{X-j}{k-j}.
        \]

        En particulier, \(L_2\) et \(L_3\) sont donnés par l'énoncé et vérifient

        特别地，\(L_2\) 与 \(L_3\) 由题设给出，并满足
        {: .zh }

        \[
        L_2(2)=1,\quad L_2(0)=L_2(1)=L_2(3)=0,
        \]

        \[
        L_3(3)=1,\quad L_3(0)=L_3(1)=L_3(2)=0.
        \]

        Comme \(P(0)=P(1)=0\), le polynôme d'interpolation s'écrit

        由于 \(P(0)=P(1)=0\)，插值多项式写成
        {: .zh }

        \[
        P=P(2)L_2+P(3)L_3=4L_2+18L_3.
        \]

        Donc

        因此
        {: .zh }

        \[
        P=4\Bigl(-\frac{1}{2}\Bigr)X(X-1)(X-3)+18\cdot\frac{1}{6}X(X-1)(X-2),
        \]

        \[
        \begin{aligned}
        P&=-2X(X-1)(X-3)+3X(X-1)(X-2)\\
        &=X(X-1)\bigl[-2(X-3)+3(X-2)\bigr].
        \end{aligned}
        \]

        Or

        而
        {: .zh }

        \[
        -2(X-3)+3(X-2)=-2X+6+3X-6=X.
        \]

        Ainsi

        于是
        {: .zh }

        \[
        \boxed{P=X^2(X-1)=X^3-X^2.}
        \]

        On retrouve bien le même polynôme ; l'unicité du polynôme d'interpolation de degré au plus \(3\) en quatre points distincts garantit qu'il n'y en a pas d'autre.

        我们确实得到同一个多项式；四个互异节点上次数不超过 \(3\) 的插值多项式的唯一性保证没有其他解。
        {: .zh }

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">factorisation　因式分解</p>

Factoriser dans \(\mathbb{C}[X]\) puis dans \(\mathbb{R}[X]\) le polynôme \(P=(X^2-X+1)^2+1\).
{: .fr-exo }

分别在 \(\mathbb{C}[X]\) 与 \(\mathbb{R}[X]\) 中因式分解多项式 \(P=(X^2-X+1)^2+1\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Posons \(A=X^2-X+1\), de sorte que \(P=A^2+1\). Dans \(\mathbb{C}[X]\), on utilise l'identité \(a^2+1=(a-i)(a+i)\) :

    <strong>解答。</strong>令 \(A=X^2-X+1\)，则 \(P=A^2+1\)。在 \(\mathbb{C}[X]\) 中使用恒等式 \(a^2+1=(a-i)(a+i)\)：
    {: .zh }

    \[
    P=(X^2-X+1-i)(X^2-X+1+i).
    \]

    Factorisons le premier facteur. Son discriminant vaut

    分解第一个因子。其判别式为
    {: .zh }

    \[
    \Delta=(-1)^2-4(1-i)=1-4+4i=-3+4i.
    \]

    On cherche \(\delta=a+ib\in\mathbb{C}\) tel que \(\delta^2=-3+4i\) :

    寻找 \(\delta=a+ib\in\mathbb{C}\) 使 \(\delta^2=-3+4i\)：
    {: .zh }

    \[
    a^2-b^2=-3,\qquad 2ab=4,\qquad a^2+b^2=|\delta|^2=\sqrt{(-3)^2+4^2}=5.
    \]

    On en déduit \(a^2=1\), \(b^2=4\), et comme \(ab=2>0\), \(\delta=\pm(1+2i)\). Les racines du premier facteur sont donc

    由此得 \(a^2=1\)、\(b^2=4\)，且因 \(ab=2>0\)，故 \(\delta=\pm(1+2i)\)。第一个因子的根因此为
    {: .zh }

    \[
    \frac{1+(1+2i)}{2}=1+i,\qquad
    \frac{1-(1+2i)}{2}=-i.
    \]

    D'où

    因此
    {: .zh }

    \[
    X^2-X+1-i=\bigl(X-(1+i)\bigr)(X+i).
    \]

    Le second facteur s'obtient par conjugaison (ses coefficients sont les conjugués de ceux du premier) :

    第二个因子可由共轭得到（其系数是第一个因子系数的共轭）：
    {: .zh }

    \[
    X^2-X+1+i=\bigl(X-(1-i)\bigr)(X-i).
    \]

    Ainsi, dans \(\mathbb{C}[X]\),

    于是，在 \(\mathbb{C}[X]\) 中，
    {: .zh }

    \[
    \boxed{P=(X-i)(X+i)\bigl(X-(1+i)\bigr)\bigl(X-(1-i)\bigr).}
    \]

    Pour factoriser dans \(\mathbb{R}[X]\), on regroupe les racines conjuguées deux à deux :

    为了在 \(\mathbb{R}[X]\) 中分解，将共轭根两两配对：
    {: .zh }

    \[
    (X-i)(X+i)=X^2+1,
    \]

    \[
    \bigl(X-(1+i)\bigr)\bigl(X-(1-i)\bigr)=(X-1)^2-i^2=(X-1)^2+1=X^2-2X+2.
    \]

    Donc, dans \(\mathbb{R}[X]\),

    因此，在 \(\mathbb{R}[X]\) 中，
    {: .zh }

    \[
    \boxed{P=(X^2+1)(X^2-2X+2).}
    \]

    Ces deux facteurs sont irréductibles sur \(\mathbb{R}\) : leurs discriminants valent respectivement \(-4\) et \(4-8=-4\), tous deux strictement négatifs. C'est donc la factorisation en facteurs irréductibles dans \(\mathbb{R}[X]\).

    这两个因子在 \(\mathbb{R}\) 上不可约：它们的判别式分别为 \(-4\) 与 \(4-8=-4\)，都严格为负。因此这就是 \(\mathbb{R}[X]\) 中的不可约因式分解。
    {: .zh }

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">racine multiple　重根</p>

Factoriser le polynôme \(P=4X^3-16X^2-19X-5\) sachant qu'il possède une racine multiple.
{: .fr-exo }

已知多项式 \(P=4X^3-16X^2-19X-5\) 有一个<strong>重根</strong>（racine multiple），将其因式分解。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Une racine multiple de \(P\) est une racine commune à \(P\) et à \(P'\). Commençons par dériver :

    <strong>解答。</strong>\(P\) 的重根是 \(P\) 与 \(P'\) 的公共根。先求导：
    {: .zh }

    \[
    P'(X)=12X^2-32X-19.
    \]

    Son discriminant vaut

    其判别式为
    {: .zh }

    \[
    \Delta'=(-32)^2-4\cdot 12\cdot(-19)=1024+912=1936=44^2>0.
    \]

    Les racines de \(P'\) sont donc

    \(P'\) 的根因此为
    {: .zh }

    \[
    x_1=\frac{32-44}{24}=-\frac{1}{2},\qquad
    x_2=\frac{32+44}{24}=\frac{19}{6}.
    \]

    Toute racine multiple de \(P\) devant annuler \(P'\), elle est nécessairement égale à \(x_1\) ou à \(x_2\). Or

    \(P\) 的任何重根都必须使 \(P'\) 为零，故必等于 \(x_1\) 或 \(x_2\)。而
    {: .zh }

    \[
    P\Bigl(-\frac{1}{2}\Bigr)
    =4\Bigl(-\frac{1}{8}\Bigr)-16\Bigl(\frac{1}{4}\Bigr)-19\Bigl(-\frac{1}{2}\Bigr)-5
    =-\frac{1}{2}-4+\frac{19}{2}-5=0.
    \]

    Donc \(-\frac{1}{2}\) est racine de \(P\) et de \(P'\) : c'est une racine au moins double. Comme \(\deg P=3\), \(P\) ne peut pas avoir deux racines multiples distinctes (la somme des multiplicités dépasserait alors \(3\)) ; ainsi \(-\frac{1}{2}\) est l'unique racine multiple, et elle est exactement double.

    因此 \(-\frac{1}{2}\) 是 \(P\) 与 \(P'\) 的公共根：它至少是二重根。由于 \(\deg P=3\)，\(P\) 不可能有两个互异的重根（否则重数之和将超过 \(3\)）；故 \(-\frac{1}{2}\) 是唯一的重根，且恰为二重根。
    {: .zh }

    On écrit alors

    于是写成
    {: .zh }

    \[
    P=(2X+1)^2(aX+b).
    \]

    Le coefficient dominant de \(P\) vaut \(4\), donc \(4a=4\) et \(a=1\). En développant :

    \(P\) 的首项系数为 \(4\)，故 \(4a=4\)，\(a=1\)。展开：
    {: .zh }

    \[
    (2X+1)^2(X+b)=(4X^2+4X+1)(X+b)
    =4X^3+(4b+4)X^2+(4b+1)X+b.
    \]

    En identifiant avec \(P=4X^3-16X^2-19X-5\), on obtient \(4b+4=-16\), \(4b+1=-19\) et \(b=-5\) : les trois conditions sont compatibles. Finalement

    与 \(P=4X^3-16X^2-19X-5\) 比较系数，得 \(4b+4=-16\)、\(4b+1=-19\) 与 \(b=-5\)：三个条件彼此相容。最终
    {: .zh }

    \[
    \boxed{P=(2X+1)^2(X-5)=4\Bigl(X+\frac{1}{2}\Bigr)^2(X-5).}
    \]

    Vérification : \((4X^2+4X+1)(X-5)=4X^3-20X^2+4X^2-20X+X-5=4X^3-16X^2-19X-5\).

    验证：\((4X^2+4X+1)(X-5)=4X^3-20X^2+4X^2-20X+X-5=4X^3-16X^2-19X-5\)。
    {: .zh }

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">somme et produit de racines　根的和与积</p>

Soit \(Q\in\mathbb{C}_2[X]\) un polynôme unitaire de degré \(2\). On note \(\alpha_1\) et \(\alpha_2\) ses racines, éventuellement confondues.
{: .fr-exo }

设 \(Q\in\mathbb{C}_2[X]\) 是二次首一多项式。记其根为 \(\alpha_1\) 与 \(\alpha_2\)，二者可能重合。
{: .zh }

1. Soit \(S=\alpha_1+\alpha_2\) et \(P=\alpha_1\alpha_2\). Montrer qu'alors \(Q=X^2-SX+P\).
    {: .fr-exo }

    令 \(S=\alpha_1+\alpha_2\)，\(P=\alpha_1\alpha_2\)。证明此时 \(Q=X^2-SX+P\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(Q\) est unitaire de degré \(2\) et que ses racines dans \(\mathbb{C}\) sont \(\alpha_1\) et \(\alpha_2\), il se factorise sous la forme

        <strong>解答。</strong>由于 \(Q\) 是二次首一多项式，且其在 \(\mathbb{C}\) 中的根为 \(\alpha_1\) 与 \(\alpha_2\)，故可分解为
        {: .zh }

        \[
        Q=(X-\alpha_1)(X-\alpha_2).
        \]

        En développant,

        展开得
        {: .zh }

        \[
        Q=X^2-\alpha_1X-\alpha_2X+\alpha_1\alpha_2
        =X^2-(\alpha_1+\alpha_2)X+\alpha_1\alpha_2
        =X^2-SX+P.
        \]

        Ceci reste vrai lorsque \(\alpha_1=\alpha_2\) : la factorisation \((X-\alpha_1)^2\) est alors celle d'un carré parfait.

        当 \(\alpha_1=\alpha_2\) 时结论依然成立：此时 \((X-\alpha_1)^2\) 是完全平方的分解。
        {: .zh }

        \[
        \boxed{Q=X^2-SX+P.}
        \]

2. Soit \(S,P\in\mathbb{R}\) tels que \(S^2\geqslant 4P\). Trouver \(x,y\in\mathbb{R}\) tels que \(x+y=S\) et \(xy=P\).
    {: .fr-exo }

    设 \(S,P\in\mathbb{R}\) 满足 \(S^2\geqslant 4P\)。求 \(x,y\in\mathbb{R}\)，使得 \(x+y=S\) 且 \(xy=P\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Considérons l'équation du second degré

        <strong>解答。</strong>考虑二次方程
        {: .zh }

        \[
        t^2-St+P=0.
        \]

        Son discriminant est

        其判别式为
        {: .zh }

        \[
        \Delta=S^2-4P\geqslant 0.
        \]

        Elle admet donc deux racines réelles, éventuellement confondues :

        因此它有两个实根，可能相等：
        {: .zh }

        \[
        x=\frac{S+\sqrt{\Delta}}{2},\qquad y=\frac{S-\sqrt{\Delta}}{2}.
        \]

        D'après les relations entre coefficients et racines,

        根据根与系数的关系，
        {: .zh }

        \[
        x+y=S,\qquad
        xy=\frac{(S+\sqrt{\Delta})(S-\sqrt{\Delta})}{4}
        =\frac{S^2-\Delta}{4}
        =\frac{S^2-(S^2-4P)}{4}=P.
        \]

        Le couple \((x,y)\) convient donc. Réciproquement, si \(x+y=S\) et \(xy=P\), alors \(x\) et \(y\) sont exactement les deux racines de \(t^2-St+P=0\) : le couple trouvé est le seul possible (à l'échange de \(x\) et \(y\) près).

        因此有序对 \((x,y)\) 满足要求。反之，若 \(x+y=S\) 且 \(xy=P\)，则 \(x\) 与 \(y\) 恰为 \(t^2-St+P=0\) 的两个根：所得之对（在交换 \(x,y\) 的意义下）是唯一的。
        {: .zh }

        \[
        \boxed{x=\frac{S+\sqrt{S^2-4P}}{2},\qquad
                y=\frac{S-\sqrt{S^2-4P}}{2}.}
        \]

        Si \(S^2=4P\), les deux racines sont égales : \(x=y=\frac{S}{2}\).

        若 \(S^2=4P\)，两根相等：\(x=y=\frac{S}{2}\)。
        {: .zh }

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">coefficients et racines　系数与根</p>

1. Soit \(Q\in\mathbb{C}_3[X]\) un polynôme unitaire de degré \(3\). On note \(\alpha_1\), \(\alpha_2\) et \(\alpha_3\) ses racines, éventuellement confondues. Soit \(S=\alpha_1+\alpha_2+\alpha_3\) et \(P=\alpha_1\alpha_2\alpha_3\). Montrer qu'alors
    {: .fr-exo }

    \[
    \color{#0069D2}Q=X^3-SX^2+c_1X-P
    \]

    où \(c_1\in\mathbb{C}\) est un coefficient que l'on exprimera en fonction de \(\alpha_1\), \(\alpha_2\) et \(\alpha_3\).

    设 \(Q\in\mathbb{C}_3[X]\) 是三次首一多项式。记其根为 \(\alpha_1,\alpha_2,\alpha_3\)，可能重合。令 \(S=\alpha_1+\alpha_2+\alpha_3\)，\(P=\alpha_1\alpha_2\alpha_3\)。证明此时其中 \(c_1\in\mathbb{C}\) 是一个需要用 \(\alpha_1,\alpha_2,\alpha_3\) 表示的系数。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Puisque \(Q\) est unitaire de degré \(3\) et que ses racines dans \(\mathbb{C}\) sont \(\alpha_1,\alpha_2,\alpha_3\),

        <strong>解答。</strong>由于 \(Q\) 是三次首一多项式，且其在 \(\mathbb{C}\) 中的根为 \(\alpha_1,\alpha_2,\alpha_3\)，
        {: .zh }

        \[
        Q=(X-\alpha_1)(X-\alpha_2)(X-\alpha_3).
        \]

        On développe d'abord le produit des deux premiers facteurs :

        先展开前两个因子的乘积：
        {: .zh }

        \[
        (X-\alpha_1)(X-\alpha_2)=X^2-(\alpha_1+\alpha_2)X+\alpha_1\alpha_2.
        \]

        Puis on multiplie par le troisième :

        再乘以第三个因子：
        {: .zh }

        \[
        \begin{aligned}
        Q&=\bigl(X^2-(\alpha_1+\alpha_2)X+\alpha_1\alpha_2\bigr)(X-\alpha_3)\\
        &=X^3-(\alpha_1+\alpha_2)X^2+\alpha_1\alpha_2X
          -\alpha_3X^2+\alpha_3(\alpha_1+\alpha_2)X-\alpha_1\alpha_2\alpha_3\\
        &=X^3-(\alpha_1+\alpha_2+\alpha_3)X^2
          +(\alpha_1\alpha_2+\alpha_1\alpha_3+\alpha_2\alpha_3)X
          -\alpha_1\alpha_2\alpha_3.
        \end{aligned}
        \]

        En posant

        令
        {: .zh }

        \[
        c_1=\alpha_1\alpha_2+\alpha_1\alpha_3+\alpha_2\alpha_3,
        \]

        on obtient bien

        即得
        {: .zh }

        \[
        \boxed{Q=X^3-SX^2+c_1X-P,\qquad
        c_1=\alpha_1\alpha_2+\alpha_1\alpha_3+\alpha_2\alpha_3.}
        \]

2. Applications.
    {: .fr-exo }

    应用。
    {: .zh }

    **(a)** Factoriser le polynôme \(8X^3-12X^2-2X+3\) sachant que ses racines sont en progression arithmétique.
    {: .fr-exo }

    已知多项式 \(8X^3-12X^2-2X+3\) 的根构成<strong>等差数列</strong>（progression arithmétique），将其因式分解。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Notons \(\alpha-d\), \(\alpha\), \(\alpha+d\) les trois racines, rangées en progression arithmétique de raison \(d\). Comme \(8X^3-12X^2-2X+3\) est de degré \(3\) et de coefficient dominant \(8\), on peut écrire

        <strong>解答。</strong>记三个根为 \(\alpha-d\)、\(\alpha\)、\(\alpha+d\)，它们构成公差为 \(d\) 的等差数列。由于 \(8X^3-12X^2-2X+3\) 是三次多项式且首项系数为 \(8\)，可写成
        {: .zh }

        \[
        8X^3-12X^2-2X+3=8(X-\alpha+d)(X-\alpha)(X-\alpha-d).
        \]

        En divisant par \(8\), on obtient un polynôme unitaire :

        除以 \(8\)，得到首一多项式：
        {: .zh }

        \[
        X^3-\frac{3}{2}X^2-\frac{1}{4}X+\frac{3}{8}=(X-\alpha+d)(X-\alpha)(X-\alpha-d).
        \]

        D'après la question 1, la somme des racines vaut \(\frac{3}{2}\) et leur somme deux à deux vaut \(-\frac{1}{4}\) :

        由第 1 问，根之和为 \(\frac{3}{2}\)，两两乘积之和为 \(-\frac{1}{4}\)：
        {: .zh }

        \[
        (\alpha-d)+\alpha+(\alpha+d)=3\alpha=\frac{3}{2},
        \]

        \[
        (\alpha-d)\alpha+(\alpha-d)(\alpha+d)+\alpha(\alpha+d)=3\alpha^2-d^2=-\frac{1}{4}.
        \]

        La première relation donne \(\alpha=\frac{1}{2}\). En reportant dans la seconde :

        第一式给出 \(\alpha=\frac{1}{2}\)。代入第二式：
        {: .zh }

        \[
        3\cdot\frac{1}{4}-d^2=-\frac{1}{4}
        \quad\Longrightarrow\quad
        d^2=1
        \quad\Longrightarrow\quad
        d=\pm 1.
        \]

        Le signe de \(d\) ne fait qu'échanger les deux racines extrêmes ; on peut donc prendre \(d=1\). Les racines sont

        \(d\) 的符号只会交换两个外侧根；不妨取 \(d=1\)。三个根为
        {: .zh }

        \[
        -\frac{1}{2},\qquad \frac{1}{2},\qquad \frac{3}{2}.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{\begin{aligned}
        8X^3-12X^2-2X+3
        &=8\Bigl(X+\frac{1}{2}\Bigr)\Bigl(X-\frac{1}{2}\Bigr)\Bigl(X-\frac{3}{2}\Bigr)\\
        &=(2X+1)(2X-1)(2X-3).
        \end{aligned}}
        \]

        Vérification : le produit des racines vaut \(\bigl(-\frac{1}{2}\bigr)\bigl(\frac{1}{2}\bigr)\bigl(\frac{3}{2}\bigr)=-\frac{3}{8}\), ce qui correspond bien à l'opposé du coefficient constant \(\frac{3}{8}\).

        验证：根之积为 \(\bigl(-\frac{1}{2}\bigr)\bigl(\frac{1}{2}\bigr)\bigl(\frac{3}{2}\bigr)=-\frac{3}{8}\)，恰为常数项 \(\frac{3}{8}\) 的相反数。
        {: .zh }

    **(b)** Soit \(Q=2X^3-X^2-7X+\lambda\). Déterminer \(\lambda\in\mathbb{R}\) pour que la somme de deux des racines du polynôme \(Q\) soit égale à \(1\).
    {: .fr-exo }

    设 \(Q=2X^3-X^2-7X+\lambda\)。求 \(\lambda\in\mathbb{R}\)，使得 \(Q\) 的某两个根之和等于 \(1\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Notons \(\alpha,\beta,\gamma\) les trois racines de \(Q\) dans \(\mathbb{C}\), et supposons \(\alpha+\beta=1\). D'après la question 1 appliquée au polynôme unitaire \(Q/2=X^3-\frac{1}{2}X^2-\frac{7}{2}X+\frac{\lambda}{2}\),

        <strong>解答。</strong>记 \(Q\) 在 \(\mathbb{C}\) 中的三个根为 \(\alpha,\beta,\gamma\)，并设 \(\alpha+\beta=1\)。对首一多项式 \(Q/2=X^3-\frac{1}{2}X^2-\frac{7}{2}X+\frac{\lambda}{2}\) 应用第 1 问，
        {: .zh }

        \[
        \alpha+\beta+\gamma=\frac{1}{2}.
        \]

        Comme \(\alpha+\beta=1\), on en déduit

        由 \(\alpha+\beta=1\) 推得
        {: .zh }

        \[
        \gamma=\frac{1}{2}-1=-\frac{1}{2}.
        \]

        Ainsi \(-\frac{1}{2}\) doit être racine de \(Q\) :

        因此 \(-\frac{1}{2}\) 必须是 \(Q\) 的根：
        {: .zh }

        \[
        Q\Bigl(-\frac{1}{2}\Bigr)
        =2\Bigl(-\frac{1}{8}\Bigr)-\Bigl(\frac{1}{4}\Bigr)-7\Bigl(-\frac{1}{2}\Bigr)+\lambda
        =-\frac{1}{4}-\frac{1}{4}+\frac{7}{2}+\lambda=3+\lambda.
        \]

        La condition \(Q\bigl(-\frac{1}{2}\bigr)=0\) impose donc

        条件 \(Q\bigl(-\frac{1}{2}\bigr)=0\) 因此要求
        {: .zh }

        \[
        \boxed{\lambda=-3.}
        \]

        Réciproquement, pour \(\lambda=-3\),

        反之，当 \(\lambda=-3\) 时，
        {: .zh }

        \[
        2X^3-X^2-7X-3=(2X+1)(X^2-X-3).
        \]

        Les deux racines de \(X^2-X-3\), à savoir \(\frac{1\pm\sqrt{13}}{2}\), ont pour somme \(1\) : la condition est bien réalisée. La valeur \(\lambda=-3\) est donc l'unique solution.

        \(X^2-X-3\) 的两个根，即 \(\frac{1\pm\sqrt{13}}{2}\)，之和为 \(1\)：条件确实满足。因此 \(\lambda=-3\) 是唯一解。
        {: .zh }

    **(c)** Déterminer \(\lambda\in\mathbb{R}\) pour que l'une des racines du polynôme \(X^3-7X+\lambda\) soit le double d'une autre.
    {: .fr-exo }

    求 \(\lambda\in\mathbb{R}\)，使得多项式 \(X^3-7X+\lambda\) 的某个根是另一个根的两倍。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Notons \(\alpha,2\alpha,\beta\) les trois racines (dans \(\mathbb{C}\)) du polynôme \(X^3-7X+\lambda\). D'après la question 1,

        <strong>解答。</strong>记多项式 \(X^3-7X+\lambda\) 在 \(\mathbb{C}\) 中的三个根为 \(\alpha,2\alpha,\beta\)。由第 1 问，
        {: .zh }

        \[
        \alpha+2\alpha+\beta=0,\qquad
        \alpha\cdot 2\alpha+\alpha\beta+2\alpha\beta=-7,\qquad
        \alpha\cdot 2\alpha\cdot\beta=-\lambda.
        \]

        La première relation donne \(\beta=-3\alpha\). En reportant dans la deuxième :

        第一式给出 \(\beta=-3\alpha\)。代入第二式：
        {: .zh }

        \[
        2\alpha^2+3\alpha\beta=2\alpha^2-9\alpha^2=-7\alpha^2=-7,
        \]

        d'où \(\alpha^2=1\), c'est-à-dire \(\alpha=\pm 1\). La troisième relation donne alors

        故 \(\alpha^2=1\)，即 \(\alpha=\pm 1\)。第三式于是给出
        {: .zh }

        \[
        -\lambda=2\alpha^2\beta=2\alpha^2(-3\alpha)=-6\alpha^3
        \quad\Longrightarrow\quad
        \lambda=6\alpha^3.
        \]

        Si \(\alpha=1\), alors \(\beta=-3\) et \(\lambda=6\) : les racines sont \(1,2,-3\).

        若 \(\alpha=1\)，则 \(\beta=-3\)，\(\lambda=6\)：三个根为 \(1,2,-3\)。
        {: .zh }

        Si \(\alpha=-1\), alors \(\beta=3\) et \(\lambda=-6\) : les racines sont \(-1,-2,3\).

        若 \(\alpha=-1\)，则 \(\beta=3\)，\(\lambda=-6\)：三个根为 \(-1,-2,3\)。
        {: .zh }

        Réciproquement, on vérifie que

        反之，可以验证
        {: .zh }

        \[
        X^3-7X+6=(X-1)(X-2)(X+3),
        \qquad
        X^3-7X-6=(X+1)(X+2)(X-3).
        \]

        Dans les deux cas, une racine est bien le double d'une autre. Finalement

        两种情形下，确实有一个根是另一个根的两倍。最终
        {: .zh }

        \[
        \boxed{\lambda\in\{-6,\,6\}.}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>racine</strong>：根
    - <strong>racine multiple / racine simple</strong>：重根 / 单根
    - <strong>multiplicité</strong>：重数
    - <strong>factoriser</strong>：因式分解
    - <strong>identité remarquable</strong>：常用恒等式
    - <strong>polynôme unitaire</strong>：首一多项式
    - <strong>coefficient dominant</strong>：首项系数
    - <strong>discriminant</strong>：判别式
    - <strong>polynômes interpolateurs de Lagrange</strong>：拉格朗日插值多项式
    - <strong>racines éventuellement confondues</strong>：可能重合的根
    - <strong>somme et produit des racines</strong>：根的和与积
    - <strong>progression arithmétique</strong>：等差数列
    - <strong>premiers entre eux</strong>：互素
    - <strong>critère de multiplicité</strong>：重数判别法
    - <strong>irréductible</strong>：不可约的
    - <strong>en identifiant</strong>：通过比较系数
    - <strong>on en déduit</strong>：由此推出

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">factoriser avec tan　用 tan 因式分解</p>

On cherche les racines du polynôme \(7-35X+21X^2-X^3\).
{: .fr-exo }

我们寻找多项式 \(7-35X+21X^2-X^3\) 的根。
{: .zh }

1. Soit \(\theta\in\mathbb{R}\). Développer \((\cos\theta+i\sin\theta)^7\).
    {: .fr-exo }

    设 \(\theta\in\mathbb{R}\)。展开 \((\cos\theta+i\sin\theta)^7\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> D'après la formule du binôme de Newton,

        <strong>解答。</strong>根据牛顿二项式公式，
        {: .zh }

        \[
        (\cos\theta+i\sin\theta)^7
        =\sum_{k=0}^{7}\binom{7}{k}\cos^{7-k}\theta\,(i\sin\theta)^k.
        \]

        En détaillant les termes et en utilisant \(i^2=-1\), \(i^3=-i\), \(i^4=1\) :

        逐项展开并利用 \(i^2=-1\)、\(i^3=-i\)、\(i^4=1\)：
        {: .zh }

        \[
        \begin{aligned}
        (\cos\theta+i\sin\theta)^7
        ={}&\cos^7\theta+7i\cos^6\theta\sin\theta
        -21\cos^5\theta\sin^2\theta-35i\cos^4\theta\sin^3\theta\\
        &+35\cos^3\theta\sin^4\theta+21i\cos^2\theta\sin^5\theta
        -7\cos\theta\sin^6\theta-i\sin^7\theta.
        \end{aligned}
        \]

        En séparant parties réelle et imaginaire :

        分离实部与虚部：
        {: .zh }

        \[
        \begin{aligned}
        (\cos\theta+i\sin\theta)^7
        ={}&\bigl(\cos^7\theta-21\cos^5\theta\sin^2\theta
        +35\cos^3\theta\sin^4\theta-7\cos\theta\sin^6\theta\bigr)\\
        &+i\bigl(7\cos^6\theta\sin\theta-35\cos^4\theta\sin^3\theta
        +21\cos^2\theta\sin^5\theta-\sin^7\theta\bigr).
        \end{aligned}
        \]

        Par la formule de De Moivre, on a aussi \((\cos\theta+i\sin\theta)^7=\cos 7\theta+i\sin 7\theta\). En identifiant,

        由棣莫弗公式（formule de De Moivre），又有 \((\cos\theta+i\sin\theta)^7=\cos 7\theta+i\sin 7\theta\)。比较两边，
        {: .zh }

        \[
        \cos 7\theta=\cos^7\theta-21\cos^5\theta\sin^2\theta
        +35\cos^3\theta\sin^4\theta-7\cos\theta\sin^6\theta,
        \]

        \[
        \sin 7\theta=7\cos^6\theta\sin\theta-35\cos^4\theta\sin^3\theta
        +21\cos^2\theta\sin^5\theta-\sin^7\theta.
        \]

2. Donner le domaine de définition de la fonction \(f:\theta\mapsto\tan(7\theta)\) puis l'exprimer en fonction de \(\tan\theta\).
    {: .fr-exo }

    给出函数 \(f:\theta\mapsto\tan(7\theta)\) 的定义域，然后用 \(\tan\theta\) 表示它。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> La fonction \(f:\theta\mapsto\tan(7\theta)\) est définie lorsque \(\cos(7\theta)\neq 0\), c'est-à-dire

        <strong>解答。</strong>函数 \(f:\theta\mapsto\tan(7\theta)\) 的定义域为 \(\cos(7\theta)\neq 0\)，即
        {: .zh }

        \[
        7\theta\neq\frac{\pi}{2}+k\pi,\quad k\in\mathbb{Z}
        \quad\Longleftrightarrow\quad
        \theta\neq\frac{\pi}{14}+\frac{k\pi}{7},\quad k\in\mathbb{Z}.
        \]

        Son domaine de définition est donc

        其定义域因此为
        {: .zh }

        \[
        \boxed{\mathcal{D}_f=\mathbb{R}\setminus\Bigl\{\frac{\pi}{14}+\frac{k\pi}{7},\ k\in\mathbb{Z}\Bigr\}.}
        \]

        Pour \(\theta\in\mathcal{D}_f\), on a \(\cos\theta\neq 0\) (sinon \(7\theta\) serait de la forme \(\frac{\pi}{2}+m\pi\)). On peut donc poser \(t=\tan\theta\) et écrire

        对于 \(\theta\in\mathcal{D}_f\)，有 \(\cos\theta\neq 0\)（否则 \(7\theta\) 将形如 \(\frac{\pi}{2}+m\pi\)）。因此可令 \(t=\tan\theta\)，并写成
        {: .zh }

        \[
        \cos\theta+i\sin\theta=\cos\theta\,(1+it),
        \]

        d'où

        于是
        {: .zh }

        \[
        (\cos\theta+i\sin\theta)^7=\cos^7\theta\,(1+it)^7.
        \]

        Or

        而
        {: .zh }

        \[
        (1+it)^7=\bigl(1-21t^2+35t^4-7t^6\bigr)
        +i\bigl(7t-35t^3+21t^5-t^7\bigr).
        \]

        En identifiant avec \(\cos 7\theta+i\sin 7\theta\) et en divisant par \(\cos^7\theta\neq 0\),

        与 \(\cos 7\theta+i\sin 7\theta\) 比较并除以 \(\cos^7\theta\neq 0\)，
        {: .zh }

        \[
        \tan 7\theta
        =\frac{7t-35t^3+21t^5-t^7}{1-21t^2+35t^4-7t^6}.
        \]

        Plus explicitement, en fonction de \(\tan\theta\) :

        更明确地，用 \(\tan\theta\) 表示：
        {: .zh }

        \[
        \boxed{\tan(7\theta)=\frac{7\tan\theta-35\tan^3\theta+21\tan^5\theta-\tan^7\theta}
        {1-21\tan^2\theta+35\tan^4\theta-7\tan^6\theta}.}
        \]

3. En déduire les racines de \(7-35X+21X^2-X^3\).
    {: .fr-exo }

    由此推出 \(7-35X+21X^2-X^3\) 的根。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Posons \(P(X)=7-35X+21X^2-X^3\). Pour \(\theta\in\mathcal{D}_f\) et \(t=\tan\theta\), la question précédente donne

        <strong>解答。</strong>令 \(P(X)=7-35X+21X^2-X^3\)。对 \(\theta\in\mathcal{D}_f\) 及 \(t=\tan\theta\)，上一问给出
        {: .zh }

        \[
        \tan(7\theta)=0
        \iff 7t-35t^3+21t^5-t^7=0
        \iff t\bigl(7-35t^2+21t^4-t^6\bigr)=0.
        \]

        Or \(\tan(7\theta)=0\) si et seulement si \(7\theta=k\pi\), c'est-à-dire \(\theta=\frac{k\pi}{7}\), \(k\in\mathbb{Z}\). Tous ces angles appartiennent à \(\mathcal{D}_f\), car \(\frac{k\pi}{7}\neq\frac{\pi}{14}+\frac{m\pi}{7}\) équivaut à \(2k\neq 1+2m\), toujours vrai.

        而 \(\tan(7\theta)=0\) 当且仅当 \(7\theta=k\pi\)，即 \(\theta=\frac{k\pi}{7}\)，\(k\in\mathbb{Z}\)。这些角都属于 \(\mathcal{D}_f\)，因为 \(\frac{k\pi}{7}\neq\frac{\pi}{14}+\frac{m\pi}{7}\) 等价于 \(2k\neq 1+2m\)，这恒成立。
        {: .zh }

        Pour \(k\equiv 0\pmod 7\), on a \(t=0\), mais \(P(0)=7\neq 0\) : la valeur \(X=0\) n'est pas racine. Pour \(k=1,\dots,6\), on a \(t\neq 0\) et \(X=t^2=\tan^2\bigl(\frac{k\pi}{7}\bigr)\) vérifie \(P(X)=0\).

        当 \(k\equiv 0\pmod 7\) 时 \(t=0\)，但 \(P(0)=7\neq 0\)：\(X=0\) 不是根。当 \(k=1,\dots,6\) 时 \(t\neq 0\)，且 \(X=t^2=\tan^2\bigl(\frac{k\pi}{7}\bigr)\) 满足 \(P(X)=0\)。
        {: .zh }

        Or \(\tan^2\bigl(\frac{(7-k)\pi}{7}\bigr)=\tan^2\bigl(\pi-\frac{k\pi}{7}\bigr)=\tan^2\bigl(\frac{k\pi}{7}\bigr)\) : les valeurs pour \(k\) et \(7-k\) coïncident. Les racines distinctes obtenues sont donc

        而 \(\tan^2\bigl(\frac{(7-k)\pi}{7}\bigr)=\tan^2\bigl(\pi-\frac{k\pi}{7}\bigr)=\tan^2\bigl(\frac{k\pi}{7}\bigr)\)：\(k\) 与 \(7-k\) 给出的值相同。因此得到的不同根为
        {: .zh }

        \[
        \tan^2\frac{\pi}{7},\qquad \tan^2\frac{2\pi}{7},\qquad \tan^2\frac{3\pi}{7}.
        \]

        Ces trois nombres sont distincts, car \(0<\frac{\pi}{7}<\frac{2\pi}{7}<\frac{3\pi}{7}<\frac{\pi}{2}\) et \(\tan\) est strictement croissante sur \(\bigl[0,\frac{\pi}{2}\bigr[\).

        这三个数互不相同，因为 \(0<\frac{\pi}{7}<\frac{2\pi}{7}<\frac{3\pi}{7}<\frac{\pi}{2}\)，且 \(\tan\) 在 \(\bigl[0,\frac{\pi}{2}\bigr[\) 上严格递增。
        {: .zh }

        Comme \(P\) est de degré \(3\), il admet au plus trois racines dans \(\mathbb{C}\) : ce sont donc exactement celles-ci. Finalement

        由于 \(P\) 是三次多项式，在 \(\mathbb{C}\) 中至多有三个根：因此恰好就是这三个。最终
        {: .zh }

        \[
        \boxed{\text{Les racines de }7-35X+21X^2-X^3\text{ sont }
        \tan^2\frac{\pi}{7},\ \tan^2\frac{2\pi}{7},\ \tan^2\frac{3\pi}{7}.}
        \]

        Autrement dit,

        换言之，
        {: .zh }

        \[
        7-35X+21X^2-X^3
        =-\Bigl(X-\tan^2\frac{\pi}{7}\Bigr)
         \Bigl(X-\tan^2\frac{2\pi}{7}\Bigr)
         \Bigl(X-\tan^2\frac{3\pi}{7}\Bigr).
        \]

        <em>Remarque.</em> En identifiant les coefficients, on obtient les identités

        <strong>注。</strong>比较系数可得恒等式
        {: .zh }

        \[
        \tan^2\frac{\pi}{7}+\tan^2\frac{2\pi}{7}+\tan^2\frac{3\pi}{7}=21,
        \]

        \[
        \tan^2\frac{\pi}{7}\tan^2\frac{2\pi}{7}
        +\tan^2\frac{\pi}{7}\tan^2\frac{3\pi}{7}
        +\tan^2\frac{2\pi}{7}\tan^2\frac{3\pi}{7}=35,
        \]

        \[
        \tan^2\frac{\pi}{7}\tan^2\frac{2\pi}{7}\tan^2\frac{3\pi}{7}=7.
        \]

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">racines simples　单根</p>

1. Soit \(n\in\mathbb{N}^*\). On considère le polynôme
    {: .fr-exo }

    \[
    \color{#0069D2}P_n=1+\frac{1}{1!}X+\frac{1}{2!}X^2+\cdots+\frac{1}{n!}X^n
    \]

    Montrer que \(P_n\) n'a que des racines simples dans \(\mathbb{C}\).

    设 \(n\in\mathbb{N}^*\)。考虑上述多项式。证明 \(P_n\) 在 \(\mathbb{C}\) 中只有<strong>单根</strong>（racine simple）。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Raisonnons par l'absurde : supposons que \(a\in\mathbb{C}\) soit une racine multiple de \(P_n\). Alors

        <strong>解答。</strong>用反证法：假设 \(a\in\mathbb{C}\) 是 \(P_n\) 的重根。则
        {: .zh }

        \[
        P_n(a)=0\qquad\text{et}\qquad P_n'(a)=0.
        \]

        Calculons la dérivée de \(P_n\) :

        计算 \(P_n\) 的导数：
        {: .zh }

        \[
        P_n'(X)=\sum_{k=1}^{n}\frac{k\,X^{k-1}}{k!}
        =\sum_{k=1}^{n}\frac{X^{k-1}}{(k-1)!}
        =\sum_{j=0}^{n-1}\frac{X^j}{j!}=P_{n-1}(X).
        \]

        De plus,

        此外，
        {: .zh }

        \[
        P_n(X)=P_{n-1}(X)+\frac{X^n}{n!}.
        \]

        En évaluant en \(a\) et en utilisant \(P_n'(a)=P_{n-1}(a)=0\), il vient

        在 \(a\) 处取值并利用 \(P_n'(a)=P_{n-1}(a)=0\)，得到
        {: .zh }

        \[
        0=P_n(a)=P_{n-1}(a)+\frac{a^n}{n!}=\frac{a^n}{n!},
        \]

        d'où \(a^n=0\), donc \(a=0\). Mais \(P_n(0)=1\neq 0\), ce qui contredit \(P_n(a)=0\).

        故 \(a^n=0\)，从而 \(a=0\)。但 \(P_n(0)=1\neq 0\)，这与 \(P_n(a)=0\) 矛盾。
        {: .zh }

        L'hypothèse est donc absurde : \(P_n\) n'admet aucune racine multiple. Toutes ses racines dans \(\mathbb{C}\) sont simples ; comme \(\deg P_n=n\), il en possède exactement \(n\), distinctes.

        因此假设不成立：\(P_n\) 没有重根。它在 \(\mathbb{C}\) 中的所有根都是单根；由于 \(\deg P_n=n\)，它恰有 \(n\) 个互不相同的根。
        {: .zh }

        \[
        \boxed{\text{Les racines de }P_n\text{ sont toutes simples.}}
        \]

2. Soit \(n\) un entier supérieur ou égal à \(2\). Montrer que le polynôme \(P_n=X^n-X+1\) n'a que des racines simples dans \(\mathbb{C}\).
    {: .fr-exo }

    设整数 \(n\geqslant 2\)。证明多项式 \(P_n=X^n-X+1\) 在 \(\mathbb{C}\) 中只有单根。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Raisonnons encore par l'absurde : soit \(a\in\mathbb{C}\) une racine multiple de \(P_n=X^n-X+1\). Alors

        <strong>解答。</strong>仍用反证法：设 \(a\in\mathbb{C}\) 是 \(P_n=X^n-X+1\) 的重根。则
        {: .zh }

        \[
        P_n(a)=0\qquad\text{et}\qquad P_n'(a)=na^{n-1}-1=0.
        \]

        Formons la combinaison \(nP_n(X)-XP_n'(X)\) qui élimine le terme \(X^n\) :

        构造消去 \(X^n\) 项的线性组合 \(nP_n(X)-XP_n'(X)\)：
        {: .zh }

        \[
        \begin{aligned}
        nP_n(X)-XP_n'(X)
        &=n(X^n-X+1)-X(nX^{n-1}-1)\\
        &=nX^n-nX+n-nX^n+X\\
        &=-(n-1)X+n.
        \end{aligned}
        \]

        En évaluant en \(a\), où \(P_n(a)=P_n'(a)=0\), on obtient

        在 \(a\) 处取值（此处 \(P_n(a)=P_n'(a)=0\)），得到
        {: .zh }

        \[
        -(n-1)a+n=0
        \quad\Longrightarrow\quad
        a=\frac{n}{n-1}.
        \]

        Comme \(n\geqslant 2\), on a \(a=\frac{n}{n-1}>1\), donc \(a^{n-1}>1\). Or la condition \(P_n'(a)=0\) s'écrit \(a^{n-1}=\frac{1}{n}\leqslant\frac{1}{2}<1\). C'est contradictoire.

        由于 \(n\geqslant 2\)，有 \(a=\frac{n}{n-1}>1\)，故 \(a^{n-1}>1\)。而条件 \(P_n'(a)=0\) 即 \(a^{n-1}=\frac{1}{n}\leqslant\frac{1}{2}<1\)。矛盾。
        {: .zh }

        Ainsi \(P_n\) n'admet aucune racine multiple : toutes ses racines dans \(\mathbb{C}\) sont simples.

        因此 \(P_n\) 没有重根：它在 \(\mathbb{C}\) 中的所有根都是单根。
        {: .zh }

        \[
        \boxed{\text{Les racines de }X^n-X+1\text{ sont toutes simples.}}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>développer</strong>：展开
    - <strong>partie réelle / partie imaginaire</strong>：实部 / 虚部
    - <strong>formule de De Moivre</strong>：棣莫弗公式
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>domaine de définition</strong>：定义域
    - <strong>racine simple</strong>：单根
    - <strong>raisonner par l'absurde</strong>：用反证法推理
    - <strong>par l'absurde</strong>：反证法
    - <strong>contredire / contradiction</strong>：与……矛盾 / 矛盾
    - <strong>on en déduit</strong>：由此推出
    - <strong>réciproquement</strong>：反之
    - <strong>éventuellement</strong>：可能（法语中不表示“最终”）
    - <strong>soit</strong>：设
    - <strong>vérifier</strong>：验证
    - <strong>on conclut</strong>：得出结论
