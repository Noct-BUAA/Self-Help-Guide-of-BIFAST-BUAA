---
title: TD7 级数收敛解答
comments: true
---

# 第 7 次习题课　级数收敛

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°7 — Convergence de séries</p>
<p class="lecture-badge">ÉNONCÉ &amp; CORRIGÉ · 题目与参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。方框内为按法国习题课标准方式撰写的参考解答：先引用定理，再逐步推导，最后框出结论。

    本页为第 7 次习题课的题目与参考解答，与第 3 章「数项级数」配套。

## Exercices à préparer <span class="heading-zh">课前准备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">Critère de Riemann　黎曼判别法</p>

Soit \(\beta>1\). Montrer que \(\displaystyle\sum\frac{\ln n}{n^{\beta}}\) converge. On pourra utiliser le <strong>critère de Riemann</strong>.
{: .fr-exo }

设 \(\beta>1\)。证明 \(\displaystyle\sum\frac{\ln n}{n^{\beta}}\) 收敛。可以借助<strong>黎曼判别法</strong>（critère de Riemann）。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> L'idée est de comparer le terme général à une série de Riemann d'exposant intermédiaire entre \(1\) et \(\beta\). Soit \(\varepsilon=\dfrac{\beta-1}{2}>0\); alors \(\beta-\varepsilon=\dfrac{\beta+1}{2}>1\).
    {: .fr-exo }

    <strong>解.</strong> 思路是把通项与一个指数介于 \(1\) 与 \(\beta\) 之间的黎曼级数比较。取 \(\varepsilon=\dfrac{\beta-1}{2}>0\)，则 \(\beta-\varepsilon=\dfrac{\beta+1}{2}>1\)。
    {: .zh }

    Par <strong>croissances comparées</strong>, \(\ln n=o\left(n^{\varepsilon}\right)\), donc
    {: .fr-exo }

    由<strong>增长比较</strong>（croissances comparées），\(\ln n=o\left(n^{\varepsilon}\right)\)，故
    {: .zh }

    \[
    \frac{\ln n}{n^{\beta}}
    =\frac{\ln n}{n^{\varepsilon}}\cdot\frac{1}{n^{\beta-\varepsilon}}
    =o\left(\frac{1}{n^{\beta-\varepsilon}}\right).
    \]

    Or \(\beta-\varepsilon=\dfrac{\beta+1}{2}>1\), donc la <strong>série de Riemann</strong> \(\sum\dfrac{1}{n^{\beta-\varepsilon}}\) converge. Les deux séries sont à termes positifs; par le <strong>critère de comparaison</strong> (version petit \(o\)),
    {: .fr-exo }

    而 \(\beta-\varepsilon=\dfrac{\beta+1}{2}>1\)，故<strong>黎曼级数</strong> \(\sum\dfrac{1}{n^{\beta-\varepsilon}}\) 收敛。两列级数均为正项；由<strong>比较判别法</strong>（\(o\) 版本），
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{\ln n}{n^{\beta}}\ \text{converge}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">Équivalents　等价量</p>

<strong>1.</strong> Pour les séries suivantes, donner un <strong>équivalent</strong> du <strong>reste</strong> si elle converge, de la <strong>somme partielle</strong> si elle diverge.
{: .fr-exo }

<strong>1.</strong> 对下列级数，若收敛给出<strong>余项</strong>（reste）的<strong>等价量</strong>（équivalent），若发散给出<strong>部分和</strong>（somme partielle）的等价量。
{: .zh }

\[
\text{(a)}\ \sum\frac1n,\quad
\text{(b)}\ \sum\frac{1}{n^2},\quad
\text{(c)}\ \sum\frac{1}{n^3},\quad
\text{(d)}\ \sum\frac{1}{\sqrt n},\quad
\text{(e)}\ \sum\frac{1}{2^n},\quad
\text{(f)}\ \sum\frac{1}{n\ln n}.
\]

Pour la suite de l'exercice, on fixe \(N\in\mathbb{N}\) suffisamment grand pour que les questions suivantes aient un sens.
{: .fr-exo }

练习后续部分固定充分大的 \(N\in\mathbb{N}\)，使以下问题有意义。
{: .zh }

<strong>2.</strong> Pour chacune des trois séries convergentes, on note \(R_n\) le reste. Pour chacune, estimer à partir de quel entier \(n\) on a \(R_n\leqslant10^{-N}\) puis classer ces trois séries par <strong>vitesse de convergence croissante</strong>.
{: .fr-exo }

<strong>2.</strong> 对三个收敛级数分别记 \(R_n\) 为余项。估计各自从哪个整数 \(n\) 起有 \(R_n\leqslant10^{-N}\)，再按<strong>收敛速度</strong>（vitesse de convergence）递增的顺序给这三个级数排序。
{: .zh }

<strong>3.</strong> Pour chacune des trois séries divergentes, on note \(S_n\) la somme partielle. Pour chacune, estimer à partir de quel entier \(n\) on a \(S_n\geqslant N\) puis classer ces trois séries par <strong>vitesse de divergence croissante</strong>.
{: .fr-exo }

