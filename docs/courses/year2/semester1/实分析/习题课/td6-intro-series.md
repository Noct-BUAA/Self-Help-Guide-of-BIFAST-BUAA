---
title: TD6 级数引论解答
comments: true
---

# 第 6 次习题课　级数引论

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°6 — Introduction aux séries</p>
<p class="lecture-badge">ÉNONCÉ &amp; CORRIGÉ · 题目与参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。方框内为按法国习题课标准方式撰写的参考解答：先引用定理，再逐步推导，最后框出结论。

    本页为第 6 次习题课的题目与参考解答，与第 3 章「数项级数」配套。

## Exercices à préparer <span class="heading-zh">课前准备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">De la somme au terme　从和到通项</p>

Trouver le terme général de la série et sa somme si la suite \((S_n)\) de ses sommes partielles est donnée par
{: .fr-exo }

若级数的<strong>部分和</strong>（somme partielle）数列 \((S_n)\) 由下式给出，求该级数的<strong>通项</strong>（terme général）及其和：
{: .zh }

1. \(\displaystyle \forall n\in\mathbb{N}^*,\quad S_n=\frac{n}{n+1}\)
2. \(\displaystyle \forall n\in\mathbb{N}^*,\quad S_n=\frac{2^n-1}{2^n}\)
3. \(\displaystyle \forall n\in\mathbb{N}^*,\quad S_n=\arctan n\)
4. \(\displaystyle \forall n\in\mathbb{N}^*,\quad S_n=\frac{(-1)^n}{n}\)

!!! sol ""

    <strong>Solution.</strong> Pour une série \(\sum u_n\) de somme partielle \(S_n\), on a \(u_1=S_1\) et, pour tout \(n\geqslant2\), \(u_n=S_n-S_{n-1}\) : le terme général s'obtient par différence de deux sommes partielles consécutives, et la somme de la série vaut \(\lim\limits_{n\to+\infty}S_n\).
    {: .fr-exo }

    <strong>解.</strong> 对级数 \(\sum u_n\) 及其部分和 \(S_n\)，有 \(u_1=S_1\)，且对任意 \(n\geqslant2\)，\(u_n=S_n-S_{n-1}\)：通项由相邻两个部分和之差得到，而级数之和为 \(\lim\limits_{n\to+\infty}S_n\)。
    {: .zh }

    <strong>1.</strong> Pour \(n\geqslant2\),
    {: .fr-exo }

    <strong>1.</strong> 当 \(n\geqslant2\) 时，
    {: .zh }

    \[
    u_n=S_n-S_{n-1}=\frac{n}{n+1}-\frac{n-1}{n}
    =\frac{n^2-(n-1)(n+1)}{n(n+1)}=\frac{1}{n(n+1)}.
    \]

    Cette formule vaut encore pour \(n=1\) puisque \(S_1=\frac12=\frac{1}{1\cdot2}\). Comme \(\frac{1}{n(n+1)}=\frac1n-\frac1{n+1}\), la série est <strong>télescopique</strong> et
    {: .fr-exo }

    该式对 \(n=1\) 仍成立，因为 \(S_1=\frac12=\frac{1}{1\cdot2}\)。又 \(\frac{1}{n(n+1)}=\frac1n-\frac1{n+1}\)，故级数可<strong>裂项相消</strong>（télescopique），
    {: .zh }

    \[
    \boxed{\forall n\geqslant1,\ u_n=\frac{1}{n(n+1)};
    \qquad \sum_{n=1}^{+\infty}u_n=\lim_{n\to+\infty}S_n=1.}
    \]

    <strong>2.</strong> On écrit \(S_n=1-2^{-n}\). Pour \(n\geqslant2\),
    {: .fr-exo }

    <strong>2.</strong> 将 \(S_n\) 写成 \(S_n=1-2^{-n}\)。当 \(n\geqslant2\) 时，
    {: .zh }

    \[
    u_n=\left(1-2^{-n}\right)-\left(1-2^{-(n-1)}\right)
    =2^{-(n-1)}-2^{-n}=2^{-n},
    \]

    formule encore valable en \(n=1\) car \(S_1=\frac12\). La série est donc <strong>géométrique</strong> de raison \(\frac12\) et de premier terme \(\frac12\); d'où
    {: .fr-exo }

    该式在 \(n=1\) 时仍成立，因为 \(S_1=\frac12\)。因此级数为<strong>等比级数</strong>（série géométrique），公比 \(\frac12\)、首项 \(\frac12\)；故
    {: .zh }

    \[
    \boxed{\forall n\geqslant1,\ u_n=2^{-n};
    \qquad \sum_{n=1}^{+\infty}u_n=\lim_{n\to+\infty}S_n=1.}
    \]

    <strong>3.</strong> Ici \(u_1=S_1=\arctan1=\frac{\pi}{4}\) et, pour \(n\geqslant2\),
    {: .fr-exo }

    <strong>3.</strong> 此处 \(u_1=S_1=\arctan1=\frac{\pi}{4}\)，且当 \(n\geqslant2\) 时，
    {: .zh }

    \[
    u_n=\arctan n-\arctan(n-1)
    =\arctan\frac{n-(n-1)}{1+n(n-1)}
    =\arctan\frac{1}{n^2-n+1},
    \]

    la formule d'addition de \(\arctan\) s'appliquant car \(n(n-1)>-1\). La somme de la série est la limite des sommes partielles :
    {: .fr-exo }

    此处用到 \(\arctan\) 的加法公式，因为 \(n(n-1)>-1\)。级数之和为部分和的极限：
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}u_n=\lim_{n\to+\infty}\arctan n=\frac{\pi}{2}.}
    \]

    <strong>4.</strong> On a \(u_1=S_1=-1\) et, pour \(n\geqslant2\),
    {: .fr-exo }

    <strong>4.</strong> 有 \(u_1=S_1=-1\)，且当 \(n\geqslant2\) 时，
    {: .zh }

    \[
    u_n=\frac{(-1)^n}{n}-\frac{(-1)^{n-1}}{n-1}
    =(-1)^n\left(\frac1n+\frac1{n-1}\right)
    =(-1)^n\frac{2n-1}{n(n-1)}.
    \]

    La somme de la série est encore la limite des sommes partielles :
    {: .fr-exo }

    级数之和仍为部分和的极限：
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}u_n=\lim_{n\to+\infty}\frac{(-1)^n}{n}=0.}
    \]

    <p class="cqfd">∎</p>

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">Somme de séries　级数求和</p>

