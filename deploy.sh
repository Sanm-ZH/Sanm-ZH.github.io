#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

pnpm build

git push origin master:master
pnpx gh-pages -d docs/dist

git remote set-url origin git@gitee.com:sanm-zh/sanm-zh.git
git push origin master:master
pnpx gh-pages -d docs/dist

git remote set-url origin git@github.com:Sanm-ZH/Sanm-ZH.github.io.git
