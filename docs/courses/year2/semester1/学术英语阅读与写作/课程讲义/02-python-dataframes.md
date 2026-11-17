---
title: Lecture 2 Python 数据框
comments: true
---

# Lecture 2 · Python dataframes

<div class="lecture-hero">
<p class="lecture-hero__fr">Python orientation · Managing data · Practice with pandas</p>
<p class="lecture-badge">LECTURE 2 · pandas</p>
<p class="lecture-hero__meta">学术英语阅读与写作 · 课件来源：Lecture2.pdf（11 页）</p>
</div>

!!! info "阅读说明"

    本讲义按原课件逐页整理：英文条目为课件原文，其下附中文对照；代码、库名与网址保留原样，图表与截图页附原课件整页图片。课件第 1 页为课程封面，未收录。文末附本讲<strong>重点词汇表</strong>。

## Outline　本讲结构

### Slide 2 · Outline

- Python orientation
- Managing data with Excel and Python
- Practice with pandas

Python 入门；用 Excel 与 Python 管理数据；pandas 实践。
{: .zh }

## 1. Python orientation　Python 入门

### Slide 3 · Running Python on Spyder IDE

- Introduction to the Spyder interface
- Setting directories of data files
- Loading and saving code files (*.py files)
- Taking notes (`"""` and `#`)
- Running code (F9, Function+F9)

Spyder 界面介绍；设置数据文件所在目录；加载与保存代码文件（*.py 文件）；写注释（`"""` 与 `#`）；运行代码（F9、Function+F9）。
{: .zh }

## 2. Managing data with Excel and Python　用 Excel 与 Python 管理数据

### Slide 4 · “Large” and “small” datasets

- Datasets often come in the form of Excel spreadsheets, which we will import into Python
- Their size and complexity may vary significantly as seen in the following examples
- “Size doesn't matter”
    - large datasets may be more insightful, but also “messier” and challenging for slow computers. However, Python can easily handle most messes
    - small datasets (or “toy data”) can be better for learning. Most academic research datasets are also more likely to be small

| Dataset | No. of cases | Filesize |
|---|---|---|
| Bicycle rental company data (Q4, 2019) | > 700,000 | 95 MB |
| Human Freedom Index | > 3,000 | 5 MB |
| Hans Rosling global development data | > 150 | 7 KB |

数据集通常以 Excel 表格的形式出现，我们会把它导入 Python；其大小与复杂度可能差异很大。<br>
“大小并不重要”：大数据集可能更有洞见，但也更“脏”，对运行慢的电脑更具挑战性，不过 Python 可以轻松处理大多数混乱数据；小数据集（“玩具数据”）更适合学习，大多数学术研究数据集也往往较小。
{: .zh }

### Slide 5 · Examples of “mess”

- Formatting inconsistencies and errors
- Language incompatibility / encoding issues
- Missing data*
    - in some situations, can be very problematic if unnoticed
    - handled by dropping or estimating missing values
- Missing data can range from “not very problematic” to “very problematic”; the key question is why the data are missing.

格式不一致与错误；语言不兼容/编码问题；缺失数据——在某些情况下，如果没有被发现会非常成问题，可通过删除或估计缺失值来处理。缺失数据的严重程度从“不太成问题”到“非常成问题”不等；关键问题是数据为什么缺失。
{: .zh }

!!! note "参考"

    Graham, J. W. (2009). Missing Data Analysis: Making It Work in the Real World. *Annual Review of Psychology*, 60(1), 549–576.

### Slide 6 · The pandas library

- Pandas (<https://pandas.pydata.org/>) is the most popular Python library for data manipulation and analysis
- To use Python libraries, we need to import them. Once we import Pandas, we can then load our Excel files as a dataframe
- We will also import and use other key libraries for data visualization and analysis like numpy, matplotlib, seaborn, statsmodels, and scikit-learn

pandas（[pandas.pydata.org](https://pandas.pydata.org/)）是最受欢迎的 Python 数据操作与分析库。使用 Python 库需要先导入；导入 pandas 后，就可以把 Excel 文件加载为 dataframe。<br>
我们还会导入并使用其他关键的可视化与分析库，如 numpy、matplotlib、seaborn、statsmodels 与 scikit-learn。
{: .zh }

## 3. Examples and practice with pandas　示例与 pandas 实践

### Slide 7 · Example: Hans Rosling's global development research

- What information does this chart convey?
- What are the visualization techniques?

<span class="lecture-figure lecture-figure--wide"><img class="fig-raster" src="../../../../../../assets/images/lectures/academic-english/lecture2/s07.png" alt="Hans Rosling 的全球发展数据可视化"></span>

<p class="lecture-caption">原课件第 7 页：Hans Rosling 的全球发展数据可视化（Gapminder）</p>

这张图传达了哪些信息？它使用了哪些可视化技术？
{: .zh }

### Slide 8 · Python dataframes: Visualization demonstration

- A bar/strip plot and an annotated scatterplot show how pandas and seaborn display categorical and continuous relationships.

<span class="lecture-figure lecture-figure--wide"><img class="fig-raster" src="../../../../../../assets/images/lectures/academic-english/lecture2/s08.png" alt="pandas/seaborn 可视化演示"></span>

<p class="lecture-caption">原课件第 8 页：pandas/seaborn 可视化演示（柱状图、条带图与带注释散点图）</p>

柱状图/条带图与带注释的散点图，展示了 pandas 和 seaborn 如何呈现分类变量与连续变量的关系。
{: .zh }

### Slide 9 · Confused by code? Use GenAI to explain and troubleshoot

- Use GenAI to explain and troubleshoot code: <https://genai.polyu.edu.hk>
- Example prompts and model explanations are shown below.

<span class="lecture-figure lecture-figure--wide"><img class="fig-raster" src="../../../../../../assets/images/lectures/academic-english/lecture2/s09.png" alt="用 GenAI 解释 pandas 代码的示例"></span>

<p class="lecture-caption">原课件第 9 页：用 GenAI 解释 pandas 代码的示例</p>

用 GenAI 来解释代码、排查问题：genai.polyu.edu.hk。示例提示词与模型解释见上图。
{: .zh }

### Slide 10 · Practice with pandas: Lecture2.py

- Key learning points
    - Dataframe overview
    - Dataframe management
    - Dataframe manipulation

关键学习点：dataframe 总览、dataframe 管理、dataframe 操作。
{: .zh }

### Slide 11 · Summary

- Pandas is the most important data management library for Python, and is best used alongside Excel
- There is no need to “memorize” code
- While it might seem difficult at first, practice makes (almost) perfect!

pandas 是 Python 最重要的数据管理库，最好与 Excel 配合使用；没有必要“死记”代码；一开始可能觉得困难，但熟能生巧（几乎完美）！
{: .zh }

## 重点词汇 · Key Vocabulary

| English | 中文 | 说明 / 搭配 |
|---|---|---|
| dataframe | 数据框 | pandas 的二维表格数据结构 |
| pandas | pandas 库 | 最流行的 Python 数据操作与分析库 |
| import | 导入 | 加载 Python 库/模块 |
| Excel | Excel 表格 | 常见的数据集文件格式 |
| missing data | 缺失数据 | 需要删除或估计处理的数据 |
| large/small dataset | 大/小数据集 | 大数据更有洞察但更乱；小数据更适合学习 |
| data visualization | 数据可视化 | 用图表呈现数据 |
| bar/strip plot | 柱状/条带图 | 展示分类与数值变量关系 |
| annotated scatterplot | 带注释散点图 | 在散点图上标注数据点 |
| GenAI | 生成式 AI | 用于解释和排查代码 |