Trouver la somme des séries
{: .fr-exo }

求下列级数的和：
{: .zh }

1. \(\displaystyle \sum_{n=1}^{+\infty}\frac{2n+1}{n^2(n+1)^2}\)
2. \(\displaystyle \sum_{n=1}^{+\infty}\frac{n}{(2n-1)^2(2n+1)^2}\)
3. \(\displaystyle \sum_{n=1}^{+\infty}\frac{n-\sqrt{n^2-1}}{\sqrt{n(n+1)}}\)
4. \(\displaystyle \sum_{n=1}^{+\infty}\frac{1}{4n^2-1}\)
5. \(\displaystyle \sum_{n=1}^{+\infty}\frac{1}{(\sqrt{n}+\sqrt{n+1})\sqrt{n(n+1)}}\)

!!! sol ""

    <strong>Solution.</strong> On cherche pour chaque terme une écriture <strong>télescopique</strong>, c'est-à-dire une différence \(v_n-v_{n+1}\) dont la somme partielle se simplifie.
    {: .fr-exo }

    <strong>解.</strong> 我们对每一项寻找<strong>裂项</strong>（télescopique）写法，即写成差 \(v_n-v_{n+1}\)，使部分和化简。
    {: .zh }

    <strong>1.</strong> On remarque que
    {: .fr-exo }

    <strong>1.</strong> 注意到
    {: .zh }

    \[
    \frac{1}{n^2}-\frac{1}{(n+1)^2}
    =\frac{(n+1)^2-n^2}{n^2(n+1)^2}=\frac{2n+1}{n^2(n+1)^2}.
    \]

    La somme partielle d'ordre \(N\) se télescope :
    {: .fr-exo }

    第 \(N\) 个部分和裂项相消：
    {: .zh }

    \[
    \sum_{n=1}^{N}\frac{2n+1}{n^2(n+1)^2}
    =\sum_{n=1}^{N}\left(\frac{1}{n^2}-\frac{1}{(n+1)^2}\right)
    =1-\frac{1}{(N+1)^2}\longrightarrow1.
    \]

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{2n+1}{n^2(n+1)^2}=1.}
    \]

    <strong>2.</strong> De même,
    {: .fr-exo }

    <strong>2.</strong> 同理，
    {: .zh }

    \[
    \frac{1}{(2n-1)^2}-\frac{1}{(2n+1)^2}
    =\frac{(2n+1)^2-(2n-1)^2}{(2n-1)^2(2n+1)^2}
    =\frac{8n}{(2n-1)^2(2n+1)^2},
    \]

    donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    \frac{n}{(2n-1)^2(2n+1)^2}
    =\frac18\left(\frac{1}{(2n-1)^2}-\frac{1}{(2n+1)^2}\right),
    \]

    et, par télescopage,
    {: .fr-exo }

    裂项相消得
    {: .zh }

    \[
    \sum_{n=1}^{N}\frac{n}{(2n-1)^2(2n+1)^2}
    =\frac18\left(1-\frac{1}{(2N+1)^2}\right)\longrightarrow\frac18.
    \]

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{n}{(2n-1)^2(2n+1)^2}=\frac18.}
    \]

    <strong>3.</strong> En multipliant par la <strong>quantité conjuguée</strong>,
    {: .fr-exo }

    <strong>3.</strong> 乘以<strong>共轭量</strong>（quantité conjuguée）有理化，
    {: .zh }

    \[
    n-\sqrt{n^2-1}=\frac{n^2-(n^2-1)}{n+\sqrt{n^2-1}}
    =\frac{1}{n+\sqrt{n^2-1}}.
    \]

    Or, en réduisant au même dénominateur,
    {: .fr-exo }

    而通分可得
    {: .zh }

    \[
    \sqrt{\frac{n}{n+1}}-\sqrt{\frac{n-1}{n}}
    =\frac{n-\sqrt{(n-1)(n+1)}}{\sqrt{n(n+1)}}
    =\frac{n-\sqrt{n^2-1}}{\sqrt{n(n+1)}}.
    \]

    La somme partielle se télescope donc :
    {: .fr-exo }

    因此部分和裂项相消：
    {: .zh }

    \[
    \sum_{n=1}^{N}\frac{n-\sqrt{n^2-1}}{\sqrt{n(n+1)}}
    =\sqrt{\frac{N}{N+1}}-\sqrt{\frac{0}{1}}
    =\sqrt{\frac{N}{N+1}}\longrightarrow1.
    \]

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{n-\sqrt{n^2-1}}{\sqrt{n(n+1)}}=1.}
    \]

    <strong>4.</strong> On décompose en éléments simples :
    {: .fr-exo }

    <strong>4.</strong> 作部分分式分解：
    {: .zh }

    \[
    \frac{1}{4n^2-1}=\frac{1}{(2n-1)(2n+1)}
    =\frac12\left(\frac{1}{2n-1}-\frac{1}{2n+1}\right).
    \]

    Par télescopage,
    {: .fr-exo }

    裂项相消得
    {: .zh }

    \[
    \sum_{n=1}^{N}\frac{1}{4n^2-1}
    =\frac12\left(1-\frac{1}{2N+1}\right)\longrightarrow\frac12.
    \]

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{1}{4n^2-1}=\frac12.}
    \]

    <strong>5.</strong> On rationalise : \(\dfrac{1}{\sqrt n+\sqrt{n+1}}=\sqrt{n+1}-\sqrt n\). Ainsi
    {: .fr-exo }

    <strong>5.</strong> 有理化：\(\dfrac{1}{\sqrt n+\sqrt{n+1}}=\sqrt{n+1}-\sqrt n\)。于是
    {: .zh }

    \[
    \frac{1}{(\sqrt n+\sqrt{n+1})\sqrt{n(n+1)}}
    =\frac{\sqrt{n+1}-\sqrt n}{\sqrt n\,\sqrt{n+1}}
    =\frac{1}{\sqrt n}-\frac{1}{\sqrt{n+1}},
    \]

    puis, par télescopage,
    {: .fr-exo }

    再裂项相消，
    {: .zh }

    \[
    \sum_{n=1}^{N}\frac{1}{(\sqrt n+\sqrt{n+1})\sqrt{n(n+1)}}
    =1-\frac{1}{\sqrt{N+1}}\longrightarrow1.
    \]

    \[
    \boxed{\sum_{n=1}^{+\infty}\frac{1}{(\sqrt n+\sqrt{n+1})\sqrt{n(n+1)}}=1.}
    \]

    <p class="cqfd">∎</p>

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">Somme des 1/n²　1/n² 之和</p>

