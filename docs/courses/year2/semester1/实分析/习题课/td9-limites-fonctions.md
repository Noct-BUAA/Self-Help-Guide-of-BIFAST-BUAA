---
title: TD9 函数的极限解答
comments: true
---

# 第 9 次习题课　函数的极限

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°9 — Limites de fonctions</p>
<p class="lecture-badge">ÉNONCÉ &amp; CORRIGÉ · 题目与参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。方框内为按法国习题课标准方式撰写的参考解答：先引用定理，再逐步推导，最后框出结论。

    本页为第 9 次习题课的题目与参考解答，与第 4 章「函数的极限与连续性」配套。

## Exercices à préparer <span class="heading-zh">课前准备练习</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">Limites　极限</p>

Déterminer les limites suivantes :
{: .fr-exo }

求下列极限：
{: .zh }

\[
\text{(a)}\ \lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}
\qquad\qquad
\text{(b)}\ \lim_{x\to+\infty}\sqrt{\frac{x^3}{x-1}}-x
\]

\[
\text{(c)}\ \lim_{x\to\frac{\pi}{4}}\frac{\sin x-\cos x}{x-\frac{\pi}{4}}
\qquad\qquad
\text{(d)}\ \lim_{x\to\frac{\pi}{3}}\frac{\sin(3x)}{1-2\cos x}
\]

\[
\text{(e)}\ \lim_{x\to0^+}x^x
\qquad\qquad
\text{(f)}\ \lim_{x\to0}\frac{\sin x}{\sqrt{1-\cos x}}
\quad\text{(distinguer }\lim_{x\to0^+}\text{ et }\lim_{x\to0^-}\text{)}
\]

