---
title: TD8 级数判别法解答
comments: true
---

# 第 8 次习题课　级数判别法

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°8 — Critères sur les séries</p>
<p class="lecture-badge">ÉNONCÉ &amp; CORRIGÉ · 题目与参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。方框内为按法国习题课标准方式撰写的参考解答：先引用定理，再逐步推导，最后框出结论。

    本页为第 8 次习题课的题目与参考解答，与第 3 章「数项级数」配套。

## Exercices à préparer <span class="heading-zh">课前准备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">Convergence absolue　绝对收敛</p>

Montrer que la série \(\displaystyle\sum\frac{e^{in}}{n^2}\) est convergente.
{: .fr-exo }

证明级数 \(\displaystyle\sum\frac{e^{in}}{n^2}\) 收敛。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour tout \(n\geqslant1\), on a \(|e^{in}|=1\), donc \(\left|\dfrac{e^{in}}{n^2}\right|=\dfrac{1}{n^2}\).
    {: .fr-exo }

    <strong>解.</strong> 对任意 \(n\geqslant1\)，有 \(|e^{in}|=1\)，故 \(\left|\dfrac{e^{in}}{n^2}\right|=\dfrac{1}{n^2}\)。
    {: .zh }

    La série \(\displaystyle\sum_{n=1}^{+\infty}\frac{1}{n^2}\) est une <strong>série de Riemann</strong> convergente (exposant \(2>1\)). D'après le <strong>théorème de convergence absolue</strong>, la série \(\displaystyle\sum_{n=1}^{+\infty}\frac{e^{in}}{n^2}\) est convergente (elle converge même absolument).
    {: .fr-exo }

    级数 \(\displaystyle\sum_{n=1}^{+\infty}\frac{1}{n^2}\) 是收敛的<strong>黎曼级数</strong>（série de Riemann，指数 \(2>1\)）。由<strong>绝对收敛定理</strong>，级数 \(\displaystyle\sum_{n=1}^{+\infty}\frac{e^{in}}{n^2}\) 收敛（事实上绝对收敛）。
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{e^{in}}{n^2}\ \text{converge absolument}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">Critère de d'Alembert　达朗贝尔判别法</p>

Déterminer la nature des séries suivantes :
{: .fr-exo }

判断下列级数的性质（收敛或发散）：
{: .zh }

\[
\text{(a)}\ \sum\frac{n}{2^n},\qquad
\text{(b)}\ \sum\frac{n!}{2^n},\qquad
\text{(c)}\ \sum\frac{n!}{n^n}.
\]

!!! sol ""

    <strong>Solution.</strong> On applique le <strong>critère de d'Alembert</strong> : on calcule \(\ell=\displaystyle\lim_{n\to+\infty}\left|\frac{u_{n+1}}{u_n}\right|\).
    {: .fr-exo }

    <strong>解.</strong> 应用<strong>达朗贝尔判别法</strong>：计算 \(\ell=\displaystyle\lim_{n\to+\infty}\left|\frac{u_{n+1}}{u_n}\right|\)。
    {: .zh }

    <strong>(a)</strong> Pour \(u_n=\dfrac{n}{2^n}>0\),
    {: .fr-exo }

    <strong>(a)</strong> 对 \(u_n=\dfrac{n}{2^n}>0\)，有
    {: .zh }

    \[
    \frac{u_{n+1}}{u_n}
    =\frac{n+1}{2^{n+1}}\cdot\frac{2^n}{n}
    =\frac{n+1}{2n}\longrightarrow\frac12<1,
    \]

    donc \(\displaystyle\sum_{n=1}^{+\infty}\frac{n}{2^n}\) <strong>converge absolument</strong>.
    {: .fr-exo }

    故 \(\displaystyle\sum_{n=1}^{+\infty}\frac{n}{2^n}\) <strong>绝对收敛</strong>。
    {: .zh }

    <strong>(b)</strong> Pour \(u_n=\dfrac{n!}{2^n}>0\),
    {: .fr-exo }

    <strong>(b)</strong> 对 \(u_n=\dfrac{n!}{2^n}>0\)，有
    {: .zh }

    \[
    \frac{u_{n+1}}{u_n}
    =\frac{(n+1)!}{2^{n+1}}\cdot\frac{2^n}{n!}
    =\frac{n+1}{2}\longrightarrow+\infty>1,
    \]

    donc \(\displaystyle\sum_{n=1}^{+\infty}\frac{n!}{2^n}\) <strong>diverge grossièrement</strong>.
    {: .fr-exo }

    故 \(\displaystyle\sum_{n=1}^{+\infty}\frac{n!}{2^n}\) <strong>粗发散</strong>（diverge grossièrement，通项不趋于 \(0\)）。
    {: .zh }

    <strong>(c\)</strong> Pour \(u_n=\dfrac{n!}{n^n}>0\),
    {: .fr-exo }

    <strong>(c\)</strong> 对 \(u_n=\dfrac{n!}{n^n}>0\)，有
    {: .zh }

    \[
    \frac{u_{n+1}}{u_n}
    =\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}
    =\left(\frac{n}{n+1}\right)^n
    =\frac{1}{\left(1+\frac1n\right)^n}
    \longrightarrow\frac1e<1,
    \]

    donc \(\displaystyle\sum_{n=1}^{+\infty}\frac{n!}{n^n}\) <strong>converge absolument</strong>.
    {: .fr-exo }

    故 \(\displaystyle\sum_{n=1}^{+\infty}\frac{n!}{n^n}\) <strong>绝对收敛</strong>。
    {: .zh }

    \[
    \boxed{\text{(a) et (c) convergent absolument ; (b) diverge grossièrement.}}
    \]

    <p class="cqfd">∎</p>

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">Séries géométriques　几何级数</p>

Étudier la convergence et calculer la somme de \(\displaystyle\sum_{n\geqslant0}\bigl(3+(-1)^n\bigr)^{-n}\).
{: .fr-exo }