Établir l'égalité
{: .fr-exo }

证明等式：
{: .zh }

\[
\sum_{n=1}^{+\infty}\frac{1}{(2n-1)^2}
=\frac{3}{4}\sum_{n=1}^{+\infty}\frac{1}{n^2}.
\]

!!! sol ""

    <strong>Solution.</strong> On sait que la série \(\sum\frac{1}{n^2}\) converge (série de Riemann \(\sum\frac{1}{n^\alpha}\) avec \(\alpha=2>1\)). On regroupe les termes selon la parité de l'indice :
    {: .fr-exo }

    <strong>解.</strong> 已知级数 \(\sum\frac{1}{n^2}\) 收敛（黎曼级数 \(\sum\frac{1}{n^\alpha}\)，\(\alpha=2>1\)）。按指标 \(n\) 的奇偶性将项分组：
    {: .zh }

    \[
    \sum_{n=1}^{+\infty}\frac{1}{n^2}
    =\sum_{k=1}^{+\infty}\frac{1}{(2k-1)^2}
    +\sum_{k=1}^{+\infty}\frac{1}{(2k)^2}.
    \]

    Cette scission est licite car les séries sont à termes positifs convergentes (associativité des familles sommables). Or
    {: .fr-exo }

    该拆分是合法的，因为级数均为收敛的正项级数（可和族的结合律）。而
    {: .zh }

    \[
    \sum_{k=1}^{+\infty}\frac{1}{(2k)^2}
    =\frac14\sum_{k=1}^{+\infty}\frac{1}{k^2},
    \]

    d'où, en isolant la somme sur les indices impairs,
    {: .fr-exo }

    因此，分离出奇数项之和，
    {: .zh }

    \[
    \sum_{k=1}^{+\infty}\frac{1}{(2k-1)^2}
    =\left(1-\frac14\right)\sum_{k=1}^{+\infty}\frac{1}{k^2}
    =\boxed{\frac34\sum_{k=1}^{+\infty}\frac{1}{k^2}}.
    \]

    <p class="cqfd">∎</p>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">Somme de séries factorielles　阶乘级数求和</p>

On veut calculer \(S=\displaystyle\sum_{n=0}^{+\infty}\frac{2n^3+1}{n!}\). (On rappelle que \(\displaystyle\sum_{n=0}^{+\infty}\frac{1}{n!}=e\).)
{: .fr-exo }

我们要计算 \(S=\displaystyle\sum_{n=0}^{+\infty}\frac{2n^3+1}{n!}\)。（回忆：\(\displaystyle\sum_{n=0}^{+\infty}\frac{1}{n!}=e\)。）
{: .zh }

<strong>1.</strong> Trouver des réels \(A,B,C\) et \(D\) tels que
{: .fr-exo }

<strong>1.</strong> 求实数 \(A,B,C,D\)，使得
{: .zh }

\[
2X^3+1=AX(X-1)(X-2)+BX(X-1)+CX+D.
\]

<strong>2.</strong> En déduire \(S\).
{: .fr-exo }

