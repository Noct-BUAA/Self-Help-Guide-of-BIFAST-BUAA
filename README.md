# 北航中法未来科技学院自助指南

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Built with MkDocs](https://img.shields.io/badge/MkDocs-Material-indigo)](https://squidfunk.github.io/mkdocs-material/)

北京航空航天大学中法未来科技学院（杭州）学习与生活自助指南。
汇集课程学习资料、重难点解析以及杭州校园生活实用信息。

学院全称：**北航中法未来科技学院**
（Beihang INSA Institute for Applied Sustainable Sciences and Technology）
— 北航与法国国立应用科学学院（INSA）合作创办的中外合作办学机构，
坐落于 **浙江省杭州市余杭区瓶窑镇** 的北航杭州国际校园。

本项目使用 **[MkDocs Material](https://squidfunk.github.io/mkdocs-material/)** 构建。

## 本地预览

```bash
# 安装依赖
pip install mkdocs-material

# 启动本地开发服务器
mkdocs serve
```

访问 **http://127.0.0.1:8000** 查看站点。

## 构建静态站点

```bash
mkdocs build
```

输出文件位于 `site/` 目录。

## 部署到 GitHub Pages

```bash
mkdocs gh-deploy
```

## 项目结构

```
.
├── mkdocs.yml              # MkDocs 配置文件
├── docs/
│   ├── index.md            # 首页
│   ├── preface/            # 前言
│   ├── courses/            # 课程学习资料
│   ├── campus-life/        # 杭州校园生活指南
│   ├── postscript/         # 后记
│   ├── assets/             # 静态资源（CSS、图片等）
│   └── includes/           # 缩写表等全局引用
└── site/                   # 构建输出（不纳入版本控制）
```

## 贡献指南

欢迎通过 Fork + Pull Request 的方式贡献内容！

1. **Fork** 本仓库
2. 创建你的特性分支 (`git checkout -b feature/add-content`)
3. 提交你的修改 (`git commit -m 'Add: 增加某课程笔记'`)
4. 推送到分支 (`git push origin feature/add-content`)
5. 创建一个 **Pull Request**

### 贡献原则

- 内容应准确可靠，有据可查
- 用语简洁明了，便于理解
- 遵守 CC BY-NC 4.0 开源协议
- 尊重知识产权，引用内容请注明出处

## 许可证

本项目采用 [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/) 进行许可。

**Copyright &copy; 2026 Noct-BUAA**
