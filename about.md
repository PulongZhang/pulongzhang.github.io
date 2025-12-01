---
layout: article
titles:
  # @start locale config
  en      : &EN       About
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  关于
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  zh-Hant : &ZH_HANT  關於
  zh-TW   : *ZH_HANT
  zh-HK   : *ZH_HANT
  ko      : &KO       소개
  ko-KR   : *KO
  fr      : &FR       À propos
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-about
---

## 自我介绍

你好，这里是张蒲龙！欢迎来到我的博客。

这里记录着我的思考与成长。博客中的文章以人工写作为主，偶尔借助AI进行润色和辅助创作，但我始终坚持用自己的语言表达真实的想法，而非简单地复制粘贴AI生成的内容。

## 文章写作规范

### 文件命名格式

文章文件必须放在 `_posts` 目录下，文件名格式为：

```
年-月-日-标题.md
```

示例：
- `2025-12-01-我的第一篇文章.md`
- `2025-12-15-学习笔记.md`

### 文章头部信息（Front Matter）

每篇文章开头必须包含以下格式：

```markdown
---
title: 文章标题
tags: 标签1 标签2
---
```

### 常用 Front Matter 字段

```markdown
---
title: 文章标题              # 必填
tags: 标签1 标签2           # 可选，多个标签用空格分隔
layout: article             # 可选，默认是 article
author: 张蒲龙              # 可选
show_author_profile: true   # 可选，是否显示作者信息
date: 2025-12-01 14:30:00   # 可选，手动指定日期时间
---
```

### 文章摘要分隔符

使用 `<!--more-->` 来分隔文章摘要和正文：
- 主页上只会显示 `<!--more-->` 之前的内容作为摘要
- 点击"阅读更多"后才能看到完整文章

### 完整示例

```markdown
---
title: 我的第一篇文章
tags: 生活 随笔
---

这是文章的开头部分，会显示在主页摘要中。

<!--more-->

这是文章的正文部分，只有点击进入文章后才能看到。

## 二级标题

可以使用 Markdown 语法：

- 列表项1
- 列表项2

**粗体文字** *斜体文字*

[链接文本](https://example.com)

代码块：
```python
print("Hello, World!")
```
```

### Markdown 语法支持

本博客支持完整的 Markdown 语法，包括：
- 标题（# ## ### 等）
- 列表（有序和无序）
- 链接和图片
- 代码块和行内代码
- 表格
- 引用块
- 数学公式（MathJax）
- 图表（mermaid, chartjs）
