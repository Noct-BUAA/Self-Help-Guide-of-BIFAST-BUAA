---
title: Reading 1 课文对照翻译
comments: true
---

# Sustainable AI: AI for Sustainability and the Sustainability of AI

<div class="lecture-hero">
<p class="lecture-hero__fr">Reading 1 · Aimee van Wynsberghe · <em>AI and Ethics</em>, 2021</p>
<p class="lecture-badge">PART 2 · 英中对照</p>
<p class="lecture-hero__meta">可持续 AI：AI 的可持续性与面向可持续性的 AI</p>
</div>

!!! info "阅读说明"

    每段先列英文原文（段首方括号为对照编号），其下缩进、带深蓝竖条的小字号段落为中文翻译。原文中的文内引用编号（如 [17]）与脚注上标保留原样。

    打印版 PDF：[下载《学术英语阅读与写作 · Unit 1 期中复习讲义》PDF](../../../../../assets/files/学术英语阅读与写作_Unit1_期中复习讲义.pdf)

## Abstract　摘要

<span class="text-blue">[1]</span> While there is a growing effort towards AI for Sustainability (e.g., towards the sustainable development goals) it is time to move beyond that and to address the sustainability of developing and using AI systems. In this paper I propose a definition of Sustainable AI; Sustainable AI is a movement to foster change in the entire lifecycle of AI products (i.e., idea generation, training, re-tuning, implementation, governance) towards greater ecological integrity and social justice. As such, Sustainable AI is focused on more than AI applications; rather, it addresses the whole sociotechnical system of AI. I have suggested here that Sustainable AI is not about how to sustain the development of AI per say but it is about how to develop AI that is compatible with sustaining environmental resources for current and future generations; economic models for societies; and societal values that are fundamental to a given society. I have articulated that the phrase Sustainable AI be understood as having two branches; AI for sustainability and sustainability of AI (e.g., reduction of carbon emissions and computing power). I propose that Sustainable AI take sustainable development at the core of its definition with three accompanying tensions between AI innovation and equitable resource distribution; inter and intra-generational justice; and, between environment, society, and economy. This paper is not meant to engage with each of the three pillars of sustainability (i.e., social, economic, environment), and as such the pillars of sustainable AI. Rather, this paper is meant to inspire the reader, the policy maker, the AI ethicist, the AI developer to connect with the environment—to remember that there are environmental costs to AI. Further, to direct funding towards sustainable methods of AI.

尽管人们日益努力推动面向可持续性的 AI（AI for Sustainability，例如朝着可持续发展目标努力），但现在应当更进一步，关注开发和使用 AI 系统本身的可持续性。本文提出可持续 AI 的定义：可持续 AI 是一场推动 AI 产品全生命周期（即想法产生、训练、重新调优、实施、治理）变革的运动，目标是实现更高的生态完整性与社会正义。因此，可持续 AI 关注的不只是 AI 应用，而是 AI 的整个社会技术系统。本文指出，可持续 AI 并不是要维持 AI 本身的发展，而是要发展这样一种 AI：它与为当代人和后代人维持环境资源、维持社会经济发展模式，以及维持特定社会基本价值观相兼容。本文阐明，可持续 AI 这一表述应理解为两个分支：面向可持续性的 AI，以及 AI 的可持续性（例如减少碳排放和算力消耗）。我主张，可持续 AI 应以可持续发展为核心定义，并伴随三组张力：AI 创新与资源公平分配之间；代际与代内正义之间；以及环境、社会与经济之间。本文无意逐一讨论可持续性的三大支柱（即社会、经济、环境），因而也不逐一讨论可持续 AI 的支柱。相反，本文旨在启发读者、政策制定者、AI 伦理学家和 AI 开发者关注环境——记住 AI 是有环境代价的；并进一步引导资金投向可持续的 AI 方法。
{: .zh }

<span class="text-blue">[2]</span> <strong>Keywords:</strong> Sustainable AI, AI ethics, Sustainability, Responsible AI, Sustainable development

<strong>关键词：</strong>可持续 AI；AI 伦理；可持续性；负责任 AI；可持续发展
{: .zh }

## 1. Introduction　引言

