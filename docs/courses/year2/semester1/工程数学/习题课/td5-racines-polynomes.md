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

## Exercices à préparer <span class="heading-zh">预备习题</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">multiplicité des racines　根的重数</p>

Soit \(P=X^4+2X^2+1\). Déterminer les multiplicités des racines \(i\) et \(-i\) de \(P\) de deux manières différentes :
{: .fr-exo }

设 \(P=X^4+2X^2+1\)。用两种不同的方法确定 \(P\) 的根 \(i\) 与 \(-i\) 的<strong>重数</strong>（multiplicité）。
{: .zh }

1. en factorisant \(P\),
    {: .fr-exo }

    通过对 \(P\) 进行因式分解，
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On reconnaît un carré parfait :

        <strong>解答。</strong>我们辨认出一个完全平方：
        {: .zh }

        \[
        P(X)=X^4+2X^2+1=(X^2+1)^2.
        \]

        Or

        而
        {: .zh }

        \[
        X^2+1=(X-i)(X+i).
        \]

        Donc

        因此
        {: .zh }

        \[
        P(X)=(X-i)^2(X+i)^2.
        \]

        Ainsi \(i\) et \(-i\) sont racines de multiplicité 2.

        于是 \(i\) 与 \(-i\) 是重数为 2 的根。
        {: .zh }

2. en calculant sa dérivée.
    {: .fr-exo }

    通过计算它的导数。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On a

        <strong>解答。</strong>有
        {: .zh }

        \[
        P'(X)=4X^3+4X=4X(X^2+1).
        \]

        Donc

        因此
        {: .zh }

        \[
        P'(i)=0,\qquad P'(-i)=0.
        \]

        Comme \(i\) et \(-i\) sont racines au moins doubles de \(P\) et que \(\deg(P)=4\), la somme de leurs multiplicités vaut au moins 4. Elle est donc exactement égale à 4. Donc \(i\) et \(-i\) sont racines exactement doubles, c'est-à-dire de multiplicité 2.

        由于 \(i\) 与 \(-i\) 是 \(P\) 的至少二重根，且 \(\deg(P)=4\)，它们的重数之和至少为 4。因此该和恰好等于 4。所以 \(i\) 与 \(-i\) 恰好是二重根，即重数为 2。
        {: .zh }

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">interpolation de Lagrange　拉格朗日插值</p>

Déterminer le polynôme \(P\in\mathbb{R}_3[X]\) tel que \(P(0)=0\), \(P(1)=0\), \(P(2)=4\) et \(P(3)=18\) de deux manières différentes :
{: .fr-exo }

用两种不同的方法确定满足 \(P(0)=0\)、\(P(1)=0\)、\(P(2)=4\) 与 \(P(3)=18\) 的多项式 \(P\in\mathbb{R}_3[X]\)：
{: .zh }

1. directement en posant \(P=X(X-1)(aX+b)\) avec \(a,b\in\mathbb{R}\),
    {: .fr-exo }

    直接设 \(P=X(X-1)(aX+b)\)，其中 \(a,b\in\mathbb{R}\)，
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(P(0)=P(1)=0\), on peut écrire

        <strong>解答。</strong>由于 \(P(0)=P(1)=0\)，可以写成
        {: .zh }

        \[
        P(X)=X(X-1)(aX+b),\qquad a,b\in\mathbb{R}.
        \]

        Les conditions \(P(2)=4\) et \(P(3)=18\) donnent

        条件 \(P(2)=4\) 与 \(P(3)=18\) 给出
        {: .zh }

        \[
        P(2)=2\cdot1\cdot(2a+b)=4,
        \]

        donc

        因此
        {: .zh }

        \[
        2a+b=2.
        \]

        De même,

        同样，
        {: .zh }

        \[
        P(3)=3\cdot2\cdot(3a+b)=18,
        \]

        donc

        因此
        {: .zh }

        \[
        3a+b=3.
        \]

        En soustrayant les deux équations, on obtient \(a=1\), puis \(b=0\). Ainsi

        将两式相减，得到 \(a=1\)，进而 \(b=0\)。于是
        {: .zh }

        \[
        \boxed{P(X)=X^2(X-1)=X^3-X^2.}
        \]

