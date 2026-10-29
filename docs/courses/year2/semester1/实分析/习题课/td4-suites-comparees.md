---
title: TD4 数列比较解答
comments: true
---

# 第 4 次习题课　数列比较

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°4 — Suites comparées</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">课前准备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">polynôme vs exponentielle　多项式与指数式</p>

Soient \(\alpha\in\mathbb{R}\) et \(r>1\). On définit la suite \((u_n)\) par \(\forall n\in\mathbb{N}^*\), \(u_n=\dfrac{n^{\alpha}}{r^{n}}\).
{: .fr-exo }

设 \(\alpha\in\mathbb{R}\)，\(r>1\)。定义数列 \((u_n)\) 为：\(\forall n\in\mathbb{N}^*\)， \(u_n=\dfrac{n^{\alpha}}{r^{n}}\)。
{: .zh }

<strong>1.</strong> Montrer que la suite \(\left(\dfrac{u_{n+1}}{u_n}\right)_{n\in\mathbb{N}^*}\) converge, calculer sa limite.
{: .fr-exo }

<strong>1.</strong> 证明数列 \(\left(\dfrac{u_{n+1}}{u_n}\right)_{n\in\mathbb{N}^*}\) 收敛，并计算其极限。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour tout \(n\in\mathbb{N}^*\),

    <strong>解.</strong> 对任意 \(n\in\mathbb{N}^*\)，
    {: .zh }

    \[
    \frac{u_{n+1}}{u_n}
    =\frac{(n+1)^{\alpha}}{r^{n+1}}\cdot\frac{r^{n}}{n^{\alpha}}
    =\left(1+\frac1n\right)^{\alpha}\frac1r.
    \]

    Or

    而
    {: .zh }

    \[
    \lim_{n\to+\infty}\left(1+\frac1n\right)^{\alpha}=1.
    \]

    Donc

    因此
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\frac{u_{n+1}}{u_n}=\frac1r.}
    \]

<strong>2.</strong> Montrer que pour \(n\) assez grand (c'est-à-dire qu'il existe \(N\in\mathbb{N}\) tel que pour tout \(n\geqslant N\)), on a \(0<\dfrac{u_{n+1}}{u_n}<\dfrac{2}{1+r}<1\).
{: .fr-exo }

<strong>2.</strong> 证明当 \(n\) 充分大时（即存在 \(N\in\mathbb{N}\)，使得对任意 \(n\geqslant N\)），有 \(0<\dfrac{u_{n+1}}{u_n}<\dfrac{2}{1+r}<1\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Comme \(r>1\), on a

    <strong>解.</strong> 由于 \(r>1\)，有
    {: .zh }

    \[
    \frac1r<\frac{2}{1+r}.
    \]

    En effet, cette inégalité équivaut à \(1+r<2r\), c'est-à-dire à \(1<r\).

    事实上，该不等式等价于 \(1+r<2r\)，即 \(1<r\)。
    {: .zh }

    D'après la question précédente,

    由上一问，
    {: .zh }

    \[
    \frac{u_{n+1}}{u_n}\xrightarrow[n\to\infty]{}\frac1r.
    \]

    En choisissant

    取
    {: .zh }

    \[
    \varepsilon=\frac{2}{1+r}-\frac1r>0,
    \]

    il existe \(N\in\mathbb{N}\) tel que, pour tout \(n\geqslant N\),

    存在 \(N\in\mathbb{N}\)，使得对任意 \(n\geqslant N\)，
    {: .zh }

    \[
    \left|\frac{u_{n+1}}{u_n}-\frac1r\right|<\varepsilon.
    \]

    En particulier,

    特别地，
    {: .zh }

    \[
    \frac{u_{n+1}}{u_n}<\frac1r+\varepsilon=\frac{2}{1+r}.
    \]

    De plus, \(u_n>0\) pour tout \(n\geqslant1\), donc

    此外，对任意 \(n\geqslant1\) 有 \(u_n>0\)，因此
    {: .zh }

    \[
    \boxed{0<\frac{u_{n+1}}{u_n}<\frac{2}{1+r}<1\qquad\text{pour tout }n\geqslant N.}
    \]

<strong>3.</strong> En déduire que la suite \((u_n)\) converge et que sa limite est \(0\).
{: .fr-exo }

<strong>3.</strong> 由此推出数列 \((u_n)\) 收敛且其极限为 \(0\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Posons

    <strong>解.</strong> 令
    {: .zh }

    \[
    q=\frac{2}{1+r}\in\,]0,1[.
    \]

    D'après la question précédente, il existe \(N\in\mathbb{N}\) tel que, pour tout \(n\geqslant N\),

    由上一问，存在 \(N\in\mathbb{N}\)，使得对任意 \(n\geqslant N\)，
    {: .zh }

    \[
    0<\frac{u_{n+1}}{u_n}<q.
    \]

    Ainsi, pour tout \(n\geqslant N\),

    于是对任意 \(n\geqslant N\)，
    {: .zh }

    \[
    0<u_n\leqslant u_N\,q^{\,n-N}.
    \]

    Comme \(0<q<1\), on a

    由于 \(0<q<1\)，有
    {: .zh }

    \[
    u_N\,q^{\,n-N}\xrightarrow[n\to\infty]{}0.
    \]

    Par encadrement,

    由夹逼定理，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=0.}
    \]

    <p class="cqfd">∎</p>

<strong>4.</strong> Soit \(p\) une fonction polynomiale. Montrer que la suite \(\left(\dfrac{p(n)}{r^{n}}\right)_{n\in\mathbb{N}}\) tend vers \(0\) quand \(n\) tend vers l'infini.
{: .fr-exo }

<strong>4.</strong> 设 \(p\) 为多项式函数。证明数列 \(\left(\dfrac{p(n)}{r^{n}}\right)_{n\in\mathbb{N}}\) 当 \(n\) 趋于无穷时趋于 \(0\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> La fonction polynomiale \(p\) s'écrit, \(\forall n\in\mathbb{N}\),

    <strong>解.</strong> 多项式函数 \(p\) 可写成：\(\forall n\in\mathbb{N}\)，
    {: .zh }

    \[
    p(n)=\sum_{k=0}^{d}a_k n^{k}
    \]

    où \(d\in\mathbb{N}\) et \(\forall k\in[\![0,d]\!]\), \(a_k\in\mathbb{R}\).

    其中 \(d\in\mathbb{N}\)，且 \(\forall k\in[\![0,d]\!]\)，\(a_k\in\mathbb{R}\)。
    {: .zh }

    D'après la question précédente appliquée avec \(\alpha=k\), on a pour tout \(k\in[\![0,d]\!]\)

    对上一问取 \(\alpha=k\)，可得对任意 \(k\in[\![0,d]\!]\)，
    {: .zh }

    \[
    \frac{n^{k}}{r^{n}}\xrightarrow[n\to\infty]{}0.
    \]

    La suite \(\left(\dfrac{p(n)}{r^{n}}\right)_{n\in\mathbb{N}}\) est une somme finie de suites tendant vers \(0\), d'où

    数列 \(\left(\dfrac{p(n)}{r^{n}}\right)_{n\in\mathbb{N}}\) 是有限个趋于 \(0\) 的数列之和，因此
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\frac{p(n)}{r^{n}}=0.}
    \]

    <p class="cqfd">∎</p>

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">les limites en pratique　极限的实用计算</p>

