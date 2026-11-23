---
title: TD9 矩阵问题解答
comments: true
---

# 第 9 次习题课　矩阵问题

<div class="lecture-hero">
<p class="lecture-hero__fr">TD n°9 — Problèmes avec des matrices</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

## Exercices à préparer <span class="heading-zh">预备习题</span>

### Exercice 1 <span class="heading-zh">练习 1</span>

<p class="exo-type">matrices 2×2　2×2 矩阵</p>

On considère \(M=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathcal{M}_2(\mathbb{R})\) telle que \(\delta=ad-bc<0\).
{: .fr-exo }

设 \(M=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathcal{M}_2(\mathbb{R})\)，满足 \(\delta=ad-bc<0\)。
{: .zh }

Soit le réel \(\tau=a+d\) et la fonction polynomiale \(P:x\mapsto x^2-\tau x+\delta\).
{: .fr-exo }

设实数 \(\tau=a+d\)，多项式函数 \(P:x\mapsto x^2-\tau x+\delta\)。
{: .zh }

1. Montrer que \(P(M)=O_2\).
    {: .fr-exo }

    证明 \(P(M)=O_2\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On calcule \(M^2\), puis on forme \(P(M)=M^2-\tau M+\delta I_2\) coefficient par coefficient.

        <strong>解答。</strong>先计算 \(M^2\)，再逐系数计算 \(P(M)=M^2-\tau M+\delta I_2\)。

        \[
        M^2=
        \begin{pmatrix}
        a^2+bc & ab+bd\\
        ac+cd & bc+d^2
        \end{pmatrix}.
        \]

        En développant chaque coefficient,

        展开每个系数，
        {: .zh }

        \[
        \begin{aligned}
        P(M)&=M^2-(a+d)M+(ad-bc)I_2\\
        &=
        \begin{pmatrix}a^2+bc & ab+bd\\ ac+cd & bc+d^2\end{pmatrix}
        -(a+d)\begin{pmatrix}a&b\\c&d\end{pmatrix}
        +(ad-bc)\begin{pmatrix}1&0\\0&1\end{pmatrix}\\
        &=
        \begin{pmatrix}
        a^2+bc-a^2-ad+ad-bc & ab+bd-ab-bd\\
        ac+cd-ac-cd & bc+d^2-ad-d^2+ad-bc
        \end{pmatrix}\\
        &=
        \begin{pmatrix}0&0\\0&0\end{pmatrix}=O_2.
        \end{aligned}
        \]

        On peut aussi reconnaître l'identité de Cayley–Hamilton pour une matrice \(2\times2\) : \(M^2-(\operatorname{tr}M)M+(\det M)I_2=O_2\), avec \(\operatorname{tr}M=\tau\) et \(\det M=\delta\).

        也可识别为 \(2\times2\) 矩阵的 Cayley–Hamilton 恒等式：\(M^2-(\operatorname{tr}M)M+(\det M)I_2=O_2\)，其中 \(\operatorname{tr}M=\tau\)、\(\det M=\delta\)。
        {: .zh }

        \[
        \boxed{P(M)=O_2.}
        \]

2. Montrer qu'il existe deux réels \(\lambda,\mu\) distincts tels que \(\lambda+\mu=\tau\) et \(\lambda\mu=\delta\).
    {: .fr-exo }

    证明存在两个互异实数 \(\lambda,\mu\)，使 \(\lambda+\mu=\tau\) 且 \(\lambda\mu=\delta\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Les réels \(\lambda\) et \(\mu\) cherchés sont les racines du polynôme \(x^2-\tau x+\delta\), dont le discriminant vaut

        <strong>解答。</strong>所求实数 \(\lambda,\mu\) 是多项式 \(x^2-\tau x+\delta\) 的根，其判别式为
        {: .zh }

        \[
        \Delta=\tau^2-4\delta.
        \]

        Comme \(\delta<0\), on a \(-4\delta>0\), donc \(\Delta=\tau^2-4\delta>0\) : le polynôme admet deux racines réelles distinctes

        由于 \(\delta<0\)，有 \(-4\delta>0\)，故 \(\Delta=\tau^2-4\delta>0\)：多项式有两个互异实根
        {: .zh }

        \[
        \boxed{\lambda=\frac{\tau+\sqrt{\Delta}}{2},\qquad \mu=\frac{\tau-\sqrt{\Delta}}{2},\qquad \Delta=\tau^2-4\delta>0.}
        \]

        Par les relations entre coefficients et racines, elles vérifient bien \(\lambda+\mu=\tau\) et \(\lambda\mu=\delta\). De plus \(\lambda\neq\mu\) car \(\sqrt{\Delta}>0\).

        由根与系数的关系，它们确实满足 \(\lambda+\mu=\tau\)、\(\lambda\mu=\delta\)。又因 \(\sqrt{\Delta}>0\)，故 \(\lambda\neq\mu\)。
        {: .zh }

3. Par la suite, on considère \(A=M-\lambda I_2\) et \(B=M-\mu I_2\). Montrer que \(AB=O_2\). Les matrices \(A\) ou \(B\) sont-elles inversibles ?
    {: .fr-exo }

    以下设 \(A=M-\lambda I_2\)、\(B=M-\mu I_2\)。证明 \(AB=O_2\)。矩阵 \(A\) 或 \(B\) 可逆吗？
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Par distributivité, et comme \(I_2\) commute avec \(M\),

        <strong>解答。</strong>由分配律，且 \(I_2\) 与 \(M\) 可交换，
        {: .zh }

        \[
        AB=(M-\lambda I_2)(M-\mu I_2)=M^2-(\lambda+\mu)M+\lambda\mu I_2
        =M^2-\tau M+\delta I_2=P(M)=O_2.
        \]

        Pour l'inversibilité, le polynôme caractéristique de \(M\) est

        关于可逆性，\(M\) 的特征多项式为
        {: .zh }

        \[
        \det(M-xI_2)=x^2-\tau x+\delta=P(x).
        \]

        Comme \(P(\lambda)=P(\mu)=0\), on en déduit

        由于 \(P(\lambda)=P(\mu)=0\)，可得
        {: .zh }

        \[
        \det A=\det(M-\lambda I_2)=P(\lambda)=0,
        \qquad
        \det B=\det(M-\mu I_2)=P(\mu)=0.
        \]

        Ainsi \(A\) et \(B\) ne sont pas inversibles. Elles sont de plus non nulles : si \(A=O_2\), alors \(M=\lambda I_2\) et \(\delta=\lambda^2\geqslant0\) ; si \(B=O_2\), alors \(M=\mu I_2\) et \(\delta=\mu^2\geqslant0\) ; dans les deux cas on contredit \(\delta<0\).

        因此 \(A\) 与 \(B\) 都不可逆。它们还都非零：若 \(A=O_2\)，则 \(M=\lambda I_2\)，从而 \(\delta=\lambda^2\geqslant0\)；若 \(B=O_2\)，则 \(M=\mu I_2\)，从而 \(\delta=\mu^2\geqslant0\)；两种情形都与 \(\delta<0\) 矛盾。
        {: .zh }

        \[
        \boxed{AB=O_2,\qquad A\ \text{et}\ B\ \text{ne sont pas inversibles (et sont non nulles).}}
        \]

4. Montrer que \(\forall n\in\mathbb{N}^*\), \(A^n=(\mu-\lambda)^{n-1}A\). Déterminer une expression similaire pour \(B^n\), \(\forall n\in\mathbb{N}^*\).
    {: .fr-exo }

    证明 \(\forall n\in\mathbb{N}^*\)，\(A^n=(\mu-\lambda)^{n-1}A\)。求 \(B^n\)（\(\forall n\in\mathbb{N}^*\)）的类似表达式。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> D'après \(AB=O_2\) et \(M=A+\lambda I_2\),

        <strong>解答。</strong>由 \(AB=O_2\) 及 \(M=A+\lambda I_2\)，
        {: .zh }

        \[
        O_2=AB=A(M-\mu I_2)=A\bigl(A+(\lambda-\mu)I_2\bigr)=A^2+(\lambda-\mu)A,
        \]

        donc \(A^2=(\mu-\lambda)A\). On montre par récurrence sur \(n\geqslant1\) que \(A^n=(\mu-\lambda)^{n-1}A\) : la propriété est vraie pour \(n=1\), et si \(A^n=(\mu-\lambda)^{n-1}A\), alors

        故 \(A^2=(\mu-\lambda)A\)。对 \(n\geqslant1\) 归纳证明 \(A^n=(\mu-\lambda)^{n-1}A\)：\(n=1\) 时成立；若 \(A^n=(\mu-\lambda)^{n-1}A\)，则
        {: .zh }

        \[
        A^{n+1}=A\cdot A^n=(\mu-\lambda)^{n-1}A^2=(\mu-\lambda)^{n}A.
        \]

        De même, \(BA=O_2\) donne \(B(M-\lambda I_2)=O_2\), d'où \(B^2=(\lambda-\mu)B\), puis par récurrence

        同样，由 \(BA=O_2\) 得 \(B(M-\lambda I_2)=O_2\)，从而 \(B^2=(\lambda-\mu)B\)，再归纳得
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N}^*,\qquad A^n=(\mu-\lambda)^{n-1}A,\qquad B^n=(\lambda-\mu)^{n-1}B.}
        \]

