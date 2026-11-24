---
title: 第 5 章 线性方程组
comments: true
---

# 第 5 章　线性方程组

<div class="lecture-hero">
<p class="lecture-hero__fr">Chapitre n°5 — Systèmes linéaires</p>
<p class="lecture-hero__meta">中法对照讲义 · 由 LaTeX 源文件渲染</p>
</div>

!!! info "阅读说明"

    每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。<strong>加粗</strong>为关键词，括号内为中文释义。

    Convention : les paragraphes en retrait, en bleu foncé et en corps réduit sont la traduction chinoise.

    缩进、深蓝色、小字号的段落为中文翻译。
    {: .zh }

## Objectifs <span class="heading-zh">学习目标</span>

1. Écrire un système linéaire sous forme matricielle.

    把线性方程组写成矩阵形式。
    {: .zh }

2. Calculer le rang d'un système linéaire à l'aide de la méthode du pivot de Gauss.

    借助高斯消元法（méthode du pivot de Gauss）计算线性方程组的秩。
    {: .zh }

3. Résoudre un système linéaire en discutant du nombre de solutions.

    求解线性方程组，并讨论解的个数。
    {: .zh }

4. Calculer l'inverse d'une matrice inversible.

    计算可逆矩阵的逆。
    {: .zh }

## Notations <span class="heading-zh">记号</span>

On rappelle que \(\mathbb{N}\) désigne l'ensemble des entiers naturels, \(\mathbb{R}\) désigne l'ensemble des nombres réels et \(\mathbb{C}\) désigne l'ensemble des nombres complexes. Dans ce chapitre, \(\mathbb{K}\) désigne \(\mathbb{R}\) ou \(\mathbb{C}\).

回忆：\(\mathbb{N}\) 表示自然数集，\(\mathbb{R}\) 表示实数集，\(\mathbb{C}\) 表示复数集。本章中，\(\mathbb{K}\) 表示 \(\mathbb{R}\) 或 \(\mathbb{C}\)。
{: .zh }

## 1　Forme matricielle <span class="heading-zh">矩阵形式</span>

Dans cette section, on fixe deux entiers \((n,p)\in(\mathbb{N}^*)^2\).

本节固定两个整数 \((n,p)\in(\mathbb{N}^*)^2\)。
{: .zh }

!!! success "Définition 1.1 : système linéaire<br><span class='zh-title'>定义 1.1：线性方程组（système linéaire）</span>"

    À faire en cours : <strong>équation linéaire</strong>, <strong>inconnues</strong>, <strong>coefficients</strong>, <strong>second membre</strong>, <strong>système</strong>, <strong>forme matricielle</strong>.

    课上完成：<strong>线性方程</strong>（équation linéaire）、<strong>未知数</strong>（inconnues）、<strong>系数</strong>（coefficients）、<strong>常数项</strong>（second membre）、<strong>方程组</strong>（système）、<strong>矩阵形式</strong>（forme matricielle）。
    {: .zh }

!!! info "Exemple 1.2<br><span class='zh-title'>例 1.2</span>"

    Cet exemple est laissé en blanc dans le document source.

    本例题在原讲义中留白，待课上补充。
    {: .zh }

!!! success "Définition 1.3 : systèmes linéaires équivalents<br><span class='zh-title'>定义 1.3：等价线性方程组（systèmes linéaires équivalents）</span>"

    À faire en cours.

    课上完成。
    {: .zh }

!!! info "Exemple 1.4<br><span class='zh-title'>例 1.4</span>"

    Cet exemple est laissé en blanc dans le document source.

    本例题在原讲义中留白，待课上补充。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>système linéaire</strong>：线性方程组
    - <strong>équation linéaire</strong>：线性方程
    - <strong>inconnue</strong>：未知数
    - <strong>coefficient</strong>：系数
    - <strong>second membre</strong>：常数项（右端项）
    - <strong>systèmes linéaires équivalents</strong>：等价线性方程组
    - <strong>forme matricielle</strong>：矩阵形式

