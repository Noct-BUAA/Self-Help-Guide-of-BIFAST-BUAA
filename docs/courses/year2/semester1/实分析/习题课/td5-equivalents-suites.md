---
title: TD5 数列等价解答
comments: true
---

# 第 5 次习题课　数列等价

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°5 — Équivalent de suite</p>
<p class="lecture-badge">ÉNONCÉ &amp; CORRIGÉ · 题目与参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">课前准备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">suites équivalentes　等价数列</p>

Trouver une suite simple équivalente à chacune des suites suivantes :

求下列各数列的一个简单的等价数列：
{: .zh }

1. \(\displaystyle x_n=\sqrt{n+1}-\sqrt{n-1}\)
2. \(\displaystyle x_n=\frac{1}{n-1}-\frac{1}{n+1}\)
3. \(\displaystyle x_n=n\sin\frac{1}{n^2}\)
4. \(\displaystyle x_n=n^{1/n}-1\)
5. \(\displaystyle x_n=\arctan(n+1)-\arctan n\)
6. \(\displaystyle x_n=\tan\left(\frac{\pi}{4}+\frac{1}{n}\right)-1\)　(Si \(\theta\in\left]-\frac{\pi}{2},\frac{\pi}{2}\right[\), \(\tan(\theta+x)=\tan\theta+(\tan'\theta)\,x+o(x)\))
7. \(\displaystyle x_n=\left(\tan\left(\frac{\pi}{3}+\frac{1}{n}\right)\right)^{n}\)
8. \(\displaystyle x_n=\left(\tan\left(\frac{\pi}{4}+\frac{1}{n}\right)\right)^{\pi}-1\)

!!! sol ""

    <strong>Solution.</strong> Nous cherchons un équivalent simple de chaque suite.

    <strong>解.</strong> 我们逐个求各数列的简单等价量。
    {: .zh }

    <strong>1.</strong> En multipliant par la <strong>quantité conjuguée</strong>,

    <strong>1.</strong> 乘以<strong>共轭量</strong>（quantité conjuguée）作有理化，
    {: .zh }

    \[
    x_n=\frac{(n+1)-(n-1)}{\sqrt{n+1}+\sqrt{n-1}}
    =\frac{2}{\sqrt{n+1}+\sqrt{n-1}}.
    \]

    Or \(\sqrt{n+1}+\sqrt{n-1}=\sqrt{n}\left(\sqrt{1+\frac1n}+\sqrt{1-\frac1n}\right)\sim2\sqrt{n}\), donc, par <strong>quotient d'équivalents</strong>,

    而 \(\sqrt{n+1}+\sqrt{n-1}=\sqrt{n}\left(\sqrt{1+\frac1n}+\sqrt{1-\frac1n}\right)\sim2\sqrt{n}\)， 故由<strong>等价量的商</strong>（quotient d'équivalents）得
    {: .zh }

    \[
    \boxed{x_n\sim\frac{2}{2\sqrt{n}}=\frac{1}{\sqrt{n}}}.
    \]

    <strong>2.</strong> En réduisant au même dénominateur,

    <strong>2.</strong> 通分得
    {: .zh }

    \[
    x_n=\frac{(n+1)-(n-1)}{(n-1)(n+1)}=\frac{2}{n^2-1}\sim\frac{2}{n^2}.
    \]

    <strong>3.</strong> Comme \(\frac{1}{n^2}\to0\) et \(\sin u\sim u\) au voisinage de \(0\), on a \(\sin\frac{1}{n^2}\sim\frac{1}{n^2}\); par produit d'équivalents,

    <strong>3.</strong> 由于 \(\frac{1}{n^2}\to0\) 且当 \(u\to0\) 时 \(\sin u\sim u\)，有 \(\sin\frac{1}{n^2}\sim\frac{1}{n^2}\)；由等价量的乘积法则，
    {: .zh }

    \[
    x_n=n\sin\frac{1}{n^2}\sim n\cdot\frac{1}{n^2}=\frac{1}{n}.
    \]

    <strong>4.</strong> On écrit \(n^{1/n}=e^{(\ln n)/n}\). Comme \(\frac{\ln n}{n}\to0\) et \(e^u-1\sim u\) quand \(u\to0\),

    <strong>4.</strong> 将 \(n^{1/n}\) 写成 \(e^{(\ln n)/n}\)。由于 \(\frac{\ln n}{n}\to0\)，且当 \(u\to0\) 时 \(e^u-1\sim u\)，
    {: .zh }

    \[
    x_n=e^{(\ln n)/n}-1\sim\frac{\ln n}{n}.
    \]

    <strong>5.</strong> La fonction \(\arctan\) est dérivable sur \(\mathbb{R}\) et \(\arctan't=\frac{1}{1+t^2}\). Par le <strong>théorème des accroissements finis</strong> appliqué à \(\arctan\) sur le segment \([n,n+1]\), il existe \(c_n\in\,]n,n+1[\) tel que

    <strong>5.</strong> 函数 \(\arctan\) 在 \(\mathbb{R}\) 上可导，且 \(\arctan't=\frac{1}{1+t^2}\)。对 \(\arctan\) 在区间 \([n,n+1]\) 上应用<strong>有限增量定理</strong> （théorème des accroissements finis），存在 \(c_n\in\,]n,n+1[\) 使
    {: .zh }

    \[
    x_n=\arctan(n+1)-\arctan n=\arctan'(c_n)=\frac{1}{1+c_n^2}.
    \]

    Comme \(n<c_n<n+1\), on a \(\frac{n^2}{1+(n+1)^2}\leqslant n^2x_n=\frac{n^2}{1+c_n^2}\leqslant\frac{n^2}{1+n^2}\), et les deux membres tendent vers \(1\); donc \(n^2x_n\to1\), c'est-à-dire

    由于 \(n<c_n<n+1\)，有 \(\frac{n^2}{1+(n+1)^2}\leqslant n^2x_n=\frac{n^2}{1+c_n^2}\leqslant\frac{n^2}{1+n^2}\)， 两端均趋于 \(1\)；因此 \(n^2x_n\to1\)，即
    {: .zh }

    \[
    \boxed{x_n\sim\frac{1}{n^2}}.
    \]

    <strong>6.</strong> Posons \(h=\frac1n\); alors \(h\to0\). La formule de l'énoncé, avec \(\theta=\frac\pi4\), \(\tan\frac\pi4=1\) et \(\tan'\frac\pi4=1+\tan^2\frac\pi4=2\), donne

    <strong>6.</strong> 令 \(h=\frac1n\)，则 \(h\to0\)。题设公式取 \(\theta=\frac\pi4\)，并注意 \(\tan\frac\pi4=1\)、\(\tan'\frac\pi4=1+\tan^2\frac\pi4=2\)，得
    {: .zh }

    \[
    \tan\left(\frac\pi4+h\right)=1+2h+o(h),
    \]

    donc

    因此
    {: .zh }

    \[
    x_n=\tan\left(\frac\pi4+\frac1n\right)-1=\frac{2}{n}+o\left(\frac1n\right)\sim\frac{2}{n}.
    \]

    <strong>7.</strong> Posons \(h=\frac1n\). On a \(\tan\frac\pi3=\sqrt3\) et \(\tan'\frac\pi3=1+\tan^2\frac\pi3=4\), donc

    <strong>7.</strong> 令 \(h=\frac1n\)。有 \(\tan\frac\pi3=\sqrt3\) 且 \(\tan'\frac\pi3=1+\tan^2\frac\pi3=4\)，因此
    {: .zh }

    \[
    \tan\left(\frac\pi3+h\right)=\sqrt3+4h+o(h)
    =\sqrt3\left(1+\frac{4}{\sqrt3}h+o(h)\right).
    \]

    Par suite, en utilisant \(\ln(1+u)\sim u\) quand \(u\to0\),

    从而，利用当 \(u\to0\) 时 \(\ln(1+u)\sim u\)，
    {: .zh }

    \[
    \begin{aligned}
    x_n&=\left(\sqrt3\right)^{n}\left(1+\frac{4}{\sqrt3\,n}+o\left(\frac1n\right)\right)^{n}\\
    &=(\sqrt3)^{n}\exp\left(n\ln\left(1+\frac{4}{\sqrt3\,n}+o\left(\frac1n\right)\right)\right)
    =(\sqrt3)^{n}\,e^{\frac{4}{\sqrt3}+o(1)}.
    \end{aligned}
    \]

    Donc

    因此
    {: .zh }

    \[
    \boxed{x_n\sim(\sqrt3)^{n}\,e^{4/\sqrt3}=3^{n/2}\,e^{4\sqrt3/3}}.
    \]

    <strong>8.</strong> Posons \(h=\frac1n\). D'après la question 6, \(\tan\left(\frac\pi4+h\right)=1+2h+o(h)\), donc

    <strong>8.</strong> 令 \(h=\frac1n\)。由第 6 小题， \(\tan\left(\frac\pi4+h\right)=1+2h+o(h)\)，故
    {: .zh }

    \[
    \tan\left(\frac\pi4+\frac1n\right)=1+u_n
    \quad\text{avec}\quad
    u_n=\frac{2}{n}+o\left(\frac1n\right)\longrightarrow0.
    \]

    Comme \((1+u)^\pi=1+\pi u+o(u)\) au voisinage de \(0\),

    由于在 \(0\) 附近 \((1+u)^\pi=1+\pi u+o(u)\)，
    {: .zh }

    \[
    x_n=(1+u_n)^\pi-1=\pi u_n+o(u_n)=\frac{2\pi}{n}+o\left(\frac1n\right)\sim\frac{2\pi}{n}.
    \]

    En résumé, les équivalents obtenus sont respectivement

    综上，所得等价量依次为
    {: .zh }

    \[
    \boxed{\frac{1}{\sqrt{n}},\quad \frac{2}{n^2},\quad \frac{1}{n},\quad
    \frac{\ln n}{n},\quad \frac{1}{n^2},\quad \frac{2}{n},\quad
    (\sqrt3)^{n}e^{4/\sqrt3},\quad \frac{2\pi}{n}}.
    \]

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">développement limité de logarithme　对数的渐近展开</p>

Trouver

求
{: .zh }

\[
\lim_{n\to+\infty}\left(1+\frac{1}{n}\right)^{n^2}e^{-n}.
\]

(On rappelle : \(\ln(1+x)=x-\frac{x^2}{2}+o(x^2)\).)

（回忆：\(\ln(1+x)=x-\frac{x^2}{2}+o(x^2)\)。）
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Posons \(v_n=\left(1+\frac1n\right)^{n^2}e^{-n}>0\). Comme \(v_n=\exp(\ln v_n)\) et que l'exponentielle est continue, il suffit de déterminer la limite de \(\ln v_n\). Or

    <strong>解.</strong> 令 \(v_n=\left(1+\frac1n\right)^{n^2}e^{-n}>0\)。由于 \(v_n=\exp(\ln v_n)\) 且指数函数连续，只需确定 \(\ln v_n\) 的极限。而
    {: .zh }

    \[
    \ln v_n=n^2\ln\left(1+\frac{1}{n}\right)-n.
    \]

    Le développement limité \(\ln(1+x)=x-\frac{x^2}{2}+o(x^2)\) en \(0\), appliqué à \(x=\frac1n\), donne

    在 \(0\) 处的渐近展开（développement limité）\(\ln(1+x)=x-\frac{x^2}{2}+o(x^2)\) 取 \(x=\frac1n\)，得
    {: .zh }

    \[
    n^2\ln\left(1+\frac1n\right)
    =n^2\left(\frac1n-\frac{1}{2n^2}+o\left(\frac{1}{n^2}\right)\right)
    =n-\frac12+o(1).
    \]

    Donc \(\ln v_n=-\frac12+o(1)\to-\frac12\), et, par continuité de l'exponentielle,

    因此 \(\ln v_n=-\frac12+o(1)\to-\frac12\)，由指数函数的连续性，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\left(1+\frac1n\right)^{n^2}e^{-n}
    =e^{-1/2}=\frac{1}{\sqrt{e}}}.
    \]

    <p class="cqfd">∎</p>

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">Moyenne de Césaro　切萨罗平均</p>

Soit \((a_n)_{n\geqslant1}\) une suite complexe convergente de limite \(\ell\). Montrer que la suite \((b_n)_{n\geqslant1}\) définie par

设 \((a_n)_{n\geqslant1}\) 为收敛于 \(\ell\) 的复数列。证明由下式定义的数列 \((b_n)_{n\geqslant1}\)
{: .zh }

\[
\forall n\geqslant1,\qquad b_n=\frac1n\sum_{k=1}^{n}a_k
\]

converge vers \(\ell\).

收敛于 \(\ell\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Soit \(\varepsilon>0\). Comme \((a_n)\) converge vers \(\ell\), il existe \(N_1\in\mathbb{N}^*\) tel que

    <strong>解.</strong> 设 \(\varepsilon>0\)。由于 \((a_n)\) 收敛于 \(\ell\)，存在 \(N_1\in\mathbb{N}^*\) 使
    {: .zh }

    \[
    \forall k\geqslant N_1,\qquad |a_k-\ell|\leqslant\frac{\varepsilon}{2}.
    \]

    Posons \(M=\sum_{k=1}^{N_1-1}|a_k-\ell|\in\mathbb{R}_+\) (somme finie, éventuellement vide). Pour tout \(n\geqslant N_1\), en écrivant \(\ell=\frac1n\sum_{k=1}^{n}\ell\), on a

    令 \(M=\sum_{k=1}^{N_1-1}|a_k-\ell|\in\mathbb{R}_+\)（有限和，可能为空）。对任意 \(n\geqslant N_1\)，将 \(\ell\) 写成 \(\ell=\frac1n\sum_{k=1}^{n}\ell\)，有
    {: .zh }

    \[
    b_n-\ell=\frac1n\sum_{k=1}^{n}(a_k-\ell),
    \]

    donc

    因此
    {: .zh }

    \[
    |b_n-\ell|\leqslant\frac1n\sum_{k=1}^{n}|a_k-\ell|
    =\frac1n\sum_{k=1}^{N_1-1}|a_k-\ell|+\frac1n\sum_{k=N_1}^{n}|a_k-\ell|
    \leqslant\frac{M}{n}+\frac{n-N_1+1}{n}\cdot\frac{\varepsilon}{2}
    \leqslant\frac{M}{n}+\frac{\varepsilon}{2}.
    \]

    Comme \(\frac{M}{n}\to0\), il existe \(N_2\geqslant N_1\) tel que \(\frac{M}{n}\leqslant\frac{\varepsilon}{2}\) pour tout \(n\geqslant N_2\). Alors, pour tout \(n\geqslant N_2\),

    由于 \(\frac{M}{n}\to0\)，存在 \(N_2\geqslant N_1\)，使得对任意 \(n\geqslant N_2\) 有 \(\frac{M}{n}\leqslant\frac{\varepsilon}{2}\)。于是对任意 \(n\geqslant N_2\)，
    {: .zh }

    \[
    |b_n-\ell|\leqslant\varepsilon.
    \]

    On a montré : pour tout \(\varepsilon>0\), il existe \(N_2\in\mathbb{N}\) tel que, pour tout \(n\geqslant N_2\), \(|b_n-\ell|\leqslant\varepsilon\). Autrement dit, \((b_n)\) converge vers \(\ell\).

    我们证明了：对任意 \(\varepsilon>0\)，存在 \(N_2\in\mathbb{N}\)，使得对任意 \(n\geqslant N_2\) 有 \(|b_n-\ell|\leqslant\varepsilon\)。也就是说，\((b_n)\) 收敛于 \(\ell\)。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">Constante d'Euler \(\gamma\)　欧拉常数</p>

<strong>1.</strong> Soient les suites

<strong>1.</strong> 设数列
{: .zh }

\[
\begin{cases}
a_n=\sum\limits_{k=1}^{n-1}\dfrac1k-\ln n\\[10pt]
b_n=\sum\limits_{k=1}^{n}\dfrac1k-\ln n
\end{cases}
\]

Montrer que \((a_n)\) et \((b_n)\) convergent et qu'elles tendent vers la même limite. (C'est la <strong>constante d'Euler</strong> \(\gamma\).)

证明 \((a_n)\) 与 \((b_n)\) 收敛，且趋于同一极限。（这就是<strong>欧拉常数</strong> （constante d'Euler）\(\gamma\)。）
{: .zh }

!!! sol ""

    <strong>1.</strong> Pour tout \(n\geqslant1\), on a \(b_n-a_n=\frac1n\), donc \(b_n-a_n\to0\). D'autre part, pour \(x\geqslant0\),

    <strong>1.</strong> 对任意 \(n\geqslant1\)，有 \(b_n-a_n=\frac1n\)，故 \(b_n-a_n\to0\)。 另一方面，对 \(x\geqslant0\)，
    {: .zh }

    \[
    \ln(1+x)=\int_0^x\frac{dt}{1+t},
    \qquad\text{d'où}\qquad
    \frac{x}{1+x}\leqslant\ln(1+x)\leqslant x.
    \]

    En appliquant ces inégalités à \(x=\frac1n\), il vient

    将这些不等式用于 \(x=\frac1n\)，得
    {: .zh }

    \[
    a_{n+1}-a_n=\frac1n-\ln\left(1+\frac1n\right)\geqslant0,
    \qquad
    b_{n+1}-b_n=\frac{1}{n+1}-\ln\left(1+\frac1n\right)\leqslant0.
    \]

    Ainsi \((a_n)\) est croissante et \((b_n)\) est décroissante. Comme \(a_n\leqslant b_n\) pour tout \(n\), la suite \((a_n)\) est croissante majorée par \(b_1=1\) et la suite \((b_n)\) est décroissante minorée par \(a_1=0\) : elles convergent toutes les deux. Enfin, \(b_n-a_n=\frac1n\to0\), donc elles ont la même limite \(\gamma\in[0,1]\), appelée <strong>constante d'Euler</strong>. (On dit que \((a_n)\) et \((b_n)\) sont des <strong>suites adjacentes</strong>.)

    于是 \((a_n)\) 递增，\((b_n)\) 递减。由于对任意 \(n\) 有 \(a_n\leqslant b_n\)， 数列 \((a_n)\) 递增且以 \(b_1=1\) 为上界，\((b_n)\) 递减且以 \(a_1=0\) 为下界： 两者都收敛。最后，\(b_n-a_n=\frac1n\to0\)，因此它们有相同的极限 \(\gamma\in[0,1]\)，称为<strong>欧拉常数</strong>（constante d'Euler）。（此时称 \((a_n)\) 与 \((b_n)\) 为<strong>相邻数列</strong>（suites adjacentes）。）
    {: .zh }

    <p class="cqfd">∎</p>

<strong>2.</strong> En déduire

<strong>2.</strong> 由此推出
{: .zh }

\[
\lim_{n\to+\infty}\left(\sin\frac{\pi}{n+1}+\sin\frac{\pi}{n+2}
+\cdots+\sin\frac{\pi}{2n}\right).
\]

!!! sol ""

    <strong>2.</strong> Posons \(S_n=\sum_{k=n+1}^{2n}\sin\frac{\pi}{k}\). Pour tout \(u\geqslant0\), l'inégalité de Taylor-Lagrange appliquée à \(\sin\) donne \(|\sin u-u|\leqslant\frac{u^3}{6}\); donc

    <strong>2.</strong> 令 \(S_n=\sum_{k=n+1}^{2n}\sin\frac{\pi}{k}\)。对任意 \(u\geqslant0\)， 对 \(\sin\) 应用泰勒–拉格朗日不等式得 \(|\sin u-u|\leqslant\frac{u^3}{6}\)；因此
    {: .zh }

    \[
    \left|S_n-\pi\sum_{k=n+1}^{2n}\frac1k\right|
    \leqslant\sum_{k=n+1}^{2n}\frac16\left(\frac{\pi}{k}\right)^3
    \leqslant n\cdot\frac{\pi^3}{6n^3}=\frac{\pi^3}{6n^2}\longrightarrow0.
    \]

    Or, en notant \(H_n=\sum_{k=1}^{n}\frac1k\),

    而记 \(H_n=\sum_{k=1}^{n}\frac1k\)，有
    {: .zh }

    \[
    \sum_{k=n+1}^{2n}\frac1k=H_{2n}-H_n
    =(H_{2n}-\ln(2n))-(H_n-\ln n)+\ln2
    =b_{2n}-b_n+\ln2.
    \]

    D'après la question 1, \(b_{2n}\to\gamma\) et \(b_n\to\gamma\), donc \(H_{2n}-H_n\to\ln2\). Par suite,

    由第 1 问，\(b_{2n}\to\gamma\) 且 \(b_n\to\gamma\)，故 \(H_{2n}-H_n\to\ln2\)。 从而
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}S_n=\pi\ln2}.
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第一部分（Exercices à préparer）核心术语</span>"

    - <strong>suite équivalente</strong>：等价数列
    - <strong>équivalent à</strong>：与……等价（记作 \(\sim\)）
    - <strong>quantité conjuguée</strong>：共轭量（有理化用）
    - <strong>quotient d'équivalents</strong>：等价量的商
    - <strong>produit d'équivalents</strong>：等价量的积
    - <strong>développement limité (DL)</strong>：渐近展开（泰勒展开）
    - <strong>au voisinage de \(0\)</strong>：在 \(0\) 的邻域内
    - <strong>\(o(x^n)\)</strong>：\(x^n\) 的高阶无穷小
    - <strong>théorème des accroissements finis</strong>：有限增量定理（拉格朗日中值定理）
    - <strong>moyenne de Césaro</strong>：切萨罗平均
    - <strong>théorème de la limite par encadrement</strong>：夹逼定理
    - <strong>théorème de la limite monotone</strong>：单调极限定理
    - <strong>suite croissante / décroissante</strong>：递增 / 递减数列

    - <strong>suite majorée / minorée</strong>：有上界 / 有下界的数列
    - <strong>suite adjacente</strong>：相邻数列
    - <strong>suite complexe</strong>：复数列
    - <strong>constante d'Euler \(\gamma\)</strong>：欧拉常数 \(\gamma\)
    - <strong>série harmonique</strong>：调和级数
    - <strong>on pose</strong>：令
    - <strong>il existe</strong>：存在
    - <strong>pour tout</strong>：对任意
    - <strong>en déduire</strong>：由此推出
    - <strong>passer à la limite</strong>：取极限
    - <strong>par continuité de</strong>：由……的连续性
    - <strong>par suite</strong>：从而

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">vitesse de convergence　收敛速度</p>

Soit \((u_n)\) la suite telle que \(u_0>0\) et, pour tout \(n\in\mathbb{N}\), \(u_{n+1}=\arctan u_n\).

设 \((u_n)\) 是由 \(u_0>0\) 以及 \(\forall n\in\mathbb{N}\)、 \(u_{n+1}=\arctan u_n\) 确定的数列。
{: .zh }

<strong>1.</strong> Trouver la limite de cette suite. (On rappelle : \(\arctan x=x-\frac{x^3}{3}+o(x^3)\).)

<strong>1.</strong> 求该数列的极限。（回忆：\(\arctan x=x-\frac{x^3}{3}+o(x^3)\)。）
{: .zh }

!!! sol ""

    <strong>1.</strong> Montrons d'abord que la suite est bien définie et positive : \(u_0>0\), et si \(u_n>0\), alors \(u_{n+1}=\arctan u_n>0\). Par récurrence, \(\forall n\in\mathbb{N}\), \(u_n>0\).

    <strong>1.</strong> 先证明数列有良好定义且各项为正：\(u_0>0\)，且若 \(u_n>0\)，则 \(u_{n+1}=\arctan u_n>0\)。由归纳法，\(\forall n\in\mathbb{N}\)，\(u_n>0\)。
    {: .zh }

    Ensuite, pour tout \(x>0\), on a \(\arctan x<x\) : en effet, la fonction \(f(x)=x-\arctan x\) vérifie \(f(0)=0\) et \(f'(x)=1-\frac{1}{1+x^2}=\frac{x^2}{1+x^2}>0\) pour \(x>0\), donc \(f(x)>0\) pour \(x>0\).

    其次，对任意 \(x>0\)，有 \(\arctan x<x\)：事实上，函数 \(f(x)=x-\arctan x\) 满足 \(f(0)=0\)，且当 \(x>0\) 时 \(f'(x)=1-\frac{1}{1+x^2}=\frac{x^2}{1+x^2}>0\)， 故 \(x>0\) 时 \(f(x)>0\)。
    {: .zh }

    Ainsi, \(\forall n\in\mathbb{N}\), \(u_{n+1}=\arctan u_n<u_n\) : la suite \((u_n)\) est décroissante. Décroissante et minorée par \(0\), elle converge; notons \(\ell\) sa limite (\(\ell\geqslant0\)). Par continuité de \(\arctan\) en \(\ell\), la relation \(u_{n+1}=\arctan u_n\) donne à la limite \(\ell=\arctan\ell\). Or la fonction \(x\mapsto x-\arctan x\) est strictement croissante sur \(\mathbb{R}_+\) et ne s'annule qu'en \(0\), donc \(\ell=0\).

    于是 \(\forall n\in\mathbb{N}\)，\(u_{n+1}=\arctan u_n<u_n\)：数列 \((u_n)\) 递减。 递减且有下界 \(0\)，故它收敛；记其极限为 \(\ell\)（\(\ell\geqslant0\)）。由 \(\arctan\) 在 \(\ell\) 处的连续性，对关系式 \(u_{n+1}=\arctan u_n\) 取极限得 \(\ell=\arctan\ell\)。而函数 \(x\mapsto x-\arctan x\) 在 \(\mathbb{R}_+\) 上严格递增 且只在 \(0\) 处为零，故 \(\ell=0\)。
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}u_n=0}.
    \]

    <p class="cqfd">∎</p>

<strong>2.</strong> Trouver un équivalent de cette suite. (On pourra chercher \(\alpha\in\mathbb{R}\) tel que la suite \((u_{n+1}^{\alpha}-u_n^{\alpha})\) ait une limite finie non nulle, puis utiliser une <strong>moyenne de Césaro</strong>.)

<strong>2.</strong> 求该数列的等价量。（可寻找 \(\alpha\in\mathbb{R}\)，使数列 \((u_{n+1}^{\alpha}-u_n^{\alpha})\) 有有限非零极限，然后利用<strong>切萨罗平均</strong> （moyenne de Césaro）。）
{: .zh }

!!! sol ""

    <strong>2.</strong> Cherchons \(\alpha\in\mathbb{R}\) tel que la suite \((u_{n+1}^{\alpha}-u_n^{\alpha})\) converge vers une limite finie non nulle.

    <strong>2.</strong> 我们寻找 \(\alpha\in\mathbb{R}\)，使数列 \((u_{n+1}^{\alpha}-u_n^{\alpha})\) 收敛于有限的非零极限。
    {: .zh }

    Le développement limité de \(\arctan\) en \(0\) à l'ordre \(3\) s'écrit \(\arctan u=u-\frac{u^3}{3}+o(u^3)\). Comme \(u_n\to0\), il vient

    \(\arctan\) 在 \(0\) 处的三阶渐近展开为 \(\arctan u=u-\frac{u^3}{3}+o(u^3)\)。由于 \(u_n\to0\)，得
    {: .zh }

    \[
    u_{n+1}=u_n-\frac{u_n^3}{3}+o(u_n^3)
    =u_n\left(1-\frac{u_n^2}{3}+o(u_n^2)\right).
    \]

    Pour \(\alpha\neq0\), le développement limité \((1+\varepsilon)^{\alpha}=1+\alpha\varepsilon+o(\varepsilon)\) en \(0\), appliqué à \(\varepsilon_n=-\frac{u_n^2}{3}+o(u_n^2)\to0\), donne

    当 \(\alpha\neq0\) 时，在 \(0\) 处的展开 \((1+\varepsilon)^{\alpha}=1+\alpha\varepsilon+o(\varepsilon)\) 取 \(\varepsilon_n=-\frac{u_n^2}{3}+o(u_n^2)\to0\)，得
    {: .zh }

    \[
    u_{n+1}^{\alpha}=u_n^{\alpha}(1+\varepsilon_n)^{\alpha}
    =u_n^{\alpha}\left(1-\frac{\alpha}{3}u_n^2+o(u_n^2)\right),
    \]

    d'où

    由此
    {: .zh }

    \[
    u_{n+1}^{\alpha}-u_n^{\alpha}
    =-\frac{\alpha}{3}u_n^{\alpha+2}+o(u_n^{\alpha+2}).
    \]

    Le cas \(\alpha=0\) donne une différence identiquement nulle, donc ne convient pas. Comme \(u_n\to0^+\) :

    \(\alpha=0\) 时该差恒为零，故不合要求。由于 \(u_n\to0^+\)：
    {: .zh }

    - si \(\alpha+2>0\), alors \(u_n^{\alpha+2}\to0\) et la différence tend vers \(0\) ;

        若 \(\alpha+2>0\)，则 \(u_n^{\alpha+2}\to0\)，该差趋于 \(0\)；
        {: .zh }

    - si \(\alpha+2<0\), alors \(u_n^{\alpha+2}\to+\infty\) et la différence tend vers \(+\infty\) (car \(-\frac{\alpha}{3}>0\)) ;

        若 \(\alpha+2<0\)，则 \(u_n^{\alpha+2}\to+\infty\)，该差趋于 \(+\infty\) （因为 \(-\frac{\alpha}{3}>0\)）；
        {: .zh }

    - si \(\alpha=-2\), alors \(u_n^{\alpha+2}=1\) et la différence tend vers \(\frac23\).

        若 \(\alpha=-2\)，则 \(u_n^{\alpha+2}=1\)，该差趋于 \(\frac23\)。
        {: .zh }

    La seule valeur convenable est donc \(\alpha=-2\), et

    故唯一合适的值是 \(\alpha=-2\)，且
    {: .zh }

    \[
    u_{n+1}^{-2}-u_n^{-2}\longrightarrow\frac23.
    \]

    Par la <strong>moyenne de Césaro</strong> (exercice 3), appliquée à \(w_k=u_{k+1}^{-2}-u_k^{-2}\),

    对 \(w_k=u_{k+1}^{-2}-u_k^{-2}\) 应用<strong>切萨罗平均</strong>（exercice 3），
    {: .zh }

    \[
    \frac1n\sum_{k=0}^{n-1}\left(u_{k+1}^{-2}-u_k^{-2}\right)
    =\frac{u_n^{-2}-u_0^{-2}}{n}\longrightarrow\frac23.
    \]

    Comme \(\frac{u_0^{-2}}{n}\to0\), on en déduit \(\frac{u_n^{-2}}{n}\to\frac23\), c'est-à-dire \(nu_n^2\to\frac32\), puis \(u_n^2\sim\frac{3}{2n}\). Les deux membres étant positifs, on peut prendre les racines carrées :

    由于 \(\frac{u_0^{-2}}{n}\to0\)，推得 \(\frac{u_n^{-2}}{n}\to\frac23\)，即 \(nu_n^2\to\frac32\)，从而 \(u_n^2\sim\frac{3}{2n}\)。两边均为正，可取平方根：
    {: .zh }

    \[
    \boxed{u_n\sim\sqrt{\frac{3}{2n}}=\sqrt{\frac{3}{2}}\cdot\frac{1}{\sqrt{n}}}.
    \]

    <p class="cqfd">∎</p>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">inverses de binômes de Newton　牛顿二项式系数的倒数</p>

Soit pour \(n\geqslant1\),

设 \(n\geqslant1\)，
{: .zh }

\[
a_n=\sum_{k=0}^{n}\binom{n}{k}^{-1}.
\]

Montrer que \(\lim\limits_{n\to+\infty}a_n=2\). (On pourra commencer par montrer que \(k\mapsto\binom{n}{k}\) est croissante pour \(k\leqslant n/2\).)

证明 \(\lim\limits_{n\to+\infty}a_n=2\)。（可先证明 \(k\mapsto\binom{n}{k}\) 在 \(k\leqslant n/2\) 时递增。）
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour \(0\leqslant k<n\), on a

    <strong>解.</strong> 对 \(0\leqslant k<n\)，有
    {: .zh }

    \[
    \frac{\binom{n}{k+1}}{\binom{n}{k}}=\frac{n-k}{k+1}.
    \]

    Cette quantité est supérieure ou égale à \(1\) si et seulement si \(n-k\geqslant k+1\), c'est-à-dire \(k\leqslant\frac{n-1}{2}\). Ainsi \(k\mapsto\binom{n}{k}\) est croissante tant que \(k\leqslant\frac{n}{2}\).

    该比值不小于 \(1\) 当且仅当 \(n-k\geqslant k+1\)，即 \(k\leqslant\frac{n-1}{2}\)。 因此 \(k\mapsto\binom{n}{k}\) 在 \(k\leqslant\frac{n}{2}\) 时递增。
    {: .zh }

    Par symétrie \(\binom{n}{k}=\binom{n}{n-k}\), on en déduit que, pour \(2\leqslant k\leqslant n-2\), en posant \(m=\min(k,n-k)\in\left[2,\frac{n}{2}\right]\),

    由对称性 \(\binom{n}{k}=\binom{n}{n-k}\)，可知对 \(2\leqslant k\leqslant n-2\)， 令 \(m=\min(k,n-k)\in\left[2,\frac{n}{2}\right]\)，有
    {: .zh }

    \[
    \binom{n}{k}=\binom{n}{m}\geqslant\binom{n}{2}=\frac{n(n-1)}{2},
    \]

    donc

    因此
    {: .zh }

    \[
    \frac{1}{\binom{n}{k}}\leqslant\frac{2}{n(n-1)}.
    \]

    Pour \(n\geqslant3\), en isolant les termes extrêmes,

    当 \(n\geqslant3\) 时，分离出首末项，得
    {: .zh }

    \[
    a_n=1+\frac1n+\sum_{k=2}^{n-2}\frac{1}{\binom{n}{k}}+\frac1n+1.
    \]

    Tous les termes de cette somme étant positifs, \(a_n\geqslant2\). Et d'après l'inégalité ci-dessus,

    该和式中各项均为正，故 \(a_n\geqslant2\)。又由上述不等式，
    {: .zh }

    \[
    a_n\leqslant2+\frac2n+(n-3)\cdot\frac{2}{n(n-1)}
    =2+\frac2n+\frac{2(n-3)}{n(n-1)}\longrightarrow2.
    \]

    Par le <strong>théorème de la limite par encadrement</strong>, \(a_n\to2\). (Les cas \(n=1\) et \(n=2\) se vérifient directement : \(a_1=2\) et \(a_2=\frac52\).)

    由<strong>夹逼定理</strong>（théorème de la limite par encadrement），\(a_n\to2\)。 （\(n=1\) 与 \(n=2\) 的情形可直接验证：\(a_1=2\)，\(a_2=\frac52\)。）
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">suite majorée　有上界的数列</p>

Soit \((a_n)\) une suite majorée telle que, pour tout \(n\in\mathbb{N}^*\), \(a_{n+1}-a_n>-\frac{1}{n^2}\). Montrer que \((a_n)\) converge. (On pourra utiliser le fait que la suite \(\left(\sum\limits_{k=1}^{n}\frac{1}{k^2}\right)\) est convergente.)

设 \((a_n)\) 为有上界的数列，且对任意 \(n\in\mathbb{N}^*\)， \(a_{n+1}-a_n>-\frac{1}{n^2}\)。证明 \((a_n)\) 收敛。（可利用数列 \(\left(\sum\limits_{k=1}^{n}\frac{1}{k^2}\right)\) 收敛这一事实。）
{: .zh }

!!! sol ""

    <strong>Solution.</strong> La suite \((a_n)\) est majorée : il existe \(M\in\mathbb{R}\) tel que, pour tout \(n\in\mathbb{N}^*\), \(a_n\leqslant M\).

    <strong>解.</strong> 数列 \((a_n)\) 有上界：存在 \(M\in\mathbb{R}\)，使得对任意 \(n\in\mathbb{N}^*\) 有 \(a_n\leqslant M\)。
    {: .zh }

    Posons, pour \(n\geqslant1\), \(S_n=\sum\limits_{k=1}^{n}\frac{1}{k^2}\) et \(c_n=a_n+S_{n-1}\) (avec \(S_0=0\)).

    对 \(n\geqslant1\)，令 \(S_n=\sum\limits_{k=1}^{n}\frac{1}{k^2}\)， \(c_n=a_n+S_{n-1}\)（约定 \(S_0=0\)）。
    {: .zh }

    D'une part,

    一方面，
    {: .zh }

    \[
    c_{n+1}-c_n=(a_{n+1}-a_n)+\frac{1}{n^2}>0,
    \]

    donc \((c_n)\) est strictement croissante.

    故 \((c_n)\) 严格递增。
    {: .zh }

    D'autre part, la suite \((S_n)\) est convergente (hypothèse); comme elle est croissante (termes positifs), elle est majorée par sa limite \(S=\sum\limits_{k=1}^{+\infty}\frac{1}{k^2}\). Ainsi

    另一方面，数列 \((S_n)\) 收敛（题设）；又因其各项为正而递增，故以极限 \(S=\sum\limits_{k=1}^{+\infty}\frac{1}{k^2}\) 为上界。于是
    {: .zh }

    \[
    c_n=a_n+S_{n-1}\leqslant M+S.
    \]

    La suite \((c_n)\) est donc croissante et majorée : d'après le <strong>théorème de la limite monotone</strong>, elle converge. Notons \(L\) sa limite. Enfin, \(a_n=c_n-S_{n-1}\), et \((S_{n-1})\) converge vers \(S\); donc

    因此 \((c_n)\) 递增且有上界：由<strong>单调极限定理</strong>（théorème de la limite monotone），它收敛。记其极限为 \(L\)。最后，\(a_n=c_n-S_{n-1}\)，而 \((S_{n-1})\) 收敛于 \(S\)；所以
    {: .zh }

    \[
    a_n\longrightarrow L-S.
    \]

    La suite \((a_n)\) converge.

    数列 \((a_n)\) 收敛。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">limites de produits　乘积的极限</p>

Trouver

求
{: .zh }

\[
\textbf{1.}\quad \lim_{n\to+\infty}\prod_{k=1}^{n}\left(1+\frac{k^2}{cn^3}\right)
\quad\text{où }c>0.
\]

\[
\textbf{2.}\quad \lim_{n\to+\infty}\prod_{k=1}^{n}\left(1-\frac{k^2}{cn^3}\right)
\quad\text{où }c>1.
\]

!!! sol ""

    <strong>1.</strong> Posons \(x_{n,k}=\frac{k^2}{cn^3}\) pour \(1\leqslant k\leqslant n\). Comme \(0<k\leqslant n\), on a \(0<x_{n,k}\leqslant\frac{1}{cn}\), donc \(x_{n,k}\to0\) uniformément en \(k\).

    <strong>1.</strong> 令 \(x_{n,k}=\frac{k^2}{cn^3}\)，\(1\leqslant k\leqslant n\)。 由于 \(0<k\leqslant n\)，有 \(0<x_{n,k}\leqslant\frac{1}{cn}\)，故 \(x_{n,k}\) 关于 \(k\) 一致地趋于 \(0\)。
    {: .zh }

    Posons \(P_n=\prod\limits_{k=1}^{n}(1+x_{n,k})>0\); alors

    令 \(P_n=\prod\limits_{k=1}^{n}(1+x_{n,k})>0\)，则
    {: .zh }

    \[
    \ln P_n=\sum_{k=1}^{n}\ln(1+x_{n,k}).
    \]

    Le développement limité \(\ln(1+x)=x+O(x^2)\) en \(0\) donne, pour une constante \(C>0\),

    在 \(0\) 处的渐近展开 \(\ln(1+x)=x+O(x^2)\) 给出：存在常数 \(C>0\)，使
    {: .zh }

    \[
    \left|\ln P_n-\sum_{k=1}^{n}x_{n,k}\right|
    \leqslant C\sum_{k=1}^{n}x_{n,k}^2
    \leqslant C\,n\left(\frac{1}{cn}\right)^2=\frac{C}{c^2n}\longrightarrow0.
    \]

    D'autre part,

    另一方面，
    {: .zh }

    \[
    \sum_{k=1}^{n}x_{n,k}=\frac{1}{cn^3}\sum_{k=1}^{n}k^2
    =\frac{1}{cn^3}\cdot\frac{n(n+1)(2n+1)}{6}
    =\frac{(n+1)(2n+1)}{6cn^2}\longrightarrow\frac{1}{3c}.
    \]

    Donc \(\ln P_n\to\frac{1}{3c}\), et par continuité de l'exponentielle,

    因此 \(\ln P_n\to\frac{1}{3c}\)，由指数函数的连续性，
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\prod_{k=1}^{n}\left(1+\frac{k^2}{cn^3}\right)
    =e^{1/(3c)}}.
    \]

    <strong>2.</strong> Comme \(c>1\), pour tout \(n\geqslant1\) et tout \(1\leqslant k\leqslant n\), on a \(0<x_{n,k}=\frac{k^2}{cn^3}\leqslant\frac{1}{cn}<1\) : tous les facteurs sont strictement positifs et les logarithmes sont bien définis. De plus, pour \(n\) assez grand, \(x_{n,k}\leqslant\frac12\), et le développement limité \(\ln(1-x)=-x+O(x^2)\) en \(0\) s'applique.

    <strong>2.</strong> 由于 \(c>1\)，对任意 \(n\geqslant1\) 与 \(1\leqslant k\leqslant n\)， 有 \(0<x_{n,k}=\frac{k^2}{cn^3}\leqslant\frac{1}{cn}<1\)：所有因子严格为正， 对数有良好定义。此外，当 \(n\) 足够大时 \(x_{n,k}\leqslant\frac12\)， 故可应用 \(0\) 处的展开 \(\ln(1-x)=-x+O(x^2)\)。
    {: .zh }

    En reprenant le calcul de la question 1,

    重复第 1 问的计算，
    {: .zh }

    \[
    \ln P_n=-\sum_{k=1}^{n}x_{n,k}+O\left(\sum_{k=1}^{n}x_{n,k}^2\right)
    \longrightarrow-\frac{1}{3c},
    \]

    donc

    因此
    {: .zh }

    \[
    \boxed{\lim_{n\to+\infty}\prod_{k=1}^{n}\left(1-\frac{k^2}{cn^3}\right)
    =e^{-1/(3c)}}.
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第二部分（Exercices supplémentaires）核心术语</span>"

    - <strong>vitesse de convergence</strong>：收敛速度
    - <strong>suite définie par récurrence</strong>：递推定义的数列
    - <strong>suite décroissante minorée</strong>：递减且有下界的数列
    - <strong>limite finie non nulle</strong>：有限的非零极限
    - <strong>inverse</strong>：倒数
    - <strong>coefficient binomial</strong>：二项式系数
    - <strong>binôme de Newton</strong>：牛顿二项式
    - <strong>par symétrie</strong>：由对称性
    - <strong>croissante sur \([0,n/2]\)</strong>：在 \([0,n/2]\) 上递增
    - <strong>produit</strong>：乘积

    - <strong>facteur</strong>：因子
    - <strong>bien défini</strong>：有良好定义的
    - <strong>uniformément en \(k\)</strong>：关于 \(k\) 一致地
    - <strong>logarithme</strong>：对数
    - <strong>somme partielle</strong>：部分和
    - <strong>série convergente</strong>：收敛级数
    - <strong>suite majorée</strong>：有上界的数列
    - <strong>on minore / on majore</strong>：给出下界 / 上界
    - <strong>en isolant les termes extrêmes</strong>：分离出首末项
    - <strong>par suite</strong>：从而
