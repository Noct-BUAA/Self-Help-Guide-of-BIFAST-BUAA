---
title: 动电学 TD1 电荷输运解答
comments: true
---

# 动电学 TD 1　电荷输运

<div class="lecture-hero">
<p class="lecture-hero__fr">TD 1 — Transport de charges · Corrigé</p>
<p class="lecture-badge">CORRIGÉ · 参考解答</p>
<p class="lecture-hero__meta">中法对照讲义 · 动电学与电路</p>
</div>

!!! info "阅读说明"

    本页是动电学部分 TD1 的完整参考解答：五道练习逐题给出推理步骤、公式与结论，每道练习末尾附重点词汇。每段先列法语原文；其下缩进、带深蓝竖条的小字号段落为中文翻译。各题解答集中在带边框的「参考解答」框中，建议先自行作答再核对。

## Exercice 1 : Questions de cours <span class="heading-zh">练习 1：课程思考题</span>

1. Dans un matériau métallique, quels sont les porteurs de charges mobiles responsables du courant électrique ?

    在金属材料中，负责传导电流的可移动电荷载流子是什么？
    {: .zh }

2. Lorsqu'on ferme l'interrupteur connecté à une ampoule, les électrons voyagent presque instantanément de l'interrupteur à l'ampoule. Vrai ou faux ?

    当闭合与灯泡相连的开关时，电子几乎瞬间从开关运动到灯泡。对还是错？
    {: .zh }

3. La vitesse de dérive est toujours orientée dans le sens de la densité de courant. Vrai ou faux ?

    漂移速度总是沿着电流密度的方向。对还是错？
    {: .zh }

4. Le champ électrique est toujours orienté dans le sens de la densité de courant. Vrai ou faux ?

    电场总是沿着电流密度的方向。对还是错？
    {: .zh }

5. Le champ électrique est nul dans un conducteur lorsqu'un courant y circule. Vrai ou faux ?

    当导体中有电流流过时，导体内部的电场为零。对还是错？
    {: .zh }

6. Un fil de cuivre et un fil d'aluminium de même longueur et de même diamètre sont traversés par le même courant. Dans lequel des deux fils l'intensité du champ électrique est-elle la plus grande ?

    一根铜导线和一根铝导线长度相同、直径相同，通过相同的电流。哪根导线中的电场强度更大？
    {: .zh }