2. en passant par les polynômes interpolateurs de Lagrange \(L_2=-\frac{1}{2}X(X-1)(X-3)\) et \(L_3=\frac{1}{6}X(X-1)(X-2)\).
    {: .fr-exo }

    借助拉格朗日插值多项式 \(L_2=-\frac{1}{2}X(X-1)(X-3)\) 与 \(L_3=\frac{1}{6}X(X-1)(X-2)\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Les polynômes \(L_2\) et \(L_3\) vérifient

        <strong>解答。</strong>多项式 \(L_2\) 与 \(L_3\) 满足
        {: .zh }

        \[
        L_2(0)=L_2(1)=L_2(3)=0,\qquad L_2(2)=1,
        \]

        \[
        L_3(0)=L_3(1)=L_3(2)=0,\qquad L_3(3)=1.
        \]

        Comme \(P(2)=4\) et \(P(3)=18\), on a

        由于 \(P(2)=4\) 且 \(P(3)=18\)，有
        {: .zh }

        \[
        P=4L_2+18L_3.
        \]

        Donc

        因此
        {: .zh }

        \[
        \begin{aligned}
        P(X)&=4\left(-\frac{1}{2}X(X-1)(X-3)\right)+18\left(\frac{1}{6}X(X-1)(X-2)\right)\\
        &=-2X(X-1)(X-3)+3X(X-1)(X-2)\\
        &=X(X-1)\bigl[-2(X-3)+3(X-2)\bigr]\\
        &=X(X-1)(-2X+6+3X-6)\\
        &=X^2(X-1).
        \end{aligned}
        \]

        Ainsi,

        于是，
        {: .zh }

        \[
        \boxed{P(X)=X^3-X^2.}
        \]

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">factorisation　因式分解</p>

Factoriser dans \(\mathbb{C}[X]\) puis dans \(\mathbb{R}[X]\) le polynôme \(P=(X^2-X+1)^2+1\).
{: .fr-exo }

分别在 \(\mathbb{C}[X]\) 与 \(\mathbb{R}[X]\) 中因式分解多项式 \(P=(X^2-X+1)^2+1\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On écrit

    <strong>解答。</strong>我们写
    {: .zh }

    \[
    P=(X^2-X+1)^2+1=(X^2-X+1)^2-i^2,
    \]

    donc

    因此
    {: .zh }

    \[
    P=(X^2-X+1-i)(X^2-X+1+i).
    \]

    \(i\) est racine évidente de \(X^2-X+1+i\), d'où sa factorisation :

    \(i\) 是 \(X^2-X+1+i\) 的明显根，由此得到它的因式分解：
    {: .zh }

    \[
    X^2-X+1+i=(X-1+i)(X-i).
    \]

    En prenant le conjugué de cette relation on obtient :

    对该关系式取共轭，得到：
    {: .zh }

    \[
    X^2-X+1-i=(X-1-i)(X+i).
    \]

    Finalement, dans \(\mathbb{C}[X]\),

    最终，在 \(\mathbb{C}[X]\) 中，
    {: .zh }

    \[
    \boxed{P(X)=(X-1+i)(X-1-i)(X-i)(X+i).}
    \]

    On regroupe alors les racines conjuguées :

    然后合并共轭根：
    {: .zh }

    \[
    (X-1+i)(X-1-i)=(X-1)^2+1=X^2-2X+2,
    \]

    et

    以及
    {: .zh }

    \[
    (X-i)(X+i)=X^2+1.
    \]

    Donc la factorisation dans \(\mathbb{R}[X]\) est

    因此 \(\mathbb{R}[X]\) 中的因式分解为
    {: .zh }

    \[
    \boxed{P(X)=(X^2-2X+2)(X^2+1).}
    \]

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">racine multiple　重根</p>

Factoriser le polynôme \(P=4X^3-16X^2-19X-5\) sachant qu'il possède une racine multiple.
{: .fr-exo }

已知多项式 \(P=4X^3-16X^2-19X-5\) 有一个<strong>重根</strong>（racine multiple），对它进行因式分解。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On a

    <strong>解答。</strong>有
    {: .zh }

    \[
    P'(X)=12X^2-32X-19
    \]

    de discriminant \(\Delta'=32^2+4\cdot12\cdot19=16(64+57)=16\cdot121=44^2\).

    其判别式为 \(\Delta'=32^2+4\cdot12\cdot19=16(64+57)=16\cdot121=44^2\)。
    {: .zh }

    Donc les racines de \(P'\) sont

    因此 \(P'\) 的根为
    {: .zh }

    \[
    \frac{32\pm44}{24}=\frac{8\pm11}{6}=\frac{19}{6}\quad\text{et}\quad-\frac{1}{2}.
    \]

    On teste \(-\frac{1}{2}\) :

    测试 \(-\frac{1}{2}\)：
    {: .zh }

    \[
    P\left(-\frac{1}{2}\right)
    =4\left(-\frac{1}{8}\right)-16\left(\frac{1}{4}\right)-19\left(-\frac{1}{2}\right)-5
    =-\frac{1}{2}-4+\frac{19}{2}-5=0.
    \]

    Donc \(-\frac{1}{2}\) est racine au moins double. On factorise par \((2X+1)^2\) :

    因此 \(-\frac{1}{2}\) 是至少二重根。我们按 \((2X+1)^2\) 进行因式分解：
    {: .zh }

    \[
    P(X)=(2X+1)^2(aX+b)
    \]

    avec \(a,b\in\mathbb{R}\).

    其中 \(a,b\in\mathbb{R}\)。
    {: .zh }

    Le coefficient dominant de \(P\) vaut 4, donc \(4a=4\), d'où \(a=1\). Le coefficient constant vaut \(-5\), donc \(b=-5\). Ainsi

    \(P\) 的首项系数为 4，故 \(4a=4\)，由此 \(a=1\)。常数项为 \(-5\)，故 \(b=-5\)。于是
    {: .zh }

    \[
    \boxed{P(X)=(2X+1)^2(X-5).}
    \]

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">somme et produit de racines　根的和与积</p>

Soit \(Q\in\mathbb{C}_2[X]\) un polynôme unitaire de degré 2. On note \(\alpha_1\) et \(\alpha_2\) ses racines, éventuellement confondues.
{: .fr-exo }

设 \(Q\in\mathbb{C}_2[X]\) 是一个首一的二次多项式。记 \(\alpha_1\) 与 \(\alpha_2\) 为其根（可以相同）。
{: .zh }

1. Soit \(S=\alpha_1+\alpha_2\) et \(P=\alpha_1\alpha_2\). Montrer qu'alors \(Q=X^2-SX+P\).
    {: .fr-exo }

    设 \(S=\alpha_1+\alpha_2\)，\(P=\alpha_1\alpha_2\)。证明此时 \(Q=X^2-SX+P\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(Q\) est unitaire de degré 2 et a pour racines \(\alpha_1\) et \(\alpha_2\), on peut écrire

        <strong>解答。</strong>由于 \(Q\) 是首一的二次多项式且以 \(\alpha_1\) 与 \(\alpha_2\) 为根，可以写成
        {: .zh }

        \[
        Q(X)=(X-\alpha_1)(X-\alpha_2).
        \]

        En développant,

        展开得
        {: .zh }

        \[
        Q(X)=X^2-(\alpha_1+\alpha_2)X+\alpha_1\alpha_2.
        \]

        Avec \(S=\alpha_1+\alpha_2\) et \(P=\alpha_1\alpha_2\), on obtient bien

        代入 \(S=\alpha_1+\alpha_2\) 与 \(P=\alpha_1\alpha_2\)，确实得到
        {: .zh }

        \[
        \boxed{Q(X)=X^2-SX+P.}
        \]

2. Soit \(S,P\in\mathbb{R}\) tels que \(S^2\geqslant4P\). Trouver \(x,y\in\mathbb{R}\) tels que \(x+y=S\) et \(xy=P\).
    {: .fr-exo }

    设 \(S,P\in\mathbb{R}\) 满足 \(S^2\geqslant4P\)。求 \(x,y\in\mathbb{R}\)，使得 \(x+y=S\) 且 \(xy=P\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Les réels \(x\) et \(y\) cherchés sont les racines du polynôme

        <strong>解答。</strong>所求的实数 \(x\) 与 \(y\) 是多项式 \(X^2-SX+P\) 的根。
        {: .zh }

        \[
        X^2-SX+P.
        \]

        Son discriminant vaut

        其判别式为
        {: .zh }

        \[
        \Delta=S^2-4P\geqslant0.
        \]

        Il admet donc deux racines réelles pour lesquelles on pose

        因此它有两个实根，我们令
        {: .zh }

        \[
        \boxed{x=\frac{S+\sqrt{S^2-4P}}{2},\qquad y=\frac{S-\sqrt{S^2-4P}}{2}.}
        \]

        Et on vérifie bien que \(x+y=S\) et \(xy=P\).

        并且确实可以验证 \(x+y=S\) 且 \(xy=P\)。
        {: .zh }

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">coefficients et racines　系数与根</p>

1. Soit \(Q\in\mathbb{C}_3[X]\) un polynôme unitaire de degré 3. On note \(\alpha_1\), \(\alpha_2\) et \(\alpha_3\) ses racines, éventuellement confondues. Soit \(S=\alpha_1+\alpha_2+\alpha_3\) et \(P=\alpha_1\alpha_2\alpha_3\). Montrer qu'alors \(Q=X^3-SX^2+c_1X-P\) où \(c_1\in\mathbb{C}\) est un coefficient que l'on exprimera en fonction de \(\alpha_1\), \(\alpha_2\) et \(\alpha_3\).
    {: .fr-exo }

    设 \(Q\in\mathbb{C}_3[X]\) 是一个首一的三次多项式。记 \(\alpha_1\)、\(\alpha_2\) 与 \(\alpha_3\) 为其根（可以相同）。设 \(S=\alpha_1+\alpha_2+\alpha_3\)，\(P=\alpha_1\alpha_2\alpha_3\)。证明此时 \(Q=X^3-SX^2+c_1X-P\)，其中 \(c_1\in\mathbb{C}\) 是一个待用 \(\alpha_1\)、\(\alpha_2\) 与 \(\alpha_3\) 表示的系数。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(Q\) est unitaire de degré 3 et a pour racines \(\alpha_1,\alpha_2,\alpha_3\), on a

        <strong>解答。</strong>由于 \(Q\) 是首一的三次多项式且以 \(\alpha_1,\alpha_2,\alpha_3\) 为根，有
        {: .zh }

        \[
        Q(X)=(X-\alpha_1)(X-\alpha_2)(X-\alpha_3).
        \]

        En développant,

        展开得
        {: .zh }

        \[
        \begin{aligned}
        Q(X)&=X^3-(\alpha_1+\alpha_2+\alpha_3)X^2\\
        &\quad+(\alpha_1\alpha_2+\alpha_1\alpha_3+\alpha_2\alpha_3)X-\alpha_1\alpha_2\alpha_3.
        \end{aligned}
        \]

        Avec \(S=\alpha_1+\alpha_2+\alpha_3\) et \(P=\alpha_1\alpha_2\alpha_3\), on obtient

        代入 \(S=\alpha_1+\alpha_2+\alpha_3\) 与 \(P=\alpha_1\alpha_2\alpha_3\)，得到
        {: .zh }

        \[
        \boxed{Q(X)=X^3-SX^2+c_1X-P\quad\text{où}\quad c_1=\alpha_1\alpha_2+\alpha_1\alpha_3+\alpha_2\alpha_3.}
        \]

2. Applications.
    {: .fr-exo }

    应用。
    {: .zh }

    1. Factoriser le polynôme \(8X^3-12X^2-2X+3\) sachant que ses racines sont en progression arithmétique.
        {: .fr-exo }

        已知多项式 \(8X^3-12X^2-2X+3\) 的根构成等差数列，对它进行因式分解。
        {: .zh }

        !!! sol ""

            <strong>Solution.</strong> Soient \(a-r\), \(a\) et \(a+r\) où \(a,r\in\mathbb{C}\), les trois racines. La somme des racines vaut

            <strong>解答。</strong>设三个根为 \(a-r\)、\(a\) 与 \(a+r\)，其中 \(a,r\in\mathbb{C}\)。根之和为
            {: .zh }

            \[
            S=(a-r)+a+(a+r)=3a.
            \]

            Or, d'après la question précédente,

            而由上一问，
            {: .zh }

            \[
            S=-\frac{-12}{8}=\frac{3}{2}=3a,
            \]

            donc

            因此
            {: .zh }

            \[
            a=\frac{1}{2}.
            \]

            Le produit des racines vaut

            根之积为
            {: .zh }

            \[
            P=(a-r)a(a+r)=a(a^2-r^2).
            \]

            Or, pour le polynôme \(8X^3-12X^2-2X+3\), le produit des racines vaut

            而对于多项式 \(8X^3-12X^2-2X+3\)，根之积为
            {: .zh }

            \[
            P=-\frac{3}{8}=\frac{1}{2}\left(\left(\frac{1}{2}\right)^2-r^2\right)
            \qquad\Longleftrightarrow\qquad
            \frac{1}{4}-r^2=-\frac{3}{4}
            \]

            d'où

            由此
            {: .zh }

            \[
            r^2=1.
            \]

            Les racines sont donc

            因此根为
            {: .zh }

            \[
            -\frac{1}{2},\quad\frac{1}{2},\quad\frac{3}{2}.
            \]

            Ainsi

            于是
            {: .zh }

            \[
            \boxed{8X^3-12X^2-2X+3=(2X+1)(2X-1)(2X-3).}
            \]

    2. Soit \(Q=2X^3-X^2-7X+\lambda\). Déterminer \(\lambda\in\mathbb{R}\) pour que la somme de deux des racines du polynôme \(Q\) soit égale à 1.
        {: .fr-exo }

        设 \(Q=2X^3-X^2-7X+\lambda\)。确定 \(\lambda\in\mathbb{R}\)，使得多项式 \(Q\) 的两个根之和等于 1。
        {: .zh }

        !!! sol ""

            <strong>Solution.</strong> Notons \(\alpha_1,\alpha_2,\alpha_3\) les trois racines avec \(\alpha_1+\alpha_2=1\). Or la somme des racines vaut

            <strong>解答。</strong>记三个根为 \(\alpha_1,\alpha_2,\alpha_3\)，且 \(\alpha_1+\alpha_2=1\)。而根之和为
            {: .zh }

            \[
            S=\alpha_1+\alpha_2+\alpha_3=-\frac{-1}{2}=\frac{1}{2}.
            \]

            D'où

            由此
            {: .zh }

            \[
            \alpha_3=-\frac{1}{2}.
            \]

            Donc \(-\frac{1}{2}\) est racine de \(Q\) et \(Q\left(-\frac{1}{2}\right)=0\).

            因此 \(-\frac{1}{2}\) 是 \(Q\) 的根，且 \(Q\left(-\frac{1}{2}\right)=0\)。
            {: .zh }

            Or

            而
            {: .zh }

            \[
            Q\left(-\frac{1}{2}\right)
            =2\left(-\frac{1}{8}\right)-\left(\frac{1}{4}\right)-7\left(-\frac{1}{2}\right)+\lambda
            =-\frac{1}{4}-\frac{1}{4}+\frac{7}{2}+\lambda=3+\lambda.
            \]

            Ainsi

            于是
            {: .zh }

            \[
            3+\lambda=0,
            \]

            d'où

            由此
            {: .zh }

            \[
            \boxed{\lambda=-3.}
            \]

    3. Déterminer \(\lambda\in\mathbb{R}\) pour que l'une des racines du polynôme \(X^3-7X+\lambda\) soit le double d'une autre.
        {: .fr-exo }

        确定 \(\lambda\in\mathbb{R}\)，使得多项式 \(X^3-7X+\lambda\) 的某个根是另一个根的两倍。
        {: .zh }

        !!! sol ""

            <strong>Solution.</strong> Notons \(\alpha\), \(2\alpha\), \(\alpha_3\) les trois racines de \(X^3-7X+\lambda\). La somme des racines vaut 0, car le coefficient de \(X^2\) est nul :

            <strong>解答。</strong>记 \(X^3-7X+\lambda\) 的三个根为 \(\alpha\)、\(2\alpha\)、\(\alpha_3\)。由于 \(X^2\) 的系数为零，根之和为 0：
            {: .zh }

            \[
            \alpha+2\alpha+\alpha_3=0,
            \]

            donc

            因此
            {: .zh }

            \[
            \alpha_3=-3\alpha.
            \]

            On développe alors le polynôme et on identifie ses coefficients :

            然后展开该多项式并比较其系数：
            {: .zh }

            \[
            (X-\alpha)(X-2\alpha)(X+3\alpha)
            =X^3+(2\alpha^2-3\alpha^2-6\alpha^2)X+6\alpha^3
            =X^3-7\alpha^2X+6\alpha^3
            \]

            Donc

            因此
            {: .zh }

            \[
            \alpha^2=1.
            \]

            Ainsi \(\alpha=\pm1\). D'où

            于是 \(\alpha=\pm1\)。由此
            {: .zh }

            \[
            \boxed{\lambda=6\quad\text{ou}\quad\lambda=-6.}
            \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>racine</strong>：根
    - <strong>multiplicité</strong>：重数
    - <strong>racine simple / racine multiple</strong>：单根 / 重根
    - <strong>factoriser</strong>：因式分解
    - <strong>carré parfait</strong>：完全平方
    - <strong>racine évidente</strong>：明显的根
    - <strong>conjugué</strong>：共轭
    - <strong>polynômes interpolateurs de Lagrange</strong>：拉格朗日插值多项式
    - <strong>coefficient dominant / coefficient constant</strong>：首项系数 / 常数项
    - <strong>polynôme unitaire</strong>：首一多项式
    - <strong>progression arithmétique</strong>：等差数列
    - <strong>identifier les coefficients</strong>：比较系数
    - <strong>on teste</strong>：测试；代入检验
    - <strong>on obtient</strong>：得到
    - <strong>d'où</strong>：由此

## Exercices supplémentaires <span class="heading-zh">补充习题</span>

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

        <strong>Solution.</strong> En développant par la formule du binôme, on obtient

        <strong>解答。</strong>用二项式公式展开，得到
        {: .zh }

        \[
        \begin{aligned}
        (\cos\theta+i\sin\theta)^7
        &=\cos^7\theta+7i\cos^6\theta\sin\theta-21\cos^5\theta\sin^2\theta\\
        &\quad-35i\cos^4\theta\sin^3\theta+35\cos^3\theta\sin^4\theta\\
        &\quad+21i\cos^2\theta\sin^5\theta-7\cos\theta\sin^6\theta-i\sin^7\theta.
        \end{aligned}
        \]

2. Donner l'ensemble de définition de la fonction \(f:\theta\mapsto\tan(7\theta)\) puis l'exprimer en fonction de \(\tan\theta\).
    {: .fr-exo }

    给出函数 \(f:\theta\mapsto\tan(7\theta)\) 的定义域，然后用 \(\tan\theta\) 表示它。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> La fonction \(\theta\mapsto\tan(7\theta)\) est définie lorsque

        <strong>解答。</strong>函数 \(\theta\mapsto\tan(7\theta)\) 有定义当且仅当
        {: .zh }

        \[
        \cos(7\theta)\neq0,
        \]

        c'est-à-dire

        即
        {: .zh }

        \[
        7\theta\neq\frac{\pi}{2}+k\pi,\qquad\text{où}\quad k\in\mathbb{Z}.
        \]

        Donc

        因此
        {: .zh }

        \[
        \boxed{\theta\neq\frac{\pi}{14}+\frac{k\pi}{7},\qquad\text{où}\quad k\in\mathbb{Z}.}
        \]

        D'après la question précédente et la formule de Moivre,

        由上一问与棣莫弗公式（formule de Moivre），
        {: .zh }

        \[
        (\cos\theta+i\sin\theta)^7=\cos(7\theta)+i\sin(7\theta).
        \]

        On a, en séparant parties réelle et imaginaire,

        分离实部与虚部，得到
        {: .zh }

        \[
        \cos(7\theta)=\cos^7\theta-21\cos^5\theta\sin^2\theta
        +35\cos^3\theta\sin^4\theta-7\cos\theta\sin^6\theta,
        \]

        et

        以及
        {: .zh }

        \[
        \sin(7\theta)=7\cos^6\theta\sin\theta-35\cos^4\theta\sin^3\theta
        +21\cos^2\theta\sin^5\theta-\sin^7\theta.
        \]

        En posant \(t=\tan\theta=\frac{\sin(\theta)}{\cos(\theta)}\), on a, en divisant les numérateur et dénominateur par \(\cos^7\theta\) (\(\cos\theta\neq0\) car \(\cos(7\theta)=(\cos\theta)P(\cos^2\theta)\) où \(P\in\mathbb{Z}[X]\), et \(\cos(7\theta)\neq0\)),

        令 \(t=\tan\theta=\frac{\sin(\theta)}{\cos(\theta)}\)，并将分子与分母同除以 \(\cos^7\theta\)（\(\cos\theta\neq0\)，因为 \(\cos(7\theta)=(\cos\theta)P(\cos^2\theta)\)，其中 \(P\in\mathbb{Z}[X]\)，且 \(\cos(7\theta)\neq0\)），有
        {: .zh }

        \[
        \tan(7\theta)=\frac{\sin(7\theta)}{\cos(7\theta)}
        =\frac{7t-35t^3+21t^5-t^7}{1-21t^2+35t^4-7t^6}.
        \]

        On peut aussi écrire

        也可以写成
        {: .zh }

        \[
        \boxed{\tan(7\theta)=\frac{t\left(7-35t^2+21t^4-t^6\right)}{1-21t^2+35t^4-7t^6}.}
        \]

3. En déduire les racines de \(7-35X+21X^2-X^3\).
    {: .fr-exo }

    由此推出 \(7-35X+21X^2-X^3\) 的根。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On cherche les racines du polynôme

        <strong>解答。</strong>我们寻找多项式 \(P=7-35X+21X^2-X^3\) 的根。
        {: .zh }

        \[
        P=7-35X+21X^2-X^3.
        \]

        D'après la question précédente, le numérateur de \(\tan(7\theta)\) s'écrit \(tP(t^2)\). Ainsi, si \(\tan(7\theta)=0\) et \(t\neq0\), alors \(P(t^2)=0\). Or

        由上一问，\(\tan(7\theta)\) 的分子可写成 \(tP(t^2)\)。因此，若 \(\tan(7\theta)=0\) 且 \(t\neq0\)，则 \(P(t^2)=0\)。而
        {: .zh }

        \[
        \tan(7\theta)=0
        \iff 7\theta=k\pi\ \text{où}\ k\in\mathbb{Z}
        \iff \theta=\frac{k\pi}{7}\ \text{où}\ k\in\mathbb{Z}.
        \]

        Pour \(k=1,2,3\), on obtient trois valeurs distinctes de \(t^2=\tan^2\theta\) :

        对 \(k=1,2,3\)，得到 \(t^2=\tan^2\theta\) 的三个互不相同的值：
        {: .zh }

        \[
        \tan^2\left(\frac{\pi}{7}\right),\qquad
        \tan^2\left(\frac{2\pi}{7}\right),\qquad
        \tan^2\left(\frac{3\pi}{7}\right).
        \]

        Le polynôme \(7-35X+21X^2-X^3\) est de degré 3, donc ses racines sont exactement

        多项式 \(7-35X+21X^2-X^3\) 的次数为 3，因此它的根恰好是
        {: .zh }

        \[
        \boxed{\tan^2\left(\frac{\pi}{7}\right),\quad
        \tan^2\left(\frac{2\pi}{7}\right),\quad
        \tan^2\left(\frac{3\pi}{7}\right).}
        \]

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">racines simples　单根</p>

1. Soit \(n\in\mathbb{N}^*\). On considère le polynôme
    {: .fr-exo }

    \[
    P_n=1+\frac{1}{1!}X+\frac{1}{2!}X^2+\cdots+\frac{1}{n!}X^n
    \]

    Montrer que \(P_n\) n'a que des racines simples dans \(\mathbb{C}\).
    {: .fr-exo }

    设 \(n\in\mathbb{N}^*\)。考虑多项式 \(P_n=1+\frac{1}{1!}X+\frac{1}{2!}X^2+\cdots+\frac{1}{n!}X^n\)。证明 \(P_n\) 在 \(\mathbb{C}\) 中只有<strong>单根</strong>（racines simples）。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On remarque que

        <strong>解答。</strong>注意到
        {: .zh }

        \[
        P_n'(X)=1+X+\frac{X^2}{2!}+\cdots+\frac{X^{n-1}}{(n-1)!}=P_{n-1}(X).
        \]

        Donc

        因此
        {: .zh }

        \[
        P_n(X)-P_n'(X)=\frac{X^n}{n!}.
        \]

        Supposons que \(\alpha\in\mathbb{C}\) soit une racine au moins double de \(P_n\). Alors

        假设 \(\alpha\in\mathbb{C}\) 是 \(P_n\) 的至少二重根。那么
        {: .zh }

        \[
        P_n(\alpha)=0\qquad\text{et}\qquad P_n'(\alpha)=0.
        \]

        Par conséquent,

        因此，
        {: .zh }

        \[
        0=P_n(\alpha)-P_n'(\alpha)=\frac{\alpha^n}{n!},
        \]

        donc, comme \(n\geqslant1\), \(\alpha=0\). Mais

        故由 \(n\geqslant1\) 得 \(\alpha=0\)。但
        {: .zh }

        \[
        P_n(0)=1\neq0,
        \]

        ce qui est absurde. Ainsi \(P_n\) n'a pas de racine multiple, donc toutes ses racines sont simples.

        这是矛盾的。于是 \(P_n\) 没有重根，因此它的所有根都是单根。
        {: .zh }

        \[
        \boxed{P_n\ \text{n'a que des racines simples dans}\ \mathbb{C}.}
        \]

2. Soit \(n\) un entier supérieur ou égal à 2. Montrer que le polynôme \(P_n=X^n-X+1\) n'a que des racines simples dans \(\mathbb{C}\).
    {: .fr-exo }

    设 \(n\) 是大于或等于 2 的整数。证明多项式 \(P_n=X^n-X+1\) 在 \(\mathbb{C}\) 中只有单根。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On a

        <strong>解答。</strong>有
        {: .zh }

        \[
        P_n'(X)=nX^{n-1}-1.
        \]

        Supposons que \(\alpha\in\mathbb{C}\) soit une racine au moins double de \(P_n\). Alors

        假设 \(\alpha\in\mathbb{C}\) 是 \(P_n\) 的至少二重根。那么
        {: .zh }

        \[
        P_n'(\alpha)=0\qquad\text{donne}\qquad \alpha^{n-1}=\frac{1}{n},
        \]

        donc pour \(n\geqslant2\),

        因此对 \(n\geqslant2\)，
        {: .zh }

        \[
        |\alpha|=\left(\frac{1}{n}\right)^{1/(n-1)}<1.
        \]

        On a alors

        此时有
        {: .zh }

        \[
        P_n(\alpha)=\alpha^n-\alpha+1=\left(\frac{1}{n}-1\right)\alpha+1
        \]

        et, avec l'inégalité triangulaire,

        并且由三角不等式，
        {: .zh }

        \[
        |P_n(\alpha)|\geqslant1-\left(1-\frac{1}{n}\right)|\alpha|
        >1-\left(1-\frac{1}{n}\right)=\frac{1}{n}>0.
        \]

        C'est en contradiction avec \(\alpha\) racine de \(P_n\). Il n'existe donc pas de racine multiple, et on conclut que

        这与 \(\alpha\) 是 \(P_n\) 的根矛盾。因此不存在重根，我们断言
        {: .zh }

        \[
        \boxed{P_n=X^n-X+1\ \text{n'a que des racines simples dans}\ \mathbb{C}.}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>formule de Moivre</strong>：棣莫弗公式
    - <strong>partie réelle / partie imaginaire</strong>：实部 / 虚部
    - <strong>ensemble de définition</strong>：定义域
    - <strong>inégalité triangulaire</strong>：三角不等式
    - <strong>racine au moins double</strong>：至少二重根
    - <strong>racine simple</strong>：单根
    - <strong>par l'absurde</strong>：用反证法
    - <strong>ce qui est absurde</strong>：这是矛盾的
    - <strong>en déduire</strong>：由此推出
    - <strong>on conclut que</strong>：我们断言；由此得出
    - <strong>vérifier</strong>：验证
