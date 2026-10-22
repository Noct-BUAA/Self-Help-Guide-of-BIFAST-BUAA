---
title: TD4 多项式解答
comments: true
---

# 第 4 次习题课　多项式引论

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°4 — Introduction aux polynômes</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">预备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">équation sur le degré　关于次数的方程</p>

On veut déterminer tous les polynômes \(P\) non nuls tels que \(P(X^2)=(X^2+1)P(X)\).
{: .fr-exo }

我们要确定所有满足 \(P(X^2)=(X^2+1)P(X)\) 的非零<strong>多项式</strong>（polynôme）\(P\)。
{: .zh }

1. En raisonnant sur le degré d'un polynôme \(P\) vérifiant cette égalité, déterminer \(\deg(P)\).
    {: .fr-exo }

    通过对满足该等式的多项式 \(P\) 的<strong>次数</strong>（degré）进行推理，确定 \(\deg(P)\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Notons \(d=\deg(P)\geqslant 0\).

        <strong>解答。</strong>设 \(d=\deg(P)\geqslant 0\)。
        {: .zh }

        Alors le polynôme \(P(X^2)\) est de degré \(2d\). Le polynôme \((X^2+1)P(X)\) est de degré \(d+2\).

        于是多项式 \(P(X^2)\) 的次数为 \(2d\)。多项式 \((X^2+1)P(X)\) 的次数为 \(d+2\)。
        {: .zh }

        En identifiant les degrés des deux membres, on obtient

        比较两边的次数，得到
        {: .zh }

        \[
        2d=d+2,
        \]

        d'où

        因此
        {: .zh }

        \[
        \boxed{\deg(P)=2}.
        \]

2. Déterminer \(P\).
    {: .fr-exo }

    确定 \(P\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On a

        <strong>解答。</strong>我们有
        {: .zh }

        \[
        P(X)=aX^2+bX+c,\qquad a\neq 0,\ b,c\in\mathbb{R}.
        \]

        Alors

        于是
        {: .zh }

        \[
        P(X^2)=aX^4+bX^2+c,
        \]

        et

        并且
        {: .zh }

        \[
        (X^2+1)P(X)=(X^2+1)(aX^2+bX+c)=aX^4+bX^3+(a+c)X^2+bX+c.
        \]

        En identifiant les coefficients des deux membres, on obtient

        比较两边的<strong>系数</strong>（coefficient），得到
        {: .zh }

        \[
        P(X^2)=(X^2+1)P(X)\iff
        \begin{cases}
        b=0\\
        a+c=b
        \end{cases}.
        \]

        Donc \(b=0\) et \(c=-a\). Ainsi

        因此 \(b=0\) 且 \(c=-a\)。于是
        {: .zh }

        \[
        \boxed{P(X)=a(X^2-1),\quad a\in\mathbb{R}^*.}
        \]

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">binôme de Newton　牛顿二项式</p>

1. Soit \((m,n)\in\mathbb{N}^2\). En développant le polynôme \((X+1)^m(X+1)^n\) de deux manières différentes, démontrer l'identité de Vandermonde :
    {: .fr-exo }

    \[
    \color{#0069D2}\forall k\in\llbracket0,m+n\rrbracket,\quad
    \sum_{\ell=0}^{k}\binom{m}{\ell}\binom{n}{k-\ell}=\binom{m+n}{k}
    \]

    où, par convention, on pose \(\binom{n}{r}=0\) si \(r<0\) ou \(r>n\).

    设 \((m,n)\in\mathbb{N}^2\)。用两种不同方式展开多项式 \((X+1)^m(X+1)^n\)，证明<strong>范德蒙恒等式</strong>（identité de Vandermonde）：其中按约定，当 \(r<0\) 或 \(r>n\) 时令 \(\binom{n}{r}=0\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On développe séparément les deux facteurs à l'aide de la formule du binôme de Newton :

        <strong>解答。</strong>我们借助牛顿二项式公式分别展开两个因子：
        {: .zh }

        \[
        (X+1)^m=\sum_{\ell=0}^{m}\binom{m}{\ell}X^\ell,
        \qquad
        (X+1)^n=\sum_{j=0}^{n}\binom{n}{j}X^j.
        \]

        En effectuant le produit, on obtient

        作乘积，得到
        {: .zh }

        \[
        (X+1)^m(X+1)^n
        =\left(\sum_{\ell=0}^{m}\binom{m}{\ell}X^\ell\right)
         \left(\sum_{j=0}^{n}\binom{n}{j}X^j\right)
        =\sum_{\ell=0}^{m}\sum_{j=0}^{n}\binom{m}{\ell}\binom{n}{j}X^{\ell+j}.
        \]

        On regroupe maintenant les termes selon la puissance de \(X\). Dans la somme obtenue, posons

        现在按 \(X\) 的幂次合并各项。在所得的和式中，令
        {: .zh }

        \[
        k=\ell+j.
        \]

        Pour un entier \(k\) fixé,

        对固定的整数 \(k\)，有
        {: .zh }

        \[
        j=k-\ell.
        \]

        La condition \(0\leqslant j\leqslant n\) devient donc

        条件 \(0\leqslant j\leqslant n\) 于是变为
        {: .zh }

        \[
        0\leqslant k-\ell\leqslant n,
        \]

        c'est-à-dire

        即
        {: .zh }

        \[
        k-n\leqslant \ell\leqslant k.
        \]

        En tenant compte aussi de \(0\leqslant\ell\leqslant m\), les bornes effectives sont

        再考虑到 \(0\leqslant\ell\leqslant m\)，有效的上下界为
        {: .zh }

        \[
        \max(0,k-n)\leqslant \ell\leqslant \min(m,k).
        \]

        Cependant, avec la convention

        然而，按约定
        {: .zh }

        \[
        \binom{n}{r}=0\quad\text{si } r>n,
        \]

        dans le cas où \(k>m\), les termes \(\binom{m}{\ell}\) tels que \(m<\ell\leqslant k\) sont nuls, de même que les termes \(\binom{n}{k-\ell}\) tels que \(0\leqslant\ell<k-n\) dans le cas où \(k>n\). Finalement on obtient

        当 \(k>m\) 时，满足 \(m<\ell\leqslant k\) 的项 \(\binom{m}{\ell}\) 为零；同样，当 \(k>n\) 时，满足 \(0\leqslant\ell<k-n\) 的项 \(\binom{n}{k-\ell}\) 也为零。最终得到
        {: .zh }

        \[
        (X+1)^m(X+1)^n
        =\sum_{k=0}^{m+n}\left(\sum_{\ell=0}^{k}\binom{m}{\ell}\binom{n}{k-\ell}\right)X^k.
        \]

2. Soit \(n\in\mathbb{N}\). En développant \((X+1)^{2n}(X-1)^{2n}\) de deux manières différentes, démontrer :
    {: .fr-exo }

    \[
    \color{#0069D2}\sum_{k=0}^{2n}(-1)^k\binom{2n}{k}^{2}=(-1)^n\binom{2n}{n}
    \]

    设 \(n\in\mathbb{N}\)。用两种不同方式展开 \((X+1)^{2n}(X-1)^{2n}\)，证明：
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En appliquant la formule du binôme de Newton, d'une part

        <strong>解答。</strong>应用牛顿二项式公式，一方面
        {: .zh }

        \[
        \begin{aligned}
        (X+1)^{2n}(X-1)^{2n}
        &=\left(\sum_{k=0}^{2n}\binom{2n}{k}X^k\right)
          \left(\sum_{j=0}^{2n}\binom{2n}{j}X^j(-1)^{2n-j}\right)\\
        &=\sum_{k=0}^{2n}\sum_{j=0}^{2n}(-1)^j\binom{2n}{k}\binom{2n}{j}X^{k+j}
        \end{aligned}
        \]

        d'autre part,

        另一方面，
        {: .zh }

        \[
        (X+1)^{2n}(X-1)^{2n}=(X^2-1)^{2n}
        =\sum_{m=0}^{2n}\binom{2n}{m}X^{2m}(-1)^{2n-m}.
        \]

        Le coefficient devant \(X^{2n}\) dans chacun de ces deux développements vaut

        这两个展开式中 \(X^{2n}\) 前的系数均为
        {: .zh }

        \[
        \sum_{k=0}^{2n}\binom{2n}{k}\binom{2n}{2n-k}(-1)^{2n-k}=(-1)^n\binom{2n}{n}.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{\sum_{k=0}^{2n}(-1)^k\binom{2n}{k}^{2}=(-1)^n\binom{2n}{n}.}
        \]

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">polynômes de Tchébychev　切比雪夫多项式</p>

On s'intéresse à la suite de polynômes \((P_n)_{n\in\mathbb{N}}\) définie par
{: .fr-exo }

\[
\color{#0069D2}P_0=1,\quad P_1=X,\quad\text{et}\quad
\forall n\in\mathbb{N},\ P_{n+2}=2XP_{n+1}-P_n
\]

我们考察由下式定义的多项式序列 \((P_n)_{n\in\mathbb{N}}\)：
{: .zh }

1. Démontrer qu'on définit bien une unique suite de polynômes. (On pourra considérer deux suites de polynômes \((P_n)\) et \((Q_n)\) vérifiant ces conditions et prouver par récurrence qu'elles sont égales.)
    {: .fr-exo }

    证明这确实定义了一个唯一的多项式序列。（可以考虑两个满足这些条件的多项式序列 \((P_n)\) 与 \((Q_n)\)，并用<strong>归纳法</strong>（récurrence）证明它们相等。）
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Soient \((P_n)\) et \((Q_n)\) deux suites de polynômes vérifiant les conditions initiales et la relation de récurrence. Montrons par récurrence sur \(n\in\mathbb{N}\) que \(P_n=Q_n\) pour tout \(n\in\mathbb{N}\) :

        <strong>解答。</strong>设 \((P_n)\) 与 \((Q_n)\) 是两个满足初始条件和递推关系的多项式序列。我们对 \(n\in\mathbb{N}\) 归纳证明：对所有 \(n\in\mathbb{N}\) 都有 \(P_n=Q_n\)：
        {: .zh }

        - Pour \(n=0\), on a \(P_0=1=Q_0\).

            对 \(n=0\)，有 \(P_0=1=Q_0\)。
            {: .zh }

        - Pour \(n=1\), on a \(P_1=X=Q_1\).

            对 \(n=1\)，有 \(P_1=X=Q_1\)。
            {: .zh }

        - Supposons pour \(n\in\mathbb{N}\) donné que \(P_n=Q_n\) et \(P_{n+1}=Q_{n+1}\). Alors

            假设对给定的 \(n\in\mathbb{N}\) 有 \(P_n=Q_n\) 且 \(P_{n+1}=Q_{n+1}\)。那么
            {: .zh }

            \[
            P_{n+2}=2XP_{n+1}-P_n=2XQ_{n+1}-Q_n=Q_{n+2}.
            \]

        On conclut par récurrence que \(\forall n\in\mathbb{N}\), \(P_n=Q_n\).

        由归纳法可知，\(\forall n\in\mathbb{N}\)，\(P_n=Q_n\)。
        {: .zh }

2. Calculer les polynômes \(P_n\) jusqu'à \(n=6\).
    {: .fr-exo }

    计算直到 \(n=6\) 的多项式 \(P_n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On a, par la relation de récurrence :

        <strong>解答。</strong>由递推关系有：
        {: .zh }

        \[
        \begin{aligned}
        P_0 &= 1,\\
        P_1 &= X,\\
        P_2 &= 2X\cdot X-1 = 2X^2-1,\\
        P_3 &= 2X(2X^2-1)-X = 4X^3-2X-X = 4X^3-3X,\\
        P_4 &= 2X(4X^3-3X)-(2X^2-1)\\
            &= 8X^4-6X^2-2X^2+1\\
            &= 8X^4-8X^2+1,\\
        P_5 &= 2X(8X^4-8X^2+1)-(4X^3-3X)\\
            &= 16X^5-16X^3+2X-4X^3+3X\\
            &= 16X^5-20X^3+5X,\\
        P_6 &= 2X(16X^5-20X^3+5X)-(8X^4-8X^2+1)\\
            &= 32X^6-40X^4+10X^2-8X^4+8X^2-1\\
            &= 32X^6-48X^4+18X^2-1.
        \end{aligned}
        \]

3. Montrer que \(\forall n\in\mathbb{N}\), \(\forall x\in\mathbb{R}\), \(\cos(nx)=P_n(\cos x)\).
    {: .fr-exo }

    证明 \(\forall n\in\mathbb{N}\)，\(\forall x\in\mathbb{R}\)，\(\cos(nx)=P_n(\cos x)\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Montrons par récurrence sur \(n\in\mathbb{N}\) que \(\forall n\in\mathbb{N}\), \(\forall x\in\mathbb{R}\), \(\cos(nx)=P_n(\cos x)\) :

        <strong>解答。</strong>我们对 \(n\in\mathbb{N}\) 归纳证明：\(\forall n\in\mathbb{N}\)，\(\forall x\in\mathbb{R}\)，\(\cos(nx)=P_n(\cos x)\)：
        {: .zh }

        - Pour \(n=0\), \(\forall x\in\mathbb{R}\), \(\cos(0\cdot x)=1=P_0(\cos x)\).

            对 \(n=0\)，\(\forall x\in\mathbb{R}\)，\(\cos(0\cdot x)=1=P_0(\cos x)\)。
            {: .zh }

        - Pour \(n=1\), \(\forall x\in\mathbb{R}\), \(\cos(x)=P_1(\cos x)\).

            对 \(n=1\)，\(\forall x\in\mathbb{R}\)，\(\cos(x)=P_1(\cos x)\)。
            {: .zh }

        - Supposons pour \(n\in\mathbb{N}\) donné que \(\cos(nx)=P_n(\cos x)\) et \(\cos((n+1)x)=P_{n+1}(\cos x)\). On a alors pour tout \(x\in\mathbb{R}\),

            假设对给定的 \(n\in\mathbb{N}\) 有 \(\cos(nx)=P_n(\cos x)\) 且 \(\cos((n+1)x)=P_{n+1}(\cos x)\)。那么对任意 \(x\in\mathbb{R}\)，有
            {: .zh }

            \[
            P_{n+2}(\cos x)=2\cos x\,P_{n+1}(\cos x)-P_n(\cos x)
            =2\cos x\cos((n+1)x)-\cos(nx)
            \]

        Linéarisons cette expression par la formule, si \(a,b\in\mathbb{R}\),

        利用下述公式对该表达式进行线性化：若 \(a,b\in\mathbb{R}\)，
        {: .zh }

        \[
        \cos a\cos b=\frac{1}{2}\bigl(\cos(a+b)+\cos(a-b)\bigr),
        \]

        on a

        则
        {: .zh }

        \[
        P_{n+2}(\cos x)=\cos((n+2)x)+\cos(nx)-\cos(nx)=\cos((n+2)x)
        \]

        On conclut par récurrence,

        由归纳法可得，
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N},\ \forall x\in\mathbb{R},\quad \cos(nx)=P_n(\cos x).}
        \]

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">polynômes pairs/impairs　偶 / 奇多项式</p>

Soit \(P\in\mathbb{R}[X]\).
{: .fr-exo }

设 \(P\in\mathbb{R}[X]\)。
{: .zh }

1. On suppose que la fonction polynomiale \(x\mapsto P(x)\) est paire. Montrer l'existence de \(Q\in\mathbb{R}[X]\) tel que \(P(X)=Q(X^2)\).
    {: .fr-exo }

    假设多项式函数 \(x\mapsto P(x)\) 是<strong>偶函数</strong>（fonction paire）。证明存在 \(Q\in\mathbb{R}[X]\) 使得 \(P(X)=Q(X^2)\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Soit \(P=\sum_{k=0}^{n}a_kX^k\) avec \(n\in\mathbb{N}\) et \(\forall k\in\llbracket0,n\rrbracket\), \(a_k\in\mathbb{R}\).

        <strong>解答。</strong>设 \(P=\sum_{k=0}^{n}a_kX^k\)，其中 \(n\in\mathbb{N}\) 且 \(\forall k\in\llbracket0,n\rrbracket\)，\(a_k\in\mathbb{R}\)。
        {: .zh }

        La fonction polynomiale \(x\mapsto P(x)-P(-x)\) est nulle donc le polynôme

        多项式函数 \(x\mapsto P(x)-P(-x)\) 恒为零，因此多项式
        {: .zh }

        \[
        P(X)-P(-X)=\sum_{k=0}^{n}a_k(1-(-1)^k)X^k
        \]

        est nul. Par identification on a donc pour \(0\leqslant k\leqslant n\),

        为零。比较系数可知，对 \(0\leqslant k\leqslant n\)，有
        {: .zh }

        \[
        a_k(1-(-1)^k)=0\quad\iff\quad a_k=0\ \text{ ou }\ k=2\ell,\ \ell\in\mathbb{N}
        \]

        En d'autres termes, tous les coefficients d'indice impair sont nuls. Donc

        换言之，所有奇下标系数均为零。因此
        {: .zh }

        \[
        P=\sum_{\ell=0}^{\lfloor n/2\rfloor} a_{2\ell}X^{2\ell}
        \]

        On pose alors

        于是令
        {: .zh }

        \[
        Q=\sum_{\ell=0}^{\lfloor n/2\rfloor} a_{2\ell}X^{\ell}
        \]

        et on a \(P(X)=Q(X^2)\).

        便有 \(P(X)=Q(X^2)\)。
        {: .zh }

2. Conjecturer et démontrer un résultat similaire lorsque la fonction polynomiale \(x\mapsto P(x)\) est impaire.
    {: .fr-exo }

    当多项式函数 \(x\mapsto P(x)\) 为奇函数时，猜想并证明类似的结果。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Montrons qu'il existe \(Q\in\mathbb{R}[X]\) tel que \(P=XQ(X^2)\).

        <strong>解答。</strong>我们证明存在 \(Q\in\mathbb{R}[X]\) 使得 \(P=XQ(X^2)\)。
        {: .zh }

        Soit \(P=\sum_{k=0}^{n}a_kX^k\) avec \(n\in\mathbb{N}\) et \(\forall k\in\llbracket0,n\rrbracket\), \(a_k\in\mathbb{R}\).

        设 \(P=\sum_{k=0}^{n}a_kX^k\)，其中 \(n\in\mathbb{N}\) 且 \(\forall k\in\llbracket0,n\rrbracket\)，\(a_k\in\mathbb{R}\)。
        {: .zh }

        On a

        有
        {: .zh }

        \[
        P(X)+P(-X)=\sum_{k=0}^{d}a_k(1+(-1)^k)X^k=0
        \]

        Par identification, seuls les \(a_k\) tels que \(k=2\ell+1\), \(\ell\in\mathbb{N}\) sont éventuellement non nuls. En d'autres termes, tous les coefficients d'indice pair sont nuls. Donc

        比较系数可知，只有满足 \(k=2\ell+1\)（\(\ell\in\mathbb{N}\)）的 \(a_k\) 可能非零。换言之，所有偶下标系数均为零。因此
        {: .zh }

        \[
        P=\sum_{\ell=0}^{\lfloor(d-1)/2\rfloor} a_{2\ell+1}X^{2\ell+1}
        \]

        Avec \(Q=\sum_{\ell=0}^{\lfloor(d-1)/2\rfloor} a_{2\ell+1}X^{\ell}\), on obtient \(P(X)=XQ(X^2)\).

        取 \(Q=\sum_{\ell=0}^{\lfloor(d-1)/2\rfloor} a_{2\ell+1}X^{\ell}\)，即得 \(P(X)=XQ(X^2)\)。
        {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>polynôme</strong>：多项式；\(P\in\mathbb{R}[X]\) 表示实系数多项式
    - <strong>degré</strong>：次数；\(\deg(P)\)
    - <strong>coefficient</strong>：系数
    - <strong>identifier (les coefficients)</strong>：比较（系数）
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>coefficient binomial</strong>：二项式系数 \(\binom{n}{k}\)
    - <strong>identité de Vandermonde</strong>：范德蒙恒等式
    - <strong>par convention</strong>：按约定
    - <strong>suite de polynômes</strong>：多项式序列
    - <strong>démonstration par récurrence</strong>：归纳证明
    - <strong>fonction polynomiale paire / impaire</strong>：偶 / 奇多项式函数
    - <strong>indice pair / impair</strong>：偶下标 / 奇下标
    - <strong>en déduire</strong>：由此推出
    - <strong>on obtient</strong>：得到
    - <strong>vérifier</strong>：验证；满足

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">cos non polynomiale　cos 不是多项式函数</p>

La fonction \(x\mapsto\cos(x)\) est-elle polynomiale ? Justifier.
{: .fr-exo }

函数 \(x\mapsto\cos(x)\) 是多项式函数吗？请说明理由。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Supposons, par l'absurde, qu'il existe un polynôme \(P\in\mathbb{R}[X]\) tel que

    <strong>解答。</strong>用<strong>反证法</strong>（raisonnement par l'absurde），假设存在多项式 \(P\in\mathbb{R}[X]\) 使得
    {: .zh }

    \[
    \forall x\in\mathbb{R},\quad \cos x=P(x).
    \]

    En dérivant deux fois cette égalité, on obtient, pour tout \(x\in\mathbb{R}\),

    对该等式求导两次，得到对任意 \(x\in\mathbb{R}\)，
    {: .zh }

    \[
    -\cos x=P''(x)
    \]

    c'est-à-dire

    即
    {: .zh }

    \[
    \forall x\in\mathbb{R},\quad P''(x)=-P(x),
    \]

    ou encore \(P''=-P\).

    亦即 \(P''=-P\)。
    {: .zh }

    Si \(\deg P\leqslant 1\) alors \(P''=0\) donne \(P=0\), ce qui contredit \(P(0)=\cos 0=1\).

    若 \(\deg P\leqslant 1\)，则 \(P''=0\) 推出 \(P=0\)，这与 \(P(0)=\cos 0=1\) 矛盾。
    {: .zh }

    Si \(\deg P\geqslant 2\) alors \(\deg P''=\deg P-2\) et on doit avoir \(\deg P-2=\deg P\) ce qui est impossible.

    若 \(\deg P\geqslant 2\)，则 \(\deg P''=\deg P-2\)，而必须有 \(\deg P-2=\deg P\)，这不可能。
    {: .zh }

    On conclut par l'absurde que la fonction \(\cos\) n'est pas polynomiale.

    由反证法可知，函数 \(\cos\) 不是多项式函数。
    {: .zh }

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">sommes de puissances d'entiers　整数幂之和</p>

1. Trouver le polynôme \(P_2\) de degré 2 tel que \(P_2(0)=0\) et \(P_2(X)-P_2(X-1)=X\). En déduire pour tout \(n\in\mathbb{N}^*\), \(\sum_{k=1}^{n}k\).
    {: .fr-exo }

    求二次多项式 \(P_2\)，使得 \(P_2(0)=0\) 且 \(P_2(X)-P_2(X-1)=X\)。由此对任意 \(n\in\mathbb{N}^*\) 导出 \(\sum_{k=1}^{n}k\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(P_2(0)=0\) et \(\deg(P_2)=2\), on écrit

        <strong>解答。</strong>由于 \(P_2(0)=0\) 且 \(\deg(P_2)=2\)，我们设
        {: .zh }

        \[
        P_2(X)=aX^2+bX,\qquad a\neq 0.
        \]

        Alors

        于是
        {: .zh }

        \[
        \begin{aligned}
        P_2(X)-P_2(X-1)
        &= aX^2+bX-\bigl[a(X-1)^2+b(X-1)\bigr]\\
        &= aX^2+bX-a(X^2-2X+1)-bX+b\\
        &= 2aX-a+b.
        \end{aligned}
        \]

        En identifiant à \(X\), on obtient

        与 \(X\) 比较，得到
        {: .zh }

        \[
        2a=1,\qquad -a+b=0,
        \]

        d'où \(a=\frac{1}{2}\) et \(b=\frac{1}{2}\). Ainsi

        由此 \(a=\frac{1}{2}\)，\(b=\frac{1}{2}\)。因此
        {: .zh }

        \[
        \boxed{P_2(X)=\frac{X^2+X}{2}=\frac{X(X+1)}{2}.}
        \]

        Pour \(n\in\mathbb{N}^*\), la relation \(P_2(k)-P_2(k-1)=k\) pour \(k=1,\ldots,n\) donne, en sommant,

        对 \(n\in\mathbb{N}^*\)，关系式 \(P_2(k)-P_2(k-1)=k\)（\(k=1,\ldots,n\)）求和给出
        {: .zh }

        \[
        \sum_{k=1}^{n}k=\sum_{k=1}^{n}\bigl(P_2(k)-P_2(k-1)\bigr)
        =P_2(n)-P_2(0)=P_2(n).
        \]

        Donc

        因此
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N}^*,\quad \sum_{k=1}^{n}k=\frac{n(n+1)}{2}.}
        \]

2. Trouver le polynôme \(P_3\) de degré 3 tel que \(P_3(0)=0\) et \(P_3(X)-P_3(X-1)=X^2\). En déduire pour tout \(n\in\mathbb{N}^*\), \(\sum_{k=1}^{n}k^2\).
    {: .fr-exo }

    求三次多项式 \(P_3\)，使得 \(P_3(0)=0\) 且 \(P_3(X)-P_3(X-1)=X^2\)。由此对任意 \(n\in\mathbb{N}^*\) 导出 \(\sum_{k=1}^{n}k^2\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On écrit

        <strong>解答。</strong>我们设
        {: .zh }

        \[
        P_3(X)=aX^3+bX^2+cX,\qquad a\neq 0.
        \]

        Un calcul direct donne

        直接计算给出
        {: .zh }

        \[
        \begin{aligned}
        P_3(X)-P_3(X-1)
        &= a\bigl(X^3-(X-1)^3\bigr)+b\bigl(X^2-(X-1)^2\bigr)+c\bigl(X-(X-1)\bigr)\\
        &= a(3X^2-3X+1)+b(2X-1)+c\\
        &= 3aX^2+(-3a+2b)X+(a-b+c).
        \end{aligned}
        \]

        En identifiant à \(X^2\),

        与 \(X^2\) 比较，
        {: .zh }

        \[
        3a=1,\qquad -3a+2b=0,\qquad a-b+c=0.
        \]

        On obtient \(a=\frac{1}{3}\), \(b=\frac{1}{2}\) et \(c=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}\). Donc

        得到 \(a=\frac{1}{3}\)，\(b=\frac{1}{2}\)，\(c=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}\)。因此
        {: .zh }

        \[
        P_3(X)=\frac{X^3}{3}+\frac{X^2}{2}+\frac{X}{6}
        =\frac{X(2X^2+3X+1)}{6}=\frac{X(X+1)(2X+1)}{6}.
        \]

        D'où

        于是
        {: .zh }

        \[
        \boxed{P_3(X)=\frac{X(X+1)(2X+1)}{6}.}
        \]

        Par télescopage,

        由<strong>裂项相消</strong>（télescopage），
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N}^*,\quad
        \sum_{k=1}^{n}k^2=P_3(n)=\frac{n(n+1)(2n+1)}{6}.}
        \]