<strong>2.</strong> 由此推出 \(S\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> On développe et on identifie les coefficients. D'une part,
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 展开并比较系数。一方面，
    {: .zh }

    \[
    AX(X-1)(X-2)=A(X^3-3X^2+2X),\qquad BX(X-1)=B(X^2-X),
    \]

    donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    AX(X-1)(X-2)+BX(X-1)+CX+D
    =A X^3+(-3A+B)X^2+(2A-B+C)X+D.
    \]

    Par identification avec \(2X^3+1\), il vient
    {: .fr-exo }

    与 \(2X^3+1\) 比较系数，得
    {: .zh }

    \[
    A=2,\qquad -3A+B=0,\qquad 2A-B+C=0,\qquad D=1,
    \]

    c'est-à-dire
    {: .fr-exo }

    即
    {: .zh }

    \[
    \boxed{A=2,\quad B=6,\quad C=2,\quad D=1.}
    \]

    <strong>2.</strong> En divisant l'identité par \(n!\), on obtient
    {: .fr-exo }

    <strong>2.</strong> 将恒等式除以 \(n!\)，得
    {: .zh }

    \[
    \frac{2n^3+1}{n!}
    =2\,\frac{n(n-1)(n-2)}{n!}
    +6\,\frac{n(n-1)}{n!}
    +2\,\frac{n}{n!}
    +\frac{1}{n!}.
    \]

    Pour \(n\geqslant3\), \(\dfrac{n(n-1)(n-2)}{n!}=\dfrac{1}{(n-3)!}\); de même \(\dfrac{n(n-1)}{n!}=\dfrac{1}{(n-2)!}\) pour \(n\geqslant2\) et \(\dfrac{n}{n!}=\dfrac{1}{(n-1)!}\) pour \(n\geqslant1\). Les termes manquants sont nuls; toutes les séries obtenues sont à termes positifs convergentes, donc, en sommant et en décalant les indices,
    {: .fr-exo }

    当 \(n\geqslant3\) 时 \(\dfrac{n(n-1)(n-2)}{n!}=\dfrac{1}{(n-3)!}\)；同理，当 \(n\geqslant2\) 时 \(\dfrac{n(n-1)}{n!}=\dfrac{1}{(n-2)!}\)，当 \(n\geqslant1\) 时 \(\dfrac{n}{n!}=\dfrac{1}{(n-1)!}\)。缺失的项为零；所得级数均为收敛的正项级数，故求和并平移指标得
    {: .zh }

    \[
    S=2\sum_{m=0}^{+\infty}\frac{1}{m!}
    +6\sum_{m=0}^{+\infty}\frac{1}{m!}
    +2\sum_{m=0}^{+\infty}\frac{1}{m!}
    +\sum_{m=0}^{+\infty}\frac{1}{m!}
    =(2+6+2+1)e.
    \]

    \[
    \boxed{S=11e.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第一部分（Exercices à préparer）核心术语</span>"

    - <strong>terme général</strong>：通项
    - <strong>somme partielle</strong>：部分和
    - <strong>somme d'une série</strong>：级数之和
    - <strong>série convergente / divergente</strong>：收敛 / 发散级数
    - <strong>série harmonique</strong>：调和级数
    - <strong>série factorielle</strong>：阶乘级数
    - <strong>factorielle \(n!\)</strong>：阶乘 \(n!\)
    - <strong>établir l'égalité</strong>：证明等式
    - <strong>calculer</strong>：计算
    - <strong>on veut calculer</strong>：我们要计算
    - <strong>on rappelle que</strong>：回忆（提示）
    - <strong>en déduire</strong>：由此推出

    - <strong>trouver</strong>：求
    - <strong>donné par</strong>：由……给出
    - <strong>somme \(\sum u_n\)</strong>：无穷级数求和
    - <strong>\(\arctan\)</strong>：反正切函数
    - <strong>\((-1)^n\)</strong>：交错符号因子
    - <strong>\(\mathbb{N}^*\)</strong>：非零自然数集
    - <strong>réels \(A,B,C,D\)</strong>：实数 \(A,B,C,D\)
    - <strong>tels que</strong>：使得
    - <strong>développer / identifier</strong>：展开 / 比较系数
    - <strong>\(\sum 1/n!=e\)</strong>：指数级数求和
    - <strong>terme d'indice \(n\)</strong>：第 \(n\) 项
    - <strong>suite des sommes partielles</strong>：部分和数列

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">Comparaison à la série harmonique　与调和级数比较</p>

On considère une suite décroissante de réels positifs \((a_n)\) telle que la série correspondante \(\sum a_n\) est convergente.
{: .fr-exo }

考虑一个<strong>递减</strong>的正实数数列 \((a_n)\)，其对应的级数 \(\sum a_n\) 收敛。
{: .zh }

<strong>1.</strong> Montrer que la suite \((S_{2n}-S_n)\) tend vers \(0\) où \(S_n\) désigne la somme partielle \(\displaystyle\sum_{k=0}^{n}a_k\).
{: .fr-exo }

<strong>1.</strong> 证明数列 \((S_{2n}-S_n)\) 趋于 \(0\)，其中 \(S_n\) 表示部分和 \(\displaystyle\sum_{k=0}^{n}a_k\)。
{: .zh }

<strong>2.</strong> Montrer que la suite \((na_n)\) tend vers \(0\).
{: .fr-exo }

<strong>2.</strong> 证明数列 \((na_n)\) 趋于 \(0\)。
{: .zh }

<strong>3.</strong> On veut montrer que la réciproque, si \((na_n)\) tend vers \(0\) alors \(\sum a_n\) est convergente, est fausse. On considère la série \(\displaystyle\sum\frac{1}{n\ln n}\).
{: .fr-exo }

<strong>3.</strong> 我们要说明其<strong>逆命题</strong>（réciproque）是假的：即「若 \((na_n)\) 趋于 \(0\)，则 \(\sum a_n\) 收敛」。考虑级数 \(\displaystyle\sum\frac{1}{n\ln n}\)。
{: .zh }

&emsp;&emsp;Montrer que la série de terme général \(\left(\displaystyle\sum_{k=2^n+1}^{2^{n+1}}\frac{1}{k\ln k}\right)_{n\in\mathbb{N}}\) diverge et conclure.
{: .fr-exo }

&emsp;&emsp;证明通项为 \(\left(\displaystyle\sum_{k=2^n+1}^{2^{n+1}}\frac{1}{k\ln k}\right)_{n\in\mathbb{N}}\) 的级数<strong>发散</strong>，并得出结论。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> Notons \(R_n=\sum_{k=n+1}^{+\infty}a_k\) le reste d'ordre \(n\) de la série convergente \(\sum a_k\). Par définition de la convergence, \(R_n\to0\). Comme les \(a_k\) sont positifs,
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 记 \(R_n=\sum_{k=n+1}^{+\infty}a_k\) 为收敛级数 \(\sum a_k\) 的第 \(n\) 个余项。按收敛的定义，\(R_n\to0\)。由于 \(a_k\geqslant0\)，
    {: .zh }

    \[
    0\leqslant S_{2n}-S_n=\sum_{k=n+1}^{2n}a_k
    \leqslant\sum_{k=n+1}^{+\infty}a_k=R_n.
    \]

    Par le <strong>théorème de la limite par encadrement</strong>, \(S_{2n}-S_n\to0\).
    {: .fr-exo }

    由<strong>夹逼定理</strong>（théorème de la limite par encadrement），\(S_{2n}-S_n\to0\)。
    {: .zh }

    <strong>2.</strong> La suite \((a_n)\) étant décroissante et positive, pour \(n+1\leqslant k\leqslant2n\) on a \(a_{2n}\leqslant a_k\leqslant a_n\). En sommant ces inégalités sur les \(n\) indices \(k=n+1,\dots,2n\),
    {: .fr-exo }

    <strong>2.</strong> 由于数列 \((a_n)\) 递减且非负，对 \(n+1\leqslant k\leqslant2n\) 有 \(a_{2n}\leqslant a_k\leqslant a_n\)。对 \(n\) 个指标 \(k=n+1,\dots,2n\) 求和，
    {: .zh }

    \[
    n\,a_{2n}\leqslant S_{2n}-S_n\leqslant n\,a_n.
    \]

    La minoration \(0\leqslant n a_{2n}\leqslant S_{2n}-S_n\) et le résultat de la question 1 donnent \(n a_{2n}\to0\), donc \(2n\,a_{2n}\to0\). D'autre part, \(a_{2n+1}\leqslant a_{2n}\) entraîne
    {: .fr-exo }

    由下界估计 \(0\leqslant n a_{2n}\leqslant S_{2n}-S_n\) 及第 1 问的结果得 \(n a_{2n}\to0\)，故 \(2n\,a_{2n}\to0\)。另一方面，\(a_{2n+1}\leqslant a_{2n}\) 推出
    {: .zh }

    \[
    0\leqslant(2n+1)a_{2n+1}\leqslant(2n+1)a_{2n}
    =\frac{2n+1}{2n}\cdot2n\,a_{2n}\longrightarrow0.
    \]

    Ainsi les sous-suites paire et impaire de \((n a_n)\) tendent vers \(0\); par conséquent
    {: .fr-exo }

    因此 \((n a_n)\) 的偶数项子列与奇数项子列都趋于 \(0\)；从而
    {: .zh }

    \[
    \boxed{n\,a_n\longrightarrow0.}
    \]

    <strong>3.</strong> Posons \(a_n=\dfrac{1}{n\ln n}\) pour \(n\geqslant2\). La suite \((a_n)\) est décroissante et positive à partir du rang \(2\), et
    {: .fr-exo }

    <strong>3.</strong> 令 \(n\geqslant2\) 时 \(a_n=\dfrac{1}{n\ln n}\)。数列 \((a_n)\) 从第 \(2\) 项起递减且为正，且
    {: .zh }

    \[
    n\,a_n=\frac{1}{\ln n}\longrightarrow0.
    \]

    Pour \(n\in\mathbb{N}\), posons \(b_n=\sum_{k=2^n+1}^{2^{n+1}}\frac{1}{k\ln k}\). Dans chaque bloc, \(k\leqslant2^{n+1}\), donc \(\frac{1}{k\ln k}\geqslant\frac{1}{2^{n+1}\ln 2^{n+1}}\); le bloc contient \(2^n\) termes, d'où
    {: .fr-exo }

    对 \(n\in\mathbb{N}\)，令 \(b_n=\sum_{k=2^n+1}^{2^{n+1}}\frac{1}{k\ln k}\)。在每个区块内 \(k\leqslant2^{n+1}\)，故 \(\frac{1}{k\ln k}\geqslant\frac{1}{2^{n+1}\ln 2^{n+1}}\)；区块含 \(2^n\) 项，因此
    {: .zh }

    \[
    b_n\geqslant\frac{2^n}{2^{n+1}\ln 2^{n+1}}
    =\frac{1}{2(n+1)\ln2}.
    \]

    Comme la série harmonique \(\sum\frac{1}{n+1}\) diverge, le <strong>théorème de comparaison</strong> pour les séries à termes positifs montre que \(\sum b_n\) diverge. Or les sommes partielles de \(\sum b_n\) sont exactement les sommes de \(\sum\frac{1}{n\ln n}\) sur les blocs \([\![2^n+1,2^{n+1}]\!]\) :
    {: .fr-exo }

    由于调和级数 \(\sum\frac{1}{n+1}\) 发散，正项级数的<strong>比较判别法</strong>表明 \(\sum b_n\) 发散。而 \(\sum b_n\) 的部分和恰为 \(\sum\frac{1}{n\ln n}\) 在各区块 \([\![2^n+1,2^{n+1}]\!]\) 上的和：
    {: .zh }

    \[
    \sum_{n=0}^{N}b_n=\sum_{k=2}^{2^{N+1}}\frac{1}{k\ln k}\longrightarrow+\infty,
    \]

    donc la série \(\sum\frac{1}{n\ln n}\) diverge. On a ainsi exhibé une suite décroissante positive \((a_n)\) telle que \(n a_n\to0\) et \(\sum a_n\) diverge : la réciproque est fausse.
    {: .fr-exo }

    故级数 \(\sum\frac{1}{n\ln n}\) 发散。这样便给出了一个递减正数列 \((a_n)\)，满足 \(n a_n\to0\) 却使 \(\sum a_n\) 发散：逆命题不成立。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">Perturbation par permutation　置换扰动</p>

Soit \((a_n)_{n\geqslant1}\) une suite à termes positifs telle que la série \(\sum a_n^2\) est convergente. Soit \(\sigma\) une bijection de \(\mathbb{N}^*\) dans lui-même.
{: .fr-exo }

设 \((a_n)_{n\geqslant1}\) 为各项为正的数列，且级数 \(\sum a_n^2\) 收敛。设 \(\sigma\) 是 \(\mathbb{N}^*\) 到自身的<strong>双射</strong>（bijection）。
{: .zh }

<strong>1.</strong> Montrer que la série \(\sum a_{\sigma(n)}^2\) converge vers la même somme que \(\sum a_n^2\).
{: .fr-exo }

<strong>1.</strong> 证明级数 \(\sum a_{\sigma(n)}^2\) 收敛于与 \(\sum a_n^2\) 相同的和。
{: .zh }

<strong>2.</strong> Montrer que \(\forall x,y\in\mathbb{R},\ |xy|\leqslant\frac12(x^2+y^2)\). En déduire que la série \(\sum a_n a_{\sigma(n)}\) converge.
{: .fr-exo }

<strong>2.</strong> 证明 \(\forall x,y\in\mathbb{R},\ |xy|\leqslant\frac12(x^2+y^2)\)。由此推出级数 \(\sum a_n a_{\sigma(n)}\) 收敛。
{: .zh }

<strong>3.</strong> Montrer que \(\displaystyle\sum_{n=1}^{+\infty}a_n a_{\sigma(n)}\leqslant\sum_{n=1}^{+\infty}a_n^2\). Dans quel cas y a-t-il égalité ?
{: .fr-exo }

<strong>3.</strong> 证明 \(\displaystyle\sum_{n=1}^{+\infty}a_n a_{\sigma(n)}\leqslant\sum_{n=1}^{+\infty}a_n^2\)。在什么情况下取等号？
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1.</strong> Les termes étant positifs, la somme d'une série convergente à termes positifs est la borne supérieure des sommes finies :
    {: .fr-exo }

    <strong>解.</strong> <strong>1.</strong> 由于各项非负，收敛正项级数之和等于所有有限和的上确界：
    {: .zh }

    \[
    \sum_{n=1}^{+\infty}a_n^2
    =\sup_{F\subset\mathbb{N}^*,\ F\ \text{fini}}\ \sum_{n\in F}a_n^2.
    \]

    Comme \(\sigma\) est une bijection de \(\mathbb{N}^*\) sur lui-même, l'application \(F\mapsto\sigma(F)\) permute les parties finies de \(\mathbb{N}^*\). Par suite
    {: .fr-exo }

    由于 \(\sigma\) 是 \(\mathbb{N}^*\) 到自身的双射，映射 \(F\mapsto\sigma(F)\) 置换 \(\mathbb{N}^*\) 的有限子集。因此
    {: .zh }

    \[
    \sup_{F\ \text{fini}}\sum_{n\in F}a_{\sigma(n)}^2
    =\sup_{G\ \text{fini}}\sum_{k\in G}a_k^2
    =\sum_{n=1}^{+\infty}a_n^2,
    \]

    ce qui prouve que \(\sum a_{\sigma(n)}^2\) converge et a même somme que \(\sum a_n^2\).
    {: .fr-exo }

    这证明了 \(\sum a_{\sigma(n)}^2\) 收敛，且与 \(\sum a_n^2\) 有相同的和。
    {: .zh }

    <strong>2.</strong> Pour tous réels \(x,y\),
    {: .fr-exo }

    <strong>2.</strong> 对任意实数 \(x,y\)，
    {: .zh }

    \[
    0\leqslant(|x|-|y|)^2=x^2+y^2-2|xy|,
    \]

    d'où \(|xy|\leqslant\frac12(x^2+y^2)\). En appliquant cette inégalité à \(x=a_n\) et \(y=a_{\sigma(n)}\), il vient
    {: .fr-exo }

    故 \(|xy|\leqslant\frac12(x^2+y^2)\)。将该不等式用于 \(x=a_n\)、\(y=a_{\sigma(n)}\)，得
    {: .zh }

    \[
    0\leqslant a_n a_{\sigma(n)}
    \leqslant\frac12\left(a_n^2+a_{\sigma(n)}^2\right).
    \]

    Or \(\sum\left(a_n^2+a_{\sigma(n)}^2\right)\) converge, comme somme de deux séries convergentes. Par le <strong>théorème de comparaison</strong> pour les séries à termes positifs, \(\sum a_n a_{\sigma(n)}\) converge.
    {: .fr-exo }

    而 \(\sum\left(a_n^2+a_{\sigma(n)}^2\right)\) 作为两个收敛级数之和收敛。由正项级数的<strong>比较判别法</strong>，\(\sum a_n a_{\sigma(n)}\) 收敛。
    {: .zh }

    <strong>3.</strong> D'après l'<strong>inégalité de Cauchy--Schwarz</strong> pour les séries,
    {: .fr-exo }

    <strong>3.</strong> 由级数的<strong>柯西–施瓦茨不等式</strong>（inégalité de Cauchy--Schwarz），
    {: .zh }

    \[
    \sum_{n=1}^{+\infty}a_n a_{\sigma(n)}
    \leqslant\left(\sum_{n=1}^{+\infty}a_n^2\right)^{1/2}
    \left(\sum_{n=1}^{+\infty}a_{\sigma(n)}^2\right)^{1/2}
    =\sum_{n=1}^{+\infty}a_n^2.
    \]

    Il y a égalité si et seulement si les suites \((a_n)\) et \((a_{\sigma(n)})\) sont proportionnelles. Si \(a\) n'est pas la suite nulle, il existe alors \(\lambda>0\) tel que \(a_{\sigma(n)}=\lambda a_n\) pour tout \(n\); en sommant les carrés,
    {: .fr-exo }

    等号成立当且仅当数列 \((a_n)\) 与 \((a_{\sigma(n)})\) 成比例。若 \(a\) 不是零数列，则存在 \(\lambda>0\) 使对任意 \(n\) 有 \(a_{\sigma(n)}=\lambda a_n\)；对平方求和，
    {: .zh }

    \[
    \sum_{n=1}^{+\infty}a_{\sigma(n)}^2
    =\lambda^2\sum_{n=1}^{+\infty}a_n^2,
    \]

    d'où \(\lambda^2=1\), puis \(\lambda=1\) car \(\lambda>0\). Ainsi \(a_{\sigma(n)}=a_n\) pour tout \(n\). Réciproquement, cette condition donne évidemment l'égalité. En conclusion, il y a égalité si et seulement si \(\sigma\) laisse la suite \((a_n)\) invariante.
    {: .fr-exo }

    于是 \(\lambda^2=1\)，再由 \(\lambda>0\) 得 \(\lambda=1\)。因此对任意 \(n\) 有 \(a_{\sigma(n)}=a_n\)。反之，该条件显然使等号成立。综上，等号成立当且仅当 \(\sigma\) 使数列 \((a_n)\) 保持不变。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 7 <span class="heading-zh">练习 7</span>

<p class="exo-type">Séries géométriques　几何级数</p>

Soient \((a,b)\in\mathbb{C}^2\) tels que \(|a|<1\) et \(|b|<1\). Prouver que
{: .fr-exo }

设 \((a,b)\in\mathbb{C}^2\) 满足 \(|a|<1\) 且 \(|b|<1\)，证明：
{: .zh }

\[
\begin{cases}
\dfrac{1}{(1-a)(1-b)}
=\displaystyle\sum_{n=0}^{+\infty}\frac{a^{n+1}-b^{n+1}}{a-b}
& \text{si } a\neq b,\\[16pt]
\dfrac{1}{(1-a)^2}
=\displaystyle\sum_{n=0}^{+\infty}(n+1)a^n
& \text{si } a=b.
\end{cases}
\]

(On pourra multiplier par \(1-a\) et simplifier.)
{: .fr-exo }

（可将等式乘以 \(1-a\) 后化简。）
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>Cas \(a\neq b\).</strong> Pour tout \(n\in\mathbb{N}\), l'identité \(a^{n+1}-b^{n+1}=(a-b)(a^n+a^{n-1}b+\cdots+b^n)\) donne
    {: .fr-exo }

    <strong>解.</strong> <strong>情形 \(a\neq b\).</strong> 对任意 \(n\in\mathbb{N}\)，恒等式 \(a^{n+1}-b^{n+1}=(a-b)(a^n+a^{n-1}b+\cdots+b^n)\) 给出
    {: .zh }

    \[
    \frac{a^{n+1}-b^{n+1}}{a-b}=\sum_{k=0}^{n}a^{n-k}b^k.
    \]

    En multipliant la somme par \(1-a\) (opération licite, la série étant absolument convergente car \(|a|<1\) et \(|b|<1\)),
    {: .fr-exo }

    将和式乘以 \(1-a\)（该运算合法，因为 \(|a|<1\)、\(|b|<1\) 保证级数绝对收敛），
    {: .zh }

    \[
    (1-a)\sum_{n=0}^{+\infty}\frac{a^{n+1}-b^{n+1}}{a-b}
    =\frac{\displaystyle\sum_{n=0}^{+\infty}(a^{n+1}-a^{n+2})
    -(1-a)\sum_{n=0}^{+\infty}b^{n+1}}{a-b}.
    \]

    Or \(\sum_{n=0}^{+\infty}(a^{n+1}-a^{n+2})=a\) (somme télescopique) et \(\sum_{n=0}^{+\infty}b^{n+1}=\frac{b}{1-b}\); donc
    {: .fr-exo }

    而 \(\sum_{n=0}^{+\infty}(a^{n+1}-a^{n+2})=a\)（裂项相消），且 \(\sum_{n=0}^{+\infty}b^{n+1}=\frac{b}{1-b}\)；因此
    {: .zh }

    \[
    (1-a)\sum_{n=0}^{+\infty}\frac{a^{n+1}-b^{n+1}}{a-b}
    =\frac{a-\frac{(1-a)b}{1-b}}{a-b}
    =\frac{a(1-b)-b(1-a)}{(1-b)(a-b)}
    =\frac{1}{1-b}.
    \]

    En divisant par \(1-a\neq0\), on obtient
    {: .fr-exo }

    除以 \(1-a\neq0\)，得
    {: .zh }

    \[
    \boxed{\frac{1}{(1-a)(1-b)}
    =\sum_{n=0}^{+\infty}\frac{a^{n+1}-b^{n+1}}{a-b}.}
    \]

    <strong>Cas \(a=b\).</strong> La série \(\sum(n+1)a^n\) est absolument convergente car \(|a|<1\). En multipliant par \(1-a\),
    {: .fr-exo }

    <strong>情形 \(a=b\).</strong> 由于 \(|a|<1\)，级数 \(\sum(n+1)a^n\) 绝对收敛。乘以 \(1-a\)，
    {: .zh }

    \[
    (1-a)\sum_{n=0}^{+\infty}(n+1)a^n
    =\sum_{n=0}^{+\infty}(n+1)a^n-\sum_{n=1}^{+\infty}n\,a^n
    =1+\sum_{n=1}^{+\infty}a^n
    =\frac{1}{1-a},
    \]

    après décalage d'indice dans la seconde somme. En divisant par \(1-a\),
    {: .fr-exo }

    其中第二个和式已平移指标。除以 \(1-a\)，
    {: .zh }

    \[
    \boxed{\frac{1}{(1-a)^2}=\sum_{n=0}^{+\infty}(n+1)a^n.}
    \]

    <p class="cqfd">∎</p>

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">Série à termes positifs　正项级数</p>

Prouver que si une série à termes positifs \(\displaystyle\sum_{n=1}^{+\infty}a_n\) converge, alors \(\displaystyle\sum_{n=1}^{+\infty}(\alpha^{a_n}-1)\), où \(\alpha>1\), converge aussi.
{: .fr-exo }

证明：若<strong>正项级数</strong>（série à termes positifs）\(\displaystyle\sum_{n=1}^{+\infty}a_n\) 收敛，则 \(\displaystyle\sum_{n=1}^{+\infty}(\alpha^{a_n}-1)\)（其中 \(\alpha>1\)）也收敛。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> La série \(\sum a_n\) converge et est à termes positifs, donc \(a_n\to0\). Pour \(\alpha>1\), on a \(\ln\alpha>0\) et
    {: .fr-exo }

    <strong>解.</strong> 级数 \(\sum a_n\) 收敛且各项非负，故 \(a_n\to0\)。对 \(\alpha>1\)，有 \(\ln\alpha>0\)，且
    {: .zh }

    \[
    \alpha^{a_n}-1=e^{a_n\ln\alpha}-1.
    \]

    Comme \(a_n\ln\alpha\to0\) et que \(e^u-1\sim u\) au voisinage de \(0\),
    {: .fr-exo }

    由于 \(a_n\ln\alpha\to0\)，且当 \(u\to0\) 时 \(e^u-1\sim u\)，
    {: .zh }

    \[
    \alpha^{a_n}-1\sim a_n\ln\alpha\qquad(n\to+\infty).
    \]

    Les deux séries sont à termes positifs (car \(a_n\geqslant0\) et \(\alpha>1\) entraînent \(\alpha^{a_n}-1\geqslant0\)). D'après le <strong>critère d'équivalence</strong> pour les séries à termes positifs, la série \(\sum(\alpha^{a_n}-1)\) converge si et seulement si \(\sum a_n\ln\alpha\) converge. Or \(\ln\alpha\) est une constante et \(\sum a_n\) converge; donc
    {: .fr-exo }

    两个级数均为正项级数（因为 \(a_n\geqslant0\) 且 \(\alpha>1\) 推出 \(\alpha^{a_n}-1\geqslant0\)）。由正项级数的<strong>等价判别法</strong>（critère d'équivalence），\(\sum(\alpha^{a_n}-1)\) 收敛当且仅当 \(\sum a_n\ln\alpha\) 收敛。而 \(\ln\alpha\) 为常数且 \(\sum a_n\) 收敛；故
    {: .zh }

    \[
    \boxed{\sum_{n=1}^{+\infty}\left(\alpha^{a_n}-1\right)\ \text{converge}.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第二部分（Exercices supplémentaires）核心术语</span>"

    - <strong>perturbation par permutation</strong>：置换扰动
    - <strong>permutation</strong>：置换
    - <strong>bijection</strong>：双射
    - <strong>série à termes positifs</strong>：正项级数
    - <strong>suite décroissante</strong>：递减数列
    - <strong>réciproque</strong>：逆命题
    - <strong>comparaison à la série harmonique</strong>：与调和级数比较
    - <strong>diverger / converger</strong>：发散 / 收敛
    - <strong>série géométrique</strong>：几何级数
    - <strong>raison</strong>：公比
    - <strong>\(\mathbb{C}^2\)</strong>：复平面点对 \((a,b)\)
    - <strong>si \(a\neq b\)</strong>：若 \(a\neq b\)
    - <strong>si \(a=b\)</strong>：若 \(a=b\)

    - <strong>converger vers la même somme</strong>：收敛于同一和
    - <strong>\(\forall x,y\in\mathbb{R}\)</strong>：对任意实数 \(x,y\)
    - <strong>inégalité</strong>：不等式
    - <strong>dans quel cas</strong>：在什么情况下
    - <strong>égalité</strong>：等号；相等
    - <strong>montrer que</strong>：证明
    - <strong>prouver que</strong>：证明
    - <strong>on considère</strong>：考虑
    - <strong>on veut montrer que</strong>：我们要证明
    - <strong>en déduire</strong>：由此推出
    - <strong>conclure</strong>：得出结论
    - <strong>on pourra</strong>：可以（提示）
    - <strong>multiplier par</strong>：乘以
    - <strong>simplifier</strong>：化简
