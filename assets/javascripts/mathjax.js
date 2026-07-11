// ============================================================
// MathJax 3 配置 — 兼容 arithmatex generic 模式
// ============================================================
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    macros: {
      // 反向 \longmapsto → 用 \shortmid 组合 \longleftarrow，避免 \mapstochar 兼容问题
      longmapsfrom: ["\\mathrel{\\shortmid\\mkern-6mu\\longleftarrow}"],
      // 整数区间括号：用标准字符组合，避免 Unicode ⟦⟧ 字体问题
      llbracket: ["\\mathopen{[\\mkern-3mu[}"],
      rrbracket: ["\\mathclose{]\\mkern-3mu]}]"],
      // 算子函数 — 独立定义，规避 \operatorname 与 brackets 的潜在相互作用
      card: ["\\operatorname{card}"],
      Cl: ["\\operatorname{Cl}"],
      id: ["\\operatorname{id}"],
      sgn: ["\\operatorname{sgn}"],
      RE: ["\\operatorname{Re}"],
      IM: ["\\operatorname{Im}"],
      arccot: ["\\operatorname{arccot}"],
      lcm: ["\\operatorname{lcm}"],
    },
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
  },
  startup: {
    typeset: true,
  },
};