## 2　Opérations sur les lignes et les colonnes <span class="heading-zh">行与列的运算</span>

!!! success "Définition 2.1 : opérations élémentaires sur les lignes<br><span class='zh-title'>定义 2.1：初等行变换（opérations élémentaires sur les lignes）</span>"

    - \(L_i \leftrightarrow L_j\)

        交换第 \(i\) 行与第 \(j\) 行。
        {: .zh }

    - \(L_i \leftarrow \lambda L_i + \mu L_j\) avec \(\lambda \neq 0\) et \(\mu \in \mathbb{K}\)

        把第 \(i\) 行替换为 \(\lambda L_i + \mu L_j\)，其中 \(\lambda \neq 0\)，\(\mu \in \mathbb{K}\)。
        {: .zh }

!!! info "Exemple 2.2<br><span class='zh-title'>例 2.2</span>"

    Cet exemple est laissé en blanc dans le document source.

    本例题在原讲义中留白，待课上补充。
    {: .zh }

!!! warning "Important<br><span class='zh-title'>要点</span>"

    Cela revient à multiplier à gauche par une <strong>matrice élémentaire</strong>.

    这相当于左乘一个<strong>初等矩阵</strong>（matrice élémentaire）。
    {: .zh }

!!! warning "Attention<br><span class='zh-title'>注意</span>"

    ordre des matrices pour plusieurs opérations élémentaires sur les lignes consécutives.

    连续进行多次初等行变换时，要注意矩阵相乘的<strong>顺序</strong>。
    {: .zh }

!!! success "Définition 2.3 : opérations élémentaires sur les colonnes<br><span class='zh-title'>定义 2.3：初等列变换（opérations élémentaires sur les colonnes）</span>"

    - \(C_i \leftrightarrow C_j\)

        交换第 \(i\) 列与第 \(j\) 列。
        {: .zh }

    - \(C_i \leftarrow \lambda C_i + \mu C_g\) avec \(\lambda \neq 0\) et \(\mu \in \mathbb{K}\)

        把第 \(i\) 列替换为 \(\lambda C_i + \mu C_g\)，其中 \(\lambda \neq 0\)，\(\mu \in \mathbb{K}\)（原文下标作 \(g\)，按上下文应为 \(j\)）。
        {: .zh }

!!! warning "Important<br><span class='zh-title'>要点</span>"

    Cela revient à multiplier à droite par une <strong>matrice élémentaire</strong>.

    这相当于右乘一个<strong>初等矩阵</strong>（matrice élémentaire）。
    {: .zh }

!!! danger "Propriété 2.4<br><span class='zh-title'>性质 2.4</span>"

    on obtient des systèmes linéaires équivalents.

    得到的是等价的线性方程组（systèmes linéaires équivalents）。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> À faire en cours.

    <strong>证明。</strong>课上完成。
    {: .zh }

    <p class="cqfd">∎</p>

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>opération élémentaire sur les lignes / colonnes</strong>：初等行变换 / 初等列变换
    - <strong>matrice élémentaire</strong>：初等矩阵
    - <strong>multiplier à gauche / à droite</strong>：左乘 / 右乘
    - <strong>ligne / colonne</strong>：行 / 列
    - <strong>système linéaire équivalent</strong>：等价线性方程组

## 3　Méthode du pivot de Gauss <span class="heading-zh">高斯消元法</span>

!!! success "Définition 3.1<br><span class='zh-title'>定义 3.1</span>"

    <strong>système linéaire échelonné</strong>, <strong>pivot</strong>, <strong>équations principales</strong>, <strong>équations auxiliaires</strong>, <strong>inconnues principales</strong>, <strong>inconnues auxiliaires</strong>.

    <strong>阶梯形线性方程组</strong>（système linéaire échelonné）、<strong>主元</strong>（pivot）、<strong>主方程</strong>（équations principales）、<strong>辅助方程</strong>（équations auxiliaires）、<strong>主未知数</strong>（inconnues principales）、<strong>辅助未知数</strong>（inconnues auxiliaires）。
    {: .zh }