Déterminer les limites éventuelles des suites \((u_n)\), de terme général \(u_n\), données par :
{: .fr-exo }

求下列由通项 \(u_n\) 给出的数列 \((u_n)\) 的极限（若存在）：
{: .zh }

<strong>1.</strong> \(u_n=\sqrt{n^2+n+1}-\sqrt{n^2-n+1}\)
{: .fr-exo }

<strong>1.</strong> \(u_n=\sqrt{n^2+n+1}-\sqrt{n^2-n+1}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Soit \(n\in\mathbb{N}^*\). On multiplie par la <strong>quantité conjuguée</strong> :

    <strong>解.</strong> 设 \(n\in\mathbb{N}^*\)。乘以<strong>共轭量</strong>（quantité conjuguée）作有理化：
    {: .zh }

    \[
    u_n=\frac{(n^2+n+1)-(n^2-n+1)}{\sqrt{n^2+n+1}+\sqrt{n^2-n+1}}
    =\frac{2n}{\sqrt{n^2+n+1}+\sqrt{n^2-n+1}}.
    \]

    En divisant numérateur et dénominateur par \(n\) il vient

    分子分母同除以 \(n\)，得
    {: .zh }

    \[
    u_n=\frac{2}{\sqrt{1+\frac1n+\frac1{n^2}}+\sqrt{1-\frac1n+\frac1{n^2}}}.
    \]

    Donc

    因此
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=1.}
    \]

<strong>2.</strong> \(u_n=\dfrac{n-\sqrt{n^2+1}}{n-\sqrt{n^2-1}}\)
{: .fr-exo }

<strong>2.</strong> \(u_n=\dfrac{n-\sqrt{n^2+1}}{n-\sqrt{n^2-1}}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Soit \(n\in\mathbb{N}^*\). On a

    <strong>解.</strong> 设 \(n\in\mathbb{N}^*\)。有
    {: .zh }

    \[
    \begin{aligned}
    u_n&=\frac{n-\sqrt{n^2+1}}{n-\sqrt{n^2-1}}\\
    &=\frac{n^2-(n^2+1)}{n^2-(n^2-1)}\times\frac{n+\sqrt{n^2-1}}{n+\sqrt{n^2+1}}\\
    &=-\,\frac{n+\sqrt{n^2-1}}{n+\sqrt{n^2+1}}
    =-\,\frac{1+\sqrt{1-\frac1{n^2}}}{1+\sqrt{1+\frac1{n^2}}}.
    \end{aligned}
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=-1.}
    \]

<strong>3.</strong> \(u_n=\sum\limits_{k=1}^{n}\dfrac{n}{n^2+k}\)
{: .fr-exo }

<strong>3.</strong> \(u_n=\sum\limits_{k=1}^{n}\dfrac{n}{n^2+k}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour \(1\leqslant k\leqslant n\), on a

    <strong>解.</strong> 对 \(1\leqslant k\leqslant n\)，有
    {: .zh }

    \[
    n^2\leqslant n^2+k\leqslant n^2+n.
    \]

    Donc

    因此
    {: .zh }

    \[
    \frac{n}{n^2+n}\leqslant\frac{n}{n^2+k}\leqslant\frac{n}{n^2}.
    \]

    En sommant pour \(k=1,\dots,n\), on obtient

    对 \(k=1,\dots,n\) 求和，得
    {: .zh }

    \[
    n\frac{1}{n+1}\leqslant u_n\leqslant n\frac1n=1.
    \]

    Or

    而
    {: .zh }

    \[
    \frac{n}{n+1}\xrightarrow[n\to\infty]{}1.
    \]

    Par encadrement,

    由夹逼定理，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=1.}
    \]

<strong>4.</strong> \(u_n=\left(\sin\dfrac1n\right)^{\frac{1}{\ln n}}\)
{: .fr-exo }

