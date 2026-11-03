---
title: TD6 级数引论题目
comments: true
---

# 第 6 次习题课　级数引论

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°6 — Introduction aux séries</p>
<p class="lecture-badge">ÉNONCÉ · 题目</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

    本页为第 6 次习题课的题目，与第 3 章「数项级数」配套。

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

### Exercice 8 <span class="heading-zh">练习 8</span>

<p class="exo-type">Série à termes positifs　正项级数</p>

Prouver que si une série à termes positifs \(\displaystyle\sum_{n=1}^{+\infty}a_n\) converge, alors \(\displaystyle\sum_{n=1}^{+\infty}(\alpha^{a_n}-1)\), où \(\alpha>1\), converge aussi.
{: .fr-exo }

证明：若<strong>正项级数</strong>（série à termes positifs）\(\displaystyle\sum_{n=1}^{+\infty}a_n\) 收敛，则 \(\displaystyle\sum_{n=1}^{+\infty}(\alpha^{a_n}-1)\)（其中 \(\alpha>1\)）也收敛。
{: .zh }

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