!!! info "Exemple 3.2<br><span class='zh-title'>例 3.2</span>"

    Cet exemple est laissé en blanc dans le document source.

    本例题在原讲义中留白，待课上补充。
    {: .zh }

!!! danger "Théorème 3.3 : méthode du pivot de Gauss<br><span class='zh-title'>定理 3.3：高斯消元法（méthode du pivot de Gauss）</span>"

    échelonnage de toute matrice.

    任意矩阵都可化为阶梯形（échelonnage）。
    {: .zh }

!!! demo ""

    <strong>Démonstration.</strong> algorithme de la méthode du pivot de Gauss.

    <strong>证明。</strong>高斯消元法的算法。
    {: .zh }

    <p class="cqfd">∎</p>

!!! info "Exemple 3.4<br><span class='zh-title'>例 3.4</span>"

    对增广矩阵依次作初等行变换，直至阶梯形（échelonnage）：
    {: .zh }

    \[
    \begin{cases}
    2x+4y+z &= 3\\
    -2z+7t &= 6\\
    3x+6y+6z-7t &= 2\\
    x+2y+z-t &= 1\\
    5x+10y+7z-9t &= 3
    \end{cases}
    \quad\Longleftrightarrow\quad
    \begin{pmatrix}
    2&4&1&0\\
    0&0&-2&7\\
    3&6&6&-7\\
    1&2&1&-1\\
    5&10&7&-9
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}3\\6\\2\\1\\3\end{pmatrix}
    \quad
    \begin{array}{l}
    L_1\leftrightarrow L_4\\
    \phantom{L}\\
    \phantom{L}\\
    L_4\leftrightarrow L_1\\
    \phantom{L}
    \end{array}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{pmatrix}
    \boxed{1}&2&1&-1\\
    0&0&-2&7\\
    3&6&6&-7\\
    2&4&1&0\\
    5&10&7&-9
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}1\\6\\2\\3\\3\end{pmatrix}
    \quad
    \begin{array}{l}
    \phantom{L}\\
    \phantom{L}\\
    L_3\leftarrow L_3-3L_1\\
    L_4\leftarrow L_4-2L_1\\
    L_5\leftarrow L_5-5L_1
    \end{array}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{pmatrix}
    1&2&1&-1\\
    0&0&-2&7\\
    0&0&3&-4\\
    0&0&-1&2\\
    0&0&5&-7
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}1\\6\\-1\\1\\-2\end{pmatrix}
    \quad
    \begin{array}{l}
    \phantom{L}\\
    L_2\leftrightarrow L_4\\
    \phantom{L}\\
    L_4\leftrightarrow L_2\\
    \phantom{L}
    \end{array}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{pmatrix}
    1&2&1&-1\\
    0&0&\boxed{-1}&2\\
    0&0&3&-4\\
    0&0&-2&7\\
    0&0&5&-7
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}1\\1\\-1\\6\\-2\end{pmatrix}
    \quad
    \begin{array}{l}
    \phantom{L}\\
    \phantom{L}\\
    L_3\leftarrow L_3+3L_2\\
    L_4\leftarrow L_4-2L_2\\
    L_5\leftarrow L_5+5L_2
    \end{array}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{pmatrix}
    1&2&1&-1\\
    0&0&-1&2\\
    0&0&0&\boxed{2}\\
    0&0&0&3\\
    0&0&0&3
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}1\\1\\2\\4\\3\end{pmatrix}
    \quad
    \begin{array}{l}
    \phantom{L}\\
    \phantom{L}\\
    L_3\leftarrow \tfrac12 L_3\\
    \phantom{L}\\
    \phantom{L}
    \end{array}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{pmatrix}
    1&2&1&-1\\
    0&0&-1&2\\
    0&0&0&\boxed{1}\\
    0&0&0&3\\
    0&0&0&3
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}1\\1\\1\\4\\3\end{pmatrix}
    \quad
    \begin{array}{l}
    \phantom{L}\\
    \phantom{L}\\
    \phantom{L}\\
    L_4\leftarrow L_3-3L_3\\
    L_5\leftarrow L_5-3L_3
    \end{array}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{pmatrix}
    1&2&1&-1\\
    0&0&-1&2\\
    0&0&0&1\\
    0&0&0&0\\
    0&0&0&0
    \end{pmatrix}
    \begin{pmatrix}x\\y\\z\\t\end{pmatrix}
    =
    \begin{pmatrix}1\\1\\1\\1\\0\end{pmatrix}
    \]

    \[
    \Longleftrightarrow\quad
    \begin{cases}
    x+2y+z-t &= 1\\
    -z+2t &= 1\\
    t &= 1\\
    0 &= 1\\
    0 &= 0
    \end{cases}
    \]

    注：原讲义这一步的行变换标签写作 \(L_3-3L_3\)，按上下文应为 \(L_4-3L_3\)；此处照录原文。
    {: .zh }