5. Trouver \(\alpha,\beta\in\mathbb{R}\) tels que \(M=\alpha A+\beta B\). On exprimera \(\alpha\) et \(\beta\) en fonction de \(\lambda\) et \(\mu\).
    {: .fr-exo }

    求 \(\alpha,\beta\in\mathbb{R}\) 使 \(M=\alpha A+\beta B\)。用 \(\lambda\) 与 \(\mu\) 表示 \(\alpha\)、\(\beta\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En remplaçant \(A\) et \(B\) par leurs expressions,

        <strong>解答。</strong>将 \(A\)、\(B\) 的表达式代入，
        {: .zh }

        \[
        M=\alpha(M-\lambda I_2)+\beta(M-\mu I_2)=(\alpha+\beta)M-(\alpha\lambda+\beta\mu)I_2.
        \]

        Comme \(M\) n'est pas une matrice scalaire (sinon \(M=cI_2\) et \(\delta=c^2\geqslant0\)), les matrices \(M\) et \(I_2\) sont linéairement indépendantes. Par identification,

        由于 \(M\) 不是数量矩阵（否则 \(M=cI_2\)，\(\delta=c^2\geqslant0\)），\(M\) 与 \(I_2\) 线性无关。比较系数得
        {: .zh }

        \[
        \alpha+\beta=1,\qquad \alpha\lambda+\beta\mu=0.
        \]

        On résout ce système : \(\beta=-\dfrac{\lambda}{\mu-\lambda}\) et \(\alpha=1-\beta=\dfrac{\mu}{\mu-\lambda}\).

        解此方程组：\(\beta=-\dfrac{\lambda}{\mu-\lambda}\)，\(\alpha=1-\beta=\dfrac{\mu}{\mu-\lambda}\)。
        {: .zh }

        \[
        \boxed{\alpha=\frac{\mu}{\mu-\lambda},\qquad \beta=-\frac{\lambda}{\mu-\lambda},\qquad
        M=\frac{\mu A-\lambda B}{\mu-\lambda}.}
        \]

6. En utilisant le binôme de Newton, montrer que \(\forall n\in\mathbb{N}^*\), \(M^n=(\alpha A)^n+(\beta B)^n\).
    {: .fr-exo }

    利用牛顿二项式公式证明 \(\forall n\in\mathbb{N}^*\)，\(M^n=(\alpha A)^n+(\beta B)^n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(AB=BA=O_2\), les matrices \(A\) et \(B\) commutent. La formule du binôme de Newton s'applique :

        <strong>解答。</strong>由于 \(AB=BA=O_2\)，\(A\) 与 \(B\) 可交换，故牛顿二项式公式适用：
        {: .zh }

        \[
        (\alpha A+\beta B)^n=\sum_{k=0}^{n}\binom{n}{k}(\alpha A)^k(\beta B)^{n-k}.
        \]

        Pour \(1\leqslant k\leqslant n-1\), le terme contient le produit \(A^kB^{n-k}=A^{k-1}(AB)B^{n-k-1}=O_2\). Seuls subsistent les termes \(k=0\) et \(k=n\) :

        当 \(1\leqslant k\leqslant n-1\) 时，该项含乘积 \(A^kB^{n-k}=A^{k-1}(AB)B^{n-k-1}=O_2\)。因此只剩 \(k=0\) 与 \(k=n\) 两项：
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N}^*,\qquad M^n=(\alpha A+\beta B)^n=(\alpha A)^n+(\beta B)^n.}
        \]

