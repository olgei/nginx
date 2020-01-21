# Nginx官方烹调书(The Complete NGINX Cookbook )中文翻译

## 原著由 Derek DeJonghe 编写

得知O'Reilly出版了《NGINX Cookbook》第二版，非常开心，Nginx在我们日常开发中扮演了重要角色，为了赶紧学起起来，特想到翻译此书，并希望帮到大家。

通过此书，将学到：

- 如何配置内容缓存，负载平衡，监视，高可用性（HA），Nginx实现集群服务器的负载均衡以及其他Nginx重要功能
- 如何保护你的应用程序：缓解DDoS攻击，基于HTTP的第7层攻击以及使用OpenID配置单点登录
- 如何在AWS，Azure和GCP中部署Nginx和Nginx Plus；以及Docker容器中
- 使用Nginx监控和诊断应用程序性能

此书的第二版，涵盖了新的开放源代码功能，例如gRPC支持，HTTP / 2之服务器推送以及用于集群环境的负载均衡算法，以及新的Nginx 功能，例如支持状态共享，新的Nginx 特性。API和键值存储等。

![The Complete NGINX Cookbook](https://blog.ahthw.com/wp-content/uploads/2019/12/ebk-ORM-NGINXCookbookmega-2019-ebk-tablet-350x500-1-1.png)

[官方网站](https://www.nginx.com/resources/library/complete-nginx-cookbook/) · [中文翻译主站](https://olgei.github.io/nginx/) · [下载电子版](https://blog.ahthw.com/wp-content/uploads/2019/12/NGINX_Cookbook_EN.pdf)

## 目录和章节

- [封面和版权]
- [目录]
- [第一部分：负载平衡和HTTP缓存]
- [第二部分：安全与访问]
- [第三部分：部署与运维]
- [关于作者]

## 贡献内容

如果你想参与这本书的共同创作，修改或添加内容，可以先 [Fork](https://github.com/olgei/nginx.git) 这本书的仓库，然后将修改的内容提交 [Pull requests](https://github.com/olgei/nginx/pulls) ；或者创建 [Issues](https://github.com/olgei/nginx/issues)。

Fork 后的仓库如何同步本仓库？

```bash
# 添加 upstream 源，只需执行一次
git remote add upstream git@github.com:olgei/nginx.git

# 拉取远程代码
git pull upstream master

# 提交修改
git add .
git commit

# 更新 fork 仓库
git push origin master
```

更多参考： [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)

注意，本书内容在 `/docs` 目录中， `/dist`是网站文件，通过脚本自动生成的。

## 生成电子书

这本书使用 [Vuepress](https://vuepress.vuejs.org/zh/) 撰写并生成[网站](https://olgei.github.io/nginx/)，请查看 `package.json` 中的 `scripts` 配置和 `/scripts` 目录中的脚本来了解这本书的构建和发布过程。

```bash
# 初始化 nodejs 依赖
npm install

# 安装 vuepress 插件
npm install -g vuepress

# 进入图书目录
cd docs

# 开始写作
vuepress dev .

# 构建静态文件
vuepress build .

# 查看写作内容
# visit http://localhost:8080

```

## 维护者

[@halldwang](https://github.com/halldwang). [@Jamesleons](https://github.com/jamesleons)

## 更新日志

[https://github.com/olgei/nginx/commits/master](https://github.com/olgei/nginx/commits/master)