!!! danger "Corollaire 3.5<br><span class='zh-title'>推论 3.5</span>"

    nombre de pivots constants et dépend seulement de la matrice des coefficients.

    主元的个数是常数，且只取决于系数矩阵（matrice des coefficients）。
    {: .zh }

!!! success "Définition 3.6 : rang<br><span class='zh-title'>定义 3.6：秩（rang）</span>"

    Rang d'une matrice ou d'un système linéaire.

    矩阵或线性方程组的秩。
    {: .zh }

!!! info "Exemple 3.7<br><span class='zh-title'>例 3.7</span>"

    计算下列矩阵的秩（rang）：
    {: .zh }

    \[
    \begin{pmatrix}2&3&-1\\4&7&2\\-2&-1&9\end{pmatrix},
    \qquad
    \begin{pmatrix}2&1&3\\0&1&-1\\0&3&4\\0&2&0\end{pmatrix}
    \qquad\text{et}\qquad
    \begin{pmatrix}2&3&0\\5&8&1\end{pmatrix}.
    \]

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>système linéaire échelonné</strong>：阶梯形线性方程组
    - <strong>pivot</strong>：主元
    - <strong>équations principales / auxiliaires</strong>：主方程 / 辅助方程
    - <strong>inconnues principales / auxiliaires</strong>：主未知数 / 辅助未知数
    - <strong>échelonnage</strong>：化为阶梯形
    - <strong>rang</strong>：秩
    - <strong>matrice des coefficients</strong>：系数矩阵

## 4　Résolution des systèmes linéaires <span class="heading-zh">线性方程组的求解</span>

!!! danger "Théorème 4.1<br><span class='zh-title'>定理 4.1</span>"

    Cet énoncé est laissé en blanc dans le document source.

    本定理在原讲义中留白，待课上补充。
    {: .zh }

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>résolution d'un système linéaire</strong>：线性方程组的求解
    - <strong>discuter du nombre de solutions</strong>：讨论解的个数
    - <strong>système compatible / incompatible</strong>：相容 / 不相容方程组
    - <strong>solution unique</strong>：唯一解
    - <strong>infinité de solutions</strong>：无穷多解

## 5　Inversion de matrices <span class="heading-zh">矩阵求逆</span>

!!! warning "Vocabulaire clé<br><span class='zh-title'>重点词汇</span>"

    - <strong>matrice inversible</strong>：可逆矩阵
    - <strong>inverse d'une matrice</strong>：矩阵的逆
    - <strong>matrice augmentée</strong>：增广矩阵
    - <strong>méthode du pivot de Gauss</strong>：高斯消元法