<strong>4.</strong> \(u_n=\left(\sin\dfrac1n\right)^{\frac{1}{\ln n}}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> La suite est définie pour \(n\geqslant2\). On a alors

    <strong>解.</strong> 该数列在 \(n\geqslant2\) 时有定义。此时
    {: .zh }

    \[
    \ln u_n=\frac{1}{\ln n}\ln\left(\sin\frac1n\right).
    \]

    Par ailleurs, on montre que \(\forall x\geqslant0\), \(x-\dfrac{x^3}{6}\leqslant\sin x\leqslant x\).

    另外，我们证明 \(\forall x\geqslant0\)， \(x-\dfrac{x^3}{6}\leqslant\sin x\leqslant x\)。
    {: .zh }

    On considère la fonction \(f:x\mapsto x-\sin x\). Elle est dérivable et pour \(x\geqslant0\)

    考虑函数 \(f:x\mapsto x-\sin x\)。它可导，且对 \(x\geqslant0\)，
    {: .zh }

    \[
    f'(x)=1-\cos x\geqslant0.
    \]

    La fonction \(f\) est croissante sur \(\mathbb{R}_+\) donc pour tout \(x\geqslant0\), \(f(x)\geqslant f(0)=0\).

    函数 \(f\) 在 \(\mathbb{R}_+\) 上递增，故对任意 \(x\geqslant0\)， \(f(x)\geqslant f(0)=0\)。
    {: .zh }

    On considère maintenant la fonction \(g:x\mapsto x-\dfrac{x^3}{6}-\sin x\). Elle est deux fois dérivable et pour \(x\geqslant0\)

    再考虑函数 \(g:x\mapsto x-\dfrac{x^3}{6}-\sin x\)。它二阶可导，且对 \(x\geqslant0\)，
    {: .zh }

    \[
    \begin{aligned}
    g'(x)&=1-\frac{x^2}{2}-\cos x\\
    g''(x)&=-x+\sin x=-f(x)\leqslant0.
    \end{aligned}
    \]

    Comme \(g'(0)=0\) et \(g'\) est décroissante sur \(\mathbb{R}_+\), on a pour tout \(x\geqslant0\), \(g'(x)\leqslant0\). Comme de plus \(g(0)=0\) et \(g\) est décroissante sur \(\mathbb{R}_+\), on a pour tout \(x\geqslant0\), \(g(x)\leqslant0\).

    由于 \(g'(0)=0\) 且 \(g'\) 在 \(\mathbb{R}_+\) 上递减，故对任意 \(x\geqslant0\)， \(g'(x)\leqslant0\)。又 \(g(0)=0\) 且 \(g\) 在 \(\mathbb{R}_+\) 上递减，故对任意 \(x\geqslant0\)，\(g(x)\leqslant0\)。
    {: .zh }

    D'où l'encadrement \(\forall x\geqslant0\), \(x-\dfrac{x^3}{6}\leqslant\sin x\leqslant x\).

    由此得夹逼不等式 \(\forall x\geqslant0\)， \(x-\dfrac{x^3}{6}\leqslant\sin x\leqslant x\)。
    {: .zh }

    Pour \(x=1/n\) avec \(n\geqslant2\), on a donc

    取 \(x=1/n\)（\(n\geqslant2\)），于是
    {: .zh }

    \[
    \begin{aligned}
    \frac1n-\frac1{6n^3}&\leqslant\sin\frac1n\leqslant\frac1n\\
    \ln\left(\frac1n-\frac1{6n^3}\right)&\leqslant\ln\left(\sin\frac1n\right)\leqslant\ln\left(\frac1n\right)\\
    \ln\left(\frac1n\right)+\ln\left(1-\frac1{6n^2}\right)&\leqslant\ln\left(\sin\frac1n\right)\leqslant\ln\left(\frac1n\right)\\
    \frac1{\ln n}\left(-\ln n+\ln\left(1-\frac1{6n^2}\right)\right)&\leqslant\frac1{\ln n}\ln\left(\sin\frac1n\right)\leqslant\frac{-\ln n}{\ln n}=-1.
    \end{aligned}
    \]

    On a

    又有
    {: .zh }

    \[
    \frac1{\ln n}\left(-\ln n+\ln\left(1-\frac1{6n^2}\right)\right)\xrightarrow[n\to\infty]{}-1.
    \]

    Donc par le <strong>théorème de convergence par encadrement</strong> on a

    因此由<strong>夹逼收敛定理</strong>（théorème de convergence par encadrement），
    {: .zh }

    \[
    \lim_{n\to+\infty}\ln u_n=-1.
    \]

    Par continuité de l'exponentielle,

    由指数函数的连续性，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=e^{-1}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">exponentielle comme limite　指数函数作为极限</p>

<strong>1.</strong> Soit \(x\in\mathbb{R}\). On veut démontrer que \(\lim\limits_{n\to+\infty}\left(1+\dfrac{x}{n}\right)^{n}=e^{x}\).
{: .fr-exo }

<strong>1.</strong> 设 \(x\in\mathbb{R}\)。我们要证明 \(\lim\limits_{n\to+\infty}\left(1+\dfrac{x}{n}\right)^{n}=e^{x}\)。
{: .zh }

<strong>(a)</strong> En étudiant la fonction \(f:t\mapsto t-\ln(1+t)\), montrer que
{: .fr-exo }

（a）通过研究函数 \(f:t\mapsto t-\ln(1+t)\)，证明
{: .zh }

\[
\forall t\in\,]-1,+\infty[,\qquad \ln(1+t)\leqslant t.
\]

!!! sol ""

    <strong>Solution.</strong> La fonction \(f:t\mapsto t-\ln(1+t)\) est définie et dérivable sur \(]-1,+\infty[\), et

    <strong>解.</strong> 函数 \(f:t\mapsto t-\ln(1+t)\) 在 \(]-1,+\infty[\) 上有定义且可导，且
    {: .zh }

    \[
    f'(t)=1-\frac{1}{1+t}=\frac{t}{1+t}.
    \]

    On a donc le <strong>tableau de variation</strong> :

    于是得<strong>单调性表</strong>（tableau de variation）：
    {: .zh }

    \[
    \begin{array}{c||ccccc}
    t & -1 & & 0 & & +\infty\\ \hline
    f'(t) & & - & 0 & + & \\ \hline
    f(t) & +\infty & \searrow & 0 & \nearrow & +\infty
    \end{array}
    \]

    Par conséquent, pour tout \(t\in\,]-1,+\infty[\),

    因此，对任意 \(t\in\,]-1,+\infty[\)，
    {: .zh }

    \[
    f(t)\geqslant0,
    \]

    c'est-à-dire

    即
    {: .zh }

    \[
    \boxed{\forall t\in\,]-1,+\infty[,\qquad \ln(1+t)\leqslant t.}
    \]

<strong>(b)</strong> En étudiant la fonction \(g:t\mapsto\ln(1+t)-t+t^2\), montrer que
{: .fr-exo }

（b）通过研究函数 \(g:t\mapsto\ln(1+t)-t+t^2\)，证明
{: .zh }

\[
\forall t\in\,\left]-\frac12,+\infty\right[,\qquad \ln(1+t)\geqslant t-t^2.
\]

!!! sol ""

    <strong>Solution.</strong> La fonction \(g:t\mapsto\ln(1+t)-t+t^2\) est définie et dérivable sur \(]-1,+\infty[\), et

    <strong>解.</strong> 函数 \(g:t\mapsto\ln(1+t)-t+t^2\) 在 \(]-1,+\infty[\) 上有定义且可导，且
    {: .zh }

    \[
    g'(t)=\frac{1}{1+t}-1+2t=\frac{t(1+2t)}{1+t}.
    \]

    On a donc le tableau de variation :

    于是得单调性表：
    {: .zh }

    \[
    \begin{array}{c||ccccc}
    t & -1/2 & & 0 & & +\infty\\ \hline
    g'(t) & 0 & - & 0 & + & \\ \hline
    g(t) & g(-1/2) & \searrow & 0 & \nearrow & +\infty
    \end{array}
    \]

    Par conséquent, pour tout \(t\in\,\left]-\frac12,+\infty\right[\),

    因此，对任意 \(t\in\,\left]-\frac12,+\infty\right[\)，
    {: .zh }

    \[
    g(t)\geqslant0,
    \]

    c'est-à-dire

    即
    {: .zh }

    \[
    \boxed{\forall t\in\,\left]-\frac12,+\infty\right[,\qquad \ln(1+t)\geqslant t-t^2.}
    \]

<strong>(c)</strong> En utilisant l'encadrement \(\forall t\in\,\left]-\frac12,+\infty\right[\), \(t-t^2\leqslant\ln(1+t)\leqslant t\), montrer que \(\left(\left(1+\dfrac{x}{n}\right)^{n}\right)\) converge et que sa limite est \(e^{x}\).
{: .fr-exo }

（c）利用不等式 \(\forall t\in\,\left]-\frac12,+\infty\right[\)， \(t-t^2\leqslant\ln(1+t)\leqslant t\)，证明 \(\left(\left(1+\dfrac{x}{n}\right)^{n}\right)\) 收敛且其极限为 \(e^{x}\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Soit \(x\in\mathbb{R}\). Pour \(n\) assez grand, on a

    <strong>解.</strong> 设 \(x\in\mathbb{R}\)。当 \(n\) 充分大时，有
    {: .zh }

    \[
    \frac{x}{n}\in\,\left]-\frac12,+\infty\right[.
    \]

    En appliquant l'encadrement avec \(t=\dfrac{x}{n}\), on obtient

    取 \(t=\dfrac{x}{n}\) 应用该不等式，得
    {: .zh }

    \[
    \frac{x}{n}-\frac{x^2}{n^2}\leqslant\ln\left(1+\frac{x}{n}\right)\leqslant\frac{x}{n}.
    \]

    \[
    x-\frac{x^2}{n}\leqslant n\ln\left(1+\frac{x}{n}\right)\leqslant x.
    \]

    Par encadrement on obtient

    由夹逼定理得
    {: .zh }

    \[
    \lim_{n\to+\infty}n\ln\left(1+\frac{x}{n}\right)=x
    \]

    et par continuité de \(x\mapsto e^{x}\),

    再由 \(x\mapsto e^{x}\) 的连续性，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\left(1+\frac{x}{n}\right)^{n}=e^{x}.}
    \]

    <p class="cqfd">∎</p>

<strong>2.</strong> Calculer les limites suivantes
{: .fr-exo }

<strong>2.</strong> 计算下列极限
{: .zh }

<strong>(a)</strong> \(\lim\limits_{n\to+\infty} \left(\dfrac{n-1}{n+1}\right)^{n}\)
{: .fr-exo }

（a）\(\lim\limits_{n\to+\infty} \left(\dfrac{n-1}{n+1}\right)^{n}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On écrit pour \(n\in\mathbb{N}^*\)

    <strong>解.</strong> 对 \(n\in\mathbb{N}^*\)，写出
    {: .zh }

    \[
    \frac{n-1}{n+1}=\frac{1-\frac1n}{1+\frac1n}.
    \]

    Donc

    因此
    {: .zh }

    \[
    \left(\frac{n-1}{n+1}\right)^{n}=\frac{\left(1-\frac1n\right)^{n}}{\left(1+\frac1n\right)^{n}}.
    \]

    D'après le résultat de la question précédente,

    由上一问的结果，
    {: .zh }

    \[
    \left(1-\frac1n\right)^{n}\xrightarrow[n\to\infty]{}e^{-1},
    \qquad
    \left(1+\frac1n\right)^{n}\xrightarrow[n\to\infty]{}e.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\left(\frac{n-1}{n+1}\right)^{n}=e^{-2}.}
    \]

<strong>(b)</strong> \(\lim\limits_{n\to+\infty} \left(\dfrac{n}{n-x}\right)^{n}\) où \(x\in\mathbb{R}\)
{: .fr-exo }

（b）\(\lim\limits_{n\to+\infty} \left(\dfrac{n}{n-x}\right)^{n}\)，其中 \(x\in\mathbb{R}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On écrit pour \(n\in\mathbb{N}^*\) tel que \(n>x\),

    <strong>解.</strong> 对满足 \(n>x\) 的 \(n\in\mathbb{N}^*\)，写出
    {: .zh }

    \[
    \frac{n}{n-x}=\frac{1}{1-\frac{x}{n}}.
    \]

    Donc

    因此
    {: .zh }

    \[
    \left(\frac{n}{n-x}\right)^{n}=\left(1-\frac{x}{n}\right)^{-n}.
    \]

    Or

    而
    {: .zh }

    \[
    \left(1-\frac{x}{n}\right)^{n}\xrightarrow[n\to\infty]{}e^{-x}.
    \]

    Par conséquent,

    从而
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\left(\frac{n}{n-x}\right)^{n}=e^{x}.}
    \]

<strong>(c)</strong> \(\lim\limits_{n\to+\infty} \left(\dfrac{n^2+5n+4}{n^2-3n+7}\right)^{n}\)
{: .fr-exo }

（c）\(\lim\limits_{n\to+\infty} \left(\dfrac{n^2+5n+4}{n^2-3n+7}\right)^{n}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On écrit pour \(n\in\mathbb{N}\)

    <strong>解.</strong> 对 \(n\in\mathbb{N}\)，写出
    {: .zh }

    \[
    \frac{n^2+5n+4}{n^2-3n+7}
    =\frac{n^2-3n+7+8n-3}{n^2-3n+7}
    =1+\frac{8n-3}{n^2-3n+7}.
    \]

    Donc

    因此
    {: .zh }

    \[
    \begin{aligned}
    \ln\left(\frac{n^2+5n+4}{n^2-3n+7}\right)^{n}
    &=n\ln\left(1+\frac{8n-3}{n^2-3n+7}\right)\\
    &=\left(n\frac{8n-3}{n^2-3n+7}\right)
    \left(\frac{n^2-3n+7}{8n-3}\ln\left(1+\frac{8n-3}{n^2-3n+7}\right)\right)
    \xrightarrow[n\to\infty]{}8
    \end{aligned}
    \]

    car

    因为
    {: .zh }

    \[
    \lim_{n\to+\infty}\frac{8n^2-3n}{n^2-3n+7}=8
    \]

    et pour \(t=\dfrac{8n-3}{n^2-3n+7}\xrightarrow[n\to\infty]{}0\) on a

    且当 \(t=\dfrac{8n-3}{n^2-3n+7}\xrightarrow[n\to\infty]{}0\) 时，
    {: .zh }

    \[
    \lim_{t\to0}\frac{\ln(1+t)}{t}=1.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\left(\frac{n^2+5n+4}{n^2-3n+7}\right)^{n}=e^{8}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">somme des \(1/k\)　\(1/k\) 之和</p>

Soient \((S_n)\) et \((S'_n)\) les suites de termes généraux \(S_n=\sum_{k=n+1}^{2n}\frac1k\) et \(S'_n=\sum_{k=n}^{2n}\frac1k\).
{: .fr-exo }

设 \((S_n)\) 与 \((S'_n)\) 为通项分别为 \(S_n=\sum_{k=n+1}^{2n}\frac1k\) 与 \(S'_n=\sum_{k=n}^{2n}\frac1k\) 的数列。
{: .zh }

<strong>1.</strong> Montrer que les suites \((S_n)\) et \((S'_n)\) sont adjacentes.
{: .fr-exo }

<strong>1.</strong> 证明数列 \((S_n)\) 与 \((S'_n)\) 为<strong>相邻数列</strong>（suites adjacentes）。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On a

    <strong>解.</strong> 有
    {: .zh }

    \[
    S'_n-S_n=\sum_{k=n}^{2n}\frac1k-\sum_{k=n+1}^{2n}\frac1k=\frac1n.
    \]

    Donc

    因此
    {: .zh }

    \[
    S'_n-S_n=\frac1n\xrightarrow[n\to\infty]{}0.
    \]

    Montrons que \((S_n)\) est croissante. Pour tout \(n\geqslant1\),

    证明 \((S_n)\) 递增。对任意 \(n\geqslant1\)，
    {: .zh }

    \[
    \begin{aligned}
    S_{n+1}-S_n
    &=\sum_{k=n+2}^{2n+2}\frac1k-\sum_{k=n+1}^{2n}\frac1k\\
    &=\frac1{2n+1}+\frac1{2n+2}-\frac1{n+1}\\
    &=\frac1{2n+1}-\frac1{2(n+1)}\\
    &=\frac1{2(n+1)(2n+1)}>0.
    \end{aligned}
    \]

    Donc \((S_n)\) est croissante.

    故 \((S_n)\) 递增。
    {: .zh }

    Montrons que \((S'_n)\) est décroissante. Pour tout \(n\geqslant1\),

    证明 \((S'_n)\) 递减。对任意 \(n\geqslant1\)，
    {: .zh }

    \[
    \begin{aligned}
    S'_{n+1}-S'_n
    &=\sum_{k=n+1}^{2n+2}\frac1k-\sum_{k=n}^{2n}\frac1k\\
    &=\frac1{2n+1}+\frac1{2n+2}-\frac1n\\
    &=-\frac{3n+2}{n(2n+1)(2n+2)}<0.
    \end{aligned}
    \]

    Donc \((S'_n)\) est décroissante. Les suites \((S_n)\) et \((S'_n)\) sont donc adjacentes.

    故 \((S'_n)\) 递减。因此数列 \((S_n)\) 与 \((S'_n)\) 为相邻数列。
    {: .zh }

    <p class="cqfd">∎</p>

<strong>2.</strong> Montrer que \(\forall n\in\mathbb{N}^*\), \(S_n\geqslant\dfrac12\)
{: .fr-exo }

<strong>2.</strong> 证明 \(\forall n\in\mathbb{N}^*\)，\(S_n\geqslant\dfrac12\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour \(k=n+1,\dots,2n\), on a \(k\leqslant2n\), donc

    <strong>解.</strong> 对 \(k=n+1,\dots,2n\)，有 \(k\leqslant2n\)，故
    {: .zh }

    \[
    \frac1k\geqslant\frac1{2n}.
    \]

    En sommant ces \(n\) inégalités,

    对这 \(n\) 个不等式求和，
    {: .zh }

    \[
    S_n=\sum_{k=n+1}^{2n}\frac1k\geqslant n\cdot\frac1{2n}=\frac12.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    \boxed{\forall n\in\mathbb{N}^*,\qquad S_n\geqslant\frac12.}
    \]

<strong>3.</strong> Que peut-on en conclure concernant la suite \((S''_n)\) de terme général \(S''_n=\sum_{k=1}^{n}\frac1k\) ?
{: .fr-exo }

<strong>3.</strong> 关于通项为 \(S''_n=\sum_{k=1}^{n}\frac1k\) 的数列 \((S''_n)\)，能得出什么结论？
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On remarque que

    <strong>解.</strong> 注意到
    {: .zh }

    \[
    S_n=S''_{2n}-S''_n.
    \]

    Comme \((S_n)\) est croissante et vérifie \(S_n\geqslant\frac12\) pour tout \(n\geqslant1\), sa limite \(L\) vérifie

    由于 \((S_n)\) 递增且对任意 \(n\geqslant1\) 有 \(S_n\geqslant\frac12\)，其极限 \(L\) 满足
    {: .zh }

    \[
    L\geqslant\frac12.
    \]

    Si la suite \((S''_n)\) convergeait vers un réel fini, on aurait

    若数列 \((S''_n)\) 收敛于某个有限实数，则应有
    {: .zh }

    \[
    S''_{2n}-S''_n\xrightarrow[n\to\infty]{}0,
    \]

    ce qui contredirait \(S_n\geqslant\frac12\). Donc \((S''_n)\) ne converge pas. Comme elle est croissante, elle diverge vers \(+\infty\). On conclut que

    这与 \(S_n\geqslant\frac12\) 矛盾。因此 \((S''_n)\) 不收敛。又因其递增，故发散到 \(+\infty\)。我们得出
    {: .zh }

    \[
    \boxed{\sum_{k=1}^{n}\frac1k\xrightarrow[n\to\infty]{}+\infty.}
    \]

    La <strong>série harmonique</strong> diverge.

    <strong>调和级数</strong>（série harmonique）发散。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第一部分（Exercices à préparer）核心术语</span>"

    - <strong>suites comparées</strong>：数列比较
    - <strong>polynôme vs exponentielle</strong>：多项式与指数式
    - <strong>quantité conjuguée</strong>：共轭量（有理化用）
    - <strong>théorème de convergence par encadrement</strong>：夹逼收敛定理
    - <strong>par encadrement</strong>：由夹逼
    - <strong>suite croissante / décroissante</strong>：递增 / 递减数列
    - <strong>suite adjacente</strong>：相邻数列
    - <strong>série harmonique</strong>：调和级数
    - <strong>tableau de variation</strong>：单调性表
    - <strong>dérivable</strong>：可导的
    - <strong>par continuité de l'exponentielle</strong>：由指数函数的连续性
    - <strong>au voisinage de</strong>：在……附近

    - <strong>on distingue les cas</strong>：分类讨论
    - <strong>en résumé</strong>：总之
    - <strong>ce qui contredit</strong>：这与……矛盾
    - <strong>diverge vers \(+\infty\)</strong>：发散到 \(+\infty\)
    - <strong>somme finie</strong>：有限和
    - <strong>tendre vers \(0\)</strong>：趋于 \(0\)
    - <strong>on écrit</strong>：我们写出
    - <strong>or / donc / ainsi</strong>：而 / 因此 / 于是
    - <strong>par conséquent</strong>：从而
    - <strong>on conclut que</strong>：我们得出
    - <strong>montrer que</strong>：证明
    - <strong>en déduire</strong>：由此推出

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">suites pour logarithme　取对数的数列</p>

Déterminer les limites des suites suivantes :
{: .fr-exo }

求下列数列的极限：
{: .zh }

<strong>1.</strong> \(u_n=\dfrac{n^{n}}{2^{n^2}}\)
{: .fr-exo }

<strong>1.</strong> \(u_n=\dfrac{n^{n}}{2^{n^2}}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On écrit

    <strong>解.</strong> 写出
    {: .zh }

    \[
    u_n=\frac{n^{n}}{(2^{n})^{n}}=\left(\frac{n}{2^{n}}\right)^{n}.
    \]

    Pour tout \(n\geqslant1\), on a \(2^{n}\geqslant2n\), donc

    对任意 \(n\geqslant1\)，有 \(2^{n}\geqslant2n\)，故
    {: .zh }

    \[
    0\leqslant\frac{n}{2^{n}}\leqslant\frac12.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    0\leqslant u_n\leqslant\left(\frac12\right)^{n}.
    \]

    Par encadrement,

    由夹逼定理，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=0.}
    \]

<strong>2.</strong> \(u_n=\dfrac{(\ln n)^{n^2}}{\left(\sqrt{n}\right)^{n}}\)
{: .fr-exo }

<strong>2.</strong> \(u_n=\dfrac{(\ln n)^{n^2}}{\left(\sqrt{n}\right)^{n}}\)
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour \(n\geqslant3\), on écrit

    <strong>解.</strong> 对 \(n\geqslant3\)，写出
    {: .zh }

    \[
    u_n=\exp\left(n^2\ln(\ln n)-\frac{n}{2}\ln n\right)
    =\exp\left(n^2\left(\ln(\ln n)-\frac{\ln n}{2n}\right)\right).
    \]

    Or

    而
    {: .zh }

    \[
    \ln(\ln n)\xrightarrow[n\to\infty]{}+\infty,
    \qquad
    \frac{\ln n}{2n}\xrightarrow[n\to\infty]{}0.
    \]

    Donc

    因此
    {: .zh }

    \[
    \ln(\ln n)-\frac{\ln n}{2n}\xrightarrow[n\to\infty]{}+\infty,
    \]

    et par conséquent

    从而
    {: .zh }

    \[
    n^2\left(\ln(\ln n)-\frac{\ln n}{2n}\right)\xrightarrow[n\to\infty]{}+\infty.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=+\infty.}
    \]

<strong>3.</strong> \(u_n=\dfrac{a^{b^{n}}}{b^{a^{n}}}\) où \(0<a<b\) (on discutera selon les positions de \(a\) et \(b\) par rapport à \(1\)).
{: .fr-exo }

<strong>3.</strong> \(u_n=\dfrac{a^{b^{n}}}{b^{a^{n}}}\)，其中 \(0<a<b\) （按 \(a\)、\(b\) 相对于 \(1\) 的位置分类讨论）。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On écrit

    <strong>解.</strong> 写出
    {: .zh }

    \[
    u_n=\exp\left(b^{n}\ln a-a^{n}\ln b\right).
    \]

    On distingue les cas suivants.

    分以下几种情形讨论。
    {: .zh }

    — Si \(0<b<1\), alors \(0<a<b<1\). Donc \(\ln a<0\) et \(\ln b<0\), tandis que \(a^{n}\to0\) et \(b^{n}\to0\). Ainsi

    — 若 \(0<b<1\)，则 \(0<a<b<1\)。故 \(\ln a<0\) 且 \(\ln b<0\)，而 \(a^{n}\to0\)、 \(b^{n}\to0\)。于是
    {: .zh }

    \[
    b^{n}\ln a-a^{n}\ln b\xrightarrow[n\to\infty]{}0.
    \]

    Donc

    因此
    {: .zh }

    \[
    u_n\xrightarrow[n\to\infty]{}e^{0}=1.
    \]

    — Si \(a>1\), alors \(1<a<b\). Donc \(\ln a>0\) et \(\ln b>0\). On écrit

    — 若 \(a>1\)，则 \(1<a<b\)。故 \(\ln a>0\) 且 \(\ln b>0\)。写出
    {: .zh }

    \[
    b^{n}\ln a-a^{n}\ln b=b^{n}\left(\ln a-\left(\frac{a}{b}\right)^{n}\ln b\right).
    \]

    Comme \(0<\dfrac{a}{b}<1\), on a \(\left(\dfrac{a}{b}\right)^{n}\to0\), donc

    由于 \(0<\dfrac{a}{b}<1\)，有 \(\left(\dfrac{a}{b}\right)^{n}\to0\)，故
    {: .zh }

    \[
    \ln a-\left(\frac{a}{b}\right)^{n}\ln b\xrightarrow[n\to\infty]{}\ln a>0.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    b^{n}\ln a-a^{n}\ln b\xrightarrow[n\to\infty]{}+\infty,
    \]

    et

    且
    {: .zh }

    \[
    u_n\xrightarrow[n\to\infty]{}+\infty.
    \]

    — Si \(0<a<1<b\), alors \(\ln a<0\) et \(\ln b>0\). Donc

    — 若 \(0<a<1<b\)，则 \(\ln a<0\) 且 \(\ln b>0\)。故
    {: .zh }

    \[
    b^{n}\ln a\xrightarrow[n\to\infty]{}-\infty,
    \qquad
    a^{n}\ln b\xrightarrow[n\to\infty]{}0.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    b^{n}\ln a-a^{n}\ln b\xrightarrow[n\to\infty]{}-\infty,
    \]

    et

    且
    {: .zh }

    \[
    u_n\xrightarrow[n\to\infty]{}0.
    \]

    — Si \(a=1\), alors \(b>1\) et

    — 若 \(a=1\)，则 \(b>1\)，且
    {: .zh }

    \[
    u_n=\frac{1^{b^{n}}}{b^{1^{n}}}=\frac1b.
    \]

    Donc

    因此
    {: .zh }

    \[
    u_n\xrightarrow[n\to\infty]{}\frac1b.
    \]

    — Si \(b=1\), alors \(0<a<1\) et

    — 若 \(b=1\)，则 \(0<a<1\)，且
    {: .zh }

    \[
    u_n=\frac{a^{1}}{1^{a^{n}}}=a.
    \]

    Donc

    因此
    {: .zh }

    \[
    u_n\xrightarrow[n\to\infty]{}a.
    \]

    En résumé :

    总之：
    {: .zh }

    \[
    \boxed{
    \begin{cases}
    u_n\to1, & \text{si }0<a<b<1,\\
    u_n\to+\infty, & \text{si }1<a<b,\\
    u_n\to0, & \text{si }0<a<1<b,\\
    u_n\to\dfrac1b, & \text{si }a=1,\\
    u_n\to a, & \text{si }b=1.
    \end{cases}}
    \]

    <p class="cqfd">∎</p>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">moyenne arithmético-géométrique　算术–几何平均</p>

Soit \(0<a<b\) et \(u_0=a\), \(v_0=b\) et
{: .fr-exo }

设 \(0<a<b\)，\(u_0=a\)，\(v_0=b\)，且
{: .zh }

\[
\forall n\in\mathbb{N},\qquad
\begin{cases}
u_{n+1}=\dfrac{u_n+v_n}{2}\\[8pt]
v_{n+1}=\sqrt{u_{n+1}v_n}
\end{cases}
\]

<strong>1.</strong> Montrer que \((u_n)\) et \((v_n)\) convergent vers une limite commune.
{: .fr-exo }

<strong>1.</strong> 证明 \((u_n)\) 与 \((v_n)\) 收敛于同一极限。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Montrons par <strong>récurrence</strong> que, pour tout \(n\in\mathbb{N}\),

    <strong>解.</strong> 我们用<strong>归纳法</strong>（récurrence）证明：对任意 \(n\in\mathbb{N}\)，
    {: .zh }

    \[
    0<u_n\leqslant u_{n+1}\leqslant v_{n+1}\leqslant v_n.
    \]

    Pour \(n=0\), on a \(0<a<b\). De plus,

    当 \(n=0\) 时，有 \(0<a<b\)。此外，
    {: .zh }

    \[
    u_1=\frac{a+b}{2}\in\,]a,b[,
    \]

    et

    且
    {: .zh }

    \[
    v_1=\sqrt{u_1 b}\in\,]u_1,b[.
    \]

    La propriété est donc vraie au rang \(0\).

    故性质在 \(n=0\) 时成立。
    {: .zh }

    Supposons-la vraie au rang \(n\in\mathbb{N}\) : \(0<u_n\leqslant u_{n+1}\leqslant v_{n+1}\leqslant v_n\). Alors

    假设它在第 \(n\in\mathbb{N}\) 步成立： \(0<u_n\leqslant u_{n+1}\leqslant v_{n+1}\leqslant v_n\)。则
    {: .zh }

    \[
    u_{n+2}=\frac{u_{n+1}+v_{n+1}}{2}
    \]

    est compris entre \(u_{n+1}\) et \(v_{n+1}\). De plus, \(v_{n+2}=\sqrt{u_{n+2}v_{n+1}}\) vérifie

    介于 \(u_{n+1}\) 与 \(v_{n+1}\) 之间。又 \(v_{n+2}=\sqrt{u_{n+2}v_{n+1}}\) 满足
    {: .zh }

    \[
    u_{n+2}\leqslant v_{n+2}\leqslant v_{n+1}.
    \]

    On obtient donc

    于是得到
    {: .zh }

    \[
    0<u_{n+1}\leqslant u_{n+2}\leqslant v_{n+2}\leqslant v_{n+1}.
    \]

    On conclut par récurrence que pour tout \(n\in\mathbb{N}\), \(0<u_n\leqslant u_{n+1}\leqslant v_{n+1}\leqslant v_n\).

    由归纳法得证：对任意 \(n\in\mathbb{N}\)， \(0<u_n\leqslant u_{n+1}\leqslant v_{n+1}\leqslant v_n\)。
    {: .zh }

    Ainsi \((u_n)\) est croissante, \((v_n)\) est décroissante, et \(u_n\leqslant v_n\) pour tout \(n\).

    于是 \((u_n)\) 递增，\((v_n)\) 递减，且对任意 \(n\) 有 \(u_n\leqslant v_n\)。
    {: .zh }

    La suite \((u_n)\) est croissante et majorée par \(v_0=b\), donc elle converge vers un réel \(L\). La suite \((v_n)\) est décroissante et minorée par \(u_0=a\), donc elle converge vers un réel \(M\). En passant à la limite dans

    数列 \((u_n)\) 递增且以 \(v_0=b\) 为上界，故收敛于某实数 \(L\)。数列 \((v_n)\) 递减且以 \(u_0=a\) 为下界，故收敛于某实数 \(M\)。在
    {: .zh }

    \[
    u_{n+1}=\frac{u_n+v_n}{2},
    \]

    on obtient

    中取极限，得
    {: .zh }

    \[
    L=\frac{L+M}{2},
    \]

    donc \(L=M\). Les deux suites convergent vers une même limite.

    故 \(L=M\)。两数列收敛于同一极限。
    {: .zh }

    <p class="cqfd">∎</p>

<strong>2.</strong> On pose \(\alpha=\arccos(a/b)\). Montrer que pour tout \(n\in\mathbb{N}\), \(v_n=b\prod\limits_{k=1}^{n}\cos\left(\dfrac{\alpha}{2^{k}}\right)\).
{: .fr-exo }

<strong>2.</strong> 令 \(\alpha=\arccos(a/b)\)。证明对任意 \(n\in\mathbb{N}\)， \(v_n=b\prod\limits_{k=1}^{n}\cos\left(\dfrac{\alpha}{2^{k}}\right)\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Comme \(0<a<b\), on a \(\dfrac{a}{b}\in\,]0,1[\), donc

    <strong>解.</strong> 由于 \(0<a<b\)，有 \(\dfrac{a}{b}\in\,]0,1[\)，故
    {: .zh }

    \[
    \alpha=\arccos\frac{a}{b}\in\,\left]0,\frac{\pi}{2}\right[,
    \]

    et

    且
    {: .zh }

    \[
    a=b\cos\alpha.
    \]

    Montrons par récurrence sur \(n\in\mathbb{N}\) que, pour tout \(n\in\mathbb{N}\),

    我们对 \(n\in\mathbb{N}\) 用归纳法证明：对任意 \(n\in\mathbb{N}\)，
    {: .zh }

    \[
    \begin{cases}
    v_n=b\prod\limits_{k=1}^{n}\cos\left(\dfrac{\alpha}{2^{k}}\right)\\[10pt]
    u_n=v_n\cos\left(\dfrac{\alpha}{2^{n}}\right)
    \end{cases}
    \]

    Pour \(n=0\), le produit est vide et vaut \(1\), donc \(v_0=b\). De plus \(v_0\cos\alpha=b\cos\alpha=a=u_0\). Donc ces égalités sont vérifiées.

    当 \(n=0\) 时，空乘积约定为 \(1\)，故 \(v_0=b\)。又 \(v_0\cos\alpha=b\cos\alpha=a=u_0\)。故这些等式成立。
    {: .zh }

    Supposons le résultat vrai au rang \(n\). On a alors

    假设结论在第 \(n\) 步成立。则
    {: .zh }

    \[
    \begin{aligned}
    u_{n+1}&=\frac{u_n+v_n}{2}\\
    &=b\prod_{k=1}^{n}\cos\left(\frac{\alpha}{2^{k}}\right)
    \frac{\cos\left(\frac{\alpha}{2^{n}}\right)+1}{2}\\
    &=b\prod_{k=1}^{n}\cos\left(\frac{\alpha}{2^{k}}\right)
    \cos^2\left(\frac{\alpha}{2^{n+1}}\right)\\
    &=\cos\left(\frac{\alpha}{2^{n+1}}\right)\,
    b\prod_{k=1}^{n+1}\cos\left(\frac{\alpha}{2^{k}}\right)
    \end{aligned}
    \]

    et

    且
    {: .zh }

    \[
    \begin{aligned}
    v_{n+1}&=\sqrt{u_{n+1}v_n}\\
    &=\sqrt{b\prod_{k=1}^{n}\cos\left(\frac{\alpha}{2^{k}}\right)
    \cos^2\left(\frac{\alpha}{2^{n+1}}\right)\cdot
    b\prod_{k=1}^{n}\cos\left(\frac{\alpha}{2^{k}}\right)}\\
    &=b\prod_{k=1}^{n+1}\cos\left(\frac{\alpha}{2^{k}}\right).
    \end{aligned}
    \]

    La formule est donc vraie au rang \(n+1\). Par récurrence, elle est vraie pour tout \(n\in\mathbb{N}\).

    故公式在第 \(n+1\) 步成立。由归纳法，它对任意 \(n\in\mathbb{N}\) 成立。
    {: .zh }

    <p class="cqfd">∎</p>

<strong>3.</strong> En déduire une expression de la limite commune de \((u_n)\) et \((v_n)\) en fonction de \(\alpha\).
{: .fr-exo }

<strong>3.</strong> 由此推出 \((u_n)\) 与 \((v_n)\) 的公共极限关于 \(\alpha\) 的表达式。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On utilise l'identité

    <strong>解.</strong> 利用恒等式
    {: .zh }

    \[
    \sin\theta=2\sin\left(\frac{\theta}{2}\right)\cos\left(\frac{\theta}{2}\right).
    \]

    Soit \(n\in\mathbb{N}^*\). On a

    设 \(n\in\mathbb{N}^*\)。有
    {: .zh }

    \[
    \begin{aligned}
    v_n\sin\left(\frac{\alpha}{2^{n}}\right)
    &=b\left(\prod_{k=1}^{n-1}\cos\left(\frac{\alpha}{2^{k}}\right)\right)
    \sin\left(\frac{\alpha}{2^{n}}\right)\cos\left(\frac{\alpha}{2^{n}}\right)\\
    &=v_{n-1}\,\frac{\sin\left(\frac{\alpha}{2^{n-1}}\right)}{2}.
    \end{aligned}
    \]

    En itérant de \(n\) à \(1\), on obtient

    从 \(n\) 迭代到 \(1\)，得
    {: .zh }

    \[
    v_n\sin\left(\frac{\alpha}{2^{n}}\right)=\frac{\sin\alpha}{2^{n}}v_0.
    \]

    Donc

    因此
    {: .zh }

    \[
    v_n=b\,\frac{\sin\alpha}{2^{n}\sin\left(\frac{\alpha}{2^{n}}\right)}.
    \]

    Or

    而
    {: .zh }

    \[
    2^{n}\sin\left(\frac{\alpha}{2^{n}}\right)
    =\alpha\,\frac{\sin\left(\frac{\alpha}{2^{n}}\right)}{\frac{\alpha}{2^{n}}}
    \xrightarrow[n\to\infty]{}\alpha.
    \]

    Ainsi,

    于是
    {: .zh }

    \[
    v_n\xrightarrow[n\to\infty]{}b\,\frac{\sin\alpha}{\alpha}.
    \]

    La limite commune vaut donc

    故公共极限为
    {: .zh }

    \[
    \boxed{L=b\,\frac{\sin\alpha}{\alpha}
    =\frac{\sqrt{b^2-a^2}}{\arccos\left(\frac{a}{b}\right)}.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第二部分（Exercices supplémentaires）核心术语</span>"

    - <strong>moyenne arithmético-géométrique</strong>：算术–几何平均
    - <strong>récurrence</strong>：归纳法
    - <strong>suite majorée / minorée</strong>：有上界 / 下界的数列
    - <strong>limite commune</strong>：公共极限
    - <strong>identité</strong>：恒等式
    - <strong>itérer</strong>：迭代
    - <strong>produit vide</strong>：空乘积
    - <strong>arccos</strong>：反余弦
    - <strong>en déduire</strong>：由此推出
    - <strong>on conclut que</strong>：我们得出
    - <strong>encadrement</strong>：夹逼
    - <strong>converger vers</strong>：收敛于

    - <strong>tendre vers</strong>：趋于
    - <strong>on écrit</strong>：我们写出
    - <strong>or / donc / ainsi</strong>：而 / 因此 / 于是
    - <strong>par conséquent</strong>：从而
    - <strong>en résumé</strong>：总之
    - <strong>on distingue les cas</strong>：分类讨论
    - <strong>par continuité de</strong>：由……的连续性
    - <strong>suite croissante / décroissante</strong>：递增 / 递减数列
    - <strong>passer à la limite</strong>：取极限
    - <strong>montrer que</strong>：证明
    - <strong>soit</strong>：设
    - <strong>pour tout</strong>：对任意
