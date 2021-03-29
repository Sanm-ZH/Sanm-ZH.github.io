---
author: sanmzh
title: 链接下载文件
categories: [other]
tags: [gpg,git,shell]
date: 2021-03-29 14:37:44
---

<Boxx changeTime="30000"/>

### gpg 常用命令
```sh
# 生成 gpg 密钥
gpg --gen-key

# 生成吊销证书
gpg --gen-revoke xxxxxxxx

# 列出所有 gpg 公钥
gpg --list-keys

# 列出所有 gpg 私钥
gpg --list-secret-keys

# 删除 gpg 公钥
gpg --delete-keys xxxxxxxx

# 删除 gpg 私钥
gpg --delete-secret-keys xxxxxxxx

# 输出 gpg 公钥 ascii
gpg --armor --output public.key --export xxxxxxxx

# 输出 gpg 私钥 ascii
gpg --armor --output private.key --export-secret-keys xxxxxxxx

# 上传 gpg 公钥
gpg --send-keys xxxxxxxx --keyserver

# 查看 gpg 公钥指纹
gpg --fingerprint xxxxxxxx

# 导入 gpg 密钥(导入私钥时会自动导入公钥)
gpg --import private.key

# 加密文件
gpg --recipient xxxxxxxx --output encrypt.file --encrypt origin.file

# 解密文件
gpg --output origin.file --decrypt encrypt.file

# 文件签名，生成二进制的 gpg 文件
gpg --sign file.txt

# 文件签名，生成文本末尾追加 ASCII 签名的 asc 文件
gpg --clearsign file.txt

# 文件签名，生成二进制的 sig 文件
gpg --detach-sign file.txt

# 文件签名，生成 ASCII 格式的 asc 文件
gpg --detach-sign file.txt

# 签名并加密
gpg --local-user xxxxxxxx --recipient xxxxxxxx --armor --sign --encrypt file.txt

# 验证签名
gpg --verify file.txt.asc file.txt

# 延期
# gpg 也是使用主密钥和子密钥结合加密的
# pub 和 sub 分别是主公钥和子公钥
# sec 和 ssb 分别是主私钥和子私钥
# 如果有多个子密钥，会显示更多的 sub 和 ssb
# 一个主密钥可以绑定多个子密钥，平时加密解密使用的都是子密钥
gpg --edit-key xxxxxxxx 或者邮箱名 xxxx@gmial.com
sec  rsa4096/xxxxxxxxx
created: 2021-1-17  expires: 2023-01-18  usage: SCA      #因为在 客户端更改了主密钥日期
trust: ultimate      validity: ultimate
ssb  rsa4096/xxxxxx
created: 2021-1-17  expired: 2023-01-18  usage: E
[ultimate] (1). cc lanbo <xxxx@gmial.com>

# 指定子密钥，不指定则为主密钥
gpg> key 1
sec  rsa4096/xxxxxxxxx
created: 2021-1-17  expires: 2023-01-18  usage: SCA
trust: ultimate      validity: ultimate
ssb* rsa4096/xxxxxx
created: 2021-1-17  expired: 2023-01-18  usage: E
[ultimate] (1). cc lanbo <xxxx@gmial.com>


# 更新过期时间
gpg> expire
#将要变更子密钥的过期时间。
Changing expiration time for a subkey.
    Please specify how long the key should be valid.
0 = key does not expire
<n>  = key expires in n days
<n>w = key expires in n weeks
<n>m = key expires in n months
<n>y = key expires in n years
Key expires at 06/14/21 16:04:49 中国标准时间
Is this correct? (y/N) y

sec  rsa4096/xxxxxxxxx
created: 2021-1-17  expires: 2023-01-18  usage: SCA
trust: ultimate      validity: ultimate
ssb* rsa4096/xxxxxx
created: 2021-1-17  expires: 2023-01-18  usage: E
[ultimate] (1). cc lanbo <xxxx@gmial.com>

gpg> save
```