<span class="text-blue">[3]</span> There is little doubt that Artificial Intelligence (AI) is, and will continue to, transform the world. However, the power for positive change that AI brings holds the possibility for negative impacts on society. The recent explosion of AI, made possible by ever-rising amounts of data and computing power, has given rise to the field of AI ethics—the study of ethical and societal issues facing developers, producers, consumers, citizens, policy makers, and civil society organizations. The first wave of AI ethics focused on what AI might do (e.g., Superintelligence and amounted to the ethics of fanciful scenarios of robot uprisings [6]. The second wave of AI ethics addressed the practical concerns of machine learning (ML) techniques the black-box algorithm and the problem of explainability [9, 16], the lack of equal representation in training data and the resulting biases in AI models [2, 7], and the increase in facial and emotion recognition systems infringing on citizen's rights (e.g., privacy) [4]. It is time to usher in the third wave of AI ethics, one that confronts the environmental disaster of our time head-on and actively seeks to engage academics, policy makers, AI developers and the general public with the environmental impact of AI.

毫无疑问，人工智能（AI）正在并将继续改变世界。然而，AI 所带来的积极变革力量，也可能对社会造成负面影响。近年来 AI 的爆发式增长——得益于数量不断攀升的数据和算力——催生了 AI 伦理学这一领域，即研究开发者、生产者、消费者、公民、政策制定者和公民社会组织所面临的伦理与社会问题。第一波 AI 伦理关注 AI 可能做什么（例如超级智能），在很大程度上等同于对机器人起义等幻想场景的伦理讨论 [6]。第二波 AI 伦理关注机器学习的现实问题：黑箱算法与可解释性问题 [9, 16]，训练数据中代表性不足及其导致的 AI 模型偏见 [2, 7]，以及面部识别和情绪识别系统日益侵犯公民权利（如隐私）[4]。现在应当迎来第三波 AI 伦理：直面我们这个时代的环境灾难，并积极促使学术界、政策制定者、AI 开发者和公众关注 AI 的环境影响。
{: .zh }

<span class="text-blue">[4]</span> This third wave must place sustainable development at its core. While there is a growing movement to direct AI usage towards “good” uses (i.e., AI4Good), towards the sustainable development goals, for example, it is time to move beyond that and to address the sustainability of developing and using AI systems in and of themselves. A well-known study by Strubell et al. illustrated that the process of training a single, deep learning, natural language processing (NLP) model (GPU) can lead to approx. 600,000 lb of carbon dioxide emissions [17]. Compare this to familiar consumption and you're looking at roughly the same amount of carbon dioxide emissions produced by five cars over the cars' lifetime. Other studies have shown that “Google's AlphaGo Zero generated 96 tonnes of CO2 over 40 days of research training which amounts to 1,000 h of air travel or a carbon footprint of 23 American homes” [1, 15]. In a time when the world must commit itself to reducing carbon emissions, one has to ask if the emissions from algorithms that can play games (or do other menial tasks) is really worth the cost.

这第三波必须把可持续发展置于核心。尽管已有越来越多的运动将 AI 的使用引向“善”的用途（即 AI4Good），例如引向可持续发展目标，但现在应当超越这一点，关注开发和使用 AI 系统本身的可持续性。Strubell 等人的一项著名研究表明，训练单个深度学习自然语言处理（NLP）模型（GPU）可产生约 60 万磅二氧化碳排放 [17]。将这一数字与熟悉的消费相比，大约相当于五辆汽车整个生命周期所产生的二氧化碳排放。其他研究显示，“Google 的 AlphaGo Zero 在 40 天的研究训练中产生了 96 吨二氧化碳，相当于 1,000 小时的航空旅行，或 23 个美国家庭的碳足迹” [1, 15]。在世界必须致力于减少碳排放的当下，人们不得不问：那些会玩游戏（或做其他琐碎任务）的算法所产生的排放，真的值得付出这样的代价吗？
{: .zh }

<span class="text-blue">[5]</span> Added to this, AI is not a technology that is restricted to manufacturing or healthcare alone. It promises to be as pervasive as the Internet or smartphones. This is a technology for which we cannot afford to ignore the environmental costs. For these reasons, I suggest we turn our attention to sustainable AI. I suggest we (AI ethicists) begin a movement towards sustainable AI as a way of connecting the dots between AI (its production, development and usage) and the environment, for the general public, AI developers and policymakers alike.

此外，AI 并不是只局限于制造业或医疗保健的技术。它有望像互联网或智能手机一样无处不在。对于这样一项技术，我们不能忽视其环境代价。因此，我建议我们将注意力转向可持续 AI。我建议我们（AI 伦理学家）发起一场面向可持续 AI 的运动，以此把 AI（其生产、开发和使用）与环境联系起来，面向公众、AI 开发者和政策制定者。
{: .zh }

<span class="text-blue">[6]</span> In the following paper, I will outline the concept of Sustainable AI as an umbrella term to cover two branches with different aims and methods; AI for sustainability vs sustainability of AI. I will show that AI for sustainability holds great promise but is lacking in one crucial aspect; it fails to account for the environmental impact from the development of AI. Alternatively, the environmental impact of AI training (and tuning) sits at the core of the sustainability of AI. Sustainability of AI is focused on sustainable data sources, power supplies, and infrastructures as a way of measuring and reducing the carbon footprint from training and/or tuning an algorithm. Addressing these aspects gets to the heart of ensuring the sustainability of AI for the environment. Finally, I argue that the study of Sustainable AI is imminently needed with resources directed to its understanding and development.

在下文中，我将把可持续 AI 作为一个总括性术语来概述，它涵盖两个目标和路径不同的分支：面向可持续性的 AI 与 AI 的可持续性。我将说明，面向可持续性的 AI 前景广阔，但缺少一个关键方面：它没有考虑 AI 开发所带来的环境影响。相反，AI 训练（和调优）的环境影响正是 AI 可持续性的核心。AI 的可持续性关注可持续的数据来源、电力供应和基础设施，以此衡量并减少训练和/或调优算法所产生的碳足迹。处理这些方面，才能真正确保 AI 对环境的可持续性。最后，我主张亟需研究可持续 AI，并将资源投向对其的理解和发展。
{: .zh }

## 2. What is Sustainable AI?　什么是可持续 AI？

<span class="text-blue">[7]</span> The term, or phrase, “Sustainable AI” is in its infancy. In fact, to my knowledge this is the first academic article with the explicit aim to propose a definition of Sustainable AI and to argue for its prominence. To begin, I suggest that “sustainable AI” is a field of research that applies to the technology of AI (the hardware powering AI, the methods to train AI, and the actual processing of data by AI) and the application of AI while addressing issues of AI sustainability and/or sustainable development. I suggest further that Sustainable AI deals not exclusively with the implementation or use of AI but ought to address the entire life cycle of AI, the sustainability of the: design, training, development, validation, re-tuning, implementation and use of AI.

“可持续 AI”这一术语（或说法）仍处于起步阶段。事实上，据我所知，这是第一篇明确旨在提出可持续 AI 定义并论证其重要性的学术文章。首先，我认为“可持续 AI”是一个研究领域，它适用于 AI 技术（为 AI 提供动力的硬件、训练 AI 的方法，以及 AI 对数据的实际处理）和 AI 应用，同时处理 AI 可持续性和/或可持续发展问题。我进一步认为，可持续 AI 不应只涉及 AI 的实施或使用，而应处理 AI 的整个生命周期：AI 的设计、训练、开发、验证、重新调优、实施和使用的可持续性。
{: .zh }

<span class="text-blue">[8]</span> Under this umbrella term, there is a crucial distinction to be made; AI for sustainability versus the sustainability of AI (see Figure 1). The former branch—AI for sustainability—is somewhat more developed with the well-known not-for-profit organization “AI4Good”¹. In this branch, the goal is to explore the application of AI to achieve sustainability in some manner of speaking, for example, AI and machine learning (ML) to achieve the United Nations Sustainable Development Goals (SDGs). Here, AI/ML is a tool to make affordable and clean energy, SDG 7 for example, available for a greater segment of the global population. Seeing as approx 600 million people on this planet are currently lacking access to modern electricity² this is of course a “good” goal to have. However, at what cost? It needs to be known that to train or tune (re-fine) an AI/ML model requires a considerable amount of energy and researchers have already posed the question if the “energy spent training a neural network might better be allocated to heating a family's home” [17]. Accordingly, Sustainable AI cannot restrict itself to the use of AI for sustainability.

在这一总括术语下，有一个关键区分：面向可持续性的 AI 与 AI 的可持续性（见图 1）。前一个分支——面向可持续性的 AI——发展得相对更成熟，已有知名非营利组织“AI4Good”¹。在这一分支中，目标是探索以某种方式应用 AI 来实现可持续性，例如利用 AI 和机器学习（ML）实现联合国可持续发展目标（SDGs）。在这里，AI/ML 是一种工具，用来让可负担的清洁能源（例如 SDG 7）惠及全球更多人口。鉴于全球目前约有 6 亿人无法获得现代电力²，这当然是一个“好”目标。但代价是什么？需要知道的是，训练或调优（再精调）一个 AI/ML 模型需要大量能源，研究者已经提出这样的问题：“训练神经网络所耗费的能源，是否更应该用于为一个家庭供暖” [17]。因此，可持续 AI 不能仅限于将 AI 用于可持续性。
{: .zh }

<span class="lecture-figure"><img class="fig-raster" src="../../../../../../assets/images/lectures/academic-english/reading1/r1_fig1.png" alt="Sustainable AI as sustainability of AI vs AI for sustainability"></span>

<p class="lecture-caption"><span class="caption-fr">Figure 1. Sustainable AI as sustainability of AI vs AI for sustainability</span><br>图 1：可持续 AI——AI 的可持续性与面向可持续性的 AI</p>

<span class="text-blue">[9]</span> Hence, I propose that sustainable AI encompass another branch of research, this branch is somewhat underdeveloped, under-researched and under-funded. This area deals with assessing the sustainability of AI or, the sustainable development of AI/ML itself. Thus, the sustainability of AI is not solely focused on how to apply AI for sustainable banking, energy consumption or healthcare; rather, this branch of sustainable AI is concerned with how to measure the sustainability of developing and using AI models, e.g., measuring of carbon footprints, computational power for training algorithms, etc. To be sure, Sustainable AI must address both of these branches. Put another way, it should be clear that AI for sustainability cannot be achieved without simultaneously addressing the sustainability of AI.

因此，我主张可持续 AI 还应包含另一个研究分支；这一分支发展不足、研究不足、资金不足。该领域涉及评估 AI 的可持续性，或者 AI/ML 本身的可持续发展。因此，AI 的可持续性并不只关注如何将 AI 应用于可持续银行、能源消费或医疗保健；相反，可持续 AI 的这一分支关注如何衡量开发和使用 AI 模型的可持续性，例如衡量碳足迹、训练算法的算力消耗等。需要明确的是，可持续 AI 必须同时处理这两个分支。换言之，如果不同时处理 AI 的可持续性，就不可能实现面向可持续性的 AI。
{: .zh }

## 3. What is the Sustainable in “Sustainable AI”?　“可持续 AI”中的“可持续”指什么？

<span class="text-blue">[10]</span> In an effort to clarify ambiguities found in the abundance of literature on sustainable development, Mensah [13] conducted a systematic literature review on the topic and argues that “the entire issue of sustainable development centres around inter-and intra-generational equity anchored essentially on three-dimensional distinct but interconnected pillars, namely the environment, economy, and society” [13, 1].

为澄清大量可持续发展文献中的模糊之处，Mensah [13] 对该主题进行了系统文献综述，并指出“整个可持续发展问题都围绕代际与代内公平展开，其根本立足点是三个维度上彼此区别又相互关联的支柱，即环境、经济和社会” [13, 1]。
{: .zh }

<span class="text-blue">[11]</span> Although first derived from economics [13, 14] sustainable development has more recently been defined by the World Commission on Environment and Development as “development that meets the needs of the present without compromising the ability of future generations to meet their own needs” [13, 8]. As such, sustainable development embodies the tension between innovation with the equitable distribution of resources across society from one generation to the next.

尽管可持续发展最初源于经济学 [13, 14]，但世界环境与发展委员会后来将其定义为“既满足当代人的需要，又不损害后代人满足其自身需要之能力的发展” [13, 8]。因此，可持续发展体现了创新与资源在社会中跨代公平分配之间的张力。
{: .zh }

<span class="text-blue">[12]</span> Further, sustainable development is a “development paradigm as well as the concept that calls for improving living standards without jeopardising the earth's ecosystems or causing environmental challenges such as deforestation and water and air pollution” [13, 6]. From this pervasive definition, it has been put forth that sustainable development is a mechanism through which “society can interact with the environment” [13]. Thus, it is more than a concept but it is also appealed to as a movement of sorts.

此外，可持续发展是一种“发展范式，也是一种理念，它要求在不破坏地球生态系统、不造成森林砍伐和水与空气污染等环境挑战的前提下提高生活水平” [13, 6]。根据这一广为流传的定义，有学者提出可持续发展是“社会与环境互动”的一种机制 [13]。因此，它不只是一个概念，也被当作一种运动来呼吁。
{: .zh }

<span class="text-blue">[13]</span> Sustainable development has also been described as a “visionary and forward-looking paradigm” [13, 9] with the three pillars upon which the concept of sustainable development rests: economic sustainability, social sustainability, and environmental sustainability. Thus, sustainable development embodies not only the tension between innovation and equitable resource distribution but also the tension between serving the needs of the environment, economy and society.

可持续发展还被描述为一种“富有远见和前瞻性的范式” [13, 9]，其概念建立在三大支柱之上：经济可持续性、社会可持续性和环境可持续性。因此，可持续发展不仅体现了创新与资源公平分配之间的张力，也体现了满足环境、经济与社会需要之间的张力。
{: .zh }

<span class="text-blue">[14]</span> Given what we have just read about sustainable development and the literal translation of sustainability being a capacity to maintain some entity, outcome or process over time [5] then what could sustainable AI mean? I suggest that “Sustainable AI” carry with it the complexities of sustainable development as it relates to AI. Thus, sustainable AI must also embody the tension between innovation in AI for sustainable development goals as well as explicitly targeting the sustainability of AI training and usage. Furthermore, I suggest that the global discussion on AI explicitly address, not only human rights and/or ethical issues, but also the tension between serving the needs of the environment, economy, and society.

鉴于我们刚刚读到的关于可持续发展的内容，以及可持续性字面上是指“维持某一实体、结果或过程随时间存续的能力” [5]，那么可持续 AI 可能意味着什么？我主张，“可持续 AI”应承载可持续发展与 AI 相关的复杂性。因此，可持续 AI 也必须体现两方面的张力：一方面是为了可持续发展目标而进行 AI 创新，另一方面是明确针对 AI 训练和使用的可持续性。此外，我建议全球关于 AI 的讨论不仅应明确处理人权和/或伦理问题，还应处理满足环境、经济与社会需要之间的张力。
{: .zh }

<span class="text-blue">[15]</span> In short, the AI which is being proposed to power our society cannot, through its development and use, make our society unsustainable. This thought should cause us to realize that society's use of AI is a choice. It is not predetermined that AI must be developed and/or used for any and everything; rather, it is a choice that society (e.g., developers, industry leaders, consumers, citizens, policy makers) make. This latter point, against technological determinism, also means that societies must choose carefully about the values they wish to safeguard (e.g., privacy, dignity, fairness, justice) and must work to ensure that AI is not developed in a way that renders those values unsustainable.

简言之，被提议用来驱动我们社会的 AI，不能通过其开发和使用使我们的社会变得不可持续。这一想法应使我们意识到，社会对 AI 的使用是一种选择。AI 并非注定要被开发和/或用于任何一切；相反，这是社会（例如开发者、行业领袖、消费者、公民、政策制定者）做出的选择。后一点反对技术决定论，也意味着社会必须谨慎选择其希望维护的价值观（例如隐私、尊严、公平、正义），并必须努力确保 AI 的开发方式不会使这些价值观变得不可持续。
{: .zh }

## 4. Environmental Sustainability of AI　AI 的环境可持续性

<span class="text-blue">[16]</span> Renowned AI ethicist Mark Coeckelbergh proposes “AI for Climate” suggesting that we use AI “for dealing with environmental and climate problems” [8, 5]. Given my earlier distinction of sustainable AI, I would label this as AI for sustainability. And while I couldn't agree more, I also believe it is necessary to focus our attention on the sustainability of AI. This change in framing is paramount as it means that one can no longer talk about AI for Climate or AI4Good without at the same time addressing the impact that developing a particular AI model will have on environmental sustainability.

著名 AI 伦理学家 Mark Coeckelbergh 提出“AI for Climate”，建议我们利用 AI“应对环境和气候问题” [8, 5]。按照我前面对可持续 AI 的区分，我会把这归类为面向可持续性的 AI。我完全赞同，但我也认为有必要把注意力集中在 AI 的可持续性上。这种框架转变至关重要，因为这意味着，人们在谈论 AI for Climate 或 AI4Good 时，不能再不同时处理开发某一特定 AI 模型对环境可持续性的影响。
{: .zh }

<span class="text-blue">[17]</span> Thankfully there are a select few studying and developing AI models who are already bringing attention to the issue and outlining areas in need of further study. In a 2019 paper by Strubell et al. [17] it is argued that there are both financial and environmental costs to Deep Learning (DL) models for natural language processing (NLP). The financial costs were attributed to hardware and electricity or cloud compute time (which raised ethical issues as to who has access to such hardware, etc.) whereas the environmental costs were attributed to “the carbon footprint required to fuel modern tensor processing hardware” [17, 1]. The authors acknowledge the energy required to power the hardware for training such models is considerable given that training happens over the course of weeks or even months [17].

值得庆幸的是，已有少数研究者和开发者在研究和开发 AI 模型时关注这一问题，并指出需要进一步研究的领域。Strubell 等人 2019 年的论文 [17] 指出，用于自然语言处理（NLP）的深度学习（DL）模型既有财务成本，也有环境成本。财务成本来自硬件和电力或云算力时间（这引发了谁能获得此类硬件等伦理问题），而环境成本来自“为现代张量处理硬件供能所需的碳足迹” [17, 1]。作者承认，鉴于训练这类模型需要数周甚至数月，为训练硬件供电所需的能源相当可观 [17]。
{: .zh }

<span class="text-blue">[18]</span> The authors also point out that while it is possible to obtain some of the required energy from “renewable or carbon credit-offset resources, the high energy demands of these models are still a concern since (1) energy is not currently derived from carbon-neutral sources in many locations, and (2) when renewable energy is available, it is still limited to the equipment we have to produce and store it, and energy spent training a neural network might better be allocated to heating a family's home” [17, 1]. This last point should strike a chord for all of us; as said before, there are approximately 600 million people in the world without access to modern electricity and instead of prioritizing the provision of electricity to these homes, we are prioritizing the training of AI models that can beat the world champion at the game of Go (AlphaGo). It is time for such calculations to be made explicit and to be evaluated in an open forum.

作者还指出，尽管可以从“可再生或碳信用抵消资源”中获得部分所需能源，但这些模型的高能源需求仍然令人担忧，因为（1）目前许多地方的能源并非来自碳中和来源；（2）即使有可再生能源，它仍受限于我们生产和储存能源的设备，而且“训练神经网络所耗费的能源，也许更应该用于为一个家庭供暖” [17, 1]。最后一点应引起我们所有人的共鸣；如前所述，世界上约有 6 亿人无法获得现代电力，而我们不是优先为这些家庭供电，而是优先训练能够在围棋中击败世界冠军的 AI 模型（AlphaGo）。现在应当明确计算这些成本，并在公开论坛中加以评估。
{: .zh }

<span class="text-blue">[19]</span> The Strubbel et al. [17] paper goes on to show that “tuning” (aka re-purposing or refining) an AI model is more expensive than training a model to begin with. This kind of finding is crucial for the policy makers to understand to make decisions concerning the proportionality of certain AI methods compared with its intended application. Meaning, it is time for policy makers to govern AI at a more detailed level and suggest that certain methods, for example, tuning a deep learning NLP model, should not be permitted for ethically charged tasks like recruitment of new employees or prediction of employees who may be on the verge of quitting. The reason being that the costs to environmental sustainability are simply too great to justify such a menial (not to mention ethically problematic) application. This could also cause society to pause when a particular AI model will be used in an application context which will require constant tuning. As society evolves in its communication, transportation, and social habits, old AI models will need constant tuning to continue to be effective. These costs must be added to any proportionality calculation.

Strubell 等人 [17] 的论文进一步表明，“调优”（即重新利用或精调）一个 AI 模型比从头训练一个模型更昂贵。这类发现对政策制定者至关重要，有助于他们判断某些 AI 方法与预期应用是否相称。也就是说，政策制定者现在应当在更细的层面上治理 AI，并规定某些方法（例如调优一个深度学习 NLP 模型）不应用于具有伦理负担的任务，例如招聘新员工或预测可能即将离职的员工。原因是，对环境可持续性的代价太大，无法为这种琐碎（更不用说在伦理上有问题）的应用辩护。当某一 AI 模型将用于需要不断调优的应用场景时，社会也应三思。随着社会在沟通、交通和社会习惯方面不断演变，旧的 AI 模型需要不断调优才能继续有效。这些成本必须计入任何相称性计算。
{: .zh }

<span class="text-blue">[20]</span> One of the final recommendations from Strubbel et al.³ is that “authors should report training time and sensitivity to hyperparameters” as “this will enable direct comparison across models” (Strubell, Ganesh, and McCallum 2019, 5). To date, there are two possible tools available for calculating emissions: the “Machine Learning Emissions Calculator” for estimating the carbon footprint of GPU compute through specifying hardware type, hours used, cloud provider, and region [12], Anthony et al. [3]; and, the “experiment-impact-tracker” framework “for tracking real-time energy consumption and carbon emissions, as well as generating standardized online appendices” [10, 1]. Each of these approaches aims at the “mitigation of carbon emissions and reduction of energy consumption” to facilitate the sustainable development of ML [10].

Strubell 等人的最后建议之一是，“作者应报告训练时间和对超参数的敏感性”，因为“这将使不同模型之间可以直接比较”（Strubell, Ganesh, and McCallum 2019, 5）。迄今为止，有两种可用于计算排放的工具：“机器学习排放计算器”（Machine Learning Emissions Calculator），通过指定硬件类型、使用时长、云服务商和地区来估算 GPU 算力的碳足迹 [12]、Anthony 等人 [3]；以及“experiment-impact-tracker”框架，“用于跟踪实时能源消耗和碳排放，并生成标准化的在线附录” [10, 1]。这些方法都旨在“减缓碳排放、降低能源消耗”，以促进机器学习的可持续发展 [10]。
{: .zh }

<span class="text-blue">[21]</span> If we recall from the introduction, studies have shown that “Google's AlphaGo Zero generated 96 tonnes of CO2 over 40 days of research training which amounts to 1,000 h of air travel or a carbon footprint of 23 American homes” [1, 15]. Or, training one large NLP model (aka a transfromer with neural architecture search) resulted in over 600,000 CO2 e (lbs), roughly the equivalent of carbon emissions of five cars (over the lifetime of the car) [17]. These numbers are overwhelming to read. What's worse is that we have only a few studies to call on to learn numbers like this. In other words, we need more studies to fully grasp the extent to which these findings can be supported or refuted. With tools like the “machine learning emissions calculator” [12] and the “experiment-impact-tracker” [10] this should no longer be the case. This means the tools to track carbon emissions are there, however, greater incentives are needed to encourage researchers and industry developers to measure and report such findings.

如果我们回顾引言，研究显示“Google 的 AlphaGo Zero 在 40 天的研究训练中产生了 96 吨二氧化碳，相当于 1,000 小时的航空旅行，或 23 个美国家庭的碳足迹” [1, 15]。或者，训练一个大型 NLP 模型（即采用神经架构搜索的 transformer）产生了超过 60 万磅 CO₂e，大致相当于五辆汽车（整个生命周期）的碳排放 [17]。这些数字读来令人震惊。更糟的是，我们只有少数研究可以提供这样的数字。换言之，我们需要更多研究，才能充分理解这些发现能在多大程度上得到支持或反驳。有了“机器学习排放计算器” [12] 和“experiment-impact-tracker” [10] 这类工具，这种情况不应再继续。这意味着，跟踪碳排放的工具已经存在，但需要更大的激励来鼓励研究者和行业开发者测量并报告这些发现。
{: .zh }

<span class="text-blue">[22]</span> Building on the work of Henderson et al., Anthony et al. propose “carbontracker” “a tool for tracking and predicting the energy consumption and carbon emissions of training DL models” [3, 2]. Not only does the “carbontracker” tool allow for the generation of carbon impact statements but it also allows for the model training to be “stopped, at the user's discretion, if the predicted environmental cost is exceeded” [3, 2]. Thus, the “carbontracker” provides the possibility that if a training exceeds a responsible use of energy consumption, or generation of carbon emissions, training of the model can be stopped. Again, this is the kind of tool that should be known to policy makers to create governance mechanisms for limiting the amount of carbon emissions, with the tools to end the training when emissions reach an unacceptable threshold.

在 Henderson 等人工作的基础上，Anthony 等人提出“carbontracker”，“一种用于跟踪和预测训练深度学习模型能源消耗和碳排放的工具” [3, 2]。“carbontracker”不仅允许生成碳影响声明，还允许“在用户自行决定下，如果超过预测的环境成本，就停止模型训练” [3, 2]。因此，“carbontracker”提供了这样一种可能性：如果训练超出负责任的能源消耗或碳排放水平，就可以停止模型训练。同样，这是政策制定者应当了解的工具，用以建立治理机制，限制碳排放量，并在排放达到不可接受阈值时终止训练。
{: .zh }

<span class="text-blue">[23]</span> In short, while the use of AI for achieving sustainability is to be applauded there are many reasons for which the environmental costs of AI, the sustainability of AI, need to be studied and made transparent to the AI community, consumers, and policy makers. More to the point, “the carbon emissions that occur when training DL models are not irreducible and do not have to simply be the cost of progress within DL” [3, 3].

简言之，虽然将 AI 用于实现可持续性值得称赞，但有许多理由需要研究 AI 的环境成本，即 AI 的可持续性，并使其对 AI 学界、消费者和政策制定者透明。更确切地说，“训练深度学习模型时产生的碳排放并非不可削减，也不必简单地成为深度学习进步的代价” [3, 3]。
{: .zh }

## 5. Towards Sustainable AI　迈向可持续 AI

<span class="text-blue">[24]</span> Distinguished authors such as Klein [11] write about the dangers of climate change and the need for consumer and industry habits to change. Climate activists such as Greta Thunberg work tirelessly to raise awareness of the need for systematic political reform to repair the damage to our planet. Politicians are taking note and acting. The European Commission has enacted A European Green Deal⁴ and the United States has re-joined the Paris Climate Agreement⁵ with plans for greater commitments to tackle climate change. Environmental resilience is a global issue at the heart of many policy and industry decisions so why not at the heart of every AI ethics discussion, or every AI discussion, period? While the world argues over which principles to adopt, out of more than 200 sets of AI ethics principles, large tech companies are increasing their use of computational power and are increasing their demand for data and its storage in data centres across the world that require energy and cooling systems.

Klein [11] 等知名作者论述了气候变化的危险，以及消费者和行业习惯必须改变。Greta Thunberg 等气候活动家不懈努力，提高人们对系统性政治改革必要性的认识，以修复对地球造成的损害。政治家们正在关注并采取行动。欧盟委员会已颁布“欧洲绿色协议”⁴，美国已重新加入《巴黎气候协定》⁵，并计划作出更大承诺以应对气候变化。环境韧性是一个全球性问题，是许多政策和行业决策的核心，那么为什么不把它置于每一场 AI 伦理讨论、乃至每一场 AI 讨论的核心呢？当世界争论在 200 多套 AI 伦理原则中应采用哪些原则时，大型科技公司却在增加算力使用，增加对数据的需求，并在世界各地需要能源和冷却系统的数据中心储存数据。
{: .zh }

<span class="text-blue">[25]</span> At the time of this paper, early 2021, it is unquestionable that any pervasive global production of products (or innovation) demands attention for its impact on the environment. Mass farming has shown to have an impact on biodiversity; mass clothing production has shown to have an impact on the water supplies of the world; and, electronic waste has shown to leak chemicals and poison into the water and soil where it is dumped (often in poorer countries). If we are to believe the promises from industry and policy makers, that AI/ML will be used on a global scale across public and private sectors, then AI/ML promises to be pervasive across sectors. Already we see applications to aid medical practitioners in their diagnoses, to assist legal officials in their judgements, to assume a portion of tasks in human resources for recruiting new employees. The list goes on and on. Hence, this is not a technology that we can afford to ignore the environmental impacts of. When it comes to AI, attention to the environmental impact is mandatory.

截至本文写作的 2021 年初，毫无疑问，任何普遍性的全球产品生产（或创新）都需要关注其对环境的影响。大规模农业已证明会影响生物多样性；大规模服装生产已证明会影响世界水资源供应；电子垃圾已证明会在倾倒地（往往是较贫穷国家）向水和土壤泄漏化学物质和毒素。如果我们相信行业和政策制定者的承诺，即 AI/ML 将在公共和私营部门全球范围内使用，那么 AI/ML 必将遍及各个行业。我们已经看到它被用于辅助医生诊断、协助司法人员判断、承担人力资源招聘新员工的部分任务。这样的例子不胜枚举。因此，对于这项技术，我们不能忽视其环境影响。就 AI 而言，关注环境影响是强制性的。
{: .zh }

<span class="text-blue">[26]</span> To do this, first, AI must be conceptualized as a social experiment conducted on society [18]. This is a technology we still have much to learn about. With the experimental nature of AI made explicit it is then imperative that ethical safeguards are put in place to protect people and planet.

为此，首先，必须把 AI 概念化为一项在社会上进行的实验 [18]。这是一项我们仍有许多东西需要了解的技术。在明确 AI 的实验性质之后，就必须建立伦理保障措施，以保护人类和地球。
{: .zh }

<span class="text-blue">[27]</span> Second, we need sustainable AI task forces in governments who are actively engaged in seeking out expert opinions of the environmental impact of AI. From this, appropriate policy to reduce emissions and energy usage can be put into effect. Governance schemes to facilitate sustainable development of AI should be put in place: companies and public institutions should be required to provide carbon emissions reports for all training and tuning of AI systems; and, funding directed to SMEs actively pursuing sustainable AI innovation—and not just AI for sustainability but the sustainability of AI approaches.

其次，我们需要在政府中设立可持续 AI 工作组，积极征求关于 AI 环境影响的专家意见。据此，可以实施适当的政策来减少排放和能源使用。应建立促进 AI 可持续发展的治理方案：要求公司和公共机构为所有 AI 系统的训练和调优提供碳排放报告；并将资金投向积极追求可持续 AI 创新的中小企业——不仅是面向可持续性的 AI，还包括 AI 可持续性路径。
{: .zh }

<span class="text-blue">[28]</span> Third, public and private institutions, for example the European Commission as part of their regulatory options for AI⁶, should create a “proportionality framework” to assess whether training or tuning of an AI model for a particular task is proportional to the carbon footprint, and general environmental impact, of that training and/or tuning. This is especially true with AI projects used by the state. We must require tech companies developing (training, re-training) AI models to use tools such as the “Carbon Tracker” proposed by Anthony et al. [3] not only to track the carbon footprint of training a certain model but to predict the carbon footprint of training a certain DLM so as to stop model training if the predicted environmental cost is exceeded.

第三，公共和私营机构（例如欧盟委员会在其 AI 监管选项⁶中）应建立“相称性框架”，评估为某一特定任务训练或调优 AI 模型是否与该项训练和/或调优的碳足迹及总体环境影响相称。对于国家使用的 AI 项目尤其如此。我们必须要求开发（训练、再训练）AI 模型的科技公司使用 Anthony 等人提出的“Carbon Tracker” [3] 等工具，不仅跟踪训练某一模型的碳足迹，还要预测训练某一深度学习模型的碳足迹，以便在超过预测环境成本时停止模型训练。
{: .zh }

## 6. Conclusion　结论

<span class="text-blue">[29]</span> In this paper I propose a definition of Sustainable AI; Sustainable AI is a movement to foster change in the entire lifecycle of AI products (i.e., idea generation, training, re-tuning, implementation, governance) towards greater ecological integrity and social justice. As such, Sustainable AI is focused on more than AI applications; rather, it addresses the whole sociotechnical system of AI. I have suggested here that Sustainable AI is not about how to sustain the development of AI per say but it is about how to develop AI that is compatible with sustaining environmental resources for current and future generations; economic models for societies; and societal values that are fundamental to a given society.

本文提出可持续 AI 的定义：可持续 AI 是一场推动 AI 产品全生命周期（即想法产生、训练、重新调优、实施、治理）变革的运动，目标是实现更高的生态完整性与社会正义。因此，可持续 AI 关注的不只是 AI 应用，而是 AI 的整个社会技术系统。本文指出，可持续 AI 并不是要维持 AI 本身的发展，而是要发展这样一种 AI：它与为当代人和后代人维持环境资源、维持社会经济发展模式，以及维持特定社会基本价值观相兼容。
{: .zh }

<span class="text-blue">[30]</span> I have articulated that the phrase Sustainable AI be understood as having two branches; AI for sustainability and sustainability of AI. The former has received a great deal of attention in recent years, the latter appears to be a hidden part of the development process.

我已阐明，可持续 AI 这一表述应理解为两个分支：面向可持续性的 AI 与 AI 的可持续性。前者近年来受到大量关注，后者似乎是开发过程中隐藏的一部分。
{: .zh }

<span class="text-blue">[31]</span> I proposed that Sustainable AI takes sustainable development at the core of its definition with three accompanying tensions between AI innovation and equitable resource distribution; inter and intragenerational justice; and, between environment, society, and economy. This paper is not meant to engage with each of the three pillars of sustainability (i.e., social, economic, environment), and as such the pillars of sustainable AI. Rather, this paper is meant to inspire the reader, the policy maker, the AI ethicist, the AI developer to connect with the environment—to remember that there are environmental costs to AI.

我主张，可持续 AI 应以可持续发展为核心定义，并伴随三组张力：AI 创新与资源公平分配之间；代际与代内正义之间；以及环境、社会与经济之间。本文无意逐一讨论可持续性的三大支柱（即社会、经济、环境），因而也不逐一讨论可持续 AI 的支柱。相反，本文旨在启发读者、政策制定者、AI 伦理学家和 AI 开发者关注环境——记住 AI 是有环境代价的。
{: .zh }

## 原文脚注　Endnotes

1. <https://ai4good.org/>（2021-01-28 访问）
2. <https://ai4good.org/ai-for-sdgs/goal-7-afordable-clean-energy/>（2021-01-28 访问）
3. 论文另外两项建议是：“academic researchers need equitable access to computation resources” 与 “researchers should prioritize computationally efficient hardware and algorithms”。（Strubell, Ganesh, and McCallum, 2019: 6）
4. <https://ec.europa.eu/info/strategy/priorities-2019-2024/european-green-deal-en>（2021-01-28 访问）
5. <https://www.whitehouse.gov/briefing-room/statements-releases/2021/01/20/paris-climate-agreement/>（2021-01-28 访问）
6. <https://ec.europa.eu/info/sites/info/files/commission-white-paper-artificial-intelligence-feb2020_en.pdf>；另见 “On Artificial Intelligence—A European approach to excellence and trust”（2021-01-28 访问）

!!! note "教材说明"

    Reading 1 的 References 与 Words and Expressions 以教材页面二维码/在线平台提供；本讲义保留正文中的文内引用，未另列参考文献表。
