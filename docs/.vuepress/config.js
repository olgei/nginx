module.exports = {
  title: "Nginx官方烹调书（中文）",
  description: "The Complete NGINX Cookbook",
  dest: "./dist",
  base: "/",
  sidebarDepth: 2,
  themeConfig: {
    repo: "olgei/nginx",
    docsBranch: "master",
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    editLinks: true,
    smoothScroll: true,
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      ["./book/COVER", "封面和版权"],
      ["./book/TABLE", "目录"],
      ["./book/PART-ONE", "安全与访问"],
      ["./book/PART-TWO", "安全与访问"],
      ["./book/PART-THREE", "部署与运维"],
      ["./book/ABOUT", "关于作者"]
    ]
  }
};