3. Trouver le polynôme \(P_4\) de degré 4 tel que \(P_4(0)=0\) et \(P_4(X)-P_4(X-1)=X^3\). En déduire pour tout \(n\in\mathbb{N}^*\), \(\sum_{k=1}^{n}k^3\). Vérifier que \(\left(\sum_{k=1}^{n}k\right)^2=\sum_{k=1}^{n}k^3\).
    {: .fr-exo }

    求四次多项式 \(P_4\)，使得 \(P_4(0)=0\) 且 \(P_4(X)-P_4(X-1)=X^3\)。由此对任意 \(n\in\mathbb{N}^*\) 导出 \(\sum_{k=1}^{n}k^3\)。验证 \(\left(\sum_{k=1}^{n}k\right)^2=\sum_{k=1}^{n}k^3\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On écrit

        <strong>解答。</strong>我们设
        {: .zh }

        \[
        P_4(X)=aX^4+bX^3+cX^2+dX,\qquad a\neq 0.
        \]

        Un calcul direct donne

        直接计算给出
        {: .zh }

        \[
        \begin{aligned}
        P_4(X)-P_4(X-1)
        &= a\bigl(X^4-(X-1)^4\bigr)+b\bigl(X^3-(X-1)^3\bigr)\\
        &\quad+c\bigl(X^2-(X-1)^2\bigr)+d\\
        &= a(4X^3-6X^2+4X-1)+b(3X^2-3X+1)+c(2X-1)+d\\
        &= 4aX^3+(-6a+3b)X^2+(4a-3b+2c)X+(-a+b-c+d).
        \end{aligned}
        \]

        En identifiant à \(X^3\) :

        与 \(X^3\) 比较：
        {: .zh }

        \[
        4a=1,\qquad -6a+3b=0,\qquad 4a-3b+2c=0,\qquad -a+b-c+d=0.
        \]

        On obtient \(a=\frac{1}{4}\), \(b=\frac{1}{2}\), \(c=\frac{1}{4}\), \(d=0\). Donc

        得到 \(a=\frac{1}{4}\)，\(b=\frac{1}{2}\)，\(c=\frac{1}{4}\)，\(d=0\)。因此
        {: .zh }

        \[
        P_4(X)=\frac{X^4}{4}+\frac{X^3}{2}+\frac{X^2}{4}
        =\frac{X^2(X^2+2X+1)}{4}=\frac{X^2(X+1)^2}{4}
        =\left(\frac{X(X+1)}{2}\right)^2.
        \]

        Ainsi

        于是
        {: .zh }

        \[
        \boxed{P_4(X)=\left(\frac{X(X+1)}{2}\right)^2.}
        \]

        Par télescopage,

        由裂项相消，
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N}^*,\quad
        \sum_{k=1}^{n}k^3=P_4(n)=\frac{n^2(n+1)^2}{4}
        =\left(\frac{n(n+1)}{2}\right)^2.}
        \]

        On vérifie bien que

        确实可以验证
        {: .zh }

        \[
        \sum_{k=1}^{n}k^3=\left(\frac{n(n+1)}{2}\right)^2
        =\left(\sum_{k=1}^{n}k\right)^2.
        \]

        Donc

        因此
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N}^*,\quad
        \left(\sum_{k=1}^{n}k\right)^2=\sum_{k=1}^{n}k^3.}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>polynomiale</strong>：多项式的（函数）
    - <strong>par l'absurde</strong>：反证法
    - <strong>raisonner par l'absurde</strong>：用反证法推理
    - <strong>dériver</strong>：求导
    - <strong>contredire / contradiction</strong>：与……矛盾 / 矛盾
    - <strong>somme de puissances</strong>：幂和
    - <strong>télescopage</strong>：裂项相消
    - <strong>en sommant</strong>：求和
    - <strong>identifier à</strong>：与……比较系数
    - <strong>il existe</strong>：存在
    - <strong>on conclut</strong>：得出结论
    - <strong>vérifier que</strong>：验证