研究级数 \(\displaystyle\sum_{n\geqslant0}\bigl(3+(-1)^n\bigr)^{-n}\) 的收敛性并求和。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On sépare les termes d'indice pair et d'indice impair. Pour \(n=2k\),
    {: .fr-exo }

    <strong>解.</strong> 把偶数项与奇数项分开。当 \(n=2k\) 时，
    {: .zh }

    \[
    \bigl(3+(-1)^{2k}\bigr)^{-2k}=4^{-2k}=\left(\frac1{16}\right)^k ;
    \]

    pour \(n=2k+1\),
    {: .fr-exo }

    当 \(n=2k+1\) 时，
    {: .zh }

    \[
    \bigl(3+(-1)^{2k+1}\bigr)^{-(2k+1)}=2^{-(2k+1)}=\frac12\left(\frac14\right)^k.
    \]

    Ce sont deux <strong>séries géométriques</strong> de raisons respectives \(\frac1{16}\) et \(\frac14\), toutes deux dans \(]0,1[\) : elles convergent. Leurs sommes valent
    {: .fr-exo }

    这是两个<strong>几何级数</strong>，公比分别为 \(\frac1{16}\) 与 \(\frac14\)，均属于 \(]0,1[\)：故都收敛。它们的和分别为
    {: .zh }

    \[
    \sum_{k=0}^{+\infty}4^{-2k}=\frac{1}{1-\frac1{16}}=\frac{16}{15},
    \qquad
    \sum_{k=0}^{+\infty}2^{-(2k+1)}=\frac12\cdot\frac{1}{1-\frac14}=\frac23.
    \]

    La série proposée converge (absolument, car \(\sum|a_n|\) est la somme de ces deux séries convergentes) et
    {: .fr-exo }

    原级数收敛（事实上绝对收敛，因为 \(\sum|a_n|\) 正是上述两个收敛级数之和），并且
    {: .zh }

    \[
    \boxed{\sum_{n=0}^{+\infty}\bigl(3+(-1)^n\bigr)^{-n}
    =\frac{16}{15}+\frac23=\frac{26}{15}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">Série alternée et série télescopique　交错级数与裂项级数</p>

On considère la suite \((\alpha_n)\) telle que \(\forall n\in\mathbb{N}^*\), \(\alpha_n=\dfrac{(-1)^n}{\sqrt n}\).
{: .fr-exo }

考虑满足 \(\forall n\in\mathbb{N}^*\)、\(\alpha_n=\dfrac{(-1)^n}{\sqrt n}\) 的数列 \((\alpha_n)\)。
{: .zh }

<strong>1.</strong> Montrer que la série \(\sum\alpha_n\) converge mais qu'elle ne converge pas absolument.
{: .fr-exo }

<strong>1.</strong> 证明级数 \(\sum\alpha_n\) 收敛，但不绝对收敛。
{: .zh }

<strong>2.</strong> Montrer que la série \(\sum u_n\), de terme général \(\forall n\in\mathbb{N}^*\), \(u_n=\alpha_{n+1}-\alpha_n\), converge.
{: .fr-exo }

<strong>2.</strong> 证明通项为 \(\forall n\in\mathbb{N}^*\)、\(u_n=\alpha_{n+1}-\alpha_n\) 的级数 \(\sum u_n\) 收敛。
{: .zh }

<strong>3.</strong> Montrer que la série \(\sum u_n\) ne converge pas absolument.
{: .fr-exo }

<strong>3.</strong> 证明级数 \(\sum u_n\) 不绝对收敛。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> La suite \(\left(\dfrac{1}{\sqrt n}\right)_{n\geqslant1}\) est positive, décroissante et tend vers \(0\). D'après le <strong>critère des séries alternées</strong>, la série \(\sum\alpha_n\) converge.
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 数列 \(\left(\dfrac{1}{\sqrt n}\right)_{n\geqslant1}\) 为正、递减且趋于 \(0\)。由<strong>交错级数判别法</strong>，级数 \(\sum\alpha_n\) 收敛。
    {: .zh }

    Mais \(\displaystyle\sum|\alpha_n|=\sum\frac{1}{\sqrt n}\) est une série de Riemann d'exposant \(\frac12\leqslant1\) : elle diverge. Donc \(\sum\alpha_n\) ne converge pas absolument.
    {: .fr-exo }

    但 \(\displaystyle\sum|\alpha_n|=\sum\frac{1}{\sqrt n}\) 是指数 \(\frac12\leqslant1\) 的黎曼级数：它发散。因此 \(\sum\alpha_n\) 不绝对收敛。
    {: .zh }

    <strong>2.</strong> La somme partielle est <strong>télescopique</strong> :
    {: .fr-exo }

    <strong>2.</strong> 部分和<strong>裂项</strong>：
    {: .zh }

    \[
    \sum_{n=1}^{N}u_n=\sum_{n=1}^{N}(\alpha_{n+1}-\alpha_n)=\alpha_{N+1}-\alpha_1.
    \]

    Comme \(\alpha_n\to0\) et \(\alpha_1=-1\), on obtient
    {: .fr-exo }

    由于 \(\alpha_n\to0\) 且 \(\alpha_1=-1\)，得
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}u_n=-\alpha_1=1.}
    \]

    <strong>3.</strong> Pour tout \(n\geqslant1\),
    {: .fr-exo }

    <strong>3.</strong> 对任意 \(n\geqslant1\)，有
    {: .zh }

    \[
    |u_n|=\left|\frac{(-1)^{n+1}}{\sqrt{n+1}}-\frac{(-1)^n}{\sqrt n}\right|
    =\frac{1}{\sqrt{n+1}}+\frac{1}{\sqrt n}\geqslant\frac{1}{\sqrt n}.
    \]

    Or \(\displaystyle\sum\frac{1}{\sqrt n}\) diverge; par comparaison de séries à termes positifs, \(\sum|u_n|\) diverge. La série \(\sum u_n\) ne converge donc pas absolument.
    {: .fr-exo }

    而 \(\displaystyle\sum\frac{1}{\sqrt n}\) 发散；由正项级数的比较判别法，\(\sum|u_n|\) 发散。因此级数 \(\sum u_n\) 不绝对收敛。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">Séries de Bertrand　伯特兰级数</p>

<strong>1.</strong> En dérivant la fonction \(x\mapsto\ln(\ln x)\) et en utilisant le théorème de comparaison série-intégrale, montrer que la série \(\displaystyle\sum_{n=2}^{+\infty}\frac{1}{n(\ln n)}\) diverge.
{: .fr-exo }

<strong>1.</strong> 对函数 \(x\mapsto\ln(\ln x)\) 求导，并利用级数–积分比较定理，证明级数 \(\displaystyle\sum_{n=2}^{+\infty}\frac{1}{n(\ln n)}\) 发散。
{: .zh }

<strong>2.</strong> Soit \(\beta\in\mathbb{R}\setminus\{1\}\).
{: .fr-exo }

<strong>2.</strong> 设 \(\beta\in\mathbb{R}\setminus\{1\}\)。
{: .zh }

