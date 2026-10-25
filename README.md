<div align="center">

# 清砚学苑 · Qingyan Academy

**面向学生学习与教学运营的学习平台 —— 前端静态站点仓库**

Vue 3 · 纯静态部署 · GitHub Pages 自动发布 · Qoder Sites 就绪

![version](https://img.shields.io/badge/version-1.0.0-gold?style=flat-square)
![License](https://img.shields.io/badge/license-SEE%20LICENSE-important?style=flat-square)
![pages](https://img.shields.io/github/deployments/rwzdk/qingyan-academy/github-pages?label=pages&style=flat-square)

</div>

---

## 这是什么

本仓库存放 **清砚学苑** 学习平台的**前端静态构建产物**（`site/`），用于免费静态托管：

- **GitHub Pages**：push 到 `main` 自动发布，随时在线预览
- **Qoder Sites / Cloudflare Pages / Vercel** 等任意静态托管：下载 Release 中的压缩包直接上传即可

> 🌐 **在线预览**：[rwzdk.github.io/qingyan-academy](https://rwzdk.github.io/qingyan-academy/)

平台功能包括：课程学习、AI 互动课堂、学习空间（测评 / 编程练习 / 知识图谱 / 智能问答）、个性化学习画像、学习激励与后台管理等。本项目为**纯前端静态部署**：页面与静态资源完整可用，登录及数据接口依赖平台后端服务（见下方说明）。

## 版本亮点 v1.0.0

- AI 学情评估图标全面升级：LLM 输出中的 emoji 标记统一替换为 **Lucide 描边图标**（离线 Iconify 集合，与平台菜单图标同源），观感一致、跨平台稳定
- 「清砚」古典视觉：朱砂印章 favicon、宣纸底色、墨色排版

## 目录结构

```
qingyan-academy/
├── site/                  # 前端静态构建产物（部署此目录内容）
├── scripts/
│   └── update-site.md     # 从源项目重新构建并更新本仓库的流程
├── .github/workflows/     # GitHub Pages 自动发布
├── DEPLOY.md              # Qoder Sites 等平台部署指南
└── VERSION                # 当前站点版本
```

## 快速开始

### 部署到 Qoder Sites

见 [DEPLOY.md](./DEPLOY.md)，核心就两步：下载 [Release](https://github.com/rwzdk/qingyan-academy/releases) 里的 `qingyan-academy.zip` → 上传到 Qoder Sites。

### 从源项目更新站点

见 [scripts/update-site.md](./scripts/update-site.md)：在源项目构建 → 替换 `site/` → 提交推送，Pages 与 Release 同步更新。

## 关于后端服务

清砚学苑为前后端分离架构（Vue 3 前端 + FastAPI 后端）。本仓库只托管前端静态资源：

- 页面浏览、路由、静态视觉内容：直接可用
- 登录验证、课程数据、AI 能力等接口：由平台后端提供，需在部署时通过反向代理或后端地址配置接入

## 版本记录

| 版本 | 日期 | 说明 |
|---|---|---|
| v1.0.0 | 2026-10-25 | 首个站点版本；AI 评估图标 Lucide 化构建 |
