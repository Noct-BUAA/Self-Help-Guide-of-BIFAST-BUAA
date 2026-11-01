---
title: TD6 部分分式分解解答
comments: true
---

# 第 6 次习题课　部分分式分解

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°6 — Décomposition en éléments simples</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">预备习题</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">fractions rationnelles　有理分式</p>

Décomposer les fractions rationnelles suivantes en éléments simples sur \(\mathbb{R}\).
{: .fr-exo }

将下列有理分式在 \(\mathbb{R}\) 上分解为<strong>部分分式</strong>（éléments simples）。
{: .zh }

1. \(x\mapsto \dfrac{1}{x^3-x}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On factorise le dénominateur :

        <strong>解答。</strong>对分母作因式分解：
        {: .zh }

        \[
        x^3-x=x(x-1)(x+1).
        \]

        Les trois pôles \(0\), \(1\) et \(-1\) sont simples. On cherche donc

        三个极点 \(0\)、\(1\)、\(-1\) 都是单极点。因此设
        {: .zh }

        \[
        \frac{1}{x^3-x}=\frac{a}{x}+\frac{b}{x-1}+\frac{c}{x+1}.
        \]

        En multipliant par \(x\) puis en faisant \(x=0\), on obtient

        两边乘以 \(x\) 再令 \(x=0\)，得到
        {: .zh }

        \[
        a=\frac{1}{(0-1)(0+1)}=-1.
        \]

        De même, en multipliant par \(x-1\) puis \(x=1\), et par \(x+1\) puis \(x=-1\) :

        同样，乘以 \(x-1\) 后令 \(x=1\)，乘以 \(x+1\) 后令 \(x=-1\)：
        {: .zh }

        \[
        b=\frac{1}{1\cdot(1+1)}=\frac12,\qquad c=\frac{1}{(-1)(-1-1)}=\frac12.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{\frac{1}{x^3-x}=-\frac{1}{x}+\frac{1}{2(x-1)}+\frac{1}{2(x+1)}}.
        \]

2. \(x\mapsto \dfrac{x^3}{(x-1)(x-2)(x-3)}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> Le numérateur et le dénominateur ont même degré ; on commence par la division euclidienne :

        <strong>解答。</strong>分子与分母次数相同；先作欧几里得除法：
        {: .zh }

        \[
        \frac{x^3}{(x-1)(x-2)(x-3)}
        =1+\frac{6x^2-11x+6}{(x-1)(x-2)(x-3)}.
        \]

        Les pôles \(1\), \(2\), \(3\) sont simples. En multipliant par \(x-1\), \(x-2\), \(x-3\) et en évaluant :

        极点 \(1\)、\(2\)、\(3\) 为单极点。分别乘以 \(x-1\)、\(x-2\)、\(x-3\) 后求值：
        {: .zh }

        \[
        a=\frac{6-11+6}{(1-2)(1-3)}=\frac12,\quad
        b=\frac{24-22+6}{(2-1)(2-3)}=-8,\quad
        c=\frac{54-33+6}{(3-1)(3-2)}=\frac{27}{2}.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{\frac{x^3}{(x-1)(x-2)(x-3)}
        =1+\frac{1}{2(x-1)}-\frac{8}{x-2}+\frac{27}{2(x-3)}}.
        \]

3. \(x\mapsto \dfrac{x^3+1}{(x-1)^3}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On pose \(u=x-1\), c'est-à-dire \(x=u+1\) :

        <strong>解答。</strong>令 \(u=x-1\)，即 \(x=u+1\)：
        {: .zh }

        \[
        \frac{x^3+1}{(x-1)^3}=\frac{(u+1)^3+1}{u^3}
        =\frac{u^3+3u^2+3u+2}{u^3}
        =1+\frac{3}{u}+\frac{3}{u^2}+\frac{2}{u^3}.
        \]

        D'où, en revenant à \(x\) :

        因此，回到 \(x\)：
        {: .zh }

        \[
        \boxed{\frac{x^3+1}{(x-1)^3}=1+\frac{3}{x-1}+\frac{3}{(x-1)^2}+\frac{2}{(x-1)^3}}.
        \]

4. \(x\mapsto \dfrac{x}{x^4-1}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On factorise sur \(\mathbb{R}\) :

        <strong>解答。</strong>在 \(\mathbb{R}\) 上因式分解：
        {: .zh }

        \[
        x^4-1=(x-1)(x+1)(x^2+1).
        \]

        On cherche

        设
        {: .zh }

        \[
        \frac{x}{x^4-1}=\frac{a}{x-1}+\frac{b}{x+1}+\frac{cx+d}{x^2+1}.
        \]

        En multipliant par les dénominateurs,

        两边乘以各分母，
        {: .zh }

        \[
        x=a(x+1)(x^2+1)+b(x-1)(x^2+1)+(cx+d)(x^2-1).
        \]

        En prenant successivement \(x=1\), \(x=-1\), \(x=0\) puis \(x=2\), on obtient

        依次取 \(x=1\)、\(x=-1\)、\(x=0\) 与 \(x=2\)，得到
        {: .zh }

        \[
        a=\frac14,\qquad b=\frac14,\qquad d=0,\qquad c=-\frac12.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{\frac{x}{x^4-1}=\frac{1}{4(x-1)}+\frac{1}{4(x+1)}-\frac{x}{2(x^2+1)}}.
        \]

5. \(x\mapsto \dfrac{x^3}{(x^2+x+1)^2}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> Le dénominateur est un carré ; on cherche

        <strong>解答。</strong>分母是一个平方；设
        {: .zh }

        \[
        \frac{x^3}{(x^2+x+1)^2}=\frac{ax+b}{x^2+x+1}+\frac{cx+d}{(x^2+x+1)^2}.
        \]

        En multipliant par \((x^2+x+1)^2\),

        乘以 \((x^2+x+1)^2\)，
        {: .zh }

        \[
        x^3=(ax+b)(x^2+x+1)+cx+d.
        \]

        Par identification,

        比较系数，
        {: .zh }

        \[
        a=1,\qquad a+b=0,\qquad a+b+c=0,\qquad b+d=0,
        \]

        d'où \(a=1\), \(b=-1\), \(c=0\), \(d=1\), et finalement

        由此 \(a=1\)、\(b=-1\)、\(c=0\)、\(d=1\)，最终
        {: .zh }

        \[
        \boxed{\frac{x^3}{(x^2+x+1)^2}=\frac{x-1}{x^2+x+1}+\frac{1}{(x^2+x+1)^2}}.
        \]

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">somme à décomposer　待分解的求和</p>

1. Décomposer la fraction rationnelle \(x\mapsto F(x)=\dfrac{1}{x(x+1)(x+2)}\) sur \(\mathbb{R}\).
    {: .fr-exo }

    将有理分式 \(x\mapsto F(x)=\dfrac{1}{x(x+1)(x+2)}\) 在 \(\mathbb{R}\) 上分解为部分分式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Le dénominateur est déjà factorisé en facteurs simples :

        <strong>解答。</strong>分母已分解为单因式：
        {: .zh }

        \[
        \frac{1}{x(x+1)(x+2)}=\frac{a}{x}+\frac{b}{x+1}+\frac{c}{x+2},
        \]

        avec

        其中
        {: .zh }

        \[
        a=\frac{1}{(0+1)(0+2)}=\frac12,\quad
        b=\frac{1}{(-1)(-1+2)}=-1,\quad
        c=\frac{1}{(-2)(-2+1)}=\frac12.
        \]

        \[
        \boxed{F(x)=\frac{1}{2x}-\frac{1}{x+1}+\frac{1}{2(x+2)}}.
        \]

2. Soit \(n\in\mathbb{N}^{*}\). Simplifier l'expression
    \(S_n=\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)(k+2)}\).
    {: .fr-exo }

    设 \(n\in\mathbb{N}^{*}\)。化简表达式 \(S_n=\displaystyle\sum_{k=1}^{n}\frac{1}{k(k+1)(k+2)}\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En sommant l'identité précédente pour \(k=1,\dots,n\) :

        <strong>解答。</strong>对 \(k=1,\dots,n\) 求和：
        {: .zh }

        \[
        S_n=\frac12\sum_{k=1}^{n}\frac1k-\sum_{k=1}^{n}\frac{1}{k+1}
        +\frac12\sum_{k=1}^{n}\frac{1}{k+2}.
        \]

        Or

        而
        {: .zh }

        \[
        \frac{1}{k(k+1)(k+2)}
        =\frac12\left[\left(\frac1k-\frac1{k+1}\right)
        -\left(\frac1{k+1}-\frac1{k+2}\right)\right].
        \]

        Les deux sommes se télescopent :

        两个求和分别裂项：
        {: .zh }

        \[
        \sum_{k=1}^{n}\left(\frac1k-\frac1{k+1}\right)=1-\frac{1}{n+1},
        \qquad
        \sum_{k=1}^{n}\left(\frac1{k+1}-\frac1{k+2}\right)=\frac12-\frac{1}{n+2}.
        \]

        D'où

        因此
        {: .zh }

        \[
        S_n=\frac12\left(1-\frac{1}{n+1}-\frac12+\frac{1}{n+2}\right)
        =\frac14-\frac{1}{2(n+1)(n+2)}.
        \]

        \[
        \boxed{S_n=\frac14-\frac{1}{2(n+1)(n+2)}=\frac{n(n+3)}{4(n+1)(n+2)}}.
        \]

3. En déduire \(\displaystyle\lim_{n\to+\infty}S_n\).
    {: .fr-exo }

    由此推出 \(\displaystyle\lim_{n\to+\infty}S_n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(\dfrac{n(n+3)}{4(n+1)(n+2)}\sim\dfrac{n^2}{4n^2}=\dfrac14\) :

        <strong>解答。</strong>由于 \(\dfrac{n(n+3)}{4(n+1)(n+2)}\sim\dfrac{n^2}{4n^2}=\dfrac14\)：
        {: .zh }

        \[
        \boxed{\lim_{n\to+\infty}S_n=\frac14.}
        \]

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">somme télescopique　裂项求和</p>

1. Décomposer la fraction rationnelle \(x\mapsto F(x)=\dfrac{x^2+x-1}{x^4+x^2+1}\) sur \(\mathbb{R}\).
    {: .fr-exo }

    将有理分式 \(x\mapsto F(x)=\dfrac{x^2+x-1}{x^4+x^2+1}\) 在 \(\mathbb{R}\) 上分解为部分分式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On factorise :

        <strong>解答。</strong>因式分解：
        {: .zh }

        \[
        x^4+x^2+1=(x^2+1)^2-x^2=(x^2+x+1)(x^2-x+1).
        \]

        Les deux facteurs quadratiques sont irréductibles sur \(\mathbb{R}\). On cherche

        两个二次因式在 \(\mathbb{R}\) 上不可约。设
        {: .zh }

        \[
        \frac{x^2+x-1}{x^4+x^2+1}=\frac{ax+b}{x^2+x+1}+\frac{cx+d}{x^2-x+1}.
        \]

        En multipliant par \(x^4+x^2+1\),

        乘以 \(x^4+x^2+1\)，
        {: .zh }

        \[
        x^2+x-1=(ax+b)(x^2-x+1)+(cx+d)(x^2+x+1).
        \]

        L'identification donne

        比较系数得
        {: .zh }

        \[
        a+c=0,\quad -a+b+c+d=1,\quad a-b+c+d=1,\quad b+d=-1,
        \]

        d'où \(a=-1\), \(b=-1\), \(c=1\), \(d=0\), c'est-à-dire

        由此 \(a=-1\)、\(b=-1\)、\(c=1\)、\(d=0\)，即
        {: .zh }

        \[
        \boxed{F(x)=\frac{x}{x^2-x+1}-\frac{x+1}{x^2+x+1}}.
        \]

2. Soit \(n\in\mathbb{N}^{*}\). On pose \(S_n=\displaystyle\sum_{k=1}^{n}F(k)\).
    Calculer \(S_n\) en fonction de \(n\) puis trouver sa limite en \(n\to+\infty\).
    {: .fr-exo }

    设 \(n\in\mathbb{N}^{*}\)。令 \(S_n=\displaystyle\sum_{k=1}^{n}F(k)\)。
    计算 \(S_n\)（用 \(n\) 表示），再求其在 \(n\to+\infty\) 时的极限。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Posons \(g(x)=\dfrac{x}{x^2-x+1}\). Comme

        <strong>解答。</strong>令 \(g(x)=\dfrac{x}{x^2-x+1}\)。由于
        {: .zh }

        \[
        (k+1)^2-(k+1)+1=k^2+k+1,
        \]

        on a

        有
        {: .zh }

        \[
        F(k)=\frac{k}{k^2-k+1}-\frac{k+1}{k^2+k+1}=g(k)-g(k+1).
        \]

        La somme est donc télescopique :

        该和因此可裂项相消：
        {: .zh }

        \[
        S_n=\sum_{k=1}^{n}\bigl(g(k)-g(k+1)\bigr)=g(1)-g(n+1)
        =1-\frac{n+1}{n^2+n+1}.
        \]

        \[
        \boxed{S_n=\frac{n^2}{n^2+n+1}}.
        \]

        Finalement

        最终
        {: .zh }

        \[
        \boxed{\lim_{n\to+\infty}S_n=1.}
        \]

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">primitives　原函数</p>

Pour chacune des fonctions suivantes, calculer une primitive sur un des intervalles de
l'ensemble de définition.
{: .fr-exo }

对下列每个函数，在其定义域的某个区间上计算一个<strong>原函数</strong>（primitive）。
{: .zh }

1. \(x\mapsto \dfrac{1}{x^2(x^2+1)}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On décompose :

        <strong>解答。</strong>作分解：
        {: .zh }

        \[
        \frac{1}{x^2(x^2+1)}=\frac{1}{x^2}-\frac{1}{x^2+1},
        \]

        car \(\dfrac{1}{x^2}-\dfrac{1}{x^2+1}=\dfrac{(x^2+1)-x^2}{x^2(x^2+1)}\). On en déduit

        因为 \(\dfrac{1}{x^2}-\dfrac{1}{x^2+1}=\dfrac{(x^2+1)-x^2}{x^2(x^2+1)}\)。由此
        {: .zh }

        \[
        \boxed{\int\frac{dx}{x^2(x^2+1)}=-\frac1x-\arctan x+C.}
        \]

        Cette primitive est valable sur \(]-\infty,0[\) ou sur \(]0,+\infty[\).

        该原函数在 \(]-\infty,0[\) 或 \(]0,+\infty[\) 上成立。
        {: .zh }

2. \(x\mapsto \dfrac{x^2}{x^3-1}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> Comme \(x^3-1=(x-1)(x^2+x+1)\), on décompose :

        <strong>解答。</strong>由于 \(x^3-1=(x-1)(x^2+x+1)\)，作分解：
        {: .zh }

        \[
        \frac{x^2}{x^3-1}=\frac13\left(\frac{1}{x-1}+\frac{2x+1}{x^2+x+1}\right).
        \]

        En effet, \(\dfrac{1}{x-1}+\dfrac{2x+1}{x^2+x+1}
        =\dfrac{x^2+x+1+(2x+1)(x-1)}{x^3-1}
        =\dfrac{3x^2}{x^3-1}\). La seconde fraction est de la forme \(\dfrac{u'}{u}\), d'où

        事实上，\(\dfrac{1}{x-1}+\dfrac{2x+1}{x^2+x+1}
        =\dfrac{x^2+x+1+(2x+1)(x-1)}{x^3-1}
        =\dfrac{3x^2}{x^3-1}\)。第二个分式形如 \(\dfrac{u'}{u}\)，故
        {: .zh }

        \[
        \boxed{\int\frac{x^2\,dx}{x^3-1}
        =\frac13\ln|x-1|+\frac13\ln(x^2+x+1)+C
        =\frac13\ln|x^3-1|+C.}
        \]

        Cette primitive est valable sur \(]-\infty,1[\) ou sur \(]1,+\infty[\).

        该原函数在 \(]-\infty,1[\) 或 \(]1,+\infty[\) 上成立。
        {: .zh }

3. \(x\mapsto \dfrac{1}{x^4-x^2-2}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On factorise en posant \(t=x^2\) : \(t^2-t-2=(t-2)(t+1)\), donc

        <strong>解答。</strong>令 \(t=x^2\) 作因式分解：\(t^2-t-2=(t-2)(t+1)\)，因此
        {: .zh }

        \[
        \frac{1}{x^4-x^2-2}=\frac{1}{(x^2-2)(x^2+1)}
        =\frac13\left(\frac{1}{x^2-2}-\frac{1}{x^2+1}\right).
        \]

        Avec \(\displaystyle\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C\)
        pour \(a=\sqrt2\) :

        利用 \(a=\sqrt2\) 时的 \(\displaystyle\int\frac{dx}{x^2-a^2}=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C\)：
        {: .zh }

        \[
        \boxed{\int\frac{dx}{x^4-x^2-2}
        =\frac{1}{6\sqrt2}\ln\left|\frac{x-\sqrt2}{x+\sqrt2}\right|
        -\frac13\arctan x+C,}
        \]

        sur chacun des intervalles \(]-\infty,-\sqrt2[\), \(]-\sqrt2,\sqrt2[\), \(]\sqrt2,+\infty[\).

        分别在区间 \(]-\infty,-\sqrt2[\)、\(]-\sqrt2,\sqrt2[\)、\(]\sqrt2,+\infty[\) 上成立。
        {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>décomposition en éléments simples</strong>：部分分式分解
    - <strong>fraction rationnelle</strong>：有理分式
    - <strong>pôle simple / pôle double / pôle multiple</strong>：单极点 / 二重极点 / 重极点
    - <strong>numérateur / dénominateur</strong>：分子 / 分母
    - <strong>division euclidienne</strong>：欧几里得除法
    - <strong>identification des coefficients</strong>：系数比较
    - <strong>somme télescopique</strong>：裂项求和
    - <strong>primitive</strong>：原函数
    - <strong>ensemble de définition</strong>：定义域
    - <strong>en fonction de \(n\)</strong>：用 \(n\) 表示
    - <strong>en déduire</strong>：由此推出

## Exercices supplémentaires <span class="heading-zh">补充习题</span>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">dérivée de polynôme　多项式的导数</p>

Soit \(P\) un polynôme de \(\mathbb{R}[X]\), de degré \(n\geqslant1\), possédant \(n\) racines
réelles distinctes et non nulles \((x_k)_{1\leqslant k\leqslant n}\).
{: .fr-exo }

设 \(P\) 是 \(\mathbb{R}[X]\) 中的多项式，次数 \(n\geqslant1\)，具有 \(n\) 个互异且非零的实根
\((x_k)_{1\leqslant k\leqslant n}\)。
{: .zh }

1. Décomposer en éléments simples la fraction rationnelle \(x\mapsto\dfrac{1}{xP(x)}\).
    {: .fr-exo }

    将有理分式 \(x\mapsto\dfrac{1}{xP(x)}\) 分解为部分分式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(P\) est de degré \(n\) et possède \(n\) racines distinctes, il est
        scindé à racines simples :

        <strong>解答。</strong>由于 \(P\) 是 \(n\) 次且恰有 \(n\) 个互异根，它在 \(\mathbb{R}\) 上分裂且根都是单根：
        {: .zh }

        \[
        P(x)=a\prod_{k=1}^{n}(x-x_k),\qquad a\in\mathbb{R}^{*}.
        \]

        Comme les \(x_k\) sont non nuls, \(0\) n'est pas racine de \(P\) : les pôles de
        \(\dfrac{1}{xP(x)}\) sont \(0,x_1,\dots,x_n\), tous simples. On cherche

        由于 \(x_k\) 均非零，\(0\) 不是 \(P\) 的根：\(\dfrac{1}{xP(x)}\) 的极点为 \(0,x_1,\dots,x_n\)，且全为单极点。设
        {: .zh }

        \[
        \frac{1}{xP(x)}=\frac{A}{x}+\sum_{k=1}^{n}\frac{A_k}{x-x_k}.
        \]

        En multipliant par \(x\) et en faisant \(x=0\) :

        乘以 \(x\) 并令 \(x=0\)：
        {: .zh }

        \[
        A=\frac{1}{P(0)}.
        \]

        Pour \(k\in\{1,\dots,n\}\), en multipliant par \(x-x_k\) et en faisant \(x=x_k\) :

        对 \(k\in\{1,\dots,n\}\)，乘以 \(x-x_k\) 并令 \(x=x_k\)：
        {: .zh }

        \[
        A_k=\frac{1}{x_k}\cdot\frac{1}{P'(x_k)}=\frac{1}{x_kP'(x_k)}.
        \]

        Ainsi

        于是
        {: .zh }

        \[
        \boxed{\frac{1}{xP(x)}=\frac{1}{P(0)}\cdot\frac1x
        +\sum_{k=1}^{n}\frac{1}{x_kP'(x_k)}\cdot\frac{1}{x-x_k}}.
        \]

2. En déduire la somme \(\displaystyle\sum_{k=1}^{n}\frac{1}{x_kP'(x_k)}\).
    {: .fr-exo }

    由此推出和式 \(\displaystyle\sum_{k=1}^{n}\frac{1}{x_kP'(x_k)}\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En multipliant l'identité précédente par \(x\) :

        <strong>解答。</strong>将上式乘以 \(x\)：
        {: .zh }

        \[
        \frac{1}{P(x)}=\frac{1}{P(0)}
        +\sum_{k=1}^{n}\frac{1}{x_kP'(x_k)}\cdot\frac{x}{x-x_k}.
        \]

        Comme \(\deg P\geqslant1\), on a \(\dfrac{1}{P(x)}\to0\) quand \(x\to+\infty\), et
        \(\dfrac{x}{x-x_k}\to1\). En passant à la limite :

        由于 \(\deg P\geqslant1\)，当 \(x\to+\infty\) 时 \(\dfrac{1}{P(x)}\to0\)，且
        \(\dfrac{x}{x-x_k}\to1\)。取极限得：
        {: .zh }

        \[
        0=\frac{1}{P(0)}+\sum_{k=1}^{n}\frac{1}{x_kP'(x_k)},
        \]

        d'où

        因此
        {: .zh }

        \[
        \boxed{\sum_{k=1}^{n}\frac{1}{x_kP'(x_k)}=-\frac{1}{P(0)}}.
        \]

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">pôle simple　单极点</p>

1. Soit \(x\mapsto F(x)=\dfrac{N(x)}{D(x)}\) une fraction rationnelle avec \(N\) et \(D\) deux
    polynômes de \(\mathbb{C}[X]\) sans racine commune. Soit \(\alpha\) une racine simple de \(D\).
    {: .fr-exo }

    设有理分式 \(x\mapsto F(x)=\dfrac{N(x)}{D(x)}\)，其中 \(N\) 与 \(D\) 是 \(\mathbb{C}[X]\) 中
    无公根的两个多项式。设 \(\alpha\) 是 \(D\) 的单根。
    {: .zh }

    1. On pose \(D=(X-\alpha)D_1\) avec \(D_1\in\mathbb{C}[X]\). Calculer le coefficient
        \(a_\alpha\in\mathbb{C}\) de l'élément simple \(x\mapsto\dfrac{1}{x-\alpha}\) dans la
        décomposition de \(x\mapsto F(x)\) en éléments simples.
        {: .fr-exo }

        令 \(D=(X-\alpha)D_1\)，其中 \(D_1\in\mathbb{C}[X]\)。计算 \(x\mapsto F(x)\) 的部分分式
        分解中，分式 \(x\mapsto\dfrac{1}{x-\alpha}\) 的系数 \(a_\alpha\in\mathbb{C}\)。
        {: .zh }

        !!! sol ""

            <strong>Solution.</strong> Notons \(G\) la fraction rationnelle formée des autres éléments simples :
            elle n'a pas de pôle en \(\alpha\), donc \(G\) est définie en \(\alpha\). En multipliant par
            \(x-\alpha\) :

            <strong>解答。</strong>记 \(G\) 为其余部分分式之和：它在 \(\alpha\) 处没有极点，故在 \(\alpha\) 处有定义。
            乘以 \(x-\alpha\)：
            {: .zh }

            \[
            (x-\alpha)F(x)=a_\alpha+(x-\alpha)G(x).
            \]

            Pour \(x\ne\alpha\),

            对 \(x\ne\alpha\)，
            {: .zh }

            \[
            (x-\alpha)F(x)=\frac{N(x)}{D_1(x)},
            \]

            et le membre de droite est continu en \(\alpha\), car \(D_1(\alpha)\ne0\). En faisant
            \(x\to\alpha\) :

            右端在 \(\alpha\) 处连续，因为 \(D_1(\alpha)\ne0\)。令 \(x\to\alpha\)：
            {: .zh }

            \[
            \boxed{a_\alpha=\frac{N(\alpha)}{D_1(\alpha)}}.
            \]

    2. Montrer que \(D'(\alpha)=D_1(\alpha)\).
        {: .fr-exo }

        证明 \(D'(\alpha)=D_1(\alpha)\)。
        {: .zh }

        !!! sol ""

            <strong>Solution.</strong> On dérive \(D=(X-\alpha)D_1\) :

            <strong>解答。</strong>对 \(D=(X-\alpha)D_1\) 求导：
            {: .zh }

            \[
            D'=D_1+(X-\alpha)D_1',
            \]

            d'où, en évaluant en \(\alpha\),

            因此在 \(\alpha\) 处取值，
            {: .zh }

            \[
            \boxed{D'(\alpha)=D_1(\alpha)}.
            \]

    3. En déduire une expression de \(a_\alpha\) en fonction de \(N(\alpha)\) et \(D'(\alpha)\).
        {: .fr-exo }

        由此给出 \(a_\alpha\) 用 \(N(\alpha)\) 与 \(D'(\alpha)\) 表示的表达式。
        {: .zh }

        !!! sol ""

            <strong>Solution.</strong> En reportant le résultat de (b) dans celui de (a) :

            <strong>解答。</strong>将 (b) 的结果代入 (a)：
            {: .zh }

            \[
            \boxed{a_\alpha=\frac{N(\alpha)}{D'(\alpha)}}.
            \]

2. Décomposer en éléments simples sur \(\mathbb{C}\) la fraction rationnelle
    \(x\mapsto F(x)=\dfrac{x^4}{x^5+1}\).
    {: .fr-exo }

    将有理分式 \(x\mapsto F(x)=\dfrac{x^4}{x^5+1}\) 在 \(\mathbb{C}\) 上分解为部分分式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Les pôles de \(F\) sont les racines cinquièmes de \(-1\) :

        <strong>解答。</strong>\(F\) 的极点是 \(-1\) 的五次方根：
        {: .zh }

        \[
        \alpha_k=e^{\,i(2k+1)\pi/5},\qquad k=0,1,2,3,4.
        \]

        Elles sont simples, car \((X^5+1)'=5X^4\) ne s'annule pas en \(\alpha_k\). D'après la
        question 1.(c), le coefficient de \(\dfrac{1}{x-\alpha_k}\) vaut

        它们都是单极点，因为 \((X^5+1)'=5X^4\) 在 \(\alpha_k\) 处不为零。由第 1.(c) 问，
        \(\dfrac{1}{x-\alpha_k}\) 的系数为
        {: .zh }

        \[
        a_k=\frac{\alpha_k^4}{5\alpha_k^4}=\frac15.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{\frac{x^4}{x^5+1}=\frac15\sum_{k=0}^{4}\frac{1}{x-\alpha_k},
        \qquad \alpha_k=e^{\,i(2k+1)\pi/5}}.
        \]

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">fractions rationnelles　有理分式</p>

Décomposer en éléments simples sur \(\mathbb{R}\) les fractions rationnelles suivantes :
{: .fr-exo }

将下列有理分式在 \(\mathbb{R}\) 上分解为部分分式：
{: .zh }

1. \(x\mapsto F(x)=\dfrac{x+1}{x^3+2x^2}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On écrit \(\dfrac{x+1}{x^3+2x^2}=\dfrac{x+1}{x^2(x+2)}\) : le pôle \(0\)
        est double, le pôle \(-2\) est simple. On cherche

        <strong>解答。</strong>写成 \(\dfrac{x+1}{x^3+2x^2}=\dfrac{x+1}{x^2(x+2)}\)：极点 \(0\) 为二重极点，
        \(-2\) 为单极点。设
        {: .zh }

        \[
        \frac{x+1}{x^2(x+2)}=\frac{a}{x}+\frac{b}{x^2}+\frac{c}{x+2}.
        \]

        En multipliant par \(x^2\) puis en faisant \(x=0\) :

        乘以 \(x^2\) 后令 \(x=0\)：
        {: .zh }

        \[
        b=\left.\frac{x+1}{x+2}\right|_{x=0}=\frac12.
        \]

        En multipliant par \(x+2\) puis en faisant \(x=-2\) :

        乘以 \(x+2\) 后令 \(x=-2\)：
        {: .zh }

        \[
        c=\left.\frac{x+1}{x^2}\right|_{x=-2}=-\frac14.
        \]

        Enfin, \(a\) est la dérivée de \(\dfrac{x+1}{x+2}\) en \(0\) :

        最后，\(a\) 是 \(\dfrac{x+1}{x+2}\) 在 \(0\) 处的导数：
        {: .zh }

        \[
        a=\left.\frac{d}{dx}\left(\frac{x+1}{x+2}\right)\right|_{x=0}
        =\left.\frac{1}{(x+2)^2}\right|_{x=0}=\frac14.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{F(x)=\frac{1}{4x}+\frac{1}{2x^2}-\frac{1}{4(x+2)}}.
        \]

2. \(x\mapsto F(x)=\dfrac{x-1}{x^3(x+1)}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> Le pôle \(0\) est triple, le pôle \(-1\) est simple. On cherche

        <strong>解答。</strong>极点 \(0\) 为三重极点，\(-1\) 为单极点。设
        {: .zh }

        \[
        \frac{x-1}{x^3(x+1)}=\frac{a}{x}+\frac{b}{x^2}+\frac{c}{x^3}+\frac{d}{x+1}.
        \]

        En multipliant par \(x^3\) puis en faisant \(x=0\), et par \(x+1\) puis en faisant \(x=-1\) :

        乘以 \(x^3\) 后令 \(x=0\)，乘以 \(x+1\) 后令 \(x=-1\)：
        {: .zh }

        \[
        c=\left.\frac{x-1}{x+1}\right|_{x=0}=-1,\qquad
        d=\left.\frac{x-1}{x^3}\right|_{x=-1}=2.
        \]

        Pour \(a\) et \(b\), on développe au voisinage de \(0\) :

        求 \(a\)、\(b\) 时在 \(0\) 附近展开：
        {: .zh }

        \[
        \frac{x-1}{x+1}=(x-1)(1-x+x^2+\cdots)=-1+2x-2x^2+\cdots
        \]

        donc, en divisant par \(x^3\),

        因此除以 \(x^3\)，
        {: .zh }

        \[
        \frac{x-1}{x^3(x+1)}=-\frac{1}{x^3}+\frac{2}{x^2}-\frac{2}{x}+\cdots,
        \]

        c'est-à-dire \(b=2\) et \(a=-2\). Finalement

        即 \(b=2\)、\(a=-2\)。最终
        {: .zh }

        \[
        \boxed{F(x)=-\frac{2}{x}+\frac{2}{x^2}-\frac{1}{x^3}+\frac{2}{x+1}}.
        \]

3. \(x\mapsto F(x)=\dfrac{x^2}{(x^4+x^2+1)^2}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On factorise

        <strong>解答。</strong>因式分解
        {: .zh }

        \[
        x^4+x^2+1=(x^2+x+1)(x^2-x+1).
        \]

        La fraction est paire et l'échange \(x\mapsto-x\) échange les deux facteurs quadratiques.
        En regroupant les termes symétriques, on cherche

        该分式为偶函数，而变换 \(x\mapsto-x\) 交换两个二次因式。按对称方式设
        {: .zh }

        \[
        F(x)=\frac{ax+b}{x^2+x+1}+\frac{cx+d}{(x^2+x+1)^2}
        +\frac{-ax+b}{x^2-x+1}+\frac{-cx+d}{(x^2-x+1)^2}.
        \]

        En multipliant par \((x^4+x^2+1)^2\) et en identifiant les coefficients, on obtient

        乘以 \((x^4+x^2+1)^2\) 并比较系数，得到
        {: .zh }

        \[
        a=b=-\frac14,\qquad c=0,\qquad d=\frac14.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{
        \begin{aligned}
        F(x)&=-\frac{x+1}{4(x^2+x+1)}+\frac{1}{4(x^2+x+1)^2}\\[2pt]
        &\qquad+\frac{x-1}{4(x^2-x+1)}+\frac{1}{4(x^2-x+1)^2}.
        \end{aligned}}
        \]

4. \(x\mapsto F(x)=\dfrac{1}{x(x^2+1)^2}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On cherche

        <strong>解答。</strong>设
        {: .zh }

        \[
        \frac{1}{x(x^2+1)^2}=\frac{a}{x}+\frac{bx+c}{x^2+1}+\frac{dx+e}{(x^2+1)^2}.
        \]

        En multipliant par \(x(x^2+1)^2\),

        乘以 \(x(x^2+1)^2\)，
        {: .zh }

        \[
        1=a(x^2+1)^2+(bx+c)x(x^2+1)+(dx+e)x.
        \]

        Par identification,

        比较系数，
        {: .zh }

        \[
        a=1,\qquad b=-1,\qquad c=0,\qquad d=-1,\qquad e=0.
        \]

        D'où

        因此
        {: .zh }

        \[
        \boxed{F(x)=\frac{1}{x}-\frac{x}{x^2+1}-\frac{x}{(x^2+1)^2}}.
        \]

5. \(x\mapsto F(x)=\dfrac{1}{x^{2n}-1}\), \(n\in\mathbb{N}^{*}\)
    {: .fr-exo }

    !!! sol ""

        <strong>Solution.</strong> On factorise sur \(\mathbb{R}\) : les racines de \(X^{2n}-1\) sont les
        \(e^{ij\pi/n}\), \(0\leqslant j\leqslant2n-1\). Les racines réelles sont \(1\) et \(-1\), les
        autres vont par paires conjuguées, d'où

        <strong>解答。</strong>在 \(\mathbb{R}\) 上因式分解：\(X^{2n}-1\) 的根为 \(e^{ij\pi/n}\)，
        \(0\leqslant j\leqslant2n-1\)。实根是 \(1\) 与 \(-1\)，其余成共轭对出现，因此
        {: .zh }

        \[
        x^{2n}-1=(x-1)(x+1)\prod_{j=1}^{n-1}
        \left(x^2-2x\cos\frac{j\pi}{n}+1\right).
        \]

        Tous les pôles sont simples. Pour \(x=1\) et \(x=-1\), avec
        \((X^{2n}-1)'=2nX^{2n-1}\) :

        所有极点都是单极点。对 \(x=1\) 与 \(x=-1\)，利用 \((X^{2n}-1)'=2nX^{2n-1}\)：
        {: .zh }

        \[
        \frac{1}{2n(\pm1)^{2n-1}}=\pm\frac{1}{2n}.
        \]

        Pour le pôle complexe \(\alpha=e^{ij\pi/n}\) (\(1\leqslant j\leqslant n-1\)), de module
        \(1\), la question 6.(c) donne le coefficient

        对复极点 \(\alpha=e^{ij\pi/n}\)（\(1\leqslant j\leqslant n-1\)，模为 \(1\)），由第 6.(c) 问，系数为
        {: .zh }

        \[
        a_j=\frac{1}{2n\,\alpha^{2n-1}}=\frac{\alpha}{2n}
        \qquad\text{car }\alpha^{2n}=1.
        \]

        Les deux pôles conjugués \(\alpha\) et \(\bar\alpha\) donnent donc le terme réel

        共轭极点 \(\alpha\) 与 \(\bar\alpha\) 因此给出实项
        {: .zh }

        \[
        \frac{1}{2n}\left(\frac{\alpha}{x-\alpha}+\frac{\bar\alpha}{x-\bar\alpha}\right)
        =\frac{1}{n}\cdot\frac{x\cos\frac{j\pi}{n}-1}
        {x^2-2x\cos\frac{j\pi}{n}+1}.
        \]

        En sommant,

        求和得
        {: .zh }

        \[
        \boxed{
        \begin{aligned}
        \frac{1}{x^{2n}-1}
        &=\frac{1}{2n}\left(\frac{1}{x-1}-\frac{1}{x+1}\right)\\[2pt]
        &\qquad+\frac{1}{n}\sum_{j=1}^{n-1}
        \frac{x\cos\frac{j\pi}{n}-1}
        {x^2-2x\cos\frac{j\pi}{n}+1}
        \end{aligned}}
        \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>racine simple / racine multiple</strong>：单根 / 重根
    - <strong>sans racine commune</strong>：无公根
    - <strong>polynômes premiers entre eux</strong>：互素多项式
    - <strong>pôle simple</strong>：单极点
    - <strong>coefficient</strong>：系数
    - <strong>racine \(n\)-ième de l'unité</strong>：\(n\) 次单位根
    - <strong>module</strong>：模
    - <strong>conjugué</strong>：共轭
    - <strong>en passant à la limite</strong>：取极限
    - <strong>on obtient</strong>：我们得到
    - <strong>vérifier</strong>：验证
    - <strong>ce qui donne</strong>：这给出