7. En déduire que, pour tout \(n\geqslant1\), \(M^n\) est de la forme \(x_nM+y_nI_2\) où les réels \(x_n,y_n\) s'expriment en fonction de \(\lambda\), \(\mu\) et \(n\).
    {: .fr-exo }

    由此推出：对一切 \(n\geqslant1\)，\(M^n\) 形如 \(x_nM+y_nI_2\)，其中实数 \(x_n,y_n\) 用 \(\lambda\)、\(\mu\) 与 \(n\) 表示。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En combinant les questions 4 et 6,

        <strong>解答。</strong>结合第 4、6 问，
        {: .zh }

        \[
        M^n=\alpha^n(\mu-\lambda)^{n-1}A+\beta^n(\lambda-\mu)^{n-1}B.
        \]

        Or

        而
        {: .zh }

        \[
        \alpha^n(\mu-\lambda)^{n-1}
        =\left(\frac{\mu}{\mu-\lambda}\right)^n(\mu-\lambda)^{n-1}
        =\frac{\mu^n}{\mu-\lambda},
        \]

        et, comme \((\lambda-\mu)^{n-1}=(-1)^{n-1}(\mu-\lambda)^{n-1}\),

        且由于 \((\lambda-\mu)^{n-1}=(-1)^{n-1}(\mu-\lambda)^{n-1}\)，
        {: .zh }

        \[
        \beta^n(\lambda-\mu)^{n-1}
        =\left(-\frac{\lambda}{\mu-\lambda}\right)^n(\lambda-\mu)^{n-1}
        =-\frac{\lambda^n}{\mu-\lambda}.
        \]

        Donc

        因此
        {: .zh }

        \[
        M^n=\frac{\mu^nA-\lambda^nB}{\mu-\lambda}
        =\frac{\mu^n(M-\lambda I_2)-\lambda^n(M-\mu I_2)}{\mu-\lambda}.
        \]

        En regroupant les termes en \(M\) et en \(I_2\),

        合并 \(M\) 与 \(I_2\) 的项，
        {: .zh }

        \[
        M^n=\frac{\mu^n-\lambda^n}{\mu-\lambda}M
        +\frac{\lambda^n\mu-\lambda\mu^n}{\mu-\lambda}I_2.
        \]

        Comme \(\lambda\mu=\delta\), on obtient, pour tout \(n\geqslant1\),

        由于 \(\lambda\mu=\delta\)，对一切 \(n\geqslant1\) 得到
        {: .zh }

        \[
        \boxed{
        M^n=x_nM+y_nI_2,\qquad
        x_n=\frac{\mu^n-\lambda^n}{\mu-\lambda},\qquad
        y_n=\frac{\delta\left(\lambda^{n-1}-\mu^{n-1}\right)}{\mu-\lambda}.}
        \]

        Vérification : pour \(n=1\), \(x_1=1\) et \(y_1=0\) ; pour \(n=2\), \(x_2=\tau\) et \(y_2=-\delta\), ce qui redonne \(M^2=\tau M-\delta I_2\).

        验证：\(n=1\) 时 \(x_1=1\)、\(y_1=0\)；\(n=2\) 时 \(x_2=\tau\)、\(y_2=-\delta\)，正是 \(M^2=\tau M-\delta I_2\)。
        {: .zh }

### Exercice 2 <span class="heading-zh">练习 2</span>

<p class="exo-type">équation matricielle　矩阵方程</p>

On veut résoudre l'équation matricielle
{: .fr-exo }

求解矩阵方程
{: .zh }

\[
(E_n)\quad X^{n+1}+X^n=U
\]

où on fixe l'entier \(n\geqslant2\), la matrice \(U=\begin{pmatrix}1&1\\1&1\end{pmatrix}\) et où on cherche à déterminer une matrice \(X\).
{: .fr-exo }

其中整数 \(n\geqslant2\) 固定，矩阵 \(U=\begin{pmatrix}1&1\\1&1\end{pmatrix}\)，要求确定矩阵 \(X\)。
{: .zh }