!!! sol ""

    <strong>Solution.</strong> <strong>(a)</strong> Pour \(x\neq0\) voisin de \(0\), on multiplie par la <strong>quantité conjuguée</strong> :
    {: .fr-exo }

    <strong>解.</strong> <strong>(a)</strong> 对 \(0\) 附近（\(x\neq0\)）的 \(x\)，乘以<strong>共轭表达式</strong>：
    {: .zh }

    \[
    \frac{\sqrt{1+x}-\sqrt{1-x}}{x}
    =\frac{(1+x)-(1-x)}{x\bigl(\sqrt{1+x}+\sqrt{1-x}\bigr)}
    =\frac{2x}{x\bigl(\sqrt{1+x}+\sqrt{1-x}\bigr)}
    =\frac{2}{\sqrt{1+x}+\sqrt{1-x}}.
    \]

    Par continuité de la fonction racine carrée, \(\sqrt{1+x}+\sqrt{1-x}\to2\), donc
    {: .fr-exo }

    由平方根函数的连续性，\(\sqrt{1+x}+\sqrt{1-x}\to2\)，故
    {: .zh }

    \[
    \boxed{\lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}=\frac{2}{2}=1.}
    \]

    <strong>(b)</strong> Pour \(x>1\), on factorise \(x^2\) sous la racine :
    {: .fr-exo }

    <strong>(b)</strong> 当 \(x>1\) 时，把 \(x^2\) 提出根号：
    {: .zh }

    \[
    \sqrt{\frac{x^3}{x-1}}-x
    =\sqrt{\frac{x^2}{1-\frac1x}}-x
    =x\left(\frac{1}{\sqrt{1-\frac1x}}-1\right).
    \]

    Avec \(u=\frac1x\to0^+\) et le développement \((1-u)^{-1/2}=1+\frac u2+\frac{3u^2}{8}+O(u^3)\) :
    {: .fr-exo }

    令 \(u=\frac1x\to0^+\)，用展开 \((1-u)^{-1/2}=1+\frac u2+\frac{3u^2}{8}+O(u^3)\)：
    {: .zh }

    \[
    x\left(\frac{1}{\sqrt{1-\frac1x}}-1\right)
    =x\left(\frac{1}{2x}+\frac{3}{8x^2}+O\Bigl(\frac1{x^3}\Bigr)\right)
    =\frac12+\frac{3}{8x}+O\Bigl(\frac1{x^2}\Bigr)\longrightarrow\frac12.
    \]

    \[
    \boxed{\lim_{x\to+\infty}\left(\sqrt{\frac{x^3}{x-1}}-x\right)=\frac12.}
    \]

    <strong>(c\)</strong> On écrit \(\sin x-\cos x=\sqrt2\sin\bigl(x-\frac\pi4\bigr)\) : le quotient est un <strong>taux d'accroissement</strong> décalé,
    {: .fr-exo }

    <strong>(c\)</strong> 利用 \(\sin x-\cos x=\sqrt2\sin\bigl(x-\frac\pi4\bigr)\)：该商是一个平移后的<strong>差商</strong>，
    {: .zh }

    \[
    \frac{\sin x-\cos x}{x-\frac\pi4}
    =\sqrt2\,\frac{\sin\bigl(x-\frac\pi4\bigr)}{x-\frac\pi4}
    \longrightarrow\sqrt2\cdot1=\sqrt2 .
    \]

    (C'est aussi la dérivée de \(x\mapsto\sin x-\cos x\) en \(\frac\pi4\), qui vaut \(\cos\frac\pi4+\sin\frac\pi4=\sqrt2\).)
    {: .fr-exo }

    （这也等于 \(x\mapsto\sin x-\cos x\) 在 \(\frac\pi4\) 处的导数，其值为 \(\cos\frac\pi4+\sin\frac\pi4=\sqrt2\)。）
    {: .zh }

    \[
    \boxed{\lim_{x\to\pi/4}\frac{\sin x-\cos x}{x-\frac\pi4}=\sqrt2.}
    \]

    <strong>(d)</strong> Posons \(h=x-\frac\pi3\to0\). Alors
    {: .fr-exo }

    <strong>(d)</strong> 令 \(h=x-\frac\pi3\to0\)。则
    {: .zh }

    \[
    \sin(3x)=\sin(\pi+3h)=-\sin(3h)\sim-3h,
    \]

    et, en développant le cosinus,
    {: .fr-exo }

    又由余弦展开，
    {: .zh }

    \[
    1-2\cos x
    =1-2\cos\Bigl(\frac\pi3+h\Bigr)
    =1-\cos h+\sqrt3\,\sin h
    \sim\frac{h^2}{2}+\sqrt3\,h\sim\sqrt3\,h,
    \]

    car \(\frac{h^2}{2}=o(h)\). Le quotient est donc équivalent à \(\frac{-3h}{\sqrt3\,h}=-\sqrt3\).
    {: .fr-exo }

    因为 \(\frac{h^2}{2}=o(h)\)。故该商等价于 \(\frac{-3h}{\sqrt3\,h}=-\sqrt3\)。
    {: .zh }

    \[
    \boxed{\lim_{x\to\pi/3}\frac{\sin(3x)}{1-2\cos x}=-\sqrt3.}
    \]

    <strong>(e)</strong> Pour \(x>0\), \(x^x=e^{x\ln x}\) et \(x\ln x\to0\). Par continuité de l'exponentielle,
    {: .fr-exo }

    <strong>(e)</strong> 当 \(x>0\) 时 \(x^x=e^{x\ln x}\)，且 \(x\ln x\to0\)。由指数函数的连续性，
    {: .zh }

    \[
    \boxed{\lim_{x\to0^+}x^x=e^{0}=1.}
    \]

    <strong>(f)</strong> On utilise \(1-\cos x=2\sin^2\frac x2\), donc \(\sqrt{1-\cos x}=\sqrt2\,\bigl|\sin\frac x2\bigr|\), et \(\sin x=2\sin\frac x2\cos\frac x2\) :
    {: .fr-exo }

    <strong>(f)</strong> 利用 \(1-\cos x=2\sin^2\frac x2\)，故 \(\sqrt{1-\cos x}=\sqrt2\,\bigl|\sin\frac x2\bigr|\)，且 \(\sin x=2\sin\frac x2\cos\frac x2\)：
    {: .zh }

    \[
    \frac{\sin x}{\sqrt{1-\cos x}}
    =\frac{2\sin\frac x2\cos\frac x2}{\sqrt2\,\bigl|\sin\frac x2\bigr|}
    =\sqrt2\,\cos\frac x2\cdot\varepsilon(x),
    \qquad
    \varepsilon(x)=\frac{\sin\frac x2}{\bigl|\sin\frac x2\bigr|}=\pm1 .
    \]

    Si \(x>0\) assez petit, \(\varepsilon(x)=+1\) et \(\cos\frac x2\to1\), donc la limite à droite vaut \(\sqrt2\). Si \(x<0\), \(\varepsilon(x)=-1\), donc la limite à gauche vaut \(-\sqrt2\).
    {: .fr-exo }

    若 \(x>0\) 足够小，则 \(\varepsilon(x)=+1\) 且 \(\cos\frac x2\to1\)，故右极限为 \(\sqrt2\)；若 \(x<0\)，则 \(\varepsilon(x)=-1\)，故左极限为 \(-\sqrt2\)。
    {: .zh }

    \[
    \boxed{\lim_{x\to0^+}\frac{\sin x}{\sqrt{1-\cos x}}=\sqrt2,
    \qquad
    \lim_{x\to0^-}\frac{\sin x}{\sqrt{1-\cos x}}=-\sqrt2.}
    \]

    En particulier, \(x\mapsto\frac{\sin x}{\sqrt{1-\cos x}}\) <strong>n'a pas de limite</strong> en \(0\).
    {: .fr-exo }

    特别地，\(x\mapsto\frac{\sin x}{\sqrt{1-\cos x}}\) 在 \(0\) 处<strong>没有极限</strong>。
    {: .zh }

    <p class="cqfd">∎</p>

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">Fonction implicite　隐函数</p>

Pour tout \(t>0\), on considère l'équation d'inconnue \(x\in\mathbb R\) suivante :
{: .fr-exo }

对任意 \(t>0\)，考虑下列关于未知量 \(x\in\mathbb R\) 的方程：
{: .zh }

\[
x^2+e^{tx}-2-\frac1t=0 \qquad (E_t)
\]

On pose la fonction \(g_t:x\mapsto x^2+e^{tx}-2-\frac1t\).
{: .fr-exo }

并令函数 \(g_t:x\mapsto x^2+e^{tx}-2-\frac1t\)。
{: .zh }

<strong>1.</strong> On fixe \(t>0\) dans cette question.
{: .fr-exo }

<strong>1.</strong> 本问中固定 \(t>0\)。
{: .zh }

<strong>(a)</strong> Justifier que \(g_t'\) s'annule en un unique point qu'on notera \(\alpha_t\).
{: .fr-exo }

<strong>(a)</strong> 证明 \(g_t'\) 在唯一一点取零值，记该点为 \(\alpha_t\)。
{: .zh }

<strong>(b)</strong> Dresser le tableau des variations de \(g_t\).
{: .fr-exo }

<strong>(b)</strong> 列出 \(g_t\) 的变化表。
{: .zh }

<strong>(c\)</strong> Déterminer le nombre de solutions de \((E_t)\) en justifiant votre réponse.
{: .fr-exo }

<strong>(c\)</strong> 确定 \((E_t)\) 的解的个数，并说明理由。
{: .zh }

Pour la suite de l'exercice, on note \(f(t)\) l'unique solution positive de \((E_t)\).
{: .fr-exo }

以下记 \(f(t)\) 为 \((E_t)\) 的唯一正解。
{: .zh }

<strong>2.</strong> Soient \(s>t>0\). Déterminer le signe de \(g_t(f(s))\) puis en déduire les variations de \(f\).
{: .fr-exo }

<strong>2.</strong> 设 \(s>t>0\)。确定 \(g_t(f(s))\) 的符号，并由此推出 \(f\) 的单调性。
{: .zh }

<strong>3.</strong> Montrer que \(f\) admet des limites en \(0^+\) et en \(+\infty\). Déterminer ces limites.
{: .fr-exo }

<strong>3.</strong> 证明 \(f\) 在 \(0^+\) 与 \(+\infty\) 处有极限，并求出这些极限。
{: .zh }

<strong>4.</strong> En s'inspirant de la question précédente, montrer que \(f\) est continue sur \(]0,+\infty[\).
{: .fr-exo }

<strong>4.</strong> 仿照前一问，证明 \(f\) 在 \(]0,+\infty[\) 上连续。
{: .zh }

<strong>5.</strong> Déterminer un équivalent de \(f(t)\) quand \(t\to+\infty\), puis quand \(t\to0^+\).
{: .fr-exo }

*Indication : pour l'équivalent en \(0^+\), commencer par montrer que \(tf(t)\to0\).*
{: .fr-exo }

<strong>5.</strong> 求 \(f(t)\) 当 \(t\to+\infty\) 时的等价量，再求当 \(t\to0^+\) 时的等价量。
{: .zh }

*提示：对 \(0^+\) 处的等价量，先证明 \(tf(t)\to0\)。*
{: .zh }

!!! sol ""

    <strong>Solution.</strong> <strong>1. (a)</strong> La fonction \(g_t\) est de classe \(\mathcal C^\infty\) sur \(\mathbb R\) et
    {: .fr-exo }

    <strong>解.</strong> <strong>1. (a)</strong> 函数 \(g_t\) 在 \(\mathbb R\) 上为 \(\mathcal C^\infty\) 类，且
    {: .zh }

    \[
    g_t'(x)=2x+t\,e^{tx},
    \qquad
    g_t''(x)=2+t^2e^{tx}>0 .
    \]

    Ainsi \(g_t'\) est <strong>strictement croissante</strong> sur \(\mathbb R\). De plus \(g_t'(0)=t>0\) et \(g_t'(x)\to-\infty\) quand \(x\to-\infty\) (car \(2x\to-\infty\) et \(t e^{tx}\to0\)). Par le <strong>théorème des valeurs intermédiaires</strong>, \(g_t'\) s'annule en un unique point \(\alpha_t\), et l'on a \(\alpha_t<0\).
    {: .fr-exo }

    因此 \(g_t'\) 在 \(\mathbb R\) 上<strong>严格递增</strong>。此外 \(g_t'(0)=t>0\)，而当 \(x\to-\infty\) 时 \(g_t'(x)\to-\infty\)（因为 \(2x\to-\infty\) 且 \(te^{tx}\to0\)）。由<strong>介值定理</strong>，\(g_t'\) 在唯一一点 \(\alpha_t\) 处取零值，且 \(\alpha_t<0\)。
    {: .zh }

    <strong>(b)</strong> Sur \(]-\infty,\alpha_t]\) on a \(g_t'<0\) : \(g_t\) est strictement décroissante ; sur \([\alpha_t,+\infty[\) on a \(g_t'>0\) : \(g_t\) est strictement croissante. D'où le tableau :
    {: .fr-exo }

    <strong>(b)</strong> 在 \(]-\infty,\alpha_t]\) 上 \(g_t'<0\)：\(g_t\) 严格递减；在 \([\alpha_t,+\infty[\) 上 \(g_t'>0\)：\(g_t\) 严格递增。故变化表为：
    {: .zh }

    \[
    \begin{array}{c|ccccc}
    x & -\infty & & \alpha_t & & +\infty \\ \hline
    g_t'(x) & & - & 0 & + & \\ \hline
    g_t(x) & +\infty & \searrow & g_t(\alpha_t) & \nearrow & +\infty
    \end{array}
    \]

    En particulier \(g_t(\alpha_t)\leqslant g_t(0)=-1-\frac1t<0\) : le minimum est <strong>strictement négatif</strong>.
    {: .fr-exo }

    特别地，\(g_t(\alpha_t)\leqslant g_t(0)=-1-\frac1t<0\)：最小值<strong>严格为负</strong>。
    {: .zh }

    <strong>(c\)</strong> La fonction \(g_t\) est continue sur \(\mathbb R\) et \(\lim_{x\to-\infty}g_t(x)=\lim_{x\to+\infty}g_t(x)=+\infty\).
    {: .fr-exo }

    <strong>(c\)</strong> \(g_t\) 在 \(\mathbb R\) 上连续，且 \(\lim_{x\to-\infty}g_t(x)=\lim_{x\to+\infty}g_t(x)=+\infty\)。
    {: .zh }

    Sur \(]-\infty,\alpha_t]\), \(g_t\) est continue et strictement décroissante, de \(+\infty\) vers \(g_t(\alpha_t)<0\) : par le <strong>théorème de la bijection</strong>, l'équation \(g_t(x)=0\) admet <strong>exactement une</strong> solution dans \(]-\infty,\alpha_t[\).
    {: .fr-exo }

    在 \(]-\infty,\alpha_t]\) 上，\(g_t\) 连续且严格递减，从 \(+\infty\) 降到 \(g_t(\alpha_t)<0\)：由<strong>双射定理</strong>，方程 \(g_t(x)=0\) 在 \(]-\infty,\alpha_t[\) 内<strong>恰有一个</strong>解。
    {: .zh }

    De même, sur \([\alpha_t,+\infty[\), \(g_t\) est continue et strictement croissante, de \(g_t(\alpha_t)<0\) vers \(+\infty\) : <strong>exactement une</strong> solution dans \(]\alpha_t,+\infty[\).
    {: .fr-exo }

    同理，在 \([\alpha_t,+\infty[\) 上，\(g_t\) 连续且严格递增，从 \(g_t(\alpha_t)<0\) 升到 \(+\infty\)：在 \(]\alpha_t,+\infty[\) 内<strong>恰有一个</strong>解。
    {: .zh }

    Donc \((E_t)\) admet <strong>exactement deux solutions</strong>.
    {: .fr-exo }

    因此 \((E_t)\) <strong>恰有两个解</strong>。
    {: .zh }

    Comme \(g_t(0)=-1-\frac1t<0\) et que \(g_t\) est strictement croissante sur \([0,+\infty[\), la solution de \(]\alpha_t,+\infty[\) est en fait <strong>strictement positive</strong> ; l'autre est \(<\alpha_t<0\). La solution positive \(f(t)\) est donc bien définie, et \(f(t)>0\).
    {: .fr-exo }

    由于 \(g_t(0)=-1-\frac1t<0\) 且 \(g_t\) 在 \([0,+\infty[\) 上严格递增，位于 \(]\alpha_t,+\infty[\) 内的解实际上<strong>严格为正</strong>；另一个解 \(<\alpha_t<0\)。因此正解 \(f(t)\) 确实唯一存在，且 \(f(t)>0\)。
    {: .zh }

    <strong>2.</strong> Soit \(s>t>0\). Comme \(f(s)\) est solution de \((E_s)\),
    {: .fr-exo }

    <strong>2.</strong> 设 \(s>t>0\)。由于 \(f(s)\) 是 \((E_s)\) 的解，
    {: .zh }

    \[
    f(s)^2+e^{sf(s)}-2-\frac1s=0 .
    \]

    Par différence,
    {: .fr-exo }

    两式相减得
    {: .zh }

    \[
    g_t\bigl(f(s)\bigr)
    =f(s)^2+e^{tf(s)}-2-\frac1t
    =\underbrace{\bigl(e^{tf(s)}-e^{sf(s)}\bigr)}_{<0}
    +\underbrace{\Bigl(\frac1s-\frac1t\Bigr)}_{<0}
    <0 ,
    \]

    car \(f(s)>0\) et \(t<s\) donnent \(tf(s)<sf(s)\), donc \(e^{tf(s)}<e^{sf(s)}\) ; et \(s>t\) donne \(\frac1s<\frac1t\).
    {: .fr-exo }

    因为 \(f(s)>0\) 且 \(t<s\)，故 \(tf(s)<sf(s)\)，从而 \(e^{tf(s)}<e^{sf(s)}\)；又 \(s>t\) 给出 \(\frac1s<\frac1t\)。
    {: .zh }

    Or \(g_t'(x)=2x+te^{tx}>0\) pour tout \(x\geqslant0\) : \(g_t\) est strictement croissante sur \([0,+\infty[\). Comme \(f(s)>0\), \(f(t)>0\) et \(g_t\bigl(f(s)\bigr)<0=g_t\bigl(f(t)\bigr)\), on en déduit
    {: .fr-exo }

    又因对一切 \(x\geqslant0\) 有 \(g_t'(x)=2x+te^{tx}>0\)：\(g_t\) 在 \([0,+\infty[\) 上严格递增。由 \(f(s)>0\)、\(f(t)>0\) 及 \(g_t\bigl(f(s)\bigr)<0=g_t\bigl(f(t)\bigr)\)，推出
    {: .zh }

    \[
    f(s)<f(t).
    \]

    Ainsi \(f\) est <strong>strictement décroissante</strong> sur \(]0,+\infty[\).
    {: .fr-exo }

    因此 \(f\) 在 \(]0,+\infty[\) 上<strong>严格递减</strong>。
    {: .zh }

    <strong>3.</strong> D'après la question 2, \(f\) est décroissante sur \(]0,+\infty[\) : elle admet donc des limites en \(0^+\) et en \(+\infty\).
    {: .fr-exo }

    <strong>3.</strong> 由第 2 问，\(f\) 在 \(]0,+\infty[\) 上递减：故它在 \(0^+\) 与 \(+\infty\) 处均有极限。
    {: .zh }

    <strong>En \(0^+\) :</strong> de \(f(t)^2<f(t)^2+e^{tf(t)}=2+\frac1t\) on tire \(f(t)\leqslant\sqrt{2+\frac1t}\), donc
    {: .fr-exo }

    <strong>在 \(0^+\) 处：</strong>由 \(f(t)^2<f(t)^2+e^{tf(t)}=2+\frac1t\) 得 \(f(t)\leqslant\sqrt{2+\frac1t}\)，从而
    {: .zh }

    \[
    0\leqslant tf(t)\leqslant\sqrt{2t^2+t}\leqslant\sqrt3
    \qquad\text{pour } 0<t\leqslant1 .
    \]

    Ainsi \(e^{tf(t)}\leqslant e^{\sqrt3}\) pour \(0<t\leqslant1\), et l'équation \(f(t)^2=2+\frac1t-e^{tf(t)}\) donne
    {: .fr-exo }

    于是当 \(0<t\leqslant1\) 时 \(e^{tf(t)}\leqslant e^{\sqrt3}\)，由方程 \(f(t)^2=2+\frac1t-e^{tf(t)}\) 得
    {: .zh }

    \[
    f(t)^2\geqslant2+\frac1t-e^{\sqrt3}\longrightarrow+\infty,
    \qquad\text{donc}\qquad
    \lim_{t\to0^+}f(t)=+\infty .
    \]

    <strong>En \(+\infty\) :</strong> l'équation donne \(e^{tf(t)}=2+\frac1t-f(t)^2\leqslant2+\frac1t\leqslant3\) pour \(t\geqslant1\), d'où \(tf(t)\leqslant\ln3\) et
    {: .fr-exo }

    <strong>在 \(+\infty\) 处：</strong>方程给出 \(e^{tf(t)}=2+\frac1t-f(t)^2\leqslant2+\frac1t\leqslant3\)（\(t\geqslant1\)），故 \(tf(t)\leqslant\ln3\)，且
    {: .zh }

    \[
    0<f(t)\leqslant\frac{\ln3}{t}\longrightarrow0,
    \qquad\text{donc}\qquad
    \lim_{t\to+\infty}f(t)=0 .
    \]

    \[
    \boxed{\lim_{t\to0^+}f(t)=+\infty,
    \qquad
    \lim_{t\to+\infty}f(t)=0 .}
    \]

    <strong>4.</strong> Soit \(t_0>0\). La fonction \(f\) étant décroissante sur \(]0,+\infty[\), les limites à gauche \(\ell^-=\lim_{t\to t_0^-}f(t)\) et à droite \(\ell^+=\lim_{t\to t_0^+}f(t)\) existent, et
    {: .fr-exo }

    <strong>4.</strong> 设 \(t_0>0\)。由于 \(f\) 在 \(]0,+\infty[\) 上递减，左极限 \(\ell^-=\lim_{t\to t_0^-}f(t)\) 与右极限 \(\ell^+=\lim_{t\to t_0^+}f(t)\) 均存在，且
    {: .zh }

    \[
    \ell^-\geqslant f(t_0)\geqslant\ell^+\geqslant0 .
    \]

    Elles sont finies car \(f\) est bornée sur le segment \(\bigl[\frac{t_0}2,2t_0\bigr]\). En passant à la limite dans l'équation \(f(t)^2+e^{tf(t)}=2+\frac1t\) quand \(t\to t_0^-\), puis quand \(t\to t_0^+\), on obtient
    {: .fr-exo }

    它们有限，因为 \(f\) 在区间 \(\bigl[\frac{t_0}2,2t_0\bigr]\) 上有界。在方程 \(f(t)^2+e^{tf(t)}=2+\frac1t\) 中分别令 \(t\to t_0^-\) 与 \(t\to t_0^+\) 取极限，得
    {: .zh }

    \[
    (\ell^-)^2+e^{t_0\ell^-}=2+\frac1{t_0}
    \qquad\text{et}\qquad
    (\ell^+)^2+e^{t_0\ell^+}=2+\frac1{t_0}.
    \]

    Or \(\varphi:x\mapsto x^2+e^{t_0x}\) est <strong>strictement croissante</strong> sur \([0,+\infty[\) (car \(\varphi'(x)=2x+t_0e^{t_0x}>0\)). L'équation \(\varphi(x)=2+\frac1{t_0}\) admet donc <strong>au plus une</strong> solution dans \([0,+\infty[\) : c'est \(f(t_0)\). Par conséquent \(\ell^-=\ell^+=f(t_0)\).
    {: .fr-exo }

    而 \(\varphi:x\mapsto x^2+e^{t_0x}\) 在 \([0,+\infty[\) 上<strong>严格递增</strong>（因为 \(\varphi'(x)=2x+t_0e^{t_0x}>0\)）。故方程 \(\varphi(x)=2+\frac1{t_0}\) 在 \([0,+\infty[\) 内<strong>至多有一个</strong>解：即 \(f(t_0)\)。于是 \(\ell^-=\ell^+=f(t_0)\)。
    {: .zh }

    La fonction \(f\) est donc continue en \(t_0\) pour tout \(t_0>0\), c'est-à-dire <strong>continue sur \(]0,+\infty[\)</strong>.
    {: .fr-exo }

    因此 \(f\) 在任意 \(t_0>0\) 处连续，即 \(f\) 在 \(]0,+\infty[\) 上<strong>连续</strong>。
    {: .zh }

    <strong>5.</strong> <strong>En \(+\infty\) :</strong> d'après la question 3, \(f(t)\to0\), donc \(f(t)^2\to0\) et \(e^{tf(t)}=2+\frac1t-f(t)^2\sim2\). En passant au logarithme,
    {: .fr-exo }

    <strong>5.</strong> <strong>在 \(+\infty\) 处：</strong>由第 3 问，\(f(t)\to0\)，故 \(f(t)^2\to0\) 且 \(e^{tf(t)}=2+\frac1t-f(t)^2\sim2\)。取对数得
    {: .zh }

    \[
    tf(t)=\ln\Bigl(2+\frac1t-f(t)^2\Bigr)=\ln2+o(1),
    \]

    d'où
    {: .fr-exo }

    因此
    {: .zh }

    \[
    \boxed{f(t)\sim_{t\to+\infty}\frac{\ln2}{t}.}
    \]

    <strong>En \(0^+\) :</strong> suivons l'indication et montrons d'abord que \(tf(t)\to0\). Comme \(f(t)>0\), l'équation donne \(f(t)^2<2+\frac1t\), d'où
    {: .fr-exo }

    <strong>在 \(0^+\) 处：</strong>按提示先证明 \(tf(t)\to0\)。由于 \(f(t)>0\)，方程给出 \(f(t)^2<2+\frac1t\)，故
    {: .zh }

    \[
    0\leqslant tf(t)\leqslant t\sqrt{2+\frac1t}=\sqrt{2t^2+t}\longrightarrow0 .
    \]

    Ainsi \(tf(t)\to0\), puis \(e^{tf(t)}\to1\). En multipliant l'équation par \(t\) :
    {: .fr-exo }

    于是 \(tf(t)\to0\)，进而 \(e^{tf(t)}\to1\)。把方程乘以 \(t\)：
    {: .zh }

    \[
    tf(t)^2+t\,e^{tf(t)}=2t+1
    \quad\Longrightarrow\quad
    tf(t)^2=2t+1-t\,e^{tf(t)}\longrightarrow1,
    \]

    car \(t\,e^{tf(t)}\to0\cdot1=0\). Donc \(f(t)^2\sim\frac1t\), et comme \(f(t)>0\),
    {: .fr-exo }

    因为 \(t\,e^{tf(t)}\to0\cdot1=0\)。故 \(f(t)^2\sim\frac1t\)；又 \(f(t)>0\)，所以
    {: .zh }

    \[
    \boxed{f(t)\sim_{t\to0^+}\frac1{\sqrt t}.}
    \]

    <p class="cqfd">∎</p>

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">Équivalents　等价量</p>

Trouver un équivalent simple de \(f\) au voisinage de \(0\) :
{: .fr-exo }

求 \(f\) 在 \(0\) 附近的简单等价量：
{: .zh }

\[
\text{(a)}\ f:x\mapsto\cos(\sin x)
\qquad\qquad
\text{(b)}\ f:x\mapsto\ln(\cos x)
\]

\[
\text{(c)}\ f:x\mapsto\ln(\sin x),\ \ x>0
\qquad\qquad
\text{(d)}\ f:x\mapsto\cos(ax)-\cos(bx)\quad (a,b\in\mathbb R,\ a^2\neq b^2)
\]

!!! sol ""

    <strong>Solution.</strong> <strong>(a)</strong> Comme \(\sin x\to0\) quand \(x\to0\), on utilise le développement de \(\cos\) en \(0\) :
    {: .fr-exo }

    <strong>解.</strong> <strong>(a)</strong> 当 \(x\to0\) 时 \(\sin x\to0\)，利用 \(\cos\) 在 \(0\) 处的展开：
    {: .zh }

    \[
    \cos(\sin x)=1-\frac{\sin^2x}{2}+o(\sin^2x)=1-\frac{x^2}{2}+o(x^2),
    \]

    car \(\sin^2x\sim x^2\). L'équivalent est donc la constante \(1\) ; plus précisément,
    {: .fr-exo }

    因为 \(\sin^2x\sim x^2\)。故等价量为常数 \(1\)；更精确地，
    {: .zh }

    \[
    \boxed{f(x)\sim_{x\to0}1,
    \qquad\text{et même}\qquad
    f(x)=1-\frac{x^2}{2}+o(x^2).}
    \]

    <strong>(b)</strong> On a \(\cos x-1\sim-\frac{x^2}{2}\to0\), et \(\ln(1+u)\sim u\) quand \(u\to0\) ; donc
    {: .fr-exo }

    <strong>(b)</strong> 有 \(\cos x-1\sim-\frac{x^2}{2}\to0\)，且当 \(u\to0\) 时 \(\ln(1+u)\sim u\)；故
    {: .zh }

    \[
    \ln(\cos x)=\ln\bigl(1+(\cos x-1)\bigr)\sim\cos x-1\sim-\frac{x^2}{2}.
    \]

    \[
    \boxed{f(x)\sim_{x\to0}-\frac{x^2}{2}.}
    \]

    <strong>(c\)</strong> Pour \(x>0\), on écrit \(\sin x=x\cdot\frac{\sin x}{x}\) avec \(\frac{\sin x}{x}\to1\), donc
    {: .fr-exo }

    <strong>(c\)</strong> 当 \(x>0\) 时，写 \(\sin x=x\cdot\frac{\sin x}{x}\)，其中 \(\frac{\sin x}{x}\to1\)，故
    {: .zh }

    \[
    \ln(\sin x)=\ln x+\ln\Bigl(\frac{\sin x}{x}\Bigr).
    \]

    Comme \(\ln\bigl(\frac{\sin x}{x}\bigr)\to\ln1=0\) et \(\ln x\to-\infty\),
    {: .fr-exo }

    由于 \(\ln\bigl(\frac{\sin x}{x}\bigr)\to\ln1=0\) 且 \(\ln x\to-\infty\)，
    {: .zh }

    \[
    \frac{\ln(\sin x)}{\ln x}
    =1+\frac{\ln\bigl(\frac{\sin x}{x}\bigr)}{\ln x}\longrightarrow1,
    \]

    \[
    \boxed{f(x)\sim_{x\to0^+}\ln x .}
    \]

    <strong>(d)</strong> Par la formule de factorisation,
    {: .fr-exo }

    <strong>(d)</strong> 由和差化积公式，
    {: .zh }

    \[
    \cos(ax)-\cos(bx)
    =-2\sin\Bigl(\frac{(a+b)x}{2}\Bigr)\sin\Bigl(\frac{(a-b)x}{2}\Bigr).
    \]

    Avec \(\sin u\sim u\) quand \(u\to0\) :
    {: .fr-exo }

    利用当 \(u\to0\) 时 \(\sin u\sim u\)：
    {: .zh }

    \[
    \cos(ax)-\cos(bx)
    \sim-2\cdot\frac{(a+b)x}{2}\cdot\frac{(a-b)x}{2}
    =-\frac{a^2-b^2}{2}\,x^2 .
    \]

    Comme \(a^2\neq b^2\), le coefficient est non nul : c'est bien un équivalent simple.
    {: .fr-exo }

    由于 \(a^2\neq b^2\)，该系数非零：这确实是简单等价量。
    {: .zh }

    \[
    \boxed{f(x)\sim_{x\to0}\frac{b^2-a^2}{2}\,x^2 .}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第一部分（Exercices à préparer）核心术语</span>"

    - <strong>limite en un point</strong>：函数在某点的极限
    - <strong>limite à droite / à gauche</strong>：右极限 / 左极限
    - <strong>forme indéterminée</strong>：未定式
    - <strong>lever une indétermination</strong>：消除未定式
    - <strong>quantité conjuguée</strong>：共轭量（有理化因子）
    - <strong>taux d'accroissement</strong>：差商（变化率）
    - <strong>développement limité (DL)</strong>：局部展开（泰勒展开）
    - <strong>équivalent</strong>：等价量
    - <strong>au voisinage de \(0\)</strong>：在 \(0\) 附近
    - <strong>fonction implicite</strong>：隐函数
    - <strong>tableau de variations</strong>：变化表
    - <strong>théorème des valeurs intermédiaires</strong>：介值定理

    - <strong>théorème de la bijection</strong>：双射定理（严格单调连续函数的可逆性）
    - <strong>strictement croissante / décroissante</strong>：严格递增 / 递减
    - <strong>s'annuler</strong>：取零值
    - <strong>racine d'une équation</strong>：方程的根
    - <strong>solution positive</strong>：正解
    - <strong>par continuité de …</strong>：由……的连续性
    - <strong>on en déduit</strong>：由此推出
    - <strong>croissances comparées</strong>：增长比较
    - <strong>changer de variable</strong>：换元
    - <strong>factoriser</strong>：因式分解
    - <strong>en \(+\infty\)</strong>：在无穷远处
    - <strong>conclure</strong>：得出结论

## Exercices supplémentaires <span class="heading-zh">补充练习</span>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">Limites　极限</p>

Calculer les limites suivantes en se servant d'équivalents :
{: .fr-exo }

利用等价量计算下列极限：
{: .zh }

\[
\text{(a)}\ \lim_{x\to\frac{\pi}{2}}\tan x\,\tan(2x)
\qquad\qquad
\text{(b)}\ \lim_{x\to\frac12}(2x^2-3x+1)\tan(\pi x)
\]

\[
\text{(c)}\ \lim_{x\to0}\frac{\ln(\cos(ax))}{\ln(\cos(bx))},\ \ a,b\in\mathbb R^*
\qquad\qquad
\text{(d)}\ \lim_{x\to\frac{\pi}{2}}\frac{\ln(\sin^2x)}{\bigl(\frac{\pi}{2}-x\bigr)^2}
\]

\[
\text{(e)}\ \lim_{x\to0^+}\frac{x\ln x}{x^x-1}
\]

!!! sol ""

    <strong>Solution.</strong> <strong>(a)</strong> Posons \(h=x-\frac\pi2\to0\). Alors
    {: .fr-exo }

    <strong>解.</strong> <strong>(a)</strong> 令 \(h=x-\frac\pi2\to0\)。则
    {: .zh }

    \[
    \tan x=\tan\Bigl(\frac\pi2+h\Bigr)=-\cot h\sim-\frac1h,
    \qquad
    \tan(2x)=\tan(\pi+2h)=\tan(2h)\sim2h .
    \]

    Donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    \tan x\,\tan(2x)\sim\Bigl(-\frac1h\Bigr)(2h)=-2,
    \qquad
    \boxed{\lim_{x\to\pi/2}\tan x\,\tan(2x)=-2.}
    \]

    <strong>(b)</strong> Posons \(h=x-\frac12\to0\). On factorise
    {: .fr-exo }

    <strong>(b)</strong> 令 \(h=x-\frac12\to0\)。因式分解得
    {: .zh }

    \[
    2x^2-3x+1=(2x-1)(x-1)=2h\,\Bigl(h-\frac12\Bigr)\sim2h\cdot\Bigl(-\frac12\Bigr)=-h,
    \]

    et
    {: .fr-exo }

    且
    {: .zh }

    \[
    \tan(\pi x)=\tan\Bigl(\frac\pi2+\pi h\Bigr)=-\cot(\pi h)\sim-\frac1{\pi h}.
    \]

    Donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    (2x^2-3x+1)\tan(\pi x)\sim(-h)\Bigl(-\frac1{\pi h}\Bigr)=\frac1\pi,
    \qquad
    \boxed{\lim_{x\to1/2}(2x^2-3x+1)\tan(\pi x)=\frac1\pi.}
    \]

    <strong>(c\)</strong> D'après l'exercice 3 (b), \(\ln(\cos(ax))\sim-\frac{a^2x^2}{2}\) et \(\ln(\cos(bx))\sim-\frac{b^2x^2}{2}\) (avec \(a,b\neq0\)). Donc
    {: .fr-exo }

    <strong>(c\)</strong> 由练习 3 (b)，\(\ln(\cos(ax))\sim-\frac{a^2x^2}{2}\)，\(\ln(\cos(bx))\sim-\frac{b^2x^2}{2}\)（\(a,b\neq0\)）。因此
    {: .zh }

    \[
    \frac{\ln(\cos(ax))}{\ln(\cos(bx))}
    \sim\frac{-a^2x^2/2}{-b^2x^2/2}=\frac{a^2}{b^2},
    \qquad
    \boxed{\lim_{x\to0}\frac{\ln(\cos(ax))}{\ln(\cos(bx))}=\frac{a^2}{b^2}.}
    \]

    <strong>(d)</strong> Posons \(h=x-\frac\pi2\to0\). Alors \(\sin^2x=\cos^2h\), et par l'exercice 3 (b),
    {: .fr-exo }

    <strong>(d)</strong> 令 \(h=x-\frac\pi2\to0\)。则 \(\sin^2x=\cos^2h\)，由练习 3 (b)，
    {: .zh }

    \[
    \ln(\sin^2x)=2\ln(\cos h)\sim2\cdot\Bigl(-\frac{h^2}{2}\Bigr)=-h^2 .
    \]

    Donc
    {: .fr-exo }

    因此
    {: .zh }

    \[
    \frac{\ln(\sin^2x)}{\bigl(\frac\pi2-x\bigr)^2}
    =\frac{\ln(\sin^2x)}{h^2}\longrightarrow-1,
    \qquad
    \boxed{\lim_{x\to\pi/2}\frac{\ln(\sin^2x)}{\bigl(\frac\pi2-x\bigr)^2}=-1.}
    \]

    <strong>(e)</strong> Quand \(x\to0^+\), \(u=x\ln x\to0\), donc \(x^x-1=e^{x\ln x}-1\sim x\ln x\). Comme \(x\ln x\neq0\) pour \(0<x<1\),
    {: .fr-exo }

    <strong>(e)</strong> 当 \(x\to0^+\) 时 \(u=x\ln x\to0\)，故 \(x^x-1=e^{x\ln x}-1\sim x\ln x\)。由于 \(0<x<1\) 时 \(x\ln x\neq0\)，
    {: .zh }

    \[
    \frac{x\ln x}{x^x-1}\sim\frac{x\ln x}{x\ln x}=1,
    \qquad
    \boxed{\lim_{x\to0^+}\frac{x\ln x}{x^x-1}=1.}
    \]

    <p class="cqfd">∎</p>

### Exercice 5 <span class="heading-zh">练习 5</span>

<p class="exo-type">Équivalents　等价量</p>

Trouver un équivalent simple de \(f\) au voisinage de \(0\) :
{: .fr-exo }

求 \(f\) 在 \(0\) 附近的简单等价量：
{: .zh }

\[
\text{(a)}\ f:x\mapsto\sqrt[4]{16+x}-\sqrt[3]{8+x}
\qquad\qquad
\text{(b)}\ f:x\mapsto a^x-b^x\quad (a,b>0,\ a\neq b)
\]

\[
\text{(c)}\ f:x\mapsto\tan\frac{\pi}{2x+1}
\qquad\qquad
\text{(d)}\ f:x\mapsto\frac{1}{\sqrt{2+3x}}-\frac{1}{\sqrt{2-3x}}
\]

!!! sol ""

    <strong>Solution.</strong> <strong>(a)</strong> On utilise \((1+u)^\alpha=1+\alpha u+O(u^2)\) quand \(u\to0\) :
    {: .fr-exo }

    <strong>解.</strong> <strong>(a)</strong> 利用当 \(u\to0\) 时 \((1+u)^\alpha=1+\alpha u+O(u^2)\)：
    {: .zh }

    \[
    \sqrt[4]{16+x}=2\Bigl(1+\frac x{16}\Bigr)^{1/4}
    =2\Bigl(1+\frac x{64}+O(x^2)\Bigr),
    \]

    \[
    \sqrt[3]{8+x}=2\Bigl(1+\frac x8\Bigr)^{1/3}
    =2\Bigl(1+\frac x{24}+O(x^2)\Bigr).
    \]

    Par différence,
    {: .fr-exo }

    两式相减，
    {: .zh }

    \[
    f(x)=2x\Bigl(\frac1{64}-\frac1{24}\Bigr)+O(x^2)
    =2x\cdot\frac{3-8}{192}+O(x^2)
    =-\frac{5x}{96}+O(x^2),
    \]

    \[
    \boxed{f(x)\sim_{x\to0}-\frac{5}{96}\,x .}
    \]

    <strong>(b)</strong> On écrit \(a^x=e^{x\ln a}\) et \(b^x=e^{x\ln b}\) ; comme \(u=x\ln a\to0\), on a \(e^u-1\sim u\). Donc
    {: .fr-exo }

    <strong>(b)</strong> 写 \(a^x=e^{x\ln a}\)，\(b^x=e^{x\ln b}\)；由于 \(u=x\ln a\to0\)，有 \(e^u-1\sim u\)。故
    {: .zh }

    \[
    a^x-b^x=e^{x\ln a}-e^{x\ln b}
    \sim x\ln a-x\ln b=x\ln\frac ab .
    \]

    Comme \(a\neq b\), \(\ln\frac ab\neq0\) : c'est bien un équivalent non nul.
    {: .fr-exo }

    由于 \(a\neq b\)，\(\ln\frac ab\neq0\)：这是非零等价量。
    {: .zh }

    \[
    \boxed{f(x)\sim_{x\to0}x\ln\frac ab .}
    \]

    <strong>(c\)</strong> On écrit
    {: .fr-exo }

    <strong>(c\)</strong> 写
    {: .zh }

    \[
    \frac{\pi}{2x+1}=\pi-\frac{2\pi x}{2x+1}=\pi+u,
    \qquad
    u=-\frac{2\pi x}{2x+1}\sim-2\pi x\longrightarrow0 .
    \]

    Par \(\pi\)-périodicité de la tangente, \(\tan(\pi+u)=\tan u\sim u\), donc
    {: .fr-exo }

    由正切的 \(\pi\)-周期性，\(\tan(\pi+u)=\tan u\sim u\)，故
    {: .zh }

    \[
    \boxed{f(x)\sim_{x\to0}-2\pi x .}
    \]

    <strong>(d)</strong> On factorise \(\sqrt2\) :
    {: .fr-exo }

    <strong>(d)</strong> 提出 \(\sqrt2\)：
    {: .zh }

    \[
    f(x)=\frac1{\sqrt2}\left[\Bigl(1+\frac{3x}{2}\Bigr)^{-1/2}
    -\Bigl(1-\frac{3x}{2}\Bigr)^{-1/2}\right].
    \]

    Avec \((1+u)^{-1/2}=1-\frac u2+O(u^2)\) :
    {: .fr-exo }

    利用 \((1+u)^{-1/2}=1-\frac u2+O(u^2)\)：
    {: .zh }

    \[
    f(x)=\frac1{\sqrt2}\left[\Bigl(1-\frac{3x}{4}+O(x^2)\Bigr)
    -\Bigl(1+\frac{3x}{4}+O(x^2)\Bigr)\right]
    =-\frac{3x}{2\sqrt2}+O(x^2),
    \]

    \[
    \boxed{f(x)\sim_{x\to0}-\frac{3}{2\sqrt2}\,x
    \ \Bigl(=-\frac{3\sqrt2}{4}\,x\Bigr).}
    \]

    <p class="cqfd">∎</p>

### Exercice 6 <span class="heading-zh">练习 6</span>

<p class="exo-type">Majoration　放缩估计</p>

Calculer la limite suivante en justifiant votre réponse
{: .fr-exo }

计算下列极限并说明理由：
{: .zh }

\[
\lim_{x\to0^+}\Bigl(2\sin\sqrt x+\sqrt x\,\sin\frac1x\Bigr)^x .
\]

!!! sol ""

    <strong>Solution.</strong> Notons \(u(x)=2\sin\sqrt x+\sqrt x\sin\frac1x\) et remarquons que \(u(x)^x=e^{x\ln u(x)}\) : on cherche donc la limite de \(x\ln u(x).\)
    {: .fr-exo }

    <strong>解.</strong> 记 \(u(x)=2\sin\sqrt x+\sqrt x\sin\frac1x\)，注意 \(u(x)^x=e^{x\ln u(x)}\)：故只需研究 \(x\ln u(x)\) 的极限。
    {: .zh }

    <strong>Encadrement.</strong> Pour \(0\leqslant t\leqslant\frac\pi2\) on a \(t-\frac{t^3}{6}\leqslant\sin t\leqslant t\). Donc, pour \(0<x\leqslant1\) (de sorte que \(\sqrt x\leqslant1\leqslant\frac\pi2\)) :
    {: .fr-exo }

    <strong>夹逼。</strong> 对 \(0\leqslant t\leqslant\frac\pi2\)，有 \(t-\frac{t^3}{6}\leqslant\sin t\leqslant t\)。故当 \(0<x\leqslant1\)（此时 \(\sqrt x\leqslant1\leqslant\frac\pi2\)）时：
    {: .zh }

    \[
    2\sin\sqrt x\geqslant2\sqrt x-\frac{x^{3/2}}{3},
    \qquad\text{donc}\qquad
    u(x)\geqslant\sqrt x-\frac{x^{3/2}}{3}\geqslant\frac{\sqrt x}{2}>0
    \]

    (la dernière inégalité vaut pour \(x\leqslant\frac32\)), et
    {: .fr-exo }

    （最后一个不等式在 \(x\leqslant\frac32\) 时成立），且
    {: .zh }

    \[
    u(x)\leqslant2\sqrt x+\sqrt x=3\sqrt x .
    \]

    Ainsi, pour \(0<x\leqslant1\) :
    {: .fr-exo }

    于是当 \(0<x\leqslant1\) 时：
    {: .zh }

    \[
    \frac{\sqrt x}{2}\leqslant u(x)\leqslant3\sqrt x .
    \]

    En prenant le logarithme et en multipliant par \(x>0\) :
    {: .fr-exo }

    取对数并乘以 \(x>0\)：
    {: .zh }

    \[
    x\ln\Bigl(\frac{\sqrt x}{2}\Bigr)
    \leqslant x\ln u(x)\leqslant x\ln(3\sqrt x).
    \]

    Or, avec \(\ln\sqrt x=\frac12\ln x\),
    {: .fr-exo }

    而由 \(\ln\sqrt x=\frac12\ln x\)，
    {: .zh }

    \[
    x\ln\Bigl(\frac{\sqrt x}{2}\Bigr)=x\Bigl(\frac12\ln x-\ln2\Bigr)\longrightarrow0,
    \qquad
    x\ln(3\sqrt x)=x\Bigl(\ln3+\frac12\ln x\Bigr)\longrightarrow0,
    \]

    car \(x\ln x\to0\) quand \(x\to0^+\). Par le <strong>théorème des gendarmes</strong>, \(x\ln u(x)\to0\). Par continuité de l'exponentielle,
    {: .fr-exo }

    因为当 \(x\to0^+\) 时 \(x\ln x\to0\)。由<strong>夹逼定理</strong>，\(x\ln u(x)\to0\)。再由指数函数的连续性，
    {: .zh }

    \[
    \boxed{\lim_{x\to0^+}\Bigl(2\sin\sqrt x+\sqrt x\,\sin\frac1x\Bigr)^x=e^0=1.}
    \]

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé&nbsp;&nbsp;重点词汇<br><span class='zh-title'>第二部分（Exercices supplémentaires）核心术语</span>"

    - <strong>se servir d'équivalents</strong>：利用等价量
    - <strong>périodicité</strong>：周期性
    - <strong>formule de factorisation</strong>：和差化积公式
    - <strong>encadrement</strong>：夹逼；上下界估计
    - <strong>théorème des gendarmes</strong>：夹逼定理
    - <strong>majoration</strong>：上界估计（放大）
    - <strong>minorer</strong>：给出下界
    - <strong>logarithme népérien</strong>：自然对数

    - <strong>fonction exponentielle</strong>：指数函数
    - <strong>élever à la puissance</strong>：乘幂
    - <strong>tendre vers</strong>：趋于
    - <strong>au voisinage de \(0^+\)</strong>：在 \(0^+\) 附近
    - <strong>on obtient</strong>：得到
    - <strong>d'où</strong>：因此
    - <strong>justifier sa réponse</strong>：说明理由
    - <strong>conclure</strong>：得出结论
