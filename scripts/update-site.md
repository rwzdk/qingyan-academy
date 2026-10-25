# 从源项目更新站点

本仓库的 `site/` 来自清砚学苑主项目的前端构建产物。更新流程：

```bash
# 1. 在源项目构建（frontend/app 下）
pnpm install
pnpm build          # 产物在 frontend/app/dist

# 2. 替换本仓库的 site/ 目录（在本仓库根目录）
rm -rf site
cp -r <源项目路径>/frontend/app/dist site

# 3. 更新 VERSION 与 README 版本记录，然后提交发布
git add site VERSION README.md
git commit -m "release: 站点 vX.Y.Z（说明）"
git push

# 4. （可选）打 Release 附上新的 zip
powershell Compress-Archive -Path site\* -DestinationPath qingyan-academy.zip -Force
gh release create vX.Y.Z qingyan-academy.zip --title "站点 vX.Y.Z" --notes "更新说明"
```

注意：若构建时改动了 `@qc-student-core/*` 等 workspace 包，先在对应包执行
`pnpm --filter <包名> run build` 重建其 dist，否则生产构建取不到最新导出。