1. Justifier que \(X\in\mathcal{M}_2(\mathbb{R})\).
    {: .fr-exo }

    说明 \(X\in\mathcal{M}_2(\mathbb{R})\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> L'équation ne fait intervenir que des puissances de \(X\) et la matrice \(U\in\mathcal{M}_2(\mathbb{R})\). Pour que \(X^{n+1}\) et \(X^n\) soient définies, \(X\) doit être une matrice carrée ; leur somme, qui a la taille de \(X\), doit être égale à \(U\), donc \(X\in\mathcal{M}_2(\mathbb{R})\).

        <strong>解答。</strong>方程只涉及 \(X\) 的幂与矩阵 \(U\in\mathcal{M}_2(\mathbb{R})\)。要使 \(X^{n+1}\)、\(X^n\) 有定义，\(X\) 必须是方阵；而它们的和与 \(X\) 同阶，又必须等于 \(U\)，故 \(X\in\mathcal{M}_2(\mathbb{R})\)。
        {: .zh }

2. Soient \(P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}\) et \(D=\begin{pmatrix}2&0\\0&0\end{pmatrix}\). On note \(\mathcal{S}'_n\) l'ensemble des solutions de
    {: .fr-exo }

    设 \(P=\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)、\(D=\begin{pmatrix}2&0\\0&0\end{pmatrix}\)。记 \(\mathcal{S}'_n\) 为下列方程的解集：
    {: .zh }

    \[
    (E'_n)\quad Y^{n+1}+Y^n=D
    \]

    <strong>(a)</strong> Calculer \(P^2\). En déduire que \(P\) est inversible et donner son inverse.
    {: .fr-exo }

    <strong>(a)</strong> 计算 \(P^2\)。由此推出 \(P\) 可逆并求出其逆。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong>

        <strong>解答。</strong>
        {: .zh }

        \[
        P^2=
        \begin{pmatrix}1&1\\1&-1\end{pmatrix}
        \begin{pmatrix}1&1\\1&-1\end{pmatrix}
        =
        \begin{pmatrix}2&0\\0&2\end{pmatrix}
        =2I_2.
        \]

        On en déduit \(P\cdot\frac12P=I_2=\frac12P\cdot P\), donc \(P\) est inversible et

        由此 \(P\cdot\frac12P=I_2=\frac12P\cdot P\)，故 \(P\) 可逆，且
        {: .zh }

        \[
        \boxed{P^{-1}=\frac12P=
        \begin{pmatrix}\frac12&\frac12\\[3pt]\frac12&-\frac12\end{pmatrix}.}
        \]

    <strong>(b)</strong> Calculer \(P^{-1}UP\).
    {: .fr-exo }

    <strong>(b)</strong> 计算 \(P^{-1}UP\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En utilisant \(P^{-1}=\frac12P\),

        <strong>解答。</strong>利用 \(P^{-1}=\frac12P\)，
        {: .zh }

        \[
        P^{-1}UP=\frac12PUP
        =\frac12
        \begin{pmatrix}1&1\\1&-1\end{pmatrix}
        \begin{pmatrix}1&1\\1&1\end{pmatrix}
        \begin{pmatrix}1&1\\1&-1\end{pmatrix}
        =\frac12
        \begin{pmatrix}4&0\\0&0\end{pmatrix}
        =
        \begin{pmatrix}2&0\\0&0\end{pmatrix}.
        \]

        \[
        \boxed{P^{-1}UP=D.}
        \]

    <strong>(c\)</strong> Montrer que toutes les solutions de \((E_n)\) sont de la forme \(X=PYP^{-1}\) où \(Y\in\mathcal{S}'_n\).
    {: .fr-exo }

    <strong>(c\)</strong> 证明 \((E_n)\) 的所有解都可写成 \(X=PYP^{-1}\)，其中 \(Y\in\mathcal{S}'_n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Soit \(X\) une solution de \((E_n)\) et posons \(Y=P^{-1}XP\), c'est-à-dire \(X=PYP^{-1}\). Pour tout \(k\in\mathbb{N}\), \(X^k=PY^kP^{-1}\), donc

        <strong>解答。</strong>设 \(X\) 为 \((E_n)\) 的解，令 \(Y=P^{-1}XP\)，即 \(X=PYP^{-1}\)。对任意 \(k\in\mathbb{N}\)，\(X^k=PY^kP^{-1}\)，故
        {: .zh }

        \[
        P\left(Y^{n+1}+Y^n\right)P^{-1}=X^{n+1}+X^n=U.
        \]

        En multipliant à gauche par \(P^{-1}\) et à droite par \(P\),

        左乘 \(P^{-1}\)、右乘 \(P\)，
        {: .zh }

        \[
        Y^{n+1}+Y^n=P^{-1}UP=D,
        \]

        donc \(Y\in\mathcal{S}'_n\). Réciproquement, si \(Y\in\mathcal{S}'_n\), alors \(X=PYP^{-1}\) vérifie \(X^{n+1}+X^n=PDP^{-1}=U\) car \(U=PDP^{-1}\). Les solutions de \((E_n)\) sont donc exactement les \(X=PYP^{-1}\) avec \(Y\in\mathcal{S}'_n\).

        故 \(Y\in\mathcal{S}'_n\)。反之，若 \(Y\in\mathcal{S}'_n\)，则 \(X=PYP^{-1}\) 满足 \(X^{n+1}+X^n=PDP^{-1}=U\)，因为 \(U=PDP^{-1}\)。因此 \((E_n)\) 的解恰为所有 \(X=PYP^{-1}\)（\(Y\in\mathcal{S}'_n\)）。
        {: .zh }

        \[
        \boxed{\text{Les solutions de }(E_n)\text{ sont les }X=PYP^{-1},\ Y\in\mathcal{S}'_n.}
        \]

3. On fixe \(Y\in\mathcal{S}'_n\), et on pose \(\begin{pmatrix}a&b\\c&d\end{pmatrix}=Y\).
    {: .fr-exo }

    固定 \(Y\in\mathcal{S}'_n\)，并记 \(\begin{pmatrix}a&b\\c&d\end{pmatrix}=Y\)。
    {: .zh }

    <strong>(a)</strong> Justifier que \(Y\) et \(D\) commutent.
    {: .fr-exo }

    <strong>(a)</strong> 说明 \(Y\) 与 \(D\) 可交换。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Comme \(Y\in\mathcal{S}'_n\),

        <strong>解答。</strong>由于 \(Y\in\mathcal{S}'_n\)，
        {: .zh }

        \[
        D=Y^{n+1}+Y^n=Y^n(Y+I_2)=(Y+I_2)Y^n.
        \]

        La matrice \(D\) est donc un polynôme en \(Y\) ; elle commute avec \(Y\).

        因此 \(D\) 是 \(Y\) 的多项式，故与 \(Y\) 可交换。
        {: .zh }

        \[
        \boxed{YD=DY.}
        \]

    <strong>(b)</strong> En déduire que \(b=c=0\).
    {: .fr-exo }

    <strong>(b)</strong> 由此推出 \(b=c=0\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En écrivant \(Y=\begin{pmatrix}a&b\\c&d\end{pmatrix}\) et \(D=\begin{pmatrix}2&0\\0&0\end{pmatrix}\),

        <strong>解答。</strong>写出 \(Y=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)、\(D=\begin{pmatrix}2&0\\0&0\end{pmatrix}\)，
        {: .zh }

        \[
        YD=
        \begin{pmatrix}2a&0\\2c&0\end{pmatrix},
        \qquad
        DY=
        \begin{pmatrix}2a&2b\\0&0\end{pmatrix}.
        \]

        L'égalité \(YD=DY\) impose \(2b=0\) et \(2c=0\), donc \(b=c=0\). Ainsi \(Y=\begin{pmatrix}a&0\\0&d\end{pmatrix}\) est diagonale.

        由 \(YD=DY\) 得 \(2b=0\)、\(2c=0\)，故 \(b=c=0\)。因此 \(Y=\begin{pmatrix}a&0\\0&d\end{pmatrix}\) 为对角矩阵。
        {: .zh }

        \[
        \boxed{b=c=0.}
        \]

    <strong>(c\)</strong> Montrer que \(a\) est solution de \((E''_n)\quad x^{n+1}+x^n=2\).
    {: .fr-exo }

    <strong>(c\)</strong> 证明 \(a\) 是方程 \((E''_n)\quad x^{n+1}+x^n=2\) 的解。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Pour \(Y=\operatorname{Diag}(a,d)\), on a \(Y^k=\operatorname{Diag}(a^k,d^k)\), donc

        <strong>解答。</strong>对 \(Y=\operatorname{Diag}(a,d)\)，有 \(Y^k=\operatorname{Diag}(a^k,d^k)\)，故
        {: .zh }

        \[
        Y^{n+1}+Y^n=\operatorname{Diag}\left(a^{n+1}+a^n,\ d^{n+1}+d^n\right)=D=\operatorname{Diag}(2,0).
        \]

        En identifiant le premier coefficient,

        比较第一个系数，
        {: .zh }

        \[
        \boxed{a^{n+1}+a^n=2.}
        \]

    <strong>(d)</strong> Quelles sont les valeurs possibles pour \(d\) ?
    {: .fr-exo }

    <strong>(d)</strong> \(d\) 可能取哪些值？
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> En identifiant le second coefficient,

        <strong>解答。</strong>比较第二个系数，
        {: .zh }

        \[
        d^{n+1}+d^n=0\iff d^n(d+1)=0.
        \]

        Comme \(n\geqslant1\), on en déduit \(d=0\) ou \(d=-1\).

        由于 \(n\geqslant1\)，故 \(d=0\) 或 \(d=-1\)。
        {: .zh }

        \[
        \boxed{d\in\{0,-1\}.}
        \]

4. On considère la fonction \(f_n:x\mapsto x^{n+1}+x^n\).
    {: .fr-exo }

    考虑函数 \(f_n:x\mapsto x^{n+1}+x^n\)。
    {: .zh }

    <strong>(a)</strong> Étudier la fonction \(f_n\) selon la parité de \(n\).
    {: .fr-exo }

    <strong>(a)</strong> 按 \(n\) 的奇偶性研究函数 \(f_n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> La fonction \(f_n(x)=x^n(x+1)\) est définie et dérivable sur \(\mathbb{R}\), et

        <strong>解答。</strong>函数 \(f_n(x)=x^n(x+1)\) 在 \(\mathbb{R}\) 上可导，且
        {: .zh }

        \[
        f_n'(x)=(n+1)x^n+nx^{n-1}=x^{n-1}\bigl((n+1)x+n\bigr).
        \]

        Les points critiques sont \(x=0\) et \(x=-\dfrac{n}{n+1}\). Le signe de \(f_n'\) dépend de la parité de \(n-1\).

        临界点为 \(x=0\) 与 \(x=-\dfrac{n}{n+1}\)。\(f_n'\) 的符号取决于 \(n-1\) 的奇偶性。
        {: .zh }

        <strong>Cas \(n\) pair.</strong> Alors \(n-1\) est impair : \(x^{n-1}\) est du signe de \(x\). On obtient :

        <strong>情形 \(n\) 为偶数。</strong> 此时 \(n-1\) 为奇数：\(x^{n-1}\) 与 \(x\) 同号。可得：
        {: .zh }

        - sur \(\left]-\infty,-\frac{n}{n+1}\right]\), \(f_n\) croît de \(-\infty\) à \(\frac{n^n}{(n+1)^{n+1}}\) ;

          在 \(\left]-\infty,-\frac{n}{n+1}\right]\) 上，\(f_n\) 从 \(-\infty\) 递增到 \(\frac{n^n}{(n+1)^{n+1}}\)；
          {: .zh }

        - sur \(\left[-\frac{n}{n+1},0\right]\), \(f_n\) décroît de \(\frac{n^n}{(n+1)^{n+1}}\) à \(0\) ;

          在 \(\left[-\frac{n}{n+1},0\right]\) 上，\(f_n\) 从 \(\frac{n^n}{(n+1)^{n+1}}\) 递减到 \(0\)；
          {: .zh }

        - sur \([0,+\infty[\), \(f_n\) croît de \(0\) à \(+\infty\).

          在 \([0,+\infty[\) 上，\(f_n\) 从 \(0\) 递增到 \(+\infty\)。
          {: .zh }

        Le maximum local vaut \(\frac{n^n}{(n+1)^{n+1}}=\left(\frac{n}{n+1}\right)^n\frac{1}{n+1}<1<2\). La fonction ne prend donc la valeur \(2\) que sur \([0,+\infty[\), où elle est strictement croissante.

        局部最大值为 \(\frac{n^n}{(n+1)^{n+1}}=\left(\frac{n}{n+1}\right)^n\frac{1}{n+1}<1<2\)。因此 \(f_n\) 只在 \([0,+\infty[\) 上取到值 \(2\)，且在该区间严格递增。
        {: .zh }

        <strong>Cas \(n\) impair.</strong> Alors \(n-1\) est pair : \(x^{n-1}\geqslant0\). On obtient :

        <strong>情形 \(n\) 为奇数。</strong> 此时 \(n-1\) 为偶数：\(x^{n-1}\geqslant0\)。可得：
        {: .zh }

        - sur \(\left]-\infty,-\frac{n}{n+1}\right]\), \(f_n\) décroît de \(+\infty\) à \(-\frac{n^n}{(n+1)^{n+1}}\) ;

          在 \(\left]-\infty,-\frac{n}{n+1}\right]\) 上，\(f_n\) 从 \(+\infty\) 递减到 \(-\frac{n^n}{(n+1)^{n+1}}\)；
          {: .zh }

        - sur \(\left[-\frac{n}{n+1},+\infty\right[\), \(f_n\) croît de \(-\frac{n^n}{(n+1)^{n+1}}\) à \(+\infty\) (la dérivée s'annule en \(0\) sans changer de signe).

          在 \(\left[-\frac{n}{n+1},+\infty\right[\) 上，\(f_n\) 从 \(-\frac{n^n}{(n+1)^{n+1}}\) 递增到 \(+\infty\)（导数在 \(0\) 处为零但不改变符号）。
          {: .zh }

        Le minimum local est négatif, donc la droite d'équation \(y=2\) coupe la courbe une fois sur chaque branche monotone.

        局部最小值为负数，因此直线 \(y=2\) 与曲线在每条单调分支上各相交一次。
        {: .zh }

        \[
        \boxed{
        \begin{aligned}
        &n\ \text{pair} : && f_n\ \text{admet un maximum local } \frac{n^n}{(n+1)^{n+1}}\text{ et un minimum local } 0;\\
        &n\ \text{impair} : && f_n\ \text{admet un minimum local } -\frac{n^n}{(n+1)^{n+1}}.
        \end{aligned}}
        \]

    <strong>(b)</strong> Déterminer le nombre de solutions de \((E''_n)\).
    {: .fr-exo }

    <strong>(b)</strong> 确定 \((E''_n)\) 的解的个数。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> L'équation \((E''_n)\) s'écrit \(f_n(x)=2\). D'après l'étude précédente :

        <strong>解答。</strong>方程 \((E''_n)\) 即 \(f_n(x)=2\)。由上述研究：
        {: .zh }

        - si \(n\) est pair, \(f_n\) ne dépasse pas son maximum local \(<2\) sur \(\mathbb{R}_-^*\) et croît strictement de \(0\) à \(+\infty\) sur \([0,+\infty[\) : il y a exactement une solution, positive ;

          若 \(n\) 为偶数，\(f_n\) 在 \(\mathbb{R}_-^*\) 上不超过其局部最大值 \(<2\)，而在 \([0,+\infty[\) 上从 \(0\) 严格递增到 \(+\infty\)：恰有一个解，且为正数；
          {: .zh }

        - si \(n\) est impair, \(f_n\) décroît de \(+\infty\) à un minimum négatif puis croît jusqu'à \(+\infty\) : il y a exactement deux solutions, l'une négative et l'autre positive.

          若 \(n\) 为奇数，\(f_n\) 从 \(+\infty\) 递减到负的最小值，再递增到 \(+\infty\)：恰有两个解，一负一正。
          {: .zh }

        \[
        \boxed{
        \#(E''_n)=
        \begin{cases}
        1 & \text{si } n \text{ est pair},\\[2pt]
        2 & \text{si } n \text{ est impair}.
        \end{cases}}
        \]

5. Dans le cas \(n=3\), on note \(\alpha\) la solution négative de \((E''_3)\). Déterminer les solutions de \((E'_3)\) puis celles de \((E_3)\) en exprimant leurs coefficients à l'aide de \(\alpha\).
    {: .fr-exo }

    当 \(n=3\) 时，记 \(\alpha\) 为 \((E''_3)\) 的负解。求 \((E'_3)\) 的解，再求 \((E_3)\) 的解，并用 \(\alpha\) 表示其系数。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Pour \(n=3\), l'équation \((E''_3)\) s'écrit \(x^4+x^3=2\), c'est-à-dire \(x^4+x^3-2=0\). On factorise :

        <strong>解答。</strong>当 \(n=3\) 时，\((E''_3)\) 为 \(x^4+x^3=2\)，即 \(x^4+x^3-2=0\)。因式分解：
        {: .zh }

        \[
        x^4+x^3-2=(x-1)(x^3+2x^2+2x+2).
        \]

        Le facteur cubique est strictement croissant (sa dérivée \(3x^2+4x+2\) a pour discriminant \(-8<0\)) et change de signe entre \(-2\) et \(-\frac34\) ; il admet donc une unique racine réelle, qui est \(\alpha\in\left]-2,-\frac34\right[\). Ainsi

        三次因子严格递增（其导数 \(3x^2+4x+2\) 的判别式为 \(-8<0\)），且在 \(-2\) 与 \(-\frac34\) 之间变号，故有唯一实根 \(\alpha\in\left]-2,-\frac34\right[\)。因此
        {: .zh }

        \[
        \boxed{(E''_3)\ \text{a pour solutions}\ x=1\ \text{et}\ x=\alpha.}
        \]

        Les solutions \(Y\in\mathcal{S}'_3\) sont les matrices diagonales \(\operatorname{Diag}(a,d)\) avec \(a\in\{1,\alpha\}\) et \(d\in\{0,-1\}\) :

        \(\mathcal{S}'_3\) 中的解为对角矩阵 \(\operatorname{Diag}(a,d)\)，其中 \(a\in\{1,\alpha\}\)、\(d\in\{0,-1\}\)：
        {: .zh }

        \[
        \boxed{\mathcal{S}'_3=
        \left\{
        \operatorname{Diag}(1,0),\
        \operatorname{Diag}(1,-1),\
        \operatorname{Diag}(\alpha,0),\
        \operatorname{Diag}(\alpha,-1)
        \right\}.}
        \]

        Pour \(Y=\operatorname{Diag}(a,d)\), la question 2(c\) donne \(X=PYP^{-1}=\frac12PYP\), et

        对 \(Y=\operatorname{Diag}(a,d)\)，由第 2(c\) 问，\(X=PYP^{-1}=\frac12PYP\)，且
        {: .zh }

        \[
        PYP=
        \begin{pmatrix}1&1\\1&-1\end{pmatrix}
        \begin{pmatrix}a&0\\0&d\end{pmatrix}
        \begin{pmatrix}1&1\\1&-1\end{pmatrix}
        =
        \begin{pmatrix}a+d&a-d\\a-d&a+d\end{pmatrix},
        \]

        d'où

        故
        {: .zh }

        \[
        X=\frac12
        \begin{pmatrix}
        a+d & a-d\\
        a-d & a+d
        \end{pmatrix}.
        \]

        En remplaçant \((a,d)\) par les quatre couples possibles, on obtient les solutions de \((E_3)\) :

        将四组 \((a,d)\) 代入，即得 \((E_3)\) 的解：
        {: .zh }

        \[
        \boxed{
        \begin{aligned}
        X&=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}
        \quad\text{ou}\quad
        X=\begin{pmatrix}0&1\\1&0\end{pmatrix},\\
        X&=\frac{\alpha}{2}\begin{pmatrix}1&1\\1&1\end{pmatrix}
        \quad\text{ou}\quad
        X=\frac12\begin{pmatrix}\alpha-1&\alpha+1\\ \alpha+1&\alpha-1\end{pmatrix}.
        \end{aligned}}
        \]

        On vérifie que chacune de ces quatre matrices satisfait bien \(X^4+X^3=U\).

        可验证这四个矩阵都满足 \(X^4+X^3=U\)。
        {: .zh }

### Exercice 3 <span class="heading-zh">练习 3</span>

<p class="exo-type">matrices triangulaires supérieures　上三角矩阵</p>

On considère la matrice \(U=\begin{pmatrix}1&u_1&u_2\\0&1&u_3\\0&0&1\end{pmatrix}\in\mathcal{M}_3(\mathbb{R})\).
{: .fr-exo }

考虑矩阵 \(U=\begin{pmatrix}1&u_1&u_2\\0&1&u_3\\0&0&1\end{pmatrix}\in\mathcal{M}_3(\mathbb{R})\)。
{: .zh }

Calculer l'inverse de \(U\) sachant qu'il est du type \(U'=\begin{pmatrix}1&u'_1&u'_2\\0&1&u'_3\\0&0&1\end{pmatrix}\in\mathcal{M}_3(\mathbb{R})\).
{: .fr-exo }

已知 \(U\) 的逆形如 \(U'=\begin{pmatrix}1&u'_1&u'_2\\0&1&u'_3\\0&0&1\end{pmatrix}\in\mathcal{M}_3(\mathbb{R})\)，求 \(U^{-1}\)。
{: .zh }

!!! sol ""

    <strong>Solution.</strong> On impose \(UU'=I_3\). En développant le produit,

    <strong>解答。</strong>令 \(UU'=I_3\)。展开乘积，
    {: .zh }

    \[
    UU'=
    \begin{pmatrix}1&u_1&u_2\\0&1&u_3\\0&0&1\end{pmatrix}
    \begin{pmatrix}1&u'_1&u'_2\\0&1&u'_3\\0&0&1\end{pmatrix}
    =
    \begin{pmatrix}
    1 & u_1+u'_1 & u_2+u_1u'_3+u'_2\\
    0 & 1 & u_3+u'_3\\
    0 & 0 & 1
    \end{pmatrix}.
    \]

    En identifiant à \(I_3\),

    与 \(I_3\) 比较，
    {: .zh }

    \[
    u_1+u'_1=0,\qquad u_3+u'_3=0,\qquad u_2+u_1u'_3+u'_2=0.
    \]

    D'où \(u'_1=-u_1\), \(u'_3=-u_3\) et \(u'_2=-u_2+u_1u_3\). On vérifie alors que \(U'U=I_3\) avec ces valeurs ; par conséquent

    故 \(u'_1=-u_1\)、\(u'_3=-u_3\)、\(u'_2=-u_2+u_1u_3\)。用这些值可验证 \(U'U=I_3\)；因此
    {: .zh }

    \[
    \boxed{U^{-1}=
    \begin{pmatrix}
    1 & -u_1 & u_1u_3-u_2\\
    0 & 1 & -u_3\\
    0 & 0 & 1
    \end{pmatrix}.}
    \]

    On peut aussi écrire \(U=I_3+N\) avec \(N=\begin{pmatrix}0&u_1&u_2\\0&0&u_3\\0&0&0\end{pmatrix}\) nilpotente d'indice au plus \(3\) : \(U^{-1}=I_3-N+N^2\).

    也可写成 \(U=I_3+N\)，其中 \(N=\begin{pmatrix}0&u_1&u_2\\0&0&u_3\\0&0&0\end{pmatrix}\) 是幂零指数至多为 \(3\) 的矩阵，从而 \(U^{-1}=I_3-N+N^2\)。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>polynôme caractéristique</strong>：特征多项式
    - <strong>discriminant</strong>：判别式
    - <strong>racines distinctes</strong>：互异根
    - <strong>matrice scalaire</strong>：数量矩阵
    - <strong>polynôme annulateur</strong>：零化多项式
    - <strong>commuter</strong>：交换
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>équation matricielle</strong>：矩阵方程
    - <strong>par identification</strong>：比较系数
    - <strong>ensemble des solutions</strong>：解集
    - <strong>matrice diagonale</strong>：对角矩阵
    - <strong>matrice triangulaire supérieure</strong>：上三角矩阵
    - <strong>parité</strong>：奇偶性
    - <strong>croître / décroître</strong>：递增 / 递减
    - <strong>par l'absurde</strong>：反证法

## Exercices supplémentaires <span class="heading-zh">补充习题</span>

### Exercice 4 <span class="heading-zh">练习 4</span>

<p class="exo-type">suites et matrices　数列与矩阵</p>

Soient \(\mu\geqslant0\), et \((a_n),(b_n),(c_n)\) trois suites définies par \((a_0,b_0,c_0)\in\mathbb{R}^3\) et \(\forall n\in\mathbb{N}\)
{: .fr-exo }

设 \(\mu\geqslant0\)，三个数列 \((a_n),(b_n),(c_n)\) 由 \((a_0,b_0,c_0)\in\mathbb{R}^3\) 及 \(\forall n\in\mathbb{N}\) 定义：
{: .zh }

\[
a_{n+1}=\frac{\mu a_n+b_n+c_n}{\mu+2},\qquad
b_{n+1}=\frac{a_n+\mu b_n+c_n}{\mu+2},\qquad
c_{n+1}=\frac{a_n+b_n+\mu c_n}{\mu+2}.
\]

On pose \(\forall n\in\mathbb{N}\), \(X_n=\begin{pmatrix}a_n\\b_n\\c_n\end{pmatrix}\in\mathcal{M}_{3,1}(\mathbb{R})\).
{: .fr-exo }

令 \(\forall n\in\mathbb{N}\)，\(X_n=\begin{pmatrix}a_n\\b_n\\c_n\end{pmatrix}\in\mathcal{M}_{3,1}(\mathbb{R})\)。
{: .zh }

1. Déterminer la matrice \(M\in\mathcal{M}_3(\mathbb{R})\) telle que \(\forall n\in\mathbb{N}\), \(X_{n+1}=MX_n\).
    {: .fr-exo }

    求矩阵 \(M\in\mathcal{M}_3(\mathbb{R})\)，使 \(\forall n\in\mathbb{N}\)，\(X_{n+1}=MX_n\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Par identification des coefficients des trois formules,

        <strong>解答。</strong>比较三个公式的系数，
        {: .zh }

        \[
        X_{n+1}=
        \frac{1}{\mu+2}
        \begin{pmatrix}
        \mu&1&1\\
        1&\mu&1\\
        1&1&\mu
        \end{pmatrix}
        X_n.
        \]

        \[
        \boxed{M=\frac{1}{\mu+2}
        \begin{pmatrix}
        \mu&1&1\\
        1&\mu&1\\
        1&1&\mu
        \end{pmatrix}.}
        \]

2. Montrer que \(\forall n\in\mathbb{N}\), \(X_n=M^nX_0\).
    {: .fr-exo }

    证明 \(\forall n\in\mathbb{N}\)，\(X_n=M^nX_0\)。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> On procède par récurrence sur \(n\). Pour \(n=0\), \(X_0=M^0X_0\). Si \(X_n=M^nX_0\), alors

        <strong>解答。</strong>对 \(n\) 归纳。\(n=0\) 时 \(X_0=M^0X_0\)。若 \(X_n=M^nX_0\)，则
        {: .zh }

        \[
        X_{n+1}=MX_n=MM^nX_0=M^{n+1}X_0.
        \]

        D'où, pour tout \(n\in\mathbb{N}\), \(X_n=M^nX_0\).

        故对一切 \(n\in\mathbb{N}\)，\(X_n=M^nX_0\)。
        {: .zh }

        \[
        \boxed{\forall n\in\mathbb{N},\quad X_n=M^nX_0.}
        \]

3. Calculer \(M^n\) en fonction de \(n\in\mathbb{N}\).
    {: .fr-exo }

    计算 \(M^n\)（用 \(n\in\mathbb{N}\) 表示）。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> Posons \(J=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}\). Alors \(J^2=3J\) et

        <strong>解答。</strong>令 \(J=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}\)，则 \(J^2=3J\)，且
        {: .zh }

        \[
        M=\frac{1}{\mu+2}\bigl((\mu-1)I_3+J\bigr).
        \]

        Comme \(I_3\) et \(J\) commutent, la formule du binôme de Newton donne

        由于 \(I_3\) 与 \(J\) 可交换，由牛顿二项式公式
        {: .zh }

        \[
        M^n=\frac{1}{(\mu+2)^n}\sum_{k=0}^{n}\binom{n}{k}(\mu-1)^{n-k}J^k.
        \]

        Or \(J^0=I_3\) et, pour \(k\geqslant1\), \(J^k=3^{k-1}J\). Donc

        而 \(J^0=I_3\)，且对 \(k\geqslant1\) 有 \(J^k=3^{k-1}J\)。故
        {: .zh }

        \[
        M^n=\frac{1}{(\mu+2)^n}\left((\mu-1)^nI_3
        +\frac{1}{3}\left((\mu+2)^n-(\mu-1)^n\right)J\right).
        \]

        En posant \(r=\dfrac{\mu-1}{\mu+2}\),

        令 \(r=\dfrac{\mu-1}{\mu+2}\)，则
        {: .zh }

        \[
        \boxed{M^n=r^nI_3+\frac{1-r^n}{3}J
        =
        \begin{pmatrix}
        \dfrac{1+2r^n}{3} & \dfrac{1-r^n}{3} & \dfrac{1-r^n}{3}\\[8pt]
        \dfrac{1-r^n}{3} & \dfrac{1+2r^n}{3} & \dfrac{1-r^n}{3}\\[8pt]
        \dfrac{1-r^n}{3} & \dfrac{1-r^n}{3} & \dfrac{1+2r^n}{3}
        \end{pmatrix}.}
        \]

4. Calculer \(a_n\) en fonction de \(n\in\mathbb{N}\).
    {: .fr-exo }

    计算 \(a_n\)（用 \(n\in\mathbb{N}\) 表示）。
    {: .zh }

    !!! sol ""

        <strong>Solution.</strong> La première ligne de \(X_n=M^nX_0\) donne

        <strong>解答。</strong>由 \(X_n=M^nX_0\) 的第一行，
        {: .zh }

        \[
        a_n=\frac{1+2r^n}{3}a_0+\frac{1-r^n}{3}b_0+\frac{1-r^n}{3}c_0.
        \]

        En regroupant,

        合并同类项，
        {: .zh }

        \[
        a_n=\frac{a_0+b_0+c_0+r^n(2a_0-b_0-c_0)}{3}.
        \]

        \[
        \boxed{a_n=\frac{a_0+b_0+c_0}{3}+r^n\,\frac{2a_0-b_0-c_0}{3},
        \qquad r=\frac{\mu-1}{\mu+2}.}
        \]

        Vérification : pour \(n=0\), on retrouve bien \(a_0\).

        验证：当 \(n=0\) 时确实回到 \(a_0\)。
        {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>suite récurrente</strong>：递推数列
    - <strong>matrice colonne</strong>：列矩阵
    - <strong>matrice dont tous les coefficients valent 1</strong>：全 1 矩阵
    - <strong>récurrence sur \(n\)</strong>：对 \(n\) 的归纳
    - <strong>en fonction de \(n\)</strong>：用 \(n\) 表示
    - <strong>terme général</strong>：通项
    - <strong>formule du binôme de Newton</strong>：牛顿二项式公式
    - <strong>coefficient</strong>：系数
    - <strong>vérification</strong>：验证