<strong>3.</strong> 对三个发散级数分别记 \(S_n\) 为部分和。估计各自从哪个整数 \(n\) 起有 \(S_n\geqslant N\)，再按<strong>发散速度</strong>（vitesse de divergence）递增的顺序给这三个级数排序。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> Toutes les séries proposées sont à termes positifs; on encadre les sommes par des intégrales de fonctions décroissantes (<strong>comparaison série–intégrale</strong>). Pour \(f\) positive décroissante sur \([1,+\infty[\),
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 所列级数均为<strong>正项级数</strong>；我们用递减函数的积分夹逼部分和与余项（<strong>级数–积分比较</strong>，comparaison série–intégrale）。对 \([1,+\infty[\) 上正的递减函数 \(f\)，有
    {: .zh }

    \[
    \int_1^{n+1}f(x)\,dx\leqslant\sum_{k=1}^{n}f(k)\leqslant f(1)+\int_1^{n}f(x)\,dx,
    \]

    \[
    \int_{n+1}^{+\infty}f(x)\,dx\leqslant\sum_{k=n+1}^{+\infty}f(k)\leqslant\int_n^{+\infty}f(x)\,dx.
    \]

    <strong>(a)</strong> La <strong>série harmonique</strong> diverge. Avec \(f(x)=\dfrac1x\),
    {: .fr-exo }

    <strong>(a)</strong> <strong>调和级数</strong>（série harmonique）发散。取 \(f(x)=\dfrac1x\)，
    {: .zh }

    \[
    \ln(n+1)\leqslant H_n=\sum_{k=1}^{n}\frac1k\leqslant1+\ln n,
    \]

    d'où, en divisant par \(\ln n\) et en passant à la limite,
    {: .fr-exo }

    两边除以 \(\ln n\) 再取极限，得
    {: .zh }

    \[
    \boxed{H_n\sim\ln n\quad(n\to+\infty).}
    \]

    <strong>(b)</strong> Le reste de \(\sum\dfrac{1}{n^2}\) vérifie
    {: .fr-exo }

    <strong>(b)</strong> \(\sum\dfrac{1}{n^2}\) 的余项满足
    {: .zh }

    \[
    \frac{1}{n+1}\leqslant R_n=\sum_{k=n+1}^{+\infty}\frac{1}{k^2}\leqslant\frac1n,
    \qquad\text{donc}\qquad
    \boxed{R_n\sim\frac1n.}
    \]

    <strong>(c\)</strong> De même, pour \(\sum\dfrac{1}{n^3}\),
    {: .fr-exo }

    <strong>(c\)</strong> 同理，对 \(\sum\dfrac{1}{n^3}\) 有
    {: .zh }

    \[
    \frac{1}{2(n+1)^2}\leqslant R_n=\sum_{k=n+1}^{+\infty}\frac{1}{k^3}
    \leqslant\frac{1}{2n^2},
    \qquad\text{donc}\qquad
    \boxed{R_n\sim\frac{1}{2n^2}.}
    \]

    <strong>(d)</strong> Pour \(\sum\dfrac{1}{\sqrt n}\),
    {: .fr-exo }

    <strong>(d)</strong> 对 \(\sum\dfrac{1}{\sqrt n}\)，有
    {: .zh }

    \[
    2\bigl(\sqrt{n+1}-1\bigr)\leqslant S_n=\sum_{k=1}^{n}\frac{1}{\sqrt k}
    \leqslant2\sqrt n-1,
    \qquad\text{donc}\qquad
    \boxed{S_n\sim2\sqrt n.}
    \]

    <strong>(e)</strong> La série géométrique se calcule exactement :
    {: .fr-exo }

    <strong>(e)</strong> 几何级数可精确求和：
    {: .zh }

    \[
    R_n=\sum_{k=n+1}^{+\infty}\frac{1}{2^k}
    =\frac{2^{-(n+1)}}{1-\frac12}
    =2^{-n}
    \qquad\text{(valeur exacte).}
    \]

    <strong>(f)</strong> Avec \(f(x)=\dfrac{1}{x\ln x}\), décroissante sur \([2,+\infty[\), et \(\displaystyle\int\frac{dx}{x\ln x}=\ln\ln x\), on obtient
    {: .fr-exo }

    <strong>(f)</strong> 取 \(f(x)=\dfrac{1}{x\ln x}\)（在 \([2,+\infty[\) 上递减），并利用 \(\displaystyle\int\frac{dx}{x\ln x}=\ln\ln x\)，得
    {: .zh }

    \[
    \ln\ln(n+1)-\ln\ln2\leqslant S_n=\sum_{k=2}^{n}\frac{1}{k\ln k}
    \leqslant\frac{1}{2\ln2}+\ln\ln n-\ln\ln2,
    \]

    donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    \boxed{S_n\sim\ln\ln n.}
    \]

    <strong>2.</strong> Le seuil \(n\) tel que \(R_n\leqslant10^{-N}\) s'obtient en résolvant l'équivalent trouvé :
    {: .fr-exo }

    <strong>2.</strong> 令 \(R_n\leqslant10^{-N}\) 的阈值 \(n\) 可由所求等价量解出：
    {: .zh }

    \[
    \text{(b)}\quad R_n\sim\frac1n\leqslant10^{-N}\iff n\geqslant10^{N};
    \qquad
    \text{(c)}\quad R_n\sim\frac{1}{2n^2}\leqslant10^{-N}
    \iff n\geqslant\frac{10^{N/2}}{\sqrt2};
    \]

    \[
    \text{(e)}\quad R_n=2^{-n}\leqslant10^{-N}
    \iff n\geqslant N\,\frac{\ln10}{\ln2}\approx3{,}32\,N.
    \]

    Comme \(3{,}32\,N\ll10^{N/2}\ll10^{N}\) pour \(N\) grand, le classement par vitesse de convergence croissante est
    {: .fr-exo }

    由于 \(N\) 很大时 \(3{,}32\,N\ll10^{N/2}\ll10^{N}\)，按收敛速度递增的顺序为
    {: .zh }

    \[
    \boxed{\sum\frac{1}{n^2}\ \text{(la plus lente)}\ \longrightarrow\
    \sum\frac{1}{n^3}\ \longrightarrow\
    \sum\frac{1}{2^n}\ \text{(la plus rapide)}.}
    \]

    <strong>3.</strong> De même, pour les séries divergentes,
    {: .fr-exo }

    <strong>3.</strong> 同理，对发散级数有
    {: .zh }

    \[
    \text{(a)}\quad S_n\sim\ln n\geqslant N\iff n\geqslant e^{N};
    \qquad
    \text{(d)}\quad S_n\sim2\sqrt n\geqslant N\iff n\geqslant\frac{N^2}{4};
    \]

    \[
    \text{(f)}\quad S_n\sim\ln\ln n\geqslant N\iff n\geqslant e^{e^{N}}.
    \]

    Comme \(\dfrac{N^2}{4}\ll e^{N}\ll e^{e^{N}}\), le classement par vitesse de divergence croissante est
    {: .fr-exo }

    由于 \(\dfrac{N^2}{4}\ll e^{N}\ll e^{e^{N}}\)，按发散速度递增的顺序为
    {: .zh }

    \[
    \boxed{\sum\frac{1}{n\ln n}\ \text{(la plus lente)}\ \longrightarrow\
    \sum\frac1n\ \longrightarrow\
    \sum\frac{1}{\sqrt n}\ \text{(la plus rapide)}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">Série à paramètre　含参级数</p>

Soit \(\alpha\in\mathbb{R}\). On considère la suite de terme général \(u_n=e^{-n^{\alpha}}\) définie pour \(n\geqslant1\).
{: .fr-exo }

设 \(\alpha\in\mathbb{R}\)，考虑对 \(n\geqslant1\) 定义的通项为 \(u_n=e^{-n^{\alpha}}\) 的数列。
{: .zh }

<strong>1.</strong> Montrer que si \(\alpha\leqslant0\) alors \(\sum u_n\) diverge.
{: .fr-exo }

<strong>1.</strong> 证明：若 \(\alpha\leqslant0\)，则 \(\sum u_n\) 发散。
{: .zh }

<strong>2.</strong> On suppose \(\alpha>0\). Montrer que \(u_n=o\left(\dfrac{1}{n^2}\right)\) et en déduire la nature de \(\sum u_n\).
{: .fr-exo }

<strong>2.</strong> 设 \(\alpha>0\)。证明 \(u_n=o\left(\dfrac{1}{n^2}\right)\)，并由此推出 \(\sum u_n\) 的性质（收敛或发散）。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> Si \(\alpha<0\), alors \(n^{\alpha}\to0\) et \(u_n=e^{-n^{\alpha}}\to e^{0}=1\neq0\). Si \(\alpha=0\), \(u_n=e^{-1}\) pour tout \(n\). Dans les deux cas, le terme général ne tend pas vers \(0\); la série <strong>diverge grossièrement</strong>.
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 若 \(\alpha<0\)，则 \(n^{\alpha}\to0\)，\(u_n=e^{-n^{\alpha}}\to e^{0}=1\neq0\)。若 \(\alpha=0\)，则对任意 \(n\) 有 \(u_n=e^{-1}\)。两种情形下通项都不趋于 \(0\)，故级数<strong>粗发散</strong>（diverge grossièrement）。
    {: .zh }

    <strong>2.</strong> Si \(\alpha>0\), alors \(n^{\alpha}\to+\infty\). Or
    {: .fr-exo }

    <strong>2.</strong> 若 \(\alpha>0\)，则 \(n^{\alpha}\to+\infty\)。而
    {: .zh }

    \[
    n^2u_n=\exp\bigl(2\ln n-n^{\alpha}\bigr)\longrightarrow0
    \]

    car l'exponentielle l'emporte sur tout polynôme (croissances comparées) : \(n^{\alpha}\gg\ln n\). Ainsi \(u_n=o\left(\dfrac{1}{n^2}\right)\).
    {: .fr-exo }

    因为指数增长快于任何多项式（增长比较）：\(n^{\alpha}\gg\ln n\)。因此 \(u_n=o\left(\dfrac{1}{n^2}\right)\)。
    {: .zh }

    La série \(\sum\dfrac{1}{n^2}\) est une série de Riemann convergente (exposant \(2>1\)) et les termes \(u_n\) sont positifs; par <strong>comparaison</strong> (version petit \(o\)),
    {: .fr-exo }

    级数 \(\sum\dfrac{1}{n^2}\) 是收敛的黎曼级数（指数 \(2>1\)），且各项 \(u_n\) 为正；由<strong>比较判别法</strong>（\(o\) 版本），
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}e^{-n^{\alpha}}\ \text{converge pour tout }\alpha>0.}
    \]

    Le résultat vaut donc pour \(\alpha>0\) arbitrairement petit : la convergence est très rapide.
    {: .fr-exo }

    因此结论对任意小的 \(\alpha>0\) 都成立：收敛非常快。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">Comparaison avec le carré　与平方比较</p>

Soit \(\sum u_n\) une série à <strong>termes positifs</strong> convergente. Montrer alors que \(\sum u_n^2\) est convergente.
{: .fr-exo }

设 \(\sum u_n\) 是收敛的<strong>正项级数</strong>（série à termes positifs）。证明 \(\sum u_n^2\) 也收敛。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> La série \(\sum u_n\) converge, donc son terme général tend vers \(0\) : \(u_n\to0\). Il existe donc un rang \(N\) tel que
    {: .fr-exo }

    <strong>解.</strong> 级数 \(\sum u_n\) 收敛，故其通项趋于 \(0\)：\(u_n\to0\)。因此存在某个秩 \(N\)，使得
    {: .zh }

    \[
    \forall n\geqslant N,\qquad 0\leqslant u_n\leqslant1.
    \]

    Pour \(n\geqslant N\), on a alors \(u_n^2\leqslant u_n\). Les deux séries sont à termes positifs et \(\sum u_n\) converge; par le <strong>théorème de comparaison</strong>,
    {: .fr-exo }

    当 \(n\geqslant N\) 时便有 \(u_n^2\leqslant u_n\)。两列级数均为正项且 \(\sum u_n\) 收敛；由<strong>比较判别法</strong>，
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}u_n^2\ \text{converge}.}
    \]

    <strong>Remarque.</strong> La réciproque est fausse : \(\sum\dfrac{1}{n^2}\) converge mais \(\sum\dfrac1n\) diverge.
    {: .fr-exo }

    <strong>注.</strong> 逆命题不成立：\(\sum\dfrac{1}{n^2}\) 收敛，而 \(\sum\dfrac1n\) 发散。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">Critère de Riemann (2)　黎曼判别法应用</p>

Déterminer si les séries suivantes convergent ou divergent :
{: .fr-exo }

判断下列级数收敛还是发散：
{: .zh }

1. \(\displaystyle\sum_{n=1}^{+\infty}\Bigl(\sqrt{n^2+1}-\sqrt[3]{n^3+1}\Bigr)\)
2. \(\displaystyle\sum_{n=1}^{+\infty}\left(\frac{n^2+1}{n^2+n+1}\right)^{n^2}\)
3. \(\displaystyle\sum_{n=1}^{+\infty}\left(1-\cos\frac1n\right)\)
4. \(\displaystyle\sum_{n=1}^{+\infty}\left(\sqrt[n]{a}-1\right)^{\alpha}\) où \(a>1\) et \(\alpha\in\mathbb{R}\)
5. \(\displaystyle\sum_{n=2}^{+\infty}\left(\sqrt[n]{n}-1\right)^{\alpha}\) où \(\alpha\in\mathbb{R}\)

!!! sol ""

    <strong>Solution.</strong> La méthode est toujours la même : chercher un équivalent du terme général à l'aide de développements asymptotiques, puis appliquer le <strong>critère de Riemann</strong>.
    {: .fr-exo }

    <strong>解.</strong> 方法始终相同：用渐近展开求通项的等价量，再应用<strong>黎曼判别法</strong>。
    {: .zh }

    <strong>1.</strong> On factorise \(n\) dans chaque racine :
    {: .fr-exo }

    <strong>1.</strong> 在每个根式中提出 \(n\)：
    {: .zh }

    \[
    \sqrt{n^2+1}=n\left(1+\frac{1}{n^2}\right)^{1/2}
    =n+\frac{1}{2n}+O\left(\frac{1}{n^3}\right),
    \]

    \[
    \sqrt[3]{n^3+1}=n\left(1+\frac{1}{n^3}\right)^{1/3}
    =n+\frac{1}{3n^2}+O\left(\frac{1}{n^5}\right).
    \]

    d'où
    {: .fr-exo }

    故
    {: .zh }

    \[
    u_n=\frac{1}{2n}-\frac{1}{3n^2}+O\left(\frac{1}{n^3}\right)
    \sim\frac{1}{2n}>0.
    \]

    Comme la série harmonique \(\sum\dfrac{1}{2n}\) diverge, il en va de même de \(\sum u_n\) (termes positifs, équivalence). La série <strong>diverge</strong>.
    {: .fr-exo }

    由于调和级数 \(\sum\dfrac{1}{2n}\) 发散，故 \(\sum u_n\) 也发散（正项、等价判别法）。级数<strong>发散</strong>。
    {: .zh }

    <strong>2.</strong> On écrit \(u_n=r_n^{n^2}\) avec \(r_n=\dfrac{n^2+1}{n^2+n+1}=1-\dfrac{n}{n^2+n+1}\in\,]0,1[\), et l'on développe le logarithme :
    {: .fr-exo }

    <strong>2.</strong> 令 \(u_n=r_n^{n^2}\)，其中 \(r_n=\dfrac{n^2+1}{n^2+n+1}=1-\dfrac{n}{n^2+n+1}\in\,]0,1[\)，并对对数展开：
    {: .zh }

    \[
    \ln u_n=n^2\ln\left(1-\frac{n}{n^2+n+1}\right)
    =-\frac{n^3}{n^2+n+1}-\frac{n^4}{2(n^2+n+1)^2}+O\left(\frac1n\right).
    \]

    Comme \(\dfrac{n^3}{n^2+n+1}=n-1+O\left(\dfrac{1}{n^2}\right)\) et \(\dfrac{n^4}{(n^2+n+1)^2}\to1\),
    {: .fr-exo }

    由于 \(\dfrac{n^3}{n^2+n+1}=n-1+O\left(\dfrac{1}{n^2}\right)\) 且 \(\dfrac{n^4}{(n^2+n+1)^2}\to1\)，
    {: .zh }

    \[
    \ln u_n=-n+\frac12+o(1),
    \qquad\text{donc}\qquad
    u_n\sim e^{1/2}\,e^{-n}.
    \]

    La série \(\sum e^{-n}\) est géométrique convergente; par équivalence (termes positifs), \(\sum u_n\) <strong>converge</strong>.
    {: .fr-exo }

    级数 \(\sum e^{-n}\) 是收敛的几何级数；由等价判别法（正项），\(\sum u_n\) <strong>收敛</strong>。
    {: .zh }

    <strong>3.</strong> Au voisinage de \(0\), \(1-\cos t\sim\dfrac{t^2}{2}\). Donc
    {: .fr-exo }

    <strong>3.</strong> 在 \(0\) 附近 \(1-\cos t\sim\dfrac{t^2}{2}\)。因此
    {: .zh }

    \[
    u_n=1-\cos\frac1n\sim\frac{1}{2n^2}.
    \]

    C'est une série de Riemann d'exposant \(2>1\) : la série <strong>converge</strong>.
    {: .fr-exo }

    这是指数为 \(2>1\) 的黎曼级数：级数<strong>收敛</strong>。
    {: .zh }

    <strong>4.</strong> Comme \(\sqrt[n]{a}=e^{(\ln a)/n}\) et que \(e^t-1\sim t\) quand \(t\to0\),
    {: .fr-exo }

    <strong>4.</strong> 由于 \(\sqrt[n]{a}=e^{(\ln a)/n}\)，且 \(t\to0\) 时 \(e^t-1\sim t\)，
    {: .zh }

    \[
    \sqrt[n]{a}-1=e^{(\ln a)/n}-1\sim\frac{\ln a}{n}.
    \]

    Si \(\alpha>0\), \(u_n\sim(\ln a)^{\alpha}n^{-\alpha}\) : c'est une série de Riemann, qui converge si et seulement si \(\alpha>1\). Si \(\alpha\leqslant0\), alors \(\sqrt[n]{a}-1\to0^{+}\) et \(u_n\) ne tend pas vers \(0\) (il tend vers \(+\infty\) si \(\alpha<0\), et vaut \(1\) si \(\alpha=0\)) : la série diverge grossièrement. En conclusion,
    {: .fr-exo }

    若 \(\alpha>0\)，则 \(u_n\sim(\ln a)^{\alpha}n^{-\alpha}\)：这是黎曼级数，收敛当且仅当 \(\alpha>1\)。若 \(\alpha\leqslant0\)，则 \(\sqrt[n]{a}-1\to0^{+}\)，而 \(u_n\) 不趋于 \(0\)（\(\alpha<0\) 时趋于 \(+\infty\)，\(\alpha=0\) 时恒为 \(1\)）：级数粗发散。综上，
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}\left(\sqrt[n]{a}-1\right)^{\alpha}\ \text{converge}
    \iff\alpha>1.}
    \]

    <strong>5.</strong> Cette fois \(\sqrt[n]{n}=e^{(\ln n)/n}\), donc
    {: .fr-exo }

    <strong>5.</strong> 此处 \(\sqrt[n]{n}=e^{(\ln n)/n}\)，因此
    {: .zh }

    \[
    \sqrt[n]{n}-1=e^{(\ln n)/n}-1\sim\frac{\ln n}{n}.
    \]

    Si \(\alpha>0\), \(u_n\sim\dfrac{(\ln n)^{\alpha}}{n^{\alpha}}\). Pour \(\alpha>1\), on choisit \(\varepsilon=\dfrac{\alpha-1}{2}>0\) : comme \((\ln n)^{\alpha}=o\left(n^{\varepsilon}\right)\),
    {: .fr-exo }

    若 \(\alpha>0\)，则 \(u_n\sim\dfrac{(\ln n)^{\alpha}}{n^{\alpha}}\)。当 \(\alpha>1\) 时取 \(\varepsilon=\dfrac{\alpha-1}{2}>0\)：由于 \((\ln n)^{\alpha}=o\left(n^{\varepsilon}\right)\)，
    {: .zh }

    \[
    u_n=o\left(\frac{1}{n^{\alpha-\varepsilon}}\right),
    \qquad\text{avec}\qquad
    \alpha-\varepsilon=\frac{\alpha+1}{2}>1,
    \]

    donc la série converge (comparaison avec une série de Riemann). Si \(0<\alpha\leqslant1\), alors pour \(n\geqslant3\), \((\ln n)^{\alpha}\geqslant1\), donc \(u_n\geqslant\dfrac{c}{n^{\alpha}}\) pour \(n\) grand, et \(\sum\dfrac{1}{n^{\alpha}}\) diverge car \(\alpha\leqslant1\) : la série diverge. Si \(\alpha\leqslant0\), le terme général ne tend pas vers \(0\) et la série diverge grossièrement. En conclusion,
    {: .fr-exo }

    故级数收敛（与黎曼级数比较）。若 \(0<\alpha\leqslant1\)，则当 \(n\geqslant3\) 时 \((\ln n)^{\alpha}\geqslant1\)，故 \(n\) 充分大时 \(u_n\geqslant\dfrac{c}{n^{\alpha}}\)，而 \(\sum\dfrac{1}{n^{\alpha}}\) 在 \(\alpha\leqslant1\) 时发散：级数发散。若 \(\alpha\leqslant0\)，通项不趋于 \(0\)，级数粗发散。综上，
    {: .zh }

    \[
    \boxed{\sum_{n=2}^{+\infty}\left(\sqrt[n]{n}-1\right)^{\alpha}\ \text{converge}
    \iff\alpha>1.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第一部分（Exercices à préparer）核心术语</span>"

    - <strong>critère de Riemann</strong>：黎曼判别法
    - <strong>série de Riemann</strong>：黎曼级数 \(\sum 1/n^\alpha\)
    - <strong>série harmonique</strong>：调和级数
    - <strong>série à termes positifs</strong>：正项级数
    - <strong>équivalent</strong>：等价量
    - <strong>reste</strong>：余项
    - <strong>somme partielle</strong>：部分和
    - <strong>vitesse de convergence</strong>：收敛速度
    - <strong>vitesse de divergence</strong>：发散速度
    - <strong>comparaison série–intégrale</strong>：级数–积分比较
    - <strong>croissances comparées</strong>：增长比较
    - <strong>développement asymptotique</strong>：渐近展开

    - <strong>diverge grossièrement</strong>：粗发散（通项不趋于 0）
    - <strong>terme général</strong>：通项
    - <strong>la nature de</strong>：……的性质（收敛/发散）
    - <strong>déterminer si</strong>：判断是否
    - <strong>tel que</strong>：使得
    - <strong>estimer</strong>：估计
    - <strong>classer par</strong>：按……排序
    - <strong>à partir de quel entier</strong>：从哪个整数起
    - <strong>on note</strong>：记
    - <strong>on fixe</strong>：固定
    - <strong>on pourra utiliser</strong>：可以借助（提示）
    - <strong>en déduire</strong>：由此推出

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">Approximation avec l'intégrale　用积分逼近</p>

<strong>1.</strong> Soit \(f\) une fonction définie sur \([1,+\infty[\), positive et décroissante. On pose
{: .fr-exo }

<strong>1.</strong> 设 \(f\) 是定义在 \([1,+\infty[\) 上的正<strong>递减</strong>函数。令
{: .zh }

\[
S_N=\sum_{n=1}^{N}f(n)\qquad\text{et}\qquad I_N=\int_1^Nf(x)\,dx.
\]

Prouver que la suite \((S_N-I_N)\) est décroissante et que sa limite appartient à l'intervalle \([0,f(1)]\).
{: .fr-exo }

证明数列 \((S_N-I_N)\) 递减，且其极限属于区间 \([0,f(1)]\)。
{: .zh }

<strong>2.</strong> Prouver que la limite de la suite
{: .fr-exo }

<strong>2.</strong> 证明数列
{: .zh }

\[
1+\frac{1}{2^{\alpha}}+\cdots+\frac{1}{n^{\alpha}}-\int_1^{n}\frac{dx}{x^{\alpha}},
\qquad 0<\alpha<1,
\]

appartient à l'intervalle \(]0,1[\).
{: .fr-exo }

的极限属于区间 \(]0,1[\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> Pour \(x\in[n,n+1]\), la décroissance de \(f\) donne \(f(n+1)\leqslant f(x)\leqslant f(n)\); en intégrant sur \([n,n+1]\),
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 对 \(x\in[n,n+1]\)，由 \(f\) 递减得 \(f(n+1)\leqslant f(x)\leqslant f(n)\)；在 \([n,n+1]\) 上积分得
    {: .zh }

    \[
    f(n+1)\leqslant\int_n^{n+1}f(x)\,dx\leqslant f(n).
    \]

    <strong>Décroissance.</strong> En retranchant deux termes consécutifs,
    {: .fr-exo }

    <strong>递减性.</strong> 将相邻两项相减，
    {: .zh }

    \[
    (S_{N+1}-I_{N+1})-(S_N-I_N)
    =f(N+1)-\int_N^{N+1}f(x)\,dx\leqslant0,
    \]

    donc la suite \((S_N-I_N)\) est décroissante.
    {: .fr-exo }

    故数列 \((S_N-I_N)\) 递减。
    {: .zh }

    <strong>Encadrement.</strong> En sommant l'inégalité \(\displaystyle\int_n^{n+1}f\leqslant f(n)\) pour \(n=1,\dots,N-1\), on obtient \(I_N\leqslant S_N-f(N)\); en sommant \(\displaystyle\int_n^{n+1}f\geqslant f(n+1)\), on obtient \(I_N\geqslant S_N-f(1)\). Ainsi
    {: .fr-exo }

    <strong>夹逼.</strong> 对 \(n=1,\dots,N-1\) 求和不等式 \(\displaystyle\int_n^{n+1}f\leqslant f(n)\) 得 \(I_N\leqslant S_N-f(N)\)；求和 \(\displaystyle\int_n^{n+1}f\geqslant f(n+1)\) 得 \(I_N\geqslant S_N-f(1)\)。因此
    {: .zh }

    \[
    0\leqslant f(N)\leqslant S_N-I_N\leqslant f(1).
    \]

    La suite est décroissante et minorée par \(0\) : elle converge, et sa limite \(L\), toutes les valeurs \(S_N-I_N\) appartenant au segment \([0,f(1)]\), vérifie
    {: .fr-exo }

    该数列递减且以 \(0\) 为下界：故收敛；又所有值 \(S_N-I_N\) 都落在区间 \([0,f(1)]\) 内，故其极限 \(L\) 满足
    {: .zh }

    \[
    \boxed{L\in[0,f(1)].}
    \]

    <strong>2.</strong> On applique le <strong>1.</strong> à \(f(x)=x^{-\alpha}\), qui est positive et décroissante sur \([1,+\infty[\) car \(\alpha>0\) : la limite \(L\) appartient à \([0,f(1)]=[0,1]\).
    {: .fr-exo }

    <strong>2.</strong> 对 \(f(x)=x^{-\alpha}\) 应用第 <strong>1.</strong> 问：由于 \(\alpha>0\)，它在 \([1,+\infty[\) 上为正且递减；故极限 \(L\) 属于 \([0,f(1)]=[0,1]\)。
    {: .zh }

    <strong>\(L>0\).</strong> Posons \(a_n=\dfrac{1}{n^{\alpha}}-\displaystyle\int_n^{n+1}\dfrac{dx}{x^{\alpha}}\geqslant0\). Alors
    {: .fr-exo }

    <strong>\(L>0\).</strong> 令 \(a_n=\dfrac{1}{n^{\alpha}}-\displaystyle\int_n^{n+1}\dfrac{dx}{x^{\alpha}}\geqslant0\)。则
    {: .zh }

    \[
    S_N-I_N=\sum_{n=1}^{N-1}a_n+f(N)\geqslant a_1.
    \]

    Or, sur \(]1,2[\), \(x^{-\alpha}<1\), donc
    {: .fr-exo }

    而在 \(]1,2[\) 上 \(x^{-\alpha}<1\)，故
    {: .zh }

    \[
    a_1=1-\int_1^2\frac{dx}{x^{\alpha}}
    >1-\int_1^2 1\,dx=0.
    \]

    Ainsi \(L\geqslant a_1>0\).
    {: .fr-exo }

    因此 \(L\geqslant a_1>0\)。
    {: .zh }

    <strong>\(L<1\).</strong> La fonction \(x\mapsto x^{-\alpha}\) étant strictement décroissante, l'inégalité de décroissance ci-dessus est stricte : \(f(N+1)<\displaystyle\int_N^{N+1}f\), donc la suite \((S_N-I_N)\) est <strong>strictement</strong> décroissante. Comme \(S_1-I_1=f(1)=1\),
    {: .fr-exo }

    <strong>\(L<1\).</strong> 函数 \(x\mapsto x^{-\alpha}\) 严格递减，故上述递减不等式是严格的：\(f(N+1)<\displaystyle\int_N^{N+1}f\)，即数列 \((S_N-I_N)\) <strong>严格</strong>递减。又 \(S_1-I_1=f(1)=1\)，故
    {: .zh }

    \[
    L<S_1-I_1=1.
    \]

    En conclusion,
    {: .fr-exo }

    综上，
    {: .zh }

    \[
    \boxed{L\in\,]0,1[.}
    \]

    <p class="cqfd">∎</p>

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">Critère par comparaison　比较判别法</p>

Soient \(\sum a_n\) et \(\sum b_n\) deux séries à termes strictement positifs vérifiant
{: .fr-exo }

设 \(\sum a_n\) 与 \(\sum b_n\) 是两个<strong>严格正项级数</strong>，满足
{: .zh }

\[
\exists n_0\in\mathbb{N},\qquad\forall n\geqslant n_0,\qquad
\frac{a_{n+1}}{a_n}\leqslant\frac{b_{n+1}}{b_n}.
\]

Prouver que si \(\sum b_n\) converge, alors \(\sum a_n\) converge aussi.
{: .fr-exo }

证明：若 \(\sum b_n\) 收敛，则 \(\sum a_n\) 也收敛。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> Pour \(n\geqslant n_0\), l'hypothèse s'écrit \(\dfrac{a_{n+1}}{a_n}\leqslant\dfrac{b_{n+1}}{b_n}\). En multipliant ces inégalités pour \(k=n_0,n_0+1,\dots,n-1\), le produit est <strong>télescopique</strong> :
    {: .fr-exo }

    <strong>解.</strong> 当 \(n\geqslant n_0\) 时，假设可写成 \(\dfrac{a_{n+1}}{a_n}\leqslant\dfrac{b_{n+1}}{b_n}\)。将 \(k=n_0,n_0+1,\dots,n-1\) 的这些不等式相乘，乘积<strong>裂项</strong>：
    {: .zh }

    \[
    \frac{a_n}{a_{n_0}}
    =\prod_{k=n_0}^{n-1}\frac{a_{k+1}}{a_k}
    \leqslant\prod_{k=n_0}^{n-1}\frac{b_{k+1}}{b_k}
    =\frac{b_n}{b_{n_0}}.
    \]

    Comme les termes sont strictement positifs, on en déduit
    {: .fr-exo }

    由于各项严格为正，由此得
    {: .zh }

    \[
    0<a_n\leqslant\frac{a_{n_0}}{b_{n_0}}\,b_n
    \qquad(n\geqslant n_0).
    \]

    La suite \((b_n)\) étant à termes positifs et \(\sum b_n\) convergente, le <strong>théorème de comparaison</strong> pour les séries à termes positifs montre que \(\sum a_n\) converge (les termes d'indice \(<n_0\) ne changent pas la nature de la série).
    {: .fr-exo }

    由于 \((b_n)\) 为正项数列且 \(\sum b_n\) 收敛，正项级数的<strong>比较判别法</strong>表明 \(\sum a_n\) 收敛（指标小于 \(n_0\) 的有限项不改变级数的性质）。
    {: .zh }

    \[
    \boxed{\sum b_n\ \text{converge}\ \Longrightarrow\ \sum a_n\ \text{converge}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">Test intégral　积分判别法</p>

Soit \(f:\mathbb{R}_+^*\to\mathbb{R}_+^*\) une fonction dérivable telle que sa dérivée \(f'\) soit <strong>décroissante</strong> et tende vers \(0\) en \(+\infty\).
{: .fr-exo }

设 \(f:\mathbb{R}_+^*\to\mathbb{R}_+^*\) 是可导函数，其导数 \(f'\) <strong>递减</strong>且在 \(+\infty\) 处趋于 \(0\)。
{: .zh }

Montrer l'<strong>équivalence</strong> :
{: .fr-exo }

证明如下<strong>等价关系</strong>（即两列级数同时收敛或同时发散）：
{: .zh }

\[
\sum f'(n)\ \text{converge}
\qquad\Longleftrightarrow\qquad
\sum\frac{f'(n)}{f(n)}\ \text{converge}.
\]

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> La fonction \(f'\) est décroissante et tend vers \(0\) en \(+\infty\); une fonction décroissante est minorée par sa limite en \(+\infty\), donc
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 函数 \(f'\) 递减且当 \(x\to+\infty\) 时趋于 \(0\)；递减函数以其在 \(+\infty\) 处的极限为下界，故
    {: .zh }

    \[
    \forall x>0,\qquad f'(x)\geqslant0.
    \]

    Ainsi \(f\) est croissante; comme \(f\) est à valeurs dans \(\mathbb{R}_+^*\), on a en particulier \(f(x)\geqslant f(1)>0\) pour \(x\geqslant1\).
    {: .fr-exo }

    因此 \(f\) 递增；又因 \(f\) 取值于 \(\mathbb{R}_+^*\)，特别地对 \(x\geqslant1\) 有 \(f(x)\geqslant f(1)>0\)。
    {: .zh }

    <strong>2.</strong> Posons \(g(x)=\dfrac{f'(x)}{f(x)}\) pour \(x\geqslant1\). La fonction \(g\) est positive et <strong>décroissante</strong> : c'est le quotient d'une fonction positive décroissante (\(f'\)) par une fonction positive croissante (\(f\)).
    {: .fr-exo }

    <strong>2.</strong> 令 \(x\geqslant1\) 时 \(g(x)=\dfrac{f'(x)}{f(x)}\)。函数 \(g\) 为正且<strong>递减</strong>：它是正的递减函数（\(f'\)）与正的递增函数（\(f\)）之商。
    {: .zh }

    <strong>3.</strong> D'après le <strong>test intégral</strong> (exercice 6) appliqué à la fonction positive décroissante \(f'\),
    {: .fr-exo }

    <strong>3.</strong> 对正的递减函数 \(f'\) 应用<strong>积分判别法</strong>（见练习 6），
    {: .zh }

    \[
    \sum f'(n)\ \text{converge}
    \iff\left(\int_1^Nf'(x)\,dx\right)_{N}\ \text{converge}
    \iff\bigl(f(N)\bigr)_{N}\ \text{converge},
    \]

    car \(f(N)=f(1)+\displaystyle\int_1^Nf'(x)\,dx\).
    {: .fr-exo }

    因为 \(f(N)=f(1)+\displaystyle\int_1^Nf'(x)\,dx\)。
    {: .zh }

    <strong>4.</strong> De même, en appliquant le test intégral à \(g\),
    {: .fr-exo }

    <strong>4.</strong> 同理，对 \(g\) 应用积分判别法，
    {: .zh }

    \[
    \sum g(n)\ \text{converge}
    \iff\left(\int_1^N\frac{f'(x)}{f(x)}\,dx\right)_{N}\ \text{converge}
    \iff\bigl(\ln f(N)\bigr)_{N}\ \text{converge},
    \]

    car \(\displaystyle\int_1^N\frac{f'(x)}{f(x)}\,dx=\ln f(N)-\ln f(1)\). Or \(f(N)\) converge si et seulement si \(\ln f(N)\) converge : en effet \(f\) est croissante à valeurs dans \([f(1),+\infty[\), et \(\ln\) est continue strictement croissante sur \(]0,+\infty[\).
    {: .fr-exo }

    因为 \(\displaystyle\int_1^N\frac{f'(x)}{f(x)}\,dx=\ln f(N)-\ln f(1)\)。而 \(f(N)\) 收敛当且仅当 \(\ln f(N)\) 收敛：\(f\) 递增且取值于 \([f(1),+\infty[\)，而 \(\ln\) 在 \(]0,+\infty[\) 上连续且严格递增。
    {: .zh }

    <strong>5.</strong> Les deux séries ont donc la même nature :
    {: .fr-exo }

    <strong>5.</strong> 因此两列级数同性质：
    {: .zh }

    \[
    \boxed{\sum f'(n)\ \text{converge}
    \iff\sum\frac{f'(n)}{f(n)}\ \text{converge}.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第二部分（Exercices supplémentaires）核心术语</span>"

    - <strong>approximation avec l'intégrale</strong>：用积分逼近
    - <strong>test intégral</strong>：积分判别法
    - <strong>fonction positive décroissante</strong>：正的递减函数
    - <strong>suite décroissante</strong>：递减数列
    - <strong>encadrement</strong>：夹逼；上下界估计
    - <strong>limite</strong>：极限
    - <strong>appartient à l'intervalle</strong>：属于区间
    - <strong>critère par comparaison</strong>：比较判别法
    - <strong>termes strictement positifs</strong>：严格正项
    - <strong>produit télescopique</strong>：裂项乘积
    - <strong>équivalence</strong>：等价（充要）
    - <strong>on pose</strong>：令

    - <strong>dérivée</strong>：导数
    - <strong>tendre vers 0 en \(+\infty\)</strong>：在 \(+\infty\) 处趋于 0
    - <strong>on intègre / en intégrant</strong>：积分 / 积分后
    - <strong>on somme</strong>：求和
    - <strong>prouver que</strong>：证明
    - <strong>montrer que</strong>：证明
    - <strong>en déduire</strong>：由此推出
    - <strong>si et seulement si</strong>：当且仅当
    - <strong>la même nature</strong>：同性质（同时收敛/发散）
    - <strong>ne change pas la nature</strong>：不改变级数性质
    - <strong>d'où</strong>：从而
    - <strong>par conséquent</strong>：因此