<strong>(a)</strong> Calculer la dérivée de la fonction \(F_\beta:x\mapsto\ln^{1-\beta}x\). On pose \(f_\beta=\dfrac{F_\beta'}{1-\beta}\).
{: .fr-exo }

<strong>(a)</strong> 计算函数 \(F_\beta:x\mapsto\ln^{1-\beta}x\) 的导数。令 \(f_\beta=\dfrac{F_\beta'}{1-\beta}\)。
{: .zh }

<strong>(b)</strong> Faire une étude de la fonction \(f_\beta\).
{: .fr-exo }

<strong>(b)</strong> 研究函数 \(f_\beta\)。
{: .zh }

<strong>(c\)</strong> Montrer que pour \(n\) suffisamment grand on peut appliquer le théorème de comparaison série-intégrale pour étudier la convergence de la série
{: .fr-exo }

<strong>(c\)</strong> 证明当 \(n\) 充分大时可以应用级数–积分比较定理来研究级数
{: .zh }

\[
\sum_{n=2}^{+\infty}\frac{1}{n(\ln n)^\beta}
\]

<strong>3.</strong> Discuter selon les valeurs du paramètre \(\beta\in\mathbb{R}\) la nature, absolument convergente, semi-convergente ou divergente, de la série :
{: .fr-exo }

<strong>3.</strong> 按参数 \(\beta\in\mathbb{R}\) 的取值，讨论级数的性质：绝对收敛、半收敛还是发散：
{: .zh }

\[
\sum_{n=2}^{+\infty}\frac{(-1)^n}{n(\ln n)^\beta}.
\]

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> La fonction \(x\mapsto\ln(\ln x)\) est dérivable sur \([2,+\infty[\) et sa dérivée est \(x\mapsto\dfrac{1}{x\ln x}\).
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 函数 \(x\mapsto\ln(\ln x)\) 在 \([2,+\infty[\) 上可导，其导数为 \(x\mapsto\dfrac{1}{x\ln x}\)。
    {: .zh }

    Cette dérivée est continue, positive et décroissante sur \([2,+\infty[\) (c'est l'inverse de la fonction croissante \(x\ln x\)). D'après le <strong>théorème de comparaison série-intégrale</strong>, la série \(\displaystyle\sum\frac{1}{n\ln n}\) a la même nature que l'intégrale
    {: .fr-exo }

    该导数在 \([2,+\infty[\) 上连续、为正且递减（它是递增函数 \(x\ln x\) 的倒数）。由<strong>级数–积分比较定理</strong>，级数 \(\displaystyle\sum\frac{1}{n\ln n}\) 与积分同性质：
    {: .zh }

    \[
    \int_2^N\frac{dt}{t\ln t}
    =\bigl[\ln(\ln t)\bigr]_2^N
    =\ln(\ln N)-\ln(\ln 2).
    \]

    Comme \(\ln(\ln N)\to+\infty\), l'intégrale diverge, donc la série \(\displaystyle\sum_{n=2}^{+\infty}\frac{1}{n\ln n}\) <strong>diverge</strong>.
    {: .fr-exo }

    由于 \(\ln(\ln N)\to+\infty\)，该积分发散，故级数 \(\displaystyle\sum_{n=2}^{+\infty}\frac{1}{n\ln n}\) <strong>发散</strong>。
    {: .zh }

    <strong>2. (a)</strong> Pour \(x>1\),
    {: .fr-exo }

    <strong>2. (a)</strong> 当 \(x>1\) 时，
    {: .zh }

    \[
    F_\beta'(x)=(1-\beta)(\ln x)^{-\beta}\cdot\frac1x
    =\frac{1-\beta}{x(\ln x)^\beta},
    \qquad\text{donc}\qquad
    \boxed{f_\beta(x)=\frac{F_\beta'(x)}{1-\beta}=\frac{1}{x(\ln x)^\beta}.}
    \]

    <strong>(b)</strong> La fonction \(f_\beta\) est définie et positive sur \(]1,+\infty[\), et sa dérivée vaut
    {: .fr-exo }

    <strong>(b)</strong> 函数 \(f_\beta\) 在 \(]1,+\infty[\) 上有定义且为正，其导数为
    {: .zh }

    \[
    f_\beta'(x)=-\frac{\ln x+\beta}{x^2(\ln x)^{\beta+1}}.
    \]

    <strong>Si \(\beta>0\)</strong>, alors \(\ln x+\beta>0\) : \(f_\beta\) est <strong>strictement décroissante</strong> sur \(]1,+\infty[\), avec \(\displaystyle\lim_{x\to1^+}f_\beta(x)=+\infty\) et \(\displaystyle\lim_{x\to+\infty}f_\beta(x)=0\).
    {: .fr-exo }

    <strong>若 \(\beta>0\)</strong>，则 \(\ln x+\beta>0\)：\(f_\beta\) 在 \(]1,+\infty[\) 上<strong>严格递减</strong>，且 \(\displaystyle\lim_{x\to1^+}f_\beta(x)=+\infty\)，\(\displaystyle\lim_{x\to+\infty}f_\beta(x)=0\)。
    {: .zh }

    <strong>Si \(\beta<0\)</strong>, on pose \(\gamma=-\beta>0\) : \(f_\beta(x)=\dfrac{(\ln x)^\gamma}{x}\) et
    {: .fr-exo }

    <strong>若 \(\beta<0\)</strong>，令 \(\gamma=-\beta>0\)：\(f_\beta(x)=\dfrac{(\ln x)^\gamma}{x}\)，且
    {: .zh }

    \[
    f_\beta'(x)=\frac{(\ln x)^{\gamma-1}(\gamma-\ln x)}{x^2}.
    \]

    Ainsi \(f_\beta\) est croissante sur \(]1,e^{-\beta}[\), atteint son maximum \(\left(\dfrac{-\beta}{e}\right)^{-\beta}\) en \(x=e^{-\beta}\), puis décroît sur \(]e^{-\beta},+\infty[\); elle tend vers \(0\) aux deux bornes.
    {: .fr-exo }

    于是 \(f_\beta\) 在 \(]1,e^{-\beta}[\) 上递增，在 \(x=e^{-\beta}\) 处取得最大值 \(\left(\dfrac{-\beta}{e}\right)^{-\beta}\)，然后在 \(]e^{-\beta},+\infty[\) 上递减；两端极限均为 \(0\)。
    {: .zh }

    Dans tous les cas, \(f_\beta\) est positive et <strong>décroissante sur \([A,+\infty[\)</strong> pour un certain \(A>1\).
    {: .fr-exo }

    无论哪种情形，\(f_\beta\) 都为正，且在某个 \([A,+\infty[\) 上<strong>递减</strong>。
    {: .zh }

    <strong>(c\)</strong> D'après (b), pour \(n\) suffisamment grand (\(n\geqslant n_0\)), la fonction \(f_\beta\) est positive, continue et décroissante sur \([n_0,+\infty[\); le <strong>théorème de comparaison série-intégrale</strong> s'applique donc à \(\sum f_\beta(n)\). Or
    {: .fr-exo }

    <strong>(c\)</strong> 由 (b)，当 \(n\) 充分大（\(n\geqslant n_0\)）时，\(f_\beta\) 在 \([n_0,+\infty[\) 上为正、连续且递减；因此可以对 \(\sum f_\beta(n)\) 应用<strong>级数–积分比较定理</strong>。而
    {: .zh }

    \[
    \int_2^N f_\beta(x)\,dx
    =\frac{F_\beta(N)-F_\beta(2)}{1-\beta}
    =\frac{(\ln N)^{1-\beta}-(\ln 2)^{1-\beta}}{1-\beta}.
    \]

    Si \(\beta>1\), alors \(1-\beta<0\) et \((\ln N)^{1-\beta}\to0\) : l'intégrale converge, donc \(\displaystyle\sum_{n=2}^{+\infty}\frac{1}{n(\ln n)^\beta}\) converge.
    {: .fr-exo }

    若 \(\beta>1\)，则 \(1-\beta<0\)，\((\ln N)^{1-\beta}\to0\)：积分收敛，故 \(\displaystyle\sum_{n=2}^{+\infty}\frac{1}{n(\ln n)^\beta}\) 收敛。
    {: .zh }

    Si \(\beta<1\), alors \(1-\beta>0\) et \((\ln N)^{1-\beta}\to+\infty\) : l'intégrale diverge, donc la série diverge.
    {: .fr-exo }

    若 \(\beta<1\)，则 \(1-\beta>0\)，\((\ln N)^{1-\beta}\to+\infty\)：积分发散，故级数发散。
    {: .zh }

    Avec le cas \(\beta=1\) traité en 1., on a donc
    {: .fr-exo }

    结合第 1 问处理的 \(\beta=1\) 情形，得到
    {: .zh }

    \[
    \boxed{\sum_{n=2}^{+\infty}\frac{1}{n(\ln n)^\beta}\ \text{converge}
    \iff\beta>1.}
    \]

    <strong>3.</strong> <strong>Cas \(\beta>1\) :</strong> d'après 2(c\), la série \(\displaystyle\sum\frac{1}{n(\ln n)^\beta}\) converge, donc la série alternée converge <strong>absolument</strong>.
    {: .fr-exo }

    <strong>3.</strong> <strong>情形 \(\beta>1\)：</strong>由 2(c\)，级数 \(\displaystyle\sum\frac{1}{n(\ln n)^\beta}\) 收敛，故交错级数<strong>绝对收敛</strong>。
    {: .zh }

    <strong>Cas \(\beta\leqslant1\) :</strong> posons \(v_n=\dfrac{1}{n(\ln n)^\beta}>0\). La série \(\sum v_n\) diverge (question 1 pour \(\beta=1\), question 2(c\) pour \(\beta<1\)), donc \(\sum(-1)^nv_n\) ne converge pas absolument.
    {: .fr-exo }

    <strong>情形 \(\beta\leqslant1\)：</strong>令 \(v_n=\dfrac{1}{n(\ln n)^\beta}>0\)。级数 \(\sum v_n\) 发散（\(\beta=1\) 见第 1 问，\(\beta<1\) 见第 2(c\) 问），因此 \(\sum(-1)^nv_n\) 不绝对收敛。
    {: .zh }

    Montrons qu'elle converge. La suite \((v_n)\) est positive, tend vers \(0\), et elle est décroissante à partir d'un certain rang (question 2(b) si \(\beta\neq1\); \(v_n=\frac{1}{n\ln n}\) est décroissante si \(\beta=1\)). D'après le <strong>critère des séries alternées</strong>, \(\sum(-1)^nv_n\) converge.
    {: .fr-exo }

    证明它收敛。数列 \((v_n)\) 为正、趋于 \(0\)，且从某一项起递减（\(\beta\neq1\) 时见第 2(b) 问；\(\beta=1\) 时 \(v_n=\frac{1}{n\ln n}\) 递减）。由<strong>交错级数判别法</strong>，\(\sum(-1)^nv_n\) 收敛。
    {: .zh }

    Elle est donc <strong>semi-convergente</strong>. En conclusion :
    {: .fr-exo }

    因此它是<strong>半收敛</strong>的。综上：
    {: .zh }

    \[
    \boxed{
    \begin{cases}
    \beta>1 &: \text{convergence absolue},\\[2pt]
    \beta\leqslant1 &: \text{semi-convergence}.
    \end{cases}}
    \]

    <p class="cqfd">∎</p>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">Semi-convergence ou convergence absolue　半收敛还是绝对收敛</p>

Pour \(a\in\mathbb{R}\), déterminer si les séries suivantes sont absolument convergentes, semi-convergentes ou divergentes :
{: .fr-exo }

对 \(a\in\mathbb{R}\)，判断下列级数是绝对收敛、半收敛还是发散：
{: .zh }

1. \(\displaystyle\sum_{n=1}^{+\infty}\frac{a^n}{n}\)
2. \(\displaystyle\sum_{n=1}^{+\infty}\left(\frac{an}{n+1}\right)^{n}\)
3. \(\displaystyle\sum_{n=1}^{+\infty}\frac{(-1)^{\lfloor\sqrt n\rfloor}}{n^a}\)

(Indication : regrouper les termes pour \(n\in[N^2,(N+1)^2-1]\), \(N\in\mathbb{N}^*\).)
{: .fr-exo }

（提示：把 \(n\in[N^2,(N+1)^2-1]\)，\(N\in\mathbb{N}^*\) 的项合并。）
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> Si \(a=0\), la série est nulle, donc absolument convergente. On suppose \(a\neq0\) et l'on applique le critère de d'Alembert :
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 若 \(a=0\)，级数为零级数，绝对收敛。以下设 \(a\neq0\)，应用达朗贝尔判别法：
    {: .zh }

    \[
    \left|\frac{u_{n+1}}{u_n}\right|
    =\frac{|a|^{n+1}}{n+1}\cdot\frac{n}{|a|^n}
    =|a|\,\frac{n}{n+1}\longrightarrow|a|.
    \]

    Si \(|a|<1\), le critère de d'Alembert donne la <strong>convergence absolue</strong>. Si \(|a|>1\), la série <strong>diverge grossièrement</strong>.
    {: .fr-exo }

    若 \(|a|<1\)，达朗贝尔判别法给出<strong>绝对收敛</strong>。若 \(|a|>1\)，级数<strong>粗发散</strong>。
    {: .zh }

    Si \(a=1\), on obtient la série harmonique \(\sum\frac1n\), qui diverge. Si \(a=-1\), on obtient la série harmonique alternée \(\sum\frac{(-1)^n}{n}\), qui converge d'après le critère des séries alternées mais ne converge pas absolument : elle est <strong>semi-convergente</strong>.
    {: .fr-exo }

    若 \(a=1\)，得到调和级数 \(\sum\frac1n\)，它发散。若 \(a=-1\)，得到交错调和级数 \(\sum\frac{(-1)^n}{n}\)，由交错级数判别法它收敛，但不绝对收敛：它是<strong>半收敛</strong>的。
    {: .zh }

    \[
    \boxed{\text{Série 1 : absolument convergente si }|a|<1,\ \text{semi-convergente
    si }a=-1,\ \text{divergente sinon.}}
    \]

    <strong>2.</strong> Posons \(u_n=\left(\dfrac{an}{n+1}\right)^n\), de sorte que \(|u_n|=\left(\dfrac{|a|n}{n+1}\right)^n\).
    {: .fr-exo }

    <strong>2.</strong> 令 \(u_n=\left(\dfrac{an}{n+1}\right)^n\)，则 \(|u_n|=\left(\dfrac{|a|n}{n+1}\right)^n\)。
    {: .zh }

    Si \(|a|<1\), soit \(q\in\,]|a|,1[\). Pour \(n\) assez grand, \(\dfrac{|a|n}{n+1}\leqslant q\), donc \(|u_n|\leqslant q^n\) : par comparaison avec une série géométrique, \(\sum u_n\) <strong>converge absolument</strong>.
    {: .fr-exo }

    若 \(|a|<1\)，取 \(q\in\,]|a|,1[\)。当 \(n\) 充分大时 \(\dfrac{|a|n}{n+1}\leqslant q\)，故 \(|u_n|\leqslant q^n\)：与几何级数比较，\(\sum u_n\) <strong>绝对收敛</strong>。
    {: .zh }

    Si \(|a|=1\), alors \(|u_n|=\left(\dfrac{n}{n+1}\right)^n\longrightarrow e^{-1}\neq0\) : le terme général ne tend pas vers \(0\), la série <strong>diverge grossièrement</strong>.
    {: .fr-exo }

    若 \(|a|=1\)，则 \(|u_n|=\left(\dfrac{n}{n+1}\right)^n\longrightarrow e^{-1}\neq0\)：通项不趋于 \(0\)，级数<strong>粗发散</strong>。
    {: .zh }

    Si \(|a|>1\), alors \(\dfrac{|a|n}{n+1}\to|a|>1\); pour \(n\) assez grand, \(\dfrac{|a|n}{n+1}\geqslant q>1\), donc \(|u_n|\geqslant q^n\to+\infty\) : la série <strong>diverge grossièrement</strong>.
    {: .fr-exo }

    若 \(|a|>1\)，则 \(\dfrac{|a|n}{n+1}\to|a|>1\)；当 \(n\) 充分大时 \(\dfrac{|a|n}{n+1}\geqslant q>1\)，故 \(|u_n|\geqslant q^n\to+\infty\)：级数<strong>粗发散</strong>。
    {: .zh }

    \[
    \boxed{\text{Série 2 : absolument convergente si }|a|<1,\ \text{divergente si }|a|\geqslant1.}
    \]

    <strong>3.</strong> Pour \(N\in\mathbb{N}^*\), posons \(I_N=\bigl[N^2,(N+1)^2-1\bigr]\cap\mathbb{N}\) : c'est un bloc de \(2N+1\) entiers, sur lequel \(\lfloor\sqrt n\rfloor=N\). Notons
    {: .fr-exo }

    <strong>3.</strong> 对 \(N\in\mathbb{N}^*\)，令 \(I_N=\bigl[N^2,(N+1)^2-1\bigr]\cap\mathbb{N}\)：这是由 \(2N+1\) 个整数组成的块，在其上 \(\lfloor\sqrt n\rfloor=N\)。记
    {: .zh }

    \[
    b_N=\sum_{n=N^2}^{(N+1)^2-1}\frac{1}{n^a}>0.
    \]

    En encadrant chaque terme entre \(\bigl((N+1)^2\bigr)^{-a}\) et \(\bigl(N^2\bigr)^{-a}\), on obtient
    {: .fr-exo }

    把每一项夹在 \(\bigl((N+1)^2\bigr)^{-a}\) 与 \(\bigl(N^2\bigr)^{-a}\) 之间，得
    {: .zh }

    \[
    \frac{2N+1}{\bigl((N+1)^2\bigr)^a}\leqslant b_N\leqslant\frac{2N+1}{(N^2)^a},
    \qquad\text{donc}\qquad
    b_N\sim2N^{1-2a}.
    \]

    <strong>Cas \(a\leqslant0\) :</strong> \(|u_n|=n^{-a}\geqslant1\) (et même \(n^{-a}\to+\infty\) si \(a<0\)), donc \(u_n\) ne tend pas vers \(0\) : la série <strong>diverge grossièrement</strong>.
    {: .fr-exo }

    <strong>情形 \(a\leqslant0\)：</strong>\(|u_n|=n^{-a}\geqslant1\)（\(a<0\) 时甚至 \(n^{-a}\to+\infty\)），故 \(u_n\) 不趋于 \(0\)：级数<strong>粗发散</strong>。
    {: .zh }

    <strong>Cas \(0<a\leqslant\frac12\) :</strong> \(b_N\sim2N^{1-2a}\) ne tend pas vers \(0\). Or, en notant \(S_n=\sum_{k=1}^{n}u_k\), on a sur les blocs
    {: .fr-exo }

    <strong>情形 \(0<a\leqslant\frac12\)：</strong>\(b_N\sim2N^{1-2a}\) 不趋于 \(0\)。记 \(S_n=\sum_{k=1}^{n}u_k\)，则在各个块上有
    {: .zh }

    \[
    S_{(N+1)^2-1}=\sum_{j=1}^{N}(-1)^jb_j.
    \]

    Comme \(b_j\) ne tend pas vers \(0\), la suite \(\left(\sum_{j=1}^{N}(-1)^jb_j\right)_N\) ne converge pas; la suite \((S_n)\) admet donc une sous-suite divergente et <strong>\(\sum u_n\) diverge</strong>.
    {: .fr-exo }

    由于 \(b_j\) 不趋于 \(0\)，数列 \(\left(\sum_{j=1}^{N}(-1)^jb_j\right)_N\) 不收敛；于是 \((S_n)\) 有一个发散的子列，故 <strong>\(\sum u_n\) 发散</strong>。
    {: .zh }

    <strong>Cas \(a>\frac12\) :</strong> alors \(b_N\to0\). De plus, \((b_N)\) est décroissante à partir d'un certain rang : en décalant l'indice dans \(b_{N+1}\) et en utilisant l'inégalité des accroissements finis, on obtient
    {: .fr-exo }

    <strong>情形 \(a>\frac12\)：</strong>此时 \(b_N\to0\)。此外，\((b_N)\) 从某一项起递减：在 \(b_{N+1}\) 中平移指标并利用有限增量不等式，可得
    {: .zh }

    \[
    b_N-b_{N+1}\sim(4a-2)N^{-2a}>0.
    \]

    D'après le critère des séries alternées, \(\sum(-1)^Nb_N\) converge. Pour \(n\) dans le bloc \(N\),
    {: .fr-exo }

    由交错级数判别法，\(\sum(-1)^Nb_N\) 收敛。当 \(n\) 位于第 \(N\) 块时，
    {: .zh }

    \[
    \left|S_n-\sum_{j=1}^{N-1}(-1)^jb_j\right|\leqslant b_N,
    \]

    et comme \(b_N\to0\), on en déduit que \((S_n)\) converge.
    {: .fr-exo }

    而 \(b_N\to0\)，于是推出 \((S_n)\) 收敛。
    {: .zh }

    <strong>Convergence absolue :</strong> \(\displaystyle\sum|u_n|=\sum\frac{1}{n^a}\) est une série de Riemann, convergente si et seulement si \(a>1\).
    {: .fr-exo }

    <strong>绝对收敛：</strong>\(\displaystyle\sum|u_n|=\sum\frac{1}{n^a}\) 是黎曼级数，收敛当且仅当 \(a>1\)。
    {: .zh }

    \[
    \boxed{
    \begin{cases}
    a>1 &: \text{absolument convergente},\\[2pt]
    \frac12<a\leqslant1 &: \text{semi-convergente},\\[2pt]
    a\leqslant\frac12 &: \text{divergente}.
    \end{cases}}
    \]

    <p class="cqfd">∎</p>

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">Critère d'Abel　阿贝尔判别法</p>

En utilisant le critère d'Abel, étudier la convergence des séries suivantes
{: .fr-exo }

利用阿贝尔判别法研究下列级数的收敛性：
{: .zh }

\[
\text{1.}\ \sum_{n=1}^{+\infty}\frac{\ln n}{n}\sin n,
\qquad
\text{2.}\ \sum_{n=2}^{+\infty}\frac{1}{(\ln n)^2}\cos\left(\pi\frac{n^2}{n+1}\right),
\qquad
\text{3.}\ \sum_{n=1}^{+\infty}(-1)^n\frac{\sin^2n}{n}.
\]

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> On applique le <strong>critère d'Abel</strong> avec \(s_n=\sin n\) et \(u_n=\dfrac{\ln n}{n}\).
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 取 \(s_n=\sin n\)，\(u_n=\dfrac{\ln n}{n}\)，应用<strong>阿贝尔判别法</strong>。
    {: .zh }

    Les sommes partielles de \((s_n)\) sont bornées : d'après la formule d'Euler,
    {: .fr-exo }

    \((s_n)\) 的部分和有界：由欧拉公式，
    {: .zh }

    \[
    \left|\sum_{k=1}^{n}\sin k\right|
    =\left|\frac{\sin\frac n2\sin\frac{n+1}{2}}{\sin\frac12}\right|
    \leqslant\frac{1}{\sin\frac12}.
    \]

    La suite \((u_n)\) est positive, tend vers \(0\), et est décroissante pour \(n\geqslant3\) car la fonction \(x\mapsto\dfrac{\ln x}{x}\) a pour dérivée \(\dfrac{1-\ln x}{x^2}<0\) pour \(x>e\).
    {: .fr-exo }

    数列 \((u_n)\) 为正、趋于 \(0\)，且当 \(n\geqslant3\) 时递减：函数 \(x\mapsto\dfrac{\ln x}{x}\) 的导数为 \(\dfrac{1-\ln x}{x^2}\)，在 \(x>e\) 时为负。
    {: .zh }

    Le critère d'Abel permet de conclure que \(\displaystyle\sum_{n=1}^{+\infty}\frac{\ln n}{n}\sin n\) <strong>converge</strong>.
    {: .fr-exo }

    由阿贝尔判别法，\(\displaystyle\sum_{n=1}^{+\infty}\frac{\ln n}{n}\sin n\) <strong>收敛</strong>。
    {: .zh }

    <strong>Remarque.</strong> La série n'est pas absolument convergente. En effet, \(|\sin n|\geqslant\sin^2n\), donc
    {: .fr-exo }

    <strong>注.</strong> 该级数不绝对收敛。事实上 \(|\sin n|\geqslant\sin^2n\)，故
    {: .zh }

    \[
    \frac{\ln n}{n}|\sin n|
    \geqslant\frac{\ln n}{n}\sin^2n
    =\frac12\cdot\frac{\ln n}{n}-\frac12\cdot\frac{\ln n\cos(2n)}{n}.
    \]

    La série \(\sum\dfrac{\ln n}{n}\) diverge, tandis que \(\sum\dfrac{\ln n}{n}\cos(2n)\) converge par le critère d'Abel (sommes partielles de \(\cos(2n)\) bornées, \(\frac{\ln n}{n}\) décroissante vers \(0\)). Ainsi \(\sum\dfrac{\ln n}{n}\sin^2n\) diverge, et par comparaison \(\sum\dfrac{\ln n}{n}|\sin n|\) aussi : la série est <strong>semi-convergente</strong>.
    {: .fr-exo }

    级数 \(\sum\dfrac{\ln n}{n}\) 发散，而 \(\sum\dfrac{\ln n}{n}\cos(2n)\) 由阿贝尔判别法收敛（\(\cos(2n)\) 的部分和有界，\(\frac{\ln n}{n}\) 递减趋于 \(0\)）。于是 \(\sum\dfrac{\ln n}{n}\sin^2n\) 发散，由比较判别法 \(\sum\dfrac{\ln n}{n}|\sin n|\) 也发散：该级数<strong>半收敛</strong>。
    {: .zh }

    <strong>2.</strong> On commence par simplifier l'argument du cosinus :
    {: .fr-exo }

    <strong>2.</strong> 先化简余弦的变量：
    {: .zh }

    \[
    \frac{n^2}{n+1}=n-1+\frac{1}{n+1},
    \]

    d'où, comme \(\sin(\pi(n-1))=0\),
    {: .fr-exo }

    由于 \(\sin(\pi(n-1))=0\)，故
    {: .zh }

    \[
    \cos\left(\pi\frac{n^2}{n+1}\right)
    =\cos\bigl(\pi(n-1)\bigr)\cos\frac{\pi}{n+1}
    =(-1)^{n-1}\cos\frac{\pi}{n+1}.
    \]

    Ainsi la série s'écrit \(\sum(-1)^{n-1}v_n\) avec \(v_n=\dfrac{\cos\frac{\pi}{n+1}}{(\ln n)^2}\).
    {: .fr-exo }

    于是级数写成 \(\sum(-1)^{n-1}v_n\)，其中 \(v_n=\dfrac{\cos\frac{\pi}{n+1}}{(\ln n)^2}\)。
    {: .zh }

    La suite \((v_n)\) est positive (car \(\frac{\pi}{n+1}\leqslant\frac\pi3<\frac\pi2\) pour \(n\geqslant2\)), tend vers \(0\), et est décroissante :
    {: .fr-exo }

    数列 \((v_n)\) 为正（因为 \(n\geqslant2\) 时 \(\frac{\pi}{n+1}\leqslant\frac\pi3<\frac\pi2\)）、趋于 \(0\)，并且递减：
    {: .zh }

    \[
    \frac{d}{dx}\left(\frac{\cos\frac{\pi}{x+1}}{(\ln x)^2}\right)
    =\frac{\frac{\pi}{(x+1)^2}\sin\frac{\pi}{x+1}}{(\ln x)^2}
    -\frac{2\cos\frac{\pi}{x+1}}{x(\ln x)^3}<0
    \qquad(x\geqslant2).
    \]

    (Pour \(x\geqslant2\), \(\sin\frac{\pi}{x+1}\leqslant\frac{\pi}{x+1}\) et \(\cos\frac{\pi}{x+1}\geqslant\frac12\), et l'on vérifie \((x+1)^3>\pi^2x\ln x\).) Le critère d'Abel (ou celui des séries alternées) montre que la série <strong>converge</strong>.
    {: .fr-exo }

    （当 \(x\geqslant2\) 时，\(\sin\frac{\pi}{x+1}\leqslant\frac{\pi}{x+1}\)，\(\cos\frac{\pi}{x+1}\geqslant\frac12\)，并验证 \((x+1)^3>\pi^2x\ln x\)。）由阿贝尔判别法（或交错级数判别法），级数<strong>收敛</strong>。
    {: .zh }

    <strong>Absolument ?</strong> Pour \(n\geqslant2\), \(|u_n|=v_n\geqslant\dfrac{1}{2(\ln n)^2}\), et \(\sum\dfrac{1}{(\ln n)^2}\) diverge car \(\dfrac{1}{(\ln n)^2}\geqslant\dfrac1n\) pour \(n\) assez grand. La série <strong>ne converge donc pas absolument</strong> : elle est <strong>semi-convergente</strong>.
    {: .fr-exo }

    <strong>是否绝对收敛？</strong>对 \(n\geqslant2\)，\(|u_n|=v_n\geqslant\dfrac{1}{2(\ln n)^2}\)，而 \(\sum\dfrac{1}{(\ln n)^2}\) 发散，因为当 \(n\) 充分大时 \(\dfrac{1}{(\ln n)^2}\geqslant\dfrac1n\)。所以该级数<strong>不绝对收敛</strong>：它是<strong>半收敛</strong>的。
    {: .zh }

    <strong>3.</strong> On utilise \(\sin^2n=\dfrac{1-\cos(2n)}{2}\) :
    {: .fr-exo }

    <strong>3.</strong> 利用 \(\sin^2n=\dfrac{1-\cos(2n)}{2}\)：
    {: .zh }

    \[
    (-1)^n\frac{\sin^2n}{n}
    =\frac12\cdot\frac{(-1)^n}{n}
    -\frac12\cdot\frac{(-1)^n\cos(2n)}{n}.
    \]

    La série \(\displaystyle\sum\frac{(-1)^n}{n}\) converge (critère des séries alternées). Pour la seconde, on écrit
    {: .fr-exo }

    级数 \(\displaystyle\sum\frac{(-1)^n}{n}\) 收敛（交错级数判别法）。对第二个级数，写出
    {: .zh }

    \[
    (-1)^n\cos(2n)=\cos(n\pi)\cos(2n)
    =\frac12\bigl[\cos\bigl(n(\pi-2)\bigr)+\cos\bigl(n(\pi+2)\bigr)\bigr].
    \]

    Comme \(\pi\pm2\notin2\pi\mathbb{Z}\), les sommes partielles de \(\bigl(\cos(n(\pi\pm2))\bigr)\) sont bornées : \(\left|\sum_{k=1}^{n}e^{ik\theta}\right|\leqslant\dfrac{1}{|\sin(\theta/2)|}\) pour \(\theta\notin2\pi\mathbb{Z}\). La suite \(\left(\frac1n\right)\) étant positive, décroissante et de limite \(0\), le critère d'Abel montre que \(\displaystyle\sum\frac{(-1)^n\cos(2n)}{n}\) converge.
    {: .fr-exo }

    由于 \(\pi\pm2\notin2\pi\mathbb{Z}\)，\(\bigl(\cos(n(\pi\pm2))\bigr)\) 的部分和有界：当 \(\theta\notin2\pi\mathbb{Z}\) 时，\(\left|\sum_{k=1}^{n}e^{ik\theta}\right|\leqslant\dfrac{1}{|\sin(\theta/2)|}\)。数列 \(\left(\frac1n\right)\) 为正、递减且极限为 \(0\)，由阿贝尔判别法，\(\displaystyle\sum\frac{(-1)^n\cos(2n)}{n}\) 收敛。
    {: .zh }

    Par conséquent, \(\displaystyle\sum_{n=1}^{+\infty}(-1)^n\frac{\sin^2n}{n}\) <strong>converge</strong>.
    {: .fr-exo }

    因此，\(\displaystyle\sum_{n=1}^{+\infty}(-1)^n\frac{\sin^2n}{n}\) <strong>收敛</strong>。
    {: .zh }

    <strong>Absolument ?</strong> \(\displaystyle\sum\left|(-1)^n\frac{\sin^2n}{n}\right|=\sum\frac{\sin^2n}{n}=\frac12\sum\frac1n-\frac12\sum\frac{\cos(2n)}{n}\). La série harmonique diverge, tandis que \(\sum\frac{\cos(2n)}{n}\) converge par Abel; la série des valeurs absolues <strong>diverge</strong>. La série est donc <strong>semi-convergente</strong>.
    {: .fr-exo }

    <strong>是否绝对收敛？</strong>\(\displaystyle\sum\left|(-1)^n\frac{\sin^2n}{n}\right|=\sum\frac{\sin^2n}{n}=\frac12\sum\frac1n-\frac12\sum\frac{\cos(2n)}{n}\)。调和级数发散，而 \(\sum\frac{\cos(2n)}{n}\) 由阿贝尔判别法收敛；故绝对值级数<strong>发散</strong>。因此该级数<strong>半收敛</strong>。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第一部分（Exercices à préparer）核心术语</span>"

    - <strong>convergence absolue</strong>：绝对收敛
    - <strong>converger absolument</strong>：绝对收敛
    - <strong>semi-convergent</strong>：半收敛
    - <strong>critère de d'Alembert</strong>：达朗贝尔判别法
    - <strong>critère des séries alternées</strong>：交错级数判别法
    - <strong>critère d'Abel</strong>：阿贝尔判别法
    - <strong>série géométrique</strong>：几何级数
    - <strong>raison</strong>：公比
    - <strong>série alternée</strong>：交错级数
    - <strong>série télescopique</strong>：裂项级数
    - <strong>série de Bertrand</strong>：伯特兰级数
    - <strong>série harmonique</strong>：调和级数

    - <strong>série de Riemann</strong>：黎曼级数 \(\sum 1/n^\alpha\)
    - <strong>série à termes positifs</strong>：正项级数
    - <strong>diverge grossièrement</strong>：粗发散（通项不趋于 0）
    - <strong>terme général</strong>：通项
    - <strong>somme partielle</strong>：部分和
    - <strong>reste</strong>：余项
    - <strong>comparaison série–intégrale</strong>：级数–积分比较
    - <strong>croissances comparées</strong>：增长比较
    - <strong>suites bornées</strong>：有界数列
    - <strong>discuter selon les valeurs du paramètre</strong>：按参数取值讨论
    - <strong>pour \(n\) suffisamment grand</strong>：当 \(n\) 充分大时
    - <strong>en déduire</strong>：由此推出

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">Encadrement　夹逼</p>

Soient \((u_n)\), \((v_n)\) et \((w_n)\) des suites réelles telles que \(\forall n\in\mathbb{N}\), \(u_n\leqslant v_n\leqslant w_n\).
{: .fr-exo }

设 \((u_n)\)、\((v_n)\)、\((w_n)\) 为实数列，满足 \(\forall n\in\mathbb{N}\)、\(u_n\leqslant v_n\leqslant w_n\)。
{: .zh }

On suppose que les séries \(\sum u_n\) et \(\sum w_n\) convergent. Montrer que \(\sum v_n\) converge.
{: .fr-exo }

假设级数 \(\sum u_n\) 与 \(\sum w_n\) 收敛。证明 \(\sum v_n\) 收敛。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Puisque \(u_n\leqslant v_n\leqslant w_n\), on a
    {: .fr-exo }

    <strong>解.</strong> 由于 \(u_n\leqslant v_n\leqslant w_n\)，有
    {: .zh }

    \[
    0\leqslant v_n-u_n\leqslant w_n-u_n.
    \]

    Les séries \(\sum u_n\) et \(\sum w_n\) convergent, donc par linéarité la série \(\sum(w_n-u_n)\) converge. C'est une série à termes positifs; par le <strong>théorème de comparaison</strong>, la série \(\sum(v_n-u_n)\) converge.
    {: .fr-exo }

    级数 \(\sum u_n\) 与 \(\sum w_n\) 收敛，故由线性性，级数 \(\sum(w_n-u_n)\) 收敛。它是正项级数；由<strong>比较判别法</strong>，级数 \(\sum(v_n-u_n)\) 收敛。
    {: .zh }

    Enfin, par linéarité,
    {: .fr-exo }

    最后，由线性性，
    {: .zh }

    \[
    \sum v_n=\sum u_n+\sum(v_n-u_n)
    \]

    est la somme de deux séries convergentes : elle converge.
    {: .fr-exo }

    是两个收敛级数之和：它收敛。
    {: .zh }

    \[
    \boxed{\sum u_n\ \text{et}\ \sum w_n\ \text{convergent}
    \ \Longrightarrow\ \sum v_n\ \text{converge}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 9 <span class="heading-zh">练习 9</span>

<p class="exo-type">Calcul avec la constante d'Euler　用欧拉常数计算</p>

Déterminer la somme de la série
{: .fr-exo }

求级数的和
{: .zh }

\[
\sum_{n=1}^{+\infty}(-1)^n\frac{\ln n}{n}.
\]

!!! sol ""

    <strong>Solution.</strong> Notons \(S_N=\displaystyle\sum_{n=1}^{N}(-1)^n\frac{\ln n}{n}\) et regroupons les termes par paires :
    {: .fr-exo }

    <strong>解.</strong> 记 \(S_N=\displaystyle\sum_{n=1}^{N}(-1)^n\frac{\ln n}{n}\)，把各项两两配对：
    {: .zh }

    \[
    S_{2N}=\sum_{k=1}^{N}\left(\frac{\ln(2k)}{2k}-\frac{\ln(2k-1)}{2k-1}\right).
    \]

    Posons \(H_N=\displaystyle\sum_{k=1}^{N}\frac1k\) et \(T_N=\displaystyle\sum_{k=1}^{N}\frac{\ln k}{k}\). D'une part,
    {: .fr-exo }

    令 \(H_N=\displaystyle\sum_{k=1}^{N}\frac1k\)，\(T_N=\displaystyle\sum_{k=1}^{N}\frac{\ln k}{k}\)。一方面，
    {: .zh }

    \[
    \sum_{k=1}^{N}\frac{\ln(2k)}{2k}
    =\frac12\sum_{k=1}^{N}\frac{\ln2+\ln k}{k}
    =\frac{\ln2}{2}H_N+\frac12T_N.
    \]

    D'autre part,
    {: .fr-exo }

    另一方面，
    {: .zh }

    \[
    \sum_{k=1}^{N}\frac{\ln(2k-1)}{2k-1}
    =T_{2N}-\sum_{k=1}^{N}\frac{\ln(2k)}{2k}
    =T_{2N}-\frac{\ln2}{2}H_N-\frac12T_N.
    \]

    Donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    S_{2N}=2\left(\frac{\ln2}{2}H_N+\frac12T_N\right)-T_{2N}
    =(\ln2)H_N+T_N-T_{2N}.
    \]

    On utilise les deux asymptotiques suivantes :
    {: .fr-exo }

    利用以下两个渐近公式：
    {: .zh }

    \[
    H_N=\ln N+\gamma+o(1)
    \qquad\text{(définition de la constante d'Euler)},
    \]

    \[
    T_M=\frac12(\ln M)^2+C+o(1)
    \qquad(\text{où } C \text{ est une constante réelle}).
    \]

    La seconde s'obtient par <strong>comparaison série-intégrale</strong> : pour \(f(x)=\dfrac{\ln x}{x}\), la différence \(f(n)-\displaystyle\int_n^{n+1}f\) est positive et majorée par \(f(n)-f(n+1)\), donc sommable.
    {: .fr-exo }

    第二个公式由<strong>级数–积分比较</strong>得到：对 \(f(x)=\dfrac{\ln x}{x}\)，差 \(f(n)-\displaystyle\int_n^{n+1}f\) 为正且被 \(f(n)-f(n+1)\) 控制，故可和。
    {: .zh }

    Ainsi, comme \(\ln(2N)=\ln N+\ln2\),
    {: .fr-exo }

    于是，由 \(\ln(2N)=\ln N+\ln2\)，
    {: .zh }

    \[
    S_{2N}=(\ln2)(\ln N+\gamma)+\frac12(\ln N)^2+C
    -\frac12(\ln N+\ln2)^2-C+o(1),
    \]

    \[
    S_{2N}=\gamma\ln2-\frac{(\ln2)^2}{2}+o(1).
    \]

    Enfin, \(S_{2N+1}=S_{2N}-\dfrac{\ln(2N+1)}{2N+1}\) a la même limite, donc la série converge et
    {: .fr-exo }

    最后，\(S_{2N+1}=S_{2N}-\dfrac{\ln(2N+1)}{2N+1}\) 有相同的极限，故级数收敛，且
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}(-1)^n\frac{\ln n}{n}
    =\gamma\ln2-\frac{(\ln2)^2}{2}\approx0{,}1599.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第二部分（Exercices supplémentaires）核心术语</span>"

    - <strong>encadrement</strong>：夹逼；上下界估计
    - <strong>suites réelles</strong>：实数列
    - <strong>terme général</strong>：通项
    - <strong>constante d'Euler</strong>：欧拉常数 \(\gamma\)
    - <strong>sommation par parties</strong>：分部求和
    - <strong>regrouper les termes</strong>：合并项
    - <strong>partie entière \(\lfloor\cdot\rfloor\)</strong>：下取整
    - <strong>valeur absolue</strong>：绝对值
    - <strong>convergence absolue</strong>：绝对收敛
    - <strong>par linéarité</strong>：由线性性
    - <strong>par comparaison</strong>：由比较
    - <strong>série harmonique</strong>：调和级数

    - <strong>on note</strong>：记
    - <strong>on pose</strong>：令
    - <strong>d'une part, …, d'autre part</strong>：一方面……另一方面
    - <strong>passer à la limite</strong>：取极限
    - <strong>on obtient</strong>：得到
    - <strong>donc</strong>：因此
    - <strong>or</strong>：而
    - <strong>ainsi</strong>：于是
    - <strong>en effet</strong>：事实上
    - <strong>vérifier</strong>：验证
    - <strong>montrer que</strong>：证明
    - <strong>on en déduit</strong>：由此推出
