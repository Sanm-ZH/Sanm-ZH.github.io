#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

pnpm build

git push origin master:master
pnpx gh-pages -d docs/dist
echo -e '\033[32m 已部署成功至sanm-zh.github.io'

git remote set-url origin git@gitee.com:sanm-zh/sanm-zh.git
git push origin master:master
pnpx gh-pages -d docs/dist
echo -e '\033[32m 已部署成功至sanm-zh.gitee.io'
echo -e '\033[32m 如果不是gitee pro用户请手动更新gitee pages服务'

git remote set-url origin git@github.com:Sanm-ZH/Sanm-ZH.github.io.git
