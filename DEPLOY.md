# 清砚学苑前端站点部署指南

`site/` 目录（或 Release 中的 `qingyan-academy.zip`）为纯静态产物，放到任何静态托管即可运行，无需服务器环境变量。

## 方式一：Qoder Sites

1. 下载最新 Release 中的 `qingyan-academy.zip`（约 87MB）
2. 打开 Qoder → **Sites** → 新建站点
3. 上传 zip（或解压后拖入 `site/` 内**全部内容**，确保 `index.html` 位于站点根目录）
4. 发布后通过分配的 URL 访问

> 提示：部分平台对单次上传大小有限制（常见 100MB），若超出请分目录上传或改用 Git 接入方式。
> 需要登录的只有 Qoder 账号本身（注册/登录 Qoder 客户端即可，无需其他凭证）。

## 方式二：GitHub Pages（本仓库默认已开启）

push 到 `main` 分支后，`.github/workflows/deploy-pages.yml` 自动构建发布。

访问地址：`https://<用户名>.github.io/qingyan-academy/`

## 方式三：Cloudflare Pages / Vercel / Netlify

三者均支持「直接上传静态目录」或「连接 Git 仓库」：

- 直接上传：选择 `site/` 目录内容
- 连接 Git：本仓库无构建步骤（产物已提交），构建命令留空、输出目录填 `site`

## 部署后检查清单

- [ ] 打开站点能看到清砚学苑登录/首页（古典水墨风）
- [ ] 静态图片、字体、模型等资源加载正常（Network 面板无大量 404）
- [ ] 若需登录等接口功能：为站点配置到平台后端的反向代理（同源 `/student-api`）或后端 CORS 白名单