!!! sol ""

    1. Les porteurs de charges mobiles sont les <strong>électrons libres</strong> (ou électrons de conduction). Les ions positifs du réseau cristallin sont fixes et ne participent pas au transport du courant.

        可移动的电荷载流子是<strong>自由电子</strong>（électrons libres，或称传导电子）。晶格中的正离子固定不动，不参与电流的输运。
        {: .zh }

    2. <strong>Faux.</strong> La vitesse de dérive des électrons est très faible (de l'ordre de \(10^{-4}\)&nbsp;m&nbsp;s\(^{-1}\)). Ce qui se propage presque instantanément le long du fil, c'est le <strong>champ électrique</strong> (le signal électromagnétique) : les électrons se mettent alors tous en mouvement quasi simultanément, mais chacun très lentement. Un électron donné ne parcourt donc pas la distance entre l'interrupteur et l'ampoule en un temps infime.

        <strong>错。</strong>电子的漂移速度极小（约 \(10^{-4}\)&nbsp;m&nbsp;s\(^{-1}\)）。几乎瞬间沿导线传播的是<strong>电场</strong>（电磁信号）：导线各处的电子几乎同时开始漂移，但每个电子本身运动极慢。因此，某个电子并不会在极短时间内走完开关到灯泡的距离。
        {: .zh }

    3. <strong>Faux.</strong> La densité de courant s'écrit \(\vec{J}=nq\vec{v}_d\). Pour des électrons (\(q=-e<0\)), la vitesse de dérive est <strong>opposée</strong> à \(\vec{J}\) ; elle n'est dans le sens de \(\vec{J}\) que pour des porteurs de charge positifs.

        <strong>错。</strong>电流密度写作 \(\vec{J}=nq\vec{v}_d\)。对电子（\(q=-e<0\)）而言，漂移速度与 \(\vec{J}\) <strong>方向相反</strong>；只有对正电荷载流子，漂移速度才与 \(\vec{J}\) 同向。
        {: .zh }

    4. <strong>Vrai</strong> (dans un conducteur ohmique isotrope). La loi d'Ohm microscopique s'écrit \(\vec{J}=\sigma\vec{E}\) avec \(\sigma>0\) : le champ électrique et la densité de courant ont donc le même sens. C'est le sens conventionnel du courant, opposé au mouvement réel des électrons.

        <strong>对</strong>（在各向同性欧姆导体中）。微观欧姆定律为 \(\vec{J}=\sigma\vec{E}\)，且 \(\sigma>0\)：电场与电流密度同向。这就是电流的约定方向，与电子的实际运动方向相反。
        {: .zh }

    5. <strong>Faux.</strong> Si un courant circule, alors \(\vec{J}\neq\vec{0}\) et, d'après la loi d'Ohm locale, \(\vec{E}=\vec{J}/\sigma\neq\vec{0}\) à l'intérieur du conducteur. Le champ n'est nul qu'à l'<strong>équilibre électrostatique</strong>, lorsqu'aucun courant ne circule.

        <strong>错。</strong>若有电流流过，则 \(\vec{J}\neq\vec{0}\)，由局部欧姆定律，导体内部的 \(\vec{E}=\vec{J}/\sigma\neq\vec{0}\)。电场只在<strong>静电平衡</strong>、没有电流时才为零。
        {: .zh }

    6. Les deux fils ont la même section et sont parcourus par le même courant : la densité de courant \(J=I/S\) est la même. Or \(E=J/\sigma\). Comme la conductivité de l'aluminium est plus faible que celle du cuivre (\(\sigma_{\mathrm{Al}}=3{,}5\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\) contre \(\sigma_{\mathrm{Cu}}\simeq6{,}0\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\)), c'est dans le <strong>fil d'aluminium</strong> que l'intensité du champ électrique est la plus grande.

        两根导线截面积相同、电流相同，故电流密度 \(J=I/S\) 相同。而 \(E=J/\sigma\)。由于铝的电导率小于铜（\(\sigma_{\mathrm{Al}}=3{,}5\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\)，而 \(\sigma_{\mathrm{Cu}}\simeq6{,}0\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\)），所以<strong>铝导线</strong>中的电场强度更大。
        {: .zh }

!!! warning "Vocabulaire clé &nbsp;&nbsp; 重点词汇<br><span class='zh-title'>练习 1 核心术语</span>"

    - <strong>porteurs de charges mobiles</strong>：可移动电荷载流子
    - <strong>électrons libres</strong>：自由电子
    - <strong>vitesse de dérive</strong>：漂移速度
    - <strong>densité de courant</strong>：电流密度
    - <strong>sens conventionnel du courant</strong>：电流的约定方向
    - <strong>interrupteur / ampoule</strong>：开关 / 灯泡
    - <strong>conductivité</strong>：电导率
    - <strong>équilibre électrostatique</strong>：静电平衡
    - <strong>loi d'Ohm microscopique</strong>：微观欧姆定律

## Exercice 2 : Courant électrique dans un câble en aluminium <span class="heading-zh">练习 2：铝电缆中的电流</span>

À température ambiante, l'aluminium a trois électrons libres par atome. La masse volumique de l'aluminium \(\rho_m\) est de \(2{,}70\times10^{3}\)&nbsp;kg&nbsp;m\(^{-3}\), et sa masse molaire \(M=26{,}98\)&nbsp;g&nbsp;mol\(^{-1}\). Nous rappelons la constante d'Avogadro \(N_A=6{,}02\times10^{23}\)&nbsp;mol\(^{-1}\).

在室温下，铝每个原子有三个自由电子。铝的密度 \(\rho_m=2{,}70\times10^{3}\)&nbsp;kg&nbsp;m\(^{-3}\)，摩尔质量 \(M=26{,}98\)&nbsp;g&nbsp;mol\(^{-1}\)。阿伏伽德罗常数 \(N_A=6{,}02\times10^{23}\)&nbsp;mol\(^{-1}\)。
{: .zh }

1. Déterminez \(n\), le nombre d'électrons libres par unité de volume.

    求单位体积内的自由电子数 \(n\)。
    {: .zh }

2. On considère un fil d'aluminium cylindrique de rayon \(r=0{,}7\)&nbsp;mm et de longueur \(L=3\)&nbsp;m, traversé par un courant uniforme et constant de \(10\)&nbsp;A. Combien de temps faut-il à un électron (en moyenne) pour traverser toute la longueur du fil ?

    考虑半径 \(r=0{,}7\)&nbsp;mm、长度 \(L=3\)&nbsp;m 的圆柱形铝导线，通过 \(10\)&nbsp;A 的均匀恒定电流。一个电子（平均而言）穿过整根导线需要多长时间？
    {: .zh }

3. On rappelle la conductivité de l'aluminium \(\sigma=3{,}5\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\). En déduire le temps moyen \(\tau\) entre les collisions des électrons avec le noyau des atomes.

    已知铝的电导率 \(\sigma=3{,}5\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\)。由此求电子与原子核碰撞之间的平均时间 \(\tau\)。
    {: .zh }

4. Calculer le module du champ électrique \(\vec{E}\) et déterminer son sens par rapport au courant électrique.

    计算电场 \(\vec{E}\) 的大小，并确定其相对于电流的方向。
    {: .zh }

!!! sol ""

    1. Chaque atome d'aluminium fournit trois électrons libres. Le nombre d'atomes par unité de volume vaut \(\rho_m N_A/M\) ; on en déduit

        每个铝原子提供三个自由电子。单位体积内的原子数为 \(\rho_m N_A/M\)，由此得
        {: .zh }

        \[
        n=3\,\frac{\rho_m N_A}{M}
        =3\times\frac{2{,}70\times10^{3}\times6{,}02\times10^{23}}{26{,}98\times10^{-3}}
        \approx1{,}81\times10^{29}\ \mathrm{m^{-3}}.
        \]

        Le nombre volumique d'électrons libres dans l'aluminium est donc de l'ordre de \(1{,}8\times10^{29}\)&nbsp;m\(^{-3}\).

        因此铝中自由电子的体密度约为 \(1{,}8\times10^{29}\)&nbsp;m\(^{-3}\)。
        {: .zh }

    2. La section du fil vaut

        导线的截面积为
        {: .zh }

        \[
        S=\pi r^2=\pi\,(0{,}7\times10^{-3})^2
        \approx1{,}54\times10^{-6}\ \mathrm{m^2}.
        \]

        La densité de courant est alors

        于是电流密度为
        {: .zh }

        \[
        J=\frac{I}{S}
        =\frac{10}{1{,}54\times10^{-6}}
        \approx6{,}50\times10^{6}\ \mathrm{A\,m^{-2}}.
        \]

        La vitesse de dérive s'obtient avec \(J=nev_d\) :

        由 \(J=nev_d\) 得到漂移速度：
        {: .zh }

        \[
        v_d=\frac{J}{ne}
        =\frac{6{,}50\times10^{6}}{1{,}81\times10^{29}\times1{,}60\times10^{-19}}
        \approx2{,}25\times10^{-4}\ \mathrm{m\,s^{-1}}.
        \]

        Le temps mis pour parcourir la longueur \(L\) est donc

        穿过长度 \(L\) 所需的时间为
        {: .zh }

        \[
        t=\frac{L}{v_d}
        =\frac{3}{2{,}25\times10^{-4}}
        \approx1{,}33\times10^{4}\ \mathrm{s}
        \approx3\ \mathrm{h}\ 43\ \mathrm{min}.
        \]

        Un électron met donc plusieurs heures pour traverser le fil, ce qui confirme la réponse à la question 2 de l'exercice 1 : l'éclairage instantané d'une ampoule ne vient pas d'un transport rapide des électrons, mais de la propagation quasi instantanée du champ électrique.

        因此一个电子需要数小时才能穿过导线，这印证了练习 1 第 2 问的回答：灯泡瞬间发光并非因为电子被快速输运，而是因为电场几乎瞬间传播。
        {: .zh }

    3. La loi d'Ohm microscopique s'écrit \(J=\sigma E\) et, dans le modèle de Drude, la conductivité vaut

        微观欧姆定律为 \(J=\sigma E\)，而在 Drude 模型中电导率为
        {: .zh }

        \[
        \sigma=\frac{ne^2\tau}{m_e}.
        \]

        On en déduit le temps moyen entre deux collisions :

        由此得到两次碰撞之间的平均时间：
        {: .zh }

        \[
        \tau=\frac{\sigma m_e}{ne^2}
        =\frac{3{,}5\times10^{7}\times9{,}11\times10^{-31}}
               {1{,}81\times10^{29}\times(1{,}60\times10^{-19})^2}
        \approx6{,}9\times10^{-15}\ \mathrm{s}.
        \]

        On retrouve l'ordre de grandeur habituel des temps de relaxation dans les métaux (\(10^{-14}\) à \(10^{-15}\)&nbsp;s).

        这与金属中常见的弛豫时间量级（\(10^{-14}\) 至 \(10^{-15}\)&nbsp;s）一致。
        {: .zh }

    4. Le module du champ électrique se déduit de \(J=\sigma E\) :

        电场大小由 \(J=\sigma E\) 得到：
        {: .zh }

        \[
        E=\frac{J}{\sigma}
        =\frac{6{,}50\times10^{6}}{3{,}5\times10^{7}}
        \approx1{,}86\times10^{-1}\ \mathrm{V\,m^{-1}}.
        \]

        Comme \(\vec{J}=\sigma\vec{E}\) avec \(\sigma>0\), le champ électrique est orienté <strong>dans le même sens que la densité de courant</strong>, c'est-à-dire dans le sens conventionnel du courant (du potentiel le plus haut vers le potentiel le plus bas). Il est donc <strong>opposé au mouvement des électrons</strong>.

        由于 \(\vec{J}=\sigma\vec{E}\) 且 \(\sigma>0\)，电场与<strong>电流密度同向</strong>，即沿电流的约定方向（从高电势指向低电势）。因此电场<strong>与电子运动方向相反</strong>。
        {: .zh }

        <strong>Remarque.</strong> La tension correspondante aux bornes du fil vaut \(U=EL\approx0{,}56\)&nbsp;V ; le champ macroscopique est donc très faible, quoique suffisant pour assurer la dérive des électrons.

        <strong>注。</strong>导线两端的相应电压为 \(U=EL\approx0{,}56\)&nbsp;V；宏观电场很弱，但足以驱动电子漂移。
        {: .zh }

!!! warning "Vocabulaire clé &nbsp;&nbsp; 重点词汇<br><span class='zh-title'>练习 2 核心术语</span>"

    - <strong>masse volumique</strong>：密度（体积质量）
    - <strong>masse molaire</strong>：摩尔质量
    - <strong>constante d'Avogadro</strong>：阿伏伽德罗常数
    - <strong>nombre d'électrons libres par unité de volume</strong>：单位体积自由电子数
    - <strong>section</strong>：截面积
    - <strong>vitesse de dérive</strong>：漂移速度
    - <strong>temps moyen entre deux collisions</strong>：两次碰撞间的平均时间
    - <strong>module du champ électrique</strong>：电场大小
    - <strong>sens conventionnel du courant</strong>：电流的约定方向

## Exercice 3 : Mouvement des électrons dans un champ électrique variable <span class="heading-zh">练习 3：变化电场中电子的运动</span>

Un conducteur métallique est soumis à un champ électrique uniforme \(\vec{E}=E(t)\vec{n}\). \(E(t)\) croît linéairement jusqu'à \(E_0\) pour \(0\leqslant t\leqslant T\), puis est nul pour \(t\geqslant T\).

金属导体受到均匀电场 \(\vec{E}=E(t)\vec{n}\) 的作用。\(E(t)\) 在 \(0\leqslant t\leqslant T\) 内线性增大到 \(E_0\)，之后为零。
{: .zh }

\[
E(t)=
\begin{cases}
E_0\,\dfrac{t}{T}, & 0\leqslant t\leqslant T,\\[6pt]
0, & t>T.
\end{cases}
\]

\(T\) et \(E_0\) sont des constantes strictement positives. Les porteurs de charge sont des électrons de masse \(m_e\) et de charge \(q=-e\).

\(T\) 与 \(E_0\) 为严格正的常数。载流子是质量为 \(m_e\)、电荷为 \(q=-e\) 的电子。
{: .zh }

### 3.1　Étude du mouvement <span class="heading-zh">运动研究</span>

Dans un premier temps, on néglige les collisions entre les électrons et le noyau des atomes.

首先忽略电子与原子核之间的碰撞。
{: .zh }

1. Déterminer l'accélération des électrons en fonction de \(q\), \(m_e\) et \(\vec{E}\).

    用 \(q\)、\(m_e\) 和 \(\vec{E}\) 表示电子的加速度。
    {: .zh }

2. Déterminer leur vitesse \(\vec{v}\) en fonction du temps. On considère leur vitesse initiale nulle.

    求速度 \(\vec{v}(t)\)。设初速度为零。
    {: .zh }

!!! sol ""

    1. La seule force est la force électrique \(\vec{F}=q\vec{E}\) (les collisions sont négligées). Le principe fondamental de la dynamique donne \(m_e\vec{a}=q\vec{E}\), soit

        唯一的力是电场力 \(\vec{F}=q\vec{E}\)（忽略碰撞）。牛顿第二定律给出 \(m_e\vec{a}=q\vec{E}\)，即
        {: .zh }

        \[
        \vec{a}(t)=\frac{q}{m_e}\vec{E}(t)
        =\frac{qE_0}{m_eT}\,t\,\vec{n}.
        \]

        Avec \(q=-e<0\), l'accélération est opposée à \(\vec{n}\) : les électrons sont accélérés dans le sens opposé au champ.

        由于 \(q=-e<0\)，加速度与 \(\vec{n}\) 相反：电子沿与电场相反的方向加速。
        {: .zh }

    2. En intégrant par rapport au temps et en utilisant la vitesse initiale nulle \(\vec{v}(0)=\vec{0}\) :

        对时间积分，并利用零初速度 \(\vec{v}(0)=\vec{0}\)：
        {: .zh }

        \[
        \vec{v}(t)=\int_0^t\vec{a}(t')\,\mathrm{d}t'
        =\frac{qE_0}{2m_eT}\,t^2\,\vec{n}.
        \]

        La vitesse croît quadratiquement avec le temps, dans le sens opposé au champ pour un électron.

        速度随时间二次增长；对电子而言，其方向与电场相反。
        {: .zh }

### 3.2　Modèle de Drude <span class="heading-zh">Drude 模型</span>

Dans un métal réel, les électrons subissent des collisions avec le noyau des atomes. On note \(\Gamma\vec{v}\) la force de frottement entre les électrons et les noyaux, s'opposant à la force \(\vec{F}\) créée par le champ électrique \(\vec{E}\) sur les électrons.

在真实金属中，电子会与原子核发生碰撞。记 \(\Gamma\vec{v}\) 为电子与原子核之间的摩擦力，它与电场 \(\vec{E}\) 对电子产生的力 \(\vec{F}\) 方向相反。
{: .zh }

**3.** Donner la relation entre l'accélération, la force de frottement \(\Gamma\vec{v}\), \(q\), \(m_e\) et \(\vec{E}\), sous la forme d'une équation différentielle du premier ordre. Pour rappel, cette équation doit être de la forme \(v'(t)+a(t)v(t)=b(t)\). On considère aussi une constante de temps \(\tau=\dfrac{m_e}{\Gamma}\).

**3.** 给出加速度、摩擦力 \(\Gamma\vec{v}\)、\(q\)、\(m_e\) 与 \(\vec{E}\) 之间的关系，写成一阶微分方程。该方程应具有形式 \(v'(t)+a(t)v(t)=b(t)\)。并设时间常数 \(\tau=\dfrac{m_e}{\Gamma}\)。
{: .zh }

**4.** Déterminer l'expression de la vitesse \(\vec{v}\) de l'électron pour \(0\leqslant t\leqslant T\) : on cherche une solution générale de la forme \(\vec{v}=\vec{v}_h+\vec{v}_p\).

**4.** 求 \(0\leqslant t\leqslant T\) 时电子速度 \(\vec{v}\) 的表达式：寻求 \(\vec{v}=\vec{v}_h+\vec{v}_p\) 形式的通解。
{: .zh }

**(a)** Donner la solution \(v_h(t)\) de l'équation homogène \(v'(t)+a(t)v(t)=0\).

**（a）** 给出齐次方程 \(v'(t)+a(t)v(t)=0\) 的解 \(v_h(t)\)。
{: .zh }

**(b)** Le second membre \(b(t)\) de l'équation est une fonction linéaire. Donner une solution particulière \(v_p(t)\) linéaire de la forme \(v_p(t)=A+Bt\), permettant de résoudre l'équation.

**（b）** 方程右端 \(b(t)\) 为线性函数。给出形如 \(v_p(t)=A+Bt\) 的线性特解，用于求解该方程。
{: .zh }

<strong>(c\)</strong> Utiliser les conditions initiales pour déterminer la constante indéterminée, et donner la forme générale de la solution \(v(t)\).

**（c）** 利用初始条件确定待定常数，并给出通解 \(v(t)\)。
{: .zh }

**5.** Déterminer l'expression de la vitesse \(\vec{v}\) des électrons pour \(t>T\).

**5.** 求 \(t>T\) 时电子速度 \(\vec{v}\) 的表达式。
{: .zh }

!!! sol ""

    **3.** En présence de collisions, on ajoute la force de frottement \(\Gamma\vec{v}\), opposée au mouvement. Le principe fondamental de la dynamique s'écrit

    **3.** 考虑碰撞时，加入与运动方向相反的摩擦力 \(\Gamma\vec{v}\)。牛顿第二定律写作
    {: .zh }

    \[
    m_e\frac{\mathrm{d}\vec{v}}{\mathrm{d}t}
    =q\vec{E}(t)-\Gamma\vec{v}.
    \]

    En divisant par \(m_e\) et en posant \(\tau=m_e/\Gamma\), on obtient l'équation différentielle du premier ordre demandée :

    除以 \(m_e\) 并令 \(\tau=m_e/\Gamma\)，得到所要求的一阶微分方程：
    {: .zh }

    \[
    \frac{\mathrm{d}\vec{v}}{\mathrm{d}t}+\frac{1}{\tau}\vec{v}
    =\frac{q}{m_e}\vec{E}(t).
    \]

    Projetée sur \(\vec{n}\), elle prend bien la forme \(v'(t)+a(t)v(t)=b(t)\) avec

    将其投影到 \(\vec{n}\) 上，确实具有 \(v'(t)+a(t)v(t)=b(t)\) 的形式，其中
    {: .zh }

    \[
    a(t)=\frac{1}{\tau},
    \qquad
    b(t)=\frac{qE_0}{m_eT}\,t.
    \]

    **4. (a)** L'équation homogène est \(v_h'+\dfrac{v_h}{\tau}=0\), dont la solution est

    **4.（a）** 齐次方程为 \(v_h'+\dfrac{v_h}{\tau}=0\)，其解为
    {: .zh }

    \[
    v_h(t)=C\,e^{-t/\tau},
    \]

    où \(C\) est une constante arbitraire.

    其中 \(C\) 为任意常数。
    {: .zh }

    **(b)** On cherche une solution particulière linéaire \(v_p(t)=A+Bt\). En la reportant dans l'équation :

    **（b）** 寻求线性特解 \(v_p(t)=A+Bt\)。代入方程得
    {: .zh }

    \[
    B+\frac{A+Bt}{\tau}=\frac{qE_0}{m_eT}\,t.
    \]

    En identifiant les coefficients en \(t^0\) et en \(t^1\) :

    比较 \(t^0\) 与 \(t^1\) 的系数：
    {: .zh }

    \[
    \frac{B}{\tau}=\frac{qE_0}{m_eT}
    \ \Longrightarrow\
    B=\frac{qE_0\tau}{m_eT},
    \qquad
    B+\frac{A}{\tau}=0
    \ \Longrightarrow\
    A=-\frac{qE_0\tau^2}{m_eT}.
    \]

    Donc

    因此
    {: .zh }

    \[
    v_p(t)=\frac{qE_0\tau}{m_eT}\,(t-\tau).
    \]

    <strong>(c\)</strong> La solution générale est \(v=v_h+v_p\) :

    **（c）** 通解为 \(v=v_h+v_p\)：
    {: .zh }

    \[
    v(t)=C\,e^{-t/\tau}+\frac{qE_0\tau}{m_eT}\,(t-\tau).
    \]

    La condition initiale \(v(0)=0\) donne

    初始条件 \(v(0)=0\) 给出
    {: .zh }

    \[
    0=C-\frac{qE_0\tau^2}{m_eT}
    \ \Longrightarrow\
    C=\frac{qE_0\tau^2}{m_eT}.
    \]

    Finalement, pour \(0\leqslant t\leqslant T\) :

    最终，对 \(0\leqslant t\leqslant T\)：
    {: .zh }

    \[
    v(t)=\frac{qE_0\tau}{m_eT}
    \left[t-\tau\left(1-e^{-t/\tau}\right)\right].
    \]

    On vérifie que pour \(t\ll\tau\) (collisions négligeables), un développement limité redonne \(v(t)\simeq\dfrac{qE_0}{2m_eT}t^2\), en accord avec la question 2.

    可以验证：当 \(t\ll\tau\)（碰撞可忽略）时，泰勒展开给出 \(v(t)\simeq\dfrac{qE_0}{2m_eT}t^2\)，与第 2 问一致。
    {: .zh }

    **5.** Pour \(t>T\), le champ est nul : l'équation devient \(v'+\dfrac{v}{\tau}=0\), donc

    **5.** 当 \(t>T\) 时电场为零：方程变为 \(v'+\dfrac{v}{\tau}=0\)，因此
    {: .zh }

    \[
    v(t)=C'\,e^{-t/\tau}.
    \]

    La vitesse est continue à \(t=T\) (la force reste finie, il n'y a pas d'impulsion infinie), donc \(v(T^-)=v(T^+)\). En notant

    速度在 \(t=T\) 处连续（力保持有限，不存在无穷大冲量），故 \(v(T^-)=v(T^+)\)。记
    {: .zh }

    \[
    v(T)=\frac{qE_0\tau}{m_eT}
    \left[T-\tau\left(1-e^{-T/\tau}\right)\right],
    \]

    on obtient \(C'=v(T)\,e^{T/\tau}\), soit

    得到 \(C'=v(T)\,e^{T/\tau}\)，即
    {: .zh }

    \[
    v(t)=v(T)\,e^{-(t-T)/\tau}
    =\frac{qE_0\tau}{m_eT}
    \left[T-\tau\left(1-e^{-T/\tau}\right)\right]
    e^{-(t-T)/\tau},
    \qquad t\geqslant T.
    \]

    La vitesse décroît exponentiellement vers zéro : après l'arrêt du champ, le frottement dissipe la quantité de mouvement acquise par les électrons.

    速度指数衰减趋于零：电场消失后，摩擦力耗散了电子所获得的动量。
    {: .zh }

!!! warning "Vocabulaire clé &nbsp;&nbsp; 重点词汇<br><span class='zh-title'>练习 3 核心术语</span>"

    - <strong>accélération</strong>：加速度
    - <strong>champ électrique variable</strong>：变化电场
    - <strong>équation différentielle du premier ordre</strong>：一阶微分方程
    - <strong>solution homogène</strong>：齐次解
    - <strong>solution particulière</strong>：特解
    - <strong>condition initiale</strong>：初始条件
    - <strong>constante de temps</strong>：时间常数
    - <strong>force de frottement</strong>：摩擦力
    - <strong>continuité de la vitesse</strong>：速度连续性
    - <strong>dissiper la quantité de mouvement</strong>：耗散动量

## Exercice 4 : Expérience de Tolman et Stewart <span class="heading-zh">练习 4：Tolman–Stewart 实验</span>

L'expérience de Tolman et Stewart fut mise au point afin de vérifier que les électrons étaient bien les porteurs de charges mobiles impliqués dans la conductivité des métaux. Cette expérience consiste à mettre un anneau métallique en rotation autour de son axe de révolution à la vitesse angulaire \(\omega\).

Tolman–Stewart 实验旨在验证电子确实是参与金属导电的可移动电荷载流子。实验将金属环绕其旋转轴以角速度 \(\omega\) 旋转。
{: .zh }

À \(t=0\), l'anneau est brusquement stoppé et pour \(t>0\), un courant \(i(t)\) décroissant est observé dans celui-ci. L'anneau est en cuivre, de conductivité \(\sigma(\mathrm{Cu})=5{,}9\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\) et de temps de relaxation \(\tau=2{,}4\times10^{-14}\)&nbsp;s, de rayon \(a\) et de section \(S\) suffisamment petite pour pouvoir négliger tout mouvement radial des porteurs de charge. De plus on note \(n\) la densité volumique des porteurs de charges dans l'anneau.

在 \(t=0\) 时环被突然制动；对 \(t>0\)，在环中观察到衰减电流 \(i(t)\)。环由铜制成，电导率 \(\sigma(\mathrm{Cu})=5{,}9\times10^{7}\)&nbsp;S&nbsp;m\(^{-1}\)，弛豫时间 \(\tau=2{,}4\times10^{-14}\)&nbsp;s，半径 \(a\)，截面 \(S\) 足够小，可忽略载流子的径向运动。记 \(n\) 为环中载流子的体密度。
{: .zh }

1. En utilisant le modèle de Drude, déterminer la vitesse \(v(t)\) des porteurs de charge en fonction de \(a\), \(\omega\), \(t\) et \(\tau\).

    利用 Drude 模型，求载流子速度 \(v(t)\)（用 \(a\)、\(\omega\)、\(t\)、\(\tau\) 表示）。
    {: .zh }

2. En déduire le courant \(i(t)\) circulant dans l'anneau pour \(t>0\).

    由此推导 \(t>0\) 时环中的电流 \(i(t)\)。
    {: .zh }

3. Tolman et Stewart ont mesuré la charge électrique totale \(Q\) circulant dans le circuit de \(t=0\) à \(t\to+\infty\). Déterminer cette charge \(Q\) en fonction de \(\sigma\), \(a\), \(S\), \(\omega\), \(m\) et \(q\). Montrer que le rapport \(\dfrac{Q}{aS\omega}\) ne doit dépendre que de caractéristiques intrinsèques des porteurs de charge.

    Tolman 和 Stewart 测量了从 \(t=0\) 到 \(t\to+\infty\) 流过电路的总电荷 \(Q\)。求 \(Q\)（用 \(\sigma\)、\(a\)、\(S\)、\(\omega\)、\(m\)、\(q\) 表示）。证明比值 \(\dfrac{Q}{aS\omega}\) 只依赖于载流子的内禀特性。
    {: .zh }

!!! sol ""

    1. Après l'arrêt brutal de l'anneau à \(t=0\), le réseau cristallin est immobile dans le référentiel du laboratoire. Par inertie, les électrons conservent à \(t=0\) la vitesse tangentielle qu'ils avaient avec l'anneau, soit \(v(0)=a\omega\). Pour \(t>0\), la seule force agissant sur eux dans le référentiel du laboratoire est la force de frottement de Drude \(-\Gamma\vec{v}\) (il n'y a plus de champ électrique appliqué). Le principe fondamental de la dynamique s'écrit

        在 \(t=0\) 环被突然制动后，晶格在实验室参考系中静止。由于惯性，电子在 \(t=0\) 时保留其随环运动时的切向速度，即 \(v(0)=a\omega\)。对 \(t>0\)，在实验室参考系中作用在电子上的唯一力是 Drude 摩擦力 \(-\Gamma\vec{v}\)（不再有外加电场）。牛顿第二定律写作
        {: .zh }

        \[
        m_e\frac{\mathrm{d}v}{\mathrm{d}t}=-\Gamma v
        \ \Longrightarrow\
        \frac{\mathrm{d}v}{\mathrm{d}t}+\frac{v}{\tau}=0
        \ \Longrightarrow\
        v(t)=a\omega\,e^{-t/\tau}.
        \]

        La vitesse est tangente à l'anneau, dans le sens de la rotation initiale, et décroît exponentiellement avec la constante de temps \(\tau\).

        速度沿环的切线方向，指向初始旋转方向，并以时间常数 \(\tau\) 指数衰减。
        {: .zh }

    2. La densité de courant s'écrit \(\vec{J}=nq\vec{v}\) avec \(q=-e<0\). L'intensité du courant circulant dans l'anneau vaut donc

        电流密度为 \(\vec{J}=nq\vec{v}\)，其中 \(q=-e<0\)。因此环中电流的大小为
        {: .zh }

        \[
        i(t)=neS\,v(t)=neSa\omega\,e^{-t/\tau}.
        \]

        Son sens est opposé au mouvement des électrons, c'est-à-dire opposé au sens de rotation initial de l'anneau. Le courant décroît exponentiellement et s'annule lorsque les électrons ont été freinés par le réseau.

        其方向与电子运动方向相反，即与环的初始旋转方向相反。电流指数衰减，当电子被晶格制动后趋于零。
        {: .zh }

    3. La charge totale ayant traversé une section de l'anneau est

        穿过环某一截面的总电荷为
        {: .zh }

        \[
        Q=\int_0^{+\infty}i(t)\,\mathrm{d}t
        =neSa\omega\int_0^{+\infty}e^{-t/\tau}\,\mathrm{d}t
        =neSa\omega\,\tau.
        \]

        La conductivité de Drude s'écrit \(\sigma=\dfrac{nq^2\tau}{m}\) ; avec \(q=-e\), elle donne \(ne\tau=\dfrac{\sigma m}{e}\). En reportant :

        Drude 电导率为 \(\sigma=\dfrac{nq^2\tau}{m}\)；对 \(q=-e\)，它给出 \(ne\tau=\dfrac{\sigma m}{e}\)。代入得
        {: .zh }

        \[
        Q=\frac{\sigma m}{e}\,Sa\omega.
        \]

        Plus généralement, en gardant la charge algébrique \(q\) du porteur (\(q=-e\) pour l'électron), \(\sigma=\dfrac{nq^2\tau}{m}\) donne \(nq\tau=\dfrac{\sigma m}{q}\), d'où

        更一般地，保留载流子的代数值电荷 \(q\)（电子 \(q=-e\)），由 \(\sigma=\dfrac{nq^2\tau}{m}\) 得 \(nq\tau=\dfrac{\sigma m}{q}\)，于是
        {: .zh }

        \[
        Q=nqSa\omega\tau=\frac{\sigma m}{q}\,Sa\omega
        \qquad\Longrightarrow\qquad
        \frac{Q}{aS\omega}=nq\tau=\frac{\sigma m}{q}.
        \]

        Le rapport \(Q/(aS\omega)\) ne dépend que de \(n\), \(q\), \(\tau\) et \(m\), c'est-à-dire de caractéristiques intrinsèques des porteurs de charge ; il est indépendant de la géométrie de l'anneau et de sa vitesse de rotation. La mesure de \(Q\), \(a\), \(S\), \(\omega\) et \(\sigma\) permet donc de déterminer le rapport \(q/m\) : c'est ainsi que Tolman et Stewart ont confirmé que les porteurs sont des électrons.

        比值 \(Q/(aS\omega)\) 只依赖于 \(n\)、\(q\)、\(\tau\)、\(m\)，即载流子的内禀特性；它与环的几何尺寸和转速无关。因此，测量 \(Q\)、\(a\)、\(S\)、\(\omega\)、\(\sigma\) 即可确定荷质比 \(q/m\)：Tolman 和 Stewart 正是由此确认载流子是电子。
        {: .zh }

        Application numérique pour le cuivre (en valeur absolue) :

        铜的数值计算（取绝对值）：
        {: .zh }

        \[
        \frac{|Q|}{aS\omega}
        =\frac{\sigma m_e}{e}
        =\frac{5{,}9\times10^{7}\times9{,}11\times10^{-31}}{1{,}60\times10^{-19}}
        \approx3{,}4\times10^{-4}\ \mathrm{C\,s\,m^{-3}}.
        \]

!!! warning "Vocabulaire clé &nbsp;&nbsp; 重点词汇<br><span class='zh-title'>练习 4 核心术语</span>"

    - <strong>anneau métallique</strong>：金属环
    - <strong>vitesse angulaire</strong>：角速度
    - <strong>temps de relaxation</strong>：弛豫时间
    - <strong>mouvement radial</strong>：径向运动
    - <strong>densité volumique des porteurs</strong>：载流子体密度
    - <strong>courant décroissant</strong>：衰减电流
    - <strong>charge totale</strong>：总电荷
    - <strong>caractéristiques intrinsèques</strong>：内禀特性
    - <strong>rapport \(q/m\)</strong>：荷质比

## Exercice 5 : Approche probabiliste du modèle de Drude <span class="heading-zh">练习 5：Drude 模型的概率方法</span>

En 1900, Paul Drude proposa un modèle permettant d'expliquer les propriétés de conduction électrique et thermique des métaux. Dans ce modèle, on considère que les électrons de conduction forment un gaz de particules classiques de masse \(m\) et de charge \(-e\).

1900 年，Paul Drude 提出了一个解释金属导电与导热性质的模型。该模型中，传导电子构成由质量 \(m\)、电荷 \(-e\) 的经典粒子组成的气体。
{: .zh }

Les électrons effectuent des collisions, considérées comme instantanées. Ils sont supposés indépendants (pas d'interaction électron-électron entre les collisions) et libres (pas d'interaction avec les ions entre les collisions). Drude attribua les collisions aux chocs entre les électrons et les ions, plutôt qu'aux chocs entre les électrons entre eux comme pour un gaz ordinaire. À l'issue d'une collision, la vitesse de l'électron a une direction aléatoire (pas de direction privilégiée), et une valeur liée à la température à l'endroit où a lieu la collision.

电子发生可视为瞬时的碰撞。假设它们彼此独立（两次碰撞之间无电子–电子相互作用）且自由（两次碰撞之间与离子无相互作用）。Drude 将碰撞归因于电子与离子的碰撞，而非像普通气体那样归因于电子之间的碰撞。碰撞后，电子速度方向随机（无优先方向），其大小与碰撞发生处的温度有关。
{: .zh }

Le paramètre fondamental du modèle de Drude est le temps de collision \(\tau\) ou temps de relaxation. Il représente la durée moyenne entre deux collisions. En d'autres termes, pour un électron donné, la probabilité de subir une collision pendant un intervalle de temps infinitésimal \(\mathrm{d}t\) est \(\dfrac{\mathrm{d}t}{\tau}\).

Drude 模型的基本参数是碰撞时间 \(\tau\)（或弛豫时间），表示两次碰撞之间的平均时长。换言之，对给定电子，在无穷小时间间隔 \(\mathrm{d}t\) 内发生碰撞的概率为 \(\dfrac{\mathrm{d}t}{\tau}\)。
{: .zh }

1. Montrer que pour un électron donné observé à partir du temps \(t=0\), la probabilité \(P(t)\) de ne pas subir de collision avant l'instant \(t\) est \(e^{-t/\tau}\).

    证明：对从 \(t=0\) 开始观察的给定电子，在 \(t\) 之前不发生碰撞的概率 \(P(t)=e^{-t/\tau}\)。
    {: .zh }

2. Quelle est la probabilité \(\mathrm{d}p(t)\) pour un électron ayant subi une collision à l'instant \(t=0\) de subir sa prochaine collision entre \(t\) et \(t+\mathrm{d}t\) ?

    对在 \(t=0\) 刚发生碰撞的电子，其在 \(t\) 与 \(t+\mathrm{d}t\) 之间发生下一次碰撞的概率 \(\mathrm{d}p(t)\) 是多少？
    {: .zh }

3. Retrouver que \(\tau\) est bien la durée moyenne entre deux collisions. On pourra utiliser le résultat suivant :

    重新证明 \(\tau\) 确实是两次碰撞之间的平均时长。可用如下结果：
    {: .zh }

    \[
    \int_0^{+\infty}x^n e^{-ax}\,\mathrm{d}x=\frac{n!}{a^{n+1}}
    \]

    avec \(n>0\) et \(a>0\).

    其中 \(n>0\)，\(a>0\)。
    {: .zh }

4. On soumet le métal à un champ de force extérieur, et on note \(\vec{F}(t)\) la force subie par chaque électron.

    使金属受到外力场作用，记每个电子所受的力为 \(\vec{F}(t)\)。
    {: .zh }

    Établir l'équation différentielle vérifiée par la vitesse moyenne \(\vec{v}^{\,*}\) d'un électron.

    建立电子平均速度 \(\vec{v}^{\,*}\) 所满足的微分方程。
    {: .zh }

    On pourra raisonner sur la quantité de mouvement moyenne par électron \(\vec{p}^{\,*}=m\vec{v}^{\,*}\), définie par \(\vec{p}^{\,*}=\dfrac{1}{N_0}\vec{p}_{tot}\) où \(\vec{p}_{tot}\) est la quantité de mouvement totale du système d'électrons et \(N_0\) le nombre total d'électrons.

    可基于每个电子的平均动量 \(\vec{p}^{\,*}=m\vec{v}^{\,*}\) 进行推理，其定义为 \(\vec{p}^{\,*}=\dfrac{1}{N_0}\vec{p}_{tot}\)，其中 \(\vec{p}_{tot}\) 为电子系统的总动量，\(N_0\) 为总电子数。
    {: .zh }

!!! sol ""

    1. Soit \(P(t)\) la probabilité qu'un électron n'ait subi aucune collision avant l'instant \(t\). Pendant l'intervalle infinitésimal \([t,t+\mathrm{d}t]\), la probabilité conditionnelle de subir une collision (sachant qu'aucune n'a eu lieu avant \(t\)) vaut \(\mathrm{d}t/\tau\). On a donc

        设 \(P(t)\) 为电子在 \(t\) 之前未发生任何碰撞的概率。在无穷小区间 \([t,t+\mathrm{d}t]\) 内，发生碰撞的条件概率（已知 \(t\) 之前未发生碰撞）为 \(\mathrm{d}t/\tau\)。因此
        {: .zh }

        \[
        P(t+\mathrm{d}t)=P(t)\left(1-\frac{\mathrm{d}t}{\tau}\right).
        \]

        En développant au premier ordre, on obtient l'équation différentielle

        展开到一阶，得到微分方程
        {: .zh }

        \[
        \frac{\mathrm{d}P}{\mathrm{d}t}=-\frac{P(t)}{\tau}.
        \]

        Avec la condition initiale \(P(0)=1\) (aucune collision à l'instant initial), la solution est

        结合初始条件 \(P(0)=1\)（初始时刻尚未碰撞），解为
        {: .zh }

        \[
        P(t)=e^{-t/\tau}.
        \]

    2. Pour que la prochaine collision ait lieu entre \(t\) et \(t+\mathrm{d}t\), l'électron doit (i) ne pas collisionner jusqu'à l'instant \(t\), puis (ii) collisionner pendant \(\mathrm{d}t\). Ces deux événements sont indépendants, donc

        要使下一次碰撞发生在 \(t\) 与 \(t+\mathrm{d}t\) 之间，电子必须 (i) 直到 \(t\) 都未碰撞，然后 (ii) 在 \(\mathrm{d}t\) 内碰撞。这两个事件相互独立，因此
        {: .zh }

        \[
        \mathrm{d}p(t)=P(t)\,\frac{\mathrm{d}t}{\tau}
        =\frac{1}{\tau}\,e^{-t/\tau}\,\mathrm{d}t.
        \]

        \(\mathrm{d}p(t)\) est la probabilité (différentielle) que la première collision ait lieu entre \(t\) et \(t+\mathrm{d}t\).

        \(\mathrm{d}p(t)\) 即首次碰撞发生在 \(t\) 与 \(t+\mathrm{d}t\) 之间的（微分）概率。
        {: .zh }

    3. La durée moyenne entre deux collisions est l'espérance mathématique de \(t\) :

        两次碰撞之间的平均时长是 \(t\) 的数学期望：
        {: .zh }

        \[
        \langle t\rangle=\int_0^{+\infty}t\,\mathrm{d}p(t)
        =\frac{1}{\tau}\int_0^{+\infty}t\,e^{-t/\tau}\,\mathrm{d}t.
        \]

        Avec la formule donnée (\(n=1\), \(a=1/\tau\)) :

        利用给定公式（\(n=1\)，\(a=1/\tau\)）：
        {: .zh }

        \[
        \langle t\rangle
        =\frac{1}{\tau}\cdot\frac{1!}{(1/\tau)^2}
        =\tau.
        \]

        On retrouve bien que \(\tau\) est la durée moyenne entre deux collisions.

        由此确实得到 \(\tau\) 为两次碰撞之间的平均时长。
        {: .zh }

    4. Effectuons un bilan de quantité de mouvement pour l'ensemble des \(N_0\) électrons entre \(t\) et \(t+\mathrm{d}t\). Chaque électron subit la force extérieure \(\vec{F}(t)\), ce qui augmente la quantité de mouvement totale de \(N_0\vec{F}(t)\,\mathrm{d}t\). Pendant le même intervalle, une fraction \(\mathrm{d}t/\tau\) des électrons subit une collision : après le choc, leur vitesse a une direction aléatoire, si bien que leur contribution à la quantité de mouvement moyenne dirigée s'annule. La quantité de mouvement totale perdue par collisions est donc \(\vec{p}_{tot}(t)\,\dfrac{\mathrm{d}t}{\tau}\). On obtient ainsi

        对全部 \(N_0\) 个电子在 \(t\) 与 \(t+\mathrm{d}t\) 之间作动量守恒分析。每个电子受外力 \(\vec{F}(t)\)，使总动量增加 \(N_0\vec{F}(t)\,\mathrm{d}t\)。同一时间间隔内，比例为 \(\mathrm{d}t/\tau\) 的电子发生碰撞：碰撞后速度方向随机，它们对平均定向动量的贡献为零。因此碰撞造成的总动量损失为 \(\vec{p}_{tot}(t)\,\dfrac{\mathrm{d}t}{\tau}\)。于是
        {: .zh }

        \[
        \vec{p}_{tot}(t+\mathrm{d}t)
        =\vec{p}_{tot}(t)+N_0\vec{F}(t)\,\mathrm{d}t
        -\vec{p}_{tot}(t)\,\frac{\mathrm{d}t}{\tau}.
        \]

        En divisant par \(\mathrm{d}t\) et en passant à la limite :

        除以 \(\mathrm{d}t\) 并取极限：
        {: .zh }

        \[
        \frac{\mathrm{d}\vec{p}_{tot}}{\mathrm{d}t}
        =N_0\vec{F}(t)-\frac{\vec{p}_{tot}(t)}{\tau}.
        \]

        En divisant par \(N_0\) et en utilisant \(\vec{p}^{\,*}=\vec{p}_{tot}/N_0\) :

        除以 \(N_0\)，并利用 \(\vec{p}^{\,*}=\vec{p}_{tot}/N_0\)：
        {: .zh }

        \[
        \frac{\mathrm{d}\vec{p}^{\,*}}{\mathrm{d}t}
        =\vec{F}(t)-\frac{\vec{p}^{\,*}}{\tau}
        \qquad\Longleftrightarrow\qquad
        \frac{\mathrm{d}\vec{v}^{\,*}}{\mathrm{d}t}
        +\frac{\vec{v}^{\,*}}{\tau}
        =\frac{\vec{F}(t)}{m}.
        \]

        C'est l'équation de Drude : le terme de frottement phénoménologique \(-\vec{p}^{\,*}/\tau\) est ici justifié par un raisonnement probabiliste. Pour une force électrique \(\vec{F}=q\vec{E}\), on retrouve

        这就是 Drude 方程：现象学摩擦力项 \(-\vec{p}^{\,*}/\tau\) 在此由概率论证得到。对电场力 \(\vec{F}=q\vec{E}\)，得到
        {: .zh }

        \[
        \frac{\mathrm{d}\vec{v}^{\,*}}{\mathrm{d}t}
        +\frac{\vec{v}^{\,*}}{\tau}
        =\frac{q}{m}\vec{E}(t).
        \]

        En régime permanent (\(\vec{F}\) constant, \(\mathrm{d}\vec{v}^{\,*}/\mathrm{d}t=\vec{0}\)), on obtient \(\vec{v}^{\,*}=\dfrac{\tau}{m}\vec{F}\), soit pour une force électrique \(\vec{v}^{\,*}=\dfrac{q\tau}{m}\vec{E}\). La densité de courant vaut alors \(\vec{J}=nq\vec{v}^{\,*}=\dfrac{nq^2\tau}{m}\vec{E}=\sigma\vec{E}\) : la loi d'Ohm microscopique est bien contenue dans ce modèle probabiliste.

        在稳态（\(\vec{F}\) 为常量，\(\mathrm{d}\vec{v}^{\,*}/\mathrm{d}t=\vec{0}\)）下，得到 \(\vec{v}^{\,*}=\dfrac{\tau}{m}\vec{F}\)；对电场力则有 \(\vec{v}^{\,*}=\dfrac{q\tau}{m}\vec{E}\)。此时电流密度为 \(\vec{J}=nq\vec{v}^{\,*}=\dfrac{nq^2\tau}{m}\vec{E}=\sigma\vec{E}\)：微观欧姆定律正包含在这一概率模型中。
        {: .zh }

!!! warning "Vocabulaire clé &nbsp;&nbsp; 重点词汇<br><span class='zh-title'>练习 5 核心术语</span>"

    - <strong>approche probabiliste</strong>：概率方法
    - <strong>gaz de particules classiques</strong>：经典粒子气体
    - <strong>collision instantanée</strong>：瞬时碰撞
    - <strong>temps de collision / de relaxation</strong>：碰撞时间 / 弛豫时间
    - <strong>probabilité conditionnelle</strong>：条件概率
    - <strong>durée moyenne entre deux collisions</strong>：两次碰撞间的平均时长
    - <strong>quantité de mouvement</strong>：动量
    - <strong>vitesse moyenne</strong>：平均速度
    - <strong>champ de force extérieur</strong>：外力场
    - <strong>régime permanent</strong>：稳态
