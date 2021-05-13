---
author: sanmzh
title: Linux命令 find
categories: [bash]
tags: [linux,bash]
date: 2021-05-13 15:22:44
---

<Boxx changeTime="30000"/>

## find命令 高级查找

`find . -name *lin*.` 
- 代表在当前目录找-name 表示匹配文件名/文件夹名，`*lin*` 用通配符搜索含有lin的文件或是文件夹


`find . -iname *lin*.` 
- 代表在当前目录找 `-i` 忽略大小写查找 `-name` 表示匹配文件名/文件夹名 `*lin*` 用通配符搜索含有 `lin` 的文件或是文件夹


`find / -name *.conf/` 
- 代表根目录查找(就是全盘查找) `*.conf` 代表搜索后缀会 `.conf` 的文件


`find /opt -name .oh-my-zsh/opt` 
- 代表在根目录下 `/opt` 目录下查找 `.oh-my-zsh` 代表搜索的是隐藏文件/文件夹名字为 `oh-my-zsh`


`find /opt -type f -iname .oh-my-zsh/opt` 
- 代表目录名 `-type f` 代表只查找文件，不返回文件夹 `.oh-my-zsh` 代表搜索的是隐藏文件名字为 `oh-my-zsh`


`find /opt -type d -iname .oh-my-zsh/opt` 
- 代表目录名 `-type d` 代表只找目录 `.oh-my-zsh` 代表搜索的是隐藏文件夹名字为`oh-my-zsh`


`find . -name "lin*" -exec ls -l {} \;lin*` 
- 正则表达式搜索 `lin` 开头的文件，然后用其搜索后的结果集再执行 `ls -l` 的命令(这个命令可变，其他命令也可以)其中 `-exec 和 {} ;` 都是固定格式


`find /opt -type f -size +800M  -print0 | xargs -0 du -h | sort -nr` 
- 查找 `/opt` 目录下大于 `800 M` 的文件


`find / -name "*tower*" -exec rm {} \;` 
- 找到文件并执行删除命令


`find / -name "*tower*" -exec mv {} /opt \;` 
- 找到文件并移到 `opt` 目录


`find . -name "*" |xargs grep "youmeek"` 
- 递归查找当前文件夹下所有文件内容中包含 `youmeek` 的文件


`find . -size 0 | xargs rm -f &` 
- 删除当前目录下文件大小为 `0` 的文件


`du -hm --max-depth=2 | sort -nr | head -12` 
- 找出系统中占用容量最大的前 `12` 个目